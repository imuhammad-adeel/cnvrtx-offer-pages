/**
 * Sends the finished site to the GoHighLevel AI Studio project.
 *
 *   npm run studio
 *
 * 1. Builds this Astro site.
 * 2. Copies the built pages into the AI Studio repository (kept in .studio/).
 * 3. Commits and pushes. AI Studio pulls the commit and builds a new preview.
 *
 * This folder (Astro) is the only place to edit. Never edit .studio/ by hand.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const STUDIO_REPO = 'https://github.com/imuhammad-adeel/convert-x.git';
const root = process.cwd();
const studio = path.join(root, '.studio');
const dist = path.join(root, 'dist');
const run = (cmd, cwd = root) => execSync(cmd, { cwd, stdio: 'inherit' });
const out = (cmd, cwd = root) => execSync(cmd, { cwd, encoding: 'utf8' }).trim();
// pages that are for internal review only and should not be published
const SKIP = [new RegExp('^automotive/v8(/|$)'), new RegExp('^automotive/for/index[.]html$')];

if (!process.argv.includes('--no-build')) run('npm run build');

if (!fs.existsSync(path.join(studio, '.git'))) run(`git clone ${STUDIO_REPO} .studio`);
// take anything AI Studio saved since last time; never rewrite its history
run('git pull --ff-only', studio);

const siteDir = path.join(studio, 'src', 'site');
const assetDir = path.join(studio, 'public', '_astro');
fs.rmSync(siteDir, { recursive: true, force: true });
fs.rmSync(assetDir, { recursive: true, force: true });

let pages = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    const rel = path.relative(dist, abs).split(path.sep).join('/');
    if (e.isDirectory()) {
      if (rel === '_astro') fs.cpSync(abs, assetDir, { recursive: true });
      else walk(abs);
    } else if (e.name.endsWith('.html')) {
      if (SKIP.some((r) => r.test(rel))) continue;
      fs.mkdirSync(path.dirname(path.join(siteDir, rel)), { recursive: true });
      fs.copyFileSync(abs, path.join(siteDir, rel));
      pages++;
    } else {
      // favicon and other root files
      fs.mkdirSync(path.dirname(path.join(studio, 'public', rel)), { recursive: true });
      fs.copyFileSync(abs, path.join(studio, 'public', rel));
    }
  }
};
walk(dist);
console.log(`\nCopied ${pages} pages to the AI Studio project.`);

run('git add -A', studio);
if (!out('git status --porcelain', studio)) {
  console.log('AI Studio already has this version. Nothing to send.');
} else if (process.argv.includes('--no-push')) {
  console.log('Changes staged in .studio/ (not pushed).');
} else {
  const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
  run(`git commit -q -m "Update site from the Astro source (${stamp})"`, studio);
  run('git push', studio);
  console.log('\nSent. In AI Studio, wait for the new preview and click "Update preview".');
}

// keep this (Astro) repository on GitHub in step as well
if (!process.argv.includes('--no-push')) {
  run('git add -A');
  if (out('git status --porcelain')) {
    const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
    run(`git commit -q -m "Update site (${stamp})"`);
  }
  if (out('git status -sb').includes('ahead')) run('git push');
  console.log('Both repositories are up to date.');
}
