# USHA QA baseline report

Source: `6fb379956aa663e8fdd22893b5259cc8721c5394` (main at capture: `6fb379956aa663e8fdd22893b5259cc8721c5394`).
Run: **FULL SUITE**; **completed**; baseline capture; 1379.3 minutes wall time. Started 2026-11-02T21:42:20.834Z.
Node v22.23.4; linux 6.18.57; 5 logical CPUs; 2 functional / 3 memory workers. Smoothness and Lighthouse run alone.

Totals: 81 PASS, 102 FAIL, 360 UNAVAILABLE. A baseline records defects; it does not waive them.

Counts combine repeated wake and console checks within each matrix cell, retaining the worst status. The HTML report contains all 672 individual observations.

| Test | Pass | Fail | Unavailable | Not run |
|---|---:|---:|---:|---:|
| wake | 18 | 0 | 36 | 0 |
| smoothness | 0 | 18 | 36 | 0 |
| memory | 14 | 4 | 36 | 0 |
| visibility | 7 | 11 | 36 | 0 |
| layout | 18 | 0 | 36 | 0 |
| interaction | 0 | 18 | 36 | 0 |
| stress | 4 | 14 | 36 | 0 |
| accessibility | 0 | 18 | 36 | 0 |
| console-network | 0 | 18 | 36 | 0 |
| visual | 18 | 0 | 36 | 0 |
| load | 1 | 1 | 0 | 0 |
| seo | 1 | 0 | 0 | 0 |

## Environment and limits

