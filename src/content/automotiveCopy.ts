/**
 * CNVRT X Auto Growth OS, sales page copy.
 *
 * SOURCE NOTE: the document "CNVRT X Auto Growth OS, Sales Page Copy" was not
 * present in this repository or in the shared files found on this machine.
 * Locked lines come from the build brief and the approved strategy docs
 * (Offer Playbook, 9 Nov 2026; Strategy Handover §5 to §9). Every other line is
 * draft microcopy written to the brief's rules and should be swapped for the
 * approved copy doc once supplied. Locked lines are marked // LOCKED.
 */

export const nav = {
  links: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'What You Get', href: '#what-you-get' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Free Booking Gap Audit', // LOCKED
};

export const hero = {
  eyebrow: 'Auto Growth OS, done-for-you lead-to-booking system',
  headlineLines: ['You Got the Inquiry.', 'Did You Get the Booking?'], // LOCKED
  // LOCKED (Strategy Handover §5, approved supporting headline)
  sub: "Turn more calls, website inquiries, and quotes into booked appointments, even while you're busy working on cars.",
  primaryCta: 'Get My Free Booking Gap Audit', // LOCKED
  secondaryCta: 'See How It Works', // LOCKED
  trust: ['Done for you', 'Month-to-month', 'Your business data stays yours'], // LOCKED
  context:
    'Built for detailing, ceramic, PPF, tint, wraps, wheels, suspension, aftermarket and custom shops.', // LOCKED
};

/** The lifecycle the hero console and system diagrams animate. */
export const journeyStages = [
  { key: 'source', label: 'Call / Form / DM', status: 'Captured' },
  { key: 'lead', label: 'New Lead', status: 'Captured' },
  { key: 'response', label: 'Fast Response', status: 'Following Up' },
  { key: 'qualify', label: 'Qualify', status: 'Following Up' },
  { key: 'quote', label: 'Quote', status: 'Following Up' },
  { key: 'followup', label: 'Follow-Up', status: 'Following Up' },
  { key: 'booking', label: 'Booking', status: 'Booked' },
  { key: 'showup', label: 'Show-Up', status: 'Completed' },
  { key: 'review', label: 'Review', status: 'Completed' },
  { key: 'repeat', label: 'Repeat Customer', status: 'Returning' },
] as const;

export const leak = {
  eyebrow: 'Where bookings slip',
  headlineLines: ["Most shops don't have a lead problem.", 'They have a follow-up problem.'], // LOCKED
  intro:
    "The inquiries are already coming in. The work gets lost in the gaps between them, usually while you're busy doing the job in front of you.",
  gaps: [
    {
      title: 'Missed Call',
      body: "The phone rings mid-correction. They don't leave a voicemail, they call the next shop on the list.",
    },
    {
      title: 'Slow Response',
      body: 'You reply that evening. By then they have already booked with whoever answered first.',
    },
    {
      title: 'Quote Goes Cold',
      body: 'The ceramic or PPF quote is out. Nobody follows up, and a considered purchase quietly becomes a forgotten one.',
    },
    {
      title: 'No-Show',
      body: 'The bay is blocked for the day. No confirmation, no reminder, no easy way to reschedule, so they just don’t come.',
    },
    {
      title: 'Customer Never Returns',
      body: 'Great job, happy customer, and no review request, no maintenance reminder, no reason to come back.',
    },
  ],
};

export const bigIdea = {
  eyebrow: 'The CNVRT X position',
  // LOCKED
  lines: ['Before you buy more leads,', 'fix what happens to the ones', 'you already have.'],
  support:
    'More traffic poured into a leaky process just makes a bigger leak. Fix response, follow-up and show-up first, then every lead you pay for is worth more.',
};

export const demo = {
  eyebrow: 'Interactive example',
  headline: 'See how an inquiry becomes a booking.', // LOCKED (approved Level 4)
  label: 'Example customer journey',
  disclaimer:
    'Illustrative example. Messages, timing and outcomes are simulated to show how the system behaves, not real customer data or performance results.',
};

