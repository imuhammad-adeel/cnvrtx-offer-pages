/**
 * Version 8. Built on v7 ("Mirror Finish") with the owner's change list.
 *
 * WRITING RULES FOR THIS FILE
 * - No em dashes or en dashes anywhere. Short plain sentences.
 * - Outcomes first, features second.
 * - No invented statistics, ratings, logos, testimonials or customer results.
 *   Dollar figures are arithmetic on the visitor's own inputs.
 *
 * OFFER: v8 is self-serve. There is no free audit. The visitor picks a plan and
 * joins. Items marked PROPOSED below are suggestions that make the offer
 * stronger. They are real commitments, so each one needs the owner's sign-off
 * before launch. Set `enabled: false` to remove one from the page.
 */

export const nav8 = {
  links: [
    { label: 'Leaks', href: '#leaks' },
    { label: 'The math', href: '#math' },
    { label: 'System', href: '#how-it-works' },
    { label: 'Price', href: '#pricing' },
  ],
  cta: 'Get Started',
};

export const hero8 = {
  pill: 'Built for',
  pillWords: ['detailing', 'ceramic coating', 'PPF', 'window tint', 'wrap', 'wheel and tire', 'fender', 'custom build', 'aftermarket'],
  pillEnd: 'shops',
  // Approved headline kept: automotiveCopy.hero.headlineLines
  sub: 'Your work is flawless. Your follow-up has swirl marks. We install a front desk that runs itself: every call answered, every quote chased, every job booked. You stay in the bay.',
  cta: 'Get My System',
  link: 'See what it costs you',
  trust: ['Done for you', 'No sales call', 'Month-to-month'],
  hud: {
    hint: 'Move your cursor to polish the page',
    hintTouch: 'Polishing…',
    label: 'Shine',
    done: 'Showroom ready',
  },
  reel: ['Detailing', 'Ceramic Coating', 'PPF', 'Window Tint', 'Wraps', 'Wheels & Fitment', 'Suspension', 'Aftermarket'],
};

export const ticker8 = [
  ['Missed calls', 'Answered'],
  ['Slow replies', 'Instant'],
  ['Cold quotes', 'Followed up'],
  ['No-shows', 'Reminded'],
  ['One-time customers', 'Brought back'],
];

export const pipe8 = {
  kicker: 'The CNVRT X position',
  // Approved big idea (automotiveCopy.bigIdea.lines) is rendered as the title.
  not: ['Not a website agency', 'Not another CRM', 'Not one more app to learn'],
  is: 'A front desk that runs itself, so you can stay in the bay.',
  labels: ['Missed call', 'Slow reply', 'Cold quote', 'No-show', 'No return'],
  in: 'Inquiries in',
  lost: 'Leaked',
  booked: 'Booked',
  btnMore: 'Buy more leads',
  btnFix: 'Fix the leaks',
  btnReset: 'Reset',
  msgLeak: 'Same pipe. Five holes. Money you already paid to attract drips out before it books.',
  msgMore: 'More leads poured in. Same holes. You just leak faster.',
  msgFixed: 'Leaks patched. Not every inquiry books, but most of that money now reaches your calendar.',
  note: 'Illustration with example numbers. Not real customer data and not a promise of results.',
};

export const leaks8 = {
  kicker: 'The swirl marks in your business',
  title: ['Five places', 'bookings disappear.'],
  hint: 'Keep scrolling',
  items: [
    {
      pain: 'Missed calls',
      fix: 'Texted back in seconds',
      line: 'You are under a car. They call the next shop. Now every missed call gets an instant text.',
      result: 'The lead stays yours',
    },
    {
      pain: 'Slow replies',
      fix: 'Answered right away',
      line: 'You reply tonight. They booked at noon. Now forms, chat and DMs get a first reply immediately.',
      result: 'You are first',
    },
    {
      pain: 'Cold quotes',
      fix: 'Chased until they decide',
      line: 'The quote goes out and nobody follows up. Now friendly check-ins run until it is a yes or a no.',
      result: 'No quote forgotten',
    },
    {
      pain: 'No-shows',
      fix: 'Confirmed and reminded',
      line: 'The bay is blocked and nobody comes. Now reminders go out with a one-tap reschedule.',
      result: 'Bay time protected',
    },
    {
      pain: 'One-time customers',
      fix: 'Asked back, on time',
      line: 'Great job, no review, no return. Now a review request goes out, then a reminder when maintenance is due.',
      result: 'They come back',
    },
  ],
  end: ['All five.', 'Fixed by one system.', 'Done for you.'],
  endCta: 'See what they cost you',
};

