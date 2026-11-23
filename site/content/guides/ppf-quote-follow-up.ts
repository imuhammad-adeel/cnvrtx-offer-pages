import type { Guide } from './types';
import { consentLine } from './types';

export const guide: Guide = {
  slug: 'ppf-quote-follow-up',
  title: 'PPF Quote Follow-Up: Timing It Around the Delivery Date',
  h1: 'How to Follow Up on a PPF Quote Without Losing the Job to the Delivery Date',
  label: 'PPF quote follow-up',
  description: 'A follow-up plan for paint protection film quotes: coverage options side by side, check-ins timed to the delivery date, deposits, and when to stop.',
  stage: 'Quote follow-up',
  problem: 'quote-follow-up',
  shop: 'ppf-shops',
  published: '2026-11-17',
  updated: '2026-11-17',
  read: 12,
  intro: 'A PPF quote can sit for weeks while the customer waits on a car. A fixed “day 2, day 5” schedule misses that. This guide ties your follow-up to the two things that actually drive a film decision: the coverage choice and the delivery date.',
  related: ['ceramic-coating-quote-follow-up', 'detailing-no-show-policy-and-reminders', 'window-tint-quote-follow-up'],
  blocks: [
    {
      answer:
        'Follow up on a PPF quote in two phases. First, help the customer choose a coverage level: a check-in after about three days and a call after about a week. Then anchor everything to the vehicle’s delivery date: a message two weeks before, another in delivery week, and a closing note if the date passes. Stop when they reply, book or say no.',
    },
    { p: 'If there is no delivery date, because the customer already owns the car, use the first phase and then one closing message about a month after the quote.' },

    { h2: 'Why PPF needs its own follow-up plan', id: 'why' },
    {
      ul: [
        '<strong>There is more than one quote.</strong> The customer is choosing between partial front, full front, extra high-impact areas and full body. Until they pick, they cannot say yes.',
        '<strong>The clock is the car, not the calendar.</strong> Many film customers are waiting on a delivery. Your message is early if it arrives three weeks before the car and late if it arrives the week after.',
        '<strong>A slot is hard to find at short notice.</strong> Installs take a day to several days. A customer who decides in delivery week may find you are full.',
        '<strong>The dealer is in the conversation.</strong> Many buyers are offered a protection package at the dealership, on the spot.',
      ],
    },

    { h2: 'What to ask before you quote', id: 'before' },
    {
      check: [
        'Year, make, model, colour and trim',
        'Is the car here, or on order? If on order, the expected delivery date',
        'How it will be driven: daily commute, highway miles, weekend car, track days',
        'How long they plan to keep it',
        'Which areas worry them most: bumper, hood, rocker panels, door edges',
        'Gloss or matte film, if you offer both',
        'For a car they already own: existing chips or scratches that need attention before film',
        'Whether they also want a coating or tint in the same visit',
        'Whether they agree to get texts from your shop',
      ],
    },
    { call: 'Write the delivery date on the quote. It is the single most useful piece of information for your follow-up, and it is the one most often left in a text thread.', kind: 'warn' },

    { h2: 'Send the options side by side', id: 'options' },
    { p: 'The most common reason a film quote stalls is that the customer cannot compare the choices. Put them in one small table so the decision is “which one”, not “whether”.' },
    {
      table: {
        head: ['Coverage', 'What it protects', 'Who usually picks it'],
        rows: [
          ['Partial front', 'Bumper, part of the hood and fenders, mirrors', 'Budget-first buyers and short-term owners'],
          ['Full front', 'Bumper, full hood, full fenders, mirrors, headlights', 'Most daily drivers who do highway miles'],
          ['Full front plus high-impact areas', 'Full front, plus rockers, A-pillars or rear arches', 'Owners of low cars and cars with wide tyres'],
          ['Full body', 'Every painted panel', 'Long-term owners and high-value vehicles'],
        ],
      },
    },
    { p: 'This table describes common coverage packages in general terms. Name yours the way your shop sells them, and put your own prices beside each one in the quote you send.' },

    { h2: 'An example schedule tied to the delivery date', id: 'schedule' },
    {
      timeline: [
        { d: 'Day 0', t: 'Send the options and note the delivery date', x: 'Coverage options side by side, film choice, how long the install takes, and your deposit terms if you have them.', ch: 'Email, plus a text to say it was sent' },
        { d: 'Day 3', t: 'A coverage check-in', x: 'Ask which option they are leaning toward. It is easier to answer than “are you going ahead?”.', ch: 'Text or email' },
        { d: 'Day 7', t: 'A phone call', x: 'Film buyers have real questions about seams, edges and aftercare. A call answers five at once.', ch: 'Call' },
        { d: '2 weeks before delivery', t: 'Hold-a-slot message', x: 'Tell them which install dates are still open around their delivery. This is information, not pressure.', ch: 'Text or email' },
        { d: 'Delivery week', t: 'A short congratulations', x: 'Ask how the car is, and whether they would like it protected before the first long drive.', ch: 'Text' },
        { d: '2 weeks after delivery', t: 'Close the loop', x: 'One polite last message. Then stop.', ch: 'Email' },
      ],
    },
    { p: 'Delivery dates move. When a customer tells you the date slipped, move every later message with it. A sequence that keeps running on the old date is worse than no sequence.' },
    { p: 'See the complete <a href="/auto/quote-follow-up">quote follow-up workflow for auto shops</a>, and how a booked install is protected by <a href="/auto/no-shows">confirmations and reminders</a>.' },

    { h2: 'A decision tree for each reply', id: 'tree' },
    {
      flow: [
        { if: 'They ask which coverage is right', then: 'Answer with their own driving in mind. Recommend one option and say why.' },
        { if: 'They pick an option', then: 'Offer two install dates and explain the deposit, if you take one. Send a confirmation.' },
        { if: 'They say the dealer offered a package', then: 'Do not criticise the dealer. Ask what is covered and with which film, and let the comparison speak.' },
        { if: 'They say the car is delayed', then: 'Thank them, note the new date and move your remaining messages.' },
        { if: 'They ask for film and a coating together', then: 'Requote as one visit. A combined job is a different decision, so restart the short check-in.' },
        { if: 'They say another shop was cheaper', then: 'Ask what coverage and film that price was for. Match the scope before you compare the number.' },
        { if: 'They say no', then: 'Thank them, close the quote, stop.' },
        { if: 'No reply two weeks after delivery', then: 'Send the closing message once and mark it closed.' },
      ],
    },

    { h2: 'Message templates', id: 'templates' },
    { tpl: { label: 'Day 0: options sent', ch: 'Text', text: 'Hi [Name], [You] at [Shop]. I just emailed three PPF options for your [Vehicle], side by side, with install times. I’ve noted delivery as [date]. Tell me if that changes.' } },
    { tpl: { label: 'Day 3: coverage check-in', ch: 'Text or email', text: 'Hi [Name], had a chance to look at the PPF options? Most people driving [how they drive] go for [option]. Happy to explain why, or answer anything about seams and edges.' } },
    { tpl: { label: 'Two weeks before delivery', ch: 'Text or email', text: 'Hi [Name], your [Vehicle] should be about two weeks out. Around that date I have [date A] and [date B] open for the install. Want me to hold one? No problem if the delivery has moved, just let me know.' } },
    { tpl: { label: 'Delivery week', ch: 'Text', text: 'Hi [Name], hope the [Vehicle] has arrived safely. If you would like the film on before it sees much road, I can still fit it in on [date].' } },
    { tpl: { label: 'Closing the loop', ch: 'Email', text: 'Hi [Name], I’ll close your PPF quote for the [Vehicle] so I’m not cluttering your inbox. If you decide to protect it later, reply here and I’ll update the options. Enjoy the car.' } },

    { h2: 'What to say to the common objections', id: 'objections' },
    { h3: '“The dealer already offered protection.”' },
    { p: 'Ask what it includes. Customers often do not know whether they were offered film, a sealant or a coating. Once they find out, the comparison usually makes itself. Stay factual about your own film and coverage, and say nothing about the dealer.' },
    { tpl: { label: 'Reply to the dealer package', ch: 'Text or call', text: 'Worth checking what that package actually is. Ask them whether it is a film or a sealant, which panels it covers and who installs it. Then you can compare it properly with what I quoted.' } },
    { h3: '“Is full front enough?”' },
    { p: 'This is a buying question, not an objection. Recommend one option based on how they drive, and say plainly what the cheaper option leaves exposed.' },
    { h3: '“The other shop was cheaper.”' },
    { p: 'Film quotes differ in coverage, in film and in how the edges are finished. Ask what the lower price covered. If the scope is the same and they still prefer the other shop, wish them well. Do not cut your price to match an install you have not seen.' },
    { h3: '“The car is not here yet.”' },
    { p: 'Agree, and book the conversation instead of the install. Ask for the delivery date and say when you will check back.' },

    { h2: 'Deposits and the gap after the yes', id: 'deposit' },
    { p: 'Many film shops take a deposit, because the film is commonly ordered or cut for one vehicle and the bay is blocked for days. Whether you take one, and how much, is your policy.' },
    {
      ul: [
        'State the deposit terms in the quote itself, not for the first time when the customer says yes.',
        'A yes without a deposit, where you require one, is not a booking yet. It needs its own short follow-up: one reminder, then a call.',
        'Once the slot is held, the quote follow-up ends and booking reminders begin.',
      ],
    },
    { p: 'For the booking side, including reminder timing for multi-day installs, see the guide on <a href="/auto/guides/detailing-no-show-policy-and-reminders">no-show policy and reminders for detailing and PPF shops</a>.' },

    { h2: 'When to stop', id: 'stop' },
    {
      ul: [
        '<strong>A reply.</strong> You are in a conversation. Write each message yourself.',
        '<strong>A booked install.</strong> Reminders take over.',
        '<strong>A no.</strong> Close it.',
        '<strong>An opt-out.</strong> STOP ends texts for good.',
        '<strong>Two weeks past delivery with no reply.</strong> Send the closing message and stop.',
      ],
    },
    { call: consentLine, kind: 'warn' },
    {
      call: 'You can run this by hand with the delivery date in your calendar. <strong>CNVRT X Front Office</strong> automates the same sequence: polite reminders on every quote, paced per service, that stop the moment the customer replies. It never quotes a film price and does not take deposits; both stay with you. See <a href="/auto/quote-follow-up">how Follow-Up Until They Book works</a>.',
      kind: 'sys',
    },

    { h2: 'Mistakes that lose film jobs', id: 'mistakes' },
    {
      ol: [
        '<strong>One number, one option.</strong> The customer cannot say yes to a choice they were not shown.',
        '<strong>Ignoring the delivery date.</strong> All your messages land while the customer has no car.',
        '<strong>Arguing with the dealer’s offer.</strong> It makes you look defensive. Ask questions instead.',
        '<strong>Mentioning the deposit late.</strong> A surprise at the moment of yes stalls the booking.',
        '<strong>Following up after a clear no.</strong> It costs you the referral that customer might have given.',
      ],
    },

    { h2: 'Checklist', id: 'checklist' },
    {
      check: [
        'Delivery date written on the quote',
        'Coverage options sent side by side',
        'Deposit terms stated in the quote',
        'Consent to text recorded',
        'Coverage check-in at about day 3',
        'Phone call at about day 7',
        'Hold-a-slot message two weeks before delivery',
        'Delivery-week message sent',
        'Schedule moved if the delivery date moved',
        'Quote marked won, lost or closed',
      ],
    },
  ],
};
