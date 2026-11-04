import assert from "node:assert/strict";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const base = process.argv[2] || "http://127.0.0.1:5173";
const output = process.argv[3] || "docs/mobile-seo/seo-checks.json";
const paths = ["/", "/erp", "/portafolio-web", "/experiencia", "/aviso-legal", "/privacidad"];
const results = [];
for (const path of paths) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const titles = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)];
  assert.equal(titles.length, 1, `${path}: one title`);
  assert.ok(titles[0][1].length >= 20 && titles[0][1].length <= 60, `${path}: concise title`);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/gi)].length, 1, `${path}: one H1 in SSR HTML`);
  const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map(([tag]) => {
    const attrs = {};
    for (const [, name, value] of tag.matchAll(/([\w:-]+)="([^"]*)"/g)) attrs[name] = value;
    return attrs;
  });
  const descriptions = tags.filter((tag) => tag.name === "description");
  assert.equal(descriptions.length, 1, `${path}: one description`);
  assert.ok(
    descriptions[0].content.length >= 70 && descriptions[0].content.length <= 160,
    `${path}: description length`,
  );
  const canonical = tags.filter((tag) => tag.rel === "canonical");
  assert.equal(canonical.length, 1, `${path}: one canonical`);
  assert.equal(canonical[0].href, "https://www.nextelco.cloud" + path);
  for (const property of ["og:title", "og:description", "og:url", "og:image", "og:image:alt"]) {
    assert.equal(tags.filter((tag) => tag.property === property).length, 1, `${path}: ${property}`);
  }
  for (const name of [
    "twitter:title",
    "twitter:description",
    "twitter:image",
    "twitter:image:alt",
  ]) {
    assert.equal(tags.filter((tag) => tag.name === name).length, 1, `${path}: ${name}`);
  }
  const schemas = [
    ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
  ].map(([, json]) => JSON.parse(json));
  assert.ok(schemas.length > 0, `${path}: valid structured data in SSR HTML`);
  assert.ok(
    schemas.some((schema) => ["WebPage", "CollectionPage"].includes(schema["@type"])),
    `${path}: connected page schema`,
  );
  if (path === "/erp") {
    assert.equal(
      [...html.matchAll(/id="erp-faq-question-\d+"/g)].length,
      9,
      "all nine FAQ questions are server rendered",
    );
    const moduleLists = [...html.matchAll(/<dl class="erp-module-list">([\s\S]*?)<\/dl>/g)];
    assert.equal(moduleLists.length, 4, "all four module areas are server rendered");
    assert.equal(
      moduleLists.flatMap(([, list]) => [...list.matchAll(/<dt>/g)]).length,
      16,
      "all sixteen modules have server-rendered descriptions",
    );
  }
  if (path === "/portafolio-web") {
    const list = schemas.find((schema) => schema["@type"] === "ItemList");
    const service = schemas.find((schema) => schema["@type"] === "Service");
    assert.equal(
      service.hasOfferCatalog.itemListElement.length,
      8,
      "schema covers the eight visible services",
    );
    assert.equal(
      [...html.matchAll(/srcSet="[^"]*responsive\//g)].length,
      18,
      "all project previews offer responsive sources",
    );
    assert.equal(list.itemListElement.length, 18);
    for (const entry of list.itemListElement)
      assert.ok(html.includes(`id="${entry.item.url.split("#")[1]}"`));
  }
  results.push({
    path,
    status: response.status,
    title: titles[0][1],
    descriptionLength: descriptions[0].content.length,
    canonical: canonical[0].href,
    schemas: schemas.length,
  });
}
assert.equal(new Set(results.map((result) => result.title)).size, paths.length, "unique titles");
const missing = await fetch(base + "/seo-check-page-that-does-not-exist");
assert.equal(missing.status, 404, "unknown URLs return a real 404");
const robots = await (await fetch(base + "/robots.txt")).text();
assert.ok(robots.includes("Sitemap: https://www.nextelco.cloud/sitemap.xml"));
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
for (const path of paths)
  assert.ok(sitemap.includes(`<loc>https://www.nextelco.cloud${path}</loc>`));
await mkdir(dirname(output), { recursive: true });
await writeFile(
  output,
  JSON.stringify({ base, results, missingStatus: missing.status }, null, 2) + "\n",
);
console.log(JSON.stringify({ pages: results.length, passed: true, results }, null, 2));
