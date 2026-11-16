/**
 * Attribution persistence.
 * - Captures utm_* / gclid / fbclid from the landing URL into sessionStorage
 *   (new values overwrite; absent values keep the earlier capture).
 * - Appends them to outbound http(s) CTAs marked [data-attr-link].
 * - Fills hidden form inputs named after each param.
 * Never overwrites a param that the destination URL already carries.
 */
import { ATTRIBUTION_PARAMS } from '../config/automotiveOffer';

const KEY = 'cnvrtx_attribution';
type Attr = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number], string>>;

function read(): Attr {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || '{}') as Attr;
  } catch {
    return {};
  }
}

export function captureAttribution(): Attr {
  const params = new URLSearchParams(location.search);
  const stored = read();
  let changed = false;
  for (const p of ATTRIBUTION_PARAMS) {
    const v = params.get(p);
    if (v) {
      stored[p] = v.slice(0, 500);
      changed = true;
    }
  }
  if (changed) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(stored));
    } catch {
      /* private mode: fall back to in-memory for this page view */
    }
  }
  return stored;
}

export function withAttribution(href: string, attr: Attr = read()): string {
  if (!/^https?:\/\//i.test(href)) return href;
  try {
    const url = new URL(href);
    for (const [k, v] of Object.entries(attr)) {
      if (v && !url.searchParams.has(k)) url.searchParams.set(k, v);
    }
    return url.toString();
  } catch {
    return href;
  }
}

export function applyAttribution(attr: Attr): void {
  document.querySelectorAll<HTMLAnchorElement>('a[data-attr-link]').forEach((a) => {
    const raw = a.getAttribute('href') || '';
    a.href = withAttribution(raw, attr);
  });
  document.querySelectorAll<HTMLInputElement>('input[data-attr-field]').forEach((input) => {
    const v = attr[input.name as keyof Attr];
    if (v) input.value = v;
  });
}
