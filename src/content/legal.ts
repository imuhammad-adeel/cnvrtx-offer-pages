/**
 * Legal pages for the CNVRT X offer pages: /legal/<slug>.
 *
 * THESE ARE DRAFTS. They were written to match what the offer pages promise (plans,
 * guarantees, cancellation, texting consent) and what US business texting (A2P 10DLC)
 * reviewers look for. They are not legal advice. Have a lawyer review them, then set
 * `legalInfo.reviewed` to true in src/config/offerV9.ts to remove the "Draft" notice.
 *
 * Tokens filled from config: {company} {brand} {site} {email} {state} {date} {monthly} {annual} {kit} {website}
 * A block is either a paragraph (string) or a bullet list (string[]).
 */

export type LegalBlock = string | string[];
export type LegalDoc = {
  slug: string;
  title: string;
  /** Short name for menus and the footer. */
  nav: string;
  intro: string;
  sections: { h: string; body: LegalBlock[] }[];
};

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    nav: 'Privacy Policy',
    intro: 'This policy explains what information {company} ("{brand}", "we", "us") collects, how we use it, and the choices you have. It covers this website and the {brand} Front Office service.',
    sections: [
      {
        h: '1. Information we collect',
        body: [
          'Information you give us:',
          ['Your name, business name, email address and phone number, when you reserve a build, check out or contact us.', 'Details about your shop that you provide for setup, such as services, hours, prices and policies.', 'Billing details. Payments are handled by our payment processor. We do not store full card numbers.'],
          'Information collected automatically:',
          ['Basic device and usage data, such as pages viewed and buttons clicked.', 'Where you came from, such as campaign tags in a link (for example utm_source).'],
          'Information about your customers:',
          ['When we run the service for your shop, the system handles information about your customers, such as names, phone numbers, email addresses, messages, bookings and job details. We process this on your behalf. It stays yours.'],
        ],
      },
      {
        h: '2. How we use information',
        body: [['To set up, run and support the service you bought.', 'To reply to you and send account and setup messages.', 'To send tips and offers, only if you agreed to receive them.', 'To understand how the website is used and improve it.', 'To meet legal obligations and prevent misuse.']],
      },
      {
        h: '3. Text messaging',
        body: [
          'If you give us your mobile number and agree to receive texts, we use it only for the purpose you agreed to. Consent to receive texts is optional and is not a condition of buying anything.',
          'Mobile opt-in information and consent are not shared with, sold to or rented to third parties or affiliates for their marketing or promotional purposes.',
          'See our SMS Terms for how to stop messages and get help.',
        ],
      },
      {
        h: '4. When we share information',
        body: [
          'We do not sell your personal information. We share it only:',
          ['With service providers who help us run the service, such as hosting, messaging, phone, payment and analytics providers. They may use it only to provide their service to us.', 'When the law requires it, or to protect our rights, our customers or the public.', 'As part of a merger or sale of the business, in which case this policy continues to apply to your information.'],
        ],
      },
      {
        h: '5. Your shop’s customer data',
        body: ['Your domain, content and customer list belong to you. You can ask for an export at any time. We do not contact your customers for our own purposes and we do not sell or share their information.'],
      },
      {
        h: '6. How long we keep it',
        body: ['We keep information for as long as your account is active and for a reasonable period afterwards to meet legal, tax and accounting needs. You can ask us to delete information sooner, subject to those needs.'],
      },
      {
        h: '7. Security',
        body: ['We use reasonable technical and organizational measures to protect information. No system is perfectly secure, so we cannot guarantee absolute security.'],
      },
      {
        h: '8. Your choices',
        body: [['Reply STOP to any text to stop texts.', 'Use the unsubscribe link in any marketing email.', 'Ask us to access, correct or delete your personal information.', 'Depending on where you live, you may have further rights under local privacy law. Contact us and we will respond as the law requires.']],
      },
      {
        h: '9. Children',
        body: ['This service is for businesses. It is not directed to children under 13, and we do not knowingly collect their information.'],
      },
      {
        h: '10. Changes to this policy',
        body: ['We may update this policy. The date at the top shows when it last changed. If a change is significant, we will tell account holders by email.'],
      },
      { h: '11. Contact', body: ['{contact}'] },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    nav: 'Terms of Service',
    intro: 'These terms are the agreement between you and {company} ("{brand}", "we", "us") for the {brand} Front Office service. By buying or using the service you agree to them.',
    sections: [
      {
        h: '1. The service',
        body: [
          'We set up and run a front-office system for your shop: answering leads, following up, confirming bookings, asking for reviews and reporting, as described on our website at the time you buy. We build it, write the messages and test it for you.',
          'Some features depend on third parties. For example, business texting in the US needs carrier registration and approval, and those features go live only after approval.',
        ],
      },
      {
        h: '2. Your part',
        body: [['Give us accurate information about your shop and the access we need to set things up.', 'Use the service lawfully.', 'Only have the system contact people who have agreed to be contacted in that way. You are responsible for having the permission the law requires to call, text or email your customers.', 'Review the content we write for you and tell us if anything is wrong.']],
      },
      {
        h: '3. Fees and billing',
        body: [
          ['Monthly plan: {monthly} a month, plus a one-time Launch Kit fee of {kit}.', 'Annual plan: {annual} a year, paid in advance. The Launch Kit fee is waived.', 'A full website is a one-time {website} add-on on the monthly plan and is included on the annual plan.', 'Each month includes {allowance}. Carrier fees for texting are passed on at cost and shown to you before activation.'],
          'Prices are those shown at checkout. Plans renew automatically until cancelled. If a payment fails we may pause the service until it is resolved.',
        ],
      },
      {
        h: '4. Guarantees',
        body: [
          ['Live in 14 days, or your first month is free. The clock starts as soon as you finish Setup Center in your account. Carrier (A2P), domain and third-party approvals are outside the 14 days.', 'Texts go only to people who agreed to them, after carrier approval, and during texting hours ({hours}).'],
          'On an annual plan a free month is given as one extra month added to your term.',
        ],
      },
      { h: '5. Cancellation', body: ['You can cancel as described in our Cancellation Policy, which is part of these terms.'] },
      {
        h: '6. AI features',
        body: ['The AI answers from information you approve. It does not quote prices and it says it is an AI if asked. It can still make mistakes. It hands unusual requests to you, and you remain responsible for decisions about your customers, prices and work.'],
      },
      {
        h: '7. No guarantee of results',
        body: ['We do not guarantee bookings, revenue or any specific result. Calculators and examples on our website are illustrations based on the numbers entered. Your results depend on your services, prices, market and how you run your shop.'],
      },
      {
        h: '8. Your content and data',
        body: ['Your domain, content and customer list belong to you. You give us permission to use them only to provide the service. You can ask for an export at any time.'],
      },
      {
        h: '9. Our materials',
        body: ['The system design, templates and software we use remain ours or our licensors’. You may use them while your subscription is active.'],
      },
      {
        h: '10. Limits of liability',
        body: ['To the extent the law allows, we are not liable for indirect or consequential losses, lost profits or lost business. Our total liability for any claim is limited to the fees you paid us in the 12 months before the claim arose. Nothing in these terms limits liability that cannot be limited by law.'],
      },
      { h: '11. Changes', body: ['We may update these terms. If a change is significant, we will tell account holders by email before it takes effect. Continuing to use the service after that means you accept the change.'] },
      { h: '12. Governing law', body: ['{governing}'] },
      { h: '13. Contact', body: ['{contact}'] },
    ],
  },
  {
    slug: 'sms-terms',
    title: 'SMS Terms',
    nav: 'SMS Terms',
    intro: 'These terms cover text messages sent by {company} ("{brand}") to people who agreed to receive them.',
    sections: [
      {
        h: '1. What you are signing up for',
        body: [
          'We offer two text programs. Each is optional and each needs its own consent:',
          ['Account and setup texts: messages about your account, your build and your launch.', 'Tips and offers: occasional marketing messages about our services.'],
          'You agree by ticking the matching box on our form. Ticking a box is not required to reserve a build or to buy anything.',
        ],
      },
      { h: '2. How often we text', body: ['Message frequency varies. Account and setup texts are sent when there is something to tell you. Tips and offers are occasional.'] },
      { h: '3. Cost', body: ['We do not charge for texts. Message and data rates may apply, depending on your mobile plan.'] },
      {
        h: '4. How to stop',
        body: ['Reply STOP to any message to stop receiving texts from that program. You will get one confirmation message. You can opt back in by replying START or by contacting us.'],
      },
      { h: '5. How to get help', body: ['Reply HELP to any message, or contact us. {contact}'] },
      { h: '6. Carriers', body: ['Texts are sent through US mobile carriers. Carriers are not liable for delayed or undelivered messages. Delivery is not guaranteed.'] },
      {
        h: '7. Your privacy',
        body: ['Mobile opt-in information and consent are not shared with, sold to or rented to third parties or affiliates for their marketing or promotional purposes. See our Privacy Policy.'],
      },
      {
        h: '8. Texts your shop sends to its customers',
        body: ['If you are a {brand} customer, the system can send texts to your own customers on your behalf, such as replies, confirmations and reminders. Those texts go only to people who agreed to receive them from your shop, and only after carrier approval. Your customers can reply STOP at any time.'],
      },
    ],
  },
  {
    slug: 'cancellation',
    title: 'Cancellation Policy',
    nav: 'Cancellation Policy',
    intro: 'This policy explains how to cancel the {brand} Front Office service and what happens when you do.',
    sections: [
      {
        h: '1. Monthly plan',
        body: [['Month-to-month. There is no long-term contract.', 'You can cancel at any time. The service runs until the end of the month you have paid for and does not renew.', 'We do not refund part of a month already paid.', 'The one-time Launch Kit fee is not refundable once setup has started.']],
      },
      {
        h: '2. Annual plan',
        body: [['Paid in advance for 12 months.', 'Annual payments are not refundable.', 'You can cancel at any time. The service runs until the end of the year you have paid for and does not renew.']],
      },
      {
        h: '3. Our guarantee still applies',
        body: [['Live in 14 days, or your first month is free. The clock starts as soon as you finish Setup Center in your account. Carrier (A2P), domain and third-party approvals are outside the 14 days.', 'On an annual plan a free month is given as one extra month added to your term.']],
      },
      {
        h: '4. Your data when you leave',
        body: ['Your domain, content and customer list are yours. Ask us for an export before or within 30 days after your service ends. After that we may delete account data, except what we must keep by law.'],
      },
      { h: '5. How to cancel', body: ['{contact} Tell us the business name on the account and the date you want the service to end.'] },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    nav: 'Disclaimer',
    intro: 'Please read this alongside our Terms of Service.',
    sections: [
      {
        h: '1. Results',
        body: ['{company} does not guarantee bookings, revenue or any specific result. Results depend on your services, prices, market and how you run your shop.'],
      },
      {
        h: '2. Calculators and examples',
        body: ['Figures in the calculators on this website are arithmetic on the numbers you enter, with example values shown until you change them. Mock conversations, run sheets, reports and site designs are labelled as examples. They are illustrations, not real customers or real results.'],
      },
      {
        h: '3. Cost comparisons',
        body: ['Wage figures used in comparisons come from published sources named next to them. Your local costs may differ.'],
      },
      {
        h: '4. Texting',
        body: ['Business texting in the US needs carrier registration (A2P 10DLC). Texting features go live after carrier approval. Texts go only to people who agreed to them. Message and data rates may apply.'],
      },
      {
        h: '5. AI',
        body: ['AI features answer from information the shop approves. They do not quote prices and do not claim to be human. They can make mistakes and are not a substitute for the shop owner’s judgment.'],
      },
      {
        h: '6. Not professional advice',
        body: ['Nothing on this website is legal, tax, financial or compliance advice.'],
      },
      {
        h: '7. Trademarks',
        body: ['Google, Facebook, Instagram and Meta are trademarks of their owners. This site is not part of, or endorsed by, any of them.'],
      },
    ],
  },
];
