/**
 * sitemap.xml: only canonical pages that are meant to be indexed.
 * Left out on purpose: legal pages while they are unreviewed drafts, the 404 page,
 * and the contact page when no contact detail is set (the page does not exist then).
 */
import type { APIRoute } from 'astro';
import { abs, hasContact } from '../config/site';
import { problems, shopTypes, guides } from '../content/directory';
import { legalDocs } from '../../src/content/legal';
import { offerV9 } from '../../src/config/offerV9';

export const sitemapPaths = (): { path: string; lastmod?: string }[] => [
  { path: '/' },
  { path: '/auto' },
  { path: '/auto/how-it-works' },
  { path: '/auto/guides' },
  ...problems.map((p) => ({ path: `/auto/${p.slug}` })),
  ...shopTypes.map((s) => ({ path: `/auto/${s.slug}` })),
  ...guides.map((g) => ({ path: `/auto/guides/${g.slug}`, lastmod: g.updated })),
  { path: '/about' },
  ...(hasContact ? [{ path: '/contact' }] : []),
  ...(offerV9.legalInfo.reviewed ? legalDocs.map((d) => ({ path: `/legal/${d.slug}` })) : []),
];

export const GET: APIRoute = () => {
  const urls = sitemapPaths()
    .map((u) => `  <url><loc>${abs(u.path)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
