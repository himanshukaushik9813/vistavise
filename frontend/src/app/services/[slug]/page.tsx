import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";
import { calendlyUrl, services } from "@/lib/vistavise-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | VistaVise`,
    description: service.description,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="service-detail-hero">
          <div className="container-custom service-detail-grid">
            <div>
              <p className="eyebrow">{service.eyebrow}</p>
              <RevealText as="h1" text={service.title} variant="premiumHeading" float />
              <p className="service-detail-summary">{service.summary}</p>
              <p className="service-detail-audience">{service.audience}</p>
              <div className="service-detail-actions">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a Consultation
                  <ArrowRightIcon size={14} />
                </a>
                <Link href="/contact" className="btn-secondary">
                  Contact VistaVise
                </Link>
              </div>
            </div>

            <div className="service-detail-image-wrap">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="service-detail-image"
              />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom service-detail-content-grid">
            <div className="service-detail-panel surface-card-strong">
              <p className="eyebrow">Outcomes</p>
              <div className="service-outcomes-list">
                {service.outcomes.map((item) => (
                  <div key={item} className="service-outcome-item">
                    <CheckCircleIcon size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-detail-copy">
              {service.detailSections.map((section) => (
                <section key={section.title} className="service-detail-block">
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .service-detail-hero {
          padding: 84px 0 40px;
        }

        .service-detail-grid,
        .service-detail-content-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.52fr) minmax(320px, 0.48fr);
          gap: 28px;
          align-items: start;
        }

        .service-detail-grid h1 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 900px;
          font-size: clamp(2.9rem, 5.2vw, 4.8rem);
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: var(--secondary);
        }

        .service-detail-summary,
        .service-detail-audience {
          margin: 18px 0 0;
          color: var(--text-secondary);
          line-height: 1.82;
        }

        .service-detail-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .service-detail-image-wrap {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          box-shadow: var(--shadow-panel);
        }

        .service-detail-image {
          object-fit: cover;
        }

        .service-detail-panel {
          padding: 26px;
          position: sticky;
          top: 120px;
        }

        .service-outcomes-list {
          display: grid;
          gap: 14px;
          margin-top: 20px;
        }

        .service-outcome-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-secondary);
          line-height: 1.72;
        }

        .service-detail-copy {
          display: grid;
          gap: 28px;
        }

        .service-detail-block h2 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.8rem, 2.5vw, 2.5rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          color: var(--secondary);
        }

        .service-detail-block p {
          margin: 16px 0 0;
          color: var(--text-secondary);
          line-height: 1.85;
        }

        @media (max-width: 1024px) {
          .service-detail-grid,
          .service-detail-content-grid {
            grid-template-columns: 1fr;
          }

          .service-detail-panel {
            position: static;
          }

          .service-detail-image-wrap {
            min-height: 320px;
          }
        }
      `}</style>
    </>
  );
}
