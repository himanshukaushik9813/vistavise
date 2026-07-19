"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRightIcon } from "./icons";
import RevealText from "./motion/RevealText";

const badges = ["Business Analysis", "Career Mentoring", "Strategic Consulting", "Melbourne Community"];

export default function MeetAjayPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding meet-ajay-preview-section">
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
            text="Meet the founder behind VistaVise."
            variant="premiumHeading"
            float
          />
          <p>
            Ajay Kaushik brings together Business Analysis mentorship, consulting experience,
            and career coaching to help students and professionals build practical confidence.
          </p>
          <p>
            His approach is structured, calm, and grounded in real-world career readiness, from
            portfolio projects to interview preparation and Melbourne community support.
          </p>

          <div className="meet-ajay-preview-badges" aria-label="Ajay focus areas">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <Link href="/about" className="btn-primary meet-ajay-preview-cta">
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
          background:
            radial-gradient(circle at 80% 12%, rgba(220, 234, 247, 0.46), transparent 32%),
            linear-gradient(180deg, #ffffff 0%, #f5f9fc 100%);
        }

        .meet-ajay-preview-grid {
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
          color: #64748b;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .preview-eyebrow::after {
          content: "";
          width: 76px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.3), transparent);
        }

        .meet-ajay-preview-copy h2 {
          margin: 22px 0 0;
          max-width: 720px;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.55rem, 4.3vw, 4.8rem);
          line-height: 1.04;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .meet-ajay-preview-copy p:not(.preview-eyebrow) {
          max-width: 660px;
          margin: 18px 0 0;
          color: #667085;
          font-size: 1.05rem;
          line-height: 1.78;
        }

        .meet-ajay-preview-badges {
          display: flex;
          flex-wrap: wrap;
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
          border: 1px solid rgba(255, 255, 255, 0.82);
          background: rgba(255, 255, 255, 0.68);
          color: #1e2a38;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.045);
          font-size: 0.86rem;
          font-weight: 800;
          backdrop-filter: blur(14px);
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
