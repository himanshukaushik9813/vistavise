"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { BriefcaseIcon, CompassIcon, LayersIcon, MessageCircleIcon, TargetIcon, UsersIcon } from "./icons";

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

const credibilityIcons = [BriefcaseIcon, UsersIcon, LayersIcon, MessageCircleIcon, TargetIcon, CompassIcon];

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
          {credibilityItems.map((item, index) => {
            const Icon = credibilityIcons[index] || TargetIcon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="credibility-pill"
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <span className="credibility-index" aria-hidden="true">
                  <Icon size={19} />
                </span>
              </motion.article>
            );
          })}
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
        }

        .credibility-pill h3 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #1e2a38;
        }

        .credibility-pill p {
          margin: 6px 0 0;
          color: #667085;
          font-size: 0.88rem;
          line-height: 1.68;
        }

        .credibility-index {
          margin-left: auto;
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
