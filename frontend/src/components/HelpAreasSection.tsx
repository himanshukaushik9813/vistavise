"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./motion/TiltCard";
import { ArrowRightIcon, BarChartIcon, GlobeIcon, UsersIcon } from "./icons";
import { helpAreas } from "@/lib/vistavise-data";

const helpAreaIcons = [BarChartIcon, UsersIcon, GlobeIcon];

export default function HelpAreasSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding help-areas-section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Help With"
          title="Focused support across business analysis, study, and migration decisions."
          subtitle="Each path is shaped to remove noise, strengthen confidence, and keep progress practical."
          align="left"
          maxWidth={720}
        />

        <div className="help-areas-grid">
          {helpAreas.map((area, index) => {
            const Icon = helpAreaIcons[index] || BarChartIcon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: index * 0.05 }}
              >
                <TiltCard as="article" className="help-area-card premium-tilt-card" maxTilt={1.7}>
                  <span className="help-area-index" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span className="help-area-number">0{index + 1}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <Link href={area.href} className="help-area-link">
                    Learn more
                    <ArrowRightIcon size={14} />
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .help-areas-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .help-area-card {
          min-height: 100%;
          padding: 28px;
        }

        .help-area-index {
          margin: 0;
        }

        .help-area-number {
          display: inline-flex;
          margin-left: 12px;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          vertical-align: middle;
        }

        .help-area-card h3 {
          margin: 18px 0 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .help-area-card p {
          margin: 12px 0 0;
          color: #667085;
          line-height: 1.74;
        }

        .help-area-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          color: var(--secondary);
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 960px) {
          .help-areas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
