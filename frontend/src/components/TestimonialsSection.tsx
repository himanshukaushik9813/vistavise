"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./motion/TiltCard";
import { ArrowRightIcon } from "./icons";

const testimonials = [
  {
    quote:
      "Working with VistaVise Consulting transformed how we make business decisions. The process felt calm, premium, and genuinely strategic from start to finish.",
    name: "Alexandra Chen",
    role: "CEO, TechScale Solutions",
    category: "Client",
  },
  {
    quote:
      "The mentoring support was practical and thoughtful. Every session gave me clarity, confidence, and actions I could apply immediately.",
    name: "Priya Sharma",
    role: "Business Analyst, Deloitte",
    category: "Mentee",
  },
  {
    quote:
      "As a migrant navigating the Australian market, the guidance helped me move from uncertainty to a clear plan. It made a real difference.",
    name: "David Nguyen",
    role: "Senior BA, Commonwealth Bank",
    category: "Mentee",
  },
  {
    quote:
      "There is a rare blend of structure and warmth here. VistaVise brings strategic thinking without losing the human side of support.",
    name: "Fatima Al-Rashidi",
    role: "Founder, NovaBridge Consulting",
    category: "Client",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [paused]);

  const visibleTestimonials = Array.from({ length: Math.min(3, testimonials.length) }, (_, offset) => {
    return testimonials[(current + offset) % testimonials.length];
  });

  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container-custom">
        <div className="testimonials-top">
          <SectionHeading
            eyebrow="What Clients Say"
            title="Trusted voices from people navigating growth, delivery, and transition."
            subtitle="The focus is not just on polished presentation. It is whether people leave with more clarity, confidence, and a stronger sense of direction."
            align="left"
          />

          <div className="testimonial-buttons">
            <button
              type="button"
              className="testimonial-arrow reverse"
              aria-label="Previous testimonial"
              onClick={() => setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)}
            >
              <ArrowRightIcon size={14} />
            </button>
            <button
              type="button"
              className="testimonial-arrow"
              aria-label="Next testimonial"
              onClick={() => setCurrent((value) => (value + 1) % testimonials.length)}
            >
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </div>

        <div
          className="testimonials-grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${current}-${testimonial.name}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.34, delay: index * 0.05 }}
            >
              <TiltCard as="article" className="testimonial-card premium-tilt-card" maxTilt={2}>
                <span className="quote-mark">&ldquo;</span>
                <p className="testimonial-quote">{testimonial.quote}</p>

                <div className="testimonial-profile">
                  <span className="testimonial-avatar">{initials(testimonial.name)}</span>
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>

                <span className="testimonial-category">{testimonial.category}</span>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--space-40);
          margin-bottom: var(--space-40);
        }

        .testimonial-buttons {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }

        .testimonial-arrow {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.1);
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
        }

        .reverse {
          transform: rotate(180deg);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .testimonials-grid > div {
          display: flex;
        }

        .testimonial-card {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          padding: var(--space-24);
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(245, 245, 241, 0.92);
          box-shadow: var(--shadow-soft);
        }

        .quote-mark {
          display: inline-block;
          color: var(--text-primary);
          font-size: 3.6rem;
          line-height: 1;
          font-family: Georgia, serif;
        }

        .testimonial-quote {
          margin: 12px 0 0;
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: 1.3rem;
          line-height: 1.45;
          letter-spacing: -0.04em;
        }

        .testimonial-profile {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 28px;
        }

        .testimonial-avatar {
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.08);
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .testimonial-name {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          color: var(--text-primary);
          font-weight: 600;
        }

        .testimonial-role {
          margin: 4px 0 0;
          color: var(--text-muted);
          font-size: 0.86rem;
        }

        .testimonial-category {
          display: inline-flex;
          width: fit-content;
          margin-top: 18px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(17, 18, 20, 0.05);
          color: var(--text-primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .testimonials-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .testimonial-card {
            padding: var(--space-24);
          }
        }
      `}</style>
    </section>
  );
}
