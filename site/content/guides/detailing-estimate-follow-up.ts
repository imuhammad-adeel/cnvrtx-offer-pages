import type { Guide } from './types';
import { consentLine } from './types';

export const guide: Guide = {
  slug: 'detailing-estimate-follow-up',
  title: 'How to Follow Up on a Detailing Estimate (and Turn It Into a Booking)',
  label: 'Detailing estimate follow-up',
  description: 'A short follow-up plan for auto detailing estimates: why photos come first, a three-touch schedule, what to say about price and timing, and how a no becomes a later booking.',
  stage: 'Quote follow-up',
  problem: 'quote-follow-up',
  shop: 'detailing-shops',
  published: '2026-11-17',
  updated: '2026-11-17',
  read: 9,
  intro: 'A detail is a small job with a short memory. If the estimate is not booked within a few days, it is usually forgotten rather than refused. This guide keeps the follow-up as small as the job.',
  related: ['auto-detailing-lead-response-time', 'detailing-no-show-policy-and-reminders', 'window-tint-quote-follow-up'],
  blocks: [
    {
      answer:
        'Follow up on a detailing estimate three times: later the same day with two open times, the next day with a single question, and about a week later with a closing note. A detail is too small a job for a long sequence. If they do not book, and they agreed to hear from you, a seasonal reminder later does more than a fourth message now.',
    },

    { h2: 'Why “estimate”, not “quote”', id: 'estimate' },
    { p: 'A detailing price depends on the condition of the car, and you usually have not seen it. Pet hair, stains, sand and smoke all change the time a job takes. Calling your number an estimate, and saying what could change it, saves an awkward conversation at drop-off.' },
    {
      tpl: {
        label: 'Estimate wording',
        ch: 'Text or email',
        text: 'Based on your photos, a full detail on your [Vehicle] is about [price]. That assumes normal condition. If I find [heavy pet hair / staining / etc.] when I see it, I’ll tell you before I start, not after.',
      },
    },

    { h2: 'What to ask before you estimate', id: 'before' },
    {
      check: [
        'Vehicle and size: car, SUV, truck, three rows or two',
        'Three or four photos: front seats, back seats, cargo area, the worst spot',
        'Interior, exterior or both',
        'Pets, children, smoke or spills to know about',
        'When it was last detailed',
        'Whether there is a deadline: a sale, a trip, a lease return',
        'For mobile work: the address, and whether water and power are available',
        'Whether they agree to get texts from your shop',
      ],
    },
    { p: 'Photos do two jobs. They make your estimate accurate, and a customer who has taken four photos for you is far more likely to book.' },

    { h2: 'An example three-touch schedule', id: 'schedule' },
    {
      timeline: [
        { d: 'Minute 0', t: 'Estimate plus two times', x: 'Send the price and two open slots together. The customer’s real question is usually “when can you do it?”.', ch: 'Text, or email without text consent' },
        { d: 'Same day', t: 'Hold a slot', x: 'A few hours later, during the day. Offer to hold one of the two times.', ch: 'Text' },
        { d: 'Day 1', t: 'One question', x: 'Ask if they still want it done this week. Yes or no is enough.', ch: 'Text' },
        { d: 'Day 7', t: 'Closing note', x: 'A friendly sign-off that leaves the door open. Then stop.', ch: 'Text or email' },
        { d: 'Later', t: 'A seasonal reminder', x: 'Only for people who agreed to hear from you. Tied to a reason: spring, winter salt, summer trips.', ch: 'Email, or text with consent' },
      ],
    },
    { p: 'If the customer gave you a deadline, ignore the day numbers and work backwards from it. A lease return on Friday needs a booking by Tuesday.' },
    { p: 'See how the full <a href="/auto/quote-follow-up">quote follow-up workflow for auto shops</a> handles larger jobs, where the schedule is longer.' },

    { h2: 'A decision tree for each reply', id: 'tree' },
    {
      flow: [
        { if: 'They pick a time', then: 'Confirm in writing and send a reminder the day before.' },
        { if: 'They ask for a cheaper option', then: 'Offer a smaller service, such as interior only, rather than a lower price for the same work.' },
        { if: 'They say “I’ll let you know”', then: 'Ask when they need it done by, and say you will check in the day before.' },
        { if: 'They ask if you can do today', then: 'Say yes or give the next real opening. Do not squeeze in a job you will rush.' },
        { if: 'They compare you to a car wash', then: 'Explain in one line what a detail does that a wash does not. Then let it go.' },
        { if: 'They go quiet after the photos', then: 'Send the estimate anyway. Do not wait to be asked twice.' },
        { if: 'They say no', then: 'Thank them and stop. Keep them for seasonal reminders only if they agreed.' },
        { if: 'No reply by day 7', then: 'Closing note, once.' },
      ],
    },

    { h2: 'Message templates', id: 'templates' },
    { tpl: { label: 'Estimate with two times', ch: 'Text', text: 'Hi [Name], [You] at [Shop]. Thanks for the photos. A [service] on your [Vehicle] is about [price] and takes around [time]. I have [day/time A] or [day/time B]. Which is better?' } },
    { tpl: { label: 'Same day: hold a slot', ch: 'Text', text: 'Hi [Name], want me to hold [day/time A] for the [Vehicle]? It is my last opening before [day].' , note: 'Only say “last opening” when it is true.' } },
    { tpl: { label: 'Day 1: one question', ch: 'Text', text: 'Hi [Name], still want the [Vehicle] detailed this week? Happy to fit you in, or to check back another time if now is not good.' } },
    { tpl: { label: 'Day 7: closing', ch: 'Text or email', text: 'Hi [Name], I’ll leave it there for now. Whenever the [Vehicle] needs it, reply here and I’ll find you a time.' } },
    { tpl: { label: 'Seasonal reminder', ch: 'Email', text: 'Hi [Name], [season reason, e.g. road salt season is over]. If your [Vehicle] could use a proper clean, I have openings [this week / next week]. Reply and I’ll hold one.' } },

    { h2: 'What to say about price and timing', id: 'objections' },
    { h3: '“That is a lot for a car wash.”' },
    { p: 'Say what the time goes into: the hours, the steps, what the interior will look like afterwards. Then offer a smaller service. Some customers want a wash, and it is fine to let those go.' },
    { tpl: { label: 'Reply to a price objection', ch: 'Text', text: 'Fair question. A full detail is about [hours] of work: [two or three things you do]. If that is more than you need, an interior-only detail is [price] and deals with the part you see every day.' } },
    { h3: '“I’ll let you know.”' },
    { p: 'On a small job this usually means the customer has not looked at their calendar. Make it concrete with a date, not with pressure.' },
    { h3: '“Can you come to me?”' },
    { p: 'If you offer mobile service, treat it as a different booking: you need the address and what is on site. If you do not, say so plainly and offer drop-off times.' },

    { h2: 'Turn one detail into the next one', id: 'repeat' },
    { p: 'The most valuable follow-up in detailing happens after the job, not before it. A detailed car is dirty again in a few months, and the customer already trusts you.' },
    {
      ul: [
        'At pickup, say when you would suggest the next visit.',
        'A few days later, check they are happy. Problems are easier to fix early.',
        'When the interval you suggested has passed, send one reminder with two times.',
        'For regular customers, offer a standing arrangement on your own terms.',
      ],
    },
    { p: 'More on this in <a href="/auto/repeat-customers">bringing past customers back</a>.' },

    { h2: 'When to stop', id: 'stop' },
    {
      ul: [
        '<strong>A booked time.</strong> Confirmation and reminder take over.',
        '<strong>Any reply.</strong> Continue personally.',
        '<strong>A no.</strong> Stop.',
        '<strong>An opt-out.</strong> STOP ends texts for good.',
        '<strong>The closing note.</strong> Three touches is the limit for a detail.',
      ],
    },
    { call: consentLine, kind: 'warn' },
    {
      call: 'Three messages and a reminder are easy to send by hand, and easy to forget on a busy Saturday. <strong>CNVRT X Front Office</strong> runs the same sequence for every estimate, stops when the customer replies or books, and sends the reminder when the car is due again. See <a href="/auto/quote-follow-up">how Follow-Up Until They Book works</a>, or how the system fits <a href="/auto/detailing-shops">detailing shops</a> and <a href="/auto/mobile-detailing">mobile detailers</a>.',
      kind: 'sys',
    },

    { h2: 'Mistakes that lose detail bookings', id: 'mistakes' },
    {
      ol: [
        '<strong>Estimating without photos.</strong> You will be wrong in one direction or the other.',
        '<strong>A price with no time.</strong> The customer has nothing to say yes to.',
        '<strong>A long follow-up for a small job.</strong> Five messages about a detail feels like chasing.',
        '<strong>A surprise at drop-off.</strong> Say in the estimate what could change the price.',
        '<strong>No reminder after the job.</strong> The easiest booking you have is the second one.',
      ],
    },

    { h2: 'Checklist', id: 'checklist' },
    {
      check: [
        'Photos received before estimating',
        'Estimate says what could change the price',
        'Two open times sent with the estimate',
        'Consent to text recorded',
        'Same-day message to hold a slot',
        'One-question message on day 1',
        'Closing note on day 7',
        'Next-visit interval mentioned at pickup',
        'Reminder set for when the car is due again',
      ],
    },
  ],
};
