"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRightIcon } from "./icons";
import RevealText from "./motion/RevealText";
import { calendlyUrl } from "@/lib/vistavise-data";

export default function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding final-cta-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="final-cta-panel"
        >
          <p className="eyebrow">Final CTA</p>
          <RevealText as="h2" text="Build your future with confidence." variant="premiumHeading" float />
          <p>
            Book a free consultation to talk through your goals, questions, and the support that would make the biggest difference right now.
          </p>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Free Consultation
            <ArrowRightIcon size={14} />
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .final-cta-panel {
          padding: 38px;
          border-radius: 32px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background:
            radial-gradient(circle at top right, rgba(220, 234, 247, 0.58), transparent 32%),
            rgba(255, 255, 255, 0.76);
          box-shadow: var(--shadow-panel);
          text-align: center;
        }

        .final-cta-panel .eyebrow::before {
          display: none;
        }

        .final-cta-panel h2 {
          margin: 18px auto 0;
          max-width: 720px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.4rem, 3.5vw, 4rem);
          line-height: 1.02;
          letter-spacing: -0.06em;
          color: var(--secondary);
        }

        .final-cta-panel p:not(.eyebrow) {
          margin: 18px auto 0;
          max-width: 620px;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .final-cta-panel .btn-primary {
          margin-top: 24px;
        }
      `}</style>
    </section>
  );
}
