"use client";

import { motion } from "framer-motion";

type BrandWordmarkProps = {
  mainSize?: string;
  subSize?: string;
  align?: "left" | "center";
};

export default function BrandWordmark({
  mainSize = "1.5rem",
  subSize = "0.72rem",
  align = "left",
}: BrandWordmarkProps) {
  return (
    <motion.div
      aria-label="VistaVise"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        lineHeight: 1,
      }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: mainSize,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          display: "inline-flex",
          alignItems: "baseline",
          gap: 1,
        }}
      >
        <span style={{ color: "var(--primary)" }}>Vista</span>
        <span style={{ color: "var(--secondary)" }}>Vise</span>
      </span>
      <span
        style={{
          marginTop: 5,
          fontFamily: "var(--font-body)",
          fontSize: subSize,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        Consulting
      </span>
    </motion.div>
  );
}
