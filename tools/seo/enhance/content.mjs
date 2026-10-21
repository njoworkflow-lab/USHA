import { DECK } from './deck-content.mjs';
// Content updates from the client decks (October 2026).
// English and Arabic follow the global English deck (GCC first: Amazon, noon,
// Google and Meta). Russian follows the Russian deck (Wildberries, Ozon, VK).
// Arabic text for every English string lives in ../ar.json; the build stops if
// one is missing.

// Dictionary keys that change. Anything not listed keeps the site's wording.
export const DICT_PATCH = {
  en: {
    w_7h: 'One engine <i>instead of a department.</i>',
    w_7p: 'A department means eight full-time roles, plus analysts, influencer managers and customer support on top, and months of hiring, training and managing.',
    w_roles: ['Head of marketing', 'Marketer', 'Paid-media specialist', 'Social media specialist', 'Video editor', 'AI creator', 'Designer', 'Web designer & developer'],
    w_sick: 'She never goes on sick leave, never says “I’m not in the right headspace”, and never leaves for a competitor with your project history.',
    c_mk: 'GCC · Egypt · Russia',
    p_p: 'Core runs the full engine for one brand. Pro adds more channels and volume, customer replies, stock intelligence and website design.',
    faq3: ['Which markets and platforms?', 'The GCC, Egypt and Russia. Amazon, noon, Namshi, Google, Instagram, Facebook, TikTok, Snapchat, YouTube, X, LinkedIn and others.'],
    g_p: 'Endless levels: catch the signals, burst the noise, dodge the fake-news imps and beat the Noise King. How far can you get?',
    g_best: 'Best',
    g_lv: 'Level',
    g_l1: 'Morning scan', g_l2: 'Price war', g_l3: 'Ad storm', g_l4: 'The dark feed', g_l5: 'The Noise King',
    g_o1: 'Signals', g_o2: 'Noise clouds', g_o3: 'Engineers’ house', g_o4: 'Noise King',
    g_clear: 'Level clear!', g_hit: 'Ouch! Fake news.', g_over: 'She needs a minute. Dash to try again.',
    g_h2: 'Red imps are fake news. Don’t touch them. A dash pushes them away.',
    g_h3: 'Spam walls sweep the feed and ad winds push you. Grab the shield to wipe out imps.',
    g_h4: 'The feed went dark. Signals glow only when you are close. Then find the engineers’ house.',
    g_h5: 'Dash into the King when his ring glows open. Avoid his noise orbs.',
    g_shield: 'Shield on: dash through the imps!', g_heart: '+1 life', g_kinghit: 'Direct hit!',
    g_done: 'You beat the noise. She’s proud of you.',
  },
  ru: {
    w_7h: 'Один движок <i>вместо целого отдела.</i>',
    w_7p: 'Отдел — это восемь ставок в штате, плюс аналитики, менеджеры по блогерам и поддержка, и месяцы найма, обучения и управления.',
    w_roles: ['Руководитель маркетинга', 'Маркетолог', 'Таргетолог', 'SMM-специалист', 'Видеомонтажёр', 'ИИ-креатор', 'Дизайнер', 'Веб-дизайнер и разработчик'],
    w_sick: 'Она не уходит на больничный, не говорит «я не в ресурсе» и никогда не уйдёт к конкуренту вместе с историей вашего проекта.',
    c_mk: 'Россия · страны Залива · Египет',
    p_p: 'Core запускает весь движок для одного бренда. Pro добавляет каналы и объём, ответы покупателям, аналитику остатков и дизайн сайта.',
    faq3: ['Какие рынки и площадки?', 'Россия, страны Залива и Египет. Wildberries, Ozon, Яндекс Маркет, ВКонтакте, Telegram, Instagram, Дзен, YouTube, RuTube, TikTok и другие.'],
    g_p: 'Бесконечные уровни: ловите сигналы, разбивайте шум, уворачивайтесь от бесов фейков и победите Короля шума. Как далеко вы пройдёте?',
    g_best: 'Рекорд',
    g_lv: 'Уровень',
    g_l1: 'Утренний скан', g_l2: 'Ценовая война', g_l3: 'Рекламный шторм', g_l4: 'Тёмная лента', g_l5: 'Король шума',
    g_o1: 'Сигналы', g_o2: 'Облака шума', g_o3: 'Дом инженеров', g_o4: 'Король шума',
    g_clear: 'Уровень пройден!', g_hit: 'Ой! Фейк.', g_over: 'Ей нужна минутка. Рывок — попробовать снова.',
    g_h2: 'Красные бесы — это фейки. Не касайтесь их. Рывок отталкивает их.',
    g_h3: 'Стены спама сметают ленту, рекламный ветер сносит. Возьмите щит, чтобы уничтожать бесов.',
    g_h4: 'Лента погасла. Сигналы светятся, только когда вы рядом. Потом найдите дом инженеров.',
    g_h5: 'Бейте Короля рывком, когда его кольцо открыто. Уворачивайтесь от шаров шума.',
    g_shield: 'Щит включён: рывком сквозь бесов!', g_heart: '+1 жизнь', g_kinghit: 'Прямое попадание!',
    g_done: 'Вы победили шум. Она вами гордится.',
  },
};

