# Mobile layout, loading and SEO — 2026-11-04

Baseline: commit `30631a4`, production at https://www.nextelco.cloud.

## Shipped changes

- ERP artwork now scales from the page width. Copy and art stack at 1200 px and below, so viewport height cannot push the monitor across the heading. The back arrow is retained.
- Phone heroes use larger type, a clear primary action and shared 20 px content edges. Portfolio puts its title and project action before the keyboard image. All 18 projects and all eight services remain available.
- Phone process steps use a compact timeline; services use readable rows; project filters and FAQ topics use native horizontal scrolling. Inputs remain 16 px, safe areas are supported, and the contact dialog keeps focus and restores it when closed.
- The two transparent brand images are served at 768 × 256 in lossless WebP after high-quality downsampling. Combined size falls from **1,001,646 to 107,650 bytes**, an **89.3% reduction**. Original PNGs are retained. Resolution remains above 3× the largest displayed navbar logo.
- Contact validation and form code load on demand, with pointer/focus intent preloading and a closable loading state. The production ContactModal chunk is 59.34 KB / 14.50 KB gzip, deferred until needed. Route preloading and section entrances are retained.
- Content-hashed JS/CSS have immutable caching; mutable media and fonts use one-day caching. HTML and contact API responses are unaffected.
- All six routes share complete search/social metadata. Home and Experience titles and Home/ERP descriptions were shortened. Organization logo and identity, connected page schemas, and a server-rendered 18-project list were added. Canonicals, sitemap and robots remain consistent.

## Evidence

- `layout-checks.json`: 27 route/viewport combinations across 320, 390, 430, 768, 950, 1100, 1280 and 1440 px, including tall and landscape layouts. No document overflow or copy/monitor intersection was found. One 320 px metric number was compressed by flexbox; its shrink behavior was corrected afterward.
- Browser screenshots were inspected for the phone heroes. The additional confirmation and interactive form/filter checks were interrupted by the browser integration. The last flexbox adjustment therefore has source verification only. These are Chromium viewport checks, not physical-phone or Safari tests.
- `seo-checks.json`: raw HTTP/SSR assertions for six 200 pages, unique titles, one H1 and canonical per page, full Open Graph/Twitter fields, parseable JSON-LD, matching project anchors, sitemap entries and a real 404 for unknown URLs.
- TypeScript, ESLint for the changed JavaScript/TypeScript files and the production client/SSR build pass. Repository-wide ESLint also reports pre-existing CRLF/formatting errors in untouched files; these are outside this change. The browser limitation is not represented as a completed interaction test.

## OpenSEO baseline

The official OpenSEO plugin was installed and authenticated. Project: NEXTELCO, Peru / Spanish. Business context was confirmed by the user. Audit `ff3566c2-cda2-48e4-8936-664038f5321c` crawled six pages and completed 12 Lighthouse tests. It found four informational issues: two long descriptions and two long titles; no critical or warning issues were reported.

The baseline mobile Lighthouse performance scores were Home 98, ERP 98 and Portfolio 96. Reported LCP was 2.1, 2.0 and 2.5 seconds respectively, with CLS 0.000. All desktop scores were 100. These are single lab runs, not field Core Web Vitals or a ranking forecast.

Search Console was not connected, and the provider returned no ranked-keyword rows for the domain. Neither means the site has no traffic. Research and the final report remain private in OpenSEO; this folder contains only public-site technical evidence.
