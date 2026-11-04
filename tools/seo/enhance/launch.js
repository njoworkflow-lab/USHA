// The launch blocks (markup: launch.mjs, copy: launch-copy.mjs through data-t).
// Everything is pre-rendered; this only switches what is shown: the gate's
// Enter, the sector picker in 01, the approval card in 04, the orbits in 07,
// the day picker in 08, the consultation buttons and the break's end screen.
// The bundle re-renders the copy on a language switch; the state set here
// (hidden, aria) survives it.
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const talk = () => { if (window.USHA_LIVE && window.USHA_LIVE.api) dispatchEvent(new Event('usha:talk')); else { const t = D.getElementById('talk'); if (t) t.scrollIntoView({ behavior: 'smooth' }); } };

  // a row of tabs: click, and arrow keys along the row (mirrored on the Arabic page)
  function tabs(row, sel, pick) {
    row.addEventListener('click', (e) => { const b = e.target.closest(sel); if (b && row.contains(b)) pick(b); });
    row.addEventListener('keydown', (e) => {
      const b = e.target.closest(sel); if (!b) return;
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!step) return;
      e.preventDefault();
      const all = $$(sel, row), k = (all.indexOf(b) + (H.dir === 'rtl' && e.key.startsWith('Arrow') && !e.key.includes('Up') && !e.key.includes('Down') ? -step : step) + all.length) % all.length;
      all[k].focus(); pick(all[k]);
    });
  }

  function boot() {
    // ---------- gate: Enter wakes her without the hold ----------
    const enter = $('#lEnter');
    if (enter) enter.addEventListener('click', (e) => { e.stopPropagation(); if (window.__xEnter) window.__xEnter(); });

    // ---------- 01: pick a sector, the four forces speak its language ----------
    const pickRow = $('.l-pick');
    if (pickRow) tabs(pickRow, 'button[data-s]', (b) => {
      const s = b.dataset.s;
      $$('button[data-s]', pickRow).forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
      $$('#noise .alg').forEach((a) => $$('.l-m', a).forEach((m) => { m.hidden = s === '0' ? m.classList.contains('l-sx') : m.dataset.s !== s; }));
      $('#noise').classList.toggle('l-picked', s !== '0');
    });

    // ---------- 04: the approval moment ----------
    const ap = $('.l-appr');
    if (ap) ap.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const st = b.classList.contains('l-ap-yes') || b.classList.contains('l-ap-pby') ? 'ok' : b.classList.contains('l-ap-no') ? 'pb' : b.classList.contains('l-ap-back') ? 'ask' : null;
      if (st) { ap.dataset.st = st; ap.dataset.via = b.classList.contains('l-ap-pby') ? 'pb' : ''; }
    });

    // ---------- 07: one mind, seven orbits ----------
    const op = $('.l-op');
    if (op) {
      tabs($('.l-orb', op), '.l-o', (b) => {
        $$('.l-o', op).forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
        $$('.l-od', op).forEach((p) => { p.hidden = p.dataset.o !== b.dataset.o; });
      });
      $$('.l-o', op).forEach((x, i) => { x.tabIndex = i ? -1 : 0; });
      $('.l-opap', op).addEventListener('click', () => op.classList.add('go'));
    }

    // ---------- 08: a month, day by day ----------
    const mo = $('.l-mo');
    if (mo) {
      const cal = $('.l-cal', mo);
      tabs(cal, 'button[data-d]', (b) => {
        const d = b.dataset.d, has = !!$(`.l-dd[data-d="${d}"]`, mo);
        $$('button[data-d]', cal).forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
        $$('.l-dd', mo).forEach((p) => { p.hidden = has ? p.dataset.d !== d : p.dataset.d !== '0'; });
        if (!has) $('.l-rt .l-rn', mo).textContent = d;
      });
      $$('button[data-d]', cal).forEach((x, i) => { x.tabIndex = i ? -1 : 0; });
    }

    // ---------- consultation buttons (FAQ, the break) ----------
    D.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('.l-ask'); if (b) { e.preventDefault(); talk(); } });

    // ---------- the break: its end screen leads to a consultation ----------
    const end = $('.l-gend');
    if (end) {
      addEventListener('usha:game-on', () => { end.hidden = true; $('#game').classList.remove('l-ended'); });
      addEventListener('usha:game-off', () => {
        const w = window.__xgS; if (!w) return;
        const tpl = ($('.l-gtpl', end).textContent || '').replace('{l}', w.lv + 1).replace('{s}', w.caught || 0);
        $('.l-gt', end).textContent = tpl;
        end.hidden = false; $('#game').classList.add('l-ended');
      });
      $('.l-again', end).addEventListener('click', () => { end.hidden = true; $('#game').classList.remove('l-ended'); const g = $('#gstart'); if (g) g.click(); });
    }
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
