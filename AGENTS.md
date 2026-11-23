# How this project works

This Astro project is the only place where the CNVRT X offer pages are edited.

- Edit pages, copy and styles here (`src/`).
- Run `npm run studio` to publish the change to the GoHighLevel AI Studio project.
  It builds the site, copies the finished pages into the AI Studio repository
  (`convert-x`, kept locally in `.studio/`), commits and pushes. AI Studio then pulls
  the commit and builds a new preview.
- Never edit `.studio/` by hand. It is overwritten by the next sync.
- Never force-push to either repository. AI Studio loses its project history if you do.

## Where things are

| Path | What it is |
| --- | --- |
| `src/pages/` | One file per route. `[door].astro` and `[doc].astro` are dynamic routes. |
| `src/components/automotive-v9/` | Sections of the main page. |
| `src/components/automotive-doors/` | Sections used by the twelve problem pages. |
| `src/content/` | All copy, as TypeScript objects. |
| `src/config/` | Prices, links, legal details and feature flags. |
| `src/styles/` | Global CSS. |
| `scripts/studio-sync.mjs` | The sync to AI Studio. |

## The main site, cnvrtx.com

This project also builds the main marketing and SEO site, `https://cnvrtx.com`. It is a
separate build with its own pages, so work on one site cannot change the other by accident.

| Path | What it is |
| --- | --- |
| `site/pages/` | One file per route of cnvrtx.com. |
| `site/content/` | Its copy: problem pages, shop-type pages, guides and the page directory. |
| `site/config/site.ts` | Its settings, including the one indexing switch. |
| `astro.site.config.mjs` | Its build settings. `wrangler.jsonc` is its Cloudflare deploy. |
| `docs/cnvrtx-site-proposal.md` | The approved plan and final addresses. |
| `docs/cnvrtx-launch-report.md` | Launch status, owner actions and the migration checklist. |

- `npm run site:build` builds it into `dist-site/`. `npm run site:check` checks it. `npm run site:preview` shows it on localhost:4330.
- It reuses the sections, styles, copy and prices in `src/`. A change in `src/` shows on both sites. Say so before making one.
- Prices, allowances and legal wording are read from `src/config/offerV9.ts`. Never type them into a page.
- Page addresses on cnvrtx.com are final. Do not rename one.
- `site.indexing` in `site/config/site.ts` stays `false` until the owner approves the launch.
- `npm run studio` does not publish anything in `site/`.
- `npm run site:stage` puts the site on the review address, `https://staging.cnvrtx.com` (always noindex). The real cnvrtx.com is deployed only on launch day.
