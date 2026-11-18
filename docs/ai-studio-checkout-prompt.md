# Checkout in AI Studio: the prompt, and how it connects to the site

The three checkout pages are built inside GoHighLevel AI Studio, on `get.cnvrtx.com`, with AI Studio Payments and the existing HighLevel products. That way the order is created in HighLevel and the "Order submitted" workflow fires. No raw Stripe links and no new products or prices. No other checkout domain is used.

Everything around those pages is already built in this project. This file is what is left: the prompt for AI Studio, and the one switch to flip afterwards.

## The flow

1. Any "Start Annual", "Start Monthly" or "Reserve" button goes to the reserve form.
2. The reserve form POSTs to the RESERVE webhook first. That starts abandoned-checkout recovery.
3. It then opens the matching checkout page:

| Buyer chose | Checkout page | Product and price |
| --- | --- | --- |
| Monthly | `https://get.cnvrtx.com/checkout/monthly` | "CNVRT X Front Office \| Monthly": $197/mo + Launch Kit $497 |
| Monthly, after taking the leaving offer | `https://get.cnvrtx.com/checkout/monthly-kit` | Same product: $197/mo + Launch Kit $297 |
| Annual | `https://get.cnvrtx.com/checkout/annual` | "CNVRT X Front Office \| Annual": $1,970/yr, Launch Kit included |

4. After payment: `https://get.cnvrtx.com/thank-you?paid=1` ("One step left", with a button to the form).
5. Then: `https://get.cnvrtx.com/onboarding?paid=1`, which POSTs to the ONBOARDING webhook with the email filled in.

## How the buyer's details reach the checkout page

The reserve form saves the buyer's email, first name and phone in the browser, under the key `cx_buyer` in `sessionStorage`, as JSON: `{"email":"...","first_name":"...","phone":"..."}`. The checkout pages are on the same site, so they can read it and fill the payment form in. Nothing personal is put in the address.

The rep code and traffic source are stored the same way under `cnvrtx_attribution` (JSON with `rep`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `fbclid`, `landing`, `referrer`). The rep code is also kept for 30 days in `localStorage` under `cnvrtx_rep` as `{"code":"steve","at":<time>}`.

## Prompt for AI Studio

```text
Build three checkout pages in this project using AI Studio Payments, with the products that already exist in this HighLevel account. Do not use raw Stripe links. Do not create new products or prices. The order must be created in HighLevel so the "Order submitted" workflow fires. Work in test mode only: no live charges.

Read AGENTS.md first. Most pages of this site are finished HTML in src/site/, served unchanged by src/site-pages.ts. Do not edit src/site/, public/_astro/ or src/site-pages.ts, and do not remove the sitePage call in src/server.ts. Add the checkout pages as new routes; the addresses below are not used by any existing page.

Pages to build, at exactly these addresses:

1. /checkout/monthly
   Product: "CNVRT X Front Office | Monthly". Price: $197 per month plus the Launch Kit at $497.

2. /checkout/monthly-kit
   The same product, "CNVRT X Front Office | Monthly", using its price of $197 per month plus the Launch Kit at $297.

3. /checkout/annual
   Product: "CNVRT X Front Office | Annual". Price: $1,970 per year, Launch Kit included.

Do not put the "Founding (Kit waived)" price or the Private Plan on any public page.

On each page:
- Keep the payment element native to AI Studio Payments.
- Before the payment form renders, read sessionStorage key "cx_buyer". It is JSON with email, first_name and phone. Prefill those three fields from it. Using the same email matters: it is how the contact merges with the one the reserve form already created. If the key is missing, leave the fields empty.
- Read sessionStorage key "cnvrtx_attribution" (JSON). If it has "rep", save it to the contact's "Sales Rep" field with the order. If that key has no rep, read localStorage key "cnvrtx_rep" (JSON with "code") and use that. Save utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, fbclid, landing and referrer to the contact fields of the same names when they are present.
- After a successful payment, send the buyer to /thank-you?paid=1 on this same site.
- Design: dark background #070B10, lime accent #D8FF3E, orange #FF5A1F, headings in Sora, text in Manrope, to match the rest of the site. One column on phones. Show the plan name, what is charged today and what recurs. No menu, no other offers, no links away from the page except the logo to "/" and the Terms, Cancellation Policy and Privacy Policy at /legal/terms, /legal/cancellation and /legal/privacy.
- Mark each page noindex.

Do not change any workflow, product, price or custom value in HighLevel.

When done, tell me:
- the three page addresses and which product and price each one uses,
- whether Payments had to be enabled or connected, and the exact clicks I must do if so,
- whether a test-mode order went through and appeared in Payments > Orders and Transactions.
If you cannot do any part of this, tell me exactly which part and stop.
```

## After AI Studio has built them

Tell Claude in the offer-pages chat. It then:

1. Opens each of the three addresses and checks it loads.
2. Sets `checkoutLive: true` in `src/config/offerV9.ts`. From then on the reserve form opens the checkout page after sending the details. Until then it says checkout opens shortly, so nobody is sent to a page that is not there.
3. Runs one full pass in test mode with a tagged test contact: reserve, pay with a test card, thank-you, onboarding.
4. Publishes both repositories.

If AI Studio builds the pages at different addresses, give Claude the three addresses; they are set in one place (`checkout` and `exitOffer.checkout` in `src/config/offerV9.ts`).
