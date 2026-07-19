"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import RevealText from "./motion/RevealText";
import TiltCard from "./motion/TiltCard";
import { ArrowRightIcon, BriefcaseIcon, CheckCircleIcon, TargetIcon } from "./icons";
import { calendlyUrl, heroFeatureCards } from "@/lib/vistavise-data";

const heroStats = [
  { end: 100, suffix: "+", label: "Students guided" },
  { end: 98, suffix: "%", label: "Positive feedback" },
  { end: 8, suffix: "+", label: "Years experience" },
];

const heroBadges = [
  { label: "Portfolio projects", icon: BriefcaseIcon },
  { label: "Mock interviews", icon: TargetIcon },
  { label: "Mentor feedback", icon: CheckCircleIcon },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="hero" className="hero-section">
      <div className="container-custom hero-shell">
        <div className="hero-panel">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hero-copy"
            >
              <p className="eyebrow">Premium Business Analysis Mentorship</p>
              <RevealText
                as="h1"
                className="hero-title"
                text="Build Job-Ready Business Analysis Skills"
                mode="lines"
                variant="premiumHeading"
                float
              />
              <p className="hero-subtitle">
                Learn practical Business Analysis skills, solve real-world business problems, build an industry-ready portfolio, receive personalised mentoring and confidently prepare for Business Analyst roles.
              </p>

              <div className="hero-actions">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book Free Consultation
                  <ArrowRightIcon size={16} />
                </a>
                <Link href="#services" className="btn-secondary">
                  Explore Mentorship Program
                </Link>
              </div>

              <div className="hero-feature-stack">
                {heroFeatureCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.42, delay: 0.15 + index * 0.06 }}
                  >
                    <TiltCard as="article" className="hero-feature-card premium-tilt-card" maxTilt={1.8}>
                      <span className="hero-feature-index">0{index + 1}</span>
                      <div>
                        <h2>{card.title}</h2>
                        <p>{card.note}</p>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 24 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="hero-visual"
            >
              <TiltCard as="div" className="hero-image-card premium-tilt-card" maxTilt={1.4}>
                <div className="hero-image-frame">
                  <Image
                    src="/images/meet-ajay-boardroom.png"
                    alt="Premium consulting workspace for Business Analysis mentorship"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="hero-image"
                  />
                </div>

                <div className="hero-badge-row" aria-label="Mentorship outcomes">
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
              </TiltCard>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="hero-stats-grid"
        >
          {heroStats.map((item) => (
            <div key={item.label} className="hero-stat-card surface-card-strong">
              <AnimatedCounter end={item.end} suffix={item.suffix} label={item.label} />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .hero-section {
          position: relative;
          overflow: clip;
          padding: 76px 0 58px;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: -8%;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 78% 20%, rgba(220, 234, 247, 0.48), transparent 28%),
            radial-gradient(circle at 22% 88%, rgba(223, 241, 227, 0.42), transparent 30%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.52), rgba(247, 243, 235, 0.22));
          animation: heroCinematicZoom 25s ease-in-out infinite alternate;
          transform-origin: center;
          will-change: transform;
        }

        .hero-shell {
          position: relative;
          z-index: 1;
        }

        .hero-panel {
          padding: clamp(26px, 4vw, 48px);
          border-radius: 44px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background:
            radial-gradient(circle at 82% 16%, rgba(220, 234, 247, 0.38), transparent 28%),
            rgba(255, 255, 255, 0.62);
          box-shadow: 0 30px 90px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(22px);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.54fr) minmax(340px, 0.46fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }

        .hero-copy {
          display: grid;
          gap: 0;
        }

        .hero-title {
          margin: 24px 0 0;
          max-width: 820px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.35rem, 6.4vw, 6.25rem);
          line-height: 1.04;
          letter-spacing: -0.06em;
          color: var(--secondary);
        }

        .hero-subtitle {
          margin: 26px 0 0;
          max-width: 690px;
          color: var(--text-secondary);
          font-size: clamp(1.03rem, 1.25vw, 1.16rem);
          line-height: 1.82;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .hero-feature-stack {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 34px;
          max-width: 760px;
        }

        .hero-feature-card {
          min-height: 100%;
          display: grid;
          gap: 14px;
          padding: 20px;
        }

        .hero-feature-index {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .hero-feature-card h2 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.03rem;
          letter-spacing: -0.04em;
          color: #1e2a38;
        }

        .hero-feature-card p {
          margin: 8px 0 0;
          color: #667085;
          font-size: 0.9rem;
          line-height: 1.62;
        }

        .hero-image-card {
          padding: 16px;
        }

        .hero-image-frame {
          position: relative;
          min-height: min(610px, 54vw);
          overflow: hidden;
          border-radius: 28px;
          background: #eef2f5;
        }

        .hero-image {
          object-fit: cover;
          object-position: center;
        }

        .hero-badge-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 14px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          color: #1e2a38;
          font-size: 0.82rem;
          font-weight: 800;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8);
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 22px;
        }

        .hero-stat-card {
          padding: 22px 22px 20px;
          text-align: left;
        }

        .hero-stat-card strong,
        .hero-stat-card .counter-value {
          color: var(--secondary);
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
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            order: -1;
          }

          .hero-image-frame {
            min-height: 420px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 52px;
          }

          .hero-panel {
            border-radius: 34px;
          }

          .hero-title {
            max-width: 100%;
            font-size: clamp(2.75rem, 12vw, 4.2rem);
            line-height: 1.06;
          }

          .hero-feature-stack,
          .hero-stats-grid,
          .hero-badge-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
