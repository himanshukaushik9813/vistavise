"use client";

import type { PointerEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotionPreference } from "./useReducedMotionPreference";

export function usePointerTilt(maxTilt = 3) {
  const prefersReducedMotion = useReducedMotionPreference();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 24, mass: 0.3 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 24, mass: 0.3 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return {
    prefersReducedMotion,
    rotateX,
    rotateY,
    handlePointerMove,
    resetTilt,
  };
}
