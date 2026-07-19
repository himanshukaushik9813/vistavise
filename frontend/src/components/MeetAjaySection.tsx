"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import RevealText from "./motion/RevealText";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CompassIcon,
  LayersIcon,
  MapPinIcon,
  TargetIcon,
  UsersIcon,
} from "./icons";
import { calendlyUrl } from "@/lib/vistavise-data";

const MEET_AJAY_IMAGE = "/images/ajay-kaushik-founder.jpg";

const founderHighlights = [
  { label: "Business Analysis Mentor", icon: TargetIcon },
  { label: "Strategic Consultant", icon: CompassIcon },
  { label: "Project Delivery Experience", icon: LayersIcon },
  { label: "Career Coach", icon: BriefcaseIcon },
  { label: "Student & Migrant Guidance", icon: UsersIcon },
  { label: "Melbourne-based Community", icon: MapPinIcon },
];

const portraitBadges = [
  "Business Analysis",
  "Mentorship",
  "Career Guidance",
  "Strategic Consulting",
  "Melbourne",
];

export default function MeetAjaySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding meet-ajay-section">
      <div className="meet-ajay-glow meet-ajay-glow-one" aria-hidden="true" />
      <div className="meet-ajay-glow meet-ajay-glow-two" aria-hidden="true" />

      <div className="container-custom meet-ajay-grid">
        <div className="meet-ajay-copy">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="meet-founder-eyebrow"
          >
            Meet the Founder
          </motion.p>

          <RevealText
            as="h2"
            text="Meet Ajay Kaushik - Helping aspiring Business Analysts build confidence, practical skills, and meaningful careers."
            variant="premiumHeading"
            float
          />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.58, delay: 0.08 }}
            className="meet-ajay-intro"
          >
            <p>
              Ajay Kaushik is a Business Analyst, mentor, and consultant dedicated to helping
              students and professionals bridge the gap between theory and real-world business
              analysis.
            </p>
            <p>
              Through practical mentoring, portfolio development, interview preparation, and
              structured career guidance, he has helped learners build confidence and prepare for
              successful careers.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.58, delay: 0.14 }}
            className="meet-ajay-mission"
          >
            <CheckCircleIcon size={18} />
            <blockquote>
              &quot;My mission is simple - turn uncertainty into clarity and help every learner
              become job-ready through practical experience.&quot;
            </blockquote>
          </motion.figure>

          <div className="founder-highlight-grid" aria-label="Founder highlights">
            {founderHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.06 }}
                  className="founder-highlight-row"
                >
                  <span className="founder-highlight-icon" aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <span>{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="meet-ajay-actions"
          >
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
              <ArrowRightIcon size={14} />
            </a>
            <Link href="/services" className="btn-secondary">
              View Mentorship Program
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          whileHover={{ y: -6 }}
          className="meet-ajay-visual"
        >
          <div className="meet-ajay-frame">
            <div className="meet-ajay-photo">
              <Image
                src={MEET_AJAY_IMAGE}
                alt="Ajay Kaushik, founder of VistaVise Consulting"
                fill
                sizes="(max-width: 1024px) 92vw, 48vw"
                className="meet-ajay-image"
                priority={false}
              />
              <span className="meet-ajay-image-glass" aria-hidden="true" />
            </div>
          </div>

          <div className="meet-ajay-badges" aria-label="Ajay expertise areas">
            {portraitBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .meet-ajay-section {
          position: relative;
          overflow: clip;
          background:
            radial-gradient(circle at 82% 20%, rgba(220, 234, 247, 0.58), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f4f8fb 52%, #eef4f8 100%);
        }

        .meet-ajay-glow {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(4px);
        }

        .meet-ajay-glow-one {
          inset: 14% auto auto 5%;
          width: min(380px, 34vw);
          height: min(380px, 34vw);
          background: rgba(255, 255, 255, 0.68);
        }

        .meet-ajay-glow-two {
          right: 9%;
          bottom: 8%;
          width: min(420px, 36vw);
          height: min(420px, 36vw);
          background: rgba(220, 234, 247, 0.36);
        }

        .meet-ajay-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.52fr) minmax(340px, 0.48fr);
          gap: clamp(40px, 5vw, 84px);
          align-items: center;
        }

        .meet-ajay-copy {
          min-width: 0;
        }

        .meet-founder-eyebrow {
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

        .meet-founder-eyebrow::after {
          content: "";
          width: 82px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.34), transparent);
        }

        .meet-ajay-copy h2 {
          margin: 24px 0 0;
          max-width: 820px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.45rem, 4.2vw, 4.8rem);
          line-height: 1.04;
          letter-spacing: -0.06em;
          color: #1e2a38;
          text-wrap: balance;
        }

        .meet-ajay-intro {
          display: grid;
          gap: 16px;
          margin-top: 26px;
          max-width: 690px;
        }

        .meet-ajay-intro p {
          margin: 0;
          color: #667085;
          font-size: clamp(1rem, 1.08vw, 1.12rem);
          line-height: 1.78;
        }

        .meet-ajay-mission {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 16px;
          align-items: start;
          max-width: 700px;
          margin: 30px 0 0;
          padding: 22px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.82);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(18px);
        }

        .meet-ajay-mission svg {
          width: 42px;
          height: 42px;
          padding: 12px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.86);
          color: #1e2a38;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.88);
        }

        .meet-ajay-mission blockquote {
          margin: 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.18rem, 1.35vw, 1.42rem);
          font-weight: 800;
          line-height: 1.45;
          letter-spacing: -0.035em;
        }

        .founder-highlight-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 720px;
          margin-top: 26px;
        }

        .founder-highlight-row {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 56px;
          padding: 12px 14px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.62);
          box-shadow: 0 16px 42px rgba(15, 23, 42, 0.04);
          color: #1e2a38;
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          backdrop-filter: blur(14px);
        }

        .founder-highlight-icon {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.86);
          color: #1e2a38;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.88);
        }

        .meet-ajay-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .meet-ajay-visual {
          min-width: 0;
          animation: meetAjayFloat 8s ease-in-out infinite;
        }

        .meet-ajay-frame {
          padding: 16px;
          border-radius: 34px;
          border: 1px solid rgba(255, 255, 255, 0.84);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(247, 250, 252, 0.56));
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(22px);
        }

        .meet-ajay-photo {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          aspect-ratio: 0.92 / 1;
          background: #eef2f5;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .meet-ajay-image {
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
        }

        .meet-ajay-image-glass {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent 32%),
            linear-gradient(180deg, transparent 62%, rgba(15, 23, 42, 0.08));
          pointer-events: none;
        }

        .meet-ajay-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .meet-ajay-badges span {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid rgba(30, 42, 56, 0.07);
          background: rgba(255, 255, 255, 0.66);
          color: #1e2a38;
          font-size: 0.82rem;
          font-weight: 800;
          backdrop-filter: blur(14px);
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.04);
        }

        @keyframes meetAjayFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .meet-ajay-visual {
            animation: none;
          }
        }

        @media (max-width: 1024px) {
          .meet-ajay-grid {
            grid-template-columns: 1fr;
          }

          .meet-ajay-visual {
            order: -1;
          }

          .meet-ajay-copy h2,
          .meet-ajay-intro,
          .meet-ajay-mission,
          .founder-highlight-grid {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .meet-ajay-grid {
            gap: 32px;
          }

          .meet-ajay-copy h2 {
            font-size: clamp(2.25rem, 10vw, 3.05rem);
          }

          .meet-ajay-mission,
          .founder-highlight-grid {
            grid-template-columns: 1fr;
          }

          .meet-ajay-mission svg {
            width: 40px;
            height: 40px;
          }

          .meet-ajay-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .meet-ajay-actions .btn-primary,
          .meet-ajay-actions .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .meet-ajay-frame {
            padding: 10px;
            border-radius: 28px;
          }

          .meet-ajay-photo {
            border-radius: 24px;
            aspect-ratio: 1 / 1.04;
          }
        }
      `}</style>
    </section>
  );
}
