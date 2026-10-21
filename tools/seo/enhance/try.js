// Section 03 "Try her": three horizontal panels with tabs, beside USHA and her
// galaxy ring. 1 Scenarios (the bundle's own chips and chat, moved in here),
// 2 USHA Live (opens the live chat through the usha:talk event), 3 With /
// without USHA (six example screens: five with a draggable divider, then the
// two videos). Arrows on desktop, swipe on phones; vertical page scroll is
// never captured. Videos fire usha:quiet while playing and usha:resume after.
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rtl = () => H.dir === 'rtl';
  const LRI = '⁦', PDI = '⁩';
  const iso = (s) => LRI + s + PDI;

  // ---------- copy and example data per language ----------
  // Numbers are illustrative and internally consistent: totals and ratios are
  // computed from the rows below, never typed twice.
  const P = { // product names shared by several screens
    en: ['Assorted chocolates box, 24 pcs', 'Chocolate-coated dates, 500 g', 'Gift box “Celebration”'],
    ru: ['Набор конфет «Ассорти», 24 шт', 'Финики в шоколаде, 500 г', 'Подарочная коробка «Праздник»'],
    ar: ['علبة شوكولاتة مشكّلة، 24 قطعة', 'تمر بالشوكولاتة، 500 غ', 'علبة هدايا «احتفال»'],
  };
  const T = {
    en: {
      tabs: ['Scenarios', 'USHA Live', 'With / without'], prev: 'Previous panel', next: 'Next panel',
      ex: 'Example', without: 'Without USHA', with: 'With USHA', drag: 'Drag the line to compare', dragA: 'Compare without and with USHA',
      ill: 'Illustrative examples, not client results. Brand names anonymised.', move: 'Her move',
      screens: ['Sales', 'Ads', 'Engagement', 'Reviews', 'Search', 'Content'],
      moves: [
        'Restocked the best-seller before it ran out and moved the season’s demand onto the gift box.',
        'Stopped the auto campaign that burned budget and moved spend to gift-box searches.',
        'Swapped static product photos for short videos built on what buyers save.',
        'Answers every review within hours and fixed the packaging buyers complained about.',
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
      cur: 'AED', money: (n) => 'AED ' + fmt(n), lang: 'en',
      period: 'Last 30 days', vsPrev: 'vs previous 30 days',
      sales: { app: 'noon · Seller dashboard', brand: 'noon', title: 'Sales', k: ['Orders', 'Revenue', 'Return rate', 'Avg order'], chart: 'Orders per day', top: 'Top products', cols: ['Product', 'Orders', 'Stock'], days: (n) => n + ' days left', retLowGood: true },
      ads: { app: 'noon Ads · Campaigns', brand: 'noon', metric: 'ROAS', k: ['Spend', 'Ad sales', 'ROAS', 'CTR'], target: 'Target ≥ 4.0x', cols: ['Campaign', 'Status', 'Spend', 'Sales', 'ROAS'], names: ['Search · gift boxes', 'Category · chocolate', 'Auto · all products'], on: 'Active', off: 'Paused' },
      soc: { app: 'Instagram · Insights', brand: 'ig', handle: '@brand_a', last: 'Last 6 posts', k: ['Engagement rate', 'Avg reach / post', 'Saves / post', 'New followers'], photo: 'Photo', reel: 'Reel' },
      rev: { app: 'noon · Ratings & reviews', brand: 'noon', ratings: (n) => fmt(n) + ' ratings', replies: 'Seller replies', time: 'Avg reply time', t0: '6 days', t1: '2 h',
        a: ['Sara', 'Box arrived crushed and the chocolates had melted. Not fit for a gift.'], none: 'No reply from the seller · 9 days',
        reply: ['Seller · 1 h', 'We’re sorry. A replacement is on its way, and every box now ships in a thermal bag.'],
        b0: ['Omar', 'Too pricey for the size.'], b1: ['Omar', 'Fresh and beautifully packed. Bought it as a gift.'] },
      srch: { app: 'noon · Search', brand: 'noon', q: 'chocolate gift box', filters: ['Relevance', 'Price', 'Rating 4+', 'Express'], yours: 'Your product', badge: 'Your product · #3', pos: (n, p) => `Position ${n} · page ${p}`, rank: 'Position over 30 days', ad: 'Ad',
        items: [['Chocolate box, 18 pcs', 99, 4.8], ['Assorted chocolate, 300 g', 75, 4.6], ['Gift chocolates, 32 pcs', 139, 4.7], ['Praline gift set, 250 g', 85, 4.5], ['Truffles, 16 pcs', 109, 4.9], ['Chocolate bar set, 12 pcs', 65, 4.6]], price: 119 },
      vid: { t: ['Generic AI clip: the same look as everyone else’s.', 'Made with USHA: a concept, a story and a cinematic finish.'], play: 'Play video' },
    },
    ru: {
      tabs: ['Сценарии', 'USHA онлайн', 'С USHA и без'], prev: 'Предыдущая панель', next: 'Следующая панель',
      ex: 'Пример', without: 'Без USHA', with: 'С USHA', drag: 'Двигайте линию, чтобы сравнить', dragA: 'Сравнение: без USHA и с USHA',
      ill: 'Примеры для иллюстрации, не результаты клиентов. Названия брендов скрыты.', move: 'Её ход',
      screens: ['Продажи', 'Реклама', 'Вовлечённость', 'Отзывы', 'Поиск', 'Контент'],
      moves: [
        'Пополнила хит до того, как он закончился, и перевела сезонный спрос на подарочный набор.',
        'Остановила автокампанию, которая сжигала бюджет, и перенесла расход в поиск по подаркам.',
        'Заменила статичные фото товара короткими видео о том, что покупатели сохраняют.',
        'Отвечает на каждый отзыв в течение нескольких часов и исправила упаковку, на которую жаловались.',
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
      cur: '₽', money: (n) => fmt(n) + ' ₽', lang: 'ru',
      period: 'Последние 30 дней', vsPrev: 'к прошлым 30 дням',
      sales: { app: 'Wildberries · Кабинет продавца', brand: 'wb', title: 'Продажи', k: ['Заказы', 'Выручка', 'Выкуп', 'Средний чек'], chart: 'Заказы по дням', top: 'Топ товаров', cols: ['Товар', 'Заказы', 'Остаток'], days: (n) => `на ${n} дн.`, retLowGood: false },
      ads: { app: 'Wildberries · Продвижение', brand: 'wb', metric: 'ДРР', k: ['Расход', 'Продажи с рекламы', 'ДРР', 'CTR'], target: 'Цель ≤ 15%', cols: ['Кампания', 'Статус', 'Расход', 'Продажи', 'ДРР'], names: ['Поиск · подарочные наборы', 'Каталог · шоколад', 'Автореклама · все товары'], on: 'Активна', off: 'Пауза' },
      soc: { app: 'VK · Статистика сообщества', brand: 'vk', handle: 'Бренд A', last: 'Последние 6 публикаций', k: ['Вовлечённость (ER)', 'Средний охват', 'Сохранения на пост', 'Новые подписчики'], photo: 'Фото', reel: 'Клип' },
      rev: { app: 'Wildberries · Отзывы и вопросы', brand: 'wb', ratings: (n) => fmt(n) + ' ' + plural(n, 'оценка', 'оценки', 'оценок'), replies: 'Ответы продавца', time: 'Среднее время ответа', t0: '6 дн.', t1: '2 ч',
        a: ['Анна', 'Коробка пришла мятой, конфеты подтаяли. В подарок не годится.'], none: 'Продавец не ответил · 9 дней',
        reply: ['Продавец · через 1 ч', 'Простите нас. Замена уже в пути, а теперь каждую коробку отправляем в термопакете.'],
        b0: ['Ольга', 'Дорого для такого размера.'], b1: ['Ольга', 'Свежие и красиво упакованы, брали в подарок.'] },
      srch: { app: 'Wildberries · Поиск', brand: 'wb', q: 'подарочный набор конфет', filters: ['По популярности', 'Цена', 'Рейтинг 4+', 'Быстрая доставка'], yours: 'Ваш товар', badge: 'Ваш товар · №3', pos: (n, p) => `Позиция ${n} · стр. ${p}`, rank: 'Позиция за 30 дней', ad: 'Реклама',
        items: [['Набор конфет, 18 шт', 1990, 4.8], ['Шоколад ассорти, 300 г', 1450, 4.6], ['Конфеты в коробке, 32 шт', 2790, 4.7], ['Пралине подарочное, 250 г', 1690, 4.5], ['Трюфели, 16 шт', 2190, 4.9], ['Набор шоколада, 12 шт', 1290, 4.6]], price: 2390 },
      vid: { t: ['Типичный ИИ-ролик: такой же, как у всех.', 'Сделано с USHA: идея, история и киношная картинка.'], play: 'Смотреть видео' },
    },
    ar: {
      tabs: ['سيناريوهات', iso('USHA') + ' مباشرة', 'مع ' + iso('USHA') + ' وبدونها'], prev: 'اللوحة السابقة', next: 'اللوحة التالية',
      ex: 'مثال', without: 'بدون ' + iso('USHA'), with: 'مع ' + iso('USHA'), drag: 'حرّك الخط للمقارنة', dragA: 'مقارنة بدون ' + iso('USHA') + ' ومعها',
      ill: 'أمثلة توضيحية وليست نتائج عملاء. أسماء العلامات التجارية مخفية.', move: 'خطوتها',
      screens: ['المبيعات', 'الإعلانات', 'التفاعل', 'التقييمات', 'البحث', 'المحتوى'],
      moves: [
        'أعادت تخزين المنتج الأكثر مبيعًا قبل نفاده، ووجّهت طلب الموسم إلى علبة الهدايا.',
        'أوقفت الحملة التلقائية التي كانت تهدر الميزانية، ونقلت الإنفاق إلى عمليات البحث عن الهدايا.',
        'استبدلت صور المنتج الثابتة بفيديوهات قصيرة مبنية على ما يحفظه المشترون.',
        'ترد على كل مراجعة خلال ساعات، وأصلحت التغليف الذي اشتكى منه المشترون.',
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
      cur: iso('AED'), money: (n) => iso('AED ' + fmt(n)), lang: 'en',
      period: 'آخر 30 يومًا', vsPrev: 'مقارنة بالـ30 يومًا السابقة',
      sales: { app: iso('noon') + ' · لوحة البائع', brand: 'noon', title: 'المبيعات', k: ['الطلبات', 'الإيرادات', 'نسبة المرتجعات', 'متوسط الطلب'], chart: 'الطلبات يوميًا', top: 'أفضل المنتجات', cols: ['المنتج', 'الطلبات', 'المخزون'], days: (n) => `${n} يومًا`, retLowGood: true },
      ads: { app: iso('noon Ads') + ' · الحملات', brand: 'noon', metric: iso('ROAS'), k: ['الإنفاق', 'مبيعات الإعلانات', iso('ROAS'), iso('CTR')], target: 'الهدف ≥ ' + iso('4.0x'), cols: ['الحملة', 'الحالة', 'الإنفاق', 'المبيعات', iso('ROAS')], names: ['البحث · علب الهدايا', 'الفئة · الشوكولاتة', 'تلقائية · كل المنتجات'], on: 'نشطة', off: 'متوقفة' },
      soc: { app: iso('Instagram') + ' · الإحصاءات', brand: 'ig', handle: iso('@brand_a'), last: 'آخر 6 منشورات', k: ['معدل التفاعل', 'متوسط الوصول للمنشور', 'الحفظ لكل منشور', 'متابعون جدد'], photo: 'صورة', reel: iso('Reel') },
      rev: { app: iso('noon') + ' · التقييمات والمراجعات', brand: 'noon', ratings: (n) => fmt(n) + ' تقييمًا', replies: 'ردود البائع', time: 'متوسط وقت الرد', t0: '6 أيام', t1: 'ساعتان',
        a: ['سارة', 'وصلت العلبة مهروسة والشوكولاتة ذائبة. لا تصلح هدية.'], none: 'لم يرد البائع · منذ 9 أيام',
        reply: ['البائع · بعد ساعة', 'نعتذر منك. البديل في الطريق، وأصبحنا نشحن كل علبة في كيس حراري.'],
        b0: ['عمر', 'سعرها مرتفع مقارنة بحجمها.'], b1: ['عمر', 'طازجة وتغليفها أنيق، اشتريتها هدية.'] },
      srch: { app: iso('noon') + ' · البحث', brand: 'noon', q: 'علبة شوكولاتة هدية', filters: ['الأكثر صلة', 'السعر', 'تقييم 4+', iso('Express')], yours: 'منتجك', badge: 'منتجك · المركز 3', pos: (n, p) => `الترتيب ${n} · الصفحة ${p}`, rank: 'الترتيب خلال 30 يومًا', ad: 'إعلان',
        items: [['علبة شوكولاتة، 18 قطعة', 99, 4.8], ['شوكولاتة مشكّلة، 300 غ', 75, 4.6], ['شوكولاتة هدايا، 32 قطعة', 139, 4.7], ['برالين هدية، 250 غ', 85, 4.5], ['ترافل، 16 قطعة', 109, 4.9], ['ألواح شوكولاتة، 12 قطعة', 65, 4.6]], price: 119 },
      vid: { t: ['مقطع ذكاء اصطناعي نمطي: يشبه ما ينشره الجميع.', 'صُنع مع ' + iso('USHA') + ': فكرة وقصة وصورة سينمائية.'], play: 'شغّل الفيديو' },
    },
  };
  // the numbers behind the screens: [without, with], same period
  const N = {
    ru: {
      orders: [1240, 1870], prevOrders: 1348, avg: [2340, 2460], prevAvg: 2290, rate: [61, 74], prevRate: 64,
      top: [[520, 410, 310], [690, 520, 660]], stock: [[6, 41, 23], [34, 38, 27]],
      ads: [[[168000, 720000, 1], [132000, 455000, 1], [112000, 275000, 1]], [[176000, 1520000, 1], [122000, 960000, 1], [0, 0, 0]]], ctr: [2.1, 4.3],
    },
    en: {
      orders: [1240, 1870], prevOrders: 1348, avg: [120, 124], prevAvg: 117, rate: [9.1, 5.4], prevRate: 8.6,
      top: [[520, 410, 310], [690, 520, 660]], stock: [[6, 41, 23], [34, 38, 27]],
      ads: [[[7600, 25100, 1], [5900, 17400, 1], [4900, 9000, 1]], [[8300, 49800, 1], [5900, 29700, 1], [0, 0, 0]]], ctr: [2.1, 4.3],
    },
    soc: { er: [[0.6, 1.1, 0.8, 0.7, 1.2, 0.9], [3.8, 5.9, 4.1, 4.4, 5.2, 4.2]], reach: [3800, 16400], saves: [14, 210], foll: [120, 2340] },
    stars: [[52, 20, 8, 6, 14], [82, 11, 3, 2, 2]], count: [412, 1180], replies: [12, 98],
    rank: [[44, 47, 45, 49, 46, 48, 51, 47, 46, 50, 48, 47, 49, 52, 48, 47, 45, 48, 50, 47, 46, 49, 48, 47, 50, 48, 46, 47, 48, 47], [47, 46, 44, 41, 39, 36, 33, 31, 28, 26, 24, 21, 19, 17, 16, 14, 12, 11, 10, 9, 8, 7, 6, 6, 5, 4, 4, 3, 3, 3]],
  };

  let L = 'en';
  const tx = () => T[L] || T.en;
  const nloc = () => (L === 'ru' ? 'ru-RU' : 'en-US');
  function fmt(n, d = 0) { return Number(n).toLocaleString(nloc(), { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function plural(n, one, few, many) { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; }
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const pct = (n, d = 1) => fmt(n, d) + '%';
  const nums = () => N[L === 'ru' ? 'ru' : 'en'];
  // a delta badge: good/bad colour, arrow by direction
  function delta(now, prev, { lowGood = false, pp = false, d = 0 } = {}) {
    const v = pp ? now - prev : (now / prev - 1) * 100;
    const good = lowGood ? v < 0 : v > 0;
    const s = (v > 0 ? '+' : v < 0 ? '−' : '') + fmt(Math.abs(v), d) + (pp ? (L === 'ru' ? ' п.п.' : ' pp') : '%');
    return `<span class="sc-d ${good ? 'up' : 'dn'}">${v > 0 ? '▲' : '▼'} ${L === 'ar' ? iso(s) : s}</span>`;
  }

  // ---------- small drawings ----------
  function series(total, from, to, seed) {
    const raw = Array.from({ length: 30 }, (_, i) => from + (to - from) * (i / 29) + Math.sin(i * 1.7 + seed) * 3.2 + Math.sin(i * 0.6 + seed * 2) * 2.4);
    const k = total / raw.reduce((a, b) => a + b, 0);
    return raw.map((v) => v * k);
  }
  function lineSVG(vals, { max, min = 0, cls = '', inv = false, h = 90 } = {}) {
    const hi = max ?? Math.max(...vals) * 1.15, w = 300;
    const y = (v) => { const t = (v - min) / (hi - min); return (inv ? t : 1 - t) * (h - 6) + 3; };
    const pts = vals.map((v, i) => [(i / (vals.length - 1)) * w, y(v)]);
    const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
    const grid = [0.25, 0.5, 0.75].map((g) => `<line x1="0" x2="${w}" y1="${(g * h).toFixed(1)}" y2="${(g * h).toFixed(1)}"/>`).join('');
    return `<svg class="sc-chart ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><g class="g">${grid}</g><path class="a" d="${d}L${w} ${h}L0 ${h}Z"/><path class="l" d="${d}"/></svg>`;
  }
  // a product shot: a gift box or chocolates on a soft backdrop
  function shot(kind, hue, extra = '') {
    const c = `hsl(${hue} 55% 46%)`, c2 = `hsl(${hue} 60% 62%)`;
    const box = kind % 3 === 0
      ? `<rect x="26" y="40" width="48" height="36" rx="3" fill="${c}"/><rect x="22" y="32" width="56" height="12" rx="2" fill="${c2}"/><rect x="47" y="32" width="6" height="44" fill="#F6D27A"/><path d="M50 32c-8-10-18-6-12 0M50 32c8-10 18-6 12 0" stroke="#F6D27A" stroke-width="3" fill="none"/>`
      : kind % 3 === 1
        ? `<rect x="20" y="38" width="60" height="40" rx="5" fill="${c}"/>${[0, 1, 2].map((r) => [0, 1, 2, 3].map((q) => `<circle cx="${30 + q * 13.3}" cy="${47 + r * 11}" r="4.6" fill="${r % 2 ? '#5A3420' : '#3B2216'}"/>`).join('')).join('')}`
        : `<ellipse cx="50" cy="70" rx="26" ry="7" fill="rgba(0,0,0,.12)"/><path d="M34 42h32l-4 30H38z" fill="${c}"/><ellipse cx="50" cy="42" rx="16" ry="5" fill="${c2}"/>${[0, 1, 2].map((q) => `<circle cx="${42 + q * 8}" cy="38" r="4" fill="#4A2A1A"/>`).join('')}`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="100" fill="hsl(${hue} 40% 94%)"/>${box}${extra}</svg>`;
  }
  const star = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 .8l1.6 3.4 3.7.4-2.8 2.5.8 3.7L6 9 2.7 10.8l.8-3.7L.7 4.6l3.7-.4z"/></svg>';

  function frame(app, brand, body) {
    return `<div class="sc sc-${brand}"><div class="sc-bar"><span class="sc-win" aria-hidden="true"><i></i><i></i><i></i></span><span class="sc-app"><i class="sc-mark" aria-hidden="true"></i>${app}</span><span class="sc-ex">${esc(tx().ex)}</span></div><div class="sc-body">${body}</div></div>`;
  }

  // ---------- the five data screens; v = 0 without, 1 with ----------
  function sSales(v) {
    const t = tx(), S = t.sales, n = nums();
    const o = n.orders[v], avg = n.avg[v], rev = o * avg, prevRev = n.prevOrders * n.prevAvg, rate = n.rate[v];
    const k = [
      [S.k[0], fmt(o), delta(o, n.prevOrders)],
      [S.k[1], t.money(rev), delta(rev, prevRev)],
      [S.k[2], pct(rate, L === 'ru' ? 0 : 1), delta(rate, n.prevRate, { pp: true, lowGood: S.retLowGood, d: L === 'ru' ? 0 : 1 })],
      [S.k[3], t.money(avg), delta(avg, n.prevAvg, { d: 1 })],
    ];
    const s = series(o, v ? 44 : 46, v ? 80 : 37, v ? 2 : 5);
    const rows = P[L].map((name, i) => {
      const days = n.stock[v][i], low = days < 10;
      return `<tr><td><span class="sc-pi">${shot(i, [24, 32, 350][i])}</span><span class="sc-ell">${esc(name)}</span></td><td class="num">${fmt(n.top[v][i])}</td><td><span class="sc-pill ${low ? 'bad' : 'ok'}">${esc(S.days(days))}</span></td></tr>`;
    }).join('');
    return frame(S.app, S.brand, `<div class="sc-h"><b>${esc(S.title)}</b><span class="sc-sel">${esc(t.period)} ▾</span></div>
      <div class="sc-kpis">${k.map(([a, b, c]) => `<div class="sc-kpi"><span>${esc(a)}</span><b>${b}</b>${c}</div>`).join('')}</div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.chart)}</span><small>${esc(t.vsPrev)}</small></div>${lineSVG(s, { max: 90, cls: v ? 'good' : 'flat' })}<div class="sc-ax"><span>1</span><span>10</span><span>20</span><span>30</span></div></div>
      <table class="sc-t"><thead><tr><th>${esc(S.top)}</th><th class="num">${esc(S.cols[1])}</th><th>${esc(S.cols[2])}</th></tr></thead><tbody>${rows}</tbody></table>`);
  }
  function sAds(v) {
    const t = tx(), A = t.ads, n = nums(), rows = n.ads[v];
    const spend = rows.reduce((a, r) => a + r[0], 0), sales = rows.reduce((a, r) => a + r[1], 0);
    const ru = L === 'ru';
    const ratio = (sp, sa) => (sa ? (ru ? fmt((sp / sa) * 100, 1) + '%' : (L === 'ar' ? iso(fmt(sa / sp, 1) + 'x') : fmt(sa / sp, 1) + 'x')) : '—');
    const good = (sp, sa) => (ru ? sp / sa <= 0.15 : sa / sp >= 4);
    const k = [[A.k[0], t.money(spend)], [A.k[1], t.money(sales)], [A.k[2], ratio(spend, sales), good(spend, sales) ? 'ok' : 'bad'], [A.k[3], pct(n.ctr[v])]];
    const body = rows.map((r, i) => `<tr class="${r[2] ? '' : 'off'}"><td><span class="sc-st ${r[2] ? 'on' : ''}" aria-hidden="true"></span><span class="sc-ell">${esc(A.names[i])}</span></td><td class="hide-s"><span class="sc-pill ${r[2] ? 'ok' : 'mute'}">${esc(r[2] ? A.on : A.off)}</span></td><td class="num">${r[2] ? fmt(r[0]) : '—'}</td><td class="num">${r[2] ? fmt(r[1]) : '—'}</td><td class="num"><b class="${r[1] ? (good(r[0], r[1]) ? 'ok' : 'bad') : ''}">${ratio(r[0], r[1])}</b></td></tr>`).join('');
    // spend vs sales by week
    const wk = v ? [[0.22, 0.17], [0.25, 0.23], [0.26, 0.28], [0.27, 0.32]] : [[0.24, 0.27], [0.25, 0.26], [0.26, 0.24], [0.25, 0.23]];
    const top = Math.max(...wk.flat().map((x, i) => x * (i % 2 ? sales : spend)));
    const bars = wk.map(([a, b]) => `<div class="sc-wk"><i style="height:${((a * spend) / top) * 100}%"></i><i class="s" style="height:${((b * sales) / top) * 100}%"></i></div>`).join('');
    return frame(A.app, A.brand, `<div class="sc-h"><b>${esc(t.screens[1])}</b><span class="sc-sel">${t.cur} · ${esc(t.period)} ▾</span></div>
      <div class="sc-kpis">${k.map(([a, b, c]) => `<div class="sc-kpi ${c ? 'hl ' + c : ''}"><span>${a}</span><b>${b}</b>${c ? `<small>${A.target}</small>` : ''}</div>`).join('')}</div>
      <div class="sc-card sc-bars"><div class="sc-ct"><span><i class="sw a"></i>${A.k[0]}</span><span><i class="sw s"></i>${A.k[1]}</span></div><div class="sc-wks">${bars}</div></div>
      <table class="sc-t"><thead><tr><th>${esc(A.cols[0])}</th><th class="hide-s">${esc(A.cols[1])}</th><th class="num">${esc(A.cols[2])}</th><th class="num">${esc(A.cols[3])}</th><th class="num">${A.cols[4]}</th></tr></thead><tbody>${body}</tbody></table>`);
  }
  function sSoc(v) {
    const t = tx(), S = t.soc, n = N.soc, er = n.er[v];
    const avg = er.reduce((a, b) => a + b, 0) / er.length;
    const k = [[S.k[0], pct(avg)], [S.k[1], fmt(n.reach[v])], [S.k[2], fmt(n.saves[v])], [S.k[3], L === 'ar' ? iso('+' + fmt(n.foll[v])) : '+' + fmt(n.foll[v])]];
    const hues = v ? [18, 200, 330, 40, 260, 150] : [30, 30, 210, 30, 30, 210];
    const tiles = er.map((e, i) => `<div class="sc-post"><span class="sc-th">${shot(v ? i : i % 2 ? 0 : 1, hues[i])}</span>${v ? '<span class="sc-play" aria-hidden="true"></span>' : ''}<span class="sc-ty">${esc(v ? S.reel : S.photo)}</span><span class="sc-er">${L === 'ar' ? iso('ER ' + pct(e)) : 'ER ' + pct(e)}</span></div>`).join('');
    const bars = er.map((e) => `<i style="height:${(e / 6.5) * 100}%"></i>`).join('');
    return frame(S.app, S.brand, `<div class="sc-prof"><span class="sc-av" aria-hidden="true"></span><div><b>${S.handle}</b><small>${esc(S.last)}</small></div></div>
      <div class="sc-kpis">${k.map(([a, b], i) => `<div class="sc-kpi${i ? '' : ' hl ' + (v ? 'ok' : 'bad')}"><span>${esc(a)}</span><b>${b}</b></div>`).join('')}</div>
      <div class="sc-posts">${tiles}</div>
      <div class="sc-card sc-erb"><div class="sc-ct"><span>${esc(S.k[0])}</span><small>${esc(S.last)}</small></div><div class="sc-cols">${bars}</div></div>`);
  }
  function sRev(v) {
    const t = tx(), R = t.rev, st = N.stars[v];
    const avg = st.reduce((a, p, i) => a + p * (5 - i), 0) / 100;
    const stars = (k) => `<span class="sc-stars" aria-hidden="true">${[1, 2, 3, 4, 5].map((s) => `<i class="${s <= k ? 'on' : ''}">${star}</i>`).join('')}</span>`;
    const dist = st.map((p, i) => `<div class="sc-dr"><span>${5 - i}</span><i><b style="width:${p}%"></b></i><small>${p}%</small></div>`).join('');
    const reply = v ? `<div class="sc-reply"><b>${esc(R.reply[0])}</b><p>${esc(R.reply[1])}</p></div>` : `<div class="sc-reply none"><p>${esc(R.none)}</p></div>`;
    const b = v ? R.b1 : R.b0;
    return frame(R.app, R.brand, `<div class="sc-prod"><span class="sc-pi lg">${shot(0, 24)}</span><div><b class="sc-ell">${esc(P[L][0])}</b><small>${t.money(t.srch.price)}</small></div></div>
      <div class="sc-rate"><div class="sc-big"><b>${fmt(avg, 1)}</b>${stars(Math.round(avg))}<small>${esc(R.ratings(N.count[v]))}</small></div><div class="sc-dist">${dist}</div></div>
      <div class="sc-kpis two"><div class="sc-kpi ${v ? 'ok' : 'bad'} hl"><span>${esc(R.replies)}</span><b>${N.replies[v]}%</b></div><div class="sc-kpi"><span>${esc(R.time)}</span><b>${esc(v ? R.t1 : R.t0)}</b></div></div>
      <div class="sc-rev"><div class="sc-rh"><b>${esc(R.a[0])}</b>${stars(1)}</div><p>${esc(R.a[1])}</p>${reply}</div>
      <div class="sc-rev"><div class="sc-rh"><b>${esc(b[0])}</b>${stars(v ? 5 : 2)}</div><p>${esc(b[1])}</p></div>`);
  }
  function sSearch(v) {
    const t = tx(), S = t.srch, us = [P[L][0], S.price, v ? 4.7 : 3.9];
    const list = S.items.slice();
    if (v) list[2] = us; // her product takes page-one slot 3; the rest stay put
    const cards = list.slice(0, 6).map((it, i) => {
      const mine = it === us;
      return `<div class="sc-card sc-pc${mine ? ' mine' : ''}"><span class="sc-th">${shot(mine ? 0 : i + 1, mine ? 24 : [12, 300, 36, 200, 340, 48][i])}</span>${mine ? `<span class="sc-you">${S.badge}</span>` : i === 0 ? `<span class="sc-adt">${esc(S.ad)}</span>` : ''}<b>${t.money(it[1])}</b><span class="sc-ell">${esc(it[0])}</span><small>${star}${fmt(it[2], 1)}</small></div>`;
    }).join('');
    const [pos, page] = v ? [3, 1] : [47, 3];
    return frame(S.app, S.brand, `<div class="sc-search"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg><span>${esc(S.q)}</span></div>
      <div class="sc-filt">${S.filters.map((f, i) => `<span class="${i ? '' : 'on'}">${f}</span>`).join('')}</div>
      <div class="sc-posrow"><div class="sc-pos ${v ? 'ok' : 'bad'}"><small>${esc(S.yours)}</small><b>${esc(S.pos(pos, page))}</b></div><div class="sc-spark"><small>${esc(S.rank)}</small>${lineSVG(N.rank[v], { max: 55, min: 1, inv: true, h: 40, cls: v ? 'good' : 'flat' })}</div></div>
      <div class="sc-grid">${cards}</div>`);
  }
  const SCREENS = [sSales, sAds, sSoc, sRev, sSearch];

  // ---------- videos ----------
  const VIDS = [['without-usha', '0:28'], ['with-usha', '0:42']];
  let quiet = false;
  const playing = () => $$('.t3-vid video').some((v) => !v.paused && !v.ended);
  function vidHTML() {
    const t = tx();
    return `<div class="t3-vids">${VIDS.map(([f, dur], i) => `<figure class="t3-vid ${i ? 'is-with' : 'is-without'}"><div class="t3-vtag"><span>${i ? t.with : t.without}</span><span class="sc-ex">${esc(t.ex)}</span></div>
      <div class="t3-vbox"><video preload="none" playsinline poster="/media/${f}.jpg" src="/media/${f}.mp4"></video><button type="button" class="t3-vplay" aria-label="${esc(t.vid.play)}: ${esc((i ? t.with : t.without).replace(/[⁦⁩]/g, ''))}"><i aria-hidden="true"></i><span>${dur}</span></button></div>
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

  // ---------- with / without: the divider ----------
  let wwIdx = 0, cut = 50, nudged = false;
  function setCut(stage, x) {
    cut = Math.max(0, Math.min(100, x));
    stage.style.setProperty('--x', cut + '%');
    const line = $('.t3-line', stage); if (line) { line.setAttribute('aria-valuenow', String(Math.round(cut))); }
    // which side reads stronger: the label row follows
    const ww = stage.closest('.t3-ww'); if (!ww) return;
    const withShare = rtl() ? cut : 100 - cut;
    ww.style.setProperty('--wa', String(Math.min(1, (100 - withShare) / 50).toFixed(2)));
    ww.style.setProperty('--wb', String(Math.min(1, withShare / 50).toFixed(2)));
  }
  function stageWire(stage) {
    const line = $('.t3-line', stage);
    let drag = false;
    const at = (e) => { const r = stage.getBoundingClientRect(); setCut(stage, ((e.clientX - r.left) / r.width) * 100); };
    stage.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button > 0) return;
      drag = true; stage.classList.add('drag'); stage.classList.remove('anim');
      try { stage.setPointerCapture(e.pointerId); } catch {}
      at(e);
    });
    stage.addEventListener('pointermove', (e) => { if (drag) at(e); });
    const end = () => { drag = false; stage.classList.remove('drag'); };
    stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end); stage.addEventListener('lostpointercapture', end);
    line.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 20 : 5, dir = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      if (dir) { e.preventDefault(); stage.classList.add('anim'); setCut(stage, cut + dir * step); }
      else if (e.key === 'Home') { e.preventDefault(); stage.classList.add('anim'); setCut(stage, 0); }
      else if (e.key === 'End') { e.preventDefault(); stage.classList.add('anim'); setCut(stage, 100); }
    });
    setCut(stage, cut);
  }
  function nudge() {
    if (nudged || reduce) return;
    const stage = $('.t3-stage'); if (!stage) return;
    const r = stage.getBoundingClientRect();
    if (r.top > innerHeight * 0.8 || r.bottom < innerHeight * 0.2) return;
    nudged = true; stage.classList.add('anim');
    [[350, 36], [1050, 64], [1750, 50]].forEach(([ms, x]) => setTimeout(() => { if (!stage.classList.contains('drag')) setCut(stage, x); }, ms));
  }
  function wwStage() {
    const t = tx();
    if (wwIdx === 5) return `${vidHTML()}`;
    const f = SCREENS[wwIdx];
    return `<div class="t3-sides" aria-hidden="true"><span class="a">${t.without}</span><span class="b">${t.with}</span></div>
      <div class="t3-stage" style="--x:${cut}%"><div class="t3-layer a" aria-label="${esc(t.without.replace(/[⁦⁩]/g, ''))}">${f(0)}</div><div class="t3-layer b" aria-label="${esc(t.with.replace(/[⁦⁩]/g, ''))}">${f(1)}</div>
      <div class="t3-line" role="slider" tabindex="0" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(cut)}" aria-label="${esc(t.dragA.replace(/[⁦⁩]/g, ''))}"><span class="t3-knob" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg></span></div></div>
      <p class="t3-hint">${esc(t.drag)}</p>`;
  }
  function wwRender(root) {
    const t = tx();
    stopVideos();
    const box = $('.t3-wwbox', root);
    box.innerHTML = wwStage();
    $('.t3-move', root).innerHTML = `<b>${esc(t.move)}</b><span>${t.moves[wwIdx]}</span>`;
    $$('.t3-sub button', root).forEach((b, i) => b.setAttribute('aria-selected', String(i === wwIdx)));
    const st = $('.t3-stage', box); if (st) stageWire(st);
    vidWire(box);
    fit();
  }

  // ---------- panels ----------
  let idx = 0, root = null, track = null;
  function liveHTML() {
    const x = tx().live;
    return `<div class="t3-live"><div class="t3-lv-glow" aria-hidden="true"></div>
      <div class="t3-lv-top"><span class="t3-onair"><i aria-hidden="true"></i>${esc(x.k)}</span><span class="t3-wave" aria-hidden="true">${'<i></i>'.repeat(7)}</span></div>
      <h3>${x.h}</h3><p class="t3-lv-p">${esc(x.p)}</p>
      <div class="t3-lv-chat"><div class="t3-lv-head"><span class="t3-face" aria-hidden="true"><i></i><i></i></span><span>${x.typing}</span></div>
        <div class="t3-lv-msg">${x.hi}</div><div class="t3-lv-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="t3-lv-ask"><small>${esc(x.ask)}</small><div>${x.qs.map((q) => `<button type="button" class="t3-q">${esc(q)}</button>`).join('')}</div></div></div>
      <ol class="t3-steps">${x.steps.map((s, i) => `<li><b>${i + 1}</b><span>${esc(s)}</span></li>`).join('')}</ol>
      <button type="button" class="t3-go"><span class="t3-go-ring" aria-hidden="true"></span><span class="d" aria-hidden="true"></span><span>${x.b}</span><span class="t3-go-a" aria-hidden="true">${rtl() ? '←' : '→'}</span></button></div>`;
  }
  const talk = () => dispatchEvent(new Event('usha:talk'));
  function labels() {
    const t = tx();
    $$('.t3-tabs button', root).forEach((b, i) => { $('.t3-tl', b).innerHTML = t.tabs[i]; });
    $('.t3-prev', root).setAttribute('aria-label', t.prev); $('.t3-next', root).setAttribute('aria-label', t.next);
    $('.t3-sub', root).innerHTML = t.screens.map((s, i) => `<button type="button" role="tab" aria-selected="${i === wwIdx}" data-i="${i}">${esc(s)}</button>`).join('');
    $('.t3-ill', root).textContent = t.ill;
    $('#t3-p-1', root).innerHTML = liveHTML();
    $$('#t3-p-1 .t3-go, #t3-p-1 .t3-q', root).forEach((b) => b.addEventListener('click', talk));
    $$('.t3-sub button', root).forEach((b) => b.addEventListener('click', () => { wwIdx = +b.dataset.i; wwRender(root); }));
    wwRender(root);
  }
  const width = () => track.clientWidth || 1;
  // a tab or arrow scrolls the track; the swipe handler waits until it settles
  let busyUntil = 0;
  function go(i, smooth = true) {
    i = Math.max(0, Math.min(2, i));
    setIdx(i);
    slide((rtl() ? -1 : 1) * i * width(), smooth && !reduce);
  }
  // our own glide (time-based, so slow frames never stall it); snapping is off while it runs
  let glide = 0;
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
  function setIdx(i) {
    if (i !== idx && idx === 2) stopVideos();
    idx = i;
    root.dataset.i = String(i);
    $$('.t3-tabs button', root).forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
    $$('.t3-p', root).forEach((p, k) => { p.inert = k !== i; p.setAttribute('aria-hidden', String(k !== i)); });
    $('.t3-prev', root).disabled = i === 0; $('.t3-next', root).disabled = i === 2;
    fit();
    if (i === 2) setTimeout(nudge, 500);
  }
  // the track takes the height of the panel on screen, so short panels leave no gap
  function fit() {
    if (!track) return;
    const p = $$('.t3-p', root)[idx]; if (!p) return;
    track.style.height = p.offsetHeight + 'px';
  }
  function build() {
    const sec = $('#talk'); if (!sec) return;
    const col = $('.talk > div:last-child', sec); const chips = $('#ichips'), chat = $('#chat'); if (!col || !chips || !chat) return;
    L = H.lang in T ? H.lang : 'en';
    root = D.createElement('div'); root.className = 't3'; root.setAttribute('translate', 'no'); root.classList.add('notranslate');
    root.innerHTML = `<div class="t3-bar"><div class="t3-tabs" role="tablist">${[0, 1, 2].map((i) => `<button type="button" role="tab" id="t3-t-${i}" aria-controls="t3-p-${i}" class="${i === 1 ? 'is-live' : ''}"><span class="t3-n" aria-hidden="true">0${i + 1}</span>${i === 1 ? '<span class="t3-dot" aria-hidden="true"></span>' : ''}<span class="t3-tl"></span></button>`).join('')}</div>
      <div class="t3-arrows"><button type="button" class="t3-prev"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" class="t3-next"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div></div>
      <div class="t3-track"><section class="t3-p" id="t3-p-0" role="tabpanel" aria-labelledby="t3-t-0"></section><section class="t3-p" id="t3-p-1" role="tabpanel" aria-labelledby="t3-t-1"></section>
      <section class="t3-p" id="t3-p-2" role="tabpanel" aria-labelledby="t3-t-2"><div class="t3-ww"><div class="t3-sub" role="tablist"></div><div class="t3-wwbox"></div><p class="t3-move"></p><p class="t3-ill"></p></div></section></div>`;
    chips.before(root);
    track = $('.t3-track', root);
    const p0 = $('#t3-p-0', root);
    // the bundle's scenario chips, chat and hint move into panel 1 (it finds them by id)
    [chips, chat, $('.hint', col)].forEach((el) => el && p0.append(el));
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
    if ('ResizeObserver' in window) { const ro = new ResizeObserver(() => fit()); $$('.t3-p', root).forEach((p) => ro.observe(p)); }
    addEventListener('resize', () => { track.scrollLeft = (rtl() ? -1 : 1) * idx * width(); fit(); });
    addEventListener('scroll', () => { if (idx === 2) nudge(); }, { passive: true });
    setIdx(0);
    // language switch on the same page (RU ↔ EN): new copy, same panel
    new MutationObserver(() => { const n = H.lang in T ? H.lang : 'en'; if (n !== L) { L = n; labels(); setIdx(idx); } }).observe(H, { attributes: true, attributeFilter: ['lang'] });
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', build); else build();
})();
