// PREMIERE (/premiere/, /en/premiere/, /ar/premiere/): the page's behaviour.
//  1. the screening room: seats light from the front, 50, 200, then 500;
//  2. the four acts as a playable demo with the example report's data:
//     drop your cut → fill the room (the audience builder) → lights down
//     (the replay: the curve draws, seats go dark, reactions tick in) →
//     the verdict;
//  3. the example report (more on demand, translations on tap) and the plans
//     table (per month / per test; one column at a time on phones);
//  4. the reserve funnel: brief → crowd → plan → reserve → the ticket.
// No reservation leaves the page yet (see submitReservation). Shared helpers:
// prod.js (PD). Data: window.USHA_PREMIERE (premiere-copy.mjs).
(() => {
  const S = window.USHA_PREMIERE; if (!S) return;
  const { C, lang, plans: PLANS, curve: CURVE, quotes: QUOTES, build: B } = S;
  const { D, H, $, $$, esc, fill, reduce } = PD;
  const LI = { en: 0, ar: 1, ru: 2 }[lang] ?? 0;
  const T = (tri) => tri[LI];
  const money = (p) => { const s = Number.isInteger(p) ? p.toLocaleString('en-US') : p.toFixed(2); return lang === 'en' ? '$' + s : (lang === 'ru' ? s.replace(/,/g, ' ').replace('.', ',') : s) + ' $'; };
  const list = (arr) => { try { return new Intl.ListFormat(lang, { type: 'conjunction' }).format(arr); } catch { return arr.join(', '); } };
  const at = (t) => { // % still watching at t seconds
    for (let i = 1; i < CURVE.length; i++) { const [s1, p1] = CURVE[i - 1], [s2, p2] = CURVE[i]; if (t <= s2) return p1 + (p2 - p1) * ((t - s1) / (s2 - s1)); }
    return CURVE[CURVE.length - 1][1];
  };
  let seed = 7; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

  /* =================== the screening room (one renderer, three rooms) =================== */
  const SEG = ['#FFB48A', '#A9ECE5', '#C6EE7E', '#D7B6FF', '#FFD86B', '#8EC5FF', '#F3EEE8', '#FF8A55', '#7BD88F', '#F7A8C8'];
  function room(cv, max) {
    const ctx = cv.getContext && cv.getContext('2d'); if (!ctx) return null;
    const R = { max, lit: max, color: () => SEG[0], alive: () => 1, dim: 0, seats: [] };
    function layout() {
      const r = cv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5);
      R.W = r.width; R.H = r.height; cv.width = Math.round(R.W * dpr); cv.height = Math.round(R.H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // rows curve around the screen above; the front row is shortest
      const rows = Math.max(3, Math.round(Math.sqrt(R.max / 2.6))), seats = [];
      const weights = Array.from({ length: rows }, (_, i) => 1 + i * 0.14), wsum = weights.reduce((a, b) => a + b, 0);
      let left = R.max;
      for (let i = 0; i < rows; i++) {
        const n = i === rows - 1 ? left : Math.max(4, Math.round((R.max * weights[i]) / wsum)); left -= n;
        const y = R.H * (0.12 + 0.82 * (i / Math.max(1, rows - 1))), span = R.W * (0.42 + 0.5 * (i / Math.max(1, rows - 1)));
        for (let k = 0; k < n; k++) { const f = n === 1 ? 0.5 : k / (n - 1), x = R.W / 2 + (f - 0.5) * span, curve = Math.pow((f - 0.5) * 2, 2) * R.H * 0.06; seats.push([x, y - curve, i]); }
      }
      R.seats = seats; R.sz = Math.max(1.4, Math.min(3.4, (R.W * 0.9) / (seats.filter((s) => s[2] === rows - 1).length * 2.2)));
    }
    R.draw = () => {
      ctx.clearRect(0, 0, R.W, R.H);
      R.seats.forEach(([x, y], i) => {
        const on = i < R.lit, a = on ? R.alive(i) : 0;
        if (a > 0) { ctx.globalAlpha = 0.35 + 0.65 * a; ctx.fillStyle = R.color(i); }
        else { ctx.globalAlpha = 0.22; ctx.fillStyle = '#5a5560'; }
        ctx.beginPath(); ctx.arc(x, y, R.sz, 0, 6.283); ctx.fill();
      });
      ctx.globalAlpha = 1;
    };
    R.set = (o) => { const relay = o.max && o.max !== R.max; Object.assign(R, o); if (relay) layout(); R.draw(); };
    layout(); R.draw();
    new ResizeObserver(() => { layout(); R.draw(); }).observe(cv);
    return R;
  }
  // the opening: 50, then 200, then 500
  const hero = $('.pm-room-hero');
  if (hero) {
    const R = room(hero, 500), lit = $('.pm-lit b');
    if (R) {
      if (reduce) R.set({ lit: 500 });
      else {
        R.set({ lit: 0 }); const t0 = performance.now(), keys = [[0, 0], [700, 50], [1500, 50], [2300, 200], [3000, 200], [4200, 500]];
        const step = (now) => {
          const t = now - t0; let n = 500;
          for (let i = 1; i < keys.length; i++) if (t < keys[i][0]) { const [a, na] = keys[i - 1], [b, nb] = keys[i]; n = Math.round(na + (nb - na) * ((t - a) / (b - a))); break; }
          R.set({ lit: n }); if (lit) lit.textContent = n;
          if (t < 4200) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }
  }
  const simw = $('.pm-simw'), tip = $('#pmTip');
  if (simw && tip) simw.addEventListener('click', () => { tip.hidden = !tip.hidden; simw.setAttribute('aria-expanded', String(!tip.hidden)); });

  /* =================== the four acts =================== */
  const tabs = $$('.pm-tab'), acts = $$('.pm-act');
  let cur = 0, demo = false;
  function go(i, focus) {
    cur = i;
    acts.forEach((a) => { a.hidden = +a.dataset.act !== i; });
    tabs.forEach((t) => { const n = +t.dataset.act; t.setAttribute('aria-current', n === i ? 'step' : 'false'); t.classList.toggle('done', n < i); });
    if (i === 1) builder();
    if (i === 2) lightsStart(); else lightsStop();
    if (focus) { const a = acts[i], h = $('h3,.pm-vl,button,input', a); if (h) { h.tabIndex = h.tabIndex < 0 ? -1 : h.tabIndex; h.focus({ preventScroll: true }); } }
    if (focus || demo) { const r = $('.pm-stage').getBoundingClientRect(); if (r.top < 60 || r.top > innerHeight * 0.5) $('#demo .pm-actnav').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
  }
  tabs.forEach((t) => t.addEventListener('click', () => { demo = false; go(+t.dataset.act, true); }));

  // act 1: the three doors and the example cut
  const doors = $$('.pm-door'), cuts = [$('.pm-cut-v'), $('.pm-cut-s'), $('.pm-cut-i')];
  const setDoor = (i, focus) => {
    doors.forEach((d, k) => { d.setAttribute('aria-selected', String(k === i)); d.tabIndex = k === i ? 0 : -1; });
    cuts.forEach((c, k) => { c.hidden = k !== i; });
    $('.pm-cost').textContent = fill(C.acts.cost, { n: 4, type: C.acts.costType[i] });
    if (focus) doors[i].focus();
  };
  doors.forEach((d, i) => d.addEventListener('click', () => setDoor(i)));
  $('.pm-doors').addEventListener('keydown', (e) => {
    const i = doors.findIndex((d) => d.getAttribute('aria-selected') === 'true');
    let k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!k) return;
    if (H.dir === 'rtl') k = -k; e.preventDefault(); setDoor((i + k + 3) % 3, true);
  });
  let loaded = false;
  function loadCut() {
    return new Promise((res) => {
      const st = $('.pm-status'), cut = $('.pm-cut-v');
      setDoor(0); st.textContent = C.acts.loading;
      $$('.pm-film i', cut).forEach((f, i) => { f.style.transitionDelay = reduce ? '0ms' : `${i * 26}ms`; });
      cut.classList.add('in');
      setTimeout(() => { st.textContent = `${C.acts.done} ${C.acts.ready}`; loaded = true; res(); }, reduce ? 50 : 1200);
    });
  }
  $('.pm-load').addEventListener('click', () => loadCut());
  $('.pm-to1').addEventListener('click', async () => { if (!loaded) await loadCut(); go(1, true); });

  /* ---------- act 2: the audience builder ---------- */
  const PLAN_SEATS = PLANS.map((p) => p.seats);
  const crowd = { plan: 4, age: [18, 44], g: 0, c: lang === 'ru' ? ['ru'] : ['uae', 'ksa', 'eg'], l: lang === 'ru' ? ['ru'] : ['ar-g', 'ar-e'], i: [1], p: 0, s: 1, know: 70, cr: 15, preset: -1, shuffle: 0 };
  const savedCrowd = PD.store.get('usha-premiere-crowd'); if (savedCrowd && savedCrowd.c) Object.assign(crowd, savedCrowd);
  const Bc = C.builder;
  const country = Object.fromEntries(B.countries.map(([k, n, lg]) => [k, { n: T(n), lg }]));
  const langName = Object.fromEntries(B.langs.map(([k, n]) => [k, T(n)]));
  function applyPreset(pr, idx) {
    Object.assign(crowd, { age: pr.age.slice(), g: pr.g, c: pr.c.slice(), l: pr.l.slice(), i: pr.i.slice(), p: pr.p, s: pr.s, cr: pr.cr, preset: idx });
  }
  const valid = () => crowd.c.length && crowd.l.length;
  function warnings() {
    const w = [];
    if (!valid()) w.push(Bc.warn.need);
    if (crowd.cr > 30) w.push(Bc.warn.critics);
    const nonAr = crowd.l.filter((x) => !x.startsWith('ar'));
    if (nonAr.length && crowd.l.length) w.push(fill(Bc.warn.lang, { n: Math.round((nonAr.length / crowd.l.length) * 100), l: langName[nonAr[0]] }));
    if (crowd.c.length === 1 && crowd.l.length === 1 && crowd.i.length <= 2 && crowd.age[1] - crowd.age[0] <= 10) w.push(Bc.warn.narrow);
    return w;
  }
  function viewers() {
    seed = 101 + crowd.shuffle * 31 + crowd.c.length * 7 + crowd.age[0];
    return [0, 1, 2].map(() => {
      const ck = crowd.c[Math.floor(rnd() * crowd.c.length)] || 'uae', lg = country[ck].lg, pool = B.names[lg] || B.names['ar-g'];
      const sex = crowd.g === 1 ? 0 : crowd.g === 2 ? 1 : (rnd() < 0.5 ? 0 : 1), names = pool[sex], name = T(names[Math.floor(rnd() * names.length)]);
      const cities = B.cities[ck], city = T(cities[Math.floor(rnd() * cities.length)]);
      const age = crowd.age[0] + Math.floor(rnd() * (crowd.age[1] - crowd.age[0] + 1));
      const ints = crowd.i.slice().sort(() => rnd() - 0.5).slice(0, 2).map((x) => T(B.interests[x]));
      return { name, age, city, p: B.platforms[crowd.p], ints, line: T(B.lines[Math.floor(rnd() * B.lines.length)]) };
    });
  }
  function summary(n) {
    const who = crowd.g === 1 ? Bc.whoW : crowd.g === 2 ? Bc.whoM : Bc.whoAll;
    const where = list(crowd.c.slice(0, 2).map((k) => T(B.cities[k][0])));
    return fill(Bc.summary, { n, who, a1: crowd.age[0], a2: crowd.age[1], where: where || '—', p: B.platforms[crowd.p], k: crowd.know });
  }
  let bRoom = null;
  const chip = (g, v, label, on) => `<button type="button" class="pd-chip" data-g="${g}" data-v="${v}" aria-pressed="${on}">${esc(label)}</button>`;
  const segc = (g, opts, val, label) => `<div class="pm-segc" role="group" aria-label="${esc(label)}">${opts.map((o, i) => `<button type="button" data-g="${g}" data-v="${i}" aria-pressed="${i === val}">${esc(o)}</button>`).join('')}</div>`;
  function builderHTML() {
    const G = Bc.groups;
    const presets = [...B.presets.map((p, i) => [i, T(p.n)]), [-2, T(B.lina.n)]];
    return `<div class="pm-ctl">
<div class="pm-row"><span class="pm-rl"><b>${esc(Bc.presets)}</b></span><div class="pm-presets">${presets.map(([i, n]) => `<button type="button" class="pd-chip" data-preset="${i}" aria-pressed="${crowd.preset === i}">${esc(n)}</button>`).join('')}</div></div>
<div class="pm-row"><span class="pm-rl"><b>${esc(Bc.plan)}</b></span>${segc('plan', PLANS.map((p) => `${p.id} · ${p.seats}`), crowd.plan, Bc.plan)}</div>
<details class="pm-grp" open><summary>${esc(G.who)}</summary><div class="pm-gb">
<div class="pm-row"><span class="pm-rl"><span>${esc(Bc.age)}</span><b class="num pm-agev">${crowd.age[0]}–${crowd.age[1]}</b></span><div class="pm-dual"><input class="pm-range" type="range" min="18" max="65" value="${crowd.age[0]}" data-g="a0" aria-label="${esc(Bc.age)} min"><input class="pm-range" type="range" min="18" max="65" value="${crowd.age[1]}" data-g="a1" aria-label="${esc(Bc.age)} max"></div></div>
<div class="pm-row"><span class="pm-rl"><span>${esc(Bc.gender)}</span></span>${segc('g', Bc.genders, crowd.g, Bc.gender)}</div></div></details>
<details class="pm-grp" open><summary>${esc(G.where)}</summary><div class="pm-gb"><div class="pm-row"><span class="pm-rl"><span>${esc(Bc.country)}</span></span><div class="pm-chips">${B.countries.map(([k, n]) => chip('c', k, T(n), crowd.c.includes(k))).join('')}</div></div></div></details>
<details class="pm-grp" open><summary>${esc(G.lang)}</summary><div class="pm-gb"><div class="pm-row"><span class="pm-rl"><span>${esc(Bc.language)}</span></span><div class="pm-chips">${B.langs.map(([k, n]) => chip('l', k, T(n), crowd.l.includes(k))).join('')}</div></div></div></details>
<details class="pm-grp"><summary>${esc(G.watch)}</summary><div class="pm-gb"><div class="pm-row"><span class="pm-rl"><span>${esc(Bc.interests)}</span><span>${esc(Bc.interestsHint)}</span></span><div class="pm-chips">${B.interests.map((n, k) => chip('i', k, T(n), crowd.i.includes(k))).join('')}</div></div></div></details>
<details class="pm-grp"><summary>${esc(G.how)}</summary><div class="pm-gb">
<div class="pd-f"><label class="pd-l" for="pmPlat">${esc(Bc.platform)}</label><select class="pd-i" id="pmPlat" data-g="p">${B.platforms.map((p, k) => `<option value="${k}"${k === crowd.p ? ' selected' : ''}>${p}</option>`).join('')}</select></div>
<div class="pm-row"><span class="pm-rl"><span>${esc(Bc.scroll)}</span></span>${segc('s', Bc.scrolls, crowd.s, Bc.scroll)}</div>
<div class="pm-row"><span class="pm-rl"><span>${esc(Bc.know)} · ${esc(Bc.knows[0])}</span><b class="num pm-knowv">${crowd.know}%</b></span><input class="pm-range" type="range" min="0" max="100" step="5" value="${crowd.know}" data-g="know" aria-label="${esc(Bc.knows[0])}"></div>
<div class="pm-row"><span class="pm-rl"><span>${esc(Bc.critics)}</span><b class="num pm-crv">${crowd.cr}%</b></span><input class="pm-range" type="range" min="0" max="40" step="5" value="${crowd.cr}" data-g="cr" aria-label="${esc(Bc.critics)}"></div>
</div></details>
</div>
<aside class="pm-prev" aria-label="${esc(Bc.counter.replace('{n}', '').replace('{max}', ''))}">
<canvas class="pm-room pm-room-b" aria-hidden="true"></canvas>
<div class="pm-cnt"><b class="num pm-cn"></b><span class="pm-cfull"></span></div>
<p class="pm-sum" aria-live="polite"></p>
<ul class="pm-viewers"></ul>
<button type="button" class="pd-link pm-shuffle">${esc(Bc.shuffle)}</button>
<div class="pm-warns" aria-live="polite"></div>
<button type="button" class="btn btn-p pm-go"><span class="d"></span>${esc(Bc.go)}</button>
</aside>`;
  }
  function paintPreview() {
    const box = $('.pm-builder'), max = PLAN_SEATS[crowd.plan], ok = valid() && crowd.cr <= 30, n = ok ? max : 0;
    const cols = crowd.c.map((k) => SEG[B.countries.findIndex((x) => x[0] === k) % SEG.length]);
    if (bRoom) bRoom.set({ max, lit: n, color: (i) => cols[i % Math.max(1, cols.length)] || SEG[0] });
    $('.pm-cn', box).textContent = fill(Bc.counter, { n, max });
    const full = $('.pm-cfull', box); full.textContent = ok ? Bc.full : ''; full.classList.toggle('pm-full', !!ok);
    $('.pm-sum', box).textContent = ok ? summary(n) : '';
    $('.pm-viewers', box).innerHTML = ok ? viewers().map((v) => `<li><b>${esc(v.name)}, <span class="num">${v.age}</span>, ${esc(v.city)}</b><small>${esc(v.p)} · ${esc(v.ints.join(', '))}</small><small>«${esc(v.line)}»</small></li>`).join('') : '';
    $('.pm-warns', box).innerHTML = warnings().map((w) => `<p class="pm-warn">${esc(w)}</p>`).join('');
    const go2 = $('.pm-go', box); go2.disabled = !ok;
    $('.pm-agev', box).textContent = `${crowd.age[0]}–${crowd.age[1]}`; $('.pm-knowv', box).textContent = crowd.know + '%'; $('.pm-crv', box).textContent = crowd.cr + '%';
    PD.store.set('usha-premiere-crowd', crowd);
  }
  let built = false;
  function builder() {
    const box = $('.pm-builder');
    if (!built) {
      built = true; box.innerHTML = builderHTML(); bRoom = room($('.pm-room-b', box), PLAN_SEATS[crowd.plan]); wireBuilder();
    }
    paintPreview();
  }
  function rerender() { const f = D.activeElement && D.activeElement.dataset ? [D.activeElement.dataset.g, D.activeElement.dataset.v, D.activeElement.dataset.preset] : null; const open = $$('.pm-grp', $('.pm-builder')).map((d) => d.open); $('.pm-builder').innerHTML = builderHTML(); $$('.pm-grp', $('.pm-builder')).forEach((d, i) => { d.open = open[i]; }); bRoom = room($('.pm-room-b'), PLAN_SEATS[crowd.plan]); paintPreview(); if (f) { const el = f[2] != null ? $(`[data-preset="${f[2]}"]`) : $(`[data-g="${f[0]}"]${f[1] != null ? `[data-v="${f[1]}"]` : ''}`); if (el) el.focus({ preventScroll: true }); } }
  function wireBuilder() {
    const box = $('.pm-builder');
    box.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.preset != null) { const i = +b.dataset.preset; applyPreset(i === -2 ? B.lina : B.presets[i], i); rerender(); return; }
      if (b.classList.contains('pm-shuffle')) { crowd.shuffle++; paintPreview(); return; }
      if (b.classList.contains('pm-go')) { if (valid()) { demo = false; go(2, true); } return; }
      const g = b.dataset.g, v = b.dataset.v; if (!g) return;
      if (g === 'plan' || g === 'g' || g === 's') { crowd[g] = +v; crowd.preset = -1; rerender(); return; }
      const key = g === 'i' ? +v : v, arr = crowd[g];
      if (arr.includes(key)) crowd[g] = arr.filter((x) => x !== key); else { if (g === 'i' && arr.length >= 6) return; crowd[g] = [...arr, key]; }
      crowd.preset = -1; b.setAttribute('aria-pressed', String(crowd[g].includes(key))); $$('[data-preset]', box).forEach((x) => x.setAttribute('aria-pressed', 'false')); paintPreview();
    });
    box.addEventListener('input', (e) => {
      const g = e.target.dataset.g; if (!g) return; const v = +e.target.value;
      if (g === 'a0') crowd.age = [Math.min(v, crowd.age[1] - 5), crowd.age[1]];
      else if (g === 'a1') crowd.age = [crowd.age[0], Math.max(v, crowd.age[0] + 5)];
      else if (g === 'p') crowd.p = v; else crowd[g] = v;
      if (g === 'a0' || g === 'a1') { $('[data-g=a0]', box).value = crowd.age[0]; $('[data-g=a1]', box).value = crowd.age[1]; }
      paintPreview();
    });
  }

  /* ---------- act 3: lights down ---------- */
  const lights = $('.pm-lights');
  let lRoom = null, lt = 0, lraf = 0, last = 0, speed = 1, lpaused = false, events = [], shown = 0, lSeeds = [];
  const descr = (q) => q[5][lang].split(' · ')[0];
  function buildEvents() {
    const ev = [];
    QUOTES.forEach((q) => { const sec = q[2]; ev.push({ t: Math.min(sec, 37.5), k: sec >= 38 ? 'end' : 'scroll', v: descr(q), q }); });
    ev.push({ t: 36, k: 'send', v: descr(QUOTES[4]) }, { t: 37, k: 'rewatch', v: descr(QUOTES[11]) }, { t: 37.6, k: 'save', v: descr(QUOTES[3]) }, { t: 37.8, k: 'follow', v: descr(QUOTES[1]) });
    return ev.sort((a, b) => a.t - b.t);
  }
  const ttime = (t) => `0:${String(Math.floor(t)).padStart(2, '0')}`;
  function paintLights() {
    const p = at(lt);
    lRoom && lRoom.set({ alive: (i) => (lSeeds[i] * 100 < p ? 1 : 0) });
    const svg = $('.pm-live'), c1 = $('.pm-c1', svg), dot = $('.pm-cdot', svg);
    c1.style.setProperty('--off', String(1 - lt / 38));
    dot.setAttribute('cx', (44 + (lt / 38) * 696).toFixed(1)); dot.setAttribute('cy', (18 + ((100 - p) / 100) * 196).toFixed(1));
    const m = { watching: p, held: lt < 3 ? p : 63, sent: (18 * lt) / 38, follow: (5.8 * lt) / 38 };
    $$('.pm-meters [data-m]', lights).forEach((el) => { const v = m[el.dataset.m]; $('dd', el).textContent = `${(Math.round(v * 10) / 10).toFixed(el.dataset.m === 'follow' ? 1 : 0)}%`.replace('.', lang === 'ru' ? ',' : '.'); $('.pm-mbar i', el).style.setProperty('--w', `${Math.min(100, v)}%`); });
    $('.pm-clock', lights).textContent = ttime(lt);
    while (shown < events.length && events[shown].t <= lt) tick(events[shown++]);
  }
  function tick(ev) {
    const L = C.lights, li = D.createElement('li');
    li.textContent = fill(L.tick[ev.k], { v: ev.v, t: ttime(ev.t) }); if (ev.k === 'scroll') li.className = 'out';
    const tk = $('.pm-ticker', lights); tk.prepend(li); while (tk.children.length > 6) tk.lastChild.remove();
    if (ev.q && !reduce) {
      const bb = D.createElement('div'); bb.className = 'pm-bb'; bb.dir = 'auto';
      const tr = ev.q[4][lang]; bb.innerHTML = `${esc(ev.q[3])}${tr ? `<small>${esc(tr)}</small>` : ''}`;
      const s = lRoom && lRoom.seats[Math.floor(rnd() * lRoom.seats.length)];
      if (s) { bb.style.left = `${Math.min(s[0], lRoom.W - 250)}px`; bb.style.top = `${Math.max(6, s[1] - 60)}px`; }
      const holder = $('.pm-bubbles', lights); holder.append(bb); setTimeout(() => bb.remove(), 3200 / speed);
    }
  }
  function loop(now) {
    lraf = 0; if (lpaused) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    lt = Math.min(38, lt + dt * 1.9 * speed); paintLights();
    if (lt >= 38) { setTimeout(() => { if (cur === 2) go(3, true); }, 900); return; }
    lraf = requestAnimationFrame(loop);
  }
  function lightsStart() {
    events = buildEvents(); shown = 0; lt = 0; lpaused = false; speed = 1; seed = 3;
    $('.pm-ticker', lights).innerHTML = ''; $('.pm-bubbles', lights).innerHTML = '';
    const max = PLAN_SEATS[crowd.plan];
    if (!lRoom) lRoom = room($('.pm-room-live'), max); else lRoom.set({ max });
    const cols = crowd.c.map((k) => SEG[B.countries.findIndex((x) => x[0] === k) % SEG.length]);
    lSeeds = Array.from({ length: max }, () => rnd());
    lRoom.set({ lit: max, color: (i) => cols[i % Math.max(1, cols.length)] || SEG[0] });
    $('.pm-lspeed', lights).setAttribute('aria-pressed', 'false'); $('.pm-lpause', lights).textContent = C.lights.pause;
    lights.classList.add('dim');
    if (reduce) { // calm: the curve appears complete; the ticker is a static list
      lt = 38; const keep = events; paintLights(); $('.pm-ticker', lights).innerHTML = keep.slice(0, 10).map((ev) => `<li>${esc(fill(C.lights.tick[ev.k], { v: ev.v, t: ttime(ev.t) }))}</li>`).join(''); return;
    }
    last = performance.now(); lraf = requestAnimationFrame(loop);
  }
  function lightsStop() { if (lraf) cancelAnimationFrame(lraf); lraf = 0; lights.classList.remove('dim'); }
  $('.pm-lpause', lights).addEventListener('click', (e) => { lpaused = !lpaused; e.currentTarget.textContent = lpaused ? C.lights.play : C.lights.pause; if (!lpaused && cur === 2 && lt < 38) { last = performance.now(); lraf = requestAnimationFrame(loop); } });
  $('.pm-lspeed', lights).addEventListener('click', (e) => { speed = speed === 1 ? 2 : 1; e.currentTarget.setAttribute('aria-pressed', String(speed === 2)); });
  $('.pm-lskip', lights).addEventListener('click', () => go(3, true));

  // act 4
  $('.pm-retest').addEventListener('click', () => { $('.pm-retestn').hidden = false; });
  $('.pm-openrep').addEventListener('click', () => openReport());
  // the demo buttons
  $('.pm-skip').addEventListener('click', () => { demo = false; go(3, true); });
  $('.pm-play').addEventListener('click', async () => {
    demo = true; go(0); await loadCut(); if (!demo) return;
    await new Promise((r) => setTimeout(r, reduce ? 0 : 900)); if (!demo) return;
    applyPreset(B.lina, -2); go(1); rerender();
    await new Promise((r) => setTimeout(r, reduce ? 0 : 2600)); if (!demo) return;
    go(2);
  });

  /* =================== the report, the plans =================== */
  const more = $('#pmMore'), moreB = $('.pm-moreb');
  function openReport(force) {
    const open = force ?? true; more.classList.toggle('open', open); moreB.setAttribute('aria-expanded', String(open)); moreB.textContent = open ? moreB.dataset.close : moreB.dataset.open;
  }
  moreB.addEventListener('click', () => { const was = more.classList.contains('open'); openReport(!was); if (was) $('#report').scrollIntoView({ block: 'start' }); });
  if (location.hash === '#report') openReport(true);
  $$('.pm-qtr').forEach((b) => b.addEventListener('click', () => {
    const t = $('.pm-qt', b.closest('.pm-q')), on = t.hidden; t.hidden = !on; b.setAttribute('aria-expanded', String(on)); b.textContent = on ? C.lights.original : C.lights.translate;
  }));
  const table = $('.pm-table');
  $$('.pm-tg').forEach((b) => b.addEventListener('click', () => { table.dataset.mode = b.dataset.mode; $$('.pm-tg').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); }));
  $$('.pm-pk').forEach((b) => b.addEventListener('click', () => { table.dataset.col = b.dataset.col; $$('.pm-pk').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); }));

  /* =================== the reserve funnel =================== */
  const Fn = C.funnel, DRAFT = 'usha-premiere-draft';
  // TODO(premiere-reservations): send the payload to the team's reservation
  // endpoint once it exists and is recorded in control-room/DECISIONS.md.
  // Never to the live chat server. Until then nothing leaves this page.
  function submitReservation(payload) { void payload; return new Promise((r) => setTimeout(r, reduce ? 200 : 900)); }
  const blank = () => ({ step: 0, v: { type: 0, title: '', link: '', script: '', ideaTitle: '', idea: '', madeFor: '0', goal: '0', question: '', preset: '0', plan: '', addons: [], channel: lang === 'ru' ? 'tg' : 'wa', contact: lang === 'ru' ? '' : '+971 ', mlang: String(LI), time: '', consent: false, tips: false } });
  let fm = null, fs = null;
  const fld = (k, label, ctrl, help = '') => `<div class="pd-f" data-k="${k}"><label class="pd-l" for="pf-${k}">${esc(label)}</label>${ctrl}${help}<p class="pd-e" id="pf-${k}-e" aria-live="polite"></p></div>`;
  const inp = (k, v, a = '') => `<input class="pd-i" id="pf-${k}" name="${k}" value="${esc(v)}" aria-describedby="pf-${k}-e" ${a}>`;
  const sel = (k, v, opts) => `<select class="pd-i" id="pf-${k}" name="${k}">${opts.map((o, i) => `<option value="${i}"${String(i) === String(v) ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  const crowdSize = () => PLAN_SEATS[crowd.plan];
  const builtCrowd = () => built || !!PD.store.get('usha-premiere-crowd');
  const fitPlan = () => { const n = builtCrowd() ? crowdSize() : 50; return String(PLAN_SEATS.findIndex((s) => s >= n)); };
  const chName = (v) => (v.channel === 'tg' ? 'Telegram' : 'WhatsApp');
  const addonsTotal = (v) => v.addons.reduce((s, i) => s + C.experts.panels[i][2], 0);
  function pane() {
    const v = fs.v, Bf = Fn.brief;
    if (fs.step === 0) {
      const t = +v.type;
      const body = t === 0 ? fld('title', Bf.title, inp('title', v.title, 'maxlength="80"')) + fld('link', Bf.link, inp('link', v.link, 'type="url" inputmode="url" dir="ltr" placeholder="https://"'), `<p class="pd-h">${esc(Bf.linkHelp)}</p>`)
        : t === 1 ? fld('title', Bf.title, inp('title', v.title, 'maxlength="80"')) + fld('script', Bf.script, `<textarea class="pd-i" id="pf-script" name="script" rows="6" placeholder="${esc(Bf.scriptPh)}" aria-describedby="pf-script-e">${esc(v.script)}</textarea>`)
        : fld('ideaTitle', Bf.ideaTitle, inp('ideaTitle', v.ideaTitle, 'maxlength="80"')) + fld('idea', Bf.idea, `<textarea class="pd-i" id="pf-idea" name="idea" rows="4" aria-describedby="pf-idea-e">${esc(v.idea)}</textarea>`);
      return `<div class="pd-pane"><div class="pm-doors pm-ftabs" role="radiogroup" aria-label="${esc(Fn.steps[0])}">${Bf.tabs.map((x, i) => `<button type="button" class="pm-door" role="radio" aria-checked="${i === t}" aria-selected="${i === t}" data-type="${i}">${esc(x)}</button>`).join('')}</div>${body}
<div class="pd-grid2">${fld('madeFor', Bf.madeFor, sel('madeFor', v.madeFor, Fn.platforms))}${fld('goal', Bf.goal, sel('goal', v.goal, Bf.goals))}</div>
${fld('question', Bf.question, inp('question', v.question, `maxlength="200" placeholder="${esc(Bf.questionPh)}"`))}</div>`;
    }
    if (fs.step === 1) {
      const kept = builtCrowd();
      return `<div class="pd-pane"><h3 class="pm-bh">${esc(Fn.crowd.t)}</h3>${kept ? `<p class="pm-crowdc">${esc(Fn.crowd.kept)}<br>${esc(summary(crowdSize()))}</p><button type="button" class="pd-link pm-fchange">${esc(Fn.crowd.change)}</button>`
        : `<p class="pd-h">${esc(Fn.crowd.none)}</p>${fld('preset', Fn.crowd.preset, sel('preset', v.preset, B.presets.map((p) => T(p.n))))}`}</div>`;
    }
    if (fs.step === 2) {
      const types = C.acts.costType;
      return `<div class="pd-pane"><h3 class="pm-bh">${esc(Fn.plan.t)}</h3><p class="pd-h">${esc(fill(Fn.plan.fit, { type: types[+v.type], n: builtCrowd() ? crowdSize() : 50 }))} ${esc(Fn.plan.pre)}</p>
<fieldset class="br-fs pd-f" data-k="plan" style="border:0;padding:0;margin:0"><legend class="sr">${esc(Fn.plan.t)}</legend><div class="pm-plans-rc">${PLANS.map((p, i) => `<label><input type="radio" name="plan" value="${i}"${String(i) === v.plan ? ' checked' : ''}><b>${p.id}${p.rec ? ` · ${esc(C.plans.rec)}` : ''}</b><span class="num">${esc(fill(C.plans.perMonth, { p: money(p.price) }))}</span><small>${p.seats} · ${esc(C.plans.taglines[i])}</small></label>`).join('')}</div><p class="pd-e" id="pf-plan-e" aria-live="polite"></p></fieldset>
<h4 class="pd-l">${esc(Fn.plan.addons)}</h4><div class="pm-addons">${C.experts.panels.map(([t, n, p], i) => `<label><input type="checkbox" name="addon" value="${i}"${v.addons.includes(i) ? ' checked' : ''}><span><span class="pd-tag pm-realt">${esc(fill(C.experts.realBadge, { n }))}</span><br>${esc(t)}</span><b class="num">${esc(money(p))}</b></label>`).join('')}</div>
<p class="pm-total" aria-live="polite">${esc(totalLine(v))}</p></div>`;
    }
    if (fs.step === 3) {
      const R = Fn.reserve, tg = v.channel === 'tg', p = PLANS[+v.plan], title = +v.type === 2 ? v.ideaTitle : v.title;
      return `<div class="pd-pane"><h3 class="pm-bh">${esc(R.t)}</h3><dl class="pm-sumc">
<div><dt>${esc(Fn.steps[2])}</dt><dd>${p.id} · ${esc(fill(C.plans.perMonth, { p: money(p.price) }))} <button type="button" class="pd-link pm-fgo" data-step="2">${esc(R.change)}</button></dd></div>
${v.addons.length ? `<div><dt>${esc(C.experts.real)}</dt><dd>${v.addons.map((i) => `${esc(money(C.experts.panels[i][2]))} (${esc(C.experts.panels[i][1])})`).join(', ')}</dd></div>` : ''}
<div><dt>${esc(Fn.steps[0])}</dt><dd>${esc(Fn.brief.tabs[+v.type])} · ${esc(title)} <button type="button" class="pd-link pm-fgo" data-step="0">${esc(R.change)}</button></dd></div>
<div><dt>${esc(Fn.steps[1])}</dt><dd>${esc(builtCrowd() ? summary(Math.min(crowdSize(), p.seats)) : T(B.presets[+v.preset].n))}</dd></div></dl>
<fieldset class="pd-f br-fs" data-k="channel" style="border:0;padding:0;margin:0"><legend class="pd-l">${esc(R.channel)}</legend><div class="pd-rc">${[['wa', 'WhatsApp'], ['tg', 'Telegram']].map(([k, l]) => `<label><input type="radio" name="channel" value="${k}"${v.channel === k ? ' checked' : ''}>${l}</label>`).join('')}</div></fieldset>
${fld('contact', tg ? R.tg : R.wa, inp('contact', v.contact, `dir="ltr" ${tg ? 'placeholder="@username" autocomplete="off"' : 'type="tel" inputmode="tel" autocomplete="tel" placeholder="+971 50 123 4567"'}`))}
<div class="pd-grid2">${fld('mlang', R.lang, sel('mlang', v.mlang, ['English', 'العربية', 'Русский']))}${fld('time', R.time, `<select class="pd-i" id="pf-time" name="time"><option value="">${esc(Fn.opt)}</option>${R.times.map((o, i) => `<option value="${i}"${String(i) === v.time ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`)}</div>
<div class="pd-f" data-k="consent"><label class="pd-check"><input type="checkbox" id="pf-consent" name="consent"${v.consent ? ' checked' : ''}><span>${esc(fill(R.consent, { ch: chName(v) }))}</span></label><p class="pd-e" id="pf-consent-e" aria-live="polite"></p></div>
<label class="pd-check"><input type="checkbox" name="tips"${v.tips ? ' checked' : ''}><span>${esc(fill(R.tips, { ch: chName(v) }))}</span></label>
<p class="pm-under2 br-nopay">${esc(fill(R.under, { ch: chName(v) }))}</p></div>`;
    }
    return '';
  }
  const totalLine = (v) => { const p = v.plan === '' ? null : PLANS[+v.plan]; if (!p) return Fn.plan.none; const a = addonsTotal(v); return fill(Fn.plan.total, { p: money(p.price), a: a ? fill(Fn.plan.plus, { p: money(a) }) : '' }); };
  function shell() {
    const steps = Fn.steps, last = fs.step === 3;
    return `<div class="pd-hd"><div><p class="pm-fhk" id="pmFunT">PREMIERE · ${esc(Fn.title)}</p><p class="pm-fht">${esc(steps[fs.step])}</p></div><button type="button" class="pd-x" aria-label="${esc(C.lights.skip.length ? 'Close' : 'Close')}"></button></div>
<div class="pm-fprog"><ol class="pd-steps" aria-hidden="true">${steps.map((s, i) => `<li class="${i < fs.step ? 'done' : i === fs.step ? 'on' : ''}">${esc(s)}</li>`).join('')}</ol></div>
<form class="pd-body pm-fbody" novalidate>${pane()}</form>
<div class="pd-ft"><button type="button" class="btn btn-g btn-s pm-fback"${fs.step === 0 ? ' hidden' : ''}>${esc(Fn.back)}</button><button type="button" class="btn btn-p pm-fnext"><span class="d"></span>${esc(last ? Fn.reserve.btn : Fn.next)}</button></div>`;
  }
  function read() {
    const f = $('.pm-fbody', fm.panel); if (!f) return;
    const v = fs.v; if (fs.step === 2) v.addons = [];
    $$('input,select,textarea', f).forEach((el) => {
      if (el.name === 'addon') { if (el.checked) v.addons.push(+el.value); }
      else if (el.type === 'radio') { if (el.checked) v[el.name] = el.value; }
      else if (el.type === 'checkbox') v[el.name] = el.checked;
      else if (el.name) v[el.name] = el.value;
    });
  }
  function err(k, m) { const box = $(`[data-k="${k}"]`, fm.panel); if (!box) return; const pe = $('.pd-e', box); if (pe) pe.textContent = m || ''; const c = $(`#pf-${k}`, box); if (c) { if (m) c.setAttribute('aria-invalid', 'true'); else c.removeAttribute('aria-invalid'); } }
  function check() {
    const v = fs.v, E = Fn.err, es = [];
    const card = (k) => { if (PD.valid.card(v[k])) es.push([k, E.card]); };
    if (fs.step === 0) {
      const t = +v.type;
      if (t < 2) { if (v.title.trim().length < 2) es.push(['title', E.title]); else card('title'); }
      if (t === 0 && v.link.trim() && !/^https:\/\/\S+\.\S+/.test(v.link.trim())) es.push(['link', E.link]);
      if (t === 1) { if (!v.script.trim()) es.push(['script', E.script]); else if (v.script.length > 8000) es.push(['script', fill(E.scriptLong, { n: v.script.length })]); else card('script'); }
      if (t === 2) { if (v.ideaTitle.trim().length < 2) es.push(['ideaTitle', E.title]); if (!v.idea.trim()) es.push(['idea', E.idea]); else if (v.idea.length > 600) es.push(['idea', E.ideaLong]); else card('idea'); }
      if (!v.question.trim()) es.push(['question', E.question]); else card('question');
    } else if (fs.step === 2) { if (v.plan === '') es.push(['plan', E.plan]); }
    else if (fs.step === 3) {
      const tg = v.channel === 'tg';
      if (!(tg ? PD.valid.tg(v.contact) : PD.valid.phone(v.contact))) es.push(['contact', tg ? E.tg : E.wa]);
      if (!v.consent) es.push(['consent', fill(E.consent, { ch: chName(v) })]);
    }
    $$('[data-k]', fm.panel).forEach((x) => err(x.dataset.k, ''));
    es.forEach(([k, m]) => err(k, m));
    if (es.length) { const c = $(`#pf-${es[0][0]}`, fm.panel) || $(`[data-k="${es[0][0]}"] input`, fm.panel); if (c) c.focus(); }
    return !es.length;
  }
  function paint(focusSel) {
    fm.set(shell()); wire();
    const b = $('.pm-fbody', fm.panel); b.scrollTop = 0;
    const f = (focusSel && $(focusSel, fm.panel)) || $('input:not([type=radio]):not([type=checkbox]),textarea,select', b) || $('.pd-x', fm.panel);
    f.focus({ preventScroll: true });
  }
  const save = () => PD.store.set(DRAFT, fs);
  function wire() {
    const p = fm.panel, form = $('.pm-fbody', p);
    $('.pd-x', p).setAttribute('aria-label', lang === 'ar' ? 'إغلاق' : lang === 'ru' ? 'Закрыть' : 'Close');
    $('.pd-x', p).addEventListener('click', () => fm.close());
    form.addEventListener('submit', (e) => e.preventDefault());
    form.addEventListener('input', (e) => { read(); save(); if (e.target.name) err(e.target.name, ''); if (fs.step === 2) { const t = $('.pm-total', form); if (t) t.textContent = totalLine(fs.v); } });
    form.addEventListener('change', (e) => { read(); save(); if (e.target.name === 'channel') { const v = fs.v; v.contact = v.channel === 'tg' ? (v.contact.startsWith('@') ? v.contact : '') : (v.contact.startsWith('+') ? v.contact : '+971 '); paint(`input[name=channel][value=${v.channel}]`); } else if (fs.step === 2) { const t = $('.pm-total', form); if (t) t.textContent = totalLine(fs.v); } });
    $$('[data-type]', p).forEach((b) => b.addEventListener('click', () => { read(); fs.v.type = +b.dataset.type; save(); paint(`[data-type="${b.dataset.type}"]`); }));
    $$('.pm-fgo', p).forEach((b) => b.addEventListener('click', () => { read(); fs.step = +b.dataset.step; save(); paint(); }));
    const ch = $('.pm-fchange', p); if (ch) ch.addEventListener('click', () => { fm.close(true); go(1); $('#demo').scrollIntoView({ block: 'start' }); });
    const back = $('.pm-fback', p); if (back) back.addEventListener('click', () => { read(); fs.step--; save(); paint(); });
    $('.pm-fnext', p).addEventListener('click', async (e) => {
      read();
      if (fs.step < 3) { if (!check()) return; fs.step++; if (fs.step === 2 && fs.v.plan === '') fs.v.plan = fitPlan(); save(); paint(); return; }
      if (!check()) return;
      const btn = e.currentTarget; btn.disabled = true; btn.textContent = Fn.reserve.sending;
      const code = PD.ref('PRM'), v = fs.v;
      await submitReservation({ code, plan: PLANS[+v.plan].id, addons: v.addons, brief: { type: ['video', 'script', 'idea'][+v.type], title: +v.type === 2 ? v.ideaTitle : v.title, link: v.link, script: v.script, idea: v.idea, made_for: Fn.platforms[+v.madeFor], goal: Fn.brief.goals[+v.goal], question: v.question }, crowd: builtCrowd() ? crowd : { preset: +v.preset }, channel: v.channel, contact: v.contact, message_language: v.mlang, best_time: v.time, consent: true, tips: v.tips, page_language: lang });
      PD.store.del(DRAFT);
      done(code);
    });
  }
  function done(code) {
    const v = fs.v, Dn = Fn.done, ch = chName(v), plan = PLANS[+v.plan].id;
    const real = v.addons.length ? C.experts.panels[Math.max(...v.addons)][1] : '';
    fm.set(`<div class="pd-hd"><div><p class="pm-fhk">PREMIERE</p><p class="pm-fht">${esc(Fn.steps[4])}</p></div><button type="button" class="pd-x" aria-label="${lang === 'ar' ? 'إغلاق' : lang === 'ru' ? 'Закрыть' : 'Close'}"></button></div>
<div class="pd-body"><div class="pm-ticket"><div class="pm-tk1"><span class="pm-stamp pm-stamp-post"><span>${esc(Dn.stamp)}</span></span><h2 id="pmDoneT" tabindex="-1">${esc(Dn.h)}</h2><p>${esc(fill(Dn.body, { ch, plan }))}</p></div>
<div class="pm-tk2"><small>${esc(fill(Dn.admit, { plan }))}</small><small>${esc(Dn.ref)}</small><b class="num">${esc(code)}</b></div></div>
<ol class="pm-tl">${Dn.tl.map((x) => `<li>${esc(fill(x, { ch }))}</li>`).join('')}</ol>
${real ? `<p class="pm-note" style="text-align:center">${esc(fill(Dn.realLine, { n: real }))}</p>` : ''}</div>
<div class="pd-ft"><button type="button" class="btn btn-g btn-s pm-fedit">${esc(Dn.edit)}</button><button type="button" class="btn btn-p pm-fanother"><span class="d"></span>${esc(Dn.another)}</button></div>`);
    const p = fm.panel;
    $('.pd-x', p).addEventListener('click', () => fm.close());
    $('.pm-fedit', p).addEventListener('click', () => { fs.step = 3; paint(); });
    $('.pm-fanother', p).addEventListener('click', () => { const keep = fs.v; fs = blank(); Object.assign(fs.v, { plan: keep.plan, channel: keep.channel, contact: keep.contact, consent: false }); paint(); });
    $('#pmDoneT', p).focus({ preventScroll: true });
  }
  function openFunnel(planIdx) {
    const saved = PD.store.get(DRAFT);
    fs = saved && saved.v ? saved : blank();
    if (fs.step > 3) fs.step = 0;
    if (planIdx != null && planIdx !== '') fs.v.plan = String(planIdx);
    if (!fs.v.question) fs.v.question = '';
    fm = PD.modal({ html: shell(), label: 'pmFunT', cls: 'pm-fun' });
    wire();
    requestAnimationFrame(() => { const f = $('input:not([type=radio]),textarea,select', $('.pm-fbody', fm.panel)); if (f) f.focus({ preventScroll: true }); });
  }
  $$('.pm-reserve-open').forEach((b) => b.addEventListener('click', () => openFunnel(b.dataset.plan)));

  // boot
  setDoor(0);
  go(0);
})();
