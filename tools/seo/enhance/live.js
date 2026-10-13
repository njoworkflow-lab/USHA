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
  const TEAM = '@njobusinesssolutions.com';
  const PM_TG = 'https://t.me/njo_manager', PM_MAIL = 'darina@njobusinesssolutions.com';
  const STORE = 'usha-live';

  const T = {
    en: {
      cta_k: 'Live · 5 questions', cta_h: 'Now ask her about <i>your</i> business.', cta_p: 'Real answers on your market, numbers and next move. Not a script.', cta_b: 'Ask USHA live',
      k: 'USHA · live', h: 'Your business. <b>Her answer.</b>', p: 'Tell her who she is talking to, then ask up to 5 questions. Your project manager follows up on these details, so please use real ones.',
      name: 'Your name', email: 'Work email', phone: 'Mobile number', country: 'Country code', business: 'Business name', size: 'Business size', industry: 'Industry', market: 'Main market', team: 'Team code',
      team_hint: 'NJO team email: enter the team code for unlimited testing.',
      sizes: { solo: 'Just me / under 5', '2-10': '2–10 people', '11-50': '11–50 people', '51-250': '51–250 people', '250+': '250+ people' },
      industries: { 'fmcg-sweets': 'FMCG · sweets & chocolate', 'fmcg-drinks': 'FMCG · drinks', 'fmcg-household': 'FMCG · household', beauty: 'Beauty & cosmetics', 'marketplace-sellers': 'Marketplace seller', 'cafes-restaurants': 'Café or restaurant', 'real-estate': 'Real estate', 'auto-dealers': 'Auto dealer', other: 'Other' },
      markets: { uae: 'UAE', ksa: 'Saudi Arabia', egypt: 'Egypt', russia: 'Russia', kuwait: 'Kuwait', qatar: 'Qatar', bahrain: 'Bahrain', oman: 'Oman', other: 'Other' },
      pick: 'Choose…', consent: 'By starting you agree that NJO may contact you about USHA on these details.', start: 'Start the conversation', checking: 'Checking…',
      left: (n) => (n === 1 ? '1 question left' : `${n} questions left`), unlimited: 'Team · unlimited', you: 'You', ask: 'Ask about your business…', send: 'Send',
      reading: 'Reading your market', hi: (n) => `Hi ${n}. Ask me anything about your business: pricing, a launch, a marketplace, a season, organic reach. I’ll give you a finding, a reason and a move.`,
      ideas: ['How do I grow organic reach this month?', 'Should I cut my price to match a competitor?', 'What should I prepare for the next season?'],
      done_h: 'That was your fifth question.', done_p: 'Your project manager has this conversation and will contact you. Want to start sooner?',
      back_h: (n) => `I remember you, ${n}.`, back_p: 'We’ve talked before. Let’s continue with your project manager: they have our conversation and will take it from here.',
      tg: 'Write on Telegram', mail: 'Email the manager', copy: 'Copy email', copied: 'Copied', free: 'Start the free week',
      err: {
        required: 'Please fill this in.', name_len: 'Use 2–60 letters.', name_chars: 'Letters only, please.', name_fake: 'Please enter your real name.',
        biz_len: 'Use 2–80 characters.', biz_chars: 'The name only, no links.', biz_fake: 'Please enter your real business name.',
        email_bad: 'This email doesn’t look right.', email_typo: 'Did you mean {s}?', email_temp: 'Temporary inboxes can’t be used. Please use your real email.', email_fake: 'Please use your real email.', email_domain: 'This email domain doesn’t receive mail.',
        phone_bad: 'This isn’t a valid number for the chosen country.', phone_fake: 'Please enter your real number.', phone_country: 'Choose a country code.',
        team_code_needed: 'Enter the team code.', team_code_bad: 'The team code isn’t right.',
        bot_check: 'Please complete the check above and try again.', slow_down: 'Too many tries. Please wait a little and try again.', busy: 'USHA is very busy right now. Please try again in a few minutes.',
        failed: 'Something went wrong on our side. Your question wasn’t counted. Please send it again.', cut: 'The answer was cut off. Your question wasn’t counted. Please send it again.', net: 'No connection. Please check your internet and try again.',
        too_long: 'Please keep it under 2,000 characters.',
      },
      close: 'Close',
    },
    ru: {
      cta_k: 'Вживую · 5 вопросов', cta_h: 'Теперь спросите её о <i>вашем</i> бизнесе.', cta_p: 'Настоящие ответы про ваш рынок, цифры и следующий ход. Не сценарий.', cta_b: 'Спросить USHA',
      k: 'USHA · вживую', h: 'Ваш бизнес. <b>Её ответ.</b>', p: 'Расскажите, с кем она говорит, и задайте до 5 вопросов. Менеджер проекта свяжется с вами по этим данным, поэтому укажите настоящие.',
      name: 'Ваше имя', email: 'Рабочий email', phone: 'Мобильный номер', country: 'Код страны', business: 'Название бизнеса', size: 'Размер бизнеса', industry: 'Сфера', market: 'Основной рынок', team: 'Код команды',
      team_hint: 'Email команды NJO: введите код команды для безлимитного теста.',
      sizes: { solo: 'Только я / до 5', '2-10': '2–10 человек', '11-50': '11–50 человек', '51-250': '51–250 человек', '250+': '250+ человек' },
      industries: { 'fmcg-sweets': 'FMCG · сладости и шоколад', 'fmcg-drinks': 'FMCG · напитки', 'fmcg-household': 'FMCG · бытовая химия и дом', beauty: 'Красота и косметика', 'marketplace-sellers': 'Селлер на маркетплейсах', 'cafes-restaurants': 'Кафе или ресторан', 'real-estate': 'Недвижимость', 'auto-dealers': 'Автодилер', other: 'Другое' },
      markets: { uae: 'ОАЭ', ksa: 'Саудовская Аравия', egypt: 'Египет', russia: 'Россия', kuwait: 'Кувейт', qatar: 'Катар', bahrain: 'Бахрейн', oman: 'Оман', other: 'Другое' },
      pick: 'Выберите…', consent: 'Начиная, вы соглашаетесь, что NJO может связаться с вами по поводу USHA по этим данным.', start: 'Начать разговор', checking: 'Проверяем…',
      left: (n) => `${n} ${n === 1 ? 'вопрос' : n < 5 ? 'вопроса' : 'вопросов'} осталось`, unlimited: 'Команда · безлимит', you: 'Вы', ask: 'Спросите о своём бизнесе…', send: 'Отправить',
      reading: 'Читаю ваш рынок', hi: (n) => `${n}, здравствуйте. Спрашивайте о своём бизнесе: цены, запуск, маркетплейс, сезон, органические охваты. Я дам находку, причину и ход.`,
      ideas: ['Как вырастить органические охваты в этом месяце?', 'Снижать ли цену вслед за конкурентом?', 'Что готовить к Новому году?'],
      done_h: 'Это был пятый вопрос.', done_p: 'Ваш менеджер проекта видит этот разговор и свяжется с вами. Хотите начать раньше?',
      back_h: (n) => `Я вас помню, ${n}.`, back_p: 'Мы уже разговаривали. Продолжим с вашим менеджером проекта: у него есть наш разговор, дальше он всё возьмёт на себя.',
      tg: 'Написать в Telegram', mail: 'Написать менеджеру', copy: 'Скопировать email', copied: 'Скопировано', free: 'Начать бесплатную неделю',
      err: {
        required: 'Заполните, пожалуйста.', name_len: 'От 2 до 60 букв.', name_chars: 'Только буквы, пожалуйста.', name_fake: 'Укажите настоящее имя.',
        biz_len: 'От 2 до 80 символов.', biz_chars: 'Только название, без ссылок.', biz_fake: 'Укажите настоящее название бизнеса.',
        email_bad: 'Похоже, в email ошибка.', email_typo: 'Может быть, {s}?', email_temp: 'Временные ящики не подходят. Укажите свой настоящий email.', email_fake: 'Укажите свой настоящий email.', email_domain: 'Этот почтовый домен не принимает письма.',
        phone_bad: 'Это не похоже на номер выбранной страны.', phone_fake: 'Укажите настоящий номер.', phone_country: 'Выберите код страны.',
        team_code_needed: 'Введите код команды.', team_code_bad: 'Неверный код команды.',
        bot_check: 'Пройдите проверку выше и попробуйте снова.', slow_down: 'Слишком много попыток. Подождите немного.', busy: 'Сейчас у USHA очень много разговоров. Попробуйте через несколько минут.',
        failed: 'Что-то пошло не так на нашей стороне. Вопрос не засчитан, отправьте его ещё раз.', cut: 'Ответ оборвался. Вопрос не засчитан, отправьте его ещё раз.', net: 'Нет соединения. Проверьте интернет и попробуйте снова.',
        too_long: 'Не больше 2 000 символов, пожалуйста.',
      },
      close: 'Закрыть',
    },
    ar: {
      cta_k: 'مباشر · ٥ أسئلة', cta_h: 'الآن اسألها عن <i>نشاطك</i> أنت.', cta_p: 'إجابات حقيقية عن سوقك وأرقامك وخطوتك التالية. ليست نصاً جاهزاً.', cta_b: 'اسأل USHA مباشرة',
      k: 'USHA · مباشر', h: 'نشاطك. <b>وإجابتها.</b>', p: 'عرّفها بمن تتحدث معه، ثم اسأل حتى ٥ أسئلة. مدير المشروع سيتواصل معك على هذه البيانات، فاكتب بياناتك الحقيقية.',
      name: 'اسمك', email: 'البريد الإلكتروني للعمل', phone: 'رقم الجوال', country: 'رمز الدولة', business: 'اسم النشاط التجاري', size: 'حجم النشاط', industry: 'القطاع', market: 'السوق الرئيسي', team: 'رمز الفريق',
      team_hint: 'بريد فريق NJO: أدخل رمز الفريق لتجربة بلا حدود.',
      sizes: { solo: 'أنا فقط / أقل من ٥', '2-10': '٢–١٠ أشخاص', '11-50': '١١–٥٠ شخصاً', '51-250': '٥١–٢٥٠ شخصاً', '250+': 'أكثر من ٢٥٠' },
      industries: { 'fmcg-sweets': 'سلع استهلاكية · حلويات وشوكولاتة', 'fmcg-drinks': 'سلع استهلاكية · مشروبات', 'fmcg-household': 'سلع استهلاكية · منظفات ومنزل', beauty: 'تجميل وعناية', 'marketplace-sellers': 'بائع على المتاجر الإلكترونية', 'cafes-restaurants': 'مقهى أو مطعم', 'real-estate': 'عقارات', 'auto-dealers': 'وكيل سيارات', other: 'أخرى' },
      markets: { uae: 'الإمارات', ksa: 'السعودية', egypt: 'مصر', russia: 'روسيا', kuwait: 'الكويت', qatar: 'قطر', bahrain: 'البحرين', oman: 'عُمان', other: 'أخرى' },
      pick: 'اختر…', consent: 'بالبدء توافق على أن تتواصل معك NJO بخصوص USHA على هذه البيانات.', start: 'ابدأ المحادثة', checking: 'جارٍ التحقق…',
      left: (n) => (n === 1 ? 'بقي سؤال واحد' : n === 2 ? 'بقي سؤالان' : `بقي ${n} أسئلة`), unlimited: 'الفريق · بلا حدود', you: 'أنت', ask: 'اسأل عن نشاطك…', send: 'إرسال',
      reading: 'أقرأ سوقك', hi: (n) => `أهلاً ${n}. اسألني أي شيء عن نشاطك: التسعير، الإطلاق، المتاجر الإلكترونية، المواسم، الوصول المجاني. سأعطيك ملاحظة وسبباً وخطوة.`,
      ideas: ['كيف أزيد الوصول المجاني هذا الشهر؟', 'هل أنزل سعري مثل المنافس؟', 'وش أجهز لرمضان القادم؟'],
      done_h: 'كان هذا سؤالك الخامس.', done_p: 'مدير مشروعك لديه هذه المحادثة وسيتواصل معك. تحب تبدأ أسرع؟',
      back_h: (n) => `أتذكرك يا ${n}.`, back_p: 'تحدثنا من قبل. لنكمل مع مدير مشروعك: لديه محادثتنا وسيتابع معك من هنا.',
      tg: 'راسلنا على تيليجرام', mail: 'راسل المدير بالبريد', copy: 'انسخ البريد', copied: 'تم النسخ', free: 'ابدأ الأسبوع المجاني',
      err: {
        required: 'يرجى تعبئة هذا الحقل.', name_len: 'من حرفين إلى ٦٠ حرفاً.', name_chars: 'حروف فقط من فضلك.', name_fake: 'يرجى كتابة اسمك الحقيقي.',
        biz_len: 'من حرفين إلى ٨٠ حرفاً.', biz_chars: 'الاسم فقط بدون روابط.', biz_fake: 'يرجى كتابة اسم نشاطك الحقيقي.',
        email_bad: 'يبدو أن البريد غير صحيح.', email_typo: 'هل تقصد {s}؟', email_temp: 'لا يمكن استخدام بريد مؤقت. يرجى استخدام بريدك الحقيقي.', email_fake: 'يرجى استخدام بريدك الحقيقي.', email_domain: 'هذا النطاق لا يستقبل البريد.',
        phone_bad: 'الرقم غير صحيح للدولة المختارة.', phone_fake: 'يرجى كتابة رقمك الحقيقي.', phone_country: 'اختر رمز الدولة.',
        team_code_needed: 'أدخل رمز الفريق.', team_code_bad: 'رمز الفريق غير صحيح.',
        bot_check: 'أكمل التحقق أعلاه ثم حاول مجدداً.', slow_down: 'محاولات كثيرة. انتظر قليلاً ثم حاول مجدداً.', busy: 'USHA مشغولة جداً الآن. حاول بعد دقائق.',
        failed: 'حدث خطأ من جهتنا ولم يُحتسب سؤالك. أرسله مرة أخرى.', cut: 'انقطعت الإجابة ولم يُحتسب سؤالك. أرسله مرة أخرى.', net: 'لا يوجد اتصال. تحقق من الإنترنت وحاول مجدداً.',
        too_long: 'أقل من ٢٠٠٠ حرف من فضلك.',
      },
      close: 'إغلاق',
    },
  };
  const L = () => T[H.lang] || T.en;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // country codes for the phone, main markets first
  const CC = [['AE', '971'], ['SA', '966'], ['EG', '20'], ['RU', '7'], ['KW', '965'], ['QA', '974'], ['BH', '973'], ['OM', '968'], ['JO', '962'], ['LB', '961'], ['IQ', '964'], ['MA', '212'], ['TN', '216'], ['DZ', '213'], ['KZ', '7'], ['BY', '375'], ['UZ', '998'], ['AM', '374'], ['GE', '995'], ['AZ', '994'], ['TR', '90'], ['IN', '91'], ['PK', '92'], ['GB', '44'], ['US', '1'], ['DE', '49'], ['FR', '33'], ['IT', '39'], ['ES', '34'], ['NL', '31'], ['CH', '41'], ['CY', '357'], ['RS', '381'], ['CN', '86']];
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

  // ---------- server ----------
  async function api(path, { body, token, method = body ? 'POST' : 'GET' } = {}) {
    const r = await fetch(API + path, {
      method,
      headers: { ...(body ? { 'content-type': 'application/json' } : {}), ...(token ? { authorization: 'Bearer ' + token } : {}) },
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
  let modal = null, lastFocus = null, state = { token: '', name: '', left: null, team: false, busy: false };

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
    const saved = store.get();
    if (saved.token) resume(saved.token); else formView();
  }
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
    el.textContent = state.team ? x.unlimited : x.left(state.left);
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
        ${field('name', x.name, `<input id="xl-name" name="name" autocomplete="name" maxlength="60" required value="${esc(prefill.name || '')}">`)}
        ${field('business', x.business, `<input id="xl-business" name="business" autocomplete="organization" maxlength="80" required value="${esc(prefill.business || '')}">`)}
        ${field('email', x.email, `<input id="xl-email" name="email" type="email" inputmode="email" autocomplete="email" maxlength="120" required dir="ltr" value="${esc(prefill.email || '')}">`)}
        <div class="xl-f xl-phone" data-f="phone"><label for="xl-phone">${esc(x.phone)}</label>
          <div class="xl-pr" dir="ltr"><select name="country" aria-label="${esc(x.country)}">${CC.map(([c, d]) => `<option value="${c}"${c === defCC ? ' selected' : ''}>${flag(c)} +${d}</option>`).join('')}</select>
          <input id="xl-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" maxlength="22" required value="${esc(prefill.phone || '')}"></div><em class="xl-e" aria-live="polite"></em></div>
        <div class="xl-f xl-team" data-f="teamCode" hidden><label for="xl-team">${esc(x.team)}</label><input id="xl-team" name="teamCode" type="password" autocomplete="off" maxlength="80"><small>${esc(x.team_hint)}</small><em class="xl-e" aria-live="polite"></em></div>
        ${field('size', x.size, `<select id="xl-size" name="size" required>${opt(x.sizes, prefill.size)}</select>`)}
        ${field('industry', x.industry, `<select id="xl-industry" name="industry" required>${opt(x.industries, prefill.industry)}</select>`)}
        ${field('market', x.market, `<select id="xl-market" name="market" required>${opt(x.markets, prefill.market)}</select>`)}
      </div>
      <div class="xl-ts"></div>
      <em class="xl-e xl-form-e" aria-live="polite"></em>
      <div class="xl-go"><button class="btn btn-p" type="submit"><span class="d"></span><span>${esc(x.start)}</span></button><small>${esc(x.consent)}</small></div>
    </form>`;
    const f = $('form', view());
    const email = f.elements.email, team = $('.xl-team', f);
    const teamCheck = () => { const on = email.value.trim().toLowerCase().endsWith(TEAM); team.hidden = !on; };
    email.addEventListener('input', teamCheck); teamCheck();
    f.elements.market.addEventListener('change', () => { const c = MARKET_CC[f.elements.market.value]; if (c && !f.elements.phone.value.trim()) f.elements.country.value = c; });
    $$('input,select', f).forEach((el) => el.addEventListener('input', () => showErr(f, el.name === 'country' ? 'phone' : el.name, '')));
    f.addEventListener('submit', (e) => { e.preventDefault(); submit(f); });
    turnstile($('.xl-ts', f));
    setTimeout(() => f.elements.name.focus({ preventScroll: true }), reduce ? 0 : 300);
  }
  function field(name, label, control) {
    return `<div class="xl-f" data-f="${name}"><label for="xl-${name}">${esc(label)}</label>${control}<em class="xl-e" aria-live="polite"></em></div>`;
  }
  function showErr(f, name, msg) {
    const box = $(`[data-f="${name}"]`, f) || null;
    if (!box) { const e = $('.xl-form-e', f); if (e) e.textContent = msg; return; }
    box.classList.toggle('bad', !!msg);
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
    if (!$('.xl-team', f).hidden && !v('teamCode')) errs.teamCode = 'team_code_needed';
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
    data.lang = H.lang in T ? H.lang : 'en';
    data.turnstile = tsToken;
    state.busy = true; btn.disabled = true; btn.lastElementChild.textContent = x.checking;
    let r;
    try { r = await api('/api/register', { body: data }); } catch { r = { http: 0 }; }
    state.busy = false; btn.disabled = false; btn.lastElementChild.textContent = x.start;
    if (!modal) return;
    if (r.status === 'ok' && r.token) {
      Object.assign(state, { token: r.token, name: r.name, left: r.left, team: !!r.team });
      store.set({ token: r.token });
      chatView([]);
      return;
    }
    if (r.status === 'returning') { handoff(x.back_h(r.name), x.back_p); return; }
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
  function handoff(title, text, into = view()) {
    const x = L();
    into.innerHTML = `<div class="xl-pm">
      <div class="xl-pm-i" aria-hidden="true"><i></i><i></i><i></i></div>
      <h4>${esc(title)}</h4><p>${esc(text)}</p>
      <div class="xl-pm-b">
        <a class="btn btn-p" href="${PM_TG}" target="_blank" rel="noopener"><span class="d"></span><span>${esc(x.tg)}</span></a>
        <a class="btn xl-ghost" href="mailto:${PM_MAIL}"><span>${esc(x.mail)}</span></a>
      </div>
      <div class="xl-pm-m"><span dir="ltr">${PM_MAIL}</span><button type="button" class="xl-copy">${esc(x.copy)}</button></div>
      <a class="xl-free" href="#free">${esc(x.free)} →</a>
    </div>`;
    $('.xl-copy', into).addEventListener('click', (e) => {
      const b = e.currentTarget;
      const done = () => { b.textContent = x.copied; setTimeout(() => { b.textContent = x.copy; }, 1800); };
      (navigator.clipboard ? navigator.clipboard.writeText(PM_MAIL) : Promise.reject()).then(done, () => {
        const r = D.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      });
    });
    $('.xl-free', into).addEventListener('click', () => close());
  }

  // ---------- 3. the conversation ----------
  async function resume(token) {
    let r;
    try { r = await api('/api/session', { token }); } catch { r = { http: 0 }; }
    if (!modal) return;
    if (r.http !== 200) { if (r.http === 401) store.clear(); formView(); return; }
    Object.assign(state, { token, name: r.name, left: r.left, team: !!r.team });
    if (!state.team && state.left <= 0) { setLeft(); handoff(L().done_h, L().done_p); return; }
    chatView(r.history || []);
  }

  function chatView(history) {
    const x = L();
    setLeft();
    view().innerHTML = `<div class="xl-chat"><div class="xl-log" aria-live="polite"></div>
      <div class="xl-ideas"></div>
      <form class="xl-in"><textarea rows="1" maxlength="2000" dir="auto" placeholder="${esc(x.ask)}" aria-label="${esc(x.ask)}"></textarea><button type="submit" class="xl-send" aria-label="${esc(x.send)}"><i></i></button></form>
      <em class="xl-e xl-chat-e" aria-live="assertive"></em></div>`;
    const log = $('.xl-log', view()), form = $('.xl-in', view()), ta = $('textarea', form);
    bubble(log, 'u-hi', x.hi(state.name));
    for (const m of history) bubble(log, m.role === 'user' ? 'me' : 'her', m.text);
    if (!history.length) {
      $('.xl-ideas', view()).innerHTML = x.ideas.map((q) => `<button type="button">${esc(q)}</button>`).join('');
      $$('.xl-ideas button', view()).forEach((b) => b.addEventListener('click', () => { ta.value = b.textContent; send(); }));
    }
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
      $('.xl-ideas', view()).innerHTML = '';
      state.busy = true; form.classList.add('busy'); ta.value = ''; grow();
      bubble(log, 'me', q);
      const her = bubble(log, 'her think', '');
      her.innerHTML = `<span class="xl-read">${esc(x.reading)}<i></i><i></i><i></i></span>`;
      log.scrollTop = log.scrollHeight;
      let text = '', end = null, raf = 0;
      const paint = () => { raf = 0; her.innerHTML = md(text); her.classList.remove('think'); };
      try {
        const r = await fetch(API + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + state.token }, body: JSON.stringify({ q, lang: H.lang in T ? H.lang : 'en' }) });
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
        state.left = end.left; setLeft();
        if (!state.team && state.left <= 0) {
          setTimeout(() => {
            if (!modal) return;
            const card = D.createElement('div'); card.className = 'xl-end';
            log.append(card);
            form.remove();
            handoff(x.done_h, x.done_p, card);
            card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          }, 600);
        }
      } else {
        her.remove();
        if (end && end.error === 'limit') { state.left = 0; setLeft(); handoff(x.done_h, x.done_p); return; }
        if (end && end.status === 401) { store.clear(); formView(); return; }
        if (end && end.left != null) { state.left = end.left; setLeft(); }
        ta.value = q; grow();
        err.textContent = x.err[end && x.err[end.error] ? end.error : 'failed'];
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
  const later = () => setTimeout(ctaUI, 60);
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  const talk = $('#talk'); if (talk) new MutationObserver(() => { if (!$('.xl-cta')) later(); }).observe(talk, { childList: true, subtree: true });
  if (location.hash === '#ask') addEventListener('load', () => setTimeout(open, 400));
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', ctaUI); else ctaUI();
})();
