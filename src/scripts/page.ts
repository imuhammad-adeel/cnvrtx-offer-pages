import { captureAttribution, applyAttribution } from './attribution';
import { initDeclarativeTracking } from './analytics';

document.documentElement.classList.add('js');

const attr = captureAttribution();
applyAttribution(attr);
initDeclarativeTracking();

// Reveal-on-scroll
const reveal = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  reveal.forEach((el) => io.observe(el));
} else {
  reveal.forEach((el) => el.classList.add('is-in'));
}