// [en, ru] pairs inside the bundle's data arrays, keyed by the current English.
export const PAIR_PATCH = {
  // Updated EN/RU slide 22: Enterprise is Pro, configured for the company.
  'All eight areas, configured around your company.': ['For groups and larger companies. Configured around your company.', 'Для групп компаний и крупного бизнеса. Настраивается под вашу компанию.'],
  'All eight areas': ['Everything in Pro', 'Всё, что в Pro'],
  // live findings
  'Competitor A · Wildberries · 02:40': ['Competitor A · Amazon · 02:40', 'Конкурент A · Wildberries · 02:40'],
  'Search · Wildberries · 7 days': ['Search · noon · 7 days', 'Поиск · Ozon · 7 дней'],
  // chat demo
  'Why did we drop on Ozon?': ['Why did we drop on noon?', 'Почему мы просели на Ozon?'],
  'Lead with the fragrance-free line in VK this week.': ['Lead with the fragrance-free line on Instagram this week.', 'На этой неделе ведите во ВКонтакте линейку без отдушки.'],
  // the week
  'Pistachio box: 3 days of stock left. Ads shift to the hazelnut box, 640 in stock.': ['Pistachio box: 3 days of stock left. Ads shift to the hazelnut box, 640 in stock, and the website is updated.', 'Фисташкового набора осталось на 3 дня. Реклама переходит на ореховый: на складе 640, и сайт уже обновлён.'],
  // comparison table (deck wording)
  'Knows your business': ['Knows your business', 'Знает ваш бизнес'],
  'Starts from zero': ['Starts from zero every time', 'Каждый раз с нуля'],
  'Through one manager': ['Through one account manager', 'Через одного менеджера'],
  'Until people leave': ['Until people leave', 'Пока люди не ушли'],
  'Remembers everything': ['Permanent memory of everything', 'Помнит всё и всегда'],
  'Watches competitors daily': ['Watches competitors and marketplaces', 'Следит за конкурентами и маркетплейсами'],
  'On request': ['Occasionally, on request', 'Иногда, по запросу'],
  'When there’s time': ['When there is time', 'Когда есть время'],
  'Decodes why leaders win': ['Decodes why niche leaders win', 'Разбирает, почему выигрывают лидеры'],
  'Always, as actions': ['Continuously, and turns it into actions', 'Постоянно — и превращает в действия'],
  'Visuals': ['Quality of visuals', 'Качество визуала'],
  'Generic': ['Generic, looks like AI', 'Шаблонный, сразу видно ИИ'],
  'Good, expensive': ['Good, at a high price', 'Хорошее, но дорого'],
  'Depends on hires': ['Depends on who you hire', 'Зависит от того, кого наняли'],
  'From your products': ['From your products, in your brand style', 'Из ваших товаров, в стиле бренда'],
  'Can be invented': ['Can be invented', 'Могут быть выдуманы'],
  'Depends': ['Depends on the team', 'Зависит от команды'],
  'Your data, checkable': ['Your data and checkable sources', 'Ваши данные и проверяемые источники'],
  'Available': ['Available', 'Доступность'],
  'When prompted': ['When you prompt it', 'Когда вы пишете запрос'],
  'Office hours': ['Office hours', 'В рабочие часы'],
  'Minus holidays': ['Office hours, minus holidays and sick leave', 'В рабочие часы, кроме отпусков и больничных'],
  'Does the work end to end': ['Does the work end to end', 'Делает работу целиком'],
  'You do it': ['No, you do it', 'Нет, делаете вы'],
  'Slowly': ['Yes, slowly', 'Да, но медленно'],
  'If fully staffed': ['Yes, if fully staffed', 'Да, если все роли закрыты'],
  'Research → publish → measure': ['Research, plan, create, publish, measure', 'Анализ, план, создание, публикация, измерение'],
  // Updated EN/RU slides 21–22: monthly work and plan limits.
  'Intelligence': ['Intelligence', 'Аналитика'],
  'Market and competitor radar, success decoding, and a brief that ends in actions.': ['Market, marketplace and competitor radar. Success decoding of your niche’s leaders. A regular brief that ends in actions: launch, change, promote or stop.', 'Радар рынка, маркетплейсов и конкурентов. Разбор успеха лидеров ниши. Регулярная сводка, которая заканчивается действиями: запустить, изменить, продвинуть или остановить.'],
  'Quarterly strategy, monthly plan and regular publishing across your channels.': ['Quarterly online and offline strategy. Monthly plan and content calendar. Regular publishing across all your channels.', 'Стратегия онлайн и офлайн на квартал. План и контент-календарь на месяц. Регулярные публикации во всех ваших каналах.'],
  'Videos without a shoot, product photo shoots from your real products, designs in one style.': ['Videos without a shoot, from idea and script to the finished clip, plus editing of your footage. Photo shoots from your real products. Everything in one visual style.', 'Видео без съёмки — от идеи и сценария до готового ролика, монтаж ваших исходников. Фотосессии ваших реальных товаров. Всё в одном визуальном стиле.'],
  'Promotions, ads within your budget, bloggers and UGC creators.': ['Offer, mechanics, copy and designs for each promotion. Ads within the budget you approve. Bloggers and UGC creators found, briefed and coordinated.', 'Предложение, механика, тексты и макеты для каждой акции. Реклама в рамках утверждённого бюджета. Подбор, задания и сопровождение блогеров и UGC-креаторов.'],
  'Customer replies, Mon–Fri 10:00–18:00': ['Customer replies, Mon–Fri 10:00–18:00', 'Ответы покупателям, пн–пт 10:00–18:00'],
};
// Counter labels in the monthly cards only (the chat demo reuses some words).
export const AREA_LABELS = {
  'competitors tracked': ['competitors tracked', 'конкурентов под наблюдением'],
  'marketplaces': ['marketplaces', 'маркетплейсов'],
  'posts': ['posts a month', 'публикаций в месяц'],
  'stories': ['stories a month', 'сторис в месяц'],
  'videos': ['videos without a shoot', 'видео без съёмки'],
  'edits': ['edits of your footage', 'монтажей ваших видео'],
  'photo shoots': ['product photo shoots', 'продуктовых фотосессий'],
  'designs': ['designs outside social', 'макетов вне соцсетей'],
  'promotions': ['promotions', 'акций'],
  'ad platforms': ['ad platforms', 'рекламных площадок'],
  'collaborations': ['bloggers & UGC creators', 'блогеров и UGC-креаторов'],
};
// Items added to the "only in Pro" row.
export const PRO_ONLY_ADD = [['Website design, kept in sync with your products and stock', 'Дизайн сайта, синхронизированный с товарами и остатками']];

