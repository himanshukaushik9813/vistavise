import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

/** Shared layout for the Privacy Policy, Terms and Cookies pages. */
export default function LegalPage({ eyebrow, title, intro, updated, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader eyebrow={eyebrow} title={title} subtitle={intro} />
        <section className="legal-section">
          <div className="container-custom">
            <article className="legal-card">
              <p className="legal-updated">Last updated: {updated}</p>
              {sections.map((section) => (
                <section key={section.heading} className="legal-block">
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .legal-section {
          padding: 8px 0 clamp(64px, 8vw, 96px);
        }

        .legal-card {
          max-width: 860px;
          padding: clamp(28px, 4vw, 52px);
          border-radius: 32px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadow-panel);
        }

        .legal-updated {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .legal-block + .legal-block,
        .legal-updated + .legal-block {
          margin-top: 32px;
        }

        .legal-block h2 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: var(--fs-card-title);
          font-weight: var(--heading-weight);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--secondary);
        }

        .legal-block p {
          margin: 12px 0 0;
          color: var(--text-secondary);
          font-size: var(--fs-lead);
          line-height: 1.8;
        }
      `}</style>
    </>
  );
}
