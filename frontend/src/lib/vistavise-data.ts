import { siteConfig } from "./site";

export type NavLink = {
  label: string;
  href: string;
};

export type HelpArea = {
  title: string;
  description: string;
  href: string;
};

export type FocusCard = {
  title: string;
  description: string;
};

export type FocusSection = {
  eyebrow: string;
  title: string;
  description: string;
  cards: FocusCard[];
  href: string;
  ctaLabel: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  image: string;
  eyebrow: string;
  ctaLabel: string;
  audience: string;
  outcomes: string[];
  detailSections: Array<{
    title: string;
    body: string[];
  }>;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  highlight: string;
};

export type Playlist = {
  title: string;
  description: string;
  category: "Business Analysis" | "Career Development" | "Migration & Community";
  platform: "YouTube" | "Spotify" | "Apple Podcasts";
  href: string;
};

export const calendlyUrl = siteConfig.bookingUrl;

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const heroFeatureCards = [
  {
    title: "Real-world BA practice",
    note: "Work through practical discovery, requirements, process, and stakeholder scenarios.",
  },
  {
    title: "Portfolio-first mentoring",
    note: "Turn guided exercises into proof of capability you can explain in interviews.",
  },
  {
    title: "Recruitment confidence",
    note: "Prepare your CV, stories, and interview answers for Business Analyst roles.",
  },
];

export const helpAreas: HelpArea[] = [
  {
    title: "Business Analysis Mentorship",
    description: "Learn practical BA skills through structured mentoring, simulations, and portfolio-ready projects.",
    href: "/services/business-analysis-mentorship",
  },
  {
    title: "Interview Preparation",
    description: "Build confident BA interview stories around stakeholders, requirements, process, and delivery.",
    href: "/services/interview-preparation",
  },
  {
    title: "BA Community",
    description: "Join a Melbourne-based learning network for accountability, articles, meetups, and shared momentum.",
    href: "/services/ba-community",
  },
];

export const aboutPreviewPillars = [
  {
    title: "Mission",
    description: "Help aspiring Business Analysts move from theory-heavy learning into practical, job-ready capability.",
  },
  {
    title: "Purpose",
    description: "Translate uncertainty into a structured BA learning path with real projects, feedback, and confidence.",
  },
  {
    title: "Community",
    description: "Create a supportive Melbourne mentorship network for learners, career-switchers, and early analysts.",
  },
  {
    title: "Growth",
    description: "Support each step from skills and portfolio work through to applications, interviews, and first-role momentum.",
  },
];

export const focusSections: FocusSection[] = [
  {
    eyebrow: "Business Analysis Mentorship",
    title: "Build the thinking, language, and confidence behind strong analysis work.",
    description:
      "From requirements and stakeholder communication to portfolio framing and interview preparation, VistaVise helps you practise the work Business Analysts actually do.",
    cards: [
      {
        title: "Foundations that transfer",
        description: "Requirements, user stories, process mapping, and stakeholder alignment explained in practical terms.",
      },
      {
        title: "Practice with feedback",
        description: "Work through realistic BA scenarios, case-style exercises, and portfolio material with direct guidance.",
      },
      {
        title: "Career readiness",
        description: "Sharpen your resume, interview stories, and job-market positioning for Business Analyst roles.",
      },
    ],
    href: "/services/business-analysis-mentorship",
    ctaLabel: "Explore Business Analysis Mentorship",
  },
];

