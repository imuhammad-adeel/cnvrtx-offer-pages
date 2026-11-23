/**
 * The long-form half of each problem page on cnvrtx.com (/auto/<slug>).
 * The hero, the animated example, the calculator and "what changes" come from the approved
 * door copy in src/content/automotiveDoors.ts and automotiveDoorPages.ts. This file adds what
 * a search visitor needs: the plain answer, why it happens, how the fix runs step by step,
 * where automation stops, and what the system does not do.
 *
 * WRITING RULES
 * - Only what the system actually does, in the wording of the approved copy.
 * - No invented statistics, results or customers. Timings only where the approved copy states them.
 * - No em dashes. Short plain sentences.
 * - `{price}`, `{hours}` and `{site}` are filled from config.
 */

export type ProblemPage = {
  title: string;
  description: string;
  /** Two short paragraphs: what the problem is, and what fixes it. */
  answer: [string, string];
  why: { title: string; items: { t: string; d: string }[] };
  /** The same moment from both sides of the counter. */
  customer: string[];
  owner: string[];
  /** What it costs the shop in time and attention, beyond the lost job. Leads into the calculator. */
  cost: string;
  steps: { title: string; lead?: string; items: { when?: string; t: string; d: string }[] };
  /** Who does what. `ai` is left out where no AI is involved. */
  auto: string[];
  ai?: string[];
  human: string[];
  limits: string[];
  /** Added after the page's own approved questions. */
  faq: { q: string; a: string }[];
  /** Shop-type pages where this problem bites hardest. */
  shops: string[];
  /** One line under the compact offer. */
  offerTitle: string;
};

const consent = 'Text messages go only to people who agreed to receive them, after the phone carrier approves your business for texting (A2P 10DLC).';
const hoursNote = 'Automated texts go out between {hours}. Outside those hours a text waits for the morning. Email goes at any hour.';

