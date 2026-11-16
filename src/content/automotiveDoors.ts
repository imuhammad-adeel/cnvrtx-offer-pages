/**
 * "Front door" landing pages for /<slug>.
 * One problem, one hook, one page. Every door leads to the SAME offer as the main page
 * (one plan, monthly or annual). Design, pricing and guarantees come from the v9 components.
 *
 * WRITING RULES (same as v9)
 * - No em dashes or en dashes. Short plain sentences.
 * - No invented statistics, ratings, testimonials or customer results.
 * - Every example thread is fictional and labelled "Example".
 * - `{price}` is filled from src/config/offerV9.ts.
 * - `highlight` must use the system names from plans9.roles[].systems.
 */

export type DoorMsg = { from: 'them' | 'us' | 'sys'; t: string };

export type Door = {
  slug: string;
  /** Short label for lists and analytics. */
  label: string;
  /** The same page named as an outcome, for the main page's Outcomes menu. */
  outcome: string;
  /** The system (or idea) this page sells first. */
  system: string;
  seoTitle: string;
  description: string;
  headline: [string, string];
  sub: string;
  problem: {
    kicker: string;
    title: [string, string];
    moments: { t: string; d: string }[];
  };
  fix: {
    title: string;
    steps: { t: string; d: string }[];
    exampleLabel: string;
    thread: DoorMsg[];
  };
  hook: string[];
  /** Calculator wording. null keeps the v9 wording (missed calls and messages). */
  math: null | {
    title: string;
    s1: string;
    s2: string;
    s3: string;
    s4: string;
    defaults: { missed: number; value: number; oneIn: number };
  };
  /** Calculator title when `math` is null. */
  mathTitle?: string;
  /** Systems to light up in the "one of nine" grid. Empty = none singled out. */
  highlight: string[];
  systemsTitle: [string, string];
  /**
   * How this page is laid out, so no two pages look alike below the hero.
   * problem / changes / systems pick one of three layouts for that section;
   * order moves the "What changes" section: 1 = after the cost, 2 = before the cost, 3 = after the systems.
   */
  layout: { problem: 'a' | 'b' | 'c'; changes: 'a' | 'b' | 'c'; systems: 'a' | 'b' | 'c'; order: 1 | 2 | 3 };
  /** Which animated example the second section shows (see DoorViz.astro). One per page. */
  viz: 'call' | 'timer' | 'night' | 'board' | 'followup' | 'calendar' | 'reviews' | 'shift' | 'funnel' | 'months' | 'sheet' | 'site';
  /** Where the voice demo sits: right after the problem, or just before pricing. */
  demo: 'top' | 'bottom';
  /** Show the "A day in your shop" section. */
  day: boolean;
  /** Show the "Who does the work?" bill. */
  work: boolean;
  /** Trial: show the three roles as three gears above the price cards (see Gears.astro). */
  gears?: boolean;
  /** Talking-website page only: the example portfolio and the website pricing explainer. */
  website?: boolean;
};

const runSheet: DoorMsg[] = [
  { from: 'sys', t: 'Tomorrow’s run sheet · 6:00 PM' },
  { from: 'us', t: '8 AM · Example Customer A · PPF front end' },
  { from: 'us', t: '9 AM · Example Customer B · Rear windows' },
  { from: 'us', t: '12 PM · Pickup · Example Customer C' },
];

