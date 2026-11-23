import Lenis from "lenis";

let lenis = null;

export function initLenis() {
  if (lenis) return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function getLenis() {
  return lenis;
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function stopScroll() {
  lenis && lenis.stop();
}

export function startScroll() {
  lenis && lenis.start();
}
