// Markup builders shared by the build (pre-rendered HTML for crawlers) and the
// browser layer (enhance.js). Pure functions: data in, HTML string out.
// The build inlines this file into the browser script with `export` removed.
// Visual language is the site's own: glass, light, peach glow, Geist Light.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- plans: Core, Pro and Enterprise side by side; every detail in a drawer ----------
const KEY_ROWS = [[0, 0], [0, 1], [2, 1], [2, 2], [1, 1], [1, 2]];
function plansHTML(x, d) {
  const g = x.plansGroups, row = ([gi, ri]) => g[gi] && g[gi][1][ri];
  const keys = KEY_ROWS.map(row).filter(Boolean);
  const extras = g.flatMap(([, list]) => list.filter(([, c]) => c === '—').map(([l]) => l));
  const facts = (k) => keys.map((r) => `<div class="xp-f"><b>${esc(r[k])}</b><span>${esc(r[0])}</span></div>`).join('');
  return `<div class="xp">
  <div class="xp-cards">
    <article class="xp-card xp-core">
      <span class="xp-k">${esc(x.forCore)}</span>
      <h3 class="xp-name">USHA <b>Core</b></h3>
      <p class="xp-desc">${esc(x.plansCore)}</p>
      <div class="xp-facts">${facts(1)}</div>
      <button type="button" class="xp-det" data-k="core">${esc(x.details)} <i aria-hidden="true">↗</i></button>
      <a class="btn btn-g xp-go" href="#free" data-plan="USHA Core"><span>${esc(d.p_cta)}</span></a>
    </article>
    <article class="xp-card xp-pro">
      <i class="xp-aura" aria-hidden="true"></i>
      <span class="xp-k">${esc(x.forPro)}</span><span class="xp-hot">${esc(d.p_rec)}</span>
      <h3 class="xp-name">USHA <b>Pro</b></h3>
      <p class="xp-desc">${esc(x.plansPro)}</p>
      <div class="xp-facts">${facts(2)}</div>
      <div class="xp-plus"><span class="xp-k">${esc(x.proPlus)}</span>${extras.map((e) => `<span class="xp-chip">+ ${esc(e)}</span>`).join('')}</div>
      <button type="button" class="xp-det" data-k="pro">${esc(x.details)} <i aria-hidden="true">↗</i></button>
      <a class="btn btn-p xp-go" href="#free" data-plan="USHA Pro"><span class="d"></span><span>${esc(d.p_cta)}</span></a>
    </article>
    <article class="xp-card xp-ent">
      <span class="xp-k">${esc(x.entKick)}</span>
      <h3 class="xp-name">USHA <b>Enterprise</b></h3>
      <p class="xp-desc">${esc(x.entLead)}</p>
      <div class="xp-plus"><span class="xp-k">${esc(x.entPlus)}</span>${x.entOnlyItems.map(([n, s]) => `<div class="xp-eo"><b>${esc(n)}</b><span>${esc(s)}</span></div>`).join('')}</div>
      <button type="button" class="xp-det" data-k="ent">${esc(x.details)} <i aria-hidden="true">↗</i></button>
      <a class="btn btn-g xp-go" href="#free" data-plan="USHA Enterprise"><span>${esc(d.p_cta)}</span> ↗</a>
    </article>
  </div>
  <p class="xp-both"><b>${esc(x.bothInclude)}</b> ${esc(x.both)}</p>
</div>`;
}

// the floating screen for one plan
function planScreenHTML(x, d, k) {
  const g = x.plansGroups;
  const name = { core: 'Core', pro: 'Pro', ent: 'Enterprise' }[k];
  const lead = { core: x.plansCore, pro: x.plansPro, ent: x.entLead }[k];
  const kick = { core: x.forCore, pro: x.forPro, ent: x.entKick }[k];
  let body;
  if (k === 'ent') {
    body = `<div class="xm-g"><div class="xm-gl">${esc(x.entAll)}</div><p class="xm-note">${esc(x.entAllNote)}</p><div class="xm-tags">${x.entAllItems.map((i) => `<span>${esc(i)}</span>`).join('')}</div></div>
      <div class="xm-g"><div class="xm-gl">${esc(x.entOnly)}</div>${x.entOnlyItems.map(([n, s]) => `<div class="xm-r xm-hi"><span class="xm-l">${esc(n)}</span><span class="xm-v">${esc(s)}</span></div>`).join('')}</div>`;
  } else {
    const col = k === 'core' ? 1 : 2;
    body = g.map(([gn, list]) => `<div class="xm-g"><div class="xm-gl">${esc(gn)}</div>${list.map((r) => {
      const v = r[col], off = v === '—', only = r[1] === '—' && k === 'pro';
      return `<div class="xm-r${off ? ' xm-off' : ''}${only ? ' xm-hi' : ''}"><span class="xm-l">${esc(r[0])}</span><span class="xm-v">${off ? esc(x.inPro) : esc(v)}</span></div>`;
    }).join('')}</div>`).join('');
  }
  return `<div class="xm-panel xm-${k}" role="dialog" aria-modal="true" aria-label="USHA ${name}">
    <i class="xm-aura" aria-hidden="true"></i>
    <header class="xm-hd"><div><span class="xm-k">${esc(kick)}</span><h3>USHA <b>${name}</b></h3><p>${esc(lead)}</p></div>
      <button type="button" class="xm-x" aria-label="${esc(x.close)}"></button></header>
    <div class="xm-body">${body}</div>
    <footer class="xm-ft"><p>${k === 'ent' ? '' : `${esc(x.bothInclude)} ${esc(x.both)}`}</p><a class="btn btn-p xm-go" href="#free" data-plan="USHA ${name}"><span class="d"></span><span>${esc(d.p_cta)}</span></a></footer>
  </div>`;
}

