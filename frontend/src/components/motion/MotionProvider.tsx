"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

type MotionProviderProps = {
  children: ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const pointerFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!pointerFine) return;

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".btn-primary, .btn-secondary, .btn-tertiary"),
    );

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      const magnetX = Math.max(-6, Math.min(6, x * 0.12));
      const magnetY = Math.max(-6, Math.min(6, y * 0.12));

      target.style.setProperty("--magnet-x", `${magnetX}px`);
      target.style.setProperty("--magnet-y", `${magnetY}px`);
    };

    const resetMagnet = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--magnet-x", "0px");
      target.style.setProperty("--magnet-y", "0px");
    };

    buttons.forEach((button) => {
      button.addEventListener("pointermove", handlePointerMove);
      button.addEventListener("pointerleave", resetMagnet);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("pointermove", handlePointerMove);
        button.removeEventListener("pointerleave", resetMagnet);
        button.style.removeProperty("--magnet-x");
        button.style.removeProperty("--magnet-y");
      });
    };
  }, [pathname, prefersReducedMotion]);

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
