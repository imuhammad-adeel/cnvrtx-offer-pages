# cnvrtx.com: final site plan

Status: **approved by the owner on 2026-11-17** (version 2). Build complete on 2026-11-17, not deployed. Indexing is off until the owner approves the launch. Current status: `docs/cnvrtx-launch-report.md`.

Sources: `docs/cnvrtx-site-brief.md`, the owner's final instruction set of 2026-11-17, and the current copy in `docs/site-copy.md` and `src/config/offerV9.ts`.

The goal is not "an SEO website". It is a site where a shop owner finds an answer, understands the workflow behind it, sees the mechanism, reviews the full offer and buys without a sales call.

---

## 1. Previous proposal (version 1), in short

- Brand home at `/`, full auto sales page at `/auto`.
- The 12 problem pages kept their old addresses (`slow-lead-reply`, `ad-results`, `talking-website`).
- 7 shop-type pages. Mobile detailing sat inside detailing shops.
- 18 general guides (for example one "quote follow-up templates" guide for every trade).
- A full link list in the footer of every page.
- FAQ schema on every commercial page.
- Launch after all planned content was written.

## 2. What changed, and why

| # | Change | Why |
| --- | --- | --- |
| 1 | `/auto/slow-lead-reply` becomes `/auto/lead-response` | Clearer, broader and more professional. Names the topic, not the symptom. |
| 2 | `/auto/ad-results` becomes `/auto/ad-tracking` | The page is about tracking ads to paid jobs, not vague "results". |
| 3 | `/auto/talking-website` becomes `/auto/website-chatbot` | People search the category. "Talking website" stays as a phrase in the copy. |
| 4 | Mobile detailing gets its own page (8 shop types, not 7) | The work happens at the customer's location: travel, routes, no front desk. A different workflow. |
| 5 | Guides are service-specific, not general | A ceramic coating quote, a PPF quote and a tint quote have different prices, decision times and objections. One general guide cannot be the best answer for any of them. |
| 6 | First batch is 6 deep guides, not 18 general ones | Quality over volume. More guides follow real Search Console data. |
| 7 | No page matrix | A page is only written if it passes the five tests in section 7. |
| 8 | Problem pages no longer repeat the pricing table, nine systems, demo, full FAQ or sign-up steps | That repeated block made most of every page a copy of the others. Each problem page now carries a compact offer summary and links to `/auto`. |
| 9 | Clean grouped footer instead of 30 to 40 links | The hubs (`/auto`, `/auto/guides`) hold the full directory. |
| 10 | Simpler schema. No FAQ schema as a tactic | Only labels that describe what is visibly on the page. |
| 11 | Guides follow a "help first" funnel | The guide solves the question, then shows the workflow, then the mechanism, then the offer. |
| 12 | Launch does not wait for the whole guide library | Commercial pages plus the first guides go live once the launch gate passes. |
| 13 | Launch gate, launch report and a migration checklist for get.cnvrtx.com added | So nothing goes live half-checked and no content exists twice. |
| 14 | Trust rules for guides | Real author or reviewer, updated date, sources for facts, no invented experts. |

Improvements added on top of the instruction set:

- **A separate source folder for the main site** (`site/`), built with its own config. The sales and transaction pages in `src/` are not touched, so `npm run studio` and get.cnvrtx.com cannot be affected by main-site work.
- **One indexing switch.** Every main-site page is `noindex` until one setting is flipped at launch. No page can be indexed by accident.
- **Legal pages are published on both hosts for now**, and neither copy is indexable while the lawyer review is open. This keeps any A2P-registered address alive without guessing (section 12).
- **Contact page is only generated when a real contact detail exists** in config, so no empty page is ever published.
- **Each problem page keeps its own calculator and its own animated example**, because those are already unique per page. Only the truly repeated blocks were removed.

---

## 3. Domain roles

| Host | Job | In Google |
| --- | --- | --- |
| `https://cnvrtx.com` | All brand, commercial, educational and SEO pages | Indexable after launch |
| `https://get.cnvrtx.com` | Checkout, onboarding, thank-you, plan and campaign transaction steps | Never indexed |

Buy buttons on cnvrtx.com go to `https://get.cnvrtx.com/auto?plan=annual` and `https://get.cnvrtx.com/auto?plan=monthly`.

---

## 4. Final address map

Rules: lowercase, hyphens, no dates, no IDs, no trailing slash, one host (`https://cnvrtx.com`), a self-referencing canonical on every page. `http` and `www` versions redirect to the one host. That is normal host hygiene and does not change any page address.

### Brand level

