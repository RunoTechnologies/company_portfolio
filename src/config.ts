// Placeholders: replace with the trading name and the real Cal.com handle and event slug.
export const COMPANY = 'Runo Technologies';
export const CAL_URL = 'https://cal.com/runotech/intro';
export const DESCRIPTION =
  'Sourcing, screening, follow-up and back-office automation for staffing and recruiting firms.';

export const NAV = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Results', href: '/#results' },
  { label: 'Process', href: '/#process' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
];

// Logos are white-on-transparent marks in public/clients/, drawn in the strip's text colour;
// ratio is the mark's width over its height.
export const CLIENTS = [
  { name: 'Carisbrook Partners', logo: '/clients/carisbrook.png', ratio: 88 / 128 },
  { name: 'Chroma Recruitment', logo: '/clients/chroma.png', ratio: 114 / 128 },
  { name: 'Gresham Hunt', logo: '/clients/gresham.png', ratio: 43 / 128 },
  { name: '3D Recruit Education', logo: '/clients/3d-recruit.png', ratio: 113 / 128 },
  { name: 'Chadwick Nott', logo: '/clients/chadwick.png', ratio: 178 / 128 },
  { name: 'Red Kite Waste', logo: '/clients/red-kite.png', ratio: 153 / 128 },
];

// Build-grid card anchors on the home page, shared with the footer.
export const SOLUTIONS = [
  { id: 'sourcing', label: 'Talent sourcing' },
  { id: 'show-up', label: 'Acceptance and show-up' },
  { id: 'screening', label: 'Fraud screening' },
  { id: 'clients', label: 'Client pipeline' },
  { id: 'back-office', label: 'Back office' },
  { id: 'crm', label: 'Custom CRM' },
];

// Results cards on the home page, each tied to the case study at /case-studies/<slug>. `measure` names
// the number a build moves; a client's measured before -> after replaces it.
export const CASE_STUDIES = [
  {
    slug: 'sourcing-cost',
    title: 'Sourcing below job-board cost',
    scene: 'The job-board invoice lands. Half the applicants it paid for never answered.',
    stakes: 'The margin keeps going to Indeed and LinkedIn.',
    fix: 'Your own database and referrals are worked first; job boards fill only what is left.',
    measure: 'Cost per sourced candidate',
  },
  {
    slug: 'offer-acceptance',
    title: 'Offers that get accepted',
    scene: 'The candidate you worked all week took another agency’s offer. They texted back first.',
    stakes: 'You do the work and a rival takes the fee.',
    fix: 'Every candidate is enriched and followed up within minutes, then warmed until the offer.',
    measure: 'Offer acceptance rate',
  },
  {
    slug: 'show-up',
    title: 'Shifts that get filled',
    scene: 'Two no-shows for the 7am warehouse shift. The client is already calling.',
    stakes: 'They start quoting other agencies.',
    fix: 'Shifts are confirmed the night before and gaps are filled from your bench by 5am.',
    measure: 'Interview and first-shift show-up rate',
  },
  {
    slug: 'fraud-screening',
    title: 'Fraud stopped at screening',
    scene: 'A placed worker’s right to work doesn’t check out.',
    stakes: 'Compliance exposure, and a client who stops trusting your shortlist.',
    fix: 'Fraudulent and duplicate applicants are stopped at screening, before a recruiter sees them.',
    measure: 'Bad applicants reaching a recruiter',
  },
  {
    slug: 'client-pipeline',
    title: 'A client pipeline that refills itself',
    scene: 'No time for business development this month. Again.',
    stakes: 'The pipeline is empty the week your biggest client leaves.',
    fix: 'Automated outreach books qualified client conversations onto your calendar.',
    measure: 'Qualified client conversations a month',
  },
  {
    slug: 'back-office',
    title: 'A back office that runs itself',
    scene: '14 timesheets still missing. Payroll closes at 6.',
    stakes: 'Recruiters spend Fridays on admin, then leave for desks that don’t.',
    fix: 'Timesheets are collected, matched and invoiced by Monday 9am.',
    measure: 'Coordinator hours on timesheets, invoicing and compliance',
  },
];
