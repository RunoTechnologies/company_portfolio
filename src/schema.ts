import { ABOUT_LINE, CAL_URL, COMPANY, DESCRIPTION, EMAIL, FAQ, FOUNDER, MARKET, SOLUTIONS } from './config';

const AREA = { '@type': 'Country', name: MARKET };

// JSON-LD nodes for the <head>, built from config so the structured data says what the pages say.
// Base.astro emits the organisation and the founder on every page; the home page adds the
// services and the FAQ. The case studies get nothing of their own: they are kept out of the indexes.
// The legal name and registered address stay on the legal pages: the address is a registered agent, not a place of
// business, so the Organization node carries neither; the founding date is not known.

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
    description: `${ABOUT_LINE} ${DESCRIPTION}`,
    slogan: 'Stop chasing. Start placing.',
    logo: { '@type': 'ImageObject', url: new URL('/favicon.svg', site).href },
    image: new URL('/og.png', site).href,
    email: EMAIL,
    areaServed: AREA,
    founder: { '@id': id.person },
    knowsAbout: SOLUTIONS.map((s) => s.label),
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: EMAIL, url: CAL_URL, areaServed: AREA, availableLanguage: 'en' },
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
    areaServed: AREA,
    audience: { '@type': 'BusinessAudience', name: 'Staffing and recruiting agencies' },
  }));
};

// Google shows FAQ rich results only for government and health sites now; the node is for answer engines.
export const faq = (site: URL) => ({
  '@type': 'FAQPage',
  '@id': new URL('/#faq', site).href,
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
