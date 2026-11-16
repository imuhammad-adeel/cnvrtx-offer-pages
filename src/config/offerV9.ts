/**
 * Version 9 offer: ONE plan that includes three roles the owner no longer has to hire
 * (The Receptionist, The Service Advisor, The Shop Manager). Paid monthly or annually.
 * Every price and link on the site comes from this file.
 *
 * RULES
 * - '' or null means "not set yet". The page hides that element. It never shows
 *   a dead link, a placeholder word or a made-up number.
 * - Never invent values here (spots left, links, limits).
 */
import { automotiveOffer as base } from './automotiveOffer';

export type PlanId = 'frontOffice';
export type Interval = 'monthly' | 'annual';

export const offerV9 = {
  plans: [{ id: 'frontOffice', role: 'CNVRT X Front Office', name: 'All three roles', monthly: 197, annual: 1970, launchKit: 497, popular: true }] as {
    id: PlanId;
    role: string;
    name: string;
    monthly: number;
    annual: number;
    launchKit: number;
    popular: boolean;
  }[],
  /** Annual is "pay 10, get 12" and the Launch Kit is waived. */
  annualMonthsPaid: 10,

  /** Checkout links per plan and interval. '' = not connected. */
  checkout: {
    frontOffice: { monthly: '', annual: '' },
  } as Record<PlanId, Record<Interval, string>>,
  /** false = plan buttons scroll to the reserve form with the plan preselected. */
  checkoutLive: false,

  /** Founding program: first 10 qualifying shops. */
  foundingSpotsTotal: 10,
  /** Real number only. null hides the counter. */
  foundingSpotsLeft: null as number | null,

  /** Full website: a one-time add-on, free on one plan + interval only. Every plan still gets the booking page. */
  website: { addOn: 997, freeOn: { plan: 'frontOffice' as PlanId, interval: 'annual' as Interval } },

  /** Real, measured figures only. null = not measured yet, and the page then shows no specific number.
   *  leadReplySeconds: seconds from a new lead to the first reply, measured on a live system. */
  measured: { leadReplySeconds: null as number | null },

  voiceDemo: { enabled: false, embed: '' },
  chatDemo: { enabled: false },
  aiLanguages: 'English and Spanish',

  /** Existing legal links. '' = shown as plain text, not as a link. */
  legal: {
    privacy: base.privacyUrl as string,
    terms: base.termsUrl as string,
    sms: base.smsTermsUrl as string,
    cancellation: '/legal/cancellation',
    disclaimer: '/legal/disclaimer',
  },
  /** Company details used on the legal pages. '' = that detail is left out.
   *  `reviewed`: set true once a lawyer has checked the pages; it removes the "Draft" notice. */
  legalInfo: {
    effectiveDate: '2026-11-16',
    supportEmail: '',
    address: '',
    governingState: '',
    reviewed: false,
  },

  /**
   * The main page's "What it fixes" menu.
   * `order`: door slugs, most important first. The menu fills left to right, row by row,
   * so the first three sit on the top row. Slugs not listed keep their place after these.
   * `countsUrl`: optional. An endpoint that returns {"slug": clicks, ...} as JSON and accepts
   * a POST of {slug} on each click. When set, the menu re-sorts itself by real clicks.
   * Leave '' until such an endpoint exists; clicks are still sent to analytics as outcome_menu_click.
   */
  outcomes: {
    order: ['missed-calls', 'quote-follow-up', 'no-shows', 'ai-receptionist', 'front-office', 'talking-website'] as string[],
    countsUrl: '',
  },
};

export const planById = (id: PlanId) => offerV9.plans.find((p) => p.id === id)!;
/** The plan the calculator and comparisons price against. */
export const featuredPlan = offerV9.plans.find((p) => p.popular)!;

/** Checkout link with ?plan= and ?interval=, or '' when checkout is not live or the link is missing. */
export function checkoutHref(id: PlanId, interval: Interval): string {
  const url = offerV9.checkoutLive ? offerV9.checkout[id][interval] : '';
  if (!url) return '';
  return `${url}${url.includes('?') ? '&' : '?'}plan=${id}&interval=${interval}`;
}
