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
  { label: "Insights", href: "/insights" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

export const heroFeatureCards = [
  {
    title: "Practical training",
    note: "Structured learning that feels relevant to the work you want to do.",
  },
  {
    title: "1:1 mentorship",
    note: "Guidance shaped around confidence, portfolio quality, and real questions.",
  },
  {
    title: "Melbourne community",
    note: "A local support system that keeps momentum going beyond one session.",
  },
];

export const helpAreas: HelpArea[] = [
  {
    title: "Business Analysis Mentorship",
    description: "Learn the craft, build delivery confidence, and become job-ready with practical guidance.",
    href: "/services/business-analysis-mentorship",
  },
  {
    title: "Student Support",
    description: "Make clearer study and career decisions with steady support through your next chapter.",
    href: "/services/migrant-support",
  },
  {
    title: "Migrant Support",
    description: "Navigate relocation, local expectations, and professional planning with more confidence.",
    href: "/services/migrant-support",
  },
];

export const aboutPreviewPillars = [
  {
    title: "Mission",
    description: "Make professional growth feel clear, supported, and achievable from the first conversation.",
  },
  {
    title: "Purpose",
    description: "Translate uncertainty into a practical plan people can actually follow through on.",
  },
  {
    title: "Community",
    description: "Build confidence through mentoring, accountability, and local connections in Melbourne.",
  },
  {
    title: "Growth",
    description: "Support each step from learning and practice through to applications, interviews, and career momentum.",
  },
];

export const focusSections: FocusSection[] = [
  {
    eyebrow: "Business Analysis Mentorship",
    title: "Build the thinking, language, and confidence behind strong analysis work.",
    description:
      "From requirements and stakeholder communication to portfolio framing and interview preparation, the support is designed to make you useful in real delivery environments.",
    cards: [
      {
        title: "Foundations that transfer",
        description: "Requirements, user stories, process mapping, and stakeholder alignment explained in practical terms.",
      },
      {
        title: "Practice with feedback",
        description: "Work through real scenarios, case-style exercises, and portfolio material with direct guidance.",
      },
      {
        title: "Career readiness",
        description: "Sharpen your resume, interview stories, and job-market positioning for business analysis roles.",
      },
    ],
    href: "/services/business-analysis-mentorship",
    ctaLabel: "Explore Business Analysis Mentorship",
  },
  {
    eyebrow: "Student Support",
    title: "Stay steady while making study, career, and confidence-building decisions.",
    description:
      "VistaVise supports students who want more than advice. The goal is clear direction, useful planning, and a stronger sense of what comes next.",
    cards: [
      {
        title: "Course and pathway clarity",
        description: "Understand how your current studies connect to future work and what skills matter most.",
      },
      {
        title: "Professional confidence",
        description: "Develop communication, presentation, and networking habits that help you show up well.",
      },
      {
        title: "Next-step planning",
        description: "Create a realistic plan for internships, job-readiness, and the transition into professional life.",
      },
    ],
    href: "/services/migrant-support",
    ctaLabel: "See Student & Transition Support",
  },
  {
    eyebrow: "Migrant Support",
    title: "Build clarity around relocation, career direction, and settling into life in Australia.",
    description:
      "The support stays practical: local context, career planning, and a calmer structure for decisions that can otherwise feel overwhelming.",
    cards: [
      {
        title: "Local orientation",
        description: "Make sense of expectations, communication norms, and the professional context around you.",
      },
      {
        title: "Career transition support",
        description: "Translate experience, identify realistic next moves, and prepare for the Australian market.",
      },
      {
        title: "Personal stability",
        description: "Create a more manageable plan for life, work, and community as your situation evolves.",
      },
    ],
    href: "/services/migrant-support",
    ctaLabel: "Explore Migrant Support",
  },
];

export const services: Service[] = [
  {
    slug: "business-analysis-mentorship",
    title: "Business Analysis Mentorship",
    shortTitle: "BA Mentorship",
    summary: "Practical training, project-style practice, and 1:1 support for aspiring and early-career business analysts.",
    description:
      "A premium mentoring track for people who want to understand business analysis deeply, present their work confidently, and become job-ready without guesswork.",
    image: "/images/analysis-dashboard.png",
    eyebrow: "Service 01",
    ctaLabel: "View mentorship details",
    audience: "For aspiring analysts, career-switchers, and professionals who want structured BA support.",
    outcomes: [
      "Stronger requirements and stakeholder thinking",
      "Portfolio and case-study confidence",
      "Clearer interview and job-market positioning",
    ],
    detailSections: [
      {
        title: "What we focus on",
        body: [
          "We cover the language, structure, and delivery mindset behind strong business analysis work. That includes requirements gathering, process mapping, stakeholder conversations, documentation quality, and the ability to explain your thinking clearly.",
          "The work is intentionally practical. Instead of abstract theory, you build confidence through examples, discussions, and guided exercises that mirror real project situations.",
        ],
      },
      {
        title: "How support feels",
        body: [
          "Sessions are direct, encouraging, and tailored to your current level. If you are changing careers, we help connect your existing experience to BA expectations. If you are early in your journey, we help sharpen your fundamentals and presentation.",
        ],
      },
    ],
  },
  {
    slug: "mentoring-and-coaching",
    title: "Mentoring & Coaching",
    shortTitle: "Coaching",
    summary: "Thoughtful 1:1 support for professionals building clarity, confidence, and momentum in their careers.",
    description:
      "Personal guidance for people who want a stronger sense of direction, better communication, and practical support while navigating growth.",
    image: "/images/discovery-board.png",
    eyebrow: "Service 02",
    ctaLabel: "Explore coaching support",
    audience: "For professionals, students, and emerging leaders who want tailored career guidance.",
    outcomes: [
      "Stronger self-positioning and communication",
      "Clearer decision-making during transition points",
      "Better follow-through on goals that matter",
    ],
    detailSections: [
      {
        title: "What this support covers",
        body: [
          "Mentoring and coaching can include professional confidence, communication habits, interview preparation, portfolio review, accountability, and practical planning around your next move.",
          "The emphasis is not motivational language for its own sake. It is useful support that helps you think more clearly and act with more confidence.",
        ],
      },
      {
        title: "Who it helps most",
        body: [
          "This is especially valuable when you feel capable but need sharper structure, better feedback, or a calmer way to navigate uncertainty. The goal is always progress that feels realistic and sustainable.",
        ],
      },
    ],
  },
  {
    slug: "migrant-support",
    title: "Migrant Support",
    shortTitle: "Migrant Support",
    summary: "Guidance for study, transition, work readiness, and community-building in Australia.",
    description:
      "A supportive service for migrants and students who need practical structure around settling in, navigating options, and building professional momentum in Australia.",
    image: "/images/strategy-roadmap.png",
    eyebrow: "Service 03",
    ctaLabel: "See migrant support",
    audience: "For migrants, international students, and families navigating work, study, and transition decisions.",
    outcomes: [
      "Clearer pathway planning and local context",
      "Practical career-readiness support",
      "More confidence in day-to-day transition decisions",
    ],
    detailSections: [
      {
        title: "What migrant support includes",
        body: [
          "This service combines practical guidance for settling in with professional support for study, work, and long-term direction. We look at what is urgent now, what can wait, and what structure will make the biggest difference.",
          "Student support now lives here so the guidance stays in one coherent pathway. That means course direction, confidence-building, job readiness, local expectations, and transition planning are all handled together rather than as separate fragments.",
        ],
      },
      {
        title: "Why clients value it",
        body: [
          "The experience of moving countries or adapting to a new environment can make every decision feel heavier than it needs to. VistaVise helps create a more grounded view of options, responsibilities, and the next practical move.",
        ],
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "VistaVise turned a very confusing career transition into a plan I could actually follow. The support felt honest, practical, and reassuring at the same time.",
    name: "Priya Sharma",
    role: "Aspiring Business Analyst",
    highlight: "Clarity through transition",
  },
  {
    quote:
      "What stood out was the balance of structure and warmth. I never felt like I was getting generic consulting advice or recycled coaching scripts.",
    name: "David Nguyen",
    role: "Project Professional",
    highlight: "Human and professional",
  },
  {
    quote:
      "The sessions helped me connect my studies, portfolio, and interview stories into one clear direction. That changed how I presented myself.",
    name: "Mina Rahman",
    role: "Graduate Candidate",
    highlight: "Job-ready positioning",
  },
  {
    quote:
      "As a migrant trying to rebuild confidence in a new market, the guidance gave me structure and calm at exactly the right time.",
    name: "Arjun Patel",
    role: "Career Transition Client",
    highlight: "Confidence in a new market",
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

export const journeySteps = ["Learn", "Practice", "Apply", "Succeed"];
import { siteConfig } from "./site";
