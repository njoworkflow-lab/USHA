// BRAINS: the 25 consultant profiles (usha-brain control-room/plans/
// brains-consultant-specs.md) and the lists the marketplace filters on.
//
// ONE FILE FOR THE OWNER'S TEAM. No real person is named here. Every profile
// is a role spec until a real consultant is matched, signed and validated.
// When that happens, fill the profile's `consultant` block and nothing else:
//   name       the consultant's name as they consented to show it
//   photo      a path under /media/brains/ (only with written consent)
//   linkedin   their public LinkedIn URL (shown as a plain text link)
//   version    the brain's version, e.g. '1.0'
//   validated  the validation date, ISO 'YYYY-MM-DD'
//   checked    credentials the team verified (shows "Checked by NJO")
// A profile with a name switches from "Profile verification in progress" to
// "Validated by the consultant · v{version}". Prices come from the formula in
// brains-page.md 5.2; if a matched consultant's years or coverage differ,
// recompute and update `price`, `years` and `cov`.

const none = () => ({ name: null, photo: null, linkedin: null, version: null, validated: null, checked: [] });

// ---------- lists (filter values, in the order the filters show them) ----------
export const B_FIELDS = {
  finance: ['Finance', 'المالية', 'Финансы'],
  feasibility: ['Feasibility studies', 'دراسات الجدوى', 'ТЭО и бизнес-планы'],
  valuation: ['Business valuation', 'تقييم الأعمال', 'Оценка бизнеса'],
  pricing: ['Pricing', 'التسعير', 'Ценообразование'],
  market: ['Market analysis', 'تحليل السوق', 'Анализ рынка'],
  hr: ['HR and organisation', 'الموارد البشرية والتنظيم', 'HR и оргструктура'],
  procurement: ['Procurement', 'المشتريات', 'Закупки'],
  recruitment: ['Recruitment', 'التوظيف واستقطاب الكفاءات', 'Подбор персонала'],
  startup: ['Start-up and investment evaluation', 'تقييم الشركات الناشئة والاستثمارات', 'Оценка стартапов и инвестиций'],
  supply: ['Supply chain and operations', 'سلاسل الإمداد والعمليات', 'Цепи поставок и операции'],
  strategy: ['Corporate strategy', 'الاستراتيجية المؤسسية', 'Корпоративная стратегия'],
  sales: ['Sales and distribution', 'المبيعات والتوزيع', 'Продажи и дистрибуция'],
  export: ['Export and market entry', 'التصدير ودخول الأسواق', 'Экспорт и выход на рынки'],
  franchising: ['Franchising', 'الامتياز التجاري', 'Франчайзинг'],
  manufacturing: ['Manufacturing and lean', 'التصنيع والتشغيل الرشيق', 'Производство и lean'],
  family: ['Family business governance', 'حوكمة الشركات العائلية', 'Управление семейным бизнесом'],
  fundraising: ['Fundraising and investor readiness', 'جذب التمويل والجاهزية للمستثمرين', 'Привлечение инвестиций'],
  cx: ['Customer experience', 'تجربة العملاء', 'Клиентский опыт'],
  risk: ['Risk and internal controls', 'المخاطر والرقابة الداخلية', 'Риски и внутренний контроль'],
};
export const B_INDUSTRIES = {
  fmcg: ['FMCG', 'السلع الاستهلاكية سريعة الدوران', 'FMCG'],
  retail: ['Retail and e-commerce', 'التجزئة والتجارة الإلكترونية', 'Ритейл и e-commerce'],
  marketplaces: ['Marketplaces', 'منصات البيع', 'Маркетплейсы'],
  fnb: ['F&B and hospitality', 'الأغذية والمشروبات والضيافة', 'Общепит и гостеприимство'],
  realestate: ['Real estate and construction', 'العقارات والإنشاءات', 'Недвижимость и стройка'],
  industrial: ['Industrial manufacturing', 'التصنيع الصناعي', 'Промышленное производство'],
  tech: ['Technology and SaaS', 'التقنية وSaaS', 'Технологии и SaaS'],
  finserv: ['Financial services', 'الخدمات المالية', 'Финансовые услуги'],
  logistics: ['Logistics', 'الخدمات اللوجستية', 'Логистика'],
  energy: ['Energy', 'الطاقة', 'Энергетика'],
  auto: ['Automotive', 'السيارات', 'Автомобили'],
  fashion: ['Fashion and luxury', 'الأزياء والسلع الفاخرة', 'Мода и люкс'],
  education: ['Education', 'التعليم', 'Образование'],
  agri: ['Agri-food', 'الصناعات الغذائية والزراعية', 'Агропищевой сектор'],
  telecom: ['Telecom', 'الاتصالات', 'Телеком'],
  family: ['Family conglomerates', 'المجموعات العائلية', 'Семейные холдинги'],
  services: ['Professional services', 'الخدمات المهنية', 'Профессиональные услуги'],
};
export const B_MARKETS = {
  gcc: ['GCC', 'دول الخليج', 'Страны Залива'],
  egypt: ['Egypt', 'مصر', 'Египет'],
  levant: ['Levant', 'المشرق العربي', 'Левант'],
  maghreb: ['Maghreb', 'المغرب العربي', 'Магриб'],
  russia: ['Russia and CIS', 'روسيا ورابطة الدول المستقلة', 'Россия и СНГ'],
  turkiye: ['Türkiye', 'تركيا', 'Турция'],
  europe: ['Europe', 'أوروبا', 'Европа'],
  usa: ['USA and Canada', 'الولايات المتحدة وكندا', 'США и Канада'],
  india: ['India', 'الهند', 'Индия'],
  sea: ['Southeast Asia', 'جنوب شرق آسيا', 'Юго-Восточная Азия'],
  china: ['China', 'الصين', 'Китай'],
};
export const B_LANGS = {
  ar: ['Arabic', 'العربية', 'Арабский'],
  en: ['English', 'الإنجليزية', 'Английский'],
  fr: ['French', 'الفرنسية', 'Французский'],
  ru: ['Russian', 'الروسية', 'Русский'],
  de: ['German', 'الألمانية', 'Немецкий'],
  tr: ['Turkish', 'التركية', 'Турецкий'],
  hi: ['Hindi', 'الهندية', 'Хинди'],
  zh: ['Mandarin', 'الصينية', 'Китайский'],
  es: ['Spanish', 'الإسبانية', 'Испанский'],
  ms: ['Malay', 'الملايوية', 'Малайский'],
};
// the country a consultant practises in sets the market-rate factor
export const B_HOME = {
  EG: ['Egypt', 'مصر', 'Египет'], GCC: ['GCC', 'الخليج', 'страны Залива'], JO: ['Jordan', 'الأردن', 'Иордания'],
  MA: ['Morocco', 'المغرب', 'Марокко'], TN: ['Tunisia', 'تونس', 'Тунис'], LB: ['Lebanon', 'لبنان', 'Ливан'],
  US: ['USA', 'الولايات المتحدة', 'США'], UK: ['United Kingdom', 'المملكة المتحدة', 'Великобритания'],
  DE: ['Germany', 'ألمانيا', 'Германия'], IN: ['India', 'الهند', 'Индия'], SG: ['Singapore', 'سنغافورة', 'Сингапур'], FR: ['France', 'فرنسا', 'Франция'],
};
export const B_YEARS = [[15, 19, '15–19'], [20, 24, '20–24'], [25, 29, '25–29'], [30, 99, '30+']];
// the five public price bands (brains-page.md 5.3)
export const B_BANDS = [
  { id: 'focus', min: 75, max: 249, n: ['Focus', 'تركيز', 'Фокус'], line: ['A seasoned specialist for one market and one question.', 'خبير متمرّس لسوق واحد وسؤال واحد.', 'Опытный специалист для одного рынка и одной задачи.'] },
  { id: 'senior', min: 250, max: 599, n: ['Senior', 'خبير أول', 'Старший'], line: ['Two decades of practice, often across a region.', 'عقدان من الممارسة، وغالبًا على مستوى منطقة كاملة.', 'Двадцать лет практики, часто по всему региону.'] },
  { id: 'principal', min: 600, max: 1199, n: ['Principal', 'خبير رئيسي', 'Ведущий'], line: ['The leader who ran the department in markets like yours.', 'القائد الذي أدار هذه الإدارة في أسواق تشبه سوقك.', 'Руководитель, который вёл это направление на похожих рынках.'] },
  { id: 'partner', min: 1200, max: 1999, n: ['Partner', 'شريك', 'Партнёр'], line: ['Advisory-partner judgement from the world’s most expensive markets.', 'حُكم شريك استشاري من أغلى الأسواق في العالم.', 'Уровень партнёра консалтинга с самых дорогих рынков мира.'] },
  { id: 'board', min: 2000, max: 4000, n: ['Board', 'مستوى مجلس الإدارة', 'Уровень совета директоров'], line: ['Decades of decisions at board level.', 'عقودٌ من القرارات على مستوى مجالس الإدارة.', 'Десятилетия решений на уровне совета директоров.'] },
];