export const services: Service[] = [
  {
    slug: "business-analysis-mentorship",
    title: "Business Analysis Mentorship",
    shortTitle: "BA Mentorship",
    summary: "A practical mentoring program for aspiring Business Analysts who want job-ready skills, confidence, and portfolio proof.",
    description:
      "Learn Business Analysis through guided practice, real-world simulations, portfolio projects, and calm 1:1 feedback.",
    image: "/images/business-analysis-mentoring-session.png",
    eyebrow: "Program 01",
    ctaLabel: "Learn More",
    audience: "For aspiring analysts, career-switchers, graduates, and early-career professionals preparing for BA roles.",
    outcomes: [
      "Clear understanding of BA responsibilities and deliverables",
      "Portfolio-ready project examples and interview stories",
      "Confidence with requirements, stakeholders, process, and documentation",
    ],
    detailSections: [
      {
        title: "What you will build",
        body: [
          "You will practise discovery, stakeholder conversations, requirement gathering, user stories, process mapping, and business problem framing through realistic project scenarios.",
          "The goal is not more theory. The goal is to help you explain what you can do, show how you think, and present credible examples during BA interviews.",
        ],
      },
      {
        title: "How mentoring works",
        body: [
          "Sessions are structured, direct, and personalised to your current background. We identify skill gaps, practise practical tasks, review your work, and turn your learning into a job-ready portfolio narrative.",
        ],
      },
    ],
  },
  {
    slug: "one-to-one-mentoring",
    title: "1:1 Mentoring",
    shortTitle: "1:1 Mentoring",
    summary: "Personalised guidance for learners who want direct feedback, accountability, and a clear weekly plan.",
    description:
      "Private mentoring sessions shaped around your background, goals, skill gaps, and next Business Analyst career milestone.",
    image: "/images/premium-mentoring-consultation.png",
    eyebrow: "Program 02",
    ctaLabel: "Learn More",
    audience: "For people who want tailored support instead of generic course content.",
    outcomes: [
      "A clear skill gap assessment",
      "Personalised weekly learning priorities",
      "Direct feedback on BA thinking, documents, and interview readiness",
    ],
    detailSections: [
      {
        title: "Personalised support",
        body: [
          "We start with your current background, confidence level, career goals, and practical constraints. From there, your mentoring plan focuses on the exact BA capabilities that need attention first.",
          "This can include requirements practice, documentation review, interview story development, tool confidence, or portfolio structure.",
        ],
      },
      {
        title: "Accountability without overwhelm",
        body: [
          "The experience is designed to feel calm and focused. You leave each session with useful feedback, a small number of clear next actions, and stronger confidence in how to keep progressing.",
        ],
      },
    ],
  },
  {
    slug: "interview-preparation",
    title: "Interview Preparation",
    shortTitle: "Interview Prep",
    summary: "Mock interviews and role-readiness support for aspiring Business Analysts preparing to enter the market.",
    description:
      "Prepare BA interview stories, practise role-specific questions, and learn how to explain your project thinking clearly.",
    image: "/images/interview-preparation-workspace.png",
    eyebrow: "Program 03",
    ctaLabel: "Learn More",
    audience: "For candidates applying for BA, junior BA, product, process, or project-adjacent roles.",
    outcomes: [
      "Stronger responses to BA scenario questions",
      "Clearer STAR stories connected to project work",
      "More confident explanation of requirements and stakeholder examples",
    ],
    detailSections: [
      {
        title: "Interview confidence",
        body: [
          "We practise the questions Business Analyst candidates often struggle with: stakeholder conflict, unclear requirements, prioritisation, process gaps, user stories, and how you would approach a business problem.",
          "Your answers become more specific, structured, and credible because they are connected to practical exercises and portfolio examples.",
        ],
      },
      {
        title: "Mock interview refinement",
        body: [
          "You receive direct feedback on clarity, confidence, structure, and examples. The aim is to reduce guesswork and help you sound like someone who understands the work, not just the terminology.",
        ],
      },
    ],
  },
  {
    slug: "resume-building",
    title: "Resume Building",
    shortTitle: "Resume",
    summary: "A sharper BA resume and LinkedIn profile that translate your background into relevant analyst capability.",
    description:
      "Position your experience, projects, transferable skills, and learning path in a way recruiters can understand quickly.",
    image: "/images/resume-building-career-roadmap.png",
    eyebrow: "Program 04",
    ctaLabel: "Learn More",
    audience: "For career-switchers, graduates, migrants, and professionals who need stronger BA positioning.",
    outcomes: [
      "A cleaner BA-focused resume structure",
      "Stronger project and achievement language",
      "LinkedIn positioning aligned with Business Analyst roles",
    ],
    detailSections: [
      {
        title: "Translate your background",
        body: [
          "Many aspiring analysts already have useful experience, but it is often hidden behind vague job titles or generic resume language. We help connect your background to BA-relevant skills and outcomes.",
          "Your resume is refined around clarity, evidence, project thinking, stakeholder value, and keywords that make sense for Business Analyst opportunities.",
        ],
      },
      {
        title: "Make your story easier to trust",
        body: [
          "The final output should feel professional, specific, and easy to discuss in interviews. It supports the same career narrative you use in your portfolio and mock interview preparation.",
        ],
      },
    ],
  },
  {
    slug: "templates-and-resources",
    title: "Templates & Resources",
    shortTitle: "Resources",
    summary: "Practical BA templates, examples, and learning resources that help you produce more professional work.",
    description:
      "Access structured templates for requirements, user stories, process mapping, stakeholder notes, and portfolio presentation.",
    image: "/images/stage-2.jpg",
    eyebrow: "Program 05",
    ctaLabel: "Learn More",
    audience: "For learners who want reusable BA assets and examples instead of starting from a blank page.",
    outcomes: [
      "Reusable BA document templates",
      "Clearer structure for practical exercises",
      "Better portfolio presentation and interview talking points",
    ],
    detailSections: [
      {
        title: "Resources that support practice",
        body: [
          "Templates help you understand how analysts structure information. You can use them to practise requirement notes, stakeholder summaries, user stories, process observations, and portfolio case studies.",
          "The resources are not shortcuts. They are scaffolds that help you learn the pattern of professional BA work faster.",
        ],
      },
      {
        title: "Built for portfolio clarity",
        body: [
          "Every useful template should help you explain your thinking. That means clean formatting, practical prompts, and a clear connection to business problems and stakeholder outcomes.",
        ],
      },
    ],
  },
  {
    slug: "ba-community",
    title: "BA Community",
    shortTitle: "Community",
    summary: "A supportive Business Analysis learning community for accountability, connection, articles, meetups, and shared progress.",
    description:
      "Connect with other learners through LinkedIn, WhatsApp, meetups, student success stories, and practical learning articles.",
    image: "/images/meet-ajay-boardroom.png",
    eyebrow: "Program 06",
    ctaLabel: "Learn More",
    audience: "For aspiring Business Analysts who want support, momentum, and a professional network around their learning.",
    outcomes: [
      "LinkedIn Community for professional updates and learning",
      "WhatsApp Community for accountability and support",
      "Meetups, student success stories, and learning articles",
    ],
    detailSections: [
      {
        title: "Community support",
        body: [
          "The BA Community is designed to reduce isolation while you build your skills. It brings together learners who want accountability, useful discussion, and a calmer way to stay motivated.",
          "Community touchpoints include LinkedIn Community updates, WhatsApp Community support, meetups, student success stories, and learning articles.",
        ],
      },
      {
        title: "Why it matters",
        body: [
          "Business Analysis is easier to learn when you can discuss examples, see how others approach the same challenge, and stay close to people working toward similar goals.",
        ],
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The mentoring helped me move from watching BA videos to actually producing requirements, user stories, and interview examples I could explain with confidence.",
    name: "Priya Sharma",
    role: "Aspiring Business Analyst",
    highlight: "Portfolio clarity",
  },
  {
    quote:
      "I had completed courses before, but VistaVise gave me structure, feedback, and practical simulations that made the Business Analyst role feel real.",
    name: "David Nguyen",
    role: "Career Switcher",
    highlight: "From theory to practice",
  },
  {
    quote:
      "The mock interviews changed how I presented myself. My answers became more specific, calmer, and connected to actual BA project thinking.",
    name: "Mina Rahman",
    role: "Graduate Candidate",
    highlight: "Interview confidence",
  },
  {
    quote:
      "The resume and portfolio support helped me translate my previous experience into BA language without sounding forced or generic.",
    name: "Arjun Patel",
    role: "Business Analysis Mentee",
    highlight: "Career positioning",
  },
];

export const podcastPlaylists: Playlist[] = [
  {
    title: "Business Analysis Foundations",
    description: "Requirements, stakeholder thinking, portfolio building, and the habits behind strong BA work.",
    category: "Business Analysis",
    platform: "YouTube",
    href: "https://www.youtube.com/@analystperspectives",
  },
  {
    title: "Career Growth Conversations",
    description: "Thoughtful episodes on confidence, positioning, professional communication, and next-step planning.",
    category: "Career Development",
    platform: "Spotify",
    href: "https://open.spotify.com",
  },
  {
    title: "Melbourne Mentor Notes",
    description: "Short reflections on job-readiness, mentoring, and building momentum in a new environment.",
    category: "Career Development",
    platform: "Apple Podcasts",
    href: "https://podcasts.apple.com",
  },
  {
    title: "Migrant Stories & Support",
    description: "Practical stories and grounded guidance for people navigating change, relocation, and community.",
    category: "Migration & Community",
    platform: "YouTube",
    href: "https://www.youtube.com/@analystperspectives",
  },
  {
    title: "Practical Strategy Sessions",
    description: "Conversations about decision-making, roadmaps, and turning ideas into a practical next step.",
    category: "Business Analysis",
    platform: "Spotify",
    href: "https://open.spotify.com",
  },
  {
    title: "Community & Confidence",
    description: "Supportive audio for students and migrants building belonging, clarity, and professional confidence.",
    category: "Migration & Community",
    platform: "Apple Podcasts",
    href: "https://podcasts.apple.com",
  },
];

export const journeySteps = ["Assess", "Build", "Prepare", "Land"];
