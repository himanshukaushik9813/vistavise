"use client";

import { motion } from "framer-motion";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";
import { CompassIcon, TargetIcon, TrendingUpIcon, UsersIcon } from "./icons";

type AboutBlock = {
  id: string;
  label: string;
  heading: string;
  body: string[];
  values?: Array<{ title: string; body: string }>;
};

const blocks: AboutBlock[] = [
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
      "Our vision is to build a premier community for business analysis excellence, where emerging talent transforms into strategic advisors and business leaders.",
      "We envision a future where every aspiring Business Analyst transitions seamlessly from education to industry, armed with modern methodologies, AI-fluent tools, and the professional agility needed to lead complex digital transformations across industries.",
    ],
  },
  {
    id: "values",
    label: "Our Core Values",
    heading: "Grounded in Real Experience, Built for Industry Success",
    body: [
      "At VistaVise, our values stem directly from 25+ years of hands-on industry leadership by founder Ajay Kaushik, ensuring every student learns what truly matters in the field:",
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
        body: "We integrate modern methodologies and emerging digital tools, including AI co-pilots, to keep our analysts ahead of market trends.",
      },
    ],
  },
];

const valueIcons = [TargetIcon, TrendingUpIcon, UsersIcon, CompassIcon];
const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSections() {
  const reduced = useReducedMotionPreference();

  return (
    <div className="about-sections">
      {blocks.map((block, blockIndex) => (
        <section key={block.id} id={block.id} className={`about-block about-block-${block.id}`}>
          <div className="container-custom">
            <motion.div
              className="about-block-panel"
              initial={reduced ? false : { opacity: 0, y: 56 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease }}
            >
              <div className="about-block-grid">
                <div>
                  <p className="eyebrow">
                    <span className="about-block-index">{String(blockIndex + 1).padStart(2, "0")}</span>
                    {block.label}
                  </p>
                  <h2 className="about-block-heading">{block.heading}</h2>
                </div>
                <div className="about-block-body">
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {block.values ? (
                <div className="about-values-grid">
                  {block.values.map((value, index) => {
                    const Icon = valueIcons[index % valueIcons.length];

                    return (
                      <motion.article
                        key={value.title}
                        className="about-value-card"
                        initial={reduced ? false : { opacity: 0, y: 24 }}
                        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.12 + index * 0.08, ease }}
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
          </div>
        </section>
      ))}

      <style jsx global>{`
        .about-sections {
          display: grid;
          gap: clamp(20px, 3vw, 32px);
        }

        .about-block {
          scroll-margin-top: 110px;
        }

        .about-block-panel {
          padding: clamp(28px, 4vw, 52px);
          border-radius: 32px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background:
            radial-gradient(circle at top right, rgba(234, 217, 189, 0.45), transparent 38%),
            rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadow-panel);
        }

        .about-block-vision .about-block-panel {
          background:
            radial-gradient(circle at top left, rgba(234, 217, 189, 0.52), transparent 42%),
            rgba(251, 247, 240, 0.92);
        }

        .about-block-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.5fr) minmax(0, 0.5fr);
          gap: clamp(28px, 5vw, 72px);
          align-items: start;
        }

        .about-block-index {
          color: var(--text-muted);
          font-variant-numeric: tabular-nums;
        }

        .about-block-heading {
          margin: 20px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: var(--fs-feature-title);
          font-weight: var(--heading-weight);
          line-height: var(--heading-line-height);
          letter-spacing: var(--heading-tracking);
          color: var(--secondary);
          text-wrap: balance;
        }

        .about-block-body {
          padding-top: 40px;
        }

        .about-block-body p {
          margin: 0;
          color: var(--text-secondary);
          font-size: var(--fs-lead);
          line-height: 1.84;
        }

        .about-block-body p + p {
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
          color: var(--secondary);
          background: var(--primary);
        }

        .about-value-card h3 {
          margin: 16px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.08rem;
          font-weight: var(--heading-weight);
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
          .about-block-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .about-block-body {
            padding-top: 20px;
          }
        }

        @media (max-width: 640px) {
          .about-values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
