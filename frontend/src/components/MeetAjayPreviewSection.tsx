"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRightIcon } from "./icons";
import RevealText from "./motion/RevealText";

const badges = [
  "Real-World Practicality",
  "Structured Clarity",
  "End-to-End Readiness",
  "Action-Driven Guidance",
  "Job-Ready Confidence",
  "Collaborative Growth",
];
const MEET_AJAY_BACKGROUND = "/images/meet-ajay-strategy-background.png";

export default function MeetAjayPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding meet-ajay-preview-section">
      <div className="meet-ajay-preview-background" aria-hidden="true">
        <Image
          src={MEET_AJAY_BACKGROUND}
          alt=""
          fill
          sizes="100vw"
          className="meet-ajay-preview-background-image"
          priority={false}
        />
        <span className="meet-ajay-preview-background-overlay" />
        <span className="meet-ajay-preview-background-vignette" />
      </div>

      <div className="container-custom meet-ajay-preview-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="meet-ajay-preview-copy"
        >
          <p className="preview-eyebrow">Meet Ajay</p>
          <RevealText
            as="h2"
            text="Meet the Mentor Behind VistaVise."
            variant="premiumHeading"
            float
          />
          <p>
            Ajay Kaushik combines hands-on Business Analysis expertise, consulting experience, and tailored
            career coaching to help aspiring and established professionals build real confidence.
          </p>
          <p>
            His approach is structured, practical, and grounded in real-world career readiness &mdash; guiding
            you through portfolio projects, industry-standard interview strategies, and professional positioning.
          </p>

          <div className="meet-ajay-preview-badges" aria-label="Ajay focus areas">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <Link href="/about#meet-ajay" className="btn-primary meet-ajay-preview-cta">
            Learn More About Ajay
            <ArrowRightIcon size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
          whileHover={{ y: -6 }}
          className="meet-ajay-preview-visual"
        >
          <div className="meet-ajay-preview-frame">
            <div className="meet-ajay-preview-photo">
              <Image
                src="/images/ajay-kaushik-founder.jpg"
                alt="Ajay Kaushik, founder of VistaVise Consulting"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="meet-ajay-preview-image"
              />
              <span className="meet-ajay-preview-glass" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .meet-ajay-preview-section {
          position: relative;
          overflow: clip;
          background: #111827;
          color: #ffffff;
        }

        .meet-ajay-preview-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .meet-ajay-preview-background-image {
          object-fit: cover;
          object-position: 50% 50%;
          transform: scale(1.015);
        }

        .meet-ajay-preview-background-overlay,
        .meet-ajay-preview-background-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .meet-ajay-preview-background-overlay {
          background:
            linear-gradient(90deg, rgba(8, 10, 13, 0.86) 0%, rgba(8, 10, 13, 0.74) 38%, rgba(8, 10, 13, 0.48) 64%, rgba(8, 10, 13, 0.34) 100%),
            radial-gradient(circle at 22% 48%, rgba(8, 10, 13, 0.24), transparent 38%);
        }

        .meet-ajay-preview-background-vignette {
          background:
            radial-gradient(circle at 70% 45%, transparent 0%, rgba(8, 10, 13, 0.18) 62%, rgba(8, 10, 13, 0.58) 100%),
            linear-gradient(180deg, rgba(8, 10, 13, 0.24), transparent 28%, rgba(8, 10, 13, 0.42));
        }

        .meet-ajay-preview-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.54fr) minmax(320px, 0.46fr);
          gap: clamp(32px, 5vw, 76px);
          align-items: center;
        }

        .preview-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .preview-eyebrow::after {
          content: "";
          width: 76px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.42), transparent);
        }

        .meet-ajay-preview-copy h2 {
          margin: 22px 0 0;
          max-width: 720px;
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.55rem, 4.3vw, 4.8rem);
          line-height: 1.04;
          letter-spacing: -0.06em;
          text-wrap: balance;
          text-shadow: 0 18px 52px rgba(0, 0, 0, 0.42);
        }

        .meet-ajay-preview-copy p:not(.preview-eyebrow) {
          max-width: 660px;
          margin: 18px 0 0;
          color: rgba(245, 245, 244, 0.78);
          font-size: 1.05rem;
          line-height: 1.78;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.28);
        }

        .meet-ajay-preview-badges {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 26px;
          max-width: 680px;
        }

        .meet-ajay-preview-badges span {
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(8, 10, 13, 0.28);
          color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.14);
          font-size: 0.84rem;
          font-weight: 800;
          text-align: center;
        }

        .meet-ajay-preview-cta {
          margin-top: 28px;
        }

        .meet-ajay-preview-visual {
          animation: meetAjayPreviewFloat 8s ease-in-out infinite;
        }

        .meet-ajay-preview-frame {
          padding: 14px;
          border-radius: 34px;
          border: 1px solid rgba(255, 255, 255, 0.86);
          background: rgba(255, 255, 255, 0.62);
          box-shadow: 0 30px 84px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(22px);
        }

        .meet-ajay-preview-photo {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          aspect-ratio: 1 / 1;
          background: #eef2f5;
        }

        .meet-ajay-preview-image {
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
        }

        .meet-ajay-preview-glass {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.22), transparent 34%),
            linear-gradient(180deg, transparent 62%, rgba(15, 23, 42, 0.08));
          pointer-events: none;
        }

        @keyframes meetAjayPreviewFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .meet-ajay-preview-visual {
            animation: none;
          }
        }

        @media (max-width: 1024px) {
          .meet-ajay-preview-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .meet-ajay-preview-badges {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .meet-ajay-preview-visual {
            order: -1;
          }

          .meet-ajay-preview-copy h2 {
            font-size: clamp(2.25rem, 10vw, 3.1rem);
          }

          .meet-ajay-preview-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
