// The launch build step (launch-direction.md §3 and §7): the visitor's new
// section order, the new sections (03 Proof, 05 The people behind her), the
// new blocks inside the live sections, and the 3D scene that follows the new
// order. Copy: launch-copy.mjs, through the dictionary (data-t), so the build
// pre-renders every string and the bundle re-renders it on a language switch.
// Every block here is owned: the build removes and writes it again on every
// run, so a second build changes nothing.
import { ORDER, SCENE } from './launch-copy.mjs';

const t = (key, tag = 'span', cls = '', attrs = '') => `<${tag}${cls ? ` class="${cls}"` : ''} data-t="${key}"${attrs}></${tag}>`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const MONTH_DAYS = [[1, 'you'], [3, 'you'], [6, 'her'], [9, 'you'], [12, 'her'], [15, 'you'], [18, 'you'], [22, 'her'], [26, 'you'], [30, 'wait']];
const NJO = 'https://www.njobusinesssolutions.com/';

// ---------- the bundle: USHA's scene follows the sections by id ----------
// The bundle lists its chapters in Au and picks USHA's pose and the galaxy by
// the chapter's index (fu). The list now follows ORDER, and XSC_ maps each
// position back to the scene that section always had, so every section keeps
// its own pose wherever it sits.
export function applyLaunch(src) {
  src = src.replace(/\/\*launch\*\/[^]*?\/\*\/launch\*\//g, '');
  const at = 'var vn=3.6,Au=';
  if (!src.includes(at)) throw new Error('Bundle changed (launch): chapter list');
  src = src.replace(at, `/*launch*/var XSC_=${JSON.stringify(SCENE)};window.__xEnter=()=>{je||n_()};/*/launch*/${at}`);
  const list = /Au=\[[^\]]*\]\.map\(i=>ue\(i\)\)/;
  if (!list.test(src)) throw new Error('Bundle changed (launch): Au');
  src = src.replace(list, `Au=${JSON.stringify(ORDER.map((id) => '#' + id))}.map(i=>ue(i))`);
  const last = ORDER.length - 1;
  const blend = /let t=hn\(Math\.floor\(i\),0,\d+\),n=i-t,s=fu\(t,e\),r=fu\(Math\.min\(t\+1,\d+\),e\)/;
  if (!blend.test(src)) throw new Error('Bundle changed (launch): a_');
  src = src.replace(blend, `let t=hn(Math.floor(i),0,${last}),n=i-t,s=fu(t,e),r=fu(Math.min(t+1,${last}),e)`);
  for (const [a, b] of [['function fu(i,e){let t=Sl(e);', 'function fu(i,e){i=XSC_[i];let t=Sl(e);'], ['a.i=t,a.f=n', 'a.i=XSC_[t],a.f=n']]) {
    if (src.includes(b)) continue;
    if (!src.includes(a)) throw new Error(`Bundle changed (launch): ${a}`);
    src = src.replace(a, b);
  }
  return src;
}

// The build reads its own output: put the two inline swaps back first, so the
// other bundle patches (mind.mjs) find the code they expect.
export function undoLaunch(src) {
  return src.replace('function fu(i,e){i=XSC_[i];let t=Sl(e);', 'function fu(i,e){let t=Sl(e);').replace('a.i=XSC_[t],a.f=n', 'a.i=t,a.f=n');
}

// ---------- markup ----------
function own(h, name, html, fallback, where = 'after') {
  const re = new RegExp(`<!--l:${name}-->[^]*?<!--/l:${name}-->`);
  const block = `<!--l:${name}-->${html}<!--/l:${name}-->`;
  if (re.test(h)) return h.replace(re, () => block);
  if (!fallback.test(h)) throw new Error(`Launch: cannot place ${name}`);
  return h.replace(fallback, (m) => (where === 'after' ? m + block : where === 'before' ? block + m : block));
}
const handoff = (key, to) => `<p class="l-ho rv"><a href="#${to}">${t(key)}</a></p>`;

function proofHTML(c) {
  const card = (n) => `<li class="l-pc rv"><span class="l-pm">${t(`pr_c${n}a`)}</span>${t(`pr_c${n}b`, 'p', 'l-pv')}</li>`;
  return `<section class="ch sec" id="proof"><div class="wrap">
<div class="rv">${t('pr_k', 'div', 'kick')}${t('pr_h', 'h2', 'big')}${t('pr_p', 'p', 'lead')}</div>
<ol class="l-proof">${[1, 2, 3].map(card).join('')}</ol>
${t('pr_note', 'p', 'l-note rv')}
<div class="l-row rv"><a class="btn btn-p" href="${c.cases}"><span class="d"></span>${t('pr_cta')}</a></div>
${handoff('pr_ho', 'control')}
</div></section>`;
}

