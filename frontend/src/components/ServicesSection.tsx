"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TiltCard from "./motion/TiltCard";
import SectionHeading from "./SectionHeading";
import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  GlobeIcon,
  RocketIcon,
  TargetIcon,
  UsersIcon,
} from "./icons";

const services = [
  {
    icon: BarChartIcon,
    title: "Business Analysis",
    description:
      "Requirements clarity, process mapping, stakeholder alignment, and business case support for better delivery decisions.",
    features: [
      "Requirements elicitation and documentation",
      "Process mapping and gap analysis",
      "Stakeholder alignment workshops",
      "Business case and solution framing",
    ],
  },
  {
    icon: BriefcaseIcon,
    title: "Strategic Consulting",
    description:
      "Consulting support for growth planning, service positioning, transformation priorities, and decision-making structure.",
    features: [
      "Business growth strategy",
      "Service and offer positioning",
      "Transformation and roadmap planning",
      "Decision support for leadership teams",
    ],
  },
  {
    icon: TargetIcon,
    title: "Project Management",
    description:
      "Delivery rhythm, scope clarity, risk tracking, and practical project structure from planning through execution.",
    features: [
      "Project planning and governance",
      "Agile and hybrid delivery support",
      "Risk, issue, and dependency tracking",
      "Stakeholder and vendor coordination",
    ],
  },
  {
    icon: RocketIcon,
    title: "Mentorship & Coaching",
    description:
      "Practical mentoring for professionals building confidence in business analysis, consulting, project delivery, or career growth.",
    features: [
      "1-on-1 mentoring sessions",
      "Interview and resume support",
      "Career positioning and confidence building",
      "Professional growth planning",
    ],
  },
  {
    icon: UsersIcon,
    title: "Student Support",
    description:
      "Guidance for students making sense of study pathways, career direction, and settling into life in Australia.",
    features: [
      "Study and course direction support",
      "Career planning and practical advice",
      "Confidence-building mentoring",
      "Structured next-step planning",
    ],
  },
  {
    icon: GlobeIcon,
    title: "Migrant Guidance",
    description:
      "Support for migrants navigating transition decisions, work readiness, and real-world planning with greater clarity.",
    features: [
      "Transition readiness guidance",
      "Job market and career planning support",
      "Practical settlement considerations",
      "Longer-term professional direction",
    ],
  },
];

const servicePrinciples = ["Diagnose clearly", "Prioritise calmly", "Deliver practically"];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section ref={ref} id="services" className="section-padding services-section">
      <div className="container-custom services-layout">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="services-intro"
        >
          <SectionHeading
            eyebrow="Core Services"
            title="Consulting support designed to feel calm, polished, and genuinely useful."
            subtitle="Each offer is shaped around clarity, restraint, and practical next steps rather than generic consulting language."
            align="left"
            maxWidth={520}
          />

          <p className="services-note">
            The section is intentionally simple: minimal surfaces, strong hierarchy, and just enough
            detail to show how each service works.
          </p>

          <div className="services-framework" aria-label="VistaVise service principles">
            {servicePrinciples.map((principle, index) => (
              <span key={principle}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                {principle}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.44, delay: index * 0.05 }}
            >
              <TiltCard as="article" className="service-card premium-tilt-card" maxTilt={2.4}>
                <div className="service-head">
                  <span className="service-icon">
                    <service.icon size={18} />
                  </span>
                  <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIdx === index ? "auto" : 0,
                    opacity: expandedIdx === index ? 1 : 0,
                    marginTop: expandedIdx === index ? 16 : 0,
                  }}
                  transition={{ duration: 0.24 }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="service-features">
                    {service.features.map((feature) => (
                      <div key={feature} className="feature-row">
                        <span className="feature-check">
                          <CheckCircleIcon size={13} />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <button
                  type="button"
                  className="service-toggle"
                  aria-expanded={expandedIdx === index}
                  aria-label={
                    expandedIdx === index
                      ? `Hide ${service.title} details`
                      : `Show ${service.title} details`
                  }
                  onClick={() => setExpandedIdx(expandedIdx === index ? null : index)}
                >
                  {expandedIdx === index ? "Hide details" : "View details"}
                  <ArrowRightIcon size={14} />
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          position: relative;
          overflow: clip;
        }

        .services-section::before {
          content: "";
          position: absolute;
          inset: 7% 4% auto auto;
          width: min(620px, 52vw);
          height: min(620px, 52vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.7), transparent 64%);
          pointer-events: none;
        }

        .services-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(300px, 0.36fr) minmax(0, 0.64fr);
          gap: var(--space-64);
          align-items: start;
        }

        .services-intro {
          position: sticky;
          top: 118px;
        }

        .services-note {
          margin: var(--space-24) 0 0;
          max-width: 360px;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.78;
        }

        .services-framework {
          display: grid;
          gap: 0;
          margin-top: var(--space-24);
          max-width: 360px;
          border-top: 1px solid rgba(17, 18, 20, 0.1);
          border-bottom: 1px solid rgba(17, 18, 20, 0.1);
        }

        .services-framework span {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-top: 1px solid rgba(17, 18, 20, 0.07);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .services-framework span:first-child {
          border-top: 0;
        }

        .services-framework strong {
          color: var(--text-muted);
          font-size: 0.72rem;
          letter-spacing: 0.16em;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .services-grid > div {
          display: flex;
        }

        .service-card {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          padding: var(--space-32);
        }

        .service-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .service-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          height: 32px;
          padding-inline: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.72);
          color: var(--text-muted);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .service-icon {
          margin: 0;
        }

        .service-title {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #1e2a38;
        }

        .service-description {
          margin: 14px 0 0;
          color: #667085;
          font-size: 0.94rem;
          line-height: 1.74;
          max-width: 42ch;
        }

        .service-features {
          padding-top: 16px;
          border-top: 1px solid rgba(17, 18, 20, 0.08);
          display: grid;
          gap: 11px;
        }

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .feature-check {
          display: inline-flex;
          color: var(--text-primary);
          margin-top: 2px;
        }

        .service-toggle {
          margin-top: auto;
          padding: 0;
          border: 0;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .services-layout {
            grid-template-columns: 1fr;
          }

          .services-intro {
            position: static;
          }
        }

        @media (max-width: 720px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: var(--space-24);
          }
        }
      `}</style>
    </section>
  );
}
