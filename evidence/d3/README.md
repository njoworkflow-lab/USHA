# Section 03 implementation and evidence

Changes are uncommitted on `d3-section-03`. No commit, push, pull request, merge, publication or deployment was made. `BRIEF.md` remains outside the change set.

The three bands retain the original galaxy node and fixed scenarios, add the chapter rail and live stage, and compare seven localized report screens with one movable seam. EN and AR use noon/AED; RU uses Wildberries/₽. Every report window in both worlds carries an Example chip. The live opener supports the CTA, satellites, deep and same-page `#ask`; `#x3-live` only scrolls. `USHA_X3.ping()` and `set()` are exposed.

The comparison uses transformed layers, cached geometry, pointer handling, RTL-aware keys, a one-time teaser and shared video controls. Films load lazily, keep separate playback times, pause off screen, and use the shared duck hook. The service worker bypasses videos and Range requests, and all media URLs carry content hashes.

## Browser matrix

Real Chromium through the prescribed file bridge; built disposable sites `/tmp/d3-before`, `/tmp/d3-final` and `/tmp/d3-verified`. Desktop used `?skip`; phones used `wake`. Live openers used `jsclick`. Live API responses were mocked for gate-only checks; no consultation was submitted.

| Language | Viewport | 0 / 50 / 100 seam | Seven panels, both worlds | Overflow / clipped text | Direction | Live-stage CSS loops |
|---|---|---|---|---|---|---|
| EN | 390 × 844 | checked | checked | none | LTR | 1 |
| RU | 390 × 844 | checked | checked | none after calendar adjustment | LTR | 1 |
| AR | 390 × 844 | checked | checked | none | RTL | 1 |
| EN | 1440 × 1000 | checked | checked | none | LTR | 13 |
| RU | 1440 × 1000 | checked | checked | none | LTR | 13 |
| AR | 1440 × 1000 | checked | checked | none | RTL | 13 |

The 1040 px two-column layout also passed in EN/RU/AR, with no overflow or clipped panels. The desk runs two section animations while visible. No particles were visible behind the reports. The original `#talk .side` node survived re-render and the EN→RU language switch. Its desktop centre matched the live frame's centre; on phones its bounds sit inside the live frame.

All eight key cases (arrows, shifted arrows, PageUp/PageDown, Home/End) passed in every matrix view. Real ArrowLeft presses gave 45 in EN/RU and 55 in AR from 50. Real phone switch clicks reached both endpoints without the existing hint covering them. A real mouse press jumped to 80. Mouse/touch drag and vertical-scroll discrimination were checked with synthetic PointerEvents in Chromium; native touch swipes are not available through this bridge.

Preview, sound, film crossing, mute, pause, replay, off-screen pause, hidden-document handling, live-modal duck calls, and game interruption were checked through controller/native media state. A complete 28.361-second film run ended naturally, paused, showed Replay and released `x3-video`; replay re-acquired it. At most one video played. Reduced motion, Save-Data and 3g paths were exercised by overriding browser preference getters and reading state: previews stopped, reduced-motion switching was immediate, and Save-Data displayed the selected file's size.

Final browser passes had no page exceptions or failed asset requests. Chromium's pre-existing vibration-policy console message remains, also present in baseline screenshots/tests. One earlier navigation run cancelled a media request; fresh playback checks passed without failed requests.

## Build and HTTP checks

- Node.js 22.22.0. Two checkout builds with no overrides produced identical hashes for all 50 generated files.
- All 11 sitemap pages returned HTTP 200 with the expected language, canonical link, H1 and JSON-LD.
- `robots.txt`, `llms.txt`, `llms-full.txt` and `sw.js` returned HTTP 200.
- Strict Arabic build passed; 14 Example chips per landing page; no ₽ in EN/AR report markup.
- Service-worker dispatch tests confirmed videos and Range requests bypass caching.
- Duck tests confirmed simultaneous reasons keep music ducked until the final reason releases, and respect the visitor's sound-off setting. First-click enable paths use the duck set.
- JavaScript syntax checks and `git diff --check` passed.

## Screenshots

Eight JPEG contact sheets, each below 200 KB. The after sheets include both worlds for every screen, the midpoint, fixed scenarios, live stage and media screen. Phone sheets use columns Without / With / section overview. Desktop sheets use paired rows for the three report rows, followed by the scenario/live bands and midpoint.

| Before | After EN | After RU | After AR |
|---|---|---|---|
| [390](before-390.jpg) | [390](after-en-390.jpg) | [390](after-ru-390.jpg) | [390](after-ar-390.jpg) |
| [1440](before-1440.jpg) | [1440](after-en-1440.jpg) | [1440](after-ru-1440.jpg) | [1440](after-ar-1440.jpg) |

Full-size PNGs and raw results remain in the bridge `res/` directory under these request IDs: `d3-before-{en,ru,ar}-{390,1440}`, `d3-final-matrix-fixed-{390,1440}`, `d3-calendar-end-final`, `d3-en-desktop-final`, `d3-latest-{390,1440}`, `d3-final-views-{390,1440}`, `d3-midwidth-1040`, and `d3-game-interruption`. The contact sheets use the corrected final scenario/live captures and calendar captures. See [verification.json](verification.json) for the compact result record.

## Media and replacement

Unique deployed media total: **9,266,185 bytes (9.27 MB)**. The builder also retains identical source copies in `tools/seo/media/`.

| File | Bytes | Duration |
|---|---:|---:|
| with-usha-480.mp4 | 2,374,716 | 40.507 s |
| without-usha-480.mp4 | 1,509,553 | 28.362 s |
| with-usha-480.webm | 3,231,901 | 40.508 s |
| without-usha-480.webm | 2,116,755 | 28.361 s |
| with-usha.webp | 16,926 | poster at 2 s |
| without-usha.webp | 16,334 | poster at 3 s |

Both formats are 848 × 480 and preserve the existing letterboxing. WITH is encoded with `-t 40.5`; codec padding accounts for the extra milliseconds, and the placeholder card is excluded. MP4 remains the normal format. This bridge's Chromium reports no H.264 support, so VP9/Opus WebM fallbacks were added for browsers with that limitation.

Original filenames, trim and rendition filenames live in [media.json](../tools/seo/media/media.json). Replace the relevant source filename there, then run:

```sh
node tools/seo/media/encode.mjs /path/to/originals
node tools/seo/build.mjs
```

Exact ffmpeg invocations live in [encode.mjs](../tools/seo/media/encode.mjs): H.264 high profile, CRF 32, slow preset, AAC 96k, faststart; VP9 CRF 38/Opus 64k fallback; WebP quality 72. CRF 32 keeps both MP4s below the 2.5 MB target.

## Limits and review points

**The frame-rate/long-task acceptance target is not met in this bridge.** A 3-second drag measured about 23.3 fps with long tasks up to 59 ms; an idle sample was about 23.6 fps with a 51 ms task. Direct layer transforms avoid inheriting a changing CSS variable through every report node. These measurements do not establish which renderer work accounts for the remaining cost. The bridge exposes no 4× CPU-throttle setting. The existing renderer was left unchanged, as required.

The bridge cannot verify audible music levels. Hook transitions and gain/reference-count behavior passed state/isolated tests. Its HTTP server returns 200 for a Range request, so native Safari Range behavior remains unverified; the worker bypass rule itself passed.

Report rows have enough height for translated copy; the phone calendar is 540 px. The phone switch sits 76 px above the viewport bottom to clear the existing live invitation. The teaser uses 35% of the viewport's available desk area because 35% of the entire tall phone desk cannot fit on screen. These are implementation adjustments for review.
