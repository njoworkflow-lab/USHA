// The Plans counters share their values with the pre-rendered monthly block.
(() => {
  const section = document.getElementById('deliverables');
  if (!section) return;
  const buttons = [...section.querySelectorAll('#mtog button')];
  const numbers = [...section.querySelectorAll('.nums b')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let frame;
  function select(button) {
    cancelAnimationFrame(frame);
    const pro = button.dataset.p === '1';
    buttons.forEach(b => {
      b.classList.toggle('on', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    document.getElementById('mn-plan').textContent = pro ? 'Pro' : 'Core';
    const from = numbers.map(b => Number(b.textContent));
    const to = numbers.map(b => Number(pro ? b.dataset.b : b.dataset.a));
    const start = performance.now();
    function tick(now) {
      const progress = reduce.matches ? 1 : Math.min(1, (now - start) / 450);
      const eased = 1 - (1 - progress) ** 3;
      numbers.forEach((b, i) => { b.textContent = Math.round(from[i] + (to[i] - from[i]) * eased); });
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }
  buttons.forEach(button => button.addEventListener('click', () => select(button)));
})();
