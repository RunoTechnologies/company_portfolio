import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runotech.com',
  output: 'static',
  // The process and solutions pages folded into home-page sections.
  redirects: {
    '/process': '/#process',
    '/solutions': '/#solutions',
    '/case-studies/show-up': '/case-studies/niche-talent',
  },
});
