import type { APIRoute } from 'astro';
import { CASE_STUDIES } from '../../config';

// The client quotes the home page shows. The browser fetches them after the page loads and
// /data/ is disallowed in robots.txt (and noindex by header in _headers), so search engines
// and AI crawlers index the page without them.
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ quotes: CASE_STUDIES.map((c) => ({ who: c.client, q: c.quote })) }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
