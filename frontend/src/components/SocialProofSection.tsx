"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRightIcon, BriefcaseIcon, MessageCircleIcon, TargetIcon, UsersIcon } from "./icons";
import RevealText from "./motion/RevealText";
import { calendlyUrl } from "@/lib/vistavise-data";

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
    <section ref={ref} className="job-ready-section" id="job-ready">
      <div className="job-ready-background" aria-hidden="true">
        <Image
          src="/images/business-analysis-mentoring-session.png"
          alt=""
          fill
          sizes="100vw"
          className="job-ready-background-image"
        />
        <span className="job-ready-overlay" />
        <span className="job-ready-vignette" />
      </div>

      <div className="container-custom job-ready-shell">
        <motion.div
          className="job-ready-content"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="job-ready-eyebrow">Job-Ready Program</span>
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
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="job-ready-btn job-ready-btn-primary">
              Book Free Consultation
              <ArrowRightIcon size={16} />
            </a>
            <Link href="/services" className="job-ready-btn job-ready-btn-secondary">
              Explore Mentorship Program
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .job-ready-section {
          position: relative;
          overflow: clip;
          isolation: isolate;
          padding: clamp(96px, 10vw, 140px) 0;
          background: #11110f;
        }

        .job-ready-background {
          position: absolute;
          inset: 0;
          z-index: -3;
          overflow: hidden;
        }

        .job-ready-background-image {
          object-fit: cover;
          object-position: 70% center;
          filter: saturate(0.9) contrast(1.04);
        }

        .job-ready-overlay,
        .job-ready-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .job-ready-overlay {
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(6, 7, 8, 0.92) 0%,
              rgba(10, 10, 9, 0.8) 38%,
              rgba(10, 10, 9, 0.46) 64%,
              rgba(10, 10, 9, 0.18) 100%
            ),
            radial-gradient(circle at 22% 40%, rgba(255, 247, 232, 0.1), transparent 34%);
        }

        .job-ready-vignette {
          z-index: 2;
          background: linear-gradient(180deg, rgba(6, 7, 8, 0.36) 0%, transparent 30%, rgba(6, 7, 8, 0.5) 100%);
        }

        .job-ready-shell {
          position: relative;
          z-index: 3;
        }

        .job-ready-content {
          display: grid;
          justify-items: start;
          max-width: 820px;
        }

        .job-ready-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: rgba(246, 241, 232, 0.74);
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .job-ready-eyebrow::after {
          content: "";
          width: 54px;
          height: 1px;
          background: rgba(246, 241, 232, 0.32);
        }

        .job-ready-title {
          margin: 22px 0 0;
          max-width: 820px;
          color: #f6f1e8;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.6rem, 4.4vw, 4.6rem);
          line-height: 1.05;
          letter-spacing: -0.055em;
          text-shadow: 0 3px 34px rgba(0, 0, 0, 0.34);
          text-wrap: balance;
        }

        .job-ready-description {
          max-width: 700px;
          margin: 24px 0 0;
          color: rgba(246, 241, 232, 0.8);
          font-size: clamp(1rem, 1.2vw, 1.12rem);
          line-height: 1.8;
          text-shadow: 0 2px 22px rgba(0, 0, 0, 0.3);
        }

        .job-ready-highlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          width: 100%;
          margin-top: 32px;
        }

        .job-ready-highlight {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(10, 10, 9, 0.38);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
        }

        .job-ready-highlight-icon {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          color: #ead9bd;
          background: rgba(255, 255, 255, 0.1);
        }

        .job-ready-highlight h3 {
          margin: 0;
          color: #f6f1e8;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.02rem;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .job-ready-highlight p {
          margin: 6px 0 0;
          color: rgba(246, 241, 232, 0.74);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .job-ready-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .job-ready-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 54px;
          padding: 0 24px;
          border-radius: 999px;
          font-weight: 850;
          text-decoration: none;
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .job-ready-btn:hover {
          transform: translateY(-2px);
        }

        .job-ready-btn-primary {
          color: #1f1b16;
          background: linear-gradient(180deg, #fff4e1, #ead9bd);
          border: 1px solid rgba(255, 255, 255, 0.34);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.26);
        }

        .job-ready-btn-primary:hover {
          background: linear-gradient(180deg, #fff8ea, #f0dfc5);
        }

        .job-ready-btn-secondary {
          color: rgba(246, 241, 232, 0.92);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(18px);
        }

        .job-ready-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        @media (max-width: 768px) {
          .job-ready-background-image {
            object-position: 60% center;
          }

          .job-ready-overlay {
            background: linear-gradient(180deg, rgba(6, 7, 8, 0.82), rgba(6, 7, 8, 0.9));
          }

          .job-ready-highlights {
            grid-template-columns: 1fr;
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