// New content used by the enhancement layer (plans and Enterprise).
// Strings are [en, ru]; Arabic comes from ar.json.
export const X = {
  deck: DECK,
  liveHints: {
    primary: ['Talk to USHA live', 'Поговорить с USHA'],
    pill: ['Try USHA live', 'Спросить USHA вживую'],
    lines: [
      ['Psst. Ask me about your market.', 'Псс. Спросите меня про ваш рынок.'],
      ['Your competitors. Your questions. I’m here.', 'Ваши конкуренты. Ваши вопросы. Я здесь.'],
      ['Something on your mind? Let’s talk.', 'Есть вопрос? Давайте поговорим.'],
    ],
    dismiss: ['Dismiss hint', 'Скрыть подсказку'],
  },
  // Updated EN/RU decks, slide 22: all plan volumes below.
  plansGroups: [
    [['Market intelligence', 'Аналитика рынка'], [
      [['Competitors tracked', 'Конкуренты под наблюдением'], ['Up to 5', 'до 5'], ['Up to 10', 'до 10']],
      [['Marketplaces', 'Маркетплейсы'], ['1', '1'], ['Up to 3', 'до 3']],
      [['Success decoding', 'Разбор успеха лидеров'], ['Monthly', 'ежемесячно'], ['Twice a month', 'дважды в месяц']],
      [['Brief with actions', 'Сводка с действиями'], ['Monthly', 'ежемесячно'], ['Every 2 weeks', 'раз в 2 недели']],
    ]],
    [['Growth & sales', 'Рост и продажи'], [
      [['Promotions', 'Акции'], ['Up to 1', 'до 1'], ['Up to 2', 'до 2']],
      [['Bloggers & UGC creators', 'Блогеры и UGC-креаторы'], ['Up to 10', 'до 10'], ['Up to 30', 'до 30']],
      [['Ad platforms', 'Рекламные площадки'], ['Google or Meta', 'ВК или Яндекс'], ['Google + Meta', 'ВК + Яндекс']],
      [['Customer replies', 'Ответы покупателям'], ['—', '—'], ['Mon–Fri', 'пн–пт']],
      [['Stock intelligence', 'Аналитика остатков'], ['—', '—'], ['1 + 4 checks', '1 + 4 проверки']],
    ]],
    [['Content', 'Контент'], [
      [['Content strategy', 'Контент-стратегия'], ['1 channel', '1 канал'], ['2 channels', '2 канала']],
      [['Posts / stories', 'Публикации / сторис'], ['16 / 32', '16 / 32'], ['20 / 40', '20 / 40']],
      [['Videos without filming', 'Видео без съёмки'], ['Up to 4', 'до 4'], ['Up to 6', 'до 6']],
      [['Edits of your footage', 'Монтаж ваших видео'], ['Up to 10', 'до 10'], ['Up to 15', 'до 15']],
      [['Product photo shoots', 'Продуктовые фотосессии'], ['1 × 10–20', '1 × 10–20'], ['2 × 10–20', '2 × 10–20']],
      [['Designs outside social', 'Макеты вне соцсетей'], ['Up to 10', 'до 10'], ['Up to 15', 'до 15']],
      [['Packaging design', 'Дизайн упаковки'], ['—', '—'], ['1 line · 3 SKUs', '1 линейка · 3 SKU']],
      [['Website design', 'Дизайн сайта'], ['—', '—'], ['Included', 'Входит']],
    ]],
  ],
  plansCore: ['The full engine for one brand.', 'Весь движок для одного бренда.'],
  plansPro: ['More channels and volume, customer replies, stock intelligence and website design.', 'Больше каналов и объёма, ответы покупателям, аналитика остатков и дизайн сайта.'],
  bothInclude: ['Both plans include', 'В обоих тарифах'],
  both: ['Daily market radar · quarterly strategy and monthly plan · one brand visual system · cross-posting to every channel · 24/7 chat with USHA · monthly report', 'Ежедневный радар рынка · стратегия на квартал и план на месяц · единая визуальная система · кросс-постинг во все каналы · чат с USHA 24/7 · ежемесячный отчёт'],
  entKick: ['For groups and larger companies', 'Для групп компаний и крупного бизнеса'],
  entLead: ['Configured around your company.', 'Настраивается под вашу компанию.'],
  entAll: ['Everything in Pro', 'Всё, что в Pro'],
  entAllItems: [['Market intelligence', 'Анализ рынка'], ['Strategy', 'Стратегия'], ['Creative studio', 'Креативная студия'], ['Promotion', 'Продвижение'], ['Website design', 'Дизайн сайта'], ['One conversation', 'Один диалог']],
  entOnly: ['Only in Enterprise', 'Только в Enterprise'],
  entOnlyItems: [[['Customers', 'Покупатели'], ['replies at scale', 'ответы в любом объёме']], [['Operations', 'Операции'], ['stock & sales', 'остатки и продажи']], [['Working tools', 'Инструменты'], ['dashboards · sites · automations', 'панели · сайты · автоматизации']]],
  // month legend and the control widgets
  legendCore: ['In Core', 'В Core'],
  legendPro: ['Pro adds', 'Pro добавляет'],
  ctrl: {
    feed: [['Post published', 'Пост опубликован'], ['14 replies sent', 'Отправлено 14 ответов'], ['Weekly report ready', 'Недельный отчёт готов'], ['Stories scheduled', 'Сторис запланированы']],
    on: ['Autopilot', 'Автопилот'],
    ask: ['Launch the “−15% weekend” promo?', 'Запустить акцию «−15% на выходные»?'],
    yes: ['Yes', 'Да'],
    later: ['Not now', 'Не сейчас'],
    ok: ['Approved. Launching Friday.', 'Одобрено. Запуск в пятницу.'],
    lock: [['Deals', 'Сделки'], ['Payments', 'Платежи']],
    only: ['Only you', 'Только вы'],
  },
  details: ['See everything in this plan', 'Всё, что входит в тариф'],
  inPro: ['In Pro', 'В Pro'],
  close: ['Close', 'Закрыть'],
  entAllNote: ['Every Pro capability, sized to your company', 'Все возможности Pro под масштаб вашей компании'],
  compareAll: ['Compare every detail', 'Сравнить все детали'],
  hide: ['Hide details', 'Скрыть детали'],
  entPlus: ['Everything in Pro, plus', 'Всё из Pro, плюс'],
  proPlus: ['Only in Pro', 'Только в Pro'],
  forCore: ['One brand, the full engine', 'Один бренд, весь движок'],
  forPro: ['More channels, more volume', 'Больше каналов и объёма'],
  chatHead: ['USHA · online · reading your market', 'USHA · онлайн · читает ваш рынок'],
  guarRing: ['NJO GUARANTEE · EVERY MONTH · CHECKED · ', 'ГАРАНТИЯ NJO · КАЖДЫЙ МЕСЯЦ · ПРОВЕРЕНО · '],
  decide: ['Your decision', 'Ваше решение'],
  // Updated EN/RU slide 17: 8 → 1, one week and 24/7.
  hand: {
    tags: [['Strategy', 'Стратегия'], ['Plans', 'Планы'], ['Ads', 'Реклама'], ['Channels', 'Каналы'], ['Video', 'Видео'], ['Visuals', 'Визуалы'], ['Design', 'Дизайн'], ['Website', 'Сайт']],
    kick: ['Why her', 'Почему она'],
    capMany: ['full-time roles to hire, train and manage', 'ставок в штат: найти, обучить, управлять'],
    leftOne: ['role left to hand over', 'осталось передать'],
    leftMany: ['roles left to hand over', 'осталось передать'],
    capOne: ['engine. Every role’s work, one memory.', 'движок. Вся работа отдела, одна память.'],
    her: ['One engine · one memory', 'Один движок · одна память'],
    foot: ['Ready in one week. Works 24/7. Never leaves with your project history.', 'Готова за неделю. Работает 24/7. Не уходит с историей вашего проекта.'],
  },
};