function controlHTML() {
  const chk = range(1, 5).map((n) => `<li>${t(`c_chk${n}`)}</li>`).join('');
  const acc = range(1, 4).map((n) => `<div>${t(`c_acc${n}n`, 'dt')}${t(`c_acc${n}`, 'dd')}</div>`).join('');
  return `<section class="ch sec" id="control"><div class="wrap">
<div class="rv">${t('c_k', 'div', 'kick')}${t('c_h', 'h2', 'big')}${t('c_p', 'p', 'lead')}</div>
<div class="l-subh rv">${t('c_ld_t', 'h3')}${t('c_ld_s', 'p')}</div>
<div class="ctrl"><div class="glass rv">${t('c_a', 'h3')}${t('c_at', 'p')}</div><div class="glass rv">${t('c_y', 'h3')}${t('c_yt', 'p')}</div><div class="glass rv">${t('c_n', 'h3')}${t('c_nt', 'p')}</div></div>
<div class="l-rule rv"><div>${t('c_stop', 'p', 'l-stop')}${t('c_trail', 'p', 'l-trail')}</div><div class="l-chk">${t('c_chk_t', 'span', 'l-lab')}<ul>${chk}</ul></div></div>
<div class="l-appr rv" data-st="ask"><div class="l-ap-in">
${t('c_cd_l', 'span', 'l-lab l-ap-l')}${t('c_cd_ask', 'h3')}${t('c_cd_why', 'p', 'l-ap-why')}
<div class="l-ap-m">${t('c_cd_m1')}${t('c_cd_m2')}</div>
<div class="l-ap-ask"><button type="button" class="btn btn-p l-ap-yes"><span class="d"></span>${t('c_cd_yes')}</button><button type="button" class="btn btn-g l-ap-no">${t('c_cd_no')}</button></div>
<div class="l-ap-ok" aria-live="polite">${t('c_cd_ok', 'p')}</div>
<div class="l-ap-pb">${t('c_cd_pb', 'p')}<div class="l-ap-ask"><button type="button" class="btn btn-p l-ap-pby"><span class="d"></span>${t('c_cd_pby')}</button><button type="button" class="btn btn-g l-ap-back">${t('c_cd_pbb')}</button></div></div>
</div></div>
<div class="l-acc rv">${t('c_acc_t', 'h3')}<dl>${acc}</dl></div>
<div class="l-risk"><div class="rv">${t('c_rk_t', 'h3')}<ul>${range(1, 4).map((n) => `<li>${t(`c_rk${n}`)}</li>`).join('')}</ul></div>
<div class="rv">${t('c_rl_t', 'h3')}${t('c_rl_s', 'p', 'l-rls')}<ol class="l-ladder">${range(1, 4).map((n) => `<li>${t(`c_rl${n}`)}</li>`).join('')}</ol></div></div>
<div class="guar glass rv">${t('c_g', 'h3')}<ul>${range(1, 4).map((n) => t(`c_g${n}`, 'li')).join('')}</ul></div>
${handoff('c_ho', 'njo')}
</div></section>`;
}

