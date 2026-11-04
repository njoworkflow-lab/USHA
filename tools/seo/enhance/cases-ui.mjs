// Case wall markup. Pure functions over one language's data from cases-data.mjs:
// the build pre-renders the wall with them (crawlers, no-JS), and the build also
// inlines this file (without "export") into the enhancement script, where
// cases.js re-renders on a language switch and builds the full-story dialog.

const xcEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// numbers in the page's own convention: Western digits on the Arabic page, decimal comma on the Russian
export function xcNum(v, lang) {
  try { return new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { maximumFractionDigits: 2 }).format(v); } catch { return String(v); }
}

// A before/after sparkline drawn to scale: both values on one axis that always includes zero.
export function xcSpark(spark, C, lang, big) {
  const [b, a] = spark, W = big ? 132 : 72, Hh = big ? 52 : 30, p = big ? 6 : 4;
  const lo = Math.min(0, b, a), hi = Math.max(0, b, a), span = hi - lo || 1;
  const y = (v) => +(p + (hi - v) / span * (Hh - 2 * p)).toFixed(2), x0 = p, x1 = W - p, z = y(0);
  const label = `${C.ui.spark} ${xcNum(b, lang)} → ${xcNum(a, lang)}`;
  return `<svg class="xc-spark${big ? ' xc-spark-l' : ''}" viewBox="0 0 ${W} ${Hh}" width="${W}" height="${Hh}" role="img" aria-label="${xcEsc(label)}"><title>${xcEsc(label)}</title>` +
    `<path class="xc-sz" d="M${x0} ${z}H${x1}"/>` +
    `<path class="xc-sa" d="M${x0} ${z}L${x0} ${y(b)}L${x1} ${y(a)}L${x1} ${z}Z"/>` +
    `<path class="xc-sl" d="M${x0} ${y(b)}L${x1} ${y(a)}"/>` +
    `<circle class="xc-sb" cx="${x0}" cy="${y(b)}" r="${big ? 3.6 : 2.6}"/><circle class="xc-sf" cx="${x1}" cy="${y(a)}" r="${big ? 3.6 : 2.6}"/></svg>`;
}

export function xcCount(C, n, lang) {
  const f = C.ui.count;
  let s = f[0];
  if (f.length === 3) { const r = new Intl.PluralRules(lang).select(n); s = f[r === 'one' ? 0 : r === 'few' ? 1 : 2]; }
  return s.replace('{n}', n);
}

export function xcCardHTML(c, C, lang, i) {
  const L = C.ui.labels;
  return `<li class="xc-card" data-id="${c.id}" data-sector="${c.sector}" data-country="${c.country}" data-sit="${c.sit.join(' ')}" style="--k:${i}">
<article class="xc-in" aria-labelledby="xc-t${c.id}">
<h3 class="xc-t" id="xc-t${c.id}">${xcEsc(c.title)}</h3>
<div class="xc-row"><span class="xc-l">${xcEsc(L[0])}</span><p>${xcEsc(c.found)}</p></div>
<div class="xc-row xc-res"><span class="xc-l">${xcEsc(L[1])}</span><div class="xc-rv"><p>${xcEsc(c.result)}</p>${xcSpark(c.spark, C, lang)}</div></div>
<div class="xc-row xc-no"><span class="xc-l">${xcEsc(L[2])}</span><p>${xcEsc(c.nope)}</p></div>
<div class="xc-ft"><span class="xc-time"><span class="xc-l">${xcEsc(L[3])}</span> <span class="xc-tv">${xcEsc(c.time)}</span></span><button type="button" class="xc-open" aria-haspopup="dialog" aria-describedby="xc-t${c.id}">${xcEsc(C.ui.open)}</button></div>
</article></li>`;
}

export function xcFiltersHTML(C) {
  const g = C.ui.g, groups = [['sector', C.f.sector], ['country', C.f.country], ['sit', C.f.sit]];
  return groups.map(([k, list], n) => `<div class="xc-fg" role="group" aria-labelledby="xc-g${n}"><span class="xc-gl" id="xc-g${n}">${xcEsc(g[n])}</span><div class="xc-chips">${list.map(([v, l], j) => {
    const on = v === 'all';
    return `<button type="button" class="xc-chip${on ? ' on' : ''}" data-f="${k}" data-v="${v}" aria-pressed="${on}" tabindex="${on || (k === 'sit' && j === 0) ? 0 : -1}">${xcEsc(l)}</button>`;
  }).join('')}</div></div>`).join('');
}

export function xcWallHTML(C, lang) {
  return `<div class="xc-bar"><div class="xc-filters">${xcFiltersHTML(C)}</div>
<div class="xc-meta"><span class="xc-count" role="status">${xcEsc(xcCount(C, C.cards.length, lang))}</span><button type="button" class="xc-clear" hidden>${xcEsc(C.ui.clear)}</button></div></div>
<ul class="xc-grid">${C.cards.map((c, i) => xcCardHTML(c, C, lang, i)).join('')}</ul>
<div class="xc-empty" hidden><p>${xcEsc(C.ui.empty)}</p><button type="button" class="btn btn-p xc-ask"><span class="d"></span><span>${xcEsc(C.ui.emptyB)}</span></button></div>`;
}

// The full story. EN carries the case library's sections; RU and AR show the
// card's own lines under the story labels until their full stories are written.
export function xcStoryHTML(c, C, lang) {
  const S = C.ui.story, kick = C.ui.tip.split(':')[0];
  const block = (n, v) => `<div class="xm-g"><div class="xm-gl">${xcEsc(S[n])}</div>${Array.isArray(v) ? (v.length === 1 ? `<p>${v[0]}</p>` : `<ul>${v.map((x) => `<li>${x}</li>`).join('')}</ul>`) : `<p>${v}</p>`}</div>`;
  const sections = c.story ? c.story.s.map(([n, v]) => block(n, v)) : [[2, xcEsc(c.found)], [9, xcEsc(c.nope)]].map(([n, v]) => block(n, v));
  sections.push(block(11, xcEsc(c.time)));
  return `<header class="xm-hd"><div><span class="xm-k">${xcEsc(kick)}</span><h3 id="xc-mt">${xcEsc(c.title)}</h3>${c.story ? `<p class="xc-meta-l">${c.story.meta}</p>` : ''}</div>
<button type="button" class="xm-x" aria-label="${xcEsc(C.ui.close)}"></button></header>
<div class="xm-body" tabindex="0" role="region" aria-labelledby="xc-mt"><div class="xc-mtop"><div class="xc-mres"><span class="xc-l">${xcEsc(C.ui.labels[1])}</span><p>${xcEsc(c.result)}</p></div>${xcSpark(c.spark, C, lang, true)}</div>${sections.join('')}</div>
<footer class="xm-ft"><p>${xcEsc(C.ui.last[0])}</p><div class="xc-mbtns"><button type="button" class="btn btn-g xc-next">${xcEsc(C.ui.next)}</button><button type="button" class="btn btn-p xc-ask"><span class="d"></span><span>${xcEsc(C.ui.last[1])}</span></button></div></footer>`;
}