// Section 03: the deck's examples, a live stage and two weeks on one desk.
X.x3 = {
  "rail": [
    "01 Watch her think · 02 Ask her live · 03 With / without",
    "01 Как она думает · 02 Спросить вживую · 03 С ней и без неё"
  ],
  "b1_tag": [
    "Example · fixed scenario",
    "Пример · готовый сценарий"
  ],
  "b1_next": [
    "Ask her about your business ↓",
    "Спросите её о вашем бизнесе ↓"
  ],
  "b2_k": [
    "Live · USHA is online",
    "Вживую · USHA на связи"
  ],
  "b2_k2": [
    "A brief + 4 questions",
    "Бриф + 4 вопроса"
  ],
  "b2_sat_k": [
    "Owners ask her",
    "Владельцы спрашивают"
  ],
  "b2_sat1": [
    "Why did my sales drop on noon?",
    "Почему упали продажи на Wildberries?"
  ],
  "b2_sat2": [
    "A rival cut prices. Do I answer?",
    "Конкурент снизил цены. Отвечать?"
  ],
  "b2_sat3": [
    "Which ad should I stop today?",
    "Какую рекламу остановить сегодня?"
  ],
  "b2_h": [
    "Your business. *Her answer.*",
    "Ваш бизнес. *Её ответ.*"
  ],
  "b2_p": [
    "Brief her like a new Marketing Director. Then ask four questions about your market and your numbers.",
    "Расскажите о бизнесе, как новому директору по маркетингу. Затем задайте четыре вопроса о рынке и цифрах."
  ],
  "b2_cta": [
    "Ask USHA live",
    "Спросить USHA"
  ],
  "b2_steps": [
    "01 Who you are · 02 Your brief · 03 Four questions",
    "01 Кто вы · 02 Ваш бриф · 03 Четыре вопроса"
  ],
  "b3_k": [
    "03 · With / without",
    "03 · С ней и без неё"
  ],
  "b3_h": [
    "Same business. *Two different weeks.*",
    "Тот же бизнес. *Две разные недели.*"
  ],
  "b3_p": [
    "Drag the light. Everything it has passed is the week with USHA.",
    "Двигайте свет. Всё, что он прошёл, это неделя с USHA."
  ],
  "b3_on": [
    "With USHA",
    "С USHA"
  ],
  "b3_off": [
    "Without USHA",
    "Без USHA"
  ],
  "b3_drag": [
    "Drag the light",
    "Двигайте свет"
  ],
  "b3_slider": [
    "Share of the week with USHA",
    "Доля недели с USHA"
  ],
  "b3_val": [
    "{x}% with USHA",
    "{x}% с USHA"
  ],
  "b3_ex": [
    "Example",
    "Пример"
  ],
  "b3_note": [
    "Illustrative layouts, not client results. Figures from USHA's own materials are kept as written.",
    "Макеты для иллюстрации, не результаты клиентов. Цифры из материалов USHA приведены как есть."
  ],
  "b3_end": [
    "Now ask her about yours.",
    "Теперь спросите её о своём."
  ],
  "p1_tu": [
    "USHA · Monday brief · 07:52",
    "USHA · сводка в понедельник · 07:52"
  ],
  "p1_w": [
    "What changed",
    "Что изменилось"
  ],
  "p1_y": [
    "Why it matters",
    "Почему это важно"
  ],
  "p1_m": [
    "Your move",
    "Ваш ход"
  ],
  "p1_a": [
    "Views −23% since Tuesday.",
    "Просмотры −23% со вторника."
  ],
  "p1_b": [
    "Two rivals cut prices overnight: −18% and −12%.",
    "Два конкурента за ночь снизили цены: −18% и −12%."
  ],
  "p1_c": [
    "Don't chase the price. Bundle at the same price and move ads to the evening.",
    "Не гонитесь за ценой. Соберите набор по той же цене и перенесите рекламу на вечер."
  ],
  "p1_k": [
    "Stop if orders don't recover 10% in 7 days.",
    "Остановить, если заказы не вырастут на 10% за 7 дней."
  ],
  "p1_f": [
    "1,240 sources read before 08:00",
    "1 240 источников прочитано до 08:00"
  ],
  "p1_o": [
    "Refreshed 3 days ago · Export CSV",
    "Обновлено 3 дня назад · Экспорт CSV"
  ],
  "p2_t": [
    "Campaigns · All · Today",
    "Кампании · Все · Сегодня"
  ],
  "p2_o": [
    "3 recommendations: increase budget",
    "3 рекомендации: увеличьте бюджет"
  ],
  "p2_a": [
    "CPC +32% after 10:00",
    "CPC +32% после 10:00"
  ],
  "p2_v": [
    "Move your ads to the evening.",
    "Перенесите рекламу на вечер."
  ],
  "p2_here": [
    "Move here",
    "Сюда"
  ],
  "p2_b": [
    "Inside your approved budget",
    "В рамках утверждённого бюджета"
  ],
  "p2_k": [
    "Pause Promo_Gift if CPC stays above AED 2.50 for 3 days.",
    "Остановить Promo_Gift, если CPC выше 25 ₽ три дня."
  ],
  "p3_o": [
    "Of 1,000 followers, about 10 saw it.",
    "Из 1 000 подписчиков его увидели около 10."
  ],
  "p3_v": [
    "Format rising: 9-second reels",
    "Растёт формат: ролики по 9 секунд"
  ],
  "p3_c": [
    "Your version: in production, out Thursday",
    "Ваша версия: в работе, выйдет в четверг"
  ],
  "p3_m": [
    "First 2 seconds: the product, not the logo.",
    "Первые 2 секунды: товар, а не логотип."
  ],
  "p4_o": [
    "37 unread",
    "37 непрочитанных"
  ],
  "p4_q": [
    "Should we cut too?",
    "Нам тоже снижать?"
  ],
  "p4_a": [
    "Rival A: AED 129 → AED 106 (−18%) · 02:40",
    "Конкурент A: 1 290 ₽ → 1 058 ₽ (−18%) · 02:40"
  ],
  "p4_t": [
    "Tested on 100 digital buyers",
    "Проверено на 100 цифровых покупателях"
  ],
  "p4_bars": [
    "Cut price · Value message · Bundle",
    "Снизить цену · Ценность · Набор"
  ],
  "p4_v": [
    "Answer with a bundle. Keep your price.",
    "Ответьте набором. Цену не трогайте."
  ],
  "p4_f": [
    "1,300+ tests before this answer",
    "1 300+ тестов до этого ответа"
  ],
  "p5_th": [
    "Praise: freshness · Complaint: dry fillings · Other",
    "Хвалят: свежесть · Жалобы: сухая начинка · Другое"
  ],
  "p5_v": [
    "Lead with freshness and local production. Fix the filling before the gift box launch.",
    "Делайте акцент на свежести и местном производстве. Исправьте начинку до запуска набора."
  ],
  "p6_o": [
    "No plan for next week · Missed",
    "Плана на следующую неделю нет · Пропущено"
  ],
  "p6_ex": [
    "Example week",
    "Пример недели"
  ],
  "p6_h": [
    "10 minutes becomes a week.",
    "10 минут превращаются в неделю."
  ],
  "p6_days": [
    "Mon Your one line in the chat · 10 min / Tue Plan approved by you / Wed Images · 4 posts · 8 stories / Thu 2 short videos / Fri Ad creatives / Sat Published in every channel / Sun Report: what worked",
    "Пн Ваша строка в чате · 10 мин / Вт Вы утвердили план / Ср Изображения · 4 поста · 8 сторис / Чт 2 коротких видео / Пт Рекламные креативы / Сб Опубликовано во всех каналах / Вс Отчёт: что сработало"
  ],
  "p7_off": [
    "Template AI. Plastic faces. Looks like everyone's.",
    "Шаблонный ИИ. Пластиковые лица. Как у всех."
  ],
  "p7_on": [
    "Directed like a film. One visual system. Made for your brand.",
    "Снято как кино. Один визуальный стиль. Для вашего бренда."
  ],
  "p7_ctl": [
    [
      "Play",
      "Смотреть"
    ],
    [
      "Pause",
      "Пауза"
    ],
    [
      "Sound on",
      "Включить звук"
    ],
    [
      "Sound off",
      "Выключить звук"
    ],
    [
      "Now:",
      "Сейчас:"
    ],
    [
      "Watch without",
      "Смотреть «без»"
    ],
    [
      "Watch with",
      "Смотреть «с»"
    ],
    [
      "Replay",
      "Ещё раз"
    ],
    [
      "Watch the other one",
      "Смотреть второе"
    ]
  ]
};
X.x3Panels = {
  "panels": [
    [
      "Business report",
      "Бизнес-отчёт"
    ],
    [
      "Ads",
      "Реклама"
    ],
    [
      "Engagement and reach",
      "Вовлечённость и охват"
    ],
    [
      "Competitor and price",
      "Конкуренты и цены"
    ],
    [
      "Reviews",
      "Отзывы"
    ],
    [
      "Content calendar",
      "Контент-план"
    ],
    [
      "Media",
      "Медиа"
    ]
  ],
  "metrics": [
    [
      "Views",
      "Просмотры"
    ],
    [
      "Visits",
      "Посещения"
    ],
    [
      "Orders",
      "Заказы"
    ],
    [
      "Conversion",
      "Конверсия"
    ],
    [
      "Avg. order",
      "Средний чек"
    ],
    [
      "Returns",
      "Возвраты"
    ],
    [
      "Rating",
      "Рейтинг"
    ],
    [
      "Ad spend",
      "Расход на рекламу"
    ]
  ],
  "adsCols": [
    [
      "Spend",
      "Расход"
    ],
    [
      "CPC",
      "CPC"
    ],
    [
      "CTR",
      "CTR"
    ],
    [
      "Status",
      "Статус"
    ]
  ],
  "limited": [
    "Limited",
    "Ограничено"
  ],
  "active": [
    "Active",
    "Активна"
  ],
  "followers": [
    "Followers",
    "Подписчики"
  ],
  "reach": [
    "Reach of last post",
    "Охват последнего поста"
  ],
  "posts": [
    "Posts per week",
    "Посты в неделю"
  ],
  "formats": [
    [
      "Reels 9 s",
      "Ролики 9 с"
    ],
    [
      "Carousels",
      "Карусели"
    ],
    [
      "Static",
      "Статика"
    ]
  ],
  "alert": [
    "Price change detected · Rival A",
    "Изменение цены · Конкурент A"
  ],
  "team": [
    "Sales team",
    "Отдел продаж"
  ],
  "reviews": [
    [
      "Fresh and made locally.",
      "Свежее, местного производства."
    ],
    [
      "The filling was dry.",
      "Начинка была сухой."
    ],
    [
      "A lovely gift box.",
      "Красивый подарочный набор."
    ]
  ],
  "reply": [
    "Reply",
    "Ответить"
  ],
  "reviewCount": [
    "1,180 reviews",
    "1 180 отзывов"
  ],
  "mediaOff": [
    "Content / video / draft_final_v7.mp4",
    "Контент / видео / draft_final_v7.mp4"
  ],
  "mediaOn": [
    "USHA · Studio · brand film",
    "USHA · студия · фильм бренда"
  ],
  "stepsOff": [
    [
      "Brief?",
      "Бриф?"
    ],
    [
      "Wait",
      "Ожидание"
    ],
    [
      "Revisions",
      "Правки"
    ],
    [
      "Revisions",
      "Правки"
    ]
  ],
  "stepsOn": [
    [
      "Idea",
      "Идея"
    ],
    [
      "Script",
      "Сценарий"
    ],
    [
      "Shots",
      "Кадры"
    ],
    [
      "Edit",
      "Монтаж"
    ],
    [
      "9:16 · 1:1 · 16:9",
      "9:16 · 1:1 · 16:9"
    ]
  ],
  "notSupported": [
    "Video unavailable. Try the other film.",
    "Видео недоступно. Попробуйте второй фильм."
  ],
  "chartSummary": [
    "Illustrative trend; figures are examples.",
    "Иллюстративная динамика; цифры приведены для примера."
  ]
};

