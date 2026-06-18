"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import OwnerPortrait from "./OwnerPortrait";
import RevealText from "./motion/RevealText";
import TiltCard from "./motion/TiltCard";
import { ArrowRightIcon } from "./icons";
import { calendlyUrl, heroFeatureCards } from "@/lib/vistavise-data";

const heroStats = [
  { end: 98, suffix: "%", label: "Client satisfaction" },
  { end: 100, suffix: "+", label: "Mentorship sessions" },
  { end: 8, suffix: "+", label: "Years of experience" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="hero" className="hero-section">
      <div className="container-custom hero-shell">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-copy"
          >
            <p className="eyebrow">Melbourne Mentorship Platform</p>
            <RevealText
              as="h1"
              className="hero-title"
              text={"Master Business Analysis.\nBuild Your Future."}
              mode="lines"
              variant="premiumHeading"
              float
            />
            <p className="hero-subtitle">
              Practical training, 1:1 mentorship, and a thriving Melbourne community designed to make you job-ready from day one.
            </p>

            <div className="hero-actions">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a Consultation
                <ArrowRightIcon size={16} />
              </a>
              <Link href="/services" className="btn-secondary">
                Explore Services
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
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual"
          >
            <div className="hero-photo-shell">
              <span className="hero-blob hero-blob-one" aria-hidden="true" />
              <span className="hero-blob hero-blob-two" aria-hidden="true" />
              <span className="hero-orb hero-orb-one" aria-hidden="true" />
              <span className="hero-orb hero-orb-two" aria-hidden="true" />

              <TiltCard as="div" className="hero-photo-frame surface-card-strong premium-tilt-card" maxTilt={1.3}>
                <OwnerPortrait
                  alt="Portrait of Ajay from VistaVise"
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  priority
                  rounded="280px 280px 28px 28px"
                  objectPosition="center 14%"
                />
              </TiltCard>
            </div>
          </motion.div>
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
          padding: 72px 0 56px;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: -8%;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 78% 22%, rgba(220, 234, 247, 0.42), transparent 28%),
            radial-gradient(circle at 24% 84%, rgba(255, 255, 255, 0.7), transparent 32%);
          animation: heroCinematicZoom 25s ease-in-out infinite alternate;
          transform-origin: center;
          will-change: transform;
        }

        .hero-shell {
          position: relative;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.52fr) minmax(340px, 0.48fr);
          gap: 48px;
          align-items: center;
        }

        .hero-copy {
          display: grid;
          gap: 0;
        }

        .hero-title {
          margin: 24px 0 0;
          max-width: min(760px, 80vw);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.25rem, 5.8vw, 5.6rem);
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: var(--secondary);
        }

        .hero-subtitle {
          margin: 24px 0 0;
          max-width: 620px;
          color: var(--text-secondary);
          font-size: clamp(1rem, 1.25vw, 1.1rem);
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .hero-feature-stack {
          display: grid;
          gap: 14px;
          margin-top: 32px;
          max-width: 520px;
        }

        .hero-feature-card {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 16px;
          padding: 18px;
          border-radius: 22px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.74);
          box-shadow: var(--shadow-soft);
        }

        .hero-feature-index {
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(220, 234, 247, 0.86), rgba(255, 255, 255, 0.58));
          color: var(--primary-strong);
          font-size: 0.86rem;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .hero-feature-card h2 {
          margin: 0;
          font-size: 1.06rem;
          letter-spacing: -0.04em;
          color: var(--secondary);
        }

        .hero-feature-card p {
          margin: 8px 0 0;
          color: var(--text-secondary);
          font-size: 0.94rem;
          line-height: 1.68;
        }

        .hero-visual {
          position: relative;
        }

        .hero-photo-shell {
          position: relative;
          padding: 30px 16px 16px;
        }

        .hero-photo-frame {
          position: relative;
          overflow: hidden;
          border-radius: 300px 300px 32px 32px;
          padding: 16px;
        }

        .hero-photo-frame > div {
          aspect-ratio: 0.82 / 1;
        }

        .hero-blob,
        .hero-orb {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .hero-blob {
          filter: blur(8px);
          opacity: 0.72;
        }

        .hero-blob-one {
          top: 24px;
          right: 12px;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(220, 234, 247, 0.48), transparent 68%);
          animation: floatBlobOne 7s ease-in-out infinite;
        }

        .hero-blob-two {
          bottom: 40px;
          left: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(113, 156, 255, 0.16), transparent 70%);
          animation: floatBlobTwo 9s ease-in-out infinite;
        }

        .hero-orb {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(220, 234, 247, 0.88));
          box-shadow: 0 16px 34px rgba(30, 42, 56, 0.1);
        }

        .hero-orb-one {
          top: 64px;
          left: 12px;
          width: 20px;
          height: 20px;
          animation: floatOrb 6s ease-in-out infinite;
        }

        .hero-orb-two {
          right: 34px;
          bottom: 72px;
          width: 14px;
          height: 14px;
          animation: floatOrb 5.4s ease-in-out infinite reverse;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .hero-stat-card {
          padding: 22px 22px 20px;
          text-align: left;
        }

        .hero-stat-card strong,
        .hero-stat-card .counter-value {
          color: var(--secondary);
        }

        @keyframes floatBlobOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-12px, 10px, 0);
          }
        }

        @keyframes floatBlobTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(10px, -10px, 0);
          }
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heroCinematicZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.05);
          }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 52px;
          }

          .hero-title {
            max-width: 100%;
            font-size: clamp(2.75rem, 12vw, 4rem);
            line-height: 1.08;
          }

          .hero-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
