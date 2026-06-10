import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InsightCard from "@/components/insights/InsightCard";
import { getAllArticles, getCategories } from "@/sanity/queries";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights | VistaVise Consulting",
  description:
    "VistaVise insights on business analysis, strategic consulting, project delivery, career growth, student guidance, and Australian pathways.",
  alternates: { canonical: `${siteConfig.url}/insights` },
  openGraph: {
    title: "Insights | VistaVise Consulting",
    description:
      "Premium consulting frameworks and practical guidance from VistaVise Consulting.",
    url: `${siteConfig.url}/insights`,
    type: "website",
  },
};

type Props = {
  searchParams?: Promise<{
    q?: string;
    category?: string;
  }>;
};

export default async function InsightsPage({ searchParams }: Props) {
  const params = (await searchParams) || {};
  const query = (params.q || "").trim().toLowerCase();
  const selectedCategory = (params.category || "").trim();
  const [articles, categories] = await Promise.all([getAllArticles(), getCategories()]);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      !selectedCategory || article.category.slug === selectedCategory || article.category.title === selectedCategory;
    const haystack = [
      article.title,
      article.subtitle,
      article.summary,
      article.category.title,
      article.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || haystack.includes(query));
  });

  const featured = filteredArticles[0] || articles[0];
  const latest = filteredArticles.filter((article) => article.slug !== featured?.slug);
  const stats = [
    { value: articles.length, label: "Guides available" },
    { value: categories.length, label: "Topics published" },
    { value: 8, suffix: "+", label: "Years of experience" },
    { value: 100, suffix: "+", label: "Strategic sessions" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="insights-hero">
          <div className="container-custom insights-hero-grid">
            <div>
              <p className="eyebrow">Insights</p>
              <h1>Practical frameworks for business, delivery, career, and Australian pathways.</h1>
            </div>
            <p>
              A professional knowledge center for leaders, professionals, students, and migrants who
              want clear thinking, structured planning, and practical next steps.
            </p>
          </div>
        </section>

        <section className="insights-control-section">
          <div className="container-custom">
            <form className="insights-controls" action="/insights">
              <label>
                <span>Search insights</span>
                <input name="q" defaultValue={params.q || ""} placeholder="Search frameworks, pathways, delivery..." />
              </label>
              <label>
                <span>Category</span>
                <select name="category" defaultValue={selectedCategory}>
                  <option value="">All categories</option>
                  {categories.map((category) => (
                    <option key={category.slug} value={category.slug}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </label>
              <button className="btn-primary" type="submit">
                Search
              </button>
              {(query || selectedCategory) ? (
                <Link href="/insights" className="btn-secondary">
                  Reset
                </Link>
              ) : null}
            </form>
          </div>
        </section>

        {featured ? (
          <section className="featured-insight-section">
            <div className="container-custom">
              <div className="featured-insight-shell">
                <div>
                  <p className="eyebrow">Featured Article</p>
                  <InsightCard article={featured} featured />
                </div>
                <aside className="insights-stat-panel">
                  <p className="eyebrow">Authority Signals</p>
                  <div className="insights-stat-grid">
                    {stats.map((stat) => (
                      <div key={stat.label} className="insights-stat">
                        <strong>
                          {stat.value}
                          {stat.suffix || ""}
                        </strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </section>
        ) : null}

        <section className="insights-list-section">
          <div className="container-custom">
            <div className="insights-list-head">
              <p className="eyebrow">Latest Thinking</p>
              <h2>{filteredArticles.length} insight{filteredArticles.length === 1 ? "" : "s"} available</h2>
            </div>

            <div className="insights-card-grid">
              {(latest.length ? latest : filteredArticles).map((article) => (
                <InsightCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .insights-hero {
          padding: var(--space-128) 0 var(--space-64);
        }

        .insights-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.62fr) minmax(320px, 0.38fr);
          gap: var(--space-64);
          align-items: end;
        }

        .insights-hero h1 {
          margin: var(--space-24) 0 0;
          max-width: 900px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.25rem, 6.4vw, 6.5rem);
          line-height: 0.9;
          letter-spacing: -0.085em;
          color: var(--text-primary);
          text-wrap: balance;
        }

        .insights-hero p:not(.eyebrow) {
          margin: 0;
          color: var(--text-secondary);
          font-size: 1.08rem;
          line-height: 1.8;
        }

        .insights-control-section {
          padding-bottom: var(--space-40);
        }

        .insights-controls {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.6fr) auto auto;
          gap: var(--space-24);
          align-items: end;
          padding: var(--space-24);
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow-soft);
        }

        .insights-controls label {
          display: grid;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .insights-controls input,
        .insights-controls select {
          min-height: 48px;
          border-radius: 999px;
          border: 1px solid rgba(17, 18, 20, 0.1);
          background: rgba(255, 255, 255, 0.92);
          padding: 0 18px;
          color: var(--text-primary);
          outline: none;
        }

        .featured-insight-section,
        .insights-list-section {
          padding: var(--space-64) 0;
        }

        .featured-insight-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.68fr) minmax(300px, 0.32fr);
          gap: var(--space-24);
          align-items: stretch;
        }

        .featured-insight-shell .insight-card {
          margin-top: var(--space-24);
        }

        .featured-insight-shell .insight-card {
          display: grid;
          grid-template-columns: minmax(0, 0.56fr) minmax(0, 0.44fr);
        }

        .featured-insight-shell .insight-card-media {
          min-height: 420px;
        }

        .insights-stat-panel {
          padding: var(--space-24);
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: linear-gradient(180deg, #161616 0%, #0f0f0f 100%);
          color: #fff;
          box-shadow: var(--shadow-panel);
        }

        .insights-stat-grid {
          display: grid;
          gap: var(--space-24);
          margin-top: var(--space-24);
        }

        .insights-stat {
          padding: var(--space-24);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.06);
        }

        .insights-stat strong {
          display: block;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .insights-stat span {
          display: block;
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.86rem;
        }

        .insights-list-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: var(--space-40);
          margin-bottom: var(--space-40);
        }

        .insights-list-head h2 {
          margin: 0;
          max-width: 640px;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.15rem, 3.6vw, 4rem);
          line-height: 1;
          letter-spacing: -0.065em;
          text-wrap: balance;
        }

        .insights-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        @media (max-width: 1024px) {
          .insights-hero-grid,
          .featured-insight-shell,
          .featured-insight-shell .insight-card {
            grid-template-columns: 1fr;
          }

          .insights-controls {
            grid-template-columns: 1fr;
          }

          .insights-card-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
