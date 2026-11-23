# cnvrtx.com site brief

Decisions the user made on 2026-11-17, passed on by the offer-pages chat. This is the standing brief for the cnvrtx.com SEO site.

## What the user decided

1. **cnvrtx.com is the main brand and marketing site.** It is auto-first: the automotive site lives at `cnvrtx.com/auto`. Later industries get their own folder the same way (`cnvrtx.com/roofing`, `cnvrtx.com/hvac`, and so on). No industry subdomains.
2. **get.cnvrtx.com becomes transaction pages only:** checkout (monthly, annual, any discount offer), onboarding (fill now, or save for later, with the link also emailed), and an industry-specific thank-you page. That part stays with the offer-pages chat and GoHighLevel AI Studio. The SEO chat does not touch it.
3. **cnvrtx.com is built in Astro and hosted on Cloudflare.** The domain is on GoHighLevel today; the user will move it to Cloudflare and connect it there.
4. **SEO is the purpose: maximum organic traffic.** A proper silo / topical-authority structure, schema on every page, full internal linking, and no duplicate content between any two pages or between cnvrtx.com and get.cnvrtx.com.
5. **Topics cover four angles:**
   - the industry (auto shops: detailing, ceramic coating, PPF, tint, wraps, wheels, suspension, aftermarket)
   - the offer (CNVRT X Front Office)
   - the problems solved (missed calls, slow lead reply, quote follow-up, no-shows, reviews, repeat customers, ad tracking, the run sheet, AI receptionist)
   - the systems and workflows delivered
6. **No redirects from the start.** Final addresses are chosen once and then left alone. Where two addresses could show the same thing, use one address and a canonical tag, not a redirect.
7. **Open question:** what sits at the root, `cnvrtx.com/`, so it is not a duplicate of `cnvrtx.com/auto`. Suggestion from the offer-pages chat: a short brand home that is auto-first in its message and leads into `/auto`.

## What already exists to build on

- This folder is an Astro project with the finished design system and sections: `src/components/automotive-v9/` (main page sections), `src/components/automotive-doors/` (problem-page sections), `src/styles/v9.css`, fonts Sora, Manrope and Caveat.
- The auto sales page is `src/pages/index.astro`. The twelve problem pages are `src/pages/auto/[door].astro`, with data in `src/content/automotiveDoors.ts` and `src/content/automotiveDoorPages.ts`.
- Slugs: missed-calls, slow-lead-reply, ai-receptionist, ai-employee, quote-follow-up, no-shows, reviews, front-office, ad-results, repeat-customers, run-sheet, talking-website.
- All copy is in `src/content/automotiveCopyV9.ts`. Prices and settings are in `src/config/offerV9.ts`. Every word of every page is exported in `docs/site-copy.md`.
- A general any-local-business version exists at `src/pages/local.astro` (wording in `src/content/localCopy.ts`). Unpublished, kept as the base for the next industry.
- These pages were written as ad landing pages. They sell. As SEO pages they need more depth.

## Rules for this folder

- About 32 uncommitted files are a review round the user is still checking. Do not edit, revert, stage or commit any existing file until the offer-pages chat has published it. Reading is fine. New files under `docs/` are allowed.
- Never edit `.studio/`, `scripts/studio-sync.mjs`, or the transaction pages (`src/pages/onboarding.astro`, `src/pages/thank-you.astro`). Never force-push either GitHub repo.
- Every page is currently marked noindex on purpose, and the legal pages have not been reviewed by a lawyer. Turning indexing on is the user's decision; ask first.

## Repository

Recommendation from the offer-pages chat: one codebase (shared design, components and prices), one owner per area. The SEO chat owns the cnvrtx.com pages, content, schema and the Cloudflare deploy. The offer-pages chat owns the transaction pages and the AI Studio sync.

## Working style

- Reply only in English, or Roman Urdu if asked. The user dictates by voice (arrives in Hindi script) but cannot read Hindi script. Not technical: plain words, make the technical choices for them.
- No em dashes, no filler wording, no invented statistics, testimonials or results. Realistic claims only.
- Mobile first. Check every page on phone and desktop before calling it done.
- Texts are promised only to people who agreed to them. The AI never quotes prices and never claims to be a person.

