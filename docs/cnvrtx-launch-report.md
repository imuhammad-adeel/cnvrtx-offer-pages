# cnvrtx.com: launch report

Date: 2026-11-18 (built 2026-11-17, rechecked after the checkout flow changed). The site is built and checked. It is **not deployed** and **not indexable**. Nothing goes live until the owner approves.

**Staging (2026-11-23):** the site is live for review at `https://staging.cnvrtx.com`. It is not the launch. Every page says noindex and every response carries an `X-Robots-Tag: noindex, nofollow` header. No login is needed to open it. Update it with `npm run site:stage`. cnvrtx.com itself has nothing deployed. On launch day, remove the staging site.

Notes from the staging deploy: `http://` is not yet sent to `https://` on the Cloudflare zone (switch on "Always Use HTTPS" before launch). The audit popup on staging posts to the live GHL webhook, so do not submit it with made-up details.

How to look at it: `npm run site:build`, then `npm run site:preview`, then open `http://localhost:4330`.

---

## READY

- **37 pages built** from the approved plan (`docs/cnvrtx-site-proposal.md`, version 2), in the approved addresses.
- Brand home, auto hub, 12 problem pages, 8 shop-type pages, how-it-works, guide library, 6 guides, about, 5 legal pages, 404 page.
- **Automatic check passes** (`npm run site:check`): every page has a unique title and description, exactly one H1, a self-referencing canonical, a robots tag, Open Graph tags, valid structured data and a breadcrumb. No broken links, no missing anchors, no placeholder text, no em dashes, no unfilled tokens.
- **No orphan pages.** Every page in the sitemap is linked from the content of at least two other pages.
- **Duplicate content is under control.** Shared text between any two problem or shop pages averages 12%, highest pair 27% (detailing shops and mobile detailing, which list the same three guides). Between guides: average 11%, highest 15%.
- **Sitemap and robots.txt** are generated. The sitemap lists only canonical pages meant for Google. robots.txt blocks nothing.
- **Phone and desktop checked.** All 33 page addresses tested at 375px and 1280px wide: no sideways scrolling at phone width. Home, hub, problem, shop and guide pages looked over by eye at both sizes. No browser errors.
- **Buy buttons** on the hub go to `https://get.cnvrtx.com/auto?plan=annual` and `?plan=monthly`. That page is the order summary; its button leads to the reserve form, and only then to checkout. cnvrtx.com has no reserve form of its own and never links straight to a checkout page, so every purchase passes the reserve form on get.cnvrtx.com.
- **Free Booking Leak Audit** popup is on the hub and the problem pages, using the shared form unchanged, so it sends the same fields to the same GHL webhook as on get.cnvrtx.com. It has **not** been test-submitted from cnvrtx.com, because no test data is sent to the live webhooks without the owner's say.
- **Prices and claims** are read from the same config as checkout (`src/config/offerV9.ts`): $197 a month, $1,970 a year, $497 Launch Kit, live in 14 days or month one free. Nothing was retyped.
- **get.cnvrtx.com is unchanged.** Its build was run after this work: same 26 pages, same relative checkout links, same footer.
- **Cloudflare deploy file** is prepared (`wrangler.jsonc`): clean addresses with no trailing slash, real 404 status.

## BLOCKED

These stop the launch. None of them can be done from here.

1. **cnvrtx.com is not on Cloudflare yet.** The domain is still on GoHighLevel.
2. **No contact detail is set.** The contact page is not generated and the footer has no contact link until an email or phone is added.
3. **No guide author or reviewer is named.** Guides currently say "By CNVRT X". No person has reviewed them for accuracy.
4. **A2P legal-address question is open** (see below).
5. **The old sales and problem pages are still on get.cnvrtx.com.** They must come off on launch day (see migration actions).
6. **Search Console and analytics are not connected.**

## NEEDS OWNER ACTION

