// The product pages' shared helpers (BRAINS and PREMIERE): the dialog with a
// focus trap and inert background, a toast, form checks (phone, Telegram,
// email, the card-number guard) and safe storage. Nothing here talks to a
// server: reservations stay in the page until the team's endpoint exists.
const PD = (() => {
  const D = document, H = D.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const pl = (forms, n, lang = H.lang) => {
    if (typeof forms === 'string') return forms.replace('{n}', n);
    const cat = new Intl.PluralRules(lang).select(n);
    return (forms[cat] ?? forms.other).replace('{n}', n);
  };
  const fill = (s, o) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in o ? o[k] : m));

  // ---------- dialogs ----------
  const stack = [];
  const BG = () => $$('body > header, body > main, body > footer, body > .pg-sky, body > .pd-skip');
  function modal({ html, label, cls = '', side = false, onClose }) {
    const opener = D.activeElement, keepY = scrollY;
    const m = D.createElement('div');
    m.className = `pd-modal${side ? ' pd-side' : ''}${cls ? ' ' + cls : ''}`;
    m.innerHTML = `<div class="pd-scrim"></div><div class="pd-panel" role="dialog" aria-modal="true"${label ? ` aria-labelledby="${label}"` : ''}>${html}</div>`;
    D.body.append(m);
    if (!stack.length) { H.classList.add('pd-lock'); BG().forEach((el) => { el.inert = true; }); }
    else stack[stack.length - 1].el.inert = true;
    const api = {
      el: m, panel: $('.pd-panel', m), open: true,
      set(htmlNext) { api.panel.innerHTML = htmlNext; },
      close(now) {
        if (!api.open) return; api.open = false;
        const i = stack.indexOf(api); if (i >= 0) stack.splice(i, 1);
        m.inert = true;
        if (!stack.length) { H.classList.remove('pd-lock'); BG().forEach((el) => { el.inert = false; }); }
        else stack[stack.length - 1].el.inert = false;
        if (now || reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
        if (Math.abs(scrollY - keepY) > 2 && !stack.length) scrollTo({ top: keepY, behavior: 'instant' });
        if (onClose) onClose();
        if (opener && opener.focus && D.contains(opener) && !opener.closest('[inert]')) opener.focus({ preventScroll: true });
      },
    };
    $('.pd-scrim', m).addEventListener('click', () => api.close());
    stack.push(api);
    requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add('on')));
    return api;
  }
  const top = () => stack[stack.length - 1];
  const focusables = (root) => $$('a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])', root).filter((el) => el.offsetParent !== null || el === D.activeElement);
  D.addEventListener('keydown', (e) => {
    const t = top(); if (!t) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); t.close(); return; }
    if (e.key !== 'Tab') return;
    const f = focusables(t.panel); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!t.panel.contains(D.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
    else if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus(); }
  }, true);
  const focusFirst = (root) => { const f = focusables(root)[0]; if (f) f.focus({ preventScroll: true }); };

  // ---------- toast ----------
  let tt = 0;
  function toast(msg) {
    let t = $('.pd-toast');
    if (!t) { t = D.createElement('div'); t.className = 'pd-toast'; t.setAttribute('role', 'status'); D.body.append(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(tt); tt = setTimeout(() => { t.hidden = true; }, 2600);
  }

  // ---------- checks ----------
  const digits = (s) => String(s).replace(/[\s().-]/g, '');
  const valid = {
    phone: (s) => /^\+[1-9]\d{7,14}$/.test(digits(s)),
    tg: (s) => /^@[A-Za-z0-9_]{5,32}$/.test(String(s).trim()) || /^\+[1-9]\d{7,14}$/.test(digits(s)),
    email: (s) => !s || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s).trim()),
    // a 13–19 digit run that passes the Luhn check looks like a card number
    card(s) {
      const runs = String(s).match(/(?:\d[ -]?){13,19}/g) || [];
      return runs.some((r) => {
        const d = r.replace(/\D/g, ''); if (d.length < 13 || d.length > 19) return false;
        let sum = 0;
        for (let i = 0; i < d.length; i++) { let n = +d[d.length - 1 - i]; if (i % 2) { n *= 2; if (n > 9) n -= 9; } sum += n; }
        return sum % 10 === 0;
      });
    },
  };

  // ---------- storage that may be missing (private mode, blocked data) ----------
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch { /* nothing to do */ } },
  };
  // a reference the team can read out on the phone: no 0/O, no 1/I
  const ref = (prefix, n = 4) => { const A = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; let s = ''; const r = new Uint32Array(n); crypto.getRandomValues(r); r.forEach((x) => { s += A[x % A.length]; }); return `${prefix}-${s}`; };
  const today = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };

  return { D, H, $, $$, esc, pl, fill, reduce, modal, top, focusFirst, toast, valid, store, ref, today };
})();

// BRAINS markup shared by the build (pre-rendered grid for crawlers and no-JS)
// and the page script (brains.js), which gets this file inlined without
// "export". Pure functions over one language: C is the page copy
// (brains-copy.mjs), L the localised lists, b one localised profile.

const brEsc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function brPl(forms, n, lang) {
  if (typeof forms === 'string') return forms.replace('{n}', n);
  const cat = new Intl.PluralRules(lang).select(n);
  return (forms[cat] ?? forms.other).replace('{n}', n);
}
function brPrice(p, lang) {
  if (lang === 'en') return '$' + p.toLocaleString('en-US');
  if (lang === 'ru') return p.toLocaleString('en-US').replace(/,/g, ' ') + ' $';
  return p.toLocaleString('en-US') + ' $';
}
// one brain's state: a named consultant makes it live; otherwise it is being matched
const brState = (b) => b.consultant && b.consultant.name ? (b.consultant.paused ? 'paused' : 'open') : 'matching';

// ---------- the constellation: one per brain, drawn from its slug ----------
function brRng(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
// points in a unit disc (-1..1), a spanning tree of short links, one ember node
function brStars(slug, n) {
  const r = brRng(slug), k = n || 7 + Math.floor(r() * 3), pts = [];
  let guard = 0;
  while (pts.length < k && guard++ < 400) {
    const a = r() * Math.PI * 2, d = 0.25 + Math.sqrt(r()) * 0.75, p = [Math.cos(a) * d, Math.sin(a) * d * 0.86];
    if (pts.every((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) > 0.42)) pts.push(p);
  }
  const inT = [0], edges = [];
  while (inT.length < pts.length) {
    let best = null;
    for (const i of inT) for (let j = 0; j < pts.length; j++) {
      if (inT.includes(j)) continue;
      const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]);
      if (!best || d < best[2]) best = [i, j, d];
    }
    edges.push([best[0], best[1]]); inT.push(best[1]);
  }
  // one extra link closes a small loop, as real constellations do
  if (pts.length > 5) edges.push([pts.length - 1, Math.floor(pts.length / 2)]);
  return { pts, edges, ember: Math.floor(r() * pts.length) };
}
function brGlyph(slug, cls = 'br-gl', lit = true) {
  const { pts, edges, ember } = brStars(slug);
  const P = (p) => [(32 + p[0] * 25).toFixed(1), (32 + p[1] * 25).toFixed(1)];
  const lines = edges.map(([a, b]) => { const [x1, y1] = P(pts[a]), [x2, y2] = P(pts[b]); return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; }).join('');
  const dots = pts.map((p, i) => { const [x, y] = P(p); return i === ember && lit ? `<circle class="e" cx="${x}" cy="${y}" r="3.1"/>` : `<circle cx="${x}" cy="${y}" r="${(1.5 + (i % 3) * 0.45).toFixed(2)}"/>`; }).join('');
  return `<svg class="${cls}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><g class="l">${lines}</g><g class="p">${dots}</g></svg>`;
}

// ---------- labels ----------
const brCodes = (langs) => langs.map((l) => l.toUpperCase()).join(' · ');
const brYearsBand = (y, L) => L.years.find(([a, b]) => y >= a && y <= b);
const brBand = (p, L) => L.bands.find((x) => p >= x.min && p <= x.max);
function brMeta(b, C, lang) {
  return `${brPl(C.grid.years, b.years, lang)} · ${C.grid.former} ${b.t.former}`;
}
function brStatus(b, C) {
  const s = brState(b);
  if (s === 'open') return `<span class="br-av br-av-open"><i></i>${brEsc(C.grid.state.open)}</span>`;
  if (s === 'paused') return `<span class="br-av br-av-paused">${brEsc(C.grid.state.paused)}</span>`;
  return `<span class="br-av br-av-matching"><i></i>${brEsc(C.grid.state.matching)}</span>`;
}
function brBadge(b, C) {
  return b.consultant && b.consultant.name
    ? `<span class="br-ver br-ver-ok">${brEsc(C.grid.validated.replace('{v}', b.consultant.version || '1.0'))}</span>${brStatus(b, C)}`
    : `<span class="br-ver" title="${brEsc(C.grid.state.matching)}">${brEsc(C.grid.verifying)}</span>`;
}

