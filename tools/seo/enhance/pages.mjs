// The site map (owner feedback, 5 Nov 2026): a short home page that hints at
// the detail pages, one header and one full-screen phone menu for every page,
// the "taught her" moment, the hints row and the detail-page shell.
// Copy: pages-copy.mjs (through the dictionary, data-t), section copy reused.
// Styles: pages.css. Behaviour: pages.js (menu, the moment, links) and, on the
// detail pages only, galaxy.js (the light shared galaxy and USHA's likeness).

const t = (key, tag = 'span', cls = '', attrs = '') => `<${tag}${cls ? ` class="${cls}"` : ''} data-t="${key}"${attrs}></${tag}>`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

// ---------- addresses ----------
export const PAGE_IDS = ['how', 'people', 'plans', 'brains', 'premiere'];
const PREFIX = { ru: '/', en: '/en/', ar: '/ar/' };
export function pageUrls(lang) {
  const p = PREFIX[lang];
  return { home: p, cases: `${p}cases/`, ...Object.fromEntries(PAGE_IDS.map((id) => [id, `${p}${id}/`])) };
}
// where each section lives once the home page is short ('free' sits on both)
export const SECTION_PAGE = { control: 'how', why: 'how', month: 'how', njo: 'people', plans: 'plans', faqs: 'plans' };

// ---------- header links, the menu ----------
const LINKS = [['home', 'nav_home'], ['how', 'nav_how'], ['cases', 'nav6'], ['people', 'nav4'], ['plans', 'nav5'], ['brains', null, 'BRAINS', 'nav_new', 'n'], ['premiere', null, 'PREMIERE', 'nav_try', 't']];
function link(u, cur, [id, key, name, badge, tone], cls = '') {
  const label = key ? t(key) : `<span class="xn-pn">${name}</span>`;
  const b = badge ? `<em class="xn-b xn-b-${tone}" data-t="${badge}"></em>` : '';
  return `<a${cls ? ` class="${cls}"` : ''} href="${u[id]}" data-pg="${id}"${id === cur ? ' aria-current="page"' : ''}>${label}${b}</a>`;
}
export function navMid(u, cur) {
  return `<nav class="mid xn-mid" aria-label="USHA">${LINKS.map((l) => link(u, cur, l)).join('')}</nav>`;
}
export const burger = () => `<button type="button" class="xn-burger" aria-expanded="false" aria-controls="xnMenu"><span class="xn-bars" aria-hidden="true"><i></i><i></i></span>${t('nav_menu', 'span', 'xn-bl')}</button>`;
// langs: the language row (home: the bundle's buttons; detail pages: links)
export function menuHTML(u, cur, { langs, cta, contact }) {
  const big = LINKS.map((l, i) => link(u, cur, l, `xn-l${i > 4 ? ' xn-prod' : ''}`).replace('<a ', `<a style="--i:${i}" `)).join('');
  return `<div class="xn-menu" id="xnMenu" hidden><div class="xn-sky" aria-hidden="true"></div><div class="xn-in">
<div class="xn-top"><span class="xn-mark" aria-hidden="true"></span><button type="button" class="xn-x" aria-label="Close">${t('nav_close')}<i aria-hidden="true"></i></button></div>
<nav class="xn-links">${big}</nav>
<div class="xn-foot">${langs}<a class="btn btn-p xn-cta" href="${cta}"><span class="d"></span>${t('cta')}</a>${contact ? `<p class="xn-ct">${contact}</p>` : ''}</div>
</div></div>`;
}

// ---------- the "trained on" moment (control-room/plans/taught-her.md) ----------
// A constellation of 700+ project stars drawn into one point: USHA. On the
// home page the stage is pinned and scroll builds it (stars arrive, counters
// tick, threads draw, the headline lands) while the real 3D USHA sits on the
// point (#lTher); on /people/ it opens the page with her likeness and plays
// once. The canvas is drawn by pages.js; text stays real text.
const COUNTERS = [[700, '+'], [10, '+'], [20, '+'], [55, '+'], [18, '']];
export function taughtHTML(u, { home }) {
  const head = t('tg_h', home ? 'h2' : 'h1', 'l-tgh');
  const me = home ? '<div class="l-tgu" id="lTher" aria-hidden="true"></div>' : `<div class="l-tgu" aria-hidden="true">${likeness('l-tgme')}</div>`;
  const nums = COUNTERS.map(([n, s], i) => `<div><dt><b class="l-num" data-n="${n}" data-s="${s}">${n}${s}</b></dt>${t(`tg_c${i + 1}`, 'dd')}</div>`).join('');
  const more = home ? `<a class="l-tgmore" href="${u.people}" data-pg="people">${t('tg_more')}<i aria-hidden="true">→</i></a>` : '';
  return `<section class="ch sec l-tg${home ? ' l-tg-home' : ''}" id="taught"><div class="l-tgs">
<canvas class="l-tgcv" role="img" aria-labelledby="tgAlt"></canvas>${t('tg_alt', 'span', '', ' id="tgAlt" hidden')}
<div class="l-tgt">${t('tg_k', 'div', 'kick')}${head}${t('tg_p', 'p', 'l-tgsub')}</div>
<div class="l-tgc">${me}</div>
<div class="l-tgf"><dl class="l-tgk">${nums}</dl>${more}</div>
</div></section>`;
}

