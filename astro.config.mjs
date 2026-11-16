// @ts-check
import { defineConfig } from 'astro/config';

// get.cnvrtx.com hosts the direct sales experience; the indexable SEO hub
// lives at cnvrtx.com/automotive/ (see src/config/automotiveOffer.ts).
export default defineConfig({
  site: 'https://get.cnvrtx.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