// Updated decks: hero 1/6; problem 3; comparison and roles 17/18; delivery 21; plans 22.
Object.assign(DICT_PATCH.en, {
  "sub": "Where is the truth? Hidden in the algorithms. USHA reads them. Not a chatbot.",
  "n_h": "Five algorithms decide who buys from you. <i>Have you met them?</i>",
  "n_p": "Feed, search, ad auction, marketplaces and suggestions. Their rules change every week.",
  "a0d": "Of 1,000 followers, about 10 see your next post.",
  "a1d": "Page one sells. Page two is invisible.",
  "a2d": "The price of each click changes every hour.",
  "n_e1": "Posting more doesn’t fix it.",
  "n_e2": "<b>Reading the algorithms does.</b>",
  "w_h": "Three roads, and USHA. <i>Side by side.</i>",
  "w_c1": "Agency",
  "w_c2": "In-house team",
  "w_c3": "Do it yourself",
  "w_7h": "One USHA <i>instead of 8 people.</i>",
  "w_7p": "Eight roles. Months of hiring and training. Holidays, sick leave and history lost when someone leaves.",
  "w_sick": "Ready in one week. Works 24/7. Remembers every project. Never leaves with your secrets.",
  "m_h": "What she delivers. <i>Every month.</i>",
  "p_h": "Core or Pro. <i>Same USHA, different volume.</i>",
  "faq3": [
    "Which markets and platforms?",
    "The GCC, Egypt and Russia. Amazon, noon, Ozon and Wildberries. Google or Meta ads. Instagram, Facebook, TikTok, Snapchat, YouTube, X and LinkedIn."
  ],
  "faq": [
    [
      "Is USHA a chatbot?",
      "No. You talk to her in one chat. She reads your market, plans, produces and publishes within the plan you approve."
    ],
    [
      "Do I need to learn a new platform?",
      "No. She works in your messenger. You approve what matters. She does the work and reports every month."
    ],
    [
      "Who checks the quality?",
      "Every output is checked against NJO’s quality standards. Your monthly report includes honest conclusions."
    ],
    [
      "Which markets and platforms?",
      "The GCC, Egypt and Russia. Amazon, noon, Ozon and Wildberries. Google or Meta ads. Instagram, Facebook, TikTok, Snapchat, YouTube, X and LinkedIn."
    ],
    [
      "Are advertising budgets included?",
      "No. Ad budgets, creator fees and collaboration products are paid separately. You approve the budget and promotion terms."
    ],
    [
      "What happens after the free week?",
      "You decide. If you continue, she starts the agreed plan the following week. If not, you keep the strategy and the posts."
    ],
    [
      "What if the answer is still not right?",
      "USHA re-checks the plan. Then an NJO expert works by hand. Then the senior team takes over. Still not right? 100% money back. Terms are written into your contract."
    ],
    [
      "When do we sign the NDA?",
      "Before day one, before you share anything. Your numbers, plans and customers are a commercial secret."
    ],
    [
      "Do I need to give access to my systems?",
      "No API, app or access to your systems is needed. Connections are optional. You choose what she can touch and can switch them off at any time."
    ]
  ]
});
Object.assign(DICT_PATCH.ru, {
  "sub": "Где правда? Она скрыта в алгоритмах. USHA умеет их читать. Не чат-бот.",
  "n_h": "Пять алгоритмов решают, кто у вас купит. <i>Вы с ними знакомы?</i>",
  "n_p": "Лента, поиск, рекламный аукцион, маркетплейсы и рекомендации. Их правила меняются каждую неделю.",
  "a0d": "Из 1 000 подписчиков ваш новый пост увидят около 10.",
  "a1d": "Первая страница продаёт. Вторую не видят.",
  "a2d": "Цена каждого клика меняется каждый час.",
  "n_e1": "Больше публикаций проблему не решит.",
  "n_e2": "<b>Нужно читать алгоритмы.</b>",
  "w_h": "Три дороги и USHA. <i>Сравним.</i>",
  "w_c1": "Агентство",
  "w_c2": "Штатная команда",
  "w_c3": "Самостоятельно",
  "w_7h": "Одна USHA <i>вместо 8 человек.</i>",
  "w_7p": "Восемь ролей. Месяцы найма и обучения. Отпуска, больничные и потеря истории, когда человек уходит.",
  "w_sick": "Готова за неделю. Работает 24/7. Помнит каждый проект. Не уходит с вашими секретами.",
  "m_h": "Что она делает. <i>Каждый месяц.</i>",
  "p_h": "Core или Pro. <i>Одна USHA, разный объём.</i>",
  "faq3": [
    "Какие рынки и площадки?",
    "Россия, страны Залива и Египет. Ozon, Wildberries и Яндекс Маркет. Реклама ВК или Яндекс. ВКонтакте, Telegram, Instagram, Дзен, YouTube, RuTube, TikTok и Ритм."
  ],
  "faq": [
    [
      "USHA — это чат-бот?",
      "Нет. Вы общаетесь с ней в одном чате. Она читает рынок, планирует, создаёт и публикует по утверждённому плану."
    ],
    [
      "Нужно осваивать новую платформу?",
      "Нет. Она работает в вашем мессенджере. Вы утверждаете важное. Она делает работу и отчитывается каждый месяц."
    ],
    [
      "Кто проверяет качество?",
      "Каждый результат проверяется по стандартам качества NJO. В ежемесячном отчёте — честные выводы."
    ],
    [
      "Какие рынки и площадки?",
      "Россия, страны Залива и Египет. Ozon, Wildberries и Яндекс Маркет. Реклама ВК или Яндекс. ВКонтакте, Telegram, Instagram, Дзен, YouTube, RuTube, TikTok и Ритм."
    ],
    [
      "Входят ли рекламные бюджеты?",
      "Нет. Рекламные бюджеты, гонорары авторов и товары для коллабораций оплачиваются отдельно. Бюджет и условия акций утверждаете вы."
    ],
    [
      "Что после бесплатной недели?",
      "Решаете вы. Если продолжаете, она начинает работать по согласованному плану со следующей недели. Если нет — стратегия и посты остаются у вас."
    ],
    [
      "А если ответ всё ещё не подходит?",
      "USHA перепроверяет план. Затем эксперт NJO разбирает случай вручную. Потом подключается старшая команда. Всё ещё не то? 100% возврат денег. Условия записаны в договоре."
    ],
    [
      "Когда подписываем NDA?",
      "До первого дня, прежде чем вы чем-либо поделитесь. Ваши цифры, планы и клиенты — коммерческая тайна."
    ],
    [
      "Нужен доступ к моим системам?",
      "API, приложение и доступ к вашим системам не нужны. Подключения — по желанию. Вы выбираете доступ и можете отключить его в любой момент."
    ]
  ]
});
// EN/RU slides 18 (all seven rows), 11 (test count), 17 (cost ratio; basis printed beside the table).
export const COMPARE_DECK = [
  [
    [
      "Knows your business",
      "Знает ваш бизнес"
    ],
    [
      "Through one account manager",
      "Через одного менеджера"
    ],
    [
      "Until people leave",
      "Пока люди не ушли"
    ],
    [
      "From zero every time",
      "С нуля каждый раз"
    ],
    [
      "Remembers everything, forever",
      "Помнит всё и всегда"
    ]
  ],
  [
    [
      "Watches your market daily",
      "Следит за рынком каждый день"
    ],
    [
      "Sometimes, if you ask",
      "Иногда, если попросите"
    ],
    [
      "When there is time",
      "Когда есть время"
    ],
    [
      "No",
      "Нет"
    ],
    [
      "Every day",
      "Каждый день"
    ]
  ],
  [
    [
      "Knows why leaders win",
      "Знает, почему выигрывают лидеры"
    ],
    [
      "Rarely",
      "Редко"
    ],
    [
      "Rarely",
      "Редко"
    ],
    [
      "No",
      "Нет"
    ],
    [
      "Always, and acts on it",
      "Всегда, и действует"
    ]
  ],
  [
    [
      "Tests ideas before you pay",
      "Проверяет идеи до ваших затрат"
    ],
    [
      "No",
      "Нет"
    ],
    [
      "No",
      "Нет"
    ],
    [
      "No",
      "Нет"
    ],
    [
      "1,300+ times",
      "1 300+ раз"
    ]
  ],
  [
    [
      "Available",
      "Доступность"
    ],
    [
      "Office hours",
      "В рабочие часы"
    ],
    [
      "Office hours minus holidays",
      "В рабочие часы, кроме отпусков"
    ],
    [
      "Your evenings",
      "Ваши вечера"
    ],
    [
      "24/7",
      "24/7"
    ]
  ],
  [
    [
      "Does the work",
      "Делает работу"
    ],
    [
      "Yes, slowly",
      "Да, но медленно"
    ],
    [
      "Yes, if fully staffed",
      "Да, если все роли закрыты"
    ],
    [
      "You do it",
      "Делаете вы"
    ],
    [
      "Yes, from plan to report",
      "Да, от плана до отчёта"
    ]
  ],
  [
    [
      "Monthly cost",
      "Стоимость в месяц"
    ],
    [
      "High fee",
      "Высокий гонорар"
    ],
    [
      "7–12x more than USHA",
      "В 7–12 раз дороже USHA"
    ],
    [
      "Low, but costs your time",
      "Ниже, но стоит вашего времени"
    ],
    [
      "A fraction",
      "Малая часть"
    ]
  ]
];

