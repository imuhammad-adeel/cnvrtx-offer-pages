/**
 * The rest of each front-door page, below its hero and its problem demo.
 * automotiveDoors.ts holds the top of each page; this file carries the same single
 * problem down the page: the ticker, the cost, what changes, what we set up, the demo's
 * framing, the offer's headline, the questions, and the closing lines.
 * Every page ends on the SAME offer (one plan, monthly or annual).
 *
 * Same writing rules as v9: no dashes, no invented statistics or results, only what the
 * system actually does. `{price}` is filled from config where used.
 */

export type DoorCount = {
  title: string;
  s1: string;
  s2: string;
  start: number;
  min: number;
  max: number;
  step: number;
  /** result = input x factor, rounded */
  factor: number;
  /** '$' shows the input and result as money */
  prefix: '' | '$';
  unit: string;
  resultLabel: string;
  line: string;
};

export type DoorPage = {
  /** [pain, fix] pairs for the tilted band under the hero */
  ticker: [string, string][];
  /** Calculator wording. Leave out to use `count` instead. */
  math?: { title: string; s1: string; s2: string; s3: string; s4: string; defaults: { missed: number; value: number; oneIn: number } };
  /** A simple count for problems that are not about lost jobs. */
  count?: DoorCount;
  changes: {
    title: [string, string];
    items: { t: string; d: string }[];
    buildTitle: string;
    build: string[];
  };
  systemsLead: string;
  voice: { title: [string, string]; body: string };
  offer: { title: [string, string]; sub: string };
  faq: { q: string; a: string }[];
  startLead: string;
  footer: string;
};

const live = 'Live in 14 days with the Launch Kit. No demo, no sales call.';

