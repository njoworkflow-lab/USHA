# Live-content restoration

Restores the 18 MISSING and 16 WEAKENED findings in [the elevation audit](content-audit-elevation.md). There are 33 distinct rows: #96 has both statuses. All locations below exist in RU, EN (`/en/…`) and AR (`/ar/…`).

Source wording: `origin/main` at `871a338`, including the bundled dictionary and arrays, `tools/seo/enhance/content.mjs` and `tools/seo/ar.json`. The elevation starts at `5cc92a5` on `claude/keen-fermi-gd4e04`. The audit itself is preserved.

| Done | Audit row | Finding | New location |
|---|---|---|---|
| [x] | 12 · MISSING | No new hires | Home hero tick → `/how/#why` |
| [x] | 13 · MISSING | Works in your messenger, 24/7 | Home hero tick; `/plans/#faqs` |
| [x] | 16 · MISSING | Nobody on your team watches them | Home `#noise` heading |
| [x] | 19 · WEAKENED | A thousand people or ten; page 1 or page 9; seven seconds | Home `#noise`, Any sector descriptions, including phones |
| [x] | 20 · MISSING | Posting more won’t beat them. Reading them will. That’s her job | Home `#noise` close |
| [x] | 22 · MISSING | 1,240 sources and the five source categories | Home `#signal` lead, including phones |
| [x] | 35 · MISSING | Decodes why niche leaders win | `/how/#why`, comparison table and interactive duel |
| [x] | 38 · MISSING | Available: prompts / office hours / holidays and sick leave / 24/7 | `/how/#why`, comparison table and interactive duel |
| [x] | 44 · MISSING | Sick leave, headspace and project-history line | `/how/#why`, immediately after the 8→1 block; home `#hints` |
| [x] | 46 · MISSING | Numbers, not promises; monthly lead | `/plans/#deliverables`, before the plan cards; home `#hints` |
| [x] | 47 · WEAKENED | Core/Pro switch; In Core / Pro adds legend | `/plans/#deliverables` |
| [x] | 48 · MISSING | Intelligence description | `/plans/#deliverables`, Intelligence card |
| [x] | 49 · MISSING | Strategy & content description | `/plans/#deliverables`, Strategy & content card |
| [x] | 50 · MISSING | Video, photo & design description | `/plans/#deliverables`, Video, photo & design card |
| [x] | 51 · MISSING | Promotion & bloggers description | `/plans/#deliverables`, Promotion & bloggers card |
| [x] | 52 · WEAKENED | All 11 animated monthly counters | `/plans/#deliverables`, Core ↔ Pro; reduced motion supported |
| [x] | 54 · WEAKENED | Website design kept in sync with products and stock | `/plans/#deliverables` Pro row, Pro card chip and plan drawers |
| [x] | 55 · WEAKENED | Customer replies Mon–Fri 10:00–18:00 | `/plans/#deliverables` Pro row and Pro drawer, all languages |
| [x] | 61 · WEAKENED | Bloggers & UGC creators | `/plans/`, Core/Pro facts and drawers; monthly counter |
| [x] | 64 · WEAKENED | Core footage edits and designs outside social: Up to 10 | `/plans/`, Core drawer and monthly counters; promotions also retain “Up to” |
| [x] | 71 · WEAKENED | Posts, stories, replies and reports under the approved plan | `/how/#control`, She runs it |
| [x] | 75 · WEAKENED | NJO GUARANTEE on the seal | `/how/#control`, guarantee seal |
| [x] | 78 · MISSING | 24/7 access in your messenger | `/how/#control`, fifth guarantee, preserving the four elevated guarantees |
| [x] | 82 · WEAKENED | Everyone has the same models; engineers make the difference | `/people/#njo`, heading above the five desks |
| [x] | 90 · WEAKENED | Four ready posts for your brand | Home `#free`; `/plans/#free`, day 6 |
| [x] | 91 · WEAKENED | Your own USHA chat, ready to take tasks | Home `#free`; `/plans/#free`, day 7 |
| [x] | 93 · MISSING | Limited number of companies | Home `#free` and `/plans/#free` |
| [x] | 96 · MISSING | Marketplace seller | Home `#free`, first brief-form step |
| [x] | 96 · WEAKENED | Food & drinks; Household goods | Home `#free`, first brief-form step; expanded preview options retained |
| [x] | 99 · MISSING | Is USHA a chatbot? | `/plans/#faqs`, first question and FAQ structured data |
| [x] | 100 · WEAKENED | Do I need to learn a new platform? | `/plans/#faqs`, second question, with messenger and 24/7 availability |
| [x] | 102 · MISSING | LinkedIn; RU Instagram, YouTube and TikTok | `/plans/`, Where she works: B2B line and Russia platform list |
| [x] | 107 · WEAKENED | Endless levels | Home `#game` introduction |
| [x] | 109 · WEAKENED | Built by NJO · Since 2016 | Home footer, alongside the existing copyright |

The home page’s detail links now lead with audit value hooks: eight roles and one week, the 28-chapter origin story, monthly numbers, and ×98 sales per pound of marketing (explicitly labelled a modelled example). The product links use the audit’s engineers and approval hooks while retaining their product names and destinations.

## Owner decisions applied

- Restore Core edits and designs to **Up to 10**, with Pro **Up to 15**.
- Restore Pro customer replies to **Mon–Fri 10:00–18:00** in EN and AR, matching RU.
- Restore the limited-opening line on both free-week sections.
- Restore the live seven-second trust description for Any sector. Sector-specific examples stay intact.

## Verification

Results and screenshot links are recorded in [the evidence gallery](restore-content-evidence/README.md). The gallery contains every changed section in all three languages at 390 and 1440 px, including both monthly switch positions and the plan drawers.

The checkout and disposable worktree are built with `node tools/seo/build.mjs`, with no live-chat overrides. The live configuration is also included on the guide and case pages, so all 29 sitemap pages retain `USHA_LIVE`.

The bundle’s executable code, `mind.*`, live-chat/abuse/region/team code and all six BRAINS/PREMIERE pages remain unchanged. No workflow, repository setting, publication, Pages build or IndexNow request is part of this change.

Validation completed with Node.js 22.23.4 and Chromium 154.0.8037.57:

- Content regression checker: **194 assertions passed** across all three languages.
- Existing brief-form tests: **3 passed**.
- Generated output: **74 files**, with **zero changes** on the second build.
- Browser sweep: **59 page/viewport combinations**, **779 assertions**, **150 screenshots**, no console errors, page errors or failed asset requests. All 29 sitemap pages and all four crawler files return 200.
- Every changed page passes the 360 px horizontal-scroll check. Arabic retains RTL layout. The Core/Pro counters, plan drawers, original FAQ answers and brief-form audience choices are checked in each language.

**Inherited exception:** the untouched Russian `/premiere/` page already scrolls horizontally at 360 px (document width 561 px; possible horizontal scroll 201 px). The page is byte-identical to the elevated preview. It is documented rather than changed because the owner explicitly excluded PREMIERE from this task. All other sitemap pages pass the 360 px check.

Supplemental interaction checks passed: home after entry at 360 px in all three languages, six normal-motion rapid-switch scenarios, and RU → EN → RU hero text/destination switching.
