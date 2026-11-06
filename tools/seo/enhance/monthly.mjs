// Live monthly deliverables, rendered on Plans from the shared bundle data.
// Keep the existing area tiles/legend (enhance.js); monthly.js drives the
// counters on detail pages, where the home page's 3D bundle is not loaded.
export function monthlyHTML(d, areas, proOnly, i) {
  return `<section class="ch sec" id="deliverables"><div class="wrap">
<div class="rv"><div class="kick">${d.mn_k}</div><h2 class="big">${d.mn_h}</h2><p class="lead">${d.mn_p}</p></div>
<div class="tog pill rv" id="mtog" role="group" aria-label="${d.pg_i_plans}"><button type="button" data-p="0" aria-pressed="false">Core</button><button type="button" data-p="1" class="on" aria-pressed="true">Pro</button></div>
<p class="mn-current" aria-live="polite" aria-atomic="true">USHA <span id="mn-plan">Pro</span></p>
<div class="areas" id="areas">${areas.map(a => `<article class="area glass rv"><h3>${a.k[i]}</h3><p>${a.t[i]}</p><div class="nums">${a.n.map(n => `<div><span>${n[0][i]}</span><b data-a="${n[1]}" data-b="${n[2]}">${n[2]}</b></div>`).join('')}</div></article>`).join('')}</div>
<div class="proonly rv" id="proonly"><b>${d.m_pro}</b>${proOnly.map(p => `<span>${p[i]}</span>`).join('')}</div>
<p class="pnote">${d.p_note}</p>
</div></section>`;
}
