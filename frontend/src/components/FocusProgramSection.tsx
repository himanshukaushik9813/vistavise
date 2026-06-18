"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import TiltCard from "./motion/TiltCard";
import RevealText from "./motion/RevealText";
import { ArrowRightCircleIcon, ArrowRightIcon, BriefcaseIcon, CompassIcon, LayersIcon, MessageCircleIcon } from "./icons";
import type { FocusSection } from "@/lib/vistavise-data";

const focusIcons = [LayersIcon, MessageCircleIcon, BriefcaseIcon, CompassIcon, ArrowRightCircleIcon];

export default function FocusProgramSection({
  eyebrow,
  title,
  description,
  cards,
  href,
  ctaLabel,
}: FocusSection) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section ref={ref} className="section-padding focus-program-section">
      <div className="container-custom focus-program-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="focus-program-intro"
        >
          <p className="eyebrow">{eyebrow}</p>
          <RevealText as="h2" text={title} variant="premiumHeading" float />
          <p>{description}</p>
          <Link href={href} className="btn-secondary focus-program-cta">
            {ctaLabel}
            <ArrowRightIcon size={14} />
          </Link>
        </motion.div>

        <div className="focus-program-grid">
          {cards.map((card, index) => {
            const Icon = focusIcons[index] || LayersIcon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: index * 0.05 }}
              >
                <TiltCard as="article" className="focus-program-card premium-tilt-card" maxTilt={1.8}>
                  <span className="focus-program-count" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span className="focus-program-number">0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .focus-program-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
          gap: 28px;
          align-items: start;
        }

        .focus-program-intro {
          position: sticky;
          top: 120px;
        }

        .focus-program-intro h2 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.3rem, 3vw, 3.4rem);
          line-height: 1.1;
          letter-spacing: -0.05em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .focus-program-intro p:not(.eyebrow) {
          margin: 18px 0 0;
          color: var(--text-secondary);
          line-height: 1.82;
        }

        .focus-program-cta {
          margin-top: 24px;
          width: fit-content;
        }

        .focus-program-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .focus-program-card {
          min-height: 100%;
          padding: 28px;
        }

        .focus-program-count {
          margin-bottom: 18px;
        }

        .focus-program-number {
          display: inline-flex;
          margin-left: 12px;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          vertical-align: middle;
        }

        .focus-program-card h3 {
          margin: 18px 0 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.22rem;
          font-weight: 700;
          letter-spacing: -0.045em;
        }

        .focus-program-card p {
          margin: 12px 0 0;
          color: #667085;
          line-height: 1.72;
        }

        @media (max-width: 1024px) {
          .focus-program-shell {
            grid-template-columns: 1fr;
          }

          .focus-program-intro {
            position: static;
          }

          .focus-program-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
