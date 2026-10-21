// "Ask USHA live": a real conversation with USHA from the "Try her" section.
// A short form first (who you are, your business, your market), then up to
// five questions answered by the USHA server. The NJO team (their company
// email plus the team code) has no limit. Someone who registered before is
// greeted and passed to their project manager. The server address and the
// Turnstile key come from window.USHA_LIVE (tools/seo/build.mjs); without
// them this module stays off.
(() => {
  const CFG = window.USHA_LIVE || {};
  if (!CFG.api) return;
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const API = CFG.api.replace(/\/$/, '');
  const PM_TG = 'https://t.me/njo_manager', PM_MAIL = 'darina@njobusinesssolutions.com';
  const STORE = 'usha-live';

  const T = {
    en: {
      cta_k: 'Live · a brief + 4 questions', cta_h: 'Consult your new <i>Marketing Director</i>.', cta_p: 'Brief her on your business, then ask four questions. Real answers on your market and your numbers.', cta_b: 'Ask USHA live',
      k: 'USHA · live', h: 'Your business. <b>Her answer.</b>', p: 'Tell her who she is talking to. Then brief her and ask up to 4 questions. Your project manager follows up on these details, so please use real ones.',
      name: 'Your name', email: 'Work email', phone: 'Mobile number', country: 'Country code', business: 'Business name', size: 'Business size', industry: 'Industry', market: 'Main market', team: 'Team code',
      team_hint: 'For the NJO team: unlimited testing.', team_open: 'Have a team code?',
      sizes: {"solo": "Just me / under 5", "2-10": "2–10 people", "11-50": "11–50 people", "51-200": "51–200 people", "201-500": "201–500 people", "501-1000": "501–1,000 people", "1001-5000": "1,001–5,000 people", "5000+": "5,000+ people"},
      industries: [["FMCG & food", {"fmcg-sweets": "Sweets, chocolate & dates", "fmcg-snacks": "Food & snacks", "fmcg-drinks": "Drinks", "fmcg-dairy": "Dairy", "fmcg-household": "Household & cleaning", "fmcg-personal": "Personal care"}], ["Beauty & lifestyle", {"beauty": "Beauty & cosmetics", "perfume": "Perfume & oud", "fashion": "Fashion, footwear & accessories", "jewelry": "Jewellery & watches", "kids": "Kids & toys", "home": "Home & furniture", "electronics": "Electronics & gadgets", "pharma": "Pharmacy & health products", "pets": "Pet products", "sports": "Sports & outdoor"}], ["Retail & e-commerce", {"marketplace-sellers": "Marketplace seller (WB, Ozon, noon, Amazon)", "ecommerce": "E-commerce brand (own store)", "grocery": "Grocery & supermarkets", "retail-chain": "Retail chain", "distribution": "Distribution & wholesale"}], ["Food service & hospitality", {"cafes-restaurants": "Café or restaurant", "bakery": "Bakery, patisserie, sweets shop", "cloud-kitchen": "Cloud kitchen & delivery", "hospitality": "Hotels & tourism"}], ["Property & auto", {"real-estate": "Real estate developer", "real-estate-broker": "Real estate brokerage", "auto-dealers": "Auto dealer", "auto-services": "Auto services & parts"}], ["Services & B2B", {"clinics": "Clinics & medical centres", "education": "Education & training", "fitness": "Gyms & fitness", "salons": "Salons & spas", "events": "Events & weddings", "services": "Agency / professional services", "tech": "Tech, SaaS & apps", "manufacturing": "Manufacturing & B2B"}], ["—", {"other": "Other"}]], other_cc: 'Other (+ code)',
      markets: { uae: 'UAE', ksa: 'Saudi Arabia', egypt: 'Egypt', russia: 'Russia', kuwait: 'Kuwait', qatar: 'Qatar', bahrain: 'Bahrain', oman: 'Oman', other: 'Other' },
      pick: 'Choose…', consent: 'By starting you agree that NJO may contact you about USHA on these details.', start: 'Start the conversation', checking: 'Checking…',
      left: (n) => (n === 1 ? '1 question left' : `${n} questions left`), unlimited: 'Team · unlimited', you: 'You', ask: 'Ask about your business…', send: 'Send',
      reading: 'Reading your market', intro: (n) => `Hello ${n}, I’m **USHA**, your Marketing Director. You can take a consultation from me now.\n\nTell me your brief the way you would brief a new Marketing Director joining your team: what you sell, to whom, where, your numbers, and what you want fixed. The more accurate you are, the better our work will go.`,
      brief_pill: 'Your brief · then 4 questions', brief_ph: 'Write your brief…',
      done_h: 'That was your fourth question.', done_p: 'Your project manager has this conversation and will contact you. Want to start sooner?',
      back_h: (n) => `I remember you, ${n}.`, back_p: 'We’ve talked before. Let’s continue with your project manager: they have our conversation and will take it from here.',
      tg: 'Write on Telegram', mail: 'Email the manager', copy: 'Copy email', copied: 'Copied', free: 'Start the free week',
      locked_h: 'This consultation is closed.', locked_p: 'We drifted off the business a few times. Your project manager will continue with you.',
      used_h: 'This network already had its consultation.', used_p: 'One free consultation per office or home network. Let’s continue with a project manager.',
      region_h: 'The live consultation isn’t open in your region yet.', region_p: 'Our team will gladly talk to you directly.',
      private_h: 'Please open usha.one in a normal window.', private_p: 'The live consultation doesn’t run in private or incognito mode. Open the site in a regular browser window and come back.',
      bot_h: 'This browser looks automated.', bot_p: 'The live consultation is for people. Please open usha.one in your usual browser.',
      device_h: 'Please open this on the device you registered on.', device_p: 'Your consultation is tied to the browser you started it in.',
      team_link: 'NJO team? Continue', loading: 'One moment…',
      code: 'Invitation code', code_hint: 'Your NJO manager gives you this code.', code_none: 'No code yet? Ask your manager',
      new_code: 'Have a new invitation code?', expired_h: 'Your invitation has ended.', expired_p: 'It was valid for 45 days. Your project manager can continue with you, or enter a new code.',
      err: {
        required: 'Please fill this in.', name_len: 'Use 2–60 letters.', name_chars: 'Letters only, please.', name_fake: 'Please enter your real name.',
        biz_len: 'Use 2–80 characters.', biz_chars: 'The name only, no links.', biz_fake: 'Please enter your real business name.',
        email_bad: 'This email doesn’t look right.', email_typo: 'Did you mean {s}?', email_temp: 'Temporary inboxes can’t be used. Please use your real email.', email_fake: 'Please use your real email.', email_domain: 'This email domain doesn’t receive mail.',
        phone_plus: 'For another country, start with + and the country code.', phone_mobile: 'Please enter a mobile number, not a landline.', phone_region: 'Numbers from this country can’t be used here.', phone_bad: 'This isn’t a valid number for the chosen country.', phone_fake: 'Please enter your real number.', phone_country: 'Choose a country code.',
        team_code_needed: 'Enter the team code.', team_code_bad: 'The team code isn’t right.',
        code_needed: 'Enter your invitation code.', code_bad: 'This code isn’t valid or has already been used.',
        bot_check: 'Please complete the check above and try again.', slow_down: 'Too many tries. Please wait a little and try again.', busy: 'USHA is very busy right now. Please try again in a few minutes.',
        failed: 'Something went wrong on our side. Your question wasn’t counted. Please send it again.', cut: 'The answer was cut off. Your question wasn’t counted. Please send it again.', net: 'No connection. Please check your internet and try again.',
        too_long: 'Please keep it under 1,500 characters.', region: 'The live consultation isn’t open in your region yet.', private: 'Please use a normal browser window, not private mode.', device: 'Please continue on the device you registered on.',
      },
      close: 'Close',
    },
    ru: {
      cta_k: 'Вживую · бриф + 4 вопроса', cta_h: 'Консультация вашего нового <i>директора по маркетингу</i>.', cta_p: 'Расскажите о бизнесе и задайте четыре вопроса. Настоящие ответы про ваш рынок и ваши цифры.', cta_b: 'Спросить USHA',
      k: 'USHA · вживую', h: 'Ваш бизнес. <b>Её ответ.</b>', p: 'Расскажите, с кем она говорит. Потом дайте ей бриф и задайте до 4 вопросов. Менеджер проекта свяжется с вами по этим данным, поэтому укажите настоящие.',
      name: 'Ваше имя', email: 'Рабочий email', phone: 'Мобильный номер', country: 'Код страны', business: 'Название бизнеса', size: 'Размер бизнеса', industry: 'Сфера', market: 'Основной рынок', team: 'Код команды',
      team_hint: 'Для команды NJO: безлимитный тест.', team_open: 'Есть код команды?',
      sizes: {"solo": "Только я / до 5", "2-10": "2–10 человек", "11-50": "11–50 человек", "51-200": "51–200 человек", "201-500": "201–500 человек", "501-1000": "501–1 000 человек", "1001-5000": "1 001–5 000 человек", "5000+": "5 000+ человек"},
      industries: [["FMCG и продукты", {"fmcg-sweets": "Сладости, шоколад, финики", "fmcg-snacks": "Продукты и снеки", "fmcg-drinks": "Напитки", "fmcg-dairy": "Молочная продукция", "fmcg-household": "Бытовая химия и товары для дома", "fmcg-personal": "Средства личной гигиены"}], ["Красота и lifestyle", {"beauty": "Косметика и уход", "perfume": "Парфюмерия", "fashion": "Одежда, обувь, аксессуары", "jewelry": "Ювелирные изделия и часы", "kids": "Детские товары и игрушки", "home": "Дом и мебель", "electronics": "Электроника и гаджеты", "pharma": "Аптека и товары для здоровья", "pets": "Товары для животных", "sports": "Спорт и отдых"}], ["Ритейл и e-commerce", {"marketplace-sellers": "Селлер на маркетплейсах (WB, Ozon, Яндекс Маркет)", "ecommerce": "Бренд со своим интернет-магазином", "grocery": "Продуктовые магазины и супермаркеты", "retail-chain": "Розничная сеть", "distribution": "Дистрибуция и опт"}], ["Общепит и гостеприимство", {"cafes-restaurants": "Кафе или ресторан", "bakery": "Пекарня, кондитерская", "cloud-kitchen": "Дарк-китчен и доставка", "hospitality": "Отели и туризм"}], ["Недвижимость и авто", {"real-estate": "Застройщик", "real-estate-broker": "Агентство недвижимости", "auto-dealers": "Автодилер", "auto-services": "Автосервис и запчасти"}], ["Услуги и B2B", {"clinics": "Клиники и медцентры", "education": "Образование и обучение", "fitness": "Фитнес-клубы", "salons": "Салоны красоты и спа", "events": "Мероприятия и свадьбы", "services": "Агентство / профессиональные услуги", "tech": "IT, SaaS и приложения", "manufacturing": "Производство и B2B"}], ["—", {"other": "Другое"}]], other_cc: 'Другая (+ код)',
      markets: { uae: 'ОАЭ', ksa: 'Саудовская Аравия', egypt: 'Египет', russia: 'Россия', kuwait: 'Кувейт', qatar: 'Катар', bahrain: 'Бахрейн', oman: 'Оман', other: 'Другое' },
      pick: 'Выберите…', consent: 'Начиная, вы соглашаетесь, что NJO может связаться с вами по поводу USHA по этим данным.', start: 'Начать разговор', checking: 'Проверяем…',
      left: (n) => `${n} ${n === 1 ? 'вопрос' : n < 5 ? 'вопроса' : 'вопросов'} осталось`, unlimited: 'Команда · безлимит', you: 'Вы', ask: 'Спросите о своём бизнесе…', send: 'Отправить',
      reading: 'Читаю ваш рынок', intro: (n) => `Здравствуйте, ${n}. Я **USHA**, ваш директор по маркетингу. Сейчас вы можете получить у меня консультацию.\n\nРасскажите мне бриф так, как если бы вы брали в команду нового директора по маркетингу: что продаёте, кому, где, ваши цифры и что нужно исправить. Чем точнее, тем лучше пойдёт наша работа.`,
      brief_pill: 'Ваш бриф · потом 4 вопроса', brief_ph: 'Напишите ваш бриф…',
      done_h: 'Это был четвёртый вопрос.', done_p: 'Ваш менеджер проекта видит этот разговор и свяжется с вами. Хотите начать раньше?',
      back_h: (n) => `Я вас помню, ${n}.`, back_p: 'Мы уже разговаривали. Продолжим с вашим менеджером проекта: у него есть наш разговор, дальше он всё возьмёт на себя.',
      tg: 'Написать в Telegram', mail: 'Написать менеджеру', copy: 'Скопировать email', copied: 'Скопировано', free: 'Начать бесплатную неделю',
      locked_h: 'Консультация закрыта.', locked_p: 'Мы несколько раз ушли от бизнеса. Дальше с вами продолжит менеджер проекта.',
      used_h: 'С этой сети консультация уже была.', used_p: 'Одна бесплатная консультация на офисную или домашнюю сеть. Продолжим с менеджером проекта.',
      region_h: 'В вашем регионе живая консультация пока недоступна.', region_p: 'Наша команда с радостью поговорит с вами напрямую.',
      private_h: 'Откройте usha.one в обычном окне.', private_p: 'Живая консультация не работает в режиме инкогнито. Откройте сайт в обычном окне браузера и возвращайтесь.',
      bot_h: 'Похоже, браузер управляется автоматически.', bot_p: 'Живая консультация — для людей. Откройте usha.one в своём обычном браузере.',
      device_h: 'Продолжите на устройстве, где вы регистрировались.', device_p: 'Консультация привязана к браузеру, в котором вы её начали.',
      team_link: 'Команда NJO? Продолжить', loading: 'Секунду…',
      code: 'Код приглашения', code_hint: 'Код выдаёт ваш менеджер NJO.', code_none: 'Нет кода? Напишите менеджеру',
      new_code: 'Есть новый код приглашения?', expired_h: 'Срок приглашения закончился.', expired_p: 'Оно действовало 45 дней. Менеджер проекта продолжит с вами, или введите новый код.',
      err: {
        required: 'Заполните, пожалуйста.', name_len: 'От 2 до 60 букв.', name_chars: 'Только буквы, пожалуйста.', name_fake: 'Укажите настоящее имя.',
        biz_len: 'От 2 до 80 символов.', biz_chars: 'Только название, без ссылок.', biz_fake: 'Укажите настоящее название бизнеса.',
        email_bad: 'Похоже, в email ошибка.', email_typo: 'Может быть, {s}?', email_temp: 'Временные ящики не подходят. Укажите свой настоящий email.', email_fake: 'Укажите свой настоящий email.', email_domain: 'Этот почтовый домен не принимает письма.',
        phone_plus: 'Для другой страны начните с + и кода страны.', phone_mobile: 'Укажите мобильный номер, не городской.', phone_region: 'Номера этой страны здесь не принимаются.', phone_bad: 'Это не похоже на номер выбранной страны.', phone_fake: 'Укажите настоящий номер.', phone_country: 'Выберите код страны.',
        team_code_needed: 'Введите код команды.', team_code_bad: 'Неверный код команды.',
        code_needed: 'Введите код приглашения.', code_bad: 'Код неверный или уже использован.',
        bot_check: 'Пройдите проверку выше и попробуйте снова.', slow_down: 'Слишком много попыток. Подождите немного.', busy: 'Сейчас у USHA очень много разговоров. Попробуйте через несколько минут.',
        failed: 'Что-то пошло не так на нашей стороне. Вопрос не засчитан, отправьте его ещё раз.', cut: 'Ответ оборвался. Вопрос не засчитан, отправьте его ещё раз.', net: 'Нет соединения. Проверьте интернет и попробуйте снова.',
        too_long: 'Не больше 1 500 символов, пожалуйста.', region: 'В вашем регионе живая консультация пока недоступна.', private: 'Откройте сайт в обычном окне, не в режиме инкогнито.', device: 'Продолжите на устройстве, где вы регистрировались.',
      },
      close: 'Закрыть',
    },
    ar: {
      cta_k: 'مباشر · brief + ٤ أسئلة', cta_h: 'استشر <i>مديرة التسويق</i> الجديدة لديك.', cta_p: 'عرّفها على نشاطك ثم اسأل أربعة أسئلة. إجابات حقيقية عن سوقك وأرقامك.', cta_b: 'اسأل USHA مباشرة',
      k: 'USHA · مباشر', h: 'نشاطك. <b>وإجابتها.</b>', p: 'عرّفها بمن تتحدث معه، ثم اكتب لها الـbrief واسأل حتى ٤ أسئلة. مدير المشروع سيتواصل معك على هذه البيانات، فاكتب بياناتك الحقيقية.',
      name: 'اسمك', email: 'البريد الإلكتروني للعمل', phone: 'رقم الجوال', country: 'رمز الدولة', business: 'اسم النشاط التجاري', size: 'حجم النشاط', industry: 'القطاع', market: 'السوق الرئيسي', team: 'رمز الفريق',
      team_hint: 'لفريق NJO: تجربة بلا حدود.', team_open: 'لديك رمز الفريق؟',
      sizes: {"solo": "أنا فقط / أقل من ٥", "2-10": "٢–١٠ أشخاص", "11-50": "١١–٥٠ شخصاً", "51-200": "٥١–٢٠٠ شخص", "201-500": "٢٠١–٥٠٠ شخص", "501-1000": "٥٠١–١٠٠٠ شخص", "1001-5000": "١٠٠١–٥٠٠٠ شخص", "5000+": "أكثر من ٥٠٠٠ شخص"},
      industries: [["السلع الاستهلاكية والأغذية", {"fmcg-sweets": "حلويات وشوكولاتة وتمور", "fmcg-snacks": "أغذية وسناكس", "fmcg-drinks": "مشروبات", "fmcg-dairy": "ألبان", "fmcg-household": "منظفات ومنتجات منزلية", "fmcg-personal": "عناية شخصية"}], ["التجميل ونمط الحياة", {"beauty": "تجميل ومستحضرات", "perfume": "عطور وعود", "fashion": "أزياء وأحذية وإكسسوارات", "jewelry": "مجوهرات وساعات", "kids": "منتجات أطفال وألعاب", "home": "منزل وأثاث", "electronics": "إلكترونيات وأجهزة", "pharma": "صيدلية ومنتجات صحية", "pets": "منتجات الحيوانات الأليفة", "sports": "رياضة وأنشطة خارجية"}], ["التجزئة والتجارة الإلكترونية", {"marketplace-sellers": "بائع على المتاجر الإلكترونية (نون، أمازون…)", "ecommerce": "علامة تجارية بمتجر إلكتروني خاص", "grocery": "بقالات وسوبرماركت", "retail-chain": "سلسلة متاجر", "distribution": "توزيع وجملة"}], ["المطاعم والضيافة", {"cafes-restaurants": "مقهى أو مطعم", "bakery": "مخبز أو محل حلويات", "cloud-kitchen": "مطبخ سحابي وتوصيل", "hospitality": "فنادق وسياحة"}], ["العقارات والسيارات", {"real-estate": "مطور عقاري", "real-estate-broker": "وساطة عقارية", "auto-dealers": "وكيل سيارات", "auto-services": "خدمات وقطع غيار السيارات"}], ["الخدمات والأعمال", {"clinics": "عيادات ومراكز طبية", "education": "تعليم وتدريب", "fitness": "نوادٍ رياضية", "salons": "صالونات وسبا", "events": "فعاليات وأعراس", "services": "وكالة / خدمات مهنية", "tech": "تقنية وتطبيقات", "manufacturing": "تصنيع وB2B"}], ["—", {"other": "أخرى"}]], other_cc: 'أخرى (+ الرمز)',
      markets: { uae: 'الإمارات', ksa: 'السعودية', egypt: 'مصر', russia: 'روسيا', kuwait: 'الكويت', qatar: 'قطر', bahrain: 'البحرين', oman: 'عُمان', other: 'أخرى' },
      pick: 'اختر…', consent: 'بالبدء توافق على أن تتواصل معك NJO بخصوص USHA على هذه البيانات.', start: 'ابدأ المحادثة', checking: 'جارٍ التحقق…',
      left: (n) => (n === 1 ? 'بقي سؤال واحد' : n === 2 ? 'بقي سؤالان' : `بقي ${n} أسئلة`), unlimited: 'الفريق · بلا حدود', you: 'أنت', ask: 'اسأل عن نشاطك…', send: 'إرسال',
      reading: 'أقرأ سوقك', intro: (n) => `أهلاً ${n}، أنا **USHA**، مديرة التسويق لديك. يمكنك الآن أن تأخذ مني استشارة.\n\nاكتب لي الـbrief كما لو كنت تعيّن مديراً جديداً للتسويق أو عضواً جديداً في فريقك: ماذا تبيع، لمن، أين، أرقامك، وما الذي تريد إصلاحه. كلما كنت أدق، كان عملنا أفضل.`,
      brief_pill: 'الـbrief أولاً · ثم ٤ أسئلة', brief_ph: 'اكتب الـbrief هنا…',
      done_h: 'كان هذا سؤالك الرابع.', done_p: 'مدير مشروعك لديه هذه المحادثة وسيتواصل معك. تحب تبدأ أسرع؟',
      back_h: (n) => `أتذكرك يا ${n}.`, back_p: 'تحدثنا من قبل. لنكمل مع مدير مشروعك: لديه محادثتنا وسيتابع معك من هنا.',
      tg: 'راسلنا على تيليجرام', mail: 'راسل المدير بالبريد', copy: 'انسخ البريد', copied: 'تم النسخ', free: 'ابدأ الأسبوع المجاني',
      locked_h: 'تم إغلاق هذه الاستشارة.', locked_p: 'ابتعدنا عن العمل أكثر من مرة. مدير مشروعك سيتابع معك.',
      used_h: 'هذه الشبكة استخدمت استشارتها بالفعل.', used_p: 'استشارة مجانية واحدة لكل شبكة مكتب أو منزل. لنكمل مع مدير مشروع.',
      region_h: 'الاستشارة المباشرة غير متاحة في منطقتك حالياً.', region_p: 'فريقنا سيسعد بالتحدث معك مباشرة.',
      private_h: 'افتح usha.one في نافذة عادية.', private_p: 'الاستشارة المباشرة لا تعمل في وضع التصفح الخاص أو المتخفي. افتح الموقع في نافذة متصفح عادية ثم عد.',
      bot_h: 'يبدو أن هذا المتصفح آلي.', bot_p: 'الاستشارة المباشرة للأشخاص. افتح usha.one في متصفحك المعتاد.',
      device_h: 'أكمل على الجهاز الذي سجلت منه.', device_p: 'استشارتك مرتبطة بالمتصفح الذي بدأتها فيه.',
      team_link: 'فريق NJO؟ تابع', loading: 'لحظة…',
      code: 'رمز الدعوة', code_hint: 'يعطيك مدير NJO هذا الرمز.', code_none: 'ليس لديك رمز؟ اطلبه من مديرك',
      new_code: 'لديك رمز دعوة جديد؟', expired_h: 'انتهت مدة دعوتك.', expired_p: 'كانت صالحة لمدة ٤٥ يوماً. يمكن لمدير مشروعك أن يكمل معك، أو أدخل رمزاً جديداً.',
      err: {
        required: 'يرجى تعبئة هذا الحقل.', name_len: 'من حرفين إلى ٦٠ حرفاً.', name_chars: 'حروف فقط من فضلك.', name_fake: 'يرجى كتابة اسمك الحقيقي.',
        biz_len: 'من حرفين إلى ٨٠ حرفاً.', biz_chars: 'الاسم فقط بدون روابط.', biz_fake: 'يرجى كتابة اسم نشاطك الحقيقي.',
        email_bad: 'يبدو أن البريد غير صحيح.', email_typo: 'هل تقصد {s}؟', email_temp: 'لا يمكن استخدام بريد مؤقت. يرجى استخدام بريدك الحقيقي.', email_fake: 'يرجى استخدام بريدك الحقيقي.', email_domain: 'هذا النطاق لا يستقبل البريد.',
        phone_plus: 'لدولة أخرى ابدأ بـ + ورمز الدولة.', phone_mobile: 'يرجى إدخال رقم جوال وليس رقماً أرضياً.', phone_region: 'لا يمكن استخدام أرقام هذه الدولة هنا.', phone_bad: 'الرقم غير صحيح للدولة المختارة.', phone_fake: 'يرجى كتابة رقمك الحقيقي.', phone_country: 'اختر رمز الدولة.',
        team_code_needed: 'أدخل رمز الفريق.', team_code_bad: 'رمز الفريق غير صحيح.',
        code_needed: 'أدخل رمز الدعوة.', code_bad: 'الرمز غير صحيح أو مستخدم من قبل.',
        bot_check: 'أكمل التحقق أعلاه ثم حاول مجدداً.', slow_down: 'محاولات كثيرة. انتظر قليلاً ثم حاول مجدداً.', busy: 'USHA مشغولة جداً الآن. حاول بعد دقائق.',
        failed: 'حدث خطأ من جهتنا ولم يُحتسب سؤالك. أرسله مرة أخرى.', cut: 'انقطعت الإجابة ولم يُحتسب سؤالك. أرسله مرة أخرى.', net: 'لا يوجد اتصال. تحقق من الإنترنت وحاول مجدداً.',
        too_long: 'أقل من ١٥٠٠ حرف من فضلك.', region: 'الاستشارة المباشرة غير متاحة في منطقتك حالياً.', private: 'استخدم نافذة عادية وليس التصفح الخاص.', device: 'أكمل على الجهاز الذي سجلت منه.',
      },
      close: 'إغلاق',
    },
  };
  const L = () => T[H.lang] || T.en;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // country codes for the phone, main markets first
  // country codes for the phone: the markets USHA serves, then "another country (+ code)"
  const CC = [['AE', '971', '50 123 4567'], ['SA', '966', '55 123 4567'], ['EG', '20', '10 1234 5678'], ['RU', '7', '912 345-67-89'], ['KW', '965', '500 12345'], ['QA', '974', '3312 3456'], ['BH', '973', '3600 1234'], ['OM', '968', '9212 3456'], ['JO', '962', '7 9012 3456'], ['LB', '961', '71 123 456'], ['IQ', '964', '791 234 5678'], ['MA', '212', '650-123456'], ['KZ', '7', '701 234 5678'], ['TR', '90', '501 234 56 78'], ['GB', '44', '7400 123456'], ['US', '1', '201 555 0123'], ['XX', '', '+44 7400 123456']];
  const ccSample = (c) => (CC.find((x) => x[0] === c) || CC[0])[2];
  const MARKET_CC = { uae: 'AE', ksa: 'SA', egypt: 'EG', russia: 'RU', kuwait: 'KW', qatar: 'QA', bahrain: 'BH', oman: 'OM' };
  const flag = (c) => String.fromCodePoint(...[...c].map((x) => 0x1f1a5 + x.charCodeAt(0)));

  const store = {
    get() { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } },
    set(v) { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch {} },
    clear() { try { localStorage.removeItem(STORE); } catch {} },
  };

  // ---------- answer text: a small, safe Markdown ----------
  function inline(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,:;!?]|$)/g, '$1<i>$2</i>').replace(/`([^`]+)`/g, '<code>$1</code>');
  }
  function md(src) {
    const out = [], lines = String(src).replace(/\r/g, '').split('\n');
    let list = null, table = null;
    const flush = () => {
      if (list) { out.push(`<${list.t}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.t}>`); list = null; }
      if (table) {
        const rows = table.filter((r) => !/^\s*\|?\s*:?-{2,}/.test(r)).map((r) => r.replace(/^\s*\||\|\s*$/g, '').split('|').map((c) => c.trim()));
        if (rows.length) out.push(`<div class="xl-tw"><table>${rows.map((r, i) => `<tr>${r.map((c) => (i ? `<td>${inline(c)}</td>` : `<th>${inline(c)}</th>`)).join('')}</tr>`).join('')}</table></div>`);
        table = null;
      }
    };
    for (const line of lines) {
      let m;
      if (/^\s*\|.*\|\s*$/.test(line)) { if (list) flush(); (table ||= []).push(line); continue; }
      if (table) flush();
      if ((m = line.match(/^\s*(?:[-*•]|(\d+)[.)])\s+(.*)$/))) {
        const t = m[1] ? 'ol' : 'ul';
        if (!list || list.t !== t) { flush(); list = { t, items: [] }; }
        list.items.push(m[2]);
        continue;
      }
      flush();
      if ((m = line.match(/^\s*#{1,6}\s+(.*)$/))) out.push(`<h4>${inline(m[1])}</h4>`);
      else if (/^\s*(-{3,}|_{3,})\s*$/.test(line)) out.push('<hr>');
      else if (line.trim()) out.push(`<p>${inline(line)}</p>`);
    }
    flush();
    return out.join('');
  }

  // ---------- this device ----------
  // A random id kept in this browser plus a hash of how the browser looks. The
  // server allows one free consultation per device and binds the session to it.
  let devP = null;
  function device() {
    return devP ||= (async () => {
      let id = '';
      try { id = localStorage.getItem('usha-device') || ''; } catch {}
      if (!/^[a-z0-9-]{16,64}$/i.test(id)) {
        id = (crypto.randomUUID ? crypto.randomUUID() : Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join(''));
        try { localStorage.setItem('usha-device', id); } catch {}
      }
      const parts = [navigator.userAgent, (navigator.languages || []).join(','), Intl.DateTimeFormat().resolvedOptions().timeZone, screen.width + 'x' + screen.height + 'x' + screen.colorDepth, devicePixelRatio, navigator.hardwareConcurrency, navigator.deviceMemory, navigator.platform];
      try {
        const c = D.createElement('canvas'); c.width = 220; c.height = 40;
        const g = c.getContext('2d'); g.textBaseline = 'top'; g.font = '16px Arial'; g.fillStyle = '#f60'; g.fillRect(0, 0, 220, 40); g.fillStyle = '#069'; g.fillText('USHA · مرحبا · Привет 🍫', 4, 10);
        parts.push(c.toDataURL());
        const gl = D.createElement('canvas').getContext('webgl'), ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
        if (ext) parts.push(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL), gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      } catch {}
      let fp = '';
      try { fp = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts.join('|')))), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 40); } catch {}
      return { id, fp };
    })();
  }

  // Private / incognito windows: each browser gives itself away differently
  // (the same checks the detectIncognito library uses). A heuristic, not proof.
  async function privateWindow() {
    try {
      localStorage.setItem('usha-probe', '1'); localStorage.removeItem('usha-probe');
      const ua = navigator.userAgent;
      const firefox = /Firefox|FxiOS/.test(ua), safari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Android/.test(ua);
      if (firefox && !navigator.serviceWorker) return true;
      if (navigator.storage && navigator.storage.getDirectory) {
        try { await navigator.storage.getDirectory(); } catch (e) { if (/unknown transient|security/i.test(String((e && e.message) || e))) return true; }
      }
      if (!firefox && !safari && navigator.storage && navigator.storage.estimate) {
        const { quota } = await navigator.storage.estimate();
        const heap = (performance.memory && performance.memory.jsHeapSizeLimit) || 1073741824;
        if (quota && quota < heap * 2) return true;
      }
      return false;
    } catch { return true; }
  }

  // ---------- her sounds ----------
  // Small synthesized chimes: opening, asking you something, answering. They
  // follow the site's sound switch: silent only if the visitor turned sound off.
  let ac = null;
  const soundOn = () => { try { return localStorage.getItem('usha-sound') !== 'off'; } catch { return true; } };
  function chime(kind) {
    if (!soundOn()) return;
    try {
      ac ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      const notes = { open: [523.25, 659.25, 783.99, 1046.5], ask: [659.25, 987.77], answer: [783.99, 659.25, 523.25], send: [1318.5] }[kind];
      const t0 = ac.currentTime + 0.02, step = kind === 'send' ? 0 : 0.085;
      notes.forEach((f, i) => {
        const o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain();
        o.type = 'sine'; o2.type = 'triangle'; o.frequency.value = f; o2.frequency.value = f * 2;
        const t = t0 + i * step, peak = kind === 'send' ? 0.03 : 0.07, len = kind === 'send' ? 0.12 : 0.55;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
        const g2 = ac.createGain(); g2.gain.value = 0.18;
        o.connect(g); o2.connect(g2); g2.connect(g); g.connect(ac.destination);
        o.start(t); o2.start(t); o.stop(t + len + 0.05); o2.stop(t + len + 0.05);
      });
    } catch {}
  }

  // ---------- server ----------
  async function api(path, { body, token, method = body ? 'POST' : 'GET' } = {}) {
    const dev = await device();
    const r = await fetch(API + path, {
      method,
      headers: { ...(body ? { 'content-type': 'application/json' } : {}), ...(token ? { authorization: 'Bearer ' + token } : {}), 'x-usha-device': dev.id },
      body: body ? JSON.stringify(body) : undefined,
    });
    let j = {};
    try { j = await r.json(); } catch {}
    return { ...j, http: r.status };
  }

  // ---------- Turnstile (Cloudflare's bot check) ----------
  let tsLoad = null, tsId = null, tsToken = '';
  function turnstile(box) {
    if (!CFG.turnstile) return;
    tsLoad ||= new Promise((res, rej) => {
      const s = D.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true; s.onload = res; s.onerror = rej;
      D.head.append(s);
    });
    tsLoad.then(() => {
      if (!box.isConnected || !window.turnstile) return;
      tsToken = '';
      tsId = window.turnstile.render(box, {
        sitekey: CFG.turnstile, theme: 'dark', language: H.lang === 'ar' ? 'ar' : H.lang === 'ru' ? 'ru' : 'en', size: 'flexible',
        callback: (t) => { tsToken = t; }, 'expired-callback': () => { tsToken = ''; }, 'error-callback': () => { tsToken = ''; },
      });
    }).catch(() => {});
  }
  const tsReset = () => { tsToken = ''; try { if (tsId != null && window.turnstile) window.turnstile.reset(tsId); } catch {} };

  // ---------- the window ----------
  // invite: the server asks for an invitation code (GET /api/hello)
  let invite = false;
  let modal = null, lastFocus = null, state = { token: '', name: '', left: null, team: false, brief: false, busy: false };

  function shell(inner) {
    const x = L();
    return `<div class="xm-scrim"></div><div class="xm-panel xl-panel" role="dialog" aria-modal="true" aria-label="${esc(x.k)}" translate="no">
      <i class="xm-aura" aria-hidden="true"></i>
      <header class="xm-hd xl-hd"><div><span class="xm-k">${esc(x.k)}</span><h3>${x.h}</h3></div>
        <div class="xl-hr"><span class="xl-left" hidden></span><button type="button" class="xm-x" aria-label="${esc(x.close)}"></button></div></header>
      <div class="xl-view">${inner}</div></div>`;
  }

  function open() {
    if (modal) return;
    lastFocus = D.activeElement;
    modal = D.createElement('div');
    modal.className = 'x-modal x-live';
    modal.innerHTML = shell('');
    D.body.append(modal);
    H.classList.add('x-modal-on');
    requestAnimationFrame(() => modal && modal.classList.add('on'));
    $('.xm-x', modal).addEventListener('click', close);
    $('.xm-scrim', modal).addEventListener('click', close);
    chime('open');
    start();
  }
  // before anything: a person, in a normal window, in a country where it's open
  async function start() {
    const x = L();
    view().innerHTML = `<p class="xl-wait">${esc(x.loading)}</p>`;
    if (navigator.webdriver) { notice(x.bot_h, x.bot_p); return; }
    if (await privateWindow()) { notice(x.private_h, x.private_p); return; }
    if (!modal) return;
    let hi = {};
    try { hi = await api('/api/hello'); } catch {}
    if (!modal) return;
    invite = hi.invite === true;
    const saved = store.get();
    if (saved.token) { resume(saved.token); return; }
    if (hi.region === 'blocked') { handoff(x.region_h, x.region_p, view(), { free: false, team: true }); return; }
    formView();
  }
  function notice(title, text) { handoff(title, text, view(), { contacts: false, free: false }); }
  function close() {
    if (!modal) return;
    const m = modal; modal = null; tsId = null;
    H.classList.remove('x-modal-on');
    if (reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal) close(); });
  const view = () => $('.xl-view', modal);
  function setLeft() {
    const el = modal && $('.xl-left', modal); if (!el) return;
    const x = L();
    el.hidden = false;
    el.textContent = state.team ? x.unlimited : state.brief ? x.left(state.left) : x.brief_pill;
    el.classList.toggle('low', !state.team && state.left <= 1);
  }

  // ---------- 1. the form ----------
  function formView(prefill = {}) {
    const x = L();
    const opt = (o, sel) => `<option value="">${esc(x.pick)}</option>` + Object.entries(o).map(([k, v]) => `<option value="${k}"${k === sel ? ' selected' : ''}>${esc(v)}</option>`).join('');
    const defCC = prefill.country || (H.lang === 'ru' ? 'RU' : 'AE');
    view().innerHTML = `<form class="xl-form" novalidate>
      <p class="xl-lead">${esc(x.p)}</p>
      <div class="xl-grid">
        ${invite ? `<div class="xl-f xl-code" data-f="code"><label for="xl-code">${esc(x.code)}</label><input id="xl-code" name="code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="7" placeholder="K7M-4QX" dir="ltr" required><small>${esc(x.code_hint)} <a href="${PM_TG}" target="_blank" rel="noopener">${esc(x.code_none)}</a></small><em class="xl-e" aria-live="polite"></em></div>` : ''}
        ${field('name', x.name, `<input id="xl-name" name="name" autocomplete="name" maxlength="60" required value="${esc(prefill.name || '')}">`)}
        ${field('business', x.business, `<input id="xl-business" name="business" autocomplete="organization" maxlength="80" required value="${esc(prefill.business || '')}">`)}
        ${field('email', x.email, `<input id="xl-email" name="email" type="email" inputmode="email" autocomplete="email" maxlength="120" required dir="ltr" value="${esc(prefill.email || '')}">`)}
        <div class="xl-f xl-phone" data-f="phone"><label for="xl-phone">${esc(x.phone)}</label>
          <div class="xl-pr" dir="ltr"><select name="country" aria-label="${esc(x.country)}">${CC.map(([c, d]) => `<option value="${c}"${c === defCC ? ' selected' : ''}>${c === 'XX' ? '🌐 ' + esc(x.other_cc) : `${flag(c)} +${d}`}</option>`).join('')}</select>
          <input id="xl-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" maxlength="22" required placeholder="${esc(ccSample(defCC))}" value="${esc(prefill.phone || '')}"></div><em class="xl-e" aria-live="polite"></em></div>
        <div class="xl-f xl-team" data-f="teamCode" hidden><label for="xl-team">${esc(x.team)}</label><input id="xl-team" name="teamCode" type="password" autocomplete="off" maxlength="80" dir="ltr"><small>${esc(x.team_hint)}</small><em class="xl-e" aria-live="polite"></em></div>
        ${field('size', x.size, `<select id="xl-size" name="size" required>${opt(x.sizes, prefill.size)}</select>`)}
        ${field('industry', x.industry, `<select id="xl-industry" name="industry" required><option value="">${esc(x.pick)}</option>${x.industries.map(([g, o]) => `<optgroup label="${esc(g)}">${Object.entries(o).map(([k, v]) => `<option value="${k}"${k === prefill.industry ? ' selected' : ''}>${esc(v)}</option>`).join('')}</optgroup>`).join('')}</select>`)}
        ${field('market', x.market, `<select id="xl-market" name="market" required>${opt(x.markets, prefill.market)}</select>`)}
      </div>
      <button type="button" class="xl-team-open">${esc(x.team_open)}</button>
      <div class="xl-hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <div class="xl-ts"></div>
      <em class="xl-e xl-form-e" aria-live="polite"></em>
      <div class="xl-go"><button class="btn btn-p" type="submit"><span class="d"></span><span>${esc(x.start)}</span></button><small>${esc(x.consent)}</small></div>
    </form>`;
    const f = $('form', view());
    // the team code is optional: a small link opens it
    const team = $('.xl-team', f), teamBtn = $('.xl-team-open', f);
    teamBtn.addEventListener('click', () => { team.hidden = false; teamBtn.hidden = true; f.elements.teamCode.focus(); });
    const setPh = () => { f.elements.phone.placeholder = ccSample(f.elements.country.value); };
    f.elements.market.addEventListener('change', () => { const c = MARKET_CC[f.elements.market.value]; if (c && !f.elements.phone.value.trim()) { f.elements.country.value = c; setPh(); } });
    // the phone and email are checked by the server as soon as the visitor leaves the field
    const live = async (field) => {
      const body = field === 'phone' ? { field, country: f.elements.country.value, phone: f.elements.phone.value.trim() } : { field, email: f.elements.email.value.trim() };
      if (!(body.phone || body.email)) return;
      let r; try { r = await api('/api/check', { body }); } catch { return; }
      if (!modal || r.http !== 200) return;
      const box = $(`[data-f="${field}"]`, f);
      box.classList.toggle('ok', !r.error);
      if (!r.error) { showErr(f, field, ''); return; }
      let msg = esc(x.err[r.error] || x.err.required);
      if (r.error === 'email_typo' && r.suggest) {
        const fixed = body.email.replace(/@.*$/, '@' + r.suggest);
        msg = esc(x.err.email_typo).replace('{s}', `<button type="button" class="xl-fix">${esc(fixed)}</button>`);
      }
      showErr(f, field, msg);
      const fix = $('.xl-fix', box);
      if (fix) fix.addEventListener('click', () => { f.elements.email.value = fix.textContent; showErr(f, 'email', ''); live('email'); });
    };
    f.elements.phone.addEventListener('blur', () => live('phone'));
    f.elements.country.addEventListener('change', () => { setPh(); if (f.elements.phone.value.trim()) live('phone'); });
    f.elements.email.addEventListener('blur', () => live('email'));
    $$('input,select', f).forEach((el) => el.addEventListener('input', () => showErr(f, el.name === 'country' ? 'phone' : el.name, '')));
    // the code is typed as K7M4QX or k7m-4qx and shown as K7M-4QX
    const code = f.elements.code;
    if (code) code.addEventListener('input', () => {
      const v = code.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
      code.value = v.length > 3 ? v.slice(0, 3) + '-' + v.slice(3) : v;
    });
    f.addEventListener('submit', (e) => { e.preventDefault(); submit(f); });
    turnstile($('.xl-ts', f));
    setTimeout(() => (code || f.elements.name).focus({ preventScroll: true }), reduce ? 0 : 300);
  }
  function field(name, label, control) {
    return `<div class="xl-f" data-f="${name}"><label for="xl-${name}">${esc(label)}</label>${control}<em class="xl-e" aria-live="polite"></em></div>`;
  }
  function showErr(f, name, msg) {
    const box = $(`[data-f="${name}"]`, f) || null;
    if (!box) { const e = $('.xl-form-e', f); if (e) e.textContent = msg; return; }
    box.classList.toggle('bad', !!msg);
    if (msg) box.classList.remove('ok');
    $('.xl-e', box).innerHTML = msg;
  }

  // quick checks before the server's full ones, so typos show at once
  function precheck(f) {
    const v = (n) => (f.elements[n].value || '').trim(), errs = {};
    for (const n of ['name', 'business', 'email', 'phone', 'size', 'industry', 'market']) if (!v(n)) errs[n] = 'required';
    if (v('name') && !/^[\p{L}\p{M}][\p{L}\p{M}' .\-]{1,59}$/u.test(v('name'))) errs.name = /\d/.test(v('name')) ? 'name_chars' : 'name_fake';
    if (v('email') && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v('email'))) errs.email = 'email_bad';
    const digits = v('phone').replace(/\D/g, '');
    if (v('phone') && (digits.length < 6 || digits.length > 15 || /[^\d\s\-()+]/.test(v('phone')))) errs.phone = 'phone_bad';
    else if (f.elements.country.value === 'XX' && v('phone') && !v('phone').startsWith('+')) errs.phone = 'phone_plus';
    if (f.elements.code && !v('teamCode')) {
      if (!v('code')) errs.code = 'code_needed';
      else if (!/^[A-Z2-9]{3}-?[A-Z2-9]{3}$/.test(v('code'))) errs.code = 'code_bad';
    }
    return errs;
  }

  async function submit(f) {
    if (state.busy) return;
    const x = L(), btn = $('button[type=submit]', f);
    $$('[data-f]', f).forEach((b) => showErr(f, b.dataset.f, ''));
    showErr(f, '_', '');
    const pre = precheck(f);
    if (Object.keys(pre).length) {
      for (const [k, c] of Object.entries(pre)) showErr(f, k, esc(x.err[c] || c));
      const first = $('.xl-f.bad input, .xl-f.bad select', f); if (first) first.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(f).entries());
    const dev = await device();
    Object.assign(data, { lang: H.lang in T ? H.lang : 'en', turnstile: tsToken, deviceId: dev.id, fp: dev.fp, private: false });
    state.busy = true; btn.disabled = true; btn.lastElementChild.textContent = x.checking;
    let r;
    try { r = await api('/api/register', { body: data }); } catch { r = { http: 0 }; }
    state.busy = false; btn.disabled = false; btn.lastElementChild.textContent = x.start;
    if (!modal) return;
    if (r.status === 'ok' && r.token) {
      Object.assign(state, { token: r.token, name: r.name, left: r.left, team: !!r.team, brief: !!r.team });
      store.set({ token: r.token });
      chatView([]);
      return;
    }
    if (r.status === 'code_required' && f.elements.code) {
      const why = r.http === 429 ? 'slow_down' : r.http === 503 ? 'busy' : f.elements.code.value.trim() ? 'code_bad' : 'code_needed';
      showErr(f, 'code', esc(x.err[why]));
      tsReset();
      f.elements.code.focus();
      return;
    }
    if (r.status === 'code_required') { invite = true; formView(Object.fromEntries(new FormData(f).entries())); return; }
    if (r.status === 'returning') { handoff(x.back_h(r.name), x.back_p); return; }
    if (r.status === 'used_here') { handoff(x.used_h, x.used_p); return; }
    if (r.status === 'region') { handoff(x.region_h, x.region_p, view(), { free: false }); return; }
    if (r.status === 'private') { notice(x.private_h, x.private_p); return; }
    if (r.status === 'device') { notice(x.device_h, x.device_p); return; }
    if (r.status === 'invalid') {
      for (const [k, c] of Object.entries(r.errors || {})) {
        let msg = esc(x.err[c] || x.err.required);
        if (c === 'email_typo' && r.suggest) {
          const fixed = f.elements.email.value.trim().replace(/@.*$/, '@' + r.suggest);
          msg = esc(x.err.email_typo).replace('{s}', `<button type="button" class="xl-fix">${esc(fixed)}</button>`);
        }
        showErr(f, k, msg);
      }
      const fix = $('.xl-fix', f);
      if (fix) fix.addEventListener('click', () => { f.elements.email.value = fix.textContent; showErr(f, 'email', ''); });
      tsReset();
      const first = $('.xl-f.bad input, .xl-f.bad select', f); if (first) first.focus();
      return;
    }
    const code = r.http === 0 ? 'net' : r.status === 'bot_check' ? 'bot_check' : r.http === 429 ? 'slow_down' : r.status === 'busy' ? 'busy' : 'failed';
    showErr(f, '_', esc(x.err[code]));
    tsReset();
  }

  // ---------- 2. returning visitors and the end of the five ----------
  function handoff(title, text, into = view(), { contacts = true, free = true, team = false, again = false } = {}) {
    const x = L();
    into.innerHTML = `<div class="xl-pm">
      <div class="xl-pm-i" aria-hidden="true"><i></i><i></i><i></i></div>
      <h4>${esc(title)}</h4><p>${esc(text)}</p>
      ${contacts ? `<div class="xl-pm-b">
        <a class="btn btn-p" href="${PM_TG}" target="_blank" rel="noopener"><span class="d"></span><span>${esc(x.tg)}</span></a>
        <a class="btn xl-ghost" href="mailto:${PM_MAIL}"><span>${esc(x.mail)}</span></a>
      </div>
      <div class="xl-pm-m"><span dir="ltr">${PM_MAIL}</span><button type="button" class="xl-copy">${esc(x.copy)}</button></div>` : ''}
      ${free ? `<a class="xl-free" href="#free">${esc(x.free)} →</a>` : ''}
      ${team ? `<button type="button" class="xl-team-go">${esc(x.team_link)}</button>` : ''}
      ${again && invite ? `<button type="button" class="xl-again">${esc(x.new_code)}</button>` : ''}
    </div>`;
    if (team) $('.xl-team-go', into).addEventListener('click', () => formView());
    if (again && invite) $('.xl-again', into).addEventListener('click', newCode);
    if (free) $('.xl-free', into).addEventListener('click', () => close());
    if (!contacts) return;
    $('.xl-copy', into).addEventListener('click', (e) => {
      const b = e.currentTarget;
      const done = () => { b.textContent = x.copied; setTimeout(() => { b.textContent = x.copy; }, 1800); };
      (navigator.clipboard ? navigator.clipboard.writeText(PM_MAIL) : Promise.reject()).then(done, () => {
        const r = D.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      });
    });
  }

  // a new invitation code starts a new consultation: forget the old session here
  function newCode() {
    store.clear();
    Object.assign(state, { token: '', name: '', left: null, team: false, brief: false, busy: false });
    const el = modal && $('.xl-left', modal); if (el) el.hidden = true;
    formView();
  }

  // ---------- 3. the conversation ----------
  async function resume(token) {
    let r;
    try { r = await api('/api/session', { token }); } catch { r = { http: 0 }; }
    if (!modal) return;
    if (r.status === 'device') { notice(L().device_h, L().device_p); return; }
    if (r.status === 'expired') { handoff(L().expired_h, L().expired_p, view(), { again: true }); return; }
    if (r.status === 'code_required') { store.clear(); formView(); return; }
    if (r.http !== 200) { if (r.http === 401) store.clear(); start(); return; }
    Object.assign(state, { token, name: r.name, left: r.left, team: !!r.team, brief: !!r.brief || !!r.team });
    if (r.locked) { handoff(L().locked_h, L().locked_p); return; }
    if (!state.team && state.left <= 0) { setLeft(); handoff(L().done_h, L().done_p, view(), { again: true }); return; }
    chatView(r.history || []);
  }

  function chatView(history) {
    const x = L();
    setLeft();
    const ph = state.brief ? x.ask : x.brief_ph;
    view().innerHTML = `<div class="xl-chat"><div class="xl-log" aria-live="polite"></div>
      <form class="xl-in"><textarea rows="1" maxlength="1500" dir="auto" placeholder="${esc(ph)}" aria-label="${esc(ph)}"></textarea><button type="submit" class="xl-send" aria-label="${esc(x.send)}"><i></i></button></form>
      <em class="xl-e xl-chat-e" aria-live="assertive"></em></div>`;
    const log = $('.xl-log', view()), form = $('.xl-in', view()), ta = $('textarea', form);
    bubble(log, 'u-hi', x.intro(state.name));
    for (const m of history) bubble(log, m.role === 'user' ? 'me' : 'her', m.text);
    const grow = () => { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 160) + 'px'; };
    ta.addEventListener('input', grow);
    ta.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); } });
    form.addEventListener('submit', (e) => { e.preventDefault(); send(); });
    log.scrollTop = log.scrollHeight;
    setTimeout(() => ta.focus({ preventScroll: true }), reduce ? 0 : 300);

    async function send() {
      const q = ta.value.trim();
      if (!q || state.busy) return;
      const err = $('.xl-chat-e', view());
      err.textContent = '';
      state.busy = true; form.classList.add('busy'); ta.value = ''; grow();
      bubble(log, 'me', q);
      chime('send');
      const her = bubble(log, 'her think', '');
      her.innerHTML = `<span class="xl-read">${esc(x.reading)}<i></i><i></i><i></i></span>`;
      log.scrollTop = log.scrollHeight;
      let text = '', end = null, raf = 0;
      const paint = () => { raf = 0; her.innerHTML = md(text); her.classList.remove('think'); };
      try {
        const dev = await device();
        const r = await fetch(API + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + state.token, 'x-usha-device': dev.id }, body: JSON.stringify({ q, lang: H.lang in T ? H.lang : 'en' }) });
        if (!r.ok || !(r.headers.get('content-type') || '').includes('event-stream')) {
          let j = {}; try { j = await r.json(); } catch {}
          end = { error: j.status || 'failed', status: r.status };
        } else {
          const rd = r.body.getReader(), dec = new TextDecoder();
          let buf = '';
          for (;;) {
            const { value, done } = await rd.read();
            if (done) break;
            buf += dec.decode(value, { stream: true });
            let i;
            while ((i = buf.indexOf('\n\n')) >= 0) {
              const line = buf.slice(0, i).replace(/^data: /, ''); buf = buf.slice(i + 2);
              let ev; try { ev = JSON.parse(line); } catch { continue; }
              if (ev.t) { text += ev.t; if (!raf) raf = requestAnimationFrame(paint); }
              if (ev.done || ev.error) end = ev;
            }
          }
        }
      } catch { end = { error: 'net' }; }
      if (raf) cancelAnimationFrame(raf);
      state.busy = false; form.classList.remove('busy');
      if (!modal) return;
      if (end && end.done) {
        paint();
        // the team sees which depth answered, to judge cost against quality
        if (end.tier) her.insertAdjacentHTML('beforeend', `<span class="xl-tier" dir="ltr">${esc(end.tier)} · ${esc(end.model || '')}</span>`);
        state.left = end.left;
        if (end.kind === 'brief' || end.kind === 'business' || end.kind === 'answer') state.brief = true;
        setLeft();
        ta.placeholder = state.brief ? x.ask : x.brief_ph;
        chime(end.asks ? 'ask' : 'answer');
        if (end.locked) {
          setTimeout(() => {
            if (!modal) return;
            const card = D.createElement('div'); card.className = 'xl-end';
            log.append(card); form.remove();
            handoff(x.locked_h, x.locked_p, card);
            card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          }, 600);
        } else if (!state.team && state.left <= 0) {
          setTimeout(() => {
            if (!modal) return;
            const card = D.createElement('div'); card.className = 'xl-end';
            log.append(card);
            form.remove();
            handoff(x.done_h, x.done_p, card, { again: true });
            card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          }, 600);
        }
      } else {
        her.remove();
        if (end && end.error === 'limit') { state.left = 0; setLeft(); handoff(x.done_h, x.done_p, view(), { again: true }); return; }
        if (end && end.error === 'expired') { handoff(x.expired_h, x.expired_p, view(), { again: true }); return; }
        if (end && end.error === 'code_required') { store.clear(); formView(); return; }
        if (end && end.error === 'locked') { handoff(x.locked_h, x.locked_p); return; }
        if (end && end.error === 'device') { notice(x.device_h, x.device_p); return; }
        if (end && end.error === 'region') { handoff(x.region_h, x.region_p, view(), { free: false }); return; }
        if (end && end.status === 401) { store.clear(); start(); return; }
        if (end && end.left != null) { state.left = end.left; setLeft(); }
        ta.value = q; grow();
        err.textContent = x.err[end && x.err[end.error] ? end.error : 'failed'] + (end && end.detail ? ` [${end.detail}]` : '');
      }
      log.scrollTop = log.scrollHeight;
    }
  }
  function bubble(log, who, text) {
    const x = L();
    const el = D.createElement('div');
    el.className = 'xl-m ' + who.split(' ').map((c) => 'xl-' + c).join(' ');
    el.dir = 'auto'; // an English answer on the Arabic page still reads left to right
    if (who.startsWith('me')) el.innerHTML = `<span class="xl-who">${esc(x.you)}</span><p>${esc(text)}</p>`;
    else el.innerHTML = md(text);
    log.append(el);
    return el;
  }

  // ---------- the entry point in "Try her" ----------
  function ctaUI() {
    const chat = $('#chat'); if (!chat) return;
    const x = L();
    let cta = $('.xl-cta');
    if (!cta) {
      cta = D.createElement('div'); cta.className = 'xl-cta rv in'; cta.setAttribute('translate', 'no');
      chat.after(cta);
    }
    if (cta.dataset.lang === H.lang) return;
    cta.dataset.lang = H.lang;
    cta.innerHTML = `<div class="xl-cta-t"><span class="xm-k"><span class="xl-dot" aria-hidden="true"></span>${esc(x.cta_k)}</span><b>${x.cta_h}</b><p>${esc(x.cta_p)}</p></div>
      <button type="button" class="btn btn-p xl-open"><span class="d"></span><span>${esc(x.cta_b)}</span></button>`;
    $('.xl-open', cta).addEventListener('click', open);
  }
  // ---------- the invitation in the first screen, right after she wakes ----------
  const HX = {
    en: { b: 'Talk to USHA now', k: 'Live', a: '→' },
    ru: { b: 'Поговорить с USHA', k: 'Онлайн', a: '→' },
    ar: { b: 'تحدّث مع USHA الآن', k: '', a: '←' },
  };
  function heroUI() {
    const row = $('#hero .hero-t .cta'); if (!row) return;
    const h = HX[H.lang] || HX.en;
    let b = $('.xl-hero');
    if (!b) {
      b = D.createElement('button'); b.type = 'button'; b.className = 'xl-hero'; b.setAttribute('translate', 'no');
      row.prepend(b);
      b.addEventListener('click', open);
    }
    if (b.dataset.lang !== H.lang) {
      b.dataset.lang = H.lang;
      b.innerHTML = `<span class="xl-hero-face" aria-hidden="true"><i></i><i></i></span><span class="xl-hero-b">${esc(h.b)}</span>${h.k ? `<span class="xl-hero-k"><span class="xl-hero-dot" aria-hidden="true"></span>${esc(h.k)}</span>` : ''}<span class="xl-hero-a" aria-hidden="true">${h.a}</span>`;
    }
    const nav = $('header a[href="#talk"]'); if (nav) nav.classList.add('xl-nav-live');
  }
  // show it once USHA is awake (the page drops its "locked" class)
  const wake = () => { if (!H.classList.contains('locked')) { H.classList.add('xl-awake'); return true; } return false; };
  if (!wake()) { const mo = new MutationObserver(() => { if (wake()) mo.disconnect(); }); mo.observe(H, { attributes: true, attributeFilter: ['class'] }); }
  addEventListener('usha:talk', () => open());
  addEventListener('hashchange', () => { if (location.hash === '#ask') { history.replaceState(null, '', location.pathname + location.search); open(); } });

  const later = () => setTimeout(() => { ctaUI(); heroUI(); }, 60);
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  const talk = $('#talk'); if (talk) new MutationObserver(() => { if (!$('.xl-cta')) later(); }).observe(talk, { childList: true, subtree: true });
  if (location.hash === '#ask') addEventListener('load', () => setTimeout(open, 400));
  const boot = () => { ctaUI(); heroUI(); };
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
