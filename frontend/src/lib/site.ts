/** Primary domain (GoDaddy DNS -> Vercel since 14 Oct 2026). NEXT_PUBLIC_SITE_URL overrides it if set. */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vistavise.com.au";

export const siteConfig = {
  name: "VistaVise",
  shortName: "VistaVise",
  url: SITE_URL,
  description:
    "Premium Business Analysis mentorship, portfolio building, interview preparation, and job-ready career support in Melbourne.",
  email: "info@vistavise.com.au",
  phone: "+61 470 259 366",
  location: "Melbourne, Australia",
  bookingUrl: "https://calendly.com/contact-vistavise/30min",
  /** Podcast platform links for The BA Lounge Podcast. Platforms left empty are hidden on the site. */
  podcastLinks: {
    youtube: "https://www.youtube.com/@analystperspectives",
    spotify: "",
    applePodcasts: "",
  },
  /** Social share image: the VistaVise logo on white (public/brand/vistavise-og.png). */
  ogImage: `${SITE_URL}/brand/vistavise-og.png`,
};

export const insightCategories = [
  "Business Analysis",
  "Strategic Consulting",
  "Project Delivery",
  "Career Growth",
  "Student Guidance",
  "Australian Pathways",
  "Migration Planning",
  "Professional Development",
] as const;

export type InsightCategory = (typeof insightCategories)[number];