// ---------- the card ----------
function brCardHTML(b, C, L, lang, i) {
  const shown = b.fields.slice(0, 2).map((f) => [L.fields[f], 'f']);
  const more = b.fields.length - shown.length;
  const name = b.consultant && b.consultant.name ? `<p class="br-name">${brEsc(b.consultant.name)}</p>` : '';
  const id = `br-t-${b.id}`;
  return `<li class="br-card" data-slug="${b.slug}" style="--k:${i}">
<article class="br-c" aria-labelledby="${id}">
<div class="br-ctop">${brGlyph(b.slug)}<div class="br-cid"><span class="br-code">${b.id}</span>${brBadge(b, C)}</div></div>
${name}<h3 class="br-t" id="${id}">${brEsc(b.t.title)}</h3>
<p class="br-meta">${brEsc(brMeta(b, C, lang))}</p>
<span class="br-ruler" style="--y:${b.years}" aria-hidden="true"></span>
<ul class="br-tags">${shown.map(([t, k]) => `<li class="br-tg-${k}">${brEsc(t)}</li>`).join('')}${more > 0 ? `<li class="br-tg-m">+${more}</li>` : ''}</ul>
<p class="br-ind">${brEsc(b.ind.map((x) => L.ind[x]).join(' · '))}</p>
<p class="br-mk"><span class="num">${brEsc(b.codes)}</span><span class="num">${brCodes(b.langs)}</span></p>
<div class="br-cft"><span class="br-price num">${brEsc(C.grid.perMonth.replace('{p}', brPrice(b.price, lang)))}</span><button type="button" class="br-open" aria-haspopup="dialog" aria-describedby="${id}">${brEsc(brState(b) === 'matching' ? C.grid.viewProfile : C.grid.view)}</button></div>
</article></li>`;
}

// ---------- filters ----------
// groups: [key, label, [[value, label]...]]
function brGroups(C, L) {
  return [
    ['lang', C.grid.g.lang, Object.entries(L.langs)],
    ['market', C.grid.g.market, Object.entries(L.markets)],
    ['ind', C.grid.g.ind, Object.entries(L.ind)],
    ['field', C.grid.g.field, Object.entries(L.fields)],
    ['years', C.grid.g.years, L.years.map(([a, , lab]) => [String(a), lab + C.grid.yearsSuffix])],
    ['budget', C.grid.g.budget, L.bands.map((x) => [x.id, `${x.n} · ${x.range}`])],
    ['avail', C.grid.g.avail, C.grid.avail],
  ];
}
function brFiltersHTML(C, L, counts, state) {
  return brGroups(C, L).map(([g, label, vals]) => {
    const sel = state[g] || [];
    const chips = vals.map(([v, l]) => {
      const n = counts ? counts[g][v] : null, on = sel.includes(v);
      return `<button type="button" class="pd-chip${n === 0 ? ' zero' : ''}" data-g="${g}" data-v="${v}" aria-pressed="${on}">${brEsc(l)}<span class="c num">${n == null ? '' : n}</span></button>`;
    }).join('');
    const hint = g === 'lang' && C.grid.langHint ? `<p class="br-fhint">${brEsc(C.grid.langHint)}</p>` : '';
    return `<fieldset class="br-fg" data-g="${g}"><legend>${brEsc(label)}${sel.length ? ` <span class="br-fgn num">${sel.length}</span>` : ''}</legend><div class="br-fgc">${chips}</div>${hint}</fieldset>`;
  }).join('');
}

// ---------- the profile (in the side sheet) ----------
function brProfileHTML(b, C, L, lang, similar) {
  const P = C.profile, s = brState(b), t = b.t;
  const li = (a) => a.map((x) => `<li>${brEsc(x)}</li>`).join('');
  const name = b.consultant && b.consultant.name ? `<p class="br-pname">${brEsc(b.consultant.name)}</p>` : '';
  const banner = s === 'matching' ? `<p class="br-banner">${brEsc(P.banner)}</p>` : s === 'paused' ? `<p class="br-banner">${brEsc(P.paused)}</p>` : '';
  const ln = b.consultant && b.consultant.linkedin && lang !== 'ru'
    ? `<p class="br-ln"><a class="pd-link" href="${brEsc(b.consultant.linkedin)}" target="_blank" rel="noopener">${brEsc(P.linkedin)}<span aria-hidden="true">↗</span></a><span>${brEsc(P.linkedinNote)}</span></p>`
    : b.consultant && b.consultant.name ? `<p class="br-ln"><button type="button" class="pd-link br-cvreq">${brEsc(P.cv)}</button></p>` : '';
  const checked = (b.consultant && b.consultant.checked) || [];
  const cov = P.cov[b.cov - 1];
  const say = b.say && C.why.pairs[b.say - 1];
  const ver = b.consultant && b.consultant.version && b.consultant.validated
    ? `<p>${brEsc(P.versionLine.replace('{v}', b.consultant.version).replace('{d}', new Date(b.consultant.validated).toLocaleDateString(lang === 'ar' ? 'ar-EG-u-nu-latn' : lang, { day: 'numeric', month: 'long', year: 'numeric' })))}</p>`
    : `<p class="br-muted">${brEsc(P.notYet)}</p>`;
  return `<div class="br-ptop">
<div class="br-pav">${brGlyph(b.slug, 'br-gl br-gl-l')}</div>
<div class="br-pid"><div class="br-cid"><span class="br-code">${b.id}</span>${brBadge(b, C)}</div>${name}
<h2 class="br-pt" id="brPT">${brEsc(t.title)}</h2>
<p class="br-what">${brEsc(P.what)}</p></div></div>
<dl class="br-facts">
<div><dt>${brEsc(C.grid.g.years)}</dt><dd>${brEsc(brPl(C.grid.years, b.years, lang))} · ${brEsc(t.seniority)}</dd></div>
<div><dt>${brEsc(P.marketsL)}</dt><dd class="num">${brEsc(b.codes)}</dd></div>
<div><dt>${brEsc(P.langsL)}</dt><dd>${brEsc(b.langs.map((l) => L.langs[l]).join(', '))}</dd></div>
<div><dt>${brEsc(C.grid.g.avail)}</dt><dd>${brStatus(b, C)}</dd></div>
</dl>
${banner}${ln}
<section class="br-pb"><h3>${brEsc(P.brief)}</h3><p>${brEsc(P.idealFor)}: ${brEsc(t.ideal)}</p></section>
<section class="br-pb"><h3>${brEsc(P.expertise)}</h3>
<dl class="br-kv"><div><dt>${brEsc(P.fieldsL)}</dt><dd>${brEsc(b.fields.map((f) => L.fields[f]).join(' · '))}</dd></div><div><dt>${brEsc(P.industriesL)}</dt><dd>${brEsc(t.industries)}</dd></div><div><dt>${brEsc(P.marketsL)}</dt><dd>${brEsc(b.groups.map((g) => L.markets[g]).join(' · '))}</dd></div></dl>
<div class="br-two"><div><h4>${brEsc(P.advises)}</h4><ul class="br-yes">${li(b.fields.map((f) => L.fields[f]))}</ul></div>
<div><h4>${brEsc(P.notAdvise)}</h4><ul class="br-no"><li>${brEsc(P.fixed)}</li>${t.border ? `<li>${brEsc(t.border)}</li>` : ''}</ul></div></div></section>
<section class="br-pb"><h3>${brEsc(P.track)}</h3>
<h4>${brEsc(P.past)}</h4><ul class="br-list">${li(t.past)}</ul>
<h4>${brEsc(P.projects)}</h4><ul class="br-list">${li(t.projects)}</ul>
<h4>${brEsc(s === 'matching' ? P.seeking : P.creds)}</h4><p>${brEsc(t.req)}</p>${checked.length ? `<ul class="br-list">${checked.map((x) => `<li>${brEsc(x)} <span class="pd-tag">${brEsc(P.checked)}</span></li>`).join('')}</ul>` : ''}</section>
<section class="br-pb"><h3>${brEsc(P.questions)}</h3><p class="br-muted">${brEsc(P.questionsHint)}</p>
<ul class="br-qs">${t.qs.map((q, i) => `<li><button type="button" class="br-q" data-q="${i}"><span class="num">${i + 1}</span>${brEsc(q)}</button></li>`).join('')}</ul></section>
${say ? `<section class="br-pb"><h3>${brEsc(P.answers)}</h3><blockquote class="br-say"><p>${brEsc(say[2])}</p><footer>${brEsc(say[0])}</footer></blockquote></section>` : ''}
<section class="br-pb"><h3>${brEsc(P.price)}</h3>
<ul class="br-fac"><li><span>${brEsc(P.factors[0])}</span><b>${brEsc(L.home[b.home])}</b></li><li><span>${brEsc(P.factors[1])}</span><b class="num">${b.years}</b></li><li><span>${brEsc(P.factors[2])}</span><b>${brEsc(cov)}</b></li></ul>
<p class="br-pp"><span class="br-price num">${brEsc(C.grid.perMonth.replace('{p}', brPrice(b.price, lang)))}</span> · ${brEsc(brBand(b.price, L).n)}</p></section>
<section class="br-pb"><h3>${brEsc(P.versions)}</h3>${ver}</section>
${similar && similar.length ? `<section class="br-pb"><h3>${brEsc(P.similar)}</h3><ul class="br-sim">${similar.map((x) => `<li><button type="button" class="br-simb" data-slug="${x.slug}">${brGlyph(x.slug, 'br-gl br-gl-s')}<span><b>${brEsc(x.t.title)}</b><small>${brEsc(brPl(C.grid.years, x.years, lang))} · <span class="num">${brEsc(brPrice(x.price, lang))}</span></small></span></button></li>`).join('')}</ul></section>` : ''}`;
}

