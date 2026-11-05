// Copy for the new site map (owner feedback, 5 Nov 2026): the short home page,
// its hints row, the header and menu, and the detail pages /how/, /people/,
// /plans/, /brains/ and /premiere/. Merged into the dictionary through
// content.mjs, so every string is pre-rendered by the build. Arabic for every
// English string lives in ../ar.json (the build stops if one is missing).
// The section copy itself is not repeated here: the detail pages reuse the
// sections that used to sit on the home page, with their own strings.
// The "taught her" moment uses the section 05 strings (nj_*); when the new copy
// from control-room/plans/taught-her.md arrives, swap nj_h, nj_p and tg_more.

export const PAGES = {
  en: {
    // header and menu
    nav_home: 'Home', nav_how: 'How she works', nav_new: 'New', nav_try: 'Try now', nav_menu: 'Menu', nav_close: 'Close',
    // home: the "taught her" moment and the hints row
    tg_more: 'Meet the people who taught her',
    hn_h: 'The rest of her story, <i>one step away.</i>',
    hn_how_p: 'Who decides what, why one mind replaces a department of eight, and a month with her, day by day.',
    hn_ppl_p: 'The strategists, art directors, analysts and engineers who taught her, and the story of how she was born.',
    hn_pl_p: 'Core, Pro and Enterprise, the free first week day by day, and the questions owners ask first.',
    hn_br_p: 'A new product from USHA by NJO.',
    hn_pr_p: 'Coming to usha.one. Be among the first to try it.',
    hn_open: 'Open',
    fr_more: 'The seven days, day by day',
    // detail pages
    pg_soon: 'Opening soon',
    pg_soon_p: 'We’re putting the finishing touches on it. Until then, bring her your business in a free consultation.',
    pg_how_h: 'From your first yes <i>to the month’s close.</i>',
    pg_how_p: 'Who decides what, why one mind replaces a department of eight, and a modelled month with her, day by day.',
    pg_i_ctrl: 'Your control', pg_i_why: 'Why her', pg_i_month: 'A month with her',
    pg_pl_h: 'One mind, <i>scoped to your business.</i>',
    pg_pl_p: 'What each plan covers, how the free first week works, and straight answers before you decide.',
    pg_i_plans: 'Plans', pg_i_free: 'Your first week', pg_i_faq: 'Questions',
    pg_ppl_i1: 'The desks', pg_ppl_i2: 'How she was born', pg_ppl_i3: 'Partners',
    // titles and descriptions
    pg_how_title: 'How USHA works: your control, why her, a month with her · USHA by NJO',
    pg_how_desc: 'How USHA, the AI marketing director by NJO, works with owners: you approve every budget, one mind replaces a department of eight, and a modelled month with her, day by day.',
    pg_ppl_title: 'The people behind USHA: NJO since 2016 · USHA by NJO',
    pg_ppl_desc: 'USHA learned at the desks of NJO’s strategists, art directors, analysts, engineers and project managers: 700+ projects in 20+ countries since 2016. Her origin story and partners.',
    pg_pl_title: 'USHA plans, the free first week and FAQ · USHA by NJO',
    pg_pl_desc: 'USHA Core, Pro and Enterprise: what each plan covers, where she works, the free first week day by day, and answers to the questions owners ask first.',
    pg_br_title: 'BRAINS: new from USHA by NJO, opening soon',
    pg_br_desc: 'BRAINS is a new product from USHA by NJO. Opening soon.',
    pg_pr_title: 'PREMIERE: USHA by NJO, opening soon',
    pg_pr_desc: 'PREMIERE is coming to usha.one. Opening soon.',
  },
  ru: {
    nav_home: 'Главная', nav_how: 'Как она работает', nav_new: 'Новое', nav_try: 'Попробовать', nav_menu: 'Меню', nav_close: 'Закрыть',
    tg_more: 'Познакомьтесь с теми, кто её учил',
    hn_h: 'Остальное — <i>в одном шаге.</i>',
    hn_how_p: 'Кто что решает, почему один ум заменяет отдел из восьми человек и как проходит месяц с ней, день за днём.',
    hn_ppl_p: 'Стратеги, арт-директора, аналитики и инженеры, которые её учили, и история о том, как она появилась.',
    hn_pl_p: 'Core, Pro и Enterprise, бесплатная первая неделя день за днём и вопросы, которые владельцы задают первыми.',
    hn_br_p: 'Новый продукт USHA by NJO.',
    hn_pr_p: 'Скоро на usha.one. Попробуйте одними из первых.',
    hn_open: 'Открыть',
    fr_more: 'Семь дней, день за днём',
    pg_soon: 'Скоро откроется',
    pg_soon_p: 'Мы доводим его до блеска. А пока приходите к ней со своим бизнесом на бесплатную консультацию.',
    pg_how_h: 'От вашего первого «да» <i>до итогов месяца.</i>',
    pg_how_p: 'Кто что решает, почему один ум заменяет отдел из восьми человек, и смоделированный месяц с ней, день за днём.',
    pg_i_ctrl: 'Ваш контроль', pg_i_why: 'Почему она', pg_i_month: 'Месяц с ней',
    pg_pl_h: 'Один ум, <i>под масштаб вашего бизнеса.</i>',
    pg_pl_p: 'Что входит в каждый тариф, как устроена бесплатная первая неделя и прямые ответы, прежде чем вы решите.',
    pg_i_plans: 'Тарифы', pg_i_free: 'Первая неделя', pg_i_faq: 'Вопросы',
    pg_ppl_i1: 'Рабочие столы', pg_ppl_i2: 'Как она появилась', pg_ppl_i3: 'Партнёры',
    pg_how_title: 'Как работает USHA: ваш контроль, почему она, месяц с ней · USHA by NJO',
    pg_how_desc: 'Как USHA, ИИ-директор по маркетингу от NJO, работает с владельцами: вы утверждаете каждый бюджет, один ум заменяет отдел из восьми человек, и смоделированный месяц с ней, день за днём.',
    pg_ppl_title: 'Люди за USHA: NJO с 2016 года · USHA by NJO',
    pg_ppl_desc: 'USHA училась за рабочими столами стратегов, арт-директоров, аналитиков, инженеров и проектных менеджеров NJO: более 700 проектов в 20+ странах с 2016 года. Её история и партнёры.',
    pg_pl_title: 'Тарифы USHA, бесплатная первая неделя и ответы на вопросы · USHA by NJO',
    pg_pl_desc: 'USHA Core, Pro и Enterprise: что входит в каждый тариф, где она работает, бесплатная первая неделя день за днём и ответы на вопросы, которые владельцы задают первыми.',
    pg_br_title: 'BRAINS: новое от USHA by NJO, скоро',
    pg_br_desc: 'BRAINS — новый продукт USHA by NJO. Скоро откроется.',
    pg_pr_title: 'PREMIERE: USHA by NJO, скоро',
    pg_pr_desc: 'PREMIERE скоро на usha.one.',
  },
};
