/**
 * robots.txt. Nothing is blocked here: pages that must stay out of Google carry a noindex
 * tag, and Google can only see that tag if it is allowed to fetch the page.
 */
import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
