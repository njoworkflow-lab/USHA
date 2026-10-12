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
  },
  ru: {
    w_7h: 'Один движок <i>вместо целого отдела.</i>',
    w_7p: 'Отдел — это восемь ставок в штате, плюс аналитики, менеджеры по блогерам и поддержка, и месяцы найма, обучения и управления.',
    w_roles: ['Руководитель маркетинга', 'Маркетолог', 'Таргетолог', 'SMM-специалист', 'Видеомонтажёр', 'ИИ-креатор', 'Дизайнер', 'Веб-дизайнер и разработчик'],
    w_sick: 'Она не уходит на больничный, не говорит «я не в ресурсе» и никогда не уйдёт к конкуренту вместе с историей вашего проекта.',
    c_mk: 'Россия · страны Залива · Египет',
    p_p: 'Core запускает весь движок для одного бренда. Pro добавляет каналы и объём, ответы покупателям, аналитику остатков и дизайн сайта.',
    faq3: ['Какие рынки и площадки?', 'Россия, страны Залива и Египет. Wildberries, Ozon, Яндекс Маркет, ВКонтакте, Telegram, Instagram, Дзен, YouTube, RuTube, TikTok и другие.'],
  },
};

// [en, ru] pairs inside the bundle's data arrays, keyed by the current English.
export const PAIR_PATCH = {
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
  // every month (deck slide 16)
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
  // plans table (deck slide 17)
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
};
