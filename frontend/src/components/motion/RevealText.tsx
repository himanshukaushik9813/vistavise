"use client";

import { motion, useInView } from "framer-motion";
import { type Ref, useMemo, useRef } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  mode?: "lines" | "words";
  delay?: number;
  variant?: "default" | "premiumHeading";
  float?: boolean;
};

export default function RevealText({
  text,
  as = "h2",
  className,
  mode = "words",
  delay = 0,
  variant = "default",
  float = false,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotionPreference();
  const parts = useMemo(() => (mode === "lines" ? text.split("\n") : text.split(" ")), [mode, text]);
  const isPremiumHeading = variant === "premiumHeading";
  const initialState = isPremiumHeading
    ? { opacity: 0, y: 40, z: -20, rotateX: 8, filter: "blur(6px)" }
    : { y: "112%", opacity: 0 };
  const visibleState = isPremiumHeading
    ? { opacity: 1, y: 0, z: 0, rotateX: 0, filter: "blur(0px)" }
    : { y: 0, opacity: 1 };
  const transition = {
    duration: isPremiumHeading ? 1.2 : mode === "lines" ? 0.82 : 0.58,
    ease: (isPremiumHeading ? [0.22, 1, 0.36, 1] : [0.16, 1, 0.3, 1]) as [number, number, number, number],
  };
  const rootClassName = [className, isPremiumHeading && float ? "premium-heading-float" : ""]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className={mode === "lines" ? "reveal-line-mask" : "reveal-word-mask"}>
          <motion.span
            className={mode === "lines" ? "reveal-line" : "reveal-word"}
            initial={prefersReducedMotion ? false : initialState}
            animate={inView || prefersReducedMotion ? visibleState : {}}
            transition={{
              duration: transition.duration,
              delay: delay + index * (mode === "lines" ? 0.12 : 0.035),
              ease: transition.ease,
            }}
          >
            {part}
            {mode === "words" && index < parts.length - 1 ? "\u00a0" : null}
          </motion.span>
        </span>
      ))}
    </>
  );

  const accessibleLabel = text.replace(/\n/g, " ");

  if (as === "h1") {
    return <h1 ref={ref as Ref<HTMLHeadingElement>} className={rootClassName} aria-label={accessibleLabel}>{content}</h1>;
  }

  if (as === "h2") {
    return <h2 ref={ref as Ref<HTMLHeadingElement>} className={rootClassName} aria-label={accessibleLabel}>{content}</h2>;
  }

  if (as === "h3") {
    return <h3 ref={ref as Ref<HTMLHeadingElement>} className={rootClassName} aria-label={accessibleLabel}>{content}</h3>;
  }

  if (as === "p") {
    return <p ref={ref as Ref<HTMLParagraphElement>} className={rootClassName} aria-label={accessibleLabel}>{content}</p>;
  }

  return <span ref={ref as Ref<HTMLSpanElement>} className={rootClassName} aria-label={accessibleLabel}>{content}</span>;
}
