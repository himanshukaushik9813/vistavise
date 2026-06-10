"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();
    let animationFrame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      setCount(Math.round(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.84 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45 }}
      style={{ textAlign: "center" }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.95rem, 3.2vw, 2.55rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
        }}
      >
        <span className="gradient-text">
          {prefix}
          {count}
          {suffix}
        </span>
      </span>
      <p
        style={{
          marginTop: 8,
          marginBottom: 0,
          color: "var(--text-secondary)",
          fontSize: "0.98rem",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}
