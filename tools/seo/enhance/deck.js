// Deck pass 2 (runs after the main bundle, like enhance.js).
// · "How she knows": a pinned scene after section 02. The galaxy's dust forms
//   each number as a dot-matrix numeral (1,240 → 200+ → 160+ → 1,300 → 1), with
//   a shape for what it means (a cloud of sources, orbits of experts, a network
//   of buyers, flickering tests, one bright point), then becomes a ring around
//   her: 12 skill areas, and her knowledge base, counted. Phones and reduced
//   motion get a static stack.
// · Translator labels on the live findings, Zero risk inside the guarantees,
//   NJO in numbers, the Russian Meta note.
// deck-ui.mjs is inlined above by the build (mindHTML, zeroHTML, njoHTML, metaHTML, deckNum).
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const XS = window.USHA_X || {};
  const lang = () => (H.lang in XS ? H.lang : Object.keys(XS)[0]);
  const XD = () => (XS[lang()] || {}).deck;
  const rtl = () => H.dir === 'rtl';

  // ---------- blocks: pre-rendered by the build, re-rendered on a language switch ----------
  function swap(sel, html, place) {
    const old = $(sel);
    if (old && old.dataset.l === lang()) return old;
    const tpl = D.createElement('template'); tpl.innerHTML = html.trim();
    const el = tpl.content.firstElementChild; el.dataset.l = lang();
    if (old) old.replaceWith(el); else if (!place(el)) return null;
    return el;
  }
  function blocks() {
    const x = XD(); if (!x) return;
    const L = lang();
    const m = swap('#mind', mindHTML(x, L), (el) => { const s = $('#signal'); if (!s) return false; s.after(el); return true; });
    if (m) scene.setup(m);
    swap('.guar .x-zr', zeroHTML(x, L), (el) => { const u = $('.guar > ul'); if (!u) return false; u.after(el); return true; });
    swap('.eng .x-njo', njoHTML(x, L), (el) => { const f = $('.eng .facts'); if (!f) return false; f.after(el); return true; });
    const meta = $('.x-meta');
    if (x.meta) swap('.x-meta', metaHTML(x), (el) => { const p = $('#control .partners'); if (!p) return false; p.after(el); return true; });
    else if (meta) meta.remove();
    labels(); metaMark(); reveal();
  }

  // ---------- live findings: what the algorithm says, what you hear ----------
  function labels() {
    const x = XD(); if (!x) return;
    $$('#fbody .fitem').forEach((f) => {
      $$('.x-trl', f).forEach((e) => e.remove());
      const k = $('.fk', f), h = $('h3', f);
      if (k) k.insertAdjacentHTML('beforebegin', `<span class="x-trl x-says">${x.tr.says}</span>`);
      if (h) h.insertAdjacentHTML('beforebegin', `<span class="x-trl x-hear">${x.tr.hear}</span>`);
    });
  }
  // ---------- Russian page: Meta carries the asterisk of the legal note ----------
  function metaMark() {
    const ru = lang() === 'ru';
    $$('#track span').forEach((s) => s.classList.toggle('x-ast', ru && s.textContent.trim() === 'Meta'));
  }
  // ---------- reveal on scroll (the layer's own .x-io → .x-in) ----------
  function reveal() {
    $$('.x-zr:not(.x-in),.x-njo:not(.x-in),.xm-head:not(.x-in),.x-mind:not(.xm-live) .xm-st:not(.x-in),.x-mind:not(.xm-live) .xm-endt:not(.x-in),.x-mind:not(.xm-live) .xm-orbit:not(.x-in)').forEach((el) => {
      const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.85 && r.bottom > 0) el.classList.add('x-in');
    });
  }

  // ---------- the numbers scene ----------
  const scene = (() => {
    let el = null, cv = null, cx = null, live = false, raf = 0, io = null, ready = false;
    let W = 0, Hh = 0, dpr = 1, N = 0;
    let P = null; // current positions
    let ST = []; // per stage: { t: Float32Array targets, k: Uint8Array kind (0 ink numeral, 1 ember numeral, 2 dust) , ... }
    let seed = null, nodes = [], links = [], one = [0, 0], ringC = [0, 0], ringR = 200, region = null;
    let prog = 0, progT = 0, active = -1, t0 = performance.now();
    const B = 6; // beats: five numbers, then her mind

    function rnd(i) { const s = Math.sin(i * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }
    function setup(m) {
      el = m; cv = $('.xm-cv', m);
      live = innerWidth >= 900 && !reduce && !!(cv && cv.getContext);
      const was = m.classList.contains('xm-live');
      m.classList.toggle('xm-live', live);
      // the section's height changed: let the page (and USHA's scene) re-measure its sections
      if (was !== live) setTimeout(() => dispatchEvent(new Event('resize')), 0);
      stop();
      active = -1;
      if (!live) { $$('.xm-st', m).forEach((s) => s.classList.add('on')); return; }
      cx = cv.getContext('2d');
      const go = () => { layout(); ready = true; tick(); };
      if (D.fonts && D.fonts.load) Promise.all([D.fonts.load('800 100px Unbounded'), D.fonts.ready]).then(go, go); else go();
      io?.disconnect();
      io = new IntersectionObserver((e) => { if (e[0].isIntersecting) start(); else stop(); }, { rootMargin: '100px 0px' });
      io.observe(m);
    }
    function start() { if (!raf && ready && live) raf = requestAnimationFrame(frame); }
    function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; }

    // dot-matrix numeral: render the text, keep the cells that are ink
    function sample(txt, suf, box) {
      const c = D.createElement('canvas'), g = c.getContext('2d');
      const font = (s) => `800 ${s}px Unbounded, ${getComputedStyle(H).getPropertyValue('--head') || 'sans-serif'}`;
      g.font = font(100);
      const w100 = g.measureText(txt + (suf || '')).width || 1;
      let fs = Math.min(box.w / w100 * 100, box.h * 1.15);
      fs = Math.max(60, fs);
      g.font = font(fs);
      const wMain = g.measureText(txt).width, wAll = g.measureText(txt + (suf || '')).width;
      c.width = Math.ceil(wAll + 8); c.height = Math.ceil(fs * 1.05);
      g.font = font(fs); g.textBaseline = 'alphabetic'; g.fillStyle = '#fff';
      const base = Math.round(fs * 0.86);
      g.fillText(txt, 4, base);
      const data = g.getImageData(0, 0, c.width, c.height).data;
      const step = Math.max(6, fs / 13);
      const pts = [];
      for (let y = step / 2; y < c.height; y += step) for (let x = step / 2; x < c.width; x += step) {
        if (data[(Math.floor(y) * c.width + Math.floor(x)) * 4 + 3] > 140) pts.push([x, y, 0]);
      }
      if (suf) {
        g.clearRect(0, 0, c.width, c.height); g.fillText(suf, 4 + wMain, base);
        const d2 = g.getImageData(0, 0, c.width, c.height).data;
        for (let y = step / 2; y < c.height; y += step) for (let x = step / 2; x < c.width; x += step) {
          if (d2[(Math.floor(y) * c.width + Math.floor(x)) * 4 + 3] > 140) pts.push([x, y, 1]);
        }
      }
      // place: vertically centred in the box, aligned to the reading start
      const ox = rtl() ? box.x + box.w - wAll - 4 : box.x, oy = box.y + (box.h - fs * 0.9) / 2;
      return { pts: pts.map(([x, y, k]) => [ox + x, oy + y - fs * 0.12, k]), r: Math.max(1.6, step * 0.32), left: ox, right: ox + wAll + 4, mid: oy + fs * 0.45 };
    }

    function layout() {
      const st = $('.xm-stick', el); if (!st) return;
      const r = st.getBoundingClientRect();
      dpr = Math.min(1.6, devicePixelRatio || 1);
      W = r.width; Hh = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(Hh * dpr);
      cv.style.width = W + 'px'; cv.style.height = Hh + 'px';
      const head = $('.xm-head', el).getBoundingClientRect();
      const top = Math.min(head.bottom - r.top + 24, Hh * 0.42);
      const bw = Math.min(W * 0.5, 760);
      region = { x: rtl() ? W - W * 0.05 - bw : W * 0.05, y: top, w: bw, h: Math.max(220, Hh - top - 110) };
      const numBox = { x: region.x, y: region.y, w: region.w, h: Math.min(region.h * 0.62, 330) };
      numBox.y = region.y + (region.h - numBox.h) / 2 - 10;
      const x = XD();
      const L = lang();
      N = 1500;
      if (!seed) { seed = new Float32Array(N * 4); for (let i = 0; i < N * 4; i++) seed[i] = rnd(i + 1); }
      P = P && P.length === N * 2 ? P : new Float32Array(N * 2);
      ST = x.mind.st.map((s) => sample(deckNum(s.n, L), s.s || '', numBox));
      ST.push({ pts: [], r: 2 });
      // ring centre: the orbit in the last beat
      const ob = $('.xm-orbit', el).getBoundingClientRect();
      ringC = [ob.left - r.left + ob.width / 2, ob.top - r.top + ob.height / 2]; ringR = Math.min(ob.width, ob.height) * 0.41;
      const s4 = ST[4]; one = [rtl() ? s4.left - 80 : s4.right + 80, s4.mid];
      // a stable random order per stage, so each numeral re-assembles from everywhere
      ST.forEach((s, si) => {
        const order = Array.from({ length: N }, (_, i) => i).sort((a, b) => rnd(a * 7 + si * 131) - rnd(b * 7 + si * 131));
        s.map = new Int32Array(N).fill(-1);
        s.pts.slice(0, N).forEach((p, j) => { s.map[order[j]] = j; });
      });
      // buyers network: 160 nodes, each linked to its two nearest
      nodes = [];
      for (let i = 0; i < N && nodes.length < 160; i++) if (ST[2].map[i] < 0) nodes.push(i);
      links = [];
      const np = nodes.map((i) => dust(2, i, 0));
      np.forEach((a, k) => {
        const d = np.map((b, j) => [j === k ? 1e9 : (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2, j]).sort((p, q) => p[0] - q[0]);
        links.push([k, d[0][1]], [k, d[1][1]]);
      });
      if (!P.__init) { for (let i = 0; i < N; i++) { P[i * 2] = W * seed[i * 4]; P[i * 2 + 1] = Hh * seed[i * 4 + 1]; } P.__init = 1; }
    }

    // where the dust sits for a stage (not part of the numeral)
    function dust(s, i, t) {
      const a = seed[i * 4], b = seed[i * 4 + 1], c = seed[i * 4 + 2], d = seed[i * 4 + 3];
      const R = region, cx0 = R.x + R.w / 2, cy0 = R.y + R.h / 2;
      if (s === 0) { // a wide cloud of sources, drifting toward the numeral
        const x = R.x - R.w * 0.1 + a * R.w * 1.2, y = R.y - R.h * 0.08 + b * R.h * 1.16;
        return [x + Math.sin(t * 0.45 + c * 9) * 16, y + Math.cos(t * 0.38 + d * 9) * 12, 0.28 + c * 0.35];
      }
      if (s === 1) { // three orbits of experts around the number
        const ring = Math.floor(a * 3), rx = R.w * (0.42 + ring * 0.09), ry = R.h * (0.3 + ring * 0.08);
        const th = b * Math.PI * 2 + t * (0.12 + ring * 0.05) * (ring % 2 ? -1 : 1);
        const j = (c - 0.5) * 10;
        return [cx0 + Math.cos(th) * (rx + j), cy0 + Math.sin(th) * (ry + j), 0.3 + d * 0.5];
      }
      if (s === 2) { // a living market: nodes that float
        const x = R.x + a * R.w, y = R.y + b * R.h;
        return [x + Math.sin(t * 0.5 + c * 7) * 6, y + Math.cos(t * 0.45 + d * 7) * 6, 0.35 + c * 0.4];
      }
      if (s === 3) { // tests: a field of quick flashes
        const x = R.x + a * R.w, y = R.y + b * R.h;
        const f = Math.sin(t * (5 + c * 9) + d * 40);
        return [x, y, f > 0.82 ? 1 : 0.1];
      }
      if (s === 4) { // everything gathers into one bright point
        const th = a * Math.PI * 2 + t * (1.2 + b), rr = 3 + Math.pow(c, 3) * 26;
        return [one[0] + Math.cos(th) * rr, one[1] + Math.sin(th) * rr, 0.55 + d * 0.45];
      }
      // her mind: a ring of dust around her
      const th = a * Math.PI * 2 + t * 0.06, rr = ringR + (b - 0.5) * 34 * (0.4 + c);
      return [ringC[0] + Math.cos(th) * rr, ringC[1] + Math.sin(th) * rr * 0.98, 0.25 + d * 0.5];
    }
    // a particle's place, colour and size in a stage
    const out = [0, 0, 0, 0, 0];
    function at(s, i, t) {
      const S = ST[s], j = S.map[i];
      if (j >= 0) {
        const p = S.pts[j];
        out[0] = p[0] + Math.sin(t * 1.3 + seed[i * 4] * 30) * 0.6; out[1] = p[1] + Math.cos(t * 1.1 + seed[i * 4 + 1] * 30) * 0.6;
        out[2] = 0.95; out[3] = p[2] || (s === 4 ? 1 : 0); out[4] = S.r;
      } else {
        const d = dust(s, i, t);
        out[0] = d[0]; out[1] = d[1]; out[2] = d[2]; out[3] = s === 4 || (s === 3 && d[2] > 0.9 && seed[i * 4 + 2] > 0.6) ? 1 : 0; out[4] = s === 4 ? 1.5 : 1.15;
      }
      return out;
    }
    const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

    function progress() {
      const r = $('.xm-track', el).getBoundingClientRect();
      const span = r.height - innerHeight;
      return span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    }
    function setActive(k) {
      if (k === active) return;
      active = k;
      $$('.xm-st', el).forEach((s, i) => s.classList.toggle('on', i === k));
      el.classList.toggle('xm-at-end', k >= B - 1);
      el.style.setProperty('--beat', k);
      const dots = $('.xm-hint i', el); if (dots) dots.style.setProperty('--p', (k / (B - 1)).toFixed(3));
    }

    let last = performance.now();
    const stat = { ms: 0, n: 0 };
    function frame(now) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(250, now - last); last = now;
      progT = progress();
      prog += (progT - prog) * (1 - Math.pow(0.86, dt / 16.7));
      if (Math.abs(progT - prog) < 0.0004) prog = progT;
      const t = (now - t0) / 1000;
      const sf = prog * (B - 1), a = Math.min(B - 1, Math.floor(sf)), f = sf - a, b = Math.min(B - 1, a + 1);
      const mf = Math.min(1, Math.max(0, (f - 0.42) / 0.5));
      const sT = progT * (B - 1);
      setActive(Math.min(B - 1, Math.floor(sT + 0.3)));
      const c0 = performance.now(); draw(a, b, mf, t); stat.ms += performance.now() - c0; stat.n++;
    }
    function tick() { if (!live || !ready) return; const sf = progress() * (B - 1); prog = progress(); const a = Math.floor(sf); setActive(Math.round(sf)); draw(a, Math.min(B - 1, a + 1), 0, 0); }

    const INK = '#F3EEE8', EMB = '#FF6A2B', PEACH = '#FFB48A';
    function draw(a, b, mf, t) {
      const g = cx; g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, Hh);
      // buyers' network, strongest in its own beat
      const wNet = a === 2 ? 1 - ease(mf) : b === 2 ? ease(mf) : 0;
      if (wNet > 0.02) {
        g.globalAlpha = 0.16 * wNet; g.strokeStyle = PEACH; g.lineWidth = 0.7; g.beginPath();
        links.forEach(([p, q]) => { const A = P.subarray(nodes[p] * 2), Bq = P.subarray(nodes[q] * 2); g.moveTo(A[0], A[1]); g.lineTo(Bq[0], Bq[1]); });
        g.stroke();
      }
      // the bright point of "1 move"
      const wOne = a === 4 ? 1 - ease(mf) : b === 4 ? ease(mf) : 0;
      if (wOne > 0.02) {
        const gr = g.createRadialGradient(one[0], one[1], 0, one[0], one[1], 90);
        gr.addColorStop(0, 'rgba(255,140,80,.55)'); gr.addColorStop(1, 'rgba(255,90,31,0)');
        g.globalAlpha = wOne; g.fillStyle = gr; g.fillRect(one[0] - 90, one[1] - 90, 180, 180);
      }
      const inkA = [], embA = [];
      for (let i = 0; i < N; i++) {
        const e = ease((mf * 1.35 - seed[i * 4 + 3] * 0.35));
        const A = at(a, i, t), ax = A[0], ay = A[1], aa = A[2], ak = A[3], ar = A[4];
        const Bv = at(b, i, t);
        const x = ax + (Bv[0] - ax) * e, y = ay + (Bv[1] - ay) * e, al = aa + (Bv[2] - aa) * e, k = e < 0.5 ? ak : Bv[3], rr = ar + (Bv[4] - ar) * e;
        P[i * 2] = x; P[i * 2 + 1] = y;
        (k ? embA : inkA).push(x, y, al, rr);
      }
      paint(g, inkA, INK); paint(g, embA, EMB);
      g.globalAlpha = 1;
    }
    function paint(g, arr, col) {
      g.fillStyle = col;
      for (let i = 0; i < arr.length; i += 4) {
        const r = arr[i + 3];
        g.globalAlpha = arr[i + 2];
        if (r > 1.8) { g.beginPath(); g.arc(arr[i], arr[i + 1], r, 0, 6.2832); g.fill(); }
        else g.fillRect(arr[i] - r / 2, arr[i + 1] - r / 2, r, r);
      }
    }
    let rT = 0, vw = innerWidth, vh = innerHeight;
    addEventListener('resize', () => {
      if (innerWidth === vw && innerHeight === vh) return;
      vw = innerWidth; vh = innerHeight;
      clearTimeout(rT); rT = setTimeout(() => { if (el) setup(el); }, 200);
    });
    return { setup, perf: () => ({ live, raf: !!raf, N, draws: stat.n, avgMs: stat.n ? +(stat.ms / stat.n).toFixed(2) : 0 }) };
  })();
  window.__xmind = scene;

  // ---------- go ----------
  const run = () => { try { blocks(); } catch (e) { console.warn('[usha-deck]', e); } };
  let lt = 0;
  new MutationObserver(() => { clearTimeout(lt); lt = setTimeout(run, 60); }).observe(H, { attributes: true, attributeFilter: ['lang'] });
  const watch = (s, fn) => { const e = $(s); if (e) new MutationObserver(() => setTimeout(fn, 30)).observe(e, { childList: true }); };
  addEventListener('scroll', () => reveal(), { passive: true });
  const boot = () => { run(); watch('#fbody', labels); watch('#track', metaMark); };
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
