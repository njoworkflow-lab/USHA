// BRAINS markup shared by the build (pre-rendered grid for crawlers and no-JS)
// and the page script (brains.js), which gets this file inlined without
// "export". Pure functions over one language: C is the page copy
// (brains-copy.mjs), L the localised lists, b one localised profile.

const brEsc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function brPl(forms, n, lang) {
  if (typeof forms === 'string') return forms.replace('{n}', n);
  const cat = new Intl.PluralRules(lang).select(n);
  return (forms[cat] ?? forms.other).replace('{n}', n);
}
export function brPrice(p, lang) {
  if (lang === 'en') return '$' + p.toLocaleString('en-US');
  if (lang === 'ru') return p.toLocaleString('en-US').replace(/,/g, ' ') + ' $';
  return p.toLocaleString('en-US') + ' $';
}
// one brain's state: a named consultant makes it live; otherwise it is being matched
export const brState = (b) => b.consultant && b.consultant.name ? (b.consultant.paused ? 'paused' : 'open') : 'matching';

// ---------- the constellation: one per brain, drawn from its slug ----------
function brRng(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
// points in a unit disc (-1..1), a spanning tree of short links, one ember node
export function brStars(slug, n) {
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
export function brGlyph(slug, cls = 'br-gl', lit = true) {
  const { pts, edges, ember } = brStars(slug);
  const P = (p) => [(32 + p[0] * 25).toFixed(1), (32 + p[1] * 25).toFixed(1)];
  const lines = edges.map(([a, b]) => { const [x1, y1] = P(pts[a]), [x2, y2] = P(pts[b]); return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; }).join('');
  const dots = pts.map((p, i) => { const [x, y] = P(p); return i === ember && lit ? `<circle class="e" cx="${x}" cy="${y}" r="3.1"/>` : `<circle cx="${x}" cy="${y}" r="${(1.5 + (i % 3) * 0.45).toFixed(2)}"/>`; }).join('');
  return `<svg class="${cls}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><g class="l">${lines}</g><g class="p">${dots}</g></svg>`;
}

// ---------- labels ----------
const brCodes = (langs) => langs.map((l) => l.toUpperCase()).join(' · ');
export const brYearsBand = (y, L) => L.years.find(([a, b]) => y >= a && y <= b);
export const brBand = (p, L) => L.bands.find((x) => p >= x.min && p <= x.max);
export function brMeta(b, C, lang) {
  return `${brPl(C.grid.years, b.years, lang)} · ${C.grid.former} ${b.t.former}`;
}
export function brStatus(b, C) {
  const s = brState(b);
  if (s === 'open') return `<span class="br-av br-av-open"><i></i>${brEsc(C.grid.state.open)}</span>`;
  if (s === 'paused') return `<span class="br-av br-av-paused">${brEsc(C.grid.state.paused)}</span>`;
  return `<span class="br-av br-av-matching"><i></i>${brEsc(C.grid.state.matching)}</span>`;
}
export function brBadge(b, C) {
  return b.consultant && b.consultant.name
    ? `<span class="br-ver br-ver-ok">${brEsc(C.grid.validated.replace('{v}', b.consultant.version || '1.0'))}</span>${brStatus(b, C)}`
    : `<span class="br-ver" title="${brEsc(C.grid.state.matching)}">${brEsc(C.grid.verifying)}</span>`;
}

// ---------- the card ----------
export function brCardHTML(b, C, L, lang, i) {
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
export function brGroups(C, L) {
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
export function brFiltersHTML(C, L, counts, state) {
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
export function brProfileHTML(b, C, L, lang, similar) {
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
