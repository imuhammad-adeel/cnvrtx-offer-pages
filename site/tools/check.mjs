/**
 * Technical SEO check for the built cnvrtx.com site.
 *
 *   npm run site:build
 *   npm run site:check
 *
 * It reads dist-site/ and fails (exit 1) if any page breaks a launch rule:
 * unique title and description, one H1, self canonical, robots tag, working internal
 * links and anchors, no orphan pages, valid structured data, a sitemap that lists only
 * indexable canonical pages, no placeholder text, no em dashes.
 * It also reports how much visible text each pair of problem / shop pages shares.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist-site');
const ORIGIN = 'https://cnvrtx.com';
const errors = [];
const warns = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warns.push(`${page}: ${msg}`);

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== '_astro') walk(abs);
    } else if (e.name.endsWith('.html')) files.push(abs);
  }
})(root);

const toUrl = (file) => {
  const rel = path.relative(root, file).split(path.sep).join('/').replace(/\.html$/, '');
  return rel === 'index' ? '/' : '/' + rel;
};
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pick = (html, re) => (html.match(re) || [])[1];
const visible = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();

const pages = new Map();
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const url = toUrl(f);
  const body = html.slice(html.indexOf('<body'));
  const main = (body.match(/<main[\s\S]*<\/main>/) || [''])[0];
  pages.set(url, {
    url,
    html,
    title: decode(pick(html, /<title>([\s\S]*?)<\/title>/) || ''),
    desc: decode(pick(html, /<meta name="description" content="([^"]*)"/) || ''),
    robots: pick(html, /<meta name="robots" content="([^"]*)"/) || '',
    canonical: pick(html, /<link rel="canonical" href="([^"]*)"/) || '',
    h1: [...body.matchAll(/<h1[\s>]/g)].length,
    ids: new Set([...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])),
    links: [...body.matchAll(/<a\s[^>]*?href="([^"]*)"/g)].map((m) => decode(m[1])),
    mainLinks: [...main.matchAll(/<a\s[^>]*?href="([^"]*)"/g)].map((m) => decode(m[1])),
    ld: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]),
    text: visible(main),
    og: /<meta property="og:title"/.test(html) && /<meta property="og:url"/.test(html),
  });
}

// ---------- per-page rules ----------
const seenTitle = new Map();
const seenDesc = new Map();
for (const p of pages.values()) {
  const is404 = p.url === '/404';
  if (!p.title) err(p.url, 'no <title>');
  if (!p.desc) err(p.url, 'no meta description');
  if (seenTitle.has(p.title)) err(p.url, `same title as ${seenTitle.get(p.title)}`);
  seenTitle.set(p.title, p.url);
  if (seenDesc.has(p.desc)) err(p.url, `same description as ${seenDesc.get(p.desc)}`);
  seenDesc.set(p.desc, p.url);
  if (p.title.length > 70) warn(p.url, `title is ${p.title.length} characters (Google may shorten it)`);
  if (p.desc.length > 170) warn(p.url, `description is ${p.desc.length} characters`);
  if (p.desc.length < 70) warn(p.url, `description is only ${p.desc.length} characters`);
  if (p.h1 !== 1) err(p.url, `${p.h1} H1 headings (must be exactly 1)`);
  if (!p.robots) err(p.url, 'no robots meta tag');
  if (!is404 && p.canonical !== ORIGIN + p.url) err(p.url, `canonical is "${p.canonical}", expected "${ORIGIN + p.url}"`);
  if (!p.og) err(p.url, 'Open Graph tags missing');
  for (const raw of p.ld) {
    try {
      const j = JSON.parse(raw);
      if (j['@context'] !== 'https://schema.org' || !Array.isArray(j['@graph'])) err(p.url, 'structured data has no @context / @graph');
      for (const node of j['@graph']) if (!node['@type']) err(p.url, 'structured data node without @type');
    } catch {
      err(p.url, 'structured data is not valid JSON');
    }
  }
  if (!is404 && p.url !== '/' && !p.ld.some((r) => r.includes('BreadcrumbList'))) err(p.url, 'no BreadcrumbList');
  if (/lorem ipsum|TODO|TBD|coming soon|placeholder/i.test(p.text)) err(p.url, 'placeholder wording found');
  if (/[—–]/.test(p.text)) err(p.url, 'em dash or en dash in visible text');
  if (/\{[a-z]+\}/.test(p.text)) err(p.url, `unfilled token in text: ${p.text.match(/\{[a-z]+\}/)[0]}`);

  for (const href of p.links) {
    if (/^(mailto:|tel:)/.test(href)) continue;
    if (/^https?:\/\//.test(href)) {
      if (href.startsWith(ORIGIN)) err(p.url, `absolute link to own site: ${href}`);
      continue;
    }
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (id && !p.ids.has(id)) err(p.url, `in-page link to missing #${id}`);
      continue;
    }
    const [target, hash] = href.split('#');
    if (target.length > 1 && target.endsWith('/')) err(p.url, `link ends with a slash: ${href}`);
    const t = pages.get(target);
    if (!t) err(p.url, `broken link: ${href}`);
    else if (hash && !t.ids.has(hash)) err(p.url, `link to missing anchor: ${href}`);
  }
}

// ---------- sitemap, robots, orphans ----------
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const inSitemap = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, '') || '/');
for (const u of inSitemap) {
  const p = pages.get(u);
  if (!p) err('sitemap.xml', `lists a page that was not built: ${u}`);
}
const indexingOn = [...pages.values()].some((p) => p.robots.startsWith('index'));
for (const p of pages.values()) {
  const wantsIndex = p.robots.startsWith('index');
  if (wantsIndex && !inSitemap.includes(p.url)) err(p.url, 'indexable but missing from the sitemap');
  if (indexingOn && !wantsIndex && inSitemap.includes(p.url)) err(p.url, 'noindex but listed in the sitemap');
}
const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (/Disallow:\s*\//.test(robots)) err('robots.txt', 'blocks pages (a blocked page cannot show its noindex tag)');
if (!robots.includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) err('robots.txt', 'sitemap line missing');

// a page must be linked from the body (not only the menu or footer) of at least two other pages
const inbound = new Map([...pages.keys()].map((u) => [u, new Set()]));
for (const p of pages.values()) for (const href of p.mainLinks) {
  const target = href.split('#')[0];
  if (inbound.has(target) && target !== p.url) inbound.get(target).add(p.url);
}
for (const u of inSitemap) {
  const n = inbound.get(u)?.size || 0;
  if (u !== '/' && n < 2) err(u, `only ${n} page(s) link to it from their content`);
}

// ---------- shared text between sibling pages ----------
const shingles = (t) => {
  const w = t.toLowerCase().split(' ');
  const s = new Set();
  for (let i = 0; i + 8 <= w.length; i++) s.add(w.slice(i, i + 8).join(' '));
  return s;
};
const overlap = (a, b) => {
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n / Math.min(a.size, b.size);
};
const report = [];
const groups = {
  guides: [...pages.keys()].filter((u) => u.startsWith('/auto/guides/')),
  auto: [...pages.keys()].filter((u) => /^\/auto\/[^/]+$/.test(u) && !['/auto/guides', '/auto/how-it-works'].includes(u)),
};
for (const [name, list] of Object.entries(groups)) {
  const sh = list.map((u) => [u, shingles(pages.get(u).text)]);
  let worst = { v: 0, a: '', b: '' };
  let sum = 0;
  let n = 0;
  for (let i = 0; i < sh.length; i++)
    for (let j = i + 1; j < sh.length; j++) {
      const v = overlap(sh[i][1], sh[j][1]);
      sum += v;
      n++;
      if (v > worst.v) worst = { v, a: sh[i][0], b: sh[j][0] };
    }
  report.push(`${name}: ${list.length} pages, average shared text ${(100 * sum / n).toFixed(1)}%, highest ${(100 * worst.v).toFixed(1)}% (${worst.a} and ${worst.b})`);
  if (worst.v > 0.5) err(worst.a, `shares ${(100 * worst.v).toFixed(0)}% of its text with ${worst.b}`);
}

// ---------- output ----------
const words = (u) => pages.get(u).text.split(' ').length;
console.log(`Pages built: ${pages.size}. In sitemap: ${inSitemap.length}. Indexing: ${indexingOn ? 'ON' : 'OFF (every page is noindex)'}.`);
console.log('\nShared text between sibling pages (8-word runs):');
report.forEach((r) => console.log('  ' + r));
console.log('\nWords of content per page:');
for (const u of [...pages.keys()].sort()) console.log(`  ${String(words(u)).padStart(5)}  ${u}`);
if (warns.length) {
  console.log(`\n${warns.length} note(s):`);
  warns.forEach((w) => console.log('  - ' + w));
}
if (errors.length) {
  console.log(`\n${errors.length} PROBLEM(S):`);
  errors.forEach((e) => console.log('  x ' + e));
  process.exit(1);
}
console.log('\nAll checks passed.');