// ---------- live findings: a small picture of light for every number ----------
function findingChart(i, lang) {
  const price = lang === 'ru' ? ['1 290 ₽', '1 058 ₽'] : ['AED 129', 'AED 106'];
  const glow = '<defs><linearGradient id="xg" x1="0" x2="1"><stop offset="0" stop-color="#FFC4A0" stop-opacity=".2"/><stop offset="1" stop-color="#FF5A1F"/></linearGradient></defs>';
  if (i === 0) return `<div class="xf xf-price"><s>${price[0]}</s><i aria-hidden="true"></i><span>${price[1]}</span></div>`;
  if (i === 1) return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}<path d="M4 50 C60 49 100 46 140 36 S200 10 236 8" pathLength="1"/><circle cx="236" cy="8" r="3.5"/></svg>`;
  if (i === 2) return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}${Array.from({ length: 24 }, (_, k) => { const h = 6 + ((k * 37) % 23) + (k > 15 ? 18 : 0); return `<rect x="${4 + k * 9.8}" y="${52 - h}" width="4" height="${h}" rx="2" class="${k > 15 ? 'hi' : ''}" style="--k:${k}"/>`; }).join('')}</svg>`;
  return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}<path d="M4 50 C40 50 60 44 90 42 S130 46 150 30 S178 4 190 10 S215 40 236 44" pathLength="1"/><circle cx="186" cy="8" r="3.5"/></svg>`;
}

// ---------- 03 Try her: pure, shared markup for the three bands ----------
const x3Em = (s) => esc(s).replace(/\*([^*]+)\*/g, '<i>$1</i>');
function x3RailHTML(x) {
  return `<nav class="x3-rail" aria-label="${esc(x.rail)}">${x.rail.split(' · ').map((t, i) => `<a href="#${['x3-watch', 'x3-live', 'x3-split'][i]}">${esc(t)}</a>`).join('')}<span aria-hidden="true"></span></nav>`;
}
function x3LiveHTML(x) {
  return `<i class="x3-corners" aria-hidden="true"></i><div class="x3-top"><span><i class="xl-dot" aria-hidden="true"></i>${esc(x.b2_k)}<i class="x3-meter" aria-hidden="true">${Array.from({length:9},(_,i)=>`<b style="--i:${i}"></b>`).join('')}</i></span><span>${esc(x.b2_k2)}</span></div>
    <div class="x3-stage" aria-hidden="true"></div><div class="x3-satellites"><p class="x3-sat-k">${esc(x.b2_sat_k)}</p>${[1,2,3].map((n)=>`<button type="button" class="xl-open x3-sat" style="--i:${n}">${esc(x['b2_sat'+n])}</button>`).join('')}</div>
    <div class="x3-invite"><h3 class="big" id="x3-live-title">${x3Em(x.b2_h)}</h3><p>${esc(x.b2_p)}</p><div class="x3-slot"><button type="button" class="btn btn-p xl-open x3-go"><span class="d"></span><span>${esc(x.b2_cta)}</span></button></div><p class="x3-steps">${esc(x.b2_steps)}</p><div class="x3-hint-slot"></div></div>`;
}
const x3Chart = (warm, summary, bars = false) => `<svg class="x3-chart" dir="ltr" viewBox="0 0 320 85" aria-hidden="true"><path class="x3-gridline" d="M0 20H320M0 45H320M0 70H320"/>${bars ? Array.from({length:24},(_,i)=>{const h=i<11?12+i*4:18+(i*13%38);return `<rect x="${i*13+2}" y="${75-h}" width="8" height="${h}" rx="2" fill="${i>=18?'#D4FF3A':i>10?'#FF5A1F':'#98776B'}"/>`;}).join('')+`<rect x="233" y="6" width="82" height="73" rx="5" fill="none" stroke="#D4FF3A"/>` : Array.from({length:warm?1:5},(_,i)=>`<path d="M0 ${30+i*8}C35 ${80-i*11} 65 ${2+i*4} 100 ${40+i*5}S160 ${80-i*8} 200 ${20+i*11}S270 ${62-i*9} 320 ${warm?12:65-i*8}" fill="none" stroke="${warm?'#FFB48A':['#5B7BA8','#E0565B','#4CAF7A','#78719C','#7E8A93'][i]}" stroke-width="2"/>`).join('')}</svg><span class="x3-sr">${esc(summary)}</span>`;
function x3PanelHTML(p, side, x, lang, media, labels) {
  const on = side === 'on', e=esc, L=labels, money=(v)=>lang==='ru'?`${Math.round(v*10).toLocaleString('ru-RU')} ₽`:`AED ${v}`;
  const move=(s)=>`<div class="x3-move"><small>${e(x.p1_m)}</small><p>${e(s)}</p></div>`, note=(s)=>`<p class="x3-note">${e(s)}</p>`;
  const shares=(names,values)=>`<div class="x3-shares">${names.map((s,i)=>`<div><span>${e(s)}</span><b dir="ltr">${p===3?(i===0?'▲':i===2?'▼':''):''}${values[i]}${p===4?'':'%'}</b><i style="--n:${values[i]}%"></i></div>`).join('')}</div>`;
  let body='', title=L.panels[p-1];
  if(p===1) body=on?`<p class="x3-path">${e(x.p1_tu)}</p><div class="x3-report">${[x.p1_w,x.p1_y,x.p1_m].map((t,i)=>`<div><h4>${e(t)}</h4>${i===0?'<strong dir="ltr">−23%</strong>':''}<p>${e([x.p1_a,x.p1_b,x.p1_c][i])}</p></div>`).join('')}</div>${move(x.p1_k)}${note(x.p1_f)}`:`<div class="x3-metrics">${['18,402 ▼23%','2,960 ▼11%','312 ▼9%','1.7%',money(118),'4.1%','4.3',money(2450)+' ▲14%'].map((v,i)=>`<div><small>${e(L.metrics[i])}</small><b dir="ltr">${e(v)}</b></div>`).join('')}</div>${x3Chart(false,L.chartSummary)}${note(x.p1_o)}`;
  if(p===2) body=on?`<h4>${e(x.p2_a)}</h4>${x3Chart(true,L.chartSummary,true)}<div class="x3-hours" dir="ltr"><span>00:00</span><span>10:00</span><b>18:00–23:00</b></div><small class="x3-lime">${e(x.p2_here)}</small><p class="x3-verdict">${e(x.p2_v)}</p><p class="x3-note">${e(x.p2_b)}</p>${move(x.p2_k)}`:`<h4>${e(x.p2_t)}</h4><table class="x3-table"><thead><tr><th></th>${L.adsCols.map(s=>`<th>${e(s)}</th>`).join('')}</tr></thead><tbody>${[['Brand_Search_v3',610,'1.84','2.1%'],['Retarget_Q3',420,'2.37','0.9%'],['Promo_Gift',980,'2.91','0.7%'],['Video_Test2',440,'1.12','0.4%']].map((a,i)=>`<tr><td dir="ltr">${a[0]}</td><td dir="ltr">${lang==='ru'?a[1]*10:a[1]}</td><td dir="ltr">${lang==='ru'?(Number(a[2])*10).toFixed(1):a[2]}</td><td dir="ltr">${a[3]}</td><td>${e(i===2?L.limited:L.active)}</td></tr>`).join('')}</tbody></table><div class="x3-flat" aria-hidden="true"></div>${note(x.p2_o)}`;
  if(p===3) body=on?`<h4 class="x3-verdict">${e(x.p3_v)}</h4>${shares(L.formats,[46,31,23])}<p class="x3-note">${e(x.p3_c)}</p>${move(x.p3_m)}`:`<div class="x3-metrics"><div><small>${e(L.followers)}</small><b dir="ltr">1,000</b></div><div><small>${e(L.reach)}</small><b dir="ltr">11 · 1.1%</b></div></div><p>${e(L.posts)} <b dir="ltr">8 → 12</b></p>${x3Chart(false,L.chartSummary)}<div class="x3-tiles" dir="ltr">${[4,7,3,9,2,5].map(n=>`<span>♡ ${n}</span>`).join('')}</div>${note(x.p3_o)}`;
  if(p===4) body=on?`<p>${e(x.p4_a)}</p><h4>${e(x.p4_t)}</h4>${shares(x.p4_bars.split(' · '),[18,31,47])}${move(x.p4_v)}${note(x.p4_f)}`:`<h4>${e(x.p4_o)}</h4><div class="x3-alerts">${[0,1,2].map((n)=>`<p><i aria-hidden="true">!</i>${e(L.alert)}<small dir="ltr">02:${40+n*6}</small></p>`).join('')}</div><div class="x3-bubble"><small>${e(L.team)}</small><p>${e(x.p4_q)}</p></div>`;
  if(p===5) body=on?`${shares(x.p5_th.split(' · '),[64,22,14])}${move(x.p5_v)}`:`<p class="x3-rating" dir="ltr">★ 4.3 <small>${e(L.reviewCount)}</small></p><div class="x3-reviews">${L.reviews.map((s,i)=>`<p><span dir="ltr">${'★'.repeat(i===1?2:5)}</span><span>${e(s)}</span><span class="x3-reply">${e(L.reply)} ↗</span></p>`).join('')}</div>`;
  if(p===6) body=on?`<p class="x3-note">${e(x.p6_ex)}</p><h4 class="x3-verdict">${e(x.p6_h)}</h4><ol class="x3-week">${x.p6_days.split(' / ').map((s,i)=>`<li><b dir="ltr">0${i+1}</b><span>${e(s)}</span></li>`).join('')}</ol>`:`<div class="x3-month" dir="ltr">${Array.from({length:35},(_,i)=>`<span${[5,9,16,24].includes(i)?' class="x3-event"':''}>${i<31?i+1:''}${[12,26].includes(i)?'<i>×</i>':''}</span>`).join('')}</div>${note(x.p6_o)}`;
  if(p===7) {
    const film=media[on?'with':'without'];title=on?L.mediaOn:L.mediaOff;
    body=`<video class="x3-v" data-film="${on?'with':'without'}" playsinline muted preload="none" style="--ar:${film.aspect}" aria-label="${e(on?x.p7_on:x.p7_off)}"></video><p class="x3-strip">${e(on?x.p7_on:x.p7_off)}</p><div class="x3-workflow">${(on?L.stepsOn:L.stepsOff).map(s=>`<span>${e(s)}</span>`).join('<i aria-hidden="true">→</i>')}</div><div class="x3-control-space"></div>`;
  }
  return `<figure class="x3-p x3-p${p}" data-panel="${p}"><figcaption class="x3-chrome"><i aria-hidden="true">${['▥','▤','▦','⌁','☆','▦','▷'][p-1]}</i><span>${e(title)}</span><b class="x3-example">${e(x.b3_ex)}</b></figcaption><div class="x3-body">${body}</div></figure>`;
}
function x3SplitHTML(x, lang, media, labels) {
  const ctl=x.p7_ctl;
  return `<div class="x3-heading"><p class="kick">${esc(x.b3_k)}</p><h3 class="big" id="x3-split-title">${x3Em(x.b3_h)}</h3><p class="lead">${esc(x.b3_p)}</p></div><div class="x3-labels"><span class="x3-label-on">● ${esc(x.b3_on)}</span><span class="x3-label-off">○ ${esc(x.b3_off)}</span></div>
    <div class="x3-board" style="--d:${lang==='ar'?-1:1}"><div class="x3-lay x3-off" role="group" aria-label="${esc(x.b3_off)}">${[1,2,3,4,5,6,7].map(p=>x3PanelHTML(p,'off',x,lang,media,labels)).join('')}</div><div class="x3-clip"><div class="x3-clip-in"><div class="x3-lay x3-on" role="group" aria-label="${esc(x.b3_on)}">${[1,2,3,4,5,6,7].map(p=>x3PanelHTML(p,'on',x,lang,media,labels)).join('')}</div></div></div><div class="x3-lay x3-ui" role="group" aria-label="${esc(labels.panels[6])}">${[1,2,3,4,5,6].map(p=>`<div class="x3-p${p}" aria-hidden="true"></div>`).join('')}<div class="x3-p7 x3-media-ui"><div class="x3-controls"><button type="button" class="x3-play">${esc(ctl[0])}</button><button type="button" class="x3-sound" aria-pressed="false">${esc(ctl[2])}</button><span class="x3-now" role="status"></span><div class="x3-progress"><i></i></div><div class="x3-film-switch"><button type="button" data-x3-watch="0">${esc(ctl[5])}</button><button type="button" data-x3-watch="100">${esc(ctl[6])}</button></div></div></div></div><div class="x3-seam"><button type="button" class="x3-knob" role="slider" aria-label="${esc(x.b3_slider)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="${esc(x.b3_val.replace('{x}','50'))}"><span class="x3-face" aria-hidden="true"><i></i><i></i></span><span class="x3-chevrons" aria-hidden="true">‹ ›</span></button><span class="x3-drag">${esc(x.b3_drag)}</span></div></div>
    <div class="x3-switch" role="group" aria-label="${esc(x.b3_slider)}"><button type="button" data-x3-value="0" aria-pressed="false">${esc(x.b3_off)}</button><button type="button" data-x3-value="100" aria-pressed="false">${esc(x.b3_on)}</button></div><p class="x3-disclaimer">${esc(x.b3_note)}</p><footer class="x3-end"><p>${esc(x.b3_end)}</p><a class="btn btn-g" href="#x3-live">${esc(x.b2_cta)} ↑</a></footer>`;
}

// ---------- updated decks, 30 slides: pre-rendered and shared with language switching ----------
const DOT_GLYPHS = {
  '0':['01110','10001','10011','10101','11001','10001','01110'],
  '1':['00100','01100','00100','00100','00100','00100','01110'],
  '2':['01110','10001','00001','00010','00100','01000','11111'],
  '3':['11110','00001','00001','01110','00001','00001','11110'],
  '4':['00010','00110','01010','10010','11111','00010','00010'],
  '5':['11111','10000','10000','11110','00001','00001','11110'],
  '6':['01110','10000','10000','11110','10001','10001','01110'],
  '7':['11111','00001','00010','00100','01000','01000','01000'],
  '8':['01110','10001','10001','01110','10001','10001','01110'],
  '9':['01110','10001','10001','01111','00001','00001','01110'],
  '+':['00000','00100','00100','11111','00100','00100','00000'],
  '/':['00001','00010','00010','00100','01000','01000','10000'],
  '%':['11001','11010','00010','00100','01000','01011','10011'],
  ',':['000','000','000','000','000','010','100'],
  ' ':['00','00','00','00','00','00','00'],
};
function dotNumber(value) {
  let x = 0, dots = '';
  for (const c of String(value)) {
    const glyph = DOT_GLYPHS[c] || DOT_GLYPHS[' '];
    glyph.forEach((row, y) => [...row].forEach((v, col) => { if (v === '1') dots += `<circle cx="${x + col * 4 + 2}" cy="${y * 4 + 2}" r="1.25"/>`; }));
    x += (glyph[0].length + 1) * 4;
  }
  return `<svg viewBox="0 0 ${x - 4} 28" aria-hidden="true" focusable="false">${dots}</svg>`;
}
function deckHTML(x, lang) {
  const d = x.deck, source = lang === 'ru' ? 'RU' : 'EN';
  const ref = (...slides) => `<!-- ${source} deck, slides ${slides.join(', ')} -->`;
  const title = (s) => `<h2>${esc(s)}</h2>`;
  const section = (id, body, slides) => `<section class="sec dx-section" id="${id}" data-deck="${source}:${slides}"><div class="wrap">${ref(...slides.split(','))}${body}</div></section>`;
  const cards = (items) => items.map(([h, p]) => `<article class="dx-card"><h3>${esc(h)}</h3><p>${esc(p)}</p></article>`).join('');
  const p = d.problem, m = d.meet, mind = d.mind, h = d.how, trust = d.trust;
  const numberGroups = d.numbers.groups.map(([label, figures]) => `<div class="dx-number-group"><h3>${esc(label)}</h3>${figures.map(([n,en,ru,suffix,label,slide]) => {
    const display = (lang === 'ru' ? ru : en) + suffix;
    return `${ref(slide)}<div class="dx-stat"><span class="dx-number" data-count="${n}" data-suffix="${esc(suffix)}" data-final="${esc(display)}"><span class="dx-dot" aria-hidden="true">${dotNumber(display)}</span><span class="dx-sr">${esc(display)}</span></span><p>${esc(label)}</p></div>`;
  }).join('')}</div>`).join('');
  return {
    problem: section('deck-problem', `${title(p.title)}<div class="dx-algorithms">${cards(p.algorithms)}</div><div class="dx-foil">${ref(4)}<h3>${esc(p.same)}</h3><div class="dx-echo">${Array.from({length:4}, () => `<p>${esc(p.advice)}</p>`).join('')}</div><small>${esc(p.illustration)}</small></div>${ref(5)}<h3 class="dx-subhead">${esc(p.roads)}</h3><div class="dx-grid dx-three">${cards(p.roadItems)}</div>`, '3,4,5'),
    meet: section('deck-meet', `${title(m.title)}<p class="dx-lead">${esc(m.intro)}</p><div class="dx-translate"><div class="dx-pair dx-labels"><span>${esc(m.raw)}</span><span>${esc(m.move)}</span></div>${m.pairs.map(([signal,move]) => `<div class="dx-pair"><bdi dir="auto">${esc(signal)}</bdi><p>${esc(move)}</p></div>`).join('')}<small>${esc(d.example)}</small></div>${ref(7)}<h3 class="dx-subhead">${esc(m.morning)}</h3><p class="dx-lead">${esc(m.daily)}</p>${ref(8)}<h3 class="dx-subhead">${esc(m.notices)}</h3><p class="dx-caption">${esc(d.example)}</p><div class="dx-grid dx-three">${cards(m.tiles)}</div>`, '6,7,8'),
    numbers: section('deck-numbers', `${title(d.numbers.title)}<div class="dx-numbers">${numberGroups}</div>`, '7,9,11,12,13,19'),
    mind: section('deck-mind', `${title(mind.title)}<div class="dx-grid dx-three"><article class="dx-card">${ref(9)}<h3>${esc(mind.experts)}</h3><p>${esc(mind.learn)}</p></article><article class="dx-card">${ref(10)}<h3>${esc(mind.copy)}</h3><p>${esc(mind.copyText)}</p></article><article class="dx-card">${ref(11)}<h3>${esc(mind.sim)}</h3><p>${esc(mind.simText)}</p></article></div><div class="dx-simulation">${ref(11)}<span class="dx-caption">${esc(d.example)}</span><div class="dx-grid dx-three">${[18,31,47].map((n,i)=>`<div class="dx-test${i===2?' dx-win':''}"><span>${esc(mind.testLabels[i])}</span><bdi>${esc(mind.testPrices[i])}</bdi><div class="dx-test-bar"><i style="--buyers:${n}"></i></div><b>${n}</b><small>${esc(mind.bought)}</small></div>`).join('')}</div><p>${esc(mind.winner)}</p></div>${ref(12)}<h3 class="dx-subhead">${esc(mind.skillsTitle)}</h3><ol class="dx-skills">${mind.skills.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><p class="dx-lead">${esc(mind.powers)}</p><p class="dx-caption">${esc(mind.languages)}</p>`, '9,10,11,12'),
    outcomes: section('deck-outcomes', `${title(d.outcomes.title)}<p class="dx-caption">${esc(d.example)}</p><div class="dx-outcomes">${d.outcomes.panels.map(([slide,h,without,withU])=>`${ref(slide,...(slide===14?[23]:slide===6?[24]:slide===8?[3]:slide===15?[5]:[]))}<article class="dx-outcome"><h3>${esc(h)}</h3><div><small>${esc(d.outcomes.without)}</small><p>${esc(without)}</p></div><div class="dx-with"><small>${esc(d.outcomes.with)}</small><p>${esc(withU)}</p></div></article>`).join('')}</div>`, '3,5,6,8,11,14,15,17,23,24'),
    how: section('deck-how', `${title(h.title)}<ol class="dx-steps">${h.steps.map(([t,p],i)=>`<li><bdi>0${i+1}</bdi><h3>${esc(t)}</h3><p>${esc(p)}</p></li>`).join('')}</ol>${ref(14)}<div class="dx-brief"><h3>${esc(h.brief)}</h3><p>${esc(h.format)}</p></div>${ref(15)}<h3 class="dx-subhead">${esc(h.weekTitle)}</h3><p class="dx-caption">${esc(d.example)}</p><ol class="dx-week">${h.week.map(([day,line])=>`<li><b>${esc(day)}</b><p>${esc(line)}</p></li>`).join('')}</ol><p class="dx-equation">${esc(h.equation)}</p>${ref(16)}<h3 class="dx-subhead">${esc(h.ownersTitle)}</h3><p class="dx-caption">${esc(d.example)}</p><div class="dx-grid dx-three">${cards(h.owners)}</div>`, '13,14,15,16'),
    price: `<div class="dx-price">${ref(17)}<h3>${esc(d.price.title)}</h3><p>${esc(d.price.basis)}</p></div>`,
    rhythm: `<div class="dx-rhythm">${ref(21)}<h3>${esc(d.rhythm.title)}</h3><small>${esc(d.rhythm.days)}</small>${d.rhythm.rows.map(([name,kind])=>`<div class="dx-rhythm-row"><span>${esc(name)}</span><div aria-hidden="true">${Array.from({length:30},(_,i)=>`<i class="${(kind==='daily'||kind==='publish'&&i%2===0||kind==='report'&&(i===14||i===29))?'on':''}"></i>`).join('')}</div></div>`).join('')}</div>`,
    trust: section('deck-trust', `${title(trust.title)}<p class="dx-lead">${esc(trust.intro)}</p><div class="dx-trust-grid"><div><ol class="dx-ladder">${trust.ladder.map((s,i)=>`<li style="--step:${i}"><bdi>0${i+1}</bdi><p>${esc(s)}</p></li>`).join('')}</ol><div class="dx-refund"><span aria-hidden="true">${dotNumber('100%')}</span><b>${esc(trust.refund)}</b></div><p class="dx-terms">${esc(trust.terms)}</p></div><div class="dx-data">${ref(26)}<h3>${esc(trust.data)}</h3><b class="dx-nda">${esc(trust.stamp)}</b><div class="dx-data-lists"><div><h4>${esc(trust.need)}</h4><ul>${trust.needs.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div><div><h4>${esc(trust.noNeed)}</h4><ul>${trust.noNeeds.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div></div><p>${esc(trust.messengers)}</p><p>${esc(trust.connect)}</p></div></div>${ref(23,25)}<div class="dx-promises"><b>${esc(trust.every)}</b><ul>${trust.promises.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div><p class="dx-terms">${esc(trust.results)}</p><footer class="dx-trust-footer"><p>${esc(trust.writing)}</p><a href="https://t.me/njo_manager" target="_blank" rel="noopener">${esc(trust.contact)} ↗</a></footer>`, '23,25,26'),
    free: `${ref(27)}<p class="dx-test-lead">${esc(d.test)}</p>`,
    footer: `${ref(30)}<p class="dx-tagline" lang="en" dir="ltr">Unified Strategy. Human Action.</p>`,
  };
}

// USHA enhancement layer. Runs after the main bundle and only adds to the page,
// in the site's own visual language: header light thread, cursor scope, glass
// that follows the pointer, a light beam down USHA's comparison column, roles
// absorbed into one engine, light meters for the monthly numbers, light drawn
// under each finding, and the plans module with Enterprise. Re-renders when the
// language changes. ui.mjs is inlined above this file by the build.
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const XS = window.USHA_X || {};
  const lang = () => (H.lang in XS ? H.lang : Object.keys(XS)[0]);
  const X = () => XS[lang()] || {};
  const rtl = H.dir === 'rtl';
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Deck sections are present in static HTML. Repaint only on a language
  // change; the accessible figures always contain their final values.
  let deckLang, deckObserver;
  function deckUI() {
    if (deckLang === lang()) return;
    deckLang = lang();
    deckObserver?.disconnect();
    const blocks = deckHTML(X(), lang());
    $$('[data-deck-block]').forEach((slot) => { slot.innerHTML = blocks[slot.dataset.deckBlock] || ''; });
    if (reduce || !('IntersectionObserver' in window)) return;
    deckObserver = new IntersectionObserver((entries) => entries.forEach(({target, isIntersecting}) => {
      if (!isIntersecting) return;
      deckObserver.unobserve(target);
      const start = performance.now(), total = +target.dataset.count;
      const locale = lang() === 'ru' ? 'ru-RU' : 'en-US';
      const tick = (now) => {
        if (!target.isConnected) return;
        const p = Math.min(1, (now - start) / 1100);
        const n = Math.round(total * (1 - Math.pow(1 - p, 3)));
        const text = p === 1 ? target.dataset.final : n.toLocaleString(locale) + target.dataset.suffix;
        $('.dx-dot', target).innerHTML = dotNumber(text.replace(/\u00a0|\u202f/g, ' '));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), {threshold: .5});
    $$('.dx-number').forEach((el) => deckObserver.observe(el));
  }

  // ---------- three invitations, all using the live chat's existing entry ----------
  let whisper, livePill, hintTimer, hintRotation, hintLang;
  let hintSeen = false, hintLine = 0;
  try { hintSeen = sessionStorage.getItem('usha-live-hint') === '1'; } catch {}
  const hintsReady = () => !H.classList.contains('locked') && !$('#intro') &&
    !H.classList.contains('gaming') && !H.classList.contains('x-modal-on');
  function rememberHint() {
    hintSeen = true;
    try { sessionStorage.setItem('usha-live-hint', '1'); } catch {}
  }
  function hideWhisper() {
    if (whisper && !whisper.hidden) whisper.hidden = true;
    clearTimeout(hintRotation);
  }
  function dismissHint() {
    hideWhisper(); rememberHint();
    // Dismissing with a keyboard keeps focus on the next useful action.
    $('.x-live-main')?.focus({ preventScroll: true });
  }
  function openLive(e) {
    const entry = $('.xl-open');
    if (!entry || !hintsReady()) return;
    // The existing chat remembers the active element when it opens.
    e.currentTarget.focus({ preventScroll: true });
    rememberHint(); hideWhisper(); entry.click();
  }
  function showWhisper() {
    if (hintSeen || !whisper || !hintsReady() || !$('.xl-open') ||
      scrollY > 80) return;
    // A short viewport must never make the bubble cover the header or copy.
    const top = $('.hero-t').getBoundingClientRect().top;
    if (innerWidth <= 820 && top < 170) return;
    rememberHint(); whisper.hidden = false;
    let turns = 0;
    const rotate = () => {
      // Leave a focused button's accessible name stable.
      if (whisper.hidden || whisper.contains(D.activeElement)) return;
      hintLine = (hintLine + 1) % X().liveHints.lines.length;
      $('.x-whisper-text', whisper).textContent = X().liveHints.lines[hintLine];
      if (++turns < 2) hintRotation = setTimeout(rotate, 6000);
    };
    if (!reduce) hintRotation = setTimeout(rotate, 6000);
  }
  function hintsCheck() {
    if (!livePill) return;
    const ready = hintsReady();
    const pastHero = scrollY >= innerHeight * .9;
    const hidden = !ready || !pastHero;
    if (livePill.hidden !== hidden) livePill.hidden = hidden;
    if (!ready || scrollY > 80) hideWhisper();
    if (ready && !hintSeen && !hintTimer) hintTimer = setTimeout(() => {
      hintTimer = 0; showWhisper();
    }, 2400);
  }
  function liveHintsUI() {
    if (!window.USHA_LIVE?.api || !$('#hero .cta')) return;
    const x = X().liveHints;
    if (!x) return;
    if (!$('.x-live-main')) {
      const cta = $('#hero .cta');
      const main = D.createElement('button');
      main.type = 'button'; main.className = 'btn btn-p x-live-main';
      main.innerHTML = '<span class="d" aria-hidden="true"></span><span></span>';
      main.addEventListener('click', openLive);
      cta.prepend(main); cta.classList.add('x-live-actions');
      $('a[href="#free"]', cta)?.classList.replace('btn-p', 'btn-g');
      $('a[href="#signal"]', cta)?.classList.add('x-see-work');
      whisper = D.createElement('div'); whisper.className = 'x-whisper'; whisper.hidden = true;
      whisper.setAttribute('translate', 'no');
      whisper.innerHTML = '<button type="button" class="x-whisper-ask"><span class="x-whisper-text"></span><span aria-hidden="true">↗</span></button><button type="button" class="x-whisper-close">×</button>';
      $('.hero-t').append(whisper);
      $('.x-whisper-ask', whisper).addEventListener('click', openLive);
      $('.x-whisper-close', whisper).addEventListener('click', dismissHint);
      livePill = D.createElement('button'); livePill.type = 'button';
      livePill.className = 'x-live-pill'; livePill.hidden = true;
      livePill.innerHTML = '<span class="d" aria-hidden="true"></span><span></span><i aria-hidden="true">↗</i>';
      livePill.addEventListener('click', openLive); D.body.append(livePill);
      new MutationObserver((records) => {
        if (records.some((r) => r.attributeName === 'lang')) liveHintsUI();
        // The animation writes the same root class every frame. Ignore those
        // writes; only a changed mode needs to update these controls.
        else if (records.some((r) => r.oldValue !== H.className)) hintsCheck();
      }).observe(H, { attributes: true, attributeOldValue: true, attributeFilter: ['class', 'lang'] });
      // The wake overlay is removed after the greeting; no hint interrupts it.
      new MutationObserver(hintsCheck).observe(D.body, { childList: true });
      addEventListener('usha:noticed', showWhisper);
      addEventListener('resize', hintsCheck, { passive: true });
    }
    if (hintLang !== lang()) {
      hintLang = lang();
      $('.x-live-main span:last-child').textContent = x.primary;
      $('.x-live-pill span:nth-child(2)').textContent = x.pill;
      $('.x-whisper-text', whisper).textContent = x.lines[hintLine];
      $('.x-whisper-close', whisper).setAttribute('aria-label', x.dismiss);
    }
    hintsCheck();
  }

  // in-view: .x-io → .x-in, and .rv created by this layer → .in. Checked on
  // scroll (not observed) because the bundle re-renders and swaps nodes.
  const REV = '.x-io:not(.x-in),.x-plans .xp-cards:not(.in)';
  function revealCheck() {
    $$(REV).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.88 && r.bottom > 0 && r.height) el.classList.add(el.classList.contains('x-io') ? 'x-in' : 'in');
    });
  }
  const watch = () => revealCheck();

  // ---------- header ----------
  const header = $('header');
  let scrollQ = 0;
  function onScrollQ() { if (!scrollQ) scrollQ = requestAnimationFrame(() => { scrollQ = 0; onScroll(); }); }
  function cacheRects() {
    const fc = $('.fcard'), sh = $('#signal h2');
    if (fc) window.__fc = fc.getBoundingClientRect();
    if (sh) window.__sh = sh.getBoundingClientRect();
  }
  function onScroll() {
    cacheRects();
    wakeCheck(); revealCheck(); vsCheck(); deptScroll(); tilesCheck(); ctrlCheck(); hintsCheck(); x3Scroll();
    const y = scrollY, max = D.documentElement.scrollHeight - innerHeight;
    if (header) {
      header.classList.toggle('x-solid', y > 60 && !H.classList.contains('locked'));
      header.style.setProperty('--x-p', max > 0 ? (y / max).toFixed(4) : 0);
    }
  }

  // ---------- pointer: eyes cursor only over the 3D story; glass follows the light ----------
  const STORY = '#hero,#noise,#signal,#game';
  if (fine) addEventListener('pointermove', (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    // popup windows (plans, the live chat) sit above the eyes cursor: they always get the normal pointer
    const inStory = !t.closest('.x-modal') && (t.closest(STORY) || t.id === 'gl' || !t.closest('main,header,footer,.ov'));
    H.classList.toggle('x-native', !inStory || !!t.closest('.fcard,.hero-t a,.hero-t button,.x-live-pill'));
    const g = t.closest('.sec .glass');
    if (g) { const r = g.getBoundingClientRect(); g.style.setProperty('--px', e.clientX - r.left + 'px'); g.style.setProperty('--py', e.clientY - r.top + 'px'); }
  }, { passive: true });

  // ---------- waking headlines: letters start thin and faint, wake bold when seen ----------
  const WAKE = '.sec h2.big,.eng h3,.x3 h3.big,#story h2';
  // checked on scroll rather than observed: the bundle can swap these nodes
  function wakeCheck() {
    $$('.x-wake:not(.x-lit)').forEach((h) => {
      const r = h.getBoundingClientRect();
      if (r.top > innerHeight * 0.82 || r.bottom < 0 || !r.height) return;
      const n = h.querySelectorAll('.xc').length;
      h.classList.add('x-lit');
      setTimeout(() => h.classList.add('x-done'), n * 18 + 1300);
    });
  }
  function wakeUI() {
    $$(WAKE).forEach((h) => {
      if (h.querySelector('.xc')) return;
      const text = h.textContent;
      let k = 0;
      const walk = (node) => [...node.childNodes].forEach((n) => {
        if (n.nodeType !== 3) { walk(n); return; }
        const frag = D.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((word) => {
          if (!word) return;
          if (/^\s+$/.test(word)) { frag.append(word); return; }
          const w = D.createElement('span'); w.className = 'xw';
          // Arabic letters join, so Arabic wakes word by word
          (rtl ? [word] : [...word]).forEach((ch) => { const c = D.createElement('span'); c.className = 'xc'; c.style.setProperty('--k', k++); c.textContent = ch; w.append(c); });
          frag.append(w);
        });
        n.replaceWith(frag);
      });
      walk(h);
      h.setAttribute('aria-label', text.replace(/\s+/g, ' ').trim());
      h.classList.add('x-wake');
      h.classList.remove('x-lit', 'x-done');
      if (!h.dataset.xwo) {
        h.dataset.xwo = 1;
        new MutationObserver(() => { if (!h.querySelector('.xc')) later(wakeUI); }).observe(h, { childList: true });
      }
    });
  }


  // ---------- comparison: a duel, one rival at a time, on a lit spine ----------
  let vsT = 0, vsPicked = false, vsRival = 0;
  const NO = /^(no|нет|لا)\.?$/i;
  function compareUI() {
    const w = $('.cmpw'), t = $('#cmp'); if (!w || !t) return;
    const rows = $$('tr', t), head = $$('th', rows[0]).map((h) => h.textContent.trim());
    const rivals = head.slice(1, -1);
    const data = rows.slice(1).map((tr) => $$('td', tr).map((c) => c.textContent.trim()));
    const logo = $('header .logo svg');
    w.classList.add('x-hid'); $('#cmpm')?.classList.add('x-hid');
    let vs = $('.x-vs');
    if (!vs) { vs = D.createElement('div'); vs.className = 'x-vs'; w.after(vs); }
    vs.innerHTML = `<div class="vs-tabs" role="tablist">${rivals.map((r, i) => `<button type="button" role="tab" data-i="${i}" aria-selected="${i === vsRival}">${esc(r)}</button>`).join('')}</div>
    <div class="vs-head" aria-hidden="true"><span class="vs-rv">${esc(rivals[vsRival])}</span><span class="vs-x">VS</span><span class="vs-us"></span></div>
    <ol class="vs-rows">${data.map((d, r) => `<li style="--r:${r}"><div class="vs-l"><span class="vs-flip">${esc(d[1 + vsRival])}</span></div><div class="vs-c"><span>${esc(d[0])}</span></div><div class="vs-r"><i></i>${esc(d[d.length - 1])}</div></li>`).join('')}</ol>`;
    if (logo) $('.vs-us', vs).append(logo.cloneNode(true)); else $('.vs-us', vs).textContent = 'USHA';
    const show = (i) => {
      vsRival = i;
      $$('.vs-tabs button', vs).forEach((b) => b.setAttribute('aria-selected', String(+b.dataset.i === i)));
      const rv = $('.vs-rv', vs); rv.classList.remove('in'); void rv.offsetWidth; rv.textContent = rivals[i]; rv.classList.add('in');
      $$('.vs-rows li', vs).forEach((li, r) => {
        const f = $('.vs-flip', li), v = data[r][1 + i];
        $('.vs-l', li).dataset.who = rivals[i];
        f.classList.remove('in'); void f.offsetWidth;
        f.textContent = v; li.classList.toggle('no', NO.test(v)); f.classList.add('in');
      });
    };
    $$('.vs-tabs button', vs).forEach((b) => b.addEventListener('click', () => { vsPicked = true; show(+b.dataset.i); }));
    show(vsRival);
    clearInterval(vsT);
    vsT = setInterval(() => {
      if (vsPicked || reduce || D.hidden) return;
      const r = vs.getBoundingClientRect();
      if (r.top < innerHeight * 0.6 && r.bottom > innerHeight * 0.3) show((vsRival + 1) % rivals.length);
    }, 5200);
  }
  function vsCheck() {
    const vs = $('.x-vs:not(.x-in)'); if (!vs) return;
    const r = vs.getBoundingClientRect();
    if (r.top < innerHeight * 0.8 && r.bottom > 0) vs.classList.add('x-in');
  }

  // ---------- 8 → 1: as you scroll, each role hands its job to USHA ----------
  let dept = null, done = -1;
  function rolesUI() {
    const seven = $('.seven'), box = $('#roles'), x = X().hand; if (!seven || !box || !x) return;
    const roles = $$('span:not(.one)', box).map((r) => r.textContent);
    const text = $(':scope > .rv', seven) || $('.x-d1 > .rv', seven);
    seven.classList.add('x-dept');
    let st = $('.x-stick', seven);
    if (!st) {
      st = D.createElement('div'); st.className = 'x-stick';
      st.innerHTML = '<div class="x-dgrid"><div class="x-d1"></div><ol class="x-roles"></ol><div class="x-her glass"></div></div>';
      seven.prepend(st);
      $('.x-d1', st).append(text);
    }
    const d1 = $('.x-d1', st);
    $$('.x-count,.x-cap,.x-bar,.x-dk', d1).forEach((e) => e.remove());
    d1.insertAdjacentHTML('afterbegin', `<span class="x-dk">${esc(x.kick)}</span>`);
    d1.insertAdjacentHTML('beforeend', `<div class="x-count" aria-live="polite">8</div><div class="x-cap">${esc(x.capMany)}</div><div class="x-bar"><i></i></div>`);
    $('.x-roles', st).innerHTML = roles.map((r, i) => `<li><span class="n">0${i + 1}</span><span class="r">${esc(r)}</span><span class="t">${esc(x.tags[i] || '')}</span></li>`).join('');
    $('.x-her', st).innerHTML = `<div class="hd"><div class="x-orb"><b></b><b></b></div><div><strong>USHA</strong><span>${esc(x.her)}</span></div></div>
      <ul class="x-tasks">${x.tags.map((t) => `<li><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5 5.5 11 12 3"/></svg>${esc(t)}</li>`).join('')}</ul>
      <p class="x-foot">${esc(x.foot)}</p>`;
    dept = seven; done = -1; loopK = 0; loopHold = 0;
    setDone(0); deptLoop();
  }
  function spark(from, to) {
    if (reduce || !from.animate) return;
    const orb = $('.x-orb', dept), a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
    const sp = D.createElement('i'); sp.className = 'x-spark'; D.body.append(sp);
    const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = b.left + 16, y1 = b.top + b.height / 2;
    sp.animate([{ transform: `translate(${x0}px,${y0}px) scale(.6)`, opacity: 1 }, { transform: `translate(${(x0 + x1) / 2}px,${Math.min(y0, y1) - 60}px) scale(1.3)`, opacity: 1 }, { transform: `translate(${x1}px,${y1}px) scale(.4)`, opacity: .2 }], { duration: 650, easing: 'cubic-bezier(.5,0,.2,1)' }).onfinish = () => { sp.remove(); orb.classList.add('got'); setTimeout(() => orb.classList.remove('got'), 260); };
  }
  function setDone(n) {
    if (!dept || n === done) return;
    const x = X().hand, rows = $$('.x-roles li', dept), slots = $$('.x-tasks li', dept);
    rows.forEach((r, i) => {
      const was = r.classList.contains('gone'), now = i < n;
      r.classList.toggle('gone', now);
      const step = n - Math.max(done, 0) === 1;
      setTimeout(() => slots[i] && slots[i].classList.toggle('on', now), now && !was && step ? 520 : 0);
      if (now && !was && done >= 0) spark($('.t', r), slots[i]);
    });
    done = n;
    const left = Math.max(1, 8 - n), c = $('.x-count', dept);
    countTo(c, left, n >= 8);
    $('.x-cap', dept).textContent = n >= 8 ? x.capOne : n === 0 ? x.capMany : (left === 1 ? x.leftOne : x.leftMany);
    $('.x-foot', dept).classList.toggle('on', n >= 8);
    dept.classList.toggle('x-all', n >= 8);
    // whatever happened in between, the card ends in step with the counter
    clearTimeout(dept._sync); dept._sync = setTimeout(() => { const live = $$('.x-tasks li', dept); live.forEach((li, k) => li.classList.toggle('on', k < done)); }, 800);
  }
  // the counter walks to its target one step at a time, so a fast scroll
  // still shows 8 → 7 → 6 … instead of jumping
  function countTo(c, target, one) {
    clearInterval(c._t);
    const stepOnce = () => {
      const cur = +c.textContent || 8;
      if (cur === target) { clearInterval(c._t); c.classList.toggle('one', one); return; }
      c.textContent = cur + (target < cur ? -1 : 1);
      c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
      if (+c.textContent === target) { clearInterval(c._t); c.classList.toggle('one', one); }
    };
    c.textContent = target; c.dataset.n = target; c.classList.toggle('one', one);
    c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
  }
  // 8 → 1 loops on its own whenever the section is on screen: it counts down
  // calmly, holds on 1, then starts again. Nothing depends on scrolling.
  let loopT = 0, loopK = 0, loopHold = 0;
  function deptLoop() {
    clearInterval(loopT);
    loopT = setInterval(() => {
      if (!dept || D.hidden) return;
      const r = dept.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      if (loopHold > 0) { loopHold--; return; }
      if (loopK >= 8) { loopK = 0; setDone(0); loopHold = 1; return; }
      loopK++; setDone(loopK); $('.x-bar i', dept).style.setProperty('--p', (loopK / 8).toFixed(3));
      if (loopK >= 8) loopHold = 5;
    }, 650);
  }
  function deptScroll() {}






  // each number becomes the work itself: one tile per deliverable, shaped like
  // it; tiles Pro adds are ember and leave when Core is chosen
  let monthPro = true;
  const SHAPES = [['comp', 'mkt'], ['post', 'story'], ['video', 'edit', 'shoot', 'design'], ['promo', 'ads', 'creator']];
  function decorateAreas() {
    $$('#areas .area').forEach((a, ai) => {
      $$('.nums div', a).forEach((row, ri) => {
        const b = $('b', row); if (!b) return;
        const lo = +b.dataset.a, hi = +b.dataset.b;
        row.querySelector('.x-meter')?.remove();
        let t = $('.x-tiles', row);
        if (!t || +t.dataset.n !== hi) {
          t?.remove();
          t = D.createElement('span'); t.className = `x-tiles s-${(SHAPES[ai] || [])[ri] || 'post'}`; t.dataset.n = hi; t.setAttribute('aria-hidden', 'true');
          t.innerHTML = Array.from({ length: hi }, (_, k) => `<i class="${k >= lo ? 'x' : ''}" style="--k:${k}"></i>`).join('');
          row.append(t);
        }
        $$('i.x', t).forEach((i) => i.classList.toggle('off', !monthPro));
      });
      if (!a.classList.contains('x-watched')) a.classList.add('x-watched');
    });
    tilesCheck();
  }
  function tilesCheck() {
    $$('#areas .area:not(.x-lit)').forEach((a) => {
      const r = a.getBoundingClientRect();
      if (r.top < innerHeight * 0.85 && r.bottom > 0) a.classList.add('x-lit');
    });
  }

  function legendUI() {
    const a = $('#areas'); if (!a) return;
    let l = $('.x-legend'); if (!l) { l = D.createElement('div'); l.className = 'x-legend'; a.after(l); }
    l.innerHTML = `<span><i></i>${esc(X().legendCore || '')}</span><span><i class="x"></i>${esc(X().legendPro || '')}</span>`;
  }

  // ---------- control: three small live scenes ----------
  let feedT = 0, askT = 0;
  function ctrlUI() {
    const cards = $$('.ctrl > div'), c = X().ctrl; if (cards.length < 3 || !c) return;
    $$('.x-w').forEach((w) => w.remove());
    const lockSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="sh" d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="4.5" y="11" width="15" height="10" rx="3"/><circle cx="12" cy="16" r="1.4"/></svg>';
    cards[0].insertAdjacentHTML('afterbegin', `<div class="x-w xw-auto" aria-hidden="true"><div class="xw-top"><span class="xw-ic xw-sw"><i></i></span><span class="xw-lab xw-on">${esc(c.on)}</span></div><span class="xw-feed">${c.feed.map((f, i) => `<span class="${i ? '' : 'cur'}"><b>✓</b>${esc(f)}</span>`).join('')}</span></div>`);
    cards[1].insertAdjacentHTML('afterbegin', `<div class="x-w xw-ask"><div class="xw-top"><span class="xw-ic xw-dot" aria-hidden="true"></span><span class="xw-q">${esc(c.ask)}</span></div><div class="xw-act"><div class="xw-btns"><button type="button" class="xw-yes">${esc(c.yes)}</button><button type="button" class="xw-no">${esc(c.later)}</button></div><p class="xw-ok" aria-live="polite">${esc(c.ok)}</p></div></div>`);
    cards[2].insertAdjacentHTML('afterbegin', `<div class="x-w xw-lock" aria-hidden="true"><div class="xw-top"><span class="xw-ic">${lockSvg}</span><span class="xw-lab xw-only">${esc(c.only)}</span></div><span class="xw-chips">${c.lock.map((k) => `<span>${esc(k)}</span>`).join('')}</span></div>`);
    // feed rolls through what she did today
    clearInterval(feedT);
    feedT = setInterval(() => {
      const f = $('.xw-feed'); if (!f || reduce) return;
      const items = $$('span', f), i = items.findIndex((x) => x.classList.contains('cur'));
      items[i].classList.remove('cur'); items[i].classList.add('was');
      setTimeout(() => items[i].classList.remove('was'), 700);
      items[(i + 1) % items.length].classList.add('cur');
    }, 2400);
    // the yes: visitors can press it; on its own it gets pressed once in a while
    const ask = $('.xw-ask');
    const approve = () => { ask.classList.add('ok'); clearTimeout(askT); askT = setTimeout(() => ask.classList.remove('ok'), 4200); };
    $('.xw-yes', ask).addEventListener('click', approve);
    $('.xw-no', ask).addEventListener('click', () => { ask.classList.add('no'); setTimeout(() => ask.classList.remove('no'), 600); });
  }
  function ctrlCheck() {
    const ask = $('.xw-ask'); if (!ask || ask.dataset.auto) return;
    const r = ask.getBoundingClientRect();
    if (r.top < innerHeight * 0.7 && r.bottom > 0) {
      ask.dataset.auto = 1;
      setTimeout(() => { ask.classList.add('press'); setTimeout(() => { ask.classList.remove('press'); ask.classList.add('ok'); setTimeout(() => ask.classList.remove('ok'), 4200); }, 380); }, 1400);
    }
    $$('.xw-lock:not(.shut)').forEach((l) => { const q = l.getBoundingClientRect(); if (q.top < innerHeight * 0.75) l.classList.add('shut'); });
  }

  // ---------- guarantees: a seal and four promises ----------
  function guarUI() {
    const g = $('.guar'); if (!g) return;
    g.classList.add('x-guar');
    $$('li', g).forEach((li, i) => { li.style.setProperty('--i', i); li.dataset.n = '0' + (i + 1); });
    $('.x-seal', g)?.remove();
    const ring = X().guarRing || '';
    const logo = $('header .logo svg');
    g.insertAdjacentHTML('afterbegin', `<div class="x-seal" aria-hidden="true"><svg viewBox="0 0 200 200"><defs><path id="xsr" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/></defs><text><textPath href="#xsr" textLength="488" lengthAdjust="spacing">${esc(ring)}</textPath></text></svg><span class="x-seal-c"></span></div>`);
    if (logo) $('.x-seal-c', g).append(logo.cloneNode(true));
  }
  // ---------- free week: the deliverables on a timeline ----------
  function freeUI() {
    const d = $('.deliv'); if (!d) return;
    d.classList.add('x-line');
    $$('li', d).forEach((li, i) => li.style.setProperty('--i', i));
    let end = $('.x-decide'); if (!end) { end = D.createElement('div'); end.className = 'x-decide'; d.after(end); }
    end.textContent = X().decide || '';
  }
  // ---------- small things: chat header, galaxy label numbers ----------
  function sickUI() {
    const p = $('.sick'); if (!p || p.querySelector('.x-hl')) return;
    const t = p.innerHTML; p.innerHTML = `<span class="x-hl">${t}</span>`;
  }
  function smallUI() {
    sickUI(); chipsGlide();
    const chat = $('#chat'); if (chat) chat.dataset.head = X().chatHead || '';
    $$('.alg b').forEach((b, i) => b.dataset.n = '0' + (i + 1));
  }

  // ---------- phones: the industry chips run in a loop, like the partners strip ----------
  function chipsGlide() {
    const row = $('#ichips'); if (!row || reduce) return;
    const orig = $$('button:not(.x-clone)', row);
    if (!orig.length) return;
    if (!row.querySelector('.x-clone')) {
      orig.forEach((b, i) => { const c = b.cloneNode(true); c.classList.add('x-clone'); c.setAttribute('aria-hidden', 'true'); c.tabIndex = -1; c.addEventListener('click', () => orig[i].click()); row.append(c); });
      const sync = () => $$('.x-clone', row).forEach((c, i) => c.classList.toggle('on', orig[i].classList.contains('on')));
      orig.forEach((b) => new MutationObserver(sync).observe(b, { attributes: true, attributeFilter: ['class'] })); sync();
    }
    if (row.dataset.xg) return; row.dataset.xg = 1;
    let touched = 0, last = performance.now(), cycleT = performance.now(), x = 0;
    const stop = () => { touched = performance.now(); x = Math.abs(row.scrollLeft); };
    ['pointerdown', 'touchstart', 'wheel'].forEach((ev) => row.addEventListener(ev, stop, { passive: true }));
    (function tick(now) {
      requestAnimationFrame(tick);
      const dt = Math.min(64, now - last); last = now;
      if (innerWidth > 900 || now - touched < 2500) return;
      const r = row.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      const half = row.scrollWidth / 2;
      x += dt * 0.035; if (x >= half) x -= half;
      row.scrollLeft = x * (rtl ? -1 : 1);
      if (now - cycleT > 9000 && now - touched > 9000) {
        cycleT = now; const i = orig.findIndex((b) => b.classList.contains('on'));
        orig[(i + 1) % orig.length].click();
      }
    })(performance.now());
  }

  // ---------- live parts must not be frozen by browser translation ----------
  function noTranslate() {
    ['.x-dept', '.fcard', '#chat', '#bub', '#tasks', '#toast', '.x-vs', '.ctrl', '#areas', '.x-plans', '.x3-live', '.x3-split'].forEach((q) => $$(q).forEach((e) => { e.setAttribute('translate', 'no'); e.classList.add('notranslate'); }));
  }
  // ---------- findings card: always leaves room above it for USHA ----------
  function fcardFit() {
    const c = $('.fcard'); if (!c) return;
    c.style.transform = '';
    if (innerWidth <= 900) return;
    const r = c.getBoundingClientRect(), need = 200, h = c.offsetHeight, bottomGap = innerHeight - r.bottom;
    const room = innerHeight - bottomGap - h;
    const k = room < need ? Math.max(.72, (innerHeight - bottomGap - need) / h) : 1;
    if (k < 1) { c.style.transformOrigin = rtl ? '0 100%' : '100% 100%'; c.style.transform = `scale(${k.toFixed(3)})`; }
  }

  // ---------- FAQ: smooth open and close ----------
  function faqUI() {
    $$('#faq details').forEach((dt, i) => {
      const sm = $('summary', dt); if (!sm) return;
      dt.style.setProperty('--i', i); sm.dataset.n = String(i + 1).padStart(2, '0');
      if (dt.dataset.xa) return; dt.dataset.xa = 1;
      sm.addEventListener('click', (e) => {
        const p = $('p', dt); if (!p || reduce || !p.animate) return;
        e.preventDefault();
        if (dt.open) {
          dt.classList.add('closing');
          p.animate([{ opacity: 1, transform: 'none', height: p.offsetHeight + 'px' }, { opacity: 0, transform: 'translateY(-6px)', height: '0px' }], { duration: 320, easing: 'ease' }).onfinish = () => { dt.open = false; dt.classList.remove('closing'); };
        } else {
          dt.open = true;
          const h = p.offsetHeight;
          p.animate([{ opacity: 0, transform: 'translateY(-8px)', height: '0px' }, { opacity: 1, transform: 'none', height: h + 'px' }], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' });
        }
      });
    });
  }

  // ---------- live findings: light drawn under each number ----------
  function findingsUI() {
    $$('#fbody .fitem').forEach((f, i) => {
      if ($('.xf', f)) return;
      const v = $('.fv', f); if (v) v.insertAdjacentHTML('afterend', findingChart(i, lang()));
    });
  }

  // ---------- plans ----------
  let plansSet = null;
  function dictLike() {
    const hot = $('#plancards .badge'), cta = $('#plancards a');
    return { p_rec: hot ? hot.textContent : 'Most chosen', p_cta: cta ? cta.textContent.trim() : '' };
  }
  function plansUI() {
    const old = $('#plancards'); if (!old) return;
    let box = $('.x-plans');
    if (!box) { box = D.createElement('div'); box.className = 'x-plans'; old.after(box); }
    const wasOpen = !!box.querySelector('.xp-more[open]');
    box.innerHTML = plansHTML(X(), dictLike());
    if (wasOpen) $('.xp-more', box).open = true;
    $$('a[data-plan]', box).forEach((a) => a.addEventListener('click', (e) => {
      const hidden = $(`#plancards a[data-plan="${a.dataset.plan}"]`) || $('#plancards a');
      if (hidden) { e.preventDefault(); hidden.click(); }
    }));
    $$('.xp-card', box).forEach((c, i) => c.style.setProperty('--i', i));
    $$('.xp-det', box).forEach((b) => b.addEventListener('click', () => openPlan(b.dataset.k, b.closest('.xp-card'))));
    watch(box);
  }

  // the floating screen for a plan: it grows out of its card
  let lastFocus = null;
  function openPlan(k, card) {
    closePlan(true);
    lastFocus = D.activeElement;
    const m = D.createElement('div'); m.className = 'x-modal';
    m.innerHTML = `<div class="xm-scrim"></div>${planScreenHTML(X(), dictLike(), k)}`;
    D.body.append(m); H.classList.add('x-modal-on');
    const panel = $('.xm-panel', m);
    if (card && panel.animate && !reduce) {
      const a = card.getBoundingClientRect(), b = panel.getBoundingClientRect();
      const sx = a.width / b.width, sy = a.height / b.height, dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2);
      panel.animate([{ transform: `translate(${dx}px,${dy}px) scale(${sx},${sy})`, opacity: .4 }, { transform: 'none', opacity: 1 }], { duration: 560, easing: 'cubic-bezier(.16,1,.3,1)' });
    }
    requestAnimationFrame(() => m.classList.add('on'));
    $('.xm-x', m).focus();
    $('.xm-x', m).addEventListener('click', () => closePlan());
    $('.xm-scrim', m).addEventListener('click', () => closePlan());
    $$('a[data-plan]', m).forEach((a) => a.addEventListener('click', (e) => {
      const hidden = $(`#plancards a[data-plan="${a.dataset.plan}"]`) || $('#plancards a');
      closePlan(true);
      if (hidden) { e.preventDefault(); hidden.click(); }
    }));
  }
  function closePlan(now) {
    const m = $('.x-modal'); if (!m) return;
    H.classList.remove('x-modal-on');
    if (now || reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('.x-modal')) closePlan(); });

  // the month toggle drives the meters and the plans switch
  D.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('#mtog button'); if (!b) return;
    monthPro = b.dataset.p === '1';
    decorateAreas();
    if (plansSet) plansSet(monthPro ? 'pro' : 'core', true);
  });

  // ---------- render; again after the bundle re-renders ----------
  const run = (fn) => { try { fn(); } catch (e) { console.warn('[usha-x]', e); } };
  function x3UI() { window.USHA_X3?.render(X().x3, X().x3Panels, lang()); }
  function x3Scroll() { window.USHA_X3?.scroll(); }
  function renderAll() { [x3UI, deckUI, liveHintsUI, wakeUI, compareUI, rolesUI, decorateAreas, legendUI, ctrlUI, guarUI, freeUI, faqUI, smallUI, noTranslate, fcardFit, findingsUI, plansUI].forEach(run); watch(); onScroll(); }
  const timers = new Map();
  const later = (fn) => { clearTimeout(timers.get(fn)); timers.set(fn, setTimeout(() => run(fn), 40)); };
  new MutationObserver(() => later(renderAll)).observe(H, { attributes: true, attributeFilter: ['lang'] });
  [['#areas', decorateAreas], ['#fbody', findingsUI], ['#cmp', compareUI], ['#roles', rolesUI], ['#faq', faqUI], ['.sick', sickUI], ['.alg b', smallUI]].forEach(([s, fn]) => {
    const el = $(s); if (el) new MutationObserver(() => later(fn)).observe(el, { childList: true });
  });
  addEventListener('scroll', onScrollQ, { passive: true });
  if ('serviceWorker' in navigator && location.protocol === 'https:') addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  addEventListener('resize', () => run(fcardFit));
  
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', renderAll); else renderAll();
})();