| Address | Page |
| --- | --- |
| `/` | Brand home: Done-for-you front office systems for service businesses, starting with automotive |
| `/about` | Company, method, what we promise and what we do not |
| `/contact` | Contact (generated only when real contact details are set) |
| `/legal/privacy`, `/legal/terms`, `/legal/sms-terms`, `/legal/cancellation`, `/legal/disclaimer` | Legal |

### Automotive

| Address | Page | Owns |
| --- | --- | --- |
| `/auto` | Automotive Front Office hub and main sales page | The whole offer: calculator, three roles, nine systems, pricing, main FAQ, path to checkout |
| `/auto/how-it-works` | How it is built and delivered | What you provide, what we build, access, A2P approval, testing, launch, automation vs AI vs human |
| `/auto/guides` | Guide library | Guides grouped by stage of the customer journey |

### Problem pages (12)

| Address | One problem, one mechanism | System |
| --- | --- | --- |
| `/auto/missed-calls` | Calls nobody can pick up | Missed-Call Rescue |
| `/auto/lead-response` | New web and ad leads that wait hours | 60-Second Lead Response |
| `/auto/ai-receptionist` | After-hours and hands-full inquiries | 24/7 AI Front Desk |
| `/auto/quote-follow-up` | Quotes that go quiet | Follow-Up Until They Book |
| `/auto/no-shows` | Booked bays that stay empty | No-Show Shield |
| `/auto/reviews` | Happy customers never asked | 5-Star Review Machine |
| `/auto/repeat-customers` | One-time customers | Repeat & Referral Engine |
| `/auto/run-sheet` | The schedule typed by hand every night | Owner Command Center |
| `/auto/ad-tracking` | Ad spend with no link to paid jobs | Ad Results Tracker |
| `/auto/front-office` | Hire, outsource or install: the cost decision | Whole plan, as a cost decision |
| `/auto/ai-employee` | What AI can take off your plate and what it cannot | Whole plan, as a task list |
| `/auto/website-chatbot` | A website that cannot answer a question | Talking website add-on |

### Old to new address mapping

| Old (get.cnvrtx.com, never indexed) | New (cnvrtx.com) |
| --- | --- |
| `/` | `/auto` |
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

The three old slugs were never public on cnvrtx.com, so no redirect is needed there. If any old address ever becomes public, it gets a permanent redirect to the new one. Two live copies are never allowed.

### Shop-type pages (8)

`/auto/detailing-shops`, `/auto/mobile-detailing`, `/auto/ceramic-coating-shops`, `/auto/ppf-shops`, `/auto/window-tint-shops`, `/auto/vinyl-wrap-shops`, `/auto/wheel-and-tire-shops`, `/auto/performance-shops`

Performance shops covers performance work, suspension, tuning, aftermarket parts and custom installs. No separate aftermarket page until research shows a separate search intent.

### Guides

Pattern: `/auto/guides/<service>-<problem>`. Flat folder, so a guide never has to move. First batch in section 8.

---

## 5. Page taxonomy: what each page type is for

| Type | Answers | Contains | Never contains |
| --- | --- | --- | --- |
| Brand home | "Who is CNVRT X?" | What a front office system is, the mission, automotive as first edition, trust, route into `/auto` | Calculator, pricing table, nine-system breakdown, auto FAQ |
| Auto hub | "What is the whole offer and what does it cost?" | Everything commercial, links to every problem and shop type, flagship guides | Deep detail on one problem |
| Problem page | "How do I fix this one problem?" | Plain answer, the problem, why it happens, the cost, customer and owner view, step-by-step mechanism with verified timing, where automation stops, human handoff, compliance limits, what it does not do, examples, own FAQs, related guides, related shop types, previous and next stage, compact offer | Full pricing table, full nine systems, full demo, full FAQ, sign-up steps |
| Shop-type page | "Is this built for a business like mine?" | That trade's services, job types, inquiry sources, quoting style, booking habits, deposits, objections, after-hours behavior, follow-up and retention needs | How a mechanism works in detail |
| Guide | One practical question | A working document: decision tree, timeline, templates, checklist, mistakes, stop conditions, consent notes | A sales pitch near the top |
| How it works | "What happens after I buy?" | Deployment sequence and responsibilities | Pricing detail |

Compact offer summary used on problem and shop-type pages: CNVRT X Front Office, $197/mo, three roles, nine connected systems, "See the complete system" to `/auto`. The price comes from config, never typed by hand.

---

## 6. Content-cluster strategy

Content is organised three ways at once: by industry, by service and by problem. The guide sits where the three meet.

- Industry: automotive (`/auto`)
- Service: detailing, mobile detailing, ceramic coating, PPF, window tint, vinyl wrap, wheels and tires, performance
- Problem: the customer journey, inquiry > response > quote > follow-up > booking > confirmation > completed job > review > repeat

