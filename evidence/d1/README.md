# D1 content review

Implemented on `d1-content-from-decks`. Changes are uncommitted. No commit, push, pull request, merge, deployment, Pages or IndexNow action was performed. `BRIEF.md` remains an untracked instruction file.

The updated 30-slide English deck supplies EN and AR facts. The updated Russian deck supplies RU facts. Slide comments are emitted next to the figures and sections, and their references live in the content data. New Arabic copy is neutral modern standard Arabic with the existing Western digits.

## Section review table

| Section | Action | Updated deck slides (each language's own deck) |
| --- | --- | --- |
| Hero | Kept the main headline and free-week CTA; added the truth hook and “not a chatbot.” | 1, 6 |
| Animated problem | Changed four to five, monthly to weekly, and the follower example; retained the seven-seconds line as instructed. | 3; seven-seconds line is existing site content |
| Problem detail | Added all five algorithms, the same-AI illustration and three roads. | 3–5 |
| Signal / Meet USHA | Kept the live findings; added raw-signal → plain-move pairs, before-08:00 reading and six notice/move examples. The Arabic signal paragraph remains unchanged under the item-2 decision. | 6–8 |
| Numbers | Eight dotted figures in three groups; count up once on reveal, with final accessible text and a reduced-motion path. | 7, 9, 11–13, 19 |
| Her mind | Experts, living market copy, flight simulator, labelled A/B/C example, twelve skill areas and strongest abilities. AED examples on EN/AR; rubles on RU. | 9–12 |
| With / without | Six labelled illustrative outcome panels. No client results or testimonials. | 3, 5, 6, 8, 11, 14, 15, 17, 23, 24 |
| How it works | Three steps, briefing format, labelled gift-box week, ten-minute equation and three owner situations. | 13–16 |
| Section 03 / Try her | Left its markup and EN/RU demo content unchanged. Only the requested Arabic corrections to existing demo lines apply. | Separate brief; no reframe here |
| Why / team / cost | Agency, team, DIY and USHA comparison; eight roles; ratio with each deck's salary-basis footnote. RU deck prices appear only on RU. | 17–18 |
| NJO story slot | Empty comment slot before monthly delivery. Existing NJO paragraph and partners strip preserved. | 19–20 reserved for separate story brief |
| Every month | Kept deliverables and toggle; added a thirty-day rhythm illustration. | 21–22 |
| Plans | Retained complete Core/Pro detail drawers and plan footnote; aligned Enterprise in visible, static and structured content. | 22 |
| Control | Kept three approval levels. Moved monthly guarantees into the new responsibility block. | 24 |
| Guarantee / security / NDA | Pearl block with four escalation steps, dotted 100%, contract wording, monthly commitments, NDA-before-day-one, optional connections, need/no-need lists and manager link. No refund window or sales guarantee added. | 23, 25–26 |
| Free week | Kept the flow; added “Don't believe us. Test her.” | 27–28 |
| FAQ | Aligned quality/platforms and added refund, NDA and system-access answers. | 3, 6, 13, 21–23, 25–28 |
| Footer | Added “Unified Strategy. Human Action.” | 30 |
| Game, audio, live chat and hints | No changes to their content, implementation or interactions. | Outside D1 |
| Crawler output | New deck sections included in full text; short summary aligned with both decks. Comparison guide tables regenerated from the same comparison data. | Same references as above |

## Checks and screenshots

Final machine-readable bridge, content-preservation and build results are in `checks.json`. JPEGs in this directory are compressed from real Chromium PNGs; each is below 200 KB. Original full-page captures and section-by-section viewport PNGs remain in the bridge result directories named in `checks.json`.

Baseline audit: EN, RU, AR at 390 × 844 and 1440 × 960, using phone wake and desktop `?skip`. Audited hero, animated scenes, comparison, month, control, free week and FAQ, then scrolled through the whole page for full-page captures. New sections received the same after-build audit.

The checkout was built with no environment overrides. All 44 generated files were hashed across consecutive builds. All 11 sitemap pages were fetched through Chromium and checked for status, language, exact canonical URL, H1 and valid JSON-LD. `robots.txt`, `llms.txt`, `llms-full.txt` and `sw.js` were fetched too. Main page assets and console/page errors were collected by the bridge.

A preliminary after-audit began while two hashed assets were still missing from its disposable copy. The copy was corrected and the final audit used a separate complete built copy. Screenshot review also caught paired RU amounts in the EN example and an intrinsic SVG sizing issue on phones; both were corrected before the final evidence.

## Owner to decide

- **Not in the decks, owner to decide:** Official partners strip (Google, Meta, Midjourney, Runway, Kling AI); four-role NJO team and “New Journey Onward”; seven-seconds claim. All preserved as instructed.
- Other retained site-only wording: “no payment and no contract” for the free week; keeping strategy/posts if the visitor does not continue; original live-finding and chat illustration values (for example +34%, rank 47, serum review counts). These remain illustrative site examples, not new scale figures or client results.
- Arabic correction **2** (signal paragraph word order/numeral concern) and **8** (NJO paragraph lead-in) remain unchanged as instructed. Items 1 and 3–7 were applied. Item 6 uses the owner's dual “showrooms” wording; the industry fit still merits owner review.
- New Arabic legal/contract wording is a translation of the English deck, not an approved Arabic legal text. Owner review remains appropriate.
- The 7–12x ratio and the Russian-salary basis are reproduced from each deck. The Russian deck's price range arithmetic is not independently resolved; no ratio was recalculated or transferred between decks.
- Refund period, triggers and refundable scope are unspecified by the decks. The page only says the terms are written into the contract.
- The English deck's Ozon/Wildberries platform references were retained as directed. No WhatsApp number was added.
- No new NJO history or Meta partner claim was added to the empty story slot. The separate story work should retain the RU-only legal notice if it uses that deck's Meta stamp.
- The browser's pre-existing blocked `navigator.vibrate` diagnostic on desktop `?skip` is reported separately from JavaScript exceptions and failed assets. The audio/wake code was kept outside this task.

## Screenshot index

| Language / viewport | Before, full page | After, full page | Readable phone detail |
| --- | --- | --- | --- |
| EN · 390 px | [Before](before-en-390.jpg) | [After](after-en-390.jpg) | [Numbers and guarantee](detail-en-phone.jpg) |
| EN · 1440 px | [Before](before-en-1440.jpg) | [After](after-en-1440.jpg) | — |
| RU · 390 px | [Before](before-ru-390.jpg) | [After](after-ru-390.jpg) | [Numbers and guarantee](detail-ru-phone.jpg) |
| RU · 1440 px | [Before](before-ru-1440.jpg) | [After](after-ru-1440.jpg) | — |
| AR · 390 px | [Before](before-ar-390.jpg) | [After](after-ar-390.jpg) | [Numbers and guarantee](detail-ar-phone.jpg) |
| AR · 1440 px | [Before](before-ar-1440.jpg) | [After](after-ar-1440.jpg) | — |

## Final check details

- Consecutive checkout builds: **44 generated files identical**, no overrides. The built disposable site's generated files also match the checkout.
- Sitemap: **11/11 HTTP 200**; local parsing additionally confirms a nonempty, valid JSON-LD block on every page, exact canonical URL, expected language and H1. All four crawler/worker resources return 200.
- Six final page audits: no JavaScript exceptions, failed page assets or horizontal scroll; Arabic is RTL. Desktop has the same blocked-vibration diagnostic as baseline.
- Number bounds: checked actual SVG bounds after correcting phone grid sizing. Counts retain their final accessible values during animation.
- Language switching: EN → RU → EN changes headings and currency examples correctly and keeps exactly three number groups.
- Core detail drawer: all 17 rows present, including success decoding, briefing cadence, content channels, footage edits, photo shoots and designs outside social.
- Reduced-motion JavaScript path: a disposable-only `matchMedia` fixture forces the preference before the scripts run. All eight figures stay at their final glyphs; zero count-up mutations after reveal. The bridge has no documented OS media-emulation setting, so this verifies the JavaScript branch rather than an operating-system setting.
- Live dialog smoke check: opened and closed using `jsclick` for its animated entry. Cloudflare Turnstile's external script was blocked by the bridge proxy (`ERR_TUNNEL_CONNECTION_FAILED`). Bot-check completion and a live answer were not tested; live chat code and its default configuration were unchanged.
