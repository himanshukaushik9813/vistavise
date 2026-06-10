"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { TargetIcon, UsersIcon, CheckCircleIcon } from "./icons";

const expertiseChips = [
  "Business Analysis",
  "Strategy",
  "Project Delivery",
  "Coaching",
  "Student Guidance",
  "Migration Support",
];

const valuePoints = [
  {
    icon: TargetIcon,
    title: "Clarity first",
    desc: "A structured lens for reducing noise and defining what matters.",
  },
  {
    icon: UsersIcon,
    title: "Human approach",
    desc: "Professional guidance that stays calm, supportive, and practical.",
  },
  {
    icon: CheckCircleIcon,
    title: "Real follow-through",
    desc: "Direction that connects planning to action and next steps.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding about-section">
      <div className="container-custom about-grid">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="About"
            title="Thoughtful consulting for business decisions, delivery, and life transitions."
            subtitle="VistaVise Consulting brings together strategic thinking, process clarity, and a warm advisory style to help people move forward with greater confidence."
            align="left"
            maxWidth={640}
          />

          <div className="about-copy">
            <p>
              The work spans business analysis, strategic consulting, project delivery, mentoring,
              and support for students and migrants navigating Australia.
            </p>
            <p>
              The goal is not to add noise. It is to make decisions feel clearer, more structured,
              and easier to act on.
            </p>
          </div>

          <div className="expertise-chips">
            {expertiseChips.map((chip) => (
              <span key={chip} className="expertise-chip">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
          className="value-card surface-dark"
        >
          <p className="value-kicker">Value</p>
          <h3 className="value-title">
            Practical guidance shaped with structure, restraint, and clear priorities.
          </h3>

          <div className="value-list">
            {valuePoints.map((item) => (
              <div key={item.title} className="value-row">
                <span className="value-icon" aria-hidden="true">
                  <item.icon size={18} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      <style jsx global>{`
        .about-grid {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.58fr) minmax(360px, 0.42fr);
          gap: var(--space-64);
          align-items: center;
        }

        .about-section {
          position: relative;
          overflow: clip;
        }

        .about-section::before {
          content: "";
          position: absolute;
          top: 8%;
          left: 50%;
          width: min(820px, 78vw);
          height: min(820px, 78vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.62), transparent 62%);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .about-copy {
          display: grid;
          gap: var(--space-24);
          max-width: 600px;
        }

        .about-copy p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.78;
        }

        .expertise-chips {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-24);
          margin-top: var(--space-24);
        }

        .expertise-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.78);
          color: var(--text-primary);
          font-size: 0.86rem;
          font-weight: 600;
        }

        .value-card {
          padding: var(--space-40);
          position: relative;
          overflow: hidden;
          align-self: center;
          box-shadow: 0 44px 110px rgba(17, 18, 20, 0.3);
        }

        .value-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.16), transparent 28%),
            radial-gradient(circle at 82% 86%, rgba(255, 255, 255, 0.08), transparent 32%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 40%);
          pointer-events: none;
        }

        .value-card::after {
          content: "";
          position: absolute;
          right: -80px;
          top: -80px;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .value-kicker {
          position: relative;
          z-index: 1;
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .value-title {
          position: relative;
          z-index: 1;
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.75rem, 2.45vw, 2.45rem);
          line-height: 1.06;
          letter-spacing: -0.05em;
          color: #ffffff;
        }

        .value-list {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 0;
          margin-top: var(--space-40);
        }

        .value-row {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: var(--space-24);
          padding: var(--space-24) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .value-row:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .value-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9);
        }

        .value-row h4 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .value-row p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.9rem;
          line-height: 1.68;
          max-width: 36ch;
        }

        @media (max-width: 980px) {
          .about-grid {
            grid-template-columns: 1fr;
            align-items: start;
          }
        }

        @media (max-width: 768px) {
          .value-card {
            padding: var(--space-24);
          }
        }
      `}</style>
    </section>
  );
}
