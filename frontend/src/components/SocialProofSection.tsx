"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  MessageCircleIcon,
  TargetIcon,
  UsersIcon,
} from "./icons";
import RevealText from "./motion/RevealText";
import { calendlyUrl } from "@/lib/vistavise-data";

const readinessSignals = [
  "Business Analysis mentoring",
  "Portfolio projects",
  "Interview preparation",
  "Career confidence",
];

const statCards = [
  {
    end: 100,
    suffix: "+",
    label: "Students Mentored",
    note: "Practical BA guidance",
    icon: UsersIcon,
    tone: "powder",
  },
  {
    end: 85,
    suffix: "%",
    label: "Land BA Roles Within 6 Months",
    icon: TargetIcon,
    tone: "light",
  },
];

export default function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section ref={ref} className="section-padding job-ready-section" id="job-ready">
      <div className="container-custom">
        <motion.div
          className="job-ready-shell"
          initial={{ opacity: 0, y: 44 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="job-ready-visual"
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="job-ready-image-card">
              <Image
                src="/images/job-ready-superhero.png"
                alt="Business professional standing confidently on an open hand, representing job-ready career growth"
                fill
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="job-ready-image"
              />
              <span className="job-ready-image-wash" aria-hidden="true" />
            </div>

            <div className="job-ready-stats" aria-label="VistaVise job readiness outcomes">
              {statCards.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    className={`job-ready-stat-card ${stat.tone}`}
                    initial={{ opacity: 0, y: 26, scale: 0.96 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.62,
                      delay: 0.24 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="job-ready-stat-icon" aria-hidden="true">
                      <Icon size={21} />
                    </span>
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} duration={1.5} />
                    {stat.note ? <p>{stat.note}</p> : null}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="job-ready-content"
            initial={{ opacity: 0, x: 26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.76, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="job-ready-eyebrow">Job Ready Program</span>
            <RevealText
              as="h2"
              className="job-ready-title"
              text="Build Job-Ready Business Analysis Skills"
              variant="premiumHeading"
              float
            />
            <p className="job-ready-description">
              VistaVise helps students and professionals move from learning concepts to presenting
              real capability through mentoring, portfolio projects, interview preparation, real
              consulting practices, and grounded career confidence.
            </p>

            <div className="job-ready-signal-grid">
              {readinessSignals.map((signal) => (
                <span key={signal} className="job-ready-signal">
                  <CheckCircleIcon size={16} />
                  {signal}
                </span>
              ))}
            </div>

            <div className="job-ready-actions">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Free Consultation
                <ArrowRightIcon size={14} />
              </a>
              <Link href="/services/business-analysis-mentorship" className="btn-tertiary">
                Explore Mentorship Program
              </Link>
            </div>

            <div className="job-ready-proof-row" aria-label="Program focus areas">
              <span>
                <TargetIcon size={17} />
                Assess
              </span>
              <span>
                <BriefcaseIcon size={17} />
                Build
              </span>
              <span>
                <MessageCircleIcon size={17} />
                Prepare
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .job-ready-section {
          position: relative;
          overflow: clip;
          padding-top: clamp(88px, 9vw, 128px);
          padding-bottom: clamp(88px, 9vw, 128px);
          background:
            radial-gradient(circle at 14% 8%, rgba(220, 234, 247, 0.56), transparent 34%),
            radial-gradient(circle at 86% 84%, rgba(255, 255, 255, 0.72), transparent 34%),
            linear-gradient(180deg, #f8fafc 0%, #f3f7fa 52%, #f7f3ea 100%);
        }

        .job-ready-section::before {
          content: "";
          position: absolute;
          inset: 10% auto auto 46%;
          width: min(620px, 44vw);
          height: min(620px, 44vw);
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.34);
          filter: blur(34px);
          pointer-events: none;
        }

        .job-ready-shell {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.54fr) minmax(0, 0.46fr);
          align-items: center;
          gap: clamp(48px, 6vw, 96px);
        }

        .job-ready-visual {
          position: relative;
          min-height: clamp(560px, 53vw, 760px);
        }

        .job-ready-image-card {
          position: relative;
          height: 100%;
          min-height: clamp(520px, 52vw, 720px);
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background: #eaf8f5;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.82),
            0 34px 100px rgba(30, 42, 56, 0.12);
        }

        .job-ready-image {
          object-fit: cover;
          object-position: 48% 50%;
          transform: scale(1.01);
        }

        .job-ready-image-wash {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.32) 82%),
            radial-gradient(circle at 16% 88%, rgba(255, 255, 255, 0.48), transparent 36%);
          pointer-events: none;
        }

        .job-ready-stats {
          position: absolute;
          z-index: 3;
          right: clamp(20px, 4vw, 54px);
          bottom: clamp(22px, 4vw, 56px);
          left: clamp(20px, 4vw, 54px);
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 22px);
        }

        .job-ready-stat-card {
          position: relative;
          min-height: 178px;
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 10px;
          padding: 24px 22px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background:
            radial-gradient(circle at 50% 0%, rgba(220, 234, 247, 0.54), transparent 54%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.78));
          color: #1e2a38;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            0 24px 70px rgba(30, 42, 56, 0.14);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          transition:
            transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .job-ready-stat-card.powder {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.54), transparent 58%),
            linear-gradient(180deg, rgba(220, 234, 247, 0.92), rgba(255, 255, 255, 0.8));
        }

        .job-ready-stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.94);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            0 30px 86px rgba(30, 42, 56, 0.18);
        }

        .job-ready-stat-icon {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(30, 42, 56, 0.08);
          color: #1d4ed8;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .job-ready-stat-card .gradient-text {
          color: #1e2a38;
          background: none;
          -webkit-text-fill-color: currentColor;
          font-weight: 850;
        }

        .job-ready-stat-card.light .gradient-text {
          color: #1d4ed8;
        }

        .job-ready-stat-card p {
          margin: 0;
          color: #4b5565;
          font-size: 0.88rem;
          font-weight: 650;
          line-height: 1.35;
          text-align: center;
        }

        .job-ready-stat-card > div p {
          margin-top: 8px !important;
          color: #1e2a38 !important;
          font-size: 1rem !important;
          font-weight: 800 !important;
          line-height: 1.25 !important;
        }

        .job-ready-content {
          max-width: 680px;
        }

        .job-ready-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          color: #2c3542;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .job-ready-eyebrow::before {
          content: "";
          width: 78px;
          height: 1px;
          background: linear-gradient(90deg, rgba(29, 78, 216, 0.52), rgba(29, 78, 216, 0));
        }

        .job-ready-title {
          max-width: 680px;
          margin: var(--space-24) 0 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.1rem, 5.4vw, 6.55rem);
          font-weight: 850;
          line-height: 0.99;
          letter-spacing: -0.045em;
          word-spacing: 0.06em;
          text-wrap: balance;
        }

        .job-ready-description {
          max-width: 620px;
          margin: var(--space-24) 0 0;
          color: #536170;
          font-size: clamp(1.04rem, 1.18vw, 1.2rem);
          line-height: 1.78;
        }

        .job-ready-signal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: var(--space-24);
        }

        .job-ready-signal {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.64);
          color: #1e2a38;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          box-shadow: 0 14px 34px rgba(30, 42, 56, 0.05);
          backdrop-filter: blur(14px);
        }

        .job-ready-signal svg {
          flex: 0 0 auto;
          color: #1d4ed8;
        }

        .job-ready-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-top: var(--space-32);
        }

        .job-ready-proof-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: var(--space-24);
          color: #536170;
        }

        .job-ready-proof-row span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.46);
          color: #1e2a38;
          font-size: 0.82rem;
          font-weight: 850;
        }

        .job-ready-proof-row svg {
          color: #1d4ed8;
        }

        @media (max-width: 1120px) {
          .job-ready-shell {
            grid-template-columns: 1fr;
          }

          .job-ready-content {
            max-width: 820px;
          }
        }

        @media (max-width: 700px) {
          .job-ready-section {
            padding-top: var(--space-80);
            padding-bottom: var(--space-80);
          }

          .job-ready-shell {
            gap: var(--space-40);
          }

          .job-ready-visual {
            min-height: auto;
          }

          .job-ready-image-card {
            min-height: 420px;
            border-radius: 28px;
          }

          .job-ready-image {
            object-position: 52% 50%;
          }

          .job-ready-stats {
            position: relative;
            inset: auto;
            grid-template-columns: 1fr;
            margin-top: -58px;
            padding: 0 16px;
          }

          .job-ready-stat-card {
            min-height: 156px;
          }

          .job-ready-eyebrow::before {
            width: 46px;
          }

          .job-ready-title {
            font-size: clamp(2.65rem, 12vw, 4.2rem);
          }

          .job-ready-signal-grid {
            grid-template-columns: 1fr;
          }

          .job-ready-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .job-ready-actions .btn-primary,
          .job-ready-actions .btn-tertiary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
