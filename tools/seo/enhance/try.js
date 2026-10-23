// Section 03 "Try her": one wide, centred stage in the galaxy, under USHA
// (the 3D scene centres her on #talk .side, which the CSS places above the
// stage). Three panels with a segmented control: 1 Scenarios (the bundle's own
// chips and chat, moved in), 2 USHA Live (opens the live chat via usha:talk),
// 3 "One month, two endings": five example app screens with a USHA-faced
// divider (without her on the reading start side, with USHA on the end side)
// plus the two videos. Arrows on desktop, swipe on phones, vertical page scroll
// is never captured. Videos fire usha:quiet while playing, usha:resume after.
// Every derived number is computed from the inputs in N (see tools/seo/check-try.mjs).
(() => {
  const W = typeof window !== 'undefined' ? window : globalThis;
  const D = W.document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = W.matchMedia ? W.matchMedia('(prefers-reduced-motion: reduce)').matches : true;
  const fine = W.matchMedia ? W.matchMedia('(hover:hover) and (pointer:fine)').matches : false;
  const rtl = () => H.dir === 'rtl';
  const iso = (s) => '⁦' + s + '⁩';
  const bare = (s) => String(s).replace(/[⁦-⁩]/g, '');
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // ---------- inputs: the only typed numbers ----------
  // Same brand, same 90 days (1 Jul – 28 Sep 2026); index 0 = without USHA, 1 = with.
  const N = {
    days: 90, start: [2026, 6, 1],
    orders: [3720, 4650], dip: [51, 61], // without: the best-seller is out of stock on days 51–61
    top: [[1560, 1240, 920], [1860, 1430, 1360]], // units of the three products; their stock is in stk
    ctr: [1.8, 2.5],
    en: {
      avg: [120, 125], rate: [8.4, 6.9], // return rate, %
      avgW: [[119, 121, 120, 119, 120, 121, 120, 119, 120, 121, 120, 120, 120], [122, 123, 124, 124, 125, 125, 125, 126, 126, 126, 126, 126, 127]],
      rateW: [[8.3, 8.5, 8.4, 8.6, 8.3, 8.4, 8.5, 8.4, 8.3, 8.4, 8.5, 8.3, 8.4], [7.4, 7.3, 7.2, 7.1, 7.0, 6.9, 6.9, 6.8, 6.8, 6.7, 6.6, 6.6, 6.5]],
      ads: [[[9800, 32340, 1], [7100, 17040, 1], [4700, 6780, 1]], [[11400, 49020, 1], [7500, 24690, 1], [0, 0, 0]]],
      price: 119, comp: [99, 75, 139, 85, 109, 65, 129, 89, 115],
      sad: [[[6000, 400000, 4800, 120], [3000, 300000, 3000, 40]], [[5400, 380000, 5700, 140], [3000, 330000, 4290, 70]]], // spend, impressions, clicks, purchases
      web: { aov: [160, 166], orders: [[260, 160, 130, 230], [320, 210, 210, 245]] }, // organic, paid ads, email, direct
      deal: 2400,
    },
    ru: {
      avg: [2340, 2440], rate: [64, 71], // buyout (выкуп), %
      avgW: [[2330, 2350, 2340, 2330, 2340, 2350, 2340, 2330, 2340, 2350, 2340, 2340, 2340], [2400, 2410, 2420, 2430, 2430, 2440, 2440, 2450, 2450, 2450, 2460, 2460, 2480]],
      rateW: [[63, 64, 65, 64, 63, 64, 65, 64, 63, 64, 64, 65, 64], [68, 69, 69, 70, 70, 71, 71, 71, 72, 72, 72, 73, 75]],
      ads: [[[245000, 1120000, 1], [180000, 640000, 1], [115000, 240000, 1]], [[290000, 1860000, 1], [186000, 940000, 1], [0, 0, 0]]],
      price: 2390, comp: [1990, 1450, 2790, 1690, 2190, 1290, 2490, 1790, 2290],
      sad: [[[180000, 1500000, 15000, 120], [240000, 800000, 24000, 160]], [[160000, 1450000, 18850, 150], [230000, 820000, 28700, 210]]],
      web: { aov: [2900, 3010], orders: [[260, 280, 100, 140], [310, 360, 170, 145]] },
      deal: 48000,
    },
    // website, SEO, service, stock and market (same brand, same 90 days)
    web: { sessions: [52000, 58000], abandoned: [2400, 2450], recovered: [72, 150] }, // recovered orders are part of the email channel
    seo: {
      clicks: [4200, 5460], impr: [180000, 210000], pos: [18.4, 14.2],
      q: [[[900, 30000, 12.1], [520, 14000, 9.8], [310, 22000, 21.5]], [[1380, 36000, 7.9], [760, 16500, 6.2], [520, 26000, 14.8]]], // clicks, impressions, position
      pages: [[1600, 1100, 240], [2300, 1500, 690]],
      weekly: [[300, 320, 330, 310, 320, 340, 330, 320, 310, 330, 340, 330, 320], [330, 350, 370, 380, 400, 410, 420, 430, 440, 450, 460, 470, 480]], // shape only, scaled to the clicks
    },
    crm: { conv: [[920, 540, 380], [1080, 630, 440]], frt: [320, 12], resolved: [1306, 1978], csat: [4.1, 4.5], pipe: [[60, 30, 14, 5], [72, 40, 20, 8]], waits: [[120, 360, 540, 1440], [4, 9, 12, 20]] },
    stk: { onHand: [[156, 524, 245, 420, 300], [640, 572, 408, 300, 160]], extra: [[210, 18], [330, 60]], reorderDays: 21, leadDays: 14, coverTarget: 45, deadDays: 120 },
    mkt: { sos: [[4, 18, 14, 9], [6.5, 17, 13.5, 8.5]], sent: [86, 79, 74], seen: [0, 3] }, // share of search %, competitors' positive reviews %
    soc: { posts: 36, er: [[1.0, 1.4, 1.1, 1.3, 1.2, 1.2], [2.4, 3.3, 2.6, 3.0, 2.7, 2.8]], reach: [4100, 8300], saves: [18, 72], foll: [240, 910] },
    rev: {
      dist: [[255, 75, 30, 18, 32], [360, 85, 25, 15, 20]], // new ratings in 90 days, 5★ … 1★
      answered: [62, 485], replyMin: [5760, 160], // median reply time in minutes (4 days, 2 h 40 min)
      trend: [[4.2, 4.2, 4.2, 4.1, 4.2, 4.2, 4.2, 4.1, 4.2, 4.2, 4.2, 4.2, 4.2], [4.2, 4.2, 4.2, 4.3, 4.3, 4.3, 4.4, 4.4, 4.4, 4.4, 4.5, 4.5, 4.5]], // rolling 90-day rating, weekly
    },
    srch: { perPage: 30, results: 2140, trend: [[38, 39, 37, 40, 38, 36, 39, 41, 38, 37, 39, 38, 38], [38, 38, 36, 36, 33, 29, 29, 24, 20, 16, 13, 11, 9]], rating: [4.2, 4.5], compRating: [4.8, 4.6, 4.7, 4.5, 4.9, 4.6, 4.7, 4.4, 4.6] },
  };

  // ---------- derived numbers (one place; the check script recomputes them independently) ----------
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  const mean = (a) => sum(a) / a.length;
  function dailySeries(v) {
    const n = N.days, total = N.orders[v], raw = [];
    for (let i = 0; i < n; i++) {
      const wk = 1 + 0.09 * Math.sin((i / 7) * Math.PI * 2 + 1.2) + 0.04 * Math.sin(i * 1.9 + v * 3);
      let base = v ? 44 + (i / (n - 1)) * 16 : 41.5 + Math.sin(i / 14) * 1.2;
      if (!v && i >= N.dip[0] && i <= N.dip[1]) base *= 0.56; // best-seller out of stock
      raw.push(base * wk);
    }
    const k = total / sum(raw), f = raw.map((x) => x * k), out = f.map(Math.floor);
    let rest = total - sum(out);
    f.map((x, i) => [x - Math.floor(x), i]).sort((a, b) => b[0] - a[0]).slice(0, rest).forEach(([, i]) => out[i]++);
    return out;
  }
  const weekly = (d) => Array.from({ length: Math.ceil(d.length / 7) }, (_, w) => sum(d.slice(w * 7, w * 7 + 7)));
  function derive(lang) {
    const M = N[lang === 'ru' ? 'ru' : 'en'], o = N.orders, gross = [o[0] * M.avg[0], o[1] * M.avg[1]];
    const ads = M.ads.map((rows) => ({ spend: sum(rows.map((r) => r[0])), sales: sum(rows.map((r) => r[1])) }));
    const dist = N.rev.dist.map((d) => ({ n: sum(d), avg: sum(d.map((c, i) => c * (5 - i))) / sum(d) }));
    return { M, gross, ads, dist, daily: [dailySeries(0), dailySeries(1)] };
  }

  // ---------- copy ----------
  const P = {
    en: ['Assorted chocolates box, 24 pcs', 'Chocolate-coated dates, 500 g', 'Gift box “Celebration”'],
    ru: ['Набор конфет «Ассорти», 24 шт', 'Финики в шоколаде, 500 г', 'Подарочная коробка «Праздник»'],
    ar: ['علبة شوكولاتة مشكّلة، 24 قطعة', 'تمر بالشوكولاتة، 500 غ', 'علبة هدايا «احتفال»'],
  };
  const COMP = {
    en: ['Chocolate box, 18 pcs', 'Assorted chocolate, 300 g', 'Gift chocolates, 32 pcs', 'Praline gift set, 250 g', 'Truffles, 16 pcs', 'Chocolate bar set, 12 pcs', 'Dates & nuts gift tray', 'Milk chocolate hearts, 24 pcs', 'Dark chocolate box, 20 pcs'],
    ru: ['Набор конфет, 18 шт', 'Шоколад ассорти, 300 г', 'Конфеты в коробке, 32 шт', 'Пралине подарочное, 250 г', 'Трюфели, 16 шт', 'Набор шоколада, 12 шт', 'Финики с орехами, поднос', 'Сердечки из молочного шоколада, 24 шт', 'Горький шоколад, 20 шт'],
    ar: ['علبة شوكولاتة، 18 قطعة', 'شوكولاتة مشكّلة، 300 غ', 'شوكولاتة هدايا، 32 قطعة', 'برالين هدية، 250 غ', 'ترافل، 16 قطعة', 'ألواح شوكولاتة، 12 قطعة', 'صينية تمر ومكسرات', 'قلوب شوكولاتة بالحليب، 24 قطعة', 'شوكولاتة داكنة، 20 قطعة'],
  };
  const T = {
    en: {
      tabs: ['Scenarios', 'USHA Live', 'One month, two endings'], prev: 'Previous panel', next: 'Next panel',
      ex: 'Example', without: 'Without her', with: 'With USHA', slide: 'Slide USHA in →', dragA: 'Compare without and with USHA',
      sub: 'Same brand, same 90 days. Slide USHA in to see the other ending.', diffH: 'Same 90 days · with USHA vs without',
      ill: 'Illustrative example, not client results. Brand names anonymised.', move: 'Her move',
      live: {
        k: 'Live now', h: 'Consult your new <i>Marketing Director</i>.',
        p: 'Brief her on your business, then ask four questions. Real answers on your market and your numbers.',
        hi: 'Hi, I’m USHA. Tell me what you sell and where, and I’ll read your market before I answer.',
        ask: 'You could ask', qs: ['Why did my sales drop this month?', 'Is my ad budget working?', 'What should I post next week?'],
        steps: ['Your brief', '4 questions', 'Your project manager follows up'], b: 'Ask USHA live', typing: 'USHA is online',
      },
      days: '90 days', search: 'Search products, orders…', all: 'All products', exp: 'Export', week: 'week',
      tip: (d, n) => `${d} · ${n} orders`, onPage: (w) => `On page 1 since <b data-k="n.week">week ${w}</b>`,
      cards: {
        sc: ['Scenarios', 'Pick a business and watch how she thinks: a finding, a reason, a move.', 'Open scenarios →'],
        ff: ['Fast-forward 90 days', 'See your business 90 days from now: without USHA, and with her.', 'Fast-forward →'],
      },
      close: 'Close', ffSub: 'Same brand, same 90 days (1 Jul – 28 Sep 2026). Drag the line to compare.', grip: 'Drag left or right',
      screens: [['Marketplace sales', 'Orders, stock, gross sales'], ['Marketplace ads', 'Spend, ROAS, campaigns'], ['Social ads', 'Meta and TikTok: CPA, purchases'], ['Social media', 'Reach, saves, followers'], ['SEO', 'Clicks, queries, pages'], ['Website sales', 'Sessions, conversion, revenue'], ['Customer service', 'Inbox, replies, leads'], ['Stock', 'Cover, reorders, dead stock'], ['Market and competitors', 'Prices, share of search, gaps'], ['Reviews', 'Rating and replies'], ['Search position', 'The main query on noon'], ['Content', 'Two videos side by side']],
      moves: [
        'Reordered the best-seller before it ran out and moved the season’s demand onto the gift box.',
        'Paused the auto campaign that ran below break-even and moved its budget to gift-box searches.',
        'Rebuilt the creatives around the gift box and cut audiences that never bought.',
        'Swapped static product photos for short videos built on what buyers save.',
        'Rewrote titles for the queries buyers use and added a gift guide that ranks.',
        'Fixed the product pages that lost buyers and switched on cart reminders by WhatsApp and email.',
        'Answers every channel from one inbox, with ready replies for delivery and gift questions, and passes corporate leads to your manager.',
        'Plans reorders from real sales speed and turns slow stock into bundles before it goes stale.',
        'Watches competitors’ prices, launches and reviews every day, and points to the gap they left open.',
        'Answers reviews within hours and fixed the packaging buyers complained about.',
        'Rewrote the title and photos around how buyers search, then backed the climb with ads.',
        'Videos without filming: idea, script and edit in the brand’s own style.',
      ],
      sad: { app: 'Ads Manager · Meta + TikTok', brand: 'meta', k: ['Spend', 'CPM', 'CTR', 'CPA', 'Purchases'], cols: ['Campaign', 'Spend', 'CPM', 'CTR', 'Purchases', 'CPA'], names: ['Meta · Gift box Reels', 'TikTok · Gift unboxing'],
        notes: (x) => [['cpa', `CPA <b>${x.cpa0} → ${x.cpa1}</b>: creatives rebuilt around the gift box`, 'a'], ['buy', `Purchases <b>${x.buy}</b> on <b>${x.spend}</b> spend`, 'b']] },
      seo: { app: 'Search Console · Performance', brand: 'gsc', k: ['Clicks', 'Impressions', 'CTR', 'Avg position'], chart: 'Clicks by week', q: 'Top queries', pg: 'Top pages', cols: ['Query', 'Clicks', 'Impr.', 'Pos.'], pcol: ['Page', 'Clicks'],
        qs: ['chocolate gift box', 'dates in chocolate', 'chocolate delivery dubai'], pages: ['/gift-boxes', '/dates', '/blog/how-to-choose-a-gift'],
        notes: (x) => [['q0', `“${x.q0}”: position <b>${x.p0}</b>`, 'b'], ['pg2', `New gift guide: <b>${x.guide}</b> clicks`, 'b']] },
      web: { app: 'Store analytics · brand website', brand: 'web', k: ['Sessions', 'Conversion rate', 'Avg order', 'Revenue'], ch: 'Revenue by channel', cols: ['Channel', 'Orders', 'Revenue, AED', 'Share'], chans: ['Organic search', 'Paid ads', 'Email', 'Direct'],
        cart: 'Abandoned carts', ck: ['Abandoned', 'Recovered', 'Recovery rate', 'Recovered revenue'],
        notes: (x) => [['cr', `Product pages fixed: conversion <b>${x.cr}</b>`, 'a'], ['rec', `Cart reminders: <b>${x.rec}</b> orders recovered`, 'b']] },
      crm: { app: 'Inbox · all channels', brand: 'crm', k: ['Conversations', 'First reply (median)', 'Resolved', 'CSAT'], ch: 'By channel', chans: ['WhatsApp', 'Instagram DM', 'noon chat'], inbox: 'Inbox',
        msgs: [['Mariam', 'Can you deliver 40 boxes to our office?'], ['Ahmed', 'Is the gift box available for Friday?'], ['Lina', 'My order arrived without a card'], ['Yousef', 'Do you ship to Al Ain?']],
        wait: (m) => (m >= 1440 ? `Waiting ${m / 1440} day` : m >= 60 ? `Waiting ${m / 60} h` : `Replied in ${m} min`),
        pipe: 'Corporate gift orders', stages: ['New', 'Qualified', 'Proposal', 'Won'],
        notes: (x) => [['frt', `First reply <b>${x.frt}</b>`, 'a'], ['won', `Corporate orders won: <b>${x.won}</b>`, 'b']] },
      stk: { app: 'Inventory · stock planner', brand: 'stk', k: ['Below reorder point', 'Dead stock (units)', 'Stock-out days'], cols: ['SKU', 'On hand', 'Per day', 'Cover', 'Status'], skus: ['Dark chocolate set, 12 pcs', 'Sugar-free truffles, 16 pcs'],
        st: ['OK', 'Reorder now', 'Dead stock'], days: (d) => `${d} days`, plan: 'Reorder plan', none: 'No reorder planned. Best-seller: {d} days of cover, below the {r}-day reorder point.',
        sug: (q, d) => `Reorder ${q} boxes of Assorted chocolates by ${d} (lead time 14 days).`,
        notes: (x) => [['dead', `Slow stock sold in bundles: dead stock <b>${x.dead}</b>`, 'a'], ['plan', `Reorder <b>${x.qty}</b> boxes by <b>${x.date}</b>`, 'b']] },
      mkt: { app: 'Market radar · chocolate gifts', brand: 'mkt', map: 'Price and rating', sos: 'Share of search', sent: 'Positive reviews (4–5★)', you: 'You', others: 'Others', brands: ['Brand B', 'Brand C', 'Brand D'],
        launch: 'New launches', launches: [['Brand B', 'Ramadan gift box', 149, 'Sep 3'], ['Brand C', 'Dates & nuts tray', 129, 'Sep 11'], ['Brand D', 'Mini truffles, 8 pcs', 59, 'Sep 19']], seen: 'Spotted', missed: 'Not tracked',
        gap: 'Gap', gapT: 'No dates-and-chocolate gift box under AED 100. A 12-piece box at AED 89 would sit alone there.', gapN: 'Gap analysis: not tracked',
        notes: (x) => [['sos', `Share of search <b>${x.sos}</b>`, 'a'], ['gap', 'Found the price gap the competitors left open', 'b']] },
      sales: { app: 'noon · Seller dashboard', brand: 'noon', title: 'Sales', k: ['Orders', 'Gross sales', 'Return rate', 'Avg order'], chart: 'Orders per day', top: 'Top products', cols: ['Product', 'Orders', 'Stock'],
        stock: (d) => (d < 0 ? `Out ${-d} days` : `${d} days left`), rateLowGood: true,
        notes: (x) => [['stock0', `Reordered in time: no <b>${x.dip}-day</b> stock-out`, 'b'], ['top2', `Gift box pushed into the season: <b>${x.gift}</b>`, 'b'], ['rate', `Thermal packaging: returns <b>${x.rateChg}</b>`, 'a']] },
      ads: { app: 'noon Ads · Campaigns', brand: 'noon', k: ['Spend', 'Ad sales', 'ROAS', 'CTR'], target: 'Target 3.0x+', cols: ['Campaign', 'Status', 'Spend', 'Ad sales', 'ROAS'], names: ['Search · gift boxes', 'Category · chocolate', 'Auto · all products'], on: 'Active', off: 'Paused', chart: 'Spend and ad sales by week',
        notes: (x) => [['r2x', `Paused Auto: <b>${x.autoSpend}</b> spent at <b>${x.autoRatio}</b>`, 'b'], ['r0x', `Budget moved to gift-box search: <b>${x.searchRatio}</b>`, 'b'], ['ratio', `Spend <b>${x.spendChg}</b>, ad sales <b>${x.salesChg}</b>`, 'a']] },
      soc: { app: 'Instagram · Insights', brand: 'ig', handle: '@brand_a', posts: (n) => `${n} posts in 90 days`, last: 'Latest 6 posts', k: ['Engagement rate', 'Avg reach / post', 'Saves / post', 'New followers'], photo: 'Photo', reel: 'Reel',
        notes: (x) => [['saves', `Gift-box Reels: saves <b>${x.saves}</b>`, 'a'], ['p4', `Posted at buyers’ peak hours: reach <b>${x.reach}</b>`, 'b'], ['foll', `<b>+${x.foll1}</b> followers, not +${x.foll0}`, 'a']] },
      rev: { app: 'noon · Ratings & reviews', brand: 'noon', rating: 'Rating, rolling 90 days', newR: 'New ratings in 90 days', replies: 'Reviews answered', time: 'Median reply time', trend: 'Rolling rating by week',
        dur: (m) => (m >= 1440 ? `${m / 1440} days` : `${Math.floor(m / 60)} h` + (m % 60 ? ` ${m % 60} min` : '')), of: (a, n) => `${a} of ${n}`,
        a: ['Sara', 'Box arrived crushed and the chocolates had melted. Not fit for a gift.'], none: 'No reply from the seller',
        reply: ['Seller', 'We’re sorry. A replacement is on its way, and every box now ships in a thermal bag.'],
        b0: ['Omar', 'Too pricey for the size.'], b1: ['Omar', 'Fresh and beautifully packed. Bought it as a gift.'],
        notes: (x) => [['reply', `<b>${x.rate1}</b> of reviews answered, median <b>${x.time1}</b>`, 'b'], ['rev2', `Thermal bags: 1★ reviews <b>${x.one0} → ${x.one1}</b>`, 'b']] },
      srch: { app: 'noon · Search', brand: 'noon', q: 'chocolate gift box', filters: ['Relevance', 'Price', 'Rating 4+', 'Express'], results: (n, p) => `${n} results · ${p} per page`, yours: 'Your product', badge: (n) => `Your product · #${n}`, pos: (n, p) => `#${n} · page ${p}`, rank: 'Position by week', ad: 'Ad',
        notes: (x) => [['badge', `New title and photos: <b>#${x.p0} → #${x.p1}</b>`, 'b'], ['trend', x.since, 'a']] },
      vid: { t: ['Generic AI clip: the same look as everyone else’s.', 'Made with USHA: a concept, a story and a cinematic finish.'], play: 'Play video' },
      diff: {
        sad: (x) => [['Spend', x.spend], ['CPA', x.cpa], ['CTR', x.ctr], ['Purchases', x.buy]],
        seo: (x) => [['Clicks', x.clicks], ['Impressions', x.impr], ['CTR', x.ctr], ['Avg position', x.pos]],
        web: (x) => [['Revenue', x.rev], ['Orders', x.orders], ['Conversion', x.cr], ['Avg order', x.aov]],
        crm: (x) => [['First reply', x.frt], ['Resolved', x.res], ['CSAT', x.csat], ['Corporate orders', x.won]],
        stk: (x) => [['Stock-out days', x.out], ['Dead stock', x.dead], ['Below reorder point', x.below]],
        mkt: (x) => [['Share of search', x.sos], ['Positive reviews', x.pos], ['Launches spotted', x.seen]],
        sales: (x) => [['Orders', x.orders], ['Avg order', x.avg], ['Gross sales', x.gross], ['Return rate', x.rate]],
        ads: (x) => [['ROAS', x.ratio], ['Spend', x.spend], ['Ad sales', x.sales], ['CTR', x.ctr]],
        soc: (x) => [['Engagement', x.er], ['Reach', x.reach], ['Saves', x.saves], ['Followers', x.foll]],
        rev: (x) => [['Rating', x.rating], ['New ratings', x.count], ['Answered', x.answered], ['Reply time', x.time]],
        srch: (x) => [['Position', x.pos], ['Page', x.page]],
      },
    },
    ru: {
      tabs: ['Сценарии', 'USHA онлайн', 'Один месяц — два финала'], prev: 'Предыдущая панель', next: 'Следующая панель',
      ex: 'Пример', without: 'Без неё', with: 'С USHA', slide: 'Впустите USHA →', dragA: 'Сравнение: без USHA и с USHA',
      sub: 'Тот же бренд, те же 90 дней. Впустите USHA и увидите другой финал.', diffH: 'Те же 90 дней · с USHA против без неё',
      ill: 'Пример для иллюстрации, не результаты клиентов. Названия брендов скрыты.', move: 'Её ход',
      live: {
        k: 'Сейчас онлайн', h: 'Консультация вашего нового <i>директора по маркетингу</i>.',
        p: 'Расскажите о бизнесе и задайте четыре вопроса. Настоящие ответы про ваш рынок и ваши цифры.',
        hi: 'Здравствуйте, я USHA. Расскажите, что и где вы продаёте, — сначала я прочитаю ваш рынок, потом отвечу.',
        ask: 'Например, спросите', qs: ['Почему упали продажи в этом месяце?', 'Окупается ли мой рекламный бюджет?', 'Что публиковать на следующей неделе?'],
        steps: ['Бриф', '4 вопроса', 'Дальше — ваш проджект-менеджер'], b: 'Спросить USHA', typing: 'USHA онлайн',
      },
      days: '90 дней', search: 'Поиск по товарам и заказам…', all: 'Все товары', exp: 'Выгрузить', week: 'неделя',
      tip: (d, n) => `${d} · ${n} ${plural(n, 'заказ', 'заказа', 'заказов')}`, onPage: (w) => `На первой странице с <b data-k="n.week">${w}-й недели</b>`,
      cards: {
        sc: ['Сценарии', 'Выберите бизнес и посмотрите, как она думает: находка, причина, ход.', 'Открыть сценарии →'],
        ff: ['Перемотать на 90 дней вперёд', 'Посмотрите на свой бизнес через 90 дней: без USHA и с ней.', 'Перемотать →'],
      },
      close: 'Закрыть', ffSub: 'Тот же бренд, те же 90 дней (1 июля – 28 сентября 2026). Двигайте линию, чтобы сравнить.', grip: 'Двигайте влево или вправо',
      screens: [['Продажи на маркетплейсе', 'Заказы, остатки, сумма'], ['Реклама на маркетплейсе', 'Расход, ДРР, кампании'], ['Таргет и контекст', 'VK Реклама и Директ: CPA, покупки'], ['Соцсети', 'Охват, сохранения, подписчики'], ['SEO', 'Клики, запросы, страницы'], ['Продажи на сайте', 'Визиты, конверсия, выручка'], ['Сервис и CRM', 'Входящие, ответы, лиды'], ['Склад', 'Запас, дозаказ, неликвид'], ['Рынок и конкуренты', 'Цены, доля поиска, ниши'], ['Отзывы', 'Рейтинг и ответы'], ['Позиция в поиске', 'Главный запрос на WB'], ['Контент', 'Два ролика рядом']],
      moves: [
        'Дозаказала хит до того, как он закончился, и перевела сезонный спрос на подарочную коробку.',
        'Остановила автокампанию с убыточным ДРР и перенесла её бюджет в поиск по подаркам.',
        'Пересобрала креативы вокруг подарочной коробки и отключила аудитории, которые не покупали.',
        'Заменила статичные фото товара короткими видео о том, что покупатели сохраняют.',
        'Переписала заголовки под запросы покупателей и добавила гид по подаркам, который выходит в поиске.',
        'Исправила карточки, на которых уходили покупатели, и включила напоминания о брошенной корзине в Telegram и на почту.',
        'Отвечает во всех каналах из одного окна, с готовыми ответами про доставку и подарки, и передаёт корпоративные заявки менеджеру.',
        'Планирует дозаказ по реальной скорости продаж и превращает залежавшийся товар в наборы, пока он не испортился.',
        'Каждый день следит за ценами, новинками и отзывами конкурентов и показывает нишу, которую они оставили.',
        'Отвечает на отзывы за несколько часов и исправила упаковку, на которую жаловались.',
        'Переписала название и фото под то, как ищут покупатели, и поддержала рост рекламой.',
        'Видео без съёмки: идея, сценарий и монтаж в стиле бренда.',
      ],
      sad: { app: 'VK Реклама · Яндекс Директ', brand: 'vkads', k: ['Расход', 'CPM', 'CTR', 'CPA', 'Покупки'], cols: ['Кампания', 'Расход', 'CPM', 'CTR', 'Покупки', 'CPA'], names: ['VK Реклама · Клипы с подарками', 'Директ · Поиск подарков'],
        notes: (x) => [['cpa', `CPA <b>${x.cpa0} → ${x.cpa1}</b>: креативы вокруг подарочной коробки`, 'a'], ['buy', `Покупки <b>${x.buy}</b> при расходе <b>${x.spend}</b>`, 'b']] },
      seo: { app: 'Яндекс Вебмастер · Поисковые запросы', brand: 'ywm', k: ['Клики', 'Показы', 'CTR', 'Средняя позиция'], chart: 'Клики по неделям', q: 'Топ запросов', pg: 'Топ страниц', cols: ['Запрос', 'Клики', 'Показы', 'Поз.'], pcol: ['Страница', 'Клики'],
        qs: ['подарочный набор конфет', 'финики в шоколаде', 'конфеты с доставкой'], pages: ['/podarki', '/finiki', '/blog/kak-vybrat-podarok'],
        notes: (x) => [['q0', `«${x.q0}»: позиция <b>${x.p0}</b>`, 'b'], ['pg2', `Новый гид по подаркам: <b>${x.guide}</b> кликов`, 'b']] },
      web: { app: 'Аналитика магазина · сайт бренда', brand: 'web', k: ['Визиты', 'Конверсия', 'Средний чек', 'Выручка'], ch: 'Выручка по каналам', cols: ['Канал', 'Заказы', 'Выручка, ₽', 'Доля'], chans: ['Поиск', 'Реклама', 'Рассылки', 'Прямые заходы'],
        cart: 'Брошенные корзины', ck: ['Брошено', 'Возвращено', 'Доля возврата', 'Возвращённая выручка'],
        notes: (x) => [['cr', `Карточки исправлены: конверсия <b>${x.cr}</b>`, 'a'], ['rec', `Напоминания о корзине: возвращено <b>${x.rec}</b> заказов`, 'b']] },
      crm: { app: 'Входящие · все каналы', brand: 'crm', k: ['Обращения', 'Первый ответ (медиана)', 'Решено', 'CSAT'], ch: 'По каналам', chans: ['Telegram', 'VK', 'Чат WB'], inbox: 'Входящие',
        msgs: [['Марина', 'Сможете привезти 40 наборов в офис?'], ['Алексей', 'Подарочная коробка будет к пятнице?'], ['Ольга', 'Заказ пришёл без открытки'], ['Игорь', 'Доставляете в Подольск?']],
        wait: (m) => (m >= 1440 ? `Ждёт ${m / 1440} день` : m >= 60 ? `Ждёт ${m / 60} ч` : `Ответ за ${m} мин`),
        pipe: 'Корпоративные заказы', stages: ['Новые', 'Квалифицированы', 'Предложение', 'Сделка'],
        notes: (x) => [['frt', `Первый ответ <b>${x.frt}</b>`, 'a'], ['won', `Корпоративных сделок: <b>${x.won}</b>`, 'b']] },
      stk: { app: 'Склад · планирование остатков', brand: 'stk', k: ['Ниже точки дозаказа', 'Неликвид (шт.)', 'Дней без товара'], cols: ['Товар', 'На складе', 'В день', 'Запас', 'Статус'], skus: ['Горький шоколад, набор 12 шт', 'Трюфели без сахара, 16 шт'],
        st: ['В норме', 'Дозаказать', 'Неликвид'], days: (d) => `${d} дн.`, plan: 'План дозаказа', none: 'Дозаказ не запланирован. Хит: запас на {d} дн., ниже точки дозаказа в {r} дн.',
        sug: (q, d) => `Дозаказать ${q} наборов «Ассорти» до ${d} (поставка 14 дней).`,
        notes: (x) => [['dead', `Неликвид ушёл в наборах: <b>${x.dead}</b> шт.`, 'a'], ['plan', `Дозаказ <b>${x.qty}</b> наборов до <b>${x.date}</b>`, 'b']] },
      mkt: { app: 'Радар рынка · подарочные конфеты', brand: 'mkt', map: 'Цена и рейтинг', sos: 'Доля поиска', sent: 'Положительные отзывы (4–5★)', you: 'Вы', others: 'Остальные', brands: ['Бренд B', 'Бренд C', 'Бренд D'],
        launch: 'Новинки конкурентов', launches: [['Бренд B', 'Новогодний набор', 2990, '3 сен.'], ['Бренд C', 'Поднос с финиками и орехами', 2490, '11 сен.'], ['Бренд D', 'Мини-трюфели, 8 шт', 1190, '19 сен.']], seen: 'Замечено', missed: 'Не отслеживалось',
        gap: 'Ниша', gapT: 'Нет подарочного набора «финики + шоколад» дешевле 2 000 ₽. Набор из 12 штук за 1 790 ₽ будет там один.', gapN: 'Анализ ниш: не ведётся',
        notes: (x) => [['sos', `Доля поиска <b>${x.sos}</b>`, 'a'], ['gap', 'Нашла ценовую нишу, которую оставили конкуренты', 'b']] },
      sales: { app: 'Wildberries · Кабинет продавца', brand: 'wb', title: 'Продажи', k: ['Заказы', 'Заказано на сумму', 'Выкуп', 'Средний чек'], chart: 'Заказы по дням', top: 'Топ товаров', cols: ['Товар', 'Заказы', 'Остаток'],
        stock: (d) => (d < 0 ? `Нет ${-d} дн.` : `на ${d} дн.`), rateLowGood: false,
        notes: (x) => [['stock0', `Дозаказала вовремя: без <b>${x.dip} дней</b> пустой полки`, 'b'], ['top2', `Подарочную коробку — в сезон: <b>${x.gift}</b>`, 'b'], ['rate', `Термопакеты: выкуп <b>${x.rateChg}</b>`, 'a']] },
      ads: { app: 'Wildberries · Продвижение', brand: 'wb', k: ['Расход', 'Продажи с рекламы', 'ДРР', 'CTR'], target: 'Цель: до 20%', cols: ['Кампания', 'Статус', 'Расход', 'Продажи', 'ДРР'], names: ['Поиск · подарочные наборы', 'Каталог · шоколад', 'Автореклама · все товары'], on: 'Активна', off: 'Пауза', chart: 'Расход и продажи с рекламы по неделям',
        notes: (x) => [['r2x', `Остановила авто: <b>${x.autoSpend}</b> при ДРР <b>${x.autoRatio}</b>`, 'b'], ['r0x', `Бюджет — в поиск по подаркам: ДРР <b>${x.searchRatio}</b>`, 'b'], ['ratio', `Расход <b>${x.spendChg}</b>, продажи с рекламы <b>${x.salesChg}</b>`, 'a']] },
      soc: { app: 'VK · Статистика сообщества', brand: 'vk', handle: 'Бренд A', posts: (n) => `${n} публикаций за 90 дней`, last: 'Последние 6 публикаций', k: ['Вовлечённость (ER)', 'Средний охват поста', 'Сохранения на пост', 'Новые подписчики'], photo: 'Фото', reel: 'Клип',
        notes: (x) => [['saves', `Клипы с подарочной коробкой: сохранения <b>${x.saves}</b>`, 'a'], ['p4', `Публикации в часы, когда покупатели онлайн: охват <b>${x.reach}</b>`, 'b'], ['foll', `<b>+${x.foll1}</b> подписчиков, а не +${x.foll0}`, 'a']] },
      rev: { app: 'Wildberries · Отзывы и вопросы', brand: 'wb', rating: 'Рейтинг за 90 дней', newR: 'Новых оценок за 90 дней', replies: 'Отзывов с ответом', time: 'Медиана времени ответа', trend: 'Рейтинг за 90 дней по неделям',
        dur: (m) => (m >= 1440 ? `${m / 1440} дня` : `${Math.floor(m / 60)} ч` + (m % 60 ? ` ${m % 60} мин` : '')), of: (a, n) => `${a} из ${n}`,
        a: ['Анна', 'Коробка пришла мятой, конфеты подтаяли. В подарок не годится.'], none: 'Продавец не ответил',
        reply: ['Продавец', 'Простите нас. Замена уже в пути, а теперь каждую коробку отправляем в термопакете.'],
        b0: ['Ольга', 'Дорого для такого размера.'], b1: ['Ольга', 'Свежие и красиво упакованы, брали в подарок.'],
        notes: (x) => [['reply', `Ответ на <b>${x.rate1}</b> отзывов, медиана <b>${x.time1}</b>`, 'b'], ['rev2', `Термопакеты: отзывов на 1★ <b>${x.one0} → ${x.one1}</b>`, 'b']] },
      srch: { app: 'Wildberries · Поиск', brand: 'wb', q: 'подарочный набор конфет', filters: ['По популярности', 'Цена', 'Рейтинг 4+', 'Быстрая доставка'], results: (n, p) => `${n} товаров · ${p} на странице`, yours: 'Ваш товар', badge: (n) => `Ваш товар · №${n}`, pos: (n, p) => `№${n} · стр. ${p}`, rank: 'Позиция по неделям', ad: 'Реклама',
        notes: (x) => [['badge', `Новое название и фото: <b>№${x.p0} → №${x.p1}</b>`, 'b'], ['trend', x.since, 'a']] },
      vid: { t: ['Типичный ИИ-ролик: такой же, как у всех.', 'Сделано с USHA: идея, история и киношная картинка.'], play: 'Смотреть видео' },
      diff: {
        sad: (x) => [['Расход', x.spend], ['CPA', x.cpa], ['CTR', x.ctr], ['Покупки', x.buy]],
        seo: (x) => [['Клики', x.clicks], ['Показы', x.impr], ['CTR', x.ctr], ['Средняя позиция', x.pos]],
        web: (x) => [['Выручка', x.rev], ['Заказы', x.orders], ['Конверсия', x.cr], ['Средний чек', x.aov]],
        crm: (x) => [['Первый ответ', x.frt], ['Решено', x.res], ['CSAT', x.csat], ['Корпоративные сделки', x.won]],
        stk: (x) => [['Дней без товара', x.out], ['Неликвид', x.dead], ['Ниже точки дозаказа', x.below]],
        mkt: (x) => [['Доля поиска', x.sos], ['Положительные отзывы', x.pos], ['Замечено новинок', x.seen]],
        sales: (x) => [['Заказы', x.orders], ['Средний чек', x.avg], ['Заказано на сумму', x.gross], ['Выкуп', x.rate]],
        ads: (x) => [['ДРР', x.ratio], ['Расход', x.spend], ['Продажи с рекламы', x.sales], ['CTR', x.ctr]],
        soc: (x) => [['Вовлечённость', x.er], ['Охват', x.reach], ['Сохранения', x.saves], ['Подписчики', x.foll]],
        rev: (x) => [['Рейтинг', x.rating], ['Новых оценок', x.count], ['С ответом', x.answered], ['Время ответа', x.time]],
        srch: (x) => [['Позиция', x.pos], ['Страница', x.page]],
      },
    },
    ar: {
      tabs: ['سيناريوهات', iso('USHA') + ' مباشرة', 'شهر واحد، نهايتان'], prev: 'اللوحة السابقة', next: 'اللوحة التالية',
      ex: 'مثال', without: 'بدونها', with: 'مع ' + iso('USHA'), slide: 'أدخِل ' + iso('USHA') + ' ←', dragA: 'مقارنة بدون ' + iso('USHA') + ' ومعها',
      sub: 'العلامة نفسها، والأيام الـ90 نفسها. أدخِل ' + iso('USHA') + ' لترى النهاية الأخرى.', diffH: 'الأيام الـ90 نفسها · مع ' + iso('USHA') + ' مقابل بدونها',
      ill: 'مثال توضيحي وليس نتائج عملاء. أسماء العلامات التجارية مخفية.', move: 'خطوتها',
      live: {
        k: 'متصلة الآن', h: 'استشر <i>مديرة التسويق</i> الجديدة لديك.',
        p: 'عرّفها على نشاطك ثم اسأل أربعة أسئلة. إجابات حقيقية عن سوقك وأرقامك.',
        hi: 'مرحبًا، أنا ' + iso('USHA') + '. أخبرني ماذا تبيع وأين، وسأقرأ سوقك قبل أن أجيب.',
        ask: 'مثلًا، اسأل', qs: ['لماذا تراجعت مبيعاتي هذا الشهر؟', 'هل ميزانية إعلاناتي مجدية؟', 'ماذا أنشر الأسبوع المقبل؟'],
        steps: ['نبذة عن نشاطك', '4 أسئلة', 'ثم يتابع معك مدير مشروعك'], b: 'اسأل ' + iso('USHA') + ' مباشرة', typing: iso('USHA') + ' متصلة',
      },
      days: '90 يومًا', search: 'ابحث في المنتجات والطلبات…', all: 'كل المنتجات', exp: 'تصدير', week: 'أسبوع',
      tip: (d, n) => `${d} · ${n} طلبًا`, onPage: (w) => `في الصفحة الأولى منذ <b data-k="n.week">الأسبوع ${w}</b>`,
      cards: {
        sc: ['سيناريوهات', 'اختر نشاطًا وشاهد كيف تفكر: اكتشاف وسبب وخطوة.', 'افتح السيناريوهات ←'],
        ff: ['قدّم الزمن 90 يومًا', 'شاهد نشاطك بعد 90 يومًا: بدون ' + iso('USHA') + ' ومعها.', 'قدّم الزمن ←'],
      },
      close: 'إغلاق', ffSub: 'العلامة نفسها، والأيام الـ90 نفسها (1 يوليو – 28 سبتمبر 2026). حرّك الخط للمقارنة.', grip: 'اسحب يمينًا أو يسارًا',
      screens: [['مبيعات المنصة', 'الطلبات والمخزون والإجمالي'], ['إعلانات المنصة', 'الإنفاق والعائد والحملات'], ['إعلانات التواصل', iso('Meta') + ' و' + iso('TikTok') + ': التكلفة والمشتريات'], ['التواصل الاجتماعي', 'الوصول والحفظ والمتابعون'], ['تحسين البحث', 'النقرات والاستعلامات والصفحات'], ['مبيعات الموقع', 'الزيارات والتحويل والإيرادات'], ['خدمة العملاء', 'الوارد والردود والعملاء المحتملون'], ['المخزون', 'التغطية وإعادة الطلب والراكد'], ['السوق والمنافسون', 'الأسعار وحصة البحث والفجوات'], ['التقييمات', 'التقييم والردود'], ['ترتيب البحث', 'البحث الرئيسي على ' + iso('noon')], ['المحتوى', 'فيديوهان جنبًا إلى جنب']],
      moves: [
        'أعادت طلب المنتج الأكثر مبيعًا قبل نفاده، ووجّهت طلب الموسم إلى علبة الهدايا.',
        'أوقفت الحملة التلقائية التي كانت دون نقطة التعادل، ونقلت ميزانيتها إلى عمليات البحث عن الهدايا.',
        'أعادت بناء الإعلانات حول علبة الهدايا وأوقفت الجماهير التي لم تشترِ.',
        'استبدلت صور المنتج الثابتة بفيديوهات قصيرة مبنية على ما يحفظه المشترون.',
        'أعادت كتابة العناوين وفق ما يبحث عنه المشترون وأضافت دليل هدايا يظهر في البحث.',
        'أصلحت صفحات المنتجات التي كان يغادرها المشترون، وفعّلت تذكيرات السلة عبر واتساب والبريد.',
        'ترد في كل القنوات من صندوق واحد، بردود جاهزة عن التوصيل والهدايا، وتحوّل طلبات الشركات إلى مديرك.',
        'تخطط لإعادة الطلب وفق سرعة البيع الفعلية، وتحوّل المخزون البطيء إلى باقات قبل أن يتقادم.',
        'تتابع يوميًا أسعار المنافسين وإطلاقاتهم ومراجعاتهم، وتشير إلى الفجوة التي تركوها.',
        'ترد على المراجعات خلال ساعات، وأصلحت التغليف الذي اشتكى منه المشترون.',
        'أعادت كتابة العنوان والصور وفق طريقة بحث المشترين، ثم دعمت الصعود بالإعلانات.',
        'فيديوهات بلا تصوير: الفكرة والسيناريو والمونتاج بأسلوب العلامة نفسها.',
      ],
      sad: { app: iso('Ads Manager · Meta + TikTok'), brand: 'meta', k: ['الإنفاق', iso('CPM'), iso('CTR'), iso('CPA'), 'المشتريات'], cols: ['الحملة', 'الإنفاق', iso('CPM'), iso('CTR'), 'المشتريات', iso('CPA')], names: [iso('Meta') + ' · فيديوهات علبة الهدايا', iso('TikTok') + ' · فتح علبة الهدايا'],
        notes: (x) => [['cpa', `${iso('CPA')} <b>${iso(x.cpa0 + ' → ' + x.cpa1)}</b>: إعلانات مبنية حول علبة الهدايا`, 'a'], ['buy', `المشتريات <b>${x.buy}</b> مع إنفاق <b>${x.spend}</b>`, 'b']] },
      seo: { app: iso('Search Console') + ' · الأداء', brand: 'gsc', k: ['النقرات', 'مرات الظهور', iso('CTR'), 'متوسط الترتيب'], chart: 'النقرات أسبوعيًا', q: 'أهم الاستعلامات', pg: 'أهم الصفحات', cols: ['الاستعلام', 'النقرات', 'الظهور', 'الترتيب'], pcol: ['الصفحة', 'النقرات'],
        qs: ['علبة شوكولاتة هدية', 'تمر بالشوكولاتة', 'توصيل شوكولاتة دبي'], pages: [iso('/gift-boxes'), iso('/dates'), iso('/blog/how-to-choose-a-gift')],
        notes: (x) => [['q0', `«${x.q0}»: الترتيب <b>${iso(x.p0)}</b>`, 'b'], ['pg2', `دليل الهدايا الجديد: <b>${x.guide}</b> نقرة`, 'b']] },
      web: { app: 'تحليلات المتجر · موقع العلامة', brand: 'web', k: ['الزيارات', 'معدل التحويل', 'متوسط الطلب', 'الإيرادات'], ch: 'الإيرادات حسب القناة', cols: ['القناة', 'الطلبات', 'الإيرادات (' + iso('AED') + ')', 'الحصة'], chans: ['بحث مجاني', 'إعلانات مدفوعة', 'البريد', 'مباشر'],
        cart: 'السلال المتروكة', ck: ['متروكة', 'مستعادة', 'نسبة الاستعادة', 'إيرادات مستعادة'],
        notes: (x) => [['cr', `صفحات المنتجات بعد الإصلاح: التحويل <b>${iso(x.cr)}</b>`, 'a'], ['rec', `تذكيرات السلة: استعادة <b>${iso(x.rec)}</b> طلبًا`, 'b']] },
      crm: { app: 'صندوق الوارد · كل القنوات', brand: 'crm', k: ['المحادثات', 'أول رد (الوسيط)', 'تم الحل', iso('CSAT')], ch: 'حسب القناة', chans: ['واتساب', iso('Instagram DM'), 'دردشة ' + iso('noon')], inbox: 'الوارد',
        msgs: [['مريم', 'هل توصلون 40 علبة إلى مكتبنا؟'], ['أحمد', 'هل علبة الهدايا متوفرة يوم الجمعة؟'], ['لينا', 'وصل طلبي بدون بطاقة'], ['يوسف', 'هل تشحنون إلى العين؟']],
        wait: (m) => (m >= 1440 ? `بانتظار الرد منذ يوم` : m >= 60 ? `بانتظار الرد منذ ${m / 60} س` : `تم الرد خلال ${m} د`),
        pipe: 'طلبات هدايا الشركات', stages: ['جديدة', 'مؤهلة', 'عرض سعر', 'مكتسبة'],
        notes: (x) => [['frt', `أول رد <b>${iso(x.frt)}</b>`, 'a'], ['won', `طلبات شركات مكتسبة: <b>${iso(x.won)}</b>`, 'b']] },
      stk: { app: 'المخزون · تخطيط', brand: 'stk', k: ['تحت نقطة إعادة الطلب', 'مخزون راكد (وحدات)', 'أيام نفاد'], cols: ['المنتج', 'المتوفر', 'يوميًا', 'التغطية', 'الحالة'], skus: ['شوكولاتة داكنة، 12 قطعة', 'ترافل بدون سكر، 16 قطعة'],
        st: ['جيد', 'أعد الطلب الآن', 'راكد'], days: (d) => `${d} يومًا`, plan: 'خطة إعادة الطلب', none: 'لا توجد إعادة طلب مخططة. الأكثر مبيعًا: تغطية {d} أيام، دون نقطة إعادة الطلب ({r} يومًا).',
        sug: (q, d) => `أعد طلب ${q} علبة من الشوكولاتة المشكّلة قبل ${d} (مدة التوريد 14 يومًا).`,
        notes: (x) => [['dead', `بيع المخزون البطيء في باقات: الراكد <b>${iso(x.dead)}</b>`, 'a'], ['plan', `إعادة طلب <b>${x.qty}</b> علبة قبل <b>${x.date}</b>`, 'b']] },
      mkt: { app: 'رادار السوق · هدايا الشوكولاتة', brand: 'mkt', map: 'السعر والتقييم', sos: 'حصة البحث', sent: 'مراجعات إيجابية (4–5★)', you: 'أنت', others: 'آخرون', brands: ['العلامة ب', 'العلامة ج', 'العلامة د'],
        launch: 'إطلاقات جديدة', launches: [['العلامة ب', 'علبة هدايا رمضان', 149, '3 سبتمبر'], ['العلامة ج', 'صينية تمر ومكسرات', 129, '11 سبتمبر'], ['العلامة د', 'ترافل صغير، 8 قطع', 59, '19 سبتمبر']], seen: 'رُصد', missed: 'غير متابَع',
        gap: 'فجوة', gapT: 'لا توجد علبة هدايا تجمع التمر والشوكولاتة بأقل من ' + iso('AED 100') + '. علبة من 12 قطعة بسعر ' + iso('AED 89') + ' ستكون وحدها هناك.', gapN: 'تحليل الفجوات: غير متابَع',
        notes: (x) => [['sos', `حصة البحث <b>${iso(x.sos)}</b>`, 'a'], ['gap', 'وجدت فجوة سعرية تركها المنافسون', 'b']] },
      sales: { app: iso('noon') + ' · لوحة البائع', brand: 'noon', title: 'المبيعات', k: ['الطلبات', 'إجمالي المبيعات', 'نسبة المرتجعات', 'متوسط الطلب'], chart: 'الطلبات يوميًا', top: 'أفضل المنتجات', cols: ['المنتج', 'الطلبات', 'المخزون'],
        stock: (d) => (d < 0 ? `نفد ${-d} يومًا` : `${d} يومًا`), rateLowGood: true,
        notes: (x) => [['stock0', `أعادت الطلب في وقته: بلا نفاد لمدة <b>${x.dip} يومًا</b>`, 'b'], ['top2', `دفعت علبة الهدايا في الموسم: <b>${x.gift}</b>`, 'b'], ['rate', `التغليف الحراري: المرتجعات <b>${x.rateChg}</b>`, 'a']] },
      ads: { app: iso('noon Ads') + ' · الحملات', brand: 'noon', k: ['الإنفاق', 'مبيعات الإعلانات', iso('ROAS'), iso('CTR')], target: 'الهدف ' + iso('3.0x+'), cols: ['الحملة', 'الحالة', 'الإنفاق', 'المبيعات', iso('ROAS')], names: ['البحث · علب الهدايا', 'الفئة · الشوكولاتة', 'تلقائية · كل المنتجات'], on: 'نشطة', off: 'متوقفة', chart: 'الإنفاق ومبيعات الإعلانات أسبوعيًا',
        notes: (x) => [['r2x', `أوقفت التلقائية: إنفاق <b>${x.autoSpend}</b> بعائد <b>${x.autoRatio}</b>`, 'b'], ['r0x', `نقلت الميزانية إلى بحث علب الهدايا: <b>${x.searchRatio}</b>`, 'b'], ['ratio', `الإنفاق <b>${x.spendChg}</b>، مبيعات الإعلانات <b>${x.salesChg}</b>`, 'a']] },
      soc: { app: iso('Instagram') + ' · الإحصاءات', brand: 'ig', handle: iso('@brand_a'), posts: (n) => `${n} منشورًا في 90 يومًا`, last: 'آخر 6 منشورات', k: ['معدل التفاعل', 'متوسط الوصول للمنشور', 'الحفظ لكل منشور', 'متابعون جدد'], photo: 'صورة', reel: iso('Reel'),
        notes: (x) => [['saves', `فيديوهات علبة الهدايا: الحفظ <b>${x.saves}</b>`, 'a'], ['p4', `النشر في ساعات ذروة المشترين: الوصول <b>${x.reach}</b>`, 'b'], ['foll', `<b>${iso('+' + x.foll1)}</b> متابعًا بدل ${iso('+' + x.foll0)}`, 'a']] },
      rev: { app: iso('noon') + ' · التقييمات والمراجعات', brand: 'noon', rating: 'التقييم خلال 90 يومًا', newR: 'تقييمات جديدة في 90 يومًا', replies: 'مراجعات تم الرد عليها', time: 'الوسيط لوقت الرد', trend: 'التقييم المتحرك أسبوعيًا',
        dur: (m) => (m >= 1440 ? `${m / 1440} أيام` : m === 60 ? 'ساعة' : `${Math.floor(m / 60)} س` + (m % 60 ? ` ${m % 60} د` : '')), of: (a, n) => `${a} من ${n}`,
        a: ['سارة', 'وصلت العلبة مهروسة والشوكولاتة ذائبة. لا تصلح هدية.'], none: 'لم يرد البائع',
        reply: ['البائع', 'نعتذر منك. البديل في الطريق، وأصبحنا نشحن كل علبة في كيس حراري.'],
        b0: ['عمر', 'سعرها مرتفع مقارنة بحجمها.'], b1: ['عمر', 'طازجة وتغليفها أنيق، اشتريتها هدية.'],
        notes: (x) => [['reply', `رد على <b>${x.rate1}</b> من المراجعات، والوسيط <b>${x.time1}</b>`, 'b'], ['rev2', `الأكياس الحرارية: تقييمات النجمة الواحدة <b>${iso(x.one0 + ' → ' + x.one1)}</b>`, 'b']] },
      srch: { app: iso('noon') + ' · البحث', brand: 'noon', q: 'علبة شوكولاتة هدية', filters: ['الأكثر صلة', 'السعر', 'تقييم 4+', iso('Express')], results: (n, p) => `${n} نتيجة · ${p} في الصفحة`, yours: 'منتجك', badge: (n) => `منتجك · المركز ${n}`, pos: (n, p) => `المركز ${n} · الصفحة ${p}`, rank: 'الترتيب أسبوعيًا', ad: 'إعلان',
        notes: (x) => [['badge', `عنوان وصور جديدة: <b>${iso('#' + x.p0 + ' → #' + x.p1)}</b>`, 'b'], ['trend', x.since, 'a']] },
      vid: { t: ['مقطع ذكاء اصطناعي نمطي: يشبه ما ينشره الجميع.', 'صُنع مع ' + iso('USHA') + ': فكرة وقصة وصورة سينمائية.'], play: 'شغّل الفيديو' },
      diff: {
        sad: (x) => [['الإنفاق', x.spend], [iso('CPA'), x.cpa], [iso('CTR'), x.ctr], ['المشتريات', x.buy]],
        seo: (x) => [['النقرات', x.clicks], ['الظهور', x.impr], [iso('CTR'), x.ctr], ['متوسط الترتيب', x.pos]],
        web: (x) => [['الإيرادات', x.rev], ['الطلبات', x.orders], ['التحويل', x.cr], ['متوسط الطلب', x.aov]],
        crm: (x) => [['أول رد', x.frt], ['تم الحل', x.res], [iso('CSAT'), x.csat], ['طلبات الشركات', x.won]],
        stk: (x) => [['أيام النفاد', x.out], ['الراكد', x.dead], ['تحت نقطة إعادة الطلب', x.below]],
        mkt: (x) => [['حصة البحث', x.sos], ['مراجعات إيجابية', x.pos], ['إطلاقات مرصودة', x.seen]],
        sales: (x) => [['الطلبات', x.orders], ['متوسط الطلب', x.avg], ['إجمالي المبيعات', x.gross], ['المرتجعات', x.rate]],
        ads: (x) => [[iso('ROAS'), x.ratio], ['الإنفاق', x.spend], ['مبيعات الإعلانات', x.sales], [iso('CTR'), x.ctr]],
        soc: (x) => [['التفاعل', x.er], ['الوصول', x.reach], ['الحفظ', x.saves], ['المتابعون', x.foll]],
        rev: (x) => [['التقييم', x.rating], ['تقييمات جديدة', x.count], ['تم الرد', x.answered], ['وقت الرد', x.time]],
        srch: (x) => [['الترتيب', x.pos], ['الصفحة', x.page]],
      },
    },
  };

  // ---------- formatting ----------
  let L = 'en';
  const tx = () => T[L] || T.en;
  const loc = () => (L === 'ru' ? 'ru-RU' : 'en-US');
  function fmt(n, d = 0) { return Number(n).toLocaleString(loc(), { minimumFractionDigits: d, maximumFractionDigits: d }); }
  const fmtT = (n) => Number(n).toLocaleString(loc(), { minimumFractionDigits: 0, maximumFractionDigits: 1 }); // 25 → "25", 30.2 → "30.2"
  function plural(n, one, few, many) { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; }
  const A = (s) => (L === 'ar' ? iso(s) : s); // Latin/number runs inside Arabic
  const money = (n) => (L === 'ru' ? fmt(n) + ' ₽' : A('AED ' + fmt(n)));
  const pct = (n, d = 1) => A(fmt(n, d) + '%');
  const xr = (n) => A(fmt(n, 1) + 'x');
  const MINUS = '−';
  const sign = (v) => (v > 0 ? '+' : v < 0 ? MINUS : '');
  const chg = (a, b) => { const v = (b / a - 1) * 100; return A(sign(v) + fmtT(Math.round(Math.abs(v) * 10) / 10) + '%'); };
  const ppU = () => (L === 'ru' ? ' п.п.' : L === 'ar' ? ' نقطة' : ' pp');
  const pp = (a, b) => { const v = Math.round((b - a) * 10) / 10; return L === 'ar' ? iso(sign(v) + fmtT(Math.abs(v))) + ppU() : sign(v) + fmtT(Math.abs(v)) + ppU(); };
  const times = (a, b) => A('×' + fmtT(Math.round((b / a) * 10) / 10));
  const arrow = (a, b) => A(a + ' → ' + b);
  const FMT = { int: (v) => fmt(Math.round(v)), money: (v) => money(Math.round(v)), p1: (v) => pct(v, 1), p0: (v) => pct(v, 0), x1: (v) => xr(v), r1: (v) => fmt(v, 1), plus: (v) => A('+' + fmt(Math.round(v))) };
  // a number that counts up; data-k marks it for the check script
  const C = (k, v, f, cls = '') => `<b class="t3-cu ${cls}" data-k="${k}" data-to="${v}" data-f="${f}">${FMT[f](v)}</b>`;
  const K = (k, s, tag = 'span', cls = '') => `<${tag} data-k="${k}"${cls ? ` class="${cls}"` : ''}>${s}</${tag}>`;
  const dayDate = (i, o) => { const [y, m, d] = N.start; return new Date(Date.UTC(y, m, d + i)).toLocaleDateString(L === 'ar' ? 'ar-u-nu-latn' : loc(), Object.assign({ timeZone: 'UTC' }, o)); };
  const range = () => `${dayDate(0, { day: 'numeric', month: 'short' })} – ${dayDate(N.days - 1, { day: 'numeric', month: 'short', year: 'numeric' })}`;

  // ---------- small drawings ----------
  function path(vals, w, h, { max, min, inv = false } = {}) {
    const hi = max ?? Math.max(...vals), lo = min ?? Math.min(...vals), span = hi - lo || 1;
    return vals.map((v, i) => { const t = (v - lo) / span; return [(i / (vals.length - 1)) * w, (inv ? t : 1 - t) * (h - 6) + 3]; });
  }
  const d2 = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
  function lineSVG(vals, { max, min, cls = '', inv = false, h = 90, area = true, step = false, data = '' } = {}) {
    const w = 300; let pts = path(vals, w, h, { max, min, inv });
    if (step) pts = pts.flatMap((p, i) => (i ? [[p[0], pts[i - 1][1]], p] : [p]));
    const d = d2(pts);
    const grid = [0.25, 0.5, 0.75].map((g) => `<line x1="0" x2="${w}" y1="${(g * h).toFixed(1)}" y2="${(g * h).toFixed(1)}"/>`).join('');
    return `<svg class="sc-chart sc-draw ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"${data}><g class="g">${grid}</g>${area ? `<path class="a" d="${d}L${w} ${h}L0 ${h}Z"/>` : ''}<path class="l" d="${d}"/></svg>`;
  }
  const spark = (vals, good) => `<svg class="sc-spark-l sc-draw ${good ? 'good' : 'flat'}" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true"><path d="${d2(path(vals, 100, 24))}"/></svg>`;
  // product art: 0 chocolate box, 1 dates, 2 gift box; competitors get other shapes and hues
  function shot(kind, hue = 24) {
    const bg = `hsl(${hue} 45% 94%)`, c = `hsl(${hue} 52% 44%)`, c2 = `hsl(${hue} 60% 60%)`;
    let art;
    if (kind === 0) art = `<rect x="16" y="30" width="68" height="46" rx="6" fill="${c}"/><rect x="20" y="34" width="60" height="38" rx="4" fill="#F4E3CF"/>${[0, 1, 2].map((r) => [0, 1, 2, 3].map((q) => `<circle cx="${29 + q * 14}" cy="${43 + r * 10.5}" r="4.8" fill="${(r + q) % 2 ? '#6B3A22' : '#3A1F14'}"/><circle cx="${27.5 + q * 14}" cy="${41.5 + r * 10.5}" r="1.4" fill="rgba(255,255,255,.35)"/>`).join('')).join('')}`;
    else if (kind === 1) art = `<ellipse cx="50" cy="72" rx="32" ry="8" fill="rgba(0,0,0,.1)"/><path d="M18 52h64c0 14-14 22-32 22s-32-8-32-22z" fill="#E9D7BF"/><ellipse cx="50" cy="52" rx="32" ry="7" fill="#F6EBDD"/>${[[36, 46, -20], [50, 43, 10], [63, 47, -8], [43, 51, 25], [58, 51, -30]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="4.6" transform="rotate(${r} ${x} ${y})" fill="#4A2412"/><ellipse cx="${x - 2}" cy="${y - 1.5}" rx="3" ry="1.2" transform="rotate(${r} ${x} ${y})" fill="rgba(255,255,255,.25)"/>`).join('')}`;
    else if (kind === 2) art = `<ellipse cx="50" cy="80" rx="30" ry="6" fill="rgba(0,0,0,.1)"/><rect x="22" y="40" width="56" height="38" rx="4" fill="${c}"/><rect x="18" y="31" width="64" height="12" rx="3" fill="${c2}"/><rect x="46" y="31" width="8" height="47" fill="#F3C969"/><path d="M50 31c-9-12-22-8-14-1 3 2 9 2 14 1zm0 0c9-12 22-8 14-1-3 2-9 2-14 1z" fill="#F3C969"/>`;
    else if (kind === 3) art = `<path d="M30 40h40l-5 36H35z" fill="${c}"/><ellipse cx="50" cy="40" rx="20" ry="6" fill="${c2}"/>${[0, 1, 2].map((q) => `<circle cx="${42 + q * 8}" cy="36" r="4.5" fill="#4A2A1A"/>`).join('')}`;
    else if (kind === 4) art = `<path d="M50 74C26 58 22 42 33 35c7-4 13 0 17 6 4-6 10-10 17-6 11 7 7 23-17 39z" fill="${c}"/>`;
    else art = `<rect x="22" y="34" width="56" height="40" rx="3" fill="${c}"/>${[0, 1, 2, 3].map((q) => `<rect x="${26 + q * 13}" y="38" width="10" height="32" rx="1.5" fill="${c2}"/>`).join('')}`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="100" fill="${bg}"/>${art}</svg>`;
  }
  const star = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 .8l1.6 3.4 3.7.4-2.8 2.5.8 3.7L6 9 2.7 10.8l.8-3.7L.7 4.6l3.7-.4z"/></svg>';
  const IC = {
    home: '<path d="M3 10l7-6 7 6v7H3z"/>', chart: '<path d="M3 17V9M8 17V4M13 17v-6M18 17V7"/>', ads: '<path d="M3 8v4l9 4V4zM12 6h3a2 2 0 010 8h-3"/>', star: '<path d="M10 2.5l2.3 4.8 5.2.6-3.9 3.6 1 5.1L10 14l-4.6 2.6 1-5.1L2.5 7.9l5.2-.6z"/>',
    box: '<path d="M3 6l7-3 7 3v8l-7 3-7-3zM3 6l7 3 7-3M10 9v8"/>', users: '<circle cx="8" cy="7" r="3"/><path d="M2.5 17c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5M14 4.5a3 3 0 010 5.5M15 12.5c1.7.5 2.8 2 3 4.5"/>', search: '<circle cx="9" cy="9" r="5.5"/><path d="M13 13l4.5 4.5"/>',
    cal: '<rect x="3" y="4.5" width="14" height="12.5" rx="2"/><path d="M3 8.5h14M7 2.5v4M13 2.5v4"/>', bell: '<path d="M5 14V9a5 5 0 0110 0v5l1.5 2h-13zM8.5 18.5h3"/>', gear: '<circle cx="10" cy="10" r="2.6"/><path d="M10 2.5v2.2M10 15.3v2.2M2.5 10h2.2M15.3 10h2.2M4.7 4.7l1.6 1.6M13.7 13.7l1.6 1.6M4.7 15.3l1.6-1.6M13.7 6.3l1.6-1.6"/>',
    target: '<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3.5"/><circle cx="10" cy="10" r=".6"/>', globe: '<circle cx="10" cy="10" r="7.5"/><path d="M2.5 10h15M10 2.5c2.5 2.6 2.5 12.4 0 15M10 2.5c-2.5 2.6-2.5 12.4 0 15"/>',
    cart: '<path d="M2.5 3.5h2.2l1.8 9h9l1.7-6.5H6"/><circle cx="8" cy="16" r="1.3"/><circle cx="15" cy="16" r="1.3"/>', chat: '<path d="M3 4.5h14v9H8l-4 3v-3H3z"/><path d="M6.5 8h7M6.5 10.5h4.5"/>',
    radar: '<circle cx="10" cy="10" r="7.5"/><circle cx="10" cy="10" r="4"/><path d="M10 10l5.3-5.3"/><circle cx="13" cy="12.5" r="1"/>', play: '<path d="M6 4l10 6-10 6z"/>',
    down: '<path d="M10 3v10M5.5 9l4.5 4.5L14.5 9M4 17h12"/>', filt: '<path d="M3 5h14M6 10h8M8.5 15h3"/>',
  };
  const ic = (n) => `<svg class="ic" viewBox="0 0 20 20" aria-hidden="true">${IC[n]}</svg>`;
  const RAIL = { sales: 'chart', ads: 'ads', sad: 'target', soc: 'users', seo: 'globe', web: 'cart', crm: 'chat', stk: 'box', mkt: 'radar', rev: 'star', srch: 'search' };
  function frame(key, app, brand, title, body) {
    const t = tx();
    const rail = ['home', 'chart', 'ads', 'target', 'globe', 'cart', 'chat', 'box', 'radar', 'star', 'search'].map((n) => `<i class="${n === RAIL[key] ? 'on' : ''}">${ic(n)}</i>`).join('');
    return `<div class="sc sc-${brand}"><div class="sc-bar"><span class="sc-win" aria-hidden="true"><i></i><i></i><i></i></span><span class="sc-app"><i class="sc-mark" aria-hidden="true"></i>${app}</span><span class="sc-find">${ic('search')}<span>${esc(t.search)}</span></span><span class="sc-bell">${ic('bell')}<i></i></span><span class="sc-me" aria-hidden="true">BA</span><span class="sc-ex">${esc(t.ex)}</span></div>
      <div class="sc-main"><nav class="sc-rail" aria-hidden="true">${rail}<i class="end">${ic('gear')}</i></nav><div class="sc-body">
      <div class="sc-h"><b>${title}</b><div class="sc-tools"><span class="sc-sel">${ic('cal')}${range()} · ${esc(t.days)}</span><span class="sc-sel hide-s">${ic('filt')}${esc(t.all)} ▾</span><span class="sc-sel ghost hide-m">${ic('down')}${esc(t.exp)}</span></div></div>
      ${body}</div></div></div>`;
  }

  // ---------- the five screens; v = 0 without, 1 with ----------
  function sSales(v, X) {
    const t = tx(), S = t.sales, M = X.M, o = N.orders[v], avg = M.avg[v], gross = X.gross[v], rate = M.rate[v];
    const wk = weekly(X.daily[v]), rateGood = S.rateLowGood ? M.rateW[v][12] <= M.rateW[v][0] : M.rateW[v][12] >= M.rateW[v][0];
    const kp = [
      [S.k[0], C('orders', o, 'int'), spark(wk, v === 1), v ? 'ok' : 'bad'],
      [S.k[1], C('gross', gross, 'money'), spark(wk.map((x) => x * avg), v === 1), ''],
      [S.k[2], C('rate', rate, L === 'ru' ? 'p0' : 'p1'), spark(M.rateW[v], rateGood), ''],
      [S.k[3], C('avg', avg, 'money'), spark(M.avgW[v], v === 1), ''],
    ];
    const ax = [0, 31, 62, 89].map((i) => `<span style="left:${(i / 89) * 100}%">${dayDate(i, { day: 'numeric', month: 'short' })}</span>`).join('');
    const rows = P[L].map((name, i) => {
      const s = cover(v, i);
      return `<tr><td><span class="sc-pi">${shot(i, [24, 32, 350][i])}</span><span class="sc-ell">${esc(name)}</span></td><td class="num">${C('top' + i, N.top[v][i], 'int')}</td><td>${K('stock' + i, esc(S.stock(s)), 'span', 'sc-pill ' + (s < N.stk.reorderDays ? 'bad' : 'ok'))}</td></tr>`;
    }).join('');
    const data = ` data-series="${X.daily[v].join(',')}"`;
    return frame('sales', S.app, S.brand, esc(S.title), `<div class="sc-kpis">${kp.map(([a, b, c, h]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${esc(a)}</span>${b}${c}</div>`).join('')}</div>${NB(v, 'sales', 'a')}
      <div class="sc-row2"><div class="sc-card sc-main-chart"><div class="sc-ct"><span>${esc(S.chart)}</span><small>${esc(range())}</small></div><div class="sc-plot">${lineSVG(X.daily[v], { max: 75, min: 0, cls: v ? 'good' : 'flat', data })}${v ? '' : `<span class="sc-band" style="left:${(N.dip[0] / 89) * 100}%;width:${((N.dip[1] - N.dip[0]) / 89) * 100}%"></span>`}</div><div class="sc-ax">${ax}</div></div>
      <table class="sc-t"><thead><tr><th>${esc(S.top)}</th><th class="num">${esc(S.cols[1])}</th><th>${esc(S.cols[2])}</th></tr></thead><tbody>${rows}</tbody></table></div>${NB(v, 'sales', 'b')}`);
  }
  function sAds(v, X) {
    const t = tx(), Ad = t.ads, M = X.M, rows = M.ads[v], { spend, sales } = X.ads[v], ru = L === 'ru';
    const ratio = (sp, sa) => (sa ? (ru ? pct((sp / sa) * 100, 1) : xr(sa / sp)) : '—');
    const good = (sp, sa) => (ru ? sp / sa <= 0.2 : sa / sp >= 3);
    const kp = [[Ad.k[0], C('spend', spend, 'money')], [Ad.k[1], C('sales', sales, 'money')], [Ad.k[2], ru ? C('ratio', Math.round((spend / sales) * 1000) / 10, 'p1') : C('ratio', Math.round((sales / spend) * 10) / 10, 'x1'), good(spend, sales) ? 'ok' : 'bad'], [Ad.k[3], C('ctr', N.ctr[v], 'p1')]];
    const body = rows.map((r, i) => `<tr data-k="r${i}"><td><span class="sc-st ${r[2] ? 'on' : ''}" aria-hidden="true"></span><span class="sc-ell">${esc(Ad.names[i])}</span></td><td class="hide-s"><span class="sc-pill ${r[2] ? 'ok' : 'mute'}">${esc(r[2] ? Ad.on : Ad.off)}</span></td><td class="num">${r[2] ? K('r' + i + 's', fmt(r[0])) : '—'}</td><td class="num">${r[2] ? K('r' + i + 'a', fmt(r[1])) : '—'}</td><td class="num" data-k="r${i}x">${r[2] ? K('r' + i + 'r', ratio(r[0], r[1]), 'b', good(r[0], r[1]) ? 'ok' : 'bad') : '—'}</td></tr>`).join('');
    // spend vs ad sales by week: shape from the daily orders, scaled to the totals
    const wk = weekly(X.daily[v]), ws = sum(wk);
    const wt = wk.map((x, i) => (v ? 1 - i * 0.012 : 1)), sp = wt.map((w) => (spend * w) / sum(wt)), sa = wk.map((x) => (sales * x) / ws);
    const top = Math.max(...sp, ...sa);
    const bars = wk.map((_, i) => `<div class="sc-wk"><i style="--h:${(sp[i] / top) * 100}%"></i><i class="s" style="--h:${(sa[i] / top) * 100}%"></i></div>`).join('');
    return frame('ads', Ad.app, Ad.brand, esc(t.screens[1][0]), `<div class="sc-kpis">${kp.map(([a, b, c]) => `<div class="sc-kpi ${c ? 'hl ' + c : ''}"><span>${a}</span>${b}${c ? `<small>${Ad.target}</small>` : ''}</div>`).join('')}</div>${NB(v, 'ads', 'a')}
      <div class="sc-card sc-bars"><div class="sc-ct"><span>${esc(Ad.chart)}</span><span class="sc-leg"><i class="sw"></i>${Ad.k[0]}<i class="sw s"></i>${Ad.k[1]}</span></div><div class="sc-wks sc-grow">${bars}</div></div>
      <table class="sc-t ads"><thead><tr><th>${esc(Ad.cols[0])}</th><th class="hide-s">${esc(Ad.cols[1])}</th><th class="num">${esc(Ad.cols[2])}</th><th class="num">${esc(Ad.cols[3])}</th><th class="num">${Ad.cols[4]}</th></tr></thead><tbody>${body}</tbody></table>${NB(v, 'ads', 'b')}`);
  }
  function sSoc(v) {
    const t = tx(), S = t.soc, n = N.soc, er = n.er[v];
    const kp = [[S.k[0], C('er', Math.round(mean(er) * 10) / 10, 'p1'), v ? 'ok' : 'bad'], [S.k[1], C('reach', n.reach[v], 'int')], [S.k[2], C('saves', n.saves[v], 'int')], [S.k[3], C('foll', n.foll[v], 'plus')]];
    const hues = v ? [18, 200, 330, 40, 260, 150] : [30, 30, 210, 30, 30, 210];
    const tiles = er.map((e, i) => `<div class="sc-post"><span class="sc-th">${shot(v ? [2, 0, 1, 2, 0, 1][i] : [0, 1, 0, 2, 0, 1][i], hues[i])}</span>${v ? '<span class="sc-play" aria-hidden="true"></span>' : ''}<span class="sc-ty">${esc(v ? S.reel : S.photo)}</span>${K('p' + i, A('ER ' + fmt(e, 1) + '%'), 'span', 'sc-er')}</div>`).join('');
    const bars = er.map((e) => `<i style="--h:${(e / 4) * 100}%"></i>`).join('');
    return frame('soc', S.app, S.brand, `<span class="sc-prof"><span class="sc-av" aria-hidden="true"></span><span><b>${S.handle}</b><small>${esc(S.posts(n.posts))}</small></span></span>`, `<div class="sc-kpis">${kp.map(([a, b, h]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${esc(a)}</span>${b}</div>`).join('')}</div>${NB(v, 'soc', 'a')}
      <div class="sc-row2 soc"><div class="sc-card"><div class="sc-ct"><span>${esc(S.last)}</span></div><div class="sc-posts">${tiles}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.k[0])}</span><small>${esc(S.last)}</small></div><div class="sc-cols sc-grow">${bars}</div></div></div>${NB(v, 'soc', 'b')}`);
  }
  function sRev(v, X) {
    const t = tx(), R = t.rev, d = N.rev.dist[v], x = X.dist[v], ans = N.rev.answered[v];
    const stars = (k) => `<span class="sc-stars" aria-hidden="true">${[1, 2, 3, 4, 5].map((s) => `<i class="${s <= k ? 'on' : ''}">${star}</i>`).join('')}</span>`;
    const mx = Math.max(...N.rev.dist.flat());
    const dist = d.map((c, i) => `<div class="sc-dr"><span>${5 - i}</span><i><b style="--w:${(c / mx) * 100}%"></b></i>${K('dist' + i, fmt(c), 'small')}</div>`).join('');
    const reply = v ? `<div class="sc-reply" data-k="reply"><b>${esc(R.reply[0])} · ${esc(R.dur(60))}</b><p>${esc(R.reply[1])}</p></div>` : `<div class="sc-reply none" data-k="reply"><p>${esc(R.none)}</p></div>`;
    const b = v ? R.b1 : R.b0;
    return frame('rev', R.app, R.brand, `<span class="sc-prod"><span class="sc-pi lg">${shot(0, 24)}</span><span><b class="sc-ell">${esc(P[L][0])}</b><small>${money(N[L === 'ru' ? 'ru' : 'en'].price)}</small></span></span>`, `<div class="sc-row2 rev"><div class="sc-col">
      <div class="sc-rate"><div class="sc-big"><small>${esc(R.rating)}</small>${C('rating', Math.round(x.avg * 10) / 10, 'r1')}${stars(Math.round(x.avg))}<small>${esc(R.newR)}: ${K('count', fmt(x.n), 'b')}</small></div><div class="sc-dist">${dist}</div></div>
      <div class="sc-kpis two"><div class="sc-kpi hl ${v ? 'ok' : 'bad'}"><span>${esc(R.replies)}</span>${C('answeredPct', Math.round((ans / x.n) * 100), 'p0')}<small>${K('answered', esc(R.of(fmt(ans), fmt(x.n))))}</small></div><div class="sc-kpi"><span>${esc(R.time)}</span>${K('time', esc(R.dur(N.rev.replyMin[v])), 'b')}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(R.trend)}</span>${K('trendEnd', fmt(N.rev.trend[v][12], 1), 'small')}</div>${lineSVG(N.rev.trend[v], { max: 4.7, min: 3.9, h: 50, cls: v ? 'good' : 'flat', step: true })}</div></div>
      <div class="sc-col"><div class="sc-rev"><div class="sc-rh"><span class="sc-avr">${esc(R.a[0][0])}</span><b>${esc(R.a[0])}</b>${stars(1)}</div><p>${esc(R.a[1])}</p>${reply}</div>
      <div class="sc-rev" data-k="rev2"><div class="sc-rh"><span class="sc-avr">${esc(b[0][0])}</span><b>${esc(b[0])}</b>${stars(v ? 5 : 2)}</div><p>${esc(b[1])}</p></div></div></div>${NB(v, 'rev', 'b')}`);
  }
  function sSearch(v) {
    const t = tx(), S = t.srch, M = N[L === 'ru' ? 'ru' : 'en'], pos = N.srch.trend[v][12], page = Math.ceil(pos / N.srch.perPage);
    const cards = COMP[L].map((name, i) => ({ name, price: M.comp[i], r: N.srch.compRating[i], kind: [3, 4, 5, 3, 1, 5, 1, 4, 0][i], hue: [12, 300, 36, 200, 340, 48, 30, 350, 20][i] }));
    if (pos <= 9) cards[pos - 1] = { name: P[L][0], price: M.price, r: N.srch.rating[v], kind: 0, hue: 24, mine: true };
    const grid = cards.map((c, i) => `<div class="sc-card sc-pc${c.mine ? ' mine' : ''}"><span class="sc-th">${shot(c.kind, c.hue)}</span>${c.mine ? K('badge', esc(S.badge(pos)), 'span', 'sc-you') : i === 0 ? `<span class="sc-adt">${esc(S.ad)}</span>` : ''}<b>${money(c.price)}</b><span class="sc-ell">${esc(c.name)}</span><small>${star}${fmt(c.r, 1)}</small></div>`).join('');
    return frame('srch', S.app, S.brand, `<span class="sc-search">${ic('search')}<span>${esc(S.q)}</span></span>`, `<div class="sc-filt"><span class="sc-res">${esc(S.results(fmt(N.srch.results), N.srch.perPage))}</span>${S.filters.map((f, i) => `<span class="${i ? '' : 'on'}">${f}</span>`).join('')}</div>
      <div class="sc-posrow"><div class="sc-pos ${v ? 'ok' : 'bad'}" data-k="pos"><small>${esc(S.yours)}</small>${K('posTxt', esc(S.pos(pos, page)), 'b')}</div><div class="sc-spark" data-k="trend"><small>${esc(S.rank)}</small>${lineSVG(N.srch.trend[v], { max: 42, min: 1, inv: true, h: 34, cls: v ? 'good' : 'flat', step: true })}</div></div>${NB(v, 'srch', 'a')}
      <div class="sc-grid">${grid}</div>${NB(v, 'srch', 'b')}`);
  }
  // ---------- the new screens ----------
  const units = (v, i) => (i < 3 ? N.top[v][i] : N.stk.extra[v][i - 3]);
  const perDay = (v, i) => units(v, i) / N.days;
  function cover(v, i) { return Math.round(N.stk.onHand[v][i] / perDay(v, i)); }
  const M_ = () => N[L === 'ru' ? 'ru' : 'en'];
  const ru_ = () => L === 'ru';
  const money2 = (n) => (ru_() ? fmt(Math.round(n)) + ' ₽' : A('AED ' + fmt(n, 2)));
  const pct2 = (n) => A(fmt(n, 2) + '%');
  const sadTot = (v) => { const r = M_().sad[v]; return { spend: sum(r.map((x) => x[0])), impr: sum(r.map((x) => x[1])), clicks: sum(r.map((x) => x[2])), buy: sum(r.map((x) => x[3])) }; };
  const kpis = (list, cls = '') => `<div class="sc-kpis ${cls}">${list.map(([a, b, h, sm]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${a}</span>${b}${sm || ''}</div>`).join('')}</div>`;
  function sSad(v) {
    const t = tx(), S = t.sad, rows = M_().sad[v], x = sadTot(v);
    const cpm = (r) => (r[0] / r[1]) * 1000, ctr = (r) => (r[2] / r[1]) * 100, cpa = (r) => r[0] / r[3];
    const tot = [x.spend, x.impr, x.clicks, x.buy];
    const kp = [[S.k[0], C('spend', x.spend, 'money')], [S.k[1], K('cpm', money2(cpm(tot)), 'b')], [S.k[2], K('ctr', pct2(ctr(tot)), 'b')], [S.k[3], K('cpa', money2(cpa(tot)), 'b'), v ? 'ok' : 'bad'], [S.k[4], C('buy', x.buy, 'int')]];
    const body = rows.map((r, i) => `<tr><td><span class="sc-st on" aria-hidden="true"></span><span class="sc-ell">${esc(S.names[i])}</span></td><td class="num">${K('r' + i + 's', fmt(r[0]))}</td><td class="num hide-s">${K('r' + i + 'm', money2(cpm(r)))}</td><td class="num hide-s">${K('r' + i + 'c', pct2(ctr(r)))}</td><td class="num">${K('r' + i + 'b', fmt(r[3]))}</td><td class="num">${K('r' + i + 'a', money2(cpa(r)), 'b')}</td></tr>`).join('');
    const wk = N.seo.weekly[v].map((w, i) => w * (1 + Math.sin(i) * 0.05));
    return frame('sad', S.app, S.brand, esc(t.screens[2][0]), `${kpis(kp, 'five')}${NB(v, 'sad', 'a')}
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.k[4])}</span><small>${esc(range())}</small></div>${lineSVG(wk, { h: 70, cls: v ? 'good' : 'flat', min: 0 })}</div>
      <table class="sc-t sad"><thead><tr>${S.cols.map((c, i) => `<th class="${i ? 'num' : ''}${i === 2 || i === 3 ? ' hide-s' : ''}">${c}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>${NB(v, 'sad', 'b')}`);
  }
  function sSeo(v) {
    const t = tx(), S = t.seo, o = N.seo, c = o.clicks[v], im = o.impr[v];
    const wk = o.weekly[v], ws = sum(wk), wcl = wk.map((w) => (c * w) / ws);
    const kp = [[S.k[0], C('clicks', c, 'int'), v ? 'ok' : ''], [S.k[1], C('impr', im, 'int')], [S.k[2], K('ctr', pct2((c / im) * 100), 'b')], [S.k[3], K('pos', fmt(o.pos[v], 1), 'b')]];
    const q = o.q[v].map((r, i) => `<tr data-k="q${i}"><td><span class="sc-ell">${esc(S.qs[i])}</span></td><td class="num">${K('q' + i + 'c', fmt(r[0]))}</td><td class="num">${K('q' + i + 'i', fmt(r[1]))}</td><td class="num">${K('q' + i + 'p', fmt(r[2], 1), 'b')}</td></tr>`).join('');
    const pg = o.pages[v].map((n, i) => `<tr data-k="pg${i}"><td><span class="sc-ell">${S.pages[i]}</span></td><td class="num">${K('pg' + i + 'c', fmt(n))}</td></tr>`).join('');
    return frame('seo', S.app, S.brand, esc(t.screens[4][0]), `${kpis(kp)}
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.chart)}</span><small>${esc(range())}</small></div>${lineSVG(wcl, { h: 70, min: 0, max: 520, cls: v ? 'good' : 'flat' })}</div>
      <div class="sc-row2 seo"><table class="sc-t"><thead><tr>${S.cols.map((h, i) => `<th class="${i ? 'num' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${q}</tbody></table>
      <table class="sc-t"><thead><tr><th>${S.pcol[0]}</th><th class="num">${S.pcol[1]}</th></tr></thead><tbody>${pg}</tbody></table></div>${NB(v, 'seo', 'b')}`);
  }
  function sWeb(v) {
    const t = tx(), S = t.web, W2 = M_().web, o = W2.orders[v], n = sum(o), aov = W2.aov[v], ses = N.web.sessions[v], rev = n * aov;
    const kp = [[S.k[0], C('ses', ses, 'int')], [S.k[1], K('cr', pct2((n / ses) * 100), 'b'), v ? 'ok' : 'bad'], [S.k[2], C('aov', aov, 'money')], [S.k[3], C('rev', rev, 'money')]];
    const rows = o.map((k, i) => `<tr><td><span class="sc-ell">${esc(S.chans[i])}</span></td><td class="num">${K('o' + i, fmt(k))}</td><td class="num">${K('v' + i, fmt(k * aov))}</td><td class="num hide-s"><span class="sc-share"><i style="--w:${(k / n) * 100}%"></i>${K('s' + i, A(fmt((k / n) * 100, 0) + '%'))}</span></td></tr>`).join('');
    const ab = N.web.abandoned[v], rc = N.web.recovered[v];
    const cart = [[S.ck[0], K('ab', fmt(ab), 'b')], [S.ck[1], K('rec', fmt(rc), 'b')], [S.ck[2], K('recr', pct((rc / ab) * 100, 1), 'b')], [S.ck[3], K('recv', money(rc * aov), 'b')]];
    return frame('web', S.app, S.brand, esc(t.screens[5][0]), `${kpis(kp)}${NB(v, 'web', 'a')}
      <div class="sc-row2 web"><div class="sc-col"><table class="sc-t"><thead><tr>${S.cols.map((h, i) => `<th class="${i ? 'num' : ''}${i === 3 ? ' hide-s' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${rows}<tr class="tot"><td>Σ</td><td class="num">${K('ot', fmt(n), 'b')}</td><td class="num">${K('vt', fmt(rev), 'b')}</td><td class="num hide-s">100%</td></tr></tbody></table></div>
      <div class="sc-card sc-cart"><div class="sc-ct"><span>${esc(S.cart)}</span><small>${esc(range())}</small></div><div class="sc-mini">${cart.map(([a, b]) => `<div><small>${esc(a)}</small>${b}</div>`).join('')}</div></div></div>${NB(v, 'web', 'b')}`);
  }
  const dur = (m) => (L === 'ru' ? (m >= 60 ? `${Math.floor(m / 60)} ч${m % 60 ? ' ' + (m % 60) + ' мин' : ''}` : `${m} мин`) : L === 'ar' ? (m >= 60 ? `${Math.floor(m / 60)} س${m % 60 ? ' ' + (m % 60) + ' د' : ''}` : `${m} د`) : m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ' ' + (m % 60) + ' min' : ''}` : `${m} min`);
  function sCrm(v) {
    const t = tx(), S = t.crm, o = N.crm, cv = o.conv[v], n = sum(cv), deal = M_().deal;
    const kp = [[S.k[0], C('conv', n, 'int')], [S.k[1], K('frt', esc(dur(o.frt[v])), 'b'), v ? 'ok' : 'bad'], [S.k[2], K('res', A(fmt((o.resolved[v] / n) * 100, 0) + '%'), 'b'), '', `<small>${K('resn', fmt(o.resolved[v]) + ' / ' + fmt(n))}</small>`], [S.k[3], K('csat', fmt(o.csat[v], 1) + ' / 5', 'b')]];
    const ch = cv.map((c, i) => `<div class="sc-chan"><i class="ch${i}" aria-hidden="true"></i><span>${S.chans[i]}</span>${K('c' + i, fmt(c), 'b')}</div>`).join('');
    const inbox = S.msgs.map(([nm, msg], i) => { const w = o.waits[v][i]; return `<div class="sc-msg"><span class="sc-avr">${esc(nm[0])}</span><span class="sc-mt"><b>${esc(nm)}</b><small>${esc(msg)}</small></span><span class="sc-pill ${w <= 60 ? 'ok' : 'bad'}">${esc(S.wait(w))}</span></div>`; }).join('');
    const pp = o.pipe[v].map((c, i) => `<div class="sc-stage${i === 3 ? ' won' : ''}"${i === 3 ? ' data-k="won"' : ''}><small>${esc(S.stages[i])}</small>${K('pc' + i, fmt(c), 'b')}${K('pv' + i, money(c * deal), 'small')}</div>`).join('');
    return frame('crm', S.app, S.brand, esc(t.screens[6][0]), `${kpis(kp)}${NB(v, 'crm', 'a')}
      <div class="sc-row2"><div class="sc-card"><div class="sc-ct"><span>${esc(S.inbox)}</span></div><div class="sc-inbox">${inbox}</div></div>
      <div class="sc-col"><div class="sc-card"><div class="sc-ct"><span>${esc(S.ch)}</span></div><div class="sc-chans">${ch}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.pipe)}</span></div><div class="sc-pipe">${pp}</div></div></div></div>${NB(v, 'crm', 'b')}`);
  }
  function stkFacts(v) {
    const n = 5, cov = Array.from({ length: n }, (_, i) => cover(v, i));
    const below = cov.filter((c) => c < N.stk.reorderDays).length;
    const dead = sum(cov.map((c, i) => (c > N.stk.deadDays ? N.stk.onHand[v][i] : 0)));
    const qty = Math.round((N.stk.coverTarget * perDay(v, 0)) / 10) * 10;
    const due = cov[0] - N.stk.reorderDays;
    return { cov, below, dead, qty, date: dayDate(N.days - 1 + due, { day: 'numeric', month: 'short' }), out: v ? 0 : N.dip[1] - N.dip[0] + 1 };
  }
  function sStk(v) {
    const t = tx(), S = t.stk, f = stkFacts(v), names = [...P[L], ...S.skus];
    const kp = [[S.k[0], K('below', fmt(f.below), 'b'), f.below ? 'bad' : 'ok'], [S.k[1], K('dead', fmt(f.dead), 'b')], [S.k[2], K('out', fmt(f.out), 'b'), f.out ? 'bad' : 'ok']];
    const rows = names.map((nm, i) => {
      const c = f.cov[i], st = c < N.stk.reorderDays ? 1 : c > N.stk.deadDays ? 2 : 0;
      return `<tr data-k="s${i}"><td><span class="sc-pi">${shot([0, 1, 2, 5, 3][i], [24, 32, 350, 20, 300][i])}</span><span class="sc-ell">${esc(nm)}</span></td><td class="num">${K('h' + i, fmt(N.stk.onHand[v][i]))}</td><td class="num hide-s">${K('d' + i, fmt(perDay(v, i), 1))}</td><td class="num">${K('cv' + i, esc(S.days(c)), 'b', st === 1 ? 'bad' : st === 2 ? 'warn' : '')}</td><td>${K('st' + i, esc(S.st[st]), 'span', 'sc-pill ' + ['ok', 'bad', 'mute'][st])}</td></tr>`;
    }).join('');
    const bar = f.cov.map((c, i) => `<i class="${c < N.stk.reorderDays ? 'bad' : c > N.stk.deadDays ? 'dead' : ''}" style="--w:${Math.min(100, (c / 120) * 100)}%"></i>`).join('');
    const plan = v ? K('plan', esc(S.sug(fmt(f.qty), f.date)), 'p') : K('plan', esc(S.none.replace('{d}', f.cov[0]).replace('{r}', N.stk.reorderDays)), 'p', 'warn');
    return frame('stk', S.app, S.brand, esc(t.screens[7][0]), `${kpis(kp, 'three')}${NB(v, 'stk', 'a')}
      <table class="sc-t stk"><thead><tr>${S.cols.map((h, i) => `<th class="${i && i < 4 ? 'num' : ''}${i === 2 ? ' hide-s' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>
      <div class="sc-card sc-plan ${v ? 'ok' : 'bad'}"><div class="sc-ct"><span>${esc(S.plan)}</span><small>${esc(range())}</small></div>${plan}<div class="sc-covbar" aria-hidden="true">${bar}<s style="--r:${(N.stk.reorderDays / 120) * 100}%"></s></div></div>${NB(v, 'stk', 'b')}`);
  }
  function sMkt(v, X) {
    const t = tx(), S = t.mkt, M = M_(), o = N.mkt, sos = o.sos[v], others = Math.round((100 - sum(sos)) * 10) / 10;
    const ours = Math.round(((N.rev.dist[v][0] + N.rev.dist[v][1]) / X.dist[v].n) * 1000) / 10;
    const pr = M.comp, all = [...pr, M.price], lo = Math.min(...all), hi = Math.max(...all);
    const dot = (p, r, cls) => `<circle class="${cls}" cx="${8 + ((p - lo) / (hi - lo)) * 284}" cy="${8 + ((4.95 - r) / 0.8) * 84}" r="${cls ? 6 : 4}"/>`;
    const map = `<svg class="sc-map" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="50" x2="300" y2="50"/><line x1="150" y1="0" x2="150" y2="100"/>${pr.map((p, i) => dot(p, N.srch.compRating[i], '')).join('')}${dot(M.price, N.srch.rating[v], 'me')}</svg>`;
    const sosRows = [[S.you, sos[0], 'me'], ...S.brands.map((b, i) => [b, sos[i + 1], '']), [S.others, others, 'oth']];
    const sb = sosRows.map(([b, p, c], i) => `<div class="sc-sos ${c}"><span>${esc(b)}</span><i><b style="--w:${p}%"></b></i>${K('sos' + i, A(fmtT(p) + '%'), 'small')}</div>`).join('');
    const sent = [[S.you, ours, 'me'], ...S.brands.map((b, i) => [b, o.sent[i], ''])].map(([b, p, c], i) => `<div class="sc-sos ${c}"><span>${esc(b)}</span><i><b style="--w:${p}%"></b></i>${K('sent' + i, A(fmtT(p) + '%'), 'small')}</div>`).join('');
    const la = S.launches.map(([b, nm, p, d], i) => `<div class="sc-launch"><span><b>${esc(b)}</b><small>${esc(nm)} · ${money(p)} · ${esc(d)}</small></span>${v ? `<span class="sc-pill ok">${esc(S.seen)}</span>` : `<span class="sc-pill mute">${esc(S.missed)}</span>`}</div>`).join('');
    return frame('mkt', S.app, S.brand, esc(t.screens[8][0]), `<div class="sc-row2"><div class="sc-card" data-k="map"><div class="sc-ct"><span>${esc(S.map)}</span><small>${money(lo)} – ${money(hi)}</small></div>${map}</div>
      <div class="sc-card" data-k="sos"><div class="sc-ct"><span>${esc(S.sos)}</span></div><div class="sc-soss">${sb}</div></div></div>${NB(v, 'mkt', 'a')}
      <div class="sc-row2"><div class="sc-card"><div class="sc-ct"><span>${esc(S.sent)}</span></div><div class="sc-soss">${sent}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.launch)}</span>${K('seen', fmt(o.seen[v]) + ' / 3', 'small')}</div>${la}</div></div>
      <div class="sc-card sc-gap ${v ? 'ok' : ''}" data-k="gap"><div class="sc-ct"><span>${esc(S.gap)}</span></div><p>${v ? S.gapT : esc(S.gapN)}</p></div>${NB(v, 'mkt', 'b')}`);
  }
  const SCREENS = [['sales', sSales, 'chart'], ['ads', sAds, 'ads'], ['sad', sSad, 'target'], ['soc', sSoc, 'users'], ['seo', sSeo, 'globe'], ['web', sWeb, 'cart'], ['crm', sCrm, 'chat'], ['stk', sStk, 'box'], ['mkt', sMkt, 'radar'], ['rev', sRev, 'star'], ['srch', sSearch, 'search']];

  // ---------- with-vs-without strip and USHA's notes, all computed ----------
  function facts(key, X) {
    const M = X.M, ru = L === 'ru';
    if (key === 'sad') {
      const a = sadTot(0), b = sadTot(1), cpa = (x) => x.spend / x.buy, ctr = (x) => (x.clicks / x.impr) * 100;
      return {
        diff: { spend: chg(a.spend, b.spend), cpa: chg(cpa(a), cpa(b)), ctr: arrow(bare(pct2(ctr(a))), bare(pct2(ctr(b)))), buy: chg(a.buy, b.buy) },
        note: { cpa0: bare(money2(cpa(a))), cpa1: bare(money2(cpa(b))), buy: chg(a.buy, b.buy), spend: chg(a.spend, b.spend) },
      };
    }
    if (key === 'seo') {
      const o = N.seo, ctr = (v) => (o.clicks[v] / o.impr[v]) * 100;
      return {
        diff: { clicks: chg(o.clicks[0], o.clicks[1]), impr: chg(o.impr[0], o.impr[1]), ctr: arrow(bare(pct2(ctr(0))), bare(pct2(ctr(1)))), pos: arrow(fmt(o.pos[0], 1), fmt(o.pos[1], 1)) },
        note: { q0: tx().seo.qs[0], p0: fmt(o.q[0][0][2], 1) + ' → ' + fmt(o.q[1][0][2], 1), guide: A('+' + fmt(o.pages[1][2] - o.pages[0][2])) },
      };
    }
    if (key === 'web') {
      const W2 = M_().web, n = W2.orders.map(sum), rev = [n[0] * W2.aov[0], n[1] * W2.aov[1]], cr = (v) => (n[v] / N.web.sessions[v]) * 100;
      return {
        diff: { rev: chg(rev[0], rev[1]), orders: chg(n[0], n[1]), cr: arrow(bare(pct2(cr(0))), bare(pct2(cr(1)))), aov: chg(W2.aov[0], W2.aov[1]) },
        note: { cr: arrow(bare(pct2(cr(0))), bare(pct2(cr(1)))), rec: fmt(N.web.recovered[0]) + ' → ' + fmt(N.web.recovered[1]) },
      };
    }
    if (key === 'crm') {
      const o = N.crm, n = o.conv.map(sum), res = (v) => fmt((o.resolved[v] / n[v]) * 100, 0) + '%', d = M_().deal;
      return {
        diff: { frt: arrow(dur(o.frt[0]), dur(o.frt[1])), res: arrow(res(0), res(1)), csat: arrow(fmt(o.csat[0], 1), fmt(o.csat[1], 1)), won: chg(o.pipe[0][3] * d, o.pipe[1][3] * d) },
        note: { frt: arrow(dur(o.frt[0]), dur(o.frt[1])), won: fmt(o.pipe[0][3]) + ' → ' + fmt(o.pipe[1][3]) },
      };
    }
    if (key === 'stk') {
      const a = stkFacts(0), b = stkFacts(1);
      return {
        diff: { out: arrow(fmt(a.out), fmt(b.out)), dead: arrow(fmt(a.dead), fmt(b.dead)), below: arrow(fmt(a.below), fmt(b.below)) },
        note: { dead: fmt(a.dead) + ' → ' + fmt(b.dead), qty: fmt(b.qty), date: b.date },
      };
    }
    if (key === 'mkt') {
      const s = N.mkt.sos, pos = (v) => Math.round(((N.rev.dist[v][0] + N.rev.dist[v][1]) / X.dist[v].n) * 1000) / 10;
      return {
        diff: { sos: arrow(fmtT(s[0][0]) + '%', fmtT(s[1][0]) + '%'), pos: arrow(fmtT(pos(0)) + '%', fmtT(pos(1)) + '%'), seen: arrow(N.mkt.seen[0] + ' / 3', N.mkt.seen[1] + ' / 3') },
        note: { sos: fmtT(s[0][0]) + '% → ' + fmtT(s[1][0]) + '%' },
      };
    }
    if (key === 'sales') {
      return {
        diff: { orders: chg(N.orders[0], N.orders[1]), avg: chg(M.avg[0], M.avg[1]), gross: chg(X.gross[0], X.gross[1]), rate: pp(M.rate[0], M.rate[1]) },
        note: { dip: N.dip[1] - N.dip[0] + 1, gift: chg(N.top[0][2], N.top[1][2]), rateChg: pp(M.rate[0], M.rate[1]) },
      };
    }
    if (key === 'ads') {
      const [a, b] = X.ads, auto = M.ads[0][2], srch = M.ads[1][0];
      const r = (s) => (ru ? pct((s.spend / s.sales) * 100, 0) : xr(s.sales / s.spend));
      return {
        diff: { ratio: arrow(bare(r(a)), bare(r(b))), spend: chg(a.spend, b.spend), sales: chg(a.sales, b.sales), ctr: chg(N.ctr[0], N.ctr[1]) },
        note: { autoSpend: money(auto[0]), autoRatio: ru ? pct((auto[0] / auto[1]) * 100, 1) : xr(auto[1] / auto[0]), searchRatio: ru ? pct((srch[0] / srch[1]) * 100, 1) : xr(srch[1] / srch[0]), spendChg: chg(a.spend, b.spend), salesChg: chg(a.sales, b.sales) },
      };
    }
    if (key === 'soc') {
      const s = N.soc, er = s.er.map((e) => Math.round(mean(e) * 10) / 10);
      return {
        diff: { er: arrow(bare(pct(er[0])), bare(pct(er[1]))), reach: times(s.reach[0], s.reach[1]), saves: times(s.saves[0], s.saves[1]), foll: arrow('+' + fmt(s.foll[0]), '+' + fmt(s.foll[1])) },
        note: { saves: times(s.saves[0], s.saves[1]), reach: times(s.reach[0], s.reach[1]), foll0: fmt(s.foll[0]), foll1: fmt(s.foll[1]) },
      };
    }
    if (key === 'rev') {
      const R = tx().rev, d = X.dist, a = N.rev.answered;
      const rp = [0, 1].map((v) => Math.round((a[v] / d[v].n) * 100));
      return {
        diff: { rating: arrow(fmt(d[0].avg, 1), fmt(d[1].avg, 1)), count: chg(d[0].n, d[1].n), answered: arrow(rp[0] + '%', rp[1] + '%'), time: A(bare(R.dur(N.rev.replyMin[0])) + ' → ' + bare(R.dur(N.rev.replyMin[1]))) },
        note: { one0: fmt(N.rev.dist[0][4]), one1: fmt(N.rev.dist[1][4]), rate1: pct(rp[1], 0), time1: R.dur(N.rev.replyMin[1]) },
      };
    }
    const tr = N.srch.trend, p = [tr[0][12], tr[1][12]], pg = p.map((x) => Math.ceil(x / N.srch.perPage));
    const wk = tr[1].findIndex((x) => x <= N.srch.perPage) + 1;
    return { diff: { pos: arrow(p[0], p[1]), page: arrow(pg[0], pg[1]) }, note: { p0: p[0], p1: p[1], since: tx().onPage(wk) } };
  }

  // ---------- videos ----------
  const VIDS = [['without-usha', '0:28'], ['with-usha', '0:42']];
  let quiet = false;
  const playing = () => $$('.t3-vid video').some((v) => !v.paused && !v.ended);
  function vidHTML() {
    const t = tx();
    return `<div class="t3-vids">${VIDS.map(([f, dur], i) => `<figure class="t3-vid ${i ? 'is-with' : 'is-without'}"><div class="t3-vtag"><span>${i ? t.with : t.without}</span><span class="sc-ex">${esc(t.ex)}</span></div>
      <div class="t3-vbox"><video preload="none" playsinline poster="/media/${f}.jpg" src="/media/${f}.mp4"></video><button type="button" class="t3-vplay" aria-label="${esc(t.vid.play)}: ${esc(bare(i ? t.with : t.without))}"><i aria-hidden="true"></i><span>${dur}</span></button></div>
      <figcaption>${t.vid.t[i]}</figcaption></figure>`).join('')}</div>`;
  }
  function vidWire(root) {
    $$('.t3-vid', root).forEach((fig) => {
      const v = $('video', fig), b = $('.t3-vplay', fig);
      b.addEventListener('click', () => {
        $$('.t3-vid video').forEach((o) => { if (o !== v && !o.paused) o.pause(); });
        v.controls = true; fig.classList.add('on');
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      });
      v.addEventListener('play', () => { if (!quiet) { quiet = true; dispatchEvent(new Event('usha:quiet')); } });
      const done = () => setTimeout(() => { if (quiet && !playing()) { quiet = false; dispatchEvent(new Event('usha:resume')); } }, 60);
      v.addEventListener('pause', done); v.addEventListener('ended', done);
    });
  }
  const stopVideos = () => $$('.t3-vid video').forEach((v) => { if (!v.paused) v.pause(); });

  // ---------- the divider: a slim line with glass grips above and below the screen ----------
  let wwIdx = 0, cut = 50;
  function setCut(stage, x) {
    cut = Math.max(0, Math.min(100, x));
    const box = stage.closest('.t3-cmp'); box.style.setProperty('--x', cut + '%');
    const line = $('.t3-line', stage); if (line) line.setAttribute('aria-valuenow', String(Math.round(cut)));
    const withShare = rtl() ? cut : 100 - cut;
    box.style.setProperty('--wa', Math.min(1, (100 - withShare) / 50).toFixed(2)); box.style.setProperty('--wb', Math.min(1, withShare / 50).toFixed(2));
  }
  function tipAt(stage, e) {
    const tip = $('.t3-tip', stage); if (!tip) return;
    const scr = $('.t3-scr', stage), r = scr.getBoundingClientRect(), xPct = ((e.clientX - r.left) / r.width) * 100;
    const withSide = rtl() ? xPct < cut : xPct > cut;
    const svg = $(`.t3-layer.${withSide ? 'b' : 'a'} .sc-chart[data-series]`, stage);
    if (!svg) { tip.hidden = true; return; }
    const q = svg.getBoundingClientRect();
    if (e.clientX < q.left || e.clientX > q.right || e.clientY < q.top - 8 || e.clientY > q.bottom + 8) { tip.hidden = true; return; }
    const s = svg.dataset.series.split(',').map(Number), i = Math.round(((e.clientX - q.left) / q.width) * (s.length - 1));
    const sr = stage.getBoundingClientRect();
    tip.hidden = false;
    tip.textContent = bare(tx().tip(dayDate(i, { day: 'numeric', month: 'short' }), s[i]));
    tip.style.left = (q.left + (i / (s.length - 1)) * q.width - sr.left) + 'px';
    tip.style.top = (q.top + (1 - s[i] / 75) * (q.height - 6) + 3 - sr.top) + 'px';
  }
  function stageWire(stage) {
    const line = $('.t3-line', stage), scr = $('.t3-scr', stage), cmp = stage.closest('.t3-cmp');
    let drag = false;
    const at = (e) => { const r = scr.getBoundingClientRect(); setCut(stage, ((e.clientX - r.left) / r.width) * 100); };
    stage.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button > 0) return;
      drag = true; stage.classList.add('drag'); stage.classList.remove('anim'); clearTimeout(nudgeT);
      const tip = $('.t3-tip', stage); if (tip) tip.hidden = true;
      try { stage.setPointerCapture(e.pointerId); } catch {}
      at(e);
    });
    stage.addEventListener('pointermove', (e) => { if (drag) at(e); else if (e.pointerType === 'mouse') tipAt(stage, e); });
    stage.addEventListener('pointerleave', () => { const tip = $('.t3-tip', stage); if (tip) tip.hidden = true; });
    const end = () => { drag = false; stage.classList.remove('drag'); };
    stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end); stage.addEventListener('lostpointercapture', end);
    line.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 20 : 5, dir = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      const go = (x) => { e.preventDefault(); clearTimeout(nudgeT); stage.classList.add('anim'); setCut(stage, x); };
      if (dir) go(cut + dir * step); else if (e.key === 'Home') go(0); else if (e.key === 'End') go(100);
    });
    if (fine && !reduce) {
      const tilt = $('.t3-tilt', cmp);
      cmp.addEventListener('pointermove', (e) => {
        if (drag) return;
        const r = cmp.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `rotateY(${(x * 4).toFixed(2)}deg) rotateX(${(-y * 3).toFixed(2)}deg)`;
      });
      cmp.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
    }
    setCut(stage, cut);
  }
  // a gentle nudge each time a screen opens, so it reads as movable
  let nudgeT = 0;
  function nudge(stage) {
    if (reduce || !stage) return;
    stage.classList.add('anim');
    const steps = [[450, 44], [1100, 56], [1750, 50]];
    const run = (k) => { if (k >= steps.length) return; nudgeT = setTimeout(() => { if (!stage.classList.contains('drag')) setCut(stage, steps[k][1]); run(k + 1); }, k ? steps[k][0] - steps[k - 1][0] : steps[k][0]); };
    run(0);
  }
  // USHA's notes sit in their own row (they never cover data); their targets glow on the "with" side
  function NB(v, key, bar) {
    const f = facts(key, derive(L)), list = tx()[key].notes(f.note).filter((n) => n[2] === bar);
    if (!list.length) return '';
    return `<div class="sc-nbar${v ? '' : ' ghost'}"${v ? '' : ' aria-hidden="true"'}>${list.map(([k, s]) => `<span class="sc-note" data-for="${k}"><span class="t3-face xs" aria-hidden="true"><i></i><i></i></span><span>${s}</span></span>`).join('')}</div>`;
  }
  function markTargets(stage) {
    const b = $('.t3-layer.b', stage); if (!b) return;
    $$('.sc-note', b).forEach((n) => { const t = $(`[data-k="${n.dataset.for}"]`, b); if (t) (t.closest('td,.sc-kpi,.sc-card,tr,.sc-pos,.sc-pc,.sc-rev,.sc-stage') || t).classList.add('sc-hit'); });
  }
  function play(stage) {
    if (!stage) return;
    stage.classList.remove('lit');
    if (reduce) { stage.classList.add('lit'); return; }
    void stage.offsetWidth;
    stage.classList.add('lit');
    const t0 = performance.now(), dur = 1100;
    const els = $$('.t3-cu', stage).map((el) => ({ el, to: +el.dataset.to, f: FMT[el.dataset.f], fin: el.textContent }));
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      els.forEach((o) => { o.el.textContent = k < 1 ? o.f(o.to * e) : o.fin; });
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function renderScreen(i, v) { const X = derive(L); return SCREENS[i][1](v, X); }
  function notesHTML(i) { return renderScreen(i, 1).match(/<span class="sc-note"[^]*?<\/span><\/span>/g)?.join('') || ''; }
  function diffHTML(i) {
    const key = SCREENS[i][0], f = facts(key, derive(L)), list = tx().diff[key](f.diff);
    return `<div class="t3-diff"><small>${tx().diffH}</small><div>${list.map(([a, b], j) => `<span><em>${a}</em><b data-k="d.${key}.${j}">${b}</b></span>`).join('')}</div></div>`;
  }
  const grip = (top) => `<span class="t3-grip ${top ? 'top' : 'bot'}" aria-hidden="true">${top ? '<span class="t3-face xs"><i></i><i></i></span>' : ''}<em>‹</em><em>›</em></span>`;
  function wwStage() {
    const t = tx();
    if (wwIdx === SCREENS.length) return vidHTML();
    return `<div class="t3-cmp" style="--x:${cut}%"><div class="t3-sides" aria-hidden="true"><span class="a">${t.without}</span><span class="b">${t.with}</span></div>
      <div class="t3-tilt"><div class="t3-stage"><div class="t3-scr"><div class="t3-layer a" aria-label="${esc(bare(t.without))}">${renderScreen(wwIdx, 0)}</div><div class="t3-layer b" aria-label="${esc(bare(t.with))}">${renderScreen(wwIdx, 1)}</div></div>
      <div class="t3-line" role="slider" tabindex="0" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(cut)}" aria-label="${esc(bare(t.dragA))}" title="${esc(t.grip)}">${grip(true)}${grip(false)}</div><div class="t3-tip" hidden></div></div></div>
      ${diffHTML(wwIdx)}</div>`;
  }
  function wwRender(box) {
    const t = tx();
    stopVideos(); clearTimeout(nudgeT);
    cut = 50;
    $('.t3-wwbox', box).innerHTML = wwStage();
    $('.t3-move', box).innerHTML = `<b>${esc(t.move)}</b><span>${t.moves[wwIdx]}</span>`;
    $$('.t3-sub button', box).forEach((b, i) => { b.setAttribute('aria-selected', String(i === wwIdx)); if (i === wwIdx && innerWidth <= 1000) { const r = b.parentElement; r.scrollLeft += b.getBoundingClientRect().left - r.getBoundingClientRect().left - 14; } });
    const st = $('.t3-stage', box);
    if (st) { stageWire(st); markTargets(st); play(st); nudge(st); }
    vidWire(box);
  }

  // ---------- pop-ups ----------
  let openK = null, lastFocus = null, keepY = 0;
  const modals = {};
  function modal(kind) {
    if (modals[kind]) return modals[kind];
    const m = D.createElement('div');
    m.className = 't3-modal t3-m-' + kind; m.hidden = true; m.setAttribute('translate', 'no'); m.classList.add('notranslate');
    m.innerHTML = `<div class="t3-mscrim"></div><div class="t3-mpanel" role="dialog" aria-modal="true" aria-labelledby="t3-mt-${kind}"><div class="t3-mhead"><div class="t3-mtt"><h3 id="t3-mt-${kind}"></h3><p></p></div><button type="button" class="t3-mx"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div class="t3-mbody"></div></div>`;
    D.body.append(m);
    $('.t3-mx', m).addEventListener('click', () => closeM());
    $('.t3-mscrim', m).addEventListener('click', () => closeM());
    modals[kind] = m;
    return m;
  }
  function fillFF(m) {
    const t = tx(), body = $('.t3-mbody', m);
    if (!$('.t3-ww', body)) body.innerHTML = `<div class="t3-ww"><div class="t3-sub" role="tablist"></div><div class="t3-wwmain"><div class="t3-wwbox"></div><p class="t3-move"></p><p class="t3-ill"></p></div></div>`;
    const icons = [...SCREENS.map((s) => s[2]), 'play'];
    $('.t3-sub', body).innerHTML = t.screens.map(([s, d], i) => `<button type="button" role="tab" aria-selected="${i === wwIdx}" data-i="${i}">${ic(icons[i])}<span><b>${esc(s)}</b><small>${esc(d)}</small></span></button>`).join('');
    $$('.t3-sub button', body).forEach((b) => b.addEventListener('click', () => { wwIdx = +b.dataset.i; wwRender(body); const sc = $('.t3-wwmain', body); if (innerWidth <= 900) $('.t3-mbody', m).scrollTo({ top: 0 }); else sc.scrollIntoView({ block: 'nearest' }); }));
    $('.t3-ill', body).textContent = t.ill;
    wwRender(body);
  }
  function labelM(kind) {
    const m = modals[kind]; if (!m) return;
    const t = tx(), c = t.cards[kind];
    $('h3', m).innerHTML = c[0];
    $('.t3-mtt p', m).textContent = kind === 'ff' ? bare(t.ffSub) : ($('#talk .lead') || {}).textContent || c[1];
    $('.t3-mx', m).setAttribute('aria-label', t.close);
  }
  const focusables = (m) => $$('button, [href], input, select, textarea, video[controls], [tabindex]:not([tabindex="-1"])', m).filter((e) => !e.disabled && e.offsetParent !== null && !e.closest('[inert],.ghost'));
  function openM(kind, opener) {
    if (openK) closeM(true);
    const m = modal(kind);
    labelM(kind);
    if (kind === 'ff') fillFF(m);
    lastFocus = opener || D.activeElement; keepY = scrollY;
    m.hidden = false; openK = kind;
    H.classList.add('x-modal-on', 't3-modal-on');
    requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add('on')));
    $('.t3-mx', m).focus({ preventScroll: true });
  }
  function closeM(now) {
    if (!openK) return;
    const m = modals[openK]; openK = null;
    stopVideos(); clearTimeout(nudgeT);
    m.classList.remove('on');
    const done = () => { m.hidden = true; };
    if (now || reduce) done(); else setTimeout(done, 380);
    H.classList.remove('x-modal-on', 't3-modal-on');
    if (Math.abs(scrollY - keepY) > 1) scrollTo(0, keepY);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  D.addEventListener('keydown', (e) => {
    if (!openK) return;
    const m = modals[openK];
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeM(); return; }
    if (e.key !== 'Tab') return;
    const f = focusables($('.t3-mpanel', m)); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!m.contains(D.activeElement)) { e.preventDefault(); first.focus(); return; }
    if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus(); }
  }, true);

  // ---------- the three cards ----------
  const talk = () => dispatchEvent(new Event('usha:talk'));
  const ART = {
    sc: `<svg class="t3-art-sc" viewBox="0 0 220 120" aria-hidden="true"><rect class="b1" x="92" y="14" width="112" height="26" rx="13"/><rect class="b2" x="16" y="50" width="150" height="40" rx="14"/><circle class="d d1" cx="36" cy="100" r="3.5"/><circle class="d d2" cx="48" cy="100" r="3.5"/><circle class="d d3" cx="60" cy="100" r="3.5"/><rect class="l" x="30" y="62" width="104" height="5" rx="2.5"/><rect class="l" x="30" y="74" width="72" height="5" rx="2.5"/><rect class="l2" x="104" y="24" width="86" height="5" rx="2.5"/></svg>`,
    ff: `<svg class="t3-art-ff" viewBox="0 0 220 120" preserveAspectRatio="none" aria-hidden="true"><defs><clipPath id="t3ffc"><rect class="rv" x="0" y="0" width="220" height="120"/></clipPath></defs><path class="g" d="M10 30H210M10 60H210M10 90H210"/><path class="a" d="M10 82 L40 80 L70 84 L100 81 L130 85 L160 83 L190 86 L210 84"/><g clip-path="url(#t3ffc)"><path class="b" d="M10 82 L40 76 L70 70 L100 60 L130 50 L160 40 L190 30 L210 22"/></g><line class="sw" x1="0" y1="8" x2="0" y2="112"/></svg>`,
  };
  function cardsHTML() {
    const t = tx(), x = t.live, c = t.cards;
    return `<article class="t3-card k-sc"><div class="t3-tex" aria-hidden="true"></div><div class="t3-art">${ART.sc}</div><h3>${c.sc[0]}</h3><p>${c.sc[1]}</p><button type="button" class="t3-cta" data-open="sc"><span>${c.sc[2]}</span></button></article>
      <article class="t3-card k-live"><div class="t3-lv-glow" aria-hidden="true"></div><div class="t3-lv-top"><span class="t3-onair"><i aria-hidden="true"></i>${esc(x.k)}</span><span class="t3-wave" aria-hidden="true">${'<i></i>'.repeat(9)}</span></div>
        <div class="t3-lv-orb" aria-hidden="true"><span class="t3-face lg"><i></i><i></i></span><s></s><s></s></div>
        <h3>${x.h}</h3><p>${esc(x.p)}</p>
        <button type="button" class="t3-go"><span class="t3-go-ring" aria-hidden="true"></span><span class="d" aria-hidden="true"></span><span>${x.b}</span><span class="t3-go-a" aria-hidden="true">${rtl() ? '←' : '→'}</span></button></article>
      <article class="t3-card k-ff"><div class="t3-tex" aria-hidden="true"></div><div class="t3-art"><span class="t3-90" aria-hidden="true">+90<small>${esc(bare(t.days))}</small></span>${ART.ff}</div><h3>${c.ff[0]}</h3><p>${c.ff[1]}</p><button type="button" class="t3-cta" data-open="ff"><span>${c.ff[2]}</span></button></article>`;
  }
  let root = null;
  function wireCards() {
    $$('.t3-cta', root).forEach((b) => b.addEventListener('click', () => openM(b.dataset.open, b)));
    $('.t3-go', root).addEventListener('click', talk);
  }
  function build() {
    const sec = $('#talk'); if (!sec) return;
    const col = $('.talk > div:last-child', sec); const chips = $('#ichips'), chat = $('#chat'); if (!col || !chips || !chat) return;
    L = H.lang in T ? H.lang : 'en';
    sec.classList.add('t3-on');
    root = D.createElement('div'); root.className = 't3 t3-cards'; root.setAttribute('translate', 'no'); root.classList.add('notranslate');
    root.innerHTML = cardsHTML();
    chips.before(root);
    wireCards();
    // the scenarios (the bundle's own chips, chat and hint) live in their pop-up; the bundle finds them by id
    const m = modal('sc'), body = $('.t3-mbody', m);
    body.innerHTML = '<div class="t3-sc"><div class="t3-sc-chips"></div><div class="t3-sc-chat"></div></div>';
    $('.t3-sc-chips', body).append(chips);
    $('.t3-sc-chat', body).append(chat);
    const hint = $('.hint', col); if (hint) $('.t3-sc-chat', body).append(hint);
    [chips, chat, hint].forEach((e) => e && e.classList.add('in'));
    labelM('sc');
    new MutationObserver(() => {
      const n = H.lang in T ? H.lang : 'en'; if (n === L) return;
      L = n; root.innerHTML = cardsHTML(); wireCards(); labelM('sc');
      if (modals.ff) { labelM('ff'); if (openK === 'ff') fillFF(modals.ff); }
    }).observe(H, { attributes: true, attributeFilter: ['lang'] });
  }
  // the number check (tools/seo/check-try.mjs) renders the screens without a page
  if (W.__t3test) { W.__t3 = { N, T, P, derive, facts, setLang: (l) => { L = l; }, screen: (i, v) => renderScreen(i, v), notes: notesHTML, diff: diffHTML, range, keys: SCREENS.map((s) => s[0]), stkFacts, cover }; return; }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', build); else build();
})();
