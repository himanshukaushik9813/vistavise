"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./motion/TiltCard";
import { testimonials } from "@/lib/vistavise-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="testimonials" className="section-padding testimonials-section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by people building confidence, direction, and real momentum."
          subtitle="Every engagement is measured by whether people leave with more clarity, stronger self-belief, and a practical next move they can actually take."
          align="left"
          maxWidth={760}
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, delay: index * 0.05 }}
            >
              <TiltCard as="article" className="testimonial-card premium-tilt-card" maxTilt={1.8}>
                <span className="testimonial-highlight">{testimonial.highlight}</span>
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <div className="testimonial-profile">
                  <span className="testimonial-avatar">{initials(testimonial.name)}</span>
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .testimonial-card {
          min-height: 100%;
          padding: 30px;
        }

        .testimonial-highlight {
          display: inline-flex;
          width: fit-content;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.58);
          color: var(--primary-strong);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .testimonial-quote {
          margin: 20px 0 0;
          color: #1e2a38;
          font-size: 1.16rem;
          line-height: 1.75;
          letter-spacing: -0.02em;
        }

        .testimonial-profile {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid rgba(43, 45, 66, 0.08);
        }

        .testimonial-avatar {
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 800;
        }

        .testimonial-name {
          margin: 0;
          color: var(--secondary);
          font-weight: 800;
        }

        .testimonial-role {
          margin: 4px 0 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 960px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