// USHA's likeness off the home page: her real body, captured from the home
// scene (usha-body.webp), with live eyes, cheeks and an inner ember glow on
// top. likeness.js brings her to life: breath, float, gaze, blinks and moods.
// Layers: .xu-b floats, .xu-s carries the mood (tilt, lift, squash) and breathes.
export const likeness = (cls = '') => `<span class="xu ${cls}"><span class="xu-glow"></span><span class="xu-b"><span class="xu-s"><img src="{{USHA_BODY}}" alt="" width="480" height="336" decoding="async"><span class="xu-ch"><i></i><i></i></span><span class="xu-eyes"><i></i><i></i></span></span></span></span>`;

// ---------- the hints row ----------
const GLYPH = {
  cases: '<path d="M12 48h40M16 44V30h8v14M28 44V22h8v22M40 44V12h8v32"/>',
  how: '<circle cx="32" cy="32" r="22"/><circle class="g-o" cx="32" cy="32" r="13"/><circle class="g-d" cx="54" cy="32" r="3"/>',
  people: '<circle cx="32" cy="34" r="7"/><g class="g-o"><circle cx="10" cy="22" r="2.5"/><circle cx="14" cy="50" r="2.5"/><circle cx="32" cy="58" r="2.5"/><circle cx="52" cy="48" r="2.5"/><circle cx="54" cy="20" r="2.5"/></g><path class="g-l" d="M12 23l14 7M16 48l11-9M32 56V41M50 47l-12-8M52 21l-14 9"/>',
  plans: '<rect x="12" y="38" width="40" height="14" rx="7"/><rect class="g-o" x="16" y="24" width="32" height="10" rx="5"/><rect class="g-d" x="21" y="12" width="22" height="8" rx="4"/>',
  brains: '<path d="M32 12c-9 0-15 6-15 13-5 2-7 7-5 12 1 6 7 9 12 9h16c5 0 11-3 12-9 2-5 0-10-5-12 0-7-6-13-15-13z"/><path class="g-l" d="M24 30l6 5 5-8 6 6"/><circle class="g-d" cx="41" cy="33" r="2.5"/>',
  premiere: '<path d="M10 52h44"/><path class="g-l" d="M32 10L18 52M32 10l14 42"/><circle class="g-d" cx="32" cy="10" r="3.5"/><path class="g-o" d="M22 40h20"/>',
};
const glyph = (k) => `<svg class="l-hg" viewBox="0 0 64 64" aria-hidden="true">${GLYPH[k]}</svg>`;
export function hintsHTML(u) {
  const card = (id, title, p, extra = '') => `<a class="l-hc l-hc-${id}" href="${u[id]}" data-pg="${id}">${glyph(id)}<span class="l-hct">${title}${extra}</span>${t(p, 'p')}<span class="l-hgo">${t('hn_open')}<i aria-hidden="true">→</i></span></a>`;
  return `<section class="ch sec l-hn" id="hints"><div class="wrap">
${t('hn_h', 'h2', 'l-hnh rv')}
<div class="l-hnr rv">${card('how', t('hn_how_h', 'b'), 'hn_how_p')}${card('people', t('hn_ppl_h', 'b'), 'hn_ppl_p')}${card('plans', t('hn_pl_h', 'b'), 'hn_pl_p')}${card('cases', t('hn_cs_h', 'b'), 'hn_cs_p')}</div>
<div class="l-hnp rv">${card('brains', t('hn_br_h', 'b'), 'hn_br_p', '<small>BRAINS</small>')}${card('premiere', t('hn_pr_h', 'b'), 'hn_pr_p', '<small>PREMIERE</small>')}</div>
</div></section>`;
}

// ---------- detail pages ----------
// the page's own opening: a kicker, the headline, a lead, an index of what is
// on the page, and USHA beside it
export function pageHero({ kick, h1, lead, index = [], cls = '', extra = '' }) {
  const idx = index.length ? `<nav class="pg-idx" aria-label="${kick.replace(/<[^>]+>/g, '')}">${index.map(([href, label], i) => `<a href="${href}"><span>${String(i + 1).padStart(2, '0')}</span>${label}</a>`).join('')}</nav>` : '';
  return `<section class="pg-hero ${cls}"><div class="pg-hin"><div class="pg-ht"><div class="kick">${kick}</div><h1>${h1}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}${idx}${extra}</div><div class="pg-me" aria-hidden="true">${likeness('pg-u')}</div></div></section>`;
}
