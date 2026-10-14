import type { LegalSection } from "@/components/LegalPage";
import { siteConfig } from "./site";

/**
 * Plain-language legal pages. Written to match how the site actually works
 * (contact form via email, Calendly bookings, no analytics or advertising cookies).
 * The client should review these before relying on them.
 */
export const legalUpdated = "14 October 2026";

export const privacySections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `VistaVise Consulting ("VistaVise", "we", "us") provides Business Analysis mentorship, career guidance and related services from ${siteConfig.location}. We respect your privacy and handle personal information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "When you use our contact form we collect the details you choose to give us, such as your name, email address, current role, experience level, location, the help you are looking for and your message.",
      "When you book a consultation, the booking is handled by Calendly, which collects the details you enter there under its own privacy policy.",
      "If you email or call us, we keep the details you share so we can respond to you.",
      "We use privacy-friendly website analytics (Vercel Web Analytics) to count page visits and see which pages are useful. It does not use cookies and does not identify you personally.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use your information to reply to your enquiry, arrange and deliver mentoring sessions, and share information about our programs that you have asked for.",
      "We do not sell your personal information, and we do not use it for advertising.",
    ],
  },
  {
    heading: "How your information is stored and shared",
    body: [
      "Contact form messages are delivered to our inbox through an email delivery service. Our website is hosted by a third-party hosting provider. These providers may store data outside Australia and only process it to provide their service to us.",
      "We only share your information with others when it is needed to deliver our services, or when the law requires it.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `You can ask to see or correct the personal information we hold about you, or ask us to delete it, by emailing ${siteConfig.email}. If you have a privacy concern, contact us first and we will respond as soon as we can. You can also contact the Office of the Australian Information Commissioner (OAIC).`,
    ],
  },
  {
    heading: "Contact",
    body: [`For any privacy question, email ${siteConfig.email} or call ${siteConfig.phone}.`],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "Using this website",
    body: [
      "By using this website you agree to these terms. The content is provided for general information about VistaVise and our mentoring programs.",
    ],
  },
  {
    heading: "Our services",
    body: [
      "Mentoring, coaching, templates and other resources are designed to help you build practical Business Analysis skills and career confidence. Outcomes depend on many factors, so we cannot guarantee a job, interview or specific result.",
      "Program details, pricing and schedules are confirmed with you directly before you commit to any paid service.",
    ],
  },
  {
    heading: "Content and materials",
    body: [
      "The text, templates, images and other materials on this website and in our programs belong to VistaVise or are used with permission. You may use materials we give you for your own learning and job search, but please do not copy, resell or republish them without our written permission.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "Our website links to other services such as Calendly, YouTube and social media platforms. We are not responsible for the content or practices of those sites.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "We take care to keep the information on this website accurate, but it may change and is provided without warranties. To the extent allowed by law, including the Australian Consumer Law, VistaVise is not liable for any loss arising from your use of this website.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${siteConfig.email}.`],
  },
];

export const cookieSections: LegalSection[] = [
  {
    heading: "Our approach",
    body: [
      "This website does not use advertising or analytics cookies, and it does not track you across other websites. Our visit counts come from a cookie-free analytics tool.",
    ],
  },
  {
    heading: "Cookies we may use",
    body: [
      "Our hosting provider and content management system may set small technical cookies that are needed for the website to work securely, for example when our team previews content before it is published. These do not identify you personally.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "If you click through to Calendly, YouTube or social media platforms, those services may set their own cookies under their own policies.",
    ],
  },
  {
    heading: "Managing cookies",
    body: [
      "You can block or delete cookies in your browser settings. The website will still work if you do.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about cookies can be sent to ${siteConfig.email}.`],
  },
];