// five desks drawn as line art: hands, desks and objects, no faces
const DESK_ART = [
  '<rect x="18" y="14" width="64" height="58" rx="3"/><path d="M28 28h44M28 38h44M28 48h44M28 58h30"/><ellipse class="e" cx="50" cy="28" rx="26" ry="6"/><ellipse class="e" cx="50" cy="48" rx="26" ry="6"/><path class="e" d="M24 38h52"/>',
  '<path d="M50 4v14M38 18h24l-6 8H44z"/><rect x="20" y="34" width="24" height="38" rx="3"/><rect class="e" x="56" y="34" width="24" height="38" rx="3"/><path d="M84 54c6 0 10 4 12 8"/>',
  '<rect x="10" y="16" width="56" height="52" rx="3"/><path d="M10 30h56M10 44h56M10 58h56M28 16v52M46 16v52"/><rect x="72" y="30" width="20" height="34" rx="3"/><path class="e" d="M52 60l4 4 8-10"/>',
  '<rect x="8" y="14" width="40" height="30" rx="3"/><rect x="52" y="14" width="40" height="30" rx="3"/><path class="e" d="M14 34c6-10 10 4 16-6s8 6 14-2M58 30c6 8 10-6 16 2s8-6 14 0"/><path d="M20 58h52l6 10H14z"/><path d="M82 60h6v8h-6z"/>',
  '<rect x="14" y="8" width="56" height="56" rx="3"/><path d="M14 22h56M28 8v6M56 8v6"/><g class="e"><rect x="22" y="30" width="8" height="8"/><rect x="44" y="44" width="8" height="8"/></g><rect x="76" y="50" width="14" height="22" rx="3"/>',
];
function njoHTML() {
  const desk = (n) => `<li class="l-desk rv"><svg class="l-dart" viewBox="0 0 100 80" aria-hidden="true">${DESK_ART[n - 1]}</svg><div>${t(`nj_d${n}n`, 'h3')}${t(`nj_d${n}s`, 'p', 'l-dsc')}${t(`nj_d${n}l`, 'p')}${t(`nj_d${n}g`, 'span', 'l-glyph')}</div></li>`;
  const items = range(1, 5).map((n) => `<div>${t(`nj_s${n}n`, 'b')}${t(`nj_s${n}l`)}</div>`).join('');
  return `<section class="ch sec" id="njo"><div class="wrap">
<div class="rv">${t('nj_k', 'div', 'kick')}${t('nj_h', 'h2', 'big')}${t('nj_p', 'p', 'lead')}</div>
${t('nj_tip', 'p', 'l-tip rv')}
<ol class="l-desks">${range(1, 5).map(desk).join('')}</ol>
<div class="l-slider rv"><div class="l-track">${items}<div class="l-dup" aria-hidden="true">${items}</div></div></div>
<div class="eng rv"><div class="l-brand"><span>NJO · New Journey Onward</span><a class="btn btn-g" href="${NJO}" target="_blank" rel="noopener">${t('c_visit')} ↗</a></div></div>
<div class="partners rv">${t('c_par', 'div', 'lab')}<div class="track" id="track"></div></div>
${handoff('nj_ho', 'talk')}
</div></section>`;
}

function orbitHTML() {
  const n = 7;
  const orb = range(1, n).map((k) => `<button type="button" class="l-o${k === 1 ? ' on' : ''}" role="tab" aria-selected="${k === 1}" data-o="${k}" style="--a:${((k - 1) * 360 / n).toFixed(2)}deg">${t(`w_o${k}n`)}</button>`).join('');
  const panels = range(1, n).map((k) => `<div class="l-od" data-o="${k}"${k === 1 ? '' : ' hidden'} role="tabpanel">${t(`w_o${k}n`, 'h4')}${t('w_op_lead', 'span', 'l-lab')}${t(`w_o${k}d`, 'p')}${t('w_op_mo', 'span', 'l-lab')}${t(`w_o${k}m`, 'p', 'l-om')}</div>`).join('');
  return `<div class="l-op rv"><div class="l-opt">${t('w_op_h', 'h3')}${t('w_op_l', 'p')}${t('w_op_tip', 'p', 'l-tip')}</div>
<div class="l-orbw"><div class="l-orb" role="tablist"><span class="l-core" aria-hidden="true"><i></i><i></i></span><span class="l-ring" aria-hidden="true"></span>${orb}</div>
<div class="l-opanel">${panels}<div class="l-opst"><span class="l-st">${t('w_op_wait', 'em', 'l-w')}${t('w_op_move', 'em', 'l-m')}</span><button type="button" class="btn btn-p l-opap"><span class="d"></span>${t('w_op_ap')}</button>${t('w_op_ok', 'p', 'l-opok')}</div></div></div></div>`;
}

