// The BRAINS page body (/brains/, /en/brains/, /ar/brains/), built once per
// language by build.mjs. Everything a crawler needs is here as text: the
// story sections, the whole marketplace grid, the price bands and the FAQ.
// brains.js adds the constellation moment, the filters, the profile sheet,
// the consultation flow and "Let USHA match me".
import { brCardHTML, brFiltersHTML, brGlyph, brPl, brPrice, brBand } from './brains-ui.mjs';

const e = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// the four stages of a brain, drawn as one constellation growing
const MADE_SVG = [
  '<svg viewBox="0 0 120 80" aria-hidden="true"><path class="sig" d="M14 58c10-6 16-18 24-18s4 16 12 16 10-22 20-22 8 14 16 14 10-8 20-10"/><circle class="e" cx="106" cy="38" r="3.4"/></svg>',
  '<svg viewBox="0 0 120 80" aria-hidden="true"><g class="p"><circle cx="22" cy="24" r="2"/><circle cx="44" cy="54" r="2.4"/><circle cx="60" cy="20" r="1.8"/><circle cx="78" cy="48" r="2.2"/><circle cx="98" cy="26" r="1.8"/><circle cx="34" cy="36" r="1.6"/><circle cx="88" cy="62" r="1.8"/><circle cx="66" cy="36" r="1.6"/></g><circle class="e" cx="60" cy="20" r="3.2"/></svg>',
  '<svg viewBox="0 0 120 80" aria-hidden="true"><g class="l"><path d="M22 24L34 36 44 54 66 36 60 20M66 36L78 48 98 26M78 48L88 62"/></g><g class="p"><circle cx="22" cy="24" r="2"/><circle cx="44" cy="54" r="2.4"/><circle cx="78" cy="48" r="2.2"/><circle cx="98" cy="26" r="1.8"/><circle cx="34" cy="36" r="1.6"/><circle cx="88" cy="62" r="1.8"/><circle cx="66" cy="36" r="1.6"/></g><circle class="e" cx="60" cy="20" r="3.2"/><path class="ok" d="M100 56l5 5 9-11"/></svg>',
  '<svg viewBox="0 0 120 80" aria-hidden="true"><circle class="ring" cx="60" cy="40" r="34"/><g class="l"><path d="M38 30L46 40 52 54 68 42 64 30M68 42L76 50 88 34M76 50L82 58"/></g><g class="p"><circle cx="38" cy="30" r="1.8"/><circle cx="52" cy="54" r="2.2"/><circle cx="76" cy="50" r="2"/><circle cx="88" cy="34" r="1.6"/><circle cx="46" cy="40" r="1.5"/><circle cx="82" cy="58" r="1.6"/><circle cx="68" cy="42" r="1.5"/></g><circle class="e" cx="64" cy="30" r="3"/></svg>',
];

