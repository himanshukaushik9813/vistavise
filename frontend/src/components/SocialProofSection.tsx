"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRightIcon, BriefcaseIcon, CalendarIcon, MessageCircleIcon, TargetIcon, UsersIcon } from "./icons";
import RevealText from "./motion/RevealText";
import { calendlyUrl, flagshipProgram } from "@/lib/vistavise-data";

const programHighlights = [
  {
    title: "1:1 BA Mentorship",
    body: "Personalized guidance tailored to your specific background and skill gaps.",
    icon: UsersIcon,
  },
  {
    title: "Portfolio-Ready Projects",
    body: "Solve hands-on, enterprise-style case studies you can showcase to employers.",
    icon: BriefcaseIcon,
  },
  {
    title: "Targeted Interview Prep",
    body: "Master story-based responses, scenario handling, and mock interviews.",
    icon: MessageCircleIcon,
  },
  {
    title: "Grounded Career Confidence",
    body: "Learn real consulting workflows to excel on the job from day one.",
    icon: TargetIcon,
  },
];

export default function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section ref={ref} className="job-ready-section section-padding" id="job-ready">
      <div className="container-custom job-ready-shell">
        <motion.div
          className="job-ready-content"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Job-Ready Program</span>
          <RevealText
            as="h2"
            className="job-ready-title"
            text="Build Practical Business Analysis Skills That Get You Hired"
            variant="premiumHeading"
            float
          />
          <p className="job-ready-description">
            Bridge the gap between theoretical knowledge and real-world execution. VistaVise equips aspiring and working
            professionals with hands-on portfolio projects, industry-standard consulting frameworks, and tailored
            interview coaching to step into any BA role with complete confidence.
          </p>

          <div className="job-ready-highlights" aria-label="Core program highlights">
            {programHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="job-ready-highlight"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                >
                  <span className="job-ready-highlight-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="job-ready-actions">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary job-ready-btn">
              Book Free Consultation
              <ArrowRightIcon size={16} />
            </a>
            <Link href={flagshipProgram.href} className="btn-secondary job-ready-btn">
              View the 8-Week Program
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="job-ready-media"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/business-analysis-mentoring-session.png"
            alt="A VistaVise mentor reviewing Business Analysis work with a learner"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="job-ready-image"
          />
          <span className="job-ready-media-shade" aria-hidden="true" />
          <div className="job-ready-fact-card">
            <span className="job-ready-fact-badge">{flagshipProgram.eyebrow}</span>
            <p className="job-ready-fact-title">{flagshipProgram.title}</p>
            <ul className="job-ready-fact-list">
              <li>
                <CalendarIcon size={16} />
                {flagshipProgram.detail.highlights[0].value}
              </li>
              <li>
                <UsersIcon size={16} />
                {flagshipProgram.detail.highlights[1].value}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .job-ready-section {
          position: relative;
          overflow: clip;
        }

        .job-ready-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          gap: clamp(36px, 5.5vw, 84px);
          align-items: center;
        }

        .job-ready-content {
          display: grid;
          justify-items: start;
        }

        .job-ready-title {
          margin: 20px 0 0;
          max-width: 19ch;
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: var(--fs-heading);
          font-weight: var(--heading-weight);
          line-height: var(--heading-line-height);
          letter-spacing: var(--heading-tracking);
          text-wrap: balance;
        }

        .job-ready-description {
          max-width: 600px;
          margin: 22px 0 0;
          color: var(--text-secondary);
          font-size: var(--fs-lead);
          line-height: 1.8;
        }

        .job-ready-highlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-auto-rows: 1fr;
          gap: 12px;
          width: 100%;
          margin-top: 32px;
        }

        .job-ready-highlight {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          height: 100%;
          padding: 20px;
          border-radius: 20px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.72);
          transition:
            transform 0.4s var(--ease-premium),
            background 0.4s var(--ease-premium),
            box-shadow 0.4s var(--ease-premium),
            border-color 0.4s var(--ease-premium);
        }

        .job-ready-highlight:hover {
          transform: translateY(-3px);
          border-color: rgba(138, 106, 63, 0.18);
          background: #ffffff;
          box-shadow: 0 18px 44px rgba(15, 23, 42, 0.07);
        }

        .job-ready-highlight-icon {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          color: var(--accent-warm);
          background: var(--primary);
        }

        .job-ready-highlight h3 {
          margin: 2px 0 0;
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: 1.04rem;
          font-weight: var(--heading-weight);
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .job-ready-highlight p {
          margin: 6px 0 0;
          color: var(--text-secondary);
          font-size: 0.93rem;
          line-height: 1.6;
        }

        .job-ready-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .job-ready-btn {
          min-height: 52px;
          padding: 0 24px;
        }

        .job-ready-media {
          position: relative;
          align-self: stretch;
          min-height: 560px;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(30, 42, 56, 0.08);
          box-shadow: 0 36px 90px rgba(15, 23, 42, 0.14);
        }

        .job-ready-image {
          object-fit: cover;
          object-position: 64% center;
        }

        .job-ready-media-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 52%, rgba(15, 23, 36, 0.55) 100%);
          pointer-events: none;
        }

        .job-ready-fact-card {
          position: absolute;
          left: clamp(16px, 2.4vw, 28px);
          right: clamp(16px, 2.4vw, 28px);
          bottom: clamp(16px, 2.4vw, 28px);
          padding: 20px 22px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.18);
          backdrop-filter: blur(14px);
        }

        .job-ready-fact-badge {
          display: inline-flex;
          align-items: center;
          min-height: 26px;
          padding: 0 12px;
          border-radius: 999px;
          background: var(--secondary);
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .job-ready-fact-title {
          margin: 12px 0 0;
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: 1.2rem;
          font-weight: var(--heading-weight);
          letter-spacing: -0.02em;
        }

        .job-ready-fact-list {
          display: grid;
          gap: 8px;
          margin: 12px 0 0;
          padding: 0;
          list-style: none;
        }

        .job-ready-fact-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: none;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.4;
        }

        .job-ready-fact-list svg {
          flex-shrink: 0;
          color: var(--accent-warm);
        }

        @media (max-width: 1024px) {
          .job-ready-shell {
            grid-template-columns: 1fr;
          }

          .job-ready-title {
            max-width: 20ch;
          }

          .job-ready-media {
            order: -1;
            min-height: 0;
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 640px) {
          .job-ready-highlights {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
          }

          .job-ready-media {
            aspect-ratio: 4 / 5;
            border-radius: 24px;
          }

          .job-ready-fact-card {
            padding: 14px 16px;
            border-radius: 18px;
          }

          .job-ready-fact-title {
            margin-top: 8px;
            font-size: 1.05rem;
          }

          .job-ready-fact-list li + li {
            display: none;
          }

          .job-ready-fact-list {
            margin-top: 6px;
          }

          .job-ready-actions,
          .job-ready-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
