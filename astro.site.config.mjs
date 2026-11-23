// @ts-check
import { defineConfig } from 'astro/config';

// The main marketing and SEO site: https://cnvrtx.com
//   npm run site:dev      preview on localhost
//   npm run site:build    writes dist-site/
// Its pages live in site/. They reuse the design and sections in src/, which belongs to
// get.cnvrtx.com (the transaction pages) and is built by astro.config.mjs as before.
export default defineConfig({
  site: 'https://cnvrtx.com',
  srcDir: './site',
  outDir: './dist-site',
  publicDir: './public',
  cacheDir: './node_modules/.astro-site',
  // one address per page, no slash at the end: /auto/missed-calls
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  server: { port: 4330 },
  vite: {
    // buy buttons on cnvrtx.com go to checkout on get.cnvrtx.com (see src/config/offerV9.ts)
    define: { 'import.meta.env.PUBLIC_CHECKOUT_ORIGIN': JSON.stringify('https://get.cnvrtx.com') },
  },
});