// ---------- the 25 profiles ----------
// codes: the markets line on the card (Latin short codes on every page)
// groups: the market filter groups; cov: 1 one market, 2 two or three, 3 regional or global
// say: the brain's illustrative answer (only where the page already shows it)
export const BRAINS = [
  {
    id: 'EG-01', slug: 'fmcg-pricing-revenue-lead-egypt', home: 'EG', years: 22, price: 150, cov: 2,
    fields: ['pricing', 'sales'], ind: ['fmcg'], groups: ['egypt', 'gcc'], codes: 'EG · KSA', langs: ['ar', 'en'], say: 1,
    consultant: none(),
    en: {
      title: 'FMCG pricing and revenue-management lead', former: 'Head of Revenue Growth Management', seniority: 'Director',
      industries: 'FMCG: snacks, beverages, dairy, home care',
      past: ['Head of Revenue Growth Management', 'Pricing Director', 'Trade Marketing Director', 'Commercial Finance Manager, multinational FMCG in Egypt'],
      projects: ['Price-pack architecture resets on portfolios of 50–200 SKUs', 'Pricing through the EGP devaluations of 2016 and 2022–2024', 'Trade-terms renegotiation with 100+ wholesalers and the main modern-trade chains', 'Promotion-ROI programmes on brands of EGP 200M–1B+ in sales'],
      req: 'Bachelor’s in commerce, economics or engineering. MBA preferred. Formal revenue-growth-management training inside a multinational. CMA or CIMA a plus.',
      ideal: 'Egyptian and Saudi FMCG brands and distributors facing a cost shock; challenger brands entering modern trade.',
      qs: ['Costs rose 18%. Do I raise the price, cut the grams, or both, and in what order across my 14 SKUs?', 'Carrefour wants four more points of margin. What do I give, and what do I take back?', 'Which price points in Egypt can’t I cross without losing a third of my volume?'],
    },
    ar: {
      title: 'قائد التسعير وإدارة الإيرادات في السلع الاستهلاكية', former: 'رئيس إدارة نمو الإيرادات', seniority: 'مدير',
      industries: 'السلع الاستهلاكية: الوجبات الخفيفة والمشروبات والألبان ومنتجات العناية بالمنزل',
      past: ['رئيس إدارة نمو الإيرادات', 'مدير التسعير', 'مدير التسويق التجاري', 'مدير المالية التجارية في شركة سلع استهلاكية متعددة الجنسيات في مصر'],
      projects: ['إعادة بناء هيكل الأسعار والعبوات لمحافظ من 50 إلى 200 صنف', 'التسعير خلال تخفيضات الجنيه في 2016 و2022–2024', 'إعادة التفاوض على الشروط التجارية مع أكثر من 100 تاجر جملة وسلاسل التجزئة الحديثة الكبرى', 'برامج عائد العروض الترويجية لعلامات مبيعاتها من 200 مليون إلى أكثر من مليار جنيه'],
      req: 'بكالوريوس في التجارة أو الاقتصاد أو الهندسة. ويُفضَّل ماجستير إدارة الأعمال. تدريب رسمي على إدارة نمو الإيرادات داخل شركة متعددة الجنسيات. وشهادة CMA أو CIMA ميزة إضافية.',
      ideal: 'علامات السلع الاستهلاكية والموزعون في مصر والسعودية أمام صدمة تكاليف، والعلامات الصاعدة التي تدخل التجزئة الحديثة.',
      qs: ['ارتفعت التكاليف 18%. هل أرفع السعر، أم أقلّل الغرامات، أم الاثنين، وبأي ترتيب على أصنافي الأربعة عشر؟', 'كارفور تطلب أربع نقاط هامش إضافية. ماذا أعطي، وماذا أسترد في المقابل؟', 'ما نقاط السعر في مصر التي لا يمكنني تجاوزها دون أن أخسر ثلث حجم مبيعاتي؟'],
    },
    ru: {
      title: 'Руководитель ценообразования и revenue management в FMCG', former: 'Руководитель Revenue Growth Management', seniority: 'Директор',
      industries: 'FMCG: снеки, напитки, молочка, бытовая химия',
      past: ['Руководитель Revenue Growth Management', 'Директор по ценообразованию', 'Директор по трейд-маркетингу', 'Менеджер по коммерческим финансам в международной FMCG-компании в Египте'],
      projects: ['Пересборка ценовой и пакетной архитектуры портфелей на 50–200 SKU', 'Ценообразование во время девальваций фунта в 2016 и 2022–2024 годах', 'Пересмотр торговых условий с 100+ оптовиками и крупнейшими сетями', 'Программы окупаемости промо для брендов с продажами от 200 млн до 1 млрд+ фунтов'],
      req: 'Высшее образование в коммерции, экономике или инженерии. Предпочтительно MBA. Формальное обучение revenue growth management в международной компании. CMA или CIMA будут плюсом.',
      ideal: 'FMCG-бренды и дистрибьюторы Египта и Саудовской Аравии, которых накрыл рост издержек; бренды-челленджеры, которые заходят в сети.',
      qs: ['Себестоимость выросла на 18%. Поднять цену, уменьшить граммовку или и то и другое, и в каком порядке по моим 14 SKU?', 'Carrefour хочет ещё четыре пункта маржи. Что отдать и что забрать взамен?', 'Какие ценовые пороги в Египте нельзя переходить, чтобы не потерять треть объёма?'],
    },
  },
  {
    id: 'EG-02', slug: 'feasibility-director-industrial-agrifood-egypt', home: 'EG', years: 28, price: 250, cov: 3,
    fields: ['feasibility', 'finance'], ind: ['agri', 'industrial'], groups: ['egypt', 'gcc'], codes: 'EG · KSA · KE · ET', langs: ['ar', 'en'],
    consultant: none(),
    en: {
      title: 'Feasibility studies director, industrial and agri-food projects', former: 'Director of Feasibility and Project Finance', seniority: 'Director or partner',
      industries: 'Food processing, agri-food, building materials, packaging, light manufacturing',
      past: ['Director of Feasibility and Project Finance', 'Senior Manager, advisory practice of a Big Four firm in Cairo', 'Head of Investment Studies at an industrial group', 'Credit Analyst at a development bank'],
      projects: ['80+ feasibility studies, capex from EGP 50M to USD 150M', 'Plants in the Suez Canal Economic Zone, 10th of Ramadan and Sadat City', 'Studies for bank loans and development-finance funding', 'Post-mortems of projects that missed their ramp-up'],
      req: 'BSc in engineering or commerce. MBA or MSc in finance. CFA or CMA preferred. Bank-ready studies for Egyptian banks and development lenders (EBRD, IFC, AfDB).',
      ideal: 'Owners preparing a bank or investor submission; family groups weighing a new plant; Gulf investors looking at Egyptian manufacturing.',
      qs: ['Is a 40,000-tonne frozen-vegetables plant viable at today’s EGP rate, and what kills it?', 'The bank cut my ramp-up assumption. Which other assumptions will they challenge next?', 'Local line or imported line: what does each do to my payback?'],
    },
    ar: {
      title: 'مدير دراسات الجدوى للمشاريع الصناعية والغذائية', former: 'مدير دراسات الجدوى وتمويل المشاريع', seniority: 'مدير أو شريك',
      industries: 'تصنيع الأغذية والصناعات الزراعية ومواد البناء والتعبئة والتغليف والصناعات الخفيفة',
      past: ['مدير دراسات الجدوى وتمويل المشاريع', 'مدير أول في الممارسة الاستشارية لإحدى شركات Big Four في القاهرة', 'رئيس دراسات الاستثمار في مجموعة صناعية', 'محلل ائتمان في بنك تنمية'],
      projects: ['أكثر من 80 دراسة جدوى، باستثمارات من 50 مليون جنيه إلى 150 مليون دولار', 'مصانع في المنطقة الاقتصادية لقناة السويس والعاشر من رمضان ومدينة السادات', 'دراسات لقروض بنكية ولتمويل من مؤسسات التنمية', 'مراجعات لاحقة لمشاريع لم تبلغ مستوى التشغيل المخطط'],
      req: 'بكالوريوس في الهندسة أو التجارة. ماجستير إدارة أعمال أو ماجستير في المالية. ويُفضَّل CFA أو CMA. خبرة في دراسات جاهزة للبنوك المصرية ومؤسسات التمويل التنموي (EBRD وIFC وAfDB).',
      ideal: 'أصحاب الأعمال الذين يجهّزون ملفًا لبنك أو مستثمر، والمجموعات العائلية التي تدرس مصنعًا جديدًا، والمستثمرون الخليجيون المهتمون بالتصنيع في مصر.',
      qs: ['هل مصنع خضروات مجمّدة بطاقة 40,000 طن مجدٍ بسعر الجنيه اليوم، وما الذي يقتله؟', 'خفّض البنك افتراض مرحلة الانطلاق. ما الافتراضات التالية التي سيطعن فيها؟', 'خط إنتاج محلي أم مستورد: ماذا يفعل كلٌّ منهما بفترة استرداد الاستثمار؟'],
    },
    ru: {
      title: 'Директор по ТЭО промышленных и агропищевых проектов', former: 'Директор по ТЭО и проектному финансированию', seniority: 'Директор или партнёр',
      industries: 'Пищевая переработка, агропищевой сектор, стройматериалы, упаковка, лёгкая промышленность',
      past: ['Директор по ТЭО и проектному финансированию', 'Старший менеджер консалтинговой практики компании «большой четвёрки» в Каире', 'Руководитель инвестиционных исследований промышленной группы', 'Кредитный аналитик банка развития'],
      projects: ['80+ ТЭО с капзатратами от 50 млн фунтов до 150 млн $', 'Заводы в экономической зоне Суэцкого канала, 10-м Рамадане и Садат-Сити', 'ТЭО для банковских кредитов и финансирования от институтов развития', 'Разборы проектов, которые не вышли на плановую мощность'],
      req: 'Высшее инженерное или экономическое образование. MBA или магистратура по финансам. Предпочтительно CFA или CMA. ТЭО, которые принимают египетские банки и институты развития (EBRD, IFC, AfDB).',
      ideal: 'Владельцы, которые готовят пакет для банка или инвестора; семейные группы, которые думают о новом заводе; инвесторы из стран Залива, которые смотрят на производство в Египте.',
      qs: ['Окупится ли завод замороженных овощей на 40 000 тонн при сегодняшнем курсе фунта, и что его убьёт?', 'Банк урезал допущение по выходу на мощность. Какие допущения он оспорит следующими?', 'Местная линия или импортная: что каждая делает со сроком окупаемости?'],
    },
  },
  {
    id: 'EG-03', slug: 'sme-turnaround-cfo-egypt', home: 'EG', years: 25, price: 150, cov: 1,
    fields: ['finance', 'risk'], ind: ['retail', 'fmcg', 'family'], groups: ['egypt'], codes: 'EG', langs: ['ar', 'en'],
    consultant: none(),
    en: {
      title: 'SME finance and turnaround CFO', former: 'CFO of a mid-size distributor', seniority: 'C-level',
      industries: 'Retail, distribution, FMCG, family-owned trading companies',
      past: ['CFO of a mid-size distributor or retailer', 'Finance Director', 'Financial Controller', 'Turnaround lead at a bank’s restructuring desk'],
      projects: ['12+ cash turnarounds for companies with EGP 100M–2B revenue', 'Working-capital programmes that released 15–30% of inventory', 'FX-exposure plans through devaluations', 'ERP and controls rollouts', 'Restructuring talks with banks'],
      req: 'Bachelor’s in accounting. CMA or ACCA, or the Egyptian Society of Accountants and Auditors fellowship. MBA preferred.',
      ideal: 'Egyptian SMEs and family companies with a cash squeeze, no strong CFO, or a bank asking hard questions.',
      qs: ['We’re profitable but always out of cash. Where is it going?', 'How much of my USD exposure should I prepay or cover before the next move in the pound?', 'The bank wants a restructuring plan in three weeks. What goes in it?'],
      border: 'VAT and corporate-tax treatment go to a tax adviser; the brain covers the cash and business effect.',
    },
    ar: {
      title: 'مدير مالي لإنقاذ الشركات الصغيرة والمتوسطة', former: 'مدير مالي لدى موزّع متوسط الحجم', seniority: 'إدارة عليا',
      industries: 'التجزئة والتوزيع والسلع الاستهلاكية والشركات التجارية العائلية',
      past: ['مدير مالي لدى موزّع أو تاجر تجزئة متوسط الحجم', 'مدير مالية', 'مراقب مالي', 'قائد إعادة الهيكلة في إدارة التعثّر لدى بنك'],
      projects: ['أكثر من 12 خطة إنقاذ للسيولة لشركات إيراداتها من 100 مليون إلى ملياري جنيه', 'برامج لرأس المال العامل حرّرت 15–30% من المخزون', 'خطط للتعامل مع مخاطر العملة خلال التخفيضات', 'تطبيق أنظمة ERP والرقابة', 'مفاوضات إعادة الهيكلة مع البنوك'],
      req: 'بكالوريوس في المحاسبة. شهادة CMA أو ACCA، أو زمالة جمعية المحاسبين والمراجعين المصرية. ويُفضَّل ماجستير إدارة الأعمال.',
      ideal: 'الشركات الصغيرة والمتوسطة والعائلية في مصر التي تعاني ضغط السيولة، أو لا تملك مديرًا ماليًا قويًا، أو يطرح عليها البنك أسئلة صعبة.',
      qs: ['نحن نربح لكن السيولة تنفد دائمًا. أين تذهب؟', 'كم من التزاماتي بالدولار يجب أن أسدّد مسبقًا أو أغطّي قبل التحرّك القادم للجنيه؟', 'البنك يريد خطة إعادة هيكلة خلال ثلاثة أسابيع. ماذا أضع فيها؟'],
      border: 'معالجة ضريبة القيمة المضافة وضريبة الشركات لدى مستشار ضريبي، والعقل يتناول أثرها على السيولة والعمل.',
    },
    ru: {
      title: 'Финансовый директор по антикризису для малого и среднего бизнеса', former: 'Финансовый директор дистрибьютора среднего размера', seniority: 'Топ-менеджмент',
      industries: 'Ритейл, дистрибуция, FMCG, семейные торговые компании',
      past: ['Финансовый директор дистрибьютора или сети среднего размера', 'Директор по финансам', 'Финансовый контролёр', 'Руководитель реструктуризации в проблемном департаменте банка'],
      projects: ['12+ антикризисных программ по денежному потоку для компаний с выручкой от 100 млн до 2 млрд фунтов', 'Программы оборотного капитала, которые высвободили 15–30% запасов', 'Планы валютных рисков на время девальваций', 'Внедрение ERP и контрольных процедур', 'Переговоры о реструктуризации с банками'],
      req: 'Высшее образование в бухгалтерском учёте. CMA или ACCA либо членство в Египетском обществе бухгалтеров и аудиторов. Предпочтительно MBA.',
      ideal: 'Малый и средний бизнес и семейные компании Египта: кассовый разрыв, нет сильного финдиректора или банк задаёт неудобные вопросы.',
      qs: ['Мы прибыльны, но денег всегда нет. Куда они уходят?', 'Какую часть долларовых обязательств закрыть или захеджировать до следующего движения фунта?', 'Банк ждёт план реструктуризации через три недели. Что в него войдёт?'],
      border: 'НДС и налог на прибыль решает налоговый консультант, эксперт разбирает влияние на деньги и бизнес.',
    },
  },
  {
    id: 'EG-04', slug: 'hr-org-design-director-family-groups-egypt', home: 'EG', years: 20, price: 125, cov: 2,
    fields: ['hr', 'family'], ind: ['family', 'realestate', 'retail', 'industrial'], groups: ['egypt', 'gcc'], codes: 'EG · KSA', langs: ['ar', 'en'],
    consultant: none(),
    en: {
      title: 'HR and organisation design director for family groups', former: 'Group HR Director', seniority: 'Director',
      industries: 'Family conglomerates, real estate, retail, manufacturing',
      past: ['Group HR Director', 'Head of Organisation Development', 'Compensation and Benefits Manager', 'HR Business Partner at a multinational'],
      projects: ['Grading and salary structures for 1,000–15,000 employees', 'Org redesign after a family succession', 'Performance-management systems', 'First-year workforce plans for Saudi branches, with Saudisation targets as a planning input'],
      req: 'SHRM-SCP or CIPD Level 7. Master’s in HR or an MBA. Certification in a job-evaluation method (Korn Ferry Hay or Mercer IPE).',
      ideal: 'Family groups professionalising management; companies of 200–5,000 people with a pay structure nobody can explain.',
      qs: ['Our salaries were set by negotiation for 15 years. How do I build a grade structure without a revolt?', 'My son and our COO both think they run operations. How do we draw the org chart?', 'What does a Saudi branch of 60 people need from HR in its first year?'],
      border: 'Employment contracts and labour-law questions go to counsel.',
    },
    ar: {
      title: 'مدير الموارد البشرية وتصميم الهيكل التنظيمي للمجموعات العائلية', former: 'مدير الموارد البشرية للمجموعة', seniority: 'مدير',
      industries: 'المجموعات العائلية والعقارات والتجزئة والتصنيع',
      past: ['مدير الموارد البشرية للمجموعة', 'رئيس التطوير التنظيمي', 'مدير التعويضات والمزايا', 'شريك أعمال للموارد البشرية في شركة متعددة الجنسيات'],
      projects: ['هياكل درجات ورواتب لما بين 1,000 و15,000 موظف', 'إعادة تصميم الهيكل بعد انتقال القيادة في العائلة', 'أنظمة لإدارة الأداء', 'خطط القوى العاملة للسنة الأولى لفروع سعودية، مع أهداف السعودة كمدخل للتخطيط'],
      req: 'شهادة SHRM-SCP أو CIPD المستوى 7. ماجستير في الموارد البشرية أو إدارة الأعمال. شهادة في إحدى منهجيات تقييم الوظائف (Korn Ferry Hay أو Mercer IPE).',
      ideal: 'المجموعات العائلية التي تُضفي الطابع المهني على إدارتها، والشركات من 200 إلى 5,000 موظف التي لا يستطيع أحد تفسير هيكل رواتبها.',
      qs: ['حُدّدت رواتبنا بالتفاوض طوال 15 عامًا. كيف أبني سلّم درجات دون تمرّد؟', 'ابني ومدير العمليات يظن كلٌّ منهما أنه يدير التشغيل. كيف نرسم الهيكل التنظيمي؟', 'ماذا يحتاج فرع سعودي من 60 موظفًا من الموارد البشرية في سنته الأولى؟'],
      border: 'عقود العمل ومسائل قانون العمل لدى المستشار القانوني.',
    },
    ru: {
      title: 'HR-директор и архитектор оргструктуры для семейных групп', former: 'HR-директор группы компаний', seniority: 'Директор',
      industries: 'Семейные холдинги, недвижимость, ритейл, производство',
      past: ['HR-директор группы компаний', 'Руководитель организационного развития', 'Менеджер по компенсациям и льготам', 'HR бизнес-партнёр в международной компании'],
      projects: ['Грейды и зарплатные структуры на 1 000–15 000 сотрудников', 'Перестройка оргструктуры после смены поколений в семье', 'Системы управления эффективностью', 'Кадровые планы на первый год для саудовских филиалов, с учётом квот саудизации'],
      req: 'SHRM-SCP или CIPD Level 7. Магистратура по HR или MBA. Сертификат по методике оценки должностей (Korn Ferry Hay или Mercer IPE).',
      ideal: 'Семейные группы, которые выстраивают профессиональное управление; компании на 200–5 000 человек с зарплатной структурой, которую никто не может объяснить.',
      qs: ['15 лет зарплаты устанавливались через торг. Как ввести грейды без бунта?', 'И мой сын, и наш операционный директор считают, что руководят операциями. Как нарисовать оргструктуру?', 'Что нужно от HR саудовскому филиалу на 60 человек в первый год?'],
      border: 'Трудовые договоры и вопросы трудового права решает юрист.',
    },
  },
  {
    id: 'EG-05', slug: 'talent-acquisition-lead-tech-bpo-egypt', home: 'EG', years: 16, price: 75, cov: 1,
    fields: ['recruitment', 'hr'], ind: ['tech', 'services', 'retail', 'finserv'], groups: ['egypt'], codes: 'EG', langs: ['ar', 'en'],
    consultant: none(),
    en: {
      title: 'Talent-acquisition lead for tech, BPO and scale-ups', former: 'Head of Talent Acquisition', seniority: 'Head of function',
      industries: 'Technology, BPO and contact centres, e-commerce, fintech operations',
      past: ['Head of Talent Acquisition', 'Recruitment Manager at a BPO hiring 1,000+ a year', 'Talent Partner for a regional VC portfolio'],
      projects: ['Hiring 300–2,000 people a year', 'Built recruiting teams of 5–20', 'Employer-brand and referral programmes that cut cost per hire by 30–50%', 'Remote hiring of Egyptian engineers for Gulf and European companies'],
      req: 'Bachelor’s degree. SHRM-CP or CIPD Level 5. A recruiter certification. Hands-on with an applicant-tracking system.',
      ideal: 'Start-ups and scale-ups building teams in Egypt; Gulf companies opening a Cairo hub.',
      qs: ['I need 40 customer-support agents in Cairo in six weeks. What does the funnel look like?', 'What salary range gets me a senior React developer in Egypt this quarter?', 'Our offer acceptance is 45%. Where are we losing them?'],
    },
    ar: {
      title: 'قائد استقطاب الكفاءات لشركات التقنية والتعهيد والشركات سريعة النمو', former: 'رئيس استقطاب الكفاءات', seniority: 'رئيس إدارة',
      industries: 'التقنية والتعهيد ومراكز الاتصال والتجارة الإلكترونية وعمليات التقنية المالية',
      past: ['رئيس استقطاب الكفاءات', 'مدير التوظيف في شركة تعهيد توظّف أكثر من 1,000 شخص سنويًا', 'شريك المواهب لمحفظة صندوق استثمار جريء إقليمي'],
      projects: ['توظيف 300–2,000 شخص سنويًا', 'بناء فرق توظيف من 5 إلى 20 شخصًا', 'برامج للعلامة التشغيلية والإحالات خفّضت تكلفة التوظيف 30–50%', 'توظيف مهندسين مصريين عن بُعد لشركات خليجية وأوروبية'],
      req: 'شهادة جامعية. شهادة SHRM-CP أو CIPD المستوى 5. شهادة مهنية في التوظيف. وخبرة عملية بنظام لتتبّع المتقدمين.',
      ideal: 'الشركات الناشئة وسريعة النمو التي تبني فرقها في مصر، والشركات الخليجية التي تفتتح مركزًا في القاهرة.',
      qs: ['أحتاج 40 موظف خدمة عملاء في القاهرة خلال ستة أسابيع. كيف يبدو مسار التوظيف؟', 'ما نطاق الراتب الذي يجلب لي مطوّر React أول في مصر هذا الربع؟', 'نسبة قبول عروضنا 45%. أين نخسرهم؟'],
    },
    ru: {
      title: 'Руководитель подбора для IT, BPO и быстрорастущих компаний', former: 'Руководитель подбора персонала', seniority: 'Руководитель направления',
      industries: 'Технологии, BPO и контакт-центры, e-commerce, операции финтеха',
      past: ['Руководитель подбора персонала', 'Менеджер по подбору в BPO, нанимающей 1 000+ человек в год', 'Партнёр по талантам для портфеля регионального венчурного фонда'],
      projects: ['Найм 300–2 000 человек в год', 'Построение команд рекрутеров на 5–20 человек', 'Программы бренда работодателя и рекомендаций, снизившие стоимость найма на 30–50%', 'Удалённый найм египетских инженеров для компаний из стран Залива и Европы'],
      req: 'Высшее образование. SHRM-CP или CIPD Level 5. Сертификат рекрутера. Практика работы в ATS.',
      ideal: 'Стартапы и быстрорастущие компании, которые строят команды в Египте; компании из стран Залива, открывающие хаб в Каире.',
      qs: ['Мне нужно 40 операторов поддержки в Каире за шесть недель. Как выглядит воронка?', 'Какая зарплатная вилка нужна для senior React-разработчика в Египте в этом квартале?', 'Наши офферы принимают в 45% случаев. Где мы теряем кандидатов?'],
    },
  },
  {
    id: 'GC-01', slug: 'valuation-ma-advisory-partner-gcc', home: 'GCC', years: 27, price: 1725, cov: 3,
    fields: ['valuation', 'startup'], ind: ['industrial', 'retail', 'fnb', 'logistics', 'tech', 'family'], groups: ['gcc'], codes: 'KSA · UAE · KW · QA · BH · OM', langs: ['ar', 'en'],
    consultant: none(),
    en: {
      title: 'Business valuation and M&A advisory partner', former: 'Partner, Valuations, at a Big Four firm', seniority: 'Partner',
      industries: 'Industrial, retail, F&B, logistics, technology, family holdings',
      past: ['Partner or Director, Valuations, at a Big Four firm in Riyadh or Dubai', 'Head of M&A at a family office', 'Corporate Finance Director at an investment bank'],
      projects: ['150+ valuations, enterprise values of USD 10M–2B', 'Partner buy-outs and family separations', 'Pre-IPO valuations for Tadawul and Nomu listings (business view)', 'Fairness reviews and purchase-price negotiation support'],
      req: 'CFA charter and/or ASA (Business Valuation) or CBV. Taqeem accredited valuer membership strongly preferred for KSA work. MBA from a top school.',
      ideal: 'Owners buying out a partner; family groups splitting assets; founders before a raise or a sale; investors testing a seller’s number.',
      qs: ['My partner wants out at 12× EBITDA. What’s a defensible number for a Riyadh F&B chain?', 'Which adjustments will a buyer make to my EBITDA, and how do I get ahead of them?', 'The DCF says 400M and market multiples say 260M. Which one do I negotiate on?'],
      border: 'A valuation for a court, a regulator or a formal filing needs a licensed valuer engaged directly; the brain advises on the business decision.',
    },
    ar: {
      title: 'شريك تقييم الأعمال واستشارات الاندماج والاستحواذ', former: 'شريك التقييم في إحدى شركات Big Four', seniority: 'شريك',
      industries: 'الصناعة والتجزئة والأغذية والمشروبات والخدمات اللوجستية والتقنية والشركات القابضة العائلية',
      past: ['شريك أو مدير التقييم في إحدى شركات Big Four في الرياض أو دبي', 'رئيس الاندماج والاستحواذ في مكتب عائلي', 'مدير تمويل الشركات في بنك استثماري'],
      projects: ['أكثر من 150 عملية تقييم، بقيم منشآت من 10 ملايين إلى ملياري دولار', 'استحواذ على حصص الشركاء وفصل أصول العائلات', 'تقييمات ما قبل الطرح لإدراجات تداول ونمو (من منظور الأعمال)', 'مراجعات عدالة السعر ودعم مفاوضات سعر الشراء'],
      req: 'شهادة CFA و/أو ASA (تقييم الأعمال) أو CBV. ويُفضَّل بشدة اعتماد مقيّم من تقييم للعمل في السعودية. ماجستير إدارة أعمال من كلية مرموقة.',
      ideal: 'أصحاب الأعمال الذين يشترون حصة شريك، والمجموعات العائلية التي تقسّم أصولها، والمؤسسون قبل جولة تمويل أو بيع، والمستثمرون الذين يختبرون رقم البائع.',
      qs: ['شريكي يريد الخروج بـ12 ضعف EBITDA. ما الرقم القابل للدفاع عنه لسلسلة مطاعم في الرياض؟', 'ما التعديلات التي سيجريها المشتري على EBITDA، وكيف أسبقه إليها؟', 'التدفقات المخصومة تقول 400 مليون، ومضاعفات السوق تقول 260 مليونًا. على أيهما أتفاوض؟'],
      border: 'التقييم لمحكمة أو جهة رقابية أو لإيداع رسمي يحتاج مقيّمًا مرخّصًا يُكلَّف مباشرة، والعقل يقدّم المشورة في القرار التجاري.',
    },
    ru: {
      title: 'Партнёр по оценке бизнеса и сделкам M&A', former: 'Партнёр по оценке в компании «большой четвёрки»', seniority: 'Партнёр',
      industries: 'Промышленность, ритейл, общепит, логистика, технологии, семейные холдинги',
      past: ['Партнёр или директор по оценке в компании «большой четвёрки» в Эр-Рияде или Дубае', 'Руководитель M&A в семейном офисе', 'Директор по корпоративным финансам в инвестиционном банке'],
      projects: ['150+ оценок, стоимость бизнеса от 10 млн до 2 млрд $', 'Выкуп долей партнёров и раздел активов в семьях', 'Оценки перед IPO для листинга на Tadawul и Nomu (бизнес-взгляд)', 'Проверки справедливости цены и поддержка переговоров о цене сделки'],
      req: 'CFA и/или ASA (оценка бизнеса) или CBV. Для работы в Саудовской Аравии крайне желательно членство в Taqeem. MBA сильной школы.',
      ideal: 'Владельцы, которые выкупают долю партнёра; семейные группы, делящие активы; основатели перед раундом или продажей; инвесторы, проверяющие цифру продавца.',
      qs: ['Партнёр хочет выйти по 12× EBITDA. Какая цифра защитима для сети общепита в Эр-Рияде?', 'Какие поправки к EBITDA сделает покупатель и как опередить его?', 'DCF даёт 400 млн, рыночные мультипликаторы 260 млн. На чём строить переговоры?'],
      border: 'Оценка для суда, регулятора или официальной подачи требует лицензированного оценщика напрямую, эксперт консультирует по бизнес-решению.',
    },
  },
  {
    id: 'GC-02', slug: 'real-estate-hospitality-feasibility-director-gcc', home: 'GCC', years: 30, price: 2400, cov: 3,
    fields: ['feasibility', 'market'], ind: ['realestate', 'fnb'], groups: ['gcc'], codes: 'KSA · UAE · QA · OM · BH', langs: ['en', 'ar'], say: 2,
    consultant: none(),
    en: {
      title: 'Real-estate and hospitality feasibility director', former: 'Director of Development Feasibility at a master developer', seniority: 'Executive director or partner',
      industries: 'Real-estate development, hospitality, mixed use, leisure and entertainment',
      past: ['Director of Development Feasibility at a master developer', 'Head of Hotel Advisory at an international real-estate consultancy', 'Asset Manager for a hotel portfolio', 'Development Director at a hotel operator'],
      projects: ['Feasibility for 60+ projects worth USD 50M–3B', 'Hotel-operator selection and management-agreement economics', 'Mixed-use phasing during KSA’s giga-project build-out', 'Post-opening reviews of projects that missed their occupancy targets'],
      req: 'MRICS or FRICS. MBA or MSc in real estate or hospitality. CFA a plus.',
      ideal: 'Developers and landowners before committing land or capex; family offices weighing a hotel; investors reviewing a developer’s study.',
      qs: ['A 220-key upper-midscale hotel in Al Khobar: what occupancy and ADR are realistic by year three?', 'Brand A or Brand B: which management-agreement terms actually move my return?', 'Should phase one be residential sales or the retail podium?'],
    },
    ar: {
      title: 'مدير دراسات الجدوى للعقارات والضيافة', former: 'مدير جدوى التطوير لدى مطوّر رئيسي', seniority: 'مدير تنفيذي أو شريك',
      industries: 'التطوير العقاري والضيافة والمشاريع متعددة الاستخدامات والترفيه',
      past: ['مدير جدوى التطوير لدى مطوّر رئيسي', 'رئيس استشارات الفنادق في شركة استشارات عقارية دولية', 'مدير أصول لمحفظة فنادق', 'مدير التطوير لدى مشغّل فنادق'],
      projects: ['دراسات جدوى لأكثر من 60 مشروعًا بقيم من 50 مليونًا إلى 3 مليارات دولار', 'اختيار مشغّل الفندق واقتصاديات عقود الإدارة', 'تقسيم المشاريع متعددة الاستخدامات على مراحل خلال بناء المشاريع الكبرى في السعودية', 'مراجعات ما بعد الافتتاح لمشاريع لم تبلغ أهداف الإشغال'],
      req: 'عضوية MRICS أو FRICS. ماجستير إدارة أعمال أو ماجستير في العقارات أو الضيافة. وشهادة CFA ميزة إضافية.',
      ideal: 'المطوّرون وملّاك الأراضي قبل الالتزام بالأرض أو الاستثمار، والمكاتب العائلية التي تدرس فندقًا، والمستثمرون الذين يراجعون دراسة مطوّر.',
      qs: ['فندق فوق المتوسط بـ220 غرفة في الخبر: ما الإشغال ومتوسط سعر الغرفة الواقعيان بحلول السنة الثالثة؟', 'العلامة A أم B: أي شروط في عقد الإدارة تحرّك عائدي فعلًا؟', 'هل تكون المرحلة الأولى بيع الوحدات السكنية أم منصة التجزئة؟'],
    },
    ru: {
      title: 'Директор по ТЭО в недвижимости и гостиничном бизнесе', former: 'Директор по ТЭО девелопмента у мастер-девелопера', seniority: 'Исполнительный директор или партнёр',
      industries: 'Девелопмент, гостиничный бизнес, многофункциональные комплексы, досуг и развлечения',
      past: ['Директор по ТЭО девелопмента у мастер-девелопера', 'Руководитель гостиничного консалтинга в международной компании по недвижимости', 'Управляющий активами гостиничного портфеля', 'Директор по развитию гостиничного оператора'],
      projects: ['ТЭО для 60+ проектов стоимостью от 50 млн до 3 млрд $', 'Выбор гостиничного оператора и экономика договоров управления', 'Очерёдность многофункциональных проектов во время гигапроектов Саудовской Аравии', 'Разборы после открытия проектов, не вышедших на плановую загрузку'],
      req: 'MRICS или FRICS. MBA или магистратура по недвижимости или гостиничному бизнесу. CFA будет плюсом.',
      ideal: 'Девелоперы и владельцы земли до решения по участку или капзатратам; семейные офисы, которые думают об отеле; инвесторы, проверяющие ТЭО девелопера.',
      qs: ['Отель upper-midscale на 220 номеров в Эль-Хубаре: какая загрузка и средняя цена номера реальны к третьему году?', 'Бренд A или бренд B: какие условия договора управления реально влияют на доходность?', 'С чего начать первую очередь: с продажи жилья или с торгового подиума?'],
    },
  },
  {
    id: 'GC-03', slug: 'procurement-category-director-gcc', home: 'GCC', years: 24, price: 825, cov: 2,
    fields: ['procurement', 'supply'], ind: ['retail', 'services', 'realestate', 'fnb'], groups: ['gcc'], codes: 'UAE · KSA · QA', langs: ['en', 'ar', 'hi'],
    consultant: none(),
    en: {
      title: 'Procurement and category management director', former: 'Group Procurement Director', seniority: 'Director',
      industries: 'Retail, facilities management, construction, hospitality',
      past: ['Group Procurement Director', 'Head of Indirect Procurement', 'Category Director', 'Strategic Sourcing Manager'],
      projects: ['Spend under management of USD 200M–1.5B a year', 'Tenders with 20–200 bidders', 'Savings programmes of 8–15% on addressable spend', 'Local-content and supplier-localisation programmes in KSA', 'E-procurement rollouts'],
      req: 'MCIPS (Chartered, CIPS Level 6 or above). MBA or MSc in supply chain. CPSM a plus.',
      ideal: 'Groups with fast-growing spend and no category strategy; companies preparing large tenders.',
      qs: ['We spend AED 90M a year on facilities services across 14 sites. How do I tender it without losing service?', 'How do I weigh local content against price in a tender so bidders see it as fair?', 'Which three categories should I attack first for savings this year?'],
    },
    ar: {
      title: 'مدير المشتريات وإدارة الفئات', former: 'مدير المشتريات للمجموعة', seniority: 'مدير',
      industries: 'التجزئة وإدارة المرافق والإنشاءات والضيافة',
      past: ['مدير المشتريات للمجموعة', 'رئيس المشتريات غير المباشرة', 'مدير الفئات', 'مدير التوريد الاستراتيجي'],
      projects: ['إدارة إنفاق من 200 مليون إلى 1.5 مليار دولار سنويًا', 'مناقصات بين 20 و200 مورّد', 'برامج توفير بنسبة 8–15% من الإنفاق القابل للتأثير', 'برامج المحتوى المحلي وتوطين الموردين في السعودية', 'تطبيق أنظمة المشتريات الإلكترونية'],
      req: 'عضوية MCIPS (المستوى 6 من CIPS أو أعلى). ماجستير إدارة أعمال أو ماجستير في سلاسل الإمداد. وشهادة CPSM ميزة إضافية.',
      ideal: 'المجموعات التي ينمو إنفاقها بسرعة بلا استراتيجية فئات، والشركات التي تستعد لمناقصات كبيرة.',
      qs: ['ننفق 90 مليون درهم سنويًا على خدمات المرافق في 14 موقعًا. كيف أطرحها في مناقصة دون أن تتراجع الخدمة؟', 'كيف أوازن بين المحتوى المحلي والسعر في المناقصة ليراها المتقدمون عادلة؟', 'ما الفئات الثلاث التي أبدأ بها للتوفير هذا العام؟'],
    },
    ru: {
      title: 'Директор по закупкам и категорийному менеджменту', former: 'Директор по закупкам группы компаний', seniority: 'Директор',
      industries: 'Ритейл, управление объектами, строительство, гостиничный бизнес',
      past: ['Директор по закупкам группы компаний', 'Руководитель непрямых закупок', 'Категорийный директор', 'Менеджер по стратегическим закупкам'],
      projects: ['Управляемые закупки на 200 млн – 1,5 млрд $ в год', 'Тендеры на 20–200 участников', 'Программы экономии 8–15% от управляемых затрат', 'Программы локализации и местного содержания в Саудовской Аравии', 'Внедрение электронных закупок'],
      req: 'MCIPS (CIPS Level 6 и выше). MBA или магистратура по цепям поставок. CPSM будет плюсом.',
      ideal: 'Группы компаний, где закупки быстро растут, а категорийной стратегии нет; компании, которые готовят крупные тендеры.',
      qs: ['Мы тратим 90 млн дирхамов в год на обслуживание 14 объектов. Как провести тендер и не потерять качество?', 'Как взвесить местное содержание и цену в тендере, чтобы участники считали его честным?', 'С каких трёх категорий начать экономию в этом году?'],
    },
  },
  {
    id: 'GC-04', slug: 'consumer-market-entry-analysis-lead-ksa-uae', home: 'GCC', years: 21, price: 725, cov: 2,
    fields: ['market', 'export', 'strategy'], ind: ['fmcg', 'retail', 'marketplaces', 'fnb'], groups: ['gcc'], codes: 'KSA · UAE', langs: ['en', 'ar'],
    consultant: none(),
    en: {
      title: 'Consumer market-entry and market analysis lead', former: 'Head of Strategy and Insights at a GCC retail group', seniority: 'Director',
      industries: 'Consumer goods, retail and e-commerce, F&B, beauty and personal care',
      past: ['Head of Strategy and Insights at a GCC retail group', 'Market Entry Director for an international brand', 'Senior Manager at a strategy consultancy', 'Consumer Insights Lead'],
      projects: ['30+ entry studies', 'Launched 12 brands into KSA and the UAE', 'Market sizing and channel economics: modern trade, noon, Amazon.sa, quick commerce', 'Distributor selection and first-year P&Ls'],
      req: 'MBA from a top school. Market-research training (ESOMAR membership a plus). Strong with data.',
      ideal: 'Foreign and Egyptian brands entering the Gulf; GCC brands moving between the UAE and KSA.',
      qs: ['Riyadh first or Dubai first for a premium skincare brand, and with what budget?', 'Distributor, marketplace only, or our own entity in year one?', 'How big is the real market for chilled ready meals in KSA, not the report’s number?'],
    },
    ar: {
      title: 'قائد دخول الأسواق الاستهلاكية وتحليل السوق', former: 'رئيس الاستراتيجية ورؤى المستهلك في مجموعة تجزئة خليجية', seniority: 'مدير',
      industries: 'السلع الاستهلاكية والتجزئة والتجارة الإلكترونية والأغذية والمشروبات والتجميل والعناية الشخصية',
      past: ['رئيس الاستراتيجية ورؤى المستهلك في مجموعة تجزئة خليجية', 'مدير دخول السوق لعلامة دولية', 'مدير أول في شركة استشارات استراتيجية', 'قائد رؤى المستهلك'],
      projects: ['أكثر من 30 دراسة لدخول الأسواق', 'إطلاق 12 علامة في السعودية والإمارات', 'تقدير حجم السوق واقتصاديات القنوات: التجزئة الحديثة وnoon وAmazon.sa والتجارة السريعة', 'اختيار الموزعين وقوائم أرباح وخسائر السنة الأولى'],
      req: 'ماجستير إدارة أعمال من كلية مرموقة. تدريب في أبحاث السوق (عضوية ESOMAR ميزة إضافية). وقوة في التعامل مع البيانات.',
      ideal: 'العلامات الأجنبية والمصرية التي تدخل الخليج، والعلامات الخليجية التي تنتقل بين الإمارات والسعودية.',
      qs: ['الرياض أولًا أم دبي أولًا لعلامة عناية بالبشرة فاخرة، وبأي ميزانية؟', 'موزّع، أم منصات البيع فقط، أم كيان خاص بنا في السنة الأولى؟', 'ما الحجم الحقيقي لسوق الوجبات الجاهزة المبرّدة في السعودية، لا رقم التقرير؟'],
    },
    ru: {
      title: 'Руководитель выхода на потребительские рынки и анализа рынка', former: 'Руководитель стратегии и аналитики потребителей в ритейл-группе из стран Залива', seniority: 'Директор',
      industries: 'Товары народного потребления, ритейл и e-commerce, общепит, красота и уход',
      past: ['Руководитель стратегии и аналитики потребителей в ритейл-группе из стран Залива', 'Директор по выходу на рынок международного бренда', 'Старший менеджер стратегической консалтинговой компании', 'Руководитель потребительской аналитики'],
      projects: ['30+ исследований выхода на рынок', 'Вывел 12 брендов в Саудовскую Аравию и ОАЭ', 'Оценка рынка и экономика каналов: сети, noon, Amazon.sa, экспресс-доставка', 'Выбор дистрибьюторов и P&L первого года'],
      req: 'MBA сильной школы. Подготовка в маркетинговых исследованиях (членство в ESOMAR будет плюсом). Уверенная работа с данными.',
      ideal: 'Иностранные и египетские бренды, которые выходят в страны Залива; бренды из Залива, которые переходят между ОАЭ и Саудовской Аравией.',
      qs: ['Сначала Эр-Рияд или Дубай для премиального бренда ухода за кожей, и с каким бюджетом?', 'Дистрибьютор, только маркетплейсы или своё юрлицо в первый год?', 'Каков реальный рынок охлаждённой готовой еды в Саудовской Аравии, а не цифра из отчёта?'],
    },
  },
  {
    id: 'GC-05', slug: 'group-cfo-family-conglomerates-gcc', home: 'GCC', years: 33, price: 2200, cov: 3,
    fields: ['finance', 'family', 'fundraising'], ind: ['family', 'realestate', 'auto', 'industrial'], groups: ['gcc'], codes: 'KSA · UAE · KW · QA · BH · OM', langs: ['en', 'ar'],
    consultant: none(),
    en: {
      title: 'Group CFO for family conglomerates', former: 'Group CFO of a family conglomerate', seniority: 'C-level',
      industries: 'Family conglomerates: trading, real estate, automotive distribution, industrial',
      past: ['Group CFO of a family conglomerate', 'CFO of a listed company', 'Group Treasurer', 'Audit Senior Manager at a Big Four firm'],
      projects: ['Group finance for USD 500M–5B revenue', 'Refinancing of USD 100M–1B of debt with GCC and international banks', 'Sukuk issuance support (business side)', 'Holding-structure redesign (business design; legal work by counsel)', 'Board and finance-committee set-up; IPO readiness'],
      req: 'FCCA, CPA or ACA. CFA a plus. MBA from a top school.',
      ideal: 'Family groups whose finance hasn’t kept up with their size; second-generation leaders preparing for banks, a sale or an IPO.',
      qs: ['We have 23 companies and no consolidated cash view. Where do I start?', 'The banks want a group guarantee. What do I negotiate instead?', 'Are we ready for an IPO in three years, and what must change first?'],
    },
    ar: {
      title: 'المدير المالي للمجموعات العائلية', former: 'المدير المالي لمجموعة عائلية', seniority: 'إدارة عليا',
      industries: 'المجموعات العائلية: التجارة والعقارات وتوزيع السيارات والصناعة',
      past: ['المدير المالي لمجموعة عائلية', 'المدير المالي لشركة مدرجة', 'أمين خزينة المجموعة', 'مدير أول للتدقيق في إحدى شركات Big Four'],
      projects: ['الإدارة المالية لمجموعات إيراداتها من 500 مليون إلى 5 مليارات دولار', 'إعادة تمويل ديون من 100 مليون إلى مليار دولار مع بنوك خليجية ودولية', 'دعم إصدار الصكوك (الجانب التجاري)', 'إعادة تصميم هيكل الشركة القابضة (التصميم التجاري، والعمل القانوني لدى المستشار)', 'تأسيس مجلس الإدارة ولجنة المالية، والجاهزية للطرح العام'],
      req: 'زمالة FCCA أو CPA أو ACA. وشهادة CFA ميزة إضافية. ماجستير إدارة أعمال من كلية مرموقة.',
      ideal: 'المجموعات العائلية التي لم تواكب إدارتها المالية حجمها، وقادة الجيل الثاني الذين يستعدون للبنوك أو للبيع أو للطرح العام.',
      qs: ['لدينا 23 شركة ولا رؤية موحّدة للسيولة. من أين أبدأ؟', 'البنوك تطلب ضمانًا من المجموعة. على ماذا أتفاوض بدلًا منه؟', 'هل نحن جاهزون للطرح العام خلال ثلاث سنوات، وما الذي يجب أن يتغيّر أولًا؟'],
    },
    ru: {
      title: 'Финансовый директор семейных холдингов', former: 'Финансовый директор семейного холдинга', seniority: 'Топ-менеджмент',
      industries: 'Семейные холдинги: торговля, недвижимость, дистрибуция автомобилей, промышленность',
      past: ['Финансовый директор семейного холдинга', 'Финансовый директор публичной компании', 'Казначей группы', 'Старший менеджер по аудиту в компании «большой четвёрки»'],
      projects: ['Финансы групп с выручкой от 500 млн до 5 млрд $', 'Рефинансирование долга на 100 млн – 1 млрд $ с банками Залива и международными банками', 'Поддержка выпуска сукук (бизнес-сторона)', 'Перестройка холдинговой структуры (бизнес-дизайн, юридическая часть за юристами)', 'Создание совета директоров и финансового комитета, подготовка к IPO'],
      req: 'FCCA, CPA или ACA. CFA будет плюсом. MBA сильной школы.',
      ideal: 'Семейные группы, чьи финансы отстали от масштаба; лидеры второго поколения, которые готовятся к банкам, продаже или IPO.',
      qs: ['У нас 23 компании и нет консолидированной картины денег. С чего начать?', 'Банки хотят гарантию группы. О чём договариваться вместо неё?', 'Готовы ли мы к IPO через три года, и что нужно изменить в первую очередь?'],
    },
  },
  {
    id: 'LM-01', slug: 'startup-venture-investment-partner-levant', home: 'JO', years: 18, price: 325, cov: 3,
    fields: ['startup', 'fundraising'], ind: ['tech', 'finserv', 'retail', 'logistics'], groups: ['levant', 'gcc', 'egypt'], codes: 'JO · KSA · UAE · EG', langs: ['ar', 'en'],
    consultant: none(),
    en: {
      title: 'Start-up and venture investment evaluation partner', former: 'Partner at a MENA venture fund', seniority: 'Partner',
      industries: 'Technology, fintech (business side), e-commerce, SaaS, logistics tech',
      past: ['Partner at a MENA venture fund', 'Investment Director at a corporate venture arm', 'Founder with one exit', 'Investment-banking analyst'],
      projects: ['Screened 2,000+ start-ups', 'Invested in 40+ from seed to Series B, tickets of USD 250k–10M', 'Three or more exits; 10+ board seats', 'Due diligence on MENA tech companies'],
      req: 'CFA or an MBA. A documented record of 40+ investments and board seats.',
      ideal: 'Corporates and family offices starting to invest in start-ups; angel investors; founders preparing a raise.',
      qs: ['A founder wants USD 2M at a USD 12M pre-money for a Saudi logistics app. What do I check first?', 'Which three metrics tell me this SaaS company is real?', 'Should our family office do direct deals or join a fund?'],
      border: 'Evaluates companies and deals for a business or an investor’s own decision. It doesn’t recommend securities to private individuals (regulated advice).',
    },
    ar: {
      title: 'شريك تقييم الشركات الناشئة والاستثمار الجريء', former: 'شريك في صندوق استثمار جريء في المنطقة', seniority: 'شريك',
      industries: 'التقنية والتقنية المالية (الجانب التجاري) والتجارة الإلكترونية وSaaS وتقنيات الخدمات اللوجستية',
      past: ['شريك في صندوق استثمار جريء في الشرق الأوسط وشمال أفريقيا', 'مدير استثمار في ذراع الاستثمار الجريء لشركة كبرى', 'مؤسس حقّق تخارجًا واحدًا', 'محلل في بنك استثماري'],
      projects: ['فحص أكثر من 2,000 شركة ناشئة', 'الاستثمار في أكثر من 40 شركة من البذرة إلى الجولة B، بتذاكر من 250 ألفًا إلى 10 ملايين دولار', 'ثلاثة تخارجات أو أكثر، وأكثر من 10 مقاعد في مجالس إدارة', 'الفحص النافي للجهالة لشركات تقنية في المنطقة'],
      req: 'شهادة CFA أو ماجستير إدارة أعمال. سجلّ موثّق لأكثر من 40 استثمارًا ومقاعد في مجالس إدارة.',
      ideal: 'الشركات الكبرى والمكاتب العائلية التي تبدأ الاستثمار في الشركات الناشئة، والمستثمرون الملائكيون، والمؤسسون الذين يستعدون لجولة تمويل.',
      qs: ['مؤسس يريد مليوني دولار بتقييم 12 مليونًا قبل الاستثمار لتطبيق لوجستي سعودي. ماذا أفحص أولًا؟', 'ما المؤشرات الثلاثة التي تخبرني أن شركة SaaS هذه حقيقية؟', 'هل يستثمر مكتبنا العائلي مباشرة أم ينضم إلى صندوق؟'],
      border: 'يقيّم الشركات والصفقات لقرار شركة أو مستثمر بنفسه، ولا يوصي الأفراد بأوراق مالية (استشارة خاضعة للتنظيم).',
    },
    ru: {
      title: 'Партнёр по оценке стартапов и венчурных инвестиций', former: 'Партнёр венчурного фонда региона MENA', seniority: 'Партнёр',
      industries: 'Технологии, финтех (бизнес-сторона), e-commerce, SaaS, логистические технологии',
      past: ['Партнёр венчурного фонда региона MENA', 'Инвестиционный директор корпоративного венчурного фонда', 'Основатель с одним выходом', 'Аналитик инвестиционного банка'],
      projects: ['Отбор из 2 000+ стартапов', 'Инвестиции в 40+ компаний от посева до раунда B, чеки от 250 тыс. до 10 млн $', 'Три выхода и больше, 10+ мест в советах директоров', 'Due diligence технологических компаний региона'],
      req: 'CFA или MBA. Подтверждённая история из 40+ инвестиций и мест в советах директоров.',
      ideal: 'Корпорации и семейные офисы, которые начинают инвестировать в стартапы; бизнес-ангелы; основатели перед раундом.',
      qs: ['Основатель просит 2 млн $ при оценке 12 млн $ до денег за саудовское логистическое приложение. Что проверить первым?', 'Какие три метрики покажут, что эта SaaS-компания настоящая?', 'Семейному офису лучше инвестировать напрямую или через фонд?'],
      border: 'Оценивает компании и сделки для собственного решения бизнеса или инвестора. Не рекомендует ценные бумаги частным лицам (регулируемая консультация).',
    },
  },
  {
    id: 'LM-02', slug: 'export-market-entry-lead-africa-europe-morocco', home: 'MA', years: 24, price: 200, cov: 3,
    fields: ['export', 'sales'], ind: ['agri', 'fashion', 'auto', 'industrial'], groups: ['maghreb', 'europe'], codes: 'MA · FR · EU · SN · CI', langs: ['ar', 'fr', 'en'],
    consultant: none(),
    en: {
      title: 'Export and market-entry lead, Francophone Africa and Europe', former: 'Export Director at an agri-food exporter', seniority: 'Director',
      industries: 'Agri-food, textiles and apparel, automotive components, building materials',
      past: ['Export Director at an agri-food exporter', 'Business Development Director, West Africa', 'Adviser at an export-promotion agency', 'Country Manager'],
      projects: ['Opened 15+ export markets', 'Distributor networks in eight West African countries', 'Listings with European retailers', 'Export programmes from EUR 5M to EUR 80M in sales', 'Landed-cost and Incoterm models'],
      req: 'Master’s from a French grande école or a leading Moroccan school. International-trade certification. MBA a plus.',
      ideal: 'Maghreb and Egyptian exporters targeting Europe or West Africa; Gulf brands using Morocco as a gateway.',
      qs: ['Côte d’Ivoire or Senegal first for our biscuits, and with which distributor model?', 'How do I price for French retail without losing my margin to the buying groups?', 'What does a realistic first-year export budget look like for EUR 3M of sales?'],
    },
    ar: {
      title: 'قائد التصدير ودخول الأسواق في أفريقيا الفرنكوفونية وأوروبا', former: 'مدير التصدير لدى مصدّر أغذية', seniority: 'مدير',
      industries: 'الصناعات الغذائية والزراعية والنسيج والملابس ومكوّنات السيارات ومواد البناء',
      past: ['مدير التصدير لدى مصدّر أغذية', 'مدير تطوير الأعمال في غرب أفريقيا', 'مستشار في وكالة لتنمية الصادرات', 'مدير إقليمي لبلد'],
      projects: ['فتح أكثر من 15 سوق تصدير', 'شبكات توزيع في ثماني دول في غرب أفريقيا', 'إدراج المنتجات لدى سلاسل تجزئة أوروبية', 'برامج تصدير بمبيعات من 5 إلى 80 مليون يورو', 'نماذج التكلفة الواصلة وشروط Incoterms'],
      req: 'ماجستير من مدرسة فرنسية عليا أو من مدرسة مغربية رائدة. شهادة في التجارة الدولية. وماجستير إدارة الأعمال ميزة إضافية.',
      ideal: 'المصدّرون في المغرب العربي ومصر الذين يستهدفون أوروبا أو غرب أفريقيا، والعلامات الخليجية التي تتخذ المغرب بوابة.',
      qs: ['كوت ديفوار أم السنغال أولًا لبسكويتنا، وبأي نموذج توزيع؟', 'كيف أسعّر للتجزئة الفرنسية دون أن أخسر هامشي لمجموعات الشراء؟', 'كيف تبدو ميزانية تصدير واقعية للسنة الأولى لمبيعات بـ3 ملايين يورو؟'],
    },
    ru: {
      title: 'Руководитель экспорта и выхода на рынки франкоязычной Африки и Европы', former: 'Директор по экспорту агропищевого экспортёра', seniority: 'Директор',
      industries: 'Агропищевой сектор, текстиль и одежда, автокомпоненты, стройматериалы',
      past: ['Директор по экспорту агропищевого экспортёра', 'Директор по развитию бизнеса в Западной Африке', 'Советник агентства по поддержке экспорта', 'Руководитель страны'],
      projects: ['Открыл 15+ экспортных рынков', 'Дистрибьюторские сети в восьми странах Западной Африки', 'Листинги в европейских сетях', 'Экспортные программы с продажами от 5 до 80 млн евро', 'Модели себестоимости с доставкой и Incoterms'],
      req: 'Магистратура французской grande école или ведущей марокканской школы. Сертификат в международной торговле. MBA будет плюсом.',
      ideal: 'Экспортёры из Магриба и Египта, которые целятся в Европу или Западную Африку; бренды из стран Залива, для которых Марокко станет воротами.',
      qs: ['Кот-д’Ивуар или Сенегал первым для нашего печенья, и с какой моделью дистрибуции?', 'Как ставить цену для французских сетей и не отдать маржу закупочным союзам?', 'Как выглядит реалистичный экспортный бюджет первого года на 3 млн евро продаж?'],
    },
  },
  {
    id: 'LM-03', slug: 'manufacturing-lean-operations-director-tunisia', home: 'TN', years: 26, price: 175, cov: 2,
    fields: ['manufacturing', 'supply', 'procurement'], ind: ['auto', 'industrial', 'fashion'], groups: ['maghreb', 'europe'], codes: 'TN · MA · FR', langs: ['ar', 'fr', 'en'],
    consultant: none(),
    en: {
      title: 'Manufacturing operations and lean supply-chain director', former: 'Plant Director at a European automotive supplier', seniority: 'Plant or operations director',
      industries: 'Automotive components, electrical cables and wire harnesses, textiles, industrial assembly',
      past: ['Plant Director at a European automotive supplier', 'Operations Director', 'Lean Manager', 'Supply Chain Manager'],
      projects: ['Ran plants of 800–3,000 workers', 'Lifted OEE from about 55% to 80%', 'Near-shoring programmes moving lines from Asia to North Africa', 'Make-or-buy studies', 'Supplier development for local sourcing'],
      req: 'Engineering degree. Lean Six Sigma Black Belt. ASCM/APICS CSCP or CPIM. IATF 16949 plant experience.',
      ideal: 'Manufacturers in Egypt, the Maghreb and the Gulf scaling a plant; European firms near-shoring to North Africa.',
      qs: ['Our line runs at 58% OEE. Which three losses do I attack first?', 'Make in-house or outsource the harness sub-assembly?', 'How many shifts and people do I need for 1.2M units a year?'],
    },
    ar: {
      title: 'مدير العمليات الصناعية وسلاسل الإمداد الرشيقة', former: 'مدير مصنع لدى مورّد سيارات أوروبي', seniority: 'مدير مصنع أو عمليات',
      industries: 'مكوّنات السيارات والكابلات الكهربائية وضفائر الأسلاك والنسيج والتجميع الصناعي',
      past: ['مدير مصنع لدى مورّد سيارات أوروبي', 'مدير العمليات', 'مدير التشغيل الرشيق', 'مدير سلاسل الإمداد'],
      projects: ['إدارة مصانع من 800 إلى 3,000 عامل', 'رفع الكفاءة الشاملة للمعدات من نحو 55% إلى 80%', 'برامج نقل خطوط إنتاج من آسيا إلى شمال أفريقيا', 'دراسات التصنيع الداخلي أو الشراء', 'تطوير الموردين للتوريد المحلي'],
      req: 'شهادة في الهندسة. الحزام الأسود في Lean Six Sigma. شهادة CSCP أو CPIM من ASCM/APICS. وخبرة في مصنع معتمد وفق IATF 16949.',
      ideal: 'المصنّعون في مصر والمغرب العربي والخليج الذين يوسّعون مصنعًا، والشركات الأوروبية التي تنقل إنتاجها إلى شمال أفريقيا.',
      qs: ['خطّنا يعمل بكفاءة شاملة 58%. ما الخسائر الثلاث التي أبدأ بها؟', 'نصنع التجميع الفرعي للضفائر داخليًا أم نسنده إلى مورّد؟', 'كم وردية وكم عاملًا أحتاج لإنتاج 1.2 مليون وحدة سنويًا؟'],
    },
    ru: {
      title: 'Директор по производству и бережливым цепям поставок', former: 'Директор завода европейского автопоставщика', seniority: 'Директор завода или по операциям',
      industries: 'Автокомпоненты, электрокабели и жгуты проводов, текстиль, промышленная сборка',
      past: ['Директор завода европейского автопоставщика', 'Операционный директор', 'Менеджер по lean', 'Менеджер по цепям поставок'],
      projects: ['Руководил заводами на 800–3 000 рабочих', 'Поднял OEE примерно с 55% до 80%', 'Перенос линий из Азии в Северную Африку', 'Исследования «делать или покупать»', 'Развитие поставщиков для локальных закупок'],
      req: 'Инженерное образование. Lean Six Sigma Black Belt. ASCM/APICS CSCP или CPIM. Опыт на заводе с IATF 16949.',
      ideal: 'Производители Египта, Магриба и стран Залива, которые масштабируют завод; европейские компании, переносящие производство в Северную Африку.',
      qs: ['Линия работает с OEE 58%. Какие три потери атаковать первыми?', 'Делать сборку жгутов у себя или отдать на аутсорс?', 'Сколько смен и людей нужно на 1,2 млн единиц в год?'],
    },
  },
  {
    id: 'LM-04', slug: 'fnb-franchise-development-director-mena', home: 'LB', years: 23, price: 450, cov: 3,
    fields: ['franchising', 'strategy', 'export'], ind: ['fnb', 'retail'], groups: ['levant', 'gcc', 'egypt'], codes: 'LB · UAE · KSA · QA · KW · EG · IQ', langs: ['ar', 'en', 'fr'],
    consultant: none(),
    en: {
      title: 'F&B and hospitality franchise development director', former: 'Franchise Development Director at a Lebanese F&B group', seniority: 'Director',
      industries: 'F&B, cafés, casual dining, specialty retail',
      past: ['Franchise Development Director at a Lebanese F&B group', 'Head of International Franchising at a GCC franchise operator', 'Operations Director at a multi-brand restaurant group'],
      projects: ['Took four brands abroad', 'Signed 30+ franchise and master-franchise deals in 12 countries', 'Opened 250+ units', 'Unit-economics models; franchisee selection and audit systems'],
      req: 'MBA. Certified Franchise Executive (International Franchise Association) a plus. Hospitality degree a plus.',
      ideal: 'F&B founders thinking about franchising; GCC investors considering a master franchise.',
      qs: ['We have nine cafés in Riyadh. Are we ready to franchise, and at what fee?', 'A Kuwaiti group wants the GCC master franchise. Which commercial terms protect the brand?', 'Which unit economics must hold before we sell a single franchise?'],
      border: 'The franchise agreement itself is drafted by counsel; the brain sets the commercial terms to ask for.',
    },
    ar: {
      title: 'مدير تطوير الامتياز التجاري للأغذية والمشروبات والضيافة', former: 'مدير تطوير الامتياز في مجموعة مطاعم لبنانية', seniority: 'مدير',
      industries: 'الأغذية والمشروبات والمقاهي والمطاعم العائلية والتجزئة المتخصصة',
      past: ['مدير تطوير الامتياز في مجموعة مطاعم لبنانية', 'رئيس الامتياز الدولي لدى مشغّل امتيازات خليجي', 'مدير العمليات في مجموعة مطاعم متعددة العلامات'],
      projects: ['نقل أربع علامات إلى الخارج', 'توقيع أكثر من 30 صفقة امتياز وامتياز رئيسي في 12 دولة', 'افتتاح أكثر من 250 فرعًا', 'نماذج اقتصاديات الفرع، وأنظمة اختيار أصحاب الامتياز وتدقيقهم'],
      req: 'ماجستير إدارة أعمال. وشهادة Certified Franchise Executive من الجمعية الدولية للامتياز ميزة إضافية، وكذلك شهادة في الضيافة.',
      ideal: 'مؤسسو المطاعم والمقاهي الذين يفكّرون في الامتياز، والمستثمرون الخليجيون الذين يدرسون امتيازًا رئيسيًا.',
      qs: ['لدينا تسعة مقاهٍ في الرياض. هل نحن جاهزون للامتياز، وبأي رسوم؟', 'مجموعة كويتية تريد الامتياز الرئيسي للخليج. ما الشروط التجارية التي تحمي العلامة؟', 'ما اقتصاديات الفرع التي يجب أن تصمد قبل أن نبيع امتيازًا واحدًا؟'],
      border: 'يصيغ المستشار القانوني اتفاقية الامتياز نفسها، والعقل يحدّد الشروط التجارية التي تطلبها.',
    },
    ru: {
      title: 'Директор по франчайзингу в общепите и гостеприимстве', former: 'Директор по развитию франчайзинга ливанской ресторанной группы', seniority: 'Директор',
      industries: 'Общепит, кофейни, casual dining, специализированный ритейл',
      past: ['Директор по развитию франчайзинга ливанской ресторанной группы', 'Руководитель международного франчайзинга у оператора франшиз из стран Залива', 'Операционный директор мультибрендовой ресторанной группы'],
      projects: ['Вывел четыре бренда за рубеж', 'Подписал 30+ франчайзинговых и мастер-франчайзинговых сделок в 12 странах', 'Открыл 250+ точек', 'Модели юнит-экономики, системы отбора и аудита франчайзи'],
      req: 'MBA. Certified Franchise Executive (Международная ассоциация франчайзинга) будет плюсом, как и гостиничное образование.',
      ideal: 'Основатели ресторанов и кофеен, которые думают о франшизе; инвесторы из стран Залива, рассматривающие мастер-франшизу.',
      qs: ['У нас девять кофеен в Эр-Рияде. Готовы ли мы к франшизе и с каким паушальным взносом?', 'Кувейтская группа хочет мастер-франшизу на страны Залива. Какие коммерческие условия защитят бренд?', 'Какая юнит-экономика должна сходиться, прежде чем мы продадим хоть одну франшизу?'],
      border: 'Сам договор франшизы составляет юрист, эксперт определяет коммерческие условия, которые нужно просить.',
    },
  },
  {
    id: 'LM-05', slug: 'executive-search-compensation-lead-jordan-gcc', home: 'JO', years: 20, price: 275, cov: 2,
    fields: ['recruitment', 'hr'], ind: ['finserv', 'telecom', 'family', 'tech'], groups: ['levant', 'gcc'], codes: 'JO · KSA · UAE', langs: ['ar', 'en'], say: 3,
    consultant: none(),
    en: {
      title: 'Executive search and compensation benchmarking lead', former: 'Partner at a regional executive-search firm', seniority: 'Partner or director',
      industries: 'Banking and financial services, telecom, family conglomerates, technology',
      past: ['Partner at a regional executive-search firm', 'Head of Talent at a telecom group', 'Reward Manager'],
      projects: ['250+ C-level and director searches', 'Compensation benchmarks for 40+ companies', 'Board-member searches', 'Leadership pipelines for nationalisation targets'],
      req: 'SHRM-SCP or CIPD Level 7. WorldatWork CCP a plus. Experience in an AESC member firm.',
      ideal: 'Companies hiring a CEO, CFO or GM for the first time; family groups bringing in outside executives.',
      qs: ['What does a CFO for a SAR 800M family group cost in Riyadh, all in?', 'Search firm or in-house search for our first COO?', 'How do I test a candidate’s real track record beyond the interview?'],
    },
    ar: {
      title: 'قائد البحث عن التنفيذيين ومقارنة التعويضات', former: 'شريك في شركة إقليمية للبحث عن التنفيذيين', seniority: 'شريك أو مدير',
      industries: 'البنوك والخدمات المالية والاتصالات والمجموعات العائلية والتقنية',
      past: ['شريك في شركة إقليمية للبحث عن التنفيذيين', 'رئيس المواهب في مجموعة اتصالات', 'مدير المكافآت'],
      projects: ['أكثر من 250 عملية بحث عن قيادات عليا ومديرين', 'مقارنات تعويضات لأكثر من 40 شركة', 'البحث عن أعضاء مجالس إدارة', 'مسارات القيادات لأهداف التوطين'],
      req: 'شهادة SHRM-SCP أو CIPD المستوى 7. وشهادة CCP من WorldatWork ميزة إضافية. خبرة في شركة عضو في AESC.',
      ideal: 'الشركات التي توظّف رئيسًا تنفيذيًا أو مديرًا ماليًا أو مديرًا عامًا لأول مرة، والمجموعات العائلية التي تستقطب تنفيذيين من الخارج.',
      qs: ['كم يكلّف مدير مالي لمجموعة عائلية إيراداتها 800 مليون ريال في الرياض، بكل شيء؟', 'شركة بحث أم بحث داخلي عن أول مدير عمليات لنا؟', 'كيف أختبر السجلّ الحقيقي للمرشّح أبعد من المقابلة؟'],
    },
    ru: {
      title: 'Руководитель executive search и бенчмаркинга вознаграждений', former: 'Партнёр региональной компании по поиску руководителей', seniority: 'Партнёр или директор',
      industries: 'Банки и финансовые услуги, телеком, семейные холдинги, технологии',
      past: ['Партнёр региональной компании по поиску руководителей', 'Руководитель по талантам в телеком-группе', 'Менеджер по вознаграждениям'],
      projects: ['250+ поисков топ-менеджеров и директоров', 'Бенчмарки вознаграждений для 40+ компаний', 'Поиск членов советов директоров', 'Кадровый резерв руководителей под квоты локализации'],
      req: 'SHRM-SCP или CIPD Level 7. WorldatWork CCP будет плюсом. Опыт в компании, входящей в AESC.',
      ideal: 'Компании, которые впервые нанимают CEO, финансового или генерального директора; семейные группы, приглашающие руководителей со стороны.',
      qs: ['Сколько стоит финансовый директор для семейной группы с выручкой 800 млн риалов в Эр-Рияде, со всеми выплатами?', 'Кадровое агентство или свой поиск для нашего первого операционного директора?', 'Как проверить реальные достижения кандидата дальше собеседования?'],
    },
  },
  {
    id: 'US-01', slug: 'saas-pricing-monetisation-strategist-usa', home: 'US', years: 19, price: 1200, cov: 3,
    fields: ['pricing', 'strategy'], ind: ['tech', 'marketplaces', 'finserv'], groups: ['usa', 'europe'], codes: 'US · EU · Global', langs: ['en'],
    consultant: none(),
    en: {
      title: 'SaaS pricing and monetisation strategist', former: 'VP Pricing and Packaging at a public SaaS company', seniority: 'VP or principal',
      industries: 'B2B SaaS, marketplaces, fintech platforms (business side)',
      past: ['VP Pricing and Packaging at a public SaaS company', 'Principal at a pricing consultancy', 'Head of Monetisation', 'Senior Product Manager'],
      projects: ['Pricing and packaging resets at 40+ SaaS companies from USD 5M to 1B ARR', 'Usage-based pricing migrations', 'Price rises on the installed base with churn held under target', 'Marketplace take-rate design'],
      req: 'MBA from a top school. Certified Pricing Professional (Professional Pricing Society) a plus.',
      ideal: 'GCC and Egyptian SaaS and platform companies; marketplaces setting their commission.',
      qs: ['Per seat or usage-based for our HR software in the GCC?', 'How do I raise prices 15% on existing customers without a churn spike?', 'What take rate can a B2B marketplace for construction materials sustain?'],
    },
    ar: {
      title: 'استراتيجي تسعير وتحقيق دخل لشركات SaaS', former: 'نائب رئيس التسعير والباقات في شركة SaaS مدرجة', seniority: 'نائب رئيس أو مستشار رئيسي',
      industries: 'شركات SaaS للأعمال ومنصات البيع ومنصات التقنية المالية (الجانب التجاري)',
      past: ['نائب رئيس التسعير والباقات في شركة SaaS مدرجة', 'مستشار رئيسي في شركة استشارات تسعير', 'رئيس تحقيق الدخل', 'مدير منتج أول'],
      projects: ['إعادة بناء التسعير والباقات في أكثر من 40 شركة SaaS بإيرادات سنوية متكررة من 5 ملايين إلى مليار دولار', 'الانتقال إلى التسعير حسب الاستخدام', 'رفع الأسعار على العملاء الحاليين مع إبقاء التسرّب تحت الهدف', 'تصميم نسبة عمولة منصات البيع'],
      req: 'ماجستير إدارة أعمال من كلية مرموقة. وشهادة Certified Pricing Professional ميزة إضافية.',
      ideal: 'شركات SaaS والمنصات في الخليج ومصر، ومنصات البيع التي تحدّد عمولتها.',
      qs: ['لكل مستخدم أم حسب الاستخدام لبرنامج الموارد البشرية لدينا في الخليج؟', 'كيف أرفع الأسعار 15% على العملاء الحاليين دون قفزة في التسرّب؟', 'ما نسبة العمولة التي تتحمّلها منصة B2B لمواد البناء؟'],
    },
    ru: {
      title: 'Стратег по ценообразованию и монетизации SaaS', former: 'Вице-президент по ценам и пакетам в публичной SaaS-компании', seniority: 'Вице-президент или principal',
      industries: 'B2B SaaS, маркетплейсы, финтех-платформы (бизнес-сторона)',
      past: ['Вице-президент по ценам и пакетам в публичной SaaS-компании', 'Principal в консалтинге по ценообразованию', 'Руководитель монетизации', 'Старший продакт-менеджер'],
      projects: ['Пересборка цен и пакетов в 40+ SaaS-компаниях с ARR от 5 млн до 1 млрд $', 'Переходы на оплату по использованию', 'Повышение цен для текущих клиентов с оттоком ниже цели', 'Дизайн комиссии маркетплейсов'],
      req: 'MBA сильной школы. Certified Pricing Professional будет плюсом.',
      ideal: 'SaaS и платформы из стран Залива и Египта; маркетплейсы, которые выбирают свою комиссию.',
      qs: ['За место или за использование для нашего HR-софта в странах Залива?', 'Как поднять цены на 15% для текущих клиентов без всплеска оттока?', 'Какую комиссию выдержит B2B-маркетплейс стройматериалов?'],
    },
  },
  {
    id: 'US-02', slug: 'venture-growth-equity-partner-usa', home: 'US', years: 32, price: 3000, cov: 3,
    fields: ['startup', 'valuation', 'fundraising'], ind: ['tech', 'finserv', 'marketplaces'], groups: ['usa', 'europe', 'gcc', 'india'], codes: 'US · EU · MENA · IN', langs: ['en'],
    consultant: none(),
    en: {
      title: 'Venture and growth-equity investment partner', former: 'Managing Partner at a venture fund', seniority: 'Managing partner',
      industries: 'Enterprise software, fintech, consumer internet, marketplaces',
      past: ['Managing Partner at a venture or growth fund', 'General Partner', 'Operating Partner', 'Earlier: founder-operator and investment banker'],
      projects: ['Led 100+ investments of USD 1M–100M', '30+ board seats', '20+ exits, including IPOs and trade sales', 'Funds of USD 200M–2B; cross-border deals with Gulf limited partners'],
      req: 'MBA from a top school. CFA a plus. A verifiable record: fund vintages, realised exits, board seats.',
      ideal: 'Gulf family offices and corporates building a venture programme; companies weighing a large minority stake; founders preparing a Series B+ raise from US investors.',
      qs: ['We have USD 50M for venture over four years. Direct deals, funds, or both?', 'This Series B is priced at 25× ARR. What would have to be true for it to be worth it?', 'What will a US growth investor ask that a Gulf investor won’t?'],
      border: 'Company and deal evaluation for an institution’s own decision; no personal securities recommendations.',
    },
    ar: {
      title: 'شريك استثمار جريء واستثمار في النمو', former: 'شريك إداري في صندوق استثمار جريء', seniority: 'شريك إداري',
      industries: 'برمجيات المؤسسات والتقنية المالية والإنترنت الاستهلاكي ومنصات البيع',
      past: ['شريك إداري في صندوق استثمار جريء أو صندوق نمو', 'شريك عام', 'شريك تشغيلي', 'سابقًا: مؤسس ومشغّل ومصرفي استثماري'],
      projects: ['قيادة أكثر من 100 استثمار بقيم من مليون إلى 100 مليون دولار', 'أكثر من 30 مقعدًا في مجالس إدارة', 'أكثر من 20 تخارجًا، منها طروحات عامة وصفقات بيع', 'صناديق من 200 مليون إلى ملياري دولار، وصفقات عابرة للحدود مع مستثمرين خليجيين'],
      req: 'ماجستير إدارة أعمال من كلية مرموقة. وشهادة CFA ميزة إضافية. سجلّ قابل للتحقق: إصدارات الصناديق، والتخارجات المحققة، ومقاعد مجالس الإدارة.',
      ideal: 'المكاتب العائلية والشركات الخليجية التي تبني برنامج استثمار جريء، والشركات التي تدرس حصة أقلية كبيرة، والمؤسسون الذين يستعدون لجولة B أو ما بعدها من مستثمرين أمريكيين.',
      qs: ['لدينا 50 مليون دولار للاستثمار الجريء على أربع سنوات. صفقات مباشرة، أم صناديق، أم الاثنان؟', 'هذه الجولة B مسعّرة بـ25 ضعف الإيرادات السنوية المتكررة. ما الذي يجب أن يكون صحيحًا لتستحق ذلك؟', 'ماذا سيسأل مستثمر النمو الأمريكي ولا يسأله المستثمر الخليجي؟'],
      border: 'تقييم الشركات والصفقات لقرار المؤسسة نفسها، دون توصيات بأوراق مالية للأفراد.',
    },
    ru: {
      title: 'Партнёр венчурного фонда и фонда роста', former: 'Управляющий партнёр венчурного фонда', seniority: 'Управляющий партнёр',
      industries: 'Корпоративный софт, финтех, потребительский интернет, маркетплейсы',
      past: ['Управляющий партнёр венчурного фонда или фонда роста', 'Генеральный партнёр', 'Операционный партнёр', 'Ранее: основатель-операционист и инвестбанкир'],
      projects: ['Руководил 100+ инвестициями от 1 до 100 млн $', '30+ мест в советах директоров', '20+ выходов, включая IPO и продажи стратегам', 'Фонды на 200 млн – 2 млрд $, трансграничные сделки с LP из стран Залива'],
      req: 'MBA сильной школы. CFA будет плюсом. Проверяемая история: поколения фондов, реализованные выходы, места в советах.',
      ideal: 'Семейные офисы и корпорации из стран Залива, которые строят венчурную программу; компании, обдумывающие крупную миноритарную долю; основатели перед раундом B+ от американских инвесторов.',
      qs: ['У нас 50 млн $ на венчур на четыре года. Прямые сделки, фонды или и то и другое?', 'Раунд B оценён в 25× ARR. Что должно быть правдой, чтобы это того стоило?', 'О чём спросит американский инвестор роста, о чём не спросит инвестор из Залива?'],
      border: 'Оценка компаний и сделок для собственного решения институции, без персональных рекомендаций по ценным бумагам.',
    },
  },
  {
    id: 'US-03', slug: 'fractional-cfo-mid-market-usa', home: 'US', years: 28, price: 1250, cov: 1,
    fields: ['finance', 'fundraising', 'risk'], ind: ['fmcg', 'retail', 'services', 'industrial'], groups: ['usa'], codes: 'US', langs: ['en'],
    consultant: none(),
    en: {
      title: 'Fractional CFO for PE-backed and founder-led mid-market companies', former: 'CFO of PE-backed companies', seniority: 'C-level',
      industries: 'Consumer brands, e-commerce, business services, light manufacturing',
      past: ['CFO of PE-backed companies', 'VP FP&A', 'Corporate Controller', 'Audit Manager at a Big Four firm'],
      projects: ['CFO for 15+ companies with USD 20M–500M revenue', 'Eight exits to PE or strategic buyers', 'FP&A and 13-week cash systems', 'Debt raises of USD 10M–200M; quality-of-earnings preparation'],
      req: 'CPA (active or inactive) and/or CMA. MBA. Lender reporting and covenant management.',
      ideal: 'Brands entering the US; companies preparing for PE investment; founders who want a CFO’s view before they hire one.',
      qs: ['We’re going into US retail. How much working capital will the first year eat?', 'A PE fund sent a letter of intent. What will the quality-of-earnings review find?', 'Which KPIs does our monthly board pack need at our size?'],
    },
    ar: {
      title: 'مدير مالي بدوام جزئي للشركات المتوسطة المملوكة لصناديق الملكية الخاصة والمؤسسين', former: 'مدير مالي لشركات مملوكة لصناديق ملكية خاصة', seniority: 'إدارة عليا',
      industries: 'العلامات الاستهلاكية والتجارة الإلكترونية وخدمات الأعمال والصناعات الخفيفة',
      past: ['مدير مالي لشركات مملوكة لصناديق ملكية خاصة', 'نائب رئيس التخطيط والتحليل المالي', 'المراقب المالي للشركة', 'مدير تدقيق في إحدى شركات Big Four'],
      projects: ['مدير مالي لأكثر من 15 شركة إيراداتها من 20 إلى 500 مليون دولار', 'ثمانية تخارجات لصناديق ملكية خاصة أو مشترين استراتيجيين', 'أنظمة للتخطيط المالي وللسيولة على 13 أسبوعًا', 'جمع ديون من 10 إلى 200 مليون دولار، والتحضير لمراجعة جودة الأرباح'],
      req: 'شهادة CPA (سارية أو غير سارية) و/أو CMA. ماجستير إدارة أعمال. وخبرة في تقارير المقرضين وإدارة التعهدات.',
      ideal: 'العلامات التي تدخل السوق الأمريكية، والشركات التي تستعد لاستثمار من صناديق الملكية الخاصة، والمؤسسون الذين يريدون رأي مدير مالي قبل توظيفه.',
      qs: ['ندخل التجزئة الأمريكية. كم سيستهلك رأس المال العامل في السنة الأولى؟', 'أرسل صندوق ملكية خاصة خطاب نوايا. ماذا ستكشف مراجعة جودة الأرباح؟', 'ما المؤشرات التي يحتاجها تقرير مجلس الإدارة الشهري بحجمنا؟'],
    },
    ru: {
      title: 'Финансовый директор на частичную занятость для среднего бизнеса с PE-инвесторами и основателями', former: 'Финансовый директор компаний с PE-инвесторами', seniority: 'Топ-менеджмент',
      industries: 'Потребительские бренды, e-commerce, бизнес-услуги, лёгкая промышленность',
      past: ['Финансовый директор компаний с PE-инвесторами', 'Вице-президент по FP&A', 'Корпоративный контролёр', 'Менеджер по аудиту в компании «большой четвёрки»'],
      projects: ['Финансовый директор 15+ компаний с выручкой от 20 до 500 млн $', 'Восемь выходов к PE-фондам или стратегам', 'Системы FP&A и 13-недельного прогноза денег', 'Привлечение долга на 10–200 млн $, подготовка к проверке качества прибыли'],
      req: 'CPA (действующий или нет) и/или CMA. MBA. Отчётность перед кредиторами и управление ковенантами.',
      ideal: 'Бренды, которые выходят в США; компании перед PE-инвестициями; основатели, которым нужен взгляд финдиректора до его найма.',
      qs: ['Мы заходим в американские сети. Сколько оборотного капитала съест первый год?', 'PE-фонд прислал письмо о намерениях. Что найдёт проверка качества прибыли?', 'Какие KPI нужны в ежемесячном пакете для совета директоров при нашем размере?'],
    },
  },
  {
    id: 'US-04', slug: 'chief-people-officer-scaleups-usa', home: 'US', years: 26, price: 1400, cov: 2,
    fields: ['hr', 'recruitment'], ind: ['tech', 'fmcg', 'services'], groups: ['usa', 'europe'], codes: 'US · UK · EU', langs: ['en'],
    consultant: none(),
    en: {
      title: 'Chief People Officer, scale-ups and organisation design', former: 'Chief People Officer', seniority: 'C-level',
      industries: 'Technology, consumer brands, professional services',
      past: ['Chief People Officer', 'SVP People', 'Head of HR Business Partners', 'Organisation-design consultant'],
      projects: ['Scaled organisations from 100 to 3,000+ people', '10+ reorganisations', 'Levelling and compensation frameworks', 'US-to-EMEA expansion; culture integration after six acquisitions'],
      req: 'SHRM-SCP and/or SPHR. Master’s in organisational psychology or HR, or an MBA. ICF PCC coaching credential a plus.',
      ideal: 'GCC and Egyptian scale-ups between 100 and 1,000 people; companies integrating an acquisition.',
      qs: ['We doubled to 400 people in 18 months. Which layer of management do we add first?', 'How do we level engineers in Cairo and Dubai on one framework?', 'We’re merging two teams after an acquisition. How do I keep the top 20%?'],
    },
    ar: {
      title: 'رئيس الموارد البشرية للشركات سريعة النمو وتصميم المنظمات', former: 'رئيس الموارد البشرية', seniority: 'إدارة عليا',
      industries: 'التقنية والعلامات الاستهلاكية والخدمات المهنية',
      past: ['رئيس الموارد البشرية', 'نائب أول للرئيس للموارد البشرية', 'رئيس شركاء أعمال الموارد البشرية', 'مستشار تصميم المنظمات'],
      projects: ['توسيع منظمات من 100 إلى أكثر من 3,000 شخص', 'أكثر من 10 عمليات إعادة تنظيم', 'أطر المستويات الوظيفية والتعويضات', 'التوسع من الولايات المتحدة إلى أوروبا والشرق الأوسط، ودمج الثقافات بعد ست عمليات استحواذ'],
      req: 'شهادة SHRM-SCP و/أو SPHR. ماجستير في علم النفس التنظيمي أو الموارد البشرية، أو ماجستير إدارة أعمال. وشهادة ICF PCC في التدريب ميزة إضافية.',
      ideal: 'الشركات سريعة النمو في الخليج ومصر بين 100 و1,000 موظف، والشركات التي تدمج عملية استحواذ.',
      qs: ['تضاعفنا إلى 400 شخص في 18 شهرًا. أي طبقة إدارية نضيف أولًا؟', 'كيف نصنّف المهندسين في القاهرة ودبي على إطار واحد؟', 'ندمج فريقين بعد استحواذ. كيف أحتفظ بأفضل 20%؟'],
    },
    ru: {
      title: 'Директор по персоналу для быстрорастущих компаний и дизайна организаций', former: 'Директор по персоналу (Chief People Officer)', seniority: 'Топ-менеджмент',
      industries: 'Технологии, потребительские бренды, профессиональные услуги',
      past: ['Директор по персоналу (Chief People Officer)', 'Старший вице-президент по персоналу', 'Руководитель HR бизнес-партнёров', 'Консультант по дизайну организаций'],
      projects: ['Рост организаций со 100 до 3 000+ человек', '10+ реорганизаций', 'Системы грейдов и вознаграждений', 'Экспансия из США в EMEA, интеграция культур после шести сделок M&A'],
      req: 'SHRM-SCP и/или SPHR. Магистратура по организационной психологии или HR либо MBA. Коучинговый сертификат ICF PCC будет плюсом.',
      ideal: 'Быстрорастущие компании из стран Залива и Египта на 100–1 000 человек; компании, интегрирующие приобретение.',
      qs: ['За 18 месяцев мы выросли вдвое, до 400 человек. Какой уровень управления добавить первым?', 'Как выстроить грейды инженеров в Каире и Дубае в одной системе?', 'Мы объединяем две команды после сделки. Как удержать лучших 20%?'],
    },
  },
  {
    id: 'US-05', slug: 'global-supply-chain-sourcing-vp-usa', home: 'US', years: 30, price: 2600, cov: 3,
    fields: ['supply', 'procurement'], ind: ['fmcg', 'retail', 'tech', 'fashion'], groups: ['usa', 'china', 'sea'], codes: 'US · MX · CN · SEA', langs: ['en', 'es'],
    consultant: none(),
    en: {
      title: 'Global supply chain and strategic sourcing VP', former: 'Chief Supply Chain Officer', seniority: 'VP or Chief Supply Chain Officer',
      industries: 'Consumer goods, retail, consumer electronics, apparel',
      past: ['Chief Supply Chain Officer', 'VP Global Sourcing', 'Director of Logistics', 'Supply Planning Lead'],
      projects: ['Global sourcing of USD 500M–5B across China, Vietnam, India and Mexico', 'Network redesigns of 10–40 distribution centres', 'Tariff-driven re-sourcing programmes', 'S&OP implementations and 3PL tenders'],
      req: 'ASCM/APICS CSCP and/or CPIM. ISM CPSM. MBA or MS in supply chain. Six Sigma Black Belt a plus.',
      ideal: 'Brands sourcing from Asia for the GCC or the US; retailers redesigning their warehouse network; manufacturers diversifying away from one supply country.',
      qs: ['We source 80% from one Chinese supplier. How do I diversify without raising costs more than 5%?', 'One distribution centre in Jebel Ali, or two with one in Riyadh?', 'How do I set up S&OP in a 300-person company without a big system?'],
    },
    ar: {
      title: 'نائب رئيس سلاسل الإمداد العالمية والتوريد الاستراتيجي', former: 'رئيس سلاسل الإمداد', seniority: 'نائب رئيس أو رئيس سلاسل الإمداد',
      industries: 'السلع الاستهلاكية والتجزئة والإلكترونيات الاستهلاكية والملابس',
      past: ['رئيس سلاسل الإمداد', 'نائب رئيس التوريد العالمي', 'مدير الخدمات اللوجستية', 'قائد تخطيط الإمداد'],
      projects: ['توريد عالمي من 500 مليون إلى 5 مليارات دولار عبر الصين وفيتنام والهند والمكسيك', 'إعادة تصميم شبكات من 10 إلى 40 مركز توزيع', 'برامج إعادة توريد بسبب الرسوم الجمركية', 'تطبيق تخطيط المبيعات والعمليات ومناقصات مزوّدي الخدمات اللوجستية'],
      req: 'شهادة CSCP و/أو CPIM من ASCM/APICS. شهادة CPSM من ISM. ماجستير إدارة أعمال أو ماجستير في سلاسل الإمداد. والحزام الأسود في Six Sigma ميزة إضافية.',
      ideal: 'العلامات التي تورّد من آسيا للخليج أو للولايات المتحدة، وتجّار التجزئة الذين يعيدون تصميم شبكة مستودعاتهم، والمصنّعون الذين يبتعدون عن الاعتماد على بلد توريد واحد.',
      qs: ['نورّد 80% من مورّد صيني واحد. كيف أنوّع دون أن ترتفع التكاليف أكثر من 5%؟', 'مركز توزيع واحد في جبل علي، أم اثنان أحدهما في الرياض؟', 'كيف أطبّق تخطيط المبيعات والعمليات في شركة من 300 شخص دون نظام كبير؟'],
    },
    ru: {
      title: 'Вице-президент по глобальным цепям поставок и стратегическим закупкам', former: 'Директор по цепям поставок (Chief Supply Chain Officer)', seniority: 'Вице-президент или директор по цепям поставок',
      industries: 'Товары народного потребления, ритейл, потребительская электроника, одежда',
      past: ['Директор по цепям поставок (Chief Supply Chain Officer)', 'Вице-президент по глобальным закупкам', 'Директор по логистике', 'Руководитель планирования поставок'],
      projects: ['Глобальные закупки на 500 млн – 5 млрд $ в Китае, Вьетнаме, Индии и Мексике', 'Перестройка сетей из 10–40 распределительных центров', 'Перенос закупок из-за пошлин', 'Внедрение S&OP и тендеры 3PL'],
      req: 'ASCM/APICS CSCP и/или CPIM. ISM CPSM. MBA или магистратура по цепям поставок. Six Sigma Black Belt будет плюсом.',
      ideal: 'Бренды, которые закупают в Азии для стран Залива или США; ритейлеры, перестраивающие складскую сеть; производители, уходящие от зависимости от одной страны.',
      qs: ['80% закупок у одного китайского поставщика. Как диверсифицироваться, не подняв затраты больше чем на 5%?', 'Один распределительный центр в Джебель-Али или два, второй в Эр-Рияде?', 'Как запустить S&OP в компании на 300 человек без большой системы?'],
    },
  },
  {
    id: 'AE-01', slug: 'transaction-valuation-partner-uk', home: 'UK', years: 29, price: 2150, cov: 3,
    fields: ['valuation', 'startup', 'finance'], ind: ['services', 'industrial', 'fmcg', 'tech'], groups: ['europe', 'gcc'], codes: 'UK · EU · GCC', langs: ['en'],
    consultant: none(),
    en: {
      title: 'Transaction and valuation advisory partner', former: 'Partner, Transaction Services, in London', seniority: 'Partner',
      industries: 'Business services, industrials, consumer, technology',
      past: ['Partner, Valuations or Transaction Services, at a Big Four or mid-tier firm in London', 'Corporate Finance Director', 'Head of M&A at a listed group'],
      projects: ['300+ valuations and financial due diligences, enterprise values of GBP 5M–1B', 'Sell-side and buy-side support', 'Purchase-price allocations', 'Cross-border deals with GCC buyers'],
      req: 'ACA (ICAEW) or ACCA. CFA charter. MBA a plus.',
      ideal: 'GCC buyers acquiring UK or European companies; owners selling to a European buyer.',
      qs: ['We’re buying a UK distributor at 8× EBITDA. What does financial due diligence usually find at this size?', 'Locked box or completion accounts: which works better for us as the buyer?', 'How do I value a loss-making tech company the seller calls “strategic”?'],
      border: 'Expert-witness and court valuations are out of scope.',
    },
    ar: {
      title: 'شريك استشارات الصفقات والتقييم', former: 'شريك خدمات الصفقات في لندن', seniority: 'شريك',
      industries: 'خدمات الأعمال والصناعة والسلع الاستهلاكية والتقنية',
      past: ['شريك التقييم أو خدمات الصفقات في إحدى شركات Big Four أو الشركات المتوسطة في لندن', 'مدير تمويل الشركات', 'رئيس الاندماج والاستحواذ في مجموعة مدرجة'],
      projects: ['أكثر من 300 عملية تقييم وفحص مالي نافٍ للجهالة، بقيم منشآت من 5 ملايين إلى مليار جنيه إسترليني', 'دعم البائعين والمشترين', 'توزيع سعر الشراء', 'صفقات عابرة للحدود مع مشترين خليجيين'],
      req: 'زمالة ACA (ICAEW) أو ACCA. شهادة CFA. وماجستير إدارة الأعمال ميزة إضافية.',
      ideal: 'المشترون الخليجيون الذين يستحوذون على شركات بريطانية أو أوروبية، وأصحاب الأعمال الذين يبيعون لمشترٍ أوروبي.',
      qs: ['نشتري موزّعًا بريطانيًا بـ8 أضعاف EBITDA. ماذا يكشف الفحص المالي عادةً عند هذا الحجم؟', 'الصندوق المغلق أم حسابات الإتمام: أيهما أفضل لنا كمشترين؟', 'كيف أقيّم شركة تقنية خاسرة يصفها البائع بأنها «استراتيجية»؟'],
      border: 'التقييمات للمحاكم وشهادة الخبير خارج النطاق.',
    },
    ru: {
      title: 'Партнёр по консультированию сделок и оценке', former: 'Партнёр по сопровождению сделок в Лондоне', seniority: 'Партнёр',
      industries: 'Бизнес-услуги, промышленность, потребительский сектор, технологии',
      past: ['Партнёр по оценке или сопровождению сделок в компании «большой четвёрки» или среднего уровня в Лондоне', 'Директор по корпоративным финансам', 'Руководитель M&A в публичной группе'],
      projects: ['300+ оценок и финансовых due diligence, стоимость бизнеса от 5 млн до 1 млрд фунтов стерлингов', 'Сопровождение продавцов и покупателей', 'Распределение цены покупки', 'Трансграничные сделки с покупателями из стран Залива'],
      req: 'ACA (ICAEW) или ACCA. CFA. MBA будет плюсом.',
      ideal: 'Покупатели из стран Залива, приобретающие британские или европейские компании; владельцы, продающие бизнес европейскому покупателю.',
      qs: ['Покупаем британского дистрибьютора по 8× EBITDA. Что обычно находит финансовый due diligence при таком размере?', 'Locked box или completion accounts: что выгоднее нам как покупателю?', 'Как оценить убыточную технологическую компанию, которую продавец называет «стратегической»?'],
      border: 'Оценки для суда и роль эксперта-свидетеля вне рамок.',
    },
  },
  {
    id: 'AE-02', slug: 'industrial-b2b-pricing-excellence-lead-germany', home: 'DE', years: 24, price: 1225, cov: 3,
    fields: ['pricing', 'sales'], ind: ['industrial', 'energy', 'realestate'], groups: ['europe'], codes: 'DE · DACH · EU', langs: ['de', 'en'],
    consultant: none(),
    en: {
      title: 'Industrial B2B pricing excellence lead', former: 'Head of Pricing Excellence at an industrial group', seniority: 'Director or partner',
      industries: 'Industrial manufacturing, chemicals, building materials, components',
      past: ['Head of Pricing Excellence at an industrial group', 'Principal at a pricing consultancy', 'Commercial Excellence Director', 'Key Account Manager'],
      projects: ['Pricing programmes at 25+ industrial companies with EUR 100M–10B revenue', 'Value-based pricing', 'Price-waterfall leakage reviews recovering 1.5–4 margin points', 'Raw-material surcharge mechanisms and deal-desk set-ups'],
      req: 'Master’s or Diplom in engineering or business. PhD a plus. Certified Pricing Professional a plus.',
      ideal: 'GCC and Egyptian manufacturers (steel, cables, chemicals, building materials) with discount leakage; distributors selling to contractors.',
      qs: ['Our sales team gives a 22% average discount. How much of it is leakage?', 'How do we pass on a 12% raw-material rise to contractors without losing tenders?', 'Value-based pricing for a commodity product: possible, or a myth?'],
    },
    ar: {
      title: 'قائد تميّز التسعير للصناعة والأعمال بين الشركات', former: 'رئيس تميّز التسعير في مجموعة صناعية', seniority: 'مدير أو شريك',
      industries: 'التصنيع الصناعي والكيماويات ومواد البناء والمكوّنات',
      past: ['رئيس تميّز التسعير في مجموعة صناعية', 'مستشار رئيسي في شركة استشارات تسعير', 'مدير التميّز التجاري', 'مدير حسابات رئيسية'],
      projects: ['برامج تسعير في أكثر من 25 شركة صناعية إيراداتها من 100 مليون إلى 10 مليارات يورو', 'التسعير القائم على القيمة', 'مراجعات تسرّب شلال الأسعار استعادت 1.5–4 نقاط من الهامش', 'آليات رسوم المواد الخام وتأسيس مكاتب اعتماد الصفقات'],
      req: 'ماجستير أو دبلوم في الهندسة أو الأعمال. والدكتوراه ميزة إضافية، وكذلك شهادة Certified Pricing Professional.',
      ideal: 'المصنّعون في الخليج ومصر (الصلب والكابلات والكيماويات ومواد البناء) الذين يعانون تسرّب الخصومات، والموزعون الذين يبيعون للمقاولين.',
      qs: ['فريق المبيعات يمنح خصمًا متوسطه 22%. كم منه تسرّب؟', 'كيف ننقل ارتفاع المواد الخام 12% إلى المقاولين دون أن نخسر المناقصات؟', 'التسعير بالقيمة لمنتج سلعي: ممكن أم خرافة؟'],
    },
    ru: {
      title: 'Руководитель pricing excellence в промышленном B2B', former: 'Руководитель pricing excellence промышленной группы', seniority: 'Директор или партнёр',
      industries: 'Промышленное производство, химия, стройматериалы, комплектующие',
      past: ['Руководитель pricing excellence промышленной группы', 'Principal в консалтинге по ценообразованию', 'Директор по коммерческой эффективности', 'Менеджер по ключевым клиентам'],
      projects: ['Программы ценообразования в 25+ промышленных компаниях с выручкой от 100 млн до 10 млрд евро', 'Ценообразование на основе ценности', 'Разборы ценового водопада, вернувшие 1,5–4 пункта маржи', 'Механизмы сырьевых надбавок и создание deal desk'],
      req: 'Магистратура или Diplom в инженерии или бизнесе. PhD и Certified Pricing Professional будут плюсом.',
      ideal: 'Производители из стран Залива и Египта (сталь, кабели, химия, стройматериалы) с утечкой скидок; дистрибьюторы, работающие с подрядчиками.',
      qs: ['Продажи дают в среднем 22% скидки. Сколько из них утечка?', 'Как переложить рост сырья на 12% на подрядчиков и не проиграть тендеры?', 'Ценообразование по ценности для сырьевого продукта: реально или миф?'],
    },
  },
  {
    id: 'AE-03', slug: 'procurement-transformation-shared-services-india', home: 'IN', years: 22, price: 175, cov: 2,
    fields: ['procurement', 'supply'], ind: ['industrial', 'telecom', 'retail', 'services'], groups: ['india', 'gcc'], codes: 'IN · UAE · KSA', langs: ['en', 'hi'],
    consultant: none(),
    en: {
      title: 'Procurement transformation and shared-services lead', former: 'Head of Procurement Transformation', seniority: 'Director',
      industries: 'Manufacturing, telecom, retail, business-process outsourcing',
      past: ['Head of Procurement Transformation', 'Director of a global shared-services centre (procure-to-pay)', 'Senior Manager at a consulting firm', 'Category Manager'],
      projects: ['Procure-to-pay transformations for groups processing 5,000–100,000 invoices a month', 'Shared-services centres of 100–600 people serving the GCC and Europe', 'E-sourcing and catalogue programmes', 'Supplier-base reductions of 30–50%'],
      req: 'MBA from an IIM or ISB. MCIPS or CPSM. Lean Six Sigma Green or Black Belt.',
      ideal: 'GCC groups setting up a shared-services or procurement back office; companies drowning in purchase orders.',
      qs: ['We have 3,400 suppliers. How many should we have?', 'Build a procure-to-pay centre in-house, or outsource it?', 'Which approvals can we automate without losing control?'],
    },
    ar: {
      title: 'قائد تحويل المشتريات ومراكز الخدمات المشتركة', former: 'رئيس تحويل المشتريات', seniority: 'مدير',
      industries: 'التصنيع والاتصالات والتجزئة وتعهيد العمليات',
      past: ['رئيس تحويل المشتريات', 'مدير مركز خدمات مشتركة عالمي (من الطلب إلى الدفع)', 'مدير أول في شركة استشارات', 'مدير فئات'],
      projects: ['تحويل دورة الطلب إلى الدفع لمجموعات تعالج من 5,000 إلى 100,000 فاتورة شهريًا', 'مراكز خدمات مشتركة من 100 إلى 600 شخص تخدم الخليج وأوروبا', 'برامج التوريد الإلكتروني والكتالوجات', 'تقليص قاعدة الموردين بنسبة 30–50%'],
      req: 'ماجستير إدارة أعمال من IIM أو ISB. عضوية MCIPS أو شهادة CPSM. والحزام الأخضر أو الأسود في Lean Six Sigma.',
      ideal: 'المجموعات الخليجية التي تؤسّس مركز خدمات مشتركة أو مكتب مشتريات خلفيًا، والشركات الغارقة في أوامر الشراء.',
      qs: ['لدينا 3,400 مورّد. كم يجب أن يكون العدد؟', 'نبني مركزًا للطلب إلى الدفع داخليًا أم نسنده إلى جهة خارجية؟', 'ما الموافقات التي يمكن أتمتتها دون أن نفقد السيطرة؟'],
    },
    ru: {
      title: 'Руководитель трансформации закупок и общих сервисных центров', former: 'Руководитель трансформации закупок', seniority: 'Директор',
      industries: 'Производство, телеком, ритейл, аутсорсинг бизнес-процессов',
      past: ['Руководитель трансформации закупок', 'Директор глобального общего сервисного центра (procure-to-pay)', 'Старший менеджер консалтинговой компании', 'Категорийный менеджер'],
      projects: ['Трансформации procure-to-pay для групп, обрабатывающих 5 000–100 000 счетов в месяц', 'Общие сервисные центры на 100–600 человек для стран Залива и Европы', 'Программы электронных закупок и каталогов', 'Сокращение базы поставщиков на 30–50%'],
      req: 'MBA в IIM или ISB. MCIPS или CPSM. Lean Six Sigma Green или Black Belt.',
      ideal: 'Группы из стран Залива, которые создают общий сервисный центр или бэк-офис закупок; компании, утонувшие в заказах на закупку.',
      qs: ['У нас 3 400 поставщиков. Сколько их должно быть?', 'Строить центр procure-to-pay у себя или отдать на аутсорс?', 'Какие согласования можно автоматизировать, не потеряв контроль?'],
    },
  },
  {
    id: 'AE-04', slug: 'southeast-asia-market-entry-lead-singapore', home: 'SG', years: 20, price: 1125, cov: 3,
    fields: ['market', 'export', 'strategy'], ind: ['fmcg', 'marketplaces', 'retail', 'agri'], groups: ['sea'], codes: 'SG · ID · MY · VN · TH · PH', langs: ['en', 'ms'],
    consultant: none(),
    en: {
      title: 'Southeast Asia market analysis and entry lead', former: 'Head of Strategy APAC at a consumer group', seniority: 'Director',
      industries: 'Consumer goods, e-commerce and marketplaces (Shopee, Lazada, TikTok Shop), halal food, beauty',
      past: ['Head of Strategy APAC at a consumer group', 'Engagement Manager at a strategy consultancy in Singapore', 'Regional Business Development Director', 'Market Research Director'],
      projects: ['25+ entry studies across Indonesia, Malaysia, Vietnam, Thailand and the Philippines', 'Launched 10+ brands', 'Marketplace-led entry plans', 'Halal-certified product launches (business side) and distributor-partner selection'],
      req: 'MBA. Market-research credentials. Strong quantitative skills.',
      ideal: 'GCC and Egyptian food, beauty and FMCG brands looking at Southeast Asia; halal brands looking for scale.',
      qs: ['Indonesia or Malaysia first for a halal snack brand?', 'Shopee first or distributor first in year one?', 'What does a realistic entry budget look like for USD 5M of sales in three years?'],
    },
    ar: {
      title: 'قائد تحليل أسواق جنوب شرق آسيا ودخولها', former: 'رئيس الاستراتيجية لآسيا والمحيط الهادئ في مجموعة استهلاكية', seniority: 'مدير',
      industries: 'السلع الاستهلاكية والتجارة الإلكترونية ومنصات البيع (Shopee وLazada وTikTok Shop) والأغذية الحلال والتجميل',
      past: ['رئيس الاستراتيجية لآسيا والمحيط الهادئ في مجموعة استهلاكية', 'مدير مشاريع في شركة استشارات استراتيجية في سنغافورة', 'مدير تطوير الأعمال الإقليمي', 'مدير أبحاث السوق'],
      projects: ['أكثر من 25 دراسة لدخول إندونيسيا وماليزيا وفيتنام وتايلاند والفلبين', 'إطلاق أكثر من 10 علامات', 'خطط دخول تقودها منصات البيع', 'إطلاق منتجات حاصلة على شهادة الحلال (الجانب التجاري) واختيار الموزعين الشركاء'],
      req: 'ماجستير إدارة أعمال. مؤهلات في أبحاث السوق. وقدرات كمية قوية.',
      ideal: 'علامات الأغذية والتجميل والسلع الاستهلاكية في الخليج ومصر التي تتطلع إلى جنوب شرق آسيا، والعلامات الحلال الباحثة عن نطاق أكبر.',
      qs: ['إندونيسيا أم ماليزيا أولًا لعلامة وجبات خفيفة حلال؟', 'Shopee أولًا أم الموزّع أولًا في السنة الأولى؟', 'كيف تبدو ميزانية دخول واقعية لمبيعات 5 ملايين دولار خلال ثلاث سنوات؟'],
    },
    ru: {
      title: 'Руководитель анализа и выхода на рынки Юго-Восточной Азии', former: 'Руководитель стратегии APAC в потребительской группе', seniority: 'Директор',
      industries: 'Товары народного потребления, e-commerce и маркетплейсы (Shopee, Lazada, TikTok Shop), халяльная еда, красота',
      past: ['Руководитель стратегии APAC в потребительской группе', 'Engagement manager в стратегическом консалтинге в Сингапуре', 'Региональный директор по развитию бизнеса', 'Директор по маркетинговым исследованиям'],
      projects: ['25+ исследований выхода в Индонезию, Малайзию, Вьетнам, Таиланд и на Филиппины', 'Вывел 10+ брендов', 'Планы выхода через маркетплейсы', 'Запуски халяль-сертифицированных продуктов (бизнес-сторона) и выбор дистрибьюторов'],
      req: 'MBA. Квалификация в маркетинговых исследованиях. Сильная количественная подготовка.',
      ideal: 'Бренды еды, красоты и FMCG из стран Залива и Египта, которые смотрят на Юго-Восточную Азию; халяльные бренды, ищущие масштаб.',
      qs: ['Индонезия или Малайзия первой для халяльного бренда снеков?', 'Сначала Shopee или сначала дистрибьютор в первый год?', 'Как выглядит реалистичный бюджет выхода на 5 млн $ продаж за три года?'],
    },
  },
  {
    id: 'AE-05', slug: 'retail-luxury-network-feasibility-director-france', home: 'FR', years: 27, price: 1450, cov: 3,
    fields: ['feasibility', 'franchising', 'market'], ind: ['fashion', 'retail', 'fnb'], groups: ['europe', 'gcc', 'sea'], codes: 'FR · EU · GCC · Asia', langs: ['fr', 'en'],
    consultant: none(),
    en: {
      title: 'Retail and luxury network planning and feasibility director', former: 'International Development Director at a French luxury brand', seniority: 'Director or partner',
      industries: 'Luxury, fashion, beauty, premium retail, cafés and pâtisserie',
      past: ['International Development Director at a French luxury or premium brand', 'Head of Retail Network Planning', 'Partner at a Paris retail consultancy', 'Store Operations Director'],
      projects: ['Opened 200+ stores across Europe, the GCC and Asia', 'Store feasibility and catchment models', 'Partner and franchise selection with Gulf retail groups', 'Mall negotiation strategy (commercial terms); network reviews that closed 10–25% of stores'],
      req: 'Master’s from a grande école or INSEAD. Luxury-management specialisation a plus.',
      ideal: 'GCC retail franchise groups taking on a European brand; premium brands opening a flagship; owners deciding which stores to close.',
      qs: ['Dubai Mall or a high-street flagship in Riyadh for our first store?', 'What sales per square metre must a store reach to cover its occupancy cost?', 'Which 6 of our 38 stores should close, and how do I know?'],
    },
    ar: {
      title: 'مدير تخطيط شبكات متاجر التجزئة والسلع الفاخرة ودراسات جدواها', former: 'مدير التطوير الدولي لعلامة فاخرة فرنسية', seniority: 'مدير أو شريك',
      industries: 'السلع الفاخرة والأزياء والتجميل والتجزئة الراقية والمقاهي والحلويات الفرنسية',
      past: ['مدير التطوير الدولي لعلامة فرنسية فاخرة أو راقية', 'رئيس تخطيط شبكة المتاجر', 'شريك في شركة استشارات تجزئة في باريس', 'مدير عمليات المتاجر'],
      projects: ['افتتاح أكثر من 200 متجر في أوروبا والخليج وآسيا', 'دراسات جدوى المتاجر ونماذج مناطق الجذب', 'اختيار الشركاء وأصحاب الامتياز مع مجموعات التجزئة الخليجية', 'استراتيجية التفاوض مع المراكز التجارية (الشروط التجارية)، ومراجعات شبكات أغلقت 10–25% من المتاجر'],
      req: 'ماجستير من مدرسة فرنسية عليا أو من INSEAD. والتخصص في إدارة السلع الفاخرة ميزة إضافية.',
      ideal: 'مجموعات الامتياز الخليجية التي تتولّى علامة أوروبية، والعلامات الراقية التي تفتتح متجرًا رئيسيًا، وأصحاب الأعمال الذين يقرّرون أي المتاجر يغلقون.',
      qs: ['دبي مول أم متجر رئيسي على شارع تجاري في الرياض لمتجرنا الأول؟', 'ما مبيعات المتر المربع التي يجب أن يبلغها المتجر ليغطي تكلفة الإشغال؟', 'أي 6 من متاجرنا الـ38 يجب إغلاقها، وكيف أعرف؟'],
    },
    ru: {
      title: 'Директор по планированию розничных сетей и ТЭО в ритейле и люксе', former: 'Директор по международному развитию французского люксового бренда', seniority: 'Директор или партнёр',
      industries: 'Люкс, мода, красота, премиальный ритейл, кофейни и кондитерские',
      past: ['Директор по международному развитию французского люксового или премиального бренда', 'Руководитель планирования розничной сети', 'Партнёр парижской консалтинговой компании в ритейле', 'Директор по операциям магазинов'],
      projects: ['Открыл 200+ магазинов в Европе, странах Залива и Азии', 'ТЭО магазинов и модели зон охвата', 'Выбор партнёров и франчайзи среди ритейл-групп Залива', 'Стратегия переговоров с торговыми центрами (коммерческие условия), ревизии сетей с закрытием 10–25% магазинов'],
      req: 'Магистратура grande école или INSEAD. Специализация в управлении люксом будет плюсом.',
      ideal: 'Ритейл-группы Залива, которые берут европейский бренд по франшизе; премиальные бренды, открывающие флагман; владельцы, решающие, какие магазины закрыть.',
      qs: ['Dubai Mall или флагман на торговой улице Эр-Рияда для первого магазина?', 'Какие продажи с квадратного метра нужны магазину, чтобы покрыть аренду?', 'Какие 6 из наших 38 магазинов закрыть и как это понять?'],
    },
  },
];

