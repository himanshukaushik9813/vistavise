"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { CheckCircleIcon } from "./icons";

const solutionBullets = [
  "Discovery Workshops",
  "Stakeholder Management",
  "Process Mapping",
  "User Story Writing",
  "Requirement Gathering",
  "Real Client Simulations",
  "Portfolio Building",
];

export default function GoalSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding goal-section">
      <div className="container-custom goal-layout">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="goal-copy"
        >
          <SectionHeading
            eyebrow="Our Goal"
            title="Don't Get Stuck in the Theory Trap"
            subtitle="Many aspiring Business Analysts complete courses but struggle because they lack practical exposure, portfolio projects and interview confidence."
            align="left"
            maxWidth={680}
          />
          <p>
            VistaVise closes that gap with structured mentoring, realistic practice, and feedback that helps you turn theory into evidence of job-ready capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="goal-solution-card"
        >
          <p className="goal-card-label">VistaVise Solution</p>
          <div className="goal-bullet-grid">
            {solutionBullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.16 + index * 0.045 }}
                className="goal-bullet"
              >
                <span aria-hidden="true">
                  <CheckCircleIcon size={15} />
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .goal-section {
          position: relative;
          overflow: clip;
          background:
            radial-gradient(circle at 12% 12%, rgba(247, 243, 235, 0.82), transparent 28%),
            #f7f9fc;
        }

        .goal-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.48fr) minmax(320px, 0.52fr);
          gap: var(--space-40);
          align-items: center;
        }

        .goal-copy p {
          margin: var(--space-24) 0 0;
          max-width: 620px;
          color: var(--text-secondary);
          font-size: 1.04rem;
          line-height: 1.86;
        }

        .goal-solution-card {
          position: relative;
          overflow: hidden;
          padding: clamp(26px, 4vw, 42px);
          border-radius: 36px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background:
            radial-gradient(circle at 18% 0%, rgba(220, 234, 247, 0.36), transparent 34%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(247, 250, 252, 0.76));
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(20px);
        }

        .goal-solution-card::before {
          content: "";
          position: absolute;
          inset: auto -12% -20% auto;
          width: 240px;
          height: 240px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(223, 241, 227, 0.72), transparent 68%);
          pointer-events: none;
        }

        .goal-card-label {
          position: relative;
          margin: 0 0 var(--space-24);
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .goal-bullet-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .goal-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 14px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          color: #1e2a38;
          font-weight: 800;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.88);
        }

        .goal-bullet span {
          display: inline-flex;
          color: #1e2a38;
        }

        @media (max-width: 960px) {
          .goal-layout,
          .goal-bullet-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
