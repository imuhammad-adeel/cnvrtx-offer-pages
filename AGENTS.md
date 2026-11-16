# Instructions for any AI tool reading this repository

This repository is a FINISHED website. Your job is to reproduce it exactly, not to design one.

## The rule

Port it. Do not redesign it.

- Do not change the layout, colours, fonts, spacing, section order, copy, animations or branding.
- Do not use Tailwind, shadcn/ui or any component library for these pages. The site has its own CSS. Use that CSS unchanged.
- Do not rewrite, shorten or "improve" any text.
- Do not add sections, testimonials, statistics, badges or images that are not in the source.
- If something cannot be reproduced exactly, stop and say which part, instead of inventing a replacement.

## What is in this repository

| Path | What it is |
| --- | --- |
| `reference-build/` | The finished site as plain HTML, CSS and JS. This is the visual source of truth. Open any `index.html` in a browser to see exactly how a page must look. |
| `src/` | The Astro source that produced `reference-build/`. |
| `src/pages/` | One file per route. `[door].astro` and `[doc].astro` are dynamic routes. |
| `src/components/automotive-v9/` | Sections of the main page. |
| `src/components/automotive-doors/` | Sections used by the twelve problem pages. |
| `src/content/` | All copy, as TypeScript objects. Text lives here, not in the components. |
| `src/config/` | Prices, links, legal details and feature flags. |
| `src/styles/` | Global CSS: `tokens.css`, `global.css`, `v9.css`. |
| `src/scripts/` | Shared browser scripts: analytics, attribution, scroll reveal. |

## Routes that must exist

- `/` redirects to `/automotive/v9`
- `/automotive/v9` (main sales page), `/automotive/v9/onboarding`, `/automotive/v9/thank-you`
- `/automotive/for/<slug>` for each of the twelve slugs in `src/content/automotiveDoors.ts`
- `/legal/privacy`, `/legal/terms`, `/legal/sms-terms`, `/legal/cancellation`, `/legal/disclaimer`

`/automotive/v8` and `/automotive/for` (the list page) are internal review pages. They may be skipped.

## How to port to React (Vite) without changing the look

1. CSS: copy every file in `reference-build/_astro/*.css` into the project unchanged and import all of them once, globally. Copy the font files (`*.woff2`) next to them so the `url()` paths still resolve.
2. Markup: for each route, take the `<body>` of the matching `reference-build/.../index.html` and convert it to JSX one to one. Keep every class name and every `data-astro-cid-*` attribute. The CSS selectors depend on those attributes, so removing them breaks the styling.
3. Keep the `<body>` class (`v9`) and the `<html>` attributes from the reference page.
4. Behaviour: every `.astro` file in `src/` that has a `<script>` block contains plain browser TypeScript that works on the DOM. Move each block into a `useEffect` that runs once after the component mounts. Do not rewrite the logic as React state.
5. Copy and data: import the objects in `src/content/` and `src/config/` as they are. They are plain TypeScript and need no changes.
6. Head tags: copy the title, description, canonical, robots and theme-colour tags per route from the reference page.
7. Check: compare each route with its reference page at 360px and 1280px wide. They must match.

## Fonts and colours

Fonts are Sora (headings), Manrope (text) and Caveat (handwritten notes), self-hosted as `woff2`. Colours are CSS variables defined in `src/styles/v9.css` and `src/styles/tokens.css`. Do not substitute either.
