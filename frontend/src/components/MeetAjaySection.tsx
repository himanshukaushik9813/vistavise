"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import OwnerPortrait from "./OwnerPortrait";
import RevealText from "./motion/RevealText";
import { ArrowRightIcon } from "./icons";

export default function MeetAjaySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding meet-ajay-section">
      <div className="container-custom meet-ajay-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="meet-ajay-copy"
        >
          <p className="eyebrow">Meet Ajay</p>
          <RevealText
            as="h2"
            text="A mentor who combines professional structure with grounded human support."
            variant="premiumHeading"
            float
          />
          <p>
            Ajay brings together business analysis thinking, mentoring experience, and community-focused guidance for people navigating growth in a new stage of life or career.
          </p>
          <p>
            The VistaVise approach is calm, direct, and practical. It is designed for people who want a thoughtful guide, not a generic consulting script.
          </p>
          <Link href="/about" className="btn-secondary">
            Read Ajay&apos;s story
            <ArrowRightIcon size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08 }}
          className="meet-ajay-visual surface-card-strong"
        >
          <div className="meet-ajay-photo">
            <OwnerPortrait
              alt="Ajay from VistaVise"
              sizes="(max-width: 1024px) 88vw, 40vw"
              rounded="32px"
              objectPosition="center 14%"
            />
          </div>
          <div className="meet-ajay-note">
            <span>Melbourne-based support</span>
            <span>Business analysis mentorship</span>
            <span>Career and migrant guidance</span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .meet-ajay-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.46fr) minmax(320px, 0.54fr);
          gap: 32px;
          align-items: center;
        }

        .meet-ajay-copy h2 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.3rem, 3vw, 3.6rem);
          line-height: 1.1;
          letter-spacing: -0.05em;
          color: var(--secondary);
        }

        .meet-ajay-copy p:not(.eyebrow) {
          margin: 18px 0 0;
          color: var(--text-secondary);
          line-height: 1.82;
        }

        .meet-ajay-copy .btn-secondary {
          margin-top: 24px;
        }

        .meet-ajay-visual {
          padding: 18px;
          border-radius: 28px;
        }

        .meet-ajay-photo {
          overflow: hidden;
          border-radius: 24px;
          aspect-ratio: 1 / 1.06;
          background: rgba(255, 255, 255, 0.84);
        }

        .meet-ajay-note {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .meet-ajay-note span {
          display: inline-flex;
          align-items: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.5);
          color: var(--secondary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .meet-ajay-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
