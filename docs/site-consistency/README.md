# Site consistency review — 3 November 2026

## Scope and final rules

Reviewed Home, ERP, Portafolio web, Experiencia, Aviso legal and Privacidad.

- One primary action/accent blue: `#0050d8`; `#0048cf` is its interaction state.
- Shared paper `#fbfcff`, neutral panel `#f0f2f5`, ink `#18202b`, secondary text `#565c66`, border `#d3d9e2`.
- Photographic artwork retains its lighting and material colors. ERP demonstration approval states retain their functional green.
- Marketing section titles use the shared `clamp(34px, 4vw, 56px)` scale. Legal article subsections use 22px; compact interface headings remain subordinate to the section title.
- Section spacing is 96px on desktop and 64px on mobile. A shared content edge aligns headings, bodies, navigation and footer.
- The six routes render the same `SiteFooter`, with corporate navigation, logo, copyright and legal links. Contact details remain in the preceding contact section; existing corporate and ERP contact numbers were preserved.
- ERP cases use a neutral section, questions use paper, contact uses brand blue, and the footer returns to paper. Home delivery and contact also have distinct surfaces.
- Shared `data-reveal` entrances remain active; reduced motion and visible-by-default content are preserved. Experience now uses the same reveal mechanism.

## Verification

`responsive-checks.json` records the rendered DOM of all six routes at 320, 390, 768, 1024, 1440 and 1920 CSS pixels. Each page had one H1, no skipped heading levels, one common footer, no horizontal page overflow and no text ranges outside the viewport. All sections were measured, including those below the fold.

The contrast check compares computed opaque text and nearest opaque CSS backgrounds, using WCAG luminance thresholds. It excludes decorative SVGs and text embedded in the hero artwork. It is a targeted check, not an exhaustive accessibility certification. The ERP dark variant was checked after its color transition settled.

`interaction-checks.json` records four module groups, the nine FAQ controls, four operation tabs, portfolio category counts, native project dialog/Escape/focus return, mobile menus at 320px and the bounded contact dialog. No contact form or WhatsApp message was sent.

Visual checks covered mobile and desktop: shared navigation and footers, Home research and delivery, ERP modules/questions/cases, portfolio services/projects, and the supporting pages. TypeScript, targeted ESLint and the client/SSR build were run. Browser viewport testing does not replace testing on physical iOS/Android devices.
