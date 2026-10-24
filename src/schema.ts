import { CAL_URL, COMPANY, DESCRIPTION, FOUNDER, SOLUTIONS } from './config';

// JSON-LD nodes for the <head>, built from config so the structured data says what the pages say.
// Base.astro emits the organisation and the founder on every page; the home page adds the
// services. The case studies get nothing of their own: they are kept out of the indexes.
// Address, contact email, legal entity, founding date and areaServed are not known yet and
// are left out rather than guessed.

const ISSUERS: Record<string, string> = { anthropic: 'Anthropic', microsoft: 'Microsoft', aws: 'Amazon Web Services' };

const ids = (site: URL) => ({
  org: new URL('/#organization', site).href,
  person: new URL('/about#founder', site).href,
});

export const organization = (site: URL) => {
  const id = ids(site);
  return {
    '@type': 'Organization',
    '@id': id.org,
    name: COMPANY,
    url: site.href,
    description: DESCRIPTION,
    slogan: 'Stop chasing. Start placing.',
    logo: { '@type': 'ImageObject', url: new URL('/favicon.svg', site).href },
    image: new URL('/og.png', site).href,
    founder: { '@id': id.person },
    knowsAbout: SOLUTIONS.map((s) => s.label),
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', url: CAL_URL, availableLanguage: 'en' },
  };
};

export const person = (site: URL) => {
  const id = ids(site);
  return {
    '@type': 'Person',
    '@id': id.person,
    name: FOUNDER.name,
    jobTitle: FOUNDER.role,
    url: new URL('/about', site).href,
    sameAs: [FOUNDER.linkedin],
    worksFor: { '@id': id.org },
    hasCredential: FOUNDER.certs.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      identifier: c.code,
      recognizedBy: { '@type': 'Organization', name: ISSUERS[c.issuer] ?? c.issuer },
    })),
  };
};

export const services = (site: URL) => {
  const id = ids(site);
  return SOLUTIONS.map((s) => ({
    '@type': 'Service',
    '@id': new URL(`/#${s.id}`, site).href,
    name: s.label,
    description: s.text,
    url: new URL(`/#${s.id}`, site).href,
    serviceType: 'Automation for staffing and recruiting firms',
    provider: { '@id': id.org },
    audience: { '@type': 'BusinessAudience', name: 'Staffing and recruiting agencies' },
  }));
};