export const math8 = {
  kicker: 'Do the math',
  title: 'What is the haze costing you?',
  s1: 'My shop misses about',
  s2: 'calls and messages a week. An average job is worth',
  s3: 'If we answered fast, about',
  s4: 'would book.',
  defaults: { missed: 6, value: 350, oneIn: 3 },
  odds: [2, 3, 4, 5, 10],
  resultLabel: 'slipping away every month',
  tiles: {
    cost: 'CNVRT X costs',
    even: 'Pays for itself at',
    evenUnit: 'saved inquiries a month',
    half: 'Save only half of them',
    halfUnit: 'a month, after the cost',
  },
  flat: 'At these numbers it would not pay for itself on missed inquiries alone.',
  disclaimer: 'This is arithmetic on your own inputs. It is not a promise of results. Example numbers show until you change them.',
  cta: 'Show me the offer',
};

export const stack8 = {
  kicker: 'The system · what you get',
  title: ['Five coats.', 'One finish.'],
  intro: 'Each coat closes one leak. All five are built, written and tested for you. You do not learn software. You do not write messages.',
  cards: [
    {
      code: 'Coat 01',
      finish: 'Pearl',
      title: 'Get found',
      hl: 'Booking page built for you.',
      hlTag: 'Free website on Annual',
      solved: 'Visitors can book in a few taps instead of calling around.',
      parts: ['Booking page', 'Google profile tune-up', 'Full website free on Annual'],
      viz: 'site',
    },
    {
      code: 'Coat 02',
      finish: 'Silver',
      title: 'Answer',
      hl: 'Your own number and a mobile app.',
      hlTag: 'Number included (US)',
      solved: 'Every call, text and DM lands in one place and gets a reply, even when your hands are full.',
      parts: ['Missed-call text back', 'Calls, texts, chat, Instagram and Facebook in one inbox', 'Reply from your phone'],
      viz: 'inbox',
    },
    {
      code: 'Coat 03',
      finish: 'Cobalt',
      title: 'Follow up',
      hl: 'Every message written for you.',
      hlTag: 'In your shop’s voice',
      solved: 'Quotes get chased politely until the customer says yes or no. It stops the moment they reply.',
      parts: ['Lead follow-up', 'Quote follow-up', 'Stops on reply'],
      viz: 'follow',
    },
    {
      code: 'Coat 04',
      finish: 'Signal',
      title: 'Show up',
      hl: 'Reminders that run themselves.',
      hlTag: 'Zero phone tag',
      solved: 'Customers book online, get confirmed and reminded, and can reschedule in one tap.',
      parts: ['Online booking', 'Confirmations and reminders', 'Reschedule link'],
      viz: 'cal',
    },
    {
      code: 'Coat 05',
      finish: 'Obsidian',
      title: 'Come back',
      hl: 'Reviews and repeat visits on autopilot.',
      hlTag: 'Never forget to ask',
      solved: 'Every finished job asks for a review, then invites the customer back when maintenance is due.',
      parts: ['Review requests', 'Maintenance reminders', 'Win-back messages', 'Owner view of it all'],
      viz: 'stars',
    },
  ],
};

