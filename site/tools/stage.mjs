/**
 * Puts the current site on the staging address, https://staging.cnvrtx.com.
 *
 *   npm run site:stage
 *
 * 1. Builds the site.  2. Runs the SEO check (stops if it fails).
 * 3. Refuses to continue if indexing is switched on: staging must never be indexable.
 * 4. Adds a header that tells every search engine not to keep any staging page.
 * 5. Uploads to Cloudflare (wrangler.staging.jsonc).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });
run('npm run site:build');
run('npm run site:check');

const home = fs.readFileSync('dist-site/index.html', 'utf8');
if (!home.includes('content="noindex, follow"')) {
  console.error('\nStopped: indexing is switched ON in site/config/site.ts. Staging is only for a noindex build.');
  process.exit(1);
}
fs.writeFileSync('dist-site/_headers', '/*\n  X-Robots-Tag: noindex, nofollow\n');
run('npx wrangler deploy --config wrangler.staging.jsonc');
console.log('\nStaging is updated: https://staging.cnvrtx.com');
