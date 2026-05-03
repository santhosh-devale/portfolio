export const profile = {
  name: 'Santhosh Devale',
  role: 'Support Field Manager',
  company: '10BedICU · eGov Foundation',
  client: 'HFWS, Govt. of Karnataka',
  location: 'Karnataka, India',
  education: 'MCA · BITM Ballari',
  email: 'santhosh.devale@gmail.com',
  phone: '+91 866 095 5230',
  github: 'https://github.com/santhosh-devale',
  linkedin: 'https://linkedin.com',
  status: 'Open to work',
  tagline: 'Healthcare technology professional with 4+ years experience bridging clinical operations and digital systems. Currently leading field support operations as Support Field Manager at 10BedICU, overseeing CARE 3.0 HMIS deployment across 43+ government hospitals in Karnataka.',
  about: [
    'With over 4 years in health-tech, I specialise in deploying and supporting TeleICU and HMIS systems in government hospitals across Karnataka — translating complex clinical workflows into intuitive digital experiences for doctors, nurses, and administrators.',
    'My work combines hands-on field training, technical troubleshooting, UI design, and web development. I am fluent in React/TypeScript and design tools like Figma, and I bridge the gap between product teams and clinical end-users effectively.',
  ],
  chips: ['Healthcare IT', 'TeleICU Systems', 'React.js', 'UI/UX Design', 'Tech Training', 'Clinical Workflows'],
  languages: 'Kannada · English · Hindi · Telugu · Marathi',
};

export const stats = [
  { num: 4, suffix: '+', label: '// Years_Experience' },
  { num: 43, suffix: '+', label: '// Hospitals_Supported' },
  { num: 2, suffix: '', label: '// TeleICU_HMIS_Products' },
  { num: 5, suffix: '', label: '// Languages_Spoken' },
];

export const typedPhrases = [
  'TeleICU | Support Field Manager',
  'Healthcare IT Professional',
  'React / TypeScript Developer',
  'Field Operations Leader',
  'Clinical Workflow Specialist',
];

export const experience = [
  {
    role: 'Support Field Manager',
    org: '10BedICU · eGov Foundation',
    period: 'Apr 2026 – Present',
    badges: ['Current', 'Promoted'],
    client: 'HFWS, Govt. of Karnataka · CARE 3.0 WMS',
    bullets: [
      'Promoted from Hub Engineer to Support Field Manager — overseeing field operations and support delivery across multiple hospital hubs in Karnataka.',
      'Lead and coordinate field support teams, ensuring timely resolution of TeleICU and HMIS issues across government hospitals.',
      'Manage end-to-end support workflows: escalation handling, SLA tracking, and on-ground team coordination.',
      'Act as primary point of contact between hospital staff, district teams, and the central product/engineering team.',
      'Drive continuous improvement in training quality, field processes, and stakeholder communication.',
    ],
    tags: ['Field Operations', 'SLA Management', 'Stakeholder Comms', 'CARE 3.0'],
    current: true,
  },
  {
    role: 'Hub Engineer (Program Engineer)',
    org: '10BedICU · eGov Foundation',
    period: 'Feb 2024 – Apr 2026',
    badges: [],
    client: 'HFWS, Govt. of Karnataka · CARE 3.0 WMS',
    bullets: [
      'Conducted end-user training on CARE 3.0 for ICU doctors and nurses across 43+ government hospitals in Karnataka.',
      'Provided on-site and remote technical support ensuring smooth day-to-day ICU workflows.',
      'Assisted hospitals with ABHA integration, patient registration, admission, clinical documentation, and discharge.',
      'Supported critical ICU modules: vitals monitoring, doctor notes, and clinical documentation.',
      'Collected structured field-level feedback and relayed to product/dev teams for continuous platform improvement.',
      'Contributed to the 10BedICU website built on Webflow, along with design, video editing, and training content creation.',
    ],
    tags: ['ABHA Integration', 'Clinical Training', 'Webflow', 'Field Support'],
    current: false,
  },
  {
    role: 'Tech Support Engineer',
    org: 'District Hospital Ballari',
    period: 'Jun 2021 – Feb 2024',
    badges: [],
    client: 'Govt. of Karnataka · eHospital · K2 Portal',
    bullets: [
      'Delivered end-user training and on-ground support for eHospital modules: OPD/IPD workflows, appointments, billing, and reports.',
      'Supported clinical staff in effective use of the K2 portal for data entry and operational reporting.',
      'Managed digital operations for District Hospital Ballari Portal — content updates, service listings, and data visibility.',
      'Resolved portal-related issues for doctors, nurses, receptionists, lab technicians, and admin staff.',
    ],
    tags: ['eHospital', 'OPD/IPD', 'End-User Training', 'K2 Portal'],
    current: false,
  },
];