// BRAINS (/brains/, /en/brains/, /ar/brains/): the page's behaviour.
//  1. the opening moment: 25 constellations of experience, one per brain,
//     gather into one brain; USHA's line of sight lights one at a time;
//  2. the marketplace: faceted filters (OR inside a group, AND across groups,
//     counts on every value), sort, paging, and a FLIP morph when the grid
//     changes; a bottom sheet for the filters on phones;
//  3. the profile in a side sheet, deep-linked as #slug;
//  4. the consultation: case → plan → channel → review → reserved;
//  5. "Let USHA match me": a short brief, three suggestions.
// No reservation leaves the page yet (see submitReservation). Markup helpers:
// brains-ui.mjs, inlined above; shared helpers: prod.js (PD).
(() => {
  const S = window.USHA_BRAINS; if (!S) return;
  const { C, L, list, lang } = S;
  const { D, H, $, $$, esc, pl, fill, reduce } = PD;
  const bySlug = Object.fromEntries(list.map((b) => [b.slug, b]));
  const price = (p) => brPrice(p, lang);
  const perMonth = (p) => C.grid.perMonth.replace('{p}', price(p));
  const yearsLabel = (n) => pl(C.grid.years, n, lang);
  const ease = 'cubic-bezier(.16,1,.3,1)';

  /* =================== 1. the opening moment =================== */
  function heroMoment() {
    const stage = $('.br-stage'), cv = $('.br-cv'), host = $('.br-host'), lit = $('.br-lit');
    const ctx = cv && cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    // a side view of a brain: frontal lobe, crown, back, cerebellum, temporal lobe
    const OUT = [[-0.95, 0.04], [-0.93, -0.24], [-0.8, -0.48], [-0.58, -0.64], [-0.3, -0.73], [0, -0.75], [0.3, -0.7], [0.56, -0.57], [0.78, -0.38], [0.93, -0.12], [0.95, 0.14], [0.86, 0.32], [0.9, 0.44], [0.8, 0.58], [0.6, 0.64], [0.42, 0.56], [0.28, 0.46], [0.12, 0.5], [-0.08, 0.46], [-0.32, 0.47], [-0.52, 0.5], [-0.68, 0.42], [-0.76, 0.28], [-0.88, 0.22]];
    const SULCI = [[[0.06, -0.74], [0.02, -0.45], [-0.06, -0.15], [-0.1, 0.12]], [[-0.74, 0.24], [-0.42, 0.12], [-0.1, 0.06], [0.24, -0.02], [0.46, 0.02]], [[0.5, -0.56], [0.42, -0.3], [0.48, -0.08], [0.66, 0.1]], [[-0.62, -0.5], [-0.5, -0.3], [-0.6, -0.08]], [[0.52, 0.44], [0.66, 0.5], [0.8, 0.5]]];
    const inside = (x, y) => { let c = false; for (let i = 0, j = OUT.length - 1; i < OUT.length; j = i++) { const [xi, yi] = OUT[i], [xj, yj] = OUT[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; };
    // deterministic places for the 25 constellations inside the shape
    let seed = 5; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const centres = []; let guard = 0;
    while (centres.length < list.length && guard++ < 20000) {
      const x = rnd() * 1.7 - 0.85, y = rnd() * 1.3 - 0.66, md = guard > 8000 ? 0.18 : 0.255;
      if (inside(x, y) && inside(x + 0.1, y) && inside(x - 0.1, y) && inside(x, y + 0.08) && inside(x, y - 0.08) && centres.every((c) => Math.hypot(c[0] - x, (c[1] - y) * 1.15) > md)) centres.push([x, y]);
    }
    const cons = list.map((b, i) => ({ b, c: centres[i] || [0, 0], s: brStars(b.slug), from: [rnd() * 2.6 - 1.3, rnd() * 2 - 1], tw: rnd() * 6 }));
    // links between near neighbours: the brain's wiring
    const links = [];
    cons.forEach((a, i) => { cons.map((b, j) => [j, Math.hypot(a.c[0] - b.c[0], a.c[1] - b.c[1])]).filter(([j]) => j > i).sort((p, q) => p[1] - q[1]).slice(0, 2).forEach(([j, d]) => { if (d < 0.5) links.push([i, j]); }); });
    // dust on the outline and the folds
    const dust = [];
    const along = (pts, n, closed) => { const segs = closed ? pts.map((p, i) => [p, pts[(i + 1) % pts.length]]) : pts.slice(1).map((p, i) => [pts[i], p]); segs.forEach(([a, b]) => { for (let k = 0; k < n; k++) { const t = rnd(); dust.push([a[0] + (b[0] - a[0]) * t + (rnd() - 0.5) * 0.02, a[1] + (b[1] - a[1]) * t + (rnd() - 0.5) * 0.02, rnd()]); } }); };
    along(OUT, 30, true); SULCI.forEach((s) => along(s, 16, false));

    let W = 0, Hh = 0, dpr = 1, scale = 0, ox = 0, oy = 0, eye = null, raf = 0, t0 = 0, vis = true;
    let hl = 0, hover = -1, paused = reduce, lastSwitch = 0;
    function size() {
      const r = stage.getBoundingClientRect();
      W = r.width; Hh = r.height; dpr = Math.min(devicePixelRatio || 1, 1.5);
      cv.width = Math.round(W * dpr); cv.height = Math.round(Hh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const narrow = W < 560;
      scale = Math.min(W * (narrow ? 0.46 : 0.42), Hh * 0.56);
      ox = W * (narrow ? 0.5 : 0.56); oy = Hh * (narrow ? 0.38 : 0.45);
      if (H.dir === 'rtl') ox = W - ox;
      const hr = host.getBoundingClientRect();
      eye = hr.width ? [hr.left - r.left + hr.width * 0.47, hr.top - r.top + hr.height * 0.44] : null;
    }
    const easeOut = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
    const P = (x, y) => [ox + x * scale, oy + y * scale];
    function draw(now) {
      raf = 0;
      const t = reduce ? 1e6 : now - t0;
      ctx.clearRect(0, 0, W, Hh);
      const float = reduce ? 0 : Math.sin(t / 2600) * 4;
      // the outline dust
      const dA = easeOut((t - 1100) / 1500);
      if (dA > 0) {
        // the contour and the folds as soft curves, then the dust on them
        const curve = (pts, closed, a, w) => {
          const q = closed ? [...pts, pts[0]] : pts; ctx.beginPath();
          const [x0, y0] = P(...q[0]); ctx.moveTo(x0, y0 + float);
          for (let i = 1; i < q.length - 1; i++) { const [ax, ay] = P(...q[i]), [bx, by] = P(...q[i + 1]); ctx.quadraticCurveTo(ax, ay + float, (ax + bx) / 2, (ay + by) / 2 + float); }
          const [xl, yl] = P(...q[q.length - 1]); ctx.lineTo(xl, yl + float);
          ctx.strokeStyle = `rgba(169,236,229,${a * dA})`; ctx.lineWidth = w; ctx.stroke();
        };
        curve(OUT, true, 0.22, 1.2); SULCI.forEach((q) => curve(q, false, 0.13, 1));
        for (const [x, y, k] of dust) { const [px, py] = P(x, y); ctx.fillStyle = `rgba(169,236,229,${(0.12 + k * 0.38) * dA})`; ctx.fillRect(px, py + float, 1.4, 1.4); }
      }
      const R = scale * 0.075;
      const pos = cons.map((o, i) => { const k = easeOut((t - i * 45) / 1700); const fx = o.from[0] * W * 0.5 + W / 2, fy = o.from[1] * Hh * 0.5 + Hh / 2; const [tx, ty] = P(o.c[0], o.c[1]); return [fx + (tx - fx) * k, fy + (ty - fy) * k + float, k]; });
      // wiring between constellations
      const lA = easeOut((t - 1800) / 1200);
      if (lA > 0) { ctx.lineWidth = 0.8; for (const [i, j] of links) { ctx.strokeStyle = `rgba(169,236,229,${0.13 * lA})`; ctx.beginPath(); ctx.moveTo(pos[i][0], pos[i][1]); ctx.lineTo(pos[j][0], pos[j][1]); ctx.stroke(); } }
      const cur = hover >= 0 ? hover : hl, settled = t > 2500;
      if (!eye) { const hr = host.getBoundingClientRect(), r0 = stage.getBoundingClientRect(); if (hr.width) eye = [hr.left - r0.left + hr.width * 0.47, hr.top - r0.top + hr.height * 0.44]; }
      // the line of sight
      if (settled && eye) {
        const [cx, cy] = pos[cur];
        const g = ctx.createLinearGradient(eye[0], eye[1], cx, cy);
        g.addColorStop(0, 'rgba(255,180,138,.12)'); g.addColorStop(1, 'rgba(255,140,90,.85)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.3; ctx.setLineDash([4, 5]); ctx.beginPath(); ctx.moveTo(eye[0], eye[1]); ctx.lineTo(cx, cy); ctx.stroke(); ctx.setLineDash([]);
      }
      cons.forEach((o, i) => {
        const [cx, cy, k] = pos[i], on = settled && i === cur, r = R * (1.6 - 0.6 * k) * (on ? 1.18 : 1);
        const pts = o.s.pts.map(([x, y]) => [cx + x * r, cy + y * r]);
        const la = easeOut((t - 700 - i * 30) / 900);
        ctx.lineWidth = on ? 1.2 : 0.8;
        ctx.strokeStyle = on ? 'rgba(255,150,100,.85)' : `rgba(243,238,232,${0.32 * la})`;
        ctx.beginPath(); for (const [a, b] of o.s.edges) { ctx.moveTo(pts[a][0], pts[a][1]); ctx.lineTo(pts[b][0], pts[b][1]); } ctx.stroke();
        pts.forEach(([x, y], j) => {
          const tw = reduce ? 1 : 0.75 + 0.25 * Math.sin(t / 700 + o.tw + j);
          const ember = j === o.s.ember;
          ctx.fillStyle = ember && on ? '#FF6A2B' : ember ? `rgba(255,170,130,${0.9 * tw})` : on ? 'rgba(255,214,190,.95)' : `rgba(243,238,232,${(0.45 + 0.4 * k) * tw})`;
          ctx.beginPath(); ctx.arc(x, y, ember ? (on ? 3.4 : 2.2) : 1.35 + (j % 3) * 0.35, 0, 6.283); ctx.fill();
        });
      });
      if (!reduce && vis && !D.hidden) {
        if (settled && !paused && hover < 0 && now - lastSwitch > 3600) { lastSwitch = now; setHL((hl + 1) % cons.length); }
        raf = requestAnimationFrame(draw);
      }
    }
    function caption(i) {
      const b = cons[i].b;
      $('.br-litt', lit).textContent = b.t.title;
      $('.br-lits', lit).textContent = `${yearsLabel(b.years)} · ${L.home[b.home]}`;
      $('.br-litb', lit).dataset.slug = b.slug;
    }
    function setHL(i) { hl = i; caption(i); }
    const go = () => { if (!raf) raf = requestAnimationFrame(draw); };
    size(); t0 = performance.now(); lastSwitch = t0 + 2600; caption(0); $('.br-litb', lit).dataset.slug = cons[0].b.slug;
    go();
    new ResizeObserver(() => { size(); go(); }).observe(stage);
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { vis = en.isIntersecting; if (vis) go(); }).observe(stage);
    D.addEventListener('visibilitychange', () => { if (!D.hidden) go(); });
    const near = (e) => {
      const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      let best = -1, bd = scale * 0.14;
      cons.forEach((o, i) => { const [px, py] = P(o.c[0], o.c[1]); const d = Math.hypot(px - x, py - y); if (d < bd) { bd = d; best = i; } });
      return best;
    };
    cv.addEventListener('pointermove', (e) => { const n = near(e); if (n !== hover) { hover = n; cv.style.cursor = n >= 0 ? 'pointer' : ''; if (n >= 0) caption(n); else caption(hl); go(); } });
    cv.addEventListener('pointerleave', () => { hover = -1; caption(hl); go(); });
    cv.addEventListener('click', (e) => { const n = near(e); if (n >= 0) openProfile(cons[n].b.slug); });
    $('.br-litb', lit).addEventListener('click', (e) => openProfile(e.currentTarget.dataset.slug));
    const pb = $('.br-pause', lit);
    const syncPause = () => { pb.setAttribute('aria-pressed', String(paused)); pb.setAttribute('aria-label', paused ? C.hero.play : C.hero.pause); pb.classList.toggle('is-paused', paused); };
    syncPause();
    pb.addEventListener('click', () => { paused = !paused; syncPause(); lastSwitch = performance.now(); go(); });
    $('.br-next', lit).setAttribute('aria-label', C.hero.next);
    $('.br-next', lit).addEventListener('click', () => { setHL((hl + 1) % cons.length); lastSwitch = performance.now(); go(); });
    if (reduce) pb.hidden = true;
  }

  /* =================== the "validated" tooltip =================== */
  const tipb = $('.br-tipb'), tip = $('#brTip');
  if (tipb && tip) {
    const set = (on) => { tip.hidden = !on; tipb.setAttribute('aria-expanded', String(on)); };
    tipb.addEventListener('click', () => set(tip.hidden));
    tipb.addEventListener('blur', () => set(false));
    tipb.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  }

  /* =================== 2. the marketplace =================== */
  const app = $('.br-app');
  const state = { lang: [], market: [], ind: [], field: [], years: [], budget: [], avail: ['open', 'matching'], sort: 'best', shown: 12 };
  const DEF_AVAIL = ['open', 'matching'];
  const groups = brGroups(C, L);
  const labelOf = Object.fromEntries(groups.map(([g, , vals]) => [g, Object.fromEntries(vals)]));
  const test = {
    lang: (b, v) => b.langs.includes(v),
    market: (b, v) => b.groups.includes(v),
    ind: (b, v) => b.ind.includes(v),
    field: (b, v) => b.fields.includes(v),
    years: (b, v) => { const band = brYearsBand(b.years, L); return band && String(band[0]) === v; },
    budget: (b, v) => brBand(b.price, L).id === v,
    avail: (b, v) => brState(b) === v || (v === 'open' && brState(b) === 'paused'),
  };
  const G = Object.keys(test);
  const passes = (b, st, skip) => G.every((g) => g === skip || !st[g].length || st[g].some((v) => test[g](b, v)));
  const isDefault = () => G.every((g) => g === 'avail' ? state.avail.length === 2 : !state[g].length);
  const activeCount = () => G.reduce((n, g) => n + (g === 'avail' ? (state.avail.length === 2 ? 0 : 1) : state[g].length), 0);
  const pageLang = lang === 'ar' ? 'ar' : lang === 'ru' ? 'ru' : null;
  function order(arr) {
    const rank = { open: 0, paused: 2, matching: 1 };
    const s = state.sort, idx = (b) => list.indexOf(b);
    return arr.slice().sort((a, b) => {
      if (s === 'up') return a.price - b.price || idx(a) - idx(b);
      if (s === 'down') return b.price - a.price || idx(a) - idx(b);
      if (s === 'exp') return b.years - a.years || idx(a) - idx(b);
      if (s === 'new') return idx(b) - idx(a);
      // best match: open first, then the page's own language, then how many selected values it hits
      const hits = (x) => G.reduce((n, g) => n + (g !== 'avail' ? state[g].filter((v) => test[g](x, v)).length : 0), 0);
      return rank[brState(a)] - rank[brState(b)] || (pageLang ? (b.langs.includes(pageLang) - a.langs.includes(pageLang)) : 0) || hits(b) - hits(a) || idx(a) - idx(b);
    });
  }
  function counts() {
    const out = {};
    for (const [g, , vals] of groups) { out[g] = {}; for (const [v] of vals) out[g][v] = list.filter((b) => passes(b, state, g) && test[g](b, v)).length; }
    return out;
  }
  const cardEl = Object.fromEntries($$('.br-card', app).map((li) => [li.dataset.slug, li]));
  const grid = $('.br-grid', app);
  function render(animate = true) {
    const matched = order(list.filter((b) => passes(b, state)));
    const shown = matched.slice(0, state.shown);
    const doFlip = animate && !reduce && grid.animate;
    const before = new Map();
    if (doFlip) Object.values(cardEl).forEach((li) => { if (!li.hidden) before.set(li, li.getBoundingClientRect()); });
    const showSet = new Set(shown.map((b) => b.slug));
    shown.forEach((b) => grid.append(cardEl[b.slug]));
    list.forEach((b) => { if (!showSet.has(b.slug)) grid.append(cardEl[b.slug]); });
    Object.entries(cardEl).forEach(([slug, li]) => { li.hidden = !showSet.has(slug); });
    if (doFlip) shown.forEach((b, i) => {
      const li = cardEl[b.slug], was = before.get(li), now = li.getBoundingClientRect();
      if (!was) { li.animate([{ opacity: 0, transform: 'translateY(16px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 480, delay: 60 + Math.min(i, 8) * 30, easing: ease, fill: 'backwards' }); return; }
      const dx = was.left - now.left, dy = was.top - now.top;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) li.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 560, easing: ease });
    });
    // filters in place (focus stays where it is)
    const cnt = counts();
    $$('.br-fg', app).forEach((fs) => {
      const g = fs.dataset.g;
      $$('.pd-chip', fs).forEach((c) => { const v = c.dataset.v, n = cnt[g][v], on = state[g].includes(v); c.setAttribute('aria-pressed', String(on)); c.classList.toggle('zero', n === 0); const ce = $('.c', c); if (ce) ce.textContent = n; });
      const lg = $('legend', fs); let badge = $('.br-fgn', lg);
      const sel = g === 'avail' ? (state.avail.length === 2 ? 0 : state.avail.length) : state[g].length;
      if (sel) { if (!badge) { badge = D.createElement('span'); badge.className = 'br-fgn num'; lg.append(' ', badge); } badge.textContent = sel; } else if (badge) badge.remove();
    });
    $('.br-count', app).textContent = pl(C.grid.count, matched.length, lang);
    $('.br-showr', app).textContent = pl(C.grid.show, matched.length, lang);
    const ac = activeCount();
    $('.br-fbn', app).textContent = ac ? `(${ac})` : '';
    // active chips, each removable
    const chips = [];
    G.forEach((g) => { if (g === 'avail') { if (state.avail.length !== 2) state.avail.forEach((v) => chips.push([g, v])); } else state[g].forEach((v) => chips.push([g, v])); });
    $('.br-active', app).innerHTML = chips.map(([g, v]) => `<button type="button" class="br-ac" data-g="${g}" data-v="${v}" aria-label="${esc(C.grid.remove)}: ${esc(labelOf[g][v])}">${esc(labelOf[g][v])}<i aria-hidden="true"></i></button>`).join('') + (chips.length ? `<button type="button" class="br-ac br-ac-x br-clear">${esc(C.grid.clear)}</button>` : '');
    $$('.br-clear', app).forEach((b) => { if (b.closest('.br-fpf')) b.disabled = isDefault(); });
    $('.br-more', app).hidden = matched.length <= state.shown;
    // the empty state, with the one filter whose removal helps most
    const empty = $('.br-empty', app); empty.hidden = matched.length > 0;
    if (!matched.length) {
      let best = null;
      G.forEach((g) => state[g].forEach((v) => {
        const st = { ...state, [g]: state[g].filter((x) => x !== v) };
        if (g === 'avail' && !st.avail.length) st.avail = DEF_AVAIL.slice();
        const n = list.filter((b) => passes(b, st)).length;
        if (n && (!best || n > best[2])) best = [g, v, n];
      }));
      $('.br-hint', app).innerHTML = best ? `<button type="button" class="pd-link br-ac" data-g="${best[0]}" data-v="${best[1]}">${esc(fill(C.grid.hint, { v: labelOf[best[0]][best[1]], c: pl(C.grid.count, best[2], lang) }))}</button>` : '';
    }
  }
  function toggle(g, v) {
    const on = state[g].includes(v);
    state[g] = on ? state[g].filter((x) => x !== v) : [...state[g], v];
    if (g === 'avail' && !state.avail.length) state.avail = DEF_AVAIL.slice();
    state.shown = 12; render();
  }
  function clearAll() { G.forEach((g) => { state[g] = g === 'avail' ? DEF_AVAIL.slice() : []; }); state.shown = 12; render(); }
  function only(g, v) { G.forEach((x) => { state[x] = x === 'avail' ? DEF_AVAIL.slice() : []; }); state[g] = [v]; state.shown = 12; render(false); $('#browse').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }

  // the filter sheet on phones
  const fp = $('#brFilters'), fbtn = $('.br-fbtn', app);
  const mq = matchMedia('(max-width: 1023px)');
  let sheetOpen = false;
  function openSheet() {
    sheetOpen = true; fp.classList.add('open'); fp.setAttribute('role', 'dialog'); fp.setAttribute('aria-modal', 'true');
    fbtn.setAttribute('aria-expanded', 'true'); H.classList.add('pd-lock');
    requestAnimationFrame(() => fp.classList.add('on')); $('.br-fpx', fp).focus();
  }
  function closeSheet() {
    if (!sheetOpen) return; sheetOpen = false; fp.classList.remove('on'); fbtn.setAttribute('aria-expanded', 'false'); H.classList.remove('pd-lock');
    fp.removeAttribute('role'); fp.removeAttribute('aria-modal');
    setTimeout(() => { if (!sheetOpen) fp.classList.remove('open'); }, reduce ? 0 : 320); fbtn.focus();
  }
  fbtn.addEventListener('click', openSheet);
  $('.br-fpx', fp).addEventListener('click', closeSheet);
  $('.br-showr', fp).addEventListener('click', () => { closeSheet(); $('#browse').scrollIntoView({ block: 'start' }); });
  fp.addEventListener('keydown', (e) => {
    if (!sheetOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); closeSheet(); return; }
    if (e.key !== 'Tab') return;
    const f = $$('button:not([disabled])', fp).filter((x) => x.offsetParent !== null), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  mq.addEventListener('change', () => { if (!mq.matches) closeSheet(); });

  app.addEventListener('click', (e) => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.classList.contains('br-clear')) clearAll();
    else if (t.classList.contains('pd-chip') && t.dataset.g) toggle(t.dataset.g, t.dataset.v);
    else if (t.classList.contains('br-ac') && t.dataset.g) {
      toggle(t.dataset.g, t.dataset.v);
      const next = $('.br-active .br-ac', app) || fbtn.offsetParent && fbtn || $('.br-count', app); if (next && next.focus) next.focus();
    } else if (t.classList.contains('br-moreb')) {
      const first = state.shown; state.shown += 12; render();
      const li = $$('.br-card:not([hidden])', app)[first]; if (li) $('.br-open', li).focus({ preventScroll: true });
    } else if (t.classList.contains('br-open')) openProfile(t.closest('.br-card').dataset.slug);
  });
  $('.br-sort select', app).addEventListener('change', (e) => { state.sort = e.target.value; render(); });
  // the section shortcuts: a field chip, a price band
  $$('.br-fld').forEach((b) => b.addEventListener('click', () => only('field', b.dataset.field)));
  $$('.br-bandgo').forEach((b) => b.addEventListener('click', () => only('budget', b.dataset.band)));
  const rail = $('.br-railsv');
  $$('.br-band').forEach((b) => {
    const on = () => rail && rail.setAttribute('data-hl', b.dataset.band), off = () => rail && rail.removeAttribute('data-hl');
    b.addEventListener('mouseenter', on); b.addEventListener('mouseleave', off); b.addEventListener('focusin', on); b.addEventListener('focusout', off);
  });
  $$('.br-goto').forEach((b) => b.addEventListener('click', () => openProfile(b.dataset.slug)));
  $$('.br-match-open').forEach((b) => b.addEventListener('click', () => openMatch()));

  /* =================== 3. the profile =================== */
  let prof = null;
  function similarOf(b) {
    const score = (x) => x.fields.filter((f) => b.fields.includes(f)).length * 3 + x.ind.filter((f) => b.ind.includes(f)).length + x.groups.filter((f) => b.groups.includes(f)).length;
    return list.filter((x) => x !== b).map((x) => [x, score(x)]).sort((p, q) => q[1] - p[1]).slice(0, 3).map(([x]) => x);
  }
  function profileHTML(b) {
    const s = brState(b);
    return `<div class="pd-hd br-phd"><span class="br-phk">${esc(C.crumb)}</span><button type="button" class="pd-x" aria-label="${esc(C.profile.close)}"></button></div>
<div class="pd-body br-pbody">${brProfileHTML(b, C, L, lang, similarOf(b))}</div>
<div class="pd-ft br-pft"><span class="br-price num">${esc(perMonth(b.price))}</span><button type="button" class="btn btn-p br-consult"><span class="d"></span>${esc(s === 'matching' ? C.profile.ctaMatching : C.profile.cta)}</button></div>`;
  }
  function wireProfile(b) {
    const p = prof.panel;
    $('.pd-x', p).addEventListener('click', () => prof.close());
    $('.br-consult', p).addEventListener('click', () => openFlow(b));
    $$('.br-q', p).forEach((q) => q.addEventListener('click', () => openFlow(b, b.t.qs[+q.dataset.q])));
    $$('.br-simb', p).forEach((x) => x.addEventListener('click', () => showProfile(bySlug[x.dataset.slug])));
    const cv = $('.br-cvreq', p); if (cv) cv.addEventListener('click', () => openFlow(b));
  }
  function showProfile(b) {
    prof.set(profileHTML(b)); wireProfile(b);
    $('.br-pbody', prof.panel).scrollTop = 0;
    $('.pd-x', prof.panel).focus({ preventScroll: true });
    try { history.replaceState(null, '', '#' + b.slug); } catch { /* file:// or sandbox */ }
  }
  function openProfile(slug) {
    const b = bySlug[slug]; if (!b) return;
    if (prof && prof.open) { showProfile(b); return; }
    prof = PD.modal({ html: profileHTML(b), label: 'brPT', side: true, cls: 'br-prof', onClose: () => { try { history.replaceState(null, '', location.pathname + location.search); } catch { /* ignore */ } } });
    wireProfile(b);
    try { history.replaceState(null, '', '#' + b.slug); } catch { /* ignore */ }
    requestAnimationFrame(() => $('.pd-x', prof.panel).focus({ preventScroll: true }));
  }

  /* =================== 4. the consultation =================== */
  const F = C.flow, DRAFT = 'usha-brains-draft';
  // TODO(brains-reservations): send the payload to the BRAINS endpoint (a new
  // worker route that writes a BRAINS tab in the leads Sheet) once that is
  // decided in control-room/DECISIONS.md. Never to the live chat server. Until
  // then the reservation stays in this page and the confirmation is shown.
  function submitReservation(payload) {
    void payload;
    return new Promise((res) => setTimeout(res, reduce ? 200 : 900));
  }
  const DEF_MARKET = { en: 0, ar: 1, ru: 10 }[lang] ?? 0;
  const LANG_OPTS = ['English', 'العربية', 'Русский', 'Français'];
  function blank(b, q) {
    const d = new Date(); d.setDate(d.getDate() + 7);
    return { slug: b.slug, step: 0, v: { case: q || '', goals: '', start: d.toISOString().slice(0, 10), deadline: '', company: '', market: String(DEF_MARKET), size: '', duration: '1', channel: lang === 'ru' ? 'tg' : 'wa', contact: lang === 'ru' ? '' : '+971 ', name: '', role: '', email: '', clang: String({ en: 0, ar: 1, ru: 2 }[lang] ?? 0), time: '', consent: false } };
  }
  const field = (k, label, ctrl, help = '') => `<div class="pd-f" data-k="${k}"><label class="pd-l" for="bf-${k}">${label}</label>${ctrl}${help}<p class="pd-e" id="bf-${k}-e" aria-live="polite"></p></div>`;
  const input = (k, v, attrs = '') => `<input class="pd-i" id="bf-${k}" name="${k}" value="${esc(v)}" aria-describedby="bf-${k}-e" ${attrs}>`;
  const select = (k, v, opts, withBlank = true) => `<select class="pd-i" id="bf-${k}" name="${k}" aria-describedby="bf-${k}-e">${withBlank ? `<option value="">${esc(F.choose)}</option>` : ''}${opts.map((o, i) => `<option value="${i}"${String(i) === String(v) ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  const monthOf = (iso) => { try { return new Date(iso + 'T12:00:00').toLocaleDateString(lang === 'ar' ? 'ar-EG-u-nu-latn' : lang, { month: 'long', year: 'numeric' }); } catch { return iso; } };
  const durMonths = { 0: 1, 1: 3, 2: 6 };
  function estimate(b, v) {
    const m = durMonths[v.duration];
    if (!m) return fill(F.estimateUnsure, { p: price(b.price) });
    return fill(F.estimate, { t: price(b.price * m), m: F.durations[+v.duration] });
  }
  function paneHTML(b, st) {
    const v = st.v;
    if (st.step === 0) return `<div class="pd-pane">
${field('case', F.case, `<textarea class="pd-i" id="bf-case" name="case" rows="5" maxlength="1500" placeholder="${esc(F.casePh)}" aria-describedby="bf-case-h bf-case-e">${esc(v.case)}</textarea>`, `<p class="pd-h" id="bf-case-h">${esc(F.caseHelp)} <span class="pd-cnt num" data-cnt="case">${v.case.length} / 1500</span></p>`)}
${field('goals', F.goals, `<textarea class="pd-i" id="bf-goals" name="goals" rows="3" maxlength="600" placeholder="${esc(F.goalsPh)}" aria-describedby="bf-goals-e">${esc(v.goals)}</textarea>`)}
<div class="pd-grid2">${field('start', F.start, input('start', v.start, `type="date" min="${PD.today()}"`))}${field('deadline', F.deadline, input('deadline', v.deadline, `type="date" min="${PD.today()}"`))}</div>
${field('company', F.company, input('company', v.company, 'autocomplete="organization" maxlength="80"'))}
<div class="pd-grid2">${field('market', F.market, select('market', v.market, F.markets, false))}${field('size', F.size, select('size', v.size, F.sizes))}</div>
</div>`;
    if (st.step === 1) return `<div class="pd-pane">
<div class="br-big"><span class="br-bigp num">${esc(price(b.price))}</span><span>${esc(F.perMonth)}</span></div>
<fieldset class="pd-f br-fs" data-k="duration"><legend class="pd-l">${esc(F.duration)}</legend><div class="pd-rc">${F.durations.map((d, i) => `<label><input type="radio" name="duration" value="${i}"${String(i) === v.duration ? ' checked' : ''}>${esc(d)}</label>`).join('')}</div><p class="pd-h">${esc(F.billing)}</p><p class="br-est num-in" aria-live="polite">${esc(estimate(b, v))}</p></fieldset>
<div class="br-kvs"><span>${esc(F.startMonth)}</span><b>${esc(monthOf(v.start))}</b></div>
<div class="br-inc"><h3>${esc(F.included)}</h3><p>${esc(F.includedB)}</p></div>
<p class="br-nopay">${esc(F.noPay)}</p>
</div>`;
    if (st.step === 2) {
      const tg = v.channel === 'tg';
      return `<div class="pd-pane">
<fieldset class="pd-f br-fs" data-k="channel"><legend class="pd-l">${esc(F.channel)}</legend><div class="pd-rc">${[['wa', 'WhatsApp'], ['tg', 'Telegram']].map(([k, l]) => `<label><input type="radio" name="channel" value="${k}"${v.channel === k ? ' checked' : ''}>${l}</label>`).join('')}</div></fieldset>
${field('contact', tg ? F.tg : F.wa, input('contact', v.contact, `${tg ? 'autocomplete="off" placeholder="@username"' : 'type="tel" autocomplete="tel" inputmode="tel" placeholder="+971 50 123 4567"'} dir="ltr"`))}
<div class="pd-grid2">${field('name', F.name, input('name', v.name, 'autocomplete="name" maxlength="60"'))}${field('role', F.role, select('role', v.role, F.roles))}</div>
${field('email', F.email, input('email', v.email, 'type="email" autocomplete="email" dir="ltr"'))}
<div class="pd-grid2">${field('clang', F.lang, select('clang', v.clang, LANG_OPTS, false))}${field('time', F.time, select('time', v.time, F.times))}</div>
<div class="pd-f" data-k="consent"><label class="pd-check"><input type="checkbox" id="bf-consent" name="consent"${v.consent ? ' checked' : ''} aria-describedby="bf-consent-e"><span>${esc(F.consent)}</span></label><p class="pd-e" id="bf-consent-e" aria-live="polite"></p></div>
</div>`;
    }
    const opt = (arr, i) => (i === '' || i == null ? '—' : arr[+i]);
    const blk = (n, rows) => `<section class="pd-rvb"><h4>${esc(F.reviewBlocks[n])}<button type="button" class="pd-link br-edit" data-step="${n}">${esc(F.edit)}</button></h4><dl>${rows.map(([k, x]) => `<dt>${esc(k)}</dt><dd>${esc(x || '—')}</dd>`).join('')}</dl></section>`;
    return `<div class="pd-pane"><div class="pd-rv">
${blk(0, [[F.case, v.case], [F.goals, v.goals], [F.start, v.start], [F.deadline, v.deadline], [F.company, v.company], [F.market, opt(F.markets, v.market)], [F.size, opt(F.sizes, v.size)]])}
${blk(1, [[F.planT, perMonth(b.price)], [F.duration, opt(F.durations, v.duration)], [F.startMonth, monthOf(v.start)], ['', estimate(b, v)]])}
${blk(2, [[F.channel, v.channel === 'tg' ? 'Telegram' : 'WhatsApp'], [v.channel === 'tg' ? F.tg : F.wa, v.contact], [F.name, v.name], [F.role, opt(F.roles, v.role)], [F.email, v.email], [F.lang, LANG_OPTS[+v.clang]], [F.time, opt(F.times, v.time)]])}
</div><p class="br-nopay">${esc(F.noOnline)}</p></div>`;
  }
  function flowHTML(b, st) {
    const steps = [...F.steps, F.review];
    const last = st.step === 3, matching = brState(b) === 'matching';
    return `<div class="pd-hd br-fhd"><div class="br-mini">${brGlyph(b.slug, 'br-gl br-gl-s')}<div><p class="br-minik" id="brFlowT">${esc(F.title)}</p><p class="br-minit">${esc(b.t.title)} · <span class="num">${esc(perMonth(b.price))}</span></p></div></div><button type="button" class="pd-x" aria-label="${esc(C.grid.close)}"></button></div>
<div class="br-fprog"><p class="br-fstep">${st.step < 3 ? `${esc(fill(F.stepOf, { n: st.step + 1 }))} · ` : ''}<b>${esc(steps[st.step])}</b></p><ol class="pd-steps" aria-hidden="true">${steps.map((s, i) => `<li class="${i < st.step ? 'done' : i === st.step ? 'on' : ''}">${esc(s)}</li>`).join('')}</ol></div>
<form class="pd-body br-fbody" novalidate>${paneHTML(b, st)}<p class="br-saved" aria-live="polite"></p></form>
<div class="pd-ft"><button type="button" class="btn btn-g btn-s br-back"${st.step === 0 ? ' hidden' : ''}>${esc(F.back)}</button><button type="button" class="btn btn-p br-nextb"><span class="d"></span>${esc(last ? (matching ? F.reserveMatching : F.reserve) : [F.next1, F.next2, F.next3][st.step])}</button></div>`;
  }
  let flow = null, fst = null, fb = null;
  function readPane() {
    const f = $('.br-fbody', flow.panel); if (!f) return;
    $$('input,textarea,select', f).forEach((el) => {
      if (el.type === 'radio') { if (el.checked) fst.v[el.name] = el.value; }
      else if (el.type === 'checkbox') fst.v[el.name] = el.checked;
      else if (el.name) fst.v[el.name] = el.value;
    });
  }
  function save() { PD.store.set(DRAFT, fst); }
  function setErr(k, msg) {
    const box = $(`[data-k="${k}"]`, flow.panel); if (!box) return;
    const e = $('.pd-e', box), ctl = $(`#bf-${k}`, box);
    if (e) e.textContent = msg || '';
    if (ctl) { if (msg) ctl.setAttribute('aria-invalid', 'true'); else ctl.removeAttribute('aria-invalid'); }
  }
  function check() {
    const v = fst.v, E = F.err, errs = [];
    const need = (k, ok, msg = E.req) => { if (!ok) errs.push([k, msg]); };
    const card = (k) => { if (PD.valid.card(v[k])) errs.push([k, E.card]); };
    if (fst.step === 0) {
      const c = v.case.trim();
      if (!c) need('case', false); else if (c.length < 40) need('case', false, E.short); else card('case');
      const g = v.goals.trim();
      if (!g) need('goals', false); else if (g.length < 10) need('goals', false, E.short); else card('goals');
      need('start', !!v.start); if (v.start && v.start < PD.today()) need('start', false, E.past);
      if (v.deadline && v.start && v.deadline <= v.start) need('deadline', false, E.deadline);
      need('company', v.company.trim().length >= 2); card('company');
      need('size', v.size !== '');
    } else if (fst.step === 2) {
      const tg = v.channel === 'tg';
      if (!v.contact.trim() || v.contact.trim() === '+971') need('contact', false);
      else need('contact', tg ? PD.valid.tg(v.contact) : PD.valid.phone(v.contact), tg ? E.tg : E.phone);
      need('name', v.name.trim().length >= 2); card('name');
      need('role', v.role !== '');
      need('email', PD.valid.email(v.email), E.email);
      need('consent', v.consent);
    }
    $$('[data-k]', flow.panel).forEach((x) => setErr(x.dataset.k, ''));
    errs.forEach(([k, m]) => setErr(k, m));
    if (errs.length) { const c = $(`#bf-${errs[0][0]}`, flow.panel); if (c) c.focus(); }
    return !errs.length;
  }
  function paint() {
    flow.set(flowHTML(fb, fst)); wireFlow();
    const body = $('.br-fbody', flow.panel); body.scrollTop = 0;
    const first = $('input:not([type=radio]),textarea,select,input[type=radio]:checked', body);
    if (first) first.focus({ preventScroll: true }); else $('.pd-x', flow.panel).focus();
  }
  function wireFlow() {
    const p = flow.panel;
    $('.pd-x', p).addEventListener('click', () => flow.close());
    const form = $('.br-fbody', p);
    form.addEventListener('submit', (e) => e.preventDefault());
    form.addEventListener('input', (e) => {
      readPane(); save();
      const k = e.target.name;
      if (k) setErr(k, '');
      const cnt = $(`[data-cnt="${k}"]`, form); if (cnt) cnt.textContent = `${e.target.value.length} / 1500`;
      if (k === 'duration') { const est = $('.br-est', form); if (est) est.textContent = estimate(fb, fst.v); }
      if (k === 'channel') { const keep = fst.v.contact; fst.v.contact = fst.v.channel === 'tg' ? (keep.startsWith('@') ? keep : '') : (keep.startsWith('+') ? keep : '+971 '); paint(); const r = $(`input[name=channel][value=${fst.v.channel}]`, flow.panel); if (r) r.focus(); }
      const sv = $('.br-saved', form); if (sv && PD.store.get(DRAFT)) sv.textContent = F.saved;
    });
    form.addEventListener('change', (e) => { if (e.target.type === 'radio' && e.target.name === 'duration') { readPane(); save(); const est = $('.br-est', form); if (est) est.textContent = estimate(fb, fst.v); } });
    $$('.br-edit', p).forEach((x) => x.addEventListener('click', () => { fst.step = +x.dataset.step; save(); paint(); }));
    const back = $('.br-back', p); if (back) back.addEventListener('click', () => { readPane(); fst.step = Math.max(0, fst.step - 1); save(); paint(); });
    $('.br-nextb', p).addEventListener('click', async (e) => {
      readPane();
      if (fst.step < 3) { if (!check()) return; fst.step++; save(); paint(); return; }
      const btn = e.currentTarget; btn.disabled = true; btn.innerHTML = `<span class="br-spin" aria-hidden="true"></span>${esc(F.sending)}`;
      const r = PD.ref('BR-' + (() => { const d = new Date(); return String(d.getDate()).padStart(2, '0') + String(d.getMonth() + 1).padStart(2, '0'); })());
      const v = fst.v;
      await submitReservation({
        reservation_id: r, created_at: new Date().toISOString(), page_language: lang, brain_slug: fb.slug, brain_title: fb.t.title, brain_state: brState(fb) === 'matching' ? 'being_matched' : 'matched',
        case: v.case, goals: v.goals, start_date: v.start, deadline: v.deadline, company: v.company, market: F.markets[+v.market], company_size: F.sizes[+v.size],
        duration: F.durations[+v.duration], est_total_usd: durMonths[v.duration] ? fb.price * durMonths[v.duration] : null, channel: v.channel === 'tg' ? 'telegram' : 'whatsapp',
        [v.channel === 'tg' ? 'telegram' : 'whatsapp']: v.contact, name: v.name, role: F.roles[+v.role], email: v.email, consultation_language: LANG_OPTS[+v.clang], contact_time: F.times[+v.time] || '', consent: true, source: 'page',
      });
      PD.store.del(DRAFT);
      done(r);
    });
  }
  function done(r) {
    const v = fst.v, b = fb, ch = v.channel === 'tg' ? 'Telegram' : 'WhatsApp', first = v.name.trim().split(/\s+/)[0];
    const Dn = C.done, matching = brState(b) === 'matching';
    flow.set(`<div class="pd-hd br-fhd"><div class="br-mini">${brGlyph(b.slug, 'br-gl br-gl-s')}<p class="br-minit">${esc(b.t.title)}</p></div><button type="button" class="pd-x" aria-label="${esc(C.grid.close)}"></button></div>
<div class="pd-body br-done">
<div class="br-seal" aria-hidden="true">${brGlyph(b.slug, 'br-gl br-gl-seal')}</div>
<h2 class="br-doneh" id="brDoneT" tabindex="-1">${esc(Dn.h)}</h2>
<p class="br-donep">${esc(fill(matching ? Dn.bodyMatching : Dn.body, { name: first, ch, brain: b.t.title }))}</p>
<p class="br-ref"><span>${esc(Dn.ref.replace('{r}', ''))}</span><b class="num">${esc(r)}</b></p>
<h3 class="br-nexth">${esc(Dn.next)}</h3><ol class="br-nextl">${Dn.steps.map((s) => `<li>${esc(s.replace('{ch}', ch))}</li>`).join('')}</ol>
<div class="br-usha">${S.me}<p>${esc(Dn.usha)}</p></div>
</div>
<div class="pd-ft"><button type="button" class="btn btn-g btn-s br-copy">${esc(Dn.copy)}</button><button type="button" class="btn btn-p br-tob"><span class="d"></span>${esc(Dn.back)}</button></div>`);
    const p = flow.panel;
    $('.pd-x', p).addEventListener('click', () => flow.close());
    $('.br-tob', p).addEventListener('click', () => { flow.close(true); if (prof && prof.open) prof.close(true); $('#browse').scrollIntoView({ block: 'start' }); const h = $('#brBrowseH'); h.tabIndex = -1; h.focus({ preventScroll: true }); });
    $('.br-copy', p).addEventListener('click', async () => {
      const txt = `${b.t.title}\n${C.flow.case} ${v.case}\n${C.flow.goals} ${v.goals}\n${C.flow.start} ${v.start}${v.deadline ? `\n${C.flow.deadline} ${v.deadline}` : ''}\n${C.flow.company} ${v.company}\n${Dn.ref.replace('{r}', r)}`;
      try { await navigator.clipboard.writeText(txt); PD.toast(Dn.copied); } catch { PD.toast(txt.slice(0, 80) + '…'); }
    });
    $('#brDoneT', p).focus({ preventScroll: true });
  }
  function openFlow(b, q) {
    fb = b;
    const saved = PD.store.get(DRAFT);
    fst = saved && saved.slug === b.slug && saved.v ? saved : blank(b, q);
    if (q) { fst.v.case = q; fst.step = 0; }
    if (fst.step > 3) fst.step = 0;
    flow = PD.modal({ html: flowHTML(b, fst), label: 'brFlowT', cls: 'br-flow' });
    wireFlow();
    requestAnimationFrame(() => { const first = $('textarea,input,select', flow.panel); if (first) first.focus({ preventScroll: true }); });
  }

  /* =================== 5. Let USHA match me =================== */
  function openMatch() {
    const M = C.match;
    const ms = { field: '', ind: '', market: '', lang: '', budget: '', case: '' };
    const sel = (k, label, entries) => `<div class="pd-f"><label class="pd-l" for="bm-${k}">${esc(label)}</label><select class="pd-i" id="bm-${k}" name="${k}"><option value="">${esc(M.any)}</option>${entries.map(([v, l]) => `<option value="${v}"${ms[k] === v ? ' selected' : ''}>${esc(l)}</option>`).join('')}</select></div>`;
    const shell = (inner, foot) => `<div class="pd-hd"><div><p class="br-minik" id="brMatchT">${esc(M.title)}</p></div><button type="button" class="pd-x" aria-label="${esc(C.grid.close)}"></button></div><div class="pd-body br-mbody">${inner}</div>${foot ? `<div class="pd-ft">${foot}</div>` : ''}`;
    const step1 = () => shell(`<div class="pd-pane"><p class="br-ms">${esc(M.s1)}</p>${sel('field', C.grid.g.field, Object.entries(L.fields))}<div class="pd-grid2">${sel('ind', C.grid.g.ind, Object.entries(L.ind))}${sel('market', C.grid.g.market, Object.entries(L.markets))}</div><div class="pd-grid2">${sel('lang', C.grid.g.lang, Object.entries(L.langs))}${sel('budget', M.budget, L.bands.map((x) => [x.id, `${x.n} · ${x.range}`]))}</div></div>`,
      `<span></span><button type="button" class="btn btn-p br-mnext"><span class="d"></span>${esc(M.next)}</button>`);
    const step2 = () => shell(`<div class="pd-pane"><div class="pd-f"><label class="pd-l" for="bm-case">${esc(M.s2)}</label><textarea class="pd-i" id="bm-case" rows="5" maxlength="1500" placeholder="${esc(C.flow.casePh)}">${esc(ms.case)}</textarea><p class="pd-h">${esc(C.flow.caseHelp)}</p><p class="pd-e" id="bm-case-e" aria-live="polite"></p></div></div>`,
      `<button type="button" class="btn btn-g btn-s br-mback">${esc(C.flow.back)}</button><button type="button" class="btn btn-p br-mfind"><span class="d"></span>${esc(M.find)}</button>`);
    const m = PD.modal({ html: step1(), label: 'brMatchT', cls: 'br-matchm' });
    const wire = () => {
      const p = m.panel;
      $('.pd-x', p).addEventListener('click', () => m.close());
      $$('select', p).forEach((s) => s.addEventListener('change', () => { ms[s.name] = s.value; }));
      const n1 = $('.br-mnext', p); if (n1) n1.addEventListener('click', () => { m.set(step2()); wire(); $('#bm-case', m.panel).focus(); });
      const bk = $('.br-mback', p); if (bk) bk.addEventListener('click', () => { m.set(step1()); wire(); $('select', m.panel).focus(); });
      const ta = $('#bm-case', p); if (ta) ta.addEventListener('input', () => { ms.case = ta.value; $('#bm-case-e', p).textContent = ''; ta.removeAttribute('aria-invalid'); });
      const fd = $('.br-mfind', p); if (fd) fd.addEventListener('click', () => {
        if (PD.valid.card(ms.case)) { $('#bm-case-e', p).textContent = C.flow.err.card; ta.setAttribute('aria-invalid', 'true'); ta.focus(); return; }
        m.set(shell(`<div class="br-reading" role="status"><div class="br-rme">${S.me}</div><p>${esc(M.reading)}</p></div>`)); wire();
        setTimeout(() => { if (!m.open) return; m.set(results()); wire(); const h = $('#brMres', m.panel); if (h) h.focus(); }, reduce ? 300 : 1400);
      });
      $$('.br-mpick', p).forEach((x) => x.addEventListener('click', () => { m.close(true); openProfile(x.dataset.slug); }));
      const ag = $('.br-magain', p); if (ag) ag.addEventListener('click', () => { m.set(step1()); wire(); $('select', m.panel).focus(); });
    };
    function results() {
      const sc = list.map((b) => {
        const why = []; let s = 0;
        if (ms.field && b.fields.includes(ms.field)) { s += 8; why.push(M.whyParts.field); }
        if (ms.ind && b.ind.includes(ms.ind)) { s += 4; why.push(M.whyParts.ind); }
        if (ms.market && b.groups.includes(ms.market)) { s += 3; why.push(M.whyParts.market); }
        if (ms.lang && b.langs.includes(ms.lang)) { s += 2; why.push(M.whyParts.lang.replace('{l}', L.langs[ms.lang])); }
        if (ms.budget && brBand(b.price, L).id === ms.budget) s += 1;
        why.push(M.whyParts.years.replace('{y}', yearsLabel(b.years)));
        return { b, s, why };
      }).sort((x, y) => y.s - x.s || y.b.years - x.b.years);
      const top = sc.slice(0, 3), exact = !ms.field || top[0].s >= 8;
      return shell(`<div class="pd-pane"><h2 class="br-mres" id="brMres" tabindex="-1">${esc(M.result)}</h2>${exact ? '' : `<p class="br-banner">${esc(M.none)}</p>`}
<ol class="br-mlist">${top.map(({ b, why }) => `<li><button type="button" class="br-mpick" data-slug="${b.slug}">${brGlyph(b.slug, 'br-gl br-gl-s')}<span><b>${esc(b.t.title)}</b><small><span class="br-mwhy">${esc(M.why)}</span> ${esc(why.join(', '))}</small><small class="num">${esc(perMonth(b.price))}</small></span></button></li>`).join('')}</ol></div>`,
        `<button type="button" class="btn btn-g btn-s br-magain">${esc(M.again)}</button><span></span>`);
    }
    wire();
    requestAnimationFrame(() => { const s = $('select', m.panel); if (s) s.focus({ preventScroll: true }); });
  }

  /* =================== boot =================== */
  app.classList.add('br-js');
  render(false);
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
    $$('.br-steps, .br-vs, .br-rail').forEach((el) => io.observe(el));
  } else $$('.br-steps, .br-vs, .br-rail').forEach((el) => el.classList.add('in'));
  heroMoment();
  const h = decodeURIComponent(location.hash.slice(1));
  if (bySlug[h]) openProfile(h);
})();