- chromium: 154.0.8037.57; /usr/bin/chromium
- firefox: UNAVAILABLE — browserType.launch: Executable doesn't exist at /home/agent/.cache/ms-playwright/firefox-1495/firefox/firefox ╔═════════════════════════════════════════════════════════════════════════╗ ║ Looks like Playwright Test or Playwright was just installed or updated. ║ ║ Please run the following command to download new browsers:              ║ ║                                                                         ║
- webkit: UNAVAILABLE — browserType.launch: Executable doesn't exist at /home/agent/.cache/ms-playwright/webkit-2215/pw_run.sh ╔═════════════════════════════════════════════════════════════════════════╗ ║ Looks like Playwright Test or Playwright was just installed or updated. ║ ║ Please run the following command to download new browsers:              ║ ║                                                                         ║
- Browser downloads for Chromium, Firefox and WebKit returned HTTP 403 Domain forbidden. System Chromium 154.0.8037.57 is used with software rendering. Results describe this container, not physical phones.
- Resumed unfinished checks at 2026-11-02T21:48:00.740Z; completed passes and failures were retained. Wall time includes interruption.
- Resumed unfinished checks at 2026-11-02T22:15:03.934Z; completed passes and failures were retained. Wall time includes interruption.
- Resumed unfinished checks at 2026-11-02T22:36:12.176Z; completed passes and failures were retained. Wall time includes interruption.
- Resumed unfinished checks at 2026-11-02T23:10:04.028Z; completed passes and failures were retained. Wall time includes interruption.
- Resumed unfinished checks at 2026-11-02T23:24:38.785Z; completed passes and failures were retained. Wall time includes interruption.
- Resumed unfinished checks at 2026-11-02T23:55:34.030Z; completed passes and failures were retained. Wall time includes interruption.
- Functional audits switched from three workers to one after all three initial desktop DOM reads timed out before completing the first section. Six incomplete visibility/layout attempts and screenshots remain in each result metrics.incompleteAttempts. Timing, load and all 198 visual captures were preserved.
- Resumed unfinished checks at 2026-11-02T23:56:25.831Z; completed passes and failures were retained. Wall time includes interruption.
- Resumed unfinished checks at 2026-11-03T00:04:47.138Z; completed passes and failures were retained. Wall time includes interruption.
- Automation action budget increased from 15 to 60 seconds after a completed carousel click exceeded Playwright post-action bookkeeping time. The incomplete attempt is retained. No FPS, long-frame, LCP, CLS, heap or visibility threshold changed.
- Resumed unfinished checks at 2026-11-03T00:11:05.154Z; completed passes and failures were retained. Wall time includes interruption.
- Loaded the tested batched native-pointer helper and race-safe popup cleanup. An unfinished first-cell stress/accessibility attempt inherited the saved Arabic choice after language/history tests; it is retained as diagnostic history and resumed with the matrix preference reset. Completed genuine site findings remain failures. Functional concurrency is now two workers.
- Resumed unfinished checks at 2026-11-03T02:03:47.048Z; completed passes and failures were retained. Wall time includes interruption.
- After completing English desktop visibility, loaded bounded post-navigation settling for double-click stress and an asserted language reset before fresh wake. The unfinished stress navigation-context race is archived; completed measurements and all genuine findings are retained.
- Resumed unfinished checks at 2026-11-03T02:33:45.621Z; completed passes and failures were retained. Wall time includes interruption.
- The managed runtime became unavailable and restarted after 106 primary Chromium checks had completed. Saved results, source files, staged screenshots and the browser executable survived; running processes and the ephemeral /tmp console log did not. The two unfinished interaction audits were restarted in full. Nine verified phone findings and every retained diagnostic screenshot from those interrupted audits were preserved; unsaved diagnostic details and console/network observations could not be recovered. Subsequent logs are stored in the persistent workspace. Wall time includes this interruption.
- Resumed unfinished checks at 2026-11-03T12:01:56.938Z; completed passes and failures were retained. Wall time includes interruption.
- Completed targeted normal-scroll and fresh-jump pricing visibility follow-ups for the first four cells after correcting hidden-card scrolling. Repeated reduced-motion pricing checks for the first two cells as well. The original full audits and genuine failures remain; supplementary painted-plans records retain added findings and natural card scroll positions.
- Resumed unfinished checks at 2026-11-03T17:15:40.831Z; completed passes and failures were retained. Wall time includes interruption.
- A second environment interruption stopped the memory runner after six complete sessions. Those six results were retained. The two in-progress tablet memory warm-ups and one in-progress tablet wake restart in full. One Russian tablet Story warm-up failure was preserved from the persistent log with its archived screenshot; its unsaved full error detail, intermediate counters and console observations are unavailable. Wall time includes this interruption.
- Resumed unfinished checks at 2026-11-03T18:49:19.538Z; completed passes and failures were retained. Wall time includes interruption.
- A third abrupt runtime process loss was detected at 2026-11-03T20:04:44.476Z. Four memory sessions remained unfinished; three were in flight. All 14 completed sessions were retained, and all four unfinished sessions restart in full. The exact stop time and unsaved counters/console observations are unavailable; no passing measurement is inferred from them. Wall time includes this interruption.
- Resumed unfinished checks at 2026-11-03T20:04:45.909Z; completed passes and failures were retained. Wall time includes interruption.
- Popup completion now explicitly waits for the dialog to become hidden after its close action. A full memory repeat was scheduled for chromium--tablet-1024--en. Original complete measurements and actual failures are retained; final validation requires the new sessions to finish. Other completed sessions had no recorded persistent-popup obstruction and retain their measurements.
- Resumed unfinished checks at 2026-11-03T20:22:45.934Z; completed passes and failures were retained. Wall time includes interruption.
- The container exposes five logical CPUs but its CPU cgroup quota is four cores (400000/100000). Chromium used the SwiftShader software renderer. Performance results must be read with these host limits.
- Initial harness calibration covered slow-renderer input budgets, popup cleanup, language/navigation isolation and the brief form delayed step transition. Original incomplete attempts and screenshots are retained. No FPS, long-frame, LCP, CLS, heap-growth or opacity gate was relaxed.
- The layout harness now clips Range rectangles to painted viewport/ancestor bounds. A browser fixture reproduced three false Pro-card overlap detections; their original evidence is archived and the affected 1280px Russian layout audit was repeated in full. Element inspection scrolls the window without scrolling overflow:hidden card ancestors.
- Repeated console/network findings share a session-end image. Complete raw error/request observations remain in report metrics; an end-state screenshot is not a claim to show the exact moment an earlier error occurred.
- Visual PASS in this first baseline means that all eleven section images were captured for that cell. Later runs compare them with the documented pixel-difference threshold.
- Timing-sensitive interaction findings state observed completion budgets on this slow host; they do not establish that an action can never complete. Visibility screenshots may show a later rendered state than the recorded opacity/geometry.
- Popup-close verification was strengthened to wait for a hidden dialog before incrementing the memory workload count. Sessions with persistent-popup obstructions were repeated in full; their original complete measurements, screenshots and failures are retained. Other completed sessions had no recorded persistent-popup obstruction.
- Final validation: twelve harness self-tests passed without skips; the final QA source produced the same 99 site files as the control build, remained idempotent and left the checkout untouched; all 11 sitemap pages plus crawler files and sw.js passed again.
- Device profiles emulate viewport, DPR, touch and user agent; they are not physical iOS/Android hardware. The low-end throttle uses Chromium CDP only.
- All live-chat HTTP methods and endpoints are mocked before page creation. Turnstile is a local fixture. Service workers and WebSockets are blocked. The live-chat-only automation/incognito gate is mocked to expose form validation.
- Build output is compared with a control copy without qa/, then rebuilt to verify idempotence. The checkout is never built in place.
- UNAVAILABLE/NOT RUN is never a pass. Browser installation gaps, unsupported heap/CDP APIs and manual contrast/linguistic checks remain explicit.