function monthHTML() {
  const has = new Map(MONTH_DAYS);
  const cal = range(1, 30).map((d) => `<button type="button" role="tab" data-d="${d}" class="${has.has(d) ? `l-has l-${has.get(d)}` : ''}${d === 1 ? ' on' : ''}" aria-selected="${d === 1}"><b>${d}</b></button>`).join('');
  const day = ([d, who]) => `<article class="l-dd" data-d="${d}"${d === 1 ? '' : ' hidden'}>${t(`mo${d}h`, 'h3')}<dl>
<div>${t('mo_f', 'dt')}${t(`mo${d}f`, 'dd')}</div><div>${t('mo_c', 'dt')}${t(`mo${d}c`, 'dd')}</div>
<div class="l-dec">${t('mo_d', 'dt')}<dd>${t(`mo${d}d`)} ${t(`mo${d}b`, 'em', `l-badge l-${who}`)}</dd></div>
<div class="l-res">${t('mo_r', 'dt')}${t(`mo${d}r`, 'dd')}</div><div class="l-time">${t('mo_t', 'dt')}${t(`mo${d}t`, 'dd')}</div></dl></article>`;
  return `<div class="l-mo rv">${t('mo_lab', 'p', 'l-lab')}
<div class="l-mow"><div class="l-cal" role="tablist">${cal}</div>
<div class="l-dpanel">${MONTH_DAYS.map(day).join('')}<article class="l-dd l-rt" data-d="0" hidden><h3>${t('mo_day')} <b class="l-rn"></b></h3>${t('mo_rt', 'p')}</article></div></div>
<div class="l-mofoot">${t('mo_tot', 'b')}${t('mo_cap')}</div></div>`;
}

function plansExtra() {
  const row = (n) => `<details class="l-cv"><summary>${t(`p_cv${n}c`)}</summary><dl><div>${t('p_cov_h1', 'dt')}${t(`p_cv${n}m`, 'dd')}</div><div>${t('p_cov_h2', 'dt')}${t(`p_cv${n}a`, 'dd')}</div><div>${t('p_cov_h3', 'dt')}${t(`p_cv${n}s`, 'dd')}</div></dl></details>`;
  return `${t('p_price', 'p', 'l-price rv')}<div class="l-cov rv">${t('p_cov_t', 'h3')}<div class="l-cvs">${[1, 2, 3, 4, 5].map(row).join('')}</div>${t('p_cov_n', 'p', 'l-note')}</div>${handoff('p_ho', 'free')}`;
}

function freeHTML() {
  const gift = (n) => `<li class="l-gift rv" style="--i:${n - 1}"><span class="l-gd">${t('fw_day')} ${n}</span>${t(`fw_d${n}t`, 'h3')}${t(`fw_d${n}p`, 'p')}${t('fw_open', 'span', 'l-gopen')}</li>`;
  return `${t('fw_by7', 'p', 'l-by7 rv')}<ol class="l-gifts">${range(1, 7).map(gift).join('')}</ol>
<div class="l-terms rv">${t('fw_tt', 'h3')}<ul>${['tg', 'tr', 'tn', 'tc', 'tw'].map((k) => `<li>${t(`fw_${k}`)}</li>`).join('')}</ul></div>
${t('fw_dl', 'p', 'l-lab l-declab rv')}`;
}

function footerGuides(c) {
  return `<div class="l-guides">${t('ft_gt', 'small')}${t('ft_gs', 'p')}<div class="l-gcards">${c.guides.map((g, i) => `<a class="l-gcard" href="${g}"${c.guideLang ? ` hreflang="${c.guideLang}"` : ''}>${t(`ft_g${i + 1}t`, 'b')}${t(`ft_g${i + 1}p`)}${t('ft_read', 'em')}</a>`).join('')}</div><a class="l-cases" href="${c.cases}">${t('ft_cases')}</a></div>`;
}

