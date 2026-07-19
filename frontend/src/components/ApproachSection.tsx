"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Assess",
    body: "Assess your current background, skills, career goals and identify knowledge gaps.",
  },
  {
    title: "Build",
    body: "Build a professional Business Analysis portfolio using practical projects, realistic simulations, templates and modern BA tools.",
  },
  {
    title: "Prepare",
    body: "Review and refine your CV, conduct mock interviews and prepare for Business Analyst recruitment.",
  },
  {
    title: "Land",
    body: "Land your first BA role with continued mentoring, accountability and career support.",
  },
];

export default function ApproachSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="approach" className="section-padding approach-section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear four-step journey from skills gap to first BA role."
          subtitle="The VistaVise framework keeps your learning practical, your portfolio visible, and your career preparation connected to real Business Analyst work."
          align="center"
          maxWidth={780}
        />

        <div className="timeline-shell">
          <div className="timeline-line" aria-hidden="true" />
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-card"
            >
              <span className="timeline-index">Step {index + 1}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .approach-section {
          position: relative;
          overflow: clip;
          background:
            radial-gradient(circle at 50% 8%, rgba(220, 234, 247, 0.46), transparent 34%),
            #f3f3f1;
        }

        .timeline-shell {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--space-24);
          margin-top: var(--space-48);
        }

        .timeline-line {
          position: absolute;
          left: 7%;
          right: 7%;
          top: 72px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(30, 42, 56, 0.22), transparent);
        }

        .timeline-card {
          position: relative;
          min-height: 100%;
          padding: 30px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background:
            radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.84), transparent 34%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(247, 250, 252, 0.72));
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(20px);
        }

        .timeline-index {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.74);
          color: #1e2a38;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .timeline-dot {
          display: block;
          width: 14px;
          height: 14px;
          margin: 24px 0 0;
          border-radius: 999px;
          background: #1e2a38;
          box-shadow: 0 0 0 8px rgba(220, 234, 247, 0.72);
        }

        .timeline-card h3 {
          margin: 26px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.45rem, 2vw, 2rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #1e2a38;
        }

        .timeline-card p {
          margin: 14px 0 0;
          color: #667085;
          line-height: 1.74;
        }

        @media (max-width: 1100px) {
          .timeline-shell {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .timeline-shell {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
