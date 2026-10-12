import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CompassIcon,
  LayersIcon,
  MessageCircleIcon,
  RocketIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";
import RevealSection from "@/components/motion/RevealSection";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";
import { calendlyUrl, flagshipProgram } from "@/lib/vistavise-data";

const program = flagshipProgram.detail;
const pagePath = flagshipProgram.href;

export const metadata: Metadata = {
  title: `${flagshipProgram.title} | VistaVise`,
  description: program.subheadline,
  alternates: { canonical: `${siteConfig.url}${pagePath}` },
  openGraph: {
    title: `${flagshipProgram.title} | VistaVise`,
    description: program.subheadline,
    url: `${siteConfig.url}${pagePath}`,
  },
};

const highlightIcons = [CalendarIcon, UsersIcon, TargetIcon];
const outcomeIcons = [TrendingUpIcon, LayersIcon, MessageCircleIcon, CompassIcon];
const methodIcons = [RocketIcon, BarChartIcon, UsersIcon, MessageCircleIcon];
const audienceIcons = [RocketIcon, BriefcaseIcon, CompassIcon];

export default function FlagshipProgramPage() {
  return (
    <>
      <Navbar />
      <main className="flagship-page">
        {/* Hero */}
        <section className="flagship-hero">
          <div className="container-custom flagship-hero-grid">
            <div className="flagship-hero-copy">
              <nav className="flagship-breadcrumb" aria-label="Breadcrumb">
                <Link href="/services">Services</Link>
                <span aria-hidden="true">/</span>
                <span>{flagshipProgram.title}</span>
              </nav>
              <span className="flagship-badge">{flagshipProgram.eyebrow}</span>
              <RevealText as="h1" className="flagship-title" text={program.headline} variant="premiumHeading" float />
              <p className="flagship-lead">{program.subheadline}</p>
              <div className="flagship-actions">
                <Link href="/contact" className="btn-primary">
                  {program.primaryCta}
                  <ArrowRightIcon size={14} />
                </Link>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <CalendarIcon size={16} />
                  {program.secondaryCta}
                </a>
              </div>
            </div>

            <div className="flagship-hero-media">
              <Image
                src={flagshipProgram.image}
                alt="Business Analysis career roadmap on a strategy wall"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="flagship-hero-image"
              />
            </div>
          </div>

          {/* Quick highlights bar */}
          <div className="container-custom">
            <dl className="flagship-highlights">
              {program.highlights.map((item, index) => {
                const Icon = highlightIcons[index % highlightIcons.length];
                return (
                  <div key={item.label} className="flagship-highlight">
                    <span className="flagship-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section-padding" id="outcomes">
          <div className="container-custom">
            <RevealSection className="flagship-section-head">
              <p className="eyebrow">What You Will Achieve</p>
              <h2 className="flagship-section-title">Program Outcomes</h2>
              <p className="flagship-section-lead">{program.outcomesIntro}</p>
            </RevealSection>

            <div className="flagship-card-grid">
              {program.outcomes.map((item, index) => {
                const Icon = outcomeIcons[index % outcomeIcons.length];
                return (
                  <RevealSection key={item.title} delay={index * 0.08} className="flagship-card">
                    <span className="flagship-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </RevealSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding flagship-timeline-section" id="timeline">
          <div className="container-custom">
            <RevealSection className="flagship-section-head">
              <p className="eyebrow">8-Week Journey at a Glance</p>
              <h2 className="flagship-section-title">Program Timeline</h2>
            </RevealSection>

            <ol className="flagship-timeline">
              {program.timeline.map((step, index) => (
                <li key={step.weeks}>
                  <RevealSection delay={index * 0.1} className="flagship-timeline-card">
                    <span className="flagship-timeline-marker" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="flagship-timeline-weeks">{step.weeks}</p>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </RevealSection>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding" id="methodology">
          <div className="container-custom">
            <RevealSection className="flagship-section-head">
              <p className="eyebrow">The Learning Methodology</p>
              <h2 className="flagship-section-title">How We Will Progress</h2>
            </RevealSection>

            <div className="flagship-card-grid">
              {program.methodology.map((item, index) => {
                const Icon = methodIcons[index % methodIcons.length];
                return (
                  <RevealSection key={item.title} delay={index * 0.08} className="flagship-card">
                    <span className="flagship-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </RevealSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section-padding flagship-deliverables-section" id="deliverables">
          <div className="container-custom">
            <RevealSection className="flagship-deliverables-panel">
              <div className="flagship-deliverables-head">
                <p className="eyebrow flagship-eyebrow-light">What You Walk Away With</p>
                <h2 className="flagship-section-title">Program Deliverables</h2>
              </div>
              <ul className="flagship-deliverables-list">
                {program.deliverables.map((item) => (
                  <li key={item.title}>
                    <CheckCircleIcon size={18} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealSection>
          </div>
        </section>

        {/* Who is this for */}
        <section className="section-padding" id="who-is-this-for">
          <div className="container-custom">
            <RevealSection className="flagship-section-head">
              <p className="eyebrow">Ideal Participants</p>
              <h2 className="flagship-section-title">Who Is This For?</h2>
            </RevealSection>

            <div className="flagship-audience-grid">
              {program.audience.map((item, index) => {
                const Icon = audienceIcons[index % audienceIcons.length];
                return (
                  <RevealSection key={item} delay={index * 0.08} className="flagship-card flagship-audience-card">
                    <span className="flagship-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <p>{item}</p>
                  </RevealSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sticky CTA banner */}
        <div className="flagship-sticky-wrap">
          <div className="container-custom">
            <aside className="flagship-sticky-cta" aria-label="Apply for the next cohort">
              <div>
                <p className="flagship-sticky-heading">{program.stickyCta.heading}</p>
                <p className="flagship-sticky-body">{program.stickyCta.body}</p>
              </div>
              <div className="flagship-sticky-actions">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flagship-sticky-btn is-ghost">
                  {program.secondaryCta}
                </a>
                <Link href="/contact" className="flagship-sticky-btn is-solid">
                  {program.primaryCta}
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .flagship-hero {
          padding: 84px 0 0;
        }

        .flagship-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.56fr) minmax(320px, 0.44fr);
          gap: clamp(28px, 4vw, 56px);
          align-items: center;
        }

        .flagship-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .flagship-breadcrumb a {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .flagship-breadcrumb a:hover {
          color: var(--secondary);
        }

        .flagship-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 34px;
          padding: 0 16px;
          border-radius: 999px;
          background: var(--secondary);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .flagship-title {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: var(--fs-heading);
          font-weight: 800;
          line-height: var(--heading-line-height);
          letter-spacing: var(--heading-tracking);
          color: var(--secondary);
          text-wrap: balance;
        }

        .flagship-lead {
          margin: 22px 0 0;
          max-width: 620px;
          color: var(--text-secondary);
          font-size: var(--fs-lead);
          line-height: 1.8;
        }

        .flagship-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .flagship-hero-media {
          position: relative;
          min-height: 440px;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(30, 42, 56, 0.08);
          box-shadow: var(--shadow-panel);
        }

        .flagship-hero-image {
          object-fit: cover;
        }

        .flagship-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          margin: clamp(32px, 4vw, 48px) 0 0;
          padding: 10px;
          border-radius: 28px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadow-soft);
        }

        .flagship-highlight {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 20px;
        }

        .flagship-highlight + .flagship-highlight {
          border-left: 1px solid var(--border-soft);
        }

        .flagship-highlight dt {
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .flagship-highlight dd {
          margin: 6px 0 0;
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.45;
        }

        .flagship-icon {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          color: var(--secondary);
          background: var(--primary);
        }

        .flagship-section-head {
          display: grid;
          justify-items: start;
          margin-bottom: clamp(28px, 4vw, 44px);
        }

        .flagship-section-title {
          margin: 20px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: var(--fs-heading);
          font-weight: 800;
          line-height: var(--heading-line-height);
          letter-spacing: var(--heading-tracking);
          color: var(--secondary);
        }

        .flagship-section-lead {
          margin: 18px 0 0;
          max-width: 720px;
          color: var(--text-secondary);
          font-size: var(--fs-lead);
          line-height: 1.8;
        }

        .flagship-card-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .flagship-card {
          height: 100%;
          padding: 26px;
          border-radius: 28px;
          border: 1px solid var(--premium-card-border);
          background: var(--premium-card-background);
          box-shadow: var(--premium-card-shadow);
          transition:
            transform 0.45s var(--ease-premium),
            box-shadow 0.45s var(--ease-premium);
        }

        .flagship-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--premium-card-shadow-hover);
        }

        .flagship-card h3,
        .flagship-timeline-card h3,
        .flagship-deliverables-list h3 {
          margin: 18px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.14rem;
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: var(--secondary);
        }

        .flagship-card p,
        .flagship-timeline-card p {
          margin: 10px 0 0;
          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.72;
        }

        .flagship-timeline-section {
          background: linear-gradient(180deg, transparent, rgba(220, 234, 247, 0.35) 30%, rgba(220, 234, 247, 0.35) 70%, transparent);
        }

        .flagship-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .flagship-timeline::before {
          content: "";
          position: absolute;
          top: 47px;
          left: 48px;
          right: 48px;
          height: 2px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.24), rgba(30, 42, 56, 0.08));
        }

        .flagship-timeline li {
          max-width: none;
        }

        .flagship-timeline-card {
          position: relative;
          height: 100%;
          padding: 26px;
          border-radius: 28px;
          border: 1px solid var(--premium-card-border);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: var(--premium-card-shadow);
        }

        .flagship-timeline-marker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: var(--secondary);
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          box-shadow: 0 0 0 6px rgba(220, 234, 247, 0.9);
        }

        .flagship-timeline-card .flagship-timeline-weeks {
          margin: 18px 0 0;
          color: var(--text-muted);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .flagship-timeline-card .flagship-timeline-weeks + h3 {
          margin-top: 8px;
        }

        .flagship-deliverables-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.38fr) minmax(0, 0.62fr);
          gap: clamp(28px, 5vw, 64px);
          padding: clamp(32px, 5vw, 60px);
          border-radius: 36px;
          background:
            radial-gradient(circle at 10% 0%, rgba(220, 234, 247, 0.2), transparent 40%),
            linear-gradient(135deg, #1e2a38 0%, #111827 100%);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.2);
        }

        .flagship-deliverables-panel .flagship-section-title {
          color: #ffffff;
        }

        .flagship-eyebrow-light {
          color: rgba(255, 255, 255, 0.8);
        }

        .flagship-eyebrow-light::before {
          background: rgba(255, 255, 255, 0.4);
        }

        .flagship-deliverables-list {
          display: grid;
          gap: 4px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .flagship-deliverables-list li {
          display: flex;
          gap: 16px;
          max-width: none;
          padding: 20px 0;
          color: #dceaf7;
        }

        .flagship-deliverables-list li + li {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .flagship-deliverables-list li > svg {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .flagship-deliverables-list h3 {
          margin: 0;
          color: #ffffff;
        }

        .flagship-deliverables-list p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.98rem;
          line-height: 1.72;
        }

        .flagship-audience-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .flagship-audience-card p {
          margin-top: 18px;
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: 1.08rem;
          font-weight: 700;
          line-height: 1.5;
        }

        .flagship-sticky-wrap {
          position: sticky;
          bottom: 16px;
          z-index: 20;
          padding: 8px 0 clamp(48px, 6vw, 72px);
          pointer-events: none;
        }

        .flagship-sticky-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px 24px;
          padding: 16px 16px 16px 28px;
          border-radius: 28px;
          background: rgba(17, 24, 39, 0.94);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
          backdrop-filter: blur(16px);
          pointer-events: auto;
        }

        .flagship-sticky-heading {
          margin: 0;
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.08rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .flagship-sticky-body {
          margin: 2px 0 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.94rem;
        }

        .flagship-sticky-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .flagship-sticky-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 999px;
          font-size: 0.94rem;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.35s var(--ease-premium),
            background 0.35s var(--ease-premium);
        }

        .flagship-sticky-btn:hover {
          transform: translateY(-2px);
        }

        .flagship-sticky-btn.is-solid {
          background: var(--primary);
          color: var(--secondary);
        }

        .flagship-sticky-btn.is-solid:hover {
          background: #edf6ff;
        }

        .flagship-sticky-btn.is-ghost {
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
        }

        .flagship-sticky-btn.is-ghost:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1100px) {
          .flagship-card-grid,
          .flagship-timeline {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .flagship-timeline::before {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .flagship-hero-grid,
          .flagship-deliverables-panel {
            grid-template-columns: 1fr;
          }

          .flagship-hero-media {
            min-height: 300px;
          }
        }

        @media (max-width: 760px) {
          .flagship-highlights,
          .flagship-audience-grid {
            grid-template-columns: 1fr;
          }

          .flagship-highlight + .flagship-highlight {
            border-left: 0;
            border-top: 1px solid var(--border-soft);
          }
        }

        @media (max-width: 640px) {
          .flagship-hero {
            padding-top: 56px;
          }

          .flagship-card-grid,
          .flagship-timeline {
            grid-template-columns: 1fr;
          }

          .flagship-sticky-wrap {
            bottom: 10px;
          }

          .flagship-sticky-cta {
            gap: 10px;
            padding: 12px 14px;
            border-radius: 22px;
          }

          .flagship-sticky-heading {
            font-size: 0.92rem;
          }

          .flagship-sticky-body {
            display: none;
          }

          .flagship-sticky-btn {
            min-height: 42px;
          }

          .flagship-sticky-actions,
          .flagship-sticky-btn {
            width: 100%;
          }

          .flagship-sticky-btn.is-ghost {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
