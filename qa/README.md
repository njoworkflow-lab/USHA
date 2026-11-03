# USHA heavy QA

From the repository root, with Node.js 22 and Linux/macOS browser prerequisites:

```sh
bash qa/run.sh
```

That one command installs the pinned dev dependencies and browser engines, checks
the harness, builds disposable site copies, runs the matrix and writes
`qa/report/index.html` and `qa/report/summary.md`. Open the HTML file locally;
it needs no server or external assets. It includes filters, every failed selector,
screenshots, detailed metrics, warnings and coverage notes. A nonzero exit status
means a gate failed or the requested matrix was not completed. **Existing baseline
defects are failures, not waivers.** The first baseline's measured runtime and
findings are in [the committed summary](report/summary.md).

After initial installation, `npm --prefix qa test` is enough. To exercise a single
phone/language during harness development, use `npm --prefix qa run smoke`.
Smoke reports are labelled incomplete and cannot create a baseline. They do not
replace the full check.

## Matrix and gates

Each available engine (Chromium, WebKit, Firefox) runs RU `/`, EN `/en/`, AR `/ar/`
at 1440×900, 1280×720, 1024×768, iPhone 13 **390×844 at DPR 3**, Pixel 7 (the pinned
Playwright device descriptor), and low-end Android 360×740. The last profile uses
Chromium CDP CPU slowdown 4× and Fast 3G (150 ms latency, 1.6 Mbps download,
750 Kbps upload). Firefox/WebKit cannot provide CDP throttling; those performance
cells are explicitly unavailable. Firefox's `isMobile` emulation is unsupported;
its phone cells retain viewport, DPR, touch and user agent. These are emulated
devices, not claims of testing physical phones or the actual Safari app.

| Check | Gate / evidence |
|---|---|
| Wake | Real mouse press held on `#holdBtn` until `html.locked` disappears; observe the hello's peak opacity and wait for it to finish. No skip URL, wake event or sessionStorage bypass. |
| Smoothness | Native slow/fast wheel and fast fling, top to bottom, rAF frame intervals, average FPS, p5 of instantaneous FPS, frames >50 ms, maximum frame and long tasks. Fail p5 <45 FPS (30 low-end), any frame >200 ms, or incomplete scroll. Phone Chromium fling uses native CDP touch input. Other engines use wheel fling and disclose that fact. |
| Load | Lighthouse CI cold navigation, desktop and mobile, all languages; LCP/CLS/TBT and transferred script/image bytes. Desktop LCP >2500 ms or any CLS >0.1 fails. The cold load includes the site's actual wake screen; post-wake work is covered by smoothness. |
| Memory | At least five real minutes per cell, ten down/up round trips, each of seven popups (including live chat) opened/closed five times, UI tabs and browser tabs switched. A popup cycle counts only after its close action makes the dialog hidden. Warm lazy modules, force GC before comparable samples, report JS heap, live nodes, retained DOM nodes/documents/listeners and WebGL loss. Heap >30% growth or context loss fails. Non-Chromium engines expose DOM but not reliable heap/GC: explicitly unavailable, never an invented pass. |
| Visibility | Normal wheel approach and direct jumps/real anchors; inspect every eligible heading, paragraph, button, CTA and card at its scroll position. Cumulative ancestor opacity ≥0.9, reveal-word opacity, clipping and viewport checks. List every failure with selector and screenshot. Hidden alternate UI, closed FAQ answers and aria-hidden decoration are excluded; opacity-zero and visibility-hidden content are included. |
| Layout | Horizontal overflow, text range intersections, fixed-header heading occlusion, Arabic direction/arrows/numeric isolation. Character/text collisions use the site's real 3D raycast (`body.hot`) at text rectangles; the full-screen canvas rectangle is never mistaken for the character. |
| Interaction | Popup close/Esc/backdrop (when exposed), focus wrap/restore and scroll restore; all scenario/forecast/comparison tabs, slider, videos, story chapters, Core/Pro, FAQ, live validation/mocked response, game, internal links, anchors, languages and history. Inventory and individual steps retained. |
| Stress | Repeated breakpoint resizing, portrait/landscape swaps, character tap spam, double-click controls, reduced-motion reload and readability. |
| Accessibility | axe WCAG A/AA per section and popup, serious/critical issues and confirmed body contrast violations fail; phone targets under 44×44 fail; Tab path to main CTAs. Axe incomplete checks retained for review. |
| Console/network | JavaScript errors, console errors, HTTP ≥400, unexpected request failures and WebGL context loss fail. Console warnings retained. Only deliberately blocked external navigation is exempted. |
| Visual | Eleven viewport section checkpoints per browser/profile/language. Pixelmatch color threshold 0.25; >2% differing pixels fails. Actual, expected and diff paths listed. |

Smoothness runs serially without other browser sessions. Lighthouse then runs
alone, followed by serial visual captures. Functional and memory sessions use two workers by default; set
`QA_WORKERS=1` for a quiet host or up to 6 for functional/memory throughput.
Set `QA_FUNCTIONAL_WORKERS=1` to serialize DOM and interaction audits on a
software renderer while retaining the configured memory-session concurrency.
The complete 54-cell matrix includes at least 270 browser-minutes of memory
sessions alone (135 wall minutes with two workers), in addition to the other
audits. The committed summary records the measured baseline runtime and the
number of available engines.
WebGL context-loss events are also retained outside the page, so the site's
automatic reload cannot erase them from the memory and console reports.
Hardware/renderer differences strongly affect absolute performance. The report
records the host, browser versions, executable paths and parallelism. Do not
interpret a software-rendered container result as a measured physical device.

## Live-chat isolation

