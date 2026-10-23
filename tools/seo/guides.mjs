// Guides: topic pages that search engines and AI assistants can cite.
// Facts come from the main site only; example numbers stay labelled illustrative.
// Each guide has the same slug in every language; build.mjs renders them to
// /guides/<slug>/ (Russian) and /en/guides/<slug>/ (English).

export const GUIDES_HUB = {
  ru: {
    title: 'Гайды USHA: аналитика маркетплейсов, конкуренты, маркетинг',
    description: 'Как читать алгоритмы маркетплейсов, следить за конкурентами и выбирать между агентством, штатом и USHA. Гайды от NJO.',
    h1: 'Гайды',
    lead: 'Как работают алгоритмы, которые решают ваши продажи, и что с ними делать. Коротко, с примерами и следующим ходом.',
    nav: 'Гайды', home: 'USHA', cta: 'Бесплатная неделя', more: 'Читать', related: 'Ещё по теме',
    ill: 'Цифры в примерах иллюстративные, названия брендов скрыты.', faq: 'Вопросы',
    ctaH: 'Первая неделя за наш счёт', ctaP: 'USHA настроится под ваш бизнес и через неделю передаст стратегию, четыре готовых поста и собственный чат. Без оплаты и договора.',
  },
  en: {
    title: 'USHA guides: marketplace analytics, competitors, marketing',
    description: 'How to read marketplace algorithms, watch competitors and choose between an agency, an in-house team and USHA. Guides by NJO.',
    h1: 'Guides',
    lead: 'How the algorithms that decide your sales work, and what to do about them. Short, with examples and the next move.',
    nav: 'Guides', home: 'USHA', cta: 'Start free week', more: 'Read', related: 'Related guides',
    ill: 'Example numbers are illustrative; brand names are anonymised.', faq: 'Questions',
    ctaH: 'Your first week is on us', ctaP: 'USHA calibrates to your business and, after one week, hands over your strategy, four ready posts and your own chat. No payment, no contract.',
  },
};

