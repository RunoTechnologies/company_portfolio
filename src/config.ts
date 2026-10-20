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

// The about page's founder block; the photo is a 4:5 crop in public/.
export const FOUNDER = {
  name: 'Aleksandar Radovic',
  role: 'Founder and AI engineer',
  photo: '/founder.jpg',
  certs: ['Anthropic', 'Microsoft', 'Amazon Web Services'],
};

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

// Results cards on the home page, each written up at /case-studies/<slug> for one of the CLIENTS.
// scene/stakes/fix feed the card; the rest is the case study, whose first result is the headline number.
// Drafts: every figure and quote needs the named client's sign-off before launch.
export const CASE_STUDIES = [
  {
    slug: 'sourcing-cost',
    title: 'Sourcing below job-board cost',
    scene: 'The job-board invoice lands. Half the applicants it paid for never answered.',
    stakes: 'The margin keeps going to Indeed and LinkedIn.',
    fix: 'Your own database and referrals are worked first; job boards fill only what is left.',
    client: 'Chroma Recruitment',
    sector: 'Tech, engineering and care',
    base: 'Manchester',
    live: '6 weeks',
    summary: 'Chroma’s care and engineering desks were buying applicants from job boards while 38,000 candidates sat untouched in their own CRM. Now the database is worked first, and a sponsored ad only goes live when it comes up short.',
    story: [
      'Every new role went straight onto a sponsored Indeed listing and out through two LinkedIn Recruiter seats. For care home managers and design engineers that bought volume, but about half the applicants never replied to a first call, and the job-board bill had become the desks’ biggest cost after salaries.',
      'Meanwhile the CRM held eight years of past candidates, many already vetted and some already placed once. Nobody searched it, because a consultant searching the database is a consultant not on the phone.',
    ],
    built: [
      { h: 'Database first', p: 'When a job opens, every past candidate is scored against it and the best matches get a text and an email in the first hour, in the consultant’s name.' },
      { h: 'Referral loop', p: 'Placed candidates are asked for a referral at week four and week twelve, through a tracked link that credits them when the referral is placed.' },
      { h: 'Job boards as the backstop', p: 'A sponsored listing goes live only if the database and referrals have not produced a shortlist within 72 hours.' },
      { h: 'Cost per candidate, per desk', p: 'Spend and sourced candidates are tallied weekly in the CRM, so each desk lead sees the number the build is meant to move.' },
    ],
    results: [
      { label: 'Cost per sourced candidate', before: '£74', after: '£29' },
      { label: 'Shortlists filled from the database and referrals', before: '18%', after: '61%' },
      { label: 'Monthly job-board spend', before: '£11,200', after: '£4,100' },
    ],
    period: 'First full quarter after launch, against the quarter before.',
    quote: 'We stopped paying for Indeed sponsorships in month two. The sourced pool was cheaper and the candidates actually picked up.',
  },
  {
    slug: 'offer-acceptance',
    title: 'Offers that get accepted',
    scene: 'The candidate you worked all week took another agency’s offer. They texted back first.',
    stakes: 'You do the work and a rival takes the fee.',
    fix: 'Every candidate is enriched and followed up within minutes, then warmed until the offer.',
    client: 'Chadwick Nott',
    sector: 'Legal',
    base: 'London, with five regional offices',
    live: '5 weeks',
    summary: 'Newly qualified solicitors and paralegals register with three or four agencies at once, and the first one to call usually wins. Chadwick Nott now answers every application in minutes and keeps candidates warm through to the offer.',
    story: [
      'On a busy week a new application could wait a day for a consultant to read it. By then the candidate had spoken to two other agencies, and one of them had a role in front of a firm already.',
      'The quieter loss came later. Between second interview and offer, candidates heard nothing for days, counteroffers went unanswered and some accepted elsewhere before the offer letter arrived.',
    ],
    built: [
      { h: 'Five-minute first contact', p: 'Each application is matched to its CRM record and public profile, the consultant gets a one-paragraph brief on PQE, practice area and location, and the candidate gets a text within five minutes.' },
      { h: 'Follow-up after every stage', p: 'Candidates hear from their consultant after each interview with feedback and the next step, written for their practice area and sent without anyone remembering to.' },
      { h: 'Offer-stage warming', p: 'Between final interview and start date, the system checks in, prepares candidates for a counteroffer and flags any candidate who goes quiet for 48 hours.' },
    ],
    results: [
      { label: 'Offer acceptance rate', before: '58%', after: '81%' },
      { label: 'Median time to first contact', before: '26 hours', after: '4 min' },
      { label: 'Offers lost to a rival agency', before: '19%', after: '6%' },
    ],
    period: 'Six months after launch, against the six months before, across all desks.',
    quote: 'Follow-ups that used to slip through the cracks now go out on time, every time, without anyone chasing them.',
  },
  {
    slug: 'show-up',
    title: 'Shifts that get filled',
    scene: 'Two no-shows for the 5am depot shift. The client is already calling.',
    stakes: 'They start quoting other agencies.',
    fix: 'Shifts are confirmed the night before and gaps are filled from your bench by 4am.',
    client: 'Red Kite Waste',
    sector: 'Waste management and recycling',
    base: 'North Yorkshire, placing UK-wide',
    live: '4 weeks',
    summary: 'Red Kite supplies interim LGV drivers and plant operatives to depots and recycling plants that start at 5am. Every shift is now confirmed the night before, and a dropped one is refilled from the bench before the gates open.',
    story: [
      'Confirmations were phone calls the afternoon before, squeezed in around everything else. A driver who did not pick up was assumed to be coming, and the first sign of a gap was the depot manager ringing at quarter past six.',
      'A missed round or an idle sorting line is visible to the client’s own customers, so two bad mornings in a month were enough for a depot to start ringing other agencies.',
    ],
    built: [
      { h: 'Night-before confirmation', p: 'Every worker gets a text at 6pm with one-tap confirm or cancel. Anyone silent by 8pm gets an automated call, and anyone still silent is treated as a gap.' },
      { h: 'Bench auto-fill', p: 'Gaps are offered to bench workers with the right licence category, CPC and site induction who live within reach of the site. The first to accept gets the shift, by 4am at the latest.' },
      { h: 'Depot heads-up', p: 'Each depot manager gets the confirmed list before the shift starts, so a swap is news from Red Kite and not a surprise at the gate.' },
    ],
    results: [
      { label: 'First-shift show-up rate', before: '78%', after: '96%' },
      { label: 'Shifts unfilled at start time, per week', before: '9', after: '1' },
      { label: 'Consultant hours on early-morning calls, per week', before: '11', after: '2' },
    ],
    period: 'Twelve weeks after launch, against the twelve weeks before.',
    quote: 'Show-up rate went from a coin flip to something we can plan a shift around.',
  },
  {
    slug: 'fraud-screening',
    title: 'Fraud stopped at screening',
    scene: 'A placed worker’s right to work doesn’t check out.',
    stakes: 'Compliance exposure, and a client who stops trusting your shortlist.',
    fix: 'Fraudulent and duplicate applicants are stopped at screening, before a recruiter sees them.',
    client: '3D Recruit Education',
    sector: 'Primary and secondary education',
    base: 'East Sussex, covering Sussex and Kent',
    live: '7 weeks',
    summary: 'Every supply teacher and teaching assistant 3D Recruit places has to clear safeguarding checks before they set foot in a school. The checks that catch fake and duplicate applicants now run at application, before a consultant spends a minute on them.',
    story: [
      'Job-board applications had started to include invented teaching qualifications, the same identity documents behind several names and old candidates re-registering under new email addresses. Most were caught, but only after a consultant had phoned them, booked a registration interview and chased references.',
      'In schools a miss is not just an awkward call. One candidate whose right to work failed after a booking had been confirmed was enough for a head teacher to ask how the shortlist was being checked.',
    ],
    built: [
      { h: 'Identity at the door', p: 'Applicants verify their right to work with a share code and upload ID at application. Documents already used under another name are flagged.' },
      { h: 'Qualification and DBS checks', p: 'Qualified teacher status is checked against the teacher record and DBS certificates against the update service before the profile reaches a consultant.' },
      { h: 'Duplicate detection', p: 'Applicants are matched on phone, address, National Insurance number and document, not just email, so a returning candidate lands on their old record and its history.' },
      { h: 'References that are real', p: 'Reference requests go only to school and trust email domains, and a reply from a free email address is held for a consultant to review.' },
    ],
    results: [
      { label: 'Applicants reaching a consultant who later fail checks', before: '1 in 6', after: '1 in 50' },
      { label: 'Screening hours a week, whole team', before: '21', after: '12' },
      { label: 'Days from application to cleared to work', before: '9', after: '4' },
    ],
    period: 'The autumn term after launch, against the summer term before.',
    quote: 'The screening step alone saved my team a day a week of chasing people who never existed.',
  },
  {
    slug: 'client-pipeline',
    title: 'A client pipeline that refills itself',
    scene: 'No time for business development this month. Again.',
    stakes: 'The pipeline is empty the week your biggest client leaves.',
    fix: 'Automated outreach books qualified client conversations onto your calendar.',
    client: 'Gresham Hunt',
    sector: 'Financial services: finance, audit, risk and compliance',
    base: 'City of London and Amsterdam',
    live: '6 weeks',
    summary: 'Gresham Hunt’s consultants win their own clients, which means business development stops whenever searches get busy. Outreach now runs every week whatever the desk is doing, and books the replies into consultants’ calendars.',
    story: [
      'A consultant on three live searches has no hours left for new clients. When the searches closed together, the desk spent the next two months rebuilding a pipeline from scratch.',
      'The signals were there all along: a firm fined by the regulator needs a compliance hire, a new chief risk officer rebuilds their team. Nobody had time to watch for them.',
    ],
    built: [
      { h: 'Hiring triggers', p: 'Regulatory actions, leadership moves, new licences and audit, risk and compliance job postings at target firms in the UK and the Netherlands are collected daily.' },
      { h: 'Outreach in the consultant’s voice', p: 'Each trigger starts a three-week sequence to the hiring CFO, CRO or CCO with a short market note relevant to their situation. Replies go straight to the consultant.' },
      { h: 'Booked, with a brief', p: 'A positive reply gets the consultant’s calendar link, and the booked call arrives with a one-page brief on the firm, the trigger and past contact.' },
    ],
    results: [
      { label: 'Qualified client conversations a month', before: '3', after: '14' },
      { label: 'New clients won a quarter', before: '2', after: '7' },
      { label: 'Consultant hours on business development, per week', before: '6', after: '1.5' },
    ],
    period: 'Two quarters after launch, against the two quarters before.',
    quote: 'I was sceptical of anything with AI in the name. This is just good plumbing.',
  },
  {
    slug: 'back-office',
    title: 'A back office that runs itself',
    scene: '14 timesheets still missing. Payroll closes at 6.',
    stakes: 'Recruiters spend Fridays on admin, then leave for desks that don’t.',
    fix: 'Timesheets are collected, matched and invoiced by Monday 9am.',
    client: 'Carisbrook Partners',
    sector: 'Financial markets',
    base: 'London',
    live: '8 weeks',
    summary: 'Carisbrook places contractors into middle-office, trade support and compliance roles at banks and hedge funds, each client with its own approval process. Timesheets, invoices and contractor compliance now run without a Friday of chasing.',
    story: [
      'About 140 contractors submitted weekly timesheets by email, spreadsheet and three different client portals. Every Friday a coordinator and two consultants chased the missing ones, then keyed approved hours into invoices by hand.',
      'Late timesheets meant late invoices and contractors paid late, and contract end dates and right-to-work expiries lived in one person’s calendar.',
    ],
    built: [
      { h: 'Timesheet collection', p: 'Contractors get a Thursday reminder with one-tap submission, and the client’s approver is chased automatically until hours are signed off.' },
      { h: 'Matching', p: 'Approved hours are matched to each placement’s rate card and purchase order, and only mismatches reach a person.' },
      { h: 'Invoicing by Monday 9am', p: 'Invoices are raised in the accounting system and uploaded to each client’s vendor portal before the week starts.' },
      { h: 'Contractor compliance', p: 'Contract end dates, right-to-work expiries and IR35 status determinations are tracked, with reminders to the consultant and the contractor weeks ahead.' },
    ],
    results: [
      { label: 'Coordinator hours on timesheets and invoicing, per week', before: '31', after: '6' },
      { label: 'Timesheets missing at payroll cut-off', before: '14', after: '1' },
      { label: 'Days from week end to invoice', before: '6', after: '1' },
    ],
    period: 'Three months after launch, against the three months before.',
    quote: 'Our consultants spend their week on conversations with candidates, not on admin.',
  },
];
