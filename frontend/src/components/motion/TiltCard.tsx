"use client";

import { motion, type MotionStyle } from "framer-motion";
import { type CSSProperties, ReactNode } from "react";
import { usePointerTilt } from "@/hooks/usePointerTilt";

type TiltCardProps = {
  children: ReactNode;
  as?: "article" | "div" | "a";
  className?: string;
  style?: CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  as = "article",
  className,
  maxTilt = 3,
  style,
  ...props
}: TiltCardProps) {
  const { prefersReducedMotion, rotateX, rotateY, handlePointerMove, resetTilt } = usePointerTilt(maxTilt);
  const motionStyle: MotionStyle = {
    ...(style as MotionStyle),
    position: style?.position || "relative",
    transformStyle: "preserve-3d" as const,
    rotateX: prefersReducedMotion ? 0 : rotateX,
    rotateY: prefersReducedMotion ? 0 : rotateY,
  };
  const hover = prefersReducedMotion ? undefined : { y: -8, rotateX: 2 };
  const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };
  const content = (
    <>
      <span className="tilt-reflection" aria-hidden="true" />
      {children}
    </>
  );

  if (as === "a") {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={props["aria-label"]}
        className={className}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        style={motionStyle}
        whileHover={hover}
        transition={transition}
      >
        {content}
      </motion.a>
    );
  }

  if (as === "div") {
    return (
      <motion.div
        aria-label={props["aria-label"]}
        className={className}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        style={motionStyle}
        whileHover={hover}
        transition={transition}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.article
      aria-label={props["aria-label"]}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={motionStyle}
      whileHover={hover}
      transition={transition}
    >
      {content}
    </motion.article>
  );
}
