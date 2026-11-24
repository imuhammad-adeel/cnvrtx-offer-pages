/**
 * General wording for ANY local business: the home page at get.cnvrtx.com/.
 * Same offer, same prices and same design as the auto pages; only the words change.
 * Nothing here names a trade. No "shop", "car", "bay" or "detail".
 *
 * WRITING RULES (same as automotiveCopyV9.ts)
 * - No em dashes or en dashes. Short plain sentences.
 * - Outcomes first, features second.
 * - No invented statistics, ratings, logos, testimonials or customer results.
 *
 * Each object starts from the auto version and replaces only the lines that name a trade,
 * so the two stay the same shape. See copySets.ts for how a section picks its wording.
 */
import * as a from './automotiveCopyV9';
import { doorCommon as autoDoorCommon, gears as autoGears } from './automotiveDoors';
import { doorPageCommon as autoDoorPageCommon } from './automotiveDoorPages';

export const hero9 = {
  ...a.hero9,
  /** Shown one at a time: "Built for [roofing] businesses". Well-known local trades, auto first. */
  pillWords: ['auto', 'roofing', 'HVAC', 'plumbing', 'landscaping', 'electrical', 'cleaning'],
  eyebrow: 'Built for auto, roofing, HVAC, plumbing, landscaping, electrical and cleaning businesses',
  sub: 'Your work is great. Your follow-up has gaps. We install the front office you never had to hire: every call answered, every quote chased, every booking confirmed. You stay with your customers.',
  pillEnd: 'businesses',
  hud: {
    hint: 'Move your cursor to clear the page',
    hintTouch: 'Clearing…',
    label: 'Clarity',
    done: 'Crystal clear',
  },
};

export const math9 = {
  ...a.math9,
  title: 'What are missed inquiries costing you?',
  s1: 'My business misses about',
  s2: 'calls and messages a week. An average customer is worth',
  jobsLine: 'That is about {n} new customers a month, by your own numbers.',
};

export const plans9 = {
  ...a.plans9,
  roles: [
    {
      ...a.plans9.roles[0],
      systems: [
        { n: 'Missed-Call Rescue', d: 'Every missed call becomes a lead card. Callers who agreed to texts get a text back.' },
        { n: '60-Second Lead Response', d: 'An instant email at any hour. A text within a minute during texting hours.' },
        { n: '24/7 AI Front Desk', d: 'Answers calls, chat and DMs, day and night.' },
      ],
      detail: [
        'Every missed call becomes a lead card on your phone',
        'Missed-call text back, only to callers who agreed to texts, after carrier approval',
        'Callers who have not agreed to texts: you get a call-back task, and the AI phone backup can answer where it is set up',
        'AI phone backup: answers when you can’t, day or night',
        'Website, Facebook and Instagram leads get an instant email at any hour and a text within a minute during texting hours',
        '“Call now” alert to you when a new lead hasn’t replied after 5 minutes',
        'One inbox for calls, texts, chat and DMs, plus the mobile app',
        '24/7 AI front desk on your website chat, Facebook and Instagram, plus a website voice line',
        'Your own local number (US) and a booking page',
      ],
    },
    {
      ...a.plans9.roles[1],
      role: 'The Booking Coordinator',
      promise: 'Turn leads into bookings',
      detail: [
        'Follow-up until they book: polite text, email and call reminders that stop the moment they reply',
        'Quote and estimate follow-up for every service you sell',
        'No-Show Shield: confirmation, “Reply YES or MOVE” the day before, reminders and no-show rescue',
        '5-Star Review Machine: every customer asked, two gentle reminders, a video-testimonial link',
      ],
    },
    {
      ...a.plans9.roles[2],
      role: 'The Office Manager',
      name: 'Business on Autopilot',
      promise: 'Run the business from your phone',
      systems: [
        { n: 'Repeat & Referral Engine', d: 'Check-ins, referral asks and win-back campaigns.' },
        { n: 'Owner Command Center', d: '7:30 AM brief, lead cards and tomorrow’s schedule at 6 PM.' },
        { n: 'Ad Results Tracker', d: 'Shows which ads turned into booked, paying customers.' },
      ],
      detail: [
        'Owner Command Center: 7:30 AM brief, a card for every booking, tomorrow’s schedule at 6 PM, one-tap updates, Monday report',
        'AI quote helper: drafts quotes from your own price list for you to approve and send',
        'Repeat & Referral Engine: customer history, check-ins, referral ask, win-back campaigns',
        'Ad Results Tracker: Facebook and Instagram leads followed to booked and paid work, sent back to Meta so it finds more customers like them',
      ],
    },
  ],
};

