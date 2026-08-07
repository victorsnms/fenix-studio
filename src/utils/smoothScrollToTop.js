/** How long the scroll-to-top takes, in ms. Tune this to taste. */
const SCROLL_DURATION_MS = 900;

/** Ease-out cubic: moves off quickly, then settles gently at the top. */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const noop = () => {};

/**
 * Animates the window back to the top.
 *
 * Hand-rolled rather than `behavior: "smooth"` because the native duration is
 * browser-controlled and can't be slowed down.
 *
 * Returns a cancel function — call it on unmount so a pending animation can't
 * outlive the component that started it.
 */
export const smoothScrollToTop = () => {
  const startY = window.scrollY;
  if (startY === 0) return noop;

  // Respect users who've asked the OS to reduce motion — animating the whole
  // page can be uncomfortable for motion sensitivity, so jump instantly.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, 0);
    return noop;
  }

  let frame;
  let cancelled = false;
  const startTime = performance.now();

  // If the visitor starts scrolling mid-animation, hand control back to them
  // instead of fighting their input.
  const cancel = () => {
    cancelled = true;
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
  };

  window.addEventListener("wheel", cancel, { passive: true, once: true });
  window.addEventListener("touchstart", cancel, { passive: true, once: true });

  const step = (now) => {
    if (cancelled) return;
    const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
    window.scrollTo(0, Math.round(startY * (1 - easeOutCubic(progress))));
    if (progress < 1) frame = requestAnimationFrame(step);
  };
  frame = requestAnimationFrame(step);

  return cancel;
};
