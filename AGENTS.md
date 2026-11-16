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