export function brPageHTML({ C, L, list, lang, me, ask }) {
  const H = C.hero, plural = (f, n) => brPl(f, n, lang);
  const fieldCount = (f) => list.filter((b) => b.fields.includes(f)).length;
  const sayBrain = (n) => list.find((b) => b.say === n);

  const hero = `<section class="br-hero" aria-labelledby="brH1"><div class="br-hin">
<div class="br-htx">
<p class="kick">${e(H.kick)}</p>
<h1 class="pd-h1" id="brH1">${H.h1}</h1>
<p class="pd-lead">${e(H.sub)}</p>
<div class="pd-row br-hcta"><a class="btn btn-p" href="#browse"><span class="d"></span>${e(H.cta1)}</a><button type="button" class="btn btn-g br-match-open">${e(H.cta2)}</button></div>
<ul class="br-trust"><li><span>${e(H.trust[0])}</span><button type="button" class="br-tipb" aria-expanded="false" aria-controls="brTip" aria-label="${e(H.trust[0])}">i</button><span class="br-tip" id="brTip" role="tooltip" hidden>${e(H.tip)}</span></li>${H.trust.slice(1).map((x) => `<li>${e(x)}</li>`).join('')}</ul>
</div>
<div class="br-stage">
<canvas class="br-cv" role="img" aria-label="${e(H.alt)}"></canvas>
<div class="br-host" aria-hidden="true">${me}</div>
<p class="br-bub" aria-hidden="true">${e(H.bubble)}</p>
<div class="br-lit"><span class="br-litk">${e(H.lit)}</span><button type="button" class="br-litb" aria-haspopup="dialog"><span class="br-litt">${e(list[0].t.title)}</span><span class="br-lits num">${e(plural(C.grid.years, list[0].years))} · ${e(L.home[list[0].home])}</span></button>
<span class="br-litc"><button type="button" class="br-pause" aria-pressed="false" aria-label="${e(H.pause)}"><i></i></button><button type="button" class="br-next" aria-label="${e(H.next)}"><i></i></button></span></div>
</div></div></section>`;

  const W = C.why;
  const why = `<section class="pd-sec br-why" id="why"><div class="pd-in">
<p class="kick">${e(W.kick)}</p><h2 class="pd-h2">${W.h}</h2><p class="pd-lead">${e(W.body)}</p>
<div class="br-vs">${W.pairs.map(([ctx, chat, brain], i) => {
    const b = sayBrain(i + 1);
    return `<article class="br-pair"><header><span class="br-ctx">${e(ctx)}</span><span class="pd-tag">${e(W.ex)}</span></header>
<div class="br-pa"><p class="br-who">${e(W.a)}</p><p class="br-chat">${e(chat)}</p></div>
<div class="br-pz"><p class="br-who">${b ? brGlyph(b.slug, 'br-gl br-gl-s') : ''}${e(W.b)}</p><p class="br-brain">${e(brain)}</p>${b ? `<button type="button" class="pd-link br-goto" data-slug="${b.slug}" aria-haspopup="dialog">${e(b.t.title)}</button>` : ''}</div></article>`;
  }).join('')}</div>
<ul class="br-pill">${W.pillars.map(([t, p]) => `<li><b>${e(t)}</b> ${e(p)}</li>`).join('')}</ul>
</div></section>`;

  const F = C.fields;
  const fields = `<section class="pd-sec br-fields" id="fields"><div class="pd-in br-fin">
<div><p class="kick">${e(F.kick)}</p><h2 class="pd-h2">${F.h}</h2><p class="pd-lead">${e(F.body)}</p>
<div class="br-flds">${Object.entries(L.fields).map(([k, v]) => { const n = fieldCount(k); return `<button type="button" class="pd-chip br-fld${n ? '' : ' zero'}" data-field="${k}">${e(v)}<span class="c num">${n}</span></button>`; }).join('')}</div></div>
<aside class="br-never"><h3>${e(F.neverT)}</h3><p>${e(F.neverB)}</p></aside>
</div></section>`;

  const M = C.made;
  const made = `<section class="pd-sec br-made" id="made"><div class="pd-in">
<p class="kick">${e(M.kick)}</p><h2 class="pd-h2">${M.h}</h2>
<ol class="br-steps">${M.steps.map(([t, p], i) => `<li style="--i:${i}"><div class="br-sv">${MADE_SVG[i]}</div><span class="br-sn">${e(M.step)} <span class="num">${i + 1}</span></span><h3>${e(t)}</h3><p>${e(p)}</p></li>`).join('')}</ol>
<p class="br-foot">${e(M.foot)}</p>
</div></section>`;

  const R = C.fair;
  const fair = `<section class="pd-sec br-fair" id="fair"><div class="pd-in">
<p class="kick">${e(R.kick)}</p><h2 class="pd-h2">${R.h}</h2>
<div class="br-fc"><div class="br-fcard"><h3>${e(R.a)}</h3><ul>${R.aList.map((x) => `<li>${e(x)}</li>`).join('')}</ul></div><div class="br-fcard br-fcard-b"><h3>${e(R.b)}</h3><ul>${R.bList.map((x) => `<li>${e(x)}</li>`).join('')}</ul></div></div>
</div></section>`;

  const B = C.browse, G = C.grid;
  const browse = `<section class="pd-sec br-browse" id="browse" aria-labelledby="brBrowseH"><div class="pd-in">
<p class="kick">${e(B.kick)}</p><h2 class="pd-h2" id="brBrowseH">${B.h}</h2><p class="pd-lead">${e(B.body)}</p>
<div class="br-app">
<aside class="br-fp" id="brFilters" aria-label="${e(G.filters)}">
<div class="br-fph"><h3>${e(G.filters)}</h3><button type="button" class="pd-x br-fpx" aria-label="${e(G.close)}"></button></div>
<div class="br-fpb">${brFiltersHTML(C, L, null, {})}</div>
<div class="br-fpf"><button type="button" class="btn btn-g btn-s br-clear">${e(G.clear)}</button><button type="button" class="btn btn-p btn-s br-showr">${e(plural(G.show, list.length))}</button></div>
</aside>
<div class="br-main">
<div class="br-bar">
<button type="button" class="btn btn-g btn-s br-fbtn" aria-controls="brFilters" aria-expanded="false">${e(G.filters)} <span class="num br-fbn"></span></button>
<p class="br-count" role="status">${e(plural(G.count, list.length))}</p>
<label class="br-sort"><span>${e(G.sort)}</span><select class="pd-i">${G.sorts.map(([v, l]) => `<option value="${v}">${e(l)}</option>`).join('')}</select></label>
<button type="button" class="btn btn-g btn-s br-match-open br-matchb"><span class="d"></span>${e(H.cta2)}</button>
</div>
<div class="br-active" aria-label="${e(G.filters)}"></div>
<ul class="br-grid">${list.map((b, i) => brCardHTML(b, C, L, lang, i)).join('')}</ul>
<div class="br-more" hidden><button type="button" class="btn btn-g br-moreb">${e(G.more)}</button></div>
<div class="br-empty" hidden><p>${G.empty}</p><p class="br-hint"></p><div class="pd-row"><button type="button" class="btn btn-g btn-s br-clear">${e(G.emptyClear)}</button><button type="button" class="btn btn-p btn-s br-match-open"><span class="d"></span>${e(H.cta2)}</button></div></div>
</div></div>
</div></section>`;

  // pricing: a log rail from $75 to $3,000, one dot per brain, the five bands on it
  const PR = C.pricing;
  const lo = Math.log(75), span = Math.log(3000) - lo, X = (p) => ((Math.log(p) - lo) / span) * 100;
  const stack = {};
  const dots = list.map((b) => { const k = b.price; stack[k] = (stack[k] || 0) + 1; return `<circle class="rd rd-${brBand(b.price, L).id}" cx="${X(b.price).toFixed(2)}%" cy="${62 - (stack[k] - 1) * 12}" r="5"><title>${e(b.t.title)} · ${e(brPrice(b.price, lang))}</title></circle>`; }).join('');
  const segs = L.bands.map((x) => `<rect class="rs rs-${x.id}" x="${X(x.min).toFixed(2)}%" y="72" width="${(X(Math.min(x.max + 1, 3000)) - X(x.min)).toFixed(2)}%" height="4" rx="2"/>`).join('');
  const ticks = [75, 250, 600, 1200, 2000, 3000].map((p) => `<text x="${X(p).toFixed(2)}%" y="100" text-anchor="${p === 75 ? 'start' : p === 3000 ? 'end' : 'middle'}">${e(brPrice(p, lang))}</text>`).join('');
  const pricing = `<section class="pd-sec br-pricing" id="pricing"><div class="pd-in">
<p class="kick">${e(PR.kick)}</p><h2 class="pd-h2">${PR.h}</h2><p class="pd-lead">${e(PR.body)}</p>
<figure class="br-rail" dir="ltr"><svg class="br-railsv" width="100%" height="108" role="img" aria-label="${e(PR.rail)}">${segs}${dots}${ticks}</svg><figcaption dir="auto">${e(PR.rail)}</figcaption></figure>
<ul class="br-bands">${L.bands.map((x) => { const n = list.filter((b) => brBand(b.price, L).id === x.id).length; return `<li class="br-band" data-band="${x.id}" tabindex="0"><span class="br-bn">${e(x.n)}</span><span class="br-br num">${e(x.range)}</span><p>${e(x.line)}</p><button type="button" class="pd-link br-bandgo" data-band="${x.id}">${e(plural(PR.brains, n))}</button></li>`; }).join('')}</ul>
<ul class="br-pf">${PR.factors.map(([t, p], i) => `<li><span class="num">${i + 1}</span><b>${e(t)}</b><p>${e(p)}</p></li>`).join('')}</ul>
</div></section>`;

  const Q = C.faq;
  const faq = `<section class="pd-sec br-faq" id="faq"><div class="pd-in">
<p class="kick">${e(Q.kick)}</p><h2 class="pd-h2">${Q.h}</h2>
<div class="pd-faq">${Q.list.map(([q, a]) => `<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</div>
</div></section>`;

  const Fi = C.final;
  const end = `<section class="pd-sec pd-end br-end"><div class="pd-in"><div class="pg-me" aria-hidden="true">${me}</div>
<h2 class="pd-h2">${Fi.h}</h2><p class="pd-lead">${e(Fi.sub)}</p>
<div class="pd-row"><a class="btn btn-p" href="#browse"><span class="d"></span>${e(Fi.cta1)}</a><button type="button" class="btn btn-g br-match-open">${e(Fi.cta2)}</button></div>
</div></section>`;

  return hero + why + fields + made + fair + browse + pricing + faq + end;
}
