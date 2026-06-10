"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type StageCardProps = {
  stageNumber: string;
  title: string;
  description: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
};

export default function StageCard({
  stageNumber,
  title,
  description,
  subtitle,
  image,
  imageAlt,
  priority = false,
}: StageCardProps) {
  return (
    <motion.article
      className="stage-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="stage-frame">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="stage-image"
        />
      </div>

      <div className="stage-copy">
        <p className="stage-kicker">Stage {stageNumber}</p>
        <h3 className="stage-title">{title}</h3>
        <p className="stage-description">{description}</p>
        <p className="stage-subtitle">{subtitle}</p>
      </div>

      <style jsx global>{`
        .stage-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.86);
          padding: var(--space-24);
          box-shadow: 0 10px 24px rgba(17, 17, 17, 0.04);
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .stage-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(17, 17, 17, 0.05);
        }

        .stage-frame {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          aspect-ratio: 4 / 3;
          background: #e7e4de;
        }

        .stage-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(17, 17, 17, 0.03));
          pointer-events: none;
        }

        .stage-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .stage-copy {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: var(--space-24) 0 0;
        }

        .stage-kicker {
          margin: 0;
          color: rgba(17, 17, 17, 0.45);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .stage-title {
          margin: 10px 0 0;
          color: #111111;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.35rem, 2vw, 1.8rem);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .stage-description {
          margin: 12px 0 0;
          color: rgba(17, 17, 17, 0.72);
          font-size: 0.94rem;
          line-height: 1.72;
        }

        .stage-subtitle {
          margin: 14px 0 0;
          padding-top: 12px;
          border-top: 1px solid rgba(17, 17, 17, 0.08);
          color: rgba(17, 17, 17, 0.54);
          font-size: 0.88rem;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .stage-card {
            padding: var(--space-24);
          }

          .stage-frame {
            border-radius: 14px;
          }

          .stage-title {
            font-size: 1.48rem;
          }
        }
      `}</style>
    </motion.article>
  );
}
