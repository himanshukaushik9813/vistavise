"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

type ParallaxImageProps = ImageProps & {
  wrapperClassName?: string;
  yRange?: [number, number];
};

export default function ParallaxImage({
  wrapperClassName,
  className,
  yRange = [16, -16],
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={wrapperClassName}>
      <motion.div
        className="parallax-image-layer"
        style={{
          scale: prefersReducedMotion ? 1 : scale,
          y: prefersReducedMotion ? 0 : y,
          willChange: "transform",
        }}
      >
        <Image {...imageProps} alt={alt} className={className} />
      </motion.div>
    </div>
  );
}
