import type { Guide } from './types';
import { consentLine } from './types';

export const guide: Guide = {
  slug: 'ceramic-coating-quote-follow-up',
  title: 'How to Follow Up on a Ceramic Coating Quote (Schedule and Templates)',
  label: 'Ceramic coating quote follow-up',
  description: 'A working follow-up plan for ceramic coating quotes: what to ask before you quote, an example 30-day schedule, replies to the three common objections, and when to stop.',
  stage: 'Quote follow-up',
  problem: 'quote-follow-up',
  shop: 'ceramic-coating-shops',
  published: '2026-11-17',
  updated: '2026-11-17',
  read: 11,
  intro: 'A coating quote is a considered purchase, so silence after the quote is normal. It is not a no. This guide gives you a schedule, the words to use and a clear point to stop.',
  related: ['ppf-quote-follow-up', 'detailing-estimate-follow-up', 'window-tint-quote-follow-up'],
  blocks: [
    {
      answer:
        'Follow up on a ceramic coating quote about five times over roughly 30 days: a check-in two days after the quote, a helpful note about the paint correction around day five, a phone call around day nine, an offer to adjust the package around day fourteen, and a polite closing message near day thirty. Stop the moment the customer replies, books or says no.',
    },
    { p: 'Those days are an example, not a rule. What matters is the shape: early and light, then useful, then personal, then a clean ending. Adjust the gaps to how fast your customers usually decide.' },

    { h2: 'Why coating quotes go quiet', id: 'why' },
    { p: 'Three things make a coating different from most jobs you quote.' },
    {
      ul: [
        '<strong>The price is mostly paint correction.</strong> Two cars of the same model can need very different amounts of work. The customer often does not understand why your number is what it is.',
        '<strong>The customer is comparing unlike things.</strong> A dealer add-on, a spray product from a parts store and a professional coating all carry the word “ceramic”. Without help, they compare on price alone.',
        '<strong>It is rarely urgent.</strong> Nothing is broken. A decision that can wait usually does.',
      ],
    },
    { p: 'None of that means the customer chose another shop. It means the conversation stopped. Your follow-up restarts it.' },

    { h2: 'What to ask before you quote', id: 'before' },
    { p: 'A good follow-up starts before the quote. The more you know, the more specific your later messages can be. Ask these at the inspection or in the first conversation.' },
    {
      check: [
        'Year, make, model and colour',
        'New, nearly new or used, and roughly how long they plan to keep it',
        'How the car is washed now: by hand, at a tunnel wash, or rarely',
        'Whether it is garaged or parked outside',
        'What bothers them about the paint today: swirls, water spots, dullness',
        'Whether it has been coated, waxed or filmed before',
        'Whether there is a date that matters, such as a delivery day or an event',
        'Whether they agree to get texts from your shop',
      ],
    },
    {
      call: 'Never quote a coating from a description alone. Offer a free inspection instead. A price given before you have seen the paint is a number you will have to defend or break later.',
      kind: 'warn',
    },

    { h2: 'An example 30-day follow-up schedule', id: 'schedule' },
    { p: 'This is one workable cadence for a coating quote. Treat every day number as a starting point.' },
    {
      timeline: [
        { d: 'Day 0', t: 'Send the quote with a short summary', x: 'Same day as the inspection. Say what you saw on their paint, what the correction involves and what each package includes. One page.', ch: 'Email, plus a text to say it was sent' },
        { d: 'Day 2', t: 'A light check-in', x: 'Ask if they have questions. No pressure and no discount.', ch: 'Text or email' },
        { d: 'Day 5', t: 'Something useful', x: 'Explain the one thing most customers do not understand: why correction comes first. A photo of their own paint from the inspection works well.', ch: 'Email' },
        { d: 'Day 9', t: 'A phone call', x: 'By now a message has been ignored twice. A two-minute call often finds the real question.', ch: 'Call' },
        { d: 'Day 14', t: 'Offer a different fit', x: 'If price is the blocker, offer the next package down or a staged approach. Change the scope, not the price.', ch: 'Text or email' },
        { d: 'Day 30', t: 'Close the loop', x: 'A polite last message that makes it easy to say “not now”. Then stop.', ch: 'Email' },
      ],
    },
    { p: 'If the customer told you about a date, such as a new car arriving, move the whole schedule to fit it. A check-in the week before delivery is worth more than three messages sent while they are still waiting for the car.' },
    {
      p: 'See how the complete <a href="/auto/quote-follow-up">quote follow-up workflow for auto shops</a> fits together, including what happens after the yes.',
    },

    { h2: 'A decision tree for each reply', id: 'tree' },
    {
      flow: [
        { if: 'They reply with a question', then: 'Answer it yourself, the same day. Stop the automatic messages. You are in a conversation now.' },
        { if: 'They say yes', then: 'Offer two dates, take your deposit if you use one, and send a confirmation. The follow-up is finished.' },
        { if: 'They say the price is too high', then: 'Do not discount. Explain the correction, then offer the next package down.' },
        { if: 'They say they need to think', then: 'Ask what would help them decide, and agree a day to check back.' },
        { if: 'They say they are comparing shops', then: 'Offer a short list of what to compare, so the comparison is not price alone.' },
        { if: 'They say no', then: 'Thank them, close the quote and stop. Add them to your maintenance list only if they agreed to hear from you.' },
        { if: 'They reply STOP', then: 'No more texts, ever, unless they opt back in.' },
        { if: 'No reply by day 30', then: 'Send the closing message once, mark the quote closed, and stop.' },
      ],
    },

    { h2: 'Message templates', id: 'templates' },
    { p: 'Write these in your own voice. Replace the words in brackets. Keep each one short enough to read on a lock screen.' },
    { tpl: { label: 'Day 0: quote sent', ch: 'Text', text: 'Hi [Name], it’s [You] at [Shop]. I just emailed the coating quote for your [Vehicle], with notes on what I saw on the paint. Any questions, just reply here.' } },
    { tpl: { label: 'Day 2: check-in', ch: 'Text or email', text: 'Hi [Name], checking you got the quote for the [Vehicle]. Happy to walk you through the options if that helps. No rush.' } },
    {
      tpl: {
        label: 'Day 5: why correction comes first',
        ch: 'Email',
        text: 'Hi [Name],\n\nOne thing worth knowing before you decide. A coating locks in whatever is underneath it. That is why most of your quote is the paint correction, not the coating itself.\n\nOn your [Vehicle] I saw [what you saw]. The [Package] removes that before the coating goes on. Attached is a photo from the inspection so you can see what I mean.\n\nIf it would help, I can show you the difference in person. It takes ten minutes.\n\n[You], [Shop]',
        note: 'Use a real photo of their car. Never a stock before-and-after.',
      },
    },
    { tpl: { label: 'Day 14: a different fit', ch: 'Text or email', text: 'Hi [Name], if the full package is more than you want to spend right now, there are two other ways to do it: [Option A] or [Option B]. Want me to send those numbers?' } },
    { tpl: { label: 'Day 30: closing the loop', ch: 'Email', text: 'Hi [Name], I’ll close your coating quote for the [Vehicle] so I’m not filling your inbox. If you want to pick it up later, reply to this email and I’ll update it. Thanks for considering us.' } },

    { h2: 'What to say to the three common objections', id: 'objections' },
    { h3: '“That is more than I expected.”' },
    { p: 'This is almost always a correction question in disguise. Explain what the paint needs and what happens if it is skipped. Then offer a smaller scope. A lower package is a fair answer. A discount on the same work teaches the customer that your first price was not real.' },
    { tpl: { label: 'Reply to a price objection', ch: 'Text or call', text: 'Totally fair. Most of that number is the paint correction, because the coating seals in whatever is under it. If you want to bring it down, the honest way is [smaller package], which does [what it does]. Want me to price that?' } },
    { h3: '“I need to think about it.”' },
    { p: 'Take it at face value and make the next step small. Ask what they are weighing, and ask when to check back. A customer who names a day will usually answer on that day.' },
    { tpl: { label: 'Reply to “I need to think”', ch: 'Text', text: 'Of course. Is there anything I can clear up that would make it easier? If not, I’ll check back [day] and leave you alone until then.' } },
    { h3: '“I am comparing a few shops.”' },
    { p: 'Help them compare properly. Shops that welcome a comparison come across as confident. Give them the questions to ask everyone, including you.' },
    { tpl: { label: 'Reply to “comparing shops”', ch: 'Text or email', text: 'Good idea. When you compare, ask each shop three things: how much paint correction is included, which product they use and who backs the warranty, and what the aftercare involves. Happy to answer all three for ours.' } },

    { h2: 'When a phone call beats a message', id: 'call' },
    {
      ul: [
        'After two unanswered messages. A third identical message will not work.',
        'When the reply is a price objection. Tone matters, and text does not carry it.',
        'When the job is one of your larger quotes. The time is worth it.',
        'When the customer asked a technical question that takes a paragraph to answer.',
      ],
    },
    { p: 'Call once. If there is no answer, leave a short voicemail and go back to messages. Repeated calls feel like pressure.' },

    { h2: 'When to stop', id: 'stop' },
    { p: 'A follow-up needs an ending. Without one, it turns into the pestering you were trying to avoid. Stop on any of these.' },
    {
      ul: [
        '<strong>A reply.</strong> Any reply. From that point it is a conversation, and you write each message yourself.',
        '<strong>A booking.</strong> The quote is won. Reminders take over from here.',
        '<strong>A no.</strong> Thank them and close it.',
        '<strong>An opt-out.</strong> STOP ends texts. An unsubscribe ends emails.',
        '<strong>The closing message.</strong> After day 30, silence is your answer.',
      ],
    },
    { call: consentLine, kind: 'warn' },

    { h2: 'What not to automate', id: 'not-automate' },
    {
      ul: [
        'The price. Every quote should be approved and sent by you.',
        'The reply to an objection. A scripted answer to “too expensive” reads as scripted.',
        'Any discount or special offer.',
        'The inspection findings. They are the most persuasive part of the quote and they are specific to one car.',
      ],
    },
    {
      call: 'You can run this schedule by hand with a calendar and a notes app. <strong>CNVRT X Front Office</strong> automates the same sequence: polite text, email and call reminders on every quote that stop the moment the customer replies, with the conversation handed back to you when it needs judgment. See <a href="/auto/quote-follow-up">how Follow-Up Until They Book works</a>.',
      kind: 'sys',
    },

    { h2: 'Five mistakes that lose coating jobs', id: 'mistakes' },
    {
      ol: [
        '<strong>Quoting over the phone.</strong> You commit to a number before seeing the paint.',
        '<strong>Sending only a total.</strong> A price with no explanation invites a price comparison.',
        '<strong>One follow-up, then nothing.</strong> Most customers need more than one nudge to answer.',
        '<strong>Discounting on the first objection.</strong> Change the scope instead.',
        '<strong>No ending.</strong> An open quote list that never closes is a list nobody looks at.',
      ],
    },

    { h2: 'Checklist', id: 'checklist' },
    {
      check: [
        'Inspection done before any price is given',
        'Quote sent the same day, with notes on their paint',
        'Consent to text recorded',
        'Check-in set for about day 2',
        'Useful note with their own photo around day 5',
        'One phone call around day 9',
        'Smaller-scope option ready for a price objection',
        'Closing message sent around day 30',
        'Quote marked won, lost or closed',
      ],
    },
  ],
};
