"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CompassIcon,
  MessageCircleIcon,
  TargetIcon,
  UsersIcon,
} from "./icons";
import RevealText from "./motion/RevealText";
import { calendlyUrl } from "@/lib/vistavise-data";

const stats = [
  { end: 100, suffix: "+", label: "Students Guided", tag: "Guided", icon: UsersIcon },
  { end: 98, suffix: "%", label: "Positive Feedback", tag: "Feedback", icon: MessageCircleIcon },
  { end: 8, suffix: "+", label: "Years Experience", tag: "Experience", icon: BriefcaseIcon },
];

const proofTracks = ["BA portfolio practice", "Interview preparation", "Melbourne mentorship"];

const trustRows = [
  { label: "Practical Business Analysis Mentorship", icon: CheckCircleIcon },
  { label: "Real Portfolio Projects", icon: BriefcaseIcon },
  { label: "Interview & Career Guidance", icon: MessageCircleIcon },
  { label: "Melbourne Community Support", icon: UsersIcon },
];

const journeySteps = [
  { label: "Assessment", icon: TargetIcon },
  { label: "Portfolio Projects", icon: BriefcaseIcon },
  { label: "Interview Preparation", icon: MessageCircleIcon },
  { label: "Career Placement", icon: CompassIcon },
];

export default function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding proof-section">
      <div className="container-custom">
        <div className="proof-band">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="proof-copy"
          >
            <span className="proof-eyebrow">Trusted Guidance</span>
            <RevealText
              as="h2"
              className="proof-title"
              text="Credibility built through practical mentoring and real progress."
              variant="premiumHeading"
              float
            />
            <p className="proof-description">
              VistaVise is built around measurable confidence: students guided, positive feedback,
              practical experience, and a local Melbourne mentorship community.
            </p>

            <div className="proof-trust-list">
              {trustRows.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="proof-trust-row">
                    <span className="proof-trust-icon" aria-hidden="true">
                      <Icon size={17} />
                    </span>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="proof-actions">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a Free Consultation
                <ArrowRightIcon size={14} />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Mentorship Program
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="proof-stage"
          >
            <div className="proof-stage-top">
              <p className="proof-stage-label">Business Analysis career readiness</p>

              <div className="proof-controls" aria-hidden="true">
                <span className="proof-control reverse">
                  <ArrowRightIcon size={14} />
                </span>
                <span className="proof-control">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </div>

            <div className="proof-stage-visual" aria-hidden="true">
              <Image
                src="/images/business-analysis-career-readiness.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="proof-stage-image"
                priority={false}
              />
              <span className="proof-stage-shade" />
              <span className="proof-stage-badge">Melbourne Mentorship Community</span>
              <div className="proof-track-list">
                {proofTracks.map((track, index) => (
                  <span key={track} className="proof-track">
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    {track}
                  </span>
                ))}
              </div>
            </div>

            <div className="proof-stats-grid" id="social-proof-grid">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                <div key={item.label} className="proof-stat-card">
                  <span className="proof-stat-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="proof-tag">{item.tag}</span>
                  {inView ? (
                    <AnimatedCounter end={item.end} suffix={item.suffix} label={item.label} />
                  ) : null}
                </div>
                );
              })}
            </div>

            <div className="student-journey-card">
              <div className="student-journey-head">
                <span className="proof-tag">Student Journey</span>
                <p>From first clarity call to confident BA career readiness.</p>
              </div>

              <div className="student-journey-list">
                {journeySteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.label} className="student-journey-step">
                      <span className="student-journey-icon" aria-hidden="true">
                        <Icon size={16} />
                      </span>
                      <span>{step.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .proof-section {
          position: relative;
          overflow: clip;
        }

        .proof-section::before {
          content: "";
          position: absolute;
          inset: 14% auto auto 8%;
          width: min(560px, 48vw);
          height: min(560px, 48vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.68), transparent 66%);
          pointer-events: none;
        }

        .proof-band {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.52fr) minmax(0, 0.48fr);
          gap: var(--space-40);
          align-items: stretch;
        }

        .proof-copy {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          padding: var(--space-32) var(--space-24) var(--space-32) 0;
        }

        .proof-copy::before {
          content: "";
          position: absolute;
          inset: 8% auto auto -7%;
          width: min(320px, 28vw);
          height: 76%;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(220, 234, 247, 0.34), rgba(255, 255, 255, 0));
          filter: blur(2px);
          pointer-events: none;
        }

        .proof-copy > * {
          position: relative;
          z-index: 1;
        }

        .proof-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          width: fit-content;
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .proof-eyebrow::after {
          content: "";
          width: 86px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.34), transparent);
        }

        .proof-title {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 760px;
          font-size: clamp(2.45rem, 3.75vw, 4.35rem);
          line-height: 1.05;
          letter-spacing: -0.05em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .proof-description {
          margin: var(--space-24) 0 0;
          max-width: 580px;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.78;
        }

        .proof-trust-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          width: min(100%, 650px);
          margin-top: var(--space-32);
        }

        .proof-trust-row {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 12px 14px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.64);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.04);
          color: #1e2a38;
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          backdrop-filter: blur(14px);
        }

        .proof-trust-icon {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.82);
          color: #1e2a38;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.78);
        }

        .proof-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: var(--space-32);
        }

        .proof-stage {
          display: grid;
          gap: 20px;
          padding: 20px;
          border-radius: 38px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background:
            radial-gradient(circle at 14% 0%, rgba(220, 234, 247, 0.34), transparent 32%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.84), rgba(247, 250, 252, 0.64));
          box-shadow: 0 30px 90px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(20px);
          transition:
            transform 0.5s var(--ease-premium),
            box-shadow 0.5s var(--ease-premium);
        }

        .proof-stage:hover {
          transform: translateY(-4px);
          box-shadow: 0 38px 100px rgba(15, 23, 42, 0.11);
        }

        .proof-stage-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-24);
          margin-bottom: 0;
        }

        .proof-stage-label {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.86rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .proof-controls {
          display: flex;
          gap: 10px;
        }

        .proof-control {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.1);
          background: rgba(255, 255, 255, 0.86);
          color: var(--text-primary);
        }

        .reverse {
          transform: rotate(180deg);
        }

        .proof-stage-visual {
          position: relative;
          min-height: 260px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          background: #e8ecef;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.62),
            0 18px 54px rgba(15, 23, 42, 0.06);
        }

        .proof-stage-image {
          object-fit: cover;
          object-position: center;
          transform: scale(1.01);
        }

        .proof-stage-shade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(247, 250, 252, 0.42), rgba(247, 250, 252, 0.04) 44%, rgba(17, 18, 20, 0.08)),
            linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(17, 18, 20, 0.1));
          pointer-events: none;
        }

        .proof-stage-badge {
          position: absolute;
          z-index: 2;
          top: 18px;
          left: 18px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.84);
          color: var(--text-primary);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .proof-track-list {
          position: absolute;
          left: 18px;
          bottom: 18px;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          width: min(420px, calc(100% - 36px));
        }

        .proof-track {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.78);
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          backdrop-filter: blur(8px);
        }

        .proof-track strong {
          color: var(--text-muted);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
        }

        .proof-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 0;
        }

        .proof-stat-card {
          min-height: 168px;
          display: grid;
          align-content: start;
          gap: 12px;
          padding: 18px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background:
            radial-gradient(circle at 16% 0%, rgba(220, 234, 247, 0.42), transparent 42%),
            rgba(255, 255, 255, 0.66);
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(16px);
          transition:
            transform 0.42s var(--ease-premium),
            box-shadow 0.42s var(--ease-premium);
        }

        .proof-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 28px 74px rgba(15, 23, 42, 0.1);
        }

        .proof-stat-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background: rgba(220, 234, 247, 0.86);
          color: #1e2a38;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
        }

        .proof-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.05);
          color: var(--text-primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .student-journey-card {
          padding: 22px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(247, 250, 252, 0.62));
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(18px);
        }

        .student-journey-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .student-journey-head p {
          max-width: 330px;
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.94rem;
          font-weight: 700;
          line-height: 1.55;
          text-align: right;
        }

        .student-journey-list {
          position: relative;
          display: grid;
          gap: 12px;
        }

        .student-journey-list::before {
          content: "";
          position: absolute;
          top: 26px;
          bottom: 26px;
          left: 23px;
          width: 1px;
          background: linear-gradient(180deg, rgba(30, 42, 56, 0.08), rgba(47, 115, 214, 0.26), rgba(30, 42, 56, 0.08));
        }

        .student-journey-step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 52px;
          padding: 10px 14px 10px 0;
          color: #1e2a38;
          font-size: 0.98rem;
          font-weight: 850;
          letter-spacing: -0.02em;
        }

        .student-journey-icon {
          position: relative;
          z-index: 1;
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background: rgba(220, 234, 247, 0.9);
          color: #1e2a38;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
        }

        @media (max-width: 1024px) {
          .proof-band {
            grid-template-columns: 1fr;
          }

          .proof-copy {
            padding-right: 0;
          }
        }

        @media (max-width: 640px) {
          .proof-trust-list {
            grid-template-columns: 1fr;
          }

          .proof-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .proof-actions .btn-primary,
          .proof-actions .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .proof-stage {
            padding: var(--space-24);
          }

          .proof-stage-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .proof-stats-grid {
            grid-template-columns: 1fr;
          }

          .student-journey-head {
            display: grid;
          }

          .student-journey-head p {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
