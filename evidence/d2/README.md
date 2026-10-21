**D2 — The Night Notebook**

Added `#story` between `#why` and `#month`: eight hand-authored SVG scenes, the ink-drop-to-USHA character, EN/RU/neutral MSA Arabic captions, desktop pinning and camera movement, phone switchbacks, keyboard navigation, skip-to-month, and the static layout. The existing NJO paragraph and engineers block remain intact. The Meta partner stamp and legal note appear only in the Russian story.

The hidden 3D renderer pauses while the desktop stage is pinned, or while opaque notebook paper fills the phone/static viewport. It resumes outside the story. Comparing the generated app bundles with the baseline confirms that the scene-pause guard is their only change; the game, audio and original application behavior were preserved.

Work remains uncommitted on `d2-njo-story`. No staging, commits, pushes, pull requests, merges, or deployment actions were performed. `BRIEF.md` remains untracked.

**Checks**

| State/check | Result | Recorded evidence |
|---|---|---|
| Before: 1440×900 and 390×844 | Slot audited before implementation | `d2-before-desktop`, `d2-before-phone` |
| EN/RU desktop, chapters 1–8 | Correct chapter/caption; no horizontal scroll | `d2-resume-d-en`, `d2-resume-d-ru` |
| Arabic desktop, chapters 1–8 | Artwork mirrored; numeral/signature transforms remain positive | `d2-rtl-1440` |
| EN/RU phone, chapters 1–8 | Live layout, all captions fit, no horizontal scroll | `d2-resume-m-en`, `d2-resume-m-ru` |
| Arabic phone, chapters 1–8 | Every scene anchor inside its mirrored crop; readable non-mirrored numerals | `d2-rtl-390` |
| Short desktop, 1280×720 | Chapters 4 and 6 fit | `d2-resume-1280` |
| Static layout, 1440 and 390 | All 8 captions; no pinning or running story animations | `d2-delivery-still-1440`, `d2-delivery-still-390` |
| Static mini-USHA, all 8 pages | All figures inside the art; body faces the original direction in Arabic | Same static records |
| Two-core fallback | Switches to static layout; renderer pauses under opaque paper | `d2-reviewed-ar-desktop`, `d2-reviewed-ru-phone` |
| Keyboard tick 06 + Enter | `__story.chapter === 5`, localized chapter-6 caption | Desktop matrix records |
| RTL ArrowRight | Moves focus from tick 02 to tick 01 | `d2-resume-d-ar` |
| Source CTA focus, EN/AR | Caption aligns with visible slot; CTA remains tabbable after static fallback | `d2-final-keyboard-en`, `d2-final-keyboard-ar` |
| Tab from the end of #why | Reaches the skip link first; Enter focuses #month | `d2-final-reduced-motion` |
| Reduced-motion signal | Simulated matchMedia signal selects static layout: 8 captions, no pinning, no running animations | `d2-final-reduced-motion` |
| Skip + Enter | Focus moves to `#month`; render hold clears | `d2-ready-desktop` |
| EN↔RU runtime switch | Caption, intro and button labels update; no stale English caption | `d2-ready-desktop`, `d2-delivery-live` |
| Entry/wake/pans/exit | Captured, including AR pan 3→4 and companion returning | JPEG details sheet and PNG manifest |
| Animated properties | Only transform and opacity in story effects | Desktop matrix records |
| Off screen at `#faqs` | `running:false`, `hold:false`, zero running story animations | Final phone timing records |
| All 11 sitemap pages | HTTP 200, expected lang/canonical, h1 and JSON-LD | `d2-resume-1280` |
| robots, llms, llms-full, service worker | HTTP 200 | `d2-resume-1280` |
| Main-page source | One story and eight non-empty chapter h3s per language | Sitemap/source checks |
| Default checkout builds | Two builds, all 45 generated file hashes identical; live chat defaults on | [metrics.json](metrics.json) |
| Syntax/whitespace | Node syntax checks and `git diff --check` passed | Local checks |

