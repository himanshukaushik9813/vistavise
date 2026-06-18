import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | VistaVise",
  description: "Contact VistaVise for mentorship, student support, migrant guidance, or a consultation.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="contact-page-hero">
          <div className="container-custom contact-page-head">
            <p className="eyebrow">Contact</p>
            <RevealText
              as="h1"
              text="Start with a clear conversation about where you are and where you want to go."
              variant="premiumHeading"
              float
            />
            <p>
              Whether the focus is business analysis, career direction, student support, or migrant guidance, VistaVise is designed to meet you with practical help and honest structure.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />

      <style>{`
        .contact-page-hero {
          padding: 84px 0 20px;
        }

        .contact-page-head {
          max-width: 860px;
        }

        .contact-page-head h1 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.1rem, 5.6vw, 5.4rem);
          line-height: 0.95;
          letter-spacing: -0.08em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .contact-page-head p:not(.eyebrow) {
          margin: 20px 0 0;
          color: var(--text-secondary);
          line-height: 1.84;
        }
      `}</style>
    </>
  );
}