## Ten worst observed problems

1. **console-network — Failed network request** (23 cells; 136 observations; example `chromium--android-low--ar`).
   [Screenshot](evidence/chromium--android-low--ar/console-network-session-end.jpg)
2. **console-network — JavaScript/console error: Blocked call to navigator.vibrate because user hasn't tapped on the frame or any embedded frame yet: https://www.chromestatus.com/feature/5644273861001216.** (18 cells; 18 observations; example `chromium--android-low--ar`).
   [Screenshot](evidence/chromium--android-low--ar/console-network-session-end.jpg)
3. **console-network — JavaScript/console error: Cannot read properties of undefined (reading 'helloA')** (7 cells; 10 observations; example `chromium--android-low--ar`).
   [Screenshot](evidence/chromium--android-low--ar/console-network-session-end.jpg)
4. **memory — Memory warm-up could not exercise core** (3 cells; 3 observations; example `chromium--desktop-1440--ar`).
   [Screenshot](evidence/chromium--desktop-1440--ar/memory-1.jpg)
5. **memory — Memory warm-up could not exercise story** (2 cells; 3 observations; example `chromium--tablet-1024--ar`).
   [Screenshot](evidence/chromium--tablet-1024--ar/memory-2.jpg)
6. **memory — Memory comparison tab could not activate** (1 cells; 3 observations; example `chromium--tablet-1024--en`).
   [Screenshot](evidence/chromium--tablet-1024--en/memory-1.jpg)
7. **memory — Memory cycle 5: scenario could not complete** (1 cells; 1 observations; example `chromium--tablet-1024--en`).
   [Screenshot](evidence/chromium--tablet-1024--en/memory-4.jpg)
8. **smoothness — slow-wheel: p5 3.8 fps < 30** (18 cells; 58 observations; example `chromium--android-low--ar`).
   [Screenshot](evidence/chromium--android-low--ar/smoothness-slow-wheel.jpg)
9. **smoothness — slow-wheel: frame 883.4 ms > 200 ms** (18 cells; 51 observations; example `chromium--android-low--ar`).
   [Screenshot](evidence/chromium--android-low--ar/smoothness-slow-wheel.jpg)
