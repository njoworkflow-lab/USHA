// Cases page markup (/cases/, /en/cases/, /ar/cases/). Pure functions over one
// language's data from cases-v2.mjs: the build pre-renders the library with them
// (crawlers, no-JS), and also inlines this file (without "export") into the
// page's script, where cases.js runs the filters and the full-story dialog.
// The case strings are already HTML-safe (escaped, with <b> for the money lines).

const xcEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function xcCount(C, n, lang) {
  const f = C.ui.count;
  let s = f[0];
  if (f.length === 3) { const r = new Intl.PluralRules(lang).select(n); s = f[r === 'one' ? 0 : r === 'few' ? 1 : 2]; }
  return s.replace('{n}', n);
}

export function xcCardHTML(c, C, lang, i) {
  return `<li class="xc-card" data-id="${c.id}" data-sector="${c.sector}" data-country="${c.country}" style="--k:${i}">
<article class="xc-in" aria-labelledby="xc-t${c.id}">
<div class="xc-top"><span class="xc-code">${xcEsc(c.code)}</span><span class="xc-ex">${xcEsc(C.ui.ex)}</span></div>
<h3 class="xc-t" id="xc-t${c.id}">${xcEsc(c.title)}</h3>
<p class="xc-mt">${xcEsc(c.meta.split(' · ').slice(0, -1).join(' · '))}</p>
<div class="xc-row xc-res"><span class="xc-l">${xcEsc(C.ui.result)}</span><p>${c.result}</p></div>
<div class="xc-ft"><span class="xc-time">${xcEsc(c.time)}</span><button type="button" class="xc-open" aria-haspopup="dialog" aria-describedby="xc-t${c.id}">${xcEsc(C.ui.open)}</button></div>
</article></li>`;
}

export function xcFiltersHTML(C) {
  const groups = [['sector', C.f.sector], ['country', C.f.country]];
  return groups.map(([k, list], n) => `<div class="xc-fg" role="group" aria-labelledby="xc-g${n}"><span class="xc-gl" id="xc-g${n}">${xcEsc(C.ui.g[n])}</span><div class="xc-chips">${list.map(([v, l]) => {
    const on = v === 'all';
    return `<button type="button" class="xc-chip${on ? ' on' : ''}" data-f="${k}" data-v="${v}" aria-pressed="${on}" tabindex="${on ? 0 : -1}">${xcEsc(l)}</button>`;
  }).join('')}</div></div>`).join('');
}

export function xcWallHTML(C, lang) {
  return `<div class="xc-bar"><div class="xc-filters">${xcFiltersHTML(C)}</div>
<div class="xc-meta"><span class="xc-count" role="status">${xcEsc(xcCount(C, C.cards.length, lang))}</span><button type="button" class="xc-clear" hidden>${xcEsc(C.ui.clear)}</button></div></div>
<ul class="xc-grid">${C.cards.map((c, i) => xcCardHTML(c, C, lang, i)).join('')}</ul>
<div class="xc-empty" hidden><p>${xcEsc(C.ui.empty)}</p><a class="btn btn-p xc-ask" href="#"><span class="d"></span><span>${xcEsc(C.ui.emptyB)}</span></a></div>`;
}

// The full story: every field of the case library, in its order.
export function xcStoryHTML(c, C) {
  const S = C.ui.story;
  const body = (v) => typeof v === 'string' ? `<p>${v}</p>` : Array.isArray(v) ? `<ul>${v.map((x) => `<li>${x}</li>`).join('')}</ul>` : `<p>${v.p}</p><ul>${v.li.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  return `<header class="xm-hd"><div><span class="xm-k">${xcEsc(c.code)} · ${xcEsc(C.ui.ex)}</span><h3 id="xc-mt">${xcEsc(c.title)}</h3><p class="xc-meta-l">${xcEsc(c.meta)}</p></div>
<button type="button" class="xm-x" aria-label="${xcEsc(C.ui.close)}"></button></header>
<div class="xm-body" tabindex="0" role="region" aria-labelledby="xc-mt"><div class="xc-mtop"><div class="xc-mres"><span class="xc-l">${xcEsc(C.ui.result)}</span><p>${c.result}</p></div></div>${c.story.map(([n, v]) => `<div class="xm-g"><div class="xm-gl">${xcEsc(S[n])}</div>${body(v)}</div>`).join('')}</div>
<footer class="xm-ft"><p>${xcEsc(C.ui.last[0])}</p><div class="xc-mbtns"><button type="button" class="btn btn-g xc-next">${xcEsc(C.ui.next)}</button><a class="btn btn-p xc-ask" href="#"><span class="d"></span><span>${xcEsc(C.ui.last[1])}</span></a></div></footer>`;
}
