// Placeholders: replace with the trading name and the real Cal.com handle and event slug.
export const COMPANY = 'Runo Technologies';
export const CAL_URL = 'https://cal.com/runotech/intro';

// Asked before the calendar opens; each answer goes to Cal.com under the key as a prefill and as booking metadata.
// Picking a question's `decline` option shows a not-yet note in place of the calendar button.
export const QUALIFY = [
  { key: 'employees', label: 'Number of employees', options: ['1–10', '11–50', '51–100', '101–200', '200+'] },
  { key: 'revenue', label: 'Annual revenue', options: ['Under $1M', '$1–5M', '$5–10M', '$10–50M', '$50M+'], decline: 'Under $1M' },
];
export const DESCRIPTION =
  'Sourcing, screening, follow-up and back-office automation for staffing and recruiting firms.';

export const NAV = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Process', href: '/#process' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
];

// The about page's founder block; the photo is a 4:5 crop in public/, the avatar a 128px square of the face for the hero.
export const FOUNDER = {
  name: 'Aleksandar Radovic',
  role: 'Founder and AI engineer',
  photo: '/founder.jpg',
  avatar: '/founder-avatar.jpg',
  linkedin: 'https://www.linkedin.com/in/aleksandar-radovic-134201174/',
  // issuer keys the logo drawn on the about page; the card shows short, with the full name as its tooltip
  certs: [
    { issuer: 'anthropic', name: 'Claude Certified Architect – Professional', short: 'Claude Certified Architect', code: 'CCAR-P' },
    { issuer: 'microsoft', name: 'Microsoft Certified: Agentic AI Business Solutions Architect Expert', short: 'Agentic AI Solutions Architect', code: 'AB-100' },
    { issuer: 'aws', name: 'AWS Certified Generative AI Developer – Professional', short: 'Generative AI Developer', code: 'AIP-C01' },
  ],
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

// Case studies, each written up at /case-studies/<slug> for one of the CLIENTS; their quotes feed the home page.
// scene/stakes open the case study and fix is its one-line summary; the first result is the headline number.
// Drafts: every figure and quote needs the named client's sign-off before launch.
export const CASE_STUDIES = [
  {
    slug: 'sourcing-cost',
    title: 'Sourcing below job-board cost',
    scene: 'The job-board invoice lands. Half the applicants it paid for never answered.',
    stakes: 'The margin keeps going to Indeed and LinkedIn.',
    fix: 'Your own database and referrals are worked first; a custom sourcing pipeline fills what is left.',
    client: 'Chroma Recruitment',
    summary: 'Chroma’s tech and engineering desks were buying applicants from job boards while 38,000 candidates sat untouched in their own CRM. Now the database is worked first, and a sourcing pipeline we built finds the rest when it comes up short.',
    story: [
      'Every new role went straight onto a sponsored Indeed listing and out through two LinkedIn Recruiter seats. About half the applicants never replied to a first call, and the job-board bill had become the desks’ biggest cost after salaries.',
      'Meanwhile the CRM held eight years of past candidates, many already vetted and some already placed once. Nobody searched it, because a consultant searching the database is a consultant not on the phone.',
      'Sourcing tools only added another per-seat bill on top of the job boards, so Chroma needed a custom sourcing pipeline that cost less per candidate.',
    ],
    built: [
      { h: 'Database first', p: 'When a job opens, every past candidate is scored against it and the best matches get a text and an email in the first hour, in the consultant’s name.' },
      { h: 'Referral loop', p: 'Placed candidates are asked for a referral at week four and week twelve, through a tracked link that credits them when the referral is placed.' },
      { h: 'Custom sourcing pipeline', p: 'When the database and referrals come up short, a pipeline we built finds new candidates for far less than a job board.' },
      { h: 'Cost per candidate, per desk', p: 'Spend and sourced candidates are tallied weekly in the CRM, so each desk lead sees the number the build is meant to move.' },
    ],
    results: [
      { label: 'Cost per sourced candidate', before: '$98', after: '$39' },
      { label: 'Shortlists filled from the database and referrals', before: '18%', after: '61%' },
      { label: 'Monthly job-board spend', before: '$14,900', after: '$5,500' },
    ],
    period: 'First six months after launch, against the six months before.',
    quote: 'We stopped paying for Indeed sponsorships in month two. The sourced pool was cheaper and the candidates actually picked up.',
  },
  {
    slug: 'offer-acceptance',
    title: 'Offers that get accepted',
    scene: 'The candidate you worked all week took another agency’s offer. They texted back first.',
    stakes: 'You do the work and a rival takes the fee.',
    fix: 'Every candidate is enriched and followed up within minutes, then warmed until the offer.',
    client: 'Chadwick Nott',
    summary: 'Newly qualified solicitors and paralegals register with three or four agencies at once, and the first one to call usually wins. Chadwick Nott now answers every application in minutes and keeps candidates warm through to the offer.',
    story: [
      'On a busy week a new application could wait a day for a consultant to read it. By then the candidate had spoken to two other agencies, and one of them had already put them forward for a role. Speed matters more than it looks: an MIT study of sales leads found the odds of qualifying a lead fell 21-fold when the first call came after thirty minutes instead of five.',
      'The quieter loss came later. Between second interview and offer, candidates heard nothing for days, counteroffers went unanswered and some accepted elsewhere before the offer letter arrived.',
    ],
    built: [
      { h: 'Five-minute first contact', p: 'Each application is matched to its CRM record and public profile, the consultant gets a one-paragraph brief on experience, specialism and location, and the candidate gets a text within five minutes.' },
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
    slug: 'demand-forecast',
    title: 'Crews booked before the rush',
    scene: 'Bank holiday week. Every depot wants extra crews, and the orders came in on Tuesday.',
    stakes: 'You fill at premium rates, or the client finds someone who can.',
    fix: 'Depot demand is forecast weeks ahead, and the bench is booked before the orders arrive.',
    client: 'Red Kite Waste',
    summary: 'Red Kite supplies interim LGV drivers and plant operatives to depots and recycling plants whose busy weeks come round on the same calendar every year. Demand is now forecast six weeks out, and the bench is booked before the orders arrive.',
    story: [
      'Orders came in by phone, WhatsApp and email, usually a few days before the shift. Every bank holiday catch-up, garden-waste season and plant shutdown arrived as a surprise, though the same weeks had been busy the year before.',
      'With qualified drivers scarce, a short-notice order was filled with a premium-rate driver, a worker without the site induction or nobody at all. Two short weeks in a season were enough for a depot to start ringing other agencies.',
    ],
    built: [
      { h: 'Order intake', p: 'Orders arriving by phone, WhatsApp and email are captured on one board for each depot, so nothing waits in a consultant’s inbox.' },
      { h: 'Demand forecast', p: 'Two years of orders are combined with collection calendars, bank holidays and plant shutdowns into a forecast for each site, six weeks out.' },
      { h: 'Bench booked ahead', p: 'Workers with the right licence category, CPC and site induction are offered provisional weeks, and inductions are booked before they are needed.' },
      { h: 'Weekly outlook', p: 'Each depot manager gets the forecast crews every Monday and confirms or adjusts them, so the order arrives already filled.' },
    ],
    results: [
      { label: 'Shifts booked five or more days ahead', before: '22%', after: '70%' },
      { label: 'Fill rate in peak weeks', before: '84%', after: '97%' },
      { label: 'Consultant hours on same-day orders, per week', before: '12', after: '3' },
    ],
    period: 'The first peak season after launch, against the same season the year before.',
    quote: 'We used to find out about the busy weeks when the depots rang. Now we ring them first.',
  },
  {
    slug: 'fraud-screening',
    title: 'Fraud stopped at screening',
    scene: 'A placed worker’s right to work doesn’t check out.',
    stakes: 'Compliance exposure, and a client who stops trusting your shortlist.',
    fix: 'Fraudulent and duplicate applicants are stopped at screening, before a recruiter sees them.',
    client: '3D Recruit Education',
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
    quote: 'What impressed me was the honesty. Where a cheaper off-the-shelf tool already did the job, Aleksandar told us so.',
  },
  {
    slug: 'client-pipeline',
    title: 'A client pipeline that refills itself',
    scene: 'No time for business development this month. Again.',
    stakes: 'The pipeline is empty the week your biggest client leaves.',
    fix: 'Automated outreach books qualified client conversations onto your calendar.',
    client: 'Gresham Hunt',
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
    quote: 'Friday used to be the day we chased timesheets. Now it’s the day we get back on the phone to candidates.',
  },
];
