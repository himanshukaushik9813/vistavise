import { insightCategories, type InsightCategory } from "./site";

export type Author = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
};

export type Category = {
  title: InsightCategory | string;
  slug: string;
  description: string;
};

export type Article = {
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  category: Category;
  tags: string[];
  author: Author;
  publishedAt: string;
  readingTime: number;
  image?: string;
  body: Array<Record<string, unknown>>;
  pullQuote?: string;
  callout?: {
    title: string;
    body: string;
  };
  seo?: {
    title?: string;
    description?: string;
  };
};

export type PodcastEntry = {
  title: string;
  description: string;
  thumbnail?: string;
  episodeUrl: string;
  publishedAt: string;
};

const author: Author = {
  name: "VistaVise Consulting",
  role: "Strategic advisory team",
  bio: "Practical consulting guidance across business analysis, project delivery, mentoring, and Australian pathway decisions.",
};

export const categories: Category[] = insightCategories.map((title) => ({
  title,
  slug: title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  description: `${title} guidance shaped for calm, practical decision-making.`,
}));

function category(title: InsightCategory): Category {
  return categories.find((item) => item.title === title) || categories[0];
}

function block(text: string, style = "normal") {
  return {
    _type: "block",
    style,
    children: [{ _type: "span", text, marks: [] }],
    markDefs: [],
  };
}

export const fallbackArticles: Article[] = [
  {
    title: "A calm framework for better business analysis decisions",
    slug: "calm-framework-business-analysis-decisions",
    subtitle:
      "How to reduce ambiguity, align stakeholders, and turn scattered requirements into practical delivery direction.",
    summary:
      "A structured business analysis framework for teams that need clearer requirements, better stakeholder alignment, and less decision noise.",
    category: category("Business Analysis"),
    tags: ["Requirements", "Stakeholders", "Decision Clarity"],
    author,
    publishedAt: "2026-04-12T09:00:00.000Z",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    pullQuote: "Good analysis is not more documentation. It is better shared understanding.",
    callout: {
      title: "VistaVise lens",
      body: "Start by defining the decision the work must support, then map requirements, risks, and trade-offs around that decision.",
    },
    body: [
      block("Business analysis becomes valuable when it turns uncertainty into shared direction.", "lead"),
      block("Many projects do not fail because teams lack effort. They stall because requirements, priorities, and ownership are not made visible early enough."),
      block("A calm framework begins with three questions: what decision needs to be made, who needs confidence in that decision, and what evidence is missing?"),
      block("From there, teams can map requirements, document assumptions, surface risks, and align stakeholders around the practical next step."),
    ],
  },
  {
    title: "Strategic consulting with restraint: choosing what not to do",
    slug: "strategic-consulting-with-restraint",
    subtitle:
      "Premium strategy is not about adding more initiatives. It is about choosing the few moves that create meaningful progress.",
    summary:
      "A practical view of strategic restraint for businesses and professionals who need sharper priorities.",
    category: category("Strategic Consulting"),
    tags: ["Strategy", "Prioritisation", "Growth"],
    author,
    publishedAt: "2026-04-20T09:00:00.000Z",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    pullQuote: "A better strategy often feels quieter, clearer, and easier to explain.",
    callout: {
      title: "Practical test",
      body: "If a strategic priority cannot change behaviour this quarter, it may not be a priority yet.",
    },
    body: [
      block("Strategic consulting should create focus, not a longer list of things to worry about.", "lead"),
      block("The most useful advisory work helps clients identify what matters, what can wait, and what needs to be stopped entirely."),
      block("Restraint is especially important for growing businesses, career transitions, and migration pathway planning because every decision carries attention cost."),
      block("VistaVise approaches strategy through clarity, timing, readiness, and practical follow-through."),
    ],
  },
  {
    title: "Navigating Australian pathways with more confidence",
    slug: "navigating-australian-pathways-with-confidence",
    subtitle:
      "A practical guide for students and migrants making study, career, and transition decisions in Australia.",
    summary:
      "A supportive roadmap for turning study, career, and settlement uncertainty into structured next steps.",
    category: category("Australian Pathways"),
    tags: ["Australia", "Students", "Migration", "Career"],
    author,
    publishedAt: "2026-05-02T09:00:00.000Z",
    readingTime: 7,
    image: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=1600&q=85",
    pullQuote: "Confidence grows when the pathway becomes visible.",
    callout: {
      title: "Pathway map",
      body: "Separate decisions into study direction, career readiness, transition support, and long-term clarity.",
    },
    body: [
      block("Moving through a new country, study system, or professional market can feel overwhelming when every question is connected.", "lead"),
      block("A structured pathway helps separate what needs attention now from what can be prepared over time."),
      block("For students and migrants, practical progress often begins with understanding options, building local-market readiness, and creating a realistic next-step plan."),
      block("Support should feel warm, direct, and usable rather than abstract or generic."),
    ],
  },
  {
    title: "Project delivery rhythm for teams that need less noise",
    slug: "project-delivery-rhythm-less-noise",
    subtitle:
      "How project leaders can create momentum through scope clarity, risk visibility, and practical governance.",
    summary:
      "A delivery rhythm for teams that need better structure without heavy process or unnecessary ceremony.",
    category: category("Project Delivery"),
    tags: ["Delivery", "Governance", "Risk"],
    author,
    publishedAt: "2026-05-18T09:00:00.000Z",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
    pullQuote: "Delivery improves when teams can see the work, the risk, and the next decision.",
    callout: {
      title: "Delivery principle",
      body: "Keep governance lightweight, visible, and connected to decisions people actually need to make.",
    },
    body: [
      block("Project management does not need to feel heavy to be effective.", "lead"),
      block("The best delivery rhythm gives teams enough structure to move with confidence while avoiding process theatre."),
      block("That means clear scope, practical risk tracking, visible dependencies, and regular decision points."),
      block("VistaVise supports delivery by connecting plans to real-world action and follow-through."),
    ],
  },
];

export const fallbackPodcastEntries: PodcastEntry[] = [
  {
    title: "Breaking Into Business Analysis",
    description: "Practical advice for building a BA career with clarity, confidence, and stronger positioning.",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    episodeUrl: "https://www.youtube.com/@analystperspectives",
    publishedAt: "2026-01-09T06:26:10Z",
  },
  {
    title: "Migrant Success Stories",
    description: "Supportive reflections on building career momentum in Australia while navigating change.",
    thumbnail: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=1200&q=85",
    episodeUrl: "https://www.youtube.com/@analystperspectives",
    publishedAt: "2026-01-31T00:37:03Z",
  },
];

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 220));
}
