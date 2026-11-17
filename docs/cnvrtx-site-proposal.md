# cnvrtx.com: site structure proposal

Status: waiting for approval. Nothing is built, moved or published.
Written 2026-11-17, from the brief in `docs/cnvrtx-site-brief.md` and the page copy in `docs/site-copy.md`.

Assumptions I made (say if any is wrong):

- Target market is the United States, in English. The phone number, texting rules and prices on the pages are all US.
- No keyword data exists yet. Every "search intent" below is the plain question a shop owner types, not a measured number. Once Google Search Console has data, we tune titles and add guides. Addresses do not change.

---

## 1. The short version

- `cnvrtx.com/` is a short brand home. It says who CNVRT X is and sends auto shops to `/auto`.
- `cnvrtx.com/auto` is the full auto-shop page (today's sales page). It is the top of the auto section.
- Under `/auto` there are three kinds of pages, each with one job:
  1. **Problem pages** (12, already written): one problem, one fix.
  2. **Shop-type pages** (7, new): one page per kind of shop.
  3. **Guides** (new, grows over time): helpful how-to articles that answer one question each and point up to a problem page.
- Every buy button goes to checkout on `get.cnvrtx.com`. No sales content stays on `get.cnvrtx.com`, so nothing is duplicated.

---

## 2. Address rules (chosen once, never changed)

1. Lowercase words, hyphens between words, no dates, no numbers, no file endings.
2. No slash at the end: `cnvrtx.com/auto/missed-calls`.
3. `https://cnvrtx.com` only. No `www` version as a second copy.
4. Every page carries a canonical tag that names its own one true address.
5. Addresses describe the topic, not the product name. "Missed-Call Rescue" could be renamed one day. `missed-calls` never needs to change.
6. Guides sit in one flat folder (`/auto/guides/...`), not inside a problem folder. That way a guide can be linked from a different parent later and its address stays the same.
7. A page that is not ready is simply not published. No placeholder pages, no "coming soon" addresses.

---

## 3. The full address map

### Brand level

| Address | Page | What it is for |
| --- | --- | --- |
| `/` | Brand home | People searching "CNVRT X". Short: what we do, who it is for, link into `/auto`. |
| `/about` | About | Who is behind CNVRT X, how we work, what we promise and what we do not. |
| `/contact` | Contact | One way to reach us. |
| `/legal/privacy`, `/legal/terms`, `/legal/sms-terms`, `/legal/cancellation`, `/legal/disclaimer` | Legal | One copy only. See open question 3. |

### Auto section

| Address | Page | Search intent it owns |
| --- | --- | --- |
| `/auto` | Auto hub (full sales page) | "front office / lead follow-up system for auto shops", "done-for-you CRM setup for detailing shop" |
| `/auto/how-it-works` | How it is built and delivered | "what do I get, how long, what do I have to do": the 14-day build, the form, the access checklist, texting approval |
| `/auto/guides` | Guide index | A list page. Lets visitors and Google reach every guide. |

### Problem pages (already written, addresses kept as they are)

| Address | Owns this intent | System it explains |
| --- | --- | --- |
| `/auto/missed-calls` | missed-call text back for auto shops; what to do about calls you cannot pick up | Missed-Call Rescue |
| `/auto/slow-lead-reply` | replying fast to website, Facebook and Instagram leads | 60-Second Lead Response |
| `/auto/ai-receptionist` | AI receptionist that answers calls, chat and DMs after hours | 24/7 AI Front Desk |
| `/auto/quote-follow-up` | following up on quotes and estimates that went quiet | Follow-Up Until They Book |
| `/auto/no-shows` | appointment confirmations and reminders, fewer empty bays | No-Show Shield |
| `/auto/reviews` | getting more Google reviews from finished jobs | 5-Star Review Machine |
| `/auto/repeat-customers` | bringing past customers back, maintenance reminders, referrals | Repeat & Referral Engine |
| `/auto/run-sheet` | daily schedule, job cards and owner brief without typing | Owner Command Center |
| `/auto/ad-results` | seeing which Facebook and Instagram ads became paid jobs | Ad Results Tracker |
| `/auto/front-office` | hiring a receptionist vs a virtual assistant vs a system: the cost comparison | The whole plan, as a cost decision |
| `/auto/ai-employee` | what an "AI employee" can and cannot do in a shop | The whole plan, as a list of tasks |
| `/auto/talking-website` | a shop website with chat and voice that books visits | Website add-on |

All nine systems already have a home in the first nine rows. That is why I am **not** proposing separate "system" pages: a page for "Missed-Call Rescue" and a page for "missed calls" would fight each other. The problem page is the system page.

### Shop-type pages (new)

Each one answers "is this built for my kind of shop?" with that trade's real jobs, quote sizes, booking habits and customer questions.

| Address | Owns this intent |
| --- | --- |
| `/auto/detailing-shops` | lead and booking system for detailing shops, fixed or mobile |
| `/auto/ceramic-coating-shops` | follow-up for high-ticket coating quotes, maintenance reminders |
| `/auto/ppf-shops` | long quote cycles, deposits and multi-day bookings for paint protection film |
| `/auto/window-tint-shops` | fast, price-led inquiries and same-week booking |
| `/auto/vinyl-wrap-shops` | design-led quotes that need several touches |
| `/auto/wheel-and-tire-shops` | fitment questions, parts-on-order follow-up |
| `/auto/performance-shops` | suspension, tuning and aftermarket installs |

The ending `-shops` is on purpose. It tells Google the page is for shop owners, so we do not compete with car owners searching "ceramic coating".

### Guides (new, added in batches)

Address pattern: `/auto/guides/<topic>`. Each guide answers one question properly, gives something usable (a template, a checklist, a schedule), and links up to its problem page. First batch I would write, two per problem:

| Guide address | Points up to |
| --- | --- |
| `/auto/guides/missed-call-text-back-templates` | missed-calls |
| `/auto/guides/voicemail-vs-text-back` | missed-calls |
| `/auto/guides/how-fast-to-reply-to-a-new-lead` | slow-lead-reply |
| `/auto/guides/instagram-and-facebook-lead-reply-templates` | slow-lead-reply |
| `/auto/guides/quote-follow-up-templates` | quote-follow-up |
| `/auto/guides/when-a-customer-says-the-quote-is-too-high` | quote-follow-up |
| `/auto/guides/appointment-reminder-text-templates` | no-shows |
| `/auto/guides/deposit-policy-for-auto-shops` | no-shows |
| `/auto/guides/how-to-ask-for-google-reviews` | reviews |
| `/auto/guides/replying-to-a-bad-review` | reviews |
| `/auto/guides/maintenance-reminder-schedule` | repeat-customers |
| `/auto/guides/win-back-message-templates` | repeat-customers |
| `/auto/guides/daily-run-sheet-template` | run-sheet |
| `/auto/guides/job-card-template` | run-sheet |
| `/auto/guides/tracking-ad-leads-to-paid-jobs` | ad-results |
| `/auto/guides/ai-receptionist-vs-answering-service` | ai-receptionist |
| `/auto/guides/receptionist-vs-virtual-assistant-vs-automation` | front-office |
| `/auto/guides/business-texting-rules-for-auto-shops` | missed-calls, no-shows (texting consent and carrier registration, in plain words) |

### Future industries

Same shape, new folder: `/roofing`, `/roofing/missed-calls`, `/roofing/guides/...`. Problem pages are rewritten for that trade, not copied, so `/auto/missed-calls` and `/roofing/missed-calls` are different pages.

---

## 4. What sits at the root

I agree with the offer-pages chat: a short brand home, auto-first.

- Headline about the company, not the auto offer: a done-for-you front office for local service businesses, starting with auto shops.
- Three short blocks: what we install, who it is for (auto shops now), how to start. One big button into `/auto`.
- It does **not** repeat the leaks, the calculator, the nine systems, the pricing table or the FAQ. Those live only on `/auto`.
- Its search job is the brand name. `/auto` keeps every auto search. So the two never compete.

---

## 5. How no two pages compete

One rule per page type:

- **Hub (`/auto`)**: the whole offer. Mentions each problem in two lines and links out. Never goes deep on one.
- **Problem page**: one problem, why it happens, how the fix runs step by step. Does not teach templates.
- **Shop-type page**: one trade. Shows how all the problems look in that trade, in short, and links to the problem pages. Does not explain how a fix works.
- **Guide**: one question, a usable answer. Does not sell. One link up to the problem page, one line about the plan at the end.

The three closest pages need a firm line between them:

| Page | Stays on | Stays off |
| --- | --- | --- |
| `/auto/ai-receptionist` | answering calls, chat and DMs, after hours | cost comparison, the other eight systems |
| `/auto/ai-employee` | the list of tasks an AI can take, and the ones it must hand to you | phone answering detail |
| `/auto/front-office` | the money decision: hire, outsource or install a system | AI detail |

Also: `/auto/missed-calls` is about the text back and job card when nobody answers. `/auto/ai-receptionist` is about something answering. Each links to the other and says so.

---

## 6. Internal linking plan

1. **Breadcrumb on every page**: Home > Auto > Missed calls. Guides: Home > Auto > Guides > Title.
2. **Hub links down** to all 12 problem pages and all 7 shop-type pages, in the page body and the menu.
3. **Every problem page links**: up to `/auto`, to its 2 or 3 guides, to the 2 problems that come just before and after it in a customer's journey (missed call > slow reply > quote follow-up > no-show > review > repeat), and to the shop types where it matters most.
4. **Every shop-type page links**: up to `/auto`, to the 4 or 5 problems that hurt that trade most, and to matching guides.
5. **Every guide links**: up to its one parent problem page (near the top, in a sentence), to 1 or 2 related guides, and to `/auto` once at the end.
6. **Link words are descriptive and varied**: "missed-call text back for shops", not "click here" and not the same phrase every time.
7. **No orphan pages**: every page is linked from at least two other pages and is in the sitemap.
8. **Footer**: hub, the 12 problems, the shop types, guides index, about, contact, legal. The same on every page.
9. **Buy buttons** go to `get.cnvrtx.com` checkout. Those pages stay hidden from Google, which is correct for checkout pages.

---

## 7. Schema (the labels Google reads) per page type

| Page type | Schema |
| --- | --- |
| Brand home | Organization, WebSite |
| About / Contact | AboutPage / ContactPage, Organization |
| Auto hub | Service (with the real monthly and yearly price), FAQPage, BreadcrumbList |
| Problem page | Service, FAQPage (that page's own questions only), BreadcrumbList |
| Shop-type page | Service with the audience named, FAQPage, BreadcrumbList |
| How it works | WebPage, BreadcrumbList |
| Guide | Article (author, published and updated dates), BreadcrumbList |
| Guide index | CollectionPage, ItemList, BreadcrumbList |
| Legal | WebPage only |

Two honest notes:

- No review or star-rating schema. There are no real customer reviews yet, and inventing them breaks Google's rules and yours.
- Google now shows FAQ dropdowns in results for very few sites. The FAQ label still helps Google understand the page, so it stays, but do not expect the dropdowns.

---

## 8. What each existing page needs added

The pages were written for ads: short, punchy, same blocks on every page. For search they need more that is unique to each page.

### All 12 problem pages

- **A plain two-sentence answer near the top**: what the problem is and what fixes it, in the words people search. The punchy headline stays.
- **"Why this happens" section**: the real reasons in a shop (hands full, one person, after hours). Short.
- **"How it runs, step by step"**: the actual sequence with timings, what the customer sees, what lands on the owner's phone.
- **"What it does not do"**: limits stated plainly (texts only to people who agreed, AI never quotes prices, no guaranteed bookings). This builds trust and is unique text.
- **Its own 4 to 6 questions**: specific to that problem. The general questions stay only on `/auto`.
- **Links** as in section 6.
- **A search-shaped page title**, for example "Missed-Call Text Back for Auto Shops". Some pages already have this.

### The repeated blocks problem

Today the pricing table, the nine-systems list, the demo chat, the sign-up steps and the footer text are word-for-word the same on all 13 pages. On an ad page that is fine. On a search site it means most of each page is a copy of the others.

Fix: on problem pages, shrink those blocks to a short summary (price, three roles, one button) that links to the full version on `/auto`. The full pricing table, full FAQ and full demo live on `/auto` only.

### `/auto` (the hub)

- A short plain intro saying what CNVRT X Front Office is and who it is for.
- A visible "pick your shop type" row linking to the 7 shop-type pages.
- The "what it fixes" menu also shown in the page body, not only in the dropdown.
- Otherwise it is already strong. It keeps the calculator, the systems, pricing and FAQ.

### Per page, the main gap

| Page | Main thing to add |
| --- | --- |
| missed-calls | What happens for callers who did not agree to texts; call-forwarding setup in plain words |
| slow-lead-reply | Each lead source (website form, Facebook, Instagram) and what the first reply says |
| ai-receptionist | What it answers, what it hands over, what it says when asked if it is a person |
| quote-follow-up | The follow-up schedule: how many touches, over how long, when it stops |
| no-shows | The reminder timeline, the YES / MOVE replies, what happens after a no-show |
| reviews | When the request goes out, the two reminders, Google's rules on asking |
| repeat-customers | Maintenance timing by service (coating, tint, detail), referral ask wording |
| run-sheet | A full example of the morning brief, a job card and the evening run sheet |
| ad-results | What is tracked from click to paid job, and what it cannot see |
| front-office | The cost table with sources, already partly there; add what a human still does better |
| ai-employee | A clear task list: does, does not, hands to you |
| talking-website | What pages the website includes, who owns it, the one-time price |

---

## 9. One codebase or two

I agree with one codebase. The design, the sections and the prices are shared, and two copies would drift. One switch in the build decides which pages go to `cnvrtx.com` (Cloudflare) and which go to `get.cnvrtx.com` (AI Studio). I own the first set, the offer-pages chat owns the second.

One thing must happen on the other side at launch: the sales page and the 12 problem pages come **off** `get.cnvrtx.com` the same day they go live on `cnvrtx.com`. Until then they stay hidden from Google as they are now. Ads then point at the `cnvrtx.com/auto/...` addresses.

---

## 10. Order of work, once approved

1. **Launch set (about 22 pages)**: brand home, `/auto`, the 12 problem pages with the added content, how-it-works, about, contact, legal.
2. **Shop-type pages (7)**.
3. **Guides**, in batches of 4 to 6, starting with the first batch above.
4. After launch: Google Search Console, sitemap submitted, and guides chosen from real search data.

Every page is checked on phone and desktop before it is called done. Indexing is switched on only when you say so.

---

## 11. What I need from you

1. **Is the address map approved?** These addresses will be permanent.
2. **Is the shop-type list right?** Seven now. Should mobile detailing get its own page, or stay inside detailing shops?
3. **Legal pages**: I recommend one copy on `cnvrtx.com/legal/...`, with checkout on `get.cnvrtx.com` linking to it. One check first: if your texting (A2P) registration already lists the `get.cnvrtx.com` legal addresses, those must stay where they are and the main site links to them instead.
4. **United States, English only**: correct?