| # | What | Where it goes |
| --- | --- | --- |
| 1 | Move cnvrtx.com to Cloudflare and log in so the site can be deployed | Cloudflare account |
| 2 | A contact email (and phone if you want one) | `contact` in `src/config/offerV9.ts` |
| 3 | The name and role of the person who reviews the guides, and that person reading all six | `author.reviewer` in `site/config/site.ts` |
| 4 | Confirm which legal page addresses were given in the texting (A2P) registration | Reply in chat |
| 5 | Lawyer review of the five legal pages | Then `legalInfo.reviewed` in `src/config/offerV9.ts` |
| 6 | Google Search Console: add cnvrtx.com and give the verification code | `searchConsoleVerification` in `site/config/site.ts` |
| 7 | Analytics: a Google Tag Manager container, if you want tracking | `analytics.gtmContainerId` in `src/config/automotiveOffer.ts` |
| 8 | Allow one test submission of the audit form from the live cnvrtx.com site, or do it yourself | After deploy |
| 9 | Say "launch" | Then `indexing` is switched on in `site/config/site.ts` |

Facts in the guides that a reviewer should confirm before launch:

- The Harvard Business Review finding quoted in the lead response guide (firms that responded within an hour were nearly seven times as likely to qualify a lead). The article and its authors were confirmed; the exact figure was not readable from the article page and is quoted from memory of the original.
- Window tint guide: tint law wording is deliberately general. Check it fits your state.
- No-show guide: deposit and cancellation wording should be checked against state rules and your payment processor.

## GET.CNVRTX.COM MIGRATION ACTIONS

For the offer-pages chat, on launch day:

1. Remove the sales page and the 12 problem pages from get.cnvrtx.com, or permanently redirect each one:

   | Old address on get.cnvrtx.com | New address on cnvrtx.com |
   | --- | --- |
   | `/` | `/` (brand home, as the owner asked) |
   | `/auto/missed-calls` | `/auto/missed-calls` |
   | `/auto/slow-lead-reply` | `/auto/lead-response` |
   | `/auto/ai-receptionist` | `/auto/ai-receptionist` |
   | `/auto/quote-follow-up` | `/auto/quote-follow-up` |
   | `/auto/no-shows` | `/auto/no-shows` |
   | `/auto/reviews` | `/auto/reviews` |
   | `/auto/repeat-customers` | `/auto/repeat-customers` |
   | `/auto/run-sheet` | `/auto/run-sheet` |
   | `/auto/ad-results` | `/auto/ad-tracking` |
   | `/auto/front-office` | `/auto/front-office` |
   | `/auto/ai-employee` | `/auto/ai-employee` |
   | `/auto/talking-website` | `/auto/website-chatbot` |

2. Keep the order summary (`/auto`), the reserve form (`#start`), the checkout pages (`/checkout/monthly`, `/checkout/monthly-kit`, `/checkout/annual`) and `/thank-you?paid=1` on get.cnvrtx.com, all `noindex`. The `/onboarding` page no longer exists; setup happens in Setup Center inside the buyer's account.
3. Update every live ad link to the new cnvrtx.com address.
4. Confirm no sales or problem page can be opened on both hosts.
5. Keep the legal pages on get.cnvrtx.com until the A2P question is answered.

Two shared files were changed for the main site. Neither changes get.cnvrtx.com:

- `src/config/offerV9.ts`: `checkoutPath` gets `https://get.cnvrtx.com` in front of it only in the cnvrtx.com build.
- `src/components/automotive-v9/End9.astro`: a new option, `footer={false}`. cnvrtx.com no longer uses End9 at all (the reserve form stays on get.cnvrtx.com), so this option is now unused and can be removed whenever convenient.

Both are already committed by the offer-pages chat. Not on cnvrtx.com by design: the reserve form, the leaving-offer popup and the waitlist popup. They depend on the checkout pages and on details saved in the visitor's browser for get.cnvrtx.com, which another domain cannot read.

