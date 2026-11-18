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
  /** true once the order form links above are set and tested. */
  checkoutLive: false,
  /**
   * How the checkout page hands over to the GHL order page.
   *   false : a "Continue to secure payment" button opens the order page (works with any order page)
   *   true  : the order page is shown inside the checkout page, in a frame. Use only after
   *           checking that the order page allows being framed on this domain.
   */
  checkoutEmbed: false,
  /**
   * The checkout page for this industry. Every "Start Annual" / "Start Monthly" button and the
   * reserve form lead here. One per industry: /auto now, /roofing later.
   */
  // PUBLIC_CHECKOUT_ORIGIN is set only by the cnvrtx.com build (astro.site.config.mjs), so its
  // buttons reach checkout on get.cnvrtx.com. Unset here: the path stays relative, as before.
  checkoutPath: `${import.meta.env.PUBLIC_CHECKOUT_ORIGIN ?? ''}/auto`,
  /**
   * The offer shown when a visitor is about to leave: the monthly plan with a lower Launch Kit.
   * `launchKit` is the reduced one-time fee; the regular one is plans[].launchKit.
   * `checkout` is its own order form link ('' = not connected), because the amount charged differs.
   * Set enabled: false to go back to the plain exit popup.
   */
  exitOffer: { enabled: true, launchKit: 297, checkout: '' },

  /** Founding program: first 10 qualifying shops. */
  foundingSpotsTotal: 10,
  /** Real number only. null hides the counter. */
  foundingSpotsLeft: null as number | null,

  /** Full website: a one-time add-on, free on one plan + interval only. Every plan still gets the booking page. */
  website: { addOn: 997, freeOn: { plan: 'frontOffice' as PlanId, interval: 'annual' as Interval } },

  /** Real, measured figures only. null = not measured yet, and the page then shows no specific number.
   *  leadReplySeconds: seconds from a new lead to the first reply, measured on a live system. */
  measured: { leadReplySeconds: null as number | null },

  /**
   * What one month includes. Shown in the FAQ, the fine print and the Terms.
   * Change a number here and every place updates.
   */
  allowance: {
    emails: 5000,
    smsSegments: 1000,
    voiceMinutes: 100,
    aiReplies: 250,
    numbers: 1,
  },
  /** Hours in which automated texts are sent. Outside them, a text waits for the morning; email goes at any hour. */
  textingHours: '8 AM to 8 PM',

  /**
   * Lead forms for visitors who are not ready to buy. The URLs are set in one place,
   * `endpoints` in src/config/automotiveOffer.ts, and read here. '' = not connected: the form is then left off the
   * live site, and shown only on localhost so it can be reviewed.
   *   audit   : the Free Booking Leak Audit popup. "Email me my numbers" under the calculator
   *             opens the same popup, so there is one form for both.
   *   waitlist: the waitlist for trades other than auto shops
   */
  forms: { audit: base.endpoints.audit, waitlist: base.endpoints.waitlist },

  /** Real contact details, shown in the footer and the "Who's behind CNVRT X" section. '' = left out. */
  contact: { email: '', phone: '', address: '' },

  /**
   * "Who's behind CNVRT X". Real details only; '' = that part is left out, and with nothing
   * filled in the whole section is left off the live site (localhost shows the empty layout).
   *   founderPhoto : a path under /public, for example '/founder.jpg'
   *   videoUrl     : an embeddable link to the 60 to 90 second walkthrough of the real screens
   *   story        : shown only when `approved` is true, which means the shop's owner has agreed to it
   */
  about: {
    /** false = the section is not shown anywhere, whatever is filled in below. */
    enabled: false,
    founderName: '',
    founderRole: '',
    founderPhoto: '',
    bio: '',
    videoUrl: '',
    story: { approved: false, line: 'The same system runs at an auto shop in Rhode Island.', detail: '' },
  },

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

const num = (x: number) => x.toLocaleString('en-US');
/** The monthly allowance in words, from offerV9.allowance. */
export function allowanceText(): string {
  const a = offerV9.allowance;
  const line = a.numbers === 1 ? 'one local phone number' : `${a.numbers} local phone numbers`;
  return `${num(a.emails)} emails, ${num(a.smsSegments)} outbound US text message segments, ${num(a.voiceMinutes)} AI voice minutes, ${num(a.aiReplies)} AI chat replies and ${line}`;
}
/** Fills `{allowance}` and `{hours}` in a line of copy. */
export const fillOffer = (t: string) => t.replaceAll('{allowance}', allowanceText()).replaceAll('{hours}', offerV9.textingHours);
