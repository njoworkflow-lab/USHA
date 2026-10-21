C1: live invitations and creature interactions

Added a primary live-chat button to the hero, a dismissible speech bubble, and a quiet pill after roughly one screen of scrolling. All three click the existing `.xl-open` entry. The bubble waits until the wake greeting finishes, appears once per tab visit (including across reloads), and rotates through three localized lines. English, Russian and neutral Modern Standard Arabic use the same content structure. The pill hides during chat, plan dialogs and the game, then returns when appropriate.

Creature presses use a fresh raycast, including on touch, to prevent selection only on her surface. The canvas and tap controls suppress selection, touch callouts and tap highlights. Normal reading text remains selectable. Desktop proximity triggers widened eyes and a small wiggle after about 1.2 seconds, with an eight-second cooldown; touch uses nine seconds of idle. The reaction yields to chat and the game, and uses the existing sound switch. Reduced motion keeps the eye expression, removes the wiggle and bubble entrance animation, and freezes the rotating hint text.

The implementation is in `tools/seo/enhance/enhance.js`, `enhance.css`, `usha-life.mjs`, `content.mjs`, and `tools/seo/ar.json`. The three home pages and hashed assets were regenerated. Live-chat code, game logic, soundtrack definitions and unrelated copy were not edited.

The baseline audit reused the already processed `c1-before-…` and `c1-baseline-en390` bridge results. Before this change, the first screen had no live-chat invitation and the canvas had `user-select: auto`. The baseline synthetic tap/double-tap/triple-click simulation already returned empty selection, so it did not reproduce native accidental selection; it did show that none of the selection events was prevented. The new guards were checked separately with real mouse presses and synthetic repeated gestures.

Screenshots were captured in Chromium at 390 × 844 and 1440 × 1000 after waking. Desktop JPEGs are reduced to 1008 pixels wide; each file is under 180 KB.

| Language | Phone before | Phone after | Desktop before | Desktop after |
| --- | --- | --- | --- | --- |
| English | [Before](c1-before-en-390.jpg) | [After](c1-after-en-390.jpg) | [Before](c1-before-en-1440.jpg) | [After](c1-after-en-1440.jpg) |
| Russian | [Before](c1-before-ru-390.jpg) | [After](c1-after-ru-390.jpg) | [Before](c1-before-ru-1440.jpg) | [After](c1-after-ru-1440.jpg) |
| Arabic | [Before](c1-before-ar-390.jpg) | [After](c1-after-ar-390.jpg) | [Before](c1-before-ar-1440.jpg) | [After](c1-after-ar-1440.jpg) |

Pill states: [phone](c1-pill-phone.jpg), [desktop](c1-pill-desktop.jpg).

Checks and measured output are saved in [checks.json](checks.json).

- All six language/viewport combinations: no horizontal overflow, no JavaScript exceptions, no failed asset requests, and no bubble overlap with the headline or buttons. Arabic retained `dir="rtl"` and computed RTL direction. The mobile CTA occupies two rows in every language.
- All 11 sitemap pages returned HTTP 200 with the expected language, canonical URL, `<h1>` and JSON-LD. `robots.txt`, `llms.txt`, `llms-full.txt` and `sw.js` returned 200.
- Each hint layer opened the existing chat dialog. Native coordinate presses opened the primary button in EN/RU/AR. Dismissal survived reload, and an EN-to-RU switch immediately updated the new labels.
- Real desktop presses on the creature prevented `mousedown` selection and returned `getSelection().toString() === ''`. Synthetic single, double and triple gestures returned empty selection on desktop and touch; their `mousedown` and `selectstart` events were prevented. The second synthetic touch start was prevented while the first was allowed. Reading-text selection remained available. A real registration input and a textarea probe in the chat dialog retained `user-select: auto`, selected the full test value, and allowed `selectstart`.
- Linger observations: zero reactions at the early check, one after the linger, still one during cooldown. Touch idle produced a reaction. Reaction counts stayed unchanged during chat and the game; the pill hid and returned correctly.
- Two final checkout builds ran with exactly `node tools/seo/build.mjs`, without overrides. All 46 generated file paths and SHA-256 hashes matched, including the favicon and logo. The generated checkout retained the default live-chat and bot-check configuration. Syntax checks and `git diff --check` passed.

Testing limits and uncertainties:

- Chromium emits a pre-existing console message about vibration before a user gesture on desktop `?skip` visits. It appears in the baseline too. There were no new console errors or JavaScript exceptions.
- The bridge does not expose native reduced-motion emulation: an explicit probe still reported `matches: false`. A separate disposable copy simulated the preference in both CSS and `matchMedia`. Chromium then reported no bubble animation, zero button transition duration, unchanged hint text after the rotation interval, and a reaction marked as reduced motion. A native OS preference check remains unverified.
- The bridge's ordinary element-click action timed out on animated elements in exploratory requests. Successful checks used its documented `jsclick` fallback or real coordinate presses. Double/triple gestures were synthesized in Chromium; native OS multi-click recognition was not independently exercised.
- Chat entry checks used a mocked `/api/hello`. Clean interaction runs disabled only the external bot-check configuration in a disposable copy; the checkout kept its defaults. The registration-input selection check also used a test-only normal-browser fixture to get past the existing automation/private-window checks. No real consultation was submitted, and backend behavior was outside this task.

Work remains uncommitted on `c1-hints-touch`. No commit, push, pull request, merge or deployment was performed. `BRIEF.md` was left untouched and untracked.
