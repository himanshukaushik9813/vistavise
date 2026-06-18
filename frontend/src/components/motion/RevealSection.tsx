"use client";

import { motion } from "framer-motion";
import { type CSSProperties, ReactNode } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  delay?: number;
  amount?: number;
};

export default function RevealSection({
  children,
  className,
  delay = 0,
  amount = 0.18,
  ...props
}: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.div
      id={props.id}
      style={props.style}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