export const offer9 = {
  ...a.offer9,
  title: ['One plan.', 'Three roles you never hire.'],
  sub: 'A receptionist, a booking coordinator and an office manager for your front office. Built, written and tested for you.',
  annual: {
    ...a.offer9.annual,
    year: [
      'Week 2: your front desk is live and answering',
      'Every week: missed calls caught, quotes chased, bookings reminded',
      'Every customer: a review request and an invite to come back',
      'All year: one price, nothing to manage',
    ],
    bonuses: a.offer9.annual.bonuses.map((b) => (b.t === 'Front of the build queue' ? { ...b, d: 'Annual customers are built first.' } : b)),
  },
  promises: [
    a.offer9.promises[0],
    { t: 'Love it or leave it', d: 'Month-to-month on monthly plans. Cancel anytime.' },
    { t: 'Your business stays yours', d: 'Your domain, content and customer list, exportable.' },
    { t: 'Keeps your current software', d: 'It sits alongside the tools that run your work.' },
  ],
  year: [
    { k: 'Week 2', v: 'Your front desk is live and answering.' },
    { k: 'Every week', v: 'Missed calls caught. Quotes chased. Bookings reminded.' },
    { k: 'Every customer', v: 'A review request, then an invite to come back.' },
    { k: 'All year', v: 'One price. Nothing to manage.' },
  ],
};

export const start9 = {
  ...a.start9,
  footer: 'Stop losing customers you already earned.',
};

export const faq9 = {
  ...a.faq9,
  items: [
    a.faq9.items[0],
    a.faq9.items[1],
    a.faq9.items[2],
    {
      q: 'Do I replace my current software?',
      a: 'Usually not. Keep the tools that run your work and invoices. This handles what happens before and after: the inquiry, the follow-up, the booking and the return visit.',
    },
    {
      q: 'Does AI talk to every customer?',
      a: 'No. Routine steps like confirmations and reminders are fixed automation. AI answers the questions you approve and collects details. It never quotes prices and it says it is an AI if asked. Pricing talks, complaints and big requests go to you.',
    },
    {
      q: 'Is the phone number really included?',
      a: 'Yes for US businesses. For other countries, ask us first so we can confirm availability. US texting also needs carrier registration (A2P). We prepare it with you and texting goes live once the carrier approves.',
    },
    a.faq9.items[6],
    a.faq9.items[7],
    a.faq9.items[8],
    a.faq9.items[9],
  ],
};

export const exit9 = { ...a.exit9 };

export const footer9 = {
  ...a.footer9,
  blurb: 'A done-for-you front desk for local service businesses.',
  disclaimers: [
    'Results disclaimer: CNVRT X does not guarantee bookings, revenue or any specific result. Figures in the calculator and the illustrations are examples based on the numbers you enter. Your results depend on your services, prices, market and how you run your business.',
    a.footer9.disclaimers[1],
    a.footer9.disclaimers[2],
  ],
};

export const doorCommon = {
  ...autoDoorCommon,
  lost: 'The customer goes somewhere else',
  kept: 'The customer stays with you',
  systemsLead: 'Three roles and nine systems. All of them are in one plan, for one price.',
};

export const doorPageCommon = {
  ...autoDoorPageCommon,
  voiceNote: 'Demo for an example business. No real booking is made.',
};

