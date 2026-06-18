"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./motion/TiltCard";
import { ArrowRightIcon } from "./icons";
import { aboutPreviewPillars } from "@/lib/vistavise-data";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about-preview" className="section-padding about-preview-section">
      <div className="container-custom about-preview-grid">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Why VistaVise"
            title="A premium guidance platform built around clarity, confidence, and community."
            subtitle="VistaVise blends professional structure with a human mentoring style so progress feels grounded, personal, and achievable."
            align="left"
            maxWidth={640}
          />

          <div className="about-preview-copy">
            <p>
              The work is designed for people building their future, not just browsing ideas. That means practical support for business analysis growth, student planning, migrant transition, and the confidence needed to act on the next step.
            </p>
            <Link href="/about" className="btn-secondary about-preview-link">
              Learn more about VistaVise
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </motion.div>

        <div className="about-preview-pillar-grid">
          {aboutPreviewPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <TiltCard as="article" className="about-preview-pillar premium-tilt-card" maxTilt={1.8}>
                <span className="about-preview-count">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .about-preview-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);
          gap: 40px;
          align-items: start;
        }

        .about-preview-copy {
          display: grid;
          gap: 20px;
          max-width: 560px;
        }

        .about-preview-copy p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.82;
        }

        .about-preview-link {
          width: fit-content;
        }

        .about-preview-pillar-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .about-preview-pillar {
          min-height: 100%;
          padding: 22px;
          border-radius: 24px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: var(--shadow-soft);
        }

        .about-preview-count {
          display: inline-flex;
          margin-bottom: 16px;
          color: var(--primary-strong);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .about-preview-pillar h3 {
          margin: 0;
          color: var(--secondary);
          font-size: 1.12rem;
          letter-spacing: -0.04em;
        }

        .about-preview-pillar p {
          margin: 10px 0 0;
          color: var(--text-secondary);
          line-height: 1.72;
        }

        @media (max-width: 1024px) {
          .about-preview-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-preview-pillar-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
