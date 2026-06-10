"use client";

import SectionHeading from "./SectionHeading";
import StageCard, { type StageCardProps } from "./StageCard";

const stages: StageCardProps[] = [
  {
    stageNumber: "01",
    title: "Discover",
    description:
      "We begin with context, goals, friction points, and the outcomes that actually matter.",
    subtitle: "Shared understanding before action.",
    image: "/images/stage-1.jpg",
    imageAlt: "Discover stage illustration showing goals, context, and outcomes.",
  },
  {
    stageNumber: "02",
    title: "Analyse",
    description:
      "We map what is happening, what is missing, and where clarity is needed to reduce noise.",
    subtitle: "Better decisions built on evidence.",
    image: "/images/stage-2.jpg",
    imageAlt: "Analyse stage illustration with charts, diagnostics, and reporting.",
  },
  {
    stageNumber: "03",
    title: "Strategise",
    description:
      "We shape a realistic direction with options, priorities, and tailored recommendations.",
    subtitle: "A practical plan that feels achievable.",
    image: "/images/stage-3.jpg",
    imageAlt: "Strategise stage illustration with a plan, signposts, and a roadmap.",
  },
  {
    stageNumber: "04",
    title: "Deliver",
    description:
      "We support implementation, delivery structure, and the practical next moves required.",
    subtitle: "Momentum, accountability, and follow-through.",
    image: "/images/stage-4.jpg",
    imageAlt: "Deliver stage illustration with deliverables, timeline, and execution.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding approach-section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Process"
          title="How We Work"
          subtitle="Four compact stages that show how clarity turns into action."
          align="center"
          maxWidth={720}
        />

        <div className="stages-shell">
          {stages.map((stage, index) => (
            <StageCard
              key={stage.stageNumber}
              {...stage}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .approach-section {
          background: #f3f3f1;
        }

        .stages-shell {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--space-24);
          align-items: stretch;
        }

        @media (max-width: 1100px) {
          .stages-shell {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .stages-shell {
            grid-template-columns: 1fr;
            gap: var(--space-24);
          }
        }
      `}</style>
    </section>
  );
}
