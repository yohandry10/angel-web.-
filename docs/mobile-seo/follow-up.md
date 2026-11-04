# Mobile and performance follow-up — 2026-11-04

The earlier mobile overhaul is in `2b34277`; the section entrances and navigation are in `30631a4`. This follow-up removes the unused React Query provider/client from the root and router. No application query or mutation uses them. React Query packages remain installed for future use, but are no longer imported into the application.

The production main JavaScript bundle falls from 362.19 KB to 337.44 KB (Vite gzip: 118.24 KB to 111.05 KB). This reduces initial code transfer and parsing on every route; it is not a measured wall-clock speed improvement or a Lighthouse score claim.

The ERP chart now uses `--brand-blue` for both series, with opacity distinguishing the comparison series, and `--site-line` for rules. It no longer introduces separate hard-coded blue hues. The viewport allows Android's software keyboard to resize content without disabling zoom.

## Prior requests cross-check

| Request                                     | Current implementation                                                                             | Verification                                                                       |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Remove domain/email over the hero hands     | No hero contact strip in `NextelcoHero`                                                            | Source review                                                                      |
| Sentence-case headings                      | “Potentes / sistemas.” and “Tu empresa. / En control.”                                             | Source review                                                                      |
| Stable navbar and brand                     | Shared horizontal BrandLogo and nav sizing                                                         | Prior layout evidence; no new visual confirmation                                  |
| Distinguish operation and delivery sections | Brand-blue operations followed by paper delivery surface                                           | CSS/source review                                                                  |
| Restore entrance motion                     | `useSectionReveals`, full/reduced motion setting                                                   | Prior implementation and source review                                             |
| Portfolio identity and Home arrow           | Portfolio nav logo and ArrowLeft Link                                                              | Source review                                                                      |
| ERP Home arrow                              | `erp-home-link` with ArrowLeft and logo                                                            | Source review                                                                      |
| Organize ERP modules/questions              | Four module groups and nine questions in three topics                                              | Source review                                                                      |
| Match all footers                           | Shared `SiteFooter`                                                                                | Source review                                                                      |
| Fix intermediate-width ERP overlap          | Width-driven art, stacked copy/art through 1200 px                                                 | Prior 27-case geometry evidence; no new screenshot                                 |
| Mobile overhaul                             | Shared edges/touch sizes; reordered portfolio; readable service rows                               | Prior screenshot inspection and current source review                              |
| Faster loading                              | Optimized logos/fonts, deferred form, route preloading, caching; unused root query runtime removed | Build sizes, earlier public headers and SSR checks                                 |
| SEO                                         | Complete metadata/schema, coherent sitemap/robots                                                  | Previous final OpenSEO audit: 6 pages, 0 issues; current six-route SSR checks pass |

TypeScript, ESLint on changed files and production client/SSR build pass. The Chrome integration still fails before it can read or capture the page. No new screenshots, final interactive form/filter checks or physical-phone tests are claimed. The user's Search Console screenshot shows access to the Google property, while OpenSEO's account listing remains empty; opening Google Search Console does not itself authorize OpenSEO access.
