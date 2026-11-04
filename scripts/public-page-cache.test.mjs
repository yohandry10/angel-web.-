import test from "node:test";
import assert from "node:assert/strict";
import { publicPageCacheHeaders } from "../server/public-page-cache.js";

function policy(path = "/", init = {}, status = 200, headers = {}) {
  return publicPageCacheHeaders(
    new Request("https://www.nextelco.cloud" + path, init),
    new Response(null, {
      status,
      headers: { "content-type": "text/html; charset=utf-8", ...headers },
    }),
  );
}

test("only public documents get short CDN caching while browsers revalidate", () => {
  for (const path of [
    "/",
    "/erp",
    "/portafolio-web",
    "/experiencia",
    "/aviso-legal",
    "/privacidad",
  ]) {
    for (const method of ["GET", "HEAD"]) {
      const headers = policy(path, { method });
      assert.equal(headers["Cache-Control"], "public, max-age=0, must-revalidate");
      assert.match(headers["Vercel-CDN-Cache-Control"], /s-maxage=300/);
    }
  }
});

test("API, query requests, errors and unknown routes stay outside document cache", () => {
  for (const path of [
    "/api/contact",
    "/api/server",
    "/missing",
    "/erp?preview=true",
    "/?_serverFn=1",
  ]) {
    assert.deepEqual(policy(path), {});
  }
  assert.deepEqual(policy("/erp", { method: "POST" }), {});
  for (const status of [302, 404, 500]) assert.deepEqual(policy("/erp", {}, status), {});
  assert.deepEqual(policy("/erp", {}, 200, { "content-type": "application/json" }), {});
});

test("personalized and explicitly noncacheable responses are never opted in", () => {
  for (const headers of [
    { cookie: "session=example" },
    { authorization: "Bearer example" },
    { range: "bytes=0-9" },
  ]) {
    assert.deepEqual(policy("/", { headers }), {});
  }
  for (const headers of [
    { "set-cookie": "session=example" },
    { "cache-control": "private" },
    { "cache-control": "no-store" },
    { "cache-control": "no-cache" },
    { vary: "*" },
  ]) {
    assert.deepEqual(policy("/", {}, 200, headers), {});
  }
});
