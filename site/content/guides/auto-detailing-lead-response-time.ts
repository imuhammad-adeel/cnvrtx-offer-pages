import type { Guide } from './types';
import { consentLine } from './types';

export const guide: Guide = {
  slug: 'auto-detailing-lead-response-time',
  title: 'How Fast Should an Auto Detail Shop Respond to a New Lead?',
  label: 'Lead response time for detail shops',
  description: 'A realistic lead response target for a small detailing shop, what the research on response time actually measured, what a first reply must contain, and how to test your own speed.',
  stage: 'Lead response',
  problem: 'lead-response',
  shop: 'detailing-shops',
  published: '2026-11-17',
  updated: '2026-11-17',
  read: 10,
  intro: 'You cannot answer every inquiry in one minute with a polisher in your hand. You can still be the first shop the customer hears from. This guide separates the reply that must be instant from the one that can wait an hour.',
  related: ['detailing-estimate-follow-up', 'window-tint-quote-follow-up', 'detailing-no-show-policy-and-reminders'],
  blocks: [
    {
      answer:
        'Aim for three speeds. An acknowledgement within a minute or two, which can be automatic. A real, personal reply within the hour during working hours. A phone call the same day for any job worth more than a basic detail. The acknowledgement keeps the customer from messaging the next shop; the personal reply is what books the job.',
    },
    { p: 'That is a target for a small shop with no front desk. If you can do better, do. If you are replying in the evening to messages from the morning, this guide is for you.' },

    { h2: 'What the research says, and what it does not', id: 'research' },
    {
      p: 'The most cited study on this is “The Short Life of Online Sales Leads”, published in Harvard Business Review in March 2011 by James Oldroyd, Kristina McElheran and David Elkington. The authors audited how quickly US companies responded to web-generated leads and concluded, in their words, that “most companies are not responding nearly fast enough”. They reported that firms which tried to reach a lead within an hour were nearly seven times as likely to have a meaningful conversation with a decision maker as firms that waited even an hour longer.',
    },
    {
      call: 'Read that finding carefully. It studied business-to-business companies and online sales leads, not detail shops. It is strong evidence that speed matters and that the drop-off is steep. It is not a measurement of what happens at a shop like yours, and nobody should quote you a percentage as if it were.',
      kind: 'warn',
    },
    { p: 'For a detail shop the logic is simpler than any study. A customer who wants their car cleaned sends the same message to two or three shops. Whoever answers first, with something useful, is the one they keep talking to.' },

    { h2: 'A realistic target for a small shop', id: 'target' },
    {
      table: {
        head: ['Reply', 'When', 'Who or what sends it', 'What it does'],
        rows: [
          ['Acknowledgement', 'Within a minute or two', 'Automatic', 'Tells the customer the message arrived and asks one question'],
          ['Personal reply', 'Within the hour, in working hours', 'You or your team', 'Answers the question and offers two times'],
          ['Phone call', 'Same day', 'You', 'For larger jobs: correction, coating, anything needing an inspection'],
          ['After-hours inquiry', 'Acknowledged at once, answered by mid-morning', 'Automatic, then you', 'Stops an evening message from being cold by the time you see it'],
        ],
      },
    },
    { p: 'These are working targets, not measured industry figures. Set your own and check them against the self-test below.' },

    { h2: 'What a first reply must contain', id: 'first-reply' },
    { p: 'A fast reply that says nothing is only slightly better than a slow one. A useful first reply has three parts.' },
    {
      ol: [
        '<strong>Proof a person or a shop received it.</strong> Use their name and your shop’s name.',
        '<strong>One question that moves it forward.</strong> Usually the vehicle and the service. Not a form to fill in.',
        '<strong>A next step.</strong> Photos, a time, or a call. Something they can do in ten seconds.',
      ],
    },
    { tpl: { label: 'First reply to a detailing inquiry', ch: 'Text or DM', text: 'Hi [Name], thanks for reaching out to [Shop]. Happy to help. What vehicle is it, and are you after interior, exterior or both? If you can send two or three photos I’ll give you an accurate price.' } },
    {
      call: 'Do not open with a price list. A menu of six packages asks the customer to do the work, and gives them a number to compare before they know what they are comparing.',
      kind: 'warn',
    },
    { p: 'See how the complete <a href="/auto/lead-response">lead response workflow for auto shops</a> handles every channel in one inbox.' },

    { h2: 'Channel by channel', id: 'channels' },
    {
      table: {
        head: ['Where the lead arrives', 'Why it gets missed', 'What a good first response looks like'],
        rows: [
          ['Phone call you could not take', 'It rings once and leaves no trace beyond a number', 'A text back within moments to callers who agreed to texts, and a note to yourself to call'],
          ['Website form', 'It goes to an email inbox nobody checks during the day', 'An immediate email confirming receipt, then a text or call'],
          ['Facebook lead form', 'The lead sits inside the ads tool until someone opens it', 'The same first reply as a website form, as soon as it arrives'],
          ['Instagram or Facebook message', 'It does not ring, and it feels casual', 'A reply in the same thread, in the same casual tone'],
          ['Walk-in or wave from the street', 'You are mid-job', 'A card or QR code that starts the same conversation by text'],
        ],
      },
    },

    { h2: 'Templates for each situation', id: 'templates' },
    { tpl: { label: 'Missed call', ch: 'Text', text: 'Sorry we missed you. This is [Shop]. What can we help with?', note: 'Send only to callers who have agreed to texts from your shop.' } },
    { tpl: { label: 'Website or ad form', ch: 'Email', text: 'Hi [Name],\n\nThanks for getting in touch with [Shop]. We have your request for [service] on your [Vehicle].\n\nTo give you an accurate price, could you reply with two or three photos of the car, inside and out? We will come back to you today with a price and two times that are open.\n\n[You], [Shop]' } },
    { tpl: { label: 'After hours', ch: 'Text or DM', text: 'Thanks for your message. We are closed for the day, but I have it and will reply first thing tomorrow. If you want a head start, send the vehicle and a couple of photos now.' } },
    { tpl: { label: 'Personal reply with two times', ch: 'Text or DM', text: 'Thanks for the photos, [Name]. A [service] on your [Vehicle] is about [price]. I have [day/time A] or [day/time B] open. Which works better?' } },

    { h2: 'Mistakes in the first reply', id: 'mistakes' },
    {
      ol: [
        '<strong>“Call us.”</strong> They messaged because they did not want to call.',
        '<strong>A wall of text.</strong> Nobody reads six packages on a lock screen.',
        '<strong>A price with no question.</strong> The conversation ends on your number.',
        '<strong>An automatic reply and then nothing.</strong> The acknowledgement buys you an hour, not a day.',
        '<strong>Different answers on different channels.</strong> Whoever replies on Instagram should say what the phone would say.',
        '<strong>Texting at midnight.</strong> Send automatic texts in daytime hours. Email can go at any time.',
      ],
    },

    { h2: 'Test your own response time', id: 'self-test' },
    { p: 'Most owners guess their response time and guess low. A simple test takes one week.' },
    {
      check: [
        'Ask a friend to send an inquiry through your website form at a busy time of day',
        'Ask another to message your Instagram or Facebook page in the evening',
        'Ask a third to call during a job and not leave a voicemail',
        'Write down when each one was sent and when your shop first replied',
        'Write down what the first reply said, word for word',
        'For one week, note the arrival time and reply time of every real inquiry',
        'Look at the slowest three. That is the number your customers experience',
      ],
    },
    { p: 'Your average matters less than your worst cases. Customers who waited five hours are the ones you lost.' },

    { h2: 'Consent and timing', id: 'consent' },
    { p: consentLine },
    {
      ul: [
        'In the United States a business has to register with the phone carriers before texting from a local number. Until that is approved, use email and phone calls.',
        'A customer who filled in a form has not automatically agreed to texts. Ask for it clearly on the form.',
        'Keep automatic texts to daytime hours. A late-night inquiry gets an email at once and a text in the morning.',
      ],
    },
    { p: 'More on how carrier approval works on <a href="/auto/how-it-works#texting">how it works</a>.' },
    {
      call: 'You can hit these targets by hand if someone is free to watch every channel. <strong>CNVRT X Front Office</strong> automates the first step: website, Facebook and Instagram leads get an instant email at any hour and a text within a minute during texting hours, and you get a “call now” alert when a new lead has not replied after five minutes. The personal reply and the call are still yours. See <a href="/auto/lead-response">how 60-Second Lead Response works</a>.',
      kind: 'sys',
    },

    { h2: 'One-page checklist', id: 'checklist' },
    {
      check: [
        'Every channel lands somewhere you actually look',
        'An acknowledgement goes out within a minute or two',
        'The acknowledgement asks one question',
        'A personal reply follows within the hour in working hours',
        'Larger jobs get a phone call the same day',
        'After-hours messages are acknowledged at once',
        'Text consent is asked for on every form',
        'Response time is tested once a quarter',
      ],
    },

    { sources: [{ t: 'Oldroyd, McElheran and Elkington, “The Short Life of Online Sales Leads”, Harvard Business Review, March 2011', url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads' }] },
  ],
};
