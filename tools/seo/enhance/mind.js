// "Her mind" (section 02, #signal). One Canvas2D layer inside the pinned stage:
// market signals (teal, the market's forces) stream across the night, are pulled
// into the real USHA wherever the 3D scene has placed her, she thinks (the bundle
// closes her eyes and pulses her inner glow through window.__xm, see mind.mjs),
// and one ember thread writes the first live finding out of her, now with its
// money arithmetic and a stop rule. Scroll drives the story; it plays backwards
// too. Copy: window.USHA_MIND (tools/seo/enhance/mind.mjs).
(() => {
  const D = document, H = D.documentElement, ALL = window.USHA_MIND;
  const sec = D.getElementById('signal');
  if (!ALL || !sec) return;
  const stick = sec.querySelector('.stick'), st = sec.querySelector('.s-t'), card = sec.querySelector('.fcard');
  if (!stick || !st || !card) return;
  const rtl = H.dir === 'rtl';
  const reduceQ = matchMedia('(prefers-reduced-motion: reduce)');
  const X = (window.__xm = { on: false, think: 0, glow: 0, light: 0, dim: 1, look: null, cue: 0 });
  const C = () => ALL[H.lang] || ALL[Object.keys(ALL)[0]];
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
  const lin = (v, a, b) => clamp((v - a) / (b - a));
  const ss = (v, a, b) => { const t = lin(v, a, b); return t * t * (3 - 2 * t); };
  const outExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

  // ---------- the beats (fractions of the pinned scroll) ----------
  const B = { pullA: 0.05, pullB: 0.33, thinkA: 0.33, thinkB: 0.45, threadA: 0.42, threadB: 0.47, cardA: 0.45, cardB: 0.505, typeA: 0.48, typeB: 0.74, end: 0.75, out: 0.86 };

  // ---------- DOM: canvas, rail, cta ----------
  const cv = D.createElement('canvas');
  cv.className = 'mi-cv'; cv.setAttribute('aria-hidden', 'true');
  stick.prepend(cv);
  const ctx = cv.getContext('2d');
  const rail = D.createElement('div'); rail.className = 'mi-rail'; rail.setAttribute('aria-hidden', 'true');
  st.append(rail);
  const sr = D.createElement('p'); sr.className = 'mi-sr';
  st.append(sr);
  const ctaD = D.createElement('div'); ctaD.className = 'mi-cta mi-cta-d';
  st.append(ctaD);
  const ctaM = D.createElement('div'); ctaM.className = 'mi-cta mi-cta-m';
  card.append(ctaM);
  const talk = () => dispatchEvent(new Event('usha:talk'));
  let railV = [], railS = [];
  function chrome() {
    const c = C(), b = c.cta;
    rail.innerHTML = c.rail.map((t) => `<span><i></i><em>${esc(t)}</em><b>0</b></span>`).join('');
    railS = [...rail.children]; railV = railS.map((s) => s.querySelector('b'));
    sr.textContent = `${c.rail[1]}: ${c.causes.join('; ')}.`;
    const btn = `<button type="button" class="xl-hero" translate="no"><span class="xl-hero-face" aria-hidden="true"><i></i><i></i></span><span class="xl-hero-b">${esc(b.b)}</span>${b.k ? `<span class="xl-hero-k"><span class="xl-hero-dot" aria-hidden="true"></span>${esc(b.k)}</span>` : ''}<span class="xl-hero-a" aria-hidden="true">${b.a}</span></button>`;
    ctaD.innerHTML = btn; ctaM.innerHTML = btn;
    ctaD.querySelector('button').addEventListener('click', talk);
    ctaM.querySelector('button').addEventListener('click', talk);
    atlas = null;
  }

  // ---------- the finding, written out of her ----------
  let units = [], blocks = [], total = 0, shown = 0, itemLang = '', item = null, done = false;
  function prep() {
    const it = card.querySelector('#fbody .fitem');
    if (!it || !it.querySelector('.xf')) return null;
    if (it === item && it.dataset.mi === H.lang) return it;
    const c = C(), m = c.money;
    it.querySelectorAll('.mi-money,.mi-stop').forEach((e) => e.remove());
    it.insertAdjacentHTML('beforeend', `<div class="mi-money"><div class="mi-h">${esc(m.h)}</div>${m.rows.map((r) => `<div class="mi-row"><span>${esc(r[0])}</span><span class="mi-q">${esc(r[1])}</span><b>${esc(r[2])}</b></div>`).join('')}<div class="mi-row mi-sum"><span>${esc(m.sum[0])}</span><b>${esc(m.sum[1])}</b></div></div><div class="mi-stop"><div class="mi-h">${esc(c.stop[0])}</div><p>${esc(c.stop[1])}</p></div>`);
    it.classList.add('mi-it'); it.dataset.mi = H.lang;
    units = []; blocks = [];
    const words = H.lang === 'ar';
    for (const blk of it.children) {
      if (blk.matches('svg')) continue;
      const tw = D.createTreeWalker(blk, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.nodeValue.trim() && !n.parentElement.closest('svg,.mi-ty') ? 1 : 2) });
      const nodes = []; for (let n; (n = tw.nextNode());) nodes.push(n);
      if (!nodes.length) continue;
      const b = { el: blk, first: units.length };
      for (const n of nodes) {
        const s = n.nodeValue, w = D.createElement('span'), a = D.createElement('span'), r = D.createElement('span');
        w.className = 'mi-ty'; a.className = 'mi-a'; r.className = 'mi-b'; r.textContent = s;
        w.append(a, r); n.replaceWith(w);
        const cuts = [];
        if (words) { const re = /\S+\s*/g; let x; while ((x = re.exec(s))) cuts.push(x.index + x[0].length); }
        else for (let i = 1; i <= s.length; i++) if (s[i - 1] !== ' ') cuts.push(i);
        if (!cuts.length || cuts[cuts.length - 1] !== s.length) cuts.push(s.length);
        units.push({ a, r, s, cuts, n: -1, blk: b });
      }
      blocks.push(b);
    }
    total = units.reduce((t, u) => t + u.cuts.length, 0);
    item = it; shown = -1; paint(0); shown = 0; done = false;
    return it;
  }
  let cur = null;
  function paint(k) {
    k = Math.round(clamp(k, 0, total));
    if (k === shown) return;
    let left = k, curU = null;
    for (const u of units) {
      const n = Math.min(left, u.cuts.length); left -= n;
      if (n !== u.n) {
        u.n = n;
        const c = n ? u.cuts[n - 1] : 0;
        u.a.textContent = u.s.slice(0, c); u.r.textContent = u.s.slice(c);
      }
      if (n > 0 && n < u.cuts.length) curU = u;
      else if (!curU && n === u.cuts.length && left === 0 && k < total) curU = u;
    }
    for (const b of blocks) b.el.classList.toggle('mi-go', units[b.first].n > 0);
    if (cur !== curU) { if (cur) cur.a.classList.remove('mi-cur'); if (curU && k > 0 && k < total) curU.a.classList.add('mi-cur'); cur = curU; }
    if (cur && (k <= 0 || k >= total)) { cur.a.classList.remove('mi-cur'); cur = null; }
    shown = k;
  }

  // ---------- particles ----------
  const coarse = matchMedia('(pointer:coarse)').matches;
  let W = 0, Hh = 0, dpr = 1, P = null, NL = 0, ND = 0, atlas = null;
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  function build() {
    const small = innerWidth < 820;
    NL = small ? 120 : 320; ND = small ? 900 : 2600;
    if (coarse && !small) { NL = 200; ND = 1600; }
    const N = NL + ND; seed = 7;
    P = { x0: new Float32Array(N), y0: new Float32Array(N), z: new Float32Array(N), v: new Float32Array(N), ph: new Float32Array(N), c0: new Float32Array(N), lab: new Uint8Array(N) };
    for (let i = 0; i < N; i++) {
      const z = rnd();
      P.z[i] = i < NL ? 0.25 + z * 0.75 : z;
      P.x0[i] = rnd();
      // signals flow in a broad band, densest through the middle of the night
      const g = (rnd() + rnd() + rnd()) / 3;
      P.y0[i] = i < NL ? 0.1 + g * 0.85 : 0.04 + (0.35 * rnd() + 0.65 * g) * 0.94;
      P.v[i] = 14 + 54 * P.z[i] + rnd() * 10;
      P.ph[i] = rnd() * 6.283;
      // capture order: a few signals are never pulled in (the quiet that stays)
      const q = rnd();
      P.c0[i] = q > 0.965 ? 2 : B.pullA + Math.pow(q / 0.965, 0.9) * (B.pullB - B.pullA - 0.07);
      P.lab[i] = Math.floor(rnd() * 255);
    }
  }
  // labels are rendered once into two sprite sheets (teal, ember) and drawn by copy
  function makeAtlas() {
    const labs = C().signals, s = dpr, fs = 11, pad = 4;
    const font = `500 ${fs * s}px 'JetBrains Mono','Hacen Saudi Arabia',ui-monospace,monospace`;
    const m = D.createElement('canvas').getContext('2d'); m.font = font;
    const ws = labs.map((t) => Math.ceil(m.measureText(t).width) + pad * 2 * s);
    const cols = 4096; let x = 0, y = 0; const rows = [], hh = Math.ceil((fs + pad * 2) * s);
    const rect = ws.map((w) => { if (x + w > cols) { x = 0; y += hh; } const r = [x, y, w, hh]; x += w; return r; });
    const mk = (fill) => {
      const c = D.createElement('canvas'); c.width = cols; c.height = y + hh;
      const g = c.getContext('2d'); g.font = font; g.textBaseline = 'middle'; g.fillStyle = fill;
      if (rtl) { g.direction = 'rtl'; g.textAlign = 'right'; }
      labs.forEach((t, i) => { const r = rect[i]; g.fillText(t, rtl ? r[0] + r[2] - pad * s : r[0] + pad * s, r[1] + hh / 2); });
      return c;
    };
    atlas = { teal: mk('#7FE3D6'), ember: mk('#FFB48A'), rect, n: labs.length, s };
    rows.length = 0;
  }
  function size() {
    const r = stick.getBoundingClientRect();
    W = Math.round(r.width); Hh = Math.round(r.height);
    dpr = Math.min(1.5, devicePixelRatio || 1);
    cv.width = Math.round(W * dpr); cv.height = Math.round(Hh * dpr);
    cv.style.width = W + 'px'; cv.style.height = Hh + 'px';
    build(); atlas = null; still = -1;
  }

  // ---------- frame ----------
  let f = 0, fs = 0, t = 0, last = 0, raf = 0, visible = false, still = -1, absorbS = 0;
  const tR = { left: 0, top: 0, right: 0, bottom: 0 };
  let cR = null, sR = null;
  function progress() {
    const r = sec.getBoundingClientRect();
    return clamp(-r.top / Math.max(1, r.height - innerHeight), -0.2, 1.2);
  }
  function teal(a) { return `rgba(46,196,182,${a.toFixed(3)})`; }

  function draw(F, T, reduce) {
    const c = ctx, px = X.px, py = X.py, pr = Math.max(18, X.pr || 40), have = X.pt && performance.now() - X.pt < 500;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, W, Hh);
    if (!atlas) makeAtlas();
    const arrive = ss(F, -0.02, 0.06), leave = 1 - ss(F, B.out, B.out + 0.08);
    const base = arrive * leave;
    if (base <= 0.001) return;
    const N = NL + ND, span = W + 320, cx = have ? px : W * 0.75, cy = have ? py : Hh * 0.3;
    const dir = rtl ? -1 : 1, sx = rtl ? -1 : 1;
    // the reading column stays clean: signals fade where they cross the text
    const tl = tR.left - 24, tt = tR.top - 16, tr = tR.right + 24, tb = tR.bottom + 16;
    let pulling = 0;
    c.globalCompositeOperation = 'lighter';
    // dots, batched by alpha into a few paths
    const BK = 5, pT = [], pE = [], pS = [];
    for (let k = 0; k < BK; k++) { pT.push(new Path2D()); pE.push(new Path2D()); }
    const sT = new Path2D(), sE = new Path2D();
    const lab = [];
    for (let i = 0; i < N; i++) {
      const z = P.z[i];
      let x = ((P.x0[i] * span + P.v[i] * T) % span) - 160;
      if (sx < 0) x = W - x;
      let y = P.y0[i] * Hh + Math.sin(T * 0.35 + P.ph[i]) * (6 + 10 * z);
      const cc = lin(F, P.c0[i], P.c0[i] + 0.075);
      if (cc >= 1) continue;
      let e = 0, ex = x, ey = y;
      if (cc > 0) {
        e = Math.pow(cc, 1.7);
        const dx = x - cx, dy = y - cy, r0 = Math.hypot(dx, dy), a0 = Math.atan2(dy, dx);
        const q = (k) => { const r = r0 * (1 - k), a = a0 + dir * 2.3 * k; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r * (1 - 0.62 * k)]; };
        [x, y] = q(e);
        if (e > 0.02) [ex, ey] = q(Math.max(0, e - 0.09));
        pulling++;
      }
      if (x < -40 || x > W + 40 || y < -20 || y > Hh + 20) continue;
      let a = (0.22 + 0.7 * z) * base;
      if (x > tl && x < tr && y > tt && y < tb && e < 0.3) a *= 0.16;
      const em = ss(e, 0.35, 0.85), fade = 1 - ss(e, 0.82, 1);
      a *= fade;
      if (a < 0.01) continue;
      if (i < NL) { lab.push(i, x, y, a, em, e); continue; }
      const s = 0.7 + 1.5 * z * (1 - 0.5 * e);
      const bk = Math.min(BK - 1, Math.floor(a * BK));
      (em > 0.5 ? pE : pT)[bk].rect(x - s / 2, y - s / 2, s, s);
      if (e > 0.02) { const p = em > 0.5 ? sE : sT; p.moveTo(ex, ey); p.lineTo(x, y); }
    }
    for (let k = 0; k < BK; k++) {
      const al = (k + 0.5) / BK;
      c.fillStyle = teal(al); c.fill(pT[k]);
      c.fillStyle = `rgba(255,150,96,${al.toFixed(3)})`; c.fill(pE[k]);
    }
    c.lineWidth = 0.8;
    c.strokeStyle = teal(0.35 * base); c.stroke(sT);
    c.strokeStyle = `rgba(255,140,80,${(0.45 * base).toFixed(3)})`; c.stroke(sE);
    // labels: sprite copies
    c.globalCompositeOperation = 'source-over';
    const A = atlas, s0 = 1 / A.s;
    for (let j = 0; j < lab.length; j += 6) {
      const i = lab[j], x = lab[j + 1], y = lab[j + 2], a = lab[j + 3], em = lab[j + 4], e = lab[j + 5];
      const r = A.rect[P.lab[i] % A.n], sc = (0.78 + 0.34 * P.z[i]) * (1 - 0.55 * e) * s0;
      const w = r[2] * sc, h = r[3] * sc, ox = rtl ? x - w : x;
      if (em < 0.98) { c.globalAlpha = a * (1 - em); c.drawImage(A.teal, r[0], r[1], r[2], r[3], ox, y - h / 2, w, h); }
      if (em > 0.02) { c.globalAlpha = a * em; c.drawImage(A.ember, r[0], r[1], r[2], r[3], ox, y - h / 2, w, h); }
    }
    c.globalAlpha = 1;
    if (!have) return;
    // her glow: the pull lights her up; while she thinks it breathes
    const absorb = clamp((pulling / N) * 3.2);
    absorbS += (absorb - absorbS) * 0.12;
    const think = ss(F, B.thinkA, B.thinkA + 0.04) * (1 - ss(F, B.thinkB - 0.03, B.thinkB));
    const pulse = reduce ? 0.7 : 0.6 + 0.4 * Math.sin(T * 6.2);
    const g = (absorbS * 0.9 + think * pulse * 0.8) * base;
    c.globalCompositeOperation = 'lighter';
    if (g > 0.01) {
      const rg = c.createRadialGradient(cx, cy, pr * 0.2, cx, cy, pr * 2.8);
      rg.addColorStop(0, `rgba(255,150,90,${(0.28 * g).toFixed(3)})`);
      rg.addColorStop(0.4, `rgba(255,106,43,${(0.12 * g).toFixed(3)})`);
      rg.addColorStop(1, 'rgba(255,106,43,0)');
      c.fillStyle = rg; c.fillRect(cx - pr * 3, cy - pr * 3, pr * 6, pr * 6);
      // the inflow settles into a thin disc around her
      c.strokeStyle = `rgba(255,170,120,${(0.22 * absorbS * base).toFixed(3)})`; c.lineWidth = 1;
      c.beginPath(); c.ellipse(cx, cy, pr * 1.55, pr * 0.42, 0, 0, 6.283); c.stroke();
    }
    // thinking: slow rings leave her
    if (think > 0.01) {
      c.lineWidth = 1;
      for (let k = 0; k < 3; k++) {
        const p = reduce ? 0.25 + k * 0.25 : (T * 0.5 + k / 3) % 1;
        const al = Math.pow(1 - p, 2) * think * 0.55 * base;
        c.strokeStyle = `rgba(255,150,100,${al.toFixed(3)})`;
        c.beginPath(); c.ellipse(cx, cy, pr * (1.15 + p * 1.9), pr * (0.95 + p * 1.5), 0, 0, 6.283); c.stroke();
      }
    }
    c.globalCompositeOperation = 'source-over';
    // the causes she finds: they surface where the decision will be written, then go into her
    if (cR) causes(c, F, cx, cy, pr, base);
    if (cR) thread(c, F, T, cx, cy, pr, base, reduce);
  }
  let causeN = 0;
  function causes(c, F, cx, cy, pr, base) {
    const list = C().causes, small = W < 820;
    const x0 = rtl ? cR.right - (small ? 18 : 30) : cR.left + (small ? 18 : 30);
    const y0 = cR.top + (small ? 34 : 46);
    c.font = `500 ${small ? 12 : 13}px 'JetBrains Mono','Hacen Saudi Arabia',ui-monospace,monospace`;
    c.textBaseline = 'middle'; c.textAlign = rtl ? 'right' : 'left'; c.direction = rtl ? 'rtl' : 'ltr';
    causeN = 0;
    list.forEach((txt, k) => {
      const a0 = B.thinkA + 0.012 + k * 0.022;
      const inn = ss(F, a0, a0 + 0.02), gone = ss(F, B.thinkB - 0.025 + k * 0.006, B.thinkB + 0.008 + k * 0.006);
      if (inn > 0.5) causeN++;
      const a = inn * (1 - gone) * base;
      if (a < 0.01) return;
      const yy = y0 + k * (small ? 26 : 30);
      const m = outExpo(gone);
      const x = x0 + (cx - x0) * m, y = yy + (cy - yy) * m + (1 - inn) * 10;
      c.globalAlpha = a;
      // a fine line ties each cause to her
      c.strokeStyle = 'rgba(255,140,90,.35)'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(x + (rtl ? 6 : -6), y); c.quadraticCurveTo(x + (cx - x) * 0.2, cy + (y - cy) * 0.2, cx, cy + pr * 0.3); c.stroke();
      c.fillStyle = '#FF6A2B'; c.beginPath(); c.arc(x + (rtl ? 6 : -6) * 0 - (rtl ? -2 : 2), y, 2.4, 0, 6.283); c.fill();
      c.fillStyle = '#F3EEE8'; c.fillText(txt, x + (rtl ? -10 : 10), y);
    });
    c.globalAlpha = 1;
  }
  function thread(c, F, T, cx, cy, pr, base, reduce) {
    const d = ss(F, B.threadA, B.threadB);
    if (d <= 0.001) return;
    const ax = clamp(cx, cR.left + 36, cR.right - 36), ay = cR.top + 1;
    const x0 = cx, y0 = cy + pr * 0.62;
    const k1x = x0, k1y = y0 + (ay - y0) * 0.55, k2x = ax, k2y = y0 + (ay - y0) * 0.45;
    const pt = (u) => { const v = 1 - u; return [v * v * v * x0 + 3 * v * v * u * k1x + 3 * v * u * u * k2x + u * u * u * ax, v * v * v * y0 + 3 * v * v * u * k1y + 3 * v * u * u * k2y + u * u * u * ay]; };
    const n = 40, m = Math.max(1, Math.round(n * d));
    const fadeAfter = 1 - 0.5 * ss(F, B.typeB, B.end + 0.02);
    c.globalCompositeOperation = 'lighter';
    for (const [lw, al] of [[7, 0.08], [3, 0.18], [1.2, 0.9]]) {
      c.lineWidth = lw; c.strokeStyle = `rgba(255,106,43,${(al * base * fadeAfter).toFixed(3)})`;
      c.beginPath(); c.moveTo(x0, y0);
      for (let i = 1; i <= m; i++) { const [x, y] = pt((i / n) * (d * n / m) * (i <= m ? 1 : 1)); c.lineTo(x, y); }
      c.stroke();
    }
    // the head of the thread, then pulses that carry the writing into the card
    const head = (u, r, a) => { const [x, y] = pt(u); const g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(255,220,190,${a})`); g.addColorStop(0.35, `rgba(255,106,43,${a * 0.6})`); g.addColorStop(1, 'rgba(255,106,43,0)'); c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2); };
    if (d < 1) head(d, 14, 0.9 * base);
    const typing = F > B.typeA && F < B.typeB && !reduce;
    if (typing) { head((T * 0.9) % 1, 9, 0.7 * base); head((T * 0.9 + 0.5) % 1, 7, 0.45 * base); }
    if (d >= 1) head(1, 10 + 4 * Math.sin(T * 3), 0.55 * base * fadeAfter);
    c.globalCompositeOperation = 'source-over';
  }

  // ---------- state per frame ----------
  let railQ = '', clipQ = '', endQ = -1;
  function state(F, dt, reduce) {
    const awake = !H.classList.contains('locked');
    // eyes follow the incoming signals, then the card she is writing
    X.on = awake && F > -0.15 && F < 1.05;
    const pull = ss(F, B.pullA, B.pullA + 0.04) * (1 - ss(F, B.pullB - 0.04, B.pullB));
    X.think = ss(F, B.thinkA, B.thinkA + 0.03) * (1 - ss(F, B.thinkB - 0.03, B.thinkB));
    X.look = pull > 0.05 ? (rtl ? -0.5 : 0.5) * pull : null;
    X.lookY = pull > 0.05 ? 0.12 * pull : 0;
    X.glow = 0.35 * absorbS;
    X.light = 0.35 * absorbS + 0.25 * ss(F, B.threadA, B.threadB) * (1 - ss(F, B.typeB, B.end));
    X.dim = 1 - 0.62 * ss(F, B.thinkA, B.cardB);
    window.__xmHold = F > 0.3 && F < 1.05;
    if (F > 0.3 && window.__xmXl) window.__xmXl(0);
    // the card: hidden until the thread reaches it, then revealed from the top
    const rv = ss(F, B.cardA, B.cardB);
    const clip = rv >= 0.999 ? '' : `inset(0 0 ${((1 - rv) * 100).toFixed(2)}% 0 round 24px)`;
    if (clip !== clipQ) { card.style.clipPath = clip; card.style.webkitClipPath = clip; clipQ = clip; }
    card.classList.add('mi-on');
    const it = prep();
    if (it) {
      const tgt = total * lin(F, B.typeA, B.typeB);
      let k;
      if (reduce) k = F >= B.typeA ? total : 0;
      else {
        const diff = tgt - shown, words = H.lang === 'ar';
        const rate = Math.max(words ? 22 : 120, Math.abs(diff) * 5) * dt;
        k = Math.abs(diff) <= rate ? tgt : shown + Math.sign(diff) * rate;
      }
      paint(k);
      if (shown >= total && !done) { done = true; if (!reduce) X.cue = 1; card.classList.add('mi-done'); }
      if (shown < total * 0.98 && done) { done = false; card.classList.remove('mi-done'); }
    }
    // rail: signals read, causes found, the decision
    const cap = clamp((F - B.pullA) / (B.pullB - B.pullA));
    const n = Math.round(18400 * Math.pow(cap, 1.15));
    const fmt = (v) => v.toLocaleString(H.lang === 'ru' ? 'ru-RU' : 'en-US').replace(/ /g, ' ');
    const step = F < B.thinkA ? 0 : F < B.typeA ? 1 : 2;
    const q = `${n}|${causeN}|${done ? 1 : 0}|${step}`;
    if (q !== railQ && railV.length) {
      railQ = q;
      railV[0].textContent = fmt(n); railV[1].textContent = causeN; railV[2].textContent = done || shown > 0 ? '1' : '—';
      railS.forEach((s, i) => s.classList.toggle('on', i === step));
    }
    const ra = ss(F, 0.03, 0.1) * (1 - ss(F, B.out, B.out + 0.08));
    rail.style.opacity = ra.toFixed(3);
    const ea = ss(F, B.end, B.end + 0.04) * (1 - ss(F, B.out, B.out + 0.06));
    if (Math.abs(ea - endQ) > 0.004) {
      endQ = ea;
      for (const e of [ctaD, ctaM]) { e.style.opacity = ea.toFixed(3); e.style.transform = `translate3d(0,${((1 - outExpo(ea)) * 18).toFixed(1)}px,0)`; e.classList.toggle('mi-show', ea > 0.05); }
    }
  }

  function measure() {
    const h2 = st.querySelector('h2'), p = st.querySelector('p:not(.mi-sr)');
    const a = h2 ? h2.getBoundingClientRect() : null, b = p && p.offsetParent ? p.getBoundingClientRect() : null;
    if (a) { tR.left = a.left; tR.top = a.top; tR.right = Math.max(a.right, b ? b.right : 0); tR.bottom = b && b.height ? b.bottom : a.bottom; }
    const r = card.getBoundingClientRect(), s = stick.getBoundingClientRect();
    cR = { left: r.left - s.left, top: r.top - s.top, right: r.right - s.left, bottom: r.bottom - s.top };
    tR.top -= s.top; tR.bottom -= s.top;
  }

  function frame(now) {
    raf = 0;
    if (!visible || D.hidden || H.classList.contains('x-modal-on')) { last = 0; X.on = false; return; }
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016; last = now;
    const reduce = reduceQ.matches;
    f = progress();
    if (reduce) {
      // a designed still sequence: four composed frames, no motion
      const q = f < B.thinkA ? 0.2 : f < B.cardA ? 0.4 : f < B.end ? 0.62 : 0.8;
      fs = q; t = 12;
    } else {
      fs += (f - fs) * (1 - Math.exp(-dt * 7));
      if (Math.abs(f - fs) < 0.0004) fs = f;
      t += dt;
    }
    measure();
    state(fs, dt, reduce);
    if (!reduce || still !== fs || !X.pt) { draw(fs, t, reduce); still = fs; }
    raf = requestAnimationFrame(frame);
  }
  const kick = () => { if (!raf && visible) raf = requestAnimationFrame(frame); };

  // ---------- lifecycle: run only while the section is on screen ----------
  chrome(); size();
  new IntersectionObserver((es) => {
    visible = es[0].isIntersecting;
    if (visible) { fs = progress(); kick(); } else { X.on = false; window.__xmHold = false; }
  }, { rootMargin: '10% 0px' }).observe(sec);
  addEventListener('resize', () => { size(); kick(); });
  D.addEventListener('visibilitychange', kick);
  new MutationObserver(() => {
    if (!H.classList.contains('x-modal-on')) kick();
    if (rail.dataset.l !== H.lang) { rail.dataset.l = H.lang; chrome(); item = null; }
  }).observe(H, { attributes: true, attributeFilter: ['class', 'lang'] });
  rail.dataset.l = H.lang;
  if (D.fonts && D.fonts.load) D.fonts.load("500 11px 'JetBrains Mono'").then(() => { atlas = null; still = -1; }, () => {});
})();