A guide is service-specific by default (`ceramic-coating-quote-follow-up`, not `quote-follow-up-templates`), because each job differs in price range, buying cycle, objections, vehicle information needed, inspection needs, deposits, decision time, urgency, follow-up cadence and appointment length.

Facts are never invented. Where a number or workflow is not verified it is either researched and sourced, or labelled as an example the shop should set for itself.

## 7. Tests a new guide must pass

1. A distinct search or user intent.
2. Enough unique information to beat a general article.
3. A workflow, example, checklist, template, comparison or decision framework that is actually usable.
4. A logical place in the linking structure.
5. A real connection to something CNVRT X does.

If a page would mostly repeat another with the nouns swapped, it is not published. We never multiply industries by services by problems to generate pages.

### Guide quality standard

A guide reads like a working operating document. For a quote follow-up guide that means: the direct answer, a decision tree, an example timeline (Day 0, Day 2 and onward), the point where a phone call beats a message, replies to "too expensive", "I need to think about it" and "I am comparing shops", what to ask before quoting, when to stop, reply and booking stop conditions, opt-out handling, consent, what not to automate, message templates, a checklist, a workflow visual, mistakes to avoid, related guides and the related solution.

### The self-closing funnel inside each guide

| Place | What the reader gets |
| --- | --- |
| Top | The answer. No hard sell. |
| After the first useful section | One contextual link to the matching problem page |
| Deeper | "You can run this by hand. CNVRT X Front Office automates the same sequence, stops when the customer replies or books, and hands the conversation back to you when judgment is needed." |
| Bottom | "Want this running automatically in your shop?" to the problem page or `/auto` |

Problem page leads to `/auto`. `/auto` leads to checkout on get.cnvrtx.com. No sales call anywhere.

A free automated Booking Leak Audit can be added later as a second path for visitors not ready to buy. It is not a launch dependency.

### Trust rules

Guides show an accurate author or reviewer, a last-updated date, sources where a fact needs support, and first-hand examples. No invented experts. Every guide is reviewed by a person for accuracy before indexing is switched on.

### Research workflow per cluster

Real question > how operators phrase it > review current search results > decide if it deserves a page > find what current results fail to explain > write the page that adds it > connect to the right solution > publish > watch Search Console > expand from real data. No keyword is called "low competition" without research that shows it.

---

## 8. Exact first content batch

Quote recovery cluster:

1. `/auto/guides/ceramic-coating-quote-follow-up`
2. `/auto/guides/ppf-quote-follow-up`
3. `/auto/guides/window-tint-quote-follow-up`
4. `/auto/guides/detailing-estimate-follow-up`

Lead response and booking cluster:

5. `/auto/guides/auto-detailing-lead-response-time`
6. `/auto/guides/detailing-no-show-policy-and-reminders`

Next, in this order unless Search Console says otherwise: vinyl wrap quote follow-up, auto detailing lead reply templates, appointment reminder strategy for detail shops, ceramic coating maintenance reminders, Google review requests for detailers.

---

## 9. Future-vertical strategy

The address shape repeats: `/roofing`, `/roofing/quote-follow-up`, `/roofing/guides/storm-damage-estimate-follow-up`. The content does not repeat. Each vertical is written in that trade's own words (roofers say "estimate") and around its own buying workflow. A word-replacement copy of the auto pages is never published.

The brand home is written to serve every vertical, with automotive shown as the first edition.

---

## 10. Internal-linking rules

All links are plain crawlable `<a href>` links with natural, varied wording.

| From | Links to |
| --- | --- |
| Guide | One primary problem page, a shop-type page where useful, 1 or 2 close guides, `/auto` where commercial context fits |
| Problem page | `/auto`, its 2 or 3 best guides, the shop types most affected, the previous and next stage of the journey |
| Shop-type page | `/auto`, the 4 to 6 most relevant problems, service-specific guides, how-it-works where useful |
| Auto hub | Every problem page, every shop-type page, flagship guides, how-it-works |
| Brand home | `/auto`, about, guides |

Journey order used for previous and next: missed calls > lead response > AI receptionist > quote follow-up > no-shows > reviews > repeat customers.

Footer: one clean block with grouped links (Automotive, Solutions, Shop Types, Guides, How It Works, About, Contact, Legal). The full directory lives on the hubs.

Breadcrumbs on every page below the home.

---

## 11. Schema rules

