import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runotech.com',
  output: 'static',
  // Redirects live in public/_redirects so Cloudflare answers them with a real 301.
});
