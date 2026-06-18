import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon } from "@/components/icons";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/vistavise-data";

export const metadata: Metadata = {
  title: "Services | VistaVise",
  description:
    "Explore VistaVise services for business analysis mentorship, mentoring and coaching, and migrant support.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="services-page-hero">
          <div className="container-custom services-page-head">
            <p className="eyebrow">Services</p>
            <RevealText
              as="h1"
              text="Support designed for real progress, not generic consulting noise."
              variant="premiumHeading"
              float
            />
            <p>
              VistaVise brings together premium mentoring, practical professional development, and calm guidance for people navigating growth, career change, and migration decisions.
            </p>
          </div>
        </section>

        <section className="services-lineup-section section-padding">
          <div className="container-custom services-lineup-grid">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className={`services-lineup-card card-${index + 1}`}>
                <div className="services-lineup-copy">
                  <span className="eyebrow">{service.eyebrow}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <span className="services-lineup-cta">
                    {service.ctaLabel}
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
                <div className="services-lineup-media">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="services-lineup-image"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .services-page-hero {
          padding: 84px 0 32px;
        }

        .services-page-head {
          display: grid;
          gap: 0;
          max-width: 880px;
        }

        .services-page-head h1 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          max-width: 900px;
          font-size: clamp(3rem, 5.4vw, 5rem);
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .services-page-head p:not(.eyebrow) {
          margin: 22px 0 0;
          max-width: 720px;
          color: var(--text-secondary);
          font-size: 1.06rem;
          line-height: 1.84;
        }

        .services-lineup-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .services-lineup-card {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.76);
          box-shadow: var(--shadow-panel);
          text-decoration: none;
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }

        .services-lineup-card:hover {
          transform: translateY(-6px);
          border-color: rgba(43, 45, 66, 0.14);
          box-shadow: 0 30px 70px rgba(43, 45, 66, 0.12);
        }

        .services-lineup-copy {
          padding: 26px 26px 0;
        }

        .services-lineup-copy h2 {
          margin: 20px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.6rem, 2vw, 2.2rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          color: var(--secondary);
        }

        .services-lineup-copy p {
          margin: 14px 0 0;
          color: var(--text-secondary);
          line-height: 1.76;
        }

        .services-lineup-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          color: var(--secondary);
          font-weight: 700;
        }

        .services-lineup-media {
          position: relative;
          margin-top: 24px;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .services-lineup-image {
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .services-lineup-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