export const pipe9 = {
  ...a.pipe9,
  is: 'The front office your business never had to hire.',
};

export const leaks9 = {
  ...a.leaks9,
  kicker: 'The leaks in your business',
  items: [
    {
      pain: 'Missed calls',
      fix: 'Caught every time',
      line: 'You are with a customer. They call the next business. Now every missed call lands on your phone as a lead card, and callers who agreed to texts get a text back.',
      result: 'The lead stays yours',
    },
    a.leaks9.items[1],
    a.leaks9.items[2],
    {
      pain: 'No-shows',
      fix: 'Confirmed and reminded',
      line: 'The slot is blocked and nobody comes. Now reminders go out, and the customer can reply MOVE to reschedule.',
      result: 'Your time protected',
    },
    {
      pain: 'One-time customers',
      fix: 'Asked back, on time',
      line: 'Great work, no review, no return. Now a review request goes out, then an invite when it is time to come back.',
      result: 'They come back',
    },
  ],
};

export const stack9 = {
  ...a.stack9,
  kicker: 'The system \u00b7 9 systems, 4 layers',
  title: ['Four layers.', 'One front office.'],
  intro: 'Every leak above gets its own layer. Nine systems, built, written and tested for you. You do not learn software. You do not write messages.',
  cards: [
    { ...a.stack9.cards[0], code: 'Layer 01' },
    { ...a.stack9.cards[1], code: 'Layer 02', hl: 'Turn it into a booking on the calendar.', plan: 'The Booking Coordinator' },
    {
      ...a.stack9.cards[2],
      code: 'Layer 03',
      hl: 'Make every customer count twice.',
      solved: 'Great work, no review, no return. Now every customer is asked for a review and invited back.',
      plan: 'The Booking Coordinator + The Office Manager',
    },
    {
      ...a.stack9.cards[3],
      code: 'Layer 04',
      hl: 'Run the business from your phone.',
      solved: 'You piece your day together from texts. Now it arrives at 7:30 AM, with tomorrow\u2019s schedule at 6 PM.',
      plan: 'The Office Manager',
    },
  ],
};

export const work9 = {
  ...a.work9,
  rows: [
    { t: 'Answer every call and message', who: 'You' },
    { t: 'Follow up on every quote', who: 'Your team' },
    { t: 'Confirm tomorrow\u2019s bookings', who: 'Your team' },
    { t: 'Type tomorrow\u2019s schedule', who: 'Your team' },
    { t: 'Ask every customer for a review', who: 'You' },
    { t: 'Set it all up and keep it running', who: 'You' },
  ],
  totUs: 'The real work',
  yourPart: {
    label: 'Your part',
    big: 'About 15 minutes.',
    line: 'Log in, open Setup Center and answer the setup questions. Then go back to your customers.',
  },
};

export const hire9 = {
  ...a.hire9,
  lostSelf: 'Customers that slip away while your hands are full',
  lostStaff: 'Customers that still slip away, even with a team',
  barToday: 'Today: wages + your time + lost customers',
};

export const day9 = {
  ...a.day9,
  title: ['A day in your business,', 'before and after.'],
  lead: 'The front office your business never had to hire. You just do the work.',
  rows: [
    { time: '7:30 AM', before: 'You scroll texts and DMs to work out your day.', after: 'One email with today\u2019s bookings and who\u2019s waiting.' },
    { time: '10:15 AM', before: 'The phone rings while you\u2019re with a customer.', after: 'The call is caught. A lead card lands on your phone.' },
    { time: '4:00 PM', before: 'Yesterday\u2019s quote went quiet, and you forgot.', after: 'Polite follow-ups go out until they book or say no.' },
    { time: '6:00 PM', before: 'Tomorrow\u2019s customer hasn\u2019t confirmed.', after: 'They get \u201cReply YES or MOVE\u201d. Tomorrow\u2019s schedule is on your phone.' },
    { time: '11:00 PM', before: 'An Instagram DM waits until morning.', after: 'Your AI front desk answers and books the appointment.' },
  ],
  close: 'Same business. Same customers. A different evening.',
};

