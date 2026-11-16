/**
 * CNVRT X Auto Growth OS — single source of truth for every external value
 * the automotive sales page depends on.
 *
 * RULES
 * - Components never hard-code URLs, prices or offer flags. Read them here.
 * - An empty string means "not configured yet". Components fall back to an
 *   on-page anchor (usually #audit) instead of rendering a dead link.
 * - Never invent values here (slot counts, integration names, limits).
 */

export type AuditFormMode =
  /** Render our custom form UI and POST it to `auditFormUrl` (e.g. a GHL form endpoint or webhook). */
  | 'post'
  /** Replace the custom form with an iframe embed of `auditFormUrl` (e.g. an approved GHL form embed URL). */
  | 'embed'
  /** Destination unknown: UI renders, submission is blocked with a clear notice. */
  | 'unconfigured';

export const automotiveOffer = {
  // ---------------------------------------------------------------------------
  // Destinations — REQUIRED before launch
  // ---------------------------------------------------------------------------
  /** Booking Gap Audit destination. Leave '' until the approved GHL form/webhook exists. */
  auditFormUrl: '',
  auditFormMode: 'unconfigured' as AuditFormMode,
  /** Native GHL / AI Studio checkout URLs. '' => pricing buttons route to the audit form with plan intent. */
  monthlyCheckoutUrl: '',
  annualCheckoutUrl: '',
  /** Founding offer is qualification-based; '' => routes to the audit form with plan=founding. */
  foundingCheckoutUrl: '',
  /** General contact / "Tell us what you're using" destination. '' => routes to the audit form notes field. */
  contactUrl: '',
  /** Optional legal pages. Links only render when set. */
  privacyUrl: '/legal/privacy',
  termsUrl: '/legal/terms',
  smsTermsUrl: '/legal/sms-terms',

  // ---------------------------------------------------------------------------
  // Offer
  // ---------------------------------------------------------------------------
  pricing: {
    monthly: { price: 197, setup: 497 },
    annual: { price: 1970, setupIncluded: true, monthsIncluded: 2 },
  },
  foundingOfferActive: true,
  foundingSlotsTotal: 10,
  /** null = unknown. Never guess. When null the page says "First 10 qualifying shops". */
  foundingSlotsRemaining: null as number | null,
  launchPromiseDays: 14,

  // ---------------------------------------------------------------------------
  // Proof — keep disabled until verified, permissioned proof exists
  // ---------------------------------------------------------------------------
  caseStudiesEnabled: false,

  // ---------------------------------------------------------------------------
  // Brand + imagery slots (licensed assets only). null => designed fallback.
  // ---------------------------------------------------------------------------
  brand: {
    /** Path under /public to an approved CNVRT X logo (SVG preferred). null => typographic wordmark. */
    logoSrc: null as string | null,
    legalName: 'CNVRT X LLC',
  },
  imagery: {
    /** Licensed dark-studio vehicle photo for the big-idea band. Provide AVIF + WebP + JPG. */
    bigIdeaStudio: null as null | { avif?: string; webp?: string; jpg: string; alt: string; width: number; height: number },
  },

  // ---------------------------------------------------------------------------
  // SEO / routing
  // ---------------------------------------------------------------------------
  /** The indexable automotive SEO hub. This sales page is noindex,follow so it never competes with it. */
  seoHubUrl: 'https://cnvrtx.com/automotive/',
  salesPageUrl: 'https://get.cnvrtx.com/automotive',
  noindex: true,

  // ---------------------------------------------------------------------------
  // Analytics — nothing is installed by default (no existing tracking found).
  // Set ONE of these only if it is not already injected by the hosting platform.
  // ---------------------------------------------------------------------------
  analytics: {
    gtmContainerId: '', // e.g. 'GTM-XXXXXXX'
  },
} as const;

/** Attribution parameters preserved through the page and appended to outbound CTAs. */
export const ATTRIBUTION_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
] as const;

export type PlanIntent = 'monthly' | 'annual' | 'founding';

/** Resolve a CTA destination: configured URL, or an on-page fallback anchor. */
export function resolveHref(url: string, fallback = '#audit'): { href: string; external: boolean } {
  return url ? { href: url, external: /^https?:\/\//.test(url) } : { href: fallback, external: false };
}

/** Values still missing — surfaced as a build-time warning so nothing ships silently unconfigured. */
export function missingConfig(): string[] {
  const o = automotiveOffer;
  const missing: string[] = [];
  if (!o.auditFormUrl) missing.push('auditFormUrl');
  if (!o.monthlyCheckoutUrl) missing.push('monthlyCheckoutUrl');
  if (!o.annualCheckoutUrl) missing.push('annualCheckoutUrl');
  if (!o.contactUrl) missing.push('contactUrl');
  if (!o.privacyUrl) missing.push('privacyUrl');
  if (!o.termsUrl) missing.push('termsUrl');
  return missing;
}
