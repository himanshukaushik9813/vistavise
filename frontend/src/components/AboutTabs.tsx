"use client";

import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useRef, useState } from "react";
import { CompassIcon, TargetIcon, TrendingUpIcon, UsersIcon } from "./icons";

type AboutTab = {
  id: string;
  label: string;
  heading: string;
  body: string[];
  values?: Array<{ title: string; body: string }>;
};

const tabs: AboutTab[] = [
  {
    id: "mission",
    label: "Our Mission",
    heading: "Bridging the Gap Between Academic Learning and Real-World Execution",
    body: [
      "VistaVise was born out of real conversations with students and recent graduates who realized that university degrees often miss the practical tools, techniques, and hands-on experience required in the workplace.",
      "Our mission is to create a clear, structured roadmap that guides students and professionals into the job market with confidence. By delivering end-to-end training and proven frameworks, we ensure our candidates are fully equipped, job-ready, and capable of driving value from Week 1 on the job.",
    ],
  },
  {
    id: "vision",
    label: "Our Vision",
    heading: "Empowering the Next Generation of Agile and Future-Ready Business Analysts",
    body: [
      "Our vision is to build a premier community for business analysis excellence—where emerging talent transforms into strategic advisors and business leaders.",
      "We envision a future where every aspiring Business Analyst transitions seamlessly from education to industry, armed with modern methodologies, AI-fluent tools, and the professional agility needed to lead complex digital transformations across industries.",
    ],
  },
  {
    id: "values",
    label: "Our Core Values",
    heading: "Grounded in Real Experience, Built for Industry Success",
    body: [
      "At VistaVise, our values stem directly from over 25 years of hands-on industry leadership by founder Ajay Kaushik, ensuring every student learns what truly matters in the field:",
    ],
    values: [
      {
        title: "Real-World Relevance",
        body: "We go beyond theory, providing students with actual industry toolkits, templates, and frameworks used in real enterprise projects.",
      },
      {
        title: "Impact from Day One",
        body: "We focus on practical skills that make candidates productive, confident, and effective from their very first week on the job.",
      },
      {
        title: "Mentorship & Empowerment",
        body: "We believe in continuous support, guiding students through career navigation, interview preparation, and real-world project challenges.",
      },
      {
        title: "Practical Innovation",
        body: "We integrate modern methodologies and emerging digital tools—including AI co-pilots—to keep our analysts ahead of market trends.",
      },
    ],
  },
];

const valueIcons = [TargetIcon, TrendingUpIcon, UsersIcon, CompassIcon];

export default function AboutTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = tabs[activeIndex];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="about-tabs">
      <div className="about-tabs-list" role="tablist" aria-label="About VistaVise">
        {tabs.map((tab, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`about-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`about-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className={`about-tab${selected ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {selected ? (
                <motion.span layoutId="about-tab-pill" className="about-tab-pill" transition={{ type: "spring", stiffness: 380, damping: 34 }} />
              ) : null}
              <span className="about-tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          role="tabpanel"
          id={`about-panel-${active.id}`}
          aria-labelledby={`about-tab-${active.id}`}
          className="about-tab-panel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-tab-grid">
            <h1 className="about-tab-heading">{active.heading}</h1>
            <div className="about-tab-body">
              {active.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {active.values ? (
            <div className="about-values-grid">
              {active.values.map((value, index) => {
                const Icon = valueIcons[index % valueIcons.length];

                return (
                  <motion.article
                    key={value.title}
                    className="about-value-card"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.36, delay: 0.08 + index * 0.06 }}
                  >
                    <span className="about-value-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                  </motion.article>
                );
              })}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        .about-tabs {
          margin-top: 28px;
        }

        .about-tabs-list {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 6px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.08);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(16px);
        }

        .about-tab {
          position: relative;
          min-height: 46px;
          padding: 0 22px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: color 0.25s ease;
        }

        .about-tab:hover {
          color: var(--secondary);
        }

        .about-tab:focus-visible {
          outline: 2px solid #2f73d6;
          outline-offset: 2px;
        }

        .about-tab.is-active {
          color: #ffffff;
        }

        .about-tab-pill {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 999px;
          background: linear-gradient(135deg, #1e2a38, #111827);
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.22);
        }

        .about-tab-label {
          position: relative;
          z-index: 1;
        }

        .about-tab-panel {
          margin-top: 26px;
          padding: clamp(28px, 4vw, 48px);
          border-radius: 32px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background:
            radial-gradient(circle at top right, rgba(220, 234, 247, 0.6), transparent 38%),
            rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadow-panel);
        }

        .about-tab-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.5fr) minmax(0, 0.5fr);
          gap: clamp(28px, 5vw, 72px);
          align-items: start;
        }

        .about-tab-heading {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.2rem, 3.6vw, 3.6rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.05em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .about-tab-body p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 1.04rem;
          line-height: 1.84;
        }

        .about-tab-body p + p {
          margin-top: 18px;
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: clamp(28px, 4vw, 40px);
        }

        .about-value-card {
          padding: 22px;
          border-radius: 24px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background: rgba(247, 249, 252, 0.92);
        }

        .about-value-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 14px;
          color: #1e2a38;
          background: #dceaf7;
        }

        .about-value-card h3 {
          margin: 16px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.08rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--secondary);
        }

        .about-value-card p {
          margin: 8px 0 0;
          color: var(--text-secondary);
          font-size: 0.94rem;
          line-height: 1.7;
        }

        @media (max-width: 1100px) {
          .about-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .about-tab-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-tabs-list {
            display: flex;
            border-radius: 24px;
          }

          .about-tab {
            flex: 1 1 auto;
            padding: 0 14px;
            font-size: 0.88rem;
          }

          .about-values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
