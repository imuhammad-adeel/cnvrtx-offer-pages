import type { Guide } from './types';
import { consentLine } from './types';

export const guide: Guide = {
  slug: 'window-tint-quote-follow-up',
  title: 'Window Tint Quote Follow-Up: A Fast 7-Day Plan With Templates',
  label: 'Window tint quote follow-up',
  description: 'How to follow up on a window tint quote: why the first hour matters most, a short seven-day schedule, replies to price and legality questions, and when to stop.',
  stage: 'Quote follow-up',
  problem: 'quote-follow-up',
  shop: 'window-tint-shops',
  published: '2026-11-17',
  updated: '2026-11-17',
  read: 9,
  intro: 'Tint is the fastest decision in the protection trade. The follow-up that works for a coating quote is far too slow here. This is a short plan built for a customer who will book somewhere this week.',
  related: ['auto-detailing-lead-response-time', 'detailing-estimate-follow-up', 'ceramic-coating-quote-follow-up'],
  blocks: [
    {
      answer:
        'Follow up on a window tint quote quickly and briefly: offer two appointment times in the same message as the price, check in later the same day, once the next day and once around day three, then send a closing note at day seven and stop. Most tint customers book within days, so a long sequence adds nothing.',
    },
    { p: 'The day numbers are an example. If your customers usually book the same afternoon, shorten it further.' },

    { h2: 'Why tint follow-up is different', id: 'why' },
    {
      ul: [
        '<strong>The price is simple.</strong> Most shops price from a menu by vehicle type and film tier. There is little to explain and little to negotiate.',
        '<strong>The customer asked several shops at once.</strong> The same one-line question went to three numbers.',
        '<strong>The decision is “when”, not “whether”.</strong> They already want tint. They are choosing who and which day.',
        '<strong>The appointment is short.</strong> It is easy to fit in, and just as easy to book elsewhere.',
      ],
    },
    { p: 'So the follow-up has one job: turn the price into a time on the calendar before another shop does.' },

    { h2: 'What to ask before you quote', id: 'before' },
    {
      check: [
        'Year, make and model, and whether it is a car, truck or SUV',
        'Which windows: all, fronts only, rear only, windshield strip or full windshield',
        'Which film tier they are interested in, if they know',
        'Whether there is old tint to remove first',
        'Which state the vehicle is registered in',
        'When they would like it done',
        'Whether they agree to get texts from your shop',
      ],
    },
    {
      call: 'Tint laws differ from state to state, including how dark each window may be. Quote the legal option for the customer’s state and say so. Check your own state’s current rules rather than relying on memory or on this guide.',
      kind: 'warn',
    },

    { h2: 'The quote message is the first follow-up', id: 'quote' },
    { p: 'In tint, the quote and the booking offer belong in the same message. A price alone asks the customer to do the next step. A price with two times asks them to pick one.' },
    {
      tpl: {
        label: 'Quote with two times',
        ch: 'Text',
        text: 'Hi [Name], [You] at [Shop]. For your [Vehicle], [windows] in [film tier] is [price], and [next tier up] is [price]. It takes about [time]. I have [day/time A] or [day/time B] open. Which works?',
        note: 'Give two film tiers, not five. Two times, not “whenever suits”.',
      },
    },

    { h2: 'An example seven-day schedule', id: 'schedule' },
    {
      timeline: [
        { d: 'Minute 0', t: 'Price plus two times', x: 'Sent as soon as you have the vehicle and windows. Speed matters more here than polish.', ch: 'Text, or email if no text consent' },
        { d: 'Same day', t: 'One check-in', x: 'A few hours later, during the day. Ask if either time works.', ch: 'Text' },
        { d: 'Day 1', t: 'A new time', x: 'Offer a fresh slot. A different day sometimes is the whole objection.', ch: 'Text' },
        { d: 'Day 3', t: 'One question', x: 'Ask whether they are still looking to get it done. Easy to answer yes or no.', ch: 'Text or email' },
        { d: 'Day 7', t: 'Close the loop', x: 'A short closing note, then stop.', ch: 'Text or email' },
      ],
    },
    { p: 'Compare this with a <a href="/auto/guides/ceramic-coating-quote-follow-up">ceramic coating follow-up</a>, which runs for about a month. Using the long version on a tint quote means your second message arrives after the tint is already on the car.' },
    { p: 'For the first minutes after an inquiry arrives, see <a href="/auto/lead-response">lead response for auto shops</a>.' },

    { h2: 'A decision tree for each reply', id: 'tree' },
    {
      flow: [
        { if: 'They pick a time', then: 'Confirm it in writing straight away and send a reminder the day before.' },
        { if: 'They ask for a different day', then: 'Offer two more times. Do not ask “when suits you?”.' },
        { if: 'They ask for your cheapest price', then: 'Give the entry tier and say in one line what the better film adds.' },
        { if: 'They ask how dark they can go', then: 'Give the legal limit for their state as you understand it, and offer the closest legal shade.' },
        { if: 'They ask if ceramic film is worth it', then: 'Explain the difference in heat rejection in plain words. Let them choose.' },
        { if: 'They say they found it cheaper', then: 'Ask which film that price was for. Match the film before comparing the number.' },
        { if: 'They say no, or they already had it done', then: 'Thank them and stop.' },
        { if: 'No reply by day 7', then: 'Send the closing note once.' },
      ],
    },

    { h2: 'More templates', id: 'templates' },
    { tpl: { label: 'Same-day check-in', ch: 'Text', text: 'Hi [Name], does [day/time A] or [day/time B] work for the tint on your [Vehicle]? I can hold one for you.' } },
    { tpl: { label: 'Day 1: a new time', ch: 'Text', text: 'Hi [Name], a spot opened [day/time] if that is easier for the [Vehicle]. Takes about [time] and you can wait or drop off.' } },
    { tpl: { label: 'Day 3: one question', ch: 'Text or email', text: 'Hi [Name], still looking to get the [Vehicle] tinted? If so I can fit you in this week. If you are sorted, no worries at all.' } },
    { tpl: { label: 'Day 7: closing', ch: 'Text or email', text: 'Hi [Name], I’ll leave this here so I’m not bothering you. If you want the [Vehicle] tinted down the line, just reply and I’ll get you a time.' } },
    { tpl: { label: 'Reply to “cheapest price”', ch: 'Text', text: 'Entry film for your [Vehicle] is [price]. The step up is [price] and blocks noticeably more heat, which is what most people feel the difference in. Both carry [your warranty]. Which would you like?' } },

    { h2: 'Price, legality and aftercare questions', id: 'questions' },
    { h3: 'Price' },
    { p: 'Tint customers ask for the lowest number because it is the only thing they know how to compare. Give it, then give one reason to consider the next tier. Do not list every film you stock.' },
    { h3: 'Legality' },
    { p: 'Answer for the state the vehicle is registered in. If a customer asks for something darker than the limit, say what the limit is and what you will install. That conversation should always be with a person, not a script.' },
    { h3: 'Aftercare' },
    { p: 'Tell customers before the appointment what to expect afterwards, such as leaving the windows up for the first few days and that a slight haze can show while the film dries. Customers who are warned do not call back worried.' },

    { h2: 'When to stop', id: 'stop' },
    {
      ul: [
        '<strong>A booked time.</strong> The quote is won. Send the confirmation and reminder.',
        '<strong>A reply of any kind.</strong> Carry on personally.',
        '<strong>A no, or “already done”.</strong> Stop at once.',
        '<strong>An opt-out.</strong> STOP ends texts for good.',
        '<strong>Day seven.</strong> After the closing note, nothing more.',
      ],
    },
    { call: consentLine, kind: 'warn' },
    {
      call: 'You can do all of this from your phone between cars. <strong>CNVRT X Front Office</strong> automates the same short sequence, set to tint’s faster pace, and stops it when the customer replies or books. The AI front desk never quotes prices and only answers legality questions from wording you approve. See <a href="/auto/quote-follow-up">how Follow-Up Until They Book works</a>.',
      kind: 'sys',
    },

    { h2: 'Mistakes that lose tint jobs', id: 'mistakes' },
    {
      ol: [
        '<strong>Replying hours later.</strong> The first shop with a price and a time usually wins.',
        '<strong>A price with no time attached.</strong> You have handed the next step back to the customer.',
        '<strong>Too many film choices.</strong> Two tiers is a decision. Five is homework.',
        '<strong>Guessing at the law.</strong> A wrong answer on legal shade comes back to you.',
        '<strong>A month-long sequence.</strong> By week two you are messaging someone whose windows are already tinted.',
      ],
    },

    { h2: 'Checklist', id: 'checklist' },
    {
      check: [
        'Vehicle, windows and state collected first',
        'Price sent with two appointment times',
        'Two film tiers offered, not more',
        'Legal shade confirmed for their state',
        'Same-day check-in sent',
        'New time offered on day 1',
        'Yes-or-no question on day 3',
        'Closing note on day 7',
        'Aftercare explained before the appointment',
      ],
    },
  ],
};