/** Fictional data only. */
export const sheet9 = {
  ...a.sheet9,
  kicker: 'The Office Manager',
  title: ['Your schedule,', 'written for you.'],
  body: 'Many businesses pay someone to type tomorrow\u2019s schedule into a group chat every night. Your system sends it on its own at 6 PM, then hands you your day at 7:30 AM.',
  label: 'Example schedule',
  sheetTitle: 'Tomorrow\u2019s schedule',
  jobs: [
    { time: '8 AM', type: 'Booked', kind: 'work', who: 'Example Customer A', what: 'New customer \u00b7 Full service' },
    { time: '9 AM', type: 'Return', kind: 'redo', who: 'Example Customer B', what: 'Follow-up visit' },
    { time: '12 PM', type: 'Pickup', kind: 'pickup', who: 'Example Customer C', what: 'Order ready' },
  ],
  cards: [
    { t: '7:30 AM brief', d: 'Your day, before you open.' },
    { t: 'A card for every booking', d: 'Customer, service and notes in one place.' },
    { t: '6 PM schedule', d: 'Tomorrow\u2019s schedule, sent on its own.' },
    { t: 'One-tap updates', d: 'Quote sent, Accepted, Done, No-show.' },
  ],
};

/** Every exchange is written for an example business. No real booking is made. */
export const voice9 = {
  ...a.voice9,
  body: 'It\u2019s 11 PM. A customer messages your business. This is who answers. Ask it what your customers ask. Demo for an example business. No real booking is made.',
  examples: [
    {
      q: 'How much is your full service?',
      a: 'I can\u2019t quote prices, but I can get you an exact quote from the team. Can you come in for a free consultation this week?',
    },
    {
      q: 'Can I come in Saturday morning?',
      a: 'Yes. I can hold 9:00 or 10:30 on Saturday morning. Which works better?',
    },
    {
      q: 'It\u2019s after hours, is anyone there?',
      a: 'I\u2019m the AI assistant for this business, here day and night. I can answer questions, take your details and book a visit.',
    },
    a.voice9.examples[3],
  ],
  demoTag: 'Demo for an example business',
  exampleNote: 'Example for an illustration business. Not a real conversation and no real booking.',
  afterCall: 'Want this answering for your business? It\u2019s part of your front office.',
};

export const hooks9 = {
  afterLeaks: ['The best business in town', 'still loses to the one', 'that answers first.'],
  beforeOffer: ['Great work deserves', 'a great follow-up.'],
};

export const gears = {
  ...autoGears,
  items: [autoGears.items[0], autoGears.items[1], { gear: 'Full Throttle', line: 'Flat out: the business runs from your phone.' }],
};

/**
 * "Your industry" menu in the home page's top bar. Add a line here when a new industry
 * page goes live; nothing is listed that does not exist.
 */
export const industries = {
  menuLabel: 'Your industry',
  menuTitle: 'Pick your kind of business',
  menuSub: 'Each one has its own page, in your words. The plan and the price are the same.',
  menuAll: 'One plan for every business. See the price',
  items: [
    {
      slug: 'auto',
      href: '/',
      label: 'Auto shops',
      sub: 'Detailing, coating, PPF, tint and aftermarket',
      // steering wheel
      icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 14.500V21M9.700 11 3.500 9M14.300 11l6.200-2"/>',
    },
  ],
};

/** The free audit, in general words. */
export const audit9 = {
  ...a.audit9,
  line: 'Find the 3 places your business is most likely losing booked customers.',
};

export const numbers9 = { ...a.numbers9 };

export const about9 = {
  ...a.about9,
  videoNote: 'A short walkthrough of the owner app, the inbox and the daily schedule.',
  missing: { ...a.about9.missing, story: 'A customer story, once that customer agrees' },
};
