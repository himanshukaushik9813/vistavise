"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  GlobeIcon,
  HomeIcon,
  TargetIcon,
  UsersIcon,
} from "./icons";

const supportAreas = [
  {
    icon: GlobeIcon,
    title: "Study pathway guidance",
    desc: "Practical support for understanding options, direction, and the next steps that make sense in Australia.",
  },
  {
    icon: BriefcaseIcon,
    title: "Career planning",
    desc: "Guidance for building confidence, presenting experience well, and preparing for the Australian job market.",
  },
  {
    icon: HomeIcon,
    title: "Transition support",
    desc: "Calm help through change, so settling in feels more structured and less overwhelming.",
  },
  {
    icon: TargetIcon,
    title: "Ongoing clarity",
    desc: "Long-term guidance that evolves as your goals, circumstances, and next decisions change.",
  },
];

const pathwaySteps = [
  { label: "Study", detail: "Clear next steps" },
  { label: "Career", detail: "Local market readiness" },
  { label: "Settle", detail: "Practical transition support" },
];

export default function StudentMigrantSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <section ref={ref} id="support" className="section-padding support-section">
      <div className="container-custom support-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: visualY }}
          className="support-visual-shell"
        >
          <div className="support-main-media">
            <span className="support-main-badge">Australia pathways</span>

            <div className="support-landmark" aria-hidden="true">
              <svg viewBox="0 0 640 360" fill="none">
                <circle cx="126" cy="104" r="72" className="landmark-sun" />
                <path d="M18 250H612" className="landmark-base" />
                <path d="M28 268H586" className="landmark-soft" />
                <path d="M60 286H536" className="landmark-soft" />
                <path d="M112 304H470" className="landmark-soft" />
                <path
                  d="M320 252C384 112 486 104 586 250"
                  className="landmark-strong"
                />
                <path d="M356 224L420 166L506 224" className="landmark-soft" />
                <path d="M396 210L448 176L516 242" className="landmark-soft" />
                <path
                  d="M210 248C230 166 274 104 336 66C324 130 300 194 252 248Z"
                  className="landmark-shell"
                />
                <path
                  d="M270 248C298 160 344 106 408 84C402 156 366 216 318 248Z"
                  className="landmark-shell"
                />
                <path
                  d="M340 248C360 182 406 142 470 126C466 184 430 226 386 248Z"
                  className="landmark-shell"
                />
                <path d="M74 160C88 148 104 148 118 160" className="landmark-soft" />
                <path d="M132 135C146 123 162 123 176 135" className="landmark-soft" />
                <path d="M492 118C506 106 522 106 536 118" className="landmark-soft" />
              </svg>
            </div>

            <div className="pathway-panel" aria-label="Australia pathway roadmap">
              <p className="pathway-caption">Structured transition roadmap</p>
              <div className="pathway-flow">
                {pathwaySteps.map((step, index) => (
                  <div key={step.label} className="pathway-node">
                    <span className="pathway-dot">{index + 1}</span>
                    <div>
                      <strong>{step.label}</strong>
                      <span>{step.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="support-mini-grid">
            {pathwaySteps.map((step) => (
              <div key={step.label} className="support-mini-card">
                <span className="mini-dot" aria-hidden="true">
                  <UsersIcon size={14} />
                </span>
                <div>
                  <strong>{step.label}</strong>
                  <span>{step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: contentY }}
        >
          <SectionHeading
            eyebrow="Student & Migrant Guidance"
            title="Support for students and migrants navigating Australia with confidence"
            subtitle="This part of VistaVise is intentionally warm, practical, and reassuring. It is about helping people move through study, career, and transition decisions with more clarity and less guesswork."
            align="left"
            maxWidth={620}
          />

          <div className="support-list">
            {supportAreas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, x: 18 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.16 + index * 0.05 }}
                className="support-item"
              >
                <span className="support-icon">
                  <area.icon size={18} />
                </span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="support-footer-note">
            <span className="support-check">
              <CheckCircleIcon size={14} />
            </span>
            Trusted guidance for study pathways, career readiness, transition planning, and
            practical mentoring.
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .support-section {
          position: relative;
          overflow: clip;
          padding-bottom: var(--space-24);
        }

        .support-section::before {
          content: "";
          position: absolute;
          inset: 10% auto auto 4%;
          width: min(520px, 44vw);
          height: min(520px, 44vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.62), transparent 64%);
          pointer-events: none;
        }

        .support-section::after {
          content: "";
          position: absolute;
          right: 7%;
          bottom: 12%;
          width: min(360px, 34vw);
          height: min(360px, 34vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(216, 222, 226, 0.44), transparent 66%);
          pointer-events: none;
        }

        .support-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-40);
          align-items: center;
        }

        .support-visual-shell {
          padding: var(--space-24);
          border-radius: 36px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: var(--shadow-panel);
          backdrop-filter: blur(14px);
        }

        .support-main-media {
          position: relative;
          min-height: calc(var(--space-128) + var(--space-128) + var(--space-128) + var(--space-40));
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(17, 18, 20, 0.06);
          background:
            linear-gradient(rgba(17, 18, 20, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 18, 20, 0.018) 1px, transparent 1px),
            radial-gradient(circle at 18% 16%, rgba(255, 255, 255, 0.9), transparent 30%),
            radial-gradient(circle at 82% 24%, rgba(224, 230, 233, 0.6), transparent 28%),
            linear-gradient(180deg, #f8f7f3 0%, #ecece7 100%);
          background-size:
            42px 42px,
            42px 42px,
            auto,
            auto;
        }

        .support-main-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 1;
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

        .support-landmark {
          position: absolute;
          inset: 72px 18px 118px;
          color: rgba(17, 18, 20, 0.42);
          opacity: 0.9;
          animation: landmark-drift 9s ease-in-out infinite alternate;
        }

        .support-landmark svg {
          width: 100%;
          height: 100%;
        }

        .landmark-sun {
          stroke: rgba(168, 151, 118, 0.44);
          stroke-width: 2;
        }

        .landmark-base,
        .landmark-strong,
        .landmark-soft,
        .landmark-shell {
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .landmark-base {
          stroke-width: 2;
          opacity: 0.4;
        }

        .landmark-strong {
          stroke-width: 2.3;
          opacity: 0.48;
        }

        .landmark-soft {
          stroke-width: 1.6;
          opacity: 0.24;
        }

        .landmark-shell {
          stroke-width: 2;
          opacity: 0.48;
          fill: rgba(255, 255, 255, 0.22);
        }

        .pathway-panel {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: var(--space-24);
          border-radius: 24px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 24px 52px rgba(17, 18, 20, 0.095);
          backdrop-filter: blur(10px);
        }

        .pathway-caption {
          margin: 0 0 12px;
          color: var(--text-muted);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pathway-flow {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .pathway-flow::before {
          content: "";
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          height: 1px;
          background: rgba(17, 18, 20, 0.12);
        }

        .pathway-node {
          position: relative;
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 10px;
          align-items: start;
          min-width: 0;
        }

        .pathway-dot {
          position: relative;
          z-index: 1;
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.1);
          background: #f5f4ef;
          color: var(--text-primary);
          font-size: 0.78rem;
          font-weight: 800;
        }

        .pathway-node strong {
          display: block;
          margin-top: 2px;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.88rem;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .pathway-node span:last-child {
          display: block;
          margin-top: 4px;
          color: var(--text-secondary);
          font-size: 0.76rem;
          line-height: 1.45;
        }

        .support-mini-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
          margin-top: var(--space-24);
        }

        .support-mini-card {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 10px;
          align-items: start;
          padding: 16px;
          border-radius: 22px;
          border: 1px solid rgba(17, 18, 20, 0.06);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 16px 38px rgba(17, 18, 20, 0.055);
          transition:
            transform 240ms ease,
            box-shadow 240ms ease;
        }

        .support-mini-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 52px rgba(17, 18, 20, 0.08);
        }

        .mini-dot {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.05);
          color: var(--text-primary);
        }

        .support-mini-card strong {
          display: block;
          font-family: var(--font-heading), sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .support-mini-card span {
          display: block;
          margin-top: 6px;
          color: var(--text-secondary);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .support-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .support-item {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: var(--space-24);
          padding: var(--space-24);
          border-radius: 26px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.76);
          box-shadow: 0 20px 46px rgba(17, 18, 20, 0.055);
          backdrop-filter: blur(10px);
          transition:
            transform 240ms ease,
            box-shadow 240ms ease;
        }

        .support-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 28px 62px rgba(17, 18, 20, 0.08);
        }

        .support-icon {
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(17, 18, 20, 0.05);
          color: var(--text-primary);
        }

        .support-item h3 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.18rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }

        .support-item p {
          margin: 10px 0 0;
          color: var(--text-secondary);
          line-height: 1.76;
          font-size: 0.95rem;
          max-width: 62ch;
        }

        .support-footer-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: var(--space-24);
          color: var(--text-secondary);
          font-size: 0.94rem;
          line-height: 1.72;
        }

        .support-check {
          display: inline-flex;
          color: var(--text-primary);
          margin-top: 2px;
        }

        @media (max-width: 1024px) {
          .support-grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes landmark-drift {
          from {
            transform: translate3d(-6px, 0, 0) scale(1);
          }

          to {
            transform: translate3d(8px, -8px, 0) scale(1.015);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .support-landmark {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .support-mini-grid {
            grid-template-columns: 1fr;
          }

          .support-item {
            grid-template-columns: 1fr;
            padding: var(--space-24);
          }

          .support-main-media {
            min-height: calc(var(--space-128) + var(--space-128) + var(--space-96));
          }

          .support-landmark {
            inset: 68px 12px 156px;
          }

          .pathway-panel {
            padding: var(--space-24);
          }

          .pathway-flow {
            grid-template-columns: 1fr;
          }

          .support-list {
            grid-template-columns: 1fr;
          }

          .pathway-flow::before {
            top: 18px;
            bottom: 18px;
            left: 18px;
            right: auto;
            width: 1px;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
