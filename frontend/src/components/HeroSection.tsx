"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import OwnerPortrait from "./OwnerPortrait";
import { ArrowRightIcon, BriefcaseIcon, TargetIcon, UsersIcon } from "./icons";

const heroStats = [
  { end: 98, suffix: "%", label: "Client satisfaction" },
  { end: 100, suffix: "+", label: "Strategic sessions" },
  { end: 8, suffix: "+", label: "Years of experience" },
];

const quickNotes = [
  "Business analysis and consulting",
  "Project clarity and structured delivery",
  "Guidance for students and migrants in Australia",
];

const thumbnails = [
  {
    title: "Strategy Workshops",
    note: "Structured conversations for sharper decisions",
    alt: "Business team collaborating in a modern strategy workshop",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Project Clarity",
    note: "Planning, priorities, and delivery rhythm",
    alt: "Professional consulting desk with laptop, notes, and planning materials",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Practical Mentoring",
    note: "Guidance for growth, transition, and confidence",
    alt: "Consulting-style mentoring conversation in a bright professional setting",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

const consultingPrinciples = ["Strategic thinking.", "Practical delivery.", "Real progress."];

const consultingSignals = [
  { icon: TargetIcon, label: "Business analysis" },
  { icon: BriefcaseIcon, label: "Project leadership" },
  { icon: UsersIcon, label: "Student & migrant support" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const hazeY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const orbitY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const shellScale = useTransform(scrollYProgress, [0, 1], [1, 0.985]);

  return (
    <section ref={ref} id="hero" className="hero-section">
      <motion.div className="hero-haze" style={{ y: hazeY }} aria-hidden="true" />

      <div className="container-custom">
        <motion.div style={{ scale: shellScale }}>
          <div className="hero-shell">
            <motion.svg
              className="hero-orbit-map"
              viewBox="0 0 760 620"
              fill="none"
              stroke="rgba(17, 18, 20, 0.14)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                y: orbitY,
                position: "absolute",
                top: 40,
                right: 250,
                zIndex: 0,
                width: "min(54vw, 670px)",
                opacity: 0.88,
              }}
              aria-hidden="true"
            >
              <path d="M112 326C164 116 412 6 594 132C724 222 706 432 556 526C374 640 154 546 112 326Z" />
              <path d="M178 332C238 174 426 90 558 182C650 246 640 398 532 468C398 554 216 480 178 332Z" />
              <path d="M102 328H660" />
              <path d="M386 72C348 168 332 242 334 324C336 414 362 500 414 578" />
              <circle cx="590" cy="406" r="9" />
              <circle cx="286" cy="202" r="4" />
              <circle cx="478" cy="146" r="4" />
              <circle cx="208" cy="442" r="4" />
            </motion.svg>

          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div
                initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="hero-kicker">Hello</p>
                <h1 className="hero-title">VistaVise Consulting</h1>
                <p className="hero-subtitle">
                  Strategic guidance for business decisions, project clarity, and Australia transition
                  journeys.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="btn-primary">
                    Book a Consultation
                    <ArrowRightIcon size={16} />
                  </a>
                  <a href="#services" className="btn-secondary">
                    Explore Services
                  </a>
                </div>

                <div className="hero-notes">
                  {quickNotes.map((item) => (
                    <span key={item} className="hero-note">
                      {item}
                    </span>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.82, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{ y: cardY }}
                >
                  <div className="hero-info-card">
                    <div className="hero-side-card surface-card-soft">
                      <div className="hero-side-content">
                        <span className="hero-side-kicker">VistaVise Consulting</span>
                        <div className="hero-principles">
                          {consultingPrinciples.map((principle) => (
                            <span key={principle}>{principle}</span>
                          ))}
                        </div>

                        <span className="hero-side-divider" aria-hidden="true" />

                        <div className="hero-signal-list" aria-label="VistaVise consulting strengths">
                          {consultingSignals.map((signal) => (
                            <span key={signal.label} className="hero-signal">
                              <signal.icon size={14} />
                              {signal.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <svg
                        className="hero-building-sketch"
                        viewBox="0 0 360 240"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M76 222V78L302 16V222" />
                        <path d="M76 78L302 16" />
                        <path d="M116 68V222" />
                        <path d="M154 58V222" />
                        <path d="M194 47V222" />
                        <path d="M234 36V222" />
                        <path d="M272 26V222" />
                        <path d="M76 112H302" />
                        <path d="M76 146H302" />
                        <path d="M76 180H302" />
                        <path d="M44 222H336" />
                        <path d="M44 222C80 204 122 194 164 194H302" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="hero-visual-column">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.92, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: portraitY }}
              >
                <div className="hero-visual-stack">
                  <div className="hero-portrait-frame">
                    <OwnerPortrait
                      alt="Portrait of the VistaVise Consulting owner"
                      sizes="(max-width: 1024px) 90vw, 32vw"
                      priority
                      objectPosition="center 14%"
                      rounded="280px 280px 34px 34px"
                    />
                  </div>

                  <div className="hero-thumbnail-strip">
                    {thumbnails.map((thumb) => (
                      <article key={thumb.title} className="hero-thumb-card">
                        <div className="hero-thumb-media">
                          <Image
                            src={thumb.imageUrl}
                            alt={thumb.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1120px) 30vw, 12vw"
                            className="hero-thumb-image"
                            unoptimized
                          />
                        </div>
                        <div className="hero-thumb-copy">
                          <p className="hero-thumb-title">{thumb.title}</p>
                          <p className="hero-thumb-note">{thumb.note}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="hero-stats-grid"
        >
          {heroStats.map((item) => (
            <div key={item.label} className="hero-stat-card surface-card">
              <AnimatedCounter end={item.end} suffix={item.suffix} label={item.label} />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .hero-section {
          position: relative;
          min-height: auto;
          overflow: clip;
          padding: var(--space-96) 0 var(--space-64);
        }

        .hero-haze {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 16% 18%, rgba(255, 255, 255, 0.86), transparent 30%),
            radial-gradient(circle at 82% 20%, rgba(225, 231, 234, 0.84), transparent 30%),
            radial-gradient(circle at 70% 84%, rgba(255, 255, 255, 0.78), transparent 34%),
            linear-gradient(120deg, rgba(255, 255, 255, 0.18), rgba(17, 18, 20, 0.035));
          pointer-events: none;
        }

        .hero-shell {
          position: relative;
          padding: var(--space-40);
          padding-bottom: var(--space-64);
          border-radius: clamp(34px, 4vw, 54px);
          border: 1px solid rgba(17, 18, 20, 0.075);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(247, 247, 243, 0.72)),
            radial-gradient(circle at 86% 16%, rgba(224, 231, 234, 0.74), transparent 34%);
          box-shadow: var(--shadow-float);
          overflow: hidden;
          backdrop-filter: blur(16px);
        }

        .hero-shell::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(17, 18, 20, 0.032) 1px, transparent 1px),
            linear-gradient(rgba(17, 18, 20, 0.026) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at 74% 42%, black 0%, transparent 58%);
        }

        .hero-orbit-map {
          position: absolute;
          top: 40px;
          right: 250px;
          z-index: 0;
          width: min(54vw, 670px);
          color: rgba(17, 18, 20, 0.14);
          stroke: currentColor;
          stroke-width: 1.3;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.88;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.57fr) minmax(380px, 0.43fr);
          gap: var(--space-64);
          align-items: center;
        }

        .hero-copy {
          position: relative;
          z-index: 3;
          min-width: 0;
          max-width: 760px;
        }

        .hero-kicker {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.86rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-title {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 740px;
          font-size: clamp(3.55rem, 6.25vw, 6.2rem);
          line-height: 0.88;
          letter-spacing: -0.085em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .hero-subtitle {
          margin: var(--space-24) 0 0;
          max-width: 560px;
          color: var(--text-secondary);
          font-size: clamp(1.03rem, 1.36vw, 1.16rem);
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-24);
          margin-top: var(--space-24);
        }

        .hero-notes {
          display: grid;
          gap: 12px;
          margin-top: var(--space-24);
          max-width: 560px;
        }

        .hero-info-card {
          margin-top: var(--space-24);
          max-width: 620px;
        }

        .hero-note {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.98rem;
        }

        .hero-note::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.18);
          flex-shrink: 0;
        }

        .hero-visual-column {
          grid-column: 2;
          grid-row: 1;
          width: min(100%, 485px);
          justify-self: end;
          align-self: start;
          position: relative;
          z-index: 1;
        }

        .hero-visual-stack {
          position: relative;
          display: grid;
          gap: var(--space-24);
        }

        .hero-portrait-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 0.86 / 1;
          overflow: hidden;
          border-radius: 280px 280px 34px 34px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(236, 239, 242, 0.94));
          box-shadow: var(--shadow-panel);
          transform: translateZ(0);
          transition:
            transform 260ms ease,
            box-shadow 260ms ease;
        }

        .hero-portrait-frame:hover {
          transform: translate3d(0, -4px, 0);
          box-shadow: 0 38px 98px rgba(17, 18, 20, 0.16);
        }

        .hero-thumbnail-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .hero-thumb-card {
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(17, 18, 20, 0.06);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 18px 44px rgba(17, 18, 20, 0.08);
          transition:
            transform 260ms ease,
            box-shadow 260ms ease;
        }

        .hero-thumb-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 56px rgba(17, 18, 20, 0.1);
        }

        .hero-thumb-media {
          position: relative;
          aspect-ratio: 1 / 0.82;
          overflow: hidden;
          background: rgba(17, 18, 20, 0.06);
        }

        .hero-thumb-image {
          object-fit: cover;
        }

        .hero-thumb-copy {
          padding: 10px 11px 12px;
        }

        .hero-thumb-title {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.86rem;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .hero-thumb-note {
          margin: 6px 0 0;
          color: var(--text-muted);
          font-size: 0.72rem;
          line-height: 1.42;
        }

        .hero-side-card {
          position: relative;
          min-height: 218px;
          padding: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(246, 246, 241, 0.72)),
            radial-gradient(circle at 90% 20%, rgba(224, 231, 234, 0.72), transparent 34%);
          box-shadow: 0 28px 72px rgba(17, 18, 20, 0.13);
          backdrop-filter: blur(16px);
        }

        .hero-side-content {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 14px;
          max-width: 460px;
        }

        .hero-side-kicker {
          width: fit-content;
          padding: 9px 13px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.76);
          color: var(--text-muted);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hero-principles {
          display: grid;
          gap: 2px;
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.08rem, 1.52vw, 1.32rem);
          font-weight: 600;
          letter-spacing: -0.045em;
          line-height: 1.32;
        }

        .hero-side-divider {
          width: min(170px, 80%);
          height: 1px;
          background: rgba(17, 18, 20, 0.18);
        }

        .hero-signal-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          max-width: 440px;
        }

        .hero-signal {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 9px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.62);
          color: var(--text-secondary);
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1;
        }

        .hero-building-sketch {
          position: absolute;
          right: -34px;
          bottom: -18px;
          width: min(72%, 300px);
          color: rgba(17, 18, 20, 0.18);
          stroke: currentColor;
          stroke-width: 1.35;
          opacity: 0.92;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
          margin-top: var(--space-24);
        }

        .hero-stat-card {
          padding: 24px 22px;
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(246, 246, 241, 0.74));
          box-shadow: 0 20px 54px rgba(17, 18, 20, 0.07);
          transition:
            transform 260ms ease,
            box-shadow 260ms ease;
        }

        .hero-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 68px rgba(17, 18, 20, 0.1);
        }

        @media (max-width: 1280px) {
          .hero-grid {
            grid-template-columns: minmax(0, 0.56fr) minmax(340px, 0.44fr);
          }

          .hero-title {
            font-size: clamp(3.25rem, 5.7vw, 5.3rem);
          }
        }

        @media (max-width: 1120px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            max-width: none;
            padding-right: 0;
          }

          .hero-visual-column {
            grid-column: auto;
            grid-row: auto;
            width: min(100%, 520px);
            justify-self: start;
          }

          .hero-orbit-map {
            right: -80px;
            width: min(92vw, 680px);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: var(--space-96);
            padding-bottom: var(--space-64);
          }

          .hero-shell {
            padding: var(--space-24);
            border-radius: 30px;
          }

          .hero-title {
            font-size: clamp(3rem, 13vw, 4.4rem);
            line-height: 0.92;
          }

          .hero-stats-grid {
            grid-template-columns: 1fr;
          }

          .hero-thumbnail-strip {
            grid-template-columns: repeat(3, minmax(140px, 1fr));
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: none;
          }

          .hero-thumbnail-strip::-webkit-scrollbar {
            display: none;
          }

          .hero-thumb-note {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
