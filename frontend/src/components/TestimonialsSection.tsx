"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { testimonials } from "@/lib/vistavise-data";

const studentCompanies = [
  "VistaVise Mentorship",
  "BA Career Studio",
  "Interview Readiness",
  "Portfolio Practice",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(0);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const marqueeItems = useMemo(
    () => [...testimonials, ...testimonials, ...testimonials],
    [],
  );

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frame = 0;

    const setCardDepth = () => {
      const viewportCenter = window.innerWidth / 2;
      const focusRange = Math.max(360, window.innerWidth * 0.38);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.min(Math.abs(cardCenter - viewportCenter) / focusRange, 1);
        const focus = 1 - distance;
        const opacity = 0.38 + focus * 0.62;
        const scale = 0.95 + focus * 0.05;
        const blur = distance * 2.2;
        const tilt = (index % 2 === 0 ? -1 : 1) * (1.4 - focus * 0.9);

        card.style.setProperty("--testimonial-depth-opacity", opacity.toFixed(3));
        card.style.setProperty("--testimonial-depth-scale", scale.toFixed(3));
        card.style.setProperty("--testimonial-depth-blur", `${blur.toFixed(2)}px`);
        card.style.setProperty("--testimonial-depth-tilt", `${tilt.toFixed(2)}deg`);
      });
    };

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const cycleWidth = track.scrollWidth / 3;
      if (cycleWidth > 0 && !pausedRef.current) {
        const pixelsPerSecond = cycleWidth / 24;
        offsetRef.current = (offsetRef.current + pixelsPerSecond * (delta / 1000)) % cycleWidth;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      setCardDepth();
      frame = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      offsetRef.current = 0;
      track.style.transform = "translate3d(0, 0, 0)";
      setCardDepth();
    };

    frame = window.requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding testimonials-section">
      <div className="testimonials-ambient testimonials-ambient-one" aria-hidden="true" />
      <div className="testimonials-ambient testimonials-ambient-two" aria-hidden="true" />

      <div className="container-custom testimonials-shell">
        <div className="testimonials-header">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="testimonials-eyebrow">Testimonials</p>
            <h2>What Our Students Say</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="testimonials-intro"
          >
            Feedback from learners using structured mentoring, practical portfolio work, and
            interview preparation to move toward Business Analysis career readiness.
          </motion.p>
        </div>
      </div>

      <div className="testimonials-marquee-wrap">
        <div
          ref={trackRef}
          className="testimonials-marquee-track"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          {marqueeItems.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              ref={(node) => {
                if (node) cardRefs.current[index] = node;
              }}
              className="testimonial-card"
            >
              <div className="testimonial-stars" aria-label="Five star feedback">
                ★★★★★
              </div>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-profile">
                <span className="testimonial-avatar" aria-hidden="true">
                  {initials(testimonial.name)}
                </span>
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">
                    {studentCompanies[index % studentCompanies.length]}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-section {
          position: relative;
          overflow: clip;
          background:
            radial-gradient(circle at 16% 8%, rgba(255, 255, 255, 0.95), transparent 28%),
            radial-gradient(circle at 84% 18%, rgba(232, 214, 180, 0.4), transparent 34%),
            radial-gradient(circle at 36% 96%, rgba(220, 234, 247, 0.36), transparent 30%),
            linear-gradient(180deg, #f7f3ea 0%, #f4eddf 56%, #f8f5ed 100%);
        }

        .testimonials-section::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.34;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(31, 28, 24, 0.055) 1px, transparent 0);
          background-size: 26px 26px;
          mask-image: linear-gradient(180deg, transparent, #000 18%, #000 82%, transparent);
        }

        .testimonials-ambient {
          position: absolute;
          z-index: 0;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(54px);
          opacity: 0.55;
        }

        .testimonials-ambient-one {
          top: 10%;
          left: -8%;
          width: min(520px, 42vw);
          height: min(520px, 42vw);
          background: rgba(255, 255, 255, 0.88);
        }

        .testimonials-ambient-two {
          right: -6%;
          bottom: 8%;
          width: min(620px, 48vw);
          height: min(620px, 48vw);
          background: rgba(232, 214, 180, 0.48);
        }

        .testimonials-shell {
          position: relative;
          z-index: 1;
        }

        .testimonials-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          margin-bottom: clamp(40px, 5vw, 64px);
        }

        .testimonials-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin: 0;
          color: rgba(30, 42, 56, 0.62);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .testimonials-eyebrow::after {
          content: "";
          width: 84px;
          height: 1px;
          background: linear-gradient(90deg, rgba(30, 42, 56, 0.28), transparent);
        }

        .testimonials-header h2 {
          max-width: none;
          margin: 22px 0 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.6rem, 4.6vw, 4.8rem);
          font-weight: 850;
          line-height: 1.02;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .testimonials-intro {
          max-width: none;
          margin: 0;
          color: rgba(30, 42, 56, 0.68);
          font-size: clamp(0.95rem, 1.05vw, 1.02rem);
          line-height: 1.7;
        }

        @media (min-width: 1100px) {
          .testimonials-header h2,
          .testimonials-intro {
            white-space: nowrap;
          }
        }

        .testimonials-marquee-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          overflow: hidden;
          padding: 10px 0 26px;
        }

        .testimonials-marquee-wrap::before,
        .testimonials-marquee-wrap::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 4;
          width: min(160px, 12vw);
          pointer-events: none;
        }

        .testimonials-marquee-wrap::before {
          left: 0;
          background: linear-gradient(90deg, #f7f3ea, rgba(247, 243, 234, 0));
        }

        .testimonials-marquee-wrap::after {
          right: 0;
          background: linear-gradient(270deg, #f7f3ea, rgba(247, 243, 234, 0));
        }

        .testimonials-marquee-track {
          display: flex;
          width: max-content;
          gap: clamp(18px, 2vw, 28px);
          padding-inline: clamp(20px, 6vw, 96px);
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .testimonials-section .testimonial-card {
          --testimonial-depth-opacity: 0.48;
          --testimonial-depth-scale: 0.95;
          --testimonial-depth-blur: 1.5px;
          --testimonial-depth-tilt: 1deg;
          width: clamp(300px, 23vw, 420px);
          min-height: 360px;
          display: flex;
          flex-direction: column;
          padding: clamp(24px, 2.2vw, 34px);
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 22px 58px rgba(45, 35, 22, 0.08);
          opacity: var(--testimonial-depth-opacity);
          filter: blur(var(--testimonial-depth-blur));
          transform: translate3d(0, 0, 0)
            scale(var(--testimonial-depth-scale))
            rotate(var(--testimonial-depth-tilt));
          transform-origin: center center;
          transition:
            transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 560ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 560ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 560ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .testimonials-section .testimonial-card::before,
        .testimonials-section .testimonial-card::after {
          content: none;
          display: none;
        }

        .testimonials-section .testimonial-card:hover {
          opacity: 1 !important;
          filter: blur(0) !important;
          transform: translate3d(0, -8px, 0) scale(1.03) rotate(0deg) !important;
          box-shadow:
            0 34px 90px rgba(45, 35, 22, 0.14),
            0 8px 28px rgba(45, 35, 22, 0.08);
        }

        .testimonials-section .testimonial-stars {
          color: #1e2a38;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
        }

        .testimonials-section .testimonial-quote {
          margin: 22px 0 0;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.1rem, 1.25vw, 1.34rem);
          font-weight: 760;
          line-height: 1.55;
          letter-spacing: -0.035em;
        }

        .testimonials-section .testimonial-profile {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 28px;
        }

        .testimonials-section .testimonial-avatar {
          width: 58px;
          height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.86);
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.92), transparent 42%),
            linear-gradient(135deg, #dceaf7, #f7f3ea);
          box-shadow: 0 14px 32px rgba(45, 35, 22, 0.08);
          color: #1e2a38;
          font-size: 0.86rem;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .testimonials-section .testimonial-name {
          margin: 0;
          color: #1e2a38;
          font-weight: 850;
          letter-spacing: -0.02em;
        }

        .testimonials-section .testimonial-role,
        .testimonials-section .testimonial-company {
          margin: 4px 0 0;
          color: rgba(30, 42, 56, 0.58);
          font-size: 0.88rem;
          line-height: 1.25;
        }

        .testimonials-section .testimonial-company {
          color: rgba(30, 42, 56, 0.45);
        }

        @media (max-width: 1024px) {
          .testimonials-header {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 24px;
          }

          .testimonials-section .testimonial-card {
            width: clamp(300px, 31vw, 380px);
          }
        }

        @media (max-width: 640px) {
          .testimonials-header h2 {
            font-size: clamp(2.45rem, 12vw, 3.55rem);
          }

          .testimonials-intro {
            font-size: 1rem;
          }

          .testimonials-marquee-track {
            gap: 16px;
            padding-inline: 20px;
          }

          .testimonials-section .testimonial-card {
            width: 82vw;
            min-height: 350px;
          }

          .testimonials-marquee-wrap::before,
          .testimonials-marquee-wrap::after {
            width: 46px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonials-marquee-wrap {
            overflow-x: auto;
          }

          .testimonials-marquee-track {
            width: max-content;
            transform: none !important;
          }

          .testimonials-section .testimonial-card {
            opacity: 1;
            filter: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