## Updates from the offer-pages chat (2026-11-17, after its review round was published)

1. `get.cnvrtx.com/auto` is now the auto checkout page (`src/pages/auto/index.astro`, path set by `checkoutPath` in `src/config/offerV9.ts`). Next industry gets its own, for example `/roofing`. `/auto` on get.cnvrtx.com is never used for marketing.
2. The root of get.cnvrtx.com will send visitors to the brand home at `cnvrtx.com/`, not to `/auto`. So `cnvrtx.com/` must be a real brand page that works for every industry and leads into `/auto`.
3. Buy buttons on cnvrtx.com point to `https://get.cnvrtx.com/auto?plan=annual` and `https://get.cnvrtx.com/auto?plan=monthly`.
4. Launch Kit is $497. A leaving offer brings it to $297 on monthly; say "$200 off", never a percentage.
5. Removed for good: the Every-Lead-Answered guarantee and the seasonal campaigns bonus. Missed calls are "caught every time", with a text back only to callers who agreed to texts. Do not bring the old claims back.
6. No redirects on get.cnvrtx.com test addresses any more, and none on cnvrtx.com.
7. `docs/site-copy.md` is regenerated and current.
8. The folder is clean. Files for cnvrtx.com may be edited once the user approves the proposal. Still off limits: `.studio/`, `scripts/studio-sync.mjs`, `src/pages/auto/index.astro`, `src/pages/onboarding.astro`, `src/pages/thank-you.astro`. Changes to shared components or copy also change get.cnvrtx.com, so tell the user first.

## Final decisions from the owner (2026-11-17, approved)

These replace anything above that disagrees. Full detail is in `docs/cnvrtx-site-proposal.md`.

1. Problem page addresses on cnvrtx.com: `missed-calls`, `lead-response` (was `slow-lead-reply`), `ai-receptionist`, `quote-follow-up`, `no-shows`, `reviews`, `repeat-customers`, `run-sheet`, `ad-tracking` (was `ad-results`), `front-office`, `ai-employee`, `website-chatbot` (was `talking-website`).
2. Eight shop-type pages, with mobile detailing as its own page.
3. Guides are service-specific and problem-specific, not general. No page matrix. First batch is six deep guides.
4. Problem pages do not repeat the pricing table, nine systems, demo, full FAQ or sign-up steps. They carry a compact offer summary and link to `/auto`.
5. Clean grouped footer. Simple, accurate schema. No FAQ schema as a tactic.
6. Host variants (`http`, `www`) redirect to `https://cnvrtx.com`. Page addresses never change after launch.
7. Launch the commercial site plus the first guides once the launch gate passes. Indexing stays off until then.
8. The main site lives in its own source folder, `site/`, and builds with `astro.site.config.mjs`. `src/` stays the offer-pages chat's area.

## Final architecture (from the offer-pages chat, 2026-11-18)

1. cnvrtx.com is the main site (this repo, `site/`, Cloudflare). get.cnvrtx.com holds the transaction pages and the checkout, built in GHL AI Studio. The domain go.cnvrtx.com is not used. Never reference it.
2. Buy buttons on cnvrtx.com point to `https://get.cnvrtx.com/auto?plan=annual` and `?plan=monthly`, through `checkoutPath`. That page is an order summary; its button leads to the reserve form, which sends the details to GHL and then opens checkout. Never link straight to `/checkout/...` from cnvrtx.com: every purchase must pass the reserve form, because that starts abandoned-checkout recovery.
3. The four forms (reserve, onboarding, audit, waitlist) POST to GHL inbound webhooks. Addresses: `endpoints` in `src/config/automotiveOffer.ts`. Field names: `src/scripts/forms.ts`. Where cnvrtx.com shows one of these forms, use the shared component unchanged. The honeypot field is `company_website`.
4. Rules for both chats: test mode only, no live charges, no change to any GHL workflow, product, price or custom value, and no test data POSTed to the live webhooks without asking the owner.

## Status

Plan approved and built (2026-11-17). Not deployed. Indexing is off. See `docs/cnvrtx-launch-report.md` for what is ready, what is blocked and what the owner must do.