export const engine = {
  eyebrow: 'How it works, the 5-step booking engine',
  headline: 'From first call to repeat customer, handled.',
  intro:
    'Five stages of your customer journey. We build the process behind each one, so every inquiry has a next step, without you chasing it.',
  steps: [
    {
      n: '01',
      title: 'Get Found',
      body: 'A website built to take bookings, not just describe services, with clear packages, a booking path and a Google profile kept current.',
      points: ['Conversion website', 'Booking page', 'Google profile tune-up'],
    },
    {
      n: '02',
      title: 'Answer Every Inquiry',
      body: 'Calls, texts, website chat and social DMs land in one place, and every new inquiry gets a fast, helpful first response, even when you’re in the bay.',
      points: ['Missed-call text back', 'Website chat', 'One inbox for calls, texts and DMs'],
    },
    {
      n: '03',
      title: 'Follow Up Until They Decide',
      body: 'Quotes and open inquiries get timed, helpful follow-up that stops the moment the customer replies, books or says no.',
      points: ['Quote follow-up', 'Inquiry follow-up', 'Stops on reply'],
    },
    {
      n: '04',
      title: 'Make Them Show Up',
      body: 'Online booking, confirmations, reminders and a simple reschedule link, so a blocked bay turns into a finished job.',
      points: ['Online booking', 'Reminders', 'Reschedule link'],
    },
    {
      n: '05',
      title: 'Bring Them Back',
      body: 'Review requests after the job, maintenance reminders when they’re due, and win-back messages for customers who drifted away.',
      points: ['Review requests', 'Maintenance reminders', 'Win-back'],
    },
  ],
};

export const install = {
  eyebrow: 'What you get',
  headline: 'Everything installed, configured and tested for you.',
  intro: 'Tangible pieces of a working system, set up around how your shop actually sells and books.',
  items: [
    {
      name: 'Conversion Website',
      outcome: 'A site that turns visitors into booking requests, with packages, gallery and service pages.',
      step: 'Get Found',
    },
    {
      name: 'Lead & Quote Follow-Up',
      outcome: 'Every inquiry and quote gets a next step, and follow-up stops as soon as they respond.',
      step: 'Follow Up',
    },
    {
      name: 'Calls / Text / Conversations',
      outcome: 'Missed calls get a text back and every conversation lives in one inbox your team can work from.',
      step: 'Answer',
    },
    {
      name: 'Booking & Appointment System',
      outcome: 'Online booking, confirmations, reminders and rescheduling that protect your bay time.',
      step: 'Show Up',
    },
    {
      name: 'Reviews & Reputation',
      outcome: 'Review requests sent at the right moment, so good work shows up where people search.',
      step: 'Bring Back',
    },
    {
      name: 'Customer Retention',
      outcome: 'Maintenance reminders and win-back messages for coatings, PPF inspections and repeat details.',
      step: 'Bring Back',
    },
    {
      name: 'Owner Visibility',
      outcome: 'See what came in, what’s waiting on follow-up and what booked, without digging through apps.',
      step: 'All stages',
    },
  ],
};

export const handoff = {
  eyebrow: 'Responsible by design',
  headlineLines: ['Automation handles repetition.', 'Your team handles judgment.'], // LOCKED
  intro:
    'Not everything should be automated, and not every message should come from AI. Each conversation is routed to the right kind of handling.',
  lanes: [
    {
      key: 'auto',
      label: 'Deterministic automation',
      for: 'For predictable actions',
      items: ['Confirmations and reminders', 'Follow-up timing', 'Review requests after completed jobs', 'Stopping sequences on reply'],
    },
    {
      key: 'ai',
      label: 'AI',
      for: 'For useful conversation and understanding',
      items: ['Answering your approved FAQs', 'Collecting vehicle and service details', 'Guiding toward the next step'],
    },
    {
      key: 'human',
      label: 'Your team',
      for: 'For judgment',
      items: ['Price negotiation', 'Complaints', 'Unusual or high-value jobs', 'Anything the system isn’t sure about'],
    },
  ],
};

