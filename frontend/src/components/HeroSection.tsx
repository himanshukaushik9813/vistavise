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
  { end: 100, suffix: "+", label: "Mentorships" },
  { end: 98, suffix: "%", label: "Positive feedback" },
  { end: 23, suffix: "+", label: "Years experience" },
];

const heroPrinciples = [
  {
    title: "Real-World Experience",
    body: "Build practical projects using real consulting frameworks, not theoretical textbooks.",
    icon: BriefcaseIcon,
  },
  {
    title: "Job-Ready Edge",
    body: "Get tailored resume reviews, interview coaching, and the confidence to stand out.",
    icon: TargetIcon,
  },
  {
    title: "Local Mentorship",
    body: "Guided career coaching designed specifically for the Australian job market.",
    icon: CheckCircleIcon,
  },
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
            <RevealText
              as="h1"
              className="hero-title"
              text="Launch Your Business Analyst Career with Real-World Experience."
              mode="lines"
              variant="premiumHeading"
              float
            />
            <p className="hero-subtitle">
              Gain hands-on experience with real-world frameworks, industry tools, and practical case studies built
              for modern BAs.
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

            <div className="hero-principles" aria-label="Why VistaVise">
              {heroPrinciples.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                    className="hero-principle"
                  >
                    <span className="hero-principle-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <span>
                      <strong>{item.title}:</strong> {item.body}
                    </span>
                  </motion.div>
                );
              })}
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
          grid-template-columns: minmax(0, 1fr);
          align-items: start;
          padding-top: clamp(64px, 7vw, 88px);
        }

        .hero-copy {
          display: grid;
          justify-items: start;
          max-width: 820px;
        }

        .hero-title {
          margin: 0;
          max-width: 820px;
          color: #f6f1e8;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.9rem, 4.9vw, 5rem);
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
          gap: 10px;
          width: min(100%, 680px);
          margin-top: 30px;
          padding: 18px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(10, 10, 9, 0.36);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(22px);
        }

        .hero-principle {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 13px 15px;
          border-radius: 18px;
          color: rgba(246, 241, 232, 0.8);
          font-size: 0.95rem;
          line-height: 1.55;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .hero-principle strong {
          color: #f6f1e8;
          font-weight: 800;
        }

        .hero-principle-icon {
          display: inline-flex;
          flex: 0 0 auto;
          margin-top: 3px;
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

        .hero-stat-card {
          --counter-value-color: #f8f2e7;
          --counter-label-color: rgba(246, 241, 232, 0.82);
        }

        /* Keep the dark glass look on hover/tap (the global card hover turns cards white). */
        .hero-stats-grid .hero-stat-card:hover,
        .hero-stats-grid .hero-stat-card:active {
          border-color: rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.26);
          transform: translateY(-4px);
        }

        .hero-stats-grid .hero-stat-card:hover::before,
        .hero-stats-grid .hero-stat-card:hover::after {
          opacity: 0;
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
            padding-top: 62px;
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
            font-size: clamp(2.4rem, 10.5vw, 3.6rem);
            line-height: 1.06;
          }

          .hero-actions,
          .hero-btn {
            width: 100%;
          }

          .hero-stats-grid {
            grid-template-columns: 1fr;
          }

          .hero-principles {
            padding: 12px;
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
