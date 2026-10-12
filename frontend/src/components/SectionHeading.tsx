"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import RevealText from "./motion/RevealText";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "center" | "left";
  maxWidth?: number | string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
  maxWidth = 720,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      className="section-heading-root"
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        textAlign: align,
        marginBottom: "var(--space-40)",
        maxWidth,
        marginInline: align === "center" ? "auto" : undefined,
      }}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <RevealText as="h2" className="section-heading-title" text={title} mode="words" variant="premiumHeading" float />
      {subtitle ? (
        <p className="section-heading-subtitle" style={{ marginInline: align === "center" ? "auto" : 0 }}>
          {subtitle}
        </p>
      ) : null}
      {children}

      <style jsx global>{`
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--primary-strong);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 34px;
          height: 1px;
          border-radius: 999px;
          background: rgba(30, 42, 56, 0.22);
        }

        .section-heading-title {
          margin-top: 0;
          margin-bottom: 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 900px;
          font-size: var(--fs-heading);
          line-height: var(--heading-line-height);
          letter-spacing: var(--heading-tracking);
          color: var(--secondary);
          font-weight: 800;
          text-wrap: balance;
        }

        .section-heading-root .eyebrow + .section-heading-title {
          margin-top: 20px;
        }

        .section-heading-subtitle {
          margin-top: var(--space-24);
          margin-bottom: 0;
          max-width: 640px;
          color: var(--text-secondary);
          font-size: var(--fs-lead);
          line-height: 1.78;
        }

        @media (max-width: 768px) {
          .section-heading-title {
            font-size: var(--fs-heading);
            line-height: var(--heading-line-height);
          }
        }
      `}</style>
    </motion.div>
  );
}