All selected runs have no page exceptions or failed asset requests. Phone runs have no console errors. Desktop `?skip` emits the same blocked `navigator.vibrate` gesture warning seen in the unmodified baseline; there are no new application console errors.

Disposable copies were built outside the checkout, served through the file bridge, with chat disabled only in those copies. Desktop requests used `?skip`; phone requests used `wake`; chapter controls used `jsclick`. Requests were submitted and polled one at a time.

**Budgets and timing**

| Item | Measured | Limit |
|---|---:|---:|
| SVG descendants | 304 total, 67 maximum in one scene | 650 / 70 |
| Inline SVG, raw / gzip | 40,593 / 6,028 bytes | 70 / 18 KiB |
| Story controller | 9,130 bytes | 9 KiB |
| Story CSS | 7,164 bytes | 7 KiB |
| 128×128 grain PNG | 4,979 bytes | 6 KiB |
| Added transfer, EN / RU / AR | 23,095 / 23,904 / 22,724 bytes gzip | 35 KiB per page |
| Phone rAF interval p95 | EN 16.7 ms; RU 16.7 ms; AR 16.7–16.8 ms | 20 ms |
| Desktop rAF interval p95 | 16.8 ms | 16.7 ms target: 0.1 ms above |

The controller/CSS limits are enforced by the builder. Transfer deltas use default Node gzip for HTML and scripts, and the PNG’s original compressed size; they include all shared script differences and inline CSS; shared caption/view helpers are included in the total. Phone timing includes the fully drawn Arabic storefront and expert-table scenes. Pausing the obscured renderer reduced phone p95 from 66–83 ms to 16.7–16.8 ms. Controller work in the final phone probe was p95 0.2 ms; the desktop matrix measured p95 0.7–0.8 ms.

**Screenshots**

Nine JPEG contact sheets, each under 200,000 bytes. The desktop and phone sheets contain all eight chapters in order.

| File | Coverage |
|---|---|
| [before.jpg](before.jpg) | Original desktop and phone slot |
| [desktop-en.jpg](desktop-en.jpg) | EN chapters 1–8 |
| [desktop-ru.jpg](desktop-ru.jpg) | RU chapters 1–8 |
| [desktop-ar.jpg](desktop-ar.jpg) | AR chapters 1–8 |
| [phone-en.jpg](phone-en.jpg) | EN phone chapters 1–8 |
| [phone-ru.jpg](phone-ru.jpg) | RU phone chapters 1–8 |
| [phone-ar.jpg](phone-ar.jpg) | Corrected Arabic crops, chapters 1–8 |
| [layout-details.jpg](layout-details.jpg) | 1280px desktop, phone connector 4→5, static chapters 1 and 8 at both sizes |
| [transitions-and-still.jpg](transitions-and-still.jpg) | Entry, intro, wake at both sizes, EN/AR pans, exit and static layouts |

[screenshots.json](screenshots.json) maps every tile to its original full-resolution bridge PNG. [audit-results.json](audit-results.json) preserves the selected passing result records; earlier exploratory/interrupted results are not counted as acceptance evidence. Arabic crop and static-figure retests supersede the earlier Arabic screenshots.

**Review notes**

The desktop raw rAF measurement is 0.1 ms above the strict 16.7 ms target. The controller itself is well below one millisecond p95; the exact desktop presentation budget remains unconfirmed in this shared Chromium environment. Phone checks use Chromium mobile emulation, not physical mid-range hardware. Static mode was tested through `?story=still`, the two-core condition, and a simulated `prefers-reduced-motion` matchMedia signal. The bridge does not expose a native OS reduced-motion preference setting.

The referenced specs did not supply the Russian deck's verbatim legal footnote. The RU story uses standard notice wording; the owner should compare it with the slide. Dot-matrix dots are packed into compound paths to meet the element budget, so ink reveals operate on groups rather than animating each individual dot. That small visual simplification remains for the design reviewer to assess.
