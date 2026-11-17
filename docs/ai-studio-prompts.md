# Prompts and build notes: what is still switched off

Four things on the site are built but switched off, because each needs something created inside GoHighLevel first. For each one this file gives:

1. what has to exist in GoHighLevel,
2. a prompt to paste into AI Studio,
3. what to send back to Claude so it can be switched on in the site.

The site pages themselves are never edited in AI Studio. They are generated from the Astro project and overwritten on every sync. AI Studio is only asked to create things in the GoHighLevel account and to hand back links.

Not verified: whether AI Studio can create products, order forms and Voice AI agents by prompt in your account. If it answers that it cannot, the manual steps under each prompt do the same job.

---

## 1. Checkout (currently off)

**Now:** every "Start Annual" and "Start Monthly" button, and the reserve form, open the checkout page at `get.cnvrtx.com/auto`. Its payment panel says "Checkout is being connected" until the order form links below exist. No one can pay yet.

**Needed in GoHighLevel:** three order forms. The third is the leaving offer, which charges a lower Launch Kit, so it needs its own form.

| Order form | Charges |
| --- | --- |
| Monthly | $197 every month, plus a one-time $497 Launch Kit on the first payment |
| Monthly, leaving offer | $197 every month, plus a one-time $297 Launch Kit on the first payment |
| Annual | $1,970 once a year. No Launch Kit. |

After a successful payment each form must send the buyer to:

- `https://get.cnvrtx.com/onboarding?paid=1`

The `?paid=1` part matters. The onboarding page only says "Payment received" and "You are in" when the address carries it.

### Prompt for AI Studio

```text
Do not change any page or file of this site. I only need things created in my GoHighLevel account and the links returned to me.

Create the products and three order forms for "CNVRT X Front Office":

1. Monthly plan
   - Recurring price: $197 per month.
   - One-time setup fee on the first payment: $497, named "Launch Kit".
   - Order form name: "CNVRT X Front Office, Monthly".

2. Annual plan
   - Recurring price: $1,970 per year.
   - No setup fee.
   - Order form name: "CNVRT X Front Office, Annual".

3. Monthly plan, leaving offer
   - Recurring price: $197 per month.
   - One-time setup fee on the first payment: $297, named "Launch Kit".
   - Order form name: "CNVRT X Front Office, Monthly, $297 Launch Kit".

For all three order forms:
- Collect first name, business name, email and phone.
- After a successful payment, redirect to https://get.cnvrtx.com/onboarding?paid=1
- Tag the contact "front-office-customer" and, by plan, "plan-monthly" or "plan-annual".
- The form must work inside an iframe on get.cnvrtx.com.

When done, give me the three public order form links: Monthly, Annual, and Monthly with the $297 Launch Kit. If you cannot create any part of this, tell me exactly which part and stop.
```

### If AI Studio cannot do it

In GoHighLevel: Payments → Products → create the two products with the prices above. Then Sites → Funnels → new funnel → add a step with a two-step order form for each product, and set the redirect after purchase to the address above.

### Send back to Claude

The three order form links. Claude puts them in `src/config/offerV9.ts` (`checkout.frontOffice.monthly`, `.annual` and `exitOffer.checkout`), sets `checkoutLive: true`, tests a card payment with you in test mode, and syncs both repos.

---

## 2. Voice demo (currently off)

**Now:** the "Meet your new front desk" section shows a written example conversation. The live demo is off because no agent exists yet.

**Needed in GoHighLevel:** one Voice AI agent for a made-up example shop, plus its web widget embed code.

### Prompt for AI Studio

```text
Do not change any page or file of this site. I need a Voice AI agent created in my GoHighLevel account and its web widget embed code returned to me.

Create a Voice AI agent named "CNVRT X Demo Front Desk" for a fictional business called "Example Auto Studio" (detailing, ceramic coating, PPF and window tint). It is a public demo on a sales page, so:

Rules the agent must follow:
- Open with: "Thanks for calling Example Auto Studio. I'm the shop's AI assistant. How can I help?"
- If asked whether it is a person, say it is an AI assistant.
- Never quote a price. Say: "I can't quote prices, but I can get you an exact quote from the shop."
- Offer a free inspection and suggest two example times.
- If the caller asks for the owner, take a name and number and say the owner will call back.
- Do not create real appointments, contacts or follow-ups from demo calls.
- Do not ask for or repeat personal details beyond a first name.
- End the call at 3 minutes with a polite goodbye.
- Languages: English and Spanish.

Knowledge for the agent (fictional):
- Hours: Monday to Saturday, 8 AM to 6 PM.
- Services: detailing, ceramic coating, paint protection film, window tint.
- Free inspection takes 15 minutes.

When done, give me the web widget embed code for this agent. If you cannot create any part of this, tell me exactly which part and stop.
```

