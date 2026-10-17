export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ease = (t) => 1 - Math.pow(1 - t, 3);
const fmt = (v, d) => (d ? v.toFixed(d) : String(Math.round(v)));

/** Count an element's text from 0 to its data-to value over `dur` ms, keeping prefix and suffix.
 *  Resolves when the final value has been written, so callers that go on to update the same
 *  element wait for it (requestAnimationFrame pauses in a hidden tab; timers do not). */
export function countUp(el, dur) {
  const to = parseFloat(el.dataset.to);
  const dec = Number(el.dataset.dec || 0);
  const pre = el.dataset.prefix || '';
  const suf = el.dataset.suffix || '';
  if (reduce) {
    el.textContent = pre + fmt(to, dec) + suf;
    return Promise.resolve();
  }
  return new Promise((done) => {
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = pre + fmt(to * ease(p), dec) + suf;
      if (p < 1) requestAnimationFrame(step);
      else done();
    };
    step(t0);
  });
}
