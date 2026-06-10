import Link from "next/link";
import { getLatestArticles } from "@/sanity/queries";
import SectionHeading from "@/components/SectionHeading";
import InsightCard from "./InsightCard";

export default async function LatestInsightsSection() {
  const articles = await getLatestArticles(3);

  return (
    <section id="insights" className="section-padding latest-insights-section">
      <div className="container-custom">
        <div className="latest-insights-head">
          <SectionHeading
            eyebrow="Latest Insights"
            title="Frameworks, guidance, and practical thinking from VistaVise."
            subtitle="A growing knowledge center for business analysis, delivery, career growth, and Australian pathway decisions."
            align="left"
            maxWidth={760}
          />

          <Link href="/insights" className="btn-secondary latest-insights-cta">
            View all insights
          </Link>
        </div>

        <div className="latest-insights-grid">
          {articles.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      <style>{`
        .latest-insights-section {
          position: relative;
          overflow: clip;
        }

        .latest-insights-section::before {
          content: "";
          position: absolute;
          inset: 6% 4% auto auto;
          width: min(520px, 44vw);
          height: min(520px, 44vw);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.7), transparent 64%);
          pointer-events: none;
        }

        .latest-insights-head {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--space-40);
          margin-bottom: var(--space-40);
        }

        .latest-insights-cta {
          flex-shrink: 0;
        }

        .latest-insights-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .insight-card {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.86);
          box-shadow: var(--shadow-soft);
          text-decoration: none;
          transition:
            transform 260ms ease,
            box-shadow 260ms ease,
            border-color 260ms ease;
        }

        .insight-card:hover {
          transform: translateY(-5px);
          border-color: rgba(17, 18, 20, 0.12);
          box-shadow: 0 24px 58px rgba(17, 18, 20, 0.08);
        }

        .insight-card-media {
          position: relative;
          min-height: 250px;
          overflow: hidden;
          background: rgba(17, 18, 20, 0.06);
        }

        .insight-card-image {
          object-fit: cover;
          filter: saturate(0.8);
        }

        .insight-card-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: var(--space-24);
        }

        .insight-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .insight-card h3 {
          margin: var(--space-24) 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.35rem, 2vw, 1.85rem);
          line-height: 1.05;
          letter-spacing: -0.055em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .insight-card h3 a {
          text-decoration: none;
        }

        .insight-card p {
          margin: 16px 0 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.75;
        }

        .insight-read-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          margin-top: auto;
          padding-top: var(--space-24);
          color: var(--text-primary);
          font-family: var(--font-heading), sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .latest-insights-grid {
            grid-template-columns: 1fr;
          }

          .latest-insights-head {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
