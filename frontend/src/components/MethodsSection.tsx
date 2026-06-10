"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import {
  BarChartIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  HomeIcon,
  TargetIcon,
  UsersIcon,
} from "./icons";

const methods = [
  {
    icon: CheckCircleIcon,
    title: "Clarity",
    desc: "We help untangle complexity and make the next move easier to see.",
  },
  {
    icon: TargetIcon,
    title: "Strategy",
    desc: "Advice is shaped around realistic priorities, not generic recommendations.",
  },
  {
    icon: BriefcaseIcon,
    title: "Delivery",
    desc: "Plans stay grounded in implementation, structure, and momentum.",
  },
  {
    icon: UsersIcon,
    title: "Mentorship",
    desc: "Support remains personal, practical, and confidence-building.",
  },
  {
    icon: BarChartIcon,
    title: "Insight",
    desc: "Analysis is used to sharpen decisions and surface what matters most.",
  },
  {
    icon: HomeIcon,
    title: "Practical Guidance",
    desc: "Especially for students and migrants, advice stays useful in real life.",
  },
];

export default function MethodsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding methods-section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="VistaVise Strengths"
          title="Clarity, strategy, delivery, mentorship, and practical guidance."
          subtitle="A compact view of the methods and principles that shape every VistaVise engagement."
          align="left"
        />

        <div className="methods-grid">
          {methods.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              className="method-card"
            >
              <span className="method-icon">
                <method.icon size={17} />
              </span>
              <div>
                <h3>{method.title}</h3>
                <p>{method.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .methods-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .method-card {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: var(--space-24);
          padding: var(--space-24) 0;
          border-top: 1px solid rgba(17, 18, 20, 0.08);
        }

        .method-icon {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(17, 18, 20, 0.05);
          color: var(--text-primary);
        }

        .method-card h3 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.12rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }

        .method-card p {
          margin: 8px 0 0;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.72;
        }

        @media (max-width: 960px) {
          .methods-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .methods-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
