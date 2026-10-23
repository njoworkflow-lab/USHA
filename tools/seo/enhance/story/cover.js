// USHA's story: the cover on the page (point 9). A dark card in the site's own
// style, right after the engineers block, with a torn piece of her sketchbook
// and one eye peeking through it. A click loads the story (story bundle, built
// from this folder) and opens it in a popup. Config: window.USHA_STORY.
(() => {
  const D = document, H = D.documentElement;
  const CFG = window.USHA_STORY || {};
  if (!CFG.src || !CFG.cover) return;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const F = CFG.fonts || {};

  const CSS = `
@font-face{font-family:'USHA Hand';font-weight:400 700;font-display:swap;src:url(${F.cav}) format('woff2');unicode-range:U+0000-00FF,U+2000-206F,U+2190-21FF}
@font-face{font-family:'USHA Hand';font-weight:400 700;font-display:swap;src:url(${F.cavc}) format('woff2');unicode-range:U+0400-045F}
@font-face{font-family:'USHA Arabic Hand';font-weight:300 700;font-display:swap;src:url(${F.ar}) format('woff2');unicode-range:U+0600-06FF,U+FB50-FDFF,U+FE70-FEFF}
.x-story{margin:96px 0 0;padding-top:56px;border-top:1px solid var(--line)}
.xs-card{all:unset;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);align-items:center;gap:48px;width:100%;padding:44px 48px;border-radius:28px;border:1px solid var(--line);background:radial-gradient(600px 300px at 85% 40%,rgba(255,90,31,.10),transparent 70%),linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01));cursor:pointer;position:relative;overflow:hidden;transition:border-color .3s,transform .4s cubic-bezier(.2,.8,.2,1)}
.xs-card:hover{border-color:rgba(255,180,138,.45);transform:translateY(-3px)}
.xs-card:focus-visible{outline:2px solid var(--ember);outline-offset:4px}
.xs-t .kick{color:var(--ink3)}
.xs-t h3{margin:16px 0 14px;font-family:var(--head);font-weight:800;font-size:clamp(30px,3.2vw,52px);line-height:1.02;letter-spacing:-.045em;color:var(--ink)}
.xs-t h3 i{font-style:normal;background:linear-gradient(100deg,#FFD2B8 0%,#FF8A4C 45%,#FF5A1F 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.05em}
html[lang=ar] .xs-t h3{line-height:1.3;letter-spacing:0}
.xs-t p{margin:0 0 26px;max-width:460px;color:var(--ink3);font-size:16px;line-height:1.6}
.xs-b{display:inline-flex;align-items:center;gap:12px;padding:14px 22px;border-radius:999px;background:var(--ember);color:#fff;font:600 15px var(--body);box-shadow:0 10px 30px rgba(255,90,31,.3);transition:gap .3s}
.xs-card:hover .xs-b{gap:18px}
.xs-b svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
html[dir=rtl] .xs-b svg{transform:scaleX(-1)}
.xs-art{position:relative;justify-self:center;width:min(100%,440px)}
.xs-art svg{display:block;width:100%;height:auto;overflow:visible}
.xs-paper{transform-origin:50% 60%;transform:rotate(-4deg);transition:transform .6s cubic-bezier(.2,.8,.2,1)}
.xs-card:hover .xs-paper{transform:rotate(-1deg) translateY(-6px)}
.xs-eye{transform-box:fill-box;transform-origin:center;animation:xs-blink 4.2s infinite}
@keyframes xs-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
.xs-look{transition:transform .3s ease-out}
.xs-pg{animation:xs-peck 2.6s steps(1) infinite}
@keyframes xs-peck{0%{transform:translate(0,0)}30%{transform:translate(3px,2px)}60%{transform:translate(0,0)}80%{transform:translate(-2px,0)}}
.xs-note{font-family:'USHA Hand',cursive;font-weight:700}
html[lang=ar] .xs-note{font-family:'USHA Arabic Hand','USHA Hand',serif}
.xs-card.wait .xs-b{opacity:.7}
@media (max-width:900px){.xs-card{grid-template-columns:1fr;gap:28px;padding:30px 24px}.xs-art{order:-1;width:min(100%,360px)}}
@media (prefers-reduced-motion:reduce){.xs-eye,.xs-pg{animation:none}.xs-card,.xs-paper{transition:none}}
`;
  // the torn page: the cup from chapter one, the pigeon, and a hole she looks through
  const art = (c) => `<svg viewBox="0 0 440 372" aria-hidden="true">
<defs><filter id="xs-pen" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter>
<filter id="xs-sh"><feGaussianBlur stdDeviation="14"/></filter>
<clipPath id="xs-hole"><path d="M262 120 C276 96 330 92 344 118 C358 144 334 176 300 176 C270 176 250 146 262 120 Z"/></clipPath></defs>
<g class="xs-paper">
  <path d="M40 40 L392 22 L404 290 L52 300 Z" fill="#000" opacity=".55" filter="url(#xs-sh)" transform="translate(10 16)"/>
  <path d="M34 34 L120 30 L128 22 L170 28 L250 20 L300 26 L396 16 L392 70 L402 120 L396 190 L404 296 L300 300 L240 292 L180 302 L50 298 L44 230 L36 160 L42 100 Z" fill="#EFE6D6"/>
  <path d="M262 120 C276 96 330 92 344 118 C358 144 334 176 300 176 C270 176 250 146 262 120 Z" fill="#0b0a0d"/>
  <g clip-path="url(#xs-hole)"><ellipse cx="300" cy="140" rx="40" ry="34" fill="#FFB48A"/><g class="xs-look"><ellipse class="xs-eye" cx="304" cy="138" rx="9" ry="13" fill="#1B1410"/><circle cx="307" cy="133" r="3" fill="#fff" opacity=".8"/></g></g>
  <g fill="none" stroke="#2A2420" stroke-linecap="round" filter="url(#xs-pen)">
    <path d="M262 120 C276 96 330 92 344 118 C358 144 334 176 300 176 C270 176 250 146 262 120 Z" stroke-width="2.4"/>
    <circle cx="140" cy="168" r="84" stroke-width="3"/><circle cx="140" cy="168" r="62" stroke-width="2"/>
    <path d="M110 150 q12 -8 24 0 M150 148 q12 -8 24 0 M126 196 q16 8 30 0" stroke-width="2.4"/>
    <path d="M34 34 L120 30 L128 22 L170 28 L250 20 L300 26 L396 16 L392 70 L402 120 L396 190 L404 296 L300 300 L240 292 L180 302 L50 298 L44 230 L36 160 L42 100 Z" stroke-width="2" opacity=".5"/>
  </g>
  <g transform="translate(330 262)"><path d="M-22 -4 C-26 -20 -12 -30 4 -26 C18 -22 26 -10 22 0 Z" fill="#9AA2AE"/><path d="M-22 -4 C-26 -20 -12 -30 4 -26 C18 -22 26 -10 22 0 L-22 0" fill="none" stroke="#2A2420" stroke-width="2"/><g class="xs-pg"><circle cx="18" cy="-30" r="8" fill="#A9B1BC" stroke="#2A2420" stroke-width="2"/><circle cx="21" cy="-32" r="2" fill="#2A2420"/><path d="M25 -29 l7 2 l-7 2" fill="#E0A73A"/></g></g>
  <text x="70" y="64" font-family="ui-monospace,monospace" font-size="11" letter-spacing="2" fill="#8C6E58">03:07</text>
</g>
<g class="xs-note" fill="#FF5A1F" font-size="22"><text x="220" y="352" text-anchor="middle"${H.dir === 'rtl' ? ' direction="rtl"' : ''}>${esc(c.note)}</text></g>
<path d="M330 330 C372 318 384 250 352 196" fill="none" stroke="#FF5A1F" stroke-width="2.4" stroke-linecap="round"/><path d="M344 206 l7 -11 l8 11" fill="none" stroke="#FF5A1F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  let loading = null;
  function load() {
    if (window.UshaStory) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise((ok, no) => { const s = D.createElement('script'); s.src = CFG.src; s.onload = ok; s.onerror = () => { loading = null; no(); }; D.head.appendChild(s); });
    return loading;
  }
  const lang = () => (CFG.cover[H.lang] ? H.lang : Object.keys(CFG.cover)[0]);

  function mount() {
    const eng = D.querySelector('#control .eng');
    if (!eng) return;
    let el = D.querySelector('.x-story');
    const L = lang(), c = CFG.cover[L];
    if (el && el.dataset.lang === L && el.previousElementSibling === eng) return;
    if (!D.getElementById('xs-css')) { const s = D.createElement('style'); s.id = 'xs-css'; s.textContent = CSS; D.head.appendChild(s); }
    if (!el) { el = D.createElement('section'); el.className = 'x-story'; el.setAttribute('translate', 'no'); }
    if (el.previousElementSibling !== eng) eng.after(el);
    el.dataset.lang = L;
    el.innerHTML = `<button type="button" class="xs-card" aria-label="${esc(c.b)}: ${esc(c.h.replace(/<[^>]+>/g, ''))}"><div class="xs-t"><span class="kick">${esc(c.k)}</span><h3>${c.h}</h3><p>${esc(c.p)}</p><span class="xs-b">${esc(c.b)}<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div><div class="xs-art">${art(c)}</div></button>`;
    const b = el.querySelector('.xs-card');
    b.addEventListener('pointerenter', () => load().catch(() => {}), { once: true });
    b.addEventListener('focus', () => load().catch(() => {}), { once: true });
    b.addEventListener('click', () => {
      b.classList.add('wait');
      load().then(() => { b.classList.remove('wait'); window.UshaStory.open(L); }).catch(() => b.classList.remove('wait'));
    });
    // her eye follows the pointer over the card
    if (!reduce) b.addEventListener('pointermove', (e) => {
      const g = b.querySelector('.xs-look'), r = b.querySelector('.xs-art svg').getBoundingClientRect();
      const fx = r.left + r.width * 300 / 440, fy = r.top + r.height * 140 / 372, dx = e.clientX - fx, dy = e.clientY - fy, d = Math.hypot(dx, dy) || 1;
      g.style.transform = `translate(${(dx / d * 9).toFixed(1)}px,${(dy / d * 6).toFixed(1)}px)`;
    });
  }
  // the page is rendered by the main bundle and can re-render: check now, on language change, and once in a while
  const later = () => setTimeout(mount, 60);
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', later); else later();
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  setInterval(mount, 2000);
})();