// Section 03. One transformed clip for the whole desk; no layout reads in a drag.
(() => {
  const D=document,H=D.documentElement,$=(s,r=D)=>r.querySelector(s),$$=(s,r=D)=>[...r.querySelectorAll(s)];
  const media=window.USHA_X3_MEDIA, reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const mp4=!!D.createElement('video').canPlayType('video/mp4; codecs="avc1.64001f,mp4a.40.2"');
  const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
  const saved={with:{time:0,heard:false},without:{time:0,heard:false}};
  let x=innerWidth<=900?35:50,lang='',copy,labels,board,live,side,rail,knob,clip,p7,controls,abort,resize,observers=[];
  let width=0,rects=[],dx=0,shift=0,raf=0,motion=0,gesture=null,teased=false,interacted=false,pingTimer;
  let active='without',sound=false,manual=false,ended=false,near=false,visible=0,blocked=false,error=false,playGeneration=0,gameVisible=false,pausedByUser=false;
  let chatObserver,chatChips;
  const duck=(on)=>window.USHA_AUDIO?.duck?.('x3-video',on);
  function preferences() {
    const c=navigator.connection;
    return {reducedMotion:reduced.matches,saveData:!!c?.saveData,network:c?.effectiveType||'4g'};
  }
  const previewAllowed=()=>{const p=preferences();return !p.reducedMotion&&!p.saveData&&p.network==='4g';};
  function stopMotion(){cancelAnimationFrame(motion);motion=0;}
  function input(){interacted=true;stopMotion();board?.classList.remove('x3-teasing');}
  function set(v){input();x=clamp(Number(v)||0);write();}
  function animate(v,ms=600,done){
    stopMotion();const start=x,t=performance.now(),target=clamp(v);
    if(reduced.matches){x=target;write();done?.();return;}
    function frame(now){const k=clamp((now-t)/ms,0,1);x=start+(target-start)*(1-Math.pow(1-k,3));write();if(k<1)motion=requestAnimationFrame(frame);else{motion=0;done?.();}}
    motion=requestAnimationFrame(frame);
  }
  function coverage(r){const seam=x/100*width;return clamp((seam-r.start)/r.width,0,1);}
  function write(){
    if(!board)return;
    const direction=lang==='ar'?-1:1;
    clip.style.transform=`translate3d(${(x-100)*direction}%,0,0)`;
    $('.x3-clip-in',board).style.transform=`translate3d(${(100-x)*direction}%,0,0)`;
    const px=(lang==='ar'?100-x:x)/100*width;
    $('.x3-seam',board).style.transform=`translate3d(${px}px,0,0)`;
    knob.style.setProperty('--x3-clamp',`${clamp(px,29,width-29)-px}px`);
    knob.setAttribute('aria-valuenow',String(Math.round(x)));knob.setAttribute('aria-valuetext',copy.b3_val.replace('{x}',Math.round(x)));
    $('.x3-label-on').style.opacity=String(Math.max(.4,x/100));$('.x3-label-off').style.opacity=String(Math.max(.4,1-x/100));
    $$('[data-x3-value]').forEach(b=>b.setAttribute('aria-pressed',String(Math.abs(x-Number(b.dataset.x3Value))<.01)));
    for(const r of rects)if(coverage(r)>.6&&!r.el.classList.contains('x3-won'))r.el.classList.add('x3-won');
    const r=rects.find(r=>r.el.dataset.panel==='7');const next=r&&coverage(r)>=.5?'with':'without';
    if(next!==active){const old=video();if(old){saved[active].time=old.currentTime;old.pause();}active=next;ended=false;error=false;syncMedia();}
  }
  function queueWrite(){if(!raf)raf=requestAnimationFrame(()=>{raf=0;write();});}
  function measure(){
    if(!board)return;
    const br=board.getBoundingClientRect();width=br.width;board.style.setProperty('--x3-travel',`${Math.max(0,br.height-90)}px`);
    // Read the untransformed grid, never the warm clipped layer.
    rects=$$('.x3-off .x3-p',board).map((off,i)=>{const r=off.getBoundingClientRect();return {el:$$('.x3-on .x3-p',board)[i],start:lang==='ar'?br.right-r.right:r.left-br.left,width:r.width};});
    const sr=side.getBoundingClientRect(),wr=$('#talk .wrap.talk').getBoundingClientRect();dx=wr.left+wr.width/2-(sr.left+sr.width/2-shift);
    write();scroll();
  }
  function scroll(){
    if(!live)return;
    const r=live.getBoundingClientRect(),k=1-Math.pow(1-clamp((innerHeight-r.top)/(.85*innerHeight),0,1),3);
    shift=innerWidth>900?k*dx:0;
    side.style.transform=innerWidth>900?`translate3d(${shift.toFixed(2)}px,${(-k*9).toFixed(3)}vh,0)`:'';
    live.classList.toggle('x3-arrived',k>.6);
    rail?.style.setProperty('--x3-chapter',r.top>innerHeight*.6?'.3333':r.bottom>innerHeight*.3?'.6667':'1');
  }
  function pointerDown(e){
    if(e.button!==0||e.target.closest('.x3-controls'))return;
    input();const r=board.getBoundingClientRect();
    gesture={id:e.pointerId,type:e.pointerType,startX:e.clientX,startY:e.clientY,from:x,rect:r,handle:!!e.target.closest('.x3-knob'),horizontal:false};
    if(e.pointerType!=='touch'||gesture.handle){board.setPointerCapture(e.pointerId);if(e.pointerType!=='touch')animate((lang==='ar'?r.right-e.clientX:e.clientX-r.left)/r.width*100,260);}
  }
  function pointerMove(e){
    const g=gesture;if(!g||g.id!==e.pointerId)return;
    const mx=e.clientX-g.startX,my=e.clientY-g.startY;
    if(g.type==='touch'&&!g.handle&&!g.horizontal){
      if(Math.abs(my)>8&&Math.abs(my)>Math.abs(mx)){gesture=null;return;}
      if(Math.abs(mx)<8||Math.abs(mx)<=1.5*Math.abs(my))return;
      g.horizontal=true;board.setPointerCapture(e.pointerId);
    }
    stopMotion();
    x=clamp(g.type==='touch'?g.from+mx/g.rect.width*100*(lang==='ar'?-1:1):(lang==='ar'?g.rect.right-e.clientX:e.clientX-g.rect.left)/g.rect.width*100);
    knob.style.setProperty('--x3-look',`${Math.sign(mx)*2}px`);queueWrite();
  }
  function pointerEnd(e){if(gesture?.id!==e.pointerId)return;gesture=null;if(board.hasPointerCapture(e.pointerId))board.releasePointerCapture(e.pointerId);knob.style.setProperty('--x3-look','0px');}
  function key(e){
    let v=x,step=e.shiftKey?20:5;
    if(e.key==='Home')v=0;else if(e.key==='End')v=100;
    else if(e.key==='PageUp')v+=20;else if(e.key==='PageDown')v-=20;
    else if(e.key==='ArrowRight')v+=step*(lang==='ar'?-1:1);else if(e.key==='ArrowLeft')v-=step*(lang==='ar'?-1:1);else return;
    e.preventDefault();set(v);
  }
  function video(){return board&&$(`.x3-v[data-film="${active}"]`,board);}
  function rendition(film){
    const list=Object.entries(media[film].renditions).sort((a,b)=>Number(a[0])-Number(b[0]));
    const format=(r)=>!mp4&&r.webm?r.webm:r;
    if(innerWidth<=900)return format((list.find(([n])=>n==='480')||list[0])[1]);
    if(innerWidth*devicePixelRatio>=1600&&!preferences().saveData&&media[film].renditions['1080'])return format(media[film].renditions['1080']);
    return format((list.filter(([n])=>Number(n)<=720).pop()||list[0])[1]);
  }
  function load(v){
    if(!v||v.getAttribute('src'))return;
    const film=v.dataset.film;v.src=rendition(film).url;
    v.addEventListener('loadedmetadata',()=>{v.style.setProperty('--ar',`${v.videoWidth}/${v.videoHeight}`);if(saved[film].restart){v.currentTime=0;saved[film].restart=false;}else if(saved[film].time)v.currentTime=Math.min(saved[film].time,v.duration||Infinity);},{once:true});
  }
  function posters(){if(near)$$('.x3-v',board).forEach(v=>{if(!v.poster)v.poster=media[v.dataset.film].poster;});}
  function pauseAll(){++playGeneration;$$('.x3-v',board).forEach(v=>v.pause());duck(false);}
  function updateControls(){
    if(!controls)return;const v=video(),ctl=copy.p7_ctl,duration=v?.duration||media[active].duration||0;
    const time=(n)=>`${Math.floor((n||0)/60)}:${String(Math.floor((n||0)%60)).padStart(2,'0')}`;
    $('.x3-play',controls).textContent=ended?ctl[7]:manual&&!v?.paused?ctl[1]:ctl[0]+(preferences().saveData?` · ${(rendition(active).bytes/1e6).toFixed(1)} MB`:'');
    const sb=$('.x3-sound',controls);sb.textContent=sound?ctl[3]:ctl[2];sb.setAttribute('aria-pressed',String(sound));
    $('.x3-now',controls).textContent=error?labels.notSupported:`${ctl[4]} ${copy[active==='with'?'b3_on':'b3_off']} · ${time(v?.currentTime)} / ${time(Math.round(duration))}`;
    $('.x3-progress i',controls).style.transform=`scaleX(${duration?(v?.currentTime||0)/duration:0})`;
    $$('[data-x3-watch]',controls).forEach(b=>{b.textContent=ended&&Number(b.dataset.x3Watch)===(active==='with'?0:100)?ctl[8]:ctl[Number(b.dataset.x3Watch)===0?5:6];});
  }
  function syncMedia(){
    if(!board)return;
    posters();const v=video(),generation=++playGeneration;
    $$('.x3-v',board).forEach(other=>{if(other!==v)other.pause();});
    const allowed=!blocked&&!D.hidden&&visible>=.2&&!ended&&!error;
    const play=allowed&&(manual||(visible>=.5&&!pausedByUser&&previewAllowed()));
    if(!play){v?.pause();duck(false);updateControls();return;}
    load(v);if(sound&&!saved[active].heard){saved[active].heard=true;saved[active].time=0;if(v.readyState)v.currentTime=0;else saved[active].restart=true;}v.muted=!sound;v.loop=!sound;duck(sound);
    const promise=v.play();promise?.catch(()=>{if(generation!==playGeneration)return;manual=false;duck(false);updateControls();});updateControls();
  }
  function userPlay(){
    input();const v=video();
    if(manual&&!v.paused&&!ended){manual=false;sound=false;pausedByUser=true;pauseAll();updateControls();return;}
    if(ended)v.currentTime=0;ended=false;error=false;pausedByUser=false;manual=true;sound=true;syncMedia();
  }
  function soundToggle(){
    input();sound=!sound;ended=false;error=false;pausedByUser=false;
    if(sound){manual=true;syncMedia();}
    else {manual=false;pausedByUser=true;pauseAll();updateControls();}
  }
  function guard(){
    const next=H.classList.contains('x-modal-on')||H.classList.contains('gaming')||gameVisible;
    if(next!==blocked){blocked=next;if(next){manual=false;sound=false;}syncMedia();}
  }
  function chatUI(){
    const chat=$('#chat'),chips=$('#ichips');if(!chat)return;chat.dataset.tag=copy.b1_tag;
    let next=$('.x3-next');if(!next){next=D.createElement('a');next.className='x3-next';next.href='#x3-live';chat.after(next);}next.textContent=copy.b1_next;
    const sync=()=>{
      next.hidden=!$('.move',chat);
      if(!$('.x3-cycle',chat)){const bar=D.createElement('span');bar.className='x3-cycle';bar.setAttribute('aria-hidden','true');bar.innerHTML='<i></i>';chat.append(bar);}
    };
    chatObserver?.disconnect();chatObserver=new MutationObserver(sync);chatObserver.observe(chat,{subtree:true,childList:true});sync();
    if(chips!==chatChips){chatChips=chips;chips?.addEventListener('pointerdown',()=>chat.classList.add('x3-held'),{passive:true});chips?.addEventListener('click',()=>{const bar=$('.x3-cycle i',chat);if(bar){bar.style.animation='none';requestAnimationFrame(()=>bar.style.animation='');}});}
    const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('x3-run',e.isIntersecting)),{threshold:0});io.observe(chat);observers.push(io);
  }
  function render(c,p,l){
    if(!media||!c)return;
    if(lang===l&&board?.isConnected){chatUI();return;}
    pauseAllSafe();abort?.abort();resize?.disconnect();observers.forEach(o=>o.disconnect());observers=[];stopMotion();
    const hint=$('#talk .hint');hint?.remove();
    lang=l;copy=c;labels=p;live=$('#x3-live');const split=$('#x3-split');side=$('#talk .side');
    if(!live||!split||!side)return;
    if(live.dataset.lang!==l){live.innerHTML=x3LiveHTML(c);live.dataset.lang=l;}
    if(split.dataset.lang!==l){split.innerHTML=x3SplitHTML(c,l,media,p);split.dataset.lang=l;}
    if(hint)$('.x3-hint-slot',live).append(hint);
    const watch=$('#talk .x3-watch');rail=$('.x3-rail');if(rail)rail.outerHTML=x3RailHTML(c);else $('.lead',watch)?.insertAdjacentHTML('afterend',x3RailHTML(c));rail=$('.x3-rail');
    board=$('.x3-board',split);knob=$('.x3-knob',board);clip=$('.x3-clip',board);p7=$('.x3-off .x3-p7',board);controls=$('.x3-controls',board);active='without';visible=0;near=false;error=false;blocked=H.classList.contains('x-modal-on');
    abort=new AbortController();const on=(el,event,fn,opts={})=>el.addEventListener(event,fn,{...opts,signal:abort.signal});
    on(board,'pointerdown',pointerDown);on(board,'pointermove',pointerMove);on(board,'pointerup',pointerEnd);on(board,'pointercancel',pointerEnd);on(knob,'keydown',key);
    $$('[data-x3-value],[data-x3-watch]').forEach(b=>on(b,'click',()=>{input();animate(Number(b.dataset.x3Value??b.dataset.x3Watch));}));
    on($('.x3-play',controls),'click',userPlay);on($('.x3-sound',controls),'click',soundToggle);
    // Capture pointerdown precedes the bundle's first pointerup/click sound enable.
    on(controls,'pointerdown',e=>{if(e.target.closest('.x3-play,.x3-sound'))duck(true);},{capture:true});
    on(controls,'keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.x3-play,.x3-sound'))duck(true);},{capture:true});
    $$('.x3-v',board).forEach(v=>{
      v.muted=!sound;
      on(v,'timeupdate',updateControls);on(v,'play',()=>{if(v!==video()||blocked||D.hidden||visible<.2){v.pause();return;}$$('.x3-v',board).forEach(o=>{if(o!==v)o.pause();});updateControls();});
      on(v,'pause',()=>{if(v===video()){duck(false);updateControls();}});
      on(v,'ended',()=>{ended=true;manual=false;duck(false);updateControls();});
      on(v,'error',()=>{if(v===video()){error=true;manual=false;duck(false);updateControls();}});
    });
    const loops=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.target===live)e.target.classList.toggle('x3-run',e.intersectionRatio>.15);
      else {board.classList.toggle('x3-vis',e.isIntersecting);if(e.isIntersecting&&!teased&&!interacted&&!reduced.matches){
        // Tall desks can never have 35% of their own area on a phone: use
        // 35% of the viewport's available desk area as the entry threshold.
        const visibleHeight=e.intersectionRect.height;if(visibleHeight>=Math.min(board.offsetHeight,innerHeight)*.35){teased=true;const initial=x;board.classList.add('x3-teasing');animate(initial+18,700,()=>animate(initial-10,600,()=>animate(initial,500)));board.classList.add('x3-teasing');setTimeout(()=>board?.classList.remove('x3-teasing'),2400);}
      }}
    }),{threshold:[0,.01,.15,.35,.5]});loops.observe(live);loops.observe(board);observers.push(loops);
    const post=new IntersectionObserver(es=>{near=es[0].isIntersecting;posters();},{rootMargin:'150% 0px'});post.observe(p7);observers.push(post);
    const films=new IntersectionObserver(es=>{visible=es[0].intersectionRatio;if(visible<.2){manual=false;sound=false;}syncMedia();},{threshold:[0,.2,.5,1]});films.observe(p7);observers.push(films);
    resize=new ResizeObserver(measure);resize.observe(board);resize.observe(live);measure();chatUI();
    D.dispatchEvent(new CustomEvent('usha:x3render'));
  }
  function pauseAllSafe(){if(board){$$('.x3-v',board).forEach(v=>saved[v.dataset.film].time=v.currentTime);pauseAll();}}
  function ping(){if(!live)return;clearTimeout(pingTimer);live.classList.remove('x3-ping');requestAnimationFrame(()=>live?.classList.add('x3-ping'));pingTimer=setTimeout(()=>live?.classList.remove('x3-ping'),1400);}
  D.addEventListener('visibilitychange',()=>{if(D.hidden){manual=false;sound=false;pauseAllSafe();}else syncMedia();});
  new MutationObserver(guard).observe(H,{attributes:true,attributeFilter:['class']});
  const gameObserver=new IntersectionObserver(es=>{gameVisible=es[0].isIntersecting;guard();});
  if($('#game'))gameObserver.observe($('#game'));
  reduced.addEventListener('change',syncMedia);navigator.connection?.addEventListener('change',syncMedia);
  window.USHA_X3={render,scroll,set,ping,state:()=>({x,active,sound,manual,visible,near,previewAllowed:previewAllowed(),preferences:preferences(),teased,interacted,playing:board?$$('.x3-v',board).filter(v=>!v.paused).length:0})};
})();