export const work8 = {
  kicker: 'Why not just buy software?',
  title: ['Who does', 'the work?'],
  lead: 'Software hands you tools and homework. We hand you a working front desk.',
  colTask: 'What it takes',
  colYou: 'With software',
  colUs: 'With CNVRT X',
  you: 'You',
  us: 'We do it',
  rows: [
    'Build your booking page',
    'Set up your number, inbox and app',
    'Write every text, email and follow-up',
    'Build the booking, reminder and review flows',
    'Connect and test everything end to end',
    'Fix and adjust it as your shop changes',
  ],
  yourPart: {
    label: 'Your part',
    big: 'One short form.',
    line: 'Tell us your services, hours and prices. Then go back to the cars.',
  },
  quotes: {
    software: { label: 'Software', q: 'Here are the tools.' },
    cnvrtx: { label: 'CNVRT X', q: 'Here is the working system.' },
  },
};

export const offer8 = {
  kicker: 'The offer',
  title: ['One price.', 'Locked for life.'],
  /**
   * OWNER DECISION (12 Nov 2026): the price will rise. Today's price is shown
   * as the launch price, the upcoming price is crossed out, and anyone who
   * joins now keeps today's price for as long as they stay. Change
   * `regularMonthly` to 397 if that is the next price.
   */
  regularMonthly: 297,
  /**
   * Real deadline for the price rise, as YYYY-MM-DD. Leave '' until a date is
   * decided: the page then says "soon" and shows no countdown. Never put a
   * made-up date here.
   */
  riseDate: '',
  rise: 'Launch price. It goes up to {regular} a month. Join now and your price never changes.',
  lock: 'Locked for life',
  stackLabel: 'What you get',
  stack: [
    { t: 'Booking page built for you', d: 'Customers book in a few taps' },
    { t: 'Your own local number (US)', d: 'Included for US shops. Other countries: ask us first.' },
    { t: 'The mobile app', d: 'Calls, texts and DMs in your pocket. Reply from anywhere.' },
    { t: 'Missed-call text back', d: 'Every missed call gets an instant text' },
    { t: 'One inbox for everything', d: 'Calls, texts, web chat, Instagram and Facebook' },
    { t: 'Lead and quote follow-up', d: 'Written for you. Stops when they reply.' },
    { t: 'Booking reminders', d: 'Confirmations, reminders and a reschedule link' },
    { t: 'Review requests after every job', d: 'Sent at the right moment' },
    { t: 'Maintenance and win-back reminders', d: 'Customers get invited back on time' },
    { t: 'Owner view', d: 'See what came in, what is waiting and what booked' },
    { t: 'Setup and writing done for you', d: 'Done for you, start to finish' },
    { t: 'Live in 14 days or month one free', d: 'From the day we have your shop details' },
  ],
  stackTotal: 'All of it included.',
  cardLabel: 'CNVRT X · Auto Growth OS',
  annual: {
    name: 'Annual',
    tag: 'Best value',
    per: '/yr',
    note: 'Setup included. Two months included.',
    sub: 'Same as 10 × $197. Billed once a year.',
    cta: 'Start Annual',
    yearTitle: 'What your year looks like',
    year: [
      'Week 2: your front desk is live and answering',
      'Every week: missed calls texted back, quotes chased, bookings reminded',
      'Every job: a review request and a maintenance reminder',
      'All year: one price, nothing to manage',
    ],
    /** PROPOSED annual-only bonuses. Each needs the owner's sign-off. */
    bonuses: [
      { enabled: false, t: 'Price locked for 12 months', d: 'Your rate does not change during the year.' },
      { enabled: true, t: 'Website built to book calls', d: 'Your site is set up to turn visitors into calls and bookings.' },
      { enabled: true, t: 'Past-customer win-back at launch', d: 'We invite your existing customer list back in week one.' },
      { enabled: true, t: 'Old-lead reactivation at launch', d: 'We message the leads that asked and never booked.' },
      { enabled: true, t: 'Four seasonal campaigns', d: 'Spring detail, summer protection, fall prep and holiday gift cards.' },
      { enabled: false, t: 'Front of the build queue', d: 'Annual shops are built first.' },
    ],
    bonusLabel: 'Annual only',
  },
  monthly: {
    name: 'Monthly',
    per: '/mo',
    note: '+ $497 one-time setup',
    sub: 'Month-to-month. Cancel anytime.',
    cta: 'Start Monthly',
  },
  founding: {
    tag: 'Founding offer',
    line: 'First 10 qualifying automotive shops: $497 setup waived on monthly.',
    cta: 'Claim founding pricing',
  },
  promises: [
    { t: 'Live in 14 days, or your first month is free', d: 'The clock starts when we have your shop details and access. Carrier (A2P), domain and third-party approvals are outside the 14 days.' },
    { t: 'Month-to-month on monthly', d: 'No long-term contract. Cancel anytime.' },
    { t: 'Your business stays yours', d: 'Your domain, content and customer list. Exportable.' },
    { t: 'Keeps your shop software', d: 'It sits alongside the tools that run your jobs.' },
  ],
  /** PROPOSED. No refund involved: an unhappy annual customer can drop to monthly and use their payment as credit. Needs the owner's sign-off. */
  loveIt: {
    /** Annual: off (owner decision). The idea lives on Monthly as plain month-to-month. */
    enabled: false,
    t: 'Love it or leave it',
    d: 'Month-to-month. Stay because it works, or cancel anytime.',
  },
  yearTitle: 'What your year looks like',
  year: [
    { k: 'Week 2', v: 'Your front desk is live and answering.' },
    { k: 'Every week', v: 'Missed calls texted back. Quotes chased. Bookings reminded.' },
    { k: 'Every job', v: 'A review request, then a maintenance reminder.' },
    { k: 'All year', v: 'One price. Nothing to manage.' },
  ],
  usage: 'SMS, phone, AI and carrier-related usage may include allowances, fair-use limits or pass-through costs depending on your configuration. Exact terms are shown before activation.',
  honest: 'We do not guarantee bookings or revenue. We guarantee the work we control.',
};

