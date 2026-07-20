"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from "./icons";
import { calendlyUrl } from "@/lib/vistavise-data";

const proofPills = [
  { label: "Practical Deliverables", icon: "🎯" },
  { label: "Mentor Guidance", icon: "👥" },
  { label: "Interview Confidence", icon: "💬" },
  { label: "Portfolio Projects", icon: "📁" },
];

const miniBlocks = [
  {
    title: "Learn Concepts",
    body: "Easy to understand in class",
    icon: CheckCircleIcon,
  },
  {
    title: "Apply with Confidence",
    body: "Through real projects, mentorship & practice",
    icon: BriefcaseIcon,
  },
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
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="goal-copy"
        >
          <span className="goal-eyebrow">Problem Statement</span>
          <h2 className="goal-title">
            Most aspiring BAs don&apos;t need more theory.
            <span>They need proof they can do the work.</span>
          </h2>
          <p className="goal-lede">
            We bridge the gap between learning and landing Business Analyst roles through practical
            deliverables, mentor guidance and real interview preparation.
          </p>

          <div className="goal-proof-pills" aria-label="VistaVise focus areas">
            {proofPills.map((item) => (
              <span key={item.label}>
                <em aria-hidden="true">{item.icon}</em>
                {item.label}
              </span>
            ))}
          </div>

          <div className="goal-actions">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
              <ArrowRightIcon size={14} />
            </a>
            <Link href="/services/business-analysis-mentorship" className="btn-tertiary">
              Explore Mentorship Program
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.76, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="goal-solution-card"
        >
          <div className="goal-card-header">
            <p className="goal-card-label">Why learners get stuck</p>
            <span>01</span>
          </div>

          <div className="goal-image-frame">
            <Image
              src="/images/learners-stuck-laptop.png"
              alt="Learner working on a laptop while preparing for Business Analysis career readiness"
              fill
              sizes="(max-width: 960px) 100vw, 52vw"
              className="goal-image"
            />
          </div>

          <div className="goal-mini-grid">
            {miniBlocks.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="goal-mini-block">
                  <span className="goal-mini-icon" aria-hidden="true">
                    {index === 0 ? <CheckCircleIcon size={21} /> : <Icon size={21} />}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="goal-ready-banner">
            <CheckCircleIcon size={18} />
            Job-ready skills. Real-world proof. Better career outcomes.
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .goal-section {
          position: relative;
          overflow: clip;
          padding-top: 120px;
          padding-bottom: 120px;
          background:
            radial-gradient(circle at 13% 18%, rgba(220, 234, 247, 0.72), transparent 32%),
            radial-gradient(circle at 88% 12%, rgba(255, 255, 255, 0.9), transparent 34%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(244, 249, 253, 0.94)),
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
          top: 16%;
          left: 5%;
          width: min(520px, 38vw);
          height: min(520px, 38vw);
          background: radial-gradient(circle, rgba(220, 234, 247, 0.42), transparent 68%);
          filter: blur(4px);
        }

        .goal-bg-orb-two {
          right: 5%;
          bottom: 9%;
          width: min(380px, 28vw);
          height: min(380px, 28vw);
          background: rgba(255, 255, 255, 0.46);
          border: 1px solid rgba(30, 42, 56, 0.045);
        }

        .goal-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);
          gap: 64px;
          align-items: center;
          max-width: 1440px;
        }

        .goal-copy {
          max-width: 650px;
        }

        .goal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          color: #1d4ed8;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .goal-eyebrow::before {
          content: "";
          width: 2px;
          height: 30px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(29, 78, 216, 0.1), rgba(29, 78, 216, 0.52));
        }

        .goal-eyebrow::after {
          content: "";
          width: 78px;
          height: 1px;
          background: linear-gradient(90deg, rgba(29, 78, 216, 0.38), transparent);
        }

        .goal-title {
          margin: 34px 0 0;
          color: #10233f;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.6rem, 4.95vw, 4.5rem);
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .goal-title span {
          display: block;
          margin-top: 4px;
          color: #1d4ed8;
        }

        .goal-lede {
          margin: 26px 0 0;
          max-width: 620px;
          color: #5b6676;
          font-size: clamp(1.08rem, 1.25vw, 1.25rem);
          line-height: 1.82;
        }

        .goal-proof-pills {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 34px;
        }

        .goal-proof-pills span {
          min-height: 58px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.04);
          color: #10233f;
          font-size: 0.86rem;
          font-weight: 850;
          line-height: 1.25;
          backdrop-filter: blur(14px);
        }

        .goal-proof-pills em {
          font-style: normal;
          font-size: 1.12rem;
          line-height: 1;
        }

        .goal-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-top: 42px;
        }

        .goal-solution-card {
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 24px;
          padding: clamp(28px, 3.6vw, 42px);
          border-radius: 36px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background:
            radial-gradient(circle at 18% 0%, rgba(220, 234, 247, 0.34), transparent 34%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(247, 250, 252, 0.7));
          box-shadow: 0 34px 100px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(24px);
          transition:
            transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .goal-solution-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 42px 120px rgba(15, 23, 42, 0.14);
        }

        .goal-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .goal-card-label {
          margin: 0;
          color: #10233f;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .goal-card-header span {
          width: 52px;
          height: 52px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.92);
          color: #1d4ed8;
          font-size: 1.16rem;
          font-weight: 900;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
        }

        .goal-image-frame {
          position: relative;
          height: clamp(330px, 31vw, 460px);
          overflow: hidden;
          border-radius: 28px;
          background: #eef5f8;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.08);
        }

        .goal-image {
          object-fit: cover;
          object-position: 50% 42%;
          transform: scale(1.01);
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .goal-solution-card:hover .goal-image {
          transform: scale(1.03);
        }

        .goal-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.76);
          background: rgba(255, 255, 255, 0.76);
          box-shadow: 0 20px 56px rgba(15, 23, 42, 0.055);
        }

        .goal-mini-block {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 16px;
          align-items: center;
          padding: 28px;
        }

        .goal-mini-block + .goal-mini-block {
          border-left: 1px solid rgba(29, 78, 216, 0.12);
        }

        .goal-mini-icon {
          width: 58px;
          height: 58px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.92);
          color: #1d4ed8;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
        }

        .goal-mini-block h3 {
          margin: 0;
          color: #10233f;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.08rem;
          font-weight: 850;
          letter-spacing: -0.035em;
        }

        .goal-mini-block p {
          margin: 8px 0 0;
          color: #5b6676;
          font-size: 0.98rem;
          font-weight: 650;
          line-height: 1.46;
        }

        .goal-ready-banner {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 22px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(220, 234, 247, 0.96), rgba(207, 225, 242, 0.86));
          color: #10233f;
          font-size: clamp(0.98rem, 1.2vw, 1.08rem);
          font-weight: 850;
          line-height: 1.35;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
        }

        .goal-ready-banner svg {
          flex: 0 0 auto;
          color: #1d4ed8;
        }

        @media (max-width: 1180px) {
          .goal-proof-pills {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 960px) {
          .goal-section {
            padding-top: 96px;
            padding-bottom: 96px;
          }

          .goal-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .goal-copy {
            max-width: 780px;
          }
        }

        @media (max-width: 640px) {
          .goal-section {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .goal-title {
            font-size: clamp(2.72rem, 12vw, 4rem);
          }

          .goal-proof-pills,
          .goal-mini-grid {
            grid-template-columns: 1fr;
          }

          .goal-mini-block + .goal-mini-block {
            border-left: 0;
            border-top: 1px solid rgba(29, 78, 216, 0.12);
          }

          .goal-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .goal-actions .btn-primary,
          .goal-actions .btn-tertiary {
            width: 100%;
            justify-content: center;
          }

          .goal-solution-card {
            padding: 22px;
            border-radius: 30px;
          }

          .goal-image-frame {
            height: 280px;
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}
