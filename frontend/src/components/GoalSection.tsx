"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseIcon, CheckCircleIcon, MessageCircleIcon, TargetIcon } from "./icons";

const problemPoints = [
  {
    title: "Theory without evidence",
    body: "Courses explain terminology, but hiring conversations ask for examples, deliverables and confidence.",
    icon: TargetIcon,
  },
  {
    title: "No practical portfolio",
    body: "Many learners finish training without process maps, user stories, stakeholder notes or case-study proof.",
    icon: BriefcaseIcon,
  },
  {
    title: "Interview uncertainty",
    body: "Candidates know the concepts but struggle to explain how they would handle real BA scenarios.",
    icon: MessageCircleIcon,
  },
];

const solutionFlow = [
  "Assess your current BA readiness and career gaps",
  "Build practical deliverables through guided simulations",
  "Receive mentor feedback on portfolio, CV and interview stories",
  "Prepare to speak like a job-ready Business Analyst",
];

const proofPillars = [
  "Real BA deliverables",
  "Mentor feedback",
  "Portfolio evidence",
  "Career confidence",
];

export default function GoalSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding goal-section">
      <span className="goal-bg-orb goal-bg-orb-one" aria-hidden="true" />
      <span className="goal-bg-orb goal-bg-orb-two" aria-hidden="true" />
      <div className="container-custom goal-layout">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="goal-copy"
        >
          <span className="goal-eyebrow">Problem Statement</span>
          <h2 className="goal-title">Most aspiring BAs do not need more theory. They need proof they can do the work.</h2>
          <p className="goal-lede">
            The real gap is between learning Business Analysis concepts and being able to show job-ready capability
            through practical deliverables, stakeholder thinking, portfolio stories and confident interviews.
          </p>

          <div className="goal-proof-pills" aria-label="VistaVise focus areas">
            {proofPillars.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="goal-solution-card"
        >
          <div className="goal-card-header">
            <p className="goal-card-label">Why learners get stuck</p>
            <span>01</span>
          </div>

          <div className="goal-problem-grid">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.14 + index * 0.06 }}
                  className="goal-problem-card"
                >
                  <span className="goal-problem-icon" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="goal-flow-card">
            <div className="goal-card-header">
              <p className="goal-card-label">VistaVise flow</p>
              <span>02</span>
            </div>

            <div className="goal-flow-list">
              {solutionFlow.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.24 + index * 0.055 }}
                className="goal-flow-item"
              >
                <span className="goal-flow-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="goal-flow-check" aria-hidden="true">
                  <CheckCircleIcon size={15} />
                </span>
                {item}
              </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .goal-section {
          position: relative;
          overflow: clip;
          padding-top: clamp(72px, 8vw, 96px);
          padding-bottom: clamp(72px, 8vw, 104px);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(247, 251, 255, 0.9)),
            radial-gradient(circle at 12% 12%, rgba(220, 234, 247, 0.7), transparent 30%),
            #f7f9fc;
        }

        .goal-bg-orb {
          position: absolute;
          z-index: 0;
          display: block;
          border-radius: 999px;
          pointer-events: none;
        }

        .goal-bg-orb-one {
          top: 18%;
          left: 4%;
          width: min(460px, 38vw);
          height: min(460px, 38vw);
          background: radial-gradient(circle, rgba(220, 234, 247, 0.42), transparent 68%);
          filter: blur(2px);
        }

        .goal-bg-orb-two {
          right: 5%;
          bottom: 8%;
          width: min(360px, 30vw);
          height: min(360px, 30vw);
          border: 1px solid rgba(30, 42, 56, 0.045);
          background: rgba(255, 255, 255, 0.36);
        }

        .goal-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.44fr) minmax(360px, 0.56fr);
          gap: clamp(40px, 5vw, 72px);
          align-items: center;
        }

        .goal-copy {
          max-width: 720px;
        }

        .goal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .goal-eyebrow::before {
          content: "";
          width: 2px;
          height: 28px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(30, 42, 56, 0.18), rgba(220, 234, 247, 0.82));
        }

        .goal-eyebrow::after {
          content: "";
          width: 78px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.28), transparent);
        }

        .goal-title {
          margin: var(--space-24) 0 0;
          max-width: 760px;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.35rem, 3.65vw, 4.25rem);
          line-height: 1.04;
          letter-spacing: -0.058em;
          text-wrap: balance;
        }

        .goal-lede {
          margin: var(--space-24) 0 0;
          max-width: 660px;
          color: var(--text-secondary);
          font-size: clamp(1.03rem, 1.12vw, 1.14rem);
          line-height: 1.82;
        }

        .goal-proof-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          max-width: 650px;
          margin-top: var(--space-32);
        }

        .goal-proof-pills span {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.64);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.04);
          color: #1e2a38;
          font-size: 0.84rem;
          font-weight: 800;
        }

        .goal-solution-card {
          position: relative;
          overflow: hidden;
          display: grid;
          gap: var(--space-24);
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

        .goal-card-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .goal-card-label {
          position: relative;
          margin: 0;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .goal-card-header span {
          width: 42px;
          height: 42px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.86);
          color: #1e2a38;
          font-weight: 900;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
        }

        .goal-problem-grid {
          position: relative;
          display: grid;
          gap: 14px;
        }

        .goal-problem-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background: rgba(255, 255, 255, 0.68);
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.045);
          backdrop-filter: blur(16px);
        }

        .goal-problem-icon,
        .goal-flow-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.84);
          color: #1e2a38;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
        }

        .goal-problem-icon {
          width: 44px;
          height: 44px;
        }

        .goal-problem-card h3 {
          margin: 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.02rem;
          line-height: 1.2;
          letter-spacing: -0.035em;
        }

        .goal-problem-card p {
          margin: 7px 0 0;
          color: #667085;
          font-size: 0.94rem;
          line-height: 1.62;
        }

        .goal-flow-card {
          position: relative;
          z-index: 1;
          padding: 22px;
          border-radius: 28px;
          background: rgba(30, 42, 56, 0.92);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.13);
        }

        .goal-flow-card .goal-card-label {
          color: rgba(255, 255, 255, 0.64);
        }

        .goal-flow-list {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .goal-flow-item {
          display: grid;
          grid-template-columns: auto auto minmax(0, 1fr);
          align-items: center;
          gap: 12px;
          min-height: 54px;
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.94rem;
          font-weight: 750;
          line-height: 1.4;
        }

        .goal-flow-index {
          color: rgba(255, 255, 255, 0.42);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .goal-flow-check {
          width: 32px;
          height: 32px;
        }

        @media (max-width: 960px) {
          .goal-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .goal-title {
            font-size: clamp(2.3rem, 11vw, 3.4rem);
          }

          .goal-solution-card {
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}
