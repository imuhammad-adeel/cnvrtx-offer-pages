/**
 * Version 9. Same design system as v8. New offer: three plans named after the
 * role the owner no longer has to hire. Prices and links live in src/config/offerV9.ts.
 *
 * WRITING RULES FOR THIS FILE
 * - No em dashes or en dashes anywhere. Short plain sentences.
 * - Outcomes first, features second.
 * - No invented statistics, ratings, logos, testimonials or customer results.
 *   Dollar figures are arithmetic on the visitor's own inputs.
 *
 * OFFER: v9 is self-serve. There is no free audit. The visitor picks a plan and
 * joins. Items marked PROPOSED below are suggestions that make the offer
 * stronger. They are real commitments, so each one needs the owner's sign-off
 * before launch. Set `enabled: false` to remove one from the page.
 */

export const nav9 = {
  links: [
    { label: 'Leaks', href: '#leaks' },
    { label: 'The math', href: '#math' },
    { label: 'System', href: '#how-it-works' },
    { label: 'Price', href: '#pricing' },
  ],
  cta: 'Get Started',
};

export const hero9 = {
  pill: 'Built for',
  pillWords: ['detailing', 'coating', 'PPF', 'tint', 'aftermarket'],
  /** Full eyebrow, read out in one piece. The pill shows it one word at a time. */
  eyebrow: 'Built for detailing, coating, PPF, tint & aftermarket shops',
  pillEnd: 'shops',
  // Approved headline kept: automotiveCopy.hero.headlineLines
  sub: 'Your work is flawless. Your follow-up has swirl marks. We install the front office you never had to hire: every call answered, every quote chased, every booking confirmed. You stay in the bay.',
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

export const ticker9 = [
  ['Missed calls', 'Answered'],
  ['Slow replies', 'Answered fast'],
  ['Cold quotes', 'Followed up'],
  ['No-shows', 'Reminded'],
  ['One-time customers', 'Brought back'],
];

export const pipe9 = {
  kicker: 'You already paid for these leads',
  // Approved big idea (automotiveCopy.bigIdea.lines) is rendered as the title.
  not: ['Not a website agency', 'Not another CRM', 'Not one more app to learn'],
  is: 'The front office your shop never had to hire.',
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

export const leaks9 = {
  kicker: 'The swirl marks in your business',
  title: ['Five places', 'your bookings disappear.'],
  hint: 'Keep scrolling',
  items: [
    {
      pain: 'Missed calls',
      fix: 'Caught every time',
      line: 'You are under a car. They call the next shop. Now every missed call lands on your phone as a job card, and callers who agreed to texts get a text back.',
      result: 'The lead stays yours',
    },
    {
      pain: 'Slow replies',
      fix: 'Answered right away',
      line: 'You reply tonight. They booked at noon. Now every new lead gets an instant email at any hour, and a text within a minute during texting hours.',
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
      line: 'The bay is blocked and nobody comes. Now reminders go out, and the customer can reply MOVE to reschedule.',
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

export const math9 = {
  kicker: 'Do the math',
  title: 'What is the haze costing you?',
  s1: 'My shop misses about',
  s2: 'calls and messages a week. An average job is worth',
  s3: 'If we answered fast, about',
  s4: 'would book.',
  defaults: { missed: 6, value: 350, oneIn: 3 },
  odds: [2, 3, 4, 5, 10],
  resultLabel: 'slipping away every month',
  /** `{n}` = missed inquiries a month divided by the visitor's own booking odds. */
  jobsLine: 'That is about {n} booked jobs a month, by your own numbers.',
  tiles: {
    cost: '{role} costs',
    even: 'Pays for itself at',
    evenUnit: 'saved inquiries a month',
    half: 'Save only half of them',
    halfUnit: 'a month, after the cost',
  },
  flat: 'At these numbers it would not pay for itself on missed inquiries alone.',
  disclaimer: 'This is arithmetic on your own inputs. It is not a promise of results. Example numbers show until you change them.',
  cta: 'Show me how to stop it',
};

export const stack9 = {
  kicker: 'The system \u00b7 9 systems, 4 coats',
  title: ['Four coats.', 'One finish.'],
  intro: 'Every leak above gets its own coat. Nine systems, built, written and tested for you. You do not learn software. You do not write messages.',
  /** `parts` are the named systems. `plan` is the plan the coat starts in. */
  cards: [
    {
      code: 'Coat 01',
      finish: 'Pearl',
      title: 'Catch',
      hl: 'Never miss a lead.',
      hlTag: 'Systems 1 to 3',
      solved: 'The phone rings while your hands are full. Now every call, form and DM gets an answer, even after closing.',
      parts: ['Missed-Call Rescue', '60-Second Lead Response', '24/7 AI Front Desk'],
      plan: 'The Receptionist',
      viz: 'inbox',
    },
    {
      code: 'Coat 02',
      finish: 'Cobalt',
      title: 'Book',
      hl: 'Turn it into a job on the calendar.',
      hlTag: 'Systems 4 and 5',
      solved: 'The quote goes out, then goes quiet. Now it is followed up until it is a yes or a no, and every booking is confirmed.',
      parts: ['Follow-Up Until They Book', 'No-Show Shield'],
      plan: 'The Service Advisor',
      viz: 'cal',
    },
    {
      code: 'Coat 03',
      finish: 'Signal',
      title: 'Keep',
      hl: 'Make every job pay twice.',
      hlTag: 'Systems 6 and 7',
      solved: 'Great job, no review, no return. Now every customer is asked for a review and invited back.',
      parts: ['5-Star Review Machine', 'Repeat & Referral Engine'],
      plan: 'The Service Advisor + The Shop Manager',
      viz: 'stars',
    },
    {
      code: 'Coat 04',
      finish: 'Obsidian',
      title: 'Run',
      hl: 'Run the shop from your phone.',
      hlTag: 'Systems 8 and 9',
      solved: 'You piece your day together from texts. Now it arrives at 7:30 AM, with tomorrow\u2019s run sheet at 6 PM.',
      parts: ['Owner Command Center', 'Ad Results Tracker'],
      plan: 'The Shop Manager',
      viz: 'run',
    },
  ],
};

export const work9 = {
  kicker: 'Hire someone? Buy software?',
  title: ['Who does', 'the work?'],
  colTask: 'What it takes',
  colYou: 'Today',
  colUs: 'With CNVRT X',
  us: 'Done for you',
  /** The daily front-office work, and who carries it today. */
  rows: [
    { t: 'Answer every call and message', who: 'You' },
    { t: 'Follow up on every quote', who: 'Your team' },
    { t: 'Confirm tomorrow\u2019s bookings', who: 'Your team' },
    { t: 'Type tomorrow\u2019s run sheet', who: 'Your team' },
    { t: 'Ask every customer for a review', who: 'You' },
    { t: 'Set it all up and keep it running', who: 'You' },
  ],
  totLabel: 'Left on your plate',
  totYou: 'All of it',
  totUs: 'The cars',
  yourPart: {
    label: 'Your part',
    big: 'About 15 minutes.',
    line: 'Log in, open Setup Center and answer the setup questions. Then go back to the cars.',
  },
};

/** The one guarantee wording. Use these three strings everywhere; do not write a variant. */
export const guarantee9 = {
  headline: 'Live in 14 days with the Launch Kit, or your first month is free.',
  condition:
    'Applies to plans that include the Launch Kit (Monthly with Launch Kit, and Annual). The 14 days start when you finish Setup Center. Carrier (A2P), domain and other third-party approvals are outside the 14 days. On an annual plan the free month is added to your term.',
  short: 'Live in 14 days with the Launch Kit',
};

/**
 * "Included every month": the same on every plan. Owner-approved wording, word for word.
 * The list itself comes from config (includedMonthly in src/config/offerV9.ts).
 * Never show a dollar amount for usage or credits.
 */
export const included9 = {
  title: 'Included every month',
  note: 'No usage bills in a normal month. If you ever go over, extra usage is billed at standard rates. Most shops never do.',
  a2p: 'Texting starts once your business texting registration (A2P) is approved; our team handles it with you.',
};

export const offer9 = {
  kicker: 'The offer',
  title: ['One plan.', 'Three roles you never hire.'],
  sub: 'A receptionist, a service advisor and a shop manager for your front office. Built, written and tested for you.',
  /** True for all three plans. `ic` is the icon index in Offer9. */
  includesTitle: 'Every plan includes',
  includes: [
    { t: 'Setup and writing done for you', ic: 10 },
    { t: 'Your own local number (US)', ic: 1 },
    { t: 'The mobile app', ic: 2 },
    { t: 'One inbox for calls, texts, chat and DMs', ic: 4 },
    { t: 'Booking page built for you', ic: 0 },
    { t: guarantee9.short, ic: 11 },
  ],
  stackTotal: 'All of it included.',
  cardLabel: 'CNVRT X Front Office',
  annual: {
    name: 'Annual',
    tag: 'Best value',
    per: '/yr',
    note: 'Launch Kit waived. Pay 10, get 12.',
    cta: 'Start Annual',
    yearTitle: 'What your year looks like',
    year: [
      'Week 2: your front desk is live and answering',
      'Every week: missed calls caught, quotes chased, bookings reminded',
      'Every job: a review request and a maintenance reminder',
      'All year: one price, nothing to manage',
    ],
    /** PROPOSED annual-only bonuses. Each needs the owner's sign-off. */
    bonuses: [
      { enabled: false, t: 'Price locked for 12 months', d: 'Your rate does not change during the year.' },
      { enabled: true, t: 'Full website built to book calls', d: 'Free on annual. A one-time add-on on monthly.' },
      { enabled: true, t: 'Past-customer win-back at launch', d: 'We invite your existing customer list back in week one.' },
      { enabled: true, t: 'Old-lead reactivation at launch', d: 'We message the leads that asked and never booked.' },
      { enabled: false, t: 'Front of the build queue', d: 'Annual shops are built first.' },
    ],
    bonusLabel: 'Annual only',
    bonusNote: 'Win-back and reactivation go by email, and by text only to customers who agreed to texts.',
  },
  monthly: {
    name: 'Monthly',
    per: '/mo',
    sub: 'Month-to-month. Cancel anytime.',
    cta: 'Start Monthly',
  },
  promises: [
    { t: guarantee9.headline, d: guarantee9.condition },
    { t: 'Love it or leave it', d: 'Month-to-month on monthly plans. Cancel anytime.' },
    { t: 'Your business stays yours', d: 'Your domain, content and customer list, exportable.' },
    { t: 'Keeps your shop software', d: 'It sits alongside the tools that run your jobs.' },
  ],
  finePrint:
    'Texts go only to people who agreed to them, after carrier approval, and during texting hours ({hours}).',
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
    { k: 'Every week', v: 'Missed calls caught. Quotes chased. Bookings reminded.' },
    { k: 'Every job', v: 'A review request, then a maintenance reminder.' },
    { k: 'All year', v: 'One price. Nothing to manage.' },
  ],
  /** `{allowance}` and `{hours}` are filled from config (offerV9.allowance, offerV9.textingHours). */
  usage: 'Texting carrier fees are passed on at cost and shown to you before activation.',
  honest: 'We do not guarantee bookings or revenue. We guarantee the work we control.',
};

export const start9 = {
  kicker: 'Start today',
  title: ['Join in minutes.', 'No sales call.'],
  lead: `${guarantee9.short}. No demo, no sales call. Pick annual or monthly and the build starts.`,
  steps: [
    { t: 'Pick annual or monthly', d: 'Checkout takes a couple of minutes.' },
    { t: 'Answer the setup questions', d: 'Log in, open Setup Center and answer the setup questions. About 10-15 minutes.' },
    { t: 'Your front desk goes live', d: 'Booking page, number, app, follow-up and reminders, built and tested for you.' },
  ],
  formTitle: 'Reserve your build',
  formNote: 'Online checkout is being switched on. Leave your details and your join link arrives by email.',
  submit: 'Reserve My Build',
  /** Shown in the reserve form once the checkout pages are open (offerV9.checkoutLive). */
  liveTitle: 'Start your build',
  liveNote: 'Next: secure checkout. Then your login arrives by email and setup takes about 10-15 minutes in your account.',
  liveSubmit: 'Continue to secure checkout',
  planLabel: 'Plan',
  gainTitle: 'On the table in your first year',
  gainRow: 'Leaks you can go after',
  gainNote: 'From your calculator numbers. An estimate, not a promise.',
  sms: {
    account: 'Text me about my account and setup. Msg & data rates may apply. Reply STOP to opt out.',
    marketing: 'Send me tips and offers by text. Msg & data rates may apply. Reply STOP to opt out.',
    note: 'Checking a box is not required to reserve your build.',
  },
  footer: 'Stop losing jobs you already earned.',
};

export const faq9 = {
  kicker: 'Straight answers',
  title: 'Before you ask.',
  items: [
    {
      q: 'Is this another CRM or website agency?',
      a: 'No. A CRM is a tool you have to build and run. An agency gives you a website and leaves. This is a working front desk: the booking page, the number, the inbox, the follow-up, the reminders and the review requests. All of it is built, written and tested for you.',
    },
    {
      q: 'How much of my time does it take?',
      a: 'About 10-15 minutes to start: you log in, open Setup Center and answer the setup questions. We do the rest. After launch you reply to customers from the app when a human answer is needed.',
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
      a: 'No. Routine steps like confirmations and reminders are fixed automation. AI answers the questions you approve and collects details. It never quotes prices and it says it is an AI if asked. Pricing talks, complaints and big jobs go to you.',
    },
    {
      q: 'Is the phone number really included?',
      a: 'Yes for US shops. For other countries, ask us first so we can confirm availability. US texting also needs carrier registration (A2P). We prepare it with you and texting goes live once the carrier approves.',
    },
    {
      q: 'Can you guarantee bookings?',
      a: `No, and be careful with anyone who does. Bookings depend on your services, prices and market. We guarantee the work we control. ${guarantee9.headline} ${guarantee9.condition}`,
    },
    {
      q: 'Are calls, texts and AI replies included?',
      /** `included: true` makes the FAQ show the list as a list; `a` is the same answer as one paragraph. */
      included: true,
      a: `Yes. Every month includes {included}. ${included9.note} ${included9.a2p}`,
    },
    {
      q: 'Can I cancel?',
      a: 'Yes. Monthly plans are month-to-month. Your domain, content and customer list stay yours and you can export them.',
    },
    {
      q: 'Is the AI a real person?',
      a: 'No. It answers from information you approve, never quotes prices, says it’s an AI if asked, and hands anything complex to you.',
    },
  ],
};

export const exit9 = {
  enabled: true,
  eyebrow: 'Before you go',
  title: 'The leak keeps running while you wait.',
  leak: 'About {lost} a month keeps slipping away.',
  leakNote: 'From your calculator numbers. An estimate, not a promise.',
  cta: 'See the plans',
  no: 'No thanks',
  /**
   * The leaving offer (offerV9.exitOffer). `{kit}` is the reduced Launch Kit, `{was}` the regular
   * one and `{save}` the difference. The saving is stated in dollars, which is exact.
   */
  offer: {
    eyebrow: 'Before you go',
    title: 'Take {save} off your Launch Kit.',
    priceNote: 'one-time Launch Kit, instead of {was}',
    line: 'Start monthly today and your one-time Launch Kit is {kit}, not {was}. The plan itself stays {monthly} a month, cancel anytime.',
    cta: 'Start Monthly with the {kit} Launch Kit',
    no: 'No thanks',
  },
};

/** Short hook lines shown as full-width statements between sections. */
export const hooks9 = {
  afterLeaks: ['The best shop in town', 'still loses to the one', 'that answers first.'],
  beforeOffer: ['Flawless work deserves', 'a flawless follow-up.'],
};

/**
 * The three steps after payment. The same words are used in the post-purchase welcome email,
 * on the thank-you page and on the checkout summary, so a buyer reads one set of instructions.
 */
const SETUP_STEPS = [
  'Check your inbox for your login email (arrives within a few minutes; check spam/promotions).',
  'Log in.',
  'Click "Setup Center" in the left menu and answer the setup questions (about 10-15 minutes).',
];

/**
 * After checkout: the thank-you page. The buyer's own account does not exist yet when it
 * loads, so it embeds nothing; it says what to expect. Setup happens inside their account,
 * in the Setup Center. `noEmailContact` is followed by the support email from config, and is
 * left out when no support email is set.
 */
export const flow9 = {
  thanksPath: '/thank-you',
  thanks: {
    pageTitle: 'Thank you. 3 steps to go live | CNVRT X Front Office',
    pageDescription: 'Your CNVRT X Front Office is paid for. Three short steps and we take it live.',
    kicker: 'Payment received',
    title: ['Thank you.', '3 steps to go live.'],
    lead: 'Your front office is booked in. Setup takes about 10-15 minutes and happens inside your new account.',
    /** With the buyer's first name, when this browser has it from the reserve form: "Thank you, Sam." */
    titleNamed: 'Thank you, {name}.',
    facts: ['About 10-15 minutes', 'Inside your new account', 'Change any answer later'],
    stepsTitle: '3 steps to go live',
    stepsKicker: 'Do this now',
    startHere: 'Start here',
    clockUnit: 'day launch clock',
    fillTitle: 'You answer once. The system fills itself in.',
    /** Word for word the three steps in the post-purchase welcome email. Change both together. */
    steps: SETUP_STEPS,
    /** One thank-you page serves every checkout, so the 14 days are tied to the Launch Kit in words. */
    clockTag: 'With the Launch Kit',
    clock: 'If your plan includes the Launch Kit, your 14-day launch clock starts as soon as you finish Setup Center.',
    clockNote: 'The Launch Kit is included on the annual plan.',
    note: 'Your emails, texts, booking pages and AI assistant fill in automatically from your answers. You can change any answer later in the same place.',
    noEmail: 'No email after 15 minutes? Check your spam folder.',
    noEmailContact: 'Still nothing? Email',
    timelineKicker: 'If your plan includes the Launch Kit',
    timelineTitle: 'What happens next',
    timeline: [
      { t: 'Today', d: 'You finish Setup Center. Your 14-day launch clock starts.' },
      { t: 'Then', d: 'We connect your phone, Google and Meta, and check everything.' },
      { t: 'Within 14 days of Setup Center (with the Launch Kit)', d: 'Your front office goes live.' },
    ],
    noKitTitle: 'Monthly plan without the Launch Kit?',
    noKit: 'There is no launch clock. The system is ready in your account and you set it up yourself, starting in Setup Center.',
    referTitle: 'Know another shop owner?',
    referKicker: 'One more thing',
    referLine: 'Send them the link. It takes one tap.',
    referCta: 'Copy the link',
    referDone: 'Link copied',
  },
};

export const footer9 = {
  blurb: 'A done-for-you front desk for detailing, coating, PPF, tint and aftermarket shops.',
  cta: 'Get My System',
  made: 'Built, written and tested for you.',
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

/**
 * ONE plan with three roles inside it. Prices and links are in src/config/offerV9.ts.
 * `features` are the short lines in each role's dropdown; `detail` is the full wording
 * shown when "See every detail" is opened. Only what the system actually does.
 * `{annual}`, `{monthly}`, `{kit}` and `{site}` are filled from config.
 */
export const plans9 = {
  toggle: { monthly: 'Monthly', annual: 'Annual', annualTag: 'Pay 10, get 12' },
  kitMonthly: '+ {kit} one-time Launch Kit',
  annual: { name: 'Annual', tag: 'Best value', cta: 'Start Annual' },
  monthly: {
    name: 'Monthly',
    cta: 'Start Monthly',
    /** Plain HTML is allowed here (bold only). */
    points: ['<b>Love it or leave it.</b> Month-to-month. Cancel anytime.', '<b>Full website:</b> {site} one-time add-on.'],
  },
  rolesTitle: 'Your front office: 3 roles, 9 systems',
  roles: [
    {
      id: 'receptionist',
      role: 'The Receptionist',
      name: 'Lead Lock',
      promise: 'Never miss a lead',
      systems: [
        { n: 'Missed-Call Rescue', d: 'Every missed call becomes a job card. Callers who agreed to texts get a text back.' },
        { n: '60-Second Lead Response', d: 'An instant email at any hour. A text within a minute during texting hours.' },
        { n: '24/7 AI Front Desk', d: 'Answers calls, chat and DMs, day and night.' },
      ],
      detail: [
        'Every missed call becomes a job card on your phone',
        'Missed-call text back, only to callers who agreed to texts, after carrier approval',
        'Callers who have not agreed to texts: you get a call-back task, and the AI phone backup can answer where it is set up',
        'AI phone backup: answers when you can\u2019t, day or night',
        'Website, Facebook and Instagram leads get an instant email at any hour and a text within a minute during texting hours',
        '\u201cCall now\u201d alert to you when a new lead hasn\u2019t replied after 5 minutes',
        'One inbox for calls, texts, chat and DMs, plus the mobile app',
        '24/7 AI front desk on your website chat, Facebook and Instagram, plus a website voice line',
        'Your own local number (US) and a free-inspection booking page',
      ],
    },
    {
      id: 'serviceAdvisor',
      role: 'The Service Advisor',
      name: 'Booked Solid',
      promise: 'Turn leads into booked jobs',
      systems: [
        { n: 'Follow-Up Until They Book', d: 'Polite reminders on every quote. Stops when they reply.' },
        { n: 'No-Show Shield', d: 'Confirmations, \u201cReply YES or MOVE\u201d and reminders.' },
        { n: '5-Star Review Machine', d: 'Every customer asked, with two gentle reminders.' },
      ],
      detail: [
        'Follow-up until they book: polite text, email and call reminders that stop the moment they reply',
        'Quote follow-up for ceramic, PPF, tint, wraps and details',
        'No-Show Shield: confirmation, \u201cReply YES or MOVE\u201d the day before, reminders, no-show rescue, drop-off and pickup texts',
        '5-Star Review Machine: every customer asked, two gentle reminders, a video-testimonial link',
      ],
    },
    {
      id: 'shopManager',
      role: 'The Shop Manager',
      name: 'Shop on Autopilot',
      promise: 'Run the shop from your phone',
      systems: [
        { n: 'Repeat & Referral Engine', d: 'Check-ins, referral asks and win-back campaigns.' },
        { n: 'Owner Command Center', d: '7:30 AM brief, job cards and the 6 PM run sheet.' },
        { n: 'Ad Results Tracker', d: 'Shows which ads turned into booked, paid jobs.' },
      ],
      detail: [
        'Owner Command Center: 7:30 AM brief, a job card for every booking, a 6 PM run sheet for tomorrow, one-tap job updates, Monday report',
        'AI quote helper: drafts quotes from your own price list for you to approve and send',
        'Repeat & Referral Engine: service history, check-ins, referral ask, win-back campaigns',
        'Ad Results Tracker: Facebook and Instagram leads followed to booked and paid jobs, sent back to Meta so it finds more customers like them',
      ],
    },
  ],
  detail: {
    open: 'See every detail',
    compare: [
      { k: 'Price', a: '{annual} a year', m: '{monthly} a month' },
      { k: 'Launch Kit (one-time setup)', a: 'Waived', m: '{kit}' },
      { k: 'Two months included', a: 'Yes', m: 'No' },
      { k: 'All three roles', a: 'Yes', m: 'Yes' },
      { k: 'Full website built to book calls', a: 'Free', m: '{site} add-on' },
      { k: 'Past-customer win-back at launch', a: 'Free', m: 'Not included' },
      { k: 'Old-lead reactivation at launch', a: 'Free', m: 'Not included' },
      { k: 'Commitment', a: 'Paid once a year', m: 'Month-to-month. Cancel anytime.' },
    ],
    note: 'Win-back and reactivation go by email, and by text only to customers who agreed to texts.',
  },
};

/** 4.1 Voice demo. Every exchange is written for an example shop. No real booking is made. */
export const voice9 = {
  kicker: 'Try it now',
  title: ['Meet your new front desk.', 'Talk to it right now.'],
  body: 'It\u2019s 11 PM. A customer messages your shop. This is who answers. Ask it what your customers ask. Demo for an example shop. No real booking is made.',
  tryLabel: 'Try saying',
  /** `a` is only shown in the static "Example conversation" (when the live demo is off). The AI never quotes prices and never claims to be human. */
  examples: [
    {
      q: 'How much is ceramic coating for a 2023 X5?',
      a: 'I can\u2019t quote prices, but I can get you an exact quote from the shop. Can you bring the X5 in for a free inspection this week?',
    },
    {
      q: 'Can I bring my car in Saturday morning?',
      a: 'Yes. I can hold 9:00 or 10:30 on Saturday morning for a free inspection. Which works better?',
    },
    {
      q: 'It\u2019s after hours, is anyone there?',
      a: 'I\u2019m the shop\u2019s AI assistant, here day and night. I can answer questions, take your details and book a visit.',
    },
    {
      q: 'I want to talk to the owner.',
      a: 'Of course. I\u2019ll pass your name and number to the owner so they can call you back. What\u2019s the best number?',
    },
  ],
  languages: 'The AI answers in {langs}.',
  demoTag: 'Demo for an example shop',
  exampleTag: 'Example conversation',
  exampleNote: 'Example for an illustration shop. Not a real conversation and no real booking.',
  idle: 'Ready when you are.',
  onCall: 'Listening. Go ahead and ask.',
  afterCall: 'Want this answering for your shop? It\u2019s part of your front office.',
  start: 'Start talking',
  end: 'End call',
  chat: 'Chat instead',
  plans: 'See plans',
  limit: 'Calls are limited to 3 minutes. Please don\u2019t share personal details.',
  fabLive: 'Talk to the front desk demo',
  fabExample: 'See the front desk example',
};

/** 4.2 Owner Command Center. Fictional data only. */
export const sheet9 = {
  kicker: 'The Shop Manager',
  title: ['Your run sheet,', 'written for you.'],
  body: 'Many shops pay someone to type tomorrow\u2019s schedule into a group chat every night. Your system sends it on its own at 6 PM, then hands you your day at 7:30 AM.',
  label: 'Example run sheet',
  sheetTitle: 'Tomorrow\u2019s run sheet',
  sheetSent: 'Sent 6:00 PM',
  sheetFoot: '3 stops tomorrow',
  phone: '(555) 010-xxxx',
  jobs: [
    { time: '8 AM', type: 'Work on', kind: 'work', who: 'Example Customer A', what: '2026 SUV \u00b7 PPF front end + 5-year ceramic' },
    { time: '9 AM', type: 'Redo', kind: 'redo', who: 'Example Customer B', what: 'Sedan \u00b7 Rear windows' },
    { time: '12 PM', type: 'Pickup', kind: 'pickup', who: 'Example Customer C', what: '5-year coating' },
  ],
  cards: [
    { t: '7:30 AM brief', d: 'Your day, before you open.' },
    { t: 'Job card for every booking', d: 'Customer, vehicle and job in one place.' },
    { t: '6 PM run sheet', d: 'Tomorrow\u2019s schedule, sent on its own.' },
    { t: 'One-tap updates', d: 'Quote sent, Accepted, Done, No-show.' },
  ],
};

/** 4.3 Hire comparison. `{from}` is the lowest monthly plan price from config. */
export const hire9 = {
  title: 'A receptionist costs about $3,170 a month. Two offshore assistants cost $1,600 to $4,800.',
  body: 'They still sleep, and calls still get missed. Doing it yourself costs your evenings. Add it up.',
  /** The bill. Wage figures are published rates (see `foot`); the rest is the visitor's own numbers. */
  billTitle: 'Your front office today',
  billTag: 'Every month',
  modeLabel: 'Who does it today?',
  modeSelf: 'I do it myself',
  modeStaff: 'I have staff',
  staffLabel: 'Staff wages',
  staffHint: 'Untick what you don\u2019t have',
  staff: [
    { k: 'A receptionist', cost: 3170 },
    { k: 'Two offshore assistants', cost: 1600 },
  ],
  hoursSelf: 'Your hours a week on admin',
  hoursStaff: 'Your hours a week chasing them',
  /** Example starting value until the visitor changes it. */
  hours: 10,
  /** The owner's own hours are priced at the receptionist median wage, as a conservative figure. */
  hourRate: 18.27,
  hoursUnit: 'About',
  hoursHint: 'hours a month, priced at a receptionist\u2019s wage ($18.27/hr)',
  lostSelf: 'Jobs that slip away while your hands are full',
  lostStaff: 'Jobs that still slip away, even with a team',
  lostHint: 'From your calculator numbers above',
  totalLabel: 'Total, every month',
  totalIncl: 'includes',
  totalHours: 'hours of your time',
  barToday: 'Today: wages + your time + lost jobs',
  barUs: 'CNVRT X',
  xLabel: 'more than the system costs.',
  billNote: 'An estimate: published wage rates plus your own numbers, with example values until you change them. Two offshore assistants are counted at the low end ($1,600). Not a promise of results. A system closes most of the gap, never all of it.',
  foot: 'Receptionist: US median $18.27/hour (BLS, May 2025) \u00d7 2,080 hours, wages only. Offshore assistants: published full-time rates for Philippines-based virtual assistants, $5 to $15/hour. Your local costs may differ. The AI hands anything complex to you.',
  close: 'Let your people do the work only people can do.',
};

/** "A day in your shop, before and after" (Playbook 3). `plan` says which plan does the "after". */
export const day9 = {
  kicker: 'Your day',
  title: ['A day in your shop,', 'before and after.'],
  lead: 'The front office your shop never had to hire. You just work on cars.',
  colBefore: 'Today',
  colAfter: 'With CNVRT X',
  rows: [
    { time: '7:30 AM', before: 'You scroll texts and DMs to work out your day.', after: 'One email with today\u2019s jobs and who\u2019s waiting.' },
    { time: '10:15 AM', before: 'The phone rings while you\u2019re under a car.', after: 'The call is caught. A job card lands on your phone.' },
    { time: '4:00 PM', before: 'Yesterday\u2019s quote went quiet, and you forgot.', after: 'Polite follow-ups go out until they book or say no.' },
    { time: '6:00 PM', before: 'Tomorrow\u2019s customer hasn\u2019t confirmed.', after: 'They get \u201cReply YES or MOVE\u201d. Tomorrow\u2019s run sheet is on your phone.' },
    { time: '11:00 PM', before: 'An Instagram DM waits until morning.', after: 'Your AI front desk answers and books the free inspection.' },
  ],
  close: 'Same shop. Same cars. A different evening.',
  note: 'An example day. Texts go only to people who agreed to them, after carrier approval.',
};

/**
 * Free Booking Leak Audit: the offer for a visitor who is not ready to buy. It opens after
 * the exit popup is closed, from the footer and from the link under the price cards.
 * No timeframe is promised here on purpose. Add one only when it can be kept.
 */
export const audit9 = {
  eyebrow: 'Free. No sales call.',
  title: 'Free Booking Leak Audit',
  line: 'Find the 3 places your shop is most likely losing booked jobs.',
  gets: ['Your Booking Leak Score', 'Where replies, quotes, bookings and reviews slip', 'Your top 3 fixes, in order'],
  how: 'We look at what a customer can see from outside. No login needed. We send it to your email.',
  fields: {
    business: 'Business name',
    site: 'Website or Google profile link',
    service: 'Primary service',
    email: 'Email',
    phone: 'Phone',
    inquiries: 'About how many inquiries a month? (optional)',
  },
  /** Ticked for the visitor when they came from "Email me my numbers". */
  numbers: 'Also email me my calculator numbers',
  submit: 'Send My Free Audit',
  consent: 'By sending this you agree that CNVRT X may contact you about your audit by email or phone.',
  sent: { title: 'Request received.', body: 'We will send your Booking Leak Audit to your email.' },
  error: 'We could not send this right now. Please try again in a moment.',
  /** Shown where the audit is offered on the page. */
  link: 'Not ready to buy? Get a free Booking Leak Audit',
  footerLink: 'Free Booking Leak Audit',
  preview: 'Preview: this form is not connected yet, so it is left off the live site.',
};

/** Under the calculator: a quiet link that opens the free audit form, so there is one form, not two. */
export const numbers9 = {
  label: 'Email me my numbers',
  note: 'Not ready yet? Get them with a free Booking Leak Audit.',
};

/** "Who's behind CNVRT X". The details come from offerV9.about and offerV9.contact. */
export const about9 = {
  kicker: 'Who you are buying from',
  title: ['Who\u2019s behind', 'CNVRT X.'],
  videoLabel: 'See the real screens',
  videoNote: 'A short walkthrough of the owner app, the inbox and the run sheet.',
  storyLabel: 'Running today',
  contactLabel: 'Reach us',
  preview: 'Preview: this section stays off the live site until real details are added in src/config/offerV9.ts (about and contact).',
  missing: {
    founder: 'Founder name, role, photo and a few lines about them',
    video: '60 to 90 second walkthrough video of the real screens',
    story: 'The shop story, once its owner agrees',
    contact: 'Email, phone and address',
  },
};

/**
 * Waitlist for other trades. The site is auto-first: one offer built for one industry.
 * A visitor from another trade leaves their trade and email. No date is promised.
 */
export const waitlist9 = {
  eyebrow: 'Not an auto shop?',
  title: 'Join the waitlist for your trade.',
  line: 'CNVRT X Front Office is built for auto shops first. Tell us your trade and we will email you when your version is ready.',
  fields: { trade: 'Your trade', business: 'Business name (optional)', email: 'Email' },
  trades: ['Roofing', 'HVAC', 'Plumbing', 'Landscaping', 'Electrical', 'Cleaning'],
  submit: 'Join the Waitlist',
  note: 'One email when your trade is ready. Nothing else.',
  sent: { title: 'You are on the list.', body: 'We will email you when the version for your trade is ready.' },
  error: 'We could not send this right now. Please try again in a moment.',
  footerLink: 'Not an auto shop? Join the waitlist',
  preview: 'Preview: this form is not connected yet, so it is left off the live site.',
};

/**
 * The checkout page (offerV9.checkoutPath). One job: take the payment. No menu, no other offers.
 * `{annual}`, `{monthly}`, `{kit}`, `{offerKit}`, `{site}` and `{hours}` are filled from config.
 */
export const checkout9 = {
  secure: 'Secure checkout',
  back: 'Back to the site',
  title: ['Start your front office.', `${guarantee9.short}.`],
  sub: 'Pick how you pay. Then about 10-15 minutes of setup questions in your account, and we build.',
  switchLabel: 'Billing',
  annual: {
    name: 'Annual',
    tag: 'Best value',
    price: '{annual}',
    per: '/yr',
    lines: ['Launch Kit waived. You save {kit}.', 'Two months included: pay 10, get 12.', 'Full website included ({site} on monthly).'],
    dueLabel: 'Due today',
    due: '{annual}',
  },
  monthly: {
    name: 'Monthly',
    price: '{monthly}',
    per: '/mo',
    lines: ['Month-to-month. Cancel anytime.', 'One-time Launch Kit: {kit}.'],
    offerLine: 'One-time Launch Kit: {offerKit}, not {kit}.',
    offerTag: 'Leaving offer applied',
    dueLabel: 'Due today',
    dueNote: 'First month plus the one-time Launch Kit. Then {monthly} a month.',
  },
  includesTitle: 'In your plan',
  includes: ['The Receptionist: missed calls caught, new leads answered', 'The Service Advisor: quotes followed up, bookings confirmed, reviews asked for', 'The Shop Manager: your daily brief, run sheet and ad results'],
  nextTitle: 'What happens next',
  /** What happens after you pay: the same three steps the thank-you page gives. */
  next: SETUP_STEPS,
  promises: [guarantee9.short, 'No sales call', 'Your domain, content and customer list stay yours'],
  payTitle: 'Your details',
  /** The reserve form on this page: the same fields and the same webhook as the one on the sales page. */
  form: {
    note: 'We save your details first, then open secure payment.',
    firstName: 'First name',
    business: 'Shop name',
    email: 'Email',
    phone: 'Phone',
    smsLegend: 'Text messages (optional)',
    submit: 'Continue to secure payment',
    submitClosed: 'Reserve My Build',
    sending: 'Sending\u2026',
    error: 'Something went wrong. Please try again.',
    closed: { title: 'Details received.', body: 'Online checkout is being switched on. Your join link arrives by email.' },
    required: 'Please fill this in.',
  },
  /** Shown when the order page opens on its own (offerV9.checkoutEmbed is false). */
  payCta: 'Continue',
  payNote: 'Next: your name and email, then secure payment. After that, setup takes about 10-15 minutes in your account.',
  /** Shown in the payment panel until the order form link is set in config. */
  notOpen: {
    title: 'Checkout is being connected.',
    body: 'Card payment opens on this page shortly. Nothing has been charged.',
  },
  preview: 'Preview: no order form link is set yet. Add the GHL order form links in src/config/offerV9.ts (checkout, and exitOffer.checkout for the leaving offer).',
  fine: 'Annual payments are not refundable. Texting carrier fees are passed on at cost and shown to you before activation.',
};
