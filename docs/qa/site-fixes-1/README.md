# Site fixes, round 1

Branch `codex/site-fixes-1` starts at main `6fb379956aa663e8fdd22893b5259cc8721c5394`. It does not contain the QA suite branch.

All browser checks use locally served disposable builds. The normal build keeps live chat enabled. Requests to the chat API and bot-check service are intercepted by local fixtures; no brief or chat message is sent. Browser: Chromium 154.0.8037.57 with software WebGL. Screenshots use CSS pixel dimensions. Phone checks use widths 360, 375, 390 and 412; desktop checks use 1440 × 900.

The evidence records before/after measurements for each requested item in RU, EN and AR. The original baseline navigation timeouts are retained; fresh sessions supply the missing comparisons. Supplementary color/Core records wait for the selected control state before measuring, superseding immediate readings during animation. Baseline EN/AR retry sessions use DPR 1. Following a workspace restart, unfinished checks resume at 412 px and resize to 1440 px for dialogs; desktop sampling/DPR readings come from the original desktop starts; the dedicated DPR-cap comparison uses DPR 2. These are behavior checks, not frame-rate benchmarks.

| Language | Hero buttons inside (3 widths × 3 buttons) | Dialog focus/scroll checks | Vibrations in 60 s fresh idle | Console errors | Failed asset requests |
|---|---:|---:|---:|---:|---:|
| RU | 9 / 9 | 4 / 4 | 0 | 0 | 0 |
| EN | 9 / 9 | 4 / 4 | 0 | 0 | 0 |
| AR | 9 / 9 | 4 / 4 | 0 | 0 | 0 |

| Item | Before | After | Console proof keys (each language) |
|---|---|---|---|
| 1. Hero | RU button right edge 377.39 px at widths 360 and 375 | All buttons inside at 360, 375 and 390 px; no horizontal page overflow | `01-hero` |
| 2. Current language | Active AR selection throws `helloA` and changes the URL/title | Same URL/title, no new error in RU/EN/AR | `02-current-language` |
| 3. Hidden scenarios | Repeated hidden scenario haptics during 60 s idle | No timed scenario selection; fresh idle has zero calls | `03-hidden-idle`, `after-fresh-idle.json` |
| 4. Story trail | Closely packed dots select adjacent chapters; counter hidden | Requested chapters 0/4/13/27 match; counter visible; previous/next/keyboard pass, including RTL | `04-story` |
| 5. Dialogs | Tab escapes plan and live dialogs; live focus/scroll not restored | Forward/reverse Tab stays inside all four dialogs; focus and scroll restored; named, focusable plan regions | `05-dialog-core/pro/ent/live` |
| 6. Contrast/targets | Caption #ff5a1f, kicker #8c6e58, white scenario label, KPI #77727e; finding bars only 3 px high | Caption #b8400f, kicker #6b5240, scenario #1a0b04, KPI #6b6670; every requested target ≥24×24 px | `04-story`, `06-scenario-contrast`, `06-forecast`, `06-targets` |
| 7. Core scope | Correct 5 / 1 / 10 values, independently maintained | Same values derived from plan data in all languages | `07-month` |
| 8. Brief | Placeholder-only fields, no inline errors; rejected copy still claims copied | Visible labels, localized errors; rejected copy stays Prepared, retry becomes Copied; unchanged delivery links/payload | `08-brief` |
| 9. Rendering | Maximum desktop DPR 1.75, 4 MSAA samples; draw calls continue under dialogs/hidden fixture | Maximum DPR 1.25, no MSAA allocations; zero blocked draws, rendering resumes | `09-render-start`, `05-dialog-*`, `09-hidden-render` |
| 10. Reduced motion | CSS pulse and story WAAPI animations continue | No running checked CSS/story animations; caption text stays still | `10-reduced-motion` |

