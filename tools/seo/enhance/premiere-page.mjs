// The PREMIERE page body (/premiere/, /en/premiere/, /ar/premiere/), built
// once per language by build.mjs. Everything a crawler needs is here as text:
// the opening, the value, the four acts (their shells), the whole example
// report, the expert panels, the plans table and the FAQ. premiere.js adds
// the screening room, the demo, the audience builder, the replay and the
// reserve funnel. Copy: premiere-copy.mjs.
import { PR_PLANS, PR_CURVE, PR_CURVE2, PR_QUOTES } from './premiere-copy.mjs';

const e = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function prMoney(p, lang) {
  const s = Number.isInteger(p) ? p.toLocaleString('en-US') : p.toFixed(2);
  if (lang === 'en') return '$' + s;
  if (lang === 'ru') return s.replace(/,/g, ' ').replace('.', ',') + ' $';
  return s + ' $';
}
const dec = (v, lang) => (lang === 'ru' ? String(v).replace('.', ',') : String(v));

// ---------- the watch curve (seconds run left to right on every page) ----------
const CX = (s) => 44 + (s / 38) * 696, CY = (p) => 18 + ((100 - p) / 100) * 196;
const path = (pts) => pts.map(([s, p], i) => `${i ? 'L' : 'M'}${CX(s).toFixed(1)} ${CY(p).toFixed(1)}`).join('');
export function prCurveSVG(R, cls = '', withEdited = true) {
  const grid = [25, 50, 75, 100].map((p) => `<line x1="44" x2="740" y1="${CY(p)}" y2="${CY(p)}"/><text x="36" y="${CY(p) + 4}" text-anchor="end">${p}%</text>`).join('');
  const ticks = [0, 3, 10, 16, 20, 30, 38].map((s) => `<text x="${CX(s)}" y="236" text-anchor="middle">0:${String(s).padStart(2, '0')}</text>`).join('');
  const drops = [[0, 3, 1], [13, 16, 2], [30, 31, 3]].map(([a, b, n]) => `<g class="pm-dz"><rect x="${CX(a)}" y="18" width="${Math.max(6, CX(b) - CX(a))}" height="196"/><text x="${(CX(a) + CX(b)) / 2}" y="12" text-anchor="middle">${n}</text></g>`).join('');
  return `<svg class="pm-curve ${cls}" viewBox="0 0 760 244" role="img" aria-label="${e(R.k.curve)}: ${e(R.k.original)} 100% → 33%${withEdited ? `; ${e(R.k.edited)} 100% → 45%` : ''}"><g class="pm-cg">${grid}</g>${drops}${withEdited ? `<path class="pm-c2" d="${path(PR_CURVE2)}"/>` : ''}<path class="pm-c1" d="${path(PR_CURVE)}" pathLength="1"/><circle class="pm-cdot" r="4" cx="${CX(0)}" cy="${CY(100)}"/><g class="pm-ct">${ticks}</g></svg>`;
}

// ---------- the plans table ----------
function planCell(k, p, C, lang) {
  const V = C.plans.v;
  switch (k) {
    case 'price': return prMoney(p.price, lang);
    case 'perTest': return prMoney(p.perTest, lang);
    case 'per100': return prMoney(p.per100, lang);
    case 'videos': case 'scripts': case 'ideas': return p.videos;
    case 'length': return `${p.length[0]} ${V[p.length[1]]}`;
    case 'report': return p.report.map((r) => V[r]).join(' + ');
    case 'saved': return p.saved || V.unlimited;
    case 'copyReal': return V.yes;
    case 'calibrate': return p.calibrate ? V.yes : V.no;
    case 'lensCd': return p.lens >= 1 ? V.yes : V.no;
    case 'lensPeers': return p.lens >= 2 ? V.yes : V.no;
    case 'lensPr': return p.lens >= 3 ? V.yes : V.no;
    case 'real': return p.first ? V.addonFirst : V.addon;
    case 'support': return V.wa + (p.support ? `, ${V[p.support]}` : '');
    default: return p[k];
  }
}
const ROWS = ['seats', 'videos', 'scripts', 'ideas', 'total', 'per100', 'length', 'hooks', 'segments', 'retests', 'report', 'saved', 'copyReal', 'calibrate', 'lensCd', 'lensPeers', 'lensPr', 'real', 'support'];