10. **visibility — normal: effective opacity 0.000** (8 cells; 8 observations; example `chromium--desktop-1280--ar`). Selector: `#fbody > div:nth-child(2)`.
   [Screenshot](evidence/chromium--desktop-1280--ar/visibility-1.jpg)

## Test × browser × viewport × language

| Browser | Viewport/profile | Language | wake | smoothness | memory | visibility | layout | interaction | stress | accessibility | console-network | visual |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| chromium | desktop-1440 | ru | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | desktop-1440 | en | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | desktop-1440 | ar | PASS | FAIL | FAIL | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | desktop-1280 | ru | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | desktop-1280 | en | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | desktop-1280 | ar | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | tablet-1024 | ru | PASS | FAIL | FAIL | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | tablet-1024 | en | PASS | FAIL | FAIL | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | tablet-1024 | ar | PASS | FAIL | FAIL | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | iphone-13 | ru | PASS | FAIL | PASS | PASS | PASS | FAIL | PASS | FAIL | FAIL | PASS |
| chromium | iphone-13 | en | PASS | FAIL | PASS | PASS | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | iphone-13 | ar | PASS | FAIL | PASS | PASS | PASS | FAIL | PASS | FAIL | FAIL | PASS |
| chromium | pixel-7 | ru | PASS | FAIL | PASS | PASS | PASS | FAIL | PASS | FAIL | FAIL | PASS |
| chromium | pixel-7 | en | PASS | FAIL | PASS | PASS | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | pixel-7 | ar | PASS | FAIL | PASS | PASS | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | android-low | ru | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| chromium | android-low | en | PASS | FAIL | PASS | PASS | PASS | FAIL | PASS | FAIL | FAIL | PASS |
| chromium | android-low | ar | PASS | FAIL | PASS | FAIL | PASS | FAIL | FAIL | FAIL | FAIL | PASS |
| webkit | desktop-1440 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | desktop-1440 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | desktop-1440 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | desktop-1280 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | desktop-1280 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | desktop-1280 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | tablet-1024 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | tablet-1024 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | tablet-1024 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | iphone-13 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | iphone-13 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | iphone-13 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | pixel-7 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | pixel-7 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | pixel-7 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | android-low | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | android-low | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| webkit | android-low | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | desktop-1440 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | desktop-1440 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | desktop-1440 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | desktop-1280 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | desktop-1280 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | desktop-1280 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | tablet-1024 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | tablet-1024 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | tablet-1024 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | iphone-13 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | iphone-13 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | iphone-13 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | pixel-7 | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | pixel-7 | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | pixel-7 | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | android-low | ru | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | android-low | en | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |
| firefox | android-low | ar | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE | UNAVAILABLE |

## Load metrics (Lighthouse CI)

| Profile | Language | Gate | LCP ms | CLS | TBT ms | JS bytes | Image bytes |
|---|---|---|---:|---:|---:|---:|---:|
| desktop | ru | FAIL | 2617 | 0.0564 | 18978 | 866282 | 0 |
| desktop | en | PASS | 1775 | 0.0172 | 19972 | 866282 | 0 |
| desktop | ar | FAIL | 2758 | 0.1259 | 19112 | 873366 | 0 |
| mobile | ru | PASS | 8437 | 0.0484 | 67271 | 866282 | 0 |
| mobile | en | PASS | 8161 | 0.0428 | 70045 | 866282 | 0 |
| mobile | ar | PASS | 8159 | 0.0432 | 67410 | 873366 | 0 |

## Build and sitemap checks

Build: 99 files; 0 qa-related changes; 0 idempotence changes; 0 checkout changes.
Sitemap: PASS; 11 pages checked plus robots.txt, llms.txt, llms-full.txt and sw.js.

The [HTML report](index.html) contains every finding, selector, screenshot, metric, warning and coverage note. CI uploads all raw results, Lighthouse reports and diffs.