export const comparison = {
  eyebrow: 'The difference',
  headline: 'Software gives you tools. You still have to build the system.',
  software: {
    label: 'Software',
    quote: '“Here are the tools.”', // LOCKED
    rows: [
      'You learn the platform',
      'You design the workflows',
      'You write every message',
      'You connect the pieces and test them',
      'You figure out what to fix when it breaks',
    ],
  },
  cnvrtx: {
    label: 'CNVRT X',
    quote: '“Here is the working system.”', // LOCKED
    rows: [
      'We map how your shop sells and books',
      'We configure the journey end to end',
      'We write the messages in your voice',
      'We test it before it goes live',
      'We adjust it as your shop changes',
    ],
  },
  note: 'You don’t have to become a CRM expert. You run the shop; we run the setup.',
};

export const existingTools = {
  eyebrow: 'Works with how you operate',
  headline: 'Already using shop software? Good.', // LOCKED
  body: [
    'Keep the tools that run your jobs, scheduling, invoicing, job tracking. CNVRT X can sit alongside them and focus on what happens before and after the job: the inquiry, the follow-up, the booking and the return visit.',
    'Depending on your current tools and integrations, information may be connected directly, passed through a simple handoff, or kept side by side. We confirm what’s possible for your setup before we build anything.',
  ],
  cta: "Tell Us What You're Using", // LOCKED
};

export const fit = {
  eyebrow: 'Built for automotive specialists',
  headline: 'One journey. Configured for the work you do.',
  services: [
    'Detailing',
    'Mobile Detailing',
    'Ceramic Coating',
    'PPF',
    'Window Tint',
    'Wraps',
    'Wheels & Fitment',
    'Suspension',
    'Aftermarket',
    'Custom Work',
  ],
};

export const pricing = {
  eyebrow: 'Pricing',
  headline: 'One system. One simple price.',
  intro: 'One complete plan. Pick how you’d like to pay.',
  monthly: {
    label: 'Monthly',
    cadence: '/month',
    setupNote: '+ $497 one-time setup',
    terms: 'Month-to-month. Cancel anytime.',
    cta: 'Start Monthly',
  },
  annual: {
    label: 'Annual',
    cadence: '/year',
    badge: '2 months included',
    setupNote: 'Setup included',
    terms: 'Billed yearly. Same complete system.',
    cta: 'Start Annual',
  },
  founding: {
    badge: 'Founding offer',
    title: 'First 10 qualifying automotive businesses',
    lines: ['$497 setup waived', '$197/month remains'],
    cta: 'Apply for Founding Pricing',
  },
  included: [
    'Conversion website',
    'Calls, texts, chat & DMs in one inbox',
    'Missed-call text back',
    'Lead & quote follow-up',
    'Online booking & reminders',
    'Review requests',
    'Maintenance & win-back reminders',
    'Owner visibility',
  ],
  usage:
    'SMS, phone, AI and carrier-related usage may include allowances, fair-use limits or pass-through costs depending on your configuration. Exact terms are disclosed before activation, no surprises after.',
  fallbackNote: 'We confirm fit and setup details with you before checkout.',
};

export const launch = {
  eyebrow: 'Getting started',
  headline: 'Built with you. Tested before it touches a customer.',
  steps: [
    {
      n: '01',
      title: 'Tell Us How Your Shop Works',
      body: 'Services, pricing approach, booking rules, hours, team and the tools you already use.',
    },
    {
      n: '02',
      title: 'We Configure Your System',
      body: 'Website, inbox, follow-up, booking, reminders and review flows, set up around your process.',
    },
    {
      n: '03',
      title: 'Test It Before It Goes Live',
      body: 'We run real test inquiries end to end and fix anything that doesn’t behave before switching it on.',
      qa: ['Test call', 'Test form', 'Test text', 'Test booking', 'Test follow-up stop'],
    },
  ],
};