export const doors: Door[] = [
  {
    slug: 'missed-calls',
    layout: { problem: 'a', changes: 'a', systems: 'a', order: 1 },
    viz: 'call',
    gears: true,
    label: 'Missed calls',
    outcome: 'Every missed call rescued',
    system: 'Missed-Call Rescue',
    seoTitle: 'Missed-Call Text Back for Auto Shops',
    description: 'You can’t pick up with a polisher in your hand. Missed-Call Rescue texts the caller back for you and puts a job card on your phone.',
    headline: ['Under a Car When It Rings?', 'That Job Is Still Yours.'],
    sub: 'You can’t pick up with a polisher in your hand. The caller tries the next shop. Missed-Call Rescue texts them back for you and puts a job card on your phone.',
    problem: {
      kicker: 'The missed call',
      title: ['The phone rings.', 'Your hands are full.'],
      moments: [
        { t: '10:15 AM', d: 'A ceramic coating inquiry calls while you are mid-polish.' },
        { t: '10:16 AM', d: 'No answer. No voicemail. They search for the next shop.' },
        { t: '6:30 PM', d: 'You see the missed call. They already booked elsewhere.' },
      ],
    },
    fix: {
      title: 'How Missed-Call Rescue works',
      steps: [
        { t: 'They get a text back', d: 'A friendly message goes out, so the lead stays with you.' },
        { t: 'A job card lands on your phone', d: 'Who called, when, and what they asked for.' },
        { t: 'You call back when your hands are free', d: 'Or your AI front desk picks up the conversation.' },
      ],
      exampleLabel: 'Example text back',
      thread: [
        { from: 'sys', t: 'Missed call · 10:15 AM' },
        { from: 'us', t: 'Sorry we missed you. This is Example Shop. What can we help with?' },
        { from: 'them', t: 'Looking for a ceramic coating quote on my truck.' },
        { from: 'us', t: 'Happy to help. Want to book a free inspection this week?' },
      ],
    },
    hook: ['A missed call', 'does not wait.', 'It calls the next shop.'],
    math: null,
    mathTitle: 'What are missed calls costing you?',
    highlight: ['Missed-Call Rescue'],
    systemsTitle: ['Missed-Call Rescue is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'slow-lead-reply',
    layout: { problem: 'b', changes: 'b', systems: 'c', order: 2 },
    viz: 'timer',
    label: 'Slow lead reply',
    outcome: 'Leads answered first',
    system: '60-Second Lead Response',
    seoTitle: 'Answer Web and Ad Leads First',
    description: 'A lead that waits until tonight has already heard from another shop. 60-Second Lead Response replies for you and tells you who to call now.',
    headline: ['Leads Go Cold in Minutes.', 'Answer Them First.'],
    sub: 'A form or ad lead that waits until tonight has already heard from another shop. 60-Second Lead Response replies for you and tells you who to call now.',
    problem: {
      kicker: 'The slow reply',
      title: ['They asked at noon.', 'You replied at night.'],
      moments: [
        { t: '12:05 PM', d: 'A Facebook lead asks about window tint.' },
        { t: '12:10 PM', d: 'They message two more shops while they wait.' },
        { t: '8:40 PM', d: 'You reply. They booked the shop that answered first.' },
      ],
    },
    fix: {
      title: 'How 60-Second Lead Response works',
      steps: [
        { t: 'A reply goes out right away', d: 'Website, Facebook and Instagram leads get a first answer.' },
        { t: 'You get a “call now” alert', d: 'If a new lead has not replied, your phone tells you.' },
        { t: 'It all lands in one inbox', d: 'Calls, texts, chat and DMs in one place, on your phone.' },
      ],
      exampleLabel: 'Example first reply',
      thread: [
        { from: 'sys', t: 'New Facebook lead · 12:05 PM' },
        { from: 'us', t: 'Thanks for reaching out to Example Shop. What vehicle is the tint for?' },
        { from: 'them', t: '2022 Tacoma, all windows.' },
        { from: 'sys', t: 'Call now: this lead is waiting.' },
      ],
    },
    hook: ['The best shop in town', 'still loses to the one', 'that answers first.'],
    math: {
      title: 'What are slow replies costing you?',
      s1: 'My shop gets about',
      s2: 'web and ad leads a week that wait hours for a reply. An average job is worth',
      s3: 'If we answered first, about',
      s4: 'would book.',
      defaults: { missed: 8, value: 350, oneIn: 3 },
    },
    highlight: ['60-Second Lead Response'],
    systemsTitle: ['60-Second Lead Response is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'ai-receptionist',
    layout: { problem: 'c', changes: 'c', systems: 'b', order: 1 },
    viz: 'night',
    label: 'AI receptionist',
    outcome: 'A front desk awake at 11 PM',
    system: '24/7 AI Front Desk',
    seoTitle: 'AI Receptionist for Auto Shops',
    description: 'Customers ask after hours, on weekends and while you are under a car. Your AI front desk answers, takes their details and books the free inspection.',
    headline: ['They Message at 11 PM.', 'Your Front Desk Is Awake.'],
    sub: 'Customers ask after hours, on weekends and while you are under a car. Your AI front desk answers, takes their details and books the free inspection.',
    problem: {
      kicker: 'After hours',
      title: ['After hours,', 'nobody answers.'],
      moments: [
        { t: '11:02 PM', d: 'An Instagram DM asks about PPF for a new car.' },
        { t: 'All night', d: 'It sits unread. They keep scrolling.' },
        { t: '9:00 AM', d: 'You reply. They have moved on.' },
      ],
    },
    fix: {
      title: 'How your AI front desk works',
      steps: [
        { t: 'It answers day and night', d: 'Calls, website chat, Facebook and Instagram.' },
        { t: 'It knows your shop', d: 'It answers from information you approve.' },
        { t: 'It hands off to you', d: 'It never quotes prices, says it is an AI if asked, and passes anything complex to you.' },
      ],
      exampleLabel: 'Example conversation',
      thread: [
        { from: 'them', t: 'Is anyone there? I need PPF on a new Model Y.' },
        { from: 'us', t: 'Yes. I am the shop’s AI assistant. I can book you a free inspection. Which day works?' },
        { from: 'them', t: 'Saturday morning.' },
        { from: 'us', t: 'Done. You are booked for Saturday at 9:00.' },
      ],
    },
    hook: ['Your customers', 'do not keep', 'shop hours.'],
    math: null,
    mathTitle: 'What is after-hours silence costing you?',
    highlight: ['24/7 AI Front Desk'],
    systemsTitle: ['The AI front desk is one of nine.', 'You get all nine.'],
    demo: 'top',
    day: false,
    work: false,
  },
  {
    slug: 'ai-employee',
    layout: { problem: 'b', changes: 'a', systems: 'c', order: 3 },
    viz: 'board',
    label: 'AI employee',
    outcome: 'An AI employee on the team',
    system: 'Your AI employee',
    seoTitle: 'An AI Employee for Your Auto Shop',
    description: 'It answers leads, follows up on quotes, confirms bookings and asks for reviews. Built, written and tested for your shop.',
    headline: ['Hire an AI Employee.', 'It Never Calls in Sick.'],
    sub: 'It answers leads, follows up on quotes, confirms bookings and asks for reviews. Built, written and tested for your shop. {price} a month, not a salary.',
    problem: {
      kicker: 'The work behind the work',
      title: ['The work piles up', 'after the cars are done.'],
      moments: [
        { t: 'Calls', d: 'Missed while you work.' },
        { t: 'Quotes', d: 'Sent, then forgotten.' },
        { t: 'Tomorrow', d: 'Nobody confirmed the booking.' },
      ],
    },
    fix: {
      title: 'One employee, three roles',
      steps: [
        { t: 'The Receptionist', d: 'Answers every call, form and DM.' },
        { t: 'The Service Advisor', d: 'Follows up, confirms and asks for the review.' },
        { t: 'The Shop Manager', d: 'Hands you your day and your numbers.' },
      ],
      exampleLabel: 'Example day, done for you',
      thread: [
        { from: 'sys', t: 'Today · example numbers' },
        { from: 'us', t: 'Texted back 3 missed calls' },
        { from: 'us', t: 'Followed up on 4 quotes' },
        { from: 'us', t: 'Confirmed tomorrow’s 5 bookings' },
      ],
    },
    hook: ['Three roles.', 'One employee.', 'No sick days.'],
    math: null,
    mathTitle: 'What is the unanswered work costing you?',
    highlight: [],
    systemsTitle: ['One AI employee.', 'Three roles. Nine systems.'],
    demo: 'top',
    day: false,
    work: true,
  },
  {
    slug: 'quote-follow-up',
    layout: { problem: 'c', changes: 'b', systems: 'a', order: 3 },
    viz: 'followup',
    label: 'Quote follow-up',
    outcome: 'Every quote followed up',
    system: 'Follow-Up Until They Book',
    seoTitle: 'Quote Follow-Up for Ceramic, PPF, Tint and Wraps',
    description: 'A quiet quote is not a no. Follow-Up Until They Book checks in politely until it is a yes or a no.',
    headline: ['They Asked for a Price.', 'Then Went Quiet.'],
    sub: 'A quiet quote is not a no. It is a job nobody followed up on. Follow-Up Until They Book checks in politely until it is a yes or a no.',
    problem: {
      kicker: 'The cold quote',
      title: ['The quote went out.', 'Nothing came back.'],
      moments: [
        { t: 'Monday', d: 'You send a ceramic coating quote.' },
        { t: 'Wednesday', d: 'No reply. You are busy. It slips.' },
        { t: 'Next week', d: 'They booked a shop that checked in.' },
      ],
    },
    fix: {
      title: 'How Follow-Up Until They Book works',
      steps: [
        { t: 'A friendly check-in', d: 'Sent for you a couple of days after the quote.' },
        { t: 'Text, email and call reminders', d: 'Polite, and written in your shop’s voice.' },
        { t: 'It stops when they reply', d: 'A yes books the job. A no closes the loop.' },
      ],
      exampleLabel: 'Example follow-up',
      thread: [
        { from: 'sys', t: 'Quote sent · Day 0' },
        { from: 'us', t: 'Hi, checking in on your ceramic quote. Any questions I can answer?' },
        { from: 'them', t: 'Yes, can I come in Friday?' },
        { from: 'sys', t: 'Follow-up stopped. Customer replied.' },
      ],
    },
    hook: ['A quiet quote', 'is not a no.', 'It is a job nobody chased.'],
    math: {
      title: 'What are quiet quotes costing you?',
      s1: 'About',
      s2: 'quotes a week go quiet at my shop. An average job is worth',
      s3: 'If each one got followed up, about',
      s4: 'would book.',
      defaults: { missed: 5, value: 600, oneIn: 4 },
    },
    highlight: ['Follow-Up Until They Book'],
    systemsTitle: ['Follow-Up Until They Book is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'no-shows',
    layout: { problem: 'a', changes: 'c', systems: 'b', order: 2 },
    viz: 'calendar',
    label: 'No-shows',
    outcome: 'Every booking confirmed',
    system: 'No-Show Shield',
    seoTitle: 'Stop No-Shows at Your Auto Shop',
    description: 'You blocked the bay and nobody came. No-Show Shield confirms every booking, reminds the customer and lets them move it in one reply.',
    headline: ['An Empty Bay Costs You', 'a Day’s Pay.'],
    sub: 'You blocked the bay, cleared the day, and nobody came. No-Show Shield confirms every booking, reminds the customer and lets them move it in one reply.',
    problem: {
      kicker: 'The no-show',
      title: ['The bay is ready.', 'The customer is not coming.'],
      moments: [
        { t: 'Friday', d: 'A full detail is booked for Monday at 8 AM.' },
        { t: 'Monday 8:00', d: 'The bay is empty. No call. No text.' },
        { t: 'Monday 8:30', d: 'Half a day of work is gone.' },
      ],
    },
    fix: {
      title: 'How No-Show Shield works',
      steps: [
        { t: 'Confirmation', d: 'Sent the moment they book.' },
        { t: '“Reply YES or MOVE”', d: 'The day before, so you know who is coming.' },
        { t: 'Reminders and no-show rescue', d: 'A missed slot gets an offer to rebook.' },
      ],
      exampleLabel: 'Example reminder',
      thread: [
        { from: 'us', t: 'You are booked for Monday 8:00 AM at Example Shop.' },
        { from: 'us', t: 'See you tomorrow at 8:00. Reply YES to confirm or MOVE to change.' },
        { from: 'them', t: 'YES' },
        { from: 'sys', t: 'Confirmed for tomorrow.' },
      ],
    },
    hook: ['A reminder costs nothing.', 'An empty bay', 'costs the morning.'],
    math: {
      title: 'What are no-shows costing you?',
      s1: 'My shop gets about',
      s2: 'no-shows a week. An average job is worth',
      s3: 'With a confirmation and reminders, about',
      s4: 'would have shown up.',
      defaults: { missed: 3, value: 500, oneIn: 2 },
    },
    highlight: ['No-Show Shield'],
    systemsTitle: ['No-Show Shield is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'reviews',
    layout: { problem: 'b', changes: 'c', systems: 'a', order: 1 },
    viz: 'reviews',
    label: 'Reviews',
    outcome: 'Every customer asked for a review',
    system: '5-Star Review Machine',
    seoTitle: 'Get More Reviews for Your Auto Shop',
    description: 'Happy customers drive off and forget. The 5-Star Review Machine asks every customer for you, with two gentle reminders.',
    headline: ['They Loved the Job.', 'Nobody Asked for a Review.'],
    sub: 'Happy customers drive off and forget. The 5-Star Review Machine asks every customer for you, with two gentle reminders.',
    problem: {
      kicker: 'The missing review',
      title: ['Great work.', 'No one hears about it.'],
      moments: [
        { t: 'Pickup', d: 'The customer is thrilled with the finish.' },
        { t: 'That night', d: 'You meant to ask for a review. You forgot.' },
        { t: 'Next month', d: 'A new customer picks the shop with more recent reviews.' },
      ],
    },
    fix: {
      title: 'How the 5-Star Review Machine works',
      steps: [
        { t: 'Every customer is asked', d: 'A review request goes out after the job.' },
        { t: 'Two gentle reminders', d: 'Only if they have not left one yet.' },
        { t: 'A video-testimonial link', d: 'For customers who want to say more.' },
      ],
      exampleLabel: 'Example review request',
      thread: [
        { from: 'us', t: 'Thanks for coming in today. How did we do? Tap to leave a review.' },
        { from: 'sys', t: 'Reminder sent · Day 3' },
        { from: 'them', t: 'Done. Left you a review.' },
      ],
    },
    hook: ['Your best marketing', 'just drove off', 'without being asked.'],
    math: null,
    mathTitle: 'And what are missed calls costing you?',
    highlight: ['5-Star Review Machine'],
    systemsTitle: ['The 5-Star Review Machine is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'front-office',
    layout: { problem: 'c', changes: 'a', systems: 'c', order: 2 },
    viz: 'shift',
    label: 'Zero-hire front office',
    outcome: 'A front desk without the hire',
    system: 'CNVRT X Front Office',
    seoTitle: 'A Front Desk for Your Shop, Without the Hire',
    description: 'A receptionist costs about $3,170 a month and still goes home at five. CNVRT X answers, follows up and confirms around the clock.',
    headline: ['You Don’t Need a Hire.', 'You Need a Front Desk.'],
    sub: 'A receptionist costs about $3,170 a month and still goes home at five. CNVRT X answers, follows up and confirms around the clock for {price} a month.',
    problem: {
      kicker: 'The job nobody hired for',
      title: ['The front desk job', 'is yours by default.'],
      moments: [
        { t: 'All day', d: 'You answer between cars, or not at all.' },
        { t: 'After closing', d: 'You do the follow-ups and tomorrow’s schedule.' },
        { t: 'Hiring', d: 'A wage, training, sick days, and you still check their work.' },
      ],
    },
    fix: {
      title: 'What your front office does',
      steps: [
        { t: 'Answers', d: 'Every call, form and DM, day and night.' },
        { t: 'Follows up and confirms', d: 'Quotes chased, bookings confirmed, reviews asked for.' },
        { t: 'Reports to you', d: 'Your day at 7:30 AM. Tomorrow’s run sheet at 6 PM.' },
      ],
      exampleLabel: 'Example day',
      thread: [],
    },
    hook: ['You opened a shop', 'to work on cars.', 'Not to work the phone.'],
    math: null,
    mathTitle: 'What is the empty front desk costing you?',
    highlight: [],
    systemsTitle: ['One front office.', 'Three roles. Nine systems.'],
    demo: 'bottom',
    day: true,
    work: true,
  },
  {
    slug: 'ad-results',
    layout: { problem: 'a', changes: 'b', systems: 'b', order: 3 },
    viz: 'funnel',
    label: 'Ad results',
    outcome: 'Ads you can measure',
    system: 'Ad Results Tracker',
    seoTitle: 'See Which Facebook and Instagram Ads Book Jobs',
    description: 'Leads are not jobs. Ad Results Tracker follows your Facebook and Instagram leads to booked and paid jobs.',
    headline: ['Stop Guessing', 'Which Ads Pay.'],
    sub: 'Leads are not jobs. Ad Results Tracker follows your Facebook and Instagram leads to booked and paid jobs, so you see what the ads actually brought in.',
    problem: {
      kicker: 'The ad guess',
      title: ['The ads are running.', 'Are they working?'],
      moments: [
        { t: 'This month', d: 'You spend on Facebook and Instagram ads.' },
        { t: 'The report', d: 'It shows clicks and leads. Not jobs.' },
        { t: 'Next month', d: 'You guess again.' },
      ],
    },
    fix: {
      title: 'How Ad Results Tracker works',
      steps: [
        { t: 'Every ad lead is followed', d: 'From the first message to the booked job.' },
        { t: 'Booked and paid jobs are counted', d: 'So you see which ads brought real work.' },
        { t: 'Results go back to Meta', d: 'So it can find more customers like the ones who paid.' },
      ],
      exampleLabel: 'Example Monday report',
      thread: [
        { from: 'sys', t: 'Monday report · example numbers' },
        { from: 'us', t: 'Ad leads: 18' },
        { from: 'us', t: 'Booked: 7' },
        { from: 'us', t: 'Paid jobs: 5' },
      ],
    },
    hook: ['A lead is not a job.', 'Count the ones', 'that paid.'],
    math: null,
    mathTitle: 'And what are missed calls costing you?',
    highlight: ['Ad Results Tracker'],
    systemsTitle: ['Ad Results Tracker is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'repeat-customers',
    layout: { problem: 'c', changes: 'a', systems: 'b', order: 1 },
    viz: 'months',
    label: 'Repeat customers',
    outcome: 'Customers invited back',
    system: 'Repeat & Referral Engine',
    seoTitle: 'Bring Past Customers Back to Your Auto Shop',
    description: 'You already earned this customer once. The Repeat & Referral Engine checks in, asks for referrals and invites them back.',
    headline: ['Great Job. One Visit.', 'Bring Them Back.'],
    sub: 'You already earned this customer once. The Repeat & Referral Engine checks in, asks for referrals and invites them back when it has been a while.',
    problem: {
      kicker: 'The one-time customer',
      title: ['They were happy.', 'They never came back.'],
      moments: [
        { t: 'Spring', d: 'A full detail and a happy customer.' },
        { t: 'Summer', d: 'No check-in. No reminder. No referral ask.' },
        { t: 'Fall', d: 'They try the shop that sent them an offer.' },
      ],
    },
    fix: {
      title: 'How the Repeat & Referral Engine works',
      steps: [
        { t: 'Service history', d: 'Who came in, for what, and when.' },
        { t: 'Check-ins and referral asks', d: 'Sent for you after the job.' },
        { t: 'Win-back campaigns', d: 'An invitation back when it has been a while.' },
      ],
      exampleLabel: 'Example win-back message',
      thread: [
        { from: 'us', t: 'Hi, it has been 6 months since your detail at Example Shop. Ready for a refresh?' },
        { from: 'them', t: 'Yes. What do you have next week?' },
        { from: 'sys', t: 'Booked from a win-back message.' },
      ],
    },
    hook: ['You paid to win them once.', 'Do not pay', 'to win them again.'],
    math: {
      title: 'What are one-time customers costing you?',
      s1: 'About',
      s2: 'past customers a week are due for a visit and hear nothing. An average visit is worth',
      s3: 'If we invited them back, about',
      s4: 'would book.',
      defaults: { missed: 10, value: 350, oneIn: 4 },
    },
    highlight: ['Repeat & Referral Engine'],
    systemsTitle: ['The Repeat & Referral Engine is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: false,
    work: false,
  },
  {
    slug: 'run-sheet',
    layout: { problem: 'a', changes: 'c', systems: 'c', order: 3 },
    viz: 'sheet',
    label: 'Run sheet',
    outcome: 'A run sheet that writes itself',
    system: 'Owner Command Center',
    seoTitle: 'Your Shop’s Run Sheet, Written for You',
    description: 'Someone types tomorrow’s schedule into a group chat every night. Owner Command Center sends it on its own at 6 PM.',
    headline: ['Stop Typing Tomorrow’s', 'Run Sheet.'],
    sub: 'Someone types tomorrow’s schedule into a group chat every night. Owner Command Center sends it on its own at 6 PM and hands you your day at 7:30 AM.',
    problem: {
      kicker: 'The nightly typing',
      title: ['Every night,', 'the same typing.'],
      moments: [
        { t: '5:45 PM', d: 'Someone scrolls the day’s messages to build tomorrow’s list.' },
        { t: '6:30 PM', d: 'It goes into the group chat. One job is missing.' },
        { t: '7:30 AM', d: 'You scroll texts to work out your day.' },
      ],
    },
    fix: {
      title: 'How Owner Command Center works',
      steps: [
        { t: '6 PM run sheet', d: 'Tomorrow’s jobs, sent on their own.' },
        { t: '7:30 AM brief', d: 'Today’s jobs, who is waiting, what is unfinished.' },
        { t: 'One-tap updates', d: 'Quote sent, Accepted, Done, No-show.' },
      ],
      exampleLabel: 'Example run sheet',
      thread: runSheet,
    },
    hook: ['Your schedule', 'should write itself.'],
    math: null,
    mathTitle: 'And what are missed calls costing you?',
    highlight: ['Owner Command Center'],
    systemsTitle: ['Owner Command Center is one of nine.', 'You get all nine.'],
    demo: 'bottom',
    day: true,
    work: false,
  },
  {
    slug: 'talking-website',
    layout: { problem: 'b', changes: 'a', systems: 'b', order: 1 },
    viz: 'site',
    label: 'Talking website',
    outcome: 'A website that talks',
    system: 'Talking website',
    seoTitle: 'A Talking Website for Your Auto Shop',
    description: 'A normal website waits to be read. Yours answers questions out loud, in real time, and books the free inspection while you work.',
    headline: ['Your Website Should', 'Answer Back.'],
    sub: 'A normal website waits to be read. Yours answers questions out loud, in real time, and books the free inspection while you work. Built for you, not by you.',
    problem: {
      kicker: 'The silent website',
      title: ['Visitors have questions.', 'Your site has a form.'],
      moments: [
        { t: 'They land', d: 'A visitor wants to know if you coat Teslas.' },
        { t: '30 seconds', d: 'No one to ask. They leave to call a shop that answers.' },
        { t: 'Tonight', d: 'You find a contact form with no phone number on it.' },
      ],
    },
    fix: {
      title: 'How a talking website works',
      steps: [
        { t: 'It talks', d: 'Visitors ask out loud or by chat and get an answer in real time.' },
        { t: 'It books', d: 'Every page is built to turn a visitor into a call or a booked inspection.' },
        { t: 'It is built for you', d: 'Design, writing and setup done for your shop. You do not touch a page builder.' },
      ],
      exampleLabel: 'Example conversation',
      thread: [
        { from: 'them', t: 'Do you do ceramic coating on Teslas?' },
        { from: 'us', t: 'We do. I am the shop\u2019s AI assistant. Want me to book a free inspection?' },
        { from: 'them', t: 'Yes, Thursday afternoon.' },
        { from: 'us', t: 'Done. You are booked for Thursday at 2:00.' },
      ],
    },
    hook: ['A website that only sits there', 'is a brochure.', 'Yours should answer.'],
    math: {
      title: 'What is a silent website costing you?',
      s1: 'About',
      s2: 'website visitors a week leave my site without calling or booking. An average job is worth',
      s3: 'If the site answered them, about',
      s4: 'would book.',
      defaults: { missed: 10, value: 350, oneIn: 5 },
    },
    highlight: ['24/7 AI Front Desk'],
    systemsTitle: ['The website is the front door.', 'The front office is behind it.'],
    demo: 'top',
    day: false,
    work: false,
    website: true,
  },
];

/** Example portfolio for the talking-website page. Replace `image` (a file under /public) and `url` with real client sites; a tile with an image is no longer labelled as an example. */
export const portfolio = {
  kicker: 'What yours can look like',
  title: ['Built to book.', 'Not to sit there.'],
  lead: 'Every site is designed around one thing: getting the visitor to call, talk or book.',
  exampleTag: 'Example design',
  items: [
    { name: 'Example Detail Studio', kind: 'Detailing and ceramic coating', domain: 'exampledetail.com', line: 'Showroom finish, booked in a few taps.', theme: 'night', image: '', url: '' },
    { name: 'Example Tint & PPF', kind: 'Window tint and paint protection', domain: 'exampletint.com', line: 'Protect it before the first rock chip.', theme: 'pearl', image: '', url: '' },
    { name: 'Example Wheels & Fitment', kind: 'Wheels, tires and aftermarket', domain: 'examplefitment.com', line: 'The right stance, fitted right.', theme: 'signal', image: '', url: '' },
  ],
  marks: ['Talks to visitors in real time', 'Booking on every page', 'Fast on a phone', 'Written for your services'],
  note: 'Example designs for illustration. They are not real shops.',
};

/** How the website is paid for. `{site}`, `{monthly}`, `{annual}`, `{kit}` and `{saved}` come from config. */
export const siteOffer = {
  kicker: 'The price, plainly',
  title: ['Pay for the website once.', 'Or not at all.'],
  tiles: [
    { k: 'The website', v: '{site}', per: 'one-time', d: 'Designed, written and built to book calls. It talks to your visitors in real time.', best: false },
    { k: 'Hosting and your front office', v: '{monthly}', per: 'a month', d: 'Hosts the site and runs all three roles behind it. A one-time {kit} Launch Kit applies on monthly.', best: false },
    { k: 'Go annual', v: '{annual}', per: 'a year', d: 'The website is free, the Launch Kit is waived and two months are included.', best: true },
  ],
  sum: 'Annual saves you {saved} in the first year, and the website costs nothing.',
  cta: 'See the plan',
};

/** The three roles as three gears (trial on one page). Order matches plans9.roles. */
export const gears = {
  title: 'Three gears. One plan.',
  sub: 'You get all three. Tap a gear to see what it does.',
  neutral: 'Neutral',
  items: [
    { gear: 'First Gear', line: 'Get moving: every call, form and DM answered.' },
    { gear: 'Overdrive', line: 'Pick up speed: leads followed up, booked and confirmed.' },
    { gear: 'Full Throttle', line: 'Flat out: the shop runs from your phone.' },
  ],
};

/** Line icons for the main page's Outcomes menu, keyed by door slug (24x24, stroked). */
export const doorIcons: Record<string, string> = {
  'missed-calls': '<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/><path d="m15 4 5 5M20 4l-5 5"/>',
  'slow-lead-reply': '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  'ai-receptionist': '<path d="M20 14.500A8 8 0 1 1 9.500 4a6.500 6.500 0 0 0 10.500 10.500z"/>',
  'ai-employee': '<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V5M9 13v2M15 13v2M2 13v2M22 13v2"/><circle cx="12" cy="4" r="1"/>',
  'quote-follow-up': '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  'no-shows': '<rect x="3.500" y="5" width="17" height="15" rx="2"/><path d="M3.500 10h17M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>',
  reviews: '<path d="M4 5h16v11H9l-5 4z"/><path d="m9 10.500 2 2 4-4"/>',
  'front-office': '<path d="M3 10h18M5 10v9M19 10v9M9 10v5h6v-5"/><path d="M8 6h8l1 4H7z"/>',
  'ad-results': '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  'repeat-customers': '<path d="M4 12a8 8 0 0 1 14-5.300"/><path d="M18 3v4h-4"/><path d="M20 12a8 8 0 0 1-14 5.300"/><path d="M6 21v-4h4"/>',
  'run-sheet': '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  'talking-website': '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18"/><path d="M8 13v1M11 11.500v4M14 12.500v2M17 13v1"/>',
};

/** Shared words on every door page. */
export const doorCommon = {
  today: 'Today',
  fixKicker: 'The fix',
  lost: 'The job goes to another shop',
  kept: 'The job stays with you',
  play: 'Play it',
  playAgain: 'Play it again',
  consent: 'Texts go only to people who agreed to them, after carrier approval. Examples are illustrations, not real customers.',
  systemsKicker: 'What you get',
  systemsLead: 'This page is about one problem. The plan covers all of them, for one price.',
  systemsCta: 'See the price',
  thisOne: 'This page',
  plusEight: 'Plus eight more systems, in the same plan.',
};
