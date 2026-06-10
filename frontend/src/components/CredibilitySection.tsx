"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const credibilityItems = [
  {
    title: "Strategic Business Support",
    desc: "Thoughtful consulting grounded in analysis, planning, and practical decision support.",
  },
  {
    title: "Student & Migrant Guidance",
    desc: "Supportive pathways for navigating study, career, and transition decisions in Australia.",
  },
  {
    title: "Project Delivery Focus",
    desc: "Clarity is always connected back to execution, governance, and follow-through.",
  },
  {
    title: "Human-Centered Consulting",
    desc: "Professional, warm, and clear communication throughout the engagement.",
  },
  {
    title: "Outcome-Driven Approach",
    desc: "Advice is shaped around momentum, confidence, and decisions people can act on.",
  },
];

export default function CredibilitySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding credibility-section">
      <div className="container-custom credibility-layout">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Why Clients Trust VistaVise"
            title="A premium consulting experience built on warmth, structure, and clear thinking."
            subtitle="When formal awards are not the headline, the differentiator becomes how the work is carried, communicated, and followed through."
            align="left"
            maxWidth={610}
          />
        </motion.div>

        <div className="credibility-list">
          {credibilityItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="credibility-pill"
            >
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <span className="credibility-index">{String(index + 1).padStart(2, "0")}</span>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .credibility-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.5fr) minmax(0, 0.5fr);
          gap: var(--space-40);
          align-items: center;
        }

        .credibility-list {
          display: grid;
          gap: var(--space-24);
        }

        .credibility-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-24);
          padding: var(--space-24);
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.84);
          box-shadow: 0 12px 30px rgba(17, 18, 20, 0.045);
        }

        .credibility-pill h3 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .credibility-pill p {
          margin: 6px 0 0;
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.68;
        }

        .credibility-index {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 52px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.05);
          color: var(--text-primary);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .credibility-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .credibility-pill {
            align-items: flex-start;
            flex-direction: column;
            border-radius: 28px;
          }
        }
      `}</style>
    </section>
  );
}