export function prPageHTML({ C, lang, me, ask }) {
  const H = C.hero, A = C.acts, R = C.report, P = C.plans, X = C.experts;
  const sub = e(H.sub).replace('{sim}', `<button type="button" class="pm-simw" aria-expanded="false" aria-controls="pmTip">${e(H.simWord)}</button>`);
  const hero = `<section class="pm-hero" aria-labelledby="pmH1">
<div class="pm-screen" aria-hidden="true"></div>
<canvas class="pm-room pm-room-hero" role="img" aria-label="${e(H.alt)}"></canvas>
<div class="pm-hin">
<p class="kick pm-eye">${e(H.eyebrow)}</p>
<h1 class="pd-h1" id="pmH1">${H.h1}</h1>
<p class="pd-lead">${sub}</p><p class="pm-tip" id="pmTip" role="tooltip" hidden>${e(H.tip)}</p>
<div class="pd-row pm-hcta"><button type="button" class="btn btn-p pm-reserve-open"><span class="d"></span>${e(H.cta1)}</button><a class="btn btn-g" href="#report">${e(H.cta2)}</a></div>
<p class="pm-trust">${e(H.trust)}</p><p class="pm-price">${e(H.price)}</p>
</div>
<div class="pm-host" aria-hidden="true">${me}<p class="pm-bub">${e(H.bubble)}</p></div>
<p class="pm-lit" aria-hidden="true"><b class="num">500</b> ${e(H.seats)}</p>
</section>`;

  const V = C.value;
  const value = `<section class="pd-sec pm-value"><div class="pd-in">
<h2 class="pd-h2">${e(V.h)}</h2>
<ol class="pm-stakes">${V.cards.map(([t, p], i) => `<li><span class="pm-stk">${['01', '02', '03'][i]}</span><h3>${e(t)}</h3><p>${e(p)}</p></li>`).join('')}</ol>
<ul class="pm-strip">${V.strip.map((x) => `<li>${e(x)}</li>`).join('')}</ul>
<p class="pm-line">${e(V.line)}</p>
</div></section>`;

  // the four acts: shells pre-rendered, premiere.js plays them
  const film = Array.from({ length: 38 }, (_, i) => `<i style="--i:${i}"><span class="num">0:${String(i).padStart(2, '0')}</span></i>`).join('');
  const act1 = `<div class="pm-act" data-act="0" role="tabpanel" aria-labelledby="pmTab0">
<div class="pm-doors" role="tablist" aria-label="${e(A.list[0][0])}">${A.tabs.map((t, i) => `<button type="button" role="tab" class="pm-door" id="pmDoor${i}" aria-selected="${i === 0}" aria-controls="pmDoorP" data-door="${i}" tabindex="${i ? -1 : 0}">${e(t)}</button>`).join('')}</div>
<div class="pm-doorp" id="pmDoorP" role="tabpanel">
<p class="pm-cost">${e(A.cost.replace('{n}', '4').replace('{type}', A.costType[0]))}</p>
<div class="pm-cut pm-cut-v"><div class="pm-film" aria-hidden="true">${film}</div><div class="pm-wave" aria-hidden="true"></div>
<p class="pm-cutt">${e(A.cutTitle)}</p><p class="pm-cutm">${e(A.cutMeta)}</p></div>
<div class="pm-cut pm-cut-s" hidden><ol class="pm-beats">${A.scriptBeats.map((b) => `<li>${e(b)}</li>`).join('')}</ol></div>
<div class="pm-cut pm-cut-i" hidden><div class="pm-poster"><p class="pm-cutt">${e(A.cutTitle)}</p><p class="pm-cutm">${e(A.ideaPoster)}</p></div></div>
<p class="pm-drop">${e(A.drop)}</p>
<div class="pd-row"><button type="button" class="btn btn-g btn-s pm-load">${e(A.load)}</button><p class="pm-status" role="status"></p></div>
<div class="pd-f"><label class="pd-l" for="pmQ">${e(A.question)}</label><input class="pd-i" id="pmQ" value="${e(A.questionDemo)}" placeholder="${e(A.questionPh)}" maxlength="200"></div>
</div>
<div class="pm-actf"><button type="button" class="btn btn-p pm-to1"><span class="d"></span>${e(A.toRoom)}</button></div>
</div>`;
  const B = C.builder;
  const act2 = `<div class="pm-act" data-act="1" role="tabpanel" aria-labelledby="pmTab1" hidden>
<div class="pm-bhead"><h3 class="pm-bh">${e(B.h)}</h3><p class="pm-bsub">${e(B.sub)}</p></div>
<div class="pm-builder"></div>
<p class="pm-bnote">${e(B.note)}</p>
</div>`;
  const L = C.lights;
  const act3 = `<div class="pm-act" data-act="2" role="tabpanel" aria-labelledby="pmTab2" hidden>
<div class="pm-lights">
<div class="pm-lcurve" dir="ltr">${prCurveSVG(R, 'pm-live', false)}</div>
<div class="pm-lroom"><canvas class="pm-room pm-room-live" aria-hidden="true"></canvas><div class="pm-bubbles" aria-hidden="true"></div></div>
<dl class="pm-meters">${[['watching', L.watching], ['held', L.held], ['sent', L.sent], ['follow', L.follow]].map(([k, l]) => `<div data-m="${k}"><dt>${e(l)}</dt><dd class="num">0%</dd><span class="pm-mbar"><i></i></span></div>`).join('')}</dl>
<ol class="pm-ticker" aria-live="off"></ol>
<div class="pm-lctl"><button type="button" class="btn btn-g btn-s pm-lpause">${e(L.pause)}</button><button type="button" class="btn btn-g btn-s pm-lspeed" aria-pressed="false">${e(L.speed)}</button><span class="pm-clock num" aria-hidden="true">0:00</span><button type="button" class="btn btn-g btn-s pm-lskip">${e(L.skip)}</button></div>
</div></div>`;
  const Vd = C.verdict;
  const act4 = `<div class="pm-act" data-act="3" role="tabpanel" aria-labelledby="pmTab3" hidden>
<div class="pm-verdict"><div class="pm-stamp pm-stamp-fix" aria-hidden="true"><span>${e(Vd.stamp.fix)}</span><b class="num">${dec(6.5, lang)}</b></div>
<div class="pm-vtx"><p class="pm-vl"><span class="sr">${e(R.k.verdict)}: ${e(Vd.stamp.fix)}, ${dec(6.5, lang)} / 10. </span>${e(Vd.line.fix)}</p>
<dl class="pm-qa">${R.qa.map(([q, a]) => `<div><dt>${e(q)}</dt><dd>${e(a)}</dd></div>`).join('')}</dl>
<ol class="pm-top3">${R.edits.slice(0, 3).map(([w, t]) => `<li><span class="num">${e(w)}</span>${e(t)}</li>`).join('')}</ol>
<details class="pm-how"><summary>${e(Vd.how)}</summary><p>${e(Vd.howBody)}</p></details>
<div class="pd-row"><a class="btn btn-p pm-openrep" href="#report"><span class="d"></span>${e(Vd.open)}</a><button type="button" class="btn btn-g pm-retest">${e(Vd.retest)}</button><button type="button" class="btn btn-g pm-reserve-open">${e(H.cta1)}</button></div>
<p class="pm-retestn" role="status" hidden>${e(Vd.retestNote)} ${e(R.badge)}</p></div></div>
</div>`;
  const acts = `<section class="pd-sec pm-acts" id="demo" aria-labelledby="pmActsH"><div class="pd-in">
<p class="kick">${e(A.kick)}</p><h2 class="pd-h2" id="pmActsH">${A.h}</h2>
<div class="pm-actbar"><p class="pm-demo">${e(A.label)}</p><div class="pd-row"><button type="button" class="btn btn-g btn-s pm-play">${e(A.play)}</button><button type="button" class="btn btn-g btn-s pm-skip">${e(A.skip)}</button></div></div>
<ol class="pm-actnav">${A.list.map(([t, p], i) => `<li><button type="button" class="pm-tab" id="pmTab${i}" data-act="${i}" aria-current="${i === 0 ? 'step' : 'false'}"><span class="pm-an num">${e(A.act)} ${i + 1}</span><b>${e(t)}</b><span class="pm-ad">${e(p)}</span></button></li>`).join('')}</ol>
<div class="pm-stage">${act1}${act2}${act3}${act4}</div>
</div></section>`;

  // ---------- the example report ----------
  const K = R.k, tag = (plans) => `<span class="pm-inc">${e(K.plans.replace('{plans}', plans))}</span>`;
  const bar = (v, max = 10) => `<span class="pm-bar" style="--v:${(v / max * 100).toFixed(1)}%"><i></i></span>`;
  const quotes = PR_QUOTES.map(([id, seg, sec, orig, tr, who]) => {
    const t = tr[lang] || null;
    return `<li class="pm-q pm-q-${seg}"><figure><blockquote dir="auto"><p class="pm-qo">${e(orig)}</p>${t ? `<p class="pm-qt" hidden>${e(t)}</p>` : ''}</blockquote><figcaption><span class="pm-qid num">${id}</span> ${e(who[lang])} · <span class="num">${sec} / 38 s</span></figcaption></figure>${t ? `<button type="button" class="pm-qtr" aria-expanded="false">${e(C.lights.translate)}</button>` : ''}</li>`;
  }).join('');
  const rpTop = `<div class="pm-rcard pm-rhead"><dl>${R.head.map(([k, v]) => `<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl></div>
<div class="pm-rcard pm-rverdict"><h3>${e(K.verdict)}</h3><div class="pm-rv"><div class="pm-stamp pm-stamp-fix pm-stamp-s"><span>${e(C.verdict.stamp.fix)}</span><b class="num">${dec(6.5, lang)}</b></div><div class="pm-rarrow" aria-hidden="true"></div><div class="pm-stamp pm-stamp-post pm-stamp-s"><span>${e(C.verdict.stamp.post)}</span><b class="num">${dec(7.6, lang)}</b></div></div><p>${e(R.verdictText)}</p>
<h4>${e(K.question)}</h4><dl class="pm-qa">${R.qa.map(([q, a]) => `<div><dt>${e(q)}</dt><dd>${e(a)}</dd></div>`).join('')}</dl></div>
<div class="pm-rgrid">
<div class="pm-rcard"><h3>${e(K.scorecard)} ${tag(R.planCore)}</h3><ul class="pm-score">${R.dims.map(([n, v, w]) => `<li><span class="pm-sn">${e(n)}</span><b class="num">${dec(v.toFixed(1), lang)}</b>${bar(v)}<small>${e(w)}</small></li>`).join('')}<li class="pm-sov"><span class="pm-sn">${e(K.overall)}</span><b class="num">${dec(6.5, lang)}</b>${bar(6.5)}<small>${e(R.overallNote)}</small></li></ul></div>
<div class="pm-rcard"><h3>${e(K.behaviour)}</h3><ul class="pm-beh">${R.beh.map(([n, v, s]) => `<li><b class="num">${e(dec(v, lang))}</b><span>${e(n)}</span><small class="num">${e(s)}</small></li>`).join('')}</ul><p class="pm-note">${e(R.behNote)}</p></div>
</div>
<div class="pm-rcard"><h3>${e(K.curve)} ${tag(R.planCore)}</h3><div class="pm-legend"><span class="pm-lg1">${e(K.original)}</span><span class="pm-lg2">${e(K.edited)}</span></div><div dir="ltr">${prCurveSVG(R)}</div>
<ol class="pm-drops">${R.drops.map(([h, what, who, fix], i) => `<li><h4><span class="num">${i + 1}</span>${e(K.drop)} · ${e(h)}</h4><dl><div><dt>${e(R.dropK[0])}</dt><dd>${e(what)}</dd></div>${who ? `<div><dt>${e(R.dropK[1])}</dt><dd>${e(who)}</dd></div>` : ''}<div><dt>${e(R.dropK[2])}</dt><dd class="pm-fix">${e(fix)}</dd></div></dl></li>`).join('')}</ol></div>`;
  const rpMore = `<div class="pm-rcard"><h3>${e(K.hooks)} ${tag(R.planFull)}</h3><ul class="pm-hooks">${R.hooks.map(([n, w, v, best, worst]) => `<li class="${v === 77 ? 'win' : ''}"><div class="pm-hk"><b>${e(n)}</b>${v === 77 ? `<span class="pd-tag">${e(K.winner)}</span>` : ''}<p>${e(w)}</p></div><div class="pm-hv"><span class="num">${v}%</span>${bar(v, 100)}<small>${e(R.hookK[2])}: ${e(best)} · ${e(R.hookK[3])}: ${e(worst)}</small></div></li>`).join('')}</ul><p class="pm-note">${e(R.hookLine)}</p></div>
<div class="pm-rcard"><h3>${e(K.segments)} ${tag(R.planFull)}</h3><div class="pm-tw"><table class="pm-seg"><thead><tr>${R.segK.map((k) => `<th scope="col">${e(k)}</th>`).join('')}</tr></thead><tbody>${R.segs.map(([n, c, a, b, s, sc, line]) => `<tr><th scope="row">${e(n)}<small>${e(line)}</small></th><td class="num">${c}</td><td class="num">${a}</td><td class="num">${b}</td><td class="num">${s}</td><td class="num">${dec(sc, lang)}</td></tr>`).join('')}<tr class="pm-segall"><th scope="row">${e(R.segAll)}</th><td class="num">500</td><td class="num">63%</td><td class="num">33%</td><td class="num">18%</td><td class="num">${dec(6.5, lang)}</td></tr></tbody></table></div>
<h4>${e(K.know)}</h4><ul class="pm-know">${R.know.map(([n, v]) => `<li><span>${e(n)}</span><b class="num">${v}%</b>${bar(v, 100)}</li>`).join('')}</ul></div>
<div class="pm-rcard"><h3>${e(K.words)}</h3><p class="pm-note">${e(R.wordsNote)}</p><ul class="pm-quotes">${quotes}</ul></div>
<div class="pm-rgrid">
<div class="pm-rcard"><h3>${e(K.comments)}</h3><ol class="pm-comments">${R.comments.map(([c, t, why]) => `<li><p class="pm-cm" dir="auto">${e(c)}</p>${t ? `<p class="pm-cmt">${e(t)}</p>` : ''}<small>${e(why)}</small></li>`).join('')}</ol></div>
<div class="pm-rcard"><h3>${e(K.risk)}</h3><ul class="pm-risks">${R.risks.map(([lv, at, t]) => `<li class="pm-rk-${lv}"><span class="pm-rkl">${e(R.levels[lv])}${at ? ` · <span class="num">${at}</span>` : ''}</span><p>${e(t)}</p></li>`).join('')}</ul></div>
</div>
<div class="pm-rcard"><h3>${e(K.lenses)}</h3><ul class="pm-lenses">${R.lenses.map(([n, plans, meta, body]) => `<li><div class="pm-lh"><b>${e(n)}</b><span class="pd-tag pm-sim">${e(K.simulated)}</span></div><p class="pm-lm">${e(meta)}</p><p>${e(body)}</p>${tag(plans)}</li>`).join('')}</ul><p class="pm-note">${e(R.noReal)}</p></div>
<div class="pm-rcard"><h3>${e(K.edits)}</h3><ol class="pm-edits">${R.edits.map(([w, t, fx]) => `<li><span class="pm-ew num">${e(w)}</span><p>${e(t)}</p><small>${e(fx)}</small></li>`).join('')}</ol></div>
<div class="pm-rgrid">
<div class="pm-rcard"><h3>${e(K.retest)} ${tag(R.planFull)}</h3><div class="pm-tw"><table class="pm-re"><thead><tr>${R.reK.map((k) => `<th scope="col">${e(k)}</th>`).join('')}</tr></thead><tbody>${R.re.map(([n, a, b, c]) => `<tr><th scope="row">${e(n)}</th><td class="num">${e(dec(a, lang))}</td><td class="num">${e(dec(b, lang))}</td><td class="num pm-up">${e(dec(c, lang))}</td></tr>`).join('')}</tbody></table></div><p class="pm-note">${e(R.badge)}</p></div>
<div class="pm-rcard"><h3>${e(K.after)}</h3><ul class="pm-after">${R.after.map(([w, t]) => `<li><span class="num">${e(w)}</span><p>${e(t)}</p></li>`).join('')}</ul><p class="pm-note">${e(R.calibrate)}</p></div>
</div>
<div class="pm-rcard pm-method"><h3>${e(K.method)}</h3><p>${e(R.method)}</p></div>`;
  const report = `<section class="pd-sec pm-report" id="report" aria-labelledby="pmRepH"><div class="pd-in">
<p class="kick">${e(R.kick)}</p><h2 class="pd-h2" id="pmRepH">${R.h}</h2>
<p class="pm-label"><span class="pd-tag">${e(K.example)}</span>${e(R.label)}</p><p class="pm-plantag">${e(R.planTag)}</p>
<article class="pm-doc" aria-label="${e(K.example)}">${rpTop}
<div class="pm-rmore" id="pmMore">${rpMore}</div>
<div class="pm-rmorebar"><button type="button" class="btn btn-g pm-moreb" aria-expanded="false" aria-controls="pmMore" data-open="${e(R.open)}" data-close="${e(R.close)}">${e(R.open)}</button></div>
</article></div></section>`;

  const experts = `<section class="pd-sec pm-experts" id="experts"><div class="pd-in">
<p class="kick">${e(X.kick)}</p><h2 class="pd-h2">${X.h}</h2>
<ul class="pm-xc">${X.cards.map(([t, p], i) => `<li><span class="pd-tag pm-sim">${e(X.sim)}</span><h3>${e(t)}</h3><p>${e(p)}</p><small>${e(C.report.k.plans.replace('{plans}', ['Cinema, Theatre, Arena', 'Theatre, Arena', 'Arena'][i]))}</small></li>`).join('')}</ul>
<p class="pm-two">${X.two}</p>
<div class="pm-realp"><h3>${e(X.realT)}</h3><ul class="pm-panels">${X.panels.map(([t, n, p]) => `<li><span class="pd-tag pm-realt">${e(X.realBadge.replace('{n}', n))}</span><p>${e(t)}</p><b class="num">${e(prMoney(p, lang))} <small>${e(X.perPanel)}</small></b></li>`).join('')}</ul>
<p class="pm-note">${e(X.honesty)} ${e(X.privacy)}</p><p class="pm-note">${e(X.lensAdd)}</p></div>
</div></section>`;

  const plans = `<section class="pd-sec pm-plans" id="plans"><div class="pd-in">
<p class="kick">${e(P.kick)}</p><h2 class="pd-h2">${P.h}</h2><p class="pd-lead">${e(P.sub)}</p>
<div class="pm-ptools"><div class="pm-seg2" role="group" aria-label="${e(P.rows.price)}">${P.toggle.map((t, i) => `<button type="button" class="pm-tg" data-mode="${i ? 'test' : 'month'}" aria-pressed="${!i}">${e(t)}</button>`).join('')}</div>
<div class="pm-pick" role="group" aria-label="${e(P.choose)}">${PR_PLANS.map((p, i) => `<button type="button" class="pm-pk" data-col="${i}" aria-pressed="${i === 2}">${p.id}</button>`).join('')}</div></div>
<div class="pm-tablew"><table class="pm-table" data-col="2" data-mode="month"><thead><tr><td></td>${PR_PLANS.map((p, i) => `<th scope="col" class="${p.rec ? 'rec' : ''}"><span class="pm-pn">${p.id}</span>${p.rec ? `<span class="pm-recb">${e(P.rec)}</span>` : ''}<span class="pm-ptag">${e(P.taglines[i])}</span><span class="pm-pp num"><span class="pm-m">${e(P.perMonth.replace('{p}', prMoney(p.price, lang)))}</span><span class="pm-t">${e(P.perTestShort.replace('{p}', prMoney(p.perTest, lang)))}</span></span><button type="button" class="btn ${p.rec ? 'btn-p' : 'btn-g'} btn-s pm-reserve-open" data-plan="${i}">${p.rec ? '<span class="d"></span>' : ''}${e(P.cta)}</button></th>`).join('')}</tr></thead>
<tbody><tr class="pm-rprice"><th scope="row">${e(P.rows.price)}</th>${PR_PLANS.map((p) => `<td class="num">${e(prMoney(p.price, lang))}</td>`).join('')}</tr><tr class="pm-rpt"><th scope="row">${e(P.rows.perTest)}</th>${PR_PLANS.map((p) => `<td class="num">${e(prMoney(p.perTest, lang))}</td>`).join('')}</tr>
${ROWS.map((k) => `<tr><th scope="row">${e(P.rows[k])}</th>${PR_PLANS.map((p) => { const v = planCell(k, p, C, lang); return `<td class="${v === C.plans.v.no ? 'no' : ''}">${e(v)}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>
<p class="pm-under">${e(P.under)}</p>
</div></section>`;

  const U = C.usha;
  const usha = `<section class="pd-sec pm-usha"><div class="pd-in pm-uin">
<div class="pm-ume" aria-hidden="true">${me}</div>
<div><p class="kick">${e(U.kick)}</p><h2 class="pd-h2">${U.h}</h2><p class="pd-lead">${e(U.b1)}</p><p class="pd-lead">${e(U.b2)}</p>
<dl class="pm-stats">${U.stats.map(([n, l]) => `<div><dt class="num">${e(n)}</dt><dd>${e(l)}</dd></div>`).join('')}</dl>
<a class="pd-link" href="${e(ask)}">${e(U.link)}</a></div>
</div></section>`;

  const Rl = C.real;
  const real = `<section class="pd-sec pm-real"><div class="pd-in">
<p class="kick">${e(Rl.kick)}</p><h2 class="pd-h2">${Rl.h}</h2>
<div class="pm-rc"><div class="pm-rca"><span class="pd-tag pm-sim">${e(X.sim)}</span><h3>${e(Rl.a)}</h3><p>${e(Rl.aBody)}</p><p class="pm-good">${e(Rl.aGood)}</p><p class="pm-not">${e(Rl.aNot)}</p></div>
<div class="pm-rcb"><span class="pd-tag pm-realt">${e(X.real)}</span><h3>${e(Rl.b)}</h3><p>${e(Rl.bBody)}</p></div></div>
</div></section>`;

  const F = C.faq;
  const faq = `<section class="pd-sec pm-faq" id="faq"><div class="pd-in">
<h2 class="pd-h2">${e(F.h)}</h2>
<div class="pd-faq">${F.list.map(([q, a]) => `<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</div>
<p class="pm-more"><a class="pd-link" href="https://t.me/njo_manager" rel="noopener">${e(F.more)}</a></p>
</div></section>`;

  const Fi = C.final;
  const end = `<section class="pd-sec pd-end pm-end"><div class="pd-in"><div class="pg-me" aria-hidden="true">${me}</div>
<h2 class="pd-h2">${Fi.h}</h2>
<div class="pd-row"><button type="button" class="btn btn-p pm-reserve-open"><span class="d"></span>${e(Fi.cta)}</button></div><p class="pm-under">${e(Fi.under)}</p>
</div></section>`;

  return hero + value + acts + report + experts + plans + usha + real + faq + end;
}
