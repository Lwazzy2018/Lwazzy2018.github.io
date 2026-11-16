// All the portfolio's text and links live here.
// Edit this file to change content; the components read from it.

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Lwazi Nkambule',
  title: 'Junior Software Developer',
  specialty: 'Flutter & C#',
  heading: 'Building digital experiences through code.',
  intro:
    'Junior Software Developer passionate about building mobile and web applications using Flutter and C#.',
  location: 'Nelspruit, South Africa',
  availability: 'Available January 2027',
  workPreference: 'On-site, hybrid or remote',
  photo: asset('img/profile-hero.jpg'),
  avatar: asset('img/profile.jpg'),
  cv: asset('files/Lwazi-Nkambule-CV.pdf'),
  cvFileName: 'Lwazi-Nkambule-CV.pdf',
}

export const contact = {
  email: 'nkambulelwazi2002@gmail.com',
  phone: '063 285 3531',
  phoneHref: 'tel:+27632853531',
  linkedin: 'https://www.linkedin.com/in/lwazi-nkambule-b959b5415',
  linkedinLabel: 'linkedin.com/in/lwazi-nkambule',
  github: 'https://github.com/Lwazzy2018',
  githubLabel: 'github.com/Lwazzy2018',
}

// "Projects" is shown as its own dropdown menu, built from the projects list below.
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  id: string // used in the page link, e.g. #project-1 (letters, numbers, hyphens)
  name: string
  short: string // a few words, shown in the navigation bar's Projects menu
  problem: string // the real-life problem it solves, in under 3 sentences
  role?: string // e.g. 'Flutter Developer'
  year?: string // e.g. '2026'
  tech?: string[] // e.g. ['Flutter', 'Supabase']
  image?: string // e.g. asset('img/my-project.jpg'), put the file in public/img
  links?: { github?: string; live?: string }
  comingSoon?: boolean // true shows a "Coming soon" placeholder card
}

// Every project here appears in the Projects section and in the navigation
// bar's Projects menu. To add a real project, fill in its fields and delete
// the line `comingSoon: true`. See README.md for an example.
export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Project One',
    short: 'Coming soon',
    problem: 'Details coming soon.',
    comingSoon: true,
  },
  {
    id: 'project-2',
    name: 'Project Two',
    short: 'Coming soon',
    problem: 'Details coming soon.',
    comingSoon: true,
  },
  {
    id: 'project-3',
    name: 'Project Three',
    short: 'Coming soon',
    problem: 'Details coming soon.',
    comingSoon: true,
  },
  {
    id: 'project-4',
    name: 'Project Four',
    short: 'Coming soon',
    problem: 'Details coming soon.',
    comingSoon: true,
  },
]

export const experience = [
  {
    role: 'ICT Intern (Volunteer)',
    org: 'KwaZangwa (Pty) Ltd',
    period: 'March 2025 – Present',
    current: true,
    description:
      'Supporting ICT operations and developing practical technical skills through hands-on experience.',
  },
]

export const education = [
  {
    school: 'Central University of Technology (CUT)',
    qualification: 'Diploma in Information Technology',
    period: '2024 – December 2026',
  },
  {
    school: 'Lungisani Secondary School',
    qualification: "National Senior Certificate — Bachelor's Pass",
    period: '2021',
  },
]

export const skills = [
  'Flutter',
  'Dart',
  'C#',
  'ASP.NET Core',
  'Entity Framework Core',
  'Supabase',
  'PostgreSQL',
  'SQL Server',
  'Git',
  'Hardware Repair',
]

export const certificates = [
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'June 2025',
    image: asset('certs/data-analytics-essentials.jpg'),
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'April 2025',
    image: asset('certs/intro-to-data-science.jpg'),
  },
]