Console records: [before](evidence/before.json), [after](evidence/after.json), [fresh idle](evidence/after-fresh-idle.json), [assertions](evidence/assertions.json), [baseline attempts and superseding checks](evidence/attempts.json). The before/after records combine completed checks and name their source runs; the final reduced-motion and explicitly selected English Core checks replace earlier readings.

| Language / width | Before | After |
|---|---|---|
| RU / 360 px | [image](evidence/before/ru-hero-360.jpg) | [image](evidence/after/ru-hero-360.jpg) |
| RU / 375 px | [image](evidence/before/ru-hero-375.jpg) | [image](evidence/after/ru-hero-375.jpg) |
| RU / 390 px | [image](evidence/before/ru-hero-390.jpg) | [image](evidence/after/ru-hero-390.jpg) |
| EN / 360 px | [image](evidence/before-retry-en/en-hero-360.jpg) | [image](evidence/after/en-hero-360.jpg) |
| EN / 375 px | [image](evidence/before-retry-en/en-hero-375.jpg) | [image](evidence/after/en-hero-375.jpg) |
| EN / 390 px | [image](evidence/before-retry-en/en-hero-390.jpg) | [image](evidence/after/en-hero-390.jpg) |
| AR / 360 px | [image](evidence/before-resume-ar/ar-hero-360.jpg) | [image](evidence/after/ar-hero-360.jpg) |
| AR / 375 px | [image](evidence/before-resume-ar/ar-hero-375.jpg) | [image](evidence/after/ar-hero-375.jpg) |
| AR / 390 px | [image](evidence/before-resume-ar/ar-hero-390.jpg) | [image](evidence/after/ar-hero-390.jpg) |

Other before/after images are linked by their paths in the console records.


The Core counters already read 5 competitors, 1 marketplace and 10 creators on this main revision. They now derive from the same plan rows as the cards, removing the independent copy without changing those displayed values. Language and sound controls already exceeded 24 px; finding-card indicators grew from 3 px to 24 px hit areas while retaining their thin painted bars.

The brief preserves its Telegram URL, email recipient, subject and payload (including line breaks). A rejected clipboard write stays at “Brief prepared”; a successful write changes to “Copied.” Opening Telegram or email does not confirm delivery, so the page never claims “Sent.” All inline validation and status text is localized.

Fresh 60-second idle checks at 412 px record zero vibrations in all three languages. The separate check after visiting scenarios retains the existing invitation haptic below the hero; that behavior is outside the scenario loop and its code is unchanged. The recurring scenario click/response haptics are removed. The records include both checks.

The headless browser did not expose a real background-tab visibility transition. A local fixture sets `document.hidden`, dispatches `visibilitychange`, and checks zero draw calls while hidden and positive draw calls after restoring visibility. This fixture does not change production code.

The live-chat gate, registration/form handling, abuse wall, region blocks and invitation handling are unchanged. Audio sources and the story tune are unchanged. The final built files match the disposable browser snapshot byte for byte. No deployment, Pages build or IndexNow request was triggered.

Validation completed on Node 22.23.4:

```text
node tools/seo/build.mjs
node tools/seo/build.mjs
# identical complete path set and SHA-256 bytes for all 48 generated files
node --test tools/seo/enhance/brief.test.mjs
# 3 tests, 3 passed
```

[Build output and hashes](evidence/build.json), [protected-code checks](evidence/static-verification.json), [sitemap/resource checks](evidence/seo.json). All 11 sitemap URLs return 200 with the expected language, canonical URL, h1 and valid JSON-LD. robots.txt, llms.txt, llms-full.txt and sw.js load successfully. The three homepages have no horizontal overflow at phone or desktop width, and Arabic remains RTL.

Browser verification used the existing QA tooling from commit `759ce25` in a separate checkout; no dependencies or package manifest were added to this branch. Network interception was installed before page creation. Clipboard rejection and success were explicit local fixtures. Original before-run errors are retained as defect evidence; after-run console error and failed-request lists are empty. The software renderer emitted ReadPixels performance warnings, not page errors.
