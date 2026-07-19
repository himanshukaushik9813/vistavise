"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import TiltCard from "./motion/TiltCard";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon } from "./icons";
import { services } from "@/lib/vistavise-data";

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="section-padding services-section">
      <div className="container-custom">
        <div className="services-head-row">
          <SectionHeading
            eyebrow="Mentorship Program"
            title="Practical support for every stage of becoming a Business Analyst."
            subtitle="Choose the support you need: core BA mentorship, 1:1 guidance, interview preparation, resume positioning, resources, and community."
            align="left"
            maxWidth={760}
          />
          <Link href="/services" className="btn-secondary services-all-link">
            View all programs
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.44, delay: index * 0.06 }}
            >
              <TiltCard as="article" className="service-card premium-tilt-card" maxTilt={2}>
                <Link href={`/services/${service.slug}`} className="service-card-link" aria-label={`Learn more about ${service.title}`}>
                  <div className="service-media">
                    <Image
                      src={service.image}
                      alt={`${service.title} editorial visual`}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1120px) 50vw, 33vw"
                      className="service-image"
                    />
                  </div>

                  <div className="service-copy">
                    <div className="service-head">
                      <span className="service-icon">{String(index + 1).padStart(2, "0")}</span>
                      <span className="service-index">{service.eyebrow}</span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <span className="service-toggle">
                      Learn More
                      <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          position: relative;
          overflow: clip;
        }

        .services-section::before {
          content: "";
          position: absolute;
          inset: 8% 4% auto auto;
          width: min(620px, 52vw);
          height: min(620px, 52vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(220, 234, 247, 0.52), transparent 66%);
          pointer-events: none;
        }

        .services-head-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--space-32);
          margin-bottom: var(--space-40);
        }

        .services-all-link {
          flex: 0 0 auto;
          margin-bottom: 10px;
        }

        .services-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .services-grid > div {
          display: flex;
        }

        .service-card {
          min-height: 100%;
          width: 100%;
          padding: 12px;
        }

        .service-card-link {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          color: inherit;
          text-decoration: none;
        }

        .service-media {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          aspect-ratio: 1.32 / 1;
          background: #eef2f5;
        }

        .service-image {
          object-fit: cover;
          transition: transform 0.7s var(--ease-premium);
        }

        .service-card:hover .service-image {
          transform: scale(1.045);
        }

        .service-copy {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px 14px 14px;
        }

        .service-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .service-icon {
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .service-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          height: 32px;
          padding-inline: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.72);
          color: var(--text-muted);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .service-title {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.32rem, 1.75vw, 1.78rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #1e2a38;
        }

        .service-description {
          margin: 14px 0 0;
          color: #667085;
          font-size: 0.95rem;
          line-height: 1.72;
        }

        .service-toggle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 22px;
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: 0.92rem;
          font-weight: 800;
        }

        @media (max-width: 1120px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .services-head-row {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 720px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 10px;
          }
        }
      `}</style>
    </section>
  );
}