export const GUIDES = [
  {
    slug: 'marketplace-analytics',
    ru: {
      title: 'Аналитика Wildberries и Ozon, которая заканчивается действием | USHA',
      description: 'Что на самом деле решает продажи на Wildberries, Ozon и Яндекс Маркете, какие сигналы читать каждый день и как превращать их в ход. Гайд от NJO.',
      kicker: 'Гайд · Маркетплейсы',
      h1: 'Аналитика Wildberries и Ozon, которая <i>заканчивается действием</i>',
      lead: 'Отчёт о продажах показывает, что уже случилось. Продажи на маркетплейсе решают четыре алгоритма, и их правила меняются каждую неделю. Аналитика полезна, только когда говорит, что изменилось, почему и что делать сегодня.',
      sections: [
        ['Четыре алгоритма, которые решают продажи', `<p>На маркетплейсе вы продаёте не покупателю напрямую, а через четыре системы:</p><ul><li><b>Поиск</b> решает, на какой странице окажется карточка: на первой или на девятой.</li><li><b>Лента и рекомендации</b> решают, кто вообще увидит товар.</li><li><b>Аукцион рекламы</b> решает, сколько стоит каждый клик и каждый покупатель.</li><li><b>Покупатель</b> за семь секунд решает, доверять ли карточке.</li></ul><p>Публиковать больше не помогает. Помогает читать эти системы каждый день и отвечать на их изменения раньше конкурентов.</p>`],
        ['Что читать каждый день', `<p>USHA каждый день читает 1 240 источников вокруг бизнеса. Для селлера это прежде всего:</p><ul><li>цены, акции и наборы конкурентов на Wildberries, Ozon и Яндекс Маркете;</li><li>позиции ваших карточек и рост поисковых запросов;</li><li>названия, первые изображения и структуру карточек лидеров;</li><li>отзывы: ваши и конкурентов, с повторяющимися жалобами и похвалами;</li><li>рекламу и то, в какие часы на самом деле приходит спрос.</li></ul>`],
        ['Как выглядит находка', `<p>Каждый сигнал приходит в одном формате: что изменилось, почему это важно и один рекомендованный ход.</p><table><tr><th>Сигнал</th><th>Почему важно</th><th>Ход</th></tr><tr><td>Конкурент A снизил цену на 18% в 02:40</td><td>Вы узнаёте в 08:02, а не по падающим продажам</td><td>Ответить набором и сохранить маржу</td></tr><tr><td>Запрос «пауэрбанк 20000» вырос на 34% за неделю</td><td>Карточка на 47-м месте: в названии нет ёмкости</td><td>Исправленное название готово, нужно утвердить</td></tr><tr><td>«Упаковка» в отзывах × 212 за 30 дней</td><td>Жалобы на товары конкурентов, не на ваши</td><td>Построить кампанию месяца вокруг вашей упаковки</td></tr><tr><td>Спрос сместился на вечер</td><td>Ваша реклама всё ещё крутится утром</td><td>Перенести 70% бюджета на 19:00–02:00</td></tr></table>`],
        ['От находки к работе', `<p>Находка без исполнения остаётся заметкой. Поэтому USHA сразу готовит то, что из неё следует: новое название и изображения карточки, публикации, сторис, рекламные креативы. Посты, ответы и отчёты в рамках утверждённого плана идут автоматически. Стратегию, бюджет и условия акций утверждаете вы.</p>`],
        ['Сколько маркетплейсов и конкурентов', `<ul><li><b>USHA Core</b>: 1 маркетплейс, до 5 конкурентов под наблюдением, 1 рекламная площадка.</li><li><b>USHA Pro</b>: до 3 маркетплейсов, до 10 конкурентов, ответы покупателям и аналитика остатков.</li><li><b>USHA Enterprise</b>: все восемь направлений, объём согласуется индивидуально.</li></ul><p>«До» означает максимум в месяц; точный план согласуется на старте. Рекламные бюджеты оплачиваются отдельно.</p>`],
      ],
      faq: [
        ['С какими маркетплейсами работает USHA?', 'Wildberries, Ozon и Яндекс Маркет, а также VK, Telegram, Instagram, Дзен, YouTube, RuTube, TikTok и другие каналы. Рынки: Россия, страны GCC и Египет.'],
        ['USHA меняет карточки без меня?', 'Нет. Она готовит исправленное название и изображения, а публикует в рамках утверждённого вами плана. Стратегия, бюджет и условия акций всегда требуют вашего «да».'],
        ['Как часто приходят находки?', 'USHA читает рынок каждый день. Находка приходит, когда что-то действительно сдвинулось, вместе с её следующим ходом.'],
        ['Нужно ли подключать новую платформу?', 'Нет. USHA работает в вашем мессенджере 24/7.'],
      ],
      related: ['competitor-monitoring', 'agency-vs-in-house-vs-usha'],
    },
    en: {
      title: 'Wildberries and Ozon analytics that ends in a move | USHA',
      description: 'What really decides sales on Wildberries, Ozon and Yandex Market, which signals to read every day and how to turn them into a move. A guide by NJO.',
      kicker: 'Guide · Marketplaces',
      h1: 'Marketplace analytics that <i>ends in a move</i>',
      lead: 'A sales report shows what already happened. On a marketplace, four algorithms decide your sales, and their rules change every week. Analytics is only useful when it says what changed, why, and what to do today.',
      sections: [
        ['Four algorithms decide your sales', `<p>On a marketplace you do not sell to the buyer directly. You sell through four systems:</p><ul><li><b>Search</b> decides whether your card is on page 1 or page 9.</li><li><b>The feed and recommendations</b> decide who sees the product at all.</li><li><b>The ad auction</b> decides what each click and each customer costs.</li><li><b>The buyer</b> decides in seven seconds whether to trust the card.</li></ul><p>Posting more will not beat them. Reading them every day, and answering their changes before competitors do, will.</p>`],
        ['What to read every day', `<p>Every day USHA reads 1,240 sources around a business. For a marketplace seller that means:</p><ul><li>competitors' prices, promotions and bundles on Wildberries, Ozon and Yandex Market;</li><li>your cards' positions and which searches are growing;</li><li>the titles, first images and structure of the leaders' cards;</li><li>reviews, yours and competitors', with repeated complaints and praise;</li><li>ads, and the hours when demand really arrives.</li></ul>`],
        ['What a finding looks like', `<p>Every signal arrives in the same shape: what changed, why it matters, and one recommended move.</p><table><tr><th>Signal</th><th>Why it matters</th><th>Move</th></tr><tr><td>Competitor A cut the price 18% at 02:40</td><td>You hear it at 08:02, not from falling sales</td><td>Answer with a bundle and keep your margin</td></tr><tr><td>“Power bank 20000” searches up 34% in a week</td><td>Your card ranks 47th: the title misses the capacity</td><td>The fixed title is ready to approve</td></tr><tr><td>“Packaging” × 212 in reviews over 30 days</td><td>Complaints are on competitors' products, not yours</td><td>Build this month's campaign around your packaging</td></tr><tr><td>Demand moved to the evening</td><td>Your ads still run in the morning</td><td>Move 70% of the budget to 19:00–02:00</td></tr></table>`],
        ['From finding to work', `<p>A finding that nobody acts on is just a note. So USHA prepares what follows from it: a new card title and images, posts, stories and ad creatives. Posts, replies and reports under the approved plan run automatically. Strategy, budget and promotion terms are yours to approve.</p>`],
        ['How many marketplaces and competitors', `<ul><li><b>USHA Core</b>: 1 marketplace, up to 5 competitors tracked, 1 ad platform.</li><li><b>USHA Pro</b>: up to 3 marketplaces, up to 10 competitors, customer replies and stock intelligence.</li><li><b>USHA Enterprise</b>: all eight areas, scope agreed individually.</li></ul><p>“Up to” is a monthly maximum; the exact plan is agreed at the start. Advertising budgets are paid separately.</p>`],
      ],
      faq: [
        ['Which marketplaces does USHA work with?', 'Wildberries, Ozon and Yandex Market, plus VK, Telegram, Instagram, Dzen, YouTube, RuTube, TikTok and other channels. Markets: Russia, the GCC and Egypt.'],
        ['Does USHA change my cards without me?', 'No. She prepares the fixed title and images and publishes within the plan you approve. Strategy, budget and promotion terms always need your “yes”.'],
        ['How often do findings arrive?', 'USHA reads the market every day. A finding arrives when something has really moved, together with her next move.'],
        ['Do I need a new platform?', 'No. USHA works in your messenger, 24/7.'],
      ],
      related: ['competitor-monitoring', 'agency-vs-in-house-vs-usha'],
    },
  },
  {
    slug: 'competitor-monitoring',
    ru: {
      title: 'Мониторинг конкурентов каждый день, со следующим ходом | USHA',
      description: 'Как следить за ценами, акциями, карточками, отзывами и рекламой конкурентов и понимать, почему лидеры выигрывают. Гайд от NJO.',
      kicker: 'Гайд · Конкуренты',
      h1: 'Мониторинг конкурентов: <i>каждый день</i>, а не раз в квартал',
      lead: 'Конкурент снижает цену ночью. Если вы узнаёте об этом из еженедельного отчёта или по падающим продажам, ход уже сделан за вас. Мониторинг должен работать каждый день и сразу объяснять, что делать.',
      sections: [
        ['Почему отчёт раз в неделю опаздывает', `<p>Алгоритмы маркетплейсов и рекламы реагируют за часы. Цена, набор или новая первая картинка у конкурента меняют вашу позицию до того, как кто-то в команде откроет таблицу. Агентство следит по запросу, штатная команда, когда есть время. Нужна система, которая смотрит каждый день.</p>`],
        ['За чем следить', `<ul><li><b>Цены и акции</b>: снижения, наборы, скидки к праздникам.</li><li><b>Карточки</b>: названия, первые изображения, структура, новые позиции в ассортименте.</li><li><b>Отзывы</b>: что покупатели хвалят и на что жалуются у конкурентов.</li><li><b>Реклама</b>: новые кампании, обещания, площадки.</li><li><b>Поиск</b>: по каким запросам конкуренты растут, а вы нет.</li></ul>`],
        ['Разбирать, почему лидеры выигрывают', `<p>Важно не только что сделал конкурент, но и почему это сработало. Примеры находок USHA:</p><ul><li>Энергетик потерял 3 позиции за ночь. Новый лидер показывает банку холодной, с каплями, на первом кадре. Ход: 6 изображений карточки в этой логике.</li><li>Два бренда перевели сыворотки в наборы, а отзывы о вашей хвалят текстуру 41 раз. Ход: не снижать цену, показать текстуру в коротких видео.</li><li>Конкурент обещает «сдачу в 2026», а запросы семейных планировок выросли на 18%. Ход: серия про трёхкомнатные планировки, а не скидка.</li></ul>`],
        ['Сколько конкурентов отслеживать', `<p>В USHA Core под наблюдением до 5 конкурентов, в USHA Pro до 10, в Enterprise объём согласуется индивидуально. Достаточно прямых соперников по полке и одного-двух лидеров категории, у которых стоит учиться.</p>`],
        ['Кто принимает решения', `<p>USHA предлагает ход и готовит материалы. Ответ на снижение цены, бюджет и условия акций утверждаете вы. Сделки и платежи никогда не проходят без вас.</p>`],
      ],
      faq: [
        ['Это парсер цен?', 'Нет. Цены лишь один из сигналов. USHA сопоставляет цены, карточки, отзывы, поиск и рекламу и объясняет, почему что-то изменилось и что с этим делать.'],
        ['Когда я узнаю о действии конкурента?', 'В день, когда оно произошло. В примере выше снижение цены в 02:40 приходит владельцу в 08:02 вместе с готовым ответом.'],
        ['Можно ли следить за конкурентами вне маркетплейсов?', 'Да: соцсети, реклама и поиск тоже входят в 1 240 источников, которые USHA читает каждый день.'],
      ],
      related: ['marketplace-analytics', 'agency-vs-in-house-vs-usha'],
    },
    en: {
      title: 'Competitor monitoring every day, with the next move | USHA',
      description: 'How to watch competitors’ prices, promotions, cards, reviews and ads, and understand why the leaders win. A guide by NJO.',
      kicker: 'Guide · Competitors',
      h1: 'Competitor monitoring: <i>every day</i>, not every quarter',
      lead: 'A competitor cuts the price overnight. If you learn it from a weekly report or from falling sales, the move has already been made for you. Monitoring has to run every day and explain what to do straight away.',
      sections: [
        ['Why a weekly report is late', `<p>Marketplace and ad algorithms react within hours. A competitor’s price, bundle or new first image changes your position before anyone on the team opens a spreadsheet. An agency watches on request; an in-house team watches when there is time. You need a system that looks every day.</p>`],
        ['What to watch', `<ul><li><b>Prices and promotions</b>: cuts, bundles, holiday discounts.</li><li><b>Cards</b>: titles, first images, structure, new items in the range.</li><li><b>Reviews</b>: what buyers praise and complain about on competitors’ products.</li><li><b>Ads</b>: new campaigns, promises, platforms.</li><li><b>Search</b>: which searches competitors are growing in, and you are not.</li></ul>`],
        ['Decode why leaders win', `<p>What a competitor did matters less than why it worked. Examples of USHA findings:</p><ul><li>An energy drink lost 3 positions overnight. The new leader shows the can cold, with drops, in the first frame. Move: 6 card images in that logic.</li><li>Two brands moved serums into bundles, and your reviews praise the texture 41 times. Move: keep the price and lead with texture in short videos.</li><li>A developer promises “ready in 2026” while searches for family layouts are up 18%. Move: a three-bedroom layout series, not a discount.</li></ul>`],
        ['How many competitors to track', `<p>USHA Core tracks up to 5 competitors, USHA Pro up to 10, and Enterprise scope is agreed individually. Your direct shelf rivals plus one or two category leaders worth learning from are usually enough.</p>`],
        ['Who decides', `<p>USHA proposes the move and prepares the materials. The response to a price cut, the budget and promotion terms are yours to approve. Deals and payments never go through without you.</p>`],
      ],
      faq: [
        ['Is this a price scraper?', 'No. Price is one signal. USHA connects prices, cards, reviews, search and ads, and explains why something changed and what to do about it.'],
        ['When do I hear about a competitor’s move?', 'The day it happens. In the example above, a price cut at 02:40 reaches the owner at 08:02 with a ready answer.'],
        ['Can I monitor competitors outside marketplaces?', 'Yes: social media, ads and search are part of the 1,240 sources USHA reads every day.'],
      ],
      related: ['marketplace-analytics', 'agency-vs-in-house-vs-usha'],
    },
  },
  {
    slug: 'agency-vs-in-house-vs-usha',
    compare: true,
    ru: {
      title: 'Агентство, штатная команда, ИИ-инструменты или USHA: сравнение | USHA',
      description: 'Честное сравнение четырёх способов вести маркетинг бренда: по знанию бизнеса, скорости, качеству фактов и доступности. Гайд от NJO.',
      kicker: 'Гайд · Сравнение',
      h1: 'Агентство, штат или USHA: <i>что выбрать</i>',
      lead: 'У всех одни и те же модели ИИ. Разница в том, кто знает ваш бизнес, кто следит за рынком каждый день и кто доводит работу до результата. Ниже сравнение по семи пунктам.',
      sections: [
        ['Сравнение по семи пунктам', '{{compare}}'],
        ['Семь ролей или один движок', `<p>Чтобы закрыть ту же работу в штате, нужно минимум семь человек: руководитель маркетинга, маркетолог, специалист по рекламе, SMM-специалист, видеомонтажёр, ИИ-креатор и дизайнер. Это месяцы найма, обучения и управления, плюс отпуска и больничные. USHA стартует за неделю.</p>`],
        ['Когда что подходит', `<ul><li><b>ИИ-инструменты</b> хороши для разовых задач, когда вы сами знаете, что спросить, и готовы проверять факты.</li><li><b>Агентство</b> подходит для крупных кампаний с отдельным бюджетом, но работает через менеджера и по запросу.</li><li><b>Штатная команда</b> знает бизнес изнутри, пока люди не ушли, и зависит от найма.</li><li><b>USHA</b> подходит, когда нужно каждый день читать рынок и сразу делать работу: от анализа до публикации и замеров.</li></ul>`],
        ['Кто стоит за USHA', `<p>USHA создала NJO (с 2016 года, Россия · GCC · Египет): стратеги с методиками, отточенными за десять с лишним лет, арт-директора, задавшие её визуальные стандарты, аналитики, научившие её читать рынки, и инженеры, которые каждый месяц делают её умнее. Каждый результат проверяется по стандартам качества NJO.</p>`],
      ],
      faq: [
        ['USHA заменяет агентство полностью?', 'Она закрывает аналитику, стратегию, контент, видео, дизайн, продвижение и отчёты в рамках плана. Рекламные бюджеты, гонорары блогеров и товары для коллабораций оплачиваются отдельно.'],
        ['А если у нас уже есть маркетолог?', 'USHA усиливает команду: берёт ежедневное чтение рынка и производство, а решения остаются за вами.'],
        ['Факты не выдуманы?', 'USHA опирается на ваши данные и проверяемые источники, а каждый результат проходит проверку по стандартам NJO.'],
      ],
      related: ['marketplace-analytics', 'competitor-monitoring'],
    },
    en: {
      title: 'Agency, in-house team, AI tools or USHA: a comparison | USHA',
      description: 'A fair comparison of four ways to run a brand’s marketing: business knowledge, speed, factual accuracy and availability. A guide by NJO.',
      kicker: 'Guide · Comparison',
      h1: 'Agency, in-house or USHA: <i>which to choose</i>',
      lead: 'Everyone has the same AI models. The difference is who knows your business, who watches the market every day and who carries the work through to a result. Here is the comparison on seven points.',
      sections: [
        ['Seven-point comparison', '{{compare}}'],
        ['Seven hires or one engine', `<p>Covering the same work in-house takes at least seven people: a head of marketing, a marketer, a paid media specialist, a social media manager, a video editor, an AI creator and a designer. That is months of hiring, training and managing, plus holidays and sick leave. USHA starts in a week.</p>`],
        ['When each one fits', `<ul><li><b>AI tools</b> suit one-off tasks when you know exactly what to ask and are ready to check the facts.</li><li><b>An agency</b> suits large campaigns with a separate budget, but works through a manager and on request.</li><li><b>An in-house team</b> knows the business from the inside, until people leave, and depends on hiring.</li><li><b>USHA</b> fits when the market needs reading every day and the work needs doing straight away: research, publishing and measuring.</li></ul>`],
        ['Who is behind USHA', `<p>USHA is built by NJO (since 2016; Russia · GCC · Egypt): strategists with over ten years of methods, art directors who set her visual standards, analysts who taught her to read markets, and engineers who make her smarter every month. Every output is checked against NJO’s quality standards.</p>`],
      ],
      faq: [
        ['Does USHA fully replace an agency?', 'She covers intelligence, strategy, content, video, design, promotion and reporting within the plan. Advertising budgets, creator fees and products for collaborations are paid separately.'],
        ['What if we already have a marketer?', 'USHA strengthens the team: she takes the daily market reading and production, and the decisions stay with you.'],
        ['Are the facts made up?', 'USHA works from your data and checkable sources, and every output is checked against NJO’s standards.'],
      ],
      related: ['marketplace-analytics', 'competitor-monitoring'],
    },
  },
];
