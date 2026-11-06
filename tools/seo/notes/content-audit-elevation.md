# Content audit: has the elevated preview dropped live content?

Date: 5 Nov 2026. Read-only audit; nothing in `njoworkflow-lab/USHA` was changed.

- **Live:** `njoworkflow-lab/USHA` `origin/main` at `871a338`. I read the built `index.html`, `en/index.html` and `ar/index.html`, the app bundle's dictionary and data arrays (`assets/app-4c1acbf08a.js`: `wl`, `Al` compare, `iu` areas, `su` Pro-only, `Ms` findings, `Tl` chats, `Ta` week), and the enhancement layer (`tools/seo/enhance/content.mjs`, `try.js`, `enhance.js`, `live.js`, `story/*`). The commits on main that the preview lacks are QA tooling only (`qa/`, `.github/workflows/qa.yml`), so no live copy is missing because of branch drift.
- **Preview:** `origin/claude/keen-fermi-gd4e04`, covering the home page and `/how/`, `/people/`, `/plans/` and `/cases/` in RU (root), EN and AR, plus the copy injected at runtime (`launch-copy.mjs`, `pages-copy.mjs`, `content.mjs`, `mind.mjs`, `ar.json`, `assets/app-bf55015224.js`, `assets/pages-abea6daded.js`).
- **Languages:** all three languages are built from one shared set of dictionary keys, so each finding below holds for RU, EN and AR unless a row says otherwise. Quotes are in English.
- **Status key:**
  - **KEPT**: same content, same or richer form.
  - **KEPT (reworded)**: the meaning survives in new words.
  - **MOVED**: the content survives on a detail page.
  - **WEAKENED**: shortened, made less specific or reduced.
  - **MISSING**: no equivalent anywhere in the preview.

## Summary

