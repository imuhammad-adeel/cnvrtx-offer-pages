# Going live: the two prompts and the order of work

AI Studio stopped on the checkout build for three reasons. Two of them need no fix, one needs work in GoHighLevel.

| What AI Studio reported | What it means | What we do |
| --- | --- | --- |
| No products in this project's Payments catalog | The three prices are not attached to the AI Studio project | Agency chat attaches them (prompt 1) |
| The payment block cannot be prefilled with the buyer's email, name and phone | The buyer types their email again at checkout | Accepted. The checkout page shows the email they gave, so they type the same one (prompt 2) |
| The payment block cannot save the rep code and traffic source with the order | Those values cannot be written at payment | Not needed. The reserve form already sends them to GHL with the same email before checkout, so they are on the contact when the order arrives |

## Order of work

1. Agency chat: prompt 1 (products into the AI Studio project, test mode, check the reserve workflow).
2. AI Studio: prompt 2 (build the three checkout pages).
3. Offer-pages chat (Claude): switch checkout on, publish, run one test-mode purchase end to end.
4. Agency chat: confirm the order, the workflow and the welcome email, then switch Payments to live.

---

## Prompt 1: for the agency chat (the one that works inside GoHighLevel)

```text
Goal for today: the checkout on get.cnvrtx.com must take a test-mode payment and create the order in HighLevel. The site, the reserve form and the thank-you page are done. The three checkout pages are built by GHL AI Studio with its native Payments block, and AI Studio is blocked because its project has no products in its Payments catalog. I need you to fix that inside GoHighLevel. Reply to me in Roman Urdu.

Rules: test mode only, no live charges. Do not change any workflow logic, custom value, or existing product or price. Do not put the "Founding (Kit waived)" price or the Private Plan in front of the public. If a step would need a new product or price to be created, stop and ask me first.

Step 1. Find where the products live.
- Open the AI Studio project that serves get.cnvrtx.com and note which sub-account (location) it belongs to.
- In that same sub-account, open Payments > Products and check that these exist:
  a) "CNVRT X Front Office | Monthly" with a price of $197 per month plus a $497 one-time Launch Kit (setup fee).
  b) The same product with a second price of $197 per month plus a $297 one-time Launch Kit.
  c) "CNVRT X Front Office | Annual" at $1,970 per year, no setup fee.
- If the products exist in a different sub-account than the AI Studio project, stop and tell me which account has the products and which has the project. Do not copy or recreate anything.

Step 2. Attach the three prices to the AI Studio project.
- In the AI Studio project open More > Payments. The integration is already enabled.
- Add or select exactly those three prices so they appear in the project's Payments catalog. Leave the Founding price and the Private Plan out.
- Set the project's Payments environment to Test mode.
- Tell me the exact product name and price name of each of the three as they appear in the catalog.

Step 3. Check the reserve workflow, because checkout cannot carry attribution.
The AI Studio payment block cannot save the rep code or UTM values with the order. That is fine only if the reserve form's workflow has already saved them. The reserve form POSTs to the inbound webhook ending in rqBlDvUt18TszDZ0L305 before the buyer reaches checkout, with the same email they will pay with.
- Confirm that workflow creates or updates the contact by email and saves these fields on the contact: rep (Sales Rep), utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, fbclid, landing, referrer, plus billing_interval and plan_interest.
- Confirm the "Order submitted" workflow reads Sales Rep from the contact, not from the order.
- Report only. If something is missing, tell me what; do not rewrite the workflow without asking.

Step 4. Tell me when steps 1 to 3 are done. I then give AI Studio its prompt to build the pages, and the site is switched to send buyers to them.

Step 5. After the pages are built, run one test-mode purchase with a tagged test contact and a +alias test email, never a real lead:
- Open https://get.cnvrtx.com/?rep=test-rep , press Start Monthly, fill the reserve form with the test email, continue to checkout, pay with a test card.
- Confirm: the order appears in Payments > Orders and Transactions; the contact is one contact (not two) and has Sales Rep = test-rep; the "Order submitted" workflow fired; the post-purchase welcome email (AG-10) arrived with the 3 steps; the buyer landed on https://get.cnvrtx.com/thank-you?paid=1 .
- Repeat once for Annual and once for the $297 Launch Kit page.
- Remove the test contact from any long waits afterwards.

Step 6. Report back: the three catalog entries, whether each test order passed, anything that failed and where, and the exact clicks to switch Payments from Test to Live. Do not switch to Live yourself; I decide that.
```

---

## Prompt 2: for AI Studio (after prompt 1 is done)

```text
The products are now in this project's Payments catalog, in Test mode. Build the three checkout pages. Two earlier requirements are dropped, so nothing blocks you: do not prefill the payment block, and do not save attribution fields with the order.

Read AGENTS.md first. Do not edit src/site/, public/_astro/ or src/site-pages.ts, and do not remove the sitePage call in src/server.ts. Add the checkout pages as new routes only.

Pages, at exactly these addresses, each pinned to one price from the catalog:

1. /checkout/monthly      -> "CNVRT X Front Office | Monthly", $197 per month + Launch Kit $497
2. /checkout/monthly-kit  -> the same product, the price with $197 per month + Launch Kit $297
3. /checkout/annual       -> "CNVRT X Front Office | Annual", $1,970 per year

Never show the "Founding (Kit waived)" price or the Private Plan.

On each page:
- Mount the native PaymentCheckoutBlock in default mode, pinned to that page's price. Require email. Keep phone visible.
- onSuccess: send the buyer to /thank-you?paid=1 on this same site.
- Above the payment block, show one line of plain text read from the browser, not passed into the block: read sessionStorage key "cx_buyer" (JSON with email and first_name). If it has an email, show: "Use the same email you just gave us: <email>". If the key is missing, show nothing. This is page text only; do not try to inject it into the payment form.
- Show the plan name, what is charged today and what recurs:
  monthly: $197 a month, plus a one-time $497 Launch Kit. Due today $694.
  monthly-kit: $197 a month, plus a one-time $297 Launch Kit (regular $497). Due today $494.
  annual: $1,970 a year. Launch Kit included. Due today $1,970.
- Under it, "What happens after you pay", exactly these three steps:
  1. Check your inbox for your login email (arrives within a few minutes; check spam/promotions).
  2. Log in.
  3. Click "Setup Center" in the left menu and answer the setup questions (about 10-15 minutes).
  Then one line: "As soon as you finish Setup Center, your 14-day launch clock starts."
- Design: background #070B10, lime #D8FF3E, orange #FF5A1F, headings in Sora, text in Manrope, one column on phones. No menu and no other offers. Only these links: the logo to "/", and /legal/terms, /legal/cancellation, /legal/privacy.
- Mark each page noindex.

Test mode only. Do not create products or prices. Do not change any workflow or custom value.

When done, tell me: the three addresses and the exact product and price each is pinned to, and whether each page loads the payment block in the preview. If any part cannot be done, tell me exactly which part and stop.
```

---

## What the offer-pages chat does after prompt 2

1. Opens the three addresses and checks each one loads.
2. Sets `checkoutLive: true` in `src/config/offerV9.ts`, so the reserve form sends buyers on to checkout.
3. Merges the thank-you pull request if it is approved, builds, and publishes both repositories.
4. Checks the live site: reserve, checkout, thank-you.
