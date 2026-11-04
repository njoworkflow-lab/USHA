# QA suite repair verification

Started from `codex/qa-suite` (`759ce2513dc55db9aa26aa414638fb601f9041a1`).
Website source is unchanged. All generated reports, screenshots and baselines
have been removed from the proposed tree; they belong only in CI artifacts
(retention 14 days). This file is the sole tracked QA report.

- Harness: 16 checks passed, including network isolation, final-attempt status,
  delayed reveals, exact tap/Lighthouse/leak boundaries and complete smoke/matrix
  coverage enforcement.
- Disposable production builds: 99 files, zero byte differences with/without QA,
  zero differences on a repeat build and zero changes to the checkout.
- All 11 sitemap pages and crawler/service-worker files passed local HTTP checks.
- Local six-cell smoke and remote CI validation are in progress. Outcomes and
  links will be recorded before the repair is handed back; no CI pass is claimed.
- Playwright remains pinned at 1.56.1. Local diagnostics use system Chromium
  154.0.8037.57; WebKit and Firefox are not installed here. The actual CI matrix
  must install and run the pinned three engines on Ubuntu 24.04.

Per the updated instruction, `.nojekyll` and Pages are unchanged. The small QA
source and this summary will remain publicly readable at `/qa/` without secrets;
there is no 404 claim. The control room will decide on exclusion later.
No merge, deployment, Pages/IndexNow request or real live-chat call was made.
