"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  MessageCircleIcon,
  UsersIcon,
} from "./icons";
import RevealText from "./motion/RevealText";
import { calendlyUrl } from "@/lib/vistavise-data";

const stats = [
  { end: 100, suffix: "+", label: "Students Guided", tag: "Guided" },
  { end: 98, suffix: "%", label: "Positive Feedback", tag: "Feedback" },
  { end: 8, suffix: "+", label: "Years Experience", tag: "Experience" },
];

const proofTracks = ["BA portfolio practice", "Interview preparation", "Melbourne mentorship"];

const trustRows = [
  { label: "Practical Business Analysis Mentorship", icon: CheckCircleIcon },
  { label: "Real Portfolio Projects", icon: BriefcaseIcon },
  { label: "Interview & Career Guidance", icon: MessageCircleIcon },
  { label: "Melbourne Community Support", icon: UsersIcon },
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
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`proof-stat-card ${index === 0 ? "is-primary" : ""}`}
                >
                  <span className="proof-tag">{item.tag}</span>
                  {inView ? (
                    <AnimatedCounter end={item.end} suffix={item.suffix} label={item.label} />
                  ) : null}
                </div>
              ))}
              <div className="proof-stat-card community-card">
                <span className="proof-tag">Community</span>
                <strong>Melbourne</strong>
                <p>Mentorship Community</p>
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
          padding: 24px;
          border-radius: 38px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(247, 247, 242, 0.66));
          box-shadow: var(--shadow-panel);
          backdrop-filter: blur(14px);
        }

        .proof-stage-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-24);
          margin-bottom: var(--space-24);
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
          min-height: 240px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(17, 18, 20, 0.06);
          background: #e8ecef;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.62);
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
          display: grid;
          gap: 8px;
          width: min(250px, calc(100% - 36px));
        }

        .proof-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-24);
          margin-top: var(--space-24);
        }

        .proof-stat-card {
          padding: var(--space-24);
        }

        .proof-stat-card.is-primary {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: minmax(0, 0.34fr) minmax(0, 0.66fr);
          gap: var(--space-24);
          align-items: center;
          padding: var(--space-24);
        }

        .community-card strong {
          display: block;
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .community-card p {
          margin: 10px 0 0;
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.35;
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

          .proof-stat-card.is-primary {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
