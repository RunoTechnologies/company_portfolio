// /llms.txt, the site summarised for AI crawlers and answer engines (llmstxt.org), built from config so it
// cannot drift from the pages. The case studies are left out on purpose: they are kept out of search and AI indexes.
import type { APIRoute } from 'astro';
import { ABOUT_LINE, CAL_URL, COMPANY, DESCRIPTION, EMAIL, FAQ, FOUNDER, SOLUTIONS, STEPS } from '../config';

export const GET: APIRoute = ({ site }) => {
  const at = (path: string) => new URL(path, site).href;
  const lines = [
    `# ${COMPANY}`,
    '',
    `> ${ABOUT_LINE} ${DESCRIPTION} Founder-led: the engineers on your first call are the ones who design and build your automation.`,
    '',
    `${COMPANY} builds automation for staffing and recruiting firms so consultants place candidates instead of chasing admin. Every build starts from how the firm’s desks actually work and ends with a customised solution to the exact problem and a clear ROI.`,
    '',
    '## Solutions',
    '',
    ...SOLUTIONS.map((s) => `- [${s.label}](${at(`/#${s.id}`)}): ${s.text}`),
    '',
    '## How an engagement runs',
    '',
    ...STEPS.map((s, i) => `${i + 1}. ${s.title}: ${s.checks.map((c) => c[0].toLowerCase() + c.slice(1)).join('; ')}.`),
    '',
    '## FAQ',
    '',
    ...FAQ.map((f) => `- ${f.q} ${f.a}`),
    '',
    '## People',
    '',
    `- [About](${at('/about')}): ${FOUNDER.name} (${FOUNDER.role}). Certifications: ${FOUNDER.certs.map((c) => c.name).join('; ')}.`,
    '',
    '## Contact',
    '',
    `- [Book a free 30-minute consultation](${CAL_URL})`,
    `- [LinkedIn](${FOUNDER.linkedin})`,
    `- [${EMAIL}](mailto:${EMAIL})`,
    '',
    '## Optional',
    '',
    `- [Privacy](${at('/privacy')})`,
    `- [Terms](${at('/terms')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
