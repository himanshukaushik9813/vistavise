"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { ArrowRightIcon } from "./icons";
import RevealText from "./motion/RevealText";

const stats = [
  { end: 98, suffix: "%", label: "Client satisfaction", tag: "Satisfaction" },
  { end: 100, suffix: "+", label: "Strategic sessions", tag: "Sessions" },
  { end: 8, suffix: "+", label: "Years of experience", tag: "Experience" },
  { end: 3, suffix: "x", label: "Clarity across business and migration pathways", tag: "Focus" },
];

const proofTracks = ["Decision clarity", "Delivery rhythm", "Australia pathways"];

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
            <span className="eyebrow">Trusted Guidance</span>
            <RevealText
              as="h2"
              className="proof-title"
              text="Trust signals connected to real guidance."
              variant="premiumHeading"
              float
            />
            <p className="proof-description">
              Satisfaction, sessions, experience, and clarity focus are presented as one connected
              view of how VistaVise supports better decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="proof-stage"
          >
            <div className="proof-stage-top">
              <p className="proof-stage-label">Business, delivery, and transition pathways</p>

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
              <span className="proof-stage-badge">VistaVise Consulting</span>
              <div className="proof-track-list">
                {proofTracks.map((track, index) => (
                  <span key={track} className="proof-track">
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    {track}
                  </span>
                ))}
              </div>
              <svg className="proof-map" viewBox="0 0 520 220">
                <path d="M52 156C126 92 184 82 248 122C326 170 388 98 468 68" />
                <circle cx="52" cy="156" r="7" />
                <circle cx="248" cy="122" r="7" />
                <circle cx="468" cy="68" r="7" />
                <path d="M36 188H484" />
                <path d="M36 58H484" />
              </svg>
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
          grid-template-columns: minmax(0, 0.44fr) minmax(0, 0.56fr);
          gap: var(--space-40);
          align-items: stretch;
        }

        .proof-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 12px;
        }

        .proof-title {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 520px;
          font-size: clamp(2.25rem, 3.6vw, 3.85rem);
          line-height: 1.1;
          letter-spacing: -0.05em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .proof-description {
          margin: var(--space-24) 0 0;
          max-width: 460px;
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.86;
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
          background:
            radial-gradient(circle at 16% 18%, rgba(255, 255, 255, 0.88), transparent 28%),
            radial-gradient(circle at 88% 22%, rgba(224, 230, 233, 0.62), transparent 30%),
            linear-gradient(180deg, #ecefed 0%, #dde2e5 100%);
        }

        .proof-stage-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.88);
          color: var(--text-primary);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
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
          background: rgba(255, 255, 255, 0.72);
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

        .proof-map {
          position: absolute;
          right: -14px;
          top: 38px;
          width: min(70%, 430px);
          color: rgba(17, 18, 20, 0.24);
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: rgba(255, 255, 255, 0.5);
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
        }

        @media (max-width: 640px) {
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