| | Count |
|---|---|
| MISSING | **18** (rows #12, 13, 16, 20, 22, 35, 38, 44, 46, 48, 49, 50, 51, 78, 93, 96, 99, 102) |
| WEAKENED | **16** (rows #19, 47, 52, 54, 55, 61, 64, 71, 75, 82, 90, 91, 96, 100, 107, 109) |
| Kept, moved or elevated | every other row (#96 counts in both lists) |

Every interactive piece survives: scenarios, live chat, 90 days, the before/after videos, the game, the story, partners, the 8→1 countdown, the comparison duel and the free-week form. The losses are mostly the **short, memorable value lines** (24/7 in your messenger, no new hires, "Posting more won't beat them", the sick-leave line, "Numbers, not promises") and the **monthly-deliverables block**, which the preview hides on `/how/` and does not rebuild on `/plans/`.

**Top 5 to restore**
1. **"Numbers, not promises": the monthly block.** It has four area descriptions, 11 counters and the Core/Pro switch. It is hidden on `/how/` (`id="areas"`, `id="mtog"` and `id="proonly"` are set to `hidden`, and `containers().areas = ''`). The build comment says "the counters live in Plans only", but `/plans/` does not render them. Rebuild the block on `/plans/` above the cards, and put a one-line hook on the home page.
2. **"Works in your messenger, 24/7"**, as a hero tick, in the guarantee, in the FAQ and in the compare row. The word "messenger" now appears **0 times** on the site.
3. **"She never goes on sick leave, never says 'I'm not in the right headspace'…"**. Its key `w_sick` was overwritten with "Ready in a week. Working every hour…". Bring it back under the 8→1 on `/how/`.
4. **"Posting more won't beat them. Reading them will. That's her job."** and **"Nobody on your team watches them."** These were the home page's sharpest hooks, in section 01.
5. **The free-week specifics and the form's audience.** Restore "Four ready posts for your brand" and "Your own USHA chat, ready to take tasks" (now vague day 6 and day 7 lines), and the **"Marketplace seller"** option in the brief form (it was dropped, and marketplace sellers are a core audience).

Also check with the owner: the **Core plan volumes went down** (edits of your footage "Up to 10" → "8", designs outside social "Up to 10" → "8"), and the EN/AR Pro row lost "Mon–Fri 10:00–18:00" (now "Included"; RU keeps the hours).

---

## 1. Every live content element and where it lives in the preview

### Gate, header, hero (live home)

| # | Live element (quoted) | Preview location | Status |
|---|---|---|---|
| 1 | Gate: "Hold · 3 s" / "Press and hold to wake USHA" | Home gate | KEPT |
| 2 | Gate line: "Your market is out there. Loud, scattered, moving." | Home gate: "Right now, your market is deciding who wins your customer." + "Prices, searches, auctions and buyers shift every hour. Hold, and wake the mind that reads them." + "Enter →" | KEPT (reworded, richer) |
| 3 | Wake bubble: "Hello, I'm USHA. I read your market, so you don't have to." | Home | KEPT |
| 4 | Nav: "How she works · Try her · Plans", CTA "Start free week" | Header: Home · How she works · Cases · The people · Plans · BRAINS · PREMIERE; CTA "Free consultation"; phone menu | KEPT (expanded) |
| 5 | Kicker: "USHA by NJO · Business intelligence engine" | Home hero: "Meet USHA, your marketing director" | KEPT (reworded) |
| 6 | H1: "The algorithm that understands algorithms." | Home hero H1 | KEPT |
| 7 | Sub: "Every day she reads your marketplaces, competitors and buyers, tells you what changed and why, and does the work that follows." | Home hero: "She understands what moves your sales, decides what grows your profit, and leads the work until your numbers prove it." | KEPT (reworded) |
| 8 | Button "Talk to USHA now · LIVE" (live.js) | Home hero: "Get a free consultation · Live" | KEPT (reworded) |
| 9 | Button "Start your free week" | Home hero | KEPT |
| 10 | Button "See her work ↓" | Home hero scroll cue: "See what decides your sales" | KEPT (reworded) |
| 11 | Tick "First week free" | Removed from the ticks; the "Start your free week" button stays | KEPT (in the button) |
| 12 | Tick **"No new hires"** | Not in the hero. The idea survives only as the 8→1 on `/how/#why` | **MISSING** (home hook) |
| 13 | Tick **"Works in your messenger, 24/7"** | Nowhere. "messenger" appears 0 times on the site | **MISSING** |
| 14 | "Scroll · move the cursor through the noise" | "See what decides your sales" | KEPT (reworded) |

### 01 · The problem (`#noise`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 15 | Kicker "01 · The problem" | Home "01 · The forces" | KEPT |
| 16 | H2: "Four algorithms decide your sales. **Nobody on your team watches them.**" | Home: "Four algorithms decide your sales." The second sentence is gone | **MISSING** (second sentence) |
| 17 | Lead: "They decide who sees you, who finds you, what you pay and who buys. Their rules change every month." | Home: "They shift every hour, and every shift moves money toward you or away from you. Pick your sector to see yours." | KEPT (reworded) |
| 18 | Four galaxies: feed, search, auction, buyer (3D) | Home, same four, plus a new **sector picker** (9 sectors × 4 forces of money lines) | KEPT (elevated) |
| 19 | Force lines: "Decides who sees your post: a thousand people or ten." / "Decides if your product is on page 1 or page 9." / "Decides what each click and each customer costs you." / "Decides in seven seconds whether to trust you." | Home: "Who gets seen." / "Who gets found by a buyer who already wants to pay." / "The price of every customer you buy." / "The three seconds a buyer gives your photo, price and reviews." Plus money lines per sector | **WEAKENED** (the vivid images "a thousand people or ten" and "page 1 or page 9" are gone; "seven seconds" became "three seconds") |
| 20 | Close: **"Posting more won't beat them. Reading them will. That's her job."** | Home: "Four forces, millions of signals. Here is what she does with them." | **MISSING** |

### 02 · What she does (`#signal`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 21 | H2: "She reads everything. You get only what matters." | Home: "Millions of signals in. One decision out, with the money written on it." | KEPT (reworded, sharper) |
| 22 | Lead: "Every day USHA reads **1,240 sources** around your business: **marketplaces, competitors, reviews, search and ads**. When something moves, you get the finding and her next move." | Home: "Scroll, and watch her decide: the signals that move the money, the arithmetic and the rule that would stop her." | **MISSING** (the number and the list of sources) |
| 23 | Rotating finding cards (the `Ms` array, 4 cards: "−18% · They cut the price overnight · You hear it from her at 08:02 · Answer with a bundle and keep your margin"; "+34% 'Power bank 20000'…"; "×212 packaging…"; "19:00 demand moved…") | Home, the same `Ms` data, now inside the "Her mind" layer (signals stream, causes, arithmetic, stop rule). "Illustrative examples" became "Modelled example" | KEPT (elevated) |

### 03 · Try her (`#talk`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 24 | Kicker / H2 / lead: "03 · Try her" / "Pick your business. Watch her think." / "Real questions owners ask. Every answer comes with a finding, a reason and a move." | Home: "Try her" / "Bring her your business. See what she sees." / "A free consultation on your own numbers…". The finding-reason-move idea moved into the scenarios card | KEPT (reworded) |
| 25 | Scenarios card: "Pick a business and watch how she thinks: a finding, a reason, a move." + "Open scenarios →" + chip art "Sweets · Cafés · Beauty / Why did orders drop? / Found it. Here's the fix." | Home: "Watch her work through a business like yours: what she found, why it matters, and the move." + "Modelled" tag | KEPT |
| 26 | Scenario chat demo (the `Tl` array: Sweets, Drinks, Household… with question, signals, answer, move and "prep" counts) and "the week" (the `Ta` array: Mon to Fri) | Home, identical data | KEPT |
| 27 | Live card: "LIVE NOW · Consult your new Marketing Director. Brief her on your business, then ask four questions. Real answers on your market and your numbers." + steps "Your brief · 4 questions · Your project manager follows up" + "Ask USHA live" | Home: "A free consultation with your new marketing director · She tells you where the money is in your market, where it's leaking…" + "Bring what you know…"; the same three steps; "Get a free consultation" | KEPT (reworded, richer) |
| 28 | 90 days card: "Fast-forward 90 days · See your business 90 days from now: without USHA, and with her." | Home: "Your next 90 days, both ways · …on its current course, and with her leading. Modelled for your sector." · "See both futures →" | KEPT (reworded) |
| 29 | 90-day viewer: 12 screens (Marketplace sales, Marketplace ads, Social ads, Social media, SEO, Website sales, Customer service, Stock, Market and competitors, Reviews, Search position, Content), the drag divider, the "Her move" lines, the diff strip "Same 90 days · with USHA vs without", the illustrative-example note | Home, `try.js` unchanged | KEPT |
| 30 | Video before/after: "Generic AI clip: the same look as everyone else's." / "Made with USHA: a concept, a story and a cinematic finish." | Home, inside the 90 days ("Content" screen) | KEPT |
| 31 | USHA life: "Tap her. Poke her. Tickle her. Leave her alone for a while." + moods and bubbles | Home | KEPT |

### 04 · Why her (`#why`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 32 | H2: "Everyone has the same AI. She uses it differently." | `/how/#why`: "Everyone has the same models. Nobody else has what she learned from 700 projects." + "Compare her with what you'd use instead." | MOVED (reworded, stronger) |
| 33 | Compare row "Knows your business: Starts from zero every time / Through one account manager / Until people leave / **Permanent memory of everything**" | `/how/#why`: "…Your products, margins and seasons from week one, and every decision since" | MOVED (reworded) |
| 34 | Row "Watches competitors and marketplaces: No / Occasionally, on request / When there is time / Every day" | `/how/#why` "Reads your market … Every day: competitors, platforms and buyers" | MOVED |
| 35 | Row **"Decodes why niche leaders win: No / Rarely / Rarely / Continuously, and turns it into actions"** | No compare row. "Success decoding: Monthly / Twice a month" survives only in the `/plans/` drawer | **MISSING** (as a value claim) |
| 36 | Row "Quality of visuals: Generic, looks like AI / Good, at a high price / Depends on who you hire / From your products, in your brand style" | `/how/#why` "Creative … From your real products, in your brand's look, reviewed by senior art directors" | MOVED (richer) |
| 37 | Row "Facts and numbers: Can be invented / Depends on the team / … / Your data and checkable sources" | `/how/#why` "…Your data and named sources, with assumptions shown" | MOVED |
| 38 | Row **"Available: When you prompt it / Office hours / Office hours, minus holidays and sick leave / 24/7"** | No row. The new "Ready" row is about start time, not availability | **MISSING** |
| 39 | Row "Does the work end to end: No, you do it / Yes, slowly / Yes, if fully staffed / Research, plan, create, publish, measure" | `/how/#why` "Leads the work … Strategy to measurement, as one plan" | MOVED (reworded) |
| 40 | (new in the preview) Rows "Decides", "Answers to", "Ready" | `/how/#why` | new |
| 41 | Comparison "duel" (phones: one rival at a time, on a lit spine) | `/how/#why` (`enhance.js` ships in `pages-*.js`) | KEPT |
| 42 | "One engine instead of a department." + "A department means eight full-time roles, plus analysts, influencer managers and customer support…" | `/how/#why` | MOVED |
| 43 | 8→1 countdown: "8 → 1 months of hiring · 1 week to start", 8 roles handing over (Strategy, Plans, Ads, Channels, Video, Visuals, Design, Website), "ONE ENGINE · ONE MEMORY", "Ready in one week. Works 24/7. Never leaves with your project history." | `/how/#why` (restored by commit `c37579e`) | MOVED |
| 44 | **"She never goes on sick leave, never says 'I'm not in the right headspace', and never leaves for a competitor with your project history."** | `w_sick` overwritten: "Ready in a week. Working every hour. Your history stays with your business, under an NDA from day one." | **MISSING** |
| 45 | (new) Seven orbits: "One mind leads your whole marketing operation." (Intelligence … Measurement), with an approve button | `/how/#why` | new |

### 05 · Every month (`#month`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 46 | **"05 · Every month · Numbers, not promises."** + "What USHA delivers for one brand every month. Switch the plan to compare." | Section reused for "A month with her, day by day." The old heading and lead are nowhere | **MISSING** |
| 47 | Core/Pro switch (`#mtog`) and the legend "IN CORE / PRO ADDS" | `/how/#month`, rendered but `hidden` | **WEAKENED** (invisible) |
| 48 | **Area "Intelligence"**: "Market, marketplace and competitor radar. Success decoding of your niche's leaders. A regular brief that ends in actions: launch, change, promote or stop." | Not rendered (`areas: ''`) | **MISSING** |
| 49 | **Area "Strategy & content"**: "Quarterly online and offline strategy. Monthly plan and content calendar. Regular publishing across all your channels." | Not rendered (a fragment survives in "Both plans include") | **MISSING** |
| 50 | **Area "Video, photo & design"**: "Videos without a shoot, from idea and script to the finished clip, plus editing of your footage. Photo shoots from your real products. Everything in one visual style." | Not rendered | **MISSING** |
| 51 | **Area "Promotion & bloggers"**: "Offer, mechanics, copy and designs for each promotion. Ads within the budget you approve. Bloggers and UGC creators found, briefed and coordinated." | Not rendered | **MISSING** |
| 52 | 11 animated counters (Core→Pro): competitors 5→10, marketplaces 1→3, posts 16→20, stories 32→40, videos 4→6, edits 10→15, photo shoots 1→2, designs 10→15, promotions 1→2, ad platforms 1→2, bloggers & UGC 10→30 | Numbers only: 6 on the `/plans/` cards, all of them in the "See everything in this plan" drawer. No counters | **WEAKENED** |
| 53 | Only in Pro: "Packaging design" / "Stock intelligence" | `/plans/` Pro card chips "+ Packaging design", "+ Stock watch" | KEPT |
| 54 | Only in Pro: **"Website design, kept in sync with your products and stock"** | `/plans/` chip "+ Website design"; the drawer says "Included" | **WEAKENED** |
| 55 | Only in Pro: **"Customer replies, Mon–Fri 10:00–18:00"** | `/plans/` chip "+ Customer replies"; drawer EN "Included", AR "مشمول"; RU keeps "пн–пт 10:00–18:00" | **WEAKENED** (EN, AR) |
| 56 | (new) A month with her, day by day: 10 decision days, "Your time this month: 62 minutes", "She asks you for at most three decisions a day" | `/how/#month` | new |

### 06 · Plans (`#plans`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 57 | H2: "Same engine. Different appetite." + "Core runs the full engine for one brand. Pro adds more channels and volume, customer replies, stock intelligence and website design." | `/plans/#plans`: "The same mind on every plan. The scope grows with your business." + the same lead, reworded | MOVED (reworded) |
| 58 | Old plan cards (`#plancards`): "USHA Core · The engine for one brand, one marketplace, one ad platform · Up to 5 competitors tracked · 1 marketplace · Up to 16 posts · 32 stories · Up to 4 videos · 1 photo shoot · 1 ad platform · 1 promotion"; Pro; Enterprise "All eight areas…" | `/plans/`, same markup | MOVED |
| 59 | Core card: "One brand, the full engine · The full engine for one brand." + 6 facts | `/plans/`: "One brand, the whole operation · For a brand that sells mainly through one marketplace or store and wants it led properly." Same 6 facts | MOVED (reworded) |
| 60 | Pro card "Most chosen · More channels and volume, customer replies, stock intelligence and website design." + 6 facts + Only in Pro chips | `/plans/`: "For a brand selling across several marketplaces and stores." Same facts and chips | MOVED (reworded) |
| 61 | Fact label **"Bloggers & UGC creators"** | `/plans/` "Creators who film your product" | **WEAKENED** (drops "bloggers" and influencer posting; check the intent) |
| 62 | Enterprise: "For groups and larger companies · Configured around your company · Everything in Pro, plus · Customers replies at scale · Operations stock & sales · Working tools dashboards · sites · automations" + drawer "Every Pro capability, sized to your company" | `/plans/` | MOVED |
| 63 | "See everything in this plan ↗" drawer (`plansGroups`: Market intelligence / Growth & sales / Content, 17 rows) | `/plans/`, same drawer | MOVED |
| 64 | Drawer rows Core **"Edits of your footage: Up to 10"** and **"Designs outside social: Up to 10"** | `/plans/` drawer: "8" and "8" (Pro stays 15/15). "Promotions: Up to 1/2" became "1/2" | **WEAKENED** (lower Core volume; confirm it matches the deck) |
| 65 | "Both plans include Daily market radar · quarterly strategy and monthly plan · one brand visual system · cross-posting to every channel · 24/7 chat with USHA · monthly report" | `/plans/`: "a daily read of your market · … · publishing to every channel · a direct line to USHA at any hour · the monthly review" | MOVED (reworded) |
| 66 | Note: "'Up to' is a monthly maximum; your exact plan is agreed at the start. Advertising budgets, creator fees and products for collaborations are paid separately." | `/plans/` | MOVED |
| 67 | (new) Price model, and "Where she works" by market (UAE, KSA, Egypt, Russia, Kuwait/Qatar/Bahrain/Oman) | `/plans/` | new |
| 68 | "Choose with your project manager" CTAs | `/plans/` | MOVED |

### 07 · You stay in control (`#control`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 69 | H2 "Your yes. Her move." | `/how/#control` | MOVED |
| 70 | Lead: "You decide how independently she works. Budgets and promotion terms are always yours to approve. She supports your sales team and never closes deals or takes payments." | `/how/#control`: "She brings the decision, the money and the plan B. You approve…" + "How much she does alone depends on what's at stake." + "Yours alone: Contracts, payments, hiring and deals. She prepares the case. You sign." | MOVED (reworded, richer) |
| 71 | Tier "Runs automatically · **Posts, stories, replies and reports** under the approved plan" | `/how/#control` "She runs it · Daily work your approved plan already covers. You see every step as it happens." | **WEAKENED** (no longer says what runs on its own) |
| 72 | Autopilot widget feed: "✓ Post published · ✓ 14 replies sent · ✓ Weekly report ready · ✓ Stories scheduled" | `/how/`: "Bids moved inside your cap · Creator brief sent… · Stock alert… · Ad paused on a faulty batch · This week's numbers, with her read" | KEPT (replaced with richer examples; content production is not shown, see #71) |
| 73 | Tier "Needs your 'yes' · Strategy, budget, promotion terms" + mini widget "Launch the '−15% weekend' promo? Yes / Not now / Approved. Launching Friday." | `/how/` "She waits for your yes · Budgets, prices, promotions, new markets…" + a full approval card "Add SAR 350K to the gift sets for White Friday week… Approve / Not now / Plan B" | KEPT (elevated) |
| 74 | Tier "Never without you · Closing deals, taking payments" + lock "Deals · Payments · ONLY YOU" | `/how/` "Yours alone · Contracts, payments, hiring and deals" | KEPT (expanded) |
| 75 | Guarantee seal ring: "**NJO GUARANTEE** · EVERY MONTH · CHECKED ·" | `/how/` "GUARANTEED · EVERY MONTH · REVIEWED ·" | **WEAKENED** (NJO's name is off the seal) |
| 76 | Guarantee head "What NJO guarantees" | `/how/` "What is guaranteed, every month" | KEPT (reworded) |
| 77 | Guarantee "The agreed volume of work, every month" | `/how/` "The agreed scope, delivered in full" | KEPT |
| 78 | Guarantee **"24/7 access to USHA in your messenger"** | Not in the guarantee or anywhere else (messenger: 0 hits) | **MISSING** |
| 79 | Guarantee "Every output checked against NJO's quality standards" | `/how/` checklist "Before anything reaches you: Numbers recalculated · Sources dated within 30 days · Brand style matched · Claims backed · The right language" + "Senior experts behind every move that carries money" | KEPT (elevated) |
| 80 | Guarantee "A monthly report with honest conclusions and next month's plan" | `/how/` "A monthly review in plain numbers: what earned, what didn't, and next month's plan" | KEPT |
| 81 | (new) Stop rule, approval log, who answers for what, what you risk, the risk ladder | `/how/#control` | new |
| 82 | Engineers H3: **"Everyone has the same AI models. The engineers make the difference."** | Not rendered. The idea is absorbed into the `/how/#why` H2 and `/people/` "What she was trained on" | **WEAKENED** |
| 83 | Engineers para: "USHA is built by NJO: strategists with over ten years of methods, art directors who set her visual standards, analysts who taught her to read markets, and engineers who make her smarter every month." | `/people/#njo`, five desks (strategist, art director, analyst, engineer "…makes it sharper every month", project manager) | MOVED (elevated) |
| 84 | Facts "NJO · New Journey Onward · Since 2016 · GCC · Egypt · Russia" + "Visit NJO ↗" | `/people/#njo` slider ("Since 2016 · a decade of building brands across the Gulf, Egypt and Russia", "20+ countries", "700+ projects", "55+ industries", "7 branches") + "Visit NJO ↗" | MOVED (richer) |
| 85 | Story cover: "A STORY · 28 CHAPTERS · BY USHA · How I was born. · The story of NJO, told by me. Some of it is true… Guess which. · Open my story · 03:07 · psst. it's mostly about them." + the 28-chapter story | `/people/` (cover mounts on `#njo .eng`): "Her origin · 28 chapters · told by USHA"; story text unchanged except "22 countries" → "20+ countries" | MOVED |
| 86 | "Official partners: Google · Meta · Midjourney · Runway · Kling AI" | `/people/#njo` | MOVED |

### 08 · Start (`#free`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 87 | H2 "Your first week is on us." | Home and `/plans/#free`: "The first seven days are a gift." | KEPT (reworded) |
| 88 | Lead: "USHA calibrates to your business: products, market, competitors and channels. At the end of the week you get:" | "She calibrates to your business. By day seven, you hold what a new marketing director would bring you at the end of month one." Days 1–4 cover products, market and competitors | KEPT (reworded) |
| 89 | Deliverable "Your strategy, with online and offline priorities" | `/plans/` Day 7 "The strategy, and the mind to run it. Online and offline priorities in order…" | MOVED |
| 90 | Deliverable **"Four ready posts for your brand"** | `/plans/` Day 6 "Your brand, in market. The first work in your brand's look, ready to go live on your yes." | **WEAKENED** (the count and "posts" are gone) |
| 91 | Deliverable **"Your own USHA chat, ready to take tasks"** | `/plans/` Day 7 "…USHA calibrated to lead the work." | **WEAKENED** (no "your own chat") |
| 92 | "YOUR DECISION · Then you decide. If you continue, she starts the agreed plan the following week." | Home and `/plans/`: "Day 8 is your decision. Continue… Stop, and everything she built stays yours." | KEPT (richer) |
| 93 | **"USHA is opening to a limited number of companies."** | Deliberately removed (`launch.mjs`: "no scarcity line") | **MISSING** (owner to confirm) |
| 94 | (new) Seven days, one gift each; "How the week works" (needs, who checks, NDA, day-4 checkpoint, 14-day stop rule) | `/plans/#free`; the home page links to it with "The seven days, day by day →" | new |
| 95 | Brief form: 3 steps, "What do you sell? / What hurts most right now? / Where can your project manager reach you?", name / company / contact, "No payment and no contract for the free week." | Home `#free` (`/plans/` has a "Start your free week" card that links to it) | KEPT |
| 96 | Form options: "Food & drinks · Household goods · Beauty & care · Fashion · **Marketplace seller** · Café & restaurant · Real estate · Auto · B2B & industry · Something else" | Home: "Retail & e-commerce · Consumer goods · Beauty & fragrance · Fashion & luxury · Restaurants & cafés · Real estate · Automotive · Health & clinics · B2B & industry · Something else" | **MISSING** ("Marketplace seller") + **WEAKENED** ("Food & drinks" and "Household goods" folded into "Consumer goods") |
| 97 | Form done: "Brief prepared · Copy your brief, then send it to your project manager in Telegram or by email. Nothing has been sent yet." · Open Telegram · Send by email · Copy brief | Home: "Your brief is prepared · Check it, then send it to your project manager. Nothing has been sent yet." Same buttons | KEPT |

### Questions (`#faqs`)

| # | Live element | Preview location | Status |
|---|---|---|---|
| 98 | H2 "Before you decide." | `/plans/#faqs` + "Ask her this in a free consultation" | MOVED |
| 99 | **Q "Is USHA a chatbot?"**, A "No. You talk to her in one chat, but she works on her own every day: she reads your market, plans, produces and publishes within the plan you approve." | Not among the 8 new questions | **MISSING** |
| 100 | Q "Do I need to learn a new platform?", A "No. **She works in your messenger.** You approve the decisions that matter; she does the rest and reports every month." | Only "There's no new system to learn", inside "How much of my time does it take?" | **WEAKENED** |
| 101 | Q "Who checks the quality?", A "NJO's strategists and art directors set her standards, and every output is checked against them…" | Inside "Isn't this the same AI everyone has?" ("Every move passes a check…") + the `/how/` checklist and senior experts | KEPT (merged) |
| 102 | Q "Which markets and platforms?", A "The GCC, Egypt and Russia. Amazon, noon, Namshi, Google, Instagram, Facebook, TikTok, Snapchat, YouTube, X, **LinkedIn** and others." (RU: Wildberries, Ozon, Yandex Market, VK, Telegram, Instagram, Dzen, YouTube, RuTube, TikTok) | `/plans/` "Which markets and sectors?" + "Where she works" by market | KEPT (elevated), except **LinkedIn**, which is in no list (**MISSING**). The RU Russia row now omits Instagram, YouTube and TikTok (check this was intended) |
| 103 | Q "Are advertising budgets included?", A "No. Advertising budgets, creator fees and products for collaborations are paid separately, and you approve every budget." | `/plans/` "How does pricing work? Are ad budgets included?" | KEPT (merged) |
| 104 | Q "What happens after the free week?", A "…If not, you keep the strategy and the posts." | Not an FAQ any more; `#free` says "Stop, and everything she built stays yours." | KEPT (moved into the section) |
| 105 | (new) 8 FAQs: approvals, failure, pricing, agency, data, time, same AI, markets | `/plans/#faqs` | new |

### 09 · Break (`#game`) and footer

| # | Live element | Preview location | Status |
|---|---|---|---|
| 106 | "09 · Break · You read all the way here. Let's play." | Home "A break · …" | KEPT |
| 107 | "**Endless levels:** catch the signals, burst the noise, dodge the fake-news imps and beat the Noise King. How far can you get?" | Home, without "Endless levels:" | **WEAKENED** (trivial) |
| 108 | Game: 5 levels (Morning scan, Price war, Ad storm, The dark feed, The Noise King), hints, shield, the "USHA-QUIET-30" egg, the "meet the people who built her" break screen | Home + a new end screen "Level {l}. You caught {s} signals… Get a free consultation · Play again" | KEPT (elevated) |
| 109 | Footer: "The algorithm that understands algorithms. **Built by NJO · Since 2016**" | Home footer: "For owners who decide with numbers. The Gulf · Egypt · Russia. © 2026 USHA by NJO" | **WEAKENED** (the NJO "since 2016" credit is off the home page) |
| 110 | Footer contact: "Telegram · @njo_manager · darina@…", njobusinesssolutions.com, "Back to the top" | Home + detail-page footers | KEPT |
| 111 | Footer guides (3 links) | Home: guide cards with one-line descriptions + "Cases" | KEPT (elevated) |

### New in the preview, with no live counterpart (for completeness)

Home: `#proof` (3 modelled outcomes + "See the cases"), `#taught` (700+ / 10+ / 20+ / 55+ / 18), `#hints` (doors to How, People, Plans, BRAINS, PREMIERE). The `/cases/` page (12 modelled cases with filters). The `/brains/` and `/premiere/` teasers.

---

## 2. Where to restore each MISSING or WEAKENED item

| Item | Status | Recommended home | Reason |
|---|---|---|---|
| #12 "No new hires" | MISSING | **Home** hero tick, linking to `/how/#why` | It is the 8→1 promise in three words and the cheapest hook on the page. |
| #13, #78, #100 "Works in your messenger, 24/7" / "24/7 access to USHA in your messenger" / "She works in your messenger" | MISSING / WEAKENED | **Home** hero tick + `/how/#control` guarantee + `/plans/#faqs` (restore "Do I need to learn a new platform?") | It is the strongest objection-killer (no new tool to learn), and it is now absent from the whole site. |
| #16 "Nobody on your team watches them." | MISSING | **Home** 01 H2 second line | It names the owner's blind spot; without it, 01 states a fact but no problem. |
| #20 "Posting more won't beat them. Reading them will. That's her job." | MISSING | **Home** 01 close, before "Here is what she does with them." | It is the contrarian hook that sets up 02; a value line, not a summary. |
| #19 "a thousand people or ten" / "page 1 or page 9" / "seven seconds" | WEAKENED | **Home** 01 "Any sector" force lines | Concrete images beat abstractions; keep the sector lines for the other chips. Settle three seconds versus seven. |
| #22 "1,240 sources… marketplaces, competitors, reviews, search and ads" | MISSING | **Home** 02 lead ("1,240 sources a day, millions of signals…") | A countable, specific claim, and it says what she reads. Check the number is still true. |
| #35 Compare row "Decodes why niche leaders win" | MISSING | `/how/#why` compare table | It is a differentiator the drawer only hints at ("Success decoding"). |
| #38 Compare row "Available … 24/7" | MISSING | `/how/#why` compare table | The office-hours contrast is one of the clearest wins against the agency and in-house columns. |
| #44 "She never goes on sick leave, never says 'I'm not in the right headspace'…" | MISSING | `/how/#why` under the 8→1, and as a **home** hook in `#hints` | It is the most quotable, human line on the site; restore the key `w_sick` (or add a new one for the NDA line). |
| #46 "Numbers, not promises." + lead | MISSING | `/plans/` (new block above the cards) and a **home** one-liner | The owner's "numbers" framing; plans need it more than anywhere. |
| #47–#52 Monthly areas, 11 counters, Core/Pro switch | MISSING / WEAKENED | `/plans/`, rebuilt as an "Every month, in numbers" block, or unhidden on `/how/#month` under the day-by-day | The build claims "counters live in Plans only", but they render nowhere. This is the deliverables' full detail. |
| #54 "Website design, kept in sync with your products and stock" | WEAKENED | `/plans/` Pro chip and drawer row | The sync is the value; "Website design" alone is a commodity. |
| #55 "Customer replies, Mon–Fri 10:00–18:00" | WEAKENED (EN, AR) | `/plans/` drawer row (EN and AR "Mon–Fri 10:00–18:00", as RU) | It is a service-level fact, and the three languages now disagree. |
| #61 "Bloggers & UGC creators" | WEAKENED | `/plans/` card and drawer label | Keep "bloggers" so influencer reach is not read out of the plan. |
| #64 Core edits and designs "Up to 10" → "8" | WEAKENED | `/plans/` drawer (owner to confirm against the deck) | A silent cut in the plan promise must be a recorded decision. |
| #71 "Posts, stories, replies and reports under the approved plan" | WEAKENED | `/how/#control` "She runs it" line (add the list back) | Owners need to see that the routine content runs without them. |
| #75 "NJO GUARANTEE" seal | WEAKENED | `/how/#control` ring text | The guarantee carries NJO's name; that is the trust anchor. |
| #82 "Everyone has the same AI models. The engineers make the difference." | WEAKENED | `/people/#njo` as the desks' heading | It frames the desks; today the people page opens without that claim. |
| #90 "Four ready posts for your brand" | WEAKENED | `/plans/#free` Day 6, plus the **home** free-week line | A count makes the gift tangible; "the first work" is vague. |
| #91 "Your own USHA chat, ready to take tasks" | WEAKENED | `/plans/#free` Day 7 | It is the hand-over moment of the free week, and it ties to the messenger promise. |
| #93 "USHA is opening to a limited number of companies." | MISSING | **Home** `#free` (only if the owner keeps it; the launch direction removed it on purpose) | The owner's rule says nothing is cancelled without a decision; record either way in `DECISIONS.md`. |
| #96 "Marketplace seller" option (+ "Food & drinks", "Household goods") | MISSING / WEAKENED | **Home** brief form | Marketplace sellers are a named core audience; the form should let them say so. |
| #99 FAQ "Is USHA a chatbot?" | MISSING | `/plans/#faqs` | It is the first question every visitor has, and its answer ("she works on her own every day") is a value statement. |
| #102 LinkedIn (and RU Instagram, YouTube, TikTok) | MISSING | `/plans/` "Where she works" (a B2B line: LinkedIn) | The B2B sector is offered, but its main platform is not listed. |
| #107 "Endless levels" | WEAKENED | Home `#game` | Trivial; one word of fun. |
| #109 Footer "Built by NJO · Since 2016" | WEAKENED | Home footer | It credits the makers on every scroll's end and costs nothing. |

---

## 3. The home-page review

**Verdict: mostly engaging; summary-like in one stretch.** The first half is strong and is not a summary. The gate gives a reason to hold. The hero keeps the slogan. 01 is now interactive (sector picker, money lines). 02 is a real show ("Her mind": signals in, arithmetic, stop rule). 03 Proof leads with money ("×98 sales on every pound of marketing"). The 700+ constellation earns the "trained on NJO" claim. The scenarios, live consultation, 90-day before/after and game keep the page playful.

**Where it turns into a summary:** `#hints`, "The rest of her story, one step away". It is a sitemap in prose: "Who decides what, why one mind replaces a department of eight, and a month with her, day by day. Open→". It describes pages instead of selling values. Meanwhile the home page has lost its quick value lines: no-hires, messenger/24/7, "Posting more won't beat them", the sick-leave line, "Numbers, not promises". So a visitor who doesn't click never hears the department, availability and volume arguments. The free week is compact but generic ("The first seven days are a gift"), with no count of what you get.

**Fix pattern:** each door in `#hints` (and the free-week block) should lead with one hook (a number or a sharp line), then "Open →". The detail pages already hold the depth.

### Values the home page should carry as hooks

| Hook (home, one line) | Where it sits on home | Full detail |
|---|---|---|
| "No new hires. Works in your messenger, 24/7." | Hero ticks (replace or add to "The Gulf, Egypt and Russia") | `/plans/#faqs` (messenger FAQ), `/how/#why` |
| "Four algorithms decide your sales. Nobody on your team watches them." / "Posting more won't beat them. Reading them will." | 01 heading and close | `/how/#why` compare |
| "1,240 sources a day. You get only what matters." | 02 lead | `/how/#why` orbit "Intelligence" |
| "Eight roles → one mind. Ready in one week." | `#hints` "How she works" door | `/how/#why` 8→1 |
| "She never goes on sick leave, never says 'I'm not in the right headspace', and never leaves with your project history." | `#hints` or under `#taught` | `/how/#why` |
| "Your yes. Her move. Every budget is yours; every move carries a stop rule." | `#hints` "How she works" door | `/how/#control` |
| "Your part last month: 62 minutes." | `#hints` | `/how/#month` |
| "Numbers, not promises: up to 20 posts, 40 stories, 6 videos without a shoot, 30 creators, 10 competitors watched, every month." | `#hints` "Plans" door | `/plans/` (restored monthly block + drawer) |
| "Seven days, seven deliverables, four ready posts and your own USHA chat. No payment, no contract." | `#free` (compact) | `/plans/#free` |
| "Trained on 700+ NJO projects, at the desks of the people who did them." | `#taught` (exists) | `/people/` |
| "How I was born: 28 chapters, told by USHA." | `#hints` "The people" door (show the story cover thumbnail) | `/people/` story |
| "×98 sales on every pound of marketing." | `#proof` (exists) | `/cases/` |
