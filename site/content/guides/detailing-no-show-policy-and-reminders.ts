import type { Guide } from './types';
import { consentLine } from './types';

export const guide: Guide = {
  slug: 'detailing-no-show-policy-and-reminders',
  title: 'No-Show Policy and Reminder Templates for Detailing and PPF Shops',
  label: 'No-show policy and reminders',
  description: 'Write a no-show and cancellation policy for a detailing, coating or PPF shop: when a deposit makes sense, a reminder timeline, and the messages to send.',
  stage: 'Bookings and no-shows',
  problem: 'no-shows',
  shop: 'ppf-shops',
  published: '2026-11-17',
  updated: '2026-11-17',
  read: 11,
  intro: 'Most no-shows are not rude customers. They are bookings that were never confirmed, never reminded and too awkward to cancel. A short written policy and four messages fix most of it.',
  related: ['ppf-quote-follow-up', 'detailing-estimate-follow-up', 'auto-detailing-lead-response-time'],
  blocks: [
    {
      answer:
        'A workable no-show policy has four parts: a written confirmation at booking, a reminder the day before that asks the customer to confirm or move, an easy way to reschedule, and a clear rule for what happens if they do not turn up. Add a deposit only for jobs that block a bay for a day or more or need materials ordered for one vehicle.',
    },
    { p: 'Everything below is an example to adapt. Deposit and cancellation rules can be affected by your state and by your payment processor’s terms, so check both before you publish a policy.' },

    { h2: 'Why customers do not turn up', id: 'why' },
    {
      ul: [
        '<strong>They forgot.</strong> The booking was made by phone or DM a week ago and nothing is on their calendar.',
        '<strong>Something came up and cancelling felt awkward.</strong> Not turning up is easier than a phone call.',
        '<strong>They were never fully committed.</strong> A booking that cost nothing to make costs nothing to skip.',
        '<strong>They did not know what it costs you.</strong> Most customers have no idea a bay was blocked for them.',
      ],
    },
    { p: 'Each cause has a different fix: a reminder, an easy way out, a small commitment, and a sentence of explanation.' },

    { h2: 'Match the policy to the job', id: 'match' },
    { p: 'A wash and a full-body film install should not have the same rules. The longer the bay is blocked and the more you prepare in advance, the firmer the policy can reasonably be.' },
    {
      table: {
        head: ['Job', 'What a no-show costs you', 'A policy that fits'],
        rows: [
          ['Standard detail, a few hours', 'A gap you may fill the same day', 'Confirmation and a day-before reminder. No deposit for most shops'],
          ['Paint correction or coating, a day or more', 'A blocked bay and a day’s plan', 'Confirmation, a reminder two or three days before and again the day before. A deposit is reasonable'],
          ['PPF or wrap, several days', 'Days of bay time, plus film ordered or cut for that car', 'A deposit to hold the slot, a reminder a week before, and a confirmation call'],
          ['Mobile visit', 'The drive there and back, and the slot', 'Day-before confirmation is essential. A weather rule that works both ways'],
        ],
      },
    },
    { p: 'This table describes general practice, not a rule. Many good shops take no deposit at all and rely on reminders.' },

    { h2: 'The four deposit options', id: 'deposit' },
    {
      ol: [
        '<strong>No deposit.</strong> Simplest. Works for short jobs and loyal customers. Relies entirely on confirmation and reminders.',
        '<strong>A flat booking fee.</strong> A fixed amount taken at booking and applied to the job. Easy to explain.',
        '<strong>A percentage of the job.</strong> Common on multi-day work, where materials are bought up front.',
        '<strong>A card on file.</strong> Nothing is charged unless the customer misses the appointment. Check what your payment processor allows first.',
      ],
    },
    {
      call: 'Whatever you choose, say it before the customer books, in writing, and say the same thing every time. A policy the customer hears about for the first time when they are charged is a dispute waiting to happen.',
      kind: 'warn',
    },

    { h2: 'Write the policy in five sentences', id: 'policy' },
    { p: 'A policy nobody reads protects nobody. Keep it short enough to fit in a confirmation message.' },
    {
      tpl: {
        label: 'Example policy, no deposit',
        ch: 'Website and confirmation',
        text: 'We hold your time for you and do not double-book.\nIf you need to change your appointment, please tell us at least [24 hours] ahead. Reply MOVE to your reminder or call [number].\nIf you are running more than [15 minutes] late, let us know so we can keep your slot.\nIf an appointment is missed without notice, we may ask for a deposit on your next booking.',
      },
    },
    {
      tpl: {
        label: 'Example policy, with deposit',
        ch: 'Website, quote and confirmation',
        text: 'A deposit of [amount] holds your install dates and goes toward your total.\nWe order and prepare materials for your vehicle in advance.\nYou can move your booking once, free of charge, with at least [72 hours] notice.\nWith less notice, or if the appointment is missed, the deposit is [your rule].\nIf we need to move your booking, you choose a new date or a full refund of the deposit.',
        note: 'The words in brackets are yours to set. Have the wording checked against your state’s rules and your payment processor’s terms.',
      },
    },

    { h2: 'An example reminder timeline', id: 'timeline' },
    { h3: 'Short jobs: details, tint, simple installs' },
    {
      timeline: [
        { d: 'At booking', t: 'Confirmation', x: 'Date, time, address, what to bring or remove from the car, and your policy in one line.', ch: 'Text and email' },
        { d: 'Day before', t: 'Confirm or move', x: 'One message with two possible replies. This is the message that does most of the work.', ch: 'Text' },
        { d: 'Morning of', t: 'Short reminder', x: 'The time and the address again. Useful for afternoon appointments.', ch: 'Text' },
        { d: 'If missed', t: 'Rebooking offer', x: 'Friendly, no blame. Offer two new times.', ch: 'Text or email' },
      ],
    },
    { h3: 'Multi-day jobs: coating, PPF, wraps' },
    {
      timeline: [
        { d: 'At booking', t: 'Confirmation and deposit receipt', x: 'Drop-off and pickup dates, what happens each day, and the policy.', ch: 'Email and text' },
        { d: '1 week before', t: 'Heads-up', x: 'Confirms the dates still work while there is time to fill the slot if they do not.', ch: 'Email or text' },
        { d: '2 to 3 days before', t: 'Preparation note', x: 'How to arrive: a clean car if possible, personal items removed, a ride arranged.', ch: 'Text' },
        { d: 'Day before', t: 'Confirm or move', x: 'The same two-reply message as for short jobs.', ch: 'Text' },
        { d: 'No reply by evening', t: 'A phone call', x: 'For a multi-day job, do not leave tomorrow to chance.', ch: 'Call' },
        { d: 'During the job', t: 'Drop-off and pickup messages', x: 'Confirms you have the car, and tells them when it is ready.', ch: 'Text' },
      ],
    },
    { p: 'See how the complete <a href="/auto/no-shows">no-show workflow for auto shops</a> fits together, including what happens after a missed slot.' },

    { h2: 'Message templates', id: 'templates' },
    { tpl: { label: 'Booking confirmation', ch: 'Text', text: 'You are booked at [Shop] for [service] on [day] at [time]. Address: [address]. Need to change it? Reply to this message. We hold this time just for you.' } },
    { tpl: { label: 'Day before: confirm or move', ch: 'Text', text: 'See you tomorrow at [time] for your [Vehicle] at [Shop]. Reply YES to confirm or MOVE to change your appointment.' } },
    { tpl: { label: 'Preparation note, multi-day', ch: 'Text', text: 'Hi [Name], your [Vehicle] is booked in from [day] to [day]. Please remove personal items and arrange a ride from the shop. Drop-off is [time]. Any questions, reply here.' } },
    { tpl: { label: 'Reply to MOVE', ch: 'Text', text: 'No problem. I can do [day/time A] or [day/time B] instead. Which suits you?' } },
    { tpl: { label: 'After a missed appointment', ch: 'Text or email', text: 'Hi [Name], we missed you today for the [Vehicle]. Hope everything is alright. If you would still like it done, I have [day/time A] or [day/time B]. Just reply with the one that works.', note: 'Keep the tone neutral. Many no-shows rebook when given an easy way back.' } },
    { tpl: { label: 'Mobile: weather change', ch: 'Text', text: 'Hi [Name], the forecast for tomorrow is not good for an outdoor detail. I can move you to [day/time A] or [day/time B] at no cost. Which would you prefer?' } },

    { h2: 'A decision tree for the day before', id: 'tree' },
    {
      flow: [
        { if: 'They reply YES', then: 'Mark it confirmed. Nothing more to do.' },
        { if: 'They reply MOVE', then: 'Offer two new times straight away, then try to fill the freed slot.' },
        { if: 'They reply with a question', then: 'Answer it yourself. A question the day before is usually a nervous customer, not a cancellation.' },
        { if: 'No reply, short job', then: 'Leave it booked. Send the morning reminder.' },
        { if: 'No reply, multi-day job', then: 'Call that evening.' },
        { if: 'They cancel inside your notice period', then: 'Apply your policy as written, politely, once.' },
        { if: 'They do not turn up', then: 'Wait your grace period, send the rebooking message, and note it on their record.' },
      ],
    },

    { h2: 'Filling a freed slot', id: 'fill' },
    {
      ul: [
        'Keep a short list of customers who said “sooner if anything opens up”.',
        'Message them in the order they asked, one at a time, with the specific time.',
        'Offer the slot to a quote that is still open. A sudden opening is a reason to get in touch.',
        'If nothing fills it, use the time for the work that never gets done: photos of finished jobs, review replies, stock.',
      ],
    },

    { h2: 'What not to automate', id: 'not-automate' },
    {
      ul: [
        'Charging a no-show fee. A person should decide, case by case.',
        'The call to a customer with a multi-day job who has not confirmed.',
        'Any message about a dispute or a refund.',
        'A weather reschedule. You decide, then send it.',
      ],
    },
    { call: consentLine, kind: 'warn' },
    {
      call: 'You can send these four messages by hand for every booking. <strong>CNVRT X Front Office</strong> sends them for you: a confirmation the moment the customer books, “Reply YES or MOVE” the day before, reminders, drop-off and pickup texts, and an offer to rebook after a missed slot. It does not take deposits or charge fees; those stay with you. See <a href="/auto/no-shows">how No-Show Shield works</a>.',
      kind: 'sys',
    },

    { h2: 'Mistakes that cause no-shows', id: 'mistakes' },
    {
      ol: [
        '<strong>No written confirmation.</strong> A booking that exists only in a phone call is easy to forget.',
        '<strong>A reminder with no way to reply.</strong> “See you tomorrow” gives a customer who cannot come nothing to do.',
        '<strong>Making cancelling hard.</strong> If moving a booking takes a phone call, people skip it instead.',
        '<strong>One policy for every job.</strong> A deposit on a basic detail costs bookings. No deposit on a week of film costs you the week.',
        '<strong>Enforcing the policy angrily.</strong> Apply it once, calmly. The customer may still come back.',
      ],
    },

    { h2: 'Checklist', id: 'checklist' },
    {
      check: [
        'Policy written in five sentences or fewer',
        'Policy shown before booking, not after',
        'Deposit rule matched to the size of the job',
        'Wording checked against state rules and processor terms',
        'Confirmation sent at booking',
        'Day-before message asks for YES or MOVE',
        'Earlier heads-up for multi-day jobs',
        'Phone call for unconfirmed multi-day jobs',
        'Rebooking message ready for missed appointments',
        'Short list kept for filling freed slots',
      ],
    },
  ],
};
