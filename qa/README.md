# USHA QA

Use Node.js 22. Dependencies, including Playwright **1.56.1**, are pinned in
`package-lock.json`.

```sh
npm ci --prefix qa --no-audit --no-fund
(cd qa && npx playwright install --with-deps chromium webkit firefox)
npm --prefix qa run self-test
npm --prefix qa run smoke
# Full matrix (long-running):
npm --prefix qa test
```

`bash qa/run.sh` installs all three engines, checks the harness and runs the full
suite. A requested engine that cannot launch is an explicit coverage failure in
CI. Locally, system Chromium is a diagnostic fallback only; its version is recorded.

## CI modes

All jobs in `.github/workflows/qa.yml` use **ubuntu-24.04**. A newer run for the
same event/PR/ref cancels its predecessor. Permissions are read-only. Nothing
merges, publishes, requests Pages or calls IndexNow.

**PR smoke:** one job, Chromium at 1440×900 and iPhone 13 (390×844, DPR 3), each
in Russian `/`, English `/en/` and Arabic `/ar/`. All six cells must have results
for interaction, console/network, layout and axe, plus real hold-to-wake. It also
checks the build and all 11 sitemap pages. Missing coverage fails. Smoke is a
complete smoke result, never a full-matrix result.

Smoke opens/closes scenario, Core and mocked live chat, checks focus trapping
and modal tabs, toggles a FAQ, inspects layout/RTL at hero/plans/FAQ, runs
one axe scan over all visible main content and the header, checks
phone tap sizing, and checks the keyboard path and console/network log. Focus failures share one screenshot per popup, retaining both keyboard directions
and the actual focused element. The full
suite adds exhaustive popup states, story chapters (native strip input in compact
layouts and individual dot input on desktop), video/game controls,
language/history navigation, popup axe, character raycasts, visibility, stress,
performance, leaks and visual comparisons. Smoke does not change site animation
or opacity. Its command has a 15-minute deadline; the job has a 20-minute cap,
leaving time for installation and artifact upload. A timeout is failure, never a
pass. CI does not retry known site findings automatically; optional fresh-session retries use only the final status.

**Full matrix:** `workflow_dispatch` or nightly **02:17 UTC**. There are 18
browser/profile jobs (up to six concurrent, 180-minute cap each), covering all
54 browser × viewport × language cells. Engines: Chromium, WebKit and Firefox.
Profiles: 1440×900, 1280×720, 1024×768, iPhone 13, Pixel 7 and low-end Android
360×740. The low-end profile uses Chromium CDP 4× CPU slowdown and Fast 3G.
WebKit/Firefox lack that CDP throttle; those performance measurements are marked
unavailable. Firefox phone emulation omits unsupported `isMobile`, retaining
viewport, DPR, touch and user agent. These are emulated profiles, not real phones.

Pinned Playwright cannot dispatch wheel input in mobile WebKit and has no swipe
API for that engine. Those profiles retain mobile emulation and use explicitly
labeled programmatic `scrollBy` for content traversal and rendering measurements.
This covers revealed content and frame timing, not native touch-scroll/fling
behavior. Other engines retain their native input paths. Small scroll/reveal
fixtures run in all three installed engines during the CI harness check.

Full CI uses one browser session at a time per runner to avoid contention between
software renderers. Reference capture has a 20-minute deadline and candidate
tests have 150 minutes, leaving time for installation and artifact upload. These
full-run budgets do not apply to PR smoke. Deadlines produce incomplete coverage
and a failing result; they never waive an unfinished check.

The aggregate job requires every shard and primary result, both Lighthouse
profiles and SEO checks. An unlaunchable WebKit or Firefox is a failed CI run,
not a green result with missing browsers. Nightly scheduling begins only when
the workflow is on the default branch. GitHub may also require default-branch
registration before allowing a manual dispatch of a new workflow.

## Gates and interpretation

