"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon } from "./icons";
import { services } from "@/lib/vistavise-data";

const serviceImageTone: Record<string, "lightText" | "darkText"> = {
  "business-analysis-mentorship": "lightText",
  "one-to-one-mentoring": "lightText",
  "interview-preparation": "darkText",
  "resume-building": "darkText",
  "templates-and-resources": "lightText",
  "ba-community": "lightText",
};

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
              <article className={`service-card ${serviceImageTone[service.slug] === "darkText" ? "is-bright-image" : "is-dark-image"}`}>
                <Link href={`/services/${service.slug}`} className="service-card-link" aria-label={`Learn more about ${service.title}`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} editorial visual`}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1120px) 50vw, 33vw"
                    className="service-image"
                  />
                  <span className="service-gradient" aria-hidden="true" />
                  <span className="service-edge" aria-hidden="true" />

                  <div className="service-meta-row">
                    <span className="service-index">{service.eyebrow}</span>
                  </div>

                  <div className="service-copy">
                    <div className="service-title-wrap">
                      <span className="service-icon">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                  </div>

                  <span className="service-arrow" aria-hidden="true">
                    <ArrowRightIcon size={18} />
                  </span>
                </Link>
              </article>
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
          position: relative;
          min-height: 100%;
          width: 100%;
          overflow: hidden;
          border-radius: 32px;
          background: #eef2f5;
          box-shadow:
            0 26px 70px rgba(15, 23, 42, 0.09),
            0 4px 16px rgba(15, 23, 42, 0.04);
          transform: translateZ(0);
          transition:
            transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 560ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card-link {
          position: relative;
          display: grid;
          align-items: end;
          min-height: 100%;
          height: clamp(430px, 34vw, 560px);
          overflow: hidden;
          border-radius: inherit;
          color: inherit;
          text-decoration: none;
        }

        .service-image {
          object-fit: cover;
          transform: scale(1);
          transition: transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .service-card:hover .service-image {
          transform: scale(1.04);
        }

        .service-card:hover {
          transform: translateY(-9px);
          box-shadow:
            0 36px 96px rgba(15, 23, 42, 0.16),
            0 10px 30px rgba(15, 23, 42, 0.07);
        }

        .service-gradient,
        .service-edge {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          transition:
            opacity 560ms cubic-bezier(0.22, 1, 0.36, 1),
            background 560ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card.is-dark-image .service-gradient {
          background:
            linear-gradient(180deg, rgba(7, 9, 12, 0.06) 0%, rgba(7, 9, 12, 0.18) 42%, rgba(7, 9, 12, 0.76) 100%),
            radial-gradient(circle at 18% 16%, rgba(255, 255, 255, 0.1), transparent 30%);
        }

        .service-card.is-dark-image:hover .service-gradient {
          background:
            linear-gradient(180deg, rgba(7, 9, 12, 0.1) 0%, rgba(7, 9, 12, 0.26) 42%, rgba(7, 9, 12, 0.84) 100%),
            radial-gradient(circle at 18% 16%, rgba(255, 255, 255, 0.08), transparent 30%);
        }

        .service-card.is-bright-image .service-gradient {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.22) 44%, rgba(246, 250, 255, 0.88) 100%),
            linear-gradient(0deg, rgba(220, 234, 247, 0.3), transparent 42%);
        }

        .service-card.is-bright-image:hover .service-gradient {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.3) 42%, rgba(246, 250, 255, 0.94) 100%),
            linear-gradient(0deg, rgba(220, 234, 247, 0.4), transparent 44%);
        }

        .service-edge {
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: inherit;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.52);
        }

        .service-meta-row {
          position: absolute;
          z-index: 2;
          top: 22px;
          left: 22px;
          right: 22px;
          display: flex;
          justify-content: flex-start;
        }

        .service-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 12px;
          padding: 0 clamp(22px, 2.2vw, 30px) clamp(24px, 2.4vw, 32px);
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          backdrop-filter: blur(12px);
        }

        .service-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          height: 32px;
          padding-inline: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
        }

        .service-title-wrap {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: end;
          gap: 14px;
        }

        .service-title {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.75rem, 2.45vw, 2.55rem);
          font-weight: 850;
          line-height: 1;
          letter-spacing: -0.045em;
          text-wrap: balance;
        }

        .service-description {
          max-width: 34ch;
          margin: 0;
          font-size: 0.98rem;
          font-weight: 650;
          line-height: 1.55;
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card:hover .service-description {
          opacity: 1;
          transform: translateY(0);
        }

        .service-arrow {
          position: absolute;
          right: 24px;
          bottom: 26px;
          z-index: 3;
          width: 54px;
          height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.24),
            0 14px 34px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(18px);
          transition:
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            background 520ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card:hover .service-arrow {
          transform: scale(1.1) translateX(2px);
          background: rgba(255, 255, 255, 0.28);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.34),
            0 18px 44px rgba(15, 23, 42, 0.18);
        }

        .service-card.is-dark-image {
          color: #f8f2e7;
        }

        .service-card.is-dark-image .service-index,
        .service-card.is-dark-image .service-description,
        .service-card.is-dark-image .service-arrow,
        .service-card.is-dark-image .service-icon {
          color: rgba(248, 242, 231, 0.9);
        }

        .service-card.is-dark-image .service-title {
          color: #fff7ea;
          text-shadow: 0 3px 26px rgba(0, 0, 0, 0.3);
        }

        .service-card.is-bright-image {
          color: #1e2a38;
        }

        .service-card.is-bright-image .service-index,
        .service-card.is-bright-image .service-description,
        .service-card.is-bright-image .service-arrow,
        .service-card.is-bright-image .service-icon {
          color: #1e2a38;
        }

        .service-card.is-bright-image .service-icon,
        .service-card.is-bright-image .service-index,
        .service-card.is-bright-image .service-arrow {
          background: rgba(255, 255, 255, 0.5);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.62),
            0 12px 30px rgba(15, 23, 42, 0.08);
        }

        .service-card.is-bright-image .service-title {
          color: #1e2a38;
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

          .service-card-link {
            height: min(520px, 118vw);
          }

          .service-title {
            font-size: clamp(1.72rem, 8vw, 2.35rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-image,
          .service-description,
          .service-arrow,
          .service-gradient {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
