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
    top: [[1560, 1240, 920], [1860, 1430, 1360]], stock: [[-11, 38, 24], [31, 36, 27]], // negative = days out of stock
    ctr: [1.8, 2.5],
    en: {
      avg: [120, 125], rate: [8.4, 6.9], // return rate, %
      avgW: [[119, 121, 120, 119, 120, 121, 120, 119, 120, 121, 120, 120, 120], [122, 123, 124, 124, 125, 125, 125, 126, 126, 126, 126, 126, 127]],
      rateW: [[8.3, 8.5, 8.4, 8.6, 8.3, 8.4, 8.5, 8.4, 8.3, 8.4, 8.5, 8.3, 8.4], [7.4, 7.3, 7.2, 7.1, 7.0, 6.9, 6.9, 6.8, 6.8, 6.7, 6.6, 6.6, 6.5]],
      ads: [[[9800, 32340, 1], [7100, 17040, 1], [4700, 6780, 1]], [[11400, 49020, 1], [7500, 24690, 1], [0, 0, 0]]],
      price: 119, comp: [99, 75, 139, 85, 109, 65, 129, 89, 115],
    },
    ru: {
      avg: [2340, 2440], rate: [64, 71], // buyout (выкуп), %
      avgW: [[2330, 2350, 2340, 2330, 2340, 2350, 2340, 2330, 2340, 2350, 2340, 2340, 2340], [2400, 2410, 2420, 2430, 2430, 2440, 2440, 2450, 2450, 2450, 2460, 2460, 2480]],
      rateW: [[63, 64, 65, 64, 63, 64, 65, 64, 63, 64, 64, 65, 64], [68, 69, 69, 70, 70, 71, 71, 71, 72, 72, 72, 73, 75]],
      ads: [[[245000, 1120000, 1], [180000, 640000, 1], [115000, 240000, 1]], [[290000, 1860000, 1], [186000, 940000, 1], [0, 0, 0]]],
      price: 2390, comp: [1990, 1450, 2790, 1690, 2190, 1290, 2490, 1790, 2290],
    },
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
      screens: [['Sales', 'Orders, stock, gross sales'], ['Ads', 'Spend, ROAS, campaigns'], ['Engagement', 'Reach, saves, followers'], ['Reviews', 'Rating and replies'], ['Search', 'Position for the main query'], ['Content', 'Two videos side by side']],
      moves: [
        'Reordered the best-seller before it ran out and moved the season’s demand onto the gift box.',
        'Paused the auto campaign that ran below break-even and moved its budget to gift-box searches.',
        'Swapped static product photos for short videos built on what buyers save.',
        'Answers reviews within hours and fixed the packaging buyers complained about.',
        'Rewrote the title and photos around how buyers search, then backed the climb with ads.',
        'Videos without filming: idea, script and edit in the brand’s own style.',
      ],
      live: {
        k: 'Live now', h: 'Consult your new <i>Marketing Director</i>.',
        p: 'Brief her on your business, then ask four questions. Real answers on your market and your numbers.',
        hi: 'Hi, I’m USHA. Tell me what you sell and where, and I’ll read your market before I answer.',
        ask: 'You could ask', qs: ['Why did my sales drop this month?', 'Is my ad budget working?', 'What should I post next week?'],
        steps: ['Your brief', '4 questions', 'Your project manager follows up'], b: 'Ask USHA live', typing: 'USHA is online',
      },
      days: '90 days', search: 'Search products, orders…', all: 'All products', exp: 'Export', week: 'week',
      tip: (d, n) => `${d} · ${n} orders`, onPage: (w) => `On page 1 since <b data-k="n.week">week ${w}</b>`,
      sales: { app: 'noon · Seller dashboard', brand: 'noon', title: 'Sales', k: ['Orders', 'Gross sales', 'Return rate', 'Avg order'], chart: 'Orders per day', top: 'Top products', cols: ['Product', 'Orders', 'Stock'],
        stock: (d) => (d < 0 ? `Out ${-d} days` : `${d} days left`), rateLowGood: true,
        notes: (x) => [[`stock0`, `Reordered in time: no <b>${x.dip}-day</b> stock-out`], ['top2', `Gift box pushed into the season: <b>${x.gift}</b>`], ['rate', `Thermal packaging: returns <b>${x.rateChg}</b>`]] },
      ads: { app: 'noon Ads · Campaigns', brand: 'noon', k: ['Spend', 'Ad sales', 'ROAS', 'CTR'], target: 'Target 3.0x+', cols: ['Campaign', 'Status', 'Spend', 'Ad sales', 'ROAS'], names: ['Search · gift boxes', 'Category · chocolate', 'Auto · all products'], on: 'Active', off: 'Paused', chart: 'Spend and ad sales by week',
        notes: (x) => [['r2x', `Paused Auto: <b>${x.autoSpend}</b> spent at <b>${x.autoRatio}</b>`], ['r0x', `Budget moved to gift-box search: <b>${x.searchRatio}</b>`], ['ratio', `Spend <b>${x.spendChg}</b>, ad sales <b>${x.salesChg}</b>`]] },
      soc: { app: 'Instagram · Insights', brand: 'ig', handle: '@brand_a', posts: (n) => `${n} posts in 90 days`, last: 'Latest 6 posts', k: ['Engagement rate', 'Avg reach / post', 'Saves / post', 'New followers'], photo: 'Photo', reel: 'Reel',
        notes: (x) => [['saves', `Gift-box Reels: saves <b>${x.saves}</b>`], ['p4', `Posted at buyers’ peak hours: reach <b>${x.reach}</b>`], ['foll', `<b>+${x.foll1}</b> followers, not +${x.foll0}`]] },
      rev: { app: 'noon · Ratings & reviews', brand: 'noon', rating: 'Rating, rolling 90 days', newR: 'New ratings in 90 days', replies: 'Reviews answered', time: 'Median reply time', trend: 'Rolling rating by week',
        dur: (m) => (m >= 1440 ? `${m / 1440} days` : `${Math.floor(m / 60)} h` + (m % 60 ? ` ${m % 60} min` : '')), of: (a, n) => `${a} of ${n}`,
        a: ['Sara', 'Box arrived crushed and the chocolates had melted. Not fit for a gift.'], none: 'No reply from the seller',
        reply: ['Seller', 'We’re sorry. A replacement is on its way, and every box now ships in a thermal bag.'],
        b0: ['Omar', 'Too pricey for the size.'], b1: ['Omar', 'Fresh and beautifully packed. Bought it as a gift.'],
        notes: (x) => [['reply', `<b>${x.rate1}</b> of reviews answered, median <b>${x.time1}</b>`], ['rev2', `Thermal bags: 1★ reviews <b>${x.one0} → ${x.one1}</b>`, 'dn']] },
      srch: { app: 'noon · Search', brand: 'noon', q: 'chocolate gift box', filters: ['Relevance', 'Price', 'Rating 4+', 'Express'], results: (n, p) => `${n} results · ${p} per page`, yours: 'Your product', badge: (n) => `Your product · #${n}`, pos: (n, p) => `#${n} · page ${p}`, rank: 'Position by week', ad: 'Ad',
        notes: (x) => [['badge', `New title and photos: <b>#${x.p0} → #${x.p1}</b>`], ['trend', x.since]] },
      vid: { t: ['Generic AI clip: the same look as everyone else’s.', 'Made with USHA: a concept, a story and a cinematic finish.'], play: 'Play video' },
      diff: {
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
      screens: [['Продажи', 'Заказы, остатки, сумма'], ['Реклама', 'Расход, ДРР, кампании'], ['Вовлечённость', 'Охват, сохранения, подписчики'], ['Отзывы', 'Рейтинг и ответы'], ['Поиск', 'Позиция по главному запросу'], ['Контент', 'Два ролика рядом']],
      moves: [
        'Дозаказала хит до того, как он закончился, и перевела сезонный спрос на подарочную коробку.',
        'Остановила автокампанию с убыточным ДРР и перенесла её бюджет в поиск по подаркам.',
        'Заменила статичные фото товара короткими видео о том, что покупатели сохраняют.',
        'Отвечает на отзывы за несколько часов и исправила упаковку, на которую жаловались.',
        'Переписала название и фото под то, как ищут покупатели, и поддержала рост рекламой.',
        'Видео без съёмки: идея, сценарий и монтаж в стиле бренда.',
      ],
      live: {
        k: 'Сейчас онлайн', h: 'Консультация вашего нового <i>директора по маркетингу</i>.',
        p: 'Расскажите о бизнесе и задайте четыре вопроса. Настоящие ответы про ваш рынок и ваши цифры.',
        hi: 'Здравствуйте, я USHA. Расскажите, что и где вы продаёте, — сначала я прочитаю ваш рынок, потом отвечу.',
        ask: 'Например, спросите', qs: ['Почему упали продажи в этом месяце?', 'Окупается ли мой рекламный бюджет?', 'Что публиковать на следующей неделе?'],
        steps: ['Бриф', '4 вопроса', 'Дальше — ваш проджект-менеджер'], b: 'Спросить USHA', typing: 'USHA онлайн',
      },
      days: '90 дней', search: 'Поиск по товарам и заказам…', all: 'Все товары', exp: 'Выгрузить', week: 'неделя',
      tip: (d, n) => `${d} · ${n} ${plural(n, 'заказ', 'заказа', 'заказов')}`, onPage: (w) => `На первой странице с <b data-k="n.week">${w}-й недели</b>`,
      sales: { app: 'Wildberries · Кабинет продавца', brand: 'wb', title: 'Продажи', k: ['Заказы', 'Заказано на сумму', 'Выкуп', 'Средний чек'], chart: 'Заказы по дням', top: 'Топ товаров', cols: ['Товар', 'Заказы', 'Остаток'],
        stock: (d) => (d < 0 ? `Нет ${-d} дн.` : `на ${d} дн.`), rateLowGood: false,
        notes: (x) => [['stock0', `Дозаказала вовремя: без <b>${x.dip} дней</b> пустой полки`], ['top2', `Подарочную коробку — в сезон: <b>${x.gift}</b>`], ['rate', `Термопакеты: выкуп <b>${x.rateChg}</b>`]] },
      ads: { app: 'Wildberries · Продвижение', brand: 'wb', k: ['Расход', 'Продажи с рекламы', 'ДРР', 'CTR'], target: 'Цель: до 20%', cols: ['Кампания', 'Статус', 'Расход', 'Продажи', 'ДРР'], names: ['Поиск · подарочные наборы', 'Каталог · шоколад', 'Автореклама · все товары'], on: 'Активна', off: 'Пауза', chart: 'Расход и продажи с рекламы по неделям',
        notes: (x) => [['r2x', `Остановила авто: <b>${x.autoSpend}</b> при ДРР <b>${x.autoRatio}</b>`], ['r0x', `Бюджет — в поиск по подаркам: ДРР <b>${x.searchRatio}</b>`], ['ratio', `Расход <b>${x.spendChg}</b>, продажи с рекламы <b>${x.salesChg}</b>`]] },
      soc: { app: 'VK · Статистика сообщества', brand: 'vk', handle: 'Бренд A', posts: (n) => `${n} публикаций за 90 дней`, last: 'Последние 6 публикаций', k: ['Вовлечённость (ER)', 'Средний охват поста', 'Сохранения на пост', 'Новые подписчики'], photo: 'Фото', reel: 'Клип',
        notes: (x) => [['saves', `Клипы с подарочной коробкой: сохранения <b>${x.saves}</b>`], ['p4', `Публикации в часы, когда покупатели онлайн: охват <b>${x.reach}</b>`], ['foll', `<b>+${x.foll1}</b> подписчиков, а не +${x.foll0}`]] },
      rev: { app: 'Wildberries · Отзывы и вопросы', brand: 'wb', rating: 'Рейтинг за 90 дней', newR: 'Новых оценок за 90 дней', replies: 'Отзывов с ответом', time: 'Медиана времени ответа', trend: 'Рейтинг за 90 дней по неделям',
        dur: (m) => (m >= 1440 ? `${m / 1440} дня` : `${Math.floor(m / 60)} ч` + (m % 60 ? ` ${m % 60} мин` : '')), of: (a, n) => `${a} из ${n}`,
        a: ['Анна', 'Коробка пришла мятой, конфеты подтаяли. В подарок не годится.'], none: 'Продавец не ответил',
        reply: ['Продавец', 'Простите нас. Замена уже в пути, а теперь каждую коробку отправляем в термопакете.'],
        b0: ['Ольга', 'Дорого для такого размера.'], b1: ['Ольга', 'Свежие и красиво упакованы, брали в подарок.'],
        notes: (x) => [['reply', `Ответ на <b>${x.rate1}</b> отзывов, медиана <b>${x.time1}</b>`], ['rev2', `Термопакеты: отзывов на 1★ <b>${x.one0} → ${x.one1}</b>`, 'dn']] },
      srch: { app: 'Wildberries · Поиск', brand: 'wb', q: 'подарочный набор конфет', filters: ['По популярности', 'Цена', 'Рейтинг 4+', 'Быстрая доставка'], results: (n, p) => `${n} товаров · ${p} на странице`, yours: 'Ваш товар', badge: (n) => `Ваш товар · №${n}`, pos: (n, p) => `№${n} · стр. ${p}`, rank: 'Позиция по неделям', ad: 'Реклама',
        notes: (x) => [['badge', `Новое название и фото: <b>№${x.p0} → №${x.p1}</b>`], ['trend', x.since]] },
      vid: { t: ['Типичный ИИ-ролик: такой же, как у всех.', 'Сделано с USHA: идея, история и киношная картинка.'], play: 'Смотреть видео' },
      diff: {
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
      screens: [['المبيعات', 'الطلبات والمخزون والإجمالي'], ['الإعلانات', 'الإنفاق والعائد والحملات'], ['التفاعل', 'الوصول والحفظ والمتابعون'], ['التقييمات', 'التقييم والردود'], ['البحث', 'الترتيب في البحث الرئيسي'], ['المحتوى', 'فيديوهان جنبًا إلى جنب']],
      moves: [
        'أعادت طلب المنتج الأكثر مبيعًا قبل نفاده، ووجّهت طلب الموسم إلى علبة الهدايا.',
        'أوقفت الحملة التلقائية التي كانت دون نقطة التعادل، ونقلت ميزانيتها إلى عمليات البحث عن الهدايا.',
        'استبدلت صور المنتج الثابتة بفيديوهات قصيرة مبنية على ما يحفظه المشترون.',
        'ترد على المراجعات خلال ساعات، وأصلحت التغليف الذي اشتكى منه المشترون.',
        'أعادت كتابة العنوان والصور وفق طريقة بحث المشترين، ثم دعمت الصعود بالإعلانات.',
        'فيديوهات بلا تصوير: الفكرة والسيناريو والمونتاج بأسلوب العلامة نفسها.',
      ],
      live: {
        k: 'متصلة الآن', h: 'استشر <i>مديرة التسويق</i> الجديدة لديك.',
        p: 'عرّفها على نشاطك ثم اسأل أربعة أسئلة. إجابات حقيقية عن سوقك وأرقامك.',
        hi: 'مرحبًا، أنا ' + iso('USHA') + '. أخبرني ماذا تبيع وأين، وسأقرأ سوقك قبل أن أجيب.',
        ask: 'مثلًا، اسأل', qs: ['لماذا تراجعت مبيعاتي هذا الشهر؟', 'هل ميزانية إعلاناتي مجدية؟', 'ماذا أنشر الأسبوع المقبل؟'],
        steps: ['نبذة عن نشاطك', '4 أسئلة', 'ثم يتابع معك مدير مشروعك'], b: 'اسأل ' + iso('USHA') + ' مباشرة', typing: iso('USHA') + ' متصلة',
      },
      days: '90 يومًا', search: 'ابحث في المنتجات والطلبات…', all: 'كل المنتجات', exp: 'تصدير', week: 'أسبوع',
      tip: (d, n) => `${d} · ${n} طلبًا`, onPage: (w) => `في الصفحة الأولى منذ <b data-k="n.week">الأسبوع ${w}</b>`,
      sales: { app: iso('noon') + ' · لوحة البائع', brand: 'noon', title: 'المبيعات', k: ['الطلبات', 'إجمالي المبيعات', 'نسبة المرتجعات', 'متوسط الطلب'], chart: 'الطلبات يوميًا', top: 'أفضل المنتجات', cols: ['المنتج', 'الطلبات', 'المخزون'],
        stock: (d) => (d < 0 ? `نفد ${-d} يومًا` : `${d} يومًا`), rateLowGood: true,
        notes: (x) => [['stock0', `أعادت الطلب في وقته: بلا نفاد لمدة <b>${x.dip} يومًا</b>`], ['top2', `دفعت علبة الهدايا في الموسم: <b>${x.gift}</b>`], ['rate', `التغليف الحراري: المرتجعات <b>${x.rateChg}</b>`]] },
      ads: { app: iso('noon Ads') + ' · الحملات', brand: 'noon', k: ['الإنفاق', 'مبيعات الإعلانات', iso('ROAS'), iso('CTR')], target: 'الهدف ' + iso('3.0x+'), cols: ['الحملة', 'الحالة', 'الإنفاق', 'المبيعات', iso('ROAS')], names: ['البحث · علب الهدايا', 'الفئة · الشوكولاتة', 'تلقائية · كل المنتجات'], on: 'نشطة', off: 'متوقفة', chart: 'الإنفاق ومبيعات الإعلانات أسبوعيًا',
        notes: (x) => [['r2x', `أوقفت التلقائية: إنفاق <b>${x.autoSpend}</b> بعائد <b>${x.autoRatio}</b>`], ['r0x', `نقلت الميزانية إلى بحث علب الهدايا: <b>${x.searchRatio}</b>`], ['ratio', `الإنفاق <b>${x.spendChg}</b>، مبيعات الإعلانات <b>${x.salesChg}</b>`]] },
      soc: { app: iso('Instagram') + ' · الإحصاءات', brand: 'ig', handle: iso('@brand_a'), posts: (n) => `${n} منشورًا في 90 يومًا`, last: 'آخر 6 منشورات', k: ['معدل التفاعل', 'متوسط الوصول للمنشور', 'الحفظ لكل منشور', 'متابعون جدد'], photo: 'صورة', reel: iso('Reel'),
        notes: (x) => [['saves', `فيديوهات علبة الهدايا: الحفظ <b>${x.saves}</b>`], ['p4', `النشر في ساعات ذروة المشترين: الوصول <b>${x.reach}</b>`], ['foll', `<b>${iso('+' + x.foll1)}</b> متابعًا بدل ${iso('+' + x.foll0)}`]] },
      rev: { app: iso('noon') + ' · التقييمات والمراجعات', brand: 'noon', rating: 'التقييم خلال 90 يومًا', newR: 'تقييمات جديدة في 90 يومًا', replies: 'مراجعات تم الرد عليها', time: 'الوسيط لوقت الرد', trend: 'التقييم المتحرك أسبوعيًا',
        dur: (m) => (m >= 1440 ? `${m / 1440} أيام` : m === 60 ? 'ساعة' : `${Math.floor(m / 60)} س` + (m % 60 ? ` ${m % 60} د` : '')), of: (a, n) => `${a} من ${n}`,
        a: ['سارة', 'وصلت العلبة مهروسة والشوكولاتة ذائبة. لا تصلح هدية.'], none: 'لم يرد البائع',
        reply: ['البائع', 'نعتذر منك. البديل في الطريق، وأصبحنا نشحن كل علبة في كيس حراري.'],
        b0: ['عمر', 'سعرها مرتفع مقارنة بحجمها.'], b1: ['عمر', 'طازجة وتغليفها أنيق، اشتريتها هدية.'],
        notes: (x) => [['reply', `رد على <b>${x.rate1}</b> من المراجعات، والوسيط <b>${x.time1}</b>`], ['rev2', `الأكياس الحرارية: تقييمات النجمة الواحدة <b>${iso(x.one0 + ' → ' + x.one1)}</b>`, 'dn']] },
      srch: { app: iso('noon') + ' · البحث', brand: 'noon', q: 'علبة شوكولاتة هدية', filters: ['الأكثر صلة', 'السعر', 'تقييم 4+', iso('Express')], results: (n, p) => `${n} نتيجة · ${p} في الصفحة`, yours: 'منتجك', badge: (n) => `منتجك · المركز ${n}`, pos: (n, p) => `المركز ${n} · الصفحة ${p}`, rank: 'الترتيب أسبوعيًا', ad: 'إعلان',
        notes: (x) => [['badge', `عنوان وصور جديدة: <b>${iso('#' + x.p0 + ' → #' + x.p1)}</b>`], ['trend', x.since]] },
      vid: { t: ['مقطع ذكاء اصطناعي نمطي: يشبه ما ينشره الجميع.', 'صُنع مع ' + iso('USHA') + ': فكرة وقصة وصورة سينمائية.'], play: 'شغّل الفيديو' },
      diff: {
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
    down: '<path d="M10 3v10M5.5 9l4.5 4.5L14.5 9M4 17h12"/>', filt: '<path d="M3 5h14M6 10h8M8.5 15h3"/>',
  };
  const ic = (n) => `<svg class="ic" viewBox="0 0 20 20" aria-hidden="true">${IC[n]}</svg>`;
  const RAIL = { sales: 'chart', ads: 'ads', soc: 'users', rev: 'star', srch: 'search' };
  function frame(key, app, brand, title, body) {
    const t = tx();
    const rail = ['home', 'chart', 'ads', 'box', 'star', 'users', 'search'].map((n) => `<i class="${n === RAIL[key] ? 'on' : ''}">${ic(n)}</i>`).join('');
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
      const s = N.stock[v][i];
      return `<tr><td><span class="sc-pi">${shot(i, [24, 32, 350][i])}</span><span class="sc-ell">${esc(name)}</span></td><td class="num">${C('top' + i, N.top[v][i], 'int')}</td><td>${K('stock' + i, esc(S.stock(s)), 'span', 'sc-pill ' + (s < 0 ? 'bad' : 'ok'))}</td></tr>`;
    }).join('');
    const data = ` data-series="${X.daily[v].join(',')}"`;
    return frame('sales', S.app, S.brand, esc(S.title), `<div class="sc-kpis">${kp.map(([a, b, c, h]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${esc(a)}</span>${b}${c}</div>`).join('')}</div>
      <div class="sc-row2"><div class="sc-card sc-main-chart"><div class="sc-ct"><span>${esc(S.chart)}</span><small>${esc(range())}</small></div><div class="sc-plot">${lineSVG(X.daily[v], { max: 75, min: 0, cls: v ? 'good' : 'flat', data })}${v ? '' : `<span class="sc-band" style="left:${(N.dip[0] / 89) * 100}%;width:${((N.dip[1] - N.dip[0]) / 89) * 100}%"></span>`}</div><div class="sc-ax">${ax}</div></div>
      <table class="sc-t"><thead><tr><th>${esc(S.top)}</th><th class="num">${esc(S.cols[1])}</th><th>${esc(S.cols[2])}</th></tr></thead><tbody>${rows}</tbody></table></div>`);
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
    return frame('ads', Ad.app, Ad.brand, esc(t.screens[1][0]), `<div class="sc-kpis">${kp.map(([a, b, c]) => `<div class="sc-kpi ${c ? 'hl ' + c : ''}"><span>${a}</span>${b}${c ? `<small>${Ad.target}</small>` : ''}</div>`).join('')}</div>
      <div class="sc-card sc-bars"><div class="sc-ct"><span>${esc(Ad.chart)}</span><span class="sc-leg"><i class="sw"></i>${Ad.k[0]}<i class="sw s"></i>${Ad.k[1]}</span></div><div class="sc-wks sc-grow">${bars}</div></div>
      <table class="sc-t ads"><thead><tr><th>${esc(Ad.cols[0])}</th><th class="hide-s">${esc(Ad.cols[1])}</th><th class="num">${esc(Ad.cols[2])}</th><th class="num">${esc(Ad.cols[3])}</th><th class="num">${Ad.cols[4]}</th></tr></thead><tbody>${body}</tbody></table>`);
  }
  function sSoc(v) {
    const t = tx(), S = t.soc, n = N.soc, er = n.er[v];
    const kp = [[S.k[0], C('er', Math.round(mean(er) * 10) / 10, 'p1'), v ? 'ok' : 'bad'], [S.k[1], C('reach', n.reach[v], 'int')], [S.k[2], C('saves', n.saves[v], 'int')], [S.k[3], C('foll', n.foll[v], 'plus')]];
    const hues = v ? [18, 200, 330, 40, 260, 150] : [30, 30, 210, 30, 30, 210];
    const tiles = er.map((e, i) => `<div class="sc-post"><span class="sc-th">${shot(v ? [2, 0, 1, 2, 0, 1][i] : [0, 1, 0, 2, 0, 1][i], hues[i])}</span>${v ? '<span class="sc-play" aria-hidden="true"></span>' : ''}<span class="sc-ty">${esc(v ? S.reel : S.photo)}</span>${K('p' + i, A('ER ' + fmt(e, 1) + '%'), 'span', 'sc-er')}</div>`).join('');
    const bars = er.map((e) => `<i style="--h:${(e / 4) * 100}%"></i>`).join('');
    return frame('soc', S.app, S.brand, `<span class="sc-prof"><span class="sc-av" aria-hidden="true"></span><span><b>${S.handle}</b><small>${esc(S.posts(n.posts))}</small></span></span>`, `<div class="sc-kpis">${kp.map(([a, b, h]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${esc(a)}</span>${b}</div>`).join('')}</div>
      <div class="sc-row2 soc"><div class="sc-card"><div class="sc-ct"><span>${esc(S.last)}</span></div><div class="sc-posts">${tiles}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.k[0])}</span><small>${esc(S.last)}</small></div><div class="sc-cols sc-grow">${bars}</div></div></div>`);
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
      <div class="sc-rev" data-k="rev2"><div class="sc-rh"><span class="sc-avr">${esc(b[0][0])}</span><b>${esc(b[0])}</b>${stars(v ? 5 : 2)}</div><p>${esc(b[1])}</p></div></div></div>`);
  }
  function sSearch(v) {
    const t = tx(), S = t.srch, M = N[L === 'ru' ? 'ru' : 'en'], pos = N.srch.trend[v][12], page = Math.ceil(pos / N.srch.perPage);
    const cards = COMP[L].map((name, i) => ({ name, price: M.comp[i], r: N.srch.compRating[i], kind: [3, 4, 5, 3, 1, 5, 1, 4, 0][i], hue: [12, 300, 36, 200, 340, 48, 30, 350, 20][i] }));
    if (pos <= 9) cards[pos - 1] = { name: P[L][0], price: M.price, r: N.srch.rating[v], kind: 0, hue: 24, mine: true };
    const grid = cards.map((c, i) => `<div class="sc-card sc-pc${c.mine ? ' mine' : ''}"><span class="sc-th">${shot(c.kind, c.hue)}</span>${c.mine ? K('badge', esc(S.badge(pos)), 'span', 'sc-you') : i === 0 ? `<span class="sc-adt">${esc(S.ad)}</span>` : ''}<b>${money(c.price)}</b><span class="sc-ell">${esc(c.name)}</span><small>${star}${fmt(c.r, 1)}</small></div>`).join('');
    return frame('srch', S.app, S.brand, `<span class="sc-search">${ic('search')}<span>${esc(S.q)}</span></span>`, `<div class="sc-filt"><span class="sc-res">${esc(S.results(fmt(N.srch.results), N.srch.perPage))}</span>${S.filters.map((f, i) => `<span class="${i ? '' : 'on'}">${f}</span>`).join('')}</div>
      <div class="sc-posrow"><div class="sc-pos ${v ? 'ok' : 'bad'}" data-k="pos"><small>${esc(S.yours)}</small>${K('posTxt', esc(S.pos(pos, page)), 'b')}</div><div class="sc-spark" data-k="trend"><small>${esc(S.rank)}</small>${lineSVG(N.srch.trend[v], { max: 42, min: 1, inv: true, h: 34, cls: v ? 'good' : 'flat', step: true })}</div></div>
      <div class="sc-grid">${grid}</div>`);
  }
  const SCREENS = [['sales', sSales], ['ads', sAds], ['soc', sSoc], ['rev', sRev], ['srch', sSearch]];

  // ---------- with-vs-without strip and USHA's notes, all computed ----------
  function facts(key, X) {
    const M = X.M, ru = L === 'ru';
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

  // ---------- the divider ----------
  let wwIdx = 0, cut = 50, nudged = false, touchedLine = false;
  function setCut(stage, x) {
    cut = Math.max(0, Math.min(100, x));
    const box = stage.closest('.t3-cmp'); (box || stage).style.setProperty('--x', cut + '%');
    const line = $('.t3-line', stage); if (line) line.setAttribute('aria-valuenow', String(Math.round(cut)));
    const withShare = rtl() ? cut : 100 - cut;
    if (box) { box.style.setProperty('--wa', Math.min(1, (100 - withShare) / 50).toFixed(2)); box.style.setProperty('--wb', Math.min(1, withShare / 50).toFixed(2)); }
  }
  function tipAt(stage, e) {
    const tip = $('.t3-tip', stage); if (!tip) return;
    const r = stage.getBoundingClientRect(), xPct = ((e.clientX - r.left) / r.width) * 100;
    const withSide = rtl() ? xPct < cut : xPct > cut;
    const svg = $(`.t3-layer.${withSide ? 'b' : 'a'} .sc-chart[data-series]`, stage);
    if (!svg) { tip.hidden = true; return; }
    const q = svg.getBoundingClientRect();
    if (e.clientX < q.left || e.clientX > q.right || e.clientY < q.top - 8 || e.clientY > q.bottom + 8) { tip.hidden = true; return; }
    const s = svg.dataset.series.split(',').map(Number), i = Math.round(((e.clientX - q.left) / q.width) * (s.length - 1));
    const y = q.top + (1 - s[i] / 75) * (q.height - 6) + 3;
    tip.hidden = false;
    tip.textContent = bare(tx().tip(dayDate(i, { day: 'numeric', month: 'short' }), s[i]));
    tip.style.left = ((q.left + (i / (s.length - 1)) * q.width - r.left) / r.width) * 100 + '%';
    tip.style.top = (y - r.top) + 'px';
  }
  function stageWire(stage) {
    const line = $('.t3-line', stage), cmp = stage.closest('.t3-cmp');
    let drag = false;
    const at = (e) => { const r = stage.getBoundingClientRect(); setCut(stage, ((e.clientX - r.left) / r.width) * 100); };
    stage.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button > 0) return;
      drag = true; touchedLine = true; cmp.classList.add('used'); stage.classList.add('drag'); stage.classList.remove('anim');
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
      const go = (x) => { e.preventDefault(); touchedLine = true; cmp.classList.add('used'); stage.classList.add('anim'); setCut(stage, x); };
      if (dir) go(cut + dir * step); else if (e.key === 'Home') go(0); else if (e.key === 'End') go(100);
    });
    // a slight tilt toward the pointer (desktop only, at most 3°)
    if (fine && !reduce) {
      const tilt = $('.t3-tilt', cmp);
      cmp.addEventListener('pointermove', (e) => {
        if (drag) return;
        const r = cmp.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `rotateY(${(x * 5).toFixed(2)}deg) rotateX(${(-y * 4).toFixed(2)}deg)`;
      });
      cmp.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
    }
    setCut(stage, cut);
  }
  function nudge() {
    if (nudged || reduce || touchedLine) return;
    const stage = $('.t3-stage'); if (!stage) return;
    const r = stage.getBoundingClientRect();
    if (r.top > innerHeight * 0.75 || r.bottom < innerHeight * 0.25) return;
    nudged = true; stage.classList.add('anim');
    [[400, 30], [1200, 64], [1950, 50]].forEach(([ms, x]) => setTimeout(() => { if (!stage.classList.contains('drag') && !touchedLine) setCut(stage, x); }, ms));
  }
  // USHA's notes: pinned next to the element they explain, inside the "with" layer
  function placeNotes(stage) {
    const layer = $('.t3-layer.b', stage); if (!layer) return;
    const lr = layer.getBoundingClientRect(), W2 = layer.clientWidth, sx = lr.width / W2 || 1;
    const H2 = layer.clientHeight, placed = [];
    const hit = (a) => placed.some((b) => a.l < b.l + b.w + 6 && b.l < a.l + a.w + 6 && a.t < b.t + b.h + 6 && b.t < a.t + a.h + 6);
    $$('.sc-note', layer).forEach((n, i) => {
      const tgt = $(`[data-k="${n.dataset.for}"]`, layer); if (!tgt) { n.hidden = true; return; }
      const tr = tgt.getBoundingClientRect(), cx = (tr.left + tr.width / 2 - lr.left) / sx;
      const nw = n.offsetWidth, nh = n.offsetHeight, top = (tr.top - lr.top) / sx, bottom = (tr.bottom - lr.top) / sx;
      let left = Math.max(8, Math.min(W2 - nw - 8, cx - nw / 2));
      // keep each note on the "with" half, so it reads at the starting position of the divider
      if (!rtl()) left = Math.max(left, Math.min(W2 / 2 + 8, W2 - nw - 8)); else left = Math.min(left, Math.max(W2 / 2 - 8 - nw, 8));
      // above the target if there is room and no other note there, else below
      const up = { l: left, t: top - nh - 10, w: nw, h: nh }, dn = { l: left, t: bottom + 10, w: nw, h: nh };
      const okUp = up.t > 44 && !hit(up), okDn = dn.t + nh < H2 - 6 && !hit(dn);
      const below = n.dataset.pref === 'dn' ? okDn || !okUp : !okUp && okDn;
      const box = below ? dn : up; placed.push(box);
      n.style.left = left + 'px';
      n.style.top = box.t + 'px';
      n.style.setProperty('--ax', Math.max(14, Math.min(nw - 14, cx - left)) + 'px');
      n.classList.toggle('below', below);
      n.style.setProperty('--d', (0.9 + i * 0.25) + 's');
    });
  }
  // numbers count up and charts draw in when the screen comes into view
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
  let seen = null;
  function watchStage(stage) {
    if (seen) seen.disconnect();
    if (!('IntersectionObserver' in W)) { play(stage); return; }
    seen = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting && !en.target.dataset.played && idx === 2) { en.target.dataset.played = '1'; play(en.target); } }), { threshold: 0.3 });
    seen.observe(stage);
  }

  function renderScreen(i, v) { const X = derive(L); return SCREENS[i][1](v, X); }
  function notesHTML(i) {
    const key = SCREENS[i][0], f = facts(key, derive(L)), list = tx()[key].notes(f.note);
    return list.map(([k, s, pref]) => `<div class="sc-note" data-for="${k}"${pref ? ` data-pref="${pref}"` : ''}><span class="t3-face sm" aria-hidden="true"><i></i><i></i></span><span>${s}</span></div>`).join('');
  }
  function diffHTML(i) {
    const key = SCREENS[i][0], f = facts(key, derive(L)), list = tx().diff[key](f.diff);
    return `<div class="t3-diff"><small>${tx().diffH}</small><div>${list.map(([a, b], j) => `<span><em>${a}</em><b data-k="d.${key}.${j}">${b}</b></span>`).join('')}</div></div>`;
  }
  function wwStage() {
    const t = tx();
    if (wwIdx === 5) return vidHTML();
    return `<div class="t3-cmp" style="--x:${cut}%"><div class="t3-sides" aria-hidden="true"><span class="a">${t.without}</span><span class="t3-slide">${t.slide}</span><span class="b">${t.with}</span></div>
      <div class="t3-tilt"><div class="t3-stage"><div class="t3-layer a" aria-label="${esc(bare(t.without))}">${renderScreen(wwIdx, 0)}</div><div class="t3-layer b" aria-label="${esc(bare(t.with))}">${renderScreen(wwIdx, 1)}${notesHTML(wwIdx)}</div>
      <div class="t3-line" role="slider" tabindex="0" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(cut)}" aria-label="${esc(bare(t.dragA))}"><span class="t3-knob" aria-hidden="true"><span class="t3-face"><i></i><i></i></span></span></div><div class="t3-tip" hidden></div></div></div>
      ${diffHTML(wwIdx)}</div>`;
  }
  function wwRender(root) {
    const t = tx();
    stopVideos();
    const box = $('.t3-wwbox', root);
    box.innerHTML = wwStage();
    $('.t3-move', root).innerHTML = `<b>${esc(t.move)}</b><span>${t.moves[wwIdx]}</span>`;
    $$('.t3-sub button', root).forEach((b, i) => b.setAttribute('aria-selected', String(i === wwIdx)));
    const st = $('.t3-stage', box);
    if (st) { stageWire(st); requestAnimationFrame(() => placeNotes(st)); if (idx === 2) { st.dataset.played = '1'; play(st); } else watchStage(st); }
    vidWire(box);
    fit();
  }

  // ---------- panels ----------
  let idx = 0, root = null, track = null;
  function liveHTML() {
    const x = tx().live;
    return `<div class="t3-live"><div class="t3-lv-glow" aria-hidden="true"></div>
      <div class="t3-lv-copy"><div class="t3-lv-top"><span class="t3-onair"><i aria-hidden="true"></i>${esc(x.k)}</span><span class="t3-wave" aria-hidden="true">${'<i></i>'.repeat(9)}</span></div>
      <h3>${x.h}</h3><p class="t3-lv-p">${esc(x.p)}</p>
      <ol class="t3-steps">${x.steps.map((s, i) => `<li><b>${i + 1}</b><span>${esc(s)}</span></li>`).join('')}</ol>
      <button type="button" class="t3-go"><span class="t3-go-ring" aria-hidden="true"></span><span class="d" aria-hidden="true"></span><span>${x.b}</span><span class="t3-go-a" aria-hidden="true">${rtl() ? '←' : '→'}</span></button></div>
      <div class="t3-lv-chat"><div class="t3-lv-orb" aria-hidden="true"><span class="t3-face lg"><i></i><i></i></span><s></s><s></s></div><div class="t3-lv-head"><span>${x.typing}</span></div>
        <div class="t3-lv-msg">${x.hi}</div><div class="t3-lv-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="t3-lv-ask"><small>${esc(x.ask)}</small><div>${x.qs.map((q) => `<button type="button" class="t3-q">${esc(q)}</button>`).join('')}</div></div></div></div>`;
  }
  const talk = () => dispatchEvent(new Event('usha:talk'));
  function labels() {
    const t = tx();
    $$('.t3-tabs button', root).forEach((b, i) => { $('.t3-tl', b).innerHTML = t.tabs[i]; });
    $('.t3-prev', root).setAttribute('aria-label', t.prev); $('.t3-next', root).setAttribute('aria-label', t.next);
    const icons = ['chart', 'ads', 'users', 'star', 'search', 'box'];
    $('.t3-sub', root).innerHTML = t.screens.map(([s, d], i) => `<button type="button" role="tab" aria-selected="${i === wwIdx}" data-i="${i}">${ic(icons[i])}<span><b>${esc(s)}</b><small>${esc(d)}</small></span></button>`).join('');
    $('.t3-wwsub', root).textContent = bare(t.sub);
    $('.t3-ill', root).textContent = t.ill;
    $('#t3-p-1', root).innerHTML = liveHTML();
    $$('#t3-p-1 .t3-go, #t3-p-1 .t3-q', root).forEach((b) => b.addEventListener('click', talk));
    $$('.t3-sub button', root).forEach((b) => b.addEventListener('click', () => { wwIdx = +b.dataset.i; wwRender(root); }));
    wwRender(root);
  }
  const width = () => track.clientWidth || 1;
  let busyUntil = 0, glide = 0;
  function go(i, smooth = true) {
    i = Math.max(0, Math.min(2, i));
    setIdx(i);
    slide((rtl() ? -1 : 1) * i * width(), smooth && !reduce);
  }
  // our own glide (time-based, so slow frames never stall it); snapping is off while it runs
  function slide(to, smooth) {
    cancelAnimationFrame(glide);
    const from = track.scrollLeft, t0 = performance.now(), dur = 480;
    busyUntil = t0 + dur + 250;
    if (!smooth || Math.abs(to - from) < 2) { track.scrollLeft = to; return; }
    track.style.scrollSnapType = 'none';
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      track.scrollLeft = from + (to - from) * e;
      if (k < 1) glide = requestAnimationFrame(step); else { glide = 0; track.style.scrollSnapType = ''; }
    };
    glide = requestAnimationFrame(step);
  }
  const stopGlide = () => { if (glide) { cancelAnimationFrame(glide); glide = 0; track.style.scrollSnapType = ''; busyUntil = 0; } };
  let swT = 0;
  function setIdx(i) {
    if (i !== idx) { root.classList.add('sw'); clearTimeout(swT); swT = setTimeout(() => root.classList.remove('sw'), 650); }
    if (i !== idx && idx === 2) stopVideos();
    idx = i;
    root.dataset.i = String(i);
    $$('.t3-tabs button', root).forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
    $$('.t3-p', root).forEach((p, k) => { p.inert = k !== i; p.setAttribute('aria-hidden', String(k !== i)); });
    $('.t3-prev', root).disabled = i === 0; $('.t3-next', root).disabled = i === 2;
    fit();
    if (i === 2) {
      const st = $('.t3-stage', root);
      if (st && !st.dataset.played) { st.dataset.played = '1'; setTimeout(() => play(st), 250); }
      if (st) setTimeout(() => placeNotes(st), 520);
      setTimeout(nudge, 700);
    }
  }
  function fit() {
    if (!track) return;
    const p = $$('.t3-p', root)[idx]; if (!p) return;
    track.style.height = p.offsetHeight + 'px';
  }
  function build() {
    const sec = $('#talk'); if (!sec) return;
    const col = $('.talk > div:last-child', sec); const chips = $('#ichips'), chat = $('#chat'); if (!col || !chips || !chat) return;
    L = H.lang in T ? H.lang : 'en';
    sec.classList.add('t3-on');
    root = D.createElement('div'); root.className = 't3'; root.setAttribute('translate', 'no'); root.classList.add('notranslate');
    root.innerHTML = `<div class="t3-bar"><button type="button" class="t3-prev t3-arr"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><div class="t3-tabs" role="tablist">${[0, 1, 2].map((i) => `<button type="button" role="tab" id="t3-t-${i}" aria-controls="t3-p-${i}" class="${['', 'is-live', 'is-ww'][i]}"><span class="t3-n" aria-hidden="true">0${i + 1}</span>${i === 1 ? '<span class="t3-dot" aria-hidden="true"></span>' : ''}<span class="t3-tl"></span></button>`).join('')}</div><button type="button" class="t3-next t3-arr"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>
      <div class="t3-track"><section class="t3-p" id="t3-p-0" role="tabpanel" aria-labelledby="t3-t-0"><div class="t3-sc-chat"></div></section><section class="t3-p" id="t3-p-1" role="tabpanel" aria-labelledby="t3-t-1"></section>
      <section class="t3-p" id="t3-p-2" role="tabpanel" aria-labelledby="t3-t-2"><div class="t3-ww"><div class="t3-sub" role="tablist"></div><div class="t3-wwmain"><p class="t3-wwsub"></p><div class="t3-wwbox"></div><p class="t3-move"></p><p class="t3-ill"></p></div></div></section></div>`;
    chips.before(root);
    track = $('.t3-track', root);
    const p0 = $('#t3-p-0', root);
    // the bundle's scenario chips, chat and hint move into panel 1 (it finds them by id)
    p0.prepend(chips);
    $('.t3-sc-chat', p0).append(chat);
    const hint = $('.hint', col); if (hint) $('.t3-sc-chat', p0).append(hint);
    labels();
    $$('.t3-tabs button', root).forEach((b, i) => {
      b.addEventListener('click', () => go(i));
      b.addEventListener('keydown', (e) => {
        const f = { ArrowRight: rtl() ? -1 : 1, ArrowLeft: rtl() ? 1 : -1 }[e.key];
        if (f) { e.preventDefault(); go(idx + f); $$('.t3-tabs button', root)[idx].focus(); }
      });
    });
    $('.t3-prev', root).addEventListener('click', () => go(idx - 1));
    $('.t3-next', root).addEventListener('click', () => go(idx + 1));
    // after a swipe: once the track rests, the panel on screen becomes the active tab
    let settleT = 0;
    const settle = () => {
      const left = Math.abs(track.scrollLeft), i = Math.round(left / width());
      if (performance.now() < busyUntil && Math.abs(left - idx * width()) > 2) { settleT = setTimeout(settle, 150); return; }
      if (i !== idx) setIdx(i); else fit();
    };
    track.addEventListener('scroll', () => { clearTimeout(settleT); settleT = setTimeout(settle, 140); }, { passive: true });
    track.addEventListener('scrollend', () => { clearTimeout(settleT); settle(); });
    ['pointerdown', 'touchstart', 'wheel'].forEach((ev) => track.addEventListener(ev, (e) => { if (ev !== 'wheel' || Math.abs(e.deltaX) > Math.abs(e.deltaY)) stopGlide(); }, { passive: true }));
    if ('ResizeObserver' in W) { const ro = new ResizeObserver(() => { fit(); const st = $('.t3-stage', root); if (st) placeNotes(st); }); $$('.t3-p', root).forEach((p) => ro.observe(p)); }
    addEventListener('resize', () => { track.scrollLeft = (rtl() ? -1 : 1) * idx * width(); fit(); });
    addEventListener('scroll', () => { if (idx === 2) nudge(); }, { passive: true });
    setIdx(0);
    new MutationObserver(() => { const n = H.lang in T ? H.lang : 'en'; if (n !== L) { L = n; labels(); setIdx(idx); } }).observe(H, { attributes: true, attributeFilter: ['lang'] });
  }
  // the number check (tools/seo/check-try.mjs) renders the screens without a page
  if (W.__t3test) { W.__t3 = { N, T, P, derive, facts, setLang: (l) => { L = l; }, screen: (i, v) => renderScreen(i, v), notes: notesHTML, diff: diffHTML, range, keys: SCREENS.map((s) => s[0]) }; return; }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', build); else build();
})();