| Check | Rule |
|---|---|
| Wake | Native hold input, unlocked page and visible hello; no bypass event or storage shortcut. |
| Console/network | JS errors, HTTP ≥400, genuine asset failures and WebGL loss fail. `net::ERR_ABORTED`, equivalent cancellation signals and blocked/aborted third-party requests are separate informational evidence. Unknown API endpoints still fail. |
| Visibility | Scroll each eligible element into view, observe `transitionend`/`animationend` and relevant ancestor/word animations, wait up to 1.5 s, then measure effective opacity (≥0.9). Never force reveals. Both normal scrolling and a fresh jump are checked. |
| Smoothness | Record p5/average FPS, long tasks, >50 ms frames, maximum frame and completed traversal. Enforce p5 ≥45 FPS (30 low-end), max frame ≤200 ms and complete traversal only with an accessible Linux hardware render device and matching browser renderer, or with `QA_STRICT_FPS=1`. Privacy-masked renderer brands alone do not prove hardware. Software/unknown renderers and unsupported host probes are `INFO`, with measurements retained. |
| Lighthouse | Cold local desktop/mobile navigation in all languages. CLS ≤0.1; desktop LCP ≤2.5 s; **mobile LCP ≤4.0 s and TBT ≤600 ms**. Missing/invalid metrics fail. |
| Memory/leaks | Warm lazy modules, sample after GC where supported, open/close every one of seven popups **five times**, ten scroll round trips and ≥5 minutes. Attached and retained DOM nodes and event listeners must each grow **<20%**; heap growth ≤30%; no WebGL loss. Zero→positive growth fails. Chromium CDP exposes retained nodes/listeners; other engines enforce attached DOM growth and explicitly disclose unavailable counters. |
| Touch | Width or height **<24 px fails** (WCAG 2.2 AA); 24–43 px is a warning, **“advice: 44 px”**, never a failure. Hidden/inactive controls are excluded; textless and offscreen active controls count. |
| Axe/layout/interaction | Serious/critical axe and confirmed AA contrast failures, real overlap/overflow/RTL errors and broken controls fail. Incomplete axe evidence is retained for review. |
| Visual | Eleven section screenshots per cell. Pixelmatch threshold 0.25, changed-pixel ratio ≤2%. Missing or incompatible baselines fail. |

Performance runs use real clocks and run alone within their job. Visual-only
sessions use seeded randomness and controlled clocks for reproducible snapshots.
CSS animations are disabled only while taking visual snapshots. Hardware, fonts,
browser versions and animation content can still affect comparisons.

## Linux baselines and artifacts

Baselines are **recorded on Linux CI only**. A reference job first pins main's
commit for the entire run, so queued jobs cannot capture different revisions
when main advances. Each full shard builds that pinned `origin/main` in a
disposable copy and records its own browser/profile/language
reference, then compares the candidate on the same runner using the same pinned
browser and fonts. The manifest records the reference commit, source hashes,
browser versions, thresholds and captured cells. A failed capture or missing
image fails the comparison. Baselines are never auto-accepted from the candidate
and never committed. On a nightly main run this is a repeatability comparison
against that main revision; cross-revision historical review uses downloaded
artifacts, not a rolling baseline stored on main.

All reports, JSON/logs, screenshots, actual/expected/diff images, previous attempts,
Lighthouse output and baseline captures are uploaded with
`actions/upload-artifact@v4`, **retention 14 days**, including on failure. The
combined report is a separate artifact; shard artifacts hold the full evidence.
Open `report/index.html` after extracting an artifact. It works offline.

Only QA source and `qa/report/summary.md` (text, under 200 KB) are tracked.
`node qa/scripts/check-tracked.mjs` enforces this. Generated paths are ignored.
Do not force-add artifacts. The deleted original reports remain in prior Git
history; they are absent from the proposed main tree.

**Pages remains unchanged by instruction.** `.nojekyll` is retained. The small
QA test source and text summary will be publicly readable at `/qa/`; they contain
no secrets. There is no claim that `/qa/` returns 404. The control room will decide
on exclusion later. No Pages or IndexNow operation is part of this workflow.

## Isolation and investigation

The runner builds disposable site/control copies using normal production
defaults, compares every output byte, rebuilds for idempotence, and verifies that
the checkout did not change. Sitemap checks verify 200, language, canonical, h1
and JSON-LD on all 11 pages plus crawler/service-worker files.

Before creating any page, a fail-closed router fulfills all `/api/` calls on every
origin/method locally, mocks Turnstile and blocks all other external traffic and
WebSockets. Service workers are blocked. Unknown API endpoints fail. The chat
fixture bypasses client automation/incognito checks to exercise the local mocked
form with reserved fixture data; it never contacts the real live-chat service.
Lighthouse uses a deny-only proxy. No credentials or real contacts are needed.

```sh
QA_FILTER=chromium--iphone-13--en npm --prefix qa test
QA_WORKERS=1 npm --prefix qa run smoke
QA_STRICT_FPS=1 npm --prefix qa test
# Resume unfinished audits only, preserving evidence:
npm --prefix qa test -- --resume
```

Selections/omitted phases cannot manufacture a passing complete matrix. Resume
requires matching site bytes and browser versions. Completed results remain;
uncompleted audits rerun with their old evidence archived. `QA_RETRIES=0..2`
(default 0 in CI and locally) retries a failed session in a fresh browser. Earlier
attempts remain in `report/attempts/` or `incompleteAttempts` as evidence and do
not set the final status. Independent phase checks still count independently.
