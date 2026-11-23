/**
 * The site's page directory: every problem page, shop-type page and guide, with the
 * address and the short labels used in menus, cards and breadcrumbs.
 * Addresses here are final. Do not change one after launch.
 */

import { allGuides } from './guides';

export type Problem = {
  /** Address on cnvrtx.com: /auto/<slug> */
  slug: string;
  /** The same page's key in src/content/automotiveDoors.ts (its old address on get.cnvrtx.com). */
  door: string;
  /** Short name for menus and breadcrumbs. */
  label: string;
  /** One line for cards. */
  line: string;
  /** The system that does the work. */
  system: string;
};

/** In customer-journey order first, then the whole-plan pages. */
export const problems: Problem[] = [
  { slug: 'missed-calls', door: 'missed-calls', label: 'Missed calls', line: 'Every call you cannot pick up is caught, with a job card on your phone.', system: 'Missed-Call Rescue' },
  { slug: 'lead-response', door: 'slow-lead-reply', label: 'Lead response', line: 'Web and ad leads get a reply right away, and you are told who to call.', system: '60-Second Lead Response' },
  { slug: 'ai-receptionist', door: 'ai-receptionist', label: 'AI receptionist', line: 'Calls, chat and DMs answered after hours and while your hands are full.', system: '24/7 AI Front Desk' },
  { slug: 'quote-follow-up', door: 'quote-follow-up', label: 'Quote follow-up', line: 'Every quote is followed up until it is a yes or a no.', system: 'Follow-Up Until They Book' },
  { slug: 'no-shows', door: 'no-shows', label: 'No-shows', line: 'Every booking is confirmed and reminded, with one-reply rescheduling.', system: 'No-Show Shield' },
  { slug: 'reviews', door: 'reviews', label: 'Reviews', line: 'Every customer is asked for a review after the job.', system: '5-Star Review Machine' },
  { slug: 'repeat-customers', door: 'repeat-customers', label: 'Repeat customers', line: 'Past customers hear from you when it is time to come back.', system: 'Repeat & Referral Engine' },
  { slug: 'run-sheet', door: 'run-sheet', label: 'Run sheet', line: 'Tomorrow’s run sheet and today’s brief arrive on their own.', system: 'Owner Command Center' },
  { slug: 'ad-tracking', door: 'ad-results', label: 'Ad tracking', line: 'See which Facebook and Instagram ads became booked, paid jobs.', system: 'Ad Results Tracker' },
  { slug: 'front-office', door: 'front-office', label: 'Front office without a hire', line: 'The cost of hiring, outsourcing or installing a front desk.', system: 'CNVRT X Front Office' },
  { slug: 'ai-employee', door: 'ai-employee', label: 'AI employee', line: 'What an AI employee can take off your plate, and what it cannot.', system: 'CNVRT X Front Office' },
  { slug: 'website-chatbot', door: 'talking-website', label: 'Website chatbot', line: 'A shop website that answers questions and books the inspection.', system: 'Talking website' },
];

/** The order a customer moves through a shop. Used for "previous" and "next" on problem pages. */
export const journey = ['missed-calls', 'lead-response', 'ai-receptionist', 'quote-follow-up', 'no-shows', 'reviews', 'repeat-customers'];

export type ShopType = { slug: string; label: string; line: string };
export const shopTypes: ShopType[] = [
  { slug: 'detailing-shops', label: 'Detailing shops', line: 'Fixed-location detail shops with a steady stream of small and mid-size jobs.' },
  { slug: 'mobile-detailing', label: 'Mobile detailing', line: 'Detailers who work at the customer’s location, with no front desk at all.' },
  { slug: 'ceramic-coating-shops', label: 'Ceramic coating shops', line: 'High-ticket coating quotes that need an inspection and a patient follow-up.' },
  { slug: 'ppf-shops', label: 'PPF shops', line: 'Paint protection film: long decisions, deposits and multi-day installs.' },
  { slug: 'window-tint-shops', label: 'Window tint shops', line: 'Fast, price-led inquiries that book this week or not at all.' },
  { slug: 'vinyl-wrap-shops', label: 'Vinyl wrap shops', line: 'Design-led quotes with several rounds before a yes.' },
  { slug: 'wheel-and-tire-shops', label: 'Wheel and tire shops', line: 'Fitment questions, parts on order and install appointments.' },
  { slug: 'performance-shops', label: 'Performance shops', line: 'Suspension, tuning, aftermarket parts and custom installs.' },
];

export type GuideMeta = {
  slug: string;
  title: string;
  /** Short name for cards and breadcrumbs. */
  label: string;
  description: string;
  /** Journey stage it is filed under on the guides index. */
  stage: 'Quote follow-up' | 'Lead response' | 'Bookings and no-shows' | 'Reviews and repeat work';
  /** The one problem page this guide points up to. */
  problem: string;
  /** The shop-type page it belongs with, if any. */
  shop?: string;
  published: string;
  updated: string;
  /** Minutes to read, rounded. */
  read: number;
};

/** Only finished guides are listed here. A guide that is not ready is simply not in this list. */
export const guides: GuideMeta[] = allGuides;

export const problemBySlug = (slug: string) => problems.find((p) => p.slug === slug)!;
export const shopBySlug = (slug: string) => shopTypes.find((s) => s.slug === slug)!;
export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug)!;
export const guidesFor = (problem: string) => guides.filter((g) => g.problem === problem);