export const doorPages: Record<string, DoorPage> = {
  'missed-calls': {
    ticker: [
      ['Phone rings', 'Call caught'],
      ['No voicemail', 'Job card on your phone'],
      ['Called the next shop', 'Stayed with you'],
      ['Seen at 6:30 PM', 'Caught at 10:15 AM'],
      ['Missed call', 'Rescued'],
    ],
    math: {
      title: 'What are missed calls costing you?',
      s1: 'My shop misses about',
      s2: 'calls a week while hands are full. An average job is worth',
      s3: 'If each one got a reply, about',
      s4: 'would book.',
      defaults: { missed: 6, value: 350, oneIn: 3 },
    },
    changes: {
      title: ['What changes', 'when no call is lost.'],
      items: [
        { t: 'Every missed call is caught', d: 'It lands on your phone as a job card. Callers who agreed to texts get a text back, and you get a call-back task for the rest.' },
        { t: 'You know who called', d: 'A job card shows who it was, when, and what they asked for.' },
        { t: 'You finish the car first', d: 'Call back when your hands are free. The lead is already holding.' },
      ],
      buildTitle: 'What we set up for missed calls',
      build: ['A text-back message written in your shop’s voice', 'A job card for every missed call, on your phone', 'Your local number (US) and the inbox it lands in', 'The AI front desk as backup when you can’t answer'],
    },
    systemsLead: 'Missed calls are one leak. The same plan closes the other eight.',
    voice: { title: ['Can’t pick up?', 'This can.'], body: 'When your hands are full, your AI front desk answers the call. Ask it what a caller would ask.' },
    offer: { title: ['Rescue every missed call.', 'Get the whole front office.'], sub: 'Missed-Call Rescue comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Does the text go to every caller?', a: 'Only to callers who agreed to texts, and only after carrier approval for business texting. We set that up with you. Until then the AI front desk and the job card still work.' },
      { q: 'What does the caller actually get?', a: 'A short, friendly message in your shop’s voice asking what they need. If they reply, the conversation lands in your inbox and on your phone.' },
      { q: 'What if I want to call back myself?', a: 'You can. The job card shows who called and what they asked for, so you call back with the details in hand.' },
    ],
    startLead: `Stop losing the calls you can’t pick up. ${live}`,
    footer: 'The next missed call is still your job.',
  },

  'slow-lead-reply': {
    ticker: [
      ['Asked at noon', 'Answered at noon'],
      ['Replied tonight', 'Replied first'],
      ['Three shops messaged', 'Yours answered'],
      ['Lead went cold', 'Lead got a call'],
      ['Slow reply', 'First reply'],
    ],
    math: {
      title: 'What are slow replies costing you?',
      s1: 'My shop gets about',
      s2: 'web and ad leads a week that wait hours for a reply. An average job is worth',
      s3: 'If we answered first, about',
      s4: 'would book.',
      defaults: { missed: 8, value: 350, oneIn: 3 },
    },
    changes: {
      title: ['What changes', 'when you answer first.'],
      items: [
        { t: 'The lead hears from you first', d: 'A reply goes out the moment the form or message comes in.' },
        { t: 'You know who to call now', d: 'A “call now” alert reaches your phone when a new lead is waiting.' },
        { t: 'Nothing sits in three apps', d: 'Website, Facebook and Instagram leads land in one inbox.' },
      ],
      buildTitle: 'What we set up for lead response',
      build: ['First replies written for your services', 'Your website, Facebook and Instagram forms connected', '“Call now” alerts on your phone', 'One inbox and the mobile app'],
    },
    systemsLead: 'A fast first reply is one system. The same plan follows the lead all the way to a booked, confirmed job.',
    voice: { title: ['It answers leads', 'out loud, too.'], body: 'The same front desk that replies to your forms can talk to a customer in real time. Ask it what a new lead would ask.' },
    offer: { title: ['Answer every lead first.', 'Get the whole front office.'], sub: '60-Second Lead Response comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Which leads does it answer?', a: 'Lead forms on your website, on Facebook and on Instagram. Texts go only to people who agreed to them, after carrier approval.' },
      { q: 'What does the first reply say?', a: 'A short message written for your services that asks the next useful question, such as the vehicle or the service they want. It never quotes a price.' },
      { q: 'Do I still need to call the lead?', a: 'For bigger jobs, yes, and that is the point of the “call now” alert. The system holds the conversation so the lead is still warm when you call.' },
    ],
    startLead: `Be the shop that answers first. ${live}`,
    footer: 'The first reply usually gets the job. Make it yours.',
  },

  'ai-receptionist': {
    ticker: [
      ['11 PM message', 'Answered'],
      ['Closed on Sunday', 'Booked on Sunday'],
      ['Voicemail', 'A real answer'],
      ['Read in the morning', 'Booked overnight'],
      ['After hours', 'Still open'],
    ],
    math: {
      title: 'What is after-hours silence costing you?',
      s1: 'About',
      s2: 'calls and messages a week reach my shop after hours and get no answer. An average job is worth',
      s3: 'If someone answered, about',
      s4: 'would book.',
      defaults: { missed: 7, value: 350, oneIn: 3 },
    },
    changes: {
      title: ['What changes', 'when the front desk never closes.'],
      items: [
        { t: 'Customers get an answer at any hour', d: 'Calls, website chat, Facebook and Instagram, day and night.' },
        { t: 'It only says what you approved', d: 'It answers from your information, never quotes prices and says it is an AI if asked.' },
        { t: 'The hard ones come to you', d: 'Pricing talks, complaints and big jobs are handed over with the details.' },
      ],
      buildTitle: 'What we set up for your AI front desk',
      build: ['Answers built from your services, hours and policies', 'Website chat and a website voice line', 'Facebook and Instagram messages connected', 'Hand-off rules: what it answers and what comes to you'],
    },
    systemsLead: 'The AI front desk catches the lead. The rest of the plan follows up, confirms and brings them back.',
    voice: { title: ['Meet your AI receptionist.', 'Talk to it right now.'], body: 'This is who answers your shop at 11 PM. Ask it what your customers ask.' },
    offer: { title: ['Hire the receptionist who never sleeps.', 'Get the whole front office.'], sub: 'The 24/7 AI Front Desk comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Will it give wrong prices?', a: 'No. It never quotes prices. It collects the details and books a free inspection, and you give the price.' },
      { q: 'Will customers know it is an AI?', a: 'It says so if asked. It never claims to be a person.' },
      { q: 'What can it not handle?', a: 'Complaints, pricing talks and anything unusual. Those are passed to you with the customer’s details.' },
    ],
    startLead: `Put someone on the front desk tonight. ${live}`,
    footer: 'Your customers are awake. Now your front desk is too.',
  },

  'ai-employee': {
    ticker: [
      ['Calls missed', 'Answered'],
      ['Quotes forgotten', 'Followed up'],
      ['Bookings unconfirmed', 'Confirmed'],
      ['Reviews never asked', 'Asked'],
      ['Another hire', 'One AI employee'],
    ],
    math: {
      title: 'What is the unanswered work costing you?',
      s1: 'About',
      s2: 'calls, quotes and bookings a week get no follow-up at my shop. An average job is worth',
      s3: 'If someone followed up, about',
      s4: 'would book.',
      defaults: { missed: 8, value: 350, oneIn: 3 },
    },
    changes: {
      title: ['What changes', 'when the follow-up has an owner.'],
      items: [
        { t: 'The front desk work is done daily', d: 'Answering, following up and confirming happen whether or not you had time.' },
        { t: 'Nobody has to be managed', d: 'It does the same steps every time and logs each one.' },
        { t: 'You get a report, not a to-do list', d: 'Your day at 7:30 AM and the week every Monday.' },
      ],
      buildTitle: 'What we set up for your AI employee',
      build: ['The Receptionist: calls, forms and DMs answered', 'The Service Advisor: follow-up, confirmations and review requests', 'The Shop Manager: daily brief, run sheet and reports', 'Every message written in your shop’s voice'],
    },
    systemsLead: 'One AI employee, three roles, nine systems. Here is everything it does.',
    voice: { title: ['Interview it yourself.', 'Talk to it right now.'], body: 'Before you hire it, test it. Ask it what your customers ask.' },
    offer: { title: ['Hire it for {price} a month.', 'No salary. No sick days.'], sub: 'One plan covers all three roles. Built, written and tested for your shop.' },
    faq: [
      { q: 'Does it replace my staff?', a: 'It takes the repetitive part: answering, following up, confirming and reporting. Your people keep the work only people can do.' },
      { q: 'How is it trained on my shop?', a: 'From your answers in Setup Center: your services, hours, prices and policies. We write everything from that and you approve it.' },
      { q: 'What if it gets something wrong?', a: 'It only answers from information you approved, and it hands anything unusual to you. If something needs changing, we adjust it.' },
    ],
    startLead: `Put it to work this month. ${live}`,
    footer: 'The work is piling up. Hire the one who never calls in sick.',
  },

  'quote-follow-up': {
    ticker: [
      ['Quote sent', 'Quote followed up'],
      ['Went quiet', 'Got a check-in'],
      ['Forgot to chase', 'Chased for you'],
      ['Maybe later', 'Yes or no'],
      ['Cold quote', 'Booked job'],
    ],
    math: {
      title: 'What are quiet quotes costing you?',
      s1: 'About',
      s2: 'quotes a week go quiet at my shop. An average job is worth',
      s3: 'If each one got followed up, about',
      s4: 'would book.',
      defaults: { missed: 5, value: 600, oneIn: 4 },
    },
    changes: {
      title: ['What changes', 'when every quote gets chased.'],
      items: [
        { t: 'No quote is left hanging', d: 'Each one gets polite check-ins until the customer says yes or no.' },
        { t: 'You stop being the reminder', d: 'The follow-ups go out on their own, in your shop’s voice.' },
        { t: 'A reply stops it at once', d: 'The moment they answer, the reminders end and you take over.' },
      ],
      buildTitle: 'What we set up for quote follow-up',
      build: ['Follow-ups for ceramic, PPF, tint, wraps and details', 'Text, email and call reminders, written for you', 'The rule that stops everything when they reply', 'One-tap updates: Quote sent, Accepted, Done'],
    },
    systemsLead: 'Follow-up turns a quote into a booking. The rest of the plan catches the lead before it and confirms the job after it.',
    voice: { title: ['It can take the quote request,', 'too.'], body: 'Before a quote can be followed up, someone has to take the request. Ask the front desk for a quote and see what it does.' },
    offer: { title: ['Follow up on every quote.', 'Get the whole front office.'], sub: 'Follow-Up Until They Book comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Will it annoy my customers?', a: 'The check-ins are short and polite, spaced over days, and they stop the moment the customer replies.' },
      { q: 'Does it send the quote itself?', a: 'You give the price. The system follows up on it. An AI quote helper can draft a quote from your price list for you to approve and send.' },
      { q: 'What about people who say no?', a: 'A no closes the loop, which is useful too. You know where every quote stands.' },
    ],
    startLead: `Stop letting quotes go quiet. ${live}`,
    footer: 'A quiet quote is a job waiting for a follow-up.',
  },

  'no-shows': {
    ticker: [
      ['Booked', 'Confirmed'],
      ['Forgot the appointment', 'Got a reminder'],
      ['No call, no show', 'Reply YES or MOVE'],
      ['Empty bay', 'Rebooked'],
      ['No-show', 'Showed up'],
    ],
    math: {
      title: 'What are no-shows costing you?',
      s1: 'My shop gets about',
      s2: 'no-shows a week. An average job is worth',
      s3: 'With a confirmation and reminders, about',
      s4: 'would have shown up.',
      defaults: { missed: 3, value: 500, oneIn: 2 },
    },
    changes: {
      title: ['What changes', 'when every booking is confirmed.'],
      items: [
        { t: 'You know who is coming', d: 'The day before, each customer replies YES or MOVE.' },
        { t: 'A change becomes a move, not a hole', d: 'Customers who can’t make it pick a new time.' },
        { t: 'A missed slot gets a second chance', d: 'No-show rescue offers them a new booking.' },
      ],
      buildTitle: 'What we set up for no-shows',
      build: ['A confirmation the moment they book', '“Reply YES or MOVE” the day before', 'Reminders, and no-show rescue', 'Drop-off and pickup texts'],
    },
    systemsLead: 'No-Show Shield protects the bay. The rest of the plan fills it in the first place.',
    voice: { title: ['It books the slot.', 'Then it protects it.'], body: 'Ask the front desk to book a visit, the way a customer would. The reminders start from there.' },
    offer: { title: ['Protect every booked bay.', 'Get the whole front office.'], sub: 'No-Show Shield comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Can it stop every no-show?', a: 'No. Some people will still not turn up. It makes sure each one was confirmed and reminded, and that a missed slot gets an offer to rebook.' },
      { q: 'How do customers reschedule?', a: 'They reply MOVE to the reminder and pick a new time. You do not have to play phone tag.' },
      { q: 'Does it work with my current calendar?', a: 'It runs on the booking page we build for you. It sits alongside the shop software you already use for jobs and invoices.' },
    ],
    startLead: `Stop preparing the bay for nobody. ${live}`,
    footer: 'An empty bay is the most expensive thing in your shop.',
  },

  reviews: {
    ticker: [
      ['Happy customer', 'Asked for a review'],
      ['Forgot to ask', 'Asked for you'],
      ['Drove off', 'Got the link'],
      ['No reminder', 'Two gentle reminders'],
      ['Great work, unseen', 'Great work, reviewed'],
    ],
    count: {
      title: 'How many customers were never asked?',
      s1: 'My shop finishes about',
      s2: 'jobs a week.',
      start: 10,
      min: 1,
      max: 80,
      step: 1,
      factor: 4.333,
      prefix: '',
      unit: 'customers a month',
      resultLabel: 'drive off. How many were asked for a review?',
      line: 'With the 5-Star Review Machine, every one of them is asked.',
    },
    changes: {
      title: ['What changes', 'when every customer is asked.'],
      items: [
        { t: 'Asking stops depending on your memory', d: 'The request goes out after every job, on its own.' },
        { t: 'The quiet ones get a nudge', d: 'Two gentle reminders, only if they have not left a review yet.' },
        { t: 'Your best customers can say more', d: 'A video-testimonial link is there for anyone who wants it.' },
      ],
      buildTitle: 'What we set up for reviews',
      build: ['A review request sent after every job', 'Two reminders, written to be polite', 'A video-testimonial link', 'A Monday count of requests sent'],
    },
    systemsLead: 'Reviews bring the next customer in. The rest of the plan answers, books and confirms them.',
    voice: { title: ['More reviews mean more calls.', 'This answers them.'], body: 'When reviews bring new customers to your shop, someone has to answer. Ask the front desk what a new customer would ask.' },
    offer: { title: ['Ask every customer for a review.', 'Get the whole front office.'], sub: 'The 5-Star Review Machine comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Can you guarantee five-star reviews?', a: 'No. Nobody can, and you should not trust anyone who says so. The system asks every customer. What they write is up to them and your work.' },
      { q: 'Does it ask unhappy customers too?', a: 'It asks every customer. It does not filter or hide anyone, which keeps you on the right side of review platform rules.' },
      { q: 'When does the request go out?', a: 'After the job is marked done, while the result is fresh. Texts go only to customers who agreed to them.' },
    ],
    startLead: `Stop losing reviews you already earned. ${live}`,
    footer: 'Your next customer is reading reviews right now.',
  },

  'front-office': {
    ticker: [
      ['You answer the phone', 'It is answered'],
      ['You chase the quote', 'It is chased'],
      ['You confirm tomorrow', 'It is confirmed'],
      ['You type the schedule', 'It is sent'],
      ['A hire', 'A front office'],
    ],
    math: {
      title: 'What is the empty front desk costing you?',
      s1: 'With nobody at the front desk, my shop misses about',
      s2: 'calls and messages a week. An average job is worth',
      s3: 'If someone answered, about',
      s4: 'would book.',
      defaults: { missed: 8, value: 350, oneIn: 3 },
    },
    changes: {
      title: ['What changes', 'when the front desk job is filled.'],
      items: [
        { t: 'The job stops being yours by default', d: 'Answering, follow-up and confirming are covered every day.' },
        { t: 'It covers the hours a hire can’t', d: 'Nights, weekends and the hours you are under a car.' },
        { t: 'There is nobody to chase', d: 'Every step is logged, so you read a report and do not ask “did you follow up?”' },
      ],
      buildTitle: 'What we set up for your front office',
      build: ['Answering: calls, forms and DMs', 'Follow-up, confirmations and review requests', 'Your daily brief and tomorrow’s run sheet', 'Everything written in your shop’s voice'],
    },
    systemsLead: 'A front office is three roles and nine systems. Here is all of it.',
    voice: { title: ['Meet your new front desk.', 'Talk to it right now.'], body: 'This is who answers your shop when nobody is free. Ask it what your customers ask.' },
    offer: { title: ['Fill the front desk for {price} a month.', 'Not $3,170.'], sub: 'One plan covers all three roles. Built, written and tested for your shop.' },
    faq: [
      { q: 'I already have someone at the desk. Is this for me?', a: 'Yes. It takes the repetitive part off their plate and covers nights and weekends, so they can spend their time on customers in the shop.' },
      { q: 'Is it cheaper than hiring?', a: 'A US receptionist costs about $3,170 a month in wages, before payroll taxes. This is {price} a month. It does not replace a person for everything, and it does not need to.' },
      { q: 'How much of my time does it take to run?', a: 'About 10-15 minutes of setup questions to start. After that you reply to customers from the app when a human answer is needed.' },
    ],
    startLead: `Fill the front desk without a hire. ${live}`,
    footer: 'You opened a shop to work on cars. Go back to the cars.',
  },

  'ad-results': {
    ticker: [
      ['Clicks', 'Booked jobs'],
      ['Leads', 'Paid jobs'],
      ['Guessing', 'Counting'],
      ['Ad report', 'Monday report'],
      ['Spend', 'Results'],
    ],
    count: {
      title: 'How much of your ad money is a guess?',
      s1: 'I spend about',
      s2: 'a month on Facebook and Instagram ads.',
      start: 500,
      min: 100,
      max: 10000,
      step: 100,
      factor: 12,
      prefix: '$',
      unit: 'a year',
      resultLabel: 'on ads, with no count of the jobs they brought in',
      line: 'With Ad Results Tracker, every Monday shows leads, booked and paid.',
    },
    changes: {
      title: ['What changes', 'when you can see what ads brought in.'],
      items: [
        { t: 'You see jobs, not clicks', d: 'Each ad lead is followed to a booked job and a paid job.' },
        { t: 'You know what to keep running', d: 'The Monday report shows which ads brought real work.' },
        { t: 'Meta learns who actually paid', d: 'Booked and paid jobs are sent back, so it can look for more customers like them.' },
      ],
      buildTitle: 'What we set up for ad results',
      build: ['Your Facebook and Instagram lead forms connected', 'Each lead followed to booked and paid', 'Results sent back to Meta', 'A Monday report: leads, booked, won'],
    },
    systemsLead: 'Tracking shows what the ads brought. The rest of the plan makes sure those leads get answered and booked.',
    voice: { title: ['Ad leads still need an answer.', 'This gives one.'], body: 'An ad lead that nobody answers is wasted spend. Ask the front desk what a new lead would ask.' },
    offer: { title: ['See which ads pay.', 'Get the whole front office.'], sub: 'Ad Results Tracker comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Do you run my ads?', a: 'No. This tracks the results of the ads you run. Running ads is a separate service and is not part of this plan.' },
      { q: 'Will my ads perform better?', a: 'We do not promise that. You will see which leads booked and paid, and Meta gets that signal back. What you do with it is your call.' },
      { q: 'How do you know a job was paid?', a: 'From the one-tap job updates on your phone: Quote sent, Accepted, Done. Marking a job done is what closes the loop.' },
    ],
    startLead: `Stop guessing which ads pay. ${live}`,
    footer: 'A lead is not a job. Count the ones that paid.',
  },

  'repeat-customers': {
    ticker: [
      ['One visit', 'Second visit'],
      ['No check-in', 'A check-in'],
      ['Forgot about them', 'Invited back'],
      ['No referral ask', 'Asked'],
      ['One-time customer', 'Regular'],
    ],
    math: {
      title: 'What are one-time customers costing you?',
      s1: 'About',
      s2: 'past customers a week are due for a visit and hear nothing. An average visit is worth',
      s3: 'If we invited them back, about',
      s4: 'would book.',
      defaults: { missed: 10, value: 350, oneIn: 4 },
    },
    changes: {
      title: ['What changes', 'when past customers hear from you.'],
      items: [
        { t: 'Nobody is forgotten after the job', d: 'Service history shows who came in, for what, and when.' },
        { t: 'Happy customers get asked to refer', d: 'The referral ask goes out for you after the job.' },
        { t: 'Quiet customers get an invitation', d: 'Win-back campaigns reach people who have not been in for a while.' },
      ],
      buildTitle: 'What we set up for repeat customers',
      build: ['Service history for every customer', 'Check-ins after the job', 'A referral ask, written for you', 'Win-back campaigns by email, and by text where customers agreed'],
    },
    systemsLead: 'Bringing customers back is one system. The rest of the plan wins them the first time.',
    voice: { title: ['When they come back,', 'this books them.'], body: 'A returning customer should be the easiest booking you get. Ask the front desk to book a visit.' },
    offer: { title: ['Bring every customer back.', 'Get the whole front office.'], sub: 'The Repeat & Referral Engine comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Can you message my existing customer list?', a: 'By email, yes. By text only to customers who agreed to texts, after carrier approval. On annual, a win-back campaign at launch is included.' },
      { q: 'How often do customers hear from you?', a: 'Not often. A check-in after the job, a referral ask, and an invitation when it has been a while. We set the timing with you.' },
      { q: 'What if I have no customer list?', a: 'It builds from your first job onward. Every customer who comes in is added to the service history.' },
    ],
    startLead: `Stop paying to win the same customer twice. ${live}`,
    footer: 'You already earned them once. Invite them back.',
  },

  'run-sheet': {
    ticker: [
      ['Typed by hand', 'Sent at 6 PM'],
      ['Group chat', 'Run sheet'],
      ['One job missing', 'Every job listed'],
      ['Scroll to plan the day', '7:30 AM brief'],
      ['Nightly typing', 'Nothing to type'],
    ],
    count: {
      title: 'How many hours go into typing a list?',
      s1: 'Someone spends about',
      s2: 'minutes a night on tomorrow’s schedule.',
      start: 30,
      min: 5,
      max: 120,
      step: 5,
      factor: 0.3611,
      prefix: '',
      unit: 'hours a month',
      resultLabel: 'spent typing a list that could send itself',
      line: 'With Owner Command Center, nobody types it.',
    },
    changes: {
      title: ['What changes', 'when the schedule writes itself.'],
      items: [
        { t: 'Tomorrow arrives at 6 PM', d: 'Every booking, in order, without anyone building the list.' },
        { t: 'Your day arrives at 7:30 AM', d: 'Today’s jobs, who is waiting, and what is unfinished.' },
        { t: 'Updates take one tap', d: 'Quote sent, Accepted, Done, No-show. The sheet stays right.' },
      ],
      buildTitle: 'What we set up for your run sheet',
      build: ['A job card for every booking', 'The 6 PM run sheet for tomorrow', 'The 7:30 AM brief for today', 'One-tap job updates and a Monday report'],
    },
    systemsLead: 'The run sheet is only as good as the bookings on it. The rest of the plan fills it.',
    voice: { title: ['The bookings on the sheet', 'start here.'], body: 'Every line on tomorrow’s run sheet starts as a call or a message. Ask the front desk to book a visit.' },
    offer: { title: ['Stop typing the run sheet.', 'Get the whole front office.'], sub: 'Owner Command Center comes with all three roles. One plan, built, written and tested for you.' },
    faq: [
      { q: 'Where does the run sheet get its jobs?', a: 'From the bookings made through the system. Each booking becomes a job card, and the job cards make the sheet.' },
      { q: 'Who receives it?', a: 'You. It arrives at 6 PM for tomorrow. Tell us who else on your team should see it and we set that up with you.' },
      { q: 'Does it replace my shop software?', a: 'No. It sits alongside the tools that run your jobs and invoices. This covers the schedule you would otherwise type by hand.' },
    ],
    startLead: `Give the nightly typing to the system. ${live}`,
    footer: 'Tomorrow’s schedule should already be on your phone.',
  },

  'talking-website': {
    ticker: [
      ['Contact form', 'A conversation'],
      ['Visitor left', 'Visitor booked'],
      ['Read and bounced', 'Asked and answered'],
      ['Brochure site', 'Talking site'],
      ['Silent website', 'Answers back'],
    ],
    math: {
      title: 'What is a silent website costing you?',
      s1: 'About',
      s2: 'website visitors a week leave my site without calling or booking. An average job is worth',
      s3: 'If the site answered them, about',
      s4: 'would book.',
      defaults: { missed: 10, value: 350, oneIn: 5 },
    },
    changes: {
      title: ['What changes', 'when your website answers back.'],
      items: [
        { t: 'Visitors get an answer on the page', d: 'They ask out loud or by chat and hear back in real time.' },
        { t: 'Every page leads to a booking', d: 'The site is designed around the call, the conversation and the booked inspection.' },
        { t: 'You never touch a page builder', d: 'Design, writing and setup are done for your shop.' },
      ],
      buildTitle: 'What we set up for your website',
      build: ['A site designed and written for your services', 'The voice line and chat that talk to visitors', 'A free-inspection booking page', 'Hosting, included in your monthly plan'],
    },
    systemsLead: 'The website brings them in and answers them. The rest of the plan follows up, confirms and brings them back.',
    voice: { title: ['This is what your visitors', 'would talk to.'], body: 'The same voice would sit on your website. Ask it what your visitors ask.' },
    offer: { title: ['Get a website that talks.', 'And the front office behind it.'], sub: 'The website is free on annual, or a one-time add-on on monthly. Either way the plan runs all three roles behind it.' },
    faq: [
      { q: 'I already have a website. Can you add the voice to it?', a: 'The voice line and chat are part of the plan. Whether they can sit on your current site depends on how it is built, and we check that with you. A full rebuilt website is the one-time add-on, free on annual.' },
      { q: 'Who owns the website?', a: 'You do. Your domain and content stay yours, and they are exportable.' },
      { q: 'Does it really talk?', a: 'Yes. Visitors can speak to it or type, and it answers in real time from information you approve. It never quotes prices and says it is an AI if asked.' },
    ],
    startLead: `Give your visitors someone to talk to. ${live}`,
    footer: 'Your website should be your best front desk.',
  },
};

/** Shared words for the new sections. */
export const doorPageCommon = {
  changesKicker: 'What changes',
  buildNote: 'Your part: about 15 minutes in Setup Center.',
  voiceNote: 'Demo for an example shop. No real booking is made.',
  faqKicker: 'Straight answers',
  faqTitle: 'Before you ask.',
  countNote: 'This is arithmetic on your own number. It is not a promise of results.',
};
