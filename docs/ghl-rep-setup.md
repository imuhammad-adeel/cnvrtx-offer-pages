# Sales rep tracking: what GoHighLevel needs

The site now carries a sales rep's code from the link they share all the way to the order. This file is the brief for whoever builds the GoHighLevel side (the rep sub-account and its automations).

## What the site does

A rep shares any page with their code on the end:

- `https://get.cnvrtx.com/?rep=steve`
- `https://get.cnvrtx.com/auto/missed-calls?rep=steve`
- `https://get.cnvrtx.com/auto?plan=annual&rep=steve`

The site then:

1. Cleans the code: lower case, letters, digits, dashes and underscores only, 40 characters at most. `?rep=Steve` becomes `steve`.
2. Remembers it for 30 days on that visitor's device. A newer rep link replaces an older one (last link wins).
3. Sends it with everything the visitor submits:

| Where | How the code arrives in GoHighLevel |
| --- | --- |
| Checkout (order form in a frame) | Added to the order form's address: `...?rep=steve` |
| Reserve form | Field `rep` |
| Free Booking Leak Audit form | Field `rep` |
| Waitlist form | Field `rep` |

The ad details travel the same way, under the same names: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `fbclid`.

The site does not check that a code belongs to a real rep. An unknown code arrives as it was typed. GoHighLevel decides what to do with it.

## Traffic source tracking (same mechanism)

The site also records where each visitor came from and sends it with the same forms and the checkout. Nothing extra has to be built on the site to track a new source: add the tags below to the link you post or advertise.

| Field | What it holds | Who sets it |
| --- | --- | --- |
| `utm_source` | The platform: `instagram`, `facebook`, `google`, `youtube`, `email`, `whatsapp` | You, in the link |
| `utm_medium` | The kind of traffic: `paid`, `organic`, `bio`, `story`, `dm`, `email` | You, in the link |
| `utm_campaign` | The campaign name, for example `missed-calls-nov` | You, in the link |
| `utm_content` | The specific ad or post, for example `video-1` | You, in the link |
| `fbclid`, `gclid` | The click id Meta or Google adds to ad clicks | Added automatically by the ad platform |
| `landing` | The first page the visitor opened, for example `/auto/missed-calls` | The site, automatically |
| `referrer` | The website they came from, for example `instagram.com` or `cnvrtx.com` | The site, automatically |
| `rep` | The sales rep's code | The rep, in the link |

Example links:

- Instagram bio: `https://get.cnvrtx.com/?utm_source=instagram&utm_medium=bio`
- Facebook ad to the missed-calls page: `https://get.cnvrtx.com/auto/missed-calls?utm_source=facebook&utm_medium=paid&utm_campaign=missed-calls-nov&utm_content=video-1`
- A rep sharing a page from an Instagram DM: `https://get.cnvrtx.com/?rep=steve&utm_source=instagram&utm_medium=dm`

Keep the words lower case and consistent. `Instagram`, `insta` and `ig` would show up as three different sources.

In GoHighLevel, make one contact custom field for each of these nine names, with the field key equal to the name, and map them the same way as "Sales Rep" below: hidden fields on the order forms that read from the address, and mapped fields in the webhook workflows. Reports by source, campaign, landing page or rep then come from those fields.

## What to set up in GoHighLevel

1. **A contact custom field** named "Sales Rep", key `rep`, single line text. Every form and order form writes to it.
2. **Order forms must read the code from their address.** On each of the three order forms (Monthly, Annual, Monthly with the $297 Launch Kit), add a hidden field mapped to the "Sales Rep" custom field with the query key `rep`. Without this the code is dropped at payment, which is the one place it matters most.
3. **Webhook workflows must map the field.** In the Booking Leak Audit and Trade Waitlist workflows, map the incoming `rep` value to the "Sales Rep" custom field.
4. **Tag by rep.** When "Sales Rep" is not empty, add the tag `rep-` followed by the code, for example `rep-steve`.
5. **Assign the owner.** Keep a small lookup of code to GoHighLevel user (steve to Steve's user). On a new contact or opportunity with a known code, assign that user as the owner. With an unknown or empty code, leave it unassigned and notify the admin.
6. **Notify the rep.** On a new audit request, reserve request or paid order carrying their code, send the rep an internal notification with the contact's name, business and what they did.
7. **Record the sale.** On a successful payment, create or move the opportunity to "Won" in the sales pipeline, with the plan (monthly or annual), the amount, and the "Sales Rep" value. This is what a commission report is built from.
8. **Do not overwrite a rep.** If a contact already has a "Sales Rep" value and a paid order, later forms must not change it. Before a sale, the newest code may replace the older one, to match the site.

## The rep sub-account

- The rep works leads in GoHighLevel; they do not need access to the site.
- Give each rep one code and keep it fixed. Changing a code breaks the links they already shared.
- Use the same code in every industry. The industry is in the address (`/auto`, later `/roofing`), not in the code.
- Suggested saved replies for the rep, so links are never typed by hand:
  - Sales page: `https://get.cnvrtx.com/?rep=CODE`
  - Checkout, annual: `https://get.cnvrtx.com/auto?plan=annual&rep=CODE`
  - Checkout, monthly: `https://get.cnvrtx.com/auto?plan=monthly&rep=CODE`
  - Checkout, monthly with the $297 Launch Kit: `https://get.cnvrtx.com/auto?plan=monthly&offer=kit&rep=CODE`

## Rules that already apply

- No text message to anyone who has not agreed to texts. None of the site's forms collect that consent except the two optional boxes on the reserve form.
- The AI never quotes a price and says it is an AI if asked.
- Test with tagged test contacts and a test email address, never with real leads.

## How to test

1. Open `https://get.cnvrtx.com/?rep=test-rep`.
2. Go to the checkout and confirm the order form's address contains `rep=test-rep`.
3. Pay in test mode. Confirm the contact has "Sales Rep" = `test-rep`, the tag `rep-test-rep`, and a "Won" opportunity with that value.
4. Submit the audit form from the same browser and confirm the same field and tag.
