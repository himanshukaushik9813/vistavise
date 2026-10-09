import type { Metadata } from "next";
import Image from "next/image";
import AboutTabs from "@/components/AboutTabs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | VistaVise",
  description:
    "Learn about VistaVise's mission, vision, and core values, and meet founder Ajay Kaushik, a PMP®-certified Senior Business Analyst with over 25 years of industry experience.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const founderStory = [
  "Ajay Kaushik is a PMP®-certified Senior Business Analyst, Agile practitioner, and mentor with over 25 years of industry experience leading complex digital transformations, enterprise requirement engineering, and strategic delivery.",
  "Throughout his career across major enterprise environments, Ajay observed a persistent disconnect between academic business degrees and the practical demands of the modern workplace. He founded VistaVise to bridge that critical gap—empowering students, graduates, and transitioning professionals with the exact tools, techniques, and real-world frameworks needed to hit the ground running.",
  "Driven by a deep passion for business analysis and a genuine commitment to developing future talent, Ajay saw firsthand the anxiety, confusion, and steep learning curve new hires face when stepping into fast-paced corporate environments without practical guidance. VistaVise was created to eliminate that struggle—providing students with a clear, battle-tested roadmap and personal mentorship to ensure they step into the industry with confidence, clarity, and the ability to add real value from Week 1.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="about-page-hero">
          <div className="container-custom">
            <p className="eyebrow">About VistaVise</p>
            <AboutTabs />
          </div>
        </section>

        <section id="meet-ajay" className="section-padding about-founder-section">
          <div className="container-custom about-founder-grid">
            <div className="about-founder-visual">
              <div className="about-founder-photo">
                <Image
                  src="/images/ajay-kaushik-founder.jpg"
                  alt="Ajay Kaushik, Founder & Principal Lead Mentor of VistaVise"
                  fill
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  className="about-founder-image"
                />
              </div>
            </div>

            <div className="about-founder-copy">
              <p className="eyebrow">Meet the Founder</p>
              <h2>Ajay Kaushik</h2>
              <p className="about-founder-role">
                Founder &amp; Principal Lead Mentor <span aria-hidden="true">|</span> PMP® Certified Senior Business
                Analyst
              </p>
              <div className="about-founder-story">
                {founderStory.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
      <Footer />

      <style>{`
        .about-page-hero {
          padding: 84px 0 36px;
        }

        .about-founder-section {
          position: relative;
          scroll-margin-top: 80px;
          overflow: clip;
        }

        .about-founder-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.42fr) minmax(0, 0.58fr);
          gap: clamp(32px, 5vw, 76px);
          align-items: center;
        }

        .about-founder-visual {
          padding: 14px;
          border-radius: 36px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: var(--shadow-panel);
        }

        .about-founder-photo {
          position: relative;
          aspect-ratio: 4 / 4.6;
          overflow: hidden;
          border-radius: 26px;
          background: #eef2f7;
        }

        .about-founder-image {
          object-fit: cover;
          object-position: center 20%;
        }

        .about-founder-copy h2 {
          margin: 18px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.6rem, 4.2vw, 4.2rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.055em;
          color: var(--secondary);
        }

        .about-founder-role {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0 0;
          padding: 10px 16px;
          border-radius: 999px;
          background: #dceaf7;
          color: #1e2a38;
          font-size: 0.92rem;
          font-weight: 800;
          line-height: 1.4;
        }

        .about-founder-role span {
          opacity: 0.4;
        }

        .about-founder-story p {
          margin: 20px 0 0;
          color: var(--text-secondary);
          font-size: 1.02rem;
          line-height: 1.84;
        }

        @media (max-width: 1024px) {
          .about-founder-grid {
            grid-template-columns: 1fr;
          }

          .about-founder-visual {
            max-width: 460px;
          }
        }

        @media (max-width: 640px) {
          .about-page-hero {
            padding-top: 56px;
          }

          .about-founder-role {
            border-radius: 18px;
          }
        }
      `}</style>
    </>
  );
}