| Page | Schema |
| --- | --- |
| Brand home | Organization, WebSite |
| About | AboutPage, same Organization entity |
| Contact | ContactPage |
| Auto hub | WebPage, BreadcrumbList, Service (the visible service and its real prices) |
| Problem pages | WebPage, BreadcrumbList |
| Shop-type pages | WebPage, BreadcrumbList |
| Guides | Article with author, datePublished, dateModified, plus BreadcrumbList |
| Guide index | CollectionPage, ItemList, BreadcrumbList |
| Legal | none beyond the page itself |

No reviews, ratings, results, awards or organisation facts that are not real. FAQs are shown for readers, not marked up as a ranking tactic. There is no special schema for AI answers.

---

## 12. Dependencies

### get.cnvrtx.com migration (owner: the offer-pages chat)

On launch day of cnvrtx.com:

1. Remove the old sales page and the 12 problem pages from get.cnvrtx.com, or permanently redirect each to its new address from the mapping in section 4.
2. Keep checkout (`/auto`), onboarding and thank-you.
3. Keep those transaction pages `noindex`.
4. Point the root of get.cnvrtx.com at `https://cnvrtx.com/`.
5. Update every live ad link to the new cnvrtx.com address.
6. Confirm no sales or problem page is reachable on both hosts.

### Legal and A2P

Not yet known: whether the texting (A2P) registration names `get.cnvrtx.com/legal/...` addresses. Until the owner confirms:

- The legal pages stay reachable on get.cnvrtx.com exactly as they are.
- cnvrtx.com also serves them at `/legal/...`, so main-site links work.
- Both copies stay `noindex` while the lawyer review flag (`legalInfo.reviewed`) is off, so there is no duplicate in Google.
- When the owner confirms nothing external depends on the get addresses, cnvrtx.com becomes the one canonical legal set and checkout links to it.

---

## 13. Launch order and launch gate

Build order: 1 technical foundation, layouts and metadata; 2 brand home and auto hub; 3 problem pages; 4 shop-type pages; 5 how-it-works, about, contact, guides index; 6 first guides; 7 SEO and phone/desktop checks; 8 deployment prep and launch report.

Day-1 set: brand home, `/auto`, 12 problem pages, 8 shop-type pages, how-it-works, guides index, about, contact, legal, first guides.

Indexing is switched on only when all of these pass:

- cnvrtx.com serves from Cloudflare over HTTPS on the one host; `http` and `www` handled
- canonical tags correct; no accidental noindex on public pages
- sitemap and robots.txt valid; sitemap holds only canonical indexable pages
- no sales or problem copies left on get.cnvrtx.com; transaction pages excluded from search
- all navigation, contextual links and buttons work; no orphan commercial pages
- checkout links and forms work
- phone and desktop tested
- schema validates
- legal links work; A2P dependency resolved
- no invented proof, placeholder copy or private client information
- Search Console and analytics ready

The launch report lists: READY, BLOCKED, NEEDS OWNER ACTION, GET.CNVRTX.COM MIGRATION ACTIONS, A2P/LEGAL STATUS, INDEXING STATUS, SEARCH CONSOLE STATUS, FINAL URL COUNT.

---

## 14. Plan checked against the current copy

Checked against `src/config/offerV9.ts` and `docs/site-copy.md`. Nothing in the plan changes a price, an inclusion, a claim or compliance wording. Points to note:

| Point | Current approved value | How the plan treats it |
| --- | --- | --- |
| Price | $197 a month, or $1,970 a year | Read from config on every page |
| Launch Kit | $497 one-time on monthly, waived on annual. Leaving offer: $200 off | Read from config. Version 1 notes that said $297 were out of date |
| Guarantee | Live in 14 days or the first month is free. Bookings and revenue are not guaranteed | Used as is. The removed Every-Lead-Answered guarantee and seasonal campaigns bonus are not used anywhere |
| Missed calls | "Caught every time"; text back only to callers who agreed to texts, after carrier approval | Same wording in all new content |
| AI limits | Never quotes prices, says it is an AI if asked, hands complex matters to the owner | Same wording in all new content |
| Texting hours | 8 AM to 8 PM; email at any hour | Read from config |
| Lead reply time | No measured figure yet (`measured.leadReplySeconds` is empty) | New content says "within a minute during texting hours", as the approved copy does, and gives no measured number |
| Redirects | Earlier owner rule: "no redirects". New instruction: redirect `http` and `www`, and redirect a moved page | Not a conflict: no page address changes after launch. Only the host variants redirect |
| Proof | No approved case study, no founder details, voice demo not connected | No proof is invented. About page describes method and promises only. Demo shows the labelled example conversation |
| Contact | No contact email, phone or address set | Contact page is not generated until one is set. Listed under owner actions |
| Legal | Drafts, not lawyer reviewed | Kept `noindex` with the draft notice |