Note: `npm run studio` commits every changed file in this folder, so the next sync will also commit the `site/` folder to the GitHub repository. That is harmless. It does not publish cnvrtx.com.

### Open conflict for the offer-pages chat (found 2026-11-19)

The order summary at `get.cnvrtx.com/auto` sends buyers to `/?plan=...#start`, so the reserve form lives on the get.cnvrtx.com home page, which is the sales page. Migration action 1 removes or redirects that page. If it goes, the reserve form goes with it and nobody can reach checkout. Before launch, the reserve form needs a home on get.cnvrtx.com that survives the migration (for example on `/auto` itself), and the root redirect to cnvrtx.com must not swallow `/?plan=...#start`.

CTA audit of cnvrtx.com (2026-11-19): the only links that leave the site for a purchase are the two Start buttons on `/auto` (`https://get.cnvrtx.com/auto?plan=annual` and `?plan=monthly`). The two plan buttons in the pricing section open the same two addresses. Every other button on all 37 pages stays on cnvrtx.com and leads toward `/auto`. `?rep=` and UTM, gclid and fbclid values picked up on any cnvrtx.com page are added to those two links. Tested: a visit that started on a guide with `?rep=Steve&utm_source=google&utm_medium=organic&utm_campaign=test-seo` reached `/auto` two pages later with all four values on both links. No link to `/checkout/...` or go.cnvrtx.com exists anywhere.

## A2P/LEGAL STATUS

**Open.** It is not known whether the texting registration lists `get.cnvrtx.com/legal/...` addresses.

Until the owner confirms, both copies exist and neither is indexable: the legal pages stay on get.cnvrtx.com exactly as they are, and cnvrtx.com serves the same words at `/legal/...` from the same file. Nothing registered can break. Once confirmed, cnvrtx.com becomes the one canonical legal set.

## LEGAL REVIEW STATUS

**Not reviewed.** All five legal pages (privacy, terms, SMS terms, cancellation, disclaimer) are drafts that no lawyer has checked. `legalInfo.reviewed` is `false`.

Because of that, the legal pages on cnvrtx.com carry `noindex` and are left out of the sitemap, and they will stay that way even after launch until the flag is set. The legal pages have no support email, postal address or governing state filled in yet.

## INDEXING STATUS

**OFF.** `site.indexing` is `false`. Every one of the 37 pages sends `noindex, follow`. Nothing can be indexed, on purpose. It will be switched on only after the owner says so.

## SEARCH CONSOLE STATUS

**Not set up.** No property exists for cnvrtx.com and no verification code is in the site. The site is ready for it: a verification tag slot, a valid `sitemap.xml` at `https://cnvrtx.com/sitemap.xml` and a robots.txt that points to it. Analytics is also not connected (no tag installed).

## FINAL URL COUNT

| Group | Pages | In sitemap at launch |
| --- | --- | --- |
| Brand home | 1 | 1 |
| About | 1 | 1 |
| Auto hub | 1 | 1 |
| How it works | 1 | 1 |
| Guide library | 1 | 1 |
| Problem pages | 12 | 12 |
| Shop-type pages | 8 | 8 |
| Guides | 6 | 6 |
| Legal (drafts, noindex) | 5 | 0 |
| 404 page | 1 | 0 |
| **Total built** | **37** | **31** |
| Contact (appears when a contact detail is set) | +1 | +1 |

---

## Launch-day steps, once everything above is cleared

1. `npm run site:build` and `npm run site:check` (must say "All checks passed.").
2. Deploy to Cloudflare with `npx wrangler deploy`, and connect cnvrtx.com to it.
3. In Cloudflare, redirect `www.cnvrtx.com` and `http://` to `https://cnvrtx.com`.
4. Open the live site on a phone and a desktop. Click a buy button through to checkout.
5. The offer-pages chat completes the migration actions.
6. Owner says "launch". Set `indexing: true`, build, check, deploy again.
7. Submit `https://cnvrtx.com/sitemap.xml` in Search Console.
