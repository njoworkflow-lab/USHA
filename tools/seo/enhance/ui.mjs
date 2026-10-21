// Markup builders shared by the build (pre-rendered HTML for crawlers) and the
// browser layer (enhance.js). Pure functions: data in, HTML string out.
// The build inlines this file into the browser script with `export` removed.
// Visual language is the site's own: glass, light, peach glow, Geist Light.

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- plans: Core, Pro and Enterprise side by side; every detail in a drawer ----------
const KEY_ROWS = [[0, 0], [0, 1], [2, 1], [2, 2], [1, 1], [1, 2]];
export function plansHTML(x, d) {
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
export function planScreenHTML(x, d, k) {
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
export function findingChart(i, lang) {
  const price = lang === 'ru' ? ['1 290 ₽', '1 058 ₽'] : ['AED 129', 'AED 106'];
  const glow = '<defs><linearGradient id="xg" x1="0" x2="1"><stop offset="0" stop-color="#FFC4A0" stop-opacity=".2"/><stop offset="1" stop-color="#FF5A1F"/></linearGradient></defs>';
  if (i === 0) return `<div class="xf xf-price"><s>${price[0]}</s><i aria-hidden="true"></i><span>${price[1]}</span></div>`;
  if (i === 1) return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}<path d="M4 50 C60 49 100 46 140 36 S200 10 236 8" pathLength="1"/><circle cx="236" cy="8" r="3.5"/></svg>`;
  if (i === 2) return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}${Array.from({ length: 24 }, (_, k) => { const h = 6 + ((k * 37) % 23) + (k > 15 ? 18 : 0); return `<rect x="${4 + k * 9.8}" y="${52 - h}" width="4" height="${h}" rx="2" class="${k > 15 ? 'hi' : ''}" style="--k:${k}"/>`; }).join('')}</svg>`;
  return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}<path d="M4 50 C40 50 60 44 90 42 S130 46 150 30 S178 4 190 10 S215 40 236 44" pathLength="1"/><circle cx="186" cy="8" r="3.5"/></svg>`;
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
export function dotNumber(value) {
  let x = 0, dots = '';
  for (const c of String(value)) {
    const glyph = DOT_GLYPHS[c] || DOT_GLYPHS[' '];
    glyph.forEach((row, y) => [...row].forEach((v, col) => { if (v === '1') dots += `<circle cx="${x + col * 4 + 2}" cy="${y * 4 + 2}" r="1.25"/>`; }));
    x += (glyph[0].length + 1) * 4;
  }
  return `<svg viewBox="0 0 ${x - 4} 28" aria-hidden="true" focusable="false">${dots}</svg>`;
}
export function deckHTML(x, lang) {
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
