// Markup builders shared by the build (pre-rendered HTML for crawlers) and the
// browser layer (enhance.js). Pure functions: data in, HTML string out.
// The build inlines this file into the browser script with `export` removed.
// Visual language is the site's own: glass, light, peach glow, Geist Light.

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- plans: one switch, a living plan card, the details, Enterprise ----------
export function plansHTML(x, d, sel = 'pro') {
  const rows = x.plansGroups.map(([g, list]) => `<div class="xp-g"><div class="xp-gl">${esc(g)}</div>${list.map(([l, c, p]) =>
    `<div class="xp-r${c === '—' ? ' xp-new' : ''}"><span class="xp-l">${esc(l)}</span><span class="xp-v"><span class="xp-c">${esc(c)}</span><span class="xp-p">${esc(p)}</span></span></div>`).join('')}</div>`).join('');
  return `<div class="xp" data-sel="${sel}">
  <div class="xp-top">
  <div class="xp-card glass rv">
    <div class="xp-aura" aria-hidden="true"></div>
    <div class="tog pill xp-tog" role="radiogroup" aria-label="Core / Pro">
      <button type="button" role="radio" data-p="core" aria-checked="${sel === 'core'}">Core</button>
      <button type="button" role="radio" data-p="pro" aria-checked="${sel === 'pro'}">Pro</button>
    </div>
    <div class="xp-name"><span>USHA</span> <b data-for="core">Core</b><b data-for="pro">Pro</b></div>
    <span class="xp-hot">${esc(d.p_rec)}</span>
    <p class="xp-desc"><span data-for="core">${esc(x.plansCore)}</span><span data-for="pro">${esc(x.plansPro)}</span></p>
    <p class="xp-both"><b>${esc(x.bothInclude)}</b><span>${esc(x.both)}</span></p>
    <a class="btn btn-p xp-go" href="#free" data-plan="USHA Pro"><span class="d"></span><span>${esc(d.p_cta)}</span></a>
  </div>
  <div class="xp-list rv">${rows}</div>
  </div>
  <div class="xp-ent glass rv">
    <div class="xp-e1"><span class="xp-k">${esc(x.entKick)}</span><h3>USHA <i>Enterprise</i></h3><p>${esc(x.entLead)}</p>
      <a class="btn btn-g xp-ego" href="#free" data-plan="USHA Enterprise"><span>${esc(d.p_cta)}</span> ↗</a></div>
    <div class="xp-e2"><span class="xp-k">${esc(x.entAll)}</span><ul>${x.entAllItems.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>
    <div class="xp-e3"><span class="xp-k">${esc(x.entOnly)}</span>${x.entOnlyItems.map(([n, s], i) => `<div class="xp-chip" style="--i:${i}"><b>${esc(n)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  </div>
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
