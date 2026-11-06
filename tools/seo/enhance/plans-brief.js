// The free week's brief on /plans/ (and /en/plans/, /ar/plans/): the same three
// steps as on the home page (what you sell, what hurts, how to reach you), the
// same checks and the same hand-off. The home page runs it inside its 3D
// bundle; here it runs on its own. Copy: window.USHA_BRIEF (tools/seo/build.mjs).
// Delivery stays Telegram or email: nothing is sent from the page, and opening
// a composer or copying the brief is never reported as sent.
(() => {
  const B = window.USHA_BRIEF, D = document;
  const form = D.getElementById('brief');
  if (!B || !form) return;
  const $ = (id) => D.getElementById(id);
  const st = { step: 0, sell: null, pain: null, plan: null };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const think = () => dispatchEvent(new Event('usha:think'));

  function chips() {
    $('bq1').innerHTML = B.a1.map((t, i) => `<button type="button" class="${st.sell === i ? 'on' : ''}" data-i="${i}" aria-pressed="${st.sell === i}">${esc(t)}</button>`).join('');
    $('bq2').innerHTML = B.a2.map((t, i) => `<button type="button" class="${st.pain === i ? 'on' : ''}" data-i="${i}" aria-pressed="${st.pain === i}">${esc(t)}</button>`).join('');
    $('bnextT').textContent = st.step === 2 ? B.send : B.next;
  }
  function go(i) {
    st.step = Math.max(0, Math.min(2, i));
    form.querySelectorAll('.step').forEach((s) => s.classList.toggle('on', +s.dataset.s === st.step));
    $('bstep').textContent = st.step + 1;
    $('bprog').style.width = `${(st.step + 1) / 3 * 100}%`;
    $('bback').style.visibility = st.step ? 'visible' : 'hidden';
    chips();
  }
  function error(id, key) {
    const field = $(id), msg = $(`${id}-error`);
    if (field) field.setAttribute('aria-invalid', key ? 'true' : 'false');
    if (msg) msg.textContent = key ? B[key] : '';
  }
  function shake(el) {
    if (!reduce && el.animate) el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
  }

  // a choice moves on to the next step, the way it does on the home page
  $('bq1').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-i]'); if (!b) return;
    st.sell = +b.dataset.i; error('bq1', ''); chips(); think(); setTimeout(() => go(1), 260);
  });
  $('bq2').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-i]'); if (!b) return;
    st.pain = +b.dataset.i; error('bq2', ''); chips(); think(); setTimeout(() => go(2), 260);
  });
  $('bct').addEventListener('input', () => error('bct', ''));
  $('bback').addEventListener('click', () => go(st.step - 1));
  // "Choose with your project manager" on a plan card: that plan goes into the brief
  D.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a[data-plan]'); if (a) st.plan = a.dataset.plan; });

  $('bnext').addEventListener('click', () => {
    if (st.step < 2) {
      const id = st.step === 0 ? 'bq1' : 'bq2', missing = st.step === 0 ? st.sell == null : st.pain == null;
      if (missing) { error(id, st.step === 0 ? 'errorSell' : 'errorPain'); shake(form); return; }
      error(id, ''); go(st.step + 1); think(); return;
    }
    const contact = $('bct').value.trim();
    if (!contact) { error('bct', 'errorContact'); shake($('bct').parentNode); $('bct').focus({ preventScroll: true }); return; }
    error('bct', '');
    const text = ['USHA brief · first free week', st.plan ? `Plan: ${st.plan}` : '',
      `Sells: ${B.en1[st.sell]}`, `Pain: ${B.en2[st.pain]}`,
      `Name: ${$('bname').value.trim() || '-'}`, `Company: ${$('bco').value.trim() || '-'}`,
      `Contact: ${contact}`, `Language: ${D.documentElement.lang.toUpperCase()}`].filter(Boolean).join('\n');
    $('btg').href = B.tg;
    $('bmail').href = `mailto:${B.mail}?subject=${encodeURIComponent('USHA · free week')}&body=${encodeURIComponent(text)}`;
    const done = $('bdone'), copy = $('bcopy');
    const status = (state, heading, body) => {
      done.dataset.briefState = state;
      done.querySelector('h3').textContent = B[heading];
      done.querySelector('p').textContent = B[body];
    };
    status('prepared', 'doneH', 'doneP');
    const copyBrief = async () => {
      copy.disabled = true;
      try {
        await navigator.clipboard.writeText(text);
        status('copied', 'copied', 'doneCopied'); copy.textContent = B.copied;
      } catch {
        status('prepared', 'doneH', 'copyError'); copy.textContent = B.copy;
      } finally { copy.disabled = false; }
    };
    copy.onclick = copyBrief;
    form.querySelectorAll('.step, #bnav, .safe').forEach((s) => { s.style.display = 'none'; });
    done.classList.add('on');
    copyBrief();
    dispatchEvent(new Event('usha:happy'));
  });
  go(0);
})();
