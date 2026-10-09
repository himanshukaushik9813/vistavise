import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon } from "@/components/icons";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";
import { calendlyUrl, flagshipProgram, services } from "@/lib/vistavise-data";

export const metadata: Metadata = {
  title: "Services | VistaVise",
  description:
    "Master real-world Business Analysis with VistaVise: the Job-Ready BA Accelerator, BA mentorship, 1:1 executive coaching, interview mastery, resume & LinkedIn positioning, enterprise templates, and the VistaVise BA Network.",
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
              text="Master the Art and Craft of Real-World Business Analysis."
              variant="premiumHeading"
              float
            />
            <p>
              Designed to turn aspiring talent into high-performing, future-ready Business Analysts.
            </p>
          </div>
        </section>

        <section className="services-flagship-section">
          <div className="container-custom">
            <article className="services-flagship-card">
              <div className="services-flagship-copy">
                <span className="services-flagship-badge">{flagshipProgram.eyebrow}</span>
                <h2>{flagshipProgram.title}</h2>
                <p>{flagshipProgram.subheading}</p>
                <div className="services-flagship-actions">
                  <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="services-flagship-btn is-primary">
                    Book Free Consultation
                    <ArrowRightIcon size={14} />
                  </a>
                  <Link href="/contact" className="services-flagship-btn is-secondary">
                    Enquire About the Program
                  </Link>
                </div>
              </div>
              <div className="services-flagship-media">
                <Image
                  src={flagshipProgram.image}
                  alt="Business Analysis career roadmap on a strategy wall"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="services-flagship-image"
                />
                <span className="services-flagship-media-wash" aria-hidden="true" />
              </div>
            </article>
          </div>
        </section>

        <section className="services-lineup-section section-padding">
          <div className="container-custom services-lineup-grid">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className={`services-lineup-card card-${index + 1}`}>
                <div className="services-lineup-copy">
                  <span className="eyebrow">{service.eyebrow}</span>
                  <h2>{service.programTitle}</h2>
                  <p>{service.programSubheading}</p>
                  <span className="services-lineup-cta">
                    {service.ctaLabel}
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
                <div className="services-lineup-media">
                  <Image
                    src={service.image}
                    alt={service.programTitle}
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

        .services-flagship-section {
          padding-top: 24px;
        }

        .services-flagship-card {
          display: grid;
          grid-template-columns: minmax(0, 0.52fr) minmax(0, 0.48fr);
          overflow: hidden;
          border-radius: 36px;
          background:
            radial-gradient(circle at 10% 0%, rgba(220, 234, 247, 0.2), transparent 40%),
            linear-gradient(135deg, #1e2a38 0%, #111827 100%);
          box-shadow:
            0 34px 90px rgba(15, 23, 42, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .services-flagship-copy {
          display: grid;
          align-content: center;
          justify-items: start;
          padding: clamp(32px, 5vw, 64px);
        }

        .services-flagship-badge {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 16px;
          border-radius: 999px;
          background: linear-gradient(180deg, #fff4e1, #ead9bd);
          color: #1f1b16;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .services-flagship-copy h2 {
          margin: 22px 0 0;
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.4rem, 4vw, 4rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.055em;
        }

        .services-flagship-copy p {
          margin: 18px 0 0;
          max-width: 520px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .services-flagship-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .services-flagship-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          font-weight: 850;
          text-decoration: none;
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .services-flagship-btn:hover {
          transform: translateY(-2px);
        }

        .services-flagship-btn.is-primary {
          color: #102235;
          background: #dceaf7;
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.2);
        }

        .services-flagship-btn.is-primary:hover {
          background: #edf6ff;
        }

        .services-flagship-btn.is-secondary {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
        }

        .services-flagship-btn.is-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
        }

        .services-flagship-media {
          position: relative;
          min-height: 420px;
        }

        .services-flagship-image {
          object-fit: cover;
        }

        .services-flagship-media-wash {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #172131 0%, rgba(23, 33, 49, 0.2) 34%, transparent 60%);
          pointer-events: none;
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
          text-decoration: none;
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
          .services-lineup-grid,
          .services-flagship-card {
            grid-template-columns: 1fr;
          }

          .services-flagship-media {
            order: -1;
            min-height: 260px;
          }

          .services-flagship-media-wash {
            background: linear-gradient(0deg, #172131 0%, transparent 50%);
          }
        }

        @media (max-width: 640px) {
          .services-flagship-actions,
          .services-flagship-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
