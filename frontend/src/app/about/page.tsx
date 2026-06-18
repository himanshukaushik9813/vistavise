import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import MeetAjaySection from "@/components/MeetAjaySection";
import MethodsSection from "@/components/MethodsSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import RevealText from "@/components/motion/RevealText";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { calendlyUrl } from "@/lib/vistavise-data";

export const metadata: Metadata = {
  title: "About | VistaVise",
  description:
    "Learn about VistaVise, Ajay's founder story, professional journey, mentoring philosophy, strengths, and client experience.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const journey = [
  "Business analysis and stakeholder clarity",
  "Professional mentoring and coaching support",
  "Student planning and career-readiness guidance",
  "Migrant transition support in Melbourne",
];

const experiencePoints = [
  "A people-first style that still keeps standards high",
  "Support shaped around confidence, communication, and practical execution",
  "Community-minded guidance that feels personal rather than transactional",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="about-page-hero">
          <div className="container-custom about-page-grid">
            <div>
              <p className="eyebrow">About VistaVise</p>
              <RevealText
                as="h1"
                text="Guidance built for people who want clarity, structure, and a more confident future."
                variant="premiumHeading"
                float
              />
              <p>
                VistaVise exists to help people move through important professional and life decisions with more confidence, better structure, and genuine human support.
              </p>
              <div className="about-page-actions">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a Consultation
                  <ArrowRightIcon size={14} />
                </a>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="about-page-panel surface-card-strong">
              <p className="eyebrow">Mission</p>
              <h2>Make growth feel more achievable from the first real conversation.</h2>
              <p>
                The VistaVise approach combines professional standards with warmth, community, and practical next-step thinking so clients feel supported without being overwhelmed.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding about-story-section">
          <div className="container-custom about-story-grid">
            <div>
              <p className="eyebrow">Founder Story</p>
              <h2>Ajay built VistaVise to offer the kind of guidance many people struggle to find.</h2>
            </div>
            <div className="about-story-copy">
              <p>
                Too often, people facing career change, study uncertainty, or migration decisions are left choosing between generic motivational advice and overly corporate consulting language. VistaVise was created as a better middle ground.
              </p>
              <p>
                The goal is not to impress with complexity. It is to make progress feel clear, supported, and genuinely possible through thoughtful mentoring, practical structure, and honest communication.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding about-experience-section">
          <div className="container-custom about-experience-grid">
            <div className="about-experience-panel surface-card-strong">
              <p className="eyebrow">Experience</p>
              <h2>Professional guidance grounded in delivery, mentorship, and transition support.</h2>
              <div className="about-experience-list">
                {experiencePoints.map((point) => (
                  <div key={point} className="about-experience-item">
                    <CheckCircleIcon size={16} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-journey-panel">
              <p className="eyebrow">Professional Journey</p>
              <div className="about-journey-list">
                {journey.map((item, index) => (
                  <div key={item} className="about-journey-item">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MethodsSection />
        <TestimonialsSection />
        <MeetAjaySection />
      </main>
      <Footer />

      <style>{`
        .about-page-hero {
          padding: 84px 0 36px;
        }

        .about-page-grid,
        .about-story-grid,
        .about-experience-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.54fr) minmax(320px, 0.46fr);
          gap: 28px;
          align-items: start;
        }

        .about-page-grid h1,
        .about-story-grid h2,
        .about-experience-panel h2 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .about-page-grid h1 {
          max-width: 880px;
          font-size: clamp(3rem, 5.4vw, 5rem);
        }

        .about-story-grid h2,
        .about-experience-panel h2 {
          font-size: clamp(2.15rem, 3vw, 3.35rem);
        }

        .about-page-grid p:not(.eyebrow),
        .about-story-copy p,
        .about-page-panel p:not(.eyebrow) {
          margin: 20px 0 0;
          color: var(--text-secondary);
          line-height: 1.84;
        }

        .about-page-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .about-page-panel,
        .about-experience-panel {
          padding: 28px;
          border-radius: 28px;
        }

        .about-story-copy {
          display: grid;
          gap: 0;
        }

        .about-experience-list,
        .about-journey-list {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .about-experience-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-secondary);
          line-height: 1.72;
        }

        .about-journey-item {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 14px;
          padding: 16px 0;
          border-top: 1px solid rgba(43, 45, 66, 0.08);
        }

        .about-journey-item:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .about-journey-item span {
          color: var(--primary-strong);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .about-journey-item p {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.72;
        }

        @media (max-width: 1024px) {
          .about-page-grid,
          .about-story-grid,
          .about-experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