All contexts install a fail-closed request router **before any page exists**.
Every `/api/` request on every origin and HTTP method is fulfilled locally; unknown
API paths fail. Turnstile is mocked. All other external traffic is blocked,
including WebSockets; service workers cannot bypass interception. The form fixture
mocks `navigator.webdriver` and the storage quota heuristic, because the production
client otherwise displays its automated-browser notice before rendering the form.
This is a client UX test, not a server/bot-protection integration test. Only reserved
fixture contact details and a literal local session marker are used. No credentials,
real registration, visitor quota, messages, emails or API spend are required.

After exercising language switches and browser history, the fixture resets the
saved language preference and reloads the matrix URL. This prevents a prior Arabic
or English choice from redirecting later Russian checks to another language.

Lighthouse uses a separate deny-only local proxy for all non-loopback traffic.
External contact links are inspected, never followed to send a message. Internal
canonical `usha.one` links are checked against the disposable local build. The
availability of third-party destinations is outside this offline fixture.

## Baselines and investigation

```sh
# Explicitly replace baselines after reviewing the source change:
npm --prefix qa run baseline
# Resume interrupted checks, retaining completed passes and failures:
npm --prefix qa run baseline -- --resume
# Inspect one cell; report says NOT RUN for everything excluded:
QA_FILTER=chromium--iphone-13--en npm --prefix qa test
# Test the harness's guards, serving and performance math:
npm --prefix qa run self-test
```

Baseline capture changes only `qa/baseline/` and `qa/report/`, never website code.
Resume requires the same source bytes, browser versions, worker count and mode;
it reports the interruption and includes downtime in the wall time. It never
reruns completed failures to obtain a better result.
If a scroll recording ends before reaching the bottom, resume retains completed
speeds and all earlier timing violations, and repeats only the unfinished speed.
The original partial capture stays in the report metrics.
It still fails on site bugs. `baseline/manifest.json` records the source SHA,
hash of source files, browser versions, timing and thresholds. Missing baselines always fail a
comparison; CI never silently creates or updates them. Capture missing engines on
a machine where they can install, then review and commit their images explicitly.
The initial environment permitted system Chromium but blocked Playwright browser
download hosts with HTTP 403, so Firefox/WebKit baseline images are unavailable.

Interaction checks use real native pointer clicks for ordinary buttons and
disclosure controls after checking visibility, enabled state and the actual hit
target. They do not force clicks through overlays or dispatch synthetic DOM click
events. Links, language switches, submits and custom-position clicks retain
Playwright's navigation handling. The automation budget is 60 seconds; this does
not change any site-performance gate. A browser fixture verifies single/double
click events and rejects blocked or disabled controls.

Screenshots are saved at CSS-pixel dimensions while the browser still renders at
the profile's full DPR (including 3× on iPhone). They retain the canvas and real
reveal behavior. Visual-only contexts seed randomness and advance the browser
clock in fixed 250 ms steps after real hold input to select repeatable animation
checkpoints. Low-end CPU/network settings remain enabled wherever CDP supports
them. CSS animations are disabled during capture. Performance and leak
tests use independent, unmodified real-time clocks. Renderer/font differences can
still cause visual noise. Review expected/actual/diff together, use the same OS/browser
versions for stable comparisons, and never increase the threshold just to hide a
defect. Section checkpoints are viewport images, not stitched full-page evidence
of content outside that checkpoint; visibility checks separately visit every
eligible content element. Story art and changing animations also need human review.
Element inspection centers the window without scrolling `overflow:hidden` card
ancestors. Layout intersections and character raycasts use text rectangles clipped
to their visible viewport and ancestor bounds, so hidden text cannot create a
false overlap with a heading outside its card.
Phone target sizing includes textless inputs and icon buttons, and active controls
below the viewport; hidden, transparent and inactive alternate UI is excluded.
Fast-jump visibility starts with a fresh page and a new real hold, so normal
scrolling cannot pre-reveal its content. Scroll-driven scenes are inspected inside
their declared activation intervals; every carousel card is activated using its
actual dot button. Back and approval controls are checked in their active states
by interaction tests. Reduced motion repeats the full element visibility audit.
Arabic linguistic correctness and axe-incomplete contrast over animated backgrounds
cannot be established by geometry alone; those limits are reported explicitly.

## CI and build isolation

`.github/workflows/qa.yml` runs on every PR to `main` and manual dispatch. It has
18 browser/device shards (three running concurrently), followed by a combined report
that verifies all 54 cells are accounted for. Timing runs remain isolated within
each runner. Every job explicitly runs `npx playwright install --with-deps` to
install Chromium, Firefox, WebKit and their Linux dependencies. Installation
errors fail the job, and a scheduled engine that cannot launch fails both its
shard and the aggregate gate. The Chromium-only installation fallback applies to
unsharded local runs; it does not waive the 36 Firefox/WebKit combinations in CI.
Installation logs are uploaded with the report. The workflow has read-only
repository permissions, uploads reports even on failure, and never
publishes, requests Pages, calls IndexNow or merges. It does not change repository
branch-protection settings. To enforce the gate administratively, maintainers can
make **Complete QA matrix** a required check in their existing branch rules.

The runner copies current tracked site files into `qa/.work/site` and a control
copy, builds both with normal production defaults, compares all output bytes,
then rebuilds to check idempotence. It verifies the original checkout hashes were
unchanged. No `qa/` module, style, dependency or fixture is loaded by the website.
All 11 sitemap pages are checked for HTTP 200, correct `lang`, canonical, h1 and
valid JSON-LD; crawler files and service worker are also checked.

Generated raw logs/results/Lighthouse files are CI artifacts. The baseline summary,
offline HTML report, evidence screenshots and reviewed baseline PNGs are committed.
Report generation uses HTML escaping and contains no remote scripts or tracking.
