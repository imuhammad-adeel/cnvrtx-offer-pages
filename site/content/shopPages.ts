/**
 * Shop-type pages on cnvrtx.com (/auto/<slug>). Each answers one question:
 * "Is this system designed for a business like mine?"
 *
 * Every page is written from that trade's own work: what it sells, how customers reach it,
 * how it quotes and books, what customers push back on, and where repeat work comes from.
 * A page is never another page with the service name swapped.
 *
 * WRITING RULES
 * - Trade facts are general and well known. No prices, percentages or statistics.
 *   Anything that varies by shop is said to vary.
 * - What the system does is taken from the approved copy only. Where it does NOT do
 *   something a trade might expect (deposits, routes, parts tracking), the page says so.
 * - No em dashes. Short plain sentences.
 */

export type ShopPage = {
  title: string;
  description: string;
  h1: [string, string];
  lede: string;
  answer: [string, string];
  /** What this kind of shop sells and how each job is bought. */
  work: { title: string; items: { t: string; d: string }[] };
  /** How customers reach this kind of shop, and when. */
  inquiry: { title: string; items: { t: string; d: string }[] };
  /** Quoting style, booking habits and deposits. */
  quoting: { title: string; body: string[] };
  /** What customers say before they book, and what the follow-up has to do about it. */
  objections: { q: string; a: string }[];
  /** The problems that hurt this trade most, in order, each with its own reason. */
  leaks: { slug: string; why: string }[];
  /** Where repeat work comes from. */
  keep: { title: string; items: string[] };
  /** What the system does not do for this trade. */
  honest: string[];
  faq: { q: string; a: string }[];
  /** Guide slugs written for this trade. Only published guides are shown. */
  guides: string[];
};

