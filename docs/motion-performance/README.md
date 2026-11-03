# Motion and navigation verification — 2026-11-03

Baseline: `5af315e29aee9c333d4421b7a0da2eb3afc8e965`, production Chrome. Changes checked against the local Vite app using the same browser.

## Observed improvements

- The ERP logo/back arrow now uses internal routing. ERP → Home produced **zero Document requests**, compared with one full page request on the baseline. The router also preloads links on intent and restores route positions immediately.
- Entrances are authored by content: headings reveal over 720 ms, images move and settle over 720 ms, and content blocks enter over 560 ms. Elements sharing a row stagger by 60 ms, capped at 240 ms. Vertically stacked mobile elements enter independently.
- `entry-samples.json` records computed intermediate opacity and transforms, including the stagger between four process steps. `mobile-entry.json` confirms an active entrance at 390 px.
- Chrome reports reduced motion on this computer. The default reduced mode keeps a 320 ms opacity transition without displacement or clipping. The shared footer now offers “Activar animaciones” / “Reducir animaciones”; the choice is saved for the site. `reduced-motion.json` confirms that reduced targets have no transform or clip.
- The custom pointer now schedules a frame only when it moves, instead of maintaining a continuous animation-frame loop while idle. Native cursor visibility is retained until the custom cursor mounts.

## Font loading

- Geist now uses one 63,312-byte variable WOFF2 instead of that file plus four static WOFF2 files (120,952 extra bytes).
- JetBrains Mono is hosted locally with its OFL license, removing the external Google Fonts stylesheet dependency.
- The portfolio's Anton font is served as WOFF2: 57,568 bytes instead of the 170,812-byte TTF, a 66.3% asset-size reduction. Glyphs and font identity are preserved.

These are request and asset-size improvements, not a claimed Lighthouse, LCP or INP score. Local development timings and production timings are not directly comparable.

## Responsive and functional checks

- Home, ERP and Portfolio at 320, 390, 430, 480, 768 and 1440 px: 18 route/viewport combinations, no horizontal overflow, readable initial hero, shared motion control present.
- The new ERP back arrow remains visible at every checked width. The compact navbar moves the demo action into the mobile menu where space is limited.
- Content starts visible before JavaScript; only offscreen targets are prepared. Focused content is immediately revealed. Filters and keyed content can register new targets, and listeners/observers/animations are cleaned up on unmount.
- Local console: no errors in the checked session.
- TypeScript, ESLint on changed TypeScript files, and production client/SSR build passed.

Evidence is from desktop Chrome with viewport emulation, not physical mobile hardware. Existing palette, content, projects, questions and artwork are retained.
