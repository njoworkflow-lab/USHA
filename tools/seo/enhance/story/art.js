// USHA's story: the drawings. One function per chapter, each returning layered
// inline SVG in the sketchbook style (graphite on paper, ember notes in her
// handwriting). Every chapter is seen through a different lens. Moving parts
// are separate small SVG layers moved with CSS transforms only, so the pencil
// filters render once and the motion stays cheap. art2.js and art3.js add the
// later chapters; story.js puts them on the page.
(() => {
  const W = 760, H = 690;
  const G = '#2A2420', E = '#FF5A1F', P = '#FFB48A';
  const A = (window.USHA_ART = window.USHA_ART || { by: {} });
  let rtl = false, lang = 'en';
  A.setLang = (l) => { lang = l; rtl = l === 'ar'; };
  A.lang = () => lang;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  A.esc = esc;
  A.dir = () => (rtl ? ' direction="rtl"' : '');

  // ---------- shared definitions, put once in the popup ----------
  A.defs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <filter id="ns-grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .3  0 0 0 0 .22  0 0 0 0 .14  0 0 0 .1 0"/></filter>
  <filter id="ns-pencil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="2" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.6"/></filter>
  <filter id="ns-smudge" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="3" seed="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="18" result="d"/><feGaussianBlur in="d" stdDeviation="2.2"/></filter>
  <filter id="ns-b4"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="ns-b8"><feGaussianBlur stdDeviation="8"/></filter>
  <filter id="ns-b24" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="24"/></filter>
  <pattern id="ns-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(38)"><path d="M0 0 V7" stroke="${G}" stroke-width="1.1" opacity=".55"/></pattern>
  <pattern id="ns-hatch2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-42)"><path d="M0 0 V6" stroke="${G}" stroke-width="1" opacity=".45"/></pattern>
  <pattern id="ns-hatchh" width="8" height="5" patternUnits="userSpaceOnUse"><path d="M0 2.5 H8" stroke="${G}" stroke-width=".9" opacity=".4"/></pattern>
  <pattern id="ns-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".9" fill="${G}" opacity=".55"/></pattern>
  <pattern id="ns-grid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0 H0 V16" fill="none" stroke="#9DB7D6" stroke-width=".8" opacity=".55"/></pattern>
  <radialGradient id="ns-bulb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF1DC"/><stop offset=".4" stop-color="#FFC690" stop-opacity=".8"/><stop offset="1" stop-color="${P}" stop-opacity="0"/></radialGradient>
  <radialGradient id="ns-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFE2C8"/><stop offset=".45" stop-color="${P}" stop-opacity=".55"/><stop offset="1" stop-color="${P}" stop-opacity="0"/></radialGradient>
  <marker id="ns-ah" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M1 1 L10 6 L1 11" fill="none" stroke="${E}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs></svg>`;

  // ---------- helpers ----------
  // a full-size layer; the first one of a chapter carries the paper
  A.base = (inner, paper) => `<svg class="ns-l" viewBox="0 0 ${W} ${H}" aria-hidden="true">${paper ? `<rect width="${W}" height="${H}" filter="url(#ns-grain)"/>` : ''}${inner}</svg>`;
  // a small moving layer: box [x y w h] in scene units, cls = the motion,
  // o = the pivot in scene units, v = extra CSS variables (duration, amplitude…)
  A.sp = (box, cls, inner, o, v) => {
    const [x, y, w, h] = box, ox = o ? o[0] : x + w / 2, oy = o ? o[1] : y + h / 2;
    const st = `left:${(x / W * 100).toFixed(3)}%;top:${(y / H * 100).toFixed(3)}%;width:${(w / W * 100).toFixed(3)}%;height:${(h / H * 100).toFixed(3)}%;transform-origin:${((ox - x) / w * 100).toFixed(2)}% ${((oy - y) / h * 100).toFixed(2)}%;${v || ''}`;
    return `<svg class="ns-sp ${cls}" viewBox="${x} ${y} ${w} ${h}" style="${st}" aria-hidden="true">${inner}</svg>`;
  };
  function lines(t, per) {
    const out = []; let cur = '';
    String(t).split(/\s+/).forEach((w) => {
      if (cur && (cur + ' ' + w).length > per) { out.push(cur); cur = w; } else cur = cur ? cur + ' ' + w : w;
    });
    if (cur) out.push(cur);
    return out;
  }
  // her handwriting. Box from x to x+w; a: start | middle | end (x is then the right edge);
  // s: size, c: 'g' for graphite, r: rotation, v: 'b' when y is the last line,
  // keep: part of the drawing itself (speech bubbles, labels), so it stays on phones too.
  // Arabic reads right to left, so it sits right-aligned in the same box.
  A.note = (t, x, y, w, o = {}) => {
    if (t == null) return '';
    // the Arabic hand runs larger for its size, so it is set a little smaller
    const s = (o.s || 24) * (lang === 'ar' ? 0.88 : 1), lh = s * 1.08, c = o.c === 'g' ? G : o.c || E, wt = o.c === 'g' ? 500 : 700;
    const k = lang === 'ru' ? 0.45 : lang === 'ar' ? 0.52 : 0.41;
    const ls = lines(t, Math.max(5, Math.floor(w / (s * k))));
    let a = o.a || 'start', ax = x;
    if (a === 'end') ax = x; // right edge
    // right to left: a start box still begins at x (where its arrow starts), so the text ends there; an end box ends at x
    if (rtl && a !== 'middle') { ax = x; a = a === 'start' ? 'end' : 'start'; }
    const y0 = o.v === 'b' ? y - (ls.length - 1) * lh : y;
    const rot = o.r ? ` transform="rotate(${o.r} ${x} ${y})"` : '';
    return `<text class="ns-n${o.keep ? ' ns-keep' : ''}" font-size="${s}" fill="${c}" font-weight="${wt}" text-anchor="${a}"${rtl ? ' direction="rtl"' : ''}${rot}>${ls.map((l, i) => `<tspan x="${ax}" y="${(y0 + i * lh).toFixed(1)}">${esc(l)}</tspan>`).join('')}</text>`;
  };
  // her arrows
  A.arrow = (d, dash) => `<path d="${d}" fill="none" stroke="${E}" stroke-width="2.4" stroke-linecap="round" filter="url(#ns-pencil)" marker-end="url(#ns-ah)"${dash ? ' stroke-dasharray="6 6"' : ''}/>`;
  A.ring = (cx, cy, rx, ry, r) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry || rx}" fill="none" stroke="${E}" stroke-width="2.4" stroke-dasharray="7 6" filter="url(#ns-pencil)"${r ? ` transform="rotate(${r} ${cx} ${cy})"` : ''}/>`;
  // mini USHA: her round face and two eyes; s scales, the eyes blink on their own
  A.me = (x, y, s = 1, extra = '') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="22" ry="18" fill="${P}"/><ellipse rx="22" ry="18" fill="url(#ns-hatch2)" opacity=".18"/><g class="ns-eyes"><ellipse cx="-7" rx="2.6" ry="3.8" fill="#1B1410"/><ellipse cx="7" rx="2.6" ry="3.8" fill="#1B1410"/></g>${extra}</g>`;
  // graphite outline group (draws itself in when the chapter opens)
  A.ink = (inner, w = 3, extra = '') => `<g class="dr" fill="none" stroke="${G}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" filter="url(#ns-pencil)"${extra}>${inner}</g>`;
  // a soft watercolour wash
  A.wash = (d, fill, op = 1) => `<path d="${d}" fill="${fill}" opacity="${op}" filter="url(#ns-smudge)"/>`;
  // the recurring pigeon, side view, facing right, at x y (feet), scale s
  A.pigeon = (x, y, s = 1, flip) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><path d="M-22 -4 C-26 -20 -12 -30 4 -26 C18 -22 26 -10 22 0 Z" fill="#9AA2AE" filter="url(#ns-smudge)"/><g fill="none" stroke="${G}" stroke-width="2.2" stroke-linecap="round" filter="url(#ns-pencil)"><path d="M-22 -4 C-26 -20 -12 -30 4 -26 C18 -22 26 -10 22 0 L-22 0 M-22 -4 L-34 -10 M0 0 L-2 8 M8 0 L10 8"/></g></g>`;
  A.pigeonHead = (x, y, s = 1, flip) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><circle cx="18" cy="-30" r="9" fill="#A9B1BC"/><circle cx="18" cy="-30" r="9" fill="none" stroke="${G}" stroke-width="2"/><circle cx="21" cy="-32" r="2.2" fill="${G}"/><path d="M26 -29 l7 2 l-7 2" fill="#E0A73A" stroke="${G}" stroke-width="1.2"/></g>`;

  const N = (c, i) => (c.n || [])[i];

  // ================= 1 · 3:07 a.m. — from the bottom of his coffee cup =================
  // drawn on the approved sketch's 1200-wide grid, then scaled into the scene
  const M1 = 'matrix(.8 0 0 .8 56 88)';
  const sky1 = (inner) => `<g transform="${M1}"><g clip-path="url(#ns-c1-sky)">${inner}</g></g>`;
  A.by.cup = (c) => {
    const face = 'M392 196 C420 160 560 150 610 220 C650 290 640 420 560 500 C510 548 420 556 372 512 C330 470 344 260 392 196 Z';
    const ripple = (i) => A.sp([100, 92, 520, 520], 'a-ripple', `<g transform="${M1}"><circle cx="380" cy="330" r="270" fill="none" stroke="#E7C9A6" stroke-width="2" opacity=".8"/></g>`, [360, 352], `--d:4.5s;--dl:${-1.5 * i}s`);
    return A.base(`
<defs><clipPath id="ns-c1-sky"><circle cx="380" cy="330" r="236"/></clipPath>
<radialGradient id="ns-c1-coffee" cx=".5" cy=".5" r=".5"><stop offset=".72" stop-color="#5B3A26" stop-opacity="0"/><stop offset=".8" stop-color="#5B3A26" stop-opacity=".85"/><stop offset="1" stop-color="#2E1D12"/></radialGradient>
<radialGradient id="ns-c1-wall" cx=".5" cy=".5" r=".5"><stop offset=".66" stop-color="#FBF7F0"/><stop offset=".8" stop-color="#E9DECF"/><stop offset=".86" stop-color="#C9B7A2"/></radialGradient></defs>
<g transform="${M1}">
  <circle cx="380" cy="330" r="318" fill="url(#ns-c1-wall)"/>
  <g opacity=".5" stroke="${G}" stroke-width="1" filter="url(#ns-pencil)"><path d="M380 12 L380 94 M380 648 L380 566 M62 330 L144 330 M698 330 L616 330 M155 105 L213 163 M605 555 L547 497 M155 555 L213 497 M605 105 L547 163 M262 36 L290 112 M498 624 L470 548 M86 448 L162 420 M674 212 L598 240 M86 212 L162 240 M674 448 L598 420 M262 624 L290 548 M498 36 L470 112"/></g>
  <circle cx="380" cy="330" r="318" fill="url(#ns-c1-coffee)"/>
</g>`, true)
    + ripple(0) + ripple(1) + ripple(2)
    + A.base(`<g transform="${M1}">
  <circle cx="380" cy="330" r="318" fill="none" stroke="${G}" stroke-width="3.4" filter="url(#ns-pencil)" class="dr"/>
  <circle cx="380" cy="330" r="236" fill="#E8DFD2"/>
  <g clip-path="url(#ns-c1-sky)">
    <rect x="140" y="90" width="480" height="480" fill="#DCD2C4"/>
    <g fill="none" stroke="${G}" stroke-width="1.6" opacity=".55" filter="url(#ns-pencil)"><path d="M180 150 l40 22 l-10 30 l44 18 l-6 26 l40 20"/></g>
    <g filter="url(#ns-smudge)" opacity=".35"><path d="M470 150 h18 v34 h-18z M494 162 h18 v22 h-18z M518 176 h18 v8 h-18z" fill="#8B6A4E"/></g>
    <g transform="translate(150 150) rotate(-24)">
      <rect x="0" y="0" width="150" height="120" fill="#2E3650" filter="url(#ns-smudge)"/>
      <circle cx="104" cy="34" r="16" fill="#F4E7C8" filter="url(#ns-b8)" opacity=".8"/>
      <g fill="none" stroke="${G}" stroke-width="3" filter="url(#ns-pencil)" class="dr"><rect x="0" y="0" width="150" height="120"/><path d="M75 0 V120 M0 60 H150"/></g>
      <g transform="translate(26 92)">
        <path d="M0 26 C-4 10 10 0 26 4 C40 8 48 20 44 30 Z" fill="#9AA2AE" filter="url(#ns-smudge)"/>
        <g fill="none" stroke="${G}" stroke-width="2.2" stroke-linecap="round" filter="url(#ns-pencil)"><path d="M0 26 C-4 10 10 0 26 4 C40 8 48 20 44 30 L0 30"/></g>
      </g>
    </g>
  </g>
</g>`)
    // the pigeon's head, pecking at the glass
    + A.sp([236, 236, 40, 36], 'a-peck', sky1(`<g transform="translate(150 150) rotate(-24) translate(26 92)"><circle cx="40" cy="4" r="9" fill="#A9B1BC"/><circle cx="40" cy="4" r="9" fill="none" stroke="${G}" stroke-width="2"/><circle cx="43" cy="2" r="2.2" fill="${G}"/><path d="M48 5 l7 2 l-7 2" fill="#E0A73A" stroke="${G}" stroke-width="1.2"/></g>`), null, '--d:2.4s')
    // the lamp, from directly below, swinging a little
    + A.sp([244, 150, 152, 152], 'a-drift', sky1(`<circle cx="330" cy="168" r="70" fill="url(#ns-bulb)" filter="url(#ns-b24)"/><circle cx="330" cy="168" r="40" fill="#F6E3C6"/><circle cx="330" cy="168" r="40" fill="url(#ns-hatch2)" opacity=".5"/><circle cx="330" cy="168" r="14" fill="#FFF6E6"/><g fill="none" stroke="${G}" stroke-width="2.6" filter="url(#ns-pencil)"><circle cx="330" cy="168" r="40"/><circle cx="330" cy="168" r="14"/></g>`), null, '--d:7s;--x:8px;--y:3px')
    // a moth, orbiting with total commitment
    + A.sp([284, 158, 106, 106], 'a-spin', sky1(`<path d="M378 168 l-8 -7 l-2 7 l2 7 Z M378 168 l8 -7 l2 7 l-2 7 Z" fill="#B9AA95" stroke="${G}" stroke-width="1"/>`), [320, 222.4], '--d:4s')
    // him, leaning over the cup, enormous from down here
    + A.sp([316, 176, 270, 372], 'a-drift', sky1(`
      <g fill="none" stroke="${G}" stroke-width="2.2" stroke-linecap="round" filter="url(#ns-pencil)" opacity=".85"><path d="M430 168 c14-30 40-34 52-10 M452 158 c10-34 46-40 60-6 M490 150 c18-26 54-20 58 14 M520 158 c26-12 50 6 44 34 M412 186 c-6-26 14-40 34-30"/></g>
      <path d="${face}" fill="#E7C2A3"/><path d="${face}" fill="url(#ns-hatch)" opacity=".38"/>
      <path d="M380 470 C420 520 520 520 572 470 C560 520 500 550 440 548 C404 546 384 520 380 470 Z" fill="url(#ns-dots)"/>
      <g fill="none" stroke="${G}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#ns-pencil)">
        <path d="${face}"/><path d="M410 238 q28-18 56-4 M500 230 q30-14 60 6" stroke-width="4"/>
        <ellipse cx="438" cy="268" rx="34" ry="24"/><ellipse cx="530" cy="264" rx="36" ry="25"/><path d="M472 266 q12-6 22-2"/>
        <path d="M414 296 q24 10 50 0 M506 294 q26 10 52 0" stroke-width="1.8"/><path d="M418 304 q22 8 44 0 M510 302 q24 8 46 0" stroke-width="1.4" opacity=".6"/>
        <path d="M456 372 q30 22 64 0" stroke-width="2.6"/><ellipse cx="474" cy="380" rx="7" ry="4" fill="${G}"/><ellipse cx="504" cy="380" rx="7" ry="4" fill="${G}"/>
        <path d="M444 430 q40 -10 80 4"/><path d="M600 330 c14 4 18 26 4 34" stroke-width="2.4"/>
      </g>
      <g transform="translate(424 258) skewX(-8)"><rect width="26" height="18" fill="#FBF7EF" stroke="${G}" stroke-width="1.2"/><path d="M4 13 h4 v-4 h4 v-3 h4 v6 h5" fill="none" stroke="${E}" stroke-width="1.5"/><text x="4" y="7" class="ns-hand" font-size="7" fill="${G}">Q3??</text></g>
      <g transform="translate(516 254) skewX(-8)"><rect width="28" height="19" fill="#FBF7EF" stroke="${G}" stroke-width="1.2"/><path d="M4 14 h4 v-4 h4 v-3 h4 v6 h6" fill="none" stroke="${E}" stroke-width="1.5"/><text x="4" y="7" class="ns-hand" font-size="7" fill="${G}">Q3??</text></g>
      <g fill="#E2BB9C" stroke="${G}" stroke-width="2"><path class="ns-lid" d="M406 262 q32-22 64 0 q-32 -6 -64 0 Z"/><path class="ns-lid" d="M496 258 q34-22 68 0 q-34 -6 -68 0 Z"/></g>`), null, '--d:6s;--x:-3px;--y:4px')
    // the spoon, stirring nothing in particular
    + A.sp([160, 350, 196, 170], 'a-sway', sky1(`<path d="M160 520 L300 380" stroke="#B9BDC3" stroke-width="14" stroke-linecap="round"/><path d="M160 520 L300 380" stroke="${G}" stroke-width="2.6" fill="none" stroke-linecap="round" filter="url(#ns-pencil)" stroke-dasharray="190 20"/><ellipse cx="318" cy="362" rx="34" ry="22" transform="rotate(-45 318 362)" fill="#D6DADF" stroke="${G}" stroke-width="2.8"/><ellipse cx="320" cy="360" rx="18" ry="10" transform="rotate(-45 320 360)" fill="#FBFCFD" opacity=".8"/>`), [184, 504], '--d:3.2s;--a:4deg')
    // steam, drifting up past us
    + [0, 1].map((i) => A.sp([250 + i * 96, 250, 110, 290], 'a-steam', sky1(`<path d="M${300 + i * 120} ${520 + i * 20} c-30-60 40-90 10-160 c-20-50 30-80 20-130" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6" filter="url(#ns-b8)"/>`), null, `--d:6s;--dl:${-3 * i}s`)).join('')
    + A.base(`<g transform="${M1}"><circle cx="380" cy="330" r="236" fill="none" stroke="${G}" stroke-width="3" filter="url(#ns-pencil)" class="dr"/><circle cx="380" cy="330" r="242" fill="none" stroke="${G}" stroke-width="1.2" opacity=".5" filter="url(#ns-pencil)"/></g>
  ${A.note(N(c, 0), 470, 34, 284, { s: 26 })}
  ${A.note(N(c, 1), 488, 92, 268, { s: 19, c: 'g' })}
  ${A.arrow('M628 132 C610 168 586 196 560 226')}
  ${A.note(N(c, 2), 622, 262, 136, { s: 22 })}
  ${A.arrow('M640 340 C600 330 560 318 520 300')}
  ${A.note(N(c, 4), 14, 34, 250, { s: 23 })}
  ${A.arrow('M56 92 C90 130 140 170 196 214')}
  ${A.note(N(c, 3), 14, 604, 232, { s: 22 })}
  ${A.arrow('M70 576 C100 548 136 528 168 516')}
  ${A.ring(447, 392, 30, 22)}
  ${A.note(N(c, 5), 560, 612, 190, { s: 22, r: -6 })}
  ${A.arrow('M590 590 C560 540 520 470 474 412')}
  ${A.note(N(c, 6), 380, 668, 440, { s: 18, c: 'g', a: 'middle' })}`);
  };

  // ================= 2 · Ten years — the board game, from straight above =================
  A.by.dice = (c) => {
    // the board: 6 × 6 cells of 76, turned a little, its top-left at 150 136
    const T = 'translate(150 136) rotate(-7 228 228)';
    const rad = -7 * Math.PI / 180, ca = Math.cos(rad), sa = Math.sin(rad);
    const at = (x, y) => [150 + 228 + (x - 228) * ca - (y - 228) * sa, 136 + 228 + (x - 228) * sa + (y - 228) * ca];
    let cells = '', nums = '';
    const towns = { 3: 'Dubai', 8: 'Cairo', 14: 'Riyadh', 20: 'Moscow', 27: 'Jeddah', 33: 'Kazan' };
    for (let r = 0; r < 6; r++) for (let q = 0; q < 6; q++) {
      const n = (5 - r) * 6 + ((5 - r) % 2 ? 5 - q : q) + 1;
      if ((r + q) % 2) cells += `<rect x="${q * 76}" y="${r * 76}" width="76" height="76" fill="url(#ns-hatch2)" opacity=".35"/>`;
      nums += `<text x="${q * 76 + 6}" y="${r * 76 + 18}" class="ns-hand" font-size="16" fill="${G}" opacity=".7">${n}</text>`;
      if (towns[n]) nums += `<text x="${q * 76 + 38}" y="${r * 76 + 62}" class="ns-hand" font-size="15" fill="${G}" opacity=".55" text-anchor="middle">${towns[n]}</text>`;
    }
    const ladder = (x1, y1, x2, y2) => {
      const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = -dy / L * 9, ny = dx / L * 9;
      let d = `M${x1 + nx} ${y1 + ny} L${x2 + nx} ${y2 + ny} M${x1 - nx} ${y1 - ny} L${x2 - nx} ${y2 - ny}`;
      for (let t = 0.12; t < 1; t += 0.14) d += ` M${x1 + dx * t + nx} ${y1 + dy * t + ny} L${x1 + dx * t - nx} ${y1 + dy * t - ny}`;
      return `<path d="${d}" stroke="#8B6A4E" stroke-width="7" opacity=".35" fill="none"/><path d="${d}"/>`;
    };
    const snake = (d, w) => `<path d="${d}" stroke="#7FA37A" stroke-width="${w}" fill="none" stroke-linecap="round" filter="url(#ns-smudge)" opacity=".9"/><path d="${d}" stroke="url(#ns-dots)" stroke-width="${w - 4}" fill="none" stroke-linecap="round"/>`;
    const pawn = (x, y, col, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="5" cy="6" rx="16" ry="14" fill="${G}" opacity=".18"/><circle r="15" fill="${col}"/><circle r="15" fill="none" stroke="${G}" stroke-width="2.4"/><circle r="8" fill="#fff" opacity=".35"/><circle r="8" fill="none" stroke="${G}" stroke-width="2"/></g>`;
    const s1 = 'M330 46 C400 110 250 150 320 232 S210 330 150 410';
    const die = (x, y, s, r, a, b) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="M0 -40 L46 -18 L46 30 L0 52 L-46 30 L-46 -18 Z" fill="#FBF7EF"/><path d="M0 6 L46 -18 L46 30 L0 52 Z" fill="url(#ns-hatch)" opacity=".5"/><path d="M0 6 L-46 -18 L-46 30 L0 52 Z" fill="url(#ns-hatch2)" opacity=".25"/><g fill="none" stroke="${G}" stroke-width="2.6" stroke-linejoin="round" filter="url(#ns-pencil)"><path d="M0 -40 L46 -18 L46 30 L0 52 L-46 30 L-46 -18 Z M-46 -18 L0 6 L46 -18 M0 6 V52"/></g><text class="ns-hand" font-size="16" font-weight="700" fill="${E}" text-anchor="middle" transform="translate(-23 22) skewY(27.5)">${a}</text><text class="ns-hand" font-size="15" font-weight="700" fill="${G}" text-anchor="middle" transform="translate(23 22) skewY(-27.5)">${b}</text></g>`;
    const [fx, fy] = at(96, 124), [hx, hy] = at(104, 196), [sx, sy] = at(312, 236);
    return A.base(`
<defs><linearGradient id="ns-c2-tab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E4D7C2"/><stop offset="1" stop-color="#D8C8AE"/></linearGradient></defs>
<g transform="${T}">
  <rect x="10" y="14" width="456" height="456" fill="${G}" opacity=".16" filter="url(#ns-b8)"/>
  <rect width="456" height="456" fill="#F6EFE2"/>${cells}
  ${A.ink(`<rect width="456" height="456"/><path d="M76 0 V456 M152 0 V456 M228 0 V456 M304 0 V456 M380 0 V456 M0 76 H456 M0 152 H456 M0 228 H456 M0 304 H456 M0 380 H456" stroke-width="1.4" opacity=".7"/>`, 3.2)}
  ${nums}
  ${snake(s1, 22)}
  <g fill="none" stroke="${G}" stroke-width="2" filter="url(#ns-pencil)"><path d="M330 46 C400 110 250 150 320 232 S210 330 150 410"/></g>
  <g transform="translate(330 46) rotate(40)"><ellipse rx="16" ry="12" fill="#7FA37A" stroke="${G}" stroke-width="2"/><circle cx="6" cy="-4" r="2.2" fill="${G}"/><circle cx="6" cy="4" r="2.2" fill="${G}"/><path d="M16 0 l10 0 l4 -4 M26 0 l4 4" stroke="${E}" stroke-width="1.6" fill="none"/></g>
  <text class="ns-hand" font-size="17" fill="${G}" transform="translate(262 300) rotate(-50)">wrong price</text>
  ${snake('M120 60 C60 100 160 150 90 200', 18)}
  <g transform="translate(120 60) rotate(-140)"><ellipse rx="13" ry="10" fill="#7FA37A" stroke="${G}" stroke-width="2"/><circle cx="5" cy="-3" r="2" fill="${G}"/><circle cx="5" cy="3" r="2" fill="${G}"/></g>
  <g fill="none" stroke="${G}" stroke-width="2.4" filter="url(#ns-pencil)">${ladder(80, 420, 110, 196)}${ladder(372, 440, 410, 262)}${ladder(250, 140, 268, 18)}</g>
  ${pawn(300, 370, '#9DB7D6', .9)}${pawn(400, 120, '#D9A6B8', .9)}${pawn(210, 410, '#E8D27A', .9)}${pawn(190, 280, '#B9D3A0', .9)}
  <text x="242" y="270" class="ns-hand" font-size="34" fill="${G}" opacity=".3" transform="rotate(8 242 270)">?</text>
  <text x="380" y="200" class="ns-hand" font-size="30" fill="${G}" opacity=".3">?</text>
  <text x="40" y="300" class="ns-hand" font-size="28" fill="${G}" opacity=".3">?</text>
</g>
<g transform="translate(560 440)">
  <path d="M-30 150 C-10 110 70 96 130 130 L150 172 C90 160 20 170 -20 190 Z" fill="${G}" opacity=".14" filter="url(#ns-b8)"/>
  <path d="M10 40 L140 20 L170 120 L60 160 Z" fill="#C9A87C" filter="url(#ns-smudge)" opacity=".9"/>
  ${A.ink('<path d="M10 40 L140 20 L170 120 L60 160 Z M10 40 C30 70 50 120 60 160"/><ellipse cx="75" cy="30" rx="66" ry="14" transform="rotate(-9 75 30)"/>', 2.8)}
  <text x="92" y="98" class="ns-hand" font-size="22" font-weight="700" fill="${G}" transform="rotate(-14 92 98)" text-anchor="middle">LOGO™</text>
</g>`, true)
    // the font pawn: a man who bet his savings on a typeface
    + A.sp([fx - 40, fy - 66, 80, 96], 'a-bob', `<g transform="${T}">${pawn(96, 124, '#F2B38E')}<g transform="translate(96 96) rotate(7)"><rect x="-26" y="-28" width="52" height="34" fill="#FBF7EF" stroke="${G}" stroke-width="2"/><text y="0" class="ns-hand" font-size="26" font-weight="700" fill="${G}" text-anchor="middle">Aa</text></g></g>`, null, '--d:2.6s;--a:-5px')
    // a pawn climbing, very pleased
    + A.sp([hx - 24, hy - 24, 48, 48], 'a-hop', `<g transform="${T}">${pawn(104, 196, '#9DB7D6')}</g>`, null, '--d:1.6s')
    // a pawn sliding down the snake, as one does
    + A.sp([sx - 24, sy - 24, 48, 48], 'a-slide', `<g transform="${T}">${pawn(312, 236, '#E89A7A')}</g>`, null, '--d:5s;--x:-64px;--y:92px')
    // the dice, still rolling
    + A.sp([590, 296, 120, 120], 'a-sway', die(650, 356, 1, 8, 'PRICE', 'AD'), [650, 400], '--d:2.2s;--a:6deg')
    + A.sp([500, 360, 104, 104], 'a-sway', die(552, 412, .85, -16, 'MARKET', '6?'), [552, 450], '--d:2.8s;--a:-5deg;--dl:-1s')
    // the pigeon, walking across the board like it owns it
    + A.sp([150, 92, 70, 40], 'a-walk', A.pigeon(186, 128, .9), null, '--d:14s;--x:330px')
    + A.base(`
  ${A.note(N(c, 2), 14, 34, 300, { s: 23 })}
  ${A.note(N(c, 1), 470, 34, 286, { s: 23 })}
  ${A.arrow('M600 96 C590 130 560 150 520 170')}
  ${A.note(N(c, 0), 14, 210, 128, { s: 22 })}
  ${A.arrow(`M84 ${310} C110 300 150 ${fy} ${fx - 30} ${fy - 10}`)}
  ${A.note(N(c, 3), 470, 616, 286, { s: 22 })}
  ${A.arrow('M520 598 C500 540 512 480 540 456')}`);
  };

  // ================= 3 · Locked away — an x-ray of the expert, who has gone fishing =================
  A.by.xray = (c) => {
    const skull = 'M120 250 C80 230 60 170 80 120 C100 64 170 40 230 52 C300 66 330 120 320 180 C316 210 300 226 296 246 C294 262 310 270 306 282 C300 292 288 292 286 300 C284 312 276 322 260 322 L210 322 C200 340 196 356 196 372';
    return A.base(`
<defs><linearGradient id="ns-c3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3E6D2"/><stop offset="1" stop-color="#E9D5BC"/></linearGradient>
<clipPath id="ns-c3-box"><rect x="60" y="80" width="330" height="262"/></clipPath></defs>
<rect y="0" width="760" height="470" fill="url(#ns-c3-sky)" opacity=".7"/>
<circle cx="610" cy="300" r="46" fill="#F4C9A0" opacity=".7" filter="url(#ns-b8)"/>
${A.wash('M420 470 C480 430 560 440 620 452 C680 430 730 440 760 448 L760 480 L420 480 Z', '#B7B9A6', .7)}
<rect y="470" width="760" height="220" fill="#B9C8CF" opacity=".55" filter="url(#ns-smudge)"/>
<rect y="476" width="760" height="214" fill="url(#ns-hatchh)" opacity=".6"/>
${A.ink('<path d="M420 470 C480 430 560 440 620 452 C680 430 730 440 760 448 M0 470 H760" stroke-width="1.8"/>')}
<!-- the pier, long and wooden, going nowhere -->
<path d="M0 448 L430 456 L430 488 L0 486 Z" fill="#C9A87C" filter="url(#ns-smudge)"/>
${A.ink('<path d="M0 448 L430 456 L430 488 L0 486 M60 449 V487 M120 450 V487 M180 451 V487 M240 452 V487 M300 453 V487 M360 455 V488 M410 488 V560 M300 487 V572 M150 486 V566 M20 486 V560" stroke-width="2.4"/>')}
<path d="M410 560 l0 6 M300 572 l0 6" stroke="${G}"/>
<!-- him: a back, a hat, a bucket, eleven years in his head -->
<path d="M228 452 C220 400 236 360 262 352 C300 344 318 380 316 452 Z" fill="#8B98A6" filter="url(#ns-smudge)"/>
<ellipse cx="270" cy="330" rx="30" ry="32" fill="#E7C2A3"/>
<path d="M232 316 C240 290 300 286 310 316 C330 318 330 326 310 328 L232 328 C214 326 214 318 232 316 Z" fill="#D8C089"/>
${A.ink(`<path d="M228 452 C220 400 236 360 262 352 C300 344 318 380 316 452 M240 330 C238 352 254 364 270 362 C292 360 302 344 300 330 M232 316 C240 290 300 286 310 316 C330 318 330 326 310 328 L232 328 C214 326 214 318 232 316 Z M296 454 C300 480 320 500 314 520 M262 454 C262 484 250 500 256 524"/>
<path d="M150 428 h46 l-6 26 h-34 Z"/><path d="M152 428 C160 412 186 412 194 428" stroke-width="2"/>`)}
<text x="173" y="446" class="ns-hand" font-size="13" fill="${G}" text-anchor="middle">bait</text>
<path d="M262 300 L250 268" stroke="${G}" stroke-width="1.6" stroke-dasharray="3 6" opacity=".55"/>
<!-- the lightbox: the inside of his head, x-rayed -->
<g transform="translate(0 -17) scale(.84) rotate(-4 225 210)">
  <rect x="48" y="68" width="354" height="286" rx="6" fill="#D9D3C6"/>
  <rect x="60" y="80" width="330" height="262" fill="#1E2632"/>
  <g clip-path="url(#ns-c3-box)">
    <rect x="60" y="80" width="330" height="262" fill="url(#ns-hatch2)" opacity=".25"/>
    <g fill="none" stroke="#CFE3F2" stroke-width="3" stroke-linecap="round" opacity=".9"><path d="${skull}"/></g>
    <path d="${skull}" fill="#BFD6EA" opacity=".08"/>
    <g fill="none" stroke="#CFE3F2" stroke-width="1.6" opacity=".7"><circle cx="250" cy="170" r="14"/><path d="M290 236 l12 0 M280 300 h12"/></g>
    <!-- the safe, where the knowledge lives -->
    <rect x="130" y="110" width="120" height="120" rx="6" fill="#2D3A4A" stroke="#CFE3F2" stroke-width="2.4"/>
    <rect x="140" y="120" width="100" height="100" rx="3" fill="none" stroke="#CFE3F2" stroke-width="1.2" opacity=".6"/>
    <path d="M226 150 v-10 h8 v10 M226 200 v10 h8 v-10" stroke="#CFE3F2" stroke-width="2" fill="none"/>
    <!-- the drawers -->
    <g stroke="#CFE3F2" stroke-width="1.6" fill="#273343">
      <rect x="96" y="246" width="98" height="22"/><rect x="96" y="268" width="98" height="22"/><rect x="96" y="290" width="98" height="22"/>
    </g>
    <g class="ns-hand" font-size="13" fill="#E4F0F8"><text x="102" y="262">Ramadan ’13–’24</text><text x="102" y="284">who pays late</text><text x="102" y="306">the real margins</text></g>
  </g>
  <rect x="60" y="80" width="330" height="262" fill="none" stroke="${G}" stroke-width="2"/>
  ${A.ink('<rect x="48" y="68" width="354" height="286" rx="6"/><path d="M200 56 h50 v18 h-50 Z"/>', 2.8)}
  <text x="372" y="334" font-family="ui-monospace,monospace" font-size="10" fill="#CFE3F2" text-anchor="end" opacity=".8">EXPERT · L · 1 OF 1</text>
</g>`, true)
    // the combination dial, turning by itself
    + A.sp([128, 92, 64, 64], 'a-tick', `<g transform="translate(0 -17) scale(.84) rotate(-4 225 210)"><circle cx="190" cy="170" r="24" fill="#2D3A4A" stroke="#CFE3F2" stroke-width="2.4"/><path d="M190 150 v8 M210 170 h-8 M190 190 v-8 M170 170 h8 M190 170 L190 154" stroke="#CFE3F2" stroke-width="2"/><circle cx="190" cy="170" r="4" fill="#CFE3F2"/></g>`, [160, 129], '--d:6s')
    // the rod, the line, the bobber: knowledge, going fishing
    + A.sp([290, 250, 290, 230], 'a-sway', A.ink('<path d="M300 420 C380 360 470 300 560 262" stroke-width="3"/><path d="M560 262 C580 330 590 420 596 470" stroke-width="1" opacity=".7"/>'), [300, 420], '--d:5s;--a:1.6deg')
    + A.sp([580, 452, 34, 40], 'a-bob', `<g><path d="M588 470 a9 9 0 0 1 18 0 Z" fill="${E}"/><path d="M588 470 a9 9 0 0 0 18 0 Z" fill="#FBF7EF"/><circle cx="597" cy="470" r="9" fill="none" stroke="${G}" stroke-width="2"/></g>`, null, '--d:2.2s;--a:5px')
    + A.sp([520, 596, 160, 70], 'a-drift', `<g opacity=".75"><path d="M540 630 C570 604 620 604 650 628 L672 612 L668 646 L650 634 C620 656 570 656 540 630 Z" fill="#7F97A3" filter="url(#ns-smudge)"/><path d="M540 630 C570 604 620 604 650 628 L672 612 L668 646 L650 634 C620 656 570 656 540 630 Z" fill="none" stroke="${G}" stroke-width="2"/><circle cx="560" cy="626" r="2.5" fill="${G}"/><text x="598" y="636" class="ns-hand" font-size="14" fill="#F6EFE2" text-anchor="middle">a whole market</text></g>`, null, '--d:7s;--x:-26px;--y:4px')
    // the algorithm: a black box with legs and teeth, leaving
    + A.sp([20, 386, 110, 70], 'a-scurry', `<g><rect x="40" y="396" width="64" height="44" rx="4" fill="#1B1714"/><path d="M48 426 l6 -8 l6 8 l6 -8 l6 8 l6 -8 l6 8 l6 -8 l6 8" fill="none" stroke="#F6EFE2" stroke-width="1.8"/><circle cx="56" cy="408" r="4" fill="#F6EFE2"/><circle cx="57" cy="408" r="1.6" fill="${G}"/><g stroke="${G}" stroke-width="2.6" stroke-linecap="round"><path d="M50 440 l-6 10 M64 440 l4 10 M80 440 l-6 10 M94 440 l4 10"/></g><text x="74" y="404" font-family="ui-monospace,monospace" font-size="8" fill="#F6EFE2" text-anchor="middle">if/else?</text><path d="M108 420 c10 -4 14 4 22 0 M110 432 c10 -2 12 4 18 2" stroke="${G}" stroke-width="1.4" fill="none" opacity=".6"/></g>`, null, '--d:.9s;--x:-14px')
    + A.sp([416, 404, 36, 44], 'a-peck', A.pigeonHead(410, 446, 1), null, '--d:2.8s')
    + A.base(`${A.pigeon(410, 448, 1)}
  ${A.note(N(c, 3), 380, 34, 370, { s: 22 })}
  ${A.arrow('M392 72 C370 80 352 84 336 86')}
  ${A.note(N(c, 0), 410, 130, 340, { s: 23 })}
  ${A.arrow('M420 150 C330 150 240 136 186 130')}
  ${A.note(N(c, 1), 430, 222, 326, { s: 23 })}
  ${A.arrow('M440 242 C360 250 250 232 170 222')}
  ${A.note(N(c, 2), 14, 560, 300, { s: 23 })}
  ${A.arrow('M60 530 C64 500 70 480 72 462')}`);
  };

  // ================= 4 · The listening — two hundred giants and one jar =================
  A.by.jar = (c) => {
    const jar = 'M262 210 C262 196 498 196 498 210 L498 232 C548 250 560 300 560 360 L560 590 C560 630 520 642 380 642 C240 642 200 630 200 590 L200 360 C200 300 212 250 262 232 Z';
    return A.base(`
<defs><clipPath id="ns-c4-jar"><path d="${jar}"/></clipPath>
<linearGradient id="ns-c4-glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".12" stop-color="#fff" stop-opacity="0"/><stop offset=".86" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/></linearGradient></defs>
<!-- the table edge, very far away -->
<path d="M0 600 C200 590 560 590 760 604 L760 690 L0 690 Z" fill="#C9A87C" opacity=".55" filter="url(#ns-smudge)"/>
${A.ink('<path d="M0 600 C200 590 560 590 760 604" stroke-width="2"/>')}
<!-- left giant: talking about budgets, for ninety minutes -->
<path d="M-40 140 C40 120 150 160 176 260 C190 316 170 360 186 400 C196 430 170 446 150 446 C160 470 150 500 120 504 C130 540 100 580 40 580 L-40 580 Z" fill="#E7C2A3"/>
<path d="M-40 140 C40 120 150 160 176 260 C190 316 170 360 186 400 C196 430 170 446 150 446 C160 470 150 500 120 504 C130 540 100 580 40 580 L-40 580 Z" fill="url(#ns-hatch)" opacity=".35"/>
${A.ink('<path d="M-40 140 C40 120 150 160 176 260 C190 316 170 360 186 400 C196 430 170 446 150 446 C160 470 150 500 120 504 C130 540 100 580 40 580"/><path d="M80 236 q30 -16 60 6" stroke-width="4"/><ellipse cx="116" cy="270" rx="16" ry="9"/><circle cx="120" cy="270" r="4.5" fill="#2A2420"/><path d="M40 280 c-20 20 -10 60 20 60"/>')}
<!-- right giant: the chef. salt. -->
<path d="M800 120 C700 110 600 180 590 280 C584 340 600 380 588 420 C578 450 600 470 620 468 C612 500 630 530 660 530 C650 570 690 600 760 600 L800 600 Z" fill="#D9A98A"/>
<path d="M800 120 C700 110 600 180 590 280 C584 340 600 380 588 420 C578 450 600 470 620 468 C612 500 630 530 660 530 C650 570 690 600 760 600 L800 600 Z" fill="url(#ns-hatch2)" opacity=".3"/>
${A.ink('<path d="M800 120 C700 110 600 180 590 280 C584 340 600 380 588 420 C578 450 600 470 620 468 C612 500 630 530 660 530 C650 570 690 600 760 600"/><path d="M626 250 q30 -14 62 2" stroke-width="4"/><ellipse cx="656" cy="282" rx="15" ry="8"/><circle cx="652" cy="282" r="4.5" fill="#2A2420"/><path d="M612 486 q24 6 40 -8" stroke-width="2.4"/>')}
<!-- top giant, upside down, peering in: the analyst -->
<path d="M240 -30 C250 60 300 110 380 116 C460 110 512 60 520 -30 Z" fill="#E3B898"/>
<path d="M240 -30 C250 60 300 110 380 116 C460 110 512 60 520 -30 Z" fill="url(#ns-hatch)" opacity=".3"/>
${A.ink('<path d="M240 -30 C250 60 300 110 380 116 C460 110 512 60 520 -30"/><circle cx="330" cy="56" r="26"/><circle cx="430" cy="56" r="26"/><path d="M356 56 h48"/><path d="M300 92 q-10 10 -20 4 M460 92 q10 10 20 4" stroke-width="2"/><path d="M366 18 q14 10 28 0" stroke-width="2.4"/>')}
<circle cx="330" cy="56" r="7" fill="#2A2420"/><circle cx="430" cy="56" r="7" fill="#2A2420"/>
<!-- the jar -->
<path d="${jar}" fill="#EAF0F0" opacity=".55"/>
<g clip-path="url(#ns-c4-jar)">
  <circle cx="380" cy="560" r="150" fill="url(#ns-glow)"/>
  <ellipse cx="380" cy="598" rx="66" ry="16" fill="#C98E8E" opacity=".75" filter="url(#ns-smudge)"/>
  <!-- scraps of everything they said -->
  <g class="ns-hand" font-size="15" fill="${G}" opacity=".75">
    <text x="262" y="330" transform="rotate(-12 262 330)">CPM</text><text x="452" y="300" transform="rotate(10 452 300)">salt!!</text>
    <text x="300" y="420" transform="rotate(6 300 420)">margin</text><text x="440" y="452" transform="rotate(-8 440 452)">GMP</text>
    <text x="236" y="500" transform="rotate(-4 236 500)">“trust me”</text><text x="470" y="540" transform="rotate(12 470 540)">ROAS</text>
  </g>
</g>
<path d="${jar}" fill="url(#ns-c4-glass)"/>
${A.ink(`<path d="${jar}"/><path d="M262 210 L262 232 C300 240 460 240 498 232 M226 300 C222 380 222 500 228 600" stroke-width="2"/><path d="M536 320 C540 380 540 460 534 540" stroke-width="5" stroke="#fff" opacity=".7"/>`, 3.4)}
<path d="M254 168 C254 150 506 150 506 168 L506 206 C506 222 254 222 254 206 Z" fill="#B9BDC3"/>
${A.ink('<path d="M254 168 C254 150 506 150 506 168 L506 206 C506 222 254 222 254 206 Z M256 180 C300 190 460 190 504 180 M256 194 C300 204 460 204 504 194" />')}
<text x="380" y="236" class="ns-hand" font-size="15" fill="${G}" text-anchor="middle" opacity=".7">USHA · batch 0.1</text>
<!-- the chart, pressed to the glass by a hand -->
<g transform="rotate(-8 150 520)"><rect x="96" y="452" width="120" height="96" fill="#FBF7EF"/><path d="M108 530 L130 506 L150 516 L176 478 L204 490" fill="none" stroke="${E}" stroke-width="2.4"/><path d="M108 536 H206 M108 536 V462" stroke="${G}" stroke-width="1.4"/>${A.ink('<rect x="96" y="452" width="120" height="96"/><path d="M90 548 C76 520 72 486 92 470 M96 548 C120 560 160 562 190 556" stroke-width="2.4"/>', 2.6)}</g>
`, true)
    // mouths, talking
    + A.sp([120, 314, 70, 70], 'a-talk', `<path d="M134 338 C156 324 178 334 182 350 C172 368 148 366 134 352 Z" fill="#6B3A30" stroke="${G}" stroke-width="2.4"/>`, [160, 346], '--d:.5s')
    + A.sp([570, 330, 60, 60], 'a-talk', `<path d="M600 350 C586 342 576 352 580 362 C590 372 606 364 610 356 Z" fill="#6B3A30" stroke="${G}" stroke-width="2.4"/>`, [594, 356], '--d:.62s;--dl:-.2s')
    // their words, floating at the glass
    + A.sp([170, 250, 50, 120], 'a-flick', `<g fill="none" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity=".6"><path d="M184 300 q14 -10 20 4 M188 324 q16 -6 22 6 M184 348 q14 4 18 14"/></g>`, null, '--d:1.4s')
    + A.sp([520, 250, 70, 120], 'a-flick', `<g fill="none" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity=".6"><path d="M570 300 q-14 -10 -20 4 M566 324 q-16 -6 -22 6 M570 348 q-14 4 -18 14"/></g>`, null, '--d:1.7s;--dl:-.6s')
    // the chef's hat, wobbling with conviction
    + A.sp([600, 60, 200, 200], 'a-sway', `<g transform="translate(40 66) rotate(22 690 110)"><path d="M630 150 L640 100 C600 100 600 40 650 50 C660 10 720 10 730 50 C780 40 780 100 740 100 L750 150 Z" fill="#FBFCFD"/>${A.ink('<path d="M630 150 L640 100 C600 100 600 40 650 50 C660 10 720 10 730 50 C780 40 780 100 740 100 L750 150 Z M640 130 H748"/>', 2.6)}</g>`, [720, 220], '--d:3s;--a:3deg')
    // me, very small, very busy
    + A.sp([340, 530, 80, 74], 'a-bob', `<g clip-path="url(#ns-c4-jar)">${A.me(380, 570, 1.2, `<path d="M14 6 l14 -10" stroke="${G}" stroke-width="2.2" stroke-linecap="round"/><rect x="-30" y="8" width="22" height="16" fill="#FBF7EF" stroke="${G}" stroke-width="1.4" transform="rotate(-10)"/>`)}</g>`, null, '--d:3s;--a:-3px')
    + A.base(`
  ${A.note(N(c, 0), 14, 34, 220, { s: 23 })}
  ${A.arrow('M90 92 C96 130 104 160 110 200')}
  ${A.note(N(c, 1), 14, 616, 300, { s: 22 })}
  ${A.arrow('M70 596 C80 578 96 566 110 554')}
  ${A.note(N(c, 2), 470, 646, 286, { s: 22, a: 'start' })}
  ${A.arrow('M466 640 C440 626 424 604 410 588')}
  ${A.note(N(c, 3), 530, 34, 140, { s: 22 })}
  ${A.arrow('M600 112 C610 170 600 240 600 320')}`);
  };

  // ================= 5 · Growing up — the doorframe: every height I was, in pencil =================
  A.by.door = (c) => {
    // the marks on the right-hand jamb (floor at 640) and the day each belongs to
    const marks = [586, 528, 452, 352, 176];
    // me on each of those days: face size and centre; the legs grew faster than the rest
    const ghosts = [[262, .9], [300, 1.2], [346, 1.5], [394, 1.9]].map(([x, s], i) => {
      const top = marks[i], cy = top + 18 * s, bot = cy + 18 * s;
      return `<g opacity="${0.3 + i * 0.1}" fill="none" stroke="${G}" stroke-width="2" stroke-dasharray="5 6"><ellipse cx="${x}" cy="${cy}" rx="${22 * s}" ry="${18 * s}"/><path d="M${x - 7 * s} ${bot - 2} V640 M${x + 7 * s} ${bot - 2} V640"/></g>
<path d="M${x} ${top} H520" stroke="${G}" stroke-width="1" stroke-dasharray="1 5" opacity=".35"/>`;
    }).join('');
    const book = (y, h, w, col, t, r = 0) => `<g transform="rotate(${r} 478 ${y + h / 2})"><rect x="${478 - w / 2}" y="${y}" width="${w}" height="${h}" fill="${col}"/><rect x="${478 - w / 2}" y="${y}" width="${w}" height="${h}" fill="url(#ns-hatch2)" opacity=".25"/><rect x="${478 - w / 2}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${G}" stroke-width="2.2" filter="url(#ns-pencil)"/><text x="478" y="${y + h / 2 + 5}" class="ns-hand" font-size="${Math.min(15, h - 6)}" fill="${G}" text-anchor="middle">${t}</text></g>`;
    const lbl = [0, 1, 2, 3, 4].map((i) => N(c, i));
    return A.base(`
<!-- the hallway behind the door -->
<rect x="236" y="30" width="288" height="610" fill="#D8CDBB"/>
<rect x="236" y="30" width="288" height="610" fill="url(#ns-hatch2)" opacity=".22"/>
<path d="M236 520 L524 520 L524 640 L236 640 Z" fill="#C9B79E" opacity=".7"/>
${A.ink('<path d="M236 520 H524 M270 520 L236 640 M490 520 L524 640" stroke-width="1.6" opacity=".6"/>')}
<!-- a window down the hall, and guess who -->
<rect x="262" y="96" width="86" height="104" fill="#9FB4C6" filter="url(#ns-smudge)"/>
${A.ink('<rect x="262" y="96" width="86" height="104"/><path d="M305 96 V200 M262 148 H348"/>', 2.4)}
${A.pigeon(300, 200, .7)}
<!-- the doorframe, forty years of paint -->
<path d="M196 0 H236 V640 H196 Z M524 0 H564 V640 H524 Z M196 0 H564 V30 H196 Z" fill="#E9DDCB"/>
<path d="M196 0 H236 V640 H196 Z M524 0 H564 V640 H524 Z" fill="url(#ns-hatch)" opacity=".2"/>
${A.ink('<path d="M196 0 V640 M236 30 V640 M524 30 V640 M564 0 V640 M236 30 H524"/><path d="M206 60 c4 120 -2 260 4 420 M552 80 c-4 140 4 300 -2 480" stroke-width="1" opacity=".5"/>', 3.4)}
<path d="M0 640 H760 V690 H0 Z" fill="#B99B7A" opacity=".5" filter="url(#ns-smudge)"/>
${A.ink('<path d="M0 640 H760" stroke-width="2.4"/>')}
<!-- the marks -->
<g stroke="${G}" stroke-width="2.6" stroke-linecap="round" filter="url(#ns-pencil)">${marks.map((y) => `<path d="M518 ${y} H570"/>`).join('')}</g>
<!-- the art director's line, with his hair -->
<path d="M236 214 H524" stroke="${E}" stroke-width="2.2" stroke-dasharray="3 5" opacity=".75"/>
<g fill="none" stroke="${G}" stroke-width="2" opacity=".6" filter="url(#ns-pencil)"><path d="M380 214 c6 -26 20 -30 26 -8 c4 -22 22 -24 24 2 c6 -18 22 -14 20 6"/></g>
<text x="246" y="232" class="ns-hand" font-size="17" fill="${E}">A.D.</text>
<!-- small doodles, on the wall beside each day -->
<g transform="translate(150 ${marks[0]})"><circle r="13" fill="none" stroke="${E}" stroke-width="2" opacity=".7"/><text y="5" class="ns-hand" font-size="13" text-anchor="middle" fill="${G}">CR</text><path d="M-15 -20 C-6 -28 6 -28 15 -20" stroke="#E0A73A" stroke-width="2" fill="none"/><path d="M-6 -30 l6 -8 l6 8" stroke="#E0A73A" stroke-width="1.6" fill="none"/></g>
<g transform="translate(150 ${marks[1] + 10})"><path d="M-12 -30 h24 l-2 50 h-20 Z" fill="#FBF7EF"/>${A.ink('<path d="M-12 -30 h24 l-2 50 h-20 Z M-8 -38 h16 v8 h-16 Z"/>', 2)}<text y="0" class="ns-hand" font-size="11" text-anchor="middle" fill="${E}">SPF50</text><g stroke="#6F93B4" stroke-width="1.8"><path d="M30 -40 v20 M20 -30 h20 M23 -37 l14 14 M37 -37 l-14 14"/></g></g>
<g transform="translate(150 ${marks[2] + 10})"><text class="ns-hand" font-size="34" font-weight="700" fill="${E}" text-anchor="middle">−%</text><text x="30" y="-16" class="ns-hand" font-size="24" fill="${G}">!!</text></g>
<g transform="translate(150 ${marks[3] + 8})"><path d="M-14 0 l9 10 l20 -24" fill="none" stroke="#5E8F5A" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></g>
<!-- me, every day I was, in faint pencil -->
${ghosts}
<!-- the books I stood on to win -->
${book(600, 40, 96, '#C98E8E', '200 experts')}${book(566, 34, 84, '#9DB7D6', 'Kotler, 15th ed.', -3)}${book(530, 36, 90, '#E8D27A', 'Ramadan ’13–’24', 2)}${book(500, 30, 76, '#B9D3A0', 'brand book', -2)}`, true)
    + A.sp([284, 160, 30, 30], 'a-peck', A.pigeonHead(300, 200, .7), null, '--d:3s')
    // me now: on tiptoe, on the books, one line above the art director
    + A.sp([420, 160, 116, 342], 'a-breathe', `${A.me(478, 218, 2.3)}<g stroke="${G}" stroke-width="3.4" stroke-linecap="round" filter="url(#ns-pencil)"><path d="M466 256 V496 M490 256 V496 M466 496 l-6 4 M490 496 l6 4"/></g><path d="M440 230 c-14 6 -20 18 -18 30 M516 230 c14 -12 26 -40 34 -52" stroke="${G}" stroke-width="3" fill="none" stroke-linecap="round"/>`, [478, 500], '--d:4.5s;--a:1.02')
    // the pencil in my hand, still making the mark
    + A.sp([540, 130, 100, 80], 'a-scribble', `<g transform="rotate(-36 600 160)"><rect x="572" y="152" width="80" height="14" fill="#E8C35A"/><path d="M572 152 l-16 7 l16 7 Z" fill="#EBD5B4"/><path d="M556 159 l5 -2 v4 Z" fill="${G}"/><rect x="644" y="152" width="10" height="14" fill="#E6A3A3"/>${A.ink('<rect x="572" y="152" width="82" height="14"/><path d="M572 152 l-16 7 l16 7"/>', 1.8)}</g>`, [560, 176], '--d:.8s')
    + A.base(`${marks.map((y, i) => A.note(lbl[i], 584, y + 8, 160, { s: i === 4 ? 25 : 22, c: i === 4 || i === 2 ? E : 'g', keep: 1 })).join('')}`);
  };
})();
