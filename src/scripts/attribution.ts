/**
 * Attribution persistence.
 * - Captures utm_* / gclid / fbclid from the landing URL into sessionStorage
 *   (new values overwrite; absent values keep the earlier capture).
 * - Appends them to outbound http(s) CTAs marked [data-attr-link].
 * - Fills hidden form inputs named after each param.
 * Never overwrites a param that the destination URL already carries.
 *
 * `rep` (the sales rep's code, for example ?rep=steve) is also kept for 30 days in
 * localStorage, so the rep is still credited when the prospect comes back another day
 * to buy. A newer rep link replaces an older one.
 */
import { ATTRIBUTION_PARAMS } from '../config/automotiveOffer';

const KEY = 'cnvrtx_attribution';
type Attr = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number], string>>;

const REP_KEY = 'cnvrtx_rep';
const REP_DAYS = 30;
/** A rep code is letters, digits, dashes and underscores only, so nothing else can ride in on it. */
const cleanRep = (v: string) => v.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);

function savedRep(): string {
  try {
    const { code, at } = JSON.parse(localStorage.getItem(REP_KEY) || '{}') as { code?: string; at?: number };
    if (code && at && Date.now() - at < REP_DAYS * 864e5) return cleanRep(code);
  } catch {
    /* no storage: the code still travels within this visit */
  }
  return '';
}

function read(): Attr {
  let stored: Attr = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(KEY) || '{}') as Attr;
  } catch {
    stored = {};
  }
  // a rep link from an earlier visit still counts
  if (!stored.rep) {
    const rep = savedRep();
    if (rep) stored.rep = rep;
  }
  return stored;
}

export function captureAttribution(): Attr {
  const params = new URLSearchParams(location.search);
  const stored = read();
  let changed = false;
  // where this visit started: the first page opened and the site it came from. Set once per
  // visit by the site itself, never taken from the address.
  if (!stored.landing) {
    stored.landing = location.pathname.slice(0, 200);
    changed = true;
  }
  if (!stored.referrer && document.referrer) {
    try {
      const host = new URL(document.referrer).hostname;
      if (host && host !== location.hostname) {
        stored.referrer = host.slice(0, 100);
        changed = true;
      }
    } catch {
      /* not a usable address */
    }
  }
  for (const p of ATTRIBUTION_PARAMS) {
    if (p === 'landing' || p === 'referrer') continue;
    const v = params.get(p);
    if (v) {
      if (p === 'rep') {
        const rep = cleanRep(v);
        if (!rep) continue;
        stored.rep = rep;
        try {
          localStorage.setItem(REP_KEY, JSON.stringify({ code: rep, at: Date.now() }));
        } catch {
          /* no storage: the code still travels within this visit */
        }
      } else stored[p] = v.slice(0, 500);
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