export const projects = [
  { name: 'DHB', lang: 'JavaScript', langColor: '#f7df1e', desc: 'A hospital operations dashboard and monitoring experience for digital health teams.', stars: null, fork: null },
  { name: 'Fhir Dental Demo Backend', lang: 'JavaScript', langColor: '#f7df1e', desc: 'Backend services for a FHIR-based dental demo application.', stars: null, fork: null },
  { name: 'Fhir Dental Demo Front End', lang: 'JavaScript', langColor: '#f7df1e', desc: 'Frontend experience for a FHIR-powered dental demo user interface.', stars: null, fork: null },
  { name: 'Pupilfirst', lang: 'Ruby', langColor: '#cc342d', desc: 'A learning management system for asynchronous online schools with task-based workflows.', stars: null, fork: 'pupilfirst/pupilfirst' },
  { name: 'Ohcnetwork / Care Fe', lang: 'TypeScript', langColor: '#3178c6', desc: 'Care is a Digital Public Good enabling TeleICU and decentralised healthcare capacity management.', stars: 601, fork: null },
  { name: '10bedicu / Care Fe', lang: 'TypeScript', langColor: '#3178c6', desc: 'Forked from ohcnetwork/care_fe with a deployment-ready TeleICU interface.', stars: 2, fork: 'ohcnetwork/care_fe' },
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: 'code',
    items: [
      { name: 'JavaScript / TypeScript', pct: 85 },
      { name: 'React.js', pct: 82 },
      { name: 'HTML & CSS', pct: 88 },
    ],
  },
  {
    title: 'Design Tools',
    icon: 'pen',
    items: [
      { name: 'Figma', pct: 80 },
      { name: 'Webflow', pct: 85 },
      { name: 'Corel Draw', pct: 78 },
      { name: 'Canva', pct: 90 },
    ],
  },
  {
    title: 'Dev Tools & APIs',
    icon: 'terminal',
    items: [
      { name: 'GitHub / Git', pct: 80 },
      { name: 'Postman / HTTP', pct: 75 },
      { name: 'REST APIs', pct: 72 },
    ],
  },
  {
    title: 'Systems & Platforms',
    icon: 'monitor',
    items: [
      { name: 'TeleICU Systems', pct: 92 },
      { name: 'Windows / Linux', pct: 88 },
      { name: 'Technical Training', pct: 95 },
    ],
  },
];

export const domainExpertise = [
  'Clinical Workflow Analysis', 'TeleICU Implementation', 'End-User Training',
  'Technical Documentation', 'Field Support', 'ABHA Integration',
  'Hospital Operations', 'Stakeholder Communication', 'Webflow', 'Video Editing',
];

export const education = [
  {
    degree: 'Master of Computer Application',
    short: 'MCA',
    inst: 'Ballari Institute of Technology and Management',
    loc: 'Ballari, Karnataka',
    year: '2010 – 2013',
    tags: ['Computer Science', 'Software Engineering', 'Algorithms', 'Databases', 'Networking', 'System Design'],
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    inst: 'National College, Ballari',
    loc: 'Ballari, Karnataka',
    year: '2007 – 2010',
    tags: ['Computer Applications', 'Web Development', 'Database Management', 'OOP', 'Operating Systems', 'Networking'],
  },
];