export const guarantees = {
  eyebrow: 'Our commitments',
  headline: 'Clear promises. Clearly scoped.',
  launchPromise: {
    title: '14-Day Launch Promise',
    body: 'Your core system goes live within 14 days.',
    conditions: [
      'The 14-day clock starts once we’ve received the required access, content and business information.',
      'External delays, carrier / A2P texting registration, domain, and third-party platform approvals, are outside the 14 days.',
    ],
  },
  others: [
    {
      title: 'Month-to-Month',
      body: 'No long-term contract on the monthly plan. If it stops being worth it, you can cancel.',
    },
    {
      title: 'Your Business Stays Yours',
      body: 'Your domain, your content and your customer list belong to your business, and you can export them.',
    },
  ],
  disclaimer: 'We don’t guarantee bookings or revenue. We guarantee the work we control.',
};

export const faq = {
  eyebrow: 'FAQ',
  headline: 'Straight answers.',
  items: [
    {
      q: 'Is this another CRM?',
      a: 'No. A CRM is a tool you have to set up and run. CNVRT X is a done-for-you system: we configure how inquiries are answered, followed up, booked, reminded and brought back, and we test it before launch. There is software underneath, but you’re buying the working process, not another app to learn.',
    },
    {
      q: 'Do I replace my current software?',
      a: 'Usually not. If you already use shop software for jobs, scheduling or invoicing, CNVRT X can sit alongside it and handle the inquiry-to-booking journey. Depending on your current tools and integrations, we’ll confirm what can connect before we build.',
    },
    {
      q: 'Does AI talk to every customer?',
      a: 'No. Predictable steps like confirmations and reminders are handled by fixed automation. AI helps with approved questions and collecting details. Negotiation, complaints, unusual or high-value jobs and anything uncertain go to your team.',
    },
    {
      q: 'Can you guarantee bookings?',
      a: 'No, and you should be wary of anyone who does. Bookings depend on your services, pricing, reputation and market. We guarantee the work we control: a properly configured, tested system, launched on the timeline we agree.',
    },
    {
      q: 'How does SMS compliance work?',
      a: 'Business texting in the US requires carrier registration (A2P 10DLC). We help prepare and submit the registration with your business details. Approval is decided by carriers, so texting features go live once it’s approved; carrier-related fees are disclosed before activation.',
    },
    {
      q: 'Can I cancel?',
      a: 'Yes. The monthly plan is month-to-month. Your domain, content and customer list stay yours, and you can export your data.',
    },
    {
      q: 'What happens when I grow?',
      a: 'The system grows with you, more services, team members, locations or volume. Usage-based items like SMS, phone and AI may have allowances; if you approach them, we tell you first and agree on any change before it happens.',
    },
  ],
};

export const finalCta = {
  eyebrow: 'Start with clarity',
  headline: 'Your next inquiry deserves a better follow-up.', // LOCKED (approved Level 8)
  cta: 'Get My Free Booking Gap Audit',
};

export const audit = {
  eyebrow: 'Free Booking Gap Audit',
  headline: 'Find out where your bookings may be slipping away.', // LOCKED
  intro:
    'We look at your business the way a customer does, from the first inquiry to the follow-up, and show you exactly where the gaps are.',
  includes: [
    { t: 'Secret-shopper inquiry', d: 'We send a test inquiry and note how and when it’s answered.' },
    { t: 'Follow-up check', d: 'We watch whether, and how, the inquiry is followed up.' },
    { t: 'Website & Google profile review', d: 'We check how easy it is to find you and request a booking.' },
    { t: 'Three priority fixes', d: 'You get the three changes we’d make first. Yours to keep, whether or not you work with us.' },
  ],
  scope: 'Public-facing review only. No access to your private systems needed.',
  submit: 'Get My Free Booking Gap Audit',
  consent:
    'By submitting, you agree that CNVRT X may contact you about your audit by email, phone or text. Message and data rates may apply. Reply STOP to opt out.',
  success: {
    title: 'Request received.',
    body: 'We’ll start your Booking Gap Audit and follow up using the details you shared.',
  },
  services: [
    'Detailing',
    'Mobile Detailing',
    'Ceramic Coating',
    'PPF',
    'Window Tint',
    'Wraps',
    'Wheels & Fitment',
    'Suspension',
    'Aftermarket',
    'Custom Work',
    'Other',
  ],
};
