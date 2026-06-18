export const siteConfig = {
  name: "VistaVise",
  shortName: "VistaVise",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Premium professional development, business analysis mentorship, career guidance, and migrant support in Melbourne.",
  email: "info@vistavise.com.au",
  phone: "+61 470 259 366",
  location: "Melbourne, Australia",
  bookingUrl: "https://calendly.com",
  ogImage:
    "https://i.postimg.cc/qBxPJvJ2/Screenshot-2026-03-08-02-38-20-54-6012fa4d4ddec268fc5c7112cbb265e7.jpg",
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
