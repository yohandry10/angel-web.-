# Public document delivery and crawlable content — 2026-11-04

## Changes

- Only anonymous GET/HEAD HTML responses for the six known marketing routes opt into Vercel's CDN cache: five minutes fresh, one hour stale while revalidating. Browsers revalidate instead of retaining old HTML. Requests with query parameters, cookies, authorization or ranges, APIs, unknown routes, errors, JSON responses, Set-Cookie, private/no-store/no-cache responses and Vary:\* do not opt in.
- The actual production SSR handler was exercised locally: Home/ERP returned the intended CDN header and an unknown route returned 404 without it. Three Node test groups cover eligibility and exclusions. Production cache hits must be checked after deployment; configuration alone is not proof of a hit.
- Eighteen portfolio preview images now offer 480, 960 and original 1440 px sources. Card widths are declared with `sizes`; original full images remain in project details. The previews retain lazy loading, aspect ratio and alt text.
- All nine ERP questions and all sixteen module descriptions now exist in the initial server HTML. The same topic and area buttons use native `hidden` attributes to show one set at a time, with individual controlled-region IDs. No descriptions or claims were rewritten.
- The portfolio's eight visible services have a linked Service/OfferCatalog schema derived from the displayed service list. Legal routes now have connected WebPage schemas too. No ratings, prices or search ranking claims were added.

## Measurements

| Preview source set (18 images) |     Bytes | Reduction from originals |
| ------------------------------ | --------: | -----------------------: |
| Original 1440 px               | 1,589,588 |                        — |
| 960 px                         |   767,172 |                    51.7% |
| 480 px                         |   299,370 |                    81.2% |

These are sums of alternative assets, not a claim that every visitor downloads the same set. Browsers choose by rendered width, pixel density and their own loading decisions. Original 1440 px images are still available for high-density screens and details.

Before delivery caching, eight production document requests all reported `x-vercel-cache: MISS`. Warm samples took 395–450 ms to response headers from the test machine, including network/TLS; the first Home request took 1582 ms. These are a small diagnostic sample, not field Core Web Vitals or a controlled latency benchmark.

Main client JavaScript changes from 337.44 to 338.13 KB (111.05 to 111.18 KB gzip), reflecting added metadata and image-selection markup. This pass targets document delivery, responsive image bytes and server-visible content, rather than claiming another JavaScript size reduction.

## Validation

- TypeScript, changed-file ESLint, production client/server build and cache-policy tests pass.
- Expanded six-route SSR checks verify a unique title/H1/canonical, metadata, connected page schemas, all sixteen modules, all nine FAQ questions, eighteen responsive previews and the eight-service catalog.
- A generated 960 px preview was visually inspected. Full-page browser interaction confirmation remains unavailable due to the existing Chrome integration failure; no new device testing is claimed.
- Search Console still has no Google account connected to OpenSEO. Missing first-party data is not reported as zero traffic or a Google indexing failure.

Implementation follows [Vercel cache-control documentation](https://vercel.com/docs/caching/cache-control-headers). This policy covers build-owned public marketing content only; it must be revisited if these pages gain server-rendered personalization.
