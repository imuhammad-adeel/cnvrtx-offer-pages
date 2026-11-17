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

## Status

Structure proposal is in `docs/cnvrtx-site-proposal.md`. Nothing is built, moved or deployed until the user approves the structure.