### If AI Studio cannot do it

In GoHighLevel: AI Agents → Voice AI → create an agent with the rules above, then open its web widget settings and copy the embed code.

### Send back to Claude

The embed code. Claude puts it in `src/config/offerV9.ts` (`voiceDemo.embed`), sets `voiceDemo.enabled: true`, checks the call starts and ends on phone and desktop, and syncs both repos.

### Brief for Claude (the build on the site side)

- File: `src/components/automotive-v9/Voice9.astro`. It already renders the live demo when `cfg.voiceDemo.enabled && cfg.voiceDemo.embed`; otherwise it shows the written example.
- Wording for the live states is already in `voice9` in `src/content/automotiveCopyV9.ts` (`idle`, `onCall`, `afterCall`, `limit`, `fabLive`) and its general version in `src/content/localCopy.ts`.
- The embed is third-party script: load it only after the visitor presses "Start talking", never on page load, so it does not slow the page.
- The site is auto-first, so one auto demo agent covers the home page and all twelve problem pages. The general page at `/local` is not published and keeps the written example.
- Check: call connects, the 3-minute limit is stated, the mic permission prompt is explained, and nothing is recorded as a real lead.

---

## 3. Lead forms for visitors who are not ready to buy (currently off)

Two forms are built and hidden on the live site until each has somewhere to send its data:

| Form | Where it shows | Sends |
| --- | --- | --- |
| Free Booking Leak Audit | Popup after the leaving offer is declined, the link under the price cards, the footer, and "Email me my numbers" under the calculator (same form) | `business_name`, `website`, `primary_service`, `email`, `phone`, `monthly_inquiries`, `send_calculator_numbers`, `landing_page`, `opened_from`, `calc_estimate` |
| Waitlist for other trades | Footer link "Not an auto shop? Join the waitlist" | `trade`, `business_name`, `email`, `landing_page` |

**Needed in GoHighLevel:** one inbound webhook workflow for each.

### Prompt for AI Studio

```text
Do not change any page or file of this site. I need two workflows created in my GoHighLevel account and their webhook links returned to me.

Workflow 1: "Booking Leak Audit request"
- Trigger: Inbound Webhook.
- Fields received: business_name, website, primary_service, email, phone, monthly_inquiries, send_calculator_numbers, landing_page, opened_from, calc_estimate.
- Create or update the contact from email and phone. Save the other fields on the contact.
- Add the tag "audit-requested".
- Create an opportunity in a pipeline named "Free Audit", stage "Requested".
- Send me an internal notification with all the fields.
- Send the contact one email: "We received your request for a Booking Leak Audit. We will send it to this address." Do not promise a delivery time.
- If send_calculator_numbers is "yes", add calc_estimate to that same email, with a link back to landing_page.
- Do not send any text message. This form does not collect consent for texts.

Workflow 2: "Trade waitlist"
- Trigger: Inbound Webhook.
- Fields received: trade, business_name, email, landing_page.
- Create or update the contact from email. Save trade on the contact.
- Add the tag "waitlist" and a second tag "waitlist-" followed by the trade in lower case.
- Send the contact one email: "You are on the waitlist. We will email you when the version for your trade is ready." Do not promise a date.
- Do not send any text message.

When done, give me the two webhook links. If you cannot create any part of this, tell me exactly which part and stop.
```

### Send back to Claude

The two webhook links. Claude puts them in `src/config/offerV9.ts` (`forms.audit` and `forms.waitlist`). The forms then appear on the live site.

The "Reserve your build" form and the onboarding form work the same way: `auditFormUrl` in `src/config/automotiveOffer.ts` and `flow9.onboardingFormUrl` in `src/content/automotiveCopyV9.ts`.

---

## 4. Details only you can supply

These are left off the live site until they are real. Nothing is invented in their place.

| Needed | Where it shows | Goes in |
| --- | --- | --- |
| Support email, phone, business address | Footer, "Who's behind CNVRT X", legal pages | `offerV9.contact`, `offerV9.legalInfo` |
| Founder name, role, photo, a few lines | "Who's behind CNVRT X" | `offerV9.about` |
| 60 to 90 second walkthrough video of the real owner app, inbox and run sheet | "Who's behind CNVRT X" | `offerV9.about.videoUrl` |
| Written permission from the auto shop's owner to mention the shop | "Who's behind CNVRT X" | `offerV9.about.story.approved` |
| Lawyer review of the five legal pages | Legal pages | `offerV9.legalInfo.reviewed` |
| State the company is registered in | Terms of Service | `offerV9.legalInfo.governingState` |