// ---------- the consultants (usha-brain control-room/brains/consultant-database.md) ----------
// 42 real consultants matched to the specs above, 6 November 2026. The owner
// confirmed all 42 are verified and licensed (usha-brain control-room/
// DECISIONS.md, 2026-11-06), so each has licensed: true.
// THE LICENCE GATE: a consultant's name, profile link and role render only
// when licensed is true. With licensed: false the page shows the spec card for
// their ID instead ("Profile verification in progress", no name, no link).
// A private review build can show unlicensed names, marked "Licence pending":
//   BRAINS_PREVIEW_NAMES=1 node tools/seo/build.mjs   (never for the live site)
// fit: how well the profile fits its spec, from the database. It is NOT the
// brain's fidelity to the consultant and is never shown on the page.
// fee: the database's estimated USD fees (hourly, and monthly for 4 advisory
// hours). years: stated in the database, or counted from a stated start year;
// null where the database says "not specified".
// Profile texts (role, brief, creds, exp) are in English as supplied.
export const CONSULTANTS = [
 {
  "id": "C01",
  "spec": "EG-01",
  "name": "Sherif Sheta",
  "url": "https://eg.linkedin.com/in/sherifsheta",
  "base": "Egypt",
  "groups": [
   "egypt"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    100,
    200
   ],
   "month": [
    400,
    800
   ]
  },
  "years": 27,
  "licensed": true,
  "role": "Commercial Excellence Director, Juhayna",
  "brief": "FMCG commercial leader specialising in pricing, promotion effectiveness, trade terms and revenue growth. His experience includes commercial leadership roles at Juhayna, Egypt Foods and Coca-Cola in the Egyptian consumer market.",
  "creds": "Economics degree, Cairo University; applied computer science minor.",
  "exp": "27+ years.",
  "profile": "https://eg.linkedin.com/in/sherifsheta"
 },
 {
  "id": "C02",
  "spec": "EG-01",
  "name": "Sumner Makin",
  "url": "https://uk.linkedin.com/in/sumnermakin",
  "base": "UK / global",
  "groups": [
   "europe"
  ],
  "fit": 80,
  "cambridge": {
   "type": "PhD",
   "url": "https://cdn.aifirstmindset.ai/wp-content/uploads/2025/12/AIFM-Company-Brochure_Digital_Non-Enterprise-Version-2.pdf"
  },
  "fee": {
   "hour": [
    500,
    1000
   ],
   "month": [
    2000,
    4000
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Partner and UK AI Lead, Bain & Company",
  "brief": "Bain pricing and AI specialist working with consumer brands, retailers and technology companies. His consulting covers pricing, promotions, commercial transformation and the practical use of data and artificial intelligence in business decisions.",
  "creds": "PhD in Physics, University of Cambridge.",
  "exp": "20 years of client work.",
  "profile": "https://cdn.aifirstmindset.ai/wp-content/uploads/2025/12/AIFM-Company-Brochure_Digital_Non-Enterprise-Version-2.pdf"
 },
 {
  "id": "C03",
  "spec": "EG-02",
  "name": "Lamy Riad Makary",
  "url": "https://eg.linkedin.com/in/lamy-riad-makary-cfa-2146b543",
  "base": "Egypt",
  "groups": [
   "egypt"
  ],
  "fit": 85,
  "cambridge": null,
  "fee": {
   "hour": [
    150,
    300
   ],
   "month": [
    600,
    1200
   ]
  },
  "years": 30,
  "licensed": true,
  "role": "Executive Partner / Senior Project Director, HLB Makary Consulting",
  "brief": "Financial and economic feasibility adviser at HLB Makary Consulting. His work covers market studies, investment decisions and project evaluation, drawing on a finance career that began in 1996.",
  "creds": "Economics, American University in Cairo, 1996; CFA.",
  "exp": "Career beginning in 1996; approximately 30 years.",
  "profile": "https://www.hlbegypt.com/employee/ben-johnson/"
 },
 {
  "id": "C04",
  "spec": "EG-03",
  "name": "Hazem Kassem",
  "url": "https://eg.linkedin.com/in/hazemkassem",
  "base": "Egypt",
  "groups": [
   "egypt"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    100,
    200
   ],
   "month": [
    400,
    800
   ]
  },
  "years": 27,
  "licensed": true,
  "role": "Founder / Managing Director, Axcell; consulting CFO",
  "brief": "Fractional CFO advising trading and distribution businesses on cash flow, working capital, financial controls and capital structure. His work also includes ERP implementation, financial reporting and business turnaround support.",
  "creds": "BCom in Accounting, Cairo University; CMA, Institute of Management Accountants.",
  "exp": "27–28 completed professional years.",
  "profile": "https://axcellservice.com/about/founder"
 },
 {
  "id": "C05",
  "spec": "EG-04",
  "name": "Mark Eaton",
  "url": "https://uk.linkedin.com/in/mark-eaton-932219b",
  "base": "UK / Middle East",
  "groups": [
   "europe",
   "gcc"
  ],
  "fit": 80,
  "cambridge": {
   "type": "PhD",
   "url": "https://www.talentcapitalme.com/ourteam.php"
  },
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 33,
  "licensed": true,
  "role": "Associate Director, Talent Capital; human-capital and organisational-effectiveness consultant",
  "brief": "Human-capital consultant and former Hay Group Middle East managing director. His work covers job evaluation, grading, remuneration, HR infrastructure and the implementation of changes to organisational structures and effectiveness.",
  "creds": "PhD in Natural Sciences, University of Cambridge.",
  "exp": "33+ years in human-capital consulting.",
  "profile": "https://www.talentcapitalme.com/ourteam.php"
 },
 {
  "id": "C06",
  "spec": "EG-04",
  "name": "Nehal Abdel Aziz",
  "url": "https://eg.linkedin.com/in/nehal-abdel-aziz-shrm-scp-a59a01206",
  "base": "Egypt",
  "groups": [
   "egypt"
  ],
  "fit": 80,
  "cambridge": null,
  "fee": {
   "hour": [
    75,
    150
   ],
   "month": [
    300,
    600
   ]
  },
  "years": 22,
  "licensed": true,
  "role": "HR consultant and trainer associated with AmCham Egypt",
  "brief": "HR consultant and trainer with banking-sector experience. Her work combines HR systems, workforce capability and organisation development, supported by professional HR training and experience working with business teams in Egypt.",
  "creds": "SHRM-SCP; HR diploma, American University in Cairo; Pharmacy degree, Cairo University.",
  "exp": "22+ years.",
  "profile": "https://eg.linkedin.com/in/nehal-abdel-aziz-shrm-scp-a59a01206"
 },
 {
  "id": "C07",
  "spec": "EG-05",
  "name": "Mahmoud El-Tahan",
  "url": "https://eg.linkedin.com/in/mahmoud-el-tahan-402a7930",
  "base": "Egypt",
  "groups": [
   "egypt"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    100,
    200
   ],
   "month": [
    400,
    800
   ]
  },
  "years": 19,
  "licensed": true,
  "role": "Director Talent Acquisition, Capgemini Egypt",
  "brief": "Technology and BPO talent-acquisition leader at Capgemini Egypt, with earlier experience at Amazon, Concentrix and Raya. His work centres on recruitment and talent acquisition for technology, service and growth businesses.",
  "creds": "Ain Shams University studies; management certificate, American University in Cairo; PHR training.",
  "exp": "Nearly 20 years.",
  "profile": "https://cltrsummit.com/speaker/mahmoud-el-tahan-2/"
 },
 {
  "id": "C08",
  "spec": "GC-01",
  "name": "Scott Whalan",
  "url": "https://ae.linkedin.com/in/scott-whalan-66a3ab15",
  "base": "UAE / Gulf",
  "groups": [
   "gcc"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": 23,
  "licensed": true,
  "role": "Partner, Valuation & Modeling; Deloitte Private Middle East leader",
  "brief": "Deloitte partner advising family enterprises and corporate clients on business valuation, mergers and acquisitions, restructuring and financial modelling. His work combines transaction analysis with the financial priorities of Middle Eastern businesses.",
  "creds": "CFA; degree in Mathematics and Finance.",
  "exp": "At Deloitte since 2003.",
  "profile": "https://www.deloitte.com/middle-east/en/services/consulting/services/valuation-modeling.html"
 },
 {
  "id": "C09",
  "spec": "GC-02",
  "name": "Timothy (Tim) Millard",
  "url": "https://ae.linkedin.com/in/tim-millard-b2540a22",
  "base": "UAE / Gulf",
  "groups": [
   "gcc"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    350,
    700
   ],
   "month": [
    1400,
    2800
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Head of Value and Risk Advisory – MENA, JLL",
  "brief": "JLL MENA valuation leader with experience involving Saudi Arabia, major developers and hospitality assets. His work brings together property valuation, investment analysis and advisory perspectives across emerging real-estate markets.",
  "creds": "MBA, Business School Lausanne; MA in Land Economics, University of Cambridge; RICS member.",
  "exp": "20+ years in emerging markets.",
  "profile": "https://www.jll.com/en-us/people/bio-broker/tim.millard"
 },
 {
  "id": "C10",
  "spec": "GC-02",
  "name": "Victoria Ormond",
  "url": "https://www.knightfrank.es/en/contact/people/victoria-ormond-00007849",
  "base": "UK / Europe",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.knightfrank.es/en/contact/people/victoria-ormond-00007849"
  },
  "fee": {
   "hour": [
    300,
    600
   ],
   "month": [
    1200,
    2400
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Partner; Head of Capital Markets Research / Insight, Knight Frank",
  "brief": "Knight Frank partner specialising in real-estate capital markets, property finance, investment analysis and market intelligence. Her professional background includes Savills and RBS, alongside teaching real-estate subjects at Cambridge.",
  "creds": "CFA.",
  "exp": "20+ years in real estate.",
  "profile": "https://www.knightfrank.es/en/contact/people/victoria-ormond-00007849"
 },
 {
  "id": "C11",
  "spec": "GC-03",
  "name": "Mark Fadel",
  "url": "https://ae.linkedin.com/in/mark-fadel",
  "base": "UAE / Gulf",
  "groups": [
   "gcc"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 25,
  "licensed": true,
  "role": "Founder and Managing Director, Sourcing Connections",
  "brief": "Founder of Sourcing Connections, advising on procurement transformation, category strategy and supplier management. His work focuses on helping organisations structure purchasing activity and manage suppliers across their procurement operations.",
  "creds": "Executive MBA, INSEAD; Chartered Fellow, CIPS; BA in Financial Services, London Guildhall; sustainable-supply-chain course, Cambridge.",
  "exp": "25+ years.",
  "profile": "https://www.sourcingconnections.com/about-us/our-core-team/mark-fadel"
 },
 {
  "id": "C12",
  "spec": "GC-04",
  "name": "Sandeep Ganediwalla",
  "url": "https://ae.linkedin.com/in/sandeepganediwalla",
  "base": "UAE / Saudi Arabia",
  "groups": [
   "gcc"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    350,
    700
   ],
   "month": [
    1400,
    2800
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Partner, Redseer Strategy Consultants",
  "brief": "Gulf strategy adviser specialising in consumer markets, retail and the digital economy. His work covers market sizing, ecommerce, channel economics and commercial due diligence for businesses assessing growth and investment opportunities.",
  "creds": "MBA, HEC Paris; exchange studies, London Business School; Production Engineering, VJTI/Mumbai University.",
  "exp": "20+ years in consulting and technology.",
  "profile": "https://redseer.com/author/sandeep-ganediwalla-redseer-consulting-com/"
 },
 {
  "id": "C13",
  "spec": "GC-04",
  "name": "Andi Davids",
  "url": "https://www.linkedin.com/in/andidavids",
  "base": "USA / international",
  "groups": [
   "usa"
  ],
  "fit": 80,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.jbs.cam.ac.uk/students-alumni/andi-davids-driving-strategic-growth-through-creativity/"
  },
  "fee": {
   "hour": [
    350,
    700
   ],
   "month": [
    1400,
    2800
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Chief Growth Officer, Bulletproof",
  "brief": "Consumer-brand strategy and growth adviser with experience across food, beverage and other consumer brands. This work combines customer insight, brand positioning and commercial strategy through a leadership role at Bulletproof.",
  "creds": "Executive MBA, University of Cambridge; BA in Mass Communications; MA in Global Communications.",
  "exp": "Not specified.",
  "profile": "https://www.jbs.cam.ac.uk/students-alumni/andi-davids-driving-strategic-growth-through-creativity/"
 },
 {
  "id": "C14",
  "spec": "GC-04",
  "name": "Omar Merlo",
  "url": "https://uk.linkedin.com/in/omarmerlo",
  "base": "UK / international",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "Teaching",
   "url": "https://profiles.imperial.ac.uk/o.merlo"
  },
  "fee": {
   "hour": [
    350,
    700
   ],
   "month": [
    1400,
    2800
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Marketing-strategy consultant; Associate Professor, Imperial College London",
  "brief": "Marketing-strategy consultant and Imperial associate professor with previous teaching at Cambridge. He advises businesses on customer insight, commercial decisions and marketing effectiveness, with experience across consumer, industrial and financial organisations.",
  "creds": "Degrees in Business and Political Science; honours postgraduate qualification in Business Strategy; PhD in Marketing Strategy, University of Melbourne.",
  "exp": "Not specified.",
  "profile": "https://profiles.imperial.ac.uk/o.merlo"
 },
 {
  "id": "C15",
  "spec": "GC-05",
  "name": "Suhail Khan",
  "url": "https://ae.linkedin.com/in/suhail-khan-fcca-aca-mba-5447b762",
  "base": "UAE / international",
  "groups": [
   "gcc"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Fractional CFO, CFO Centre UAE",
  "brief": "Fractional CFO with conglomerate-finance experience covering debt restructuring, mergers and acquisitions, board advice and treasury. His sector background includes automotive retail, home appliances and real estate, supporting businesses with complex finance needs.",
  "creds": "FCCA; ACA; MBA.",
  "exp": "20+ years.",
  "profile": "https://www.cfocentre.com/ae/meet-the-fds-and-cfos/suhail-khan/"
 },
 {
  "id": "C16",
  "spec": "LM-01",
  "name": "Luma Fawaz",
  "url": "https://jo.linkedin.com/in/luma-fawaz-44091242",
  "base": "Jordan / MENA",
  "groups": [
   "levant",
   "gcc"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    200,
    400
   ],
   "month": [
    800,
    1600
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Managing Director, Manara Ventures; former CEO, Oasis500",
  "brief": "Managing Director of Manara Ventures and former Oasis500 CEO, working on venture evaluation, founder readiness and investment decisions. Her experience connects startup development with the investment landscape of Jordan and MENA.",
  "creds": "MBA.",
  "exp": "20+ years.",
  "profile": "https://www.manaravc.com/"
 },
 {
  "id": "C17",
  "spec": "LM-01",
  "name": "Mohamed (Mark) Khater",
  "url": "https://www.linkedin.com/in/mohamed-mark-k",
  "base": "UK / Egypt / MENA",
  "groups": [
   "europe",
   "egypt"
  ],
  "fit": 75,
  "cambridge": {
   "type": "PhD",
   "url": "https://www.ifm.eng.cam.ac.uk/people/mark2/"
  },
  "fee": {
   "hour": [
    300,
    600
   ],
   "month": [
    1200,
    2400
   ]
  },
  "years": 30,
  "licensed": true,
  "role": "Head, Cambridge Centre for Strategy and Performance; investment and strategy adviser",
  "brief": "Strategy and investment adviser combining Cambridge IfM work with operating and investment roles. His experience spans industrial capabilities, software, telecom and Middle Eastern businesses, including technology-company development in Egypt.",
  "creds": "BSc in Systems/Biomedical Engineering; MSc in Artificial Intelligence; PhD, University of Cambridge.",
  "exp": "30+ years.",
  "profile": "https://www.ifm.eng.cam.ac.uk/people/mark2/"
 },
 {
  "id": "C18",
  "spec": "LM-02",
  "name": "Dr. Brahim Allali",
  "url": "https://ma.linkedin.com/in/dr-brahim-allali-phd-5355631",
  "base": "Morocco / Francophone Africa",
  "groups": [
   "maghreb"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    150,
    300
   ],
   "month": [
    600,
    1200
   ]
  },
  "years": 32,
  "licensed": true,
  "role": "Managing Partner, Reload Consulting",
  "brief": "Export and international-market-entry consultant leading Reload Consulting. His experience includes international-trade leadership at ISCAE and ASMEX export programmes, supporting businesses exploring commercial opportunities in Morocco, Francophone Africa and Europe.",
  "creds": "PhD, HEC Montréal; international-trade studies, ISCAE; AfCFTA export certificate, International Trade Centre.",
  "exp": "Consulting practice since 1994.",
  "profile": "https://asmex.org/wp-content/uploads/2024/02/DBW-Benelux_.pdf"
 },
 {
  "id": "C19",
  "spec": "LM-03",
  "name": "Fethi Derbeli",
  "url": "https://tn.linkedin.com/in/fethi-derbeli-18a3a622",
  "base": "Tunisia / North Africa",
  "groups": [
   "maghreb"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    100,
    200
   ],
   "month": [
    400,
    800
   ]
  },
  "years": 36,
  "licensed": true,
  "role": "Industrial operations and Lean Six Sigma consultant; founder, Smart Solutions Consulting Tunisia",
  "brief": "Manufacturing and lean consultant with automotive-supplier experience. His work combines industrial operations, engineering and continuous-improvement methods, drawing on a background in manufacturing leadership, business management and Six Sigma.",
  "creds": "Engineering studies, ENIS, 1989; Executive MBA, Mediterranean School of Business, 2009; Six Sigma Black Belt, Sequa Corporation Six Sigma School, 2006.",
  "exp": "Professional career beginning in 1990.",
  "profile": "https://viadeo.journaldunet.com/p/derbeli-fethi-6447191"
 },
 {
  "id": "C20",
  "spec": "LM-03",
  "name": "Christoph H. Loch",
  "url": "https://es.linkedin.com/in/christoph-loch-8378b740",
  "base": "Spain / international",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.jbs.cam.ac.uk/2014/new-cambridge-centre-will-spearhead-research-in-the-middle-east-for-the-middle-east/"
  },
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": 40,
  "licensed": true,
  "role": "Professor of Operations, Information and Technology, IESE Business School; non-executive chairman, Prendo",
  "brief": "Operations and project-management adviser with earlier Siemens and McKinsey experience. His industrial consulting and academic work focus on project execution, innovation and operational performance, alongside leadership at simulation provider Prendo.",
  "creds": "PhD in Decision Sciences and Operations Management, Stanford; MBA, University of Tennessee; joint Mechanical Engineering/Business Diplom, Darmstadt; diploma in Clinical Organisational Psychology, INSEAD.",
  "exp": "Siemens, 1986–1989; McKinsey, 1991–1993; subsequent operations teaching and consulting.",
  "profile": "https://www.iese.edu/faculty-research/faculty/christoph-loch/"
 },
 {
  "id": "C21",
  "spec": "LM-03",
  "name": "Duncan McFarlane",
  "url": "https://uk.linkedin.com/in/duncan-mcfarlane-88682982",
  "base": "UK / international",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "PhD",
   "url": "https://www.ifm.eng.cam.ac.uk/people/dm114/"
  },
  "fee": {
   "hour": [
    350,
    700
   ],
   "month": [
    1400,
    2800
   ]
  },
  "years": 46,
  "licensed": true,
  "role": "Professor of Industrial Information Engineering, Cambridge; co-founder, RedBite Solutions",
  "brief": "Manufacturing-systems adviser and RedBite co-founder working on industrial engineering, logistics automation and tracking systems. His Cambridge IfM activity includes practical digitalisation for SMEs, connecting engineering research with business operations.",
  "creds": "BEng, University of Melbourne, 1984; PhD in Robust Control-System Design, University of Cambridge, 1988.",
  "exp": "BHP engineering and research, 1980–1994; Cambridge since 1995; RedBite co-founder since 2006.",
  "profile": "https://www.ifm.eng.cam.ac.uk/people/dm114/"
 },
 {
  "id": "C22",
  "spec": "LM-04",
  "name": "Yendy Nasr Khayat",
  "url": "https://ae.linkedin.com/in/yendy-nasr-khayat-075b674",
  "base": "UAE / Middle East and Africa",
  "groups": [
   "gcc"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    200,
    400
   ],
   "month": [
    800,
    1600
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Founder and Managing Director, The Franchizery",
  "brief": "Founder of The Franchizery, advising food-and-beverage businesses on franchise expansion, master-franchise structures and unit economics. Her work includes regional partner development and the commercial arrangements needed to expand restaurant brands.",
  "creds": "MBA; Certified Franchise Broker.",
  "exp": "Founder of The Franchizery since 2012.",
  "profile": "https://www.thefranchizery.com/"
 },
 {
  "id": "C23",
  "spec": "LM-05",
  "name": "Ghassan Ali",
  "url": "https://jo.linkedin.com/in/ghassanali",
  "base": "Jordan / Gulf",
  "groups": [
   "levant",
   "gcc"
  ],
  "fit": 80,
  "cambridge": null,
  "fee": {
   "hour": [
    150,
    300
   ],
   "month": [
    600,
    1200
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Founder / executive-search leader, Vision International",
  "brief": "Executive-search and leadership adviser at Vision International, focused on senior recruitment for financial institutions, family offices and conglomerates. His work connects leadership hiring with the needs of regional businesses.",
  "creds": "Bachelor-level studies, University of Redlands, 1986–1990.",
  "exp": "Not specified.",
  "profile": "https://jo.linkedin.com/company/visioninternational"
 },
 {
  "id": "C24",
  "spec": "US-01",
  "name": "James D. Wilton",
  "url": "https://www.linkedin.com/in/jamesdwilton",
  "base": "USA / global",
  "groups": [
   "usa"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Founder, Senior Partner and CEO, Monevate",
  "brief": "Founder and CEO of Monevate, specialising in SaaS pricing and monetisation. Previously led McKinsey pricing work for startups and scale-ups, helping technology businesses develop pricing approaches and commercial growth strategies.",
  "creds": "Columbia Business School studies; MSci, University of Cambridge.",
  "exp": "Not specified.",
  "profile": "https://www.monevate.com/about"
 },
 {
  "id": "C25",
  "spec": "US-01",
  "name": "Lucien Bowater",
  "url": "https://uk.linkedin.com/in/lucien-bowater",
  "base": "UK",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.linkedin.com/posts/lucien-bowater_having-studied-at-cambridge-judge-business-activity-7301635233353801729-AzHF"
  },
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 25,
  "licensed": true,
  "role": "Chief Operating Officer, E-ACT; National Theatre Digital Advisory Committee member",
  "brief": "Pricing operator with ten years of pricing work at Sky and subsequent leadership at Olex.AI. Now E-ACT COO and a National Theatre digital adviser, he also teaches pricing to Cambridge MBA students.",
  "creds": "MBA, Cambridge Judge Business School; executive education at Stanford and INSEAD.",
  "exp": "10 years in Sky pricing; 15+ years in senior Sky roles; three years building Olex.AI.",
  "profile": "https://uk.linkedin.com/in/lucien-bowater"
 },
 {
  "id": "C26",
  "spec": "US-02",
  "name": "Iñaki Berenguer",
  "url": "https://www.linkedin.com/in/inakiberenguer",
  "base": "USA / international",
  "groups": [
   "usa"
  ],
  "fit": 90,
  "cambridge": {
   "type": "PhD",
   "url": "https://lifex.vc/team"
  },
  "fee": {
   "hour": [
    500,
    1000
   ],
   "month": [
    2000,
    4000
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Founding Partner, LifeX Ventures",
  "brief": "LifeX Ventures founding partner and founder of Pixable, Contactive and CoverWallet. He combines technology-company building, fundraising, exits and venture investing, bringing operating experience to discussions with founders and investors.",
  "creds": "Master’s and PhD in Engineering, University of Cambridge; MBA, MIT.",
  "exp": "Not specified.",
  "profile": "https://lifex.vc/team"
 },
 {
  "id": "C27",
  "spec": "US-02",
  "name": "Andrew Williamson",
  "url": "https://uk.linkedin.com/in/andrewwilliamson",
  "base": "UK / prior US practice",
  "groups": [
   "europe",
   "usa"
  ],
  "fit": 85,
  "cambridge": {
   "type": "PhD",
   "url": "https://www.cic.vc/team/andrew-williamson/"
  },
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Managing Partner, Cambridge Innovation Capital",
  "brief": "Cambridge Innovation Capital managing partner with venture-investment experience in the UK and US. He works with technology businesses and university spinouts, combining scientific understanding with commercial assessment and company development.",
  "creds": "PhD in Physics, University of Cambridge; MBA, Haas School of Business, University of California, Berkeley.",
  "exp": "20 years in venture capital.",
  "profile": "https://www.cic.vc/team/andrew-williamson/"
 },
 {
  "id": "C28",
  "spec": "US-02",
  "name": "Nicky Dee",
  "url": "https://uk.linkedin.com/in/nickydee",
  "base": "UK / climate ventures",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "PhD",
   "url": "https://www.homerton.cam.ac.uk/sites/default/files/2022-09/pdp_generic_programme.pdf"
  },
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Co-founder and Chief Executive Officer, Carbon13",
  "brief": "Carbon13 co-founder and CEO working on venture building, startup evaluation and climate-technology commercialisation. Her work combines founder support with investment readiness, helping early-stage teams develop commercially viable climate businesses.",
  "creds": "PhD in Environmental Technology Management, University of Cambridge, 2008.",
  "exp": "20+ years working with startups and stakeholders.",
  "profile": "https://carbonthirteen.ventures/community/our-team/dr-nicky-dee/"
 },
 {
  "id": "C29",
  "spec": "US-03",
  "name": "Peter Krusic",
  "url": "https://www.linkedin.com/in/peterkrusic",
  "base": "USA",
  "groups": [
   "usa"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    200,
    400
   ],
   "month": [
    800,
    1600
   ]
  },
  "years": 25,
  "licensed": true,
  "role": "Independent fractional CFO, CFOPeter.com",
  "brief": "Independent fractional CFO serving consumer-goods and manufacturing businesses. His work covers turnarounds, mergers and acquisitions, finance systems and financial leadership, drawing on more than 25 years in finance and operations.",
  "creds": "CPA; PMP; MBA; USC Marshall studies.",
  "exp": "25+ years.",
  "profile": "https://www.cfopeter.com/about"
 },
 {
  "id": "C30",
  "spec": "US-03",
  "name": "David Weiss",
  "url": "https://uk.linkedin.com/in/davidweissphd",
  "base": "UK",
  "groups": [
   "europe"
  ],
  "fit": 70,
  "cambridge": {
   "type": "PhD",
   "url": "https://goldwhite.co.uk/team/david-weiss"
  },
  "fee": {
   "hour": [
    200,
    400
   ],
   "month": [
    800,
    1600
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Director, Fundraising & Commercial Strategy, GoldWhite",
  "brief": "GoldWhite director providing fractional CFO, fundraising and commercial-strategy advice to early-stage technology businesses. His background includes investment banking, financial markets and founding two technology companies that subsequently achieved exits.",
  "creds": "PhD in Engineering, University of Cambridge; MPhil with distinction, Cambridge Judge Business School.",
  "exp": "Not specified.",
  "profile": "https://goldwhite.co.uk/team/david-weiss"
 },
 {
  "id": "C31",
  "spec": "US-04",
  "name": "Philip Stiles",
  "url": "https://uk.linkedin.com/in/philip-stiles-3889a5a",
  "base": "UK / international",
  "groups": [
   "europe"
  ],
  "fit": 85,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.jbs.cam.ac.uk/wp-content/uploads/2020/05/flyer-creatinghighperformanceteams.pdf"
  },
  "fee": {
   "hour": [
    300,
    600
   ],
   "month": [
    1200,
    2400
   ]
  },
  "years": 25,
  "licensed": true,
  "role": "Associate Professor in Corporate Governance; Director, Cambridge Centre for International Human Resource Management",
  "brief": "HR and organisation-design consultant delivering culture-change, performance-management and succession programmes for international companies. He combines corporate advisory work with academic leadership of Cambridge’s Centre for International Human Resource Management.",
  "creds": "BA, University of Kent; MPhil and PhD, University of London.",
  "exp": "25 years at Cambridge, following London Business School.",
  "profile": "https://www.jbs.cam.ac.uk/people/philip-stiles/"
 },
 {
  "id": "C32",
  "spec": "US-04",
  "name": "Andreas Richter",
  "url": "https://uk.linkedin.com/in/andreas-richter-b1656ab",
  "base": "UK / international",
  "groups": [
   "europe"
  ],
  "fit": 80,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.jbs.cam.ac.uk/people/andreas-richter/"
  },
  "fee": {
   "hour": [
    300,
    600
   ],
   "month": [
    1200,
    2400
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Professor of Organisational Behaviour, Cambridge Judge Business School",
  "brief": "Organisational psychologist and corporate consultant specialising in leadership, executive teams and organisational effectiveness. He teaches at Cambridge Judge Business School and contributes to its leadership programme for family businesses.",
  "creds": "BSc and MSc, Giessen University; PhD in Management, Aston University; training in Industrial and Organisational Psychology; certified client-centred counsellor.",
  "exp": "Not specified.",
  "profile": "https://www.jbs.cam.ac.uk/people/andreas-richter/"
 },
 {
  "id": "C33",
  "spec": "US-04",
  "name": "David De Cremer",
  "url": "https://www.linkedin.com/in/david-de-cremer-5648249",
  "base": "Saudi Arabia / international",
  "groups": [
   "gcc"
  ],
  "fit": 80,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.clearadmit.com/2017/01/cambridge-judge-professor-talks-ethics-in-the-workplace/"
  },
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Chair Professor, KFUPM Business School; corporate consultant and organisational transformation adviser",
  "brief": "Corporate adviser on organisational transformation, leadership and technology adoption. A former Cambridge management professor and current KFUPM chair professor, he combines business consulting with research and executive development.",
  "creds": "PhD, University of Southampton.",
  "exp": "Not specified.",
  "profile": "https://kbs.kfupm.edu.sa/profile/david-de-cremer/"
 },
 {
  "id": "C34",
  "spec": "US-04",
  "name": "Thomas Roulet",
  "url": "https://uk.linkedin.com/in/thomasroulet",
  "base": "UK / international",
  "groups": [
   "europe"
  ],
  "fit": 75,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.jbs.cam.ac.uk/people/thomas-roulet/"
  },
  "fee": {
   "hour": [
    300,
    600
   ],
   "month": [
    1200,
    2400
   ]
  },
  "years": null,
  "licensed": true,
  "role": "Professor of Organisational Sociology and Leadership, Cambridge Judge Business School",
  "brief": "Organisation and leadership adviser working on culture, workplace change and integration. He combines corporate consulting and executive development with his role as Cambridge professor of organisational sociology and leadership.",
  "creds": "Master in Management, Audencia; MPhil, Sciences Po Paris; PhD in Management, HEC Paris; honorary MA, University of Cambridge.",
  "exp": "Academic appointments since 2013; Cambridge faculty since August 2018.",
  "profile": "https://www.jbs.cam.ac.uk/people/thomas-roulet/"
 },
 {
  "id": "C35",
  "spec": "US-05",
  "name": "Jagjit Singh Srai",
  "url": "https://uk.linkedin.com/in/jagjit-singh-srai-94451212",
  "base": "UK / global",
  "groups": [
   "europe"
  ],
  "fit": 85,
  "cambridge": {
   "type": "PhD",
   "url": "https://tigr2ess.globalfood.cam.ac.uk/files/speaker_biogs_2022.pdf"
  },
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": 17,
  "licensed": true,
  "role": "Professor of Research and Head of the Centre for International Manufacturing, University of Cambridge",
  "brief": "Former Unilever supply-chain and technical director, now advising through Cambridge IfM on manufacturing footprints, sourcing networks and digital supply chains. His work combines front-line industrial experience with global supply-network research.",
  "creds": "BEng in Chemical Process Engineering, Aston; MPhil and PhD, University of Cambridge; Chartered Engineer; Fellow, Institution of Chemical Engineers.",
  "exp": "17+ years of industrial operations before Cambridge.",
  "profile": "https://engage.ifm.eng.cam.ac.uk/project/jagjit-singh-srai/"
 },
 {
  "id": "C36",
  "spec": "AE-01",
  "name": "Costas Constantinou",
  "url": "https://nl.linkedin.com/in/costas-constantinou",
  "base": "Netherlands / UK",
  "groups": [
   "europe"
  ],
  "fit": 90,
  "cambridge": {
   "type": "PhD",
   "url": "https://www.oaklins.com/nl/en/team/21725/"
  },
  "fee": {
   "hour": [
    350,
    700
   ],
   "month": [
    1400,
    2800
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Managing Partner and Co-founder, Oaklins Valuation Advisory; Partner, Oaklins Netherlands",
  "brief": "Oaklins partner leading company and intellectual-property valuations, fairness opinions and restructuring-related valuation work. His professional background spans London and Amsterdam, including valuation roles at Teneo, FTI Consulting, EY and Kroll.",
  "creds": "PhD in Finance, University of Cambridge; MSc in Economics and Finance, University of Warwick; BSc in Economics, University of Cyprus; RICS and Academy of Experts member.",
  "exp": "20+ years in valuation.",
  "profile": "https://www.oaklins.com/nl/en/team/21725/"
 },
 {
  "id": "C37",
  "spec": "AE-01",
  "name": "Fernando Da Cruz Vasconcellos",
  "url": "https://uk.linkedin.com/in/fernando-da-cruz-vasconcellos",
  "base": "UK / international",
  "groups": [
   "europe"
  ],
  "fit": 90,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.pace.cam.ac.uk/dr-fernando-da-cruz-vasconcellos"
  },
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": 25,
  "licensed": true,
  "role": "Partner, Valuations, S&W",
  "brief": "S&W valuation partner advising on company value, intellectual property, investment structuring and transactions. His experience includes more than 200 valuation and advisory engagements involving technology-led businesses and intangible assets.",
  "creds": "Chemical Engineering, UC Santa Barbara; master’s and PhD in Materials Science and Engineering, University of Campinas; postdoctoral research, Cambridge; MRICS; RICS Registered Business Valuer.",
  "exp": "25+ professional years, including 20 years of valuation and advisory projects.",
  "profile": "https://www.pace.cam.ac.uk/dr-fernando-da-cruz-vasconcellos"
 },
 {
  "id": "C38",
  "spec": "AE-02",
  "name": "Patrick C. Raab",
  "url": "https://de.linkedin.com/in/patrick-c-raab",
  "base": "Germany / Europe",
  "groups": [
   "europe"
  ],
  "fit": 95,
  "cambridge": null,
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Independent pricing and commercial transformation adviser, PCR Consulting",
  "brief": "Independent industrial B2B pricing and commercial-transformation consultant with BCG and Syngenta experience. His work covers pricing and commercial effectiveness across chemicals, packaging, building materials and other industrial business settings.",
  "creds": "Diplom-Kaufmann, University of Mannheim.",
  "exp": "20+ years.",
  "profile": "https://pcr-experts.com/"
 },
 {
  "id": "C39",
  "spec": "AE-03",
  "name": "Shahnawaaz Aashiruddin",
  "url": "https://in.linkedin.com/in/shahnawaaz",
  "base": "India / global sourcing",
  "groups": [
   "india"
  ],
  "fit": 90,
  "cambridge": null,
  "fee": {
   "hour": [
    150,
    300
   ],
   "month": [
    600,
    1200
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Senior Director, Global Sourcing, News Corp; procurement adviser",
  "brief": "Procurement-transformation and global-sourcing leader at News Corp who also offers short advisory mandates. His experience includes industrial, FMCG and BPO settings, alongside sourcing-centre design and procurement operations.",
  "creds": "CPSM; IIM Mumbai studies.",
  "exp": "20+ years.",
  "profile": "https://shahn.pro/"
 },
 {
  "id": "C40",
  "spec": "AE-04",
  "name": "Peter Williamson",
  "url": "https://uk.linkedin.com/in/prof-peter-williamson-589b3bb",
  "base": "UK / Asia",
  "groups": [
   "europe",
   "china",
   "sea"
  ],
  "fit": 80,
  "cambridge": {
   "type": "Teaching",
   "url": "https://www.jesus.cam.ac.uk/people/peter-williamson"
  },
  "fee": {
   "hour": [
    400,
    800
   ],
   "month": [
    1600,
    3200
   ]
  },
  "years": 43,
  "licensed": true,
  "role": "International-strategy consultant and non-executive director; Honorary Professor, Cambridge Judge",
  "brief": "International-strategy consultant and board adviser with extensive China and Asian business experience. His work covers market-entry approaches, partnerships, international expansion and acquisitions, supported by previous BCG and Merrill Lynch roles.",
  "creds": "BA, Macquarie University; MA, University of Cambridge; PhD in Business Economics, Harvard University.",
  "exp": "China business involvement since 1983.",
  "profile": "https://www.jbs.cam.ac.uk/people/peter-williamson/"
 },
 {
  "id": "C41",
  "spec": "AE-04",
  "name": "Marc Silberstein",
  "url": "https://sg.linkedin.com/in/marc-silberstein",
  "base": "Singapore / Southeast Asia",
  "groups": [
   "sea"
  ],
  "fit": 75,
  "cambridge": null,
  "fee": {
   "hour": [
    250,
    500
   ],
   "month": [
    1000,
    2000
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Managing Partner, Silberstein + Partners; Singapore Partner, Asian Insiders",
  "brief": "Singapore-based market-entry and expansion adviser with previous McKinsey associate-partner experience. His work covers partnerships, regional growth and transactions, helping businesses assess opportunities and develop commercial strategies across Southeast Asia.",
  "creds": "Studies at the University of Warwick, Cass Business School and IE Business School.",
  "exp": "20+ years, including nearly a decade at McKinsey.",
  "profile": "https://asianinsiders.com/partners/marc-silberstein/"
 },
 {
  "id": "C42",
  "spec": "AE-05",
  "name": "Alexandre Halpérin",
  "url": "https://fr.linkedin.com/in/ahalperin",
  "base": "France / Europe",
  "groups": [
   "europe"
  ],
  "fit": 85,
  "cambridge": null,
  "fee": {
   "hour": [
    200,
    400
   ],
   "month": [
    800,
    1600
   ]
  },
  "years": 20,
  "licensed": true,
  "role": "Founder, Aulne Retail Conseil",
  "brief": "Founder of Aulne Retail Conseil, advising beauty, lifestyle and fashion businesses on store networks and locations. His work also covers franchise development and operational due diligence for retail businesses.",
  "creds": "ESSEC programme studies, 2017.",
  "exp": "20 years of field experience; 15 years in operational management before founding the practice.",
  "profile": "https://retailconseil.fr/"
 }
];

// the consultant's base, word by word: [en, ar, ru]
export const B_BASE = {
  Egypt: ['Egypt', 'مصر', 'Египет'], UK: ['UK', 'المملكة المتحدة', 'Великобритания'], global: ['global', 'عالمي', 'весь мир'], 'Middle East': ['Middle East', 'الشرق الأوسط', 'Ближний Восток'],
  UAE: ['UAE', 'الإمارات', 'ОАЭ'], Gulf: ['Gulf', 'الخليج', 'страны Залива'], Europe: ['Europe', 'أوروبا', 'Европа'], 'Saudi Arabia': ['Saudi Arabia', 'السعودية', 'Саудовская Аравия'],
  USA: ['USA', 'الولايات المتحدة', 'США'], international: ['international', 'دولي', 'международно'], Jordan: ['Jordan', 'الأردن', 'Иордания'], MENA: ['MENA', 'الشرق الأوسط وشمال أفريقيا', 'MENA'],
  Morocco: ['Morocco', 'المغرب', 'Марокко'], 'Francophone Africa': ['Francophone Africa', 'أفريقيا الفرنكوفونية', 'франкоязычная Африка'], Tunisia: ['Tunisia', 'تونس', 'Тунис'], 'North Africa': ['North Africa', 'شمال أفريقيا', 'Северная Африка'],
  Spain: ['Spain', 'إسبانيا', 'Испания'], 'Middle East and Africa': ['Middle East and Africa', 'الشرق الأوسط وأفريقيا', 'Ближний Восток и Африка'], 'prior US practice': ['earlier US practice', 'خبرة سابقة في الولايات المتحدة', 'ранее практика в США'],
  'climate ventures': ['climate ventures', 'مشاريع المناخ', 'климатические стартапы'], Netherlands: ['Netherlands', 'هولندا', 'Нидерланды'], Germany: ['Germany', 'ألمانيا', 'Германия'], India: ['India', 'الهند', 'Индия'],
  'global sourcing': ['global sourcing', 'التوريد العالمي', 'глобальные закупки'], Asia: ['Asia', 'آسيا', 'Азия'], Singapore: ['Singapore', 'سنغافورة', 'Сингапур'], 'Southeast Asia': ['Southeast Asia', 'جنوب شرق آسيا', 'Юго-Восточная Азия'], France: ['France', 'فرنسا', 'Франция'],
};
// the base country that matches a spec's home market (then the spec's languages apply)
export const B_BASE_HOME = { Egypt: 'EG', UAE: 'GCC', 'Saudi Arabia': 'GCC', Jordan: 'JO', Morocco: 'MA', Tunisia: 'TN', USA: 'US', UK: 'UK', Germany: 'DE', India: 'IN', Singapore: 'SG', France: 'FR' };
