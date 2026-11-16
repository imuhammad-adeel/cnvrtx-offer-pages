/**
 * Analytics bridge. Does NOT install any vendor tag.
 * Pushes to whatever already exists on the page:
 *  - window.dataLayer (GTM)    -> { event, ...props }
 *  - window.gtag (GA4 direct)  -> gtag('event', name, props)
 * Also dispatches `cnvrtx:track` on window for debugging / other listeners.
 *
 * Declarative usage: any element with data-track="event_name" fires on click.
 * Extra props: data-track-* attributes (data-track-location="hero" -> location: "hero").
 */

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: Props = {}): void {
  const payload = { ...props, page: 'automotive_sales' };
  try {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...payload });
    if (typeof window.gtag === 'function') window.gtag('event', event, payload);
    window.dispatchEvent(new CustomEvent('cnvrtx:track', { detail: { event, ...payload } }));
  } catch {
    /* analytics must never break the page */
  }
  if (import.meta.env.DEV) console.debug('[track]', event, payload);
}

function propsFrom(el: HTMLElement): Props {
  const out: Props = {};
  for (const [k, v] of Object.entries(el.dataset)) {
    if (k.startsWith('track') && k !== 'track' && v !== undefined) {
      const key = k.slice(5).replace(/^[A-Z]/, (c) => c.toLowerCase());
      out[key] = v;
    }
  }
  return out;
}

export function initDeclarativeTracking(): void {
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
    if (!el) return;
    track(el.dataset.track!, propsFrom(el));
  });
}