export const shopPages: Record<string, ShopPage> = {
  'detailing-shops': {
    title: 'Front Office System for Auto Detailing Shops | CNVRT X',
    description: 'How a done-for-you front desk fits a fixed-location detailing shop: many small inquiries, package pricing, Saturday demand and customers who should come back every few months.',
    h1: ['A Front Desk for', 'Detailing Shops.'],
    lede: 'A detail shop lives on volume and repeat visits. That means a lot of small inquiries, a lot of bookings, and a lot of customers who should be back in a few months. All of it lands on whoever is holding the polisher.',
    answer: [
      'Yes, this is built for fixed-location detailing shops. The system answers the steady stream of calls and messages, confirms every booking, asks every customer for a review and reminds them when the car is due again.',
      'Detailing differs from coating or film work in one way that matters here: the jobs are smaller and there are more of them. So the win is not one saved quote. It is fewer missed inquiries and fewer empty slots, every week.',
    ],
    work: {
      title: 'What a detail shop sells, and how it is bought',
      items: [
        { t: 'Packages', d: 'Interior, exterior and full details, usually at set prices by vehicle size. Customers expect a quick answer and a quick booking.' },
        { t: 'Paint correction', d: 'Priced after seeing the paint. It is the step where a detail customer becomes a larger job.' },
        { t: 'Add-ons', d: 'Engine bay, headlights, odor treatment, pet hair. Small, and often decided at drop-off.' },
        { t: 'Maintenance visits', d: 'The same customer, every few months. This is where a detail shop’s steady income comes from.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a detail shop',
      items: [
        { t: 'Phone calls, in bursts', d: 'Often “how much for a full detail on an SUV?” while you are mid-job.' },
        { t: 'Google and social messages', d: 'From your profile, your page and your before-and-after posts. Many arrive in the evening.' },
        { t: 'Friday and Saturday demand', d: 'Everyone wants the weekend slot, and asks late in the week.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking in a detail shop',
      body: [
        'Most detail prices are known in advance, so the customer’s real question is “when can you do it?”. The shop that offers a time first usually gets the job.',
        'Bookings are short and close together. One no-show leaves a gap that is hard to fill the same day, and one overrun pushes every car after it.',
        'Deposits are less common for standard details than for film or coating work. If you take one for larger jobs, that stays your policy and your payment tool.',
      ],
    },
    objections: [
      { q: '“How much is it?”', a: 'The AI front desk never quotes prices. It collects the vehicle and the service and offers the free inspection or passes the question to you, so the number comes from you.' },
      { q: '“Can you do it this Saturday?”', a: 'This is a booking question, and it is the one the system can settle on the spot by offering the times that are open.' },
      { q: '“I will let you know.”', a: 'A polite check-in a couple of days later keeps a small job from being forgotten. It stops the moment they reply.' },
    ],
    leaks: [
      { slug: 'missed-calls', why: 'Detail inquiries are mostly phone calls, and they come while your hands are wet.' },
      { slug: 'no-shows', why: 'Short bookings packed into a day leave no room to recover from an empty slot.' },
      { slug: 'reviews', why: 'High job volume means many chances to earn a review, and most are never asked for.' },
      { slug: 'repeat-customers', why: 'A detailed car is dirty again in months. The reminder is the cheapest booking you will ever get.' },
      { slug: 'run-sheet', why: 'Many cars a day means the order of work matters, and somebody types it every night.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A check-in after the detail, so small problems reach you first', 'A reminder when the car is due again, at the interval you set', 'A referral ask to customers who were happy', 'A win-back message to customers who have not been in for a while'],
    },
    honest: ['It does not set your package prices or quote them.', 'It does not track products, stock or technician hours. It sits alongside the shop software you use for that.', 'It cannot make a Saturday longer. It fills the week more evenly by making other days easy to book.'],
    faq: [
      { q: 'I am a one-person detail shop. Is this too much for me?', a: 'It is built for exactly that. You log in, open Setup Center and answer the setup questions, about 10-15 minutes. We build and test the rest. After launch you reply from the app when a person is needed.' },
      { q: 'Can it handle both shop and mobile jobs?', a: 'Yes. If you also go to customers, see the mobile detailing page for how bookings and addresses are handled.' },
      { q: 'Do I have to change my booking software?', a: 'The system runs on the booking page we build for you and sits alongside the shop software you already use for jobs and invoices.' },
    ],
    guides: ['detailing-estimate-follow-up', 'auto-detailing-lead-response-time', 'detailing-no-show-policy-and-reminders'],
  },

  'mobile-detailing': {
    title: 'Front Office System for Mobile Detailing Businesses | CNVRT X',
    description: 'A front desk for mobile detailers who work at the customer’s location: missed calls on the road, address and access details, weather changes and repeat maintenance customers.',
    h1: ['A Front Desk for', 'Mobile Detailers.'],
    lede: 'A mobile detailer has no counter, no desk and often no second person. The phone rings in a driveway with a pressure washer running. Every inquiry you cannot answer is answered by somebody else.',
    answer: [
      'Yes, and mobile detailing is one of the clearest fits. You work away from any desk, usually alone, so calls and messages go unanswered for hours at a time. The system catches each one, replies, and books the job while you finish the car in front of you.',
      'It is set up differently from a fixed shop. Bookings need the customer’s address and what is available on site. Reminders matter more, because a no-show costs you the drive as well as the slot.',
    ],
    work: {
      title: 'What a mobile detailer sells, and how it is bought',
      items: [
        { t: 'On-site details', d: 'Done at a home or workplace. The customer is buying convenience as much as the clean.' },
        { t: 'Maintenance plans', d: 'The same driveway every few weeks. This is the most valuable booking a mobile detailer has.' },
        { t: 'Multi-vehicle and workplace visits', d: 'Two cars at one house, or several at one office, booked as one stop.' },
        { t: 'Add-on services', d: 'Small extras decided on the day, once you have seen the vehicle.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a mobile detailer',
      items: [
        { t: 'A call you cannot take', d: 'You are outdoors, hands wet, machine running, often with a customer nearby.' },
        { t: 'Texts and social messages', d: 'From your Google listing and your posts. They sit unread until the job is finished.' },
        { t: 'Evening inquiries', d: 'People arrange home services after work, when you are packing up or driving.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking on the road',
      body: [
        'Mobile prices are usually set by vehicle size and condition, so quoting is quick. The harder part is the booking itself: where, when, and what you will find when you arrive.',
        'A good mobile booking collects the address, the vehicle, and anything you need on site, such as access to water and power if you do not carry your own. The booking page and the AI front desk ask for the details you choose.',
        'Your day is a route, not a row of bays. A cancelled stop cannot be filled by the next walk-in, which is why confirmation the day before is worth more to you than to a fixed shop.',
      ],
    },
    objections: [
      { q: '“Do you come to my area?”', a: 'The AI front desk answers from the service area you approve and collects the address before it books.' },
      { q: '“Can you come tomorrow?”', a: 'It offers the times you have open. You stay in control of how far apart your stops are.' },
      { q: '“What if it rains?”', a: 'The customer can move a booking by replying MOVE to the reminder. If you need to move it, you message them from the app.' },
    ],
    leaks: [
      { slug: 'missed-calls', why: 'You are away from the phone most of the working day, by the nature of the job.' },
      { slug: 'ai-receptionist', why: 'With no desk and no staff, something has to answer while you work and after you stop.' },
      { slug: 'no-shows', why: 'An absent customer costs you the travel time as well as the booking.' },
      { slug: 'repeat-customers', why: 'Regular maintenance visits are the business. Each customer should hear from you on a rhythm.' },
      { slug: 'reviews', why: 'A service-area business is found through reviews more than through a shopfront.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A reminder when the vehicle is due, at the interval you set for maintenance customers', 'A check-in after the first visit, when a plan is easiest to offer', 'A referral ask, since neighbours and co-workers see you working', 'A review request after every job, linked to your service-area profile'],
    },
    honest: ['It does not plan your route or calculate drive time. It collects the address so you can.', 'It does not check the weather or reschedule for you.', 'It does not take payment or deposits by itself.', 'It cannot answer a question you have not approved an answer for. It takes the details and hands off.'],
    faq: [
      { q: 'I have no shop address. Can I still use this?', a: 'Yes. The system works for service-area businesses. Your local number, booking page and inbox do not depend on a physical location.' },
      { q: 'Will it work when I have poor signal?', a: 'The system runs online, not on your phone, so replies and bookings continue when you are out of coverage. You see them when your signal returns.' },
      { q: 'Can customers book a recurring visit?', a: 'Each visit is booked as an appointment, and reminders invite the customer back at the interval you set. A fixed subscription is your own arrangement with the customer.' },
    ],
    guides: ['detailing-estimate-follow-up', 'auto-detailing-lead-response-time', 'detailing-no-show-policy-and-reminders'],
  },

  'ceramic-coating-shops': {
    title: 'Front Office System for Ceramic Coating Shops | CNVRT X',
    description: 'How a done-for-you front desk fits ceramic coating installers: inspection-based quotes, considered buyers, multi-day bookings and maintenance that brings customers back.',
    h1: ['A Front Desk for', 'Ceramic Coating Shops.'],
    lede: 'A coating is not an impulse purchase. The customer asks, thinks, compares and often goes quiet. The shops that win those jobs are rarely the cheapest. They are the ones still in the conversation a week later.',
    answer: [
      'Yes. Coating work depends on the two things this system is strongest at: getting the customer in for an inspection, and following up on the quote afterwards until there is a clear yes or no.',
      'Because the price depends on the paint in front of you, the AI front desk never quotes. It books the free inspection instead, which is the step a coating sale actually needs.',
    ],
    work: {
      title: 'What a coating shop sells, and how it is bought',
      items: [
        { t: 'Coating packages', d: 'Usually offered in tiers by durability. The customer is choosing a level as well as a shop.' },
        { t: 'Paint correction first', d: 'How much correction the paint needs decides most of the price, and it cannot be judged over the phone.' },
        { t: 'Extras', d: 'Wheels, glass, trim and interior protection, added to the main job.' },
        { t: 'Maintenance', d: 'Washes, top-ups and periodic inspections. Many coating brands tie their warranty to them.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a coating shop',
      items: [
        { t: 'A price question, usually by message', d: '“How much to coat a new SUV?” sent to several installers at once.' },
        { t: 'After research, in the evening', d: 'Coating buyers read and watch a lot before they write, and they write late.' },
        { t: 'New-car timing', d: 'Many inquiries come just before or just after a vehicle is delivered, with a date in mind.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking coating work',
      body: [
        'A coating quote is really two steps: an inspection to see the paint, then a price for correction and coating together. Any figure given before the inspection is a guess that you will have to defend later.',
        'The decision takes days or weeks. Customers compare installers, products and warranty terms, and often need to agree the spend with someone else.',
        'The job itself blocks a bay for more than a day, and the vehicle needs time to cure before it goes back into normal use. Many installers take a deposit to hold the slot. That remains your policy and your payment tool.',
      ],
    },
    objections: [
      { q: '“That is more than I expected.”', a: 'This needs a person. The follow-up brings the customer back into conversation. You explain what the correction involves and what the cheaper option leaves out.' },
      { q: '“I am comparing a few shops.”', a: 'The sequence keeps you present without pressure, with a helpful check-in rather than a discount.' },
      { q: '“I need to think about it.”', a: 'A polite check-in a couple of days later, then spaced reminders, until they answer. It stops the moment they reply.' },
    ],
    leaks: [
      { slug: 'quote-follow-up', why: 'A coating quote is large and slow to decide. Most are lost to silence, not to a no.' },
      { slug: 'ai-receptionist', why: 'Buyers research at night. Booking the inspection then is worth more than a reply at nine.' },
      { slug: 'lead-response', why: 'The same question went to several installers. The first useful answer sets the tone.' },
      { slug: 'no-shows', why: 'A missed coating appointment empties a bay for a day or more.' },
      { slug: 'repeat-customers', why: 'Maintenance and inspections give you a reason to contact every coated car again.' },
      { slug: 'ad-tracking', why: 'With a high job value, knowing which ad produced a paid coating changes what you spend.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A check-in after the coating, while aftercare questions are fresh', 'A reminder at the maintenance interval you set for coated vehicles', 'A referral ask, since coated cars get noticed', 'A review request after every job'],
    },
    honest: ['It never quotes a coating price. You approve and send every quote.', 'It does not promise a coating result or a warranty outcome. Those are between you, the product and the customer.', 'It does not take deposits by itself.', 'It does not track cure times or product batches.'],
    faq: [
      { q: 'Why does the AI offer an inspection instead of a price?', a: 'Because a coating price depends on the condition of the paint. An inspection gets the customer into your shop, where you can quote accurately and explain the work.' },
      { q: 'Can the follow-up run longer for coating than for other services?', a: 'Yes. The pace is set per service. A coating sequence is usually longer and slower than one for tint.' },
      { q: 'Does it help with maintenance reminders for warranty inspections?', a: 'It keeps the service date and sends the reminder at the interval you set. The warranty terms themselves come from your coating brand.' },
    ],
    guides: ['ceramic-coating-quote-follow-up', 'auto-detailing-lead-response-time', 'detailing-no-show-policy-and-reminders'],
  },

  'ppf-shops': {
    title: 'Front Office System for PPF Shops (Paint Protection Film) | CNVRT X',
    description: 'A done-for-you front desk for paint protection film installers: coverage-based quotes, long decisions, deposits, multi-day installs and new-vehicle delivery dates.',
    h1: ['A Front Desk for', 'PPF Shops.'],
    lede: 'Paint protection film is the largest ticket most protection shops sell, and the slowest to decide. A quote can sit for weeks while the customer waits on a delivery date. The follow-up is where the job is won.',
    answer: [
      'Yes. PPF work has long gaps between inquiry, quote and install, and each gap is a place a customer can drift away. The system keeps the conversation alive through all three, and protects the multi-day slot once it is booked.',
      'It does not quote film prices or take deposits. It gets the customer to an inspection, follows up on the quote you send, and confirms the booking.',
    ],
    work: {
      title: 'What a PPF shop sells, and how it is bought',
      items: [
        { t: 'Coverage levels', d: 'From a partial front to full front, high-impact areas and full-body film. The customer is choosing how much of the car to cover.' },
        { t: 'Film choice', d: 'Gloss, matte and coloured films, with different warranties. More to explain than a single price.' },
        { t: 'Combined jobs', d: 'Film with a coating on top, or with tint, sold as one visit.' },
        { t: 'New-vehicle installs', d: 'Booked around a delivery date, sometimes before the car has arrived.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a PPF shop',
      items: [
        { t: 'Detailed questions by message', d: 'Coverage, film brand, seams and warranty. Often sent at night, often to more than one installer.' },
        { t: 'A date-driven inquiry', d: '“My car arrives on the 20th.” The customer wants to know you can take it then.' },
        { t: 'Referrals from dealers and owners’ groups', d: 'Warm, but still comparing.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking film work',
      body: [
        'A film quote has several versions: the customer wants to see partial, full front and full body side by side before choosing. That is a longer conversation than one number.',
        'Decisions are slow and often tied to a delivery date that moves. A quote sent today may be acted on in three weeks.',
        'Installs take a day to several days and the film is commonly ordered or cut for that vehicle. Many shops take a deposit for that reason. Deposit and cancellation terms stay your policy.',
      ],
    },
    objections: [
      { q: '“Is full front enough, or do I need the whole car?”', a: 'A coverage question the AI can explain from the information you approve, before handing the price to you.' },
      { q: '“The other shop was cheaper.”', a: 'A person’s job. The follow-up reopens the conversation. You explain the film, the coverage and the install.' },
      { q: '“The car is not here yet.”', a: 'The sequence can be paced for a long decision, so the check-in arrives near the delivery date rather than the day after the quote.' },
    ],
    leaks: [
      { slug: 'quote-follow-up', why: 'High value, several options and a slow decision. Without follow-up, the quote is simply forgotten.' },
      { slug: 'no-shows', why: 'A missed PPF appointment can empty a bay for days, with film already prepared.' },
      { slug: 'ai-receptionist', why: 'Film buyers ask long questions at night. An answer and a booked inspection keep them with you.' },
      { slug: 'lead-response', why: 'Buyers contact several installers. The first helpful reply shapes the comparison.' },
      { slug: 'ad-tracking', why: 'One paid PPF job can justify a month of ads. You need to know which ad brought it.' },
      { slug: 'run-sheet', why: 'Multi-day installs overlap. Tomorrow’s sheet has to show drop-offs, pickups and cars in progress.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A check-in after the install, when aftercare questions come up', 'A referral ask, since film customers talk to other owners', 'A reminder when the customer’s next vehicle or next service is due', 'A review request after every install'],
    },
    honest: ['It never quotes film prices. You approve and send every quote.', 'It does not take or refund deposits.', 'It does not order film or track patterns and stock.', 'It does not know a delivery date unless the customer or you enter it.'],
    faq: [
      { q: 'Our installs take several days. Can the reminders handle that?', a: 'Yes. The customer gets a confirmation, a “Reply YES or MOVE” message the day before drop-off, and drop-off and pickup messages.' },
      { q: 'Can we follow up over several weeks without being annoying?', a: 'Yes. Messages are spaced out, polite, and stop the moment the customer replies. A customer who says no is closed, not chased.' },
      { q: 'Does it replace our shop management software?', a: 'No. It sits alongside the tools you use for jobs, film and invoices. It covers the inquiry, the follow-up, the booking and the return visit.' },
    ],
    guides: ['ppf-quote-follow-up', 'detailing-no-show-policy-and-reminders', 'ceramic-coating-quote-follow-up'],
  },

  'window-tint-shops': {
    title: 'Front Office System for Window Tint Shops | CNVRT X',
    description: 'A done-for-you front desk for window tint shops: fast price-led inquiries, same-week bookings, short appointments and a first reply that has to arrive quickly.',
    h1: ['A Front Desk for', 'Window Tint Shops.'],
    lede: 'Tint customers decide fast. They ask three shops the same question, and the job usually goes to whoever answers first with a time. Speed matters more here than in any other protection service.',
    answer: [
      'Yes. Tint is a quick decision and a short appointment, so the system’s job is speed: an immediate first reply, a booking offered in the same conversation, and a reminder so the slot is not wasted.',
      'The follow-up is short as well. A tint quote that has been quiet for a week is usually already done somewhere else, so the sequence is set to move quickly and stop early.',
    ],
    work: {
      title: 'What a tint shop sells, and how it is bought',
      items: [
        { t: 'Film tiers', d: 'Usually good, better and best, such as dyed, carbon and ceramic film. The customer chooses a tier and a shade.' },
        { t: 'Coverage', d: 'All windows, fronts only, a windshield strip or a full windshield.' },
        { t: 'Removal and redo', d: 'Old or bubbled film taken off and replaced. Priced after seeing it.' },
        { t: 'Combined visits', d: 'Tint added to a film or coating job at another shop’s request or your own.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a tint shop',
      items: [
        { t: 'A short price question', d: '“How much to tint a Tacoma?” By call, text or DM, to several shops at once.' },
        { t: 'Ad and social leads', d: 'Tint ads bring many inquiries at once, and they cool quickly.' },
        { t: 'Walk-in style urgency', d: '“Can you do it today or tomorrow?” is a normal tint question.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking tint',
      body: [
        'Tint is usually priced from a simple menu by vehicle type and film tier, so a quote is quick to give. What customers compare is price, film and how soon you can do it.',
        'Legal limits on how dark tint can be differ from state to state. Customers often ask about them, and the answer has to be right for where you operate. The AI front desk only answers this from wording you approve.',
        'The appointment is short, often a few hours, and booked within days. That makes no-shows frequent and cheap for the customer, and costly for a shop running a full day of short slots.',
      ],
    },
    objections: [
      { q: '“What is your cheapest price?”', a: 'The AI never quotes. It collects the vehicle and windows and gets the question to you fast, or books the visit where you quote in person.' },
      { q: '“Is that shade legal?”', a: 'Answered only from the wording you approve for your state. Anything outside it is passed to you.' },
      { q: '“I will come by sometime.”', a: 'The system turns that into a booked time with a confirmation, which is far more likely to happen.' },
    ],
    leaks: [
      { slug: 'lead-response', why: 'A tint lead is the fastest-cooling lead in the trade. Minutes matter.' },
      { slug: 'missed-calls', why: 'Many tint inquiries are quick phone calls. An unanswered one is redialled to the next shop.' },
      { slug: 'no-shows', why: 'Short slots booked days ahead are easy to skip, and a day of them is easy to wreck.' },
      { slug: 'quote-follow-up', why: 'Short and sharp: one or two check-ins catch the customers who meant to book and forgot.' },
      { slug: 'reviews', why: 'High volume makes tint shops strong review earners, if every customer is asked.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A check-in after the install, when aftercare questions are most common', 'A referral ask, since tint is visible and easy to recommend', 'An invitation back when the customer may have another vehicle', 'An introduction to your other services, such as film or coating, if you offer them'],
    },
    honest: ['It never quotes tint prices.', 'It does not give legal advice on tint limits. It repeats only what you approved.', 'Automated texts are sent between {hours}. Outside those hours a text waits for morning, and email goes at any hour.', 'It cannot make a same-day slot appear. It offers the times you have.'],
    faq: [
      { q: 'How quickly does a new tint lead get a reply?', a: 'An email goes out immediately at any hour. A text follows within a minute during texting hours, to leads who agreed to texts. If they have not replied after five minutes, you get a “call now” alert.' },
      { q: 'We run a lot of ads. Will it keep up?', a: 'Yes. Facebook and Instagram leads land in the same inbox and get the same first reply. The Ad Results Tracker then shows which ads became booked, paid jobs.' },
      { q: 'Can the follow-up be shorter for tint?', a: 'Yes. The pace is set per service, and tint is set to move quickly and stop early.' },
    ],
    guides: ['window-tint-quote-follow-up', 'auto-detailing-lead-response-time', 'detailing-no-show-policy-and-reminders'],
  },

  'vinyl-wrap-shops': {
    title: 'Front Office System for Vinyl Wrap Shops | CNVRT X',
    description: 'A done-for-you front desk for vinyl wrap shops: design-led quotes, several rounds before a yes, material orders, deposits and multi-day installs.',
    h1: ['A Front Desk for', 'Vinyl Wrap Shops.'],
    lede: 'A wrap is sold in rounds: the idea, the colour, the proof, the price, the date. Each round is a message somebody has to answer. Miss one and the project stalls.',
    answer: [
      'Yes. Wrap sales involve more back-and-forth than any other service here, and the system keeps that conversation moving: it answers the first inquiry, follows up when a round goes quiet, and confirms the install slot.',
      'The creative decisions and the price stay with you. The system makes sure no customer is left waiting on a reply while you are installing.',
    ],
    work: {
      title: 'What a wrap shop sells, and how it is bought',
      items: [
        { t: 'Colour-change wraps', d: 'A personal purchase with many options. Customers want to see colours and finishes before they commit.' },
        { t: 'Commercial and fleet graphics', d: 'A business buyer, an approval process, and sometimes several vehicles.' },
        { t: 'Partial wraps and accents', d: 'Roofs, hoods, chrome delete and stripes. Smaller, and decided faster.' },
        { t: 'Removal', d: 'Old wrap taken off, priced after seeing its condition.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a wrap shop',
      items: [
        { t: 'Social messages with a picture', d: '“Can you do this?” attached to a photo of somebody else’s car.' },
        { t: 'Business inquiries by form or email', d: 'With a logo, a deadline and more than one decision-maker.' },
        { t: 'Long threads', d: 'One customer, many messages, over days or weeks.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking wrap work',
      body: [
        'A wrap quote depends on the vehicle, the material and the design work. It usually follows a conversation and often a proof, so the quote is one step in a longer exchange.',
        'Commercial jobs add approvals. The person who asked is not always the person who signs off, and the project waits in between.',
        'Material is commonly ordered for the job and installs take days, so many shops take a deposit before ordering. Those terms stay your policy.',
      ],
    },
    objections: [
      { q: '“Can I see it in a different colour?”', a: 'A design question for you. The system makes sure the request reaches you and the customer hears back.' },
      { q: '“I need to run it past my partner or my boss.”', a: 'The follow-up is paced for a slow decision, with spaced check-ins until they answer.' },
      { q: '“How long will it take?”', a: 'Answered from the general information you approve. Dates for a specific job come from you.' },
    ],
    leaks: [
      { slug: 'quote-follow-up', why: 'Projects stall between rounds. A check-in restarts them.' },
      { slug: 'lead-response', why: 'A photo and a question sent to several shops goes to whoever engages first.' },
      { slug: 'ai-receptionist', why: 'Inspiration strikes at night. An answer then keeps the idea alive until morning.' },
      { slug: 'no-shows', why: 'A missed wrap drop-off idles a bay for days with material already bought.' },
      { slug: 'website-chatbot', why: 'Wrap buyers browse your portfolio. A site that answers turns browsing into an inquiry.' },
      { slug: 'ad-tracking', why: 'Wrap ads attract admirers as well as buyers. Tracking shows which ads bring paying work.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['Fleet customers who add or replace vehicles', 'A check-in after the install, when care questions come up', 'A referral ask, since a wrapped car is a moving advert', 'A reminder when a wrap is nearing the age you recommend for replacement or removal'],
    },
    honest: ['It does not design, proof or quote a wrap.', 'It does not order material or track it.', 'It does not take deposits.', 'It cannot judge a photo. Image-based questions are passed to you.'],
    faq: [
      { q: 'Our conversations are long. Does the follow-up interrupt them?', a: 'No. The sequence stops the moment the customer replies, so it never talks over a live conversation.' },
      { q: 'Can it handle fleet inquiries?', a: 'It answers the first inquiry, collects the details and hands the conversation to you. Commercial pricing and approvals are yours.' },
      { q: 'Do we keep our own design tools?', a: 'Yes. The system covers the inquiry, the follow-up, the booking and the return visit. Your design and production tools are untouched.' },
    ],
    guides: ['ppf-quote-follow-up'],
  },

  'wheel-and-tire-shops': {
    title: 'Front Office System for Wheel and Tire Shops | CNVRT X',
    description: 'A done-for-you front desk for wheel and tire shops: fitment questions, parts on order, install appointments and customers who return with every season and every vehicle.',
    h1: ['A Front Desk for', 'Wheel and Tire Shops.'],
    lede: 'A wheel sale starts with a fitment question and ends with an install appointment, often with a wait for parts in between. The customer who hears nothing during that wait starts shopping again.',
    answer: [
      'Yes. Wheel and tire shops get a high volume of specific questions, and a gap between the sale and the install. The system answers the inquiry, follows up on the quote, and confirms the install appointment once the parts are in.',
      'Fitment itself stays with you. The system collects the vehicle details a fitment answer needs and gets them to the person who knows.',
    ],
    work: {
      title: 'What a wheel and tire shop sells, and how it is bought',
      items: [
        { t: 'Wheel and tire packages', d: 'Chosen for look and fitment together. The customer needs to know it will fit before anything else.' },
        { t: 'Tires on their own', d: 'A need-driven purchase, often urgent, compared on price and availability.' },
        { t: 'Mounting, balancing and related work', d: 'The install appointment that follows the sale.' },
        { t: 'Seasonal changeovers', d: 'The same customers, twice a year, in the same few weeks.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a wheel and tire shop',
      items: [
        { t: 'A fitment question', d: '“Will these fit my truck?” with a year, a model and a photo.' },
        { t: 'A price and stock check', d: 'By phone, quickly, to more than one shop.' },
        { t: 'Seasonal rushes', d: 'A flood of calls in a short window, far more than one person can answer.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking wheels and tires',
      body: [
        'A wheel quote depends on the exact vehicle and what the customer wants it to look like. Getting the year, make, model and trim at the first contact saves a second conversation.',
        'Many sales involve parts that are ordered in. The install is booked once they arrive, so there are two moments that need a message: the order, and the appointment.',
        'Install appointments are fairly short, and a missed one leaves parts sitting on your floor. A confirmation the day before matters.',
      ],
    },
    objections: [
      { q: '“Will it rub?” or “Will it fit?”', a: 'A fitment judgment that belongs to you. The AI collects the vehicle details and passes the question on.' },
      { q: '“Do you have them in stock?”', a: 'The system does not see your stock. It takes the request and gets it to you quickly.' },
      { q: '“I found them cheaper online.”', a: 'A conversation for a person. The follow-up makes sure it happens rather than ending in silence.' },
    ],
    leaks: [
      { slug: 'missed-calls', why: 'Tire shopping is done by phone, in a hurry. Seasonal weeks bring more calls than can be answered.' },
      { slug: 'quote-follow-up', why: 'A wheel package is a considered spend. Quotes go quiet while the customer looks online.' },
      { slug: 'no-shows', why: 'A missed install leaves ordered parts unpaid for and a slot empty.' },
      { slug: 'repeat-customers', why: 'Seasonal changeovers and tire wear give you a natural date to contact every customer.' },
      { slug: 'lead-response', why: 'Fitment questions by message go to several shops. The first engaged reply usually wins.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A reminder before each seasonal changeover, at the timing you set', 'A check-in after the install', 'An invitation back when a customer’s tires are likely due, based on the service date', 'A review request after every install'],
    },
    honest: ['It does not confirm fitment. That judgment stays with you.', 'It does not see stock levels or supplier lead times.', 'It does not tell a customer their parts have arrived unless you trigger the message.', 'It never quotes prices.'],
    faq: [
      { q: 'Can it tell customers when their wheels arrive?', a: 'When you book the install, the customer gets a confirmation and reminders. The arrival itself is something you mark, since the system does not track supplier orders.' },
      { q: 'How does it cope with the seasonal rush?', a: 'Every missed call still becomes a job card and callers who agreed to texts get a text back, so a busy week does not turn into a list of unknown numbers.' },
      { q: 'We also do alignments and suspension. Is that covered?', a: 'Yes. See the performance shops page for how the system fits suspension and parts work.' },
    ],
    guides: [],
  },

  'performance-shops': {
    title: 'Front Office for Performance and Aftermarket Shops | CNVRT X',
    description: 'A done-for-you front desk for performance shops: suspension, tuning, aftermarket parts and custom installs, with long builds and parts on order.',
    h1: ['A Front Desk for', 'Performance Shops.'],
    lede: 'Performance customers know what they want and ask detailed questions, usually late in the evening. A build can run for weeks, with parts arriving in stages. The shop that stays in touch through all of it keeps the project.',
    answer: [
      'Yes. This page covers shops doing performance work, suspension, tuning, aftermarket parts and custom installs. The system answers the first inquiry at any hour, follows up on quotes, confirms each appointment and keeps the customer informed between stages.',
      'Technical advice is yours. The AI front desk does not recommend parts or promise results. It collects the vehicle and the goal and gets the conversation to you.',
    ],
    work: {
      title: 'What a performance shop sells, and how it is bought',
      items: [
        { t: 'Suspension', d: 'Lift kits, lowering, coilovers and alignment afterwards. The customer has usually chosen a look or a use first.' },
        { t: 'Tuning and power', d: 'Where it applies to the vehicles you work on. Sold on trust in the shop as much as on the part.' },
        { t: 'Aftermarket parts and installs', d: 'Exhausts, lighting, bumpers, racks and more. Some supplied by you, some brought in by the customer.' },
        { t: 'Custom and staged builds', d: 'Several jobs on one vehicle over time, planned together.' },
      ],
    },
    inquiry: {
      title: 'How customers reach a performance shop',
      items: [
        { t: 'A detailed message, late', d: 'A paragraph with the vehicle, the parts list and a question about fitment or order of work.' },
        { t: 'Social and forum referrals', d: 'They saw a build you posted and want the same.' },
        { t: '“Can you install parts I already bought?”', d: 'A common first question, and a policy you need to answer consistently.' },
      ],
    },
    quoting: {
      title: 'Quoting and booking performance work',
      body: [
        'Quotes combine parts and labour, and both can change once the vehicle is on the lift. Customers accept that when it is explained early.',
        'Parts are often ordered for the job, with lead times that move. The install is booked when they land, which can be weeks after the quote is accepted.',
        'Larger builds are commonly staged, with a deposit on parts. Deposit, supplied-parts and warranty policies stay yours, and the AI only repeats the versions you approve.',
      ],
    },
    objections: [
      { q: '“Can I supply my own parts?”', a: 'Answered from the policy you approve, word for word. Anything beyond it goes to you.' },
      { q: '“Will this work with my other mods?”', a: 'A technical question for a person. The AI collects the details and hands off.' },
      { q: '“I am saving up for it.”', a: 'A slow decision, not a no. The follow-up is paced to check in later rather than push now.' },
    ],
    leaks: [
      { slug: 'ai-receptionist', why: 'Enthusiasts write at night. Answering then, and booking a consult, keeps the build with you.' },
      { slug: 'quote-follow-up', why: 'Large quotes with long decisions. A check-in a few weeks on recovers projects that only paused.' },
      { slug: 'lead-response', why: 'A detailed inquiry deserves a fast acknowledgement, even when the full answer needs you.' },
      { slug: 'no-shows', why: 'A missed install idles a lift with parts already on the shelf.' },
      { slug: 'run-sheet', why: 'Multi-day jobs and staged builds make tomorrow’s order of work harder to keep in your head.' },
      { slug: 'repeat-customers', why: 'A build is never finished. Each customer has a next stage worth a message.' },
    ],
    keep: {
      title: 'Where repeat work comes from',
      items: ['A check-in after each stage of a build', 'An invitation back for the next stage, at the timing you set', 'A referral ask, since builds get shown off', 'A review request after every completed job'],
    },
    honest: ['It does not recommend parts or tunes, and does not promise performance results.', 'It does not track parts orders or supplier lead times.', 'It does not take deposits.', 'It never quotes prices. You approve and send every quote.'],
    faq: [
      { q: 'Our customers ask very technical questions. Will the AI get them wrong?', a: 'It only answers from information you approve. A technical question outside that is not answered. It takes the vehicle, the goal and the contact details and hands the conversation to you.' },
      { q: 'Can it keep a customer updated during a long build?', a: 'Each appointment gets a confirmation, reminders, and drop-off and pickup messages. Progress updates in between are sent by you from the app.' },
      { q: 'Is there a separate page for aftermarket parts shops?', a: 'Not yet. Aftermarket parts and custom installs are covered here, because the inquiry, quote and booking pattern is the same.' },
    ],
    guides: [],
  },
};