export const start8 = {
  kicker: 'Start today',
  title: ['Join in minutes.', 'No sales call.'],
  lead: 'No demo. No waiting on a quote. Pick a plan and the build starts.',
  steps: [
    { t: 'Pick your plan', d: 'Annual or monthly. Checkout takes a couple of minutes.' },
    { t: 'Fill one short form', d: 'Your services, hours, prices and logo. That is your whole part.' },
    { t: 'Your front desk goes live', d: 'Booking page, number, app, follow-up and reminders, built and tested for you.' },
  ],
  formTitle: 'Reserve your build',
  formNote: 'Online checkout is being switched on. Leave your details and your join link arrives by email.',
  submit: 'Reserve My Build',
  planLabel: 'Plan',
  plans: ['Annual', 'Monthly', 'Founding (setup waived)'],
  footer: 'Stop losing jobs you already earned.',
};

export const faq8 = {
  kicker: 'Straight answers',
  title: 'Before you ask.',
  items: [
    {
      q: 'Is this another CRM or website agency?',
      a: 'No. A CRM is a tool you have to build and run. An agency gives you a website and leaves. This is a working front desk: the booking page, the number, the inbox, the follow-up, the reminders and the review requests, all built, written and tested for you.',
    },
    {
      q: 'How much of my time does it take?',
      a: 'One short form about your services, hours and prices. We do the rest. After launch you reply to customers from the app when a human answer is needed.',
    },
    {
      q: 'Do I have to talk to a salesperson?',
      a: 'No. Pick a plan, fill the form and the build starts. If you want to ask something first, use the contact link.',
    },
    {
      q: 'Do I replace my current shop software?',
      a: 'Usually not. Keep the tools that run your jobs and invoices. This handles what happens before and after the job: the inquiry, the follow-up, the booking and the return visit.',
    },
    {
      q: 'Does AI talk to every customer?',
      a: 'No. Routine steps like confirmations and reminders are fixed automation. AI answers the questions you approve and collects details. Pricing talks, complaints and big jobs go to you.',
    },
    {
      q: 'Is the phone number really included?',
      a: 'Yes for US shops. For other countries, ask us first so we can confirm availability. US texting also needs carrier registration (A2P). We prepare it with you and texting goes live once the carrier approves.',
    },
    {
      q: 'Can you guarantee bookings?',
      a: 'No, and be careful with anyone who does. Bookings depend on your services, prices and market. We guarantee the work we control: a tested system, live in 14 days or your first month is free.',
    },
    {
      q: 'Can I cancel?',
      a: 'Yes. Monthly is month-to-month. Your domain, content and customer list stay yours and you can export them.',
    },
  ],
};

