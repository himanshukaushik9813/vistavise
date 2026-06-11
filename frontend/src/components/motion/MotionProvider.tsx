"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

type MotionProviderProps = {
  children: ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReducedMotion) {
      document.documentElement.dataset.motion = "reduced";
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return;
    }

    document.documentElement.dataset.motion = "premium";

    const lenis = new Lenis({
      duration: 1.12,
      easing: (time: number) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.86,
      touchMultiplier: 1,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      delete document.documentElement.dataset.motion;
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
