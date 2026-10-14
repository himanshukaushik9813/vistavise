import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { calendlyUrl } from "@/lib/vistavise-data";

export const metadata: Metadata = {
  title: "Page not found | VistaVise",
  robots: { index: false },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our programs", href: "/services" },
  { label: "Job-Ready BA Accelerator", href: "/services/job-ready-ba-accelerator" },
  { label: "About Ajay", href: "/about" },
  { label: "BA Lounge Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

/** Branded 404 page. Old links from the previous website land here if they have no redirect. */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Page not found"
          title="This page has moved."
          subtitle="Our website has a new home. The page you were looking for may have a new address, so try one of these instead."
        />
        <section className="not-found-section">
          <div className="container-custom">
            <div className="not-found-card">
              <ul className="not-found-links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="not-found-actions">
                <Link href="/" className="btn-secondary">
                  Back to home
                </Link>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .not-found-section {
          padding: 8px 0 clamp(64px, 8vw, 96px);
        }

        .not-found-card {
          max-width: 860px;
          padding: clamp(28px, 4vw, 44px);
          border-radius: 32px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadow-panel);
        }

        .not-found-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .not-found-links a {
          display: block;
          padding: 16px 18px;
          border-radius: 18px;
          border: 1px solid rgba(30, 42, 56, 0.08);
          background: var(--surface);
          color: var(--secondary);
          font-weight: 700;
          text-decoration: none;
          transition: border-color 200ms ease, background 200ms ease;
        }

        .not-found-links a:hover {
          border-color: rgba(138, 106, 63, 0.3);
          background: var(--surface-alt);
        }

        @media (max-width: 640px) {
          .not-found-links {
            grid-template-columns: 1fr;
          }
        }

        .not-found-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }
      `}</style>
    </>
  );
}
