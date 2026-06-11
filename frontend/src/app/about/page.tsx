import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OwnerPortrait from "@/components/OwnerPortrait";
import { ArrowRightIcon, BriefcaseIcon, CheckCircleIcon, GlobeIcon, TargetIcon, UsersIcon } from "@/components/icons";
import RevealSection from "@/components/motion/RevealSection";
import RevealText from "@/components/motion/RevealText";
import TiltCard from "@/components/motion/TiltCard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | VistaVise Consulting",
  description:
    "Learn about VistaVise Consulting, its people-first consulting philosophy, professional background, values, and areas of expertise.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About | VistaVise Consulting",
    description:
      "A premium consulting practice built around clarity, structure, practical delivery, and human guidance.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
};

const values = [
  {
    icon: TargetIcon,
    title: "Clarity before activity",
    text: "VistaVise begins by defining what matters, what is unclear, and what decision needs support.",
  },
  {
    icon: BriefcaseIcon,
    title: "Practical delivery",
    text: "Advice is connected to action, governance, project rhythm, and realistic next steps.",
  },
  {
    icon: UsersIcon,
    title: "Human guidance",
    text: "Support stays warm, structured, and respectful of the uncertainty clients are navigating.",
  },
  {
    icon: GlobeIcon,
    title: "Australia pathways",
    text: "Students and migrants receive grounded guidance for study, career, transition, and settlement decisions.",
  },
];

const timeline = [
  "Business analysis and stakeholder alignment",
  "Strategic consulting and service positioning",
  "Project delivery, governance, and risk clarity",
  "Mentorship, coaching, and career development",
  "Student and migrant guidance in Australia",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="about-page-hero">
          <div className="container-custom about-page-grid">
            <RevealSection>
              <p className="eyebrow">About VistaVise</p>
              <RevealText
                as="h1"
                text="Strategic consulting shaped with care, clarity, and practical follow-through."
              />
              <p>
                VistaVise Consulting combines structured business thinking with a people-first
                advisory style for businesses, professionals, students, and migrants navigating
                important decisions in Australia.
              </p>
              <Link href="/#contact" className="btn-primary">
                Book a Consultation
                <ArrowRightIcon size={14} />
              </Link>
            </RevealSection>

            <TiltCard as="div" className="about-portrait-card premium-tilt-card" maxTilt={2.2}>
              <div className="about-portrait-frame">
                <OwnerPortrait
                  alt="VistaVise Consulting founder portrait"
                  sizes="(max-width: 900px) 80vw, 30vw"
                  objectPosition="center 14%"
                  rounded="260px 260px 32px 32px"
                />
              </div>
              <div className="about-portrait-copy">
                <span className="eyebrow">Founder Focus</span>
                <h2>Premium guidance that stays practical.</h2>
                <p>
                  The work is grounded in strategy, delivery, communication, and confidence-building
                  support.
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        <section className="about-story-section">
          <div className="container-custom about-story-grid">
            <RevealSection>
              <p className="eyebrow">Founder Story</p>
              <RevealText as="h2" text="Built for people who need more than generic advice." />
            </RevealSection>
            <RevealSection className="about-story-copy" delay={0.1}>
              <p>
                VistaVise was created to help people make clearer decisions at moments where business,
                career, project, and transition questions overlap.
              </p>
              <p>
                The philosophy is simple: reduce noise, structure the next step, and support progress
                in a way that feels professional, calm, and human.
              </p>
            </RevealSection>
          </div>
        </section>

        <section className="about-values-section">
          <div className="container-custom">
            <RevealSection className="about-values-head">
              <p className="eyebrow">Consulting Philosophy</p>
              <RevealText as="h2" text="What shapes every engagement." />
            </RevealSection>
            <div className="about-values-grid">
              {values.map((value) => (
                <TiltCard key={value.title} as="article" className="about-value-card premium-tilt-card" maxTilt={2}>
                  <span>
                    <value.icon size={18} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="about-timeline-section">
          <div className="container-custom about-timeline-grid">
            <RevealSection>
              <p className="eyebrow">Professional Background</p>
              <RevealText as="h2" text="Experience across analysis, delivery, mentorship, and transition support." />
            </RevealSection>
            <RevealSection className="about-timeline-list" delay={0.08}>
              {timeline.map((item, index) => (
                <div key={item} className="about-timeline-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                  <CheckCircleIcon size={16} />
                </div>
              ))}
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .about-page-hero {
          padding: var(--space-128) 0 var(--space-64);
        }

        .about-page-grid,
        .about-story-grid,
        .about-timeline-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.58fr) minmax(340px, 0.42fr);
          gap: var(--space-64);
          align-items: center;
        }

        .about-page-hero h1,
        .about-story-grid h2,
        .about-values-head h2,
        .about-timeline-grid h2 {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          line-height: 0.96;
          letter-spacing: -0.075em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .about-page-hero h1 {
          max-width: 820px;
          font-size: clamp(3.1rem, 5.8vw, 6.1rem);
        }

        .about-story-grid h2,
        .about-values-head h2,
        .about-timeline-grid h2 {
          max-width: 720px;
          font-size: clamp(2.25rem, 3.8vw, 4.2rem);
        }

        .about-page-hero p,
        .about-story-copy p {
          max-width: 680px;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.82;
        }

        .about-page-hero .btn-primary {
          margin-top: var(--space-24);
        }

        .about-portrait-card {
          padding: var(--space-24);
          border-radius: 40px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow-panel);
        }

        .about-portrait-frame {
          position: relative;
          aspect-ratio: 0.86 / 1;
          overflow: hidden;
          border-radius: 260px 260px 32px 32px;
          background: #eef0ef;
        }

        .about-portrait-copy {
          padding-top: var(--space-24);
        }

        .about-portrait-copy h2 {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.8rem;
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .about-story-section,
        .about-values-section,
        .about-timeline-section {
          padding: var(--space-64) 0;
        }

        .about-story-copy {
          display: grid;
          gap: var(--space-24);
        }

        .about-values-head {
          max-width: 760px;
          margin-bottom: var(--space-40);
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .about-value-card {
          padding: var(--space-24);
          border-radius: 28px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow-soft);
        }

        .about-value-card span {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(17, 18, 20, 0.05);
        }

        .about-value-card h3 {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.25rem;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .about-value-card p {
          margin: 14px 0 0;
          color: var(--text-secondary);
          line-height: 1.72;
          font-size: 0.94rem;
        }

        .about-timeline-list {
          display: grid;
          gap: var(--space-24);
        }

        .about-timeline-item {
          display: grid;
          grid-template-columns: 54px 1fr 24px;
          gap: var(--space-24);
          align-items: center;
          padding: var(--space-24);
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow-soft);
        }

        .about-timeline-item span {
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .about-timeline-item p {
          margin: 0;
          color: var(--text-primary);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .about-page-grid,
          .about-story-grid,
          .about-timeline-grid {
            grid-template-columns: 1fr;
          }

          .about-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .about-values-grid {
            grid-template-columns: 1fr;
          }

          .about-timeline-item {
            grid-template-columns: 1fr;
            border-radius: 28px;
          }
        }
      `}</style>
    </>
  );
}
