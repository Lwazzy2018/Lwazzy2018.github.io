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
  location: 'South Africa',
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
  // Demo logins shown publicly on the card. Only use throwaway demo accounts here,
  // never a real or admin password you use anywhere else.
  demo?: { role: string; username: string; password: string }[]
  demoNote?: string // a short warning shown under the demo logins
  comingSoon?: boolean // true shows a "Coming soon" placeholder card
}

// Every project here appears in the Projects section and in the navigation
// bar's Projects menu. To add a real project, fill in its fields and delete
// the line `comingSoon: true`. See README.md for an example.
export const projects: Project[] = [
    {
    id: 'owen-tours',
    name: 'Owen Tours and Travel',
    short: 'Tour booking platform',
    problem:
      'A Mpumalanga tour company took bookings through Instagram and WhatsApp, with no seat tracking and deposits checked by hand. I built a booking platform where customers book trips and pay deposits online, and the admin manages trips, bookings and a gallery of previous trips.',
    role: 'Full-Stack Developer',
        year: '2026',
    image: asset('img/owen-tours.png.png'),
    tech: ['Flutter', 'ASP.NET Core', 'Supabase', 'PostgreSQL', 'PayFast', 'Docker'],
    links: {
      github: 'https://github.com/Lwazzy2018/owen-tours',
      live: 'https://owen-tours-demo-web.onrender.com',
    },
  },
      {
    id: 'campus-coupon',
    name: 'Campus Coupon',
    short: 'Student rewards app',
    problem:
      'Central University of Technology (Welkom campus) struggled with poor event attendance, which sometimes led to over-catering and wasted money. Campus Coupon gives students points for attending, which they redeem for cafeteria meals, while staff manage events, attendance and redemptions in a web portal. Team project (ITC327W, Prominent Programmers).',
    role: 'WIL Group project',
    year: '2026',
    image: asset('img/campus-coupon.png'),
    tech: ['Flutter', 'ASP.NET Core MVC', 'Supabase', 'PostgreSQL'],
    links: {
      github: 'https://github.com/Lwazzy2018/campus-coupon',
      live: 'https://campus-coupon-admin.onrender.com',
    },
    demo: [
      { role: 'Admin', username: 'Lwazi@cut.ac.za', password: 'Lwazzy@2002!' },
      { role: 'Cafeteria', username: 'caf@cut.ac.za', password: 'Lwazzy@2002!' },
    ],
    demoNote:
      'Please look around but do not add, edit or delete anything on the admin side. This is a shared demo, and changes affect everyone who visits after you.',
  },
  
  {
    id: 'cyclia',
    name: 'Cyclia',
    short: 'AI menstrual health app',
    problem:
      'Period-tracking apps rarely explain what people are feeling, and partners are often left guessing. Cyclia predicts cycles (personal after three cycles), has an AI health assistant that answers in 6 South African languages and refers emergencies to SA help numbers, and lets users choose exactly what a linked partner can see. Built with POPIA consent and Johannesburg data storage.',
    role: 'Full-Stack Developer',
    year: '2026',
    image: asset('img/cyclia.png'),
    tech: ['Flutter', 'ASP.NET Core 8', 'Firebase', 'Cloud Firestore', 'Gemini API', 'Docker'],
    links: {
      github: 'https://github.com/Lwazzy2018/cyclia',
      live: 'https://cyclia-ottp.onrender.com',
    },
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
 
]

export const skills = [
  // Mobile & web
  'Flutter',
  'Dart',
  'React',
  'TypeScript',
  'Tailwind CSS',
  // Back end
  'C#',
  'ASP.NET Core',
  'REST APIs',
  'Entity Framework Core',
  'Authentication (JWT)',
  // Data & cloud
  'Firebase (Auth & Firestore)',
  'Supabase',
  'PostgreSQL',
  'SQL Server',
  'Docker',
  'Render (cloud hosting)',
  // AI
  'AI integration (Gemini / OpenAI APIs)',
  // Ways of working
  'Git & GitHub',
  'Automated testing',
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
