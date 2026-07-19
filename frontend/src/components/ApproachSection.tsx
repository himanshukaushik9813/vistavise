"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRightIcon, BriefcaseIcon, MessageCircleIcon, RocketIcon, TargetIcon } from "./icons";

const steps = [
  {
    title: "Assess",
    body: "Assess your current background, skills, career goals and identify knowledge gaps.",
    image: "/images/business-analysis-career-readiness.png",
    icon: TargetIcon,
    position: "center",
  },
  {
    title: "Build",
    body: "Build a professional Business Analysis portfolio using practical projects, realistic simulations, templates and modern BA tools.",
    image: "/images/analysis-dashboard.png",
    icon: BriefcaseIcon,
    position: "center",
  },
  {
    title: "Prepare",
    body: "Review and refine your CV, conduct mock interviews and prepare for Business Analyst recruitment.",
    image: "/images/interview-preparation-workspace.png",
    icon: MessageCircleIcon,
    position: "center",
  },
  {
    title: "Land",
    body: "Land your first BA role with continued mentoring, accountability and career support.",
    image: "/images/stage-4.png",
    icon: RocketIcon,
    position: "center",
  },
];

export default function ApproachSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="approach" className="section-padding approach-section">
      <div className="approach-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="approach-header"
        >
          <span className="approach-pill">Proven Pathway</span>
          <h2>Your Journey to a High-Impact BA Career</h2>
          <p>A structured 4-step roadmap designed by industry experts</p>
        </motion.div>

        <div className="pathway-grid">
          <span className="pathway-connector" aria-hidden="true" />
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.58, delay: index * 0.1 }}
                className="pathway-card"
              >
                <div className="pathway-image-wrap">
                  <Image
                    src={step.image}
                    alt={`${step.title} step visual for Business Analysis career roadmap`}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 25vw"
                    className="pathway-image"
                    style={{ objectPosition: step.position }}
                  />
                </div>

                <div className="pathway-number-wrap">
                  <span className="pathway-number">{String(index + 1).padStart(2, "0")}</span>
                </div>

                {index < steps.length - 1 ? (
                  <span className="pathway-arrow" aria-hidden="true">
                    <ArrowRightIcon size={18} />
                  </span>
                ) : null}

                <div className="pathway-card-body">
                  <span className="pathway-step-label">Step {index + 1}</span>
                  <h3>{step.title}</h3>
                  <span className="pathway-divider" aria-hidden="true" />
                  <p>{step.body}</p>
                  <span className="pathway-icon" aria-hidden="true">
                    <Icon size={28} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .approach-section {
          position: relative;
          overflow: clip;
          background:
            radial-gradient(circle at 50% 0%, rgba(220, 234, 247, 0.54), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f7fbff 52%, #ffffff 100%);
        }

        .approach-container {
          width: min(100% - 48px, 1840px);
          margin: 0 auto;
        }

        .approach-header {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .approach-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 9px 28px;
          border-radius: 999px;
          background: linear-gradient(180deg, #eef5ff 0%, #dceafa 100%);
          color: #2f73d6;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
          font-size: clamp(0.82rem, 1.05vw, 1.08rem);
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .approach-header h2 {
          margin: 28px 0 0;
          max-width: 1220px;
          color: #0f1f3a;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.55rem, 4.65vw, 5.35rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .approach-header p {
          margin: 22px 0 0;
          color: #7d8aa1;
          font-size: clamp(1.1rem, 1.65vw, 1.72rem);
          font-weight: 600;
          line-height: 1.35;
        }

        .pathway-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 40px;
          margin-top: 64px;
        }

        .pathway-connector {
          position: absolute;
          z-index: 0;
          top: 312px;
          left: 11%;
          right: 11%;
          height: 3px;
          background-image: linear-gradient(90deg, rgba(47, 115, 214, 0.34) 50%, transparent 0);
          background-size: 18px 3px;
          background-repeat: repeat-x;
          pointer-events: none;
        }

        .pathway-card {
          position: relative;
          z-index: 1;
          min-width: 0;
          overflow: visible;
          border-radius: 30px;
          background: #ffffff;
          box-shadow:
            0 24px 70px rgba(47, 91, 145, 0.12),
            0 4px 18px rgba(15, 31, 58, 0.04);
        }

        .pathway-image-wrap {
          position: relative;
          height: clamp(190px, 13.8vw, 252px);
          overflow: hidden;
          border-radius: 30px 30px 18px 18px;
          background: #dceaf7;
        }

        .pathway-image {
          object-fit: cover;
          transform: scale(1.015);
        }

        .pathway-number-wrap {
          position: absolute;
          z-index: 3;
          top: clamp(154px, 11.15vw, 210px);
          left: 50%;
          width: 106px;
          height: 106px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow:
            0 15px 34px rgba(47, 91, 145, 0.16),
            inset 0 0 0 12px #eef5ff;
          transform: translateX(-50%);
        }

        .pathway-number {
          color: #1f559e;
          font-family: var(--font-heading), sans-serif;
          font-size: 2.26rem;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .pathway-arrow {
          position: absolute;
          z-index: 4;
          top: clamp(190px, 13vw, 244px);
          right: -24px;
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #2f73d6;
          color: #ffffff;
          box-shadow: 0 10px 24px rgba(47, 115, 214, 0.26);
        }

        .pathway-card-body {
          min-height: 390px;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 94px 34px 38px;
          text-align: center;
        }

        .pathway-step-label {
          color: #2f73d6;
          font-size: 1.03rem;
          font-weight: 900;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .pathway-card h3 {
          margin: 24px 0 0;
          color: #0f1f3a;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2rem, 2.5vw, 3rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.06em;
        }

        .pathway-divider {
          width: 60px;
          height: 3px;
          margin: 28px 0 0;
          border-radius: 999px;
          background: #2f73d6;
        }

        .pathway-card p {
          margin: 30px auto 0;
          max-width: 300px;
          color: #5f6f89;
          font-size: clamp(1rem, 1.13vw, 1.18rem);
          font-weight: 600;
          line-height: 1.58;
        }

        .pathway-icon {
          width: 76px;
          height: 76px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          border-radius: 999px;
          background: #eef5ff;
          color: #2f73d6;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92);
        }

        @media (max-width: 1280px) {
          .pathway-grid {
            gap: 24px;
          }

          .pathway-card-body {
            padding-inline: 24px;
          }
        }

        @media (max-width: 1080px) {
          .pathway-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pathway-connector,
          .pathway-arrow {
            display: none;
          }

          .pathway-card-body {
            min-height: 340px;
          }
        }

        @media (max-width: 640px) {
          .approach-container {
            width: min(100% - 32px, 1840px);
          }

          .pathway-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .pathway-image-wrap {
            height: 210px;
          }

          .pathway-number-wrap {
            top: 166px;
            width: 92px;
            height: 92px;
            box-shadow:
              0 15px 34px rgba(47, 91, 145, 0.16),
              inset 0 0 0 10px #eef5ff;
          }

          .pathway-number {
            font-size: 1.94rem;
          }

          .pathway-card-body {
            min-height: auto;
            padding: 84px 24px 32px;
          }
        }
      `}</style>
    </section>
  );
}