// c: { cases: url of this language's cases page, guides: [3 urls], guideLang, ask: href of the consultation }
export function launchHTML(h, c) {
  // header: the six chapters a visitor looks for, and the consultation
  h = h.replace(/<nav class="mid">[^]*?<\/nav>/, () => `<nav class="mid">${[['signal', 1], ['proof', 2], ['control', 3], ['njo', 4], ['plans', 5]].map(([id, n]) => `<a href="#${id}" data-t="nav${n}"></a>`).join('')}<a href="${c.cases}" data-t="nav6"></a></nav>`);
  h = h.replace(/(<div class="right">[^]*?<a class="btn btn-p" href=")[^"]*("><span class="d"><\/span><span data-t="cta">)/, `$1${c.ask}$2`);
  // gate: why it is worth the second, and a visible way in
  h = own(h, 'gate', `${t('gate_sub', 'p', 'l-gsub')}<button type="button" class="l-enter" id="lEnter">${t('gate_enter')} <i aria-hidden="true">→</i></button>`, /<p data-t="holdS">[^<]*<\/p>/);
  // hero: two buttons (the consultation is added by live.js, then the free week)
  h = h.replace(/<a class="btn btn-g" href="#signal"><span data-t="b2">[^<]*<\/span> ↓<\/a>/, '');
  // 01: each force in money, and the sector picker
  for (let k = 0; k < 4; k++) {
    h = own(h, `alg${k}`, `${t(`a${k}m`, 'em', 'l-m')}${range(1, 9).map((s) => `<em class="l-m l-sx" data-s="${s}" data-t="f_s${s}_${k}" hidden></em>`).join('')}`, new RegExp(`<small data-t="a${k}d">[^<]*</small>`));
  }
  h = own(h, 'pick', `<div class="l-pick" role="group">${t('f_pick', 'span', 'l-pk')}<div class="l-chips">${t('f_all', 'button', 'on', ' type="button" data-s="0" aria-pressed="true"')}${range(1, 9).map((s) => t(`f_s${s}`, 'button', '', ` type="button" data-s="${s}" aria-pressed="false"`)).join('')}</div></div>`, /<p data-in="1,\.08,\.62" data-t="n_p">[^<]*<\/p>/);

  // sections: pull them out, rebuild the owned ones, put them back in the new order
  const secs = {};
  h = h.replace(/<main>([^]*?)<\/main>/, (m, inner) => {
    inner.replace(/<section class="ch[^"]*" id="([a-z]+)">[^]*?<\/section>/g, (s, id) => { secs[id] = s; return ''; });
    return '<main>\n<!--l:main-->\n</main>';
  });
  secs.proof = proofHTML(c);
  secs.control = controlHTML();
  secs.njo = njoHTML();
  for (const id of ORDER) if (!secs[id]) throw new Error(`Launch: section #${id} not found`);
  // 06: the hand-off under the stage
  secs.talk = own(secs.talk, 'talk', `<div class="wrap">${handoff('t_ho', 'why')}</div>`, /<\/section>$/, 'before');
  // 07: one line under the headline, the orbits instead of the eight roles, the close and the hand-off
  secs.why = own(secs.why, 'wsub', t('w_sub', 'p', 'lead'), /<h2 class="big" data-t="w_h">[^]*?<\/h2>/);
  secs.why = own(secs.why, 'orbit', orbitHTML(), /<p class="sick rv"/, 'before');
  secs.why = own(secs.why, 'whyho', handoff('w_ho', 'month'), /<p class="sick rv"[^>]*>[^]*?<\/p>/);
  // 08: the month, day by day; the counters live in Plans only
  secs.month = own(secs.month, 'month', monthHTML() + handoff('mo_ho', 'plans'), /<div class="tog pill rv" id="mtog">/, 'before');
  secs.month = secs.month.replace(/<div class="(tog pill rv|areas|proonly rv)" id="(mtog|areas|proonly)"(?: hidden)?>/g, '<div class="$1" id="$2" hidden>');
  // 09: the price model, the coverage, the hand-off
  secs.plans = own(secs.plans, 'plans', plansExtra(), /<p class="pnote rv" data-t="p_note">[^<]*<\/p>/);
  // 10: seven gifts and the terms instead of three deliverables; no scarcity line
  secs.free = own(secs.free, 'free', freeHTML(), /<ol class="deliv rv">[^]*?<\/ol>/, 'replace');
  secs.free = secs.free.replace(/<p class="lim rv" data-t="fr_lim">[^<]*<\/p>/, '');
  secs.free = own(secs.free, 'freeho', `<div class="wrap">${handoff('fw_ho', 'faqs')}</div>`, /<\/section>$/, 'before');
  // FAQ: ask her in a consultation
  secs.faqs = own(secs.faqs, 'faq', `<div class="l-row rv"><button type="button" class="btn btn-p l-ask"><span class="d"></span>${t('faq_cta')}</button></div>`, /<div class="faq rv" id="faq">(?:<!--seo:faq-->[^]*?<!--\/seo:faq-->)?<\/div>/);
  // the break: its end screen leads to a consultation
  secs.game = own(secs.game, 'game', `<div class="l-gend" hidden><h3 class="l-gt"></h3>${t('g_end_t', 'span', 'l-gtpl', ' hidden')}${t('g_end_l', 'p')}<div class="l-row"><button type="button" class="btn btn-p l-ask"><span class="d"></span>${t('g_end_c')}</button><button type="button" class="btn btn-g l-again">${t('g_end_a')}</button></div></div>`, /<small id="gkeys"[^>]*>[^<]*<\/small>/);
  h = h.replace('<!--l:main-->', () => ORDER.map((id) => secs[id]).join('\n\n'));
  return h;
}

export { footerGuides };
