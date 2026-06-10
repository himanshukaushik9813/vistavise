"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

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
      <h2
        className="section-heading-title"
        style={{ marginTop: eyebrow ? 20 : 0 }}
      >
        {title}
      </h2>
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
          color: rgba(17, 17, 17, 0.46);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .section-heading-title {
          margin-bottom: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.2rem, 3.35vw, 3.95rem);
          line-height: 1;
          letter-spacing: -0.065em;
          color: var(--secondary);
          font-weight: 800;
          text-wrap: balance;
        }

        .section-heading-subtitle {
          margin-top: var(--space-24);
          margin-bottom: 0;
          max-width: 640px;
          color: var(--text-secondary);
          font-size: clamp(0.98rem, 1.08vw, 1.06rem);
          line-height: 1.72;
        }

        @media (max-width: 768px) {
          .section-heading-title {
            font-size: clamp(2.08rem, 9vw, 3.1rem);
            line-height: 1;
          }
        }
      `}</style>
    </motion.div>
  );
}