// Pure invitation helpers, shared by the browser bundle and the offline tests.
// Formatting is for display only; requests keep the visitor's input.
function formatInvitationCode(value) {
  const chars = value.replace(/[\s-]/g, '').toUpperCase();
  return chars.length > 3 ? chars.slice(0, 3) + '-' + chars.slice(3) : chars;
}

function validInvitationCode(value) {
  return /^[ABCDEFGHJKMNPQRTUVWXYZ2-9]{6}$/.test(value.replace(/[\s-]/g, '').toUpperCase());
}

function invitationCodeError(status, http) {
  if (http === 429) return 'toomany';
  if (!http || http >= 500) return 'unavailable';
  if (status === 'bot_check') return 'bot_check';
  if (status === 'code_required') return 'error';
  return 'unavailable';
}

// "Ask USHA live": a real conversation with USHA from the "Try her" section.
// An invitation code, a short form (who you are, your business, your market),
// then a brief and four questions answered by the USHA server. The NJO team (their company
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
  const PM_TG = 'https://t.me/njo_manager', PM_MAIL = 'darina@njobusinesssolutions.com';
  const STORE = 'usha-live';

  const T = {
    en: {
      cta_k: 'Live · a brief + 4 questions', cta_h: 'Consult your new <i>Marketing Director</i>.', cta_p: 'Brief her on your business, then ask four questions. Real answers on your market and your numbers.', cta_b: 'Ask USHA live',
      k: 'USHA · live', h: 'Your business. <b>Her answer.</b>', p: 'Tell her who she is talking to. Then brief her and ask up to 4 questions. Your project manager follows up on these details, so please use real ones.',
      name: 'Your name', email: 'Work email', phone: 'Mobile number', country: 'Country code', business: 'Business name', size: 'Business size', industry: 'Industry', market: 'Main market', team: 'Team code',
      team_hint: 'For the NJO team: unlimited testing.', team_open: 'Have a team code?',
      code_h: 'Enter your invitation code', code_label: 'Invitation code', code_submit: 'Continue',
      code_error: 'This code can’t be used. Check it or ask your NJO contact.',
      code_toomany: 'Too many tries. Please wait a little and try again.',
      code_unavailable: 'We can’t check your code right now. Please try again in a moment.',
      code_contact: 'Don’t have a code? Ask your NJO contact.', expired_h: 'Your invitation has ended.',
      sizes: {"solo": "Just me / under 5", "2-10": "2–10 people", "11-50": "11–50 people", "51-200": "51–200 people", "201-500": "201–500 people", "501-1000": "501–1,000 people", "1001-5000": "1,001–5,000 people", "5000+": "5,000+ people"},
      industries: [["FMCG & food", {"fmcg-sweets": "Sweets, chocolate & dates", "fmcg-snacks": "Food & snacks", "fmcg-drinks": "Drinks", "fmcg-dairy": "Dairy", "fmcg-household": "Household & cleaning", "fmcg-personal": "Personal care"}], ["Beauty & lifestyle", {"beauty": "Beauty & cosmetics", "perfume": "Perfume & oud", "fashion": "Fashion, footwear & accessories", "jewelry": "Jewellery & watches", "kids": "Kids & toys", "home": "Home & furniture", "electronics": "Electronics & gadgets", "pharma": "Pharmacy & health products", "pets": "Pet products", "sports": "Sports & outdoor"}], ["Retail & e-commerce", {"marketplace-sellers": "Marketplace seller (WB, Ozon, noon, Amazon)", "ecommerce": "E-commerce brand (own store)", "grocery": "Grocery & supermarkets", "retail-chain": "Retail chain", "distribution": "Distribution & wholesale"}], ["Food service & hospitality", {"cafes-restaurants": "Café or restaurant", "bakery": "Bakery, patisserie, sweets shop", "cloud-kitchen": "Cloud kitchen & delivery", "hospitality": "Hotels & tourism"}], ["Property & auto", {"real-estate": "Real estate developer", "real-estate-broker": "Real estate brokerage", "auto-dealers": "Auto dealer", "auto-services": "Auto services & parts"}], ["Services & B2B", {"clinics": "Clinics & medical centres", "education": "Education & training", "fitness": "Gyms & fitness", "salons": "Salons & spas", "events": "Events & weddings", "services": "Agency / professional services", "tech": "Tech, SaaS & apps", "manufacturing": "Manufacturing & B2B"}], ["—", {"other": "Other"}]], other_cc: 'Other (+ code)',
      markets: { uae: 'UAE', ksa: 'Saudi Arabia', egypt: 'Egypt', russia: 'Russia', kuwait: 'Kuwait', qatar: 'Qatar', bahrain: 'Bahrain', oman: 'Oman', other: 'Other' },
      pick: 'Choose…', consent: 'By starting you agree that NJO may contact you about USHA on these details.', start: 'Start the conversation', checking: 'Checking…',
      left: (n) => (n === 1 ? '1 question left' : `${n} questions left`), unlimited: 'Team · unlimited', you: 'You', ask: 'Ask about your business…', send: 'Send',
      reading: 'Reading your market', intro: (n) => `Hello ${n}, I’m **USHA**, your Marketing Director. You can take a consultation from me now.\n\nTell me your brief the way you would brief a new Marketing Director joining your team: what you sell, to whom, where, your numbers, and what you want fixed. The more accurate you are, the better our work will go.`,
      brief_pill: 'Your brief · then 4 questions', brief_ph: 'Write your brief…',
      done_h: 'That was your fourth question.', done_p: 'Your project manager has this conversation and will contact you. Want to start sooner?',
      back_h: (n) => `I remember you, ${n}.`, back_p: 'We’ve talked before. Let’s continue with your project manager: they have our conversation and will take it from here.',
      tg: 'Write on Telegram', mail: 'Email the manager', copy: 'Copy email', copied: 'Copied', free: 'Start the free week',
      locked_h: 'This consultation is closed.', locked_p: 'We drifted off the business a few times. Your project manager will continue with you.',
      used_h: 'This network already had its consultation.', used_p: 'One free consultation per office or home network. Let’s continue with a project manager.',
      region_h: 'The live consultation isn’t open in your region yet.', region_p: 'Our team will gladly talk to you directly.',
      private_h: 'Please open usha.one in a normal window.', private_p: 'The live consultation doesn’t run in private or incognito mode. Open the site in a regular browser window and come back.',
      bot_h: 'This browser looks automated.', bot_p: 'The live consultation is for people. Please open usha.one in your usual browser.',
      device_h: 'Please open this on the device you registered on.', device_p: 'Your consultation is tied to the browser you started it in.',
      team_link: 'NJO team? Continue', loading: 'One moment…',
      err: {
        required: 'Please fill this in.', name_len: 'Use 2–60 letters.', name_chars: 'Letters only, please.', name_fake: 'Please enter your real name.',
        biz_len: 'Use 2–80 characters.', biz_chars: 'The name only, no links.', biz_fake: 'Please enter your real business name.',
        email_bad: 'This email doesn’t look right.', email_typo: 'Did you mean {s}?', email_temp: 'Temporary inboxes can’t be used. Please use your real email.', email_fake: 'Please use your real email.', email_domain: 'This email domain doesn’t receive mail.',
        phone_plus: 'For another country, start with + and the country code.', phone_mobile: 'Please enter a mobile number, not a landline.', phone_region: 'Numbers from this country can’t be used here.', phone_bad: 'This isn’t a valid number for the chosen country.', phone_fake: 'Please enter your real number.', phone_country: 'Choose a country code.',
        team_code_needed: 'Enter the team code.', team_code_bad: 'The team code isn’t right.',
        bot_check: 'Please complete the check above and try again.', slow_down: 'Too many tries. Please wait a little and try again.', busy: 'USHA is very busy right now. Please try again in a few minutes.',
        failed: 'Something went wrong on our side. Your question wasn’t counted. Please send it again.', cut: 'The answer was cut off. Your question wasn’t counted. Please send it again.', net: 'No connection. Please check your internet and try again.',
        too_long: 'Please keep it under 1,500 characters.', region: 'The live consultation isn’t open in your region yet.', private: 'Please use a normal browser window, not private mode.', device: 'Please continue on the device you registered on.',
      },
      close: 'Close',
    },
    ru: {
      cta_k: 'Вживую · бриф + 4 вопроса', cta_h: 'Консультация вашего нового <i>директора по маркетингу</i>.', cta_p: 'Расскажите о бизнесе и задайте четыре вопроса. Настоящие ответы про ваш рынок и ваши цифры.', cta_b: 'Спросить USHA',
      k: 'USHA · вживую', h: 'Ваш бизнес. <b>Её ответ.</b>', p: 'Расскажите, с кем она говорит. Потом дайте ей бриф и задайте до 4 вопросов. Менеджер проекта свяжется с вами по этим данным, поэтому укажите настоящие.',
      name: 'Ваше имя', email: 'Рабочий email', phone: 'Мобильный номер', country: 'Код страны', business: 'Название бизнеса', size: 'Размер бизнеса', industry: 'Сфера', market: 'Основной рынок', team: 'Код команды',
      team_hint: 'Для команды NJO: безлимитный тест.', team_open: 'Есть код команды?',
      code_h: 'Введите код приглашения', code_label: 'Код приглашения', code_submit: 'Продолжить',
      code_error: 'Этот код не подходит. Проверьте его или обратитесь к вашему контакту в NJO.',
      code_toomany: 'Слишком много попыток. Подождите немного и попробуйте снова.',
      code_unavailable: 'Сейчас не получается проверить код. Попробуйте чуть позже.',
      code_contact: 'Нет кода? Обратитесь к вашему контакту в NJO.', expired_h: 'Срок вашего приглашения закончился.',
      sizes: {"solo": "Только я / до 5", "2-10": "2–10 человек", "11-50": "11–50 человек", "51-200": "51–200 человек", "201-500": "201–500 человек", "501-1000": "501–1 000 человек", "1001-5000": "1 001–5 000 человек", "5000+": "5 000+ человек"},
      industries: [["FMCG и продукты", {"fmcg-sweets": "Сладости, шоколад, финики", "fmcg-snacks": "Продукты и снеки", "fmcg-drinks": "Напитки", "fmcg-dairy": "Молочная продукция", "fmcg-household": "Бытовая химия и товары для дома", "fmcg-personal": "Средства личной гигиены"}], ["Красота и lifestyle", {"beauty": "Косметика и уход", "perfume": "Парфюмерия", "fashion": "Одежда, обувь, аксессуары", "jewelry": "Ювелирные изделия и часы", "kids": "Детские товары и игрушки", "home": "Дом и мебель", "electronics": "Электроника и гаджеты", "pharma": "Аптека и товары для здоровья", "pets": "Товары для животных", "sports": "Спорт и отдых"}], ["Ритейл и e-commerce", {"marketplace-sellers": "Селлер на маркетплейсах (WB, Ozon, Яндекс Маркет)", "ecommerce": "Бренд со своим интернет-магазином", "grocery": "Продуктовые магазины и супермаркеты", "retail-chain": "Розничная сеть", "distribution": "Дистрибуция и опт"}], ["Общепит и гостеприимство", {"cafes-restaurants": "Кафе или ресторан", "bakery": "Пекарня, кондитерская", "cloud-kitchen": "Дарк-китчен и доставка", "hospitality": "Отели и туризм"}], ["Недвижимость и авто", {"real-estate": "Застройщик", "real-estate-broker": "Агентство недвижимости", "auto-dealers": "Автодилер", "auto-services": "Автосервис и запчасти"}], ["Услуги и B2B", {"clinics": "Клиники и медцентры", "education": "Образование и обучение", "fitness": "Фитнес-клубы", "salons": "Салоны красоты и спа", "events": "Мероприятия и свадьбы", "services": "Агентство / профессиональные услуги", "tech": "IT, SaaS и приложения", "manufacturing": "Производство и B2B"}], ["—", {"other": "Другое"}]], other_cc: 'Другая (+ код)',
      markets: { uae: 'ОАЭ', ksa: 'Саудовская Аравия', egypt: 'Египет', russia: 'Россия', kuwait: 'Кувейт', qatar: 'Катар', bahrain: 'Бахрейн', oman: 'Оман', other: 'Другое' },
      pick: 'Выберите…', consent: 'Начиная, вы соглашаетесь, что NJO может связаться с вами по поводу USHA по этим данным.', start: 'Начать разговор', checking: 'Проверяем…',
      left: (n) => `${n} ${n === 1 ? 'вопрос' : n < 5 ? 'вопроса' : 'вопросов'} осталось`, unlimited: 'Команда · безлимит', you: 'Вы', ask: 'Спросите о своём бизнесе…', send: 'Отправить',
      reading: 'Читаю ваш рынок', intro: (n) => `Здравствуйте, ${n}. Я **USHA**, ваш директор по маркетингу. Сейчас вы можете получить у меня консультацию.\n\nРасскажите мне бриф так, как если бы вы брали в команду нового директора по маркетингу: что продаёте, кому, где, ваши цифры и что нужно исправить. Чем точнее, тем лучше пойдёт наша работа.`,
      brief_pill: 'Ваш бриф · потом 4 вопроса', brief_ph: 'Напишите ваш бриф…',
      done_h: 'Это был четвёртый вопрос.', done_p: 'Ваш менеджер проекта видит этот разговор и свяжется с вами. Хотите начать раньше?',
      back_h: (n) => `Я вас помню, ${n}.`, back_p: 'Мы уже разговаривали. Продолжим с вашим менеджером проекта: у него есть наш разговор, дальше он всё возьмёт на себя.',
      tg: 'Написать в Telegram', mail: 'Написать менеджеру', copy: 'Скопировать email', copied: 'Скопировано', free: 'Начать бесплатную неделю',
      locked_h: 'Консультация закрыта.', locked_p: 'Мы несколько раз ушли от бизнеса. Дальше с вами продолжит менеджер проекта.',
      used_h: 'С этой сети консультация уже была.', used_p: 'Одна бесплатная консультация на офисную или домашнюю сеть. Продолжим с менеджером проекта.',
      region_h: 'В вашем регионе живая консультация пока недоступна.', region_p: 'Наша команда с радостью поговорит с вами напрямую.',
      private_h: 'Откройте usha.one в обычном окне.', private_p: 'Живая консультация не работает в режиме инкогнито. Откройте сайт в обычном окне браузера и возвращайтесь.',
      bot_h: 'Похоже, браузер управляется автоматически.', bot_p: 'Живая консультация — для людей. Откройте usha.one в своём обычном браузере.',
      device_h: 'Продолжите на устройстве, где вы регистрировались.', device_p: 'Консультация привязана к браузеру, в котором вы её начали.',
      team_link: 'Команда NJO? Продолжить', loading: 'Секунду…',
      err: {
        required: 'Заполните, пожалуйста.', name_len: 'От 2 до 60 букв.', name_chars: 'Только буквы, пожалуйста.', name_fake: 'Укажите настоящее имя.',
        biz_len: 'От 2 до 80 символов.', biz_chars: 'Только название, без ссылок.', biz_fake: 'Укажите настоящее название бизнеса.',
        email_bad: 'Похоже, в email ошибка.', email_typo: 'Может быть, {s}?', email_temp: 'Временные ящики не подходят. Укажите свой настоящий email.', email_fake: 'Укажите свой настоящий email.', email_domain: 'Этот почтовый домен не принимает письма.',
        phone_plus: 'Для другой страны начните с + и кода страны.', phone_mobile: 'Укажите мобильный номер, не городской.', phone_region: 'Номера этой страны здесь не принимаются.', phone_bad: 'Это не похоже на номер выбранной страны.', phone_fake: 'Укажите настоящий номер.', phone_country: 'Выберите код страны.',
        team_code_needed: 'Введите код команды.', team_code_bad: 'Неверный код команды.',
        bot_check: 'Пройдите проверку выше и попробуйте снова.', slow_down: 'Слишком много попыток. Подождите немного.', busy: 'Сейчас у USHA очень много разговоров. Попробуйте через несколько минут.',
        failed: 'Что-то пошло не так на нашей стороне. Вопрос не засчитан, отправьте его ещё раз.', cut: 'Ответ оборвался. Вопрос не засчитан, отправьте его ещё раз.', net: 'Нет соединения. Проверьте интернет и попробуйте снова.',
        too_long: 'Не больше 1 500 символов, пожалуйста.', region: 'В вашем регионе живая консультация пока недоступна.', private: 'Откройте сайт в обычном окне, не в режиме инкогнито.', device: 'Продолжите на устройстве, где вы регистрировались.',
      },
      close: 'Закрыть',
    },
    ar: {
      cta_k: 'مباشر · brief + ٤ أسئلة', cta_h: 'استشر <i>مديرة التسويق</i> الجديدة لديك.', cta_p: 'عرّفها على نشاطك ثم اسأل أربعة أسئلة. إجابات حقيقية عن سوقك وأرقامك.', cta_b: 'اسأل USHA مباشرة',
      k: 'USHA · مباشر', h: 'نشاطك. <b>وإجابتها.</b>', p: 'عرّفها بمن تتحدث معه، ثم اكتب لها الـbrief واسأل حتى ٤ أسئلة. مدير المشروع سيتواصل معك على هذه البيانات، فاكتب بياناتك الحقيقية.',
      name: 'اسمك', email: 'البريد الإلكتروني للعمل', phone: 'رقم الجوال', country: 'رمز الدولة', business: 'اسم النشاط التجاري', size: 'حجم النشاط', industry: 'القطاع', market: 'السوق الرئيسي', team: 'رمز الفريق',
      team_hint: 'لفريق NJO: تجربة بلا حدود.', team_open: 'لديك رمز الفريق؟',
      code_h: 'أدخل رمز دعوتك', code_label: 'رمز الدعوة', code_submit: 'متابعة',
      code_error: 'لا يمكن استخدام هذا الرمز. راجعه أو اسأل جهة اتصالك في NJO.',
      code_toomany: 'محاولات كثيرة. يرجى الانتظار قليلاً ثم المحاولة مجدداً.',
      code_unavailable: 'لا يمكننا التحقق من رمزك الآن. يرجى المحاولة بعد قليل.',
      code_contact: 'ليس لديك رمز؟ اسأل جهة اتصالك في NJO.', expired_h: 'انتهت مدة دعوتك.',
      sizes: {"solo": "أنا فقط / أقل من ٥", "2-10": "٢–١٠ أشخاص", "11-50": "١١–٥٠ شخصاً", "51-200": "٥١–٢٠٠ شخص", "201-500": "٢٠١–٥٠٠ شخص", "501-1000": "٥٠١–١٠٠٠ شخص", "1001-5000": "١٠٠١–٥٠٠٠ شخص", "5000+": "أكثر من ٥٠٠٠ شخص"},
      industries: [["السلع الاستهلاكية والأغذية", {"fmcg-sweets": "حلويات وشوكولاتة وتمور", "fmcg-snacks": "أغذية وسناكس", "fmcg-drinks": "مشروبات", "fmcg-dairy": "ألبان", "fmcg-household": "منظفات ومنتجات منزلية", "fmcg-personal": "عناية شخصية"}], ["التجميل ونمط الحياة", {"beauty": "تجميل ومستحضرات", "perfume": "عطور وعود", "fashion": "أزياء وأحذية وإكسسوارات", "jewelry": "مجوهرات وساعات", "kids": "منتجات أطفال وألعاب", "home": "منزل وأثاث", "electronics": "إلكترونيات وأجهزة", "pharma": "صيدلية ومنتجات صحية", "pets": "منتجات الحيوانات الأليفة", "sports": "رياضة وأنشطة خارجية"}], ["التجزئة والتجارة الإلكترونية", {"marketplace-sellers": "بائع على المتاجر الإلكترونية (نون، أمازون…)", "ecommerce": "علامة تجارية بمتجر إلكتروني خاص", "grocery": "بقالات وسوبرماركت", "retail-chain": "سلسلة متاجر", "distribution": "توزيع وجملة"}], ["المطاعم والضيافة", {"cafes-restaurants": "مقهى أو مطعم", "bakery": "مخبز أو محل حلويات", "cloud-kitchen": "مطبخ سحابي وتوصيل", "hospitality": "فنادق وسياحة"}], ["العقارات والسيارات", {"real-estate": "مطور عقاري", "real-estate-broker": "وساطة عقارية", "auto-dealers": "وكيل سيارات", "auto-services": "خدمات وقطع غيار السيارات"}], ["الخدمات والأعمال", {"clinics": "عيادات ومراكز طبية", "education": "تعليم وتدريب", "fitness": "نوادٍ رياضية", "salons": "صالونات وسبا", "events": "فعاليات وأعراس", "services": "وكالة / خدمات مهنية", "tech": "تقنية وتطبيقات", "manufacturing": "تصنيع وB2B"}], ["—", {"other": "أخرى"}]], other_cc: 'أخرى (+ الرمز)',
      markets: { uae: 'الإمارات', ksa: 'السعودية', egypt: 'مصر', russia: 'روسيا', kuwait: 'الكويت', qatar: 'قطر', bahrain: 'البحرين', oman: 'عُمان', other: 'أخرى' },
      pick: 'اختر…', consent: 'بالبدء توافق على أن تتواصل معك NJO بخصوص USHA على هذه البيانات.', start: 'ابدأ المحادثة', checking: 'جارٍ التحقق…',
      left: (n) => (n === 1 ? 'بقي سؤال واحد' : n === 2 ? 'بقي سؤالان' : `بقي ${n} أسئلة`), unlimited: 'الفريق · بلا حدود', you: 'أنت', ask: 'اسأل عن نشاطك…', send: 'إرسال',
      reading: 'أقرأ سوقك', intro: (n) => `أهلاً ${n}، أنا **USHA**، مديرة التسويق لديك. يمكنك الآن أن تأخذ مني استشارة.\n\nاكتب لي الـbrief كما لو كنت تعيّن مديراً جديداً للتسويق أو عضواً جديداً في فريقك: ماذا تبيع، لمن، أين، أرقامك، وما الذي تريد إصلاحه. كلما كنت أدق، كان عملنا أفضل.`,
      brief_pill: 'الـbrief أولاً · ثم ٤ أسئلة', brief_ph: 'اكتب الـbrief هنا…',
      done_h: 'كان هذا سؤالك الرابع.', done_p: 'مدير مشروعك لديه هذه المحادثة وسيتواصل معك. تحب تبدأ أسرع؟',
      back_h: (n) => `أتذكرك يا ${n}.`, back_p: 'تحدثنا من قبل. لنكمل مع مدير مشروعك: لديه محادثتنا وسيتابع معك من هنا.',
      tg: 'راسلنا على تيليجرام', mail: 'راسل المدير بالبريد', copy: 'انسخ البريد', copied: 'تم النسخ', free: 'ابدأ الأسبوع المجاني',
      locked_h: 'تم إغلاق هذه الاستشارة.', locked_p: 'ابتعدنا عن العمل أكثر من مرة. مدير مشروعك سيتابع معك.',
      used_h: 'هذه الشبكة استخدمت استشارتها بالفعل.', used_p: 'استشارة مجانية واحدة لكل شبكة مكتب أو منزل. لنكمل مع مدير مشروع.',
      region_h: 'الاستشارة المباشرة غير متاحة في منطقتك حالياً.', region_p: 'فريقنا سيسعد بالتحدث معك مباشرة.',
      private_h: 'افتح usha.one في نافذة عادية.', private_p: 'الاستشارة المباشرة لا تعمل في وضع التصفح الخاص أو المتخفي. افتح الموقع في نافذة متصفح عادية ثم عد.',
      bot_h: 'يبدو أن هذا المتصفح آلي.', bot_p: 'الاستشارة المباشرة للأشخاص. افتح usha.one في متصفحك المعتاد.',
      device_h: 'أكمل على الجهاز الذي سجلت منه.', device_p: 'استشارتك مرتبطة بالمتصفح الذي بدأتها فيه.',
      team_link: 'فريق NJO؟ تابع', loading: 'لحظة…',
      err: {
        required: 'يرجى تعبئة هذا الحقل.', name_len: 'من حرفين إلى ٦٠ حرفاً.', name_chars: 'حروف فقط من فضلك.', name_fake: 'يرجى كتابة اسمك الحقيقي.',
        biz_len: 'من حرفين إلى ٨٠ حرفاً.', biz_chars: 'الاسم فقط بدون روابط.', biz_fake: 'يرجى كتابة اسم نشاطك الحقيقي.',
        email_bad: 'يبدو أن البريد غير صحيح.', email_typo: 'هل تقصد {s}؟', email_temp: 'لا يمكن استخدام بريد مؤقت. يرجى استخدام بريدك الحقيقي.', email_fake: 'يرجى استخدام بريدك الحقيقي.', email_domain: 'هذا النطاق لا يستقبل البريد.',
        phone_plus: 'لدولة أخرى ابدأ بـ + ورمز الدولة.', phone_mobile: 'يرجى إدخال رقم جوال وليس رقماً أرضياً.', phone_region: 'لا يمكن استخدام أرقام هذه الدولة هنا.', phone_bad: 'الرقم غير صحيح للدولة المختارة.', phone_fake: 'يرجى كتابة رقمك الحقيقي.', phone_country: 'اختر رمز الدولة.',
        team_code_needed: 'أدخل رمز الفريق.', team_code_bad: 'رمز الفريق غير صحيح.',
        bot_check: 'أكمل التحقق أعلاه ثم حاول مجدداً.', slow_down: 'محاولات كثيرة. انتظر قليلاً ثم حاول مجدداً.', busy: 'USHA مشغولة جداً الآن. حاول بعد دقائق.',
        failed: 'حدث خطأ من جهتنا ولم يُحتسب سؤالك. أرسله مرة أخرى.', cut: 'انقطعت الإجابة ولم يُحتسب سؤالك. أرسله مرة أخرى.', net: 'لا يوجد اتصال. تحقق من الإنترنت وحاول مجدداً.',
        too_long: 'أقل من ١٥٠٠ حرف من فضلك.', region: 'الاستشارة المباشرة غير متاحة في منطقتك حالياً.', private: 'استخدم نافذة عادية وليس التصفح الخاص.', device: 'أكمل على الجهاز الذي سجلت منه.',
      },
      close: 'إغلاق',
    },
  };
  const L = () => T[H.lang] || T.en;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // country codes for the phone, main markets first
  // country codes for the phone: the markets USHA serves, then "another country (+ code)"
  const CC = [['AE', '971', '50 123 4567'], ['SA', '966', '55 123 4567'], ['EG', '20', '10 1234 5678'], ['RU', '7', '912 345-67-89'], ['KW', '965', '500 12345'], ['QA', '974', '3312 3456'], ['BH', '973', '3600 1234'], ['OM', '968', '9212 3456'], ['JO', '962', '7 9012 3456'], ['LB', '961', '71 123 456'], ['IQ', '964', '791 234 5678'], ['MA', '212', '650-123456'], ['KZ', '7', '701 234 5678'], ['TR', '90', '501 234 56 78'], ['GB', '44', '7400 123456'], ['US', '1', '201 555 0123'], ['XX', '', '+44 7400 123456']];
  const ccSample = (c) => (CC.find((x) => x[0] === c) || CC[0])[2];
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

  // ---------- this device ----------
  // A random id kept in this browser plus a hash of how the browser looks. The
  // server allows one free consultation per device and binds the session to it.
  let devP = null;
  function device() {
    return devP ||= (async () => {
      let id = '';
      try { id = localStorage.getItem('usha-device') || ''; } catch {}
      if (!/^[a-z0-9-]{16,64}$/i.test(id)) {
        id = (crypto.randomUUID ? crypto.randomUUID() : Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join(''));
        try { localStorage.setItem('usha-device', id); } catch {}
      }
      const parts = [navigator.userAgent, (navigator.languages || []).join(','), Intl.DateTimeFormat().resolvedOptions().timeZone, screen.width + 'x' + screen.height + 'x' + screen.colorDepth, devicePixelRatio, navigator.hardwareConcurrency, navigator.deviceMemory, navigator.platform];
      try {
        const c = D.createElement('canvas'); c.width = 220; c.height = 40;
        const g = c.getContext('2d'); g.textBaseline = 'top'; g.font = '16px Arial'; g.fillStyle = '#f60'; g.fillRect(0, 0, 220, 40); g.fillStyle = '#069'; g.fillText('USHA · مرحبا · Привет 🍫', 4, 10);
        parts.push(c.toDataURL());
        const gl = D.createElement('canvas').getContext('webgl'), ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
        if (ext) parts.push(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL), gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      } catch {}
      let fp = '';
      try { fp = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts.join('|')))), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 40); } catch {}
      return { id, fp };
    })();
  }

  // Private / incognito windows: each browser gives itself away differently
  // (the same checks the detectIncognito library uses). A heuristic, not proof.
  async function privateWindow() {
    try {
      localStorage.setItem('usha-probe', '1'); localStorage.removeItem('usha-probe');
      const ua = navigator.userAgent;
      const firefox = /Firefox|FxiOS/.test(ua), safari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Android/.test(ua);
      if (firefox && !navigator.serviceWorker) return true;
      if (navigator.storage && navigator.storage.getDirectory) {
        try { await navigator.storage.getDirectory(); } catch (e) { if (/unknown transient|security/i.test(String((e && e.message) || e))) return true; }
      }
      if (!firefox && !safari && navigator.storage && navigator.storage.estimate) {
        const { quota } = await navigator.storage.estimate();
        const heap = (performance.memory && performance.memory.jsHeapSizeLimit) || 1073741824;
        if (quota && quota < heap * 2) return true;
      }
      return false;
    } catch { return true; }
  }

  // ---------- her sounds ----------
  // Small synthesized chimes: opening, asking you something, answering. They
  // follow the site's sound switch: silent only if the visitor turned sound off.
  let ac = null;
  const soundOn = () => { try { return localStorage.getItem('usha-sound') !== 'off'; } catch { return true; } };
  function chime(kind) {
    if (!soundOn()) return;
    try {
      ac ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      const notes = { open: [523.25, 659.25, 783.99, 1046.5], ask: [659.25, 987.77], answer: [783.99, 659.25, 523.25], send: [1318.5] }[kind];
      const t0 = ac.currentTime + 0.02, step = kind === 'send' ? 0 : 0.085;
      notes.forEach((f, i) => {
        const o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain();
        o.type = 'sine'; o2.type = 'triangle'; o.frequency.value = f; o2.frequency.value = f * 2;
        const t = t0 + i * step, peak = kind === 'send' ? 0.03 : 0.07, len = kind === 'send' ? 0.12 : 0.55;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
        const g2 = ac.createGain(); g2.gain.value = 0.18;
        o.connect(g); o2.connect(g2); g2.connect(g); g.connect(ac.destination);
        o.start(t); o2.start(t); o.stop(t + len + 0.05); o2.stop(t + len + 0.05);
      });
    } catch {}
  }

  // ---------- server ----------
  async function api(path, { body, token, method = body ? 'POST' : 'GET' } = {}) {
    const dev = await device();
    const r = await fetch(API + path, {
      method,
      headers: { ...(body ? { 'content-type': 'application/json' } : {}), ...(token ? { authorization: 'Bearer ' + token } : {}), 'x-usha-device': dev.id },
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
  let modal = null, lastFocus = null, state = { token: '', name: '', left: null, team: false, brief: false, busy: false, code: '', teamEntry: false };

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
    window.USHA_AUDIO?.duck?.('live', true);
    lastFocus = D.activeElement;
    modal = D.createElement('div');
    modal.className = 'x-modal x-live';
    modal.innerHTML = shell('');
    D.body.append(modal);
    H.classList.add('x-modal-on');
    requestAnimationFrame(() => modal && modal.classList.add('on'));
    $('.xm-x', modal).addEventListener('click', close);
    $('.xm-scrim', modal).addEventListener('click', close);
    chime('open');
    start();
  }
  // before anything: a person, in a normal window, in a country where it's open
  async function start() {
    const x = L();
    view().innerHTML = `<p class="xl-wait">${esc(x.loading)}</p>`;
    if (navigator.webdriver) { notice(x.bot_h, x.bot_p); return; }
    if (await privateWindow()) { notice(x.private_h, x.private_p); return; }
    if (!modal) return;
    const saved = store.get();
    if (saved.token) { resume(saved.token); return; }
    let hi = {};
    try { hi = await api('/api/hello'); } catch {}
    if (!modal) return;
    if (hi.region === 'blocked') { handoff(x.region_h, x.region_p, view(), { free: false, team: true }); return; }
    codeView();
  }
  function notice(title, text) { handoff(title, text, view(), { contacts: false, free: false }); }
  function close() {
    if (!modal) return;
    window.USHA_AUDIO?.duck?.('live', false);
    const m = modal; modal = null; tsId = null;
    state.code = ''; state.teamEntry = false;
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
    el.textContent = state.team ? x.unlimited : state.brief ? x.left(state.left) : x.brief_pill;
    el.classList.toggle('low', !state.team && state.left <= 1);
  }

  // ---------- 1. the invitation, then the existing registration form ----------
  function codeView(error = '', prefill = {}) {
    const x = L();
    state.code = ''; state.teamEntry = false;
    $('.xl-left', modal).hidden = true;
    view().innerHTML = `<form class="xl-form xl-code" data-testid="code-step" aria-labelledby="xl-code-title" novalidate>
      <h4 id="xl-code-title" data-testid="code-title">${esc(x.code_h)}</h4>
      <div class="xl-f"><label for="xl-code" data-testid="code-label">${esc(x.code_label)}</label>
        <input id="xl-code" name="code" data-testid="code-input" type="text" dir="ltr" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="ABC-234" aria-describedby="xl-code-contact" required>
      </div>
      <div class="xl-ts" data-testid="code-check"></div>
      <div aria-live="polite" aria-atomic="true">
        <p id="xl-code-error" class="xl-e" data-testid="code-error" hidden>${esc(x.code_error)}</p>
        <p id="xl-code-toomany" class="xl-e" data-testid="code-toomany" hidden>${esc(x.code_toomany)}</p>
        <p id="xl-code-unavailable" class="xl-e" data-testid="code-unavailable" hidden>${esc(x.code_unavailable)}</p>
        <p id="xl-code-bot-error" class="xl-e" data-testid="code-bot-error" hidden>${esc(x.err.bot_check)}</p>
      </div>
      <div class="xl-go"><button class="btn btn-p" type="submit" data-testid="code-submit"><span class="d"></span><span>${esc(x.code_submit)}</span></button></div>
      <p id="xl-code-contact" class="xl-code-contact" data-testid="code-contact-line">${esc(x.code_contact)}</p>
      <button type="button" class="xl-team-open" data-testid="code-team-link">${esc(x.team_open)}</button>
    </form>`;
    const f = $('form', view()), input = f.elements.code, btn = $('[type=submit]', f), teamBtn = $('.xl-team-open', f);
    let typedCode = '', checking = false;
    const show = (kind) => {
      for (const k of ['error', 'toomany', 'unavailable', 'bot-error']) $(`#xl-code-${k}`, f).hidden = k !== kind;
      input.setAttribute('aria-invalid', kind === 'error' ? 'true' : 'false');
      input.setAttribute('aria-describedby', (kind ? `xl-code-${kind} ` : '') + 'xl-code-contact');
      $('.xl-f', f).classList.toggle('bad', kind === 'error');
    };
    show(error);
    input.addEventListener('input', () => {
      typedCode = input.value;
      const start = input.selectionStart ?? input.value.length;
      const before = input.value.slice(0, start).replace(/[\s-]/g, '').length;
      const caret = before + (before > 3 || (before === 3 && start > 3) ? 1 : 0);
      input.value = formatInvitationCode(input.value);
      input.setSelectionRange(caret, caret);
      show('');
    });
    teamBtn.addEventListener('click', () => formView(prefill, { team: true }));
    f.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (checking) return;
      // Keep the input as typed for both requests; only its display is formatted.
      const code = typedCode || input.value;
      if (!validInvitationCode(code)) { show('error'); input.focus(); return; }
      checking = true; btn.disabled = true; input.disabled = true; teamBtn.disabled = true;
      f.setAttribute('aria-busy', 'true'); btn.lastElementChild.textContent = x.checking; show('');
      let r;
      try {
        const dev = await device();
        r = await api('/api/code/check', { body: { code, deviceId: dev.id, turnstile: tsToken } });
      } catch { r = { http: 0 }; }
      checking = false; btn.disabled = false; input.disabled = false; teamBtn.disabled = false;
      f.setAttribute('aria-busy', 'false'); btn.lastElementChild.textContent = x.code_submit;
      if (!modal || !f.isConnected) return;
      tsReset();
      if (r.http === 200 && r.status === 'ok') { state.code = code; formView(prefill); return; }
      const kind = invitationCodeError(r.status, r.http);
      show(kind === 'bot_check' ? 'bot-error' : kind);
      input.focus({ preventScroll: true });
    });
    turnstile($('.xl-ts', f));
    setTimeout(() => { if (f.isConnected) input.focus({ preventScroll: true }); }, reduce ? 0 : 300);
  }

  function formView(prefill = {}, { team: teamEntry = false } = {}) {
    if (!state.code && !teamEntry) { codeView('', prefill); return; }
    state.teamEntry = teamEntry;
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
          <div class="xl-pr" dir="ltr"><select name="country" aria-label="${esc(x.country)}">${CC.map(([c, d]) => `<option value="${c}"${c === defCC ? ' selected' : ''}>${c === 'XX' ? '🌐 ' + esc(x.other_cc) : `${flag(c)} +${d}`}</option>`).join('')}</select>
          <input id="xl-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" maxlength="22" required placeholder="${esc(ccSample(defCC))}" value="${esc(prefill.phone || '')}"></div><em class="xl-e" aria-live="polite"></em></div>
        <div class="xl-f xl-team" data-f="teamCode" hidden><label for="xl-team">${esc(x.team)}</label><input id="xl-team" name="teamCode" type="password" autocomplete="off" maxlength="80" dir="ltr"><small>${esc(x.team_hint)}</small><em class="xl-e" aria-live="polite"></em></div>
        ${field('size', x.size, `<select id="xl-size" name="size" required>${opt(x.sizes, prefill.size)}</select>`)}
        ${field('industry', x.industry, `<select id="xl-industry" name="industry" required><option value="">${esc(x.pick)}</option>${x.industries.map(([g, o]) => `<optgroup label="${esc(g)}">${Object.entries(o).map(([k, v]) => `<option value="${k}"${k === prefill.industry ? ' selected' : ''}>${esc(v)}</option>`).join('')}</optgroup>`).join('')}</select>`)}
        ${field('market', x.market, `<select id="xl-market" name="market" required>${opt(x.markets, prefill.market)}</select>`)}
      </div>
      <button type="button" class="xl-team-open">${esc(x.team_open)}</button>
      <div class="xl-hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <div class="xl-ts"></div>
      <em class="xl-e xl-form-e" aria-live="polite"></em>
      <div class="xl-go"><button class="btn btn-p" type="submit"><span class="d"></span><span>${esc(x.start)}</span></button><small>${esc(x.consent)}</small></div>
    </form>`;
    const f = $('form', view());
    // the team code is optional: a small link opens it
    const team = $('.xl-team', f), teamBtn = $('.xl-team-open', f);
    teamBtn.addEventListener('click', () => { team.hidden = false; teamBtn.hidden = true; f.elements.teamCode.focus(); });
    if (teamEntry) { team.hidden = false; teamBtn.hidden = true; }
    const setPh = () => { f.elements.phone.placeholder = ccSample(f.elements.country.value); };
    f.elements.market.addEventListener('change', () => { const c = MARKET_CC[f.elements.market.value]; if (c && !f.elements.phone.value.trim()) { f.elements.country.value = c; setPh(); } });
    // the phone and email are checked by the server as soon as the visitor leaves the field
    const live = async (field) => {
      const body = field === 'phone' ? { field, country: f.elements.country.value, phone: f.elements.phone.value.trim() } : { field, email: f.elements.email.value.trim() };
      if (!(body.phone || body.email)) return;
      let r; try { r = await api('/api/check', { body }); } catch { return; }
      if (!modal || r.http !== 200) return;
      const box = $(`[data-f="${field}"]`, f);
      box.classList.toggle('ok', !r.error);
      if (!r.error) { showErr(f, field, ''); return; }
      let msg = esc(x.err[r.error] || x.err.required);
      if (r.error === 'email_typo' && r.suggest) {
        const fixed = body.email.replace(/@.*$/, '@' + r.suggest);
        msg = esc(x.err.email_typo).replace('{s}', `<button type="button" class="xl-fix">${esc(fixed)}</button>`);
      }
      showErr(f, field, msg);
      const fix = $('.xl-fix', box);
      if (fix) fix.addEventListener('click', () => { f.elements.email.value = fix.textContent; showErr(f, 'email', ''); live('email'); });
    };
    f.elements.phone.addEventListener('blur', () => live('phone'));
    f.elements.country.addEventListener('change', () => { setPh(); if (f.elements.phone.value.trim()) live('phone'); });
    f.elements.email.addEventListener('blur', () => live('email'));
    $$('input,select', f).forEach((el) => el.addEventListener('input', () => showErr(f, el.name === 'country' ? 'phone' : el.name, '')));
    f.addEventListener('submit', (e) => { e.preventDefault(); submit(f); });
    turnstile($('.xl-ts', f));
    setTimeout(() => { if (f.isConnected) f.elements[teamEntry ? 'teamCode' : 'name'].focus({ preventScroll: true }); }, reduce ? 0 : 300);
  }
  function field(name, label, control) {
    return `<div class="xl-f" data-f="${name}"><label for="xl-${name}">${esc(label)}</label>${control}<em class="xl-e" aria-live="polite"></em></div>`;
  }
  function showErr(f, name, msg) {
    const box = $(`[data-f="${name}"]`, f) || null;
    if (!box) { const e = $('.xl-form-e', f); if (e) e.textContent = msg; return; }
    box.classList.toggle('bad', !!msg);
    if (msg) box.classList.remove('ok');
    $('.xl-e', box).innerHTML = msg;
  }

  // quick checks before the server's full ones, so typos show at once
  function precheck(f) {
    const v = (n) => (f.elements[n].value || '').trim(), errs = {};
    for (const n of ['name', 'business', 'email', 'phone', 'size', 'industry', 'market']) if (!v(n)) errs[n] = 'required';
    if (state.teamEntry && !v('teamCode')) errs.teamCode = 'team_code_needed';
    if (v('name') && !/^[\p{L}\p{M}][\p{L}\p{M}' .\-]{1,59}$/u.test(v('name'))) errs.name = /\d/.test(v('name')) ? 'name_chars' : 'name_fake';
    if (v('email') && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v('email'))) errs.email = 'email_bad';
    const digits = v('phone').replace(/\D/g, '');
    if (v('phone') && (digits.length < 6 || digits.length > 15 || /[^\d\s\-()+]/.test(v('phone')))) errs.phone = 'phone_bad';
    else if (f.elements.country.value === 'XX' && v('phone') && !v('phone').startsWith('+')) errs.phone = 'phone_plus';
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
    const dev = await device();
    Object.assign(data, { code: state.code, lang: H.lang in T ? H.lang : 'en', turnstile: tsToken, deviceId: dev.id, fp: dev.fp, private: false });
    state.busy = true; btn.disabled = true; btn.lastElementChild.textContent = x.checking;
    let r;
    try { r = await api('/api/register', { body: data }); } catch { r = { http: 0 }; }
    state.busy = false; btn.disabled = false; btn.lastElementChild.textContent = x.start;
    if (!modal || !f.isConnected) return;
    if (r.status === 'ok' && r.token) {
      Object.assign(state, { token: r.token, name: r.name, left: r.left, team: !!r.team, brief: !!r.team });
      state.code = '';
      store.set({ token: r.token });
      chatView([]);
      return;
    }
    if (r.status === 'code_required') { codeView(invitationCodeError(r.status, r.http), data); return; }
    if (r.status === 'returning') { handoff(x.back_h(r.name), x.back_p); return; }
    if (r.status === 'used_here') { handoff(x.used_h, x.used_p); return; }
    if (r.status === 'region') { handoff(x.region_h, x.region_p, view(), { free: false }); return; }
    if (r.status === 'private') { notice(x.private_h, x.private_p); return; }
    if (r.status === 'device') { notice(x.device_h, x.device_p); return; }
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

  // ---------- 2. returning visitors and the end of the four questions ----------
  function handoff(title, text, into = view(), { contacts = true, free = true, team = false } = {}) {
    const x = L();
    into.innerHTML = `<div class="xl-pm">
      <div class="xl-pm-i" aria-hidden="true"><i></i><i></i><i></i></div>
      <h4>${esc(title)}</h4><p>${esc(text)}</p>
      ${contacts ? `<div class="xl-pm-b">
        <a class="btn btn-p" href="${PM_TG}" target="_blank" rel="noopener"><span class="d"></span><span>${esc(x.tg)}</span></a>
        <a class="btn xl-ghost" href="mailto:${PM_MAIL}"><span>${esc(x.mail)}</span></a>
      </div>
      <div class="xl-pm-m"><span dir="ltr">${PM_MAIL}</span><button type="button" class="xl-copy">${esc(x.copy)}</button></div>` : ''}
      ${free ? `<a class="xl-free" href="#free">${esc(x.free)} →</a>` : ''}
      ${team ? `<button type="button" class="xl-team-go">${esc(x.team_link)}</button>` : ''}
    </div>`;
    if (team) $('.xl-team-go', into).addEventListener('click', () => formView({}, { team: true }));
    if (free) $('.xl-free', into).addEventListener('click', () => close());
    if (!contacts) return;
    $('.xl-copy', into).addEventListener('click', (e) => {
      const b = e.currentTarget;
      const done = () => { b.textContent = x.copied; setTimeout(() => { b.textContent = x.copy; }, 1800); };
      (navigator.clipboard ? navigator.clipboard.writeText(PM_MAIL) : Promise.reject()).then(done, () => {
        const r = D.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      });
    });
  }

  // ---------- 3. the conversation ----------
  function invitationView(status) {
    if (status !== 'code_required' && status !== 'expired') return false;
    Object.assign(state, { code: '', teamEntry: false, token: '', name: '', left: null, team: false, brief: false });
    $('.xl-left', modal).hidden = true;
    if (status === 'code_required') {
      store.clear();
      codeView();
    } else {
      const x = L();
      view().innerHTML = `<section class="xl-pm xl-expired" data-testid="expired-screen" tabindex="-1" aria-labelledby="xl-expired-title">
        <div class="xl-pm-i" aria-hidden="true"><i></i><i></i><i></i></div>
        <h4 id="xl-expired-title" data-testid="expired-title">${esc(x.expired_h)}</h4>
        <p class="xl-code-contact" data-testid="code-contact-line">${esc(x.code_contact)}</p>
      </section>`;
      $('.xl-expired', view()).focus({ preventScroll: true });
    }
    return true;
  }

  async function resume(token) {
    let r;
    try { r = await api('/api/session', { token }); } catch { r = { http: 0 }; }
    if (!modal) return;
    if (invitationView(r.status)) return;
    if (r.status === 'device') { notice(L().device_h, L().device_p); return; }
    if (r.http !== 200) { if (r.http === 401) store.clear(); start(); return; }
    Object.assign(state, { token, name: r.name, left: r.left, team: !!r.team, brief: !!r.brief || !!r.team });
    if (r.locked) { handoff(L().locked_h, L().locked_p); return; }
    if (!state.team && state.left <= 0) { setLeft(); handoff(L().done_h, L().done_p); return; }
    chatView(r.history || []);
  }

  function chatView(history) {
    const x = L();
    setLeft();
    const ph = state.brief ? x.ask : x.brief_ph;
    view().innerHTML = `<div class="xl-chat"><div class="xl-log" aria-live="polite"></div>
      <form class="xl-in"><textarea rows="1" maxlength="1500" dir="auto" placeholder="${esc(ph)}" aria-label="${esc(ph)}"></textarea><button type="submit" class="xl-send" aria-label="${esc(x.send)}"><i></i></button></form>
      <em class="xl-e xl-chat-e" aria-live="assertive"></em></div>`;
    const log = $('.xl-log', view()), form = $('.xl-in', view()), ta = $('textarea', form);
    bubble(log, 'u-hi', x.intro(state.name));
    for (const m of history) bubble(log, m.role === 'user' ? 'me' : 'her', m.text);
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
      state.busy = true; form.classList.add('busy'); ta.value = ''; grow();
      bubble(log, 'me', q);
      chime('send');
      const her = bubble(log, 'her think', '');
      her.innerHTML = `<span class="xl-read">${esc(x.reading)}<i></i><i></i><i></i></span>`;
      log.scrollTop = log.scrollHeight;
      let text = '', end = null, raf = 0;
      const paint = () => { raf = 0; her.innerHTML = md(text); her.classList.remove('think'); };
      try {
        const dev = await device();
        const r = await fetch(API + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + state.token, 'x-usha-device': dev.id }, body: JSON.stringify({ q, lang: H.lang in T ? H.lang : 'en' }) });
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
        // the team sees which depth answered, to judge cost against quality
        if (end.tier) her.insertAdjacentHTML('beforeend', `<span class="xl-tier" dir="ltr">${esc(end.tier)} · ${esc(end.model || '')}</span>`);
        state.left = end.left;
        if (end.kind === 'brief' || end.kind === 'business' || end.kind === 'answer') state.brief = true;
        setLeft();
        ta.placeholder = state.brief ? x.ask : x.brief_ph;
        chime(end.asks ? 'ask' : 'answer');
        if (end.locked) {
          setTimeout(() => {
            if (!modal) return;
            const card = D.createElement('div'); card.className = 'xl-end';
            log.append(card); form.remove();
            handoff(x.locked_h, x.locked_p, card);
            card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          }, 600);
        } else if (!state.team && state.left <= 0) {
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
        if (end && invitationView(end.error)) return;
        if (end && end.error === 'limit') { state.left = 0; setLeft(); handoff(x.done_h, x.done_p); return; }
        if (end && end.error === 'locked') { handoff(x.locked_h, x.locked_p); return; }
        if (end && end.error === 'device') { notice(x.device_h, x.device_p); return; }
        if (end && end.error === 'region') { handoff(x.region_h, x.region_p, view(), { free: false }); return; }
        if (end && end.status === 401) { store.clear(); start(); return; }
        if (end && end.left != null) { state.left = end.left; setLeft(); }
        ta.value = q; grow();
        err.textContent = x.err[end && x.err[end.error] ? end.error : 'failed'] + (end && end.detail ? ` [${end.detail}]` : '');
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
    const slot = $('#x3-live .x3-slot');
    if (slot) {
      const c = window.USHA_X?.[H.lang]?.x3;
      if (!slot.querySelector('.xl-open') || slot.dataset.lang !== H.lang) {
        slot.dataset.lang = H.lang;
        slot.innerHTML = `<button type="button" class="btn btn-p xl-open x3-go"><span class="d"></span><span>${esc(c?.b2_cta || x.cta_b)}</span></button>`;
      }
      $$('#x3-live .xl-open').forEach(b => { if (!b.dataset.xlBound) { b.dataset.xlBound = '1'; b.addEventListener('click', open); } });
      return;
    }
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
  D.addEventListener('usha:x3render', later);
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  const talk = $('#talk'); if (talk) new MutationObserver(() => { if (!$('#x3-live .x3-slot .xl-open') && !$('.xl-cta')) later(); }).observe(talk, { childList: true, subtree: true });
  // A shared #ask link also works after same-page navigation. #x3-live
  // remains a scroll target and never opens the gate by itself.
  addEventListener('hashchange', () => { if (location.hash === '#ask') open(); });
  if (location.hash === '#ask') {
    if (D.readyState === 'complete') setTimeout(open, 400);
    else addEventListener('load', () => setTimeout(open, 400), { once: true });
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', ctaUI); else ctaUI();
})();

const stEsc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const stText=s=>stEsc(s).replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\b(USHA|NJO)\b/g,'<bdi>$1</bdi>');
function storyCaptions(x) {
  const s=x.story;
  return s.chapters.map((c,i)=>`<div class="st-copy"><span class="st-k">${stText(c.k)}</span><h3>${stText(c.t)}</h3><p>${stText(c.b)}</p>${i===1?`<small class="st-legend" dir="auto"><bdi>10 · 22 · 700+ · 55+ · 7</bdi><br>${stText(s.legend)}</small>`:''}${i===4?`<s class="st-books">${stText(s.books)}</s>`:''}${i===6?`<ul class="st-beliefs">${s.beliefs.map(b=>`<li>${stText(b)}</li>`).join('')}</ul>`:''}${i===7?`${s.meta?`<span class="st-stamp">${stText(s.meta)}</span><small class="st-legal">${stText(s.legal)}</small>`:''}<a class="st-cta" href="#talk">${stText(s.cta)} <span aria-hidden="true">↗</span></a>`:''}</div>`);
}
function storyHTML(x,lang) {
  const s=x.story,caps=storyCaptions(x),sizes=[50,65,75,86,96,86,110,110];
  const mini=(i)=>{
    const look=i===2||i===3?'translate(0 9) scale(1 .8) rotate(12 53 45)':i===5?'translate(-13.25 -11.25) scale(1.25)':`translate(${lang==='ar'?-1.5:1.5} 0)`;
    const eyes=i===6?'<path d="M40 47q4-8 8 0m10-2q4-8 8 0" style="stroke:#0b0a0f;stroke-width:3;fill:none"/>':`<use href="#st-eyes" transform="${look}"/>`;
    return `<g${lang==='ar'?' transform="translate(100 0) scale(-1 1)"':''}><use href="#st-${i<5?'drop':'bean'}"/>${eyes}</g>`;
  };
  return `<a class="st-skip" href="#month">${stText(s.skip)} ↓</a>${USHA_DEFS}<div class="st-intro rv" data-st-lang="${lang}"><span class="st-k">${stText(s.kick)}</span><h2 id="st-h">${stText(s.h)}</h2><p>${stText(s.sub)}</p><small>${stText(s.note)}</small><i class="st-seed" aria-hidden="true"></i></div><div class="st-track"><div class="st-stage"><ol class="st-pages">${PAGES.map((page,i)=>`<li class="st-page" data-st-page="${i}" data-crop="${page.crop}" data-rest="${page.rest}" data-weight="${page.weight}"><svg class="st-scene" viewBox="${storyCrop(page.crop,lang==='ar'?-1:1)}" aria-hidden="true" focusable="false"><g class="st-art"${lang==='ar'?' transform="translate(1600 0) scale(-1 1)"':''}>${page.svg}<svg class="st-static" x="${page.point[0]-sizes[i]/2}" y="${page.point[1]-sizes[i]*.78}" width="${sizes[i]}" height="${sizes[i]*.84}" viewBox="0 0 100 84">${mini(i)}</svg></g></svg><div class="st-cap">${caps[i]}</div>${i<7?`<svg class="st-link" viewBox="0 0 358 72" preserveAspectRatio="none" aria-hidden="true"><path d="${i%2?'M340 0C340 45 18 27 18 72':'M18 0C18 45 340 27 340 72'}"/></svg>`:''}</li>`).join('')}</ol><div class="st-slot" aria-hidden="true"></div><nav class="st-nav" aria-label="${stText(s.kick).replace(/<[^>]+>/g,'')}">${s.chapters.map((c,i)=>`<button type="button" data-st-go="${i}" aria-label="${stEsc(s.chapterLabel.replace('{n}',i+1).replace('{title}',c.t.replace(/\*/g,'')))}"><bdi>0${i+1}</bdi></button>`).join('')}</nav><div class="st-lamp" aria-hidden="true"></div><div class="st-mini" aria-hidden="true"><div class="st-shadow"></div><svg viewBox="0 0 100 84"><g class="st-inner"><use class="st-df" href="#st-drop"/><use class="st-bf" href="#st-bean"/><g class="st-eyes"><use href="#st-eyes"/></g><path class="st-he" d="M40 47q4-8 8 0m10-2q4-8 8 0"/><path class="st-ce" d="M40 45q4 7 8 0m10-2q4 7 8 0"/></g></svg></div></div></div>`;
}

// Language-dependent view updates stay with the shared caption renderer.
function paintStory(S,x) {
  const s=x.story,put=(sel,value)=>S.querySelector(sel).innerHTML=value;
  const caps=storyCaptions(x),intro=S.querySelector('.st-intro');
  if(intro.dataset.stLang===document.documentElement.lang)return caps;
  intro.dataset.stLang=document.documentElement.lang;
  S.querySelectorAll('.st-cap').forEach((el,i)=>el.innerHTML=caps[i]);
  put('.st-intro .st-k',stText(s.kick));put('#st-h',stText(s.h));put('.st-intro p',stText(s.sub));put('.st-intro small',stText(s.note));put('.st-skip',stText(s.skip)+' ↓');
  S.querySelectorAll('[data-st-go]').forEach((b,i)=>b.setAttribute('aria-label',s.chapterLabel.replace('{n}',i+1).replace('{title}',s.chapters[i].t.replace(/\*/g,''))));
  S.querySelector('.st-nav').setAttribute('aria-label',s.kick);return caps;
}

// View-owned finite actions and gaze loops. The controller supplies chapter state;
// cancelling this view stops every Web Animation when it leaves the viewport.
function storyView(S) {
  const B=S.querySelector('.st-inner'),E=S.querySelector('.st-eyes use'),shadow=S.querySelector('.st-shadow');
  const locks=[...S.querySelectorAll('.st-lock')],knots=[...S.querySelectorAll('.st-knot,.st-loose')];
  let effects=[],hop=null,moving=false,chapter=-1;
  const animate=(el,keys,opts)=>{const a=el.animate(keys,opts);effects.push(a);return a};
  const cancel=()=>{effects.forEach(a=>a.cancel());effects=[];hop=null;moving=false};
  return {cancel,
    enter(k,dir) {cancel();chapter=k;E.setAttribute('transform',`translate(${dir*1.5} 0)`);
      if(k===2)animate(S.querySelector('.st-question'),[{transform:'translateY(-4px)'},{transform:'translateY(4px)'}],{duration:4000,direction:'alternate',iterations:Infinity});
      if(k===4)animate(E,[{transform:'translateX(-1.5px)'},{transform:'translateX(1.5px)'},{transform:'translateX(-1.5px)'}],{duration:2400,iterations:Infinity});
      if(k===7)animate(B,[{transform:'scale(1.12,.86) rotate(-10deg)'},{transform:'translateY(-14px) rotate(10deg)',offset:.5},{transform:'scale(1)'}],{duration:520,iterations:2});
    },
    release(open) {locks.forEach(el=>el.style.transform=open?'translateY(-5px) rotate(20deg)':'none');knots.forEach((el,i)=>el.style.opacity=i?+open:+!open)},
    pull() {animate(B,[{transform:'scale(1)'},{transform:'scale(1.15,.88)',offset:.5},{transform:'scale(1)'}],{duration:420,iterations:2})},
    moving(on) {if(on===moving)return;moving=on;if(on)hop=animate(shadow,[{transform:'scaleX(1)'},{transform:'scaleX(.6)',offset:.5},{transform:'scaleX(1)'}],{duration:520,iterations:Infinity});
      else {hop?.cancel();if(![3,5,7].includes(chapter))animate(B,[{transform:'scale(1.1,.9)'},{transform:'scale(1)'}],{duration:260,easing:'cubic-bezier(.34,1.56,.64,1)'})}
    },
  };
}

// Mirror the entire 1600-unit drawing plane and its crop together. Mirroring
// around a cropped viewport's centre would show a different part of the art.
function storyCrop(crop,dir) {
  const [x,y,w,h]=crop.split(' ').map(Number);
  return `${dir<0?1600-x-w:x} ${y} ${w} ${h}`;
}
function storyViewport(page,desktop,dir) {
  page.firstElementChild.setAttribute('viewBox',desktop?'0 0 1600 900':storyCrop(page.dataset.crop,dir));
  page.querySelector('.st-art').setAttribute('transform',dir<0?'translate(1600 0) scale(-1 1)':'');
}

(()=>{const S=document.querySelector('#story');if(!S)return;let raf=0;const $=s=>S.querySelector(s);
const H=document.documentElement,T=$('.st-track'),PP=[...S.querySelectorAll('.st-page')],U=$('.st-mini'),L=$('.st-lamp'),C=$('.st-slot'),N=[...S.querySelectorAll('[data-st-go]')],mq=matchMedia('(prefers-reduced-motion: reduce)'),D=matchMedia('(min-width:900px) and (min-height:620px)'),QS=new URLSearchParams(location.search),cl=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=v=>v<.5?4*v*v*v:1-(-2*v+2)**3/2,sm=v=>{v=cl(v);return v*v*(3-2*v)},WG=PP.map(p=>+p.dataset.weight),OS=WG.map((_,i)=>WG.slice(0,i).reduce((a,b)=>a+b,0)),SUM=WG.reduce((a,b)=>a+b,0),RS=PP.map(p=>+p.dataset.rest),LT=PP.map(p=>[...p.querySelectorAll('[data-lit]')]);
let LV=false,DS=false,NE=false,dir=1,W=0,vh=0,vw=0,top=0,end=0,span=0,BY=0,PT=[],MP=[],CP=[],cam=0,TS=0,TM=0,chapter=-1,AW=false,RT=0,CT=0,FC=[];
const A=window.__story={running:false,chapter:0,u:0,go};
const uc=U.classList,sc=S.classList,V=storyView(S);U.style.cssText='width:56px;height:47.04px;transform-origin:0 0;transition:opacity .4s';let opened=false,tug=false,entered=0;
function hold(on){window.__xHold=on;H.classList.toggle('x-story-on',on)}
function stop(){V.cancel();cancelAnimationFrame(raf);raf=0;A.running=false;sc.remove('st-run');uc.remove('st-move');hold(false)}
function mode(){stop();LV=!mq.matches&&QS.get('story')!=='still'&&!(navigator.deviceMemory<=2||navigator.hardwareConcurrency<=2);DS=LV&&D.matches;sc.toggle('st-live',LV);sc.toggle('st-desk',DS);dir=H.dir==='rtl'?-1:1;PP.forEach(p=>{storyViewport(p,DS,dir);p.style.transform='';p.firstElementChild.style.visibility='';p.classList.remove('st-on','st-visible')});U.style.opacity=LV?'1':'0';$('.st-cta').tabIndex=0;fit();}
function fit(){clearTimeout(RT);vh=innerHeight;vw=innerWidth;W=Math.min(vh*16/9,vw*1.15);S.style.setProperty('--st-w',W+'px');sc.add('st-measuring');const sy=scrollY;BY=S.getBoundingClientRect().top+sy;end=BY+S.offsetHeight;top=T.getBoundingClientRect().top+sy;span=T.offsetHeight-vh;
PT=PP.map(p=>{const path=p.querySelector('.st-line'),len=path.getTotalLength();return Array.from({length:64},(_,i)=>{const q=path.getPointAtLength(len*i/63);return{x:q.x,y:q.y}})});
MP=PP.map((p,i)=>{const svg=p.querySelector('.st-scene'),r=svg.getBoundingClientRect(),[cx,cy,cw,ch]=p.dataset.crop.split(' ').map(Number),scale=Math.min(r.width/cw,r.height/ch),ox=(r.width-cw*scale)/2,oy=(r.height-ch*scale)/2;let pts=PT[i].filter(q=>q.x>=cx&&q.x<=cx+cw&&q.y>=cy&&q.y<=cy+ch);if(pts.length<2)pts=PT[i];if(i%2)pts=pts.slice().reverse();return{top:r.top+sy,bottom:r.bottom+sy,pts:pts.map(q=>({x:r.left+ox+(dir===1?q.x-cx:cx+cw-q.x)*scale,y:r.top+sy+oy+(q.y-cy)*scale}))}});if(!DS)MP.forEach((m,i)=>{if(i===7)return;const a=m.pts.at(-1),b=MP[i+1].pts[0],link=PP[i].lastElementChild,edge=a.x<vw/2?16:vw-16,h=b.y-a.y,bend=Math.max(20,MP[i+1].top-a.y-72),left=16;link.style.top=(a.y-(PP[i].getBoundingClientRect().top+sy))+'px';link.style.height=h+'px';link.setAttribute('viewBox',`0 0 ${vw-32} ${h}`);link.firstElementChild.setAttribute('d',`M${a.x-left} 0L${edge-left} ${bend}C${edge-left} ${bend+60} ${b.x-left} ${bend+12} ${b.x-left} ${bend+72}L${b.x-left} ${h}`);const path=link.firstElementChild,len=path.getTotalLength();m.link=Array.from({length:64},(_,j)=>{const q=path.getPointAtLength(len*j/63);return{x:q.x+left,y:q.y+a.y}})});sc.remove('st-measuring');cam=0;chapter=-1;TM=performance.now();if(NE)run();}
function pt(i,u){const pts=PT[i],n=cl(u)*63,j=Math.min(62,Math.floor(n)),v=n-j;return{x:pts[j].x+(pts[j+1].x-pts[j].x)*v,y:pts[j].y+(pts[j+1].y-pts[j].y)*v}}
function lang(){const x=window.USHA_X?.[H.lang];if(!x?.story)return;CP=paintStory(S,x);dir=H.dir==='rtl'?-1:1;chapter=-1;fit();}
function go(k){if(document.fonts.status==='loading'){document.fonts.ready.then(()=>go(k));return}fit();k=cl(+k,0,7);if(DS)scrollTo({top:top+(OS[k]+WG[k]*.2)/SUM*span,behavior:mq.matches?'instant':'smooth'});else PP[k].scrollIntoView({block:'center',behavior:mq.matches?'instant':'smooth'});TM=performance.now();run()}
function run(){if(!LV){hold(scrollY>=BY&&scrollY+vh<=end);return}if(!NE||raf)return;A.running=true;sc.add('st-run');TS=performance.now();raf=requestAnimationFrame(draw)}
function draw(now){raf=0;try{const tick=performance.now(),sy=scrollY,dt=Math.min(.06,(now-TS)/1000);TS=now;let k=0,t=0,x=0,y=0,mv=now-TM<160,aim=cam;
if(DS){const value=cl((sy-top)/span)*SUM;k=7;for(let i=0;i<8;i++)if(value<OS[i]+WG[i]){k=i;break}t=cl((value-OS[k])/WG[k]);if(k!==chapter)entered=now;aim=(k+(k<7?ease(cl((t-.4)/.6)):0))*W;cam+=(aim-cam)*(1-Math.exp(-7*dt));PP.forEach((p,i)=>{const vis=Math.abs(i-cam/W)<1.6;p.classList.toggle('st-visible',vis);p.firstElementChild.style.visibility=vis?'visible':'hidden';if(vis){p.style.transform=`translate3d(${(i*W-cam)*dir+(vw-W)/2}px,0,0)`;const off=cl((i*W-cam)*.08,-90,90);p.querySelectorAll('.st-back,.st-front').forEach(el=>el.style.transform=`translate3d(${off*(el.classList.contains('st-back')?-.45:.3)}px,0,0)`)}});const u=sm((t-.3)/.62),v=RS[k]+u*((k<7?1+RS[k+1]:.913)-RS[k]),i=k+(v>=1?1:0),a=pt(i,v>=1?v-1:v);if(k===0&&t<.3){const f=cl((now-entered)/650);a.x=560+(a.x-560)*sm(cl((f-.5)*2));a.y=350+210*sm(cl(f*2))}x=(a.x/1600*W+i*W-cam);x=dir===1?x+(vw-W)/2:vw-(x+(vw-W)/2);y=a.y/900*(W*9/16)+(vh-W*9/16)/2;hold(sy>=top&&sy<top+span);C.classList.toggle('st-fading',t>.58&&t<.82&&k<7);
}else{const read=sy+vh*.58;for(let i=0;i<8;i++)if(read>=MP[i].top)k=i;const m=MP[k];t=cl((read-m.top)/(m.bottom-m.top));const n=t*(m.pts.length-1),j=Math.min(m.pts.length-2,Math.floor(n)),v=n-j;x=m.pts[j].x+(m.pts[j+1].x-m.pts[j].x)*v;y=m.pts[j].y+(m.pts[j+1].y-m.pts[j].y)*v;if(read>m.bottom&&k<7){const c=cl((read-m.bottom)/(MP[k+1].top-m.bottom))*63,j=Math.min(62,Math.floor(c)),v=c-j,a=m.link[j],b=m.link[j+1];x=a.x+(b.x-a.x)*v;y=a.y+(b.y-a.y)*v}y-=BY;hold(sy>=BY&&sy+vh<=end)}
PP.at(-1).querySelector('a').tabIndex=DS&&k!==7?-1:0;PP[0].classList.toggle('st-open',k>0||t>.6);A.chapter=k;A.u=t;if(k!==chapter){V.enter(k,dir);entered=now;chapter=k;C.innerHTML=CP[k]||'';C.querySelectorAll('a').forEach(a=>a.tabIndex=-1);N.forEach((b,i)=>{if(i===k)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});PP.forEach((p,i)=>p.classList.toggle('st-on',i===k&&NE));}
const open=k>3||k===3&&t>.5;if(open!==opened){opened=open;V.release(open)}if(k===3&&t>.3&&!tug){tug=true;V.pull()}if(k!==3||t<.2)tug=false;const born=k>5||k===5&&(AW?t>=.25:t>=.35);if(born!==AW){AW=born;uc.toggle('st-born',born);PP[5].classList.toggle('st-awake',born);if(k===5&&born){uc.add('st-waking','st-wow');setTimeout(()=>uc.remove('st-waking','st-wow'),1100)}}
if(k===5){const f=sm((t-.25)/.1)*(1-sm((t-.6)/.35)),cx=DS?(dir===1?1060/1600*W+5*W-cam+(vw-W)/2:vw-(1060/1600*W+5*W-cam+(vw-W)/2)):vw/2,cy=DS?380/900*(W*9/16)+(vh-W*9/16)/2:MP[5].top-BY+165;x+=(cx-x)*f;y+=(cy-y)*f}const size=Math.max(16,([18,18+6*t,28,32,36,AW?56:36,56,56][k])*(DS?1:.75));if(!DS)x=cl(x,size/2+4,vw-size/2-4);U.style.transform=`translate3d(${x-size/2}px,${y-size*.78}px,0) scale(${size/56})`;U.style.opacity=k===7?1-sm((t-.8)/.2):1;L.style.transform=`translate3d(${x}px,${y}px,0) scale(${k===5&&AW?1.37:1})`;uc.toggle('st-move',mv);V.moving(mv);uc.toggle('st-worry',k===2||k===3);uc.toggle('st-happy',k===6);uc.toggle('st-closed',k===5&&!AW);
LT.forEach((els,i)=>{if(Math.abs(i-k)<=1)els.forEach(el=>el.classList.toggle('on',i<k||i===k&&(AW&&k===5||+el.dataset.lit<=RS[k]+sm(t)*.45)))});
if(QS.has('storydebug')){FC.push(performance.now()-tick);if(FC.length>2000)FC.shift();const a=FC.slice().sort((a,b)=>a-b);window.__storyStats={frames:a.length,p95:a[Math.floor((a.length-1)*.95)],max:a.at(-1)}}
if(NE&&(k===0&&now-entered<700||mv||Math.abs(aim-cam)>.5||now-TM<220)){A.running=true;raf=requestAnimationFrame(draw)}else{A.running=false;sc.remove('st-run')}
}catch(e){fail(e)}}
function fail(e){stop();$('.st-cta').tabIndex=0;sc.remove('st-live','st-desk');PP.forEach(p=>{p.style.transform='';p.firstElementChild.style.visibility='';storyViewport(p,false,dir)});console.error('Notebook fallback:',e)}
try{lang();mode();N.forEach((b,i)=>{b.onclick=()=>go(i);b.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();const delta=(e.key==='ArrowRight'?dir:e.key==='ArrowLeft'?-dir:e.key==='ArrowDown'?1:-1);N[(i+delta+8)%8].focus()}});$('.st-skip').onclick=()=>{const month=document.querySelector('#month');month.tabIndex=-1;month.focus({preventScroll:true});stop()};addEventListener('scroll',()=>{TM=performance.now();run()},{passive:true});addEventListener('resize',()=>{clearTimeout(RT);RT=setTimeout(mode,150)});document.fonts.ready.then(fit);new ResizeObserver(()=>{clearTimeout(RT);RT=setTimeout(fit,150)}).observe(document.body);mq.addEventListener('change',mode);D.addEventListener('change',mode);new MutationObserver(()=>{clearTimeout(CT);CT=setTimeout(lang,150)}).observe(H,{attributes:true,attributeFilter:['lang','dir']});new IntersectionObserver(([e])=>{NE=e.isIntersecting;sc.toggle('st-near',NE);if(NE){chapter=-1;run()}else{stop();PP.forEach(p=>p.classList.remove('st-on'))}},{rootMargin:'200px'}).observe(S);
}catch(e){fail(e)}
})();
