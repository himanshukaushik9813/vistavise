"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import RevealText from "./motion/RevealText";
import { ArrowRightIcon, BriefcaseIcon, CheckCircleIcon, TargetIcon } from "./icons";
import { calendlyUrl } from "@/lib/vistavise-data";

const heroStats = [
  { end: 100, suffix: "+", label: "Students guided" },
  { end: 98, suffix: "%", label: "Positive feedback" },
  { end: 8, suffix: "+", label: "Years experience" },
];

const heroBadges = [
  { label: "Portfolio-led learning", icon: BriefcaseIcon },
  { label: "Mock interview practice", icon: TargetIcon },
  { label: "Personal mentor feedback", icon: CheckCircleIcon },
];

const heroPrinciples = [
  "Practical BA projects guided by real consulting structure",
  "Career readiness support for interviews, resumes, and confidence",
  "A calm mentorship path for students and professionals in Australia",
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="hero" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <Image
          src="/images/meet-ajay-boardroom.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-background-image"
        />
        <span className="hero-readable-overlay" />
        <span className="hero-bottom-vignette" />
      </div>

      <div className="container-custom hero-shell">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="hero-copy"
          >
            <p className="hero-eyebrow">Premium Business Analysis Mentorship</p>
            <RevealText
              as="h1"
              className="hero-title"
              text="Build Job Ready Business Analysis Skills"
              mode="lines"
              variant="premiumHeading"
              float
            />
            <p className="hero-subtitle">
              Learn practical Business Analysis skills, solve real-world business problems, build an industry-ready
              portfolio, receive personalised mentoring and confidently prepare for Business Analyst roles.
            </p>

            <div className="hero-actions">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
                Book Free Consultation
                <ArrowRightIcon size={16} />
              </a>
              <Link href="#services" className="hero-btn hero-btn-secondary">
                Explore Mentorship Program
              </Link>
            </div>

            <div className="hero-principles" aria-label="VistaVise mentorship principles">
              {heroPrinciples.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className="hero-principle"
                >
                  <CheckCircleIcon size={16} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="hero-outcome-panel"
            aria-label="VistaVise outcomes"
          >
            <span className="hero-panel-label">Guided outcomes</span>
            <div className="hero-badge-row">
              {heroBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <span key={badge.label} className="hero-badge">
                    <Icon size={15} />
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="hero-stats-grid"
        >
          {heroStats.map((item) => (
            <div key={item.label} className="hero-stat-card">
              <AnimatedCounter end={item.end} suffix={item.suffix} label={item.label} />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .hero-section {
          position: relative;
          min-height: clamp(700px, 88vh, 920px);
          margin-top: -92px;
          padding: clamp(122px, 14vh, 156px) 0 clamp(48px, 6vh, 68px);
          overflow: clip;
          isolation: isolate;
          background: #11110f;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -3;
          overflow: hidden;
        }

        .hero-background-image {
          object-fit: cover;
          object-position: center;
          filter: saturate(0.92) contrast(1.04);
          animation: heroCinematicZoom 25s ease-in-out infinite alternate;
          transform-origin: center;
          will-change: transform;
        }

        .hero-readable-overlay,
        .hero-bottom-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-readable-overlay {
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(6, 7, 8, 0.9) 0%,
              rgba(10, 10, 9, 0.76) 30%,
              rgba(10, 10, 9, 0.38) 52%,
              rgba(10, 10, 9, 0.08) 74%
            ),
            radial-gradient(circle at 24% 36%, rgba(255, 247, 232, 0.12), transparent 32%);
        }

        .hero-bottom-vignette {
          z-index: 2;
          background: linear-gradient(180deg, rgba(6, 7, 8, 0.3) 0%, transparent 34%, rgba(6, 7, 8, 0.5) 100%);
        }

        .hero-shell {
          position: relative;
          z-index: 3;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.62fr) minmax(300px, 0.38fr);
          gap: clamp(40px, 6vw, 86px);
          align-items: start;
          min-height: clamp(420px, 55vh, 590px);
          padding-top: clamp(76px, 8vw, 96px);
        }

        .hero-copy {
          display: grid;
          justify-items: start;
          max-width: 760px;
        }

        .hero-eyebrow,
        .hero-panel-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin: 0;
          color: rgba(246, 241, 232, 0.72);
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .hero-eyebrow::after {
          content: "";
          width: 54px;
          height: 1px;
          background: rgba(246, 241, 232, 0.32);
        }

        .hero-title {
          margin: 24px 0 0;
          max-width: 760px;
          color: #f6f1e8;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.2rem, 5.55vw, 5.7rem);
          line-height: 1.04;
          letter-spacing: -0.06em;
          text-shadow: 0 3px 34px rgba(0, 0, 0, 0.34);
          text-wrap: balance;
        }

        .hero-subtitle {
          max-width: 650px;
          margin: 26px 0 0;
          color: rgba(246, 241, 232, 0.78);
          font-size: clamp(1.03rem, 1.25vw, 1.16rem);
          line-height: 1.82;
          text-shadow: 0 2px 22px rgba(0, 0, 0, 0.3);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .hero-btn {
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

        .hero-btn:hover {
          transform: translateY(-2px);
        }

        .hero-btn-primary {
          color: #1f1b16;
          background: linear-gradient(180deg, #fff4e1, #ead9bd);
          border: 1px solid rgba(255, 255, 255, 0.34);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.26);
        }

        .hero-btn-primary:hover {
          background: linear-gradient(180deg, #fff8ea, #f0dfc5);
          box-shadow: 0 22px 58px rgba(0, 0, 0, 0.32);
        }

        .hero-btn-secondary {
          color: rgba(246, 241, 232, 0.92);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(18px);
        }

        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .hero-principles {
          display: grid;
          gap: 12px;
          max-width: 670px;
          margin-top: 34px;
        }

        .hero-principle {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(246, 241, 232, 0.8);
          font-size: 0.98rem;
          line-height: 1.55;
        }

        .hero-principle svg {
          flex: 0 0 auto;
          margin-top: 4px;
          color: #ead9bd;
        }

        .hero-outcome-panel {
          justify-self: end;
          width: min(100%, 390px);
          padding: 20px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(10, 10, 9, 0.36);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(22px);
        }

        .hero-badge-row {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 8px;
          min-height: 50px;
          padding: 14px 15px;
          border-radius: 18px;
          color: rgba(246, 241, 232, 0.88);
          font-size: 0.86rem;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .hero-badge svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: #ead9bd;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 780px;
          margin-top: 30px;
        }

        .hero-stat-card {
          padding: 22px 22px 20px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.13);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(20px);
        }

        .hero-stat-card strong,
        .hero-stat-card .counter-value {
          color: #f8f2e7;
        }

        .hero-stat-card span,
        .hero-stat-card .counter-label {
          color: rgba(246, 241, 232, 0.7);
        }

        @keyframes heroCinematicZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.05);
          }
        }

        @media (max-width: 1120px) {
          .hero-section {
            min-height: auto;
            padding-top: 128px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            min-height: 0;
            padding-top: 62px;
          }

          .hero-outcome-panel {
            justify-self: start;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            margin-top: -84px;
            padding-top: 128px;
          }

          .hero-background-image {
            object-position: 57% center;
          }

          .hero-readable-overlay {
            background:
              linear-gradient(90deg, rgba(6, 7, 8, 0.88) 0%, rgba(9, 9, 8, 0.74) 58%, rgba(9, 9, 8, 0.4) 100%),
              linear-gradient(180deg, rgba(6, 7, 8, 0.1), rgba(6, 7, 8, 0.58));
          }

          .hero-title {
            max-width: 100%;
            font-size: clamp(2.85rem, 13vw, 4.25rem);
            line-height: 1.06;
          }

          .hero-actions,
          .hero-btn {
            width: 100%;
          }

          .hero-stats-grid,
          .hero-badge-row {
            grid-template-columns: 1fr;
          }

          .hero-outcome-panel {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-background-image {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