// NJO night notebook: slide-grounded captions; the ink-drop metaphor is illustrative.
X.story = {
  "kick": [
    "Behind her · NJO",
    "Кто за ней · NJO"
  ],
  "h": [
    "NJO: ten years of growing businesses. *USHA is everything we learned.*",
    "NJO: десять лет роста бизнеса. *USHA — всё, чему мы научились.*"
  ],
  "sub": [
    "How NJO built her, in eight short chapters. Scroll, and she will walk you through.",
    "Как NJO создала её, в восьми коротких главах. Листайте, она проведёт."
  ],
  "skip": [
    "Skip the story",
    "Пропустить историю"
  ],
  "note": [
    "A story, not a timeline.",
    "История, а не хронология."
  ],
  "chapterLabel": [
    "Chapter {n}: {title}",
    "Глава {n}: {title}"
  ],
  "books": [
    "Books · Articles · Forums · University theory",
    "Книги · Статьи · Форумы · Теория из учебников"
  ],
  "legend": [
    "years · countries · projects · industries · branches",
    "лет на рынке · страны · проектов · отраслей · филиалов"
  ],
  "beliefs": [
    [
      "Money, not only ideas",
      "Деньги, а не только идеи"
    ],
    [
      "The truth, even when it hurts",
      "Правда, даже если она неприятна"
    ],
    [
      "Test first, spend second",
      "Сначала проверка, потом траты"
    ],
    [
      "A plan is not enough",
      "Плана мало"
    ]
  ],
  "cta": [
    "Try her on your market",
    "Попробуйте её на своём рынке"
  ],
  "chapters": [
    {
      "k": [
        "01 · 2016",
        "01 · 2016"
      ],
      "t": [
        "The first door.",
        "Первая дверь."
      ],
      "b": [
        "Since 2016, NJO has worked inside businesses.",
        "С 2016 года NJO работает внутри бизнеса."
      ]
    },
    {
      "k": [
        "02 · Ten years",
        "02 · Десять лет"
      ],
      "t": [
        "Then more than 700.",
        "Потом больше 700."
      ],
      "b": [
        "22 countries, 55+ industries, 7 branches. From kids' toys and face creams to a whole car and an entire factory.",
        "22 страны, 55+ отраслей, 7 филиалов. От детских игрушек и кремов для лица до целого автомобиля и целого завода."
      ]
    },
    {
      "k": [
        "03 · What we kept seeing",
        "03 · Что мы видели"
      ],
      "t": [
        "The same mistake, again and again.",
        "Одна и та же ошибка. Снова и снова."
      ],
      "b": [
        "Good companies lost money on guesses: the wrong ad, the wrong price, the wrong market.",
        "Хорошие бизнесы теряли деньги на догадках: не та реклама, не та цена, не тот рынок."
      ]
    },
    {
      "k": [
        "04 · The problem",
        "04 · Проблема"
      ],
      "t": [
        "The answers were locked.",
        "Ответы были под замком."
      ],
      "b": [
        "They existed, but lived in a few experts' heads and in algorithms nobody could read.",
        "Они были, но хранились в головах немногих экспертов и в алгоритмах, которые никто не мог прочитать."
      ]
    },
    {
      "k": [
        "05 · How she was taught",
        "05 · Как её учили"
      ],
      "t": [
        "We sat down with 200+ experts.",
        "Мы встретились с 200+ экспертами."
      ],
      "b": [
        "Sellers, founders, media buyers, factory exporters. Their real cases, failures, wins, and the tips they never wrote down.",
        "Селлеры, основатели брендов, медиабайеры, экспортёры заводов. Их реальные кейсы, провалы, победы и советы, которые они нигде не записывали."
      ]
    },
    {
      "k": [
        "06 · USHA wakes up",
        "06 · USHA просыпается"
      ],
      "t": [
        "One mind any business can afford.",
        "Один ум, доступный любому бизнесу."
      ],
      "b": [
        "So we put it all into one mind. She reads 1,240 sources every day, and she still learns every day.",
        "Поэтому мы собрали всё это в один ум. Она читает 1 240 источников каждый день и продолжает учиться каждый день."
      ]
    },
    {
      "k": [
        "07 · Who stands behind her",
        "07 · Кто за ней стоит"
      ],
      "t": [
        "USHA gives the answer. *NJO stands behind it, with our name.*",
        "USHA даёт ответ. *NJO отвечает за него своим именем.*"
      ],
      "b": [
        "Real people at NJO stand behind every answer she gives.",
        "За каждым её ответом стоят живые люди из NJO."
      ]
    },
    {
      "k": [
        "08 · Today",
        "08 · Сегодня"
      ],
      "t": [
        "Today.",
        "Сегодня."
      ],
      "b": [
        "Russia, the Gulf, Africa, Eurasia. USHA is opening to a limited number of companies.",
        "Россия, Персидский залив, Африка, Евразия. USHA открыта для ограниченного числа компаний."
      ]
    }
  ],
  "meta": [
    "",
    "Один из 62 маркетинговых партнёров Meta*"
  ],
  "legal": [
    "",
    "* Meta Platforms Inc. признана экстремистской организацией; её деятельность запрещена на территории РФ."
  ]
};
