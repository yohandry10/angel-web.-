import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = ts.transpileModule(
  readFileSync(new URL("../src/lib/analytics.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;

function fixture({ stored = null, storageBlocked = false } = {}) {
  const listeners = new Set();
  const scripts = [];
  const exports = {};
  class Element {
    constructor(href) {
      this.href = href;
    }
    closest() {
      return this;
    }
  }
  const window = {
    location: {
      href: "https://www.nextelco.cloud/erp?gclid=example",
      pathname: "/erp",
    },
    localStorage: {
      getItem() {
        if (storageBlocked) throw new Error("Storage unavailable");
        return stored;
      },
      setItem(_key, value) {
        if (storageBlocked) throw new Error("Storage unavailable");
        stored = value;
      },
    },
  };
  const document = {
    getElementById: (id) => scripts.find((script) => script.id === id),
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
    addEventListener: (_type, listener) => listeners.add(listener),
    removeEventListener: (_type, listener) => listeners.delete(listener),
  };
  vm.runInNewContext(source, { exports, window, document, Element, URL, Date });
  return {
    api: exports,
    window,
    scripts,
    click(href, defaultPrevented = false) {
      for (const listener of listeners) {
        listener({ target: new Element(href), defaultPrevented });
      }
    },
    events: () => (window.dataLayer ?? []).filter((entry) => entry[0] === "event"),
  };
}

test("no tag or contact event is sent before consent or after rejection", () => {
  const f = fixture();
  f.api.startContactTracking();
  f.click("https://wa.me/51904963051");
  f.api.trackLead();
  assert.equal(f.scripts.length, 0);
  assert.equal(f.events().length, 0);
  f.api.setConsent("granted");
  f.api.setConsent("denied");
  f.click("mailto:operaciones@nextelco.cloud");
  f.api.trackLead();
  assert.equal(f.events().length, 0);
  assert.equal(f.window.dataLayer.at(-1)[2].analytics_storage, "denied");
});

test("contact methods are distinct and do not leak destination or message data", () => {
  const f = fixture();
  f.api.setConsent("granted");
  const cleanup = f.api.startContactTracking();
  f.click("https://wa.me/51904963051?text=private-message");
  f.click("https://api.whatsapp.com/send?phone=51904963051&text=private-message");
  f.click("tel:+17862244098");
  f.click("mailto:operaciones@nextelco.cloud?subject=private-message");
  assert.deepEqual(
    Array.from(f.events(), (entry) => entry[1]),
    ["whatsapp_click", "whatsapp_click", "phone_click", "email_click"],
  );
  for (const [, , params] of f.events()) {
    assert.equal(params.page_path, "/erp");
    assert.equal(params.transport_type, "beacon");
  }
  assert.doesNotMatch(
    JSON.stringify(f.events()),
    /51904963051|17862244098|private-message|gclid|@/,
  );
  cleanup();
  f.click("tel:+17862244098");
  assert.equal(f.events().length, 4);
});

test("ordinary links, lookalike domains and canceled clicks are ignored", () => {
  const f = fixture({ stored: "granted" });
  f.api.applyConsent("granted");
  f.api.startContactTracking();
  for (const href of [
    "/erp",
    "https://example.com/wa.me",
    "https://wa.me.example.com/51904963051",
    "http://wa.me/51904963051",
  ])
    f.click(href);
  f.click("https://wa.me/51904963051", true);
  assert.equal(f.events().length, 0);
});

test("consent works without localStorage and repeated initialization sends one config", () => {
  const f = fixture({ storageBlocked: true });
  f.api.setConsent("granted");
  f.api.applyConsent("granted");
  f.api.trackLead();
  assert.equal(f.api.getConsent(), "granted");
  assert.equal(f.scripts.length, 1);
  assert.equal(f.window.dataLayer.filter((entry) => entry[0] === "config").length, 1);
  assert.equal(f.events()[0][1], "generate_lead");
  const defaults = f.window.dataLayer.find((entry) => entry[1] === "default")[2];
  assert.equal(defaults.ad_storage, "denied");
  assert.equal(defaults.ad_user_data, "denied");
  assert.equal(defaults.ad_personalization, "denied");
});
