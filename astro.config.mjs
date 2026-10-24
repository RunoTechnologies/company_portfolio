import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://runotech.com',
  output: 'static',
  trailingSlash: 'never',
  // The case studies stay out of search and AI indexes: not in the sitemap, noindex on the page, Disallow for AI crawlers in robots.txt.
  integrations: [sitemap({ filter: (page) => !page.includes('/case-studies') })],
  // Redirects live in public/_redirects so Cloudflare answers them with a real 301.
  // Pages carry 15–26 KB of CSS, cheaper inline than as two extra round trips.
  // One file per page (/about.html), so Cloudflare serves /about directly instead of redirecting to /about/.
  build: { inlineStylesheets: 'always', format: 'file' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  experimental: {
    // Downloaded and hashed at build time, so the site makes no third-party request.
    fonts: [{
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-sans',
      weights: ['500 800'],
      styles: ['normal'],
      subsets: ['latin'],
      // A generic family must come last: it ends the stack and picks the metric-matched local font.
      fallbacks: ['ui-sans-serif', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      optimizedFallbacks: true,
    }],
  },
});
