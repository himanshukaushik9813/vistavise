"use client";

import { useEffect, useRef } from "react";
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
  { end: 100, suffix: "+", label: "Students Guided", support: "Mentored across Australia", icon: UsersIcon },
  { end: 98, suffix: "%", label: "Positive Feedback", support: "Trusted by learners", icon: MessageCircleIcon },
  { end: 8, suffix: "+", label: "Years Experience", support: "Industry experience", icon: BriefcaseIcon },
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

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let frame = 0;

    const updateDepth = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      const copyY = 14 + progress * -28;
      const shapeY = 28 + progress * -52;

      section.style.setProperty("--proof-copy-y", `${copyY.toFixed(2)}px`);
      section.style.setProperty("--proof-shape-y", `${shapeY.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateDepth);
    };

    updateDepth();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

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
            <span className="proof-orb proof-orb-large" aria-hidden="true" />
            <span className="proof-orb proof-orb-small" aria-hidden="true" />
            <div className="proof-copy-inner">
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
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    className="proof-stat-card"
                    initial={{ y: 20, scale: 0.96 }}
                    animate={inView ? { y: 0, scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      mass: 0.8,
                      delay: 0.16 + index * 0.08,
                    }}
                  >
                    <span className="proof-stat-dark-layer" aria-hidden="true" />
                    <span className="proof-stat-glass-layer" aria-hidden="true" />
                    <span className="proof-stat-glow-layer" aria-hidden="true" />

                    <div className="proof-stat-content">
                      <span className="proof-stat-icon" aria-hidden="true">
                        <Icon size={19} />
                      </span>
                      <div className="proof-counter-shell">
                        {inView ? (
                          <AnimatedCounter end={item.end} suffix={item.suffix} label={item.label} duration={1.7} />
                        ) : null}
                      </div>
                      <p className="proof-stat-support">{item.support}</p>
                    </div>
                  </motion.div>
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
          padding-top: clamp(72px, 8vw, 96px);
          padding-bottom: clamp(76px, 8vw, 104px);
        }

        .proof-section::before {
          content: "";
          position: absolute;
          inset: 8% auto auto 6%;
          width: min(680px, 52vw);
          height: min(680px, 52vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(220, 234, 247, 0.22), rgba(255, 255, 255, 0.34) 34%, transparent 68%);
          pointer-events: none;
        }

        .proof-band {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.45fr) minmax(0, 0.55fr);
          gap: clamp(40px, 5vw, 72px);
          align-items: start;
        }

        .proof-copy {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: flex-start;
          align-self: start;
          max-width: 760px;
          padding: clamp(10px, 1.4vw, 20px) 0 0;
          will-change: transform;
        }

        .proof-copy::before {
          content: "";
          position: absolute;
          inset: -8% auto auto -8%;
          width: min(520px, 34vw);
          height: min(520px, 34vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(220, 234, 247, 0.32), rgba(220, 234, 247, 0.08) 45%, transparent 70%);
          filter: blur(4px);
          pointer-events: none;
        }

        .proof-orb {
          position: absolute;
          z-index: 0;
          display: block;
          border-radius: 999px;
          pointer-events: none;
          will-change: transform;
        }

        .proof-orb-large {
          top: 18%;
          right: 5%;
          width: 190px;
          height: 190px;
          border: 1px solid rgba(30, 42, 56, 0.04);
          background: rgba(220, 234, 247, 0.05);
          box-shadow: inset 0 0 70px rgba(255, 255, 255, 0.5);
          transform: translate3d(0, var(--proof-shape-y, 0px), 0);
        }

        .proof-orb-small {
          left: -4%;
          bottom: 18%;
          width: 118px;
          height: 118px;
          background: rgba(30, 42, 56, 0.035);
          filter: blur(1px);
          transform: translate3d(0, var(--proof-copy-y, 0px), 0);
        }

        .proof-copy-inner {
          position: relative;
          z-index: 1;
          transform: translate3d(0, var(--proof-copy-y, 0px), 0);
          will-change: transform;
        }

        .proof-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          width: fit-content;
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .proof-eyebrow::before {
          content: "";
          width: 2px;
          height: 30px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(30, 42, 56, 0.18), rgba(220, 234, 247, 0.72));
        }

        .proof-eyebrow::after {
          content: "";
          width: 96px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.34), transparent);
        }

        .proof-title {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 860px;
          font-size: clamp(2.45rem, 3.75vw, 4.35rem);
          line-height: 1.05;
          letter-spacing: -0.05em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .proof-description {
          margin: var(--space-24) 0 0;
          max-width: 640px;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.78;
        }

        .proof-trust-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          width: min(100%, 710px);
          margin-top: var(--space-24);
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
          margin-top: var(--space-24);
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
          align-self: start;
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
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: -86px 16px 0;
        }

        .proof-section .proof-stat-card {
          min-height: 194px;
          position: relative;
          display: block;
          padding: 22px 18px;
          overflow: hidden;
          isolation: isolate;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: transparent;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.14),
            0 20px 54px rgba(15, 23, 42, 0.18);
          color: #ffffff;
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
          transition:
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 520ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .proof-stat-dark-layer,
        .proof-stat-glass-layer,
        .proof-stat-glow-layer {
          position: absolute;
          pointer-events: none;
        }

        .proof-stat-dark-layer {
          inset: 0;
          z-index: 1;
          border-radius: inherit;
          background:
            radial-gradient(circle at 50% -18%, rgba(255, 255, 255, 0.1), transparent 52%),
            rgba(13, 23, 36, 0.88);
          transition: background 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .proof-stat-glass-layer {
          inset: 0;
          z-index: 2;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at 50% -16%, rgba(220, 234, 247, 0.22), transparent 56%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.085) 46%, rgba(255, 255, 255, 0.13));
          backdrop-filter: blur(26px);
          -webkit-backdrop-filter: blur(26px);
          transition: background 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .proof-stat-glow-layer {
          inset: auto 18% -44% 18%;
          z-index: 3;
          height: 88px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.42);
          filter: blur(28px);
          opacity: 0.18;
          transition: opacity 520ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .proof-stat-content {
          position: absolute;
          inset: 20px 18px;
          z-index: 20;
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 8px;
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
          isolation: isolate;
        }

        .proof-section .proof-stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 28px 70px rgba(15, 23, 42, 0.24),
            0 0 42px rgba(220, 234, 247, 0.14);
        }

        .proof-section .proof-stat-card:hover .proof-stat-dark-layer {
          background:
            radial-gradient(circle at 50% -18%, rgba(255, 255, 255, 0.13), transparent 54%),
            rgba(17, 30, 46, 0.9);
        }

        .proof-section .proof-stat-card:hover .proof-stat-glass-layer {
          background:
            radial-gradient(circle at 50% -16%, rgba(220, 234, 247, 0.3), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.11) 46%, rgba(255, 255, 255, 0.16));
        }

        .proof-section .proof-stat-card:hover .proof-stat-glow-layer {
          opacity: 0.36;
        }

        .proof-section .proof-stat-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(220, 234, 247, 0.4);
          background: rgba(220, 234, 247, 0.22);
          color: #dceaf7;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 10px 28px rgba(15, 23, 42, 0.12);
          transition:
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            background 520ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .proof-section .proof-stat-card:hover .proof-stat-icon {
          transform: rotate(5deg) translateY(-1px);
          border-color: rgba(255, 255, 255, 0.34);
          background: rgba(220, 234, 247, 0.3);
        }

        .proof-counter-shell {
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
          transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .proof-section .proof-stat-card:hover .proof-counter-shell {
          transform: scale(1.03);
        }

        .proof-section .proof-counter-shell > div > span {
          color: #f8f6f2 !important;
          font-size: clamp(2.28rem, 3.55vw, 3rem) !important;
          font-weight: 800 !important;
          line-height: 0.95 !important;
          letter-spacing: -0.04em !important;
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal !important;
          text-shadow:
            0 1px 3px rgba(0, 0, 0, 0.45),
            0 16px 34px rgba(0, 0, 0, 0.28);
        }

        .proof-section .proof-stat-card .gradient-text {
          color: #f8f6f2;
          background: none;
          -webkit-text-fill-color: currentColor;
          font-weight: 800;
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
          text-shadow:
            0 1px 3px rgba(0, 0, 0, 0.35),
            0 14px 34px rgba(0, 0, 0, 0.2);
        }

        .proof-section .proof-counter-shell > div {
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
        }

        .proof-section .proof-counter-shell p {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1.04rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.01em !important;
          line-height: 1.38 !important;
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }

        .proof-stat-support {
          margin: -2px 0 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          line-height: 1.45;
          text-align: center;
          opacity: 1 !important;
          filter: none !important;
          mix-blend-mode: normal;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }

        .proof-section .proof-stat-card:hover .proof-counter-shell p,
        .proof-section .proof-stat-card:hover .proof-stat-support {
          color: rgba(255, 255, 255, 1) !important;
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
            gap: var(--space-40);
          }

          .proof-copy {
            max-width: 100%;
            padding-right: 0;
          }
        }

        @media (max-width: 900px) {
          .proof-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .proof-section .proof-stat-card:last-child {
            grid-column: 1 / -1;
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
            margin: -52px 10px 0;
          }

          .proof-section .proof-stat-card:last-child {
            grid-column: auto;
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