export const problemPages: Record<string, ProblemPage> = {
  'missed-calls': {
    title: 'Missed-Call Text Back for Auto Shops | CNVRT X',
    description: 'What happens to the calls your shop cannot pick up, and how a missed-call text back and a job card keep that customer from calling the next shop.',
    answer: [
      'A missed call at an auto shop is usually a customer who was ready to book and reached nobody. Most of them do not leave a voicemail. They call the next shop on the list.',
      'The fix is a missed-call text back: the call is caught, a job card lands on your phone, and callers who agreed to texts get a short message from your shop within moments. You call back when your hands are free, and the lead is still yours.',
    ],
    why: {
      title: 'Why shops miss calls',
      items: [
        { t: 'Your hands are busy', d: 'You cannot stop a polish, a film install or a wheel fitment halfway to pick up the phone.' },
        { t: 'There is no front desk', d: 'In most small shops the person who answers is also the person doing the work.' },
        { t: 'Calls come in bunches', d: 'Lunch breaks and the hour after work bring several callers at once. One gets through.' },
        { t: 'Voicemail feels like a dead end', d: 'A caller with three shops open in a browser has no reason to wait for a call back.' },
      ],
    },
    customer: ['They call while the question is fresh.', 'It rings out. No greeting, or a full mailbox.', 'They tap the next shop in the search results.'],
    owner: ['You feel the phone buzz and cannot reach it.', 'Hours later you see a number with no name and no message.', 'You call back and reach voicemail, or a customer who already booked.'],
    cost: 'The lost job is only part of it. Returning calls blind takes the end of your day, and you never learn which callers were serious. Put your own numbers in below.',
    steps: {
      title: 'How Missed-Call Rescue runs, step by step',
      lead: 'This is the sequence we set up on your shop’s number.',
      items: [
        { when: 'The call', t: 'A call rings and nobody can answer', d: 'It is caught instead of ending in silence. Where the AI phone backup is set up, it can answer and take the details.' },
        { when: 'Right away', t: 'A job card lands on your phone', d: 'It shows who called, when, and what they asked for once they reply or speak to the AI.' },
        { when: 'Right away', t: 'Callers who agreed to texts get a text back', d: 'A short, friendly message in your shop’s voice asks what they need. No sales pitch.' },
        { when: 'When they reply', t: 'The conversation opens in one inbox', d: 'Their answer arrives in the same inbox as your other calls, texts, chat and DMs, and on the mobile app.' },
        { when: 'When you are free', t: 'You call back with the details in hand', d: 'Or the AI front desk carries the conversation as far as booking the free inspection.' },
      ],
    },
    auto: ['Catching the missed call', 'Creating the job card', 'Sending the text back to callers who agreed to texts', 'Creating a call-back task for callers who have not agreed to texts'],
    ai: ['Answering the phone as backup, where it is set up', 'Collecting the vehicle and the service they want', 'Booking the free inspection'],
    human: ['Quoting a price', 'Any question about a specific job or a complaint', 'The call back, when the customer asks for a person'],
    limits: [
      consent,
      'Callers who have not agreed to texts are not texted. You get a call-back task instead.',
      'It does not quote prices, by text or by voice.',
      'It does not make the caller answer. Some people who call once never reply to anything.',
      hoursNote,
    ],
    faq: [
      { q: 'What is a missed-call text back?', a: 'It is an automatic text message sent to a caller when your shop does not answer. It tells them you saw the call and asks what they need, so the conversation continues by text instead of ending.' },
      { q: 'Do I need a new phone number?', a: 'The plan includes one local US number and the inbox it lands in. We connect your phone as part of the build, so customers keep calling the number they know.' },
      { q: 'Does it work before texting is approved?', a: 'Yes. Carrier approval for business texting takes its own time. Until it arrives, the job card and the AI front desk still work, and missed calls still reach you as tasks.' },
    ],
    shops: ['mobile-detailing', 'detailing-shops', 'window-tint-shops', 'wheel-and-tire-shops'],
    offerTitle: 'Missed calls are one leak. One plan closes all of them.',
  },

  'lead-response': {
    title: 'Lead Response for Auto Shops: Answer Leads First | CNVRT X',
    description: 'Why web, Facebook and Instagram leads go cold while you work, and how an instant first reply and a “call now” alert keep your shop first in line.',
    answer: [
      'Lead response is how quickly a new inquiry hears back from your shop. A customer who fills in a form or messages an ad has usually contacted more than one shop, and the first useful reply tends to get the conversation.',
      'The fix is an automatic first reply that goes out as soon as the lead arrives, plus an alert that tells you which lead to call now. You stay first without stopping work.',
    ],
    why: {
      title: 'Why replies are slow',
      items: [
        { t: 'Leads arrive in different places', d: 'A website form, a Facebook lead form and an Instagram DM each land somewhere else, and none of them ring.' },
        { t: 'You check messages between jobs', d: 'That can mean hours. The customer was comparing shops at the time they wrote.' },
        { t: 'Nobody owns the first reply', d: 'Without a front desk, the first reply is whoever remembers, whenever they remember.' },
      ],
    },
    customer: ['They send the same question to two or three shops.', 'One shop replies while they are still on their phone.', 'That shop gets the follow-up questions, and usually the booking.'],
    owner: ['You find the lead at the end of the day.', 'You reply with a good answer, hours late.', 'You hear nothing back and cannot tell why.'],
    cost: 'A slow reply does not look like a loss. The lead simply never answers. If those leads came from ads, you paid for each one. Use your own numbers below.',
    steps: {
      title: 'How 60-Second Lead Response runs, step by step',
      items: [
        { when: 'The lead arrives', t: 'A form, Facebook or Instagram lead comes in', d: 'It is collected into one inbox with your calls, texts, chat and DMs.' },
        { when: 'Any hour', t: 'An instant email goes out', d: 'It confirms you received the request and asks the next useful question, in your shop’s voice.' },
        { when: 'Within a minute', t: 'A text follows, during texting hours', d: 'To leads who agreed to texts. Between {hours}; outside those hours it waits for the morning.' },
        { when: 'After 5 minutes', t: 'You get a “call now” alert', d: 'If the new lead has not replied, your phone tells you who is waiting so you can ring them between jobs.' },
        { when: 'When they answer', t: 'The conversation continues in the inbox', d: 'You reply from the mobile app, or the AI front desk collects details and books the free inspection.' },
      ],
    },
    auto: ['The instant email', 'The first text to leads who agreed to texts', 'The “call now” alert to you', 'Putting every channel in one inbox'],
    ai: ['Answering common questions from information you approve', 'Collecting the vehicle and service', 'Booking the free inspection'],
    human: ['The phone call that turns a warm lead into a booking', 'Pricing questions', 'Anything unusual about the job'],
    limits: [
      consent,
      hoursNote,
      'We do not publish a measured reply time yet. The first email is immediate; the first text follows within a minute during texting hours.',
      'It does not replace the call. A fast first reply keeps the lead warm. A person still closes most bigger jobs.',
      'It answers leads that arrive through your website, Facebook and Instagram. It cannot see inquiries sent to a personal phone or a private account.',
    ],
    faq: [
      { q: 'How fast should an auto shop reply to a new lead?', a: 'As fast as you can without leaving the job, and ideally while the customer is still on their phone. Our guide on lead response time for detail shops explains the research and a realistic target for a small shop.' },
      { q: 'What if a lead comes in at midnight?', a: 'The email goes out right away. The text waits until texting hours start in the morning, so nobody is texted in the middle of the night.' },
      { q: 'Does it work with my ads?', a: 'Yes. Facebook and Instagram lead forms feed the same inbox, so an ad lead gets the same first reply as a website form.' },
    ],
    shops: ['window-tint-shops', 'detailing-shops', 'ceramic-coating-shops', 'vinyl-wrap-shops'],
    offerTitle: 'A fast first reply is one of nine systems in one plan.',
  },

  'ai-receptionist': {
    title: 'AI Receptionist for Auto Shops: Calls, Chat and DMs | CNVRT X',
    description: 'What an AI receptionist does for an auto shop after hours and while you work: what it answers, what it books, and what it always hands to you.',
    answer: [
      'An AI receptionist is software that answers your shop’s calls and messages when no person can. For an auto shop that mostly means evenings, weekends and the hours your hands are full.',
      'Ours answers on your website chat, Facebook, Instagram and a voice line, using only information you approved. It collects the customer’s details and books the free inspection. It never quotes prices, it says it is an AI when asked, and it passes anything that needs judgment to you.',
    ],
    why: {
      title: 'Why after-hours inquiries go unanswered',
      items: [
        { t: 'Customers shop for car work at night', d: 'They research after work and message when it suits them, not during shop hours.' },
        { t: 'A person at the desk still goes home', d: 'Even a full-time receptionist covers one shift, with breaks.' },
        { t: 'DMs feel casual, so they wait', d: 'A message on Instagram does not ring like a phone, and it is easy to leave until morning.' },
      ],
    },
    customer: ['They ask a simple question at 11 PM.', 'Somebody answers, says it is the shop’s AI assistant, and helps.', 'They pick a time for a free inspection before they put the phone down.'],
    owner: ['You sleep, or finish the car in front of you.', 'In the morning there is a booked inspection and a short summary.', 'Anything it could not answer is waiting for you, clearly marked.'],
    cost: 'Every unanswered evening message is a customer who kept scrolling. It also costs you the first hour of each morning, replying to people who have already moved on.',
    steps: {
      title: 'How the 24/7 AI Front Desk runs, step by step',
      items: [
        { when: 'Before launch', t: 'You approve what it knows', d: 'Your services, hours, location and policies come from your answers in Setup Center. It answers from that and nothing else.' },
        { when: 'Any hour', t: 'A customer calls or messages', d: 'On website chat, Facebook, Instagram or the voice line. It replies in English or Spanish.' },
        { when: 'In the conversation', t: 'It answers and asks the right questions', d: 'Which vehicle, which service, and when they would like to come in.' },
        { when: 'When they are ready', t: 'It books the free inspection', d: 'The booking lands on your calendar with a job card on your phone.' },
        { when: 'When it reaches a limit', t: 'It hands the conversation to you', d: 'Pricing talks, complaints and big or unusual jobs are passed on with the customer’s name and number.' },
      ],
    },
    auto: ['Routing every channel into one inbox', 'Creating the job card for each booking', 'Sending the booking confirmation'],
    ai: ['Answering questions from approved information', 'Collecting name, number, vehicle and service', 'Booking the free inspection', 'Saying it is an AI when asked'],
    human: ['Every price', 'Complaints and warranty questions', 'Large, custom or unusual jobs', 'Any customer who asks for the owner'],
    limits: [
      'It never quotes prices. It offers an inspection so you can quote accurately.',
      'It never claims to be a person.',
      'It only knows what you approved. If the answer is not there, it takes the details and hands off.',
      'Each month includes {voice} AI voice minutes and {chat} AI chat replies. If you are close to a limit we tell you before anything extra is charged.',
      consent,
    ],
    faq: [
      { q: 'Is an AI receptionist better than an answering service?', a: 'They solve different things. An answering service gives you a person who takes a message. An AI front desk answers at any hour on chat and social messages as well as calls, and can book the inspection. Neither should quote your prices.' },
      { q: 'Which languages does it speak?', a: 'English and Spanish.' },
      { q: 'Can I read what it said to a customer?', a: 'Yes. Every conversation is in your inbox, so you can read it and take over at any point.' },
    ],
    shops: ['ppf-shops', 'ceramic-coating-shops', 'mobile-detailing', 'performance-shops'],
    offerTitle: 'The AI front desk comes with the whole front office.',
  },

  'quote-follow-up': {
    title: 'Quote Follow-Up for Auto Shops: Ceramic, PPF and Tint | CNVRT X',
    description: 'Why coating, PPF, tint and wrap quotes go quiet, and how a polite follow-up sequence that stops when the customer replies turns silence into a yes or a no.',
    answer: [
      'Quote follow-up is what a shop does after the price is sent. In most small shops the answer is nothing, because the owner is back under a car. The customer has not said no. Nobody has asked.',
      'The fix is a follow-up sequence that checks in politely by text, email and call reminder until the customer answers, and stops the moment they do. A yes books the job. A no closes the loop.',
    ],
    why: {
      title: 'Why quotes go quiet',
      items: [
        { t: 'Bigger jobs take time to decide', d: 'A coating or film install is a considered purchase. People talk to a partner, check a budget and compare shops.' },
        { t: 'The customer forgets too', d: 'They meant to reply. A week later your quote is under forty other messages.' },
        { t: 'Following up feels like chasing', d: 'Owners do not want to pester. So the shop that does check in gets the job.' },
        { t: 'There is no list of open quotes', d: 'Quotes live in texts, DMs and memory. Nothing shows which ones are still waiting.' },
      ],
    },
    customer: ['They get your price and mean to think about it.', 'Days pass. Another shop checks in with a helpful question.', 'They book the shop that stayed in touch.'],
    owner: ['You send the quote and go back to work.', 'You remember it on Thursday and feel awkward about writing.', 'You never find out whether it was the price, the timing or nothing at all.'],
    cost: 'A quote costs you an inspection, a conversation and often a written estimate. When it goes quiet, all of that work earns nothing. Put your numbers in below.',
    steps: {
      title: 'How Follow-Up Until They Book runs, step by step',
      lead: 'The days between messages are set for your shop and your services. A tint quote and a PPF quote do not use the same pace.',
      items: [
        { when: 'Day 0', t: 'The quote is sent and marked', d: 'One tap on the job card marks it “Quote sent”. The AI quote helper can draft the quote from your own price list for you to approve.' },
        { when: 'A couple of days later', t: 'A friendly check-in goes out', d: 'A short message in your shop’s voice asks if they have questions. No pressure, no discount.' },
        { when: 'After that', t: 'Text, email and call reminders continue', d: 'Polite and spaced out. Call reminders come to you, so the phone call is still a person.' },
        { when: 'The moment they reply', t: 'The sequence stops', d: 'Their answer lands in your inbox and on your phone. Nothing else is sent automatically.' },
        { when: 'The end', t: 'A yes books, a no closes', d: 'A yes moves to booking and confirmation. A no is recorded, so the quote stops showing as open.' },
      ],
    },
    auto: ['Sending each check-in on schedule', 'Stopping when the customer replies or books', 'Reminding you when a call is due', 'Showing which quotes are still open'],
    ai: ['Drafting the quote from your price list, for you to approve and send'],
    human: ['Approving and sending every quote', 'The phone call on a large job', 'Handling a price objection or a custom request'],
    limits: [
      'It never sends a price on its own. You approve every quote.',
      'It does not discount to win the job. Any offer is your decision.',
      consent,
      'A customer who replies STOP is not texted again.',
      hoursNote,
    ],
    faq: [
      { q: 'How many times should a shop follow up on a quote?', a: 'Enough to get a clear yes or no, and no more. The right number depends on the job. Our service guides give an example schedule for ceramic coating, PPF, window tint and detailing quotes.' },
      { q: 'Can the timing be different for tint and for PPF?', a: 'Yes. A tint quote is usually decided within days, while PPF can take weeks. The sequence is set per service.' },
      { q: 'What happens to old quotes from before I joined?', a: 'On the annual plan, old-lead reactivation is included at launch. It goes by email, and by text only to customers who agreed to texts.' },
    ],
    shops: ['ceramic-coating-shops', 'ppf-shops', 'vinyl-wrap-shops', 'window-tint-shops'],
    offerTitle: 'Follow-up is one of nine systems in one plan.',
  },

  'no-shows': {
    title: 'Stop No-Shows at Your Auto Shop: Confirm and Remind | CNVRT X',
    description: 'Why booked customers do not turn up, and how a confirmation, a “Reply YES or MOVE” message and reminders keep the bay full or free it in time.',
    answer: [
      'A no-show is a booked customer who does not arrive and does not tell you. For a shop that blocks a bay for hours or days, one no-show can empty a morning.',
      'The fix is a short sequence: a confirmation when they book, a “Reply YES or MOVE” message the day before, and reminders. Customers who cannot come get an easy way to say so, and you get time to fill the slot.',
    ],
    why: {
      title: 'Why customers do not show up',
      items: [
        { t: 'They booked days ago', d: 'The longer the gap between booking and appointment, the easier it is to forget.' },
        { t: 'Cancelling feels awkward', d: 'Many people would rather not turn up than make the call.' },
        { t: 'Nothing confirmed it', d: 'A booking made by phone or DM leaves no reminder on their side.' },
        { t: 'Plans change', d: 'Work, weather and a ride home. Rescheduling has to be as easy as ignoring.' },
      ],
    },
    customer: ['They get a confirmation the moment they book.', 'The day before, one message asks: YES or MOVE.', 'They reply with one word. No phone call needed.'],
    owner: ['You know tonight who is coming tomorrow.', 'A MOVE reply frees the slot while there is still time to use it.', 'A missed appointment gets an offer to rebook without you writing anything.'],
    cost: 'An empty bay costs more than the job. You turned other work away to hold it, and the products and time you set aside sit unused. Try your numbers below.',
    steps: {
      title: 'How No-Show Shield runs, step by step',
      items: [
        { when: 'At booking', t: 'A confirmation goes out', d: 'Date, time and your shop’s name, sent the moment the appointment is made.' },
        { when: 'The day before', t: '“Reply YES to confirm or MOVE to change”', d: 'One message, two possible answers. YES marks the booking confirmed.' },
        { when: 'If they reply MOVE', t: 'The customer picks a new time', d: 'The old slot opens up and you see it on your phone.' },
        { when: 'Before the appointment', t: 'A reminder goes out', d: 'So the time and place are in front of them on the day.' },
        { when: 'Drop-off and pickup', t: 'Texts keep them informed', d: 'A drop-off message and a pickup message when the car is ready.' },
        { when: 'If they miss it', t: 'No-show rescue', d: 'A missed slot gets a friendly offer to rebook. One tap marks the job as a no-show on your side.' },
      ],
    },
    auto: ['Confirmation, reminder, drop-off and pickup messages', 'Recording YES and MOVE replies', 'The rebooking offer after a missed slot'],
    human: ['Deciding your deposit and cancellation policy', 'Calling a customer on a large job who has not confirmed', 'Filling a freed slot from your waiting list'],
    limits: [
      'It cannot stop every no-show. It makes them rarer and gives you warning.',
      'It does not take deposits by itself. If you charge one, that is your policy and your payment tool.',
      consent,
      hoursNote,
    ],
    faq: [
      { q: 'Should an auto shop charge a deposit?', a: 'It is your call, and it depends on the job. A deposit makes most sense where you block a bay for a day or more or order materials for one vehicle. Our guide on no-show policy for detailing and PPF shops walks through the options.' },
      { q: 'What if a customer does not reply to the reminder?', a: 'Nothing is cancelled automatically. The booking stays in place with no YES recorded, so you can decide whether to call.' },
      { q: 'Do reminders go by email too?', a: 'Yes. Email works for every customer. Texts go to those who agreed to them.' },
    ],
    shops: ['ppf-shops', 'ceramic-coating-shops', 'detailing-shops', 'mobile-detailing'],
    offerTitle: 'No-Show Shield is one of nine systems in one plan.',
  },

  reviews: {
    title: 'Get More Google Reviews for Your Auto Shop | CNVRT X',
    description: 'Why happy detailing, coating and tint customers rarely leave a review, and how asking every customer after the job, with two gentle reminders, changes that.',
    answer: [
      'Most happy customers never leave a review, because nobody asks them at the right moment. Recent reviews are one of the first things a new customer looks at when comparing shops.',
      'The fix is simple and boring: every customer is asked after the job, with a direct link, and gets two gentle reminders if they have not left one. Nothing is filtered and nobody is paid.',
    ],
    why: {
      title: 'Why shops do not get the reviews they earn',
      items: [
        { t: 'The best moment passes', d: 'At pickup the customer is delighted and you are busy handing over keys. By evening, both of you have moved on.' },
        { t: 'Asking in person feels awkward', d: 'So it happens for some customers and not for others.' },
        { t: 'Leaving a review takes effort', d: 'Without a direct link, the customer has to search for the shop and find the right button.' },
      ],
    },
    customer: ['They drive off pleased with the car.', 'A short thank-you arrives with one link to tap.', 'Leaving a review takes them under a minute.'],
    owner: ['You hand over the keys and start the next car.', 'The request goes out without you remembering it.', 'New reviews show up in your Monday report.'],
    cost: 'Missing reviews do not cost a job today. They cost the jobs of people who compare shops next month and pick the one with more recent reviews.',
    steps: {
      title: 'How the 5-Star Review Machine runs, step by step',
      items: [
        { when: 'Job done', t: 'You mark the job as done', d: 'One tap on the job card. That is the trigger.' },
        { when: 'After the job', t: 'A review request goes out', d: 'A thank-you in your shop’s voice with a direct link to your review page.' },
        { when: 'Day 3', t: 'A gentle reminder', d: 'Sent only if they have not left a review yet.' },
        { when: 'Later', t: 'One more reminder, then it stops', d: 'Two reminders in total. After that the customer is not asked again for that job.' },
        { when: 'For customers who want to say more', t: 'A video-testimonial link', d: 'Optional. Nobody is pushed to record one.' },
      ],
    },
    auto: ['Sending the request after each completed job', 'Two reminders, only to customers who have not reviewed', 'Counting new reviews in the Monday report'],
    human: ['Marking the job as done', 'Replying to reviews, good and bad', 'Fixing the problem when a customer is unhappy'],
    limits: [
      'We cannot promise five-star reviews. The stars depend on the work.',
      'Every customer is asked. It does not screen out unhappy customers, because review platforms do not allow selective asking.',
      'It never offers a discount or gift for a review.',
      consent,
    ],
    faq: [
      { q: 'Is it allowed to ask customers for Google reviews?', a: 'Yes. Google allows businesses to ask customers for reviews. What it does not allow is paying for them or asking only the customers you expect to be positive. That is why every customer gets the same request.' },
      { q: 'What should I do about a bad review?', a: 'Reply calmly and publicly, then fix it privately. The system brings the review to your attention. The reply should come from you.' },
      { q: 'Does it work for mobile detailers with no shop address?', a: 'Yes, as long as you have a Google Business Profile for a service-area business. The link points to that profile.' },
    ],
    shops: ['detailing-shops', 'mobile-detailing', 'window-tint-shops', 'ceramic-coating-shops'],
    offerTitle: 'Review requests are one of nine systems in one plan.',
  },

  'repeat-customers': {
    title: 'Bring Past Customers Back to Your Auto Shop | CNVRT X',
    description: 'Why good auto shops lose customers after one visit, and how service history, check-ins, referral asks and win-back messages bring them back.',
    answer: [
      'A repeat customer is one you do not have to pay to find. Most shops lose them through silence: the job was good, and then the customer never heard from the shop again.',
      'The fix is to keep each customer’s service history and use it. A check-in after the job, a referral ask, and an invitation back when enough time has passed.',
    ],
    why: {
      title: 'Why one-time customers stay one-time',
      items: [
        { t: 'There is no record to act on', d: 'Who came in, for what, and when sits in old texts and invoices.' },
        { t: 'Maintenance has no owner', d: 'A coated car needs care and a detailed car gets dirty again. Nobody reminds the customer when.' },
        { t: 'New leads feel more urgent', d: 'A ringing phone always beats a list of past customers.' },
      ],
    },
    customer: ['A few days after the job, the shop checks they are happy.', 'Months later, a short note arrives when the car is due again.', 'Booking again takes one reply.'],
    owner: ['You see who came in, for what, and when.', 'Check-ins and reminders go out without you writing them.', 'Quiet weeks get filled from customers you already earned.'],
    cost: 'Every customer you win twice costs you twice. The work of earning their trust was already done the first time. Use your numbers below.',
    steps: {
      title: 'How the Repeat & Referral Engine runs, step by step',
      lead: 'The timing depends on the service. You choose how long after each kind of job a customer should hear from you.',
      items: [
        { when: 'Job done', t: 'The job is added to the customer’s history', d: 'Service, vehicle and date, kept with their contact details.' },
        { when: 'After the job', t: 'A check-in goes out', d: 'A short message asking how the car is. Problems reach you while they are still small.' },
        { when: 'When they are happy', t: 'A referral ask', d: 'A simple request to pass your name on. No reward is promised unless you decide to offer one.' },
        { when: 'When it has been a while', t: 'A win-back message', d: 'An invitation back, tied to the service they had.' },
        { when: 'When they reply', t: 'It becomes a booking', d: 'The reply lands in your inbox and the AI front desk can book the visit.' },
      ],
    },
    auto: ['Keeping service history', 'Sending check-ins, referral asks and win-back messages', 'Stopping when a customer replies or opts out'],
    human: ['Choosing the timing for each service', 'Deciding any offer or referral reward', 'Handling a customer who reports a problem'],
    limits: [
      'Win-back and reactivation go by email, and by text only to customers who agreed to texts.',
      'It does not message a list of strangers. It works with your own customers.',
      'It does not invent an offer. Any discount is yours to set.',
      'Past-customer win-back at launch is included on the annual plan, not on monthly.',
    ],
    faq: [
      { q: 'How often should an auto shop contact past customers?', a: 'Rarely, and with a reason. A check-in after the job and a reminder when the vehicle is due are welcome. Weekly promotions are not. The timing is set per service.' },
      { q: 'Does it track ceramic coating maintenance?', a: 'It keeps the date and the service, and sends the reminder at the interval you set for coated vehicles.' },
      { q: 'Can a customer stop the messages?', a: 'Yes. Replying STOP ends texts, and every email has an unsubscribe link.' },
    ],
    shops: ['ceramic-coating-shops', 'detailing-shops', 'mobile-detailing', 'wheel-and-tire-shops'],
    offerTitle: 'Repeat business is one of nine systems in one plan.',
  },

  'run-sheet': {
    title: 'Auto Shop Run Sheet and Daily Schedule, Sent for You | CNVRT X',
    description: 'What a shop run sheet is, why typing it every night wastes time, and how tomorrow’s jobs can arrive on your phone at 6 PM with a morning brief at 7:30 AM.',
    answer: [
      'A run sheet is tomorrow’s jobs in order: who is coming, at what time, in which vehicle, for what work. Many shops type it into a group chat every evening from the day’s messages.',
      'The fix is to let the bookings write the sheet. Tomorrow’s run sheet is sent at 6 PM, a brief of today’s jobs arrives at 7:30 AM, and every booking has a job card you update with one tap.',
    ],
    why: {
      title: 'Why the schedule is still typed by hand',
      items: [
        { t: 'Bookings live in five places', d: 'Calls, texts, DMs, a paper diary and somebody’s memory.' },
        { t: 'One person holds the whole picture', d: 'If they are off, tomorrow starts with questions.' },
        { t: 'Things change after it is sent', d: 'A customer moves, a job runs over, and the list in the chat is already wrong.' },
      ],
    },
    customer: ['Their booking is confirmed and the shop expects them.', 'Nobody asks them the same question twice at drop-off.', 'They get a message when the car is ready.'],
    owner: ['At 6 PM tomorrow’s sheet is on your phone and your team’s.', 'At 7:30 AM you know who is coming and who is still waiting on you.', 'You tap Quote sent, Accepted, Done or No-show and the record updates.'],
    cost: 'It is small every night and large every year. The typing is the visible part. The missing job and the morning spent working out the day cost more.',
    steps: {
      title: 'How Owner Command Center runs, step by step',
      items: [
        { when: 'All day', t: 'Every booking gets a job card', d: 'Customer, vehicle, service and time, on your phone.' },
        { when: 'During the job', t: 'One-tap updates', d: 'Quote sent, Accepted, Done, No-show. Each tap moves the job and can trigger the next step, such as a review request.' },
        { when: '6 PM', t: 'Tomorrow’s run sheet is sent', d: 'Tomorrow’s jobs in time order, on your phone.' },
        { when: '7:30 AM', t: 'Today’s brief arrives', d: 'Today’s jobs, who is waiting on a reply, and what is unfinished.' },
        { when: 'Monday', t: 'The weekly report', d: 'Leads, booked, won and reviews for the week before.' },
      ],
    },
    auto: ['Building the run sheet from bookings', 'Sending the 6 PM sheet and the 7:30 AM brief', 'The Monday report'],
    human: ['Assigning who does which car', 'Tapping the job status as work moves', 'Changing the plan when the day changes'],
    limits: [
      'It lists the bookings that are in the system. A job agreed on a personal phone and never entered will not appear.',
      'It does not replace your shop software for invoices, parts or technician hours. It sits alongside it.',
      'It does not assign technicians or bays for you.',
    ],
    faq: [
      { q: 'What should a shop run sheet include?', a: 'For each job: the time, the customer’s name and number, the vehicle, the service, and whether it is a drop-off, a pickup or a redo. A count of the day’s stops at the bottom helps.' },
      { q: 'Can my team get it too?', a: 'Yes. It can go to you and to the people who need it.' },
      { q: 'What time is it sent?', a: 'The run sheet goes at 6 PM for the next day, and the brief at 7:30 AM for the same day.' },
    ],
    shops: ['detailing-shops', 'ppf-shops', 'performance-shops', 'wheel-and-tire-shops'],
    offerTitle: 'The run sheet is one of nine systems in one plan.',
  },

  'ad-tracking': {
    title: 'Ad Tracking for Auto Shops: Which Ads Book Paid Jobs | CNVRT X',
    description: 'Why ad reports show leads but not jobs, and how following each Facebook and Instagram lead to a booked, paid job shows what your ads actually brought in.',
    answer: [
      'Ad tracking for a shop means knowing which ads led to paid work, not just which ads got clicks. Ad reports stop at the lead. The job happens later, in your shop, where the ad platform cannot see it.',
      'The fix is to follow each Facebook and Instagram lead from the first message to the booked and paid job, count those jobs, and send the result back to Meta so it can look for more customers like the ones who paid.',
    ],
    why: {
      title: 'Why shops cannot tell which ads pay',
      items: [
        { t: 'The report ends at the lead', d: 'Clicks, messages and form fills are counted. Booked bays are not.' },
        { t: 'The sale happens offline', d: 'The customer calls, comes in, pays at the counter. None of it is connected to the ad.' },
        { t: 'Cheap leads look good', d: 'An ad that brings many leads and no jobs can look like the winner.' },
      ],
    },
    customer: ['They tap an ad and send a message.', 'They are answered, quoted, booked and served like any customer.', 'Nothing about their experience changes.'],
    owner: ['Each ad lead carries its source through to the job card.', 'Monday’s report shows leads, booked and paid.', 'You decide next month’s spend from jobs, not from clicks.'],
    cost: 'Without tracking, every month of ad spend is a guess, and you can end up turning off the ad that was paying for the others.',
    steps: {
      title: 'How Ad Results Tracker runs, step by step',
      items: [
        { when: 'The lead', t: 'A Facebook or Instagram lead arrives', d: 'It is recorded with the ad it came from.' },
        { when: 'The conversation', t: 'It is followed like any other lead', d: 'First reply, follow-up, booking and confirmation, all tied to the same customer.' },
        { when: 'The job', t: 'You mark it Accepted and Done', d: 'One tap each. That is how a lead becomes a counted, paid job.' },
        { when: 'Monday', t: 'The report shows leads, booked and paid', d: 'So you can see what the ads brought in for the week.' },
        { when: 'Ongoing', t: 'Results go back to Meta', d: 'Booked and paid jobs are sent back, so Meta can find more customers like them.' },
      ],
    },
    auto: ['Recording where each ad lead came from', 'Counting booked and paid jobs', 'Sending results back to Meta', 'The Monday report'],
    human: ['Running and paying for the ads', 'Marking jobs as accepted and done', 'Deciding what to spend next'],
    limits: [
      'We do not run your ads. This tracks what they bring in.',
      'We cannot promise your ads will perform better. Better data usually helps; it is not a guarantee.',
      'It tracks Facebook and Instagram leads. A customer who saw an ad and then walked in without mentioning it cannot be linked.',
      'A job counts as paid when it is marked done on the job card. It is not connected to your bank or your invoicing software.',
    ],
    faq: [
      { q: 'What is the difference between a lead and a booked job in ad tracking?', a: 'A lead is someone who contacted you. A booked job is on your calendar. A paid job is finished and paid. Ads should be judged on the last one.' },
      { q: 'Do I need to install anything on my website?', a: 'We set it up as part of the build. We connect your Google and Meta accounts for you after you finish Setup Center.' },
      { q: 'Does it track Google Ads?', a: 'The tracker is built for Facebook and Instagram leads. Leads from other sources still land in the same inbox and get the same follow-up.' },
    ],
    shops: ['ceramic-coating-shops', 'ppf-shops', 'window-tint-shops', 'vinyl-wrap-shops'],
    offerTitle: 'Ad tracking is one of nine systems in one plan.',
  },

  'front-office': {
    title: 'Auto Shop Front Desk Without Hiring: The Real Cost | CNVRT X',
    description: 'What it really costs an auto shop to hire a receptionist, use offshore assistants or install a done-for-you front office, and what each one can and cannot do.',
    answer: [
      'Every shop has a front desk job, whether or not anyone was hired for it: answering, following up, confirming, scheduling. In most small shops the owner does it between cars and after closing.',
      'There are three ways to fill it: hire a receptionist, use offshore assistants, or install a system that does the routine work and hands the rest to you. This page compares the three honestly, including what a person still does better.',
    ],
    why: {
      title: 'Why the job lands on the owner',
      items: [
        { t: 'The shop grew around the work', d: 'You opened to work on cars. The phone, the quotes and the calendar came with it.' },
        { t: 'A hire is a big step', d: 'A wage, training and supervision, for a role that is busy in bursts and quiet in between.' },
        { t: 'Software alone is another job', d: 'A CRM is a tool somebody has to build, write and run.' },
      ],
    },
    customer: ['They reach someone, at any hour.', 'They get a follow-up, a confirmation and a reminder without asking.', 'They deal with you for the parts that matter: the price and the car.'],
    owner: ['You stop being the receptionist between jobs.', 'Evenings are not spent on follow-ups and tomorrow’s list.', 'You still make every decision that needs judgment.'],
    cost: 'The comparison below uses published wage figures and your own numbers. It is an estimate, not a promise. A system closes most of the gap, never all of it.',
    steps: {
      title: 'What the front office does through one job',
      items: [
        { when: 'Inquiry', t: 'It answers', d: 'Every call, form and DM gets a reply, day and night.' },
        { when: 'Quote', t: 'It follows up', d: 'Polite check-ins until the customer says yes or no.' },
        { when: 'Booking', t: 'It confirms', d: 'Confirmation, “Reply YES or MOVE” the day before, and reminders.' },
        { when: 'After the job', t: 'It asks and invites', d: 'A review request, then a reminder when the vehicle is due again.' },
        { when: 'Every day', t: 'It reports to you', d: 'Today’s brief at 7:30 AM and tomorrow’s run sheet at 6 PM.' },
      ],
    },
    auto: ['Confirmations, reminders and follow-ups', 'Review requests and win-back messages', 'The daily brief, the run sheet and the Monday report'],
    ai: ['Answering common questions at any hour', 'Collecting details and booking the free inspection'],
    human: ['Greeting a customer who walks in', 'Pricing, complaints and big jobs', 'Running the shop floor'],
    limits: [
      'It is not a person at the counter. Walk-in customers still need someone to greet them.',
      'It does not replace the staff you have. It takes the routine work off them.',
      'The wage figures are US medians for wages only. Your local costs may differ.',
      'We do not guarantee bookings or revenue. We guarantee the work we control.',
    ],
    faq: [
      { q: 'How much does a receptionist cost an auto shop?', a: 'The US median wage for receptionists is $18.27 an hour (Bureau of Labor Statistics, May 2025). Full time, that is about $3,170 a month in wages alone, before taxes, benefits and cover for time off.' },
      { q: 'What does a virtual assistant cost by comparison?', a: 'Published full-time rates for Philippines-based virtual assistants run from $5 to $15 an hour. They still work a shift, and someone still has to train and check them.' },
      { q: 'Can I use this alongside a receptionist?', a: 'Yes. Many of the tasks happen outside their hours or are the ones they never get to. The system handles those and your receptionist handles people.' },
    ],
    shops: ['detailing-shops', 'ppf-shops', 'performance-shops', 'vinyl-wrap-shops'],
    offerTitle: 'One plan fills the front desk job. {price} a month.',
  },

  'ai-employee': {
    title: 'AI Employee for Auto Shops: What It Can and Cannot Do | CNVRT X',
    description: 'A plain task list of what an AI employee can take off an auto shop owner, what is fixed automation, and what must always stay with a person.',
    answer: [
      '“AI employee” is a loose term. In a shop it means software that handles the repeat work around the cars: answering inquiries, following up on quotes, confirming bookings, asking for reviews and reporting the day.',
      'Most of that is not AI at all. It is fixed automation that runs the same way every time. The AI part is the conversation: answering questions from information you approved and booking the inspection. This page lists exactly which is which.',
    ],
    why: {
      title: 'Why the term causes confusion',
      items: [
        { t: 'It promises a person', d: 'An AI does not walk the floor, read a customer’s face or decide a fair price.' },
        { t: 'It hides the simple parts', d: 'A reminder does not need intelligence. It needs to be sent every time.' },
        { t: 'It skips the setup', d: 'Software does nothing until someone builds it, writes it and tests it for one shop.' },
      ],
    },
    customer: ['Routine messages arrive on time, every time.', 'Questions are answered at any hour, by something that says it is an AI.', 'A person appears when the conversation needs one.'],
    owner: ['The repeat work stops landing on you.', 'You read a short summary instead of a day of messages.', 'You keep the price, the judgment and the customer relationship.'],
    cost: 'The unanswered work does not send a bill. It shows up as missed calls, quiet quotes and unconfirmed bookings. Put your numbers in below.',
    steps: {
      title: 'The work, split three ways',
      lead: 'One system, three roles. Here is what each role does in a normal week.',
      items: [
        { when: 'The Receptionist', t: 'Answers', d: 'Every missed call becomes a job card. New leads get a first reply. The AI front desk answers chat, DMs and the voice line.' },
        { when: 'The Service Advisor', t: 'Follows up and confirms', d: 'Quote check-ins until a yes or no. Booking confirmations and reminders. A review request after each job.' },
        { when: 'The Shop Manager', t: 'Runs the day', d: 'The 7:30 AM brief, the 6 PM run sheet, win-back messages to past customers and a report of what your ads brought in.' },
      ],
    },
    auto: ['Text backs, first replies, follow-ups, confirmations and reminders', 'Review requests and win-back messages', 'Job cards, the daily brief, the run sheet and the Monday report'],
    ai: ['Answering questions from information you approve', 'Collecting the vehicle, the service and contact details', 'Booking the free inspection', 'Drafting a quote from your price list for you to approve'],
    human: ['Every price that reaches a customer', 'Complaints, warranty questions and unhappy customers', 'Large, custom or unusual jobs', 'The work on the car'],
    limits: [
      'It never quotes prices on its own.',
      'It never claims to be a person, and it says it is an AI when asked.',
      'It only answers from information you approved.',
      'It does not replace your staff. It takes the repeat work off them.',
      consent,
    ],
    faq: [
      { q: 'Is an AI employee the same as a chatbot?', a: 'A chatbot is one part of it: the part that talks. The rest is automation that sends the right message at the right time and keeps the record. Together they cover the front desk job.' },
      { q: 'What if I do not want AI talking to my customers?', a: 'The automation still works without it. Confirmations, reminders, follow-ups and review requests are fixed messages you approved.' },
      { q: 'How long until it is working?', a: '{guarantee}' },
    ],
    shops: ['detailing-shops', 'mobile-detailing', 'window-tint-shops', 'performance-shops'],
    offerTitle: 'Three roles, nine systems, one plan.',
  },

  'website-chatbot': {
    title: 'Website Chatbot for Auto Shops: Answer and Book | CNVRT X',
    description: 'Why a shop website with only a contact form loses visitors, and how a talking website with chat and voice answers questions and books the free inspection.',
    answer: [
      'A website chatbot lets a visitor ask a question and get an answer while they are still on your site. For an auto shop that is the difference between “do you coat Teslas?” getting a reply now and a contact form that is read tonight.',
      'We call ours a talking website: visitors can type or speak, it answers from information you approved, and it books the free inspection. The website itself is designed, written and built for you.',
    ],
    why: {
      title: 'Why shop websites lose visitors',
      items: [
        { t: 'A form is a dead end', d: 'The visitor has a question now. A form promises an answer later.' },
        { t: 'The page was built to look good', d: 'Not to get a call, a chat or a booking.' },
        { t: 'Nobody is watching it', d: 'Even a chat box is useless if the person behind it is under a car.' },
      ],
    },
    customer: ['They land on your site with one specific question.', 'They ask it, by typing or out loud, and get an answer.', 'They book an inspection before leaving the page.'],
    owner: ['You do not touch a page builder.', 'Website conversations arrive in the same inbox as everything else.', 'Bookings from the site show up as job cards.'],
    cost: 'You already paid to get those visitors: with ads, with a Google listing, with your work. A silent website lets them leave. Try your own numbers below.',
    steps: {
      title: 'How a talking website runs, step by step',
      items: [
        { when: 'The build', t: 'We design, write and build the site', d: 'Around your services, with a way to call, talk or book on every page.' },
        { when: 'A visitor arrives', t: 'They ask a question', d: 'By chat or by voice, in English or Spanish.' },
        { when: 'In the conversation', t: 'It answers from approved information', d: 'Services, hours, location, what to expect. Never a price.' },
        { when: 'When they are ready', t: 'It books the free inspection', d: 'The booking lands on your calendar, with a job card on your phone.' },
        { when: 'When it reaches a limit', t: 'It hands off to you', d: 'With the visitor’s name, number and question.' },
      ],
    },
    auto: ['Booking confirmations and reminders', 'Routing website conversations to your inbox', 'Creating the job card'],
    ai: ['Answering visitor questions by chat or voice', 'Collecting details', 'Booking the free inspection'],
    human: ['Prices and quotes', 'Approving the website copy and photos', 'Any conversation the visitor wants to have with the owner'],
    limits: [
      'It never quotes prices.',
      'It says it is an AI when asked.',
      'The full website is a {site} one-time add-on on the monthly plan and free on the annual plan. Every plan includes the free-inspection booking page.',
      'Example site designs shown on this page are illustrations, not real shops.',
    ],
    faq: [
      { q: 'What is the difference between a chatbot and a talking website?', a: 'A chatbot is a box in the corner. A talking website is built so that every page leads to a conversation or a booking, and the visitor can speak as well as type.' },
      { q: 'Will a chatbot slow my website down?', a: 'The sites we build are made to be fast on a phone, which is where most of your visitors are.' },
      { q: 'Can I keep my current domain?', a: 'Yes. Your domain, content and customer list stay yours and can be exported.' },
    ],
    shops: ['ceramic-coating-shops', 'ppf-shops', 'vinyl-wrap-shops', 'window-tint-shops'],
    offerTitle: 'The website is the front door. The front office is behind it.',
  },
};
