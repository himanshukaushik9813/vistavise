"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import RevealText from "./motion/RevealText";
import { ArrowRightIcon } from "./icons";

const MEET_AJAY_IMAGE = "/images/meet-ajay-boardroom.png";

const supportPills = [
  "Melbourne-Based Support",
  "Business Analysis Mentorship",
  "Career & Migrant Guidance",
  "100+ Professionals Guided",
  "8+ Years Experience",
  "98% Positive Feedback",
];

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
            The VistaVise approach is calm, practical and designed for people seeking clarity, confidence and meaningful progress.
          </p>

          <div className="meet-ajay-pill-grid" aria-label="Ajay support credentials">
            {supportPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>

          <Link href="/about" className="btn-secondary">
            Read Ajay&apos;s Story
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
            <Image
              src={MEET_AJAY_IMAGE}
              alt="Premium VistaVise consulting boardroom overlooking a city skyline"
              fill
              sizes="(max-width: 1024px) 92vw, 55vw"
              className="meet-ajay-image"
              priority={false}
            />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .meet-ajay-section {
          background: #eef2f5;
        }

        .meet-ajay-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.45fr) minmax(320px, 0.55fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }

        .meet-ajay-copy h2 {
          margin: 24px 0 0;
          max-width: 680px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.55rem, 4vw, 4rem);
          line-height: 1.1;
          letter-spacing: -0.05em;
          color: #1e2a38;
        }

        .meet-ajay-copy p:not(.eyebrow) {
          margin: 20px 0 0;
          max-width: 64ch;
          color: #667085;
          font-size: clamp(1rem, 1vw, 1.08rem);
          line-height: 1.7;
        }

        .meet-ajay-pill-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 28px;
          max-width: 620px;
        }

        .meet-ajay-pill-grid span {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.65);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.04);
          color: #1e2a38;
          font-size: 0.92rem;
          font-weight: 700;
          line-height: 1.25;
          text-align: center;
        }

        .meet-ajay-copy .btn-secondary {
          margin-top: 28px;
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.65);
          color: #1e2a38;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .meet-ajay-visual {
          padding: 18px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.65);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .meet-ajay-photo {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          aspect-ratio: 1 / 1.06;
          background: #f8fafc;
        }

        .meet-ajay-image {
          object-fit: cover;
          object-position: center;
        }


        @media (max-width: 1024px) {
          .meet-ajay-grid {
            grid-template-columns: 1fr;
          }

          .meet-ajay-visual {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .meet-ajay-pill-grid {
            grid-template-columns: 1fr;
          }

          .meet-ajay-copy h2 {
            font-size: clamp(2.25rem, 10vw, 3rem);
          }
        }
      `}</style>
    </section>
  );
}
