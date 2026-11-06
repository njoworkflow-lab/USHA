// The product pages' shared helpers (BRAINS and PREMIERE): the dialog with a
// focus trap and inert background, a toast, form checks (phone, Telegram,
// email, the card-number guard) and safe storage. Nothing here talks to a
// server: reservations stay in the page until the team's endpoint exists.
const PD = (() => {
  const D = document, H = D.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const pl = (forms, n, lang = H.lang) => {
    if (typeof forms === 'string') return forms.replace('{n}', n);
    const cat = new Intl.PluralRules(lang).select(n);
    return (forms[cat] ?? forms.other).replace('{n}', n);
  };
  const fill = (s, o) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in o ? o[k] : m));

  // ---------- dialogs ----------
  const stack = [];
  const BG = () => $$('body > header, body > main, body > footer, body > .pg-sky, body > .pd-skip');
  function modal({ html, label, cls = '', side = false, onClose }) {
    const opener = D.activeElement, keepY = scrollY;
    const m = D.createElement('div');
    m.className = `pd-modal${side ? ' pd-side' : ''}${cls ? ' ' + cls : ''}`;
    m.innerHTML = `<div class="pd-scrim"></div><div class="pd-panel" role="dialog" aria-modal="true"${label ? ` aria-labelledby="${label}"` : ''}>${html}</div>`;
    D.body.append(m);
    if (!stack.length) { H.classList.add('pd-lock'); BG().forEach((el) => { el.inert = true; }); }
    else stack[stack.length - 1].el.inert = true;
    const api = {
      el: m, panel: $('.pd-panel', m), open: true,
      set(htmlNext) { api.panel.innerHTML = htmlNext; },
      close(now) {
        if (!api.open) return; api.open = false;
        const i = stack.indexOf(api); if (i >= 0) stack.splice(i, 1);
        m.inert = true;
        if (!stack.length) { H.classList.remove('pd-lock'); BG().forEach((el) => { el.inert = false; }); }
        else stack[stack.length - 1].el.inert = false;
        if (now || reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
        if (Math.abs(scrollY - keepY) > 2 && !stack.length) scrollTo({ top: keepY, behavior: 'instant' });
        if (onClose) onClose();
        if (opener && opener.focus && D.contains(opener) && !opener.closest('[inert]')) opener.focus({ preventScroll: true });
      },
    };
    $('.pd-scrim', m).addEventListener('click', () => api.close());
    stack.push(api);
    requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add('on')));
    return api;
  }
  const top = () => stack[stack.length - 1];
  const focusables = (root) => $$('a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])', root).filter((el) => el.offsetParent !== null || el === D.activeElement);
  D.addEventListener('keydown', (e) => {
    const t = top(); if (!t) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); t.close(); return; }
    if (e.key !== 'Tab') return;
    const f = focusables(t.panel); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!t.panel.contains(D.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
    else if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus(); }
  }, true);
  const focusFirst = (root) => { const f = focusables(root)[0]; if (f) f.focus({ preventScroll: true }); };

  // ---------- toast ----------
  let tt = 0;
  function toast(msg) {
    let t = $('.pd-toast');
    if (!t) { t = D.createElement('div'); t.className = 'pd-toast'; t.setAttribute('role', 'status'); D.body.append(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(tt); tt = setTimeout(() => { t.hidden = true; }, 2600);
  }

  // ---------- checks ----------
  const digits = (s) => String(s).replace(/[\s().-]/g, '');
  const valid = {
    phone: (s) => /^\+[1-9]\d{7,14}$/.test(digits(s)),
    tg: (s) => /^@[A-Za-z0-9_]{5,32}$/.test(String(s).trim()) || /^\+[1-9]\d{7,14}$/.test(digits(s)),
    email: (s) => !s || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s).trim()),
    // a 13–19 digit run that passes the Luhn check looks like a card number
    card(s) {
      const runs = String(s).match(/(?:\d[ -]?){13,19}/g) || [];
      return runs.some((r) => {
        const d = r.replace(/\D/g, ''); if (d.length < 13 || d.length > 19) return false;
        let sum = 0;
        for (let i = 0; i < d.length; i++) { let n = +d[d.length - 1 - i]; if (i % 2) { n *= 2; if (n > 9) n -= 9; } sum += n; }
        return sum % 10 === 0;
      });
    },
  };

  // ---------- storage that may be missing (private mode, blocked data) ----------
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch { /* nothing to do */ } },
  };
  // a reference the team can read out on the phone: no 0/O, no 1/I
  const ref = (prefix, n = 4) => { const A = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; let s = ''; const r = new Uint32Array(n); crypto.getRandomValues(r); r.forEach((x) => { s += A[x % A.length]; }); return `${prefix}-${s}`; };
  const today = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };

  return { D, H, $, $$, esc, pl, fill, reduce, modal, top, focusFirst, toast, valid, store, ref, today };
})();