export const exit8 = {
  enabled: true,
  eyebrow: 'Before you go',
  title: 'Leaving costs more than staying.',
  now: 'Today',
  later: 'If you come back later',
  nowLine: '{price} a month, locked for life',
  laterLine: '{regular} a month',
  diff: 'That is {diff} more every year, for the same system.',
  leak: 'And about {lost} a month keeps slipping away while you wait.',
  leakNote: 'From the numbers in the calculator.',
  cta: 'Lock my {price} price',
  no: 'No thanks',
};

/** Short hook lines shown as full-width statements between sections. */
export const hooks8 = {
  afterLeaks: ['The best shop in town', 'still loses to the one', 'that answers first.'],
  beforeOffer: ['Flawless work deserves', 'a flawless follow-up.'],
};

/** After checkout: onboarding (can be skipped for later), then thank you. */
export const flow8 = {
  /** GHL onboarding form URL. '' shows the built-in preview form. */
  onboardingFormUrl: '',
  onboardingPath: '/automotive/v8/onboarding',
  thanksPath: '/automotive/v8/thank-you',
  onboarding: {
    kicker: 'Payment received',
    title: ['You are in.', 'One short form and we build.'],
    lead: 'Tell us how your shop works. It takes a few minutes and it is the only thing we need from you.',
    clock: 'Your 14-day launch clock starts the moment this form is in.',
    steps: ['Joined', 'Shop details', 'We build', 'Live'],
    later: 'I will do this later',
    laterNote: 'We email you this link. The 14 days start when the form is in.',
    submit: 'Send my shop details',
  },
  thanks: {
    kicker: 'All set',
    titleDone: ['Thank you.', 'Your build has started.'],
    titleLater: ['Thank you.', 'One step left.'],
    leadDone: 'We have your shop details. Here is what happens next.',
    leadLater: 'Your spot is saved. Send your shop details when you are ready and the 14-day clock starts.',
    next: [
      { t: 'Today', d: 'You get a welcome email with your login and the mobile app link.' },
      { t: 'This week', d: 'We build your booking page, number, inbox, follow-up and reminders.' },
      { t: 'Before launch', d: 'We test every flow end to end and send you a preview.' },
      { t: 'Within 14 days', d: 'Your front desk goes live. We tell you the moment it does.' },
    ],
    finish: 'Finish my shop details',
    referTitle: 'Know another shop owner?',
    referLine: 'Send them this page. The launch price is still open.',
    referCta: 'Copy the link',
  },
};

export const footer8 = {
  blurb: 'A done-for-you front desk for auto service shops. Every call answered, every quote followed up, every job booked and reminded.',
  cols: {
    page: 'On this page',
    legal: 'Legal',
    contact: 'Contact',
  },
  legalLinks: ['Privacy Policy', 'Terms of Service', 'SMS Terms', 'Cancellation Policy', 'Disclaimer'],
  disclaimers: [
    'Results disclaimer: CNVRT X does not guarantee bookings, revenue or any specific result. Figures in the calculator and the illustrations are examples based on the numbers you enter. Your results depend on your services, prices, market and how you run your shop.',
    'Texting: business texting in the US needs carrier registration (A2P 10DLC). Texting features go live after carrier approval. Message and data rates may apply. Reply STOP to opt out.',
    'Google, Facebook and Instagram are trademarks of their owners. This site is not part of, or endorsed by, any of them.',
  ],
};
