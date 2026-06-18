import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InsightCard from "@/components/insights/InsightCard";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";
import { getAllArticles, getCategories } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Insights | VistaVise",
  description:
    "Browse VistaVise insights on business analysis, career development, delivery thinking, student support, and Australian pathways.",
  alternates: { canonical: `${siteConfig.url}/insights` },
};

type Props = {
  searchParams?: Promise<{
    q?: string;
    category?: string;
    tag?: string;
  }>;
};

export default async function InsightsPage({ searchParams }: Props) {
  const params = (await searchParams) || {};
  const query = (params.q || "").trim().toLowerCase();
  const selectedCategory = (params.category || "").trim();
  const selectedTag = (params.tag || "").trim().toLowerCase();
  const [articles, categories] = await Promise.all([getAllArticles(), getCategories()]);

  const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort((left, right) =>
    left.localeCompare(right),
  );

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      !selectedCategory || article.category.slug === selectedCategory || article.category.title === selectedCategory;
    const matchesTag = !selectedTag || article.tags.some((tag) => tag.toLowerCase() === selectedTag);
    const haystack = [article.title, article.subtitle, article.summary, article.category.title, article.tags.join(" ")]
      .join(" ")
      .toLowerCase();

    return matchesCategory && matchesTag && (!query || haystack.includes(query));
  });

  const featured = filteredArticles[0] || articles[0];
  const latest = filteredArticles.filter((article) => article.slug !== featured?.slug);

  return (
    <>
      <Navbar />
      <main>
        <section className="insights-page-hero">
          <div className="container-custom insights-page-head">
            <div>
              <p className="eyebrow">Insights</p>
              <RevealText
                as="h1"
                text="Practical articles for better decisions, stronger positioning, and calmer progress."
                variant="premiumHeading"
                float
              />
            </div>
            <p>
              Explore frameworks, reflections, and grounded guidance across business analysis, professional growth, delivery thinking, and Australian pathways.
            </p>
          </div>
        </section>

        <section className="insights-controls-section">
          <div className="container-custom">
            <form className="insights-controls" action="/insights">
              <label>
                <span>Search</span>
                <input name="q" defaultValue={params.q || ""} placeholder="Search articles, topics, or tags" />
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
                Search insights
              </button>
              {query || selectedCategory || selectedTag ? (
                <Link href="/insights" className="btn-secondary">
                  Reset
                </Link>
              ) : null}
            </form>
          </div>
        </section>

        <section className="section-padding insights-main-section">
          <div className="container-custom insights-main-grid">
            <div>
              {featured ? (
                <div className="insights-featured-shell">
                  <div className="insights-featured-head">
                    <p className="eyebrow">Featured Article</p>
                    <RevealText as="h2" text={featured.title} variant="premiumHeading" />
                    <p>{featured.summary}</p>
                  </div>
                  <InsightCard article={featured} featured />
                </div>
              ) : null}

              <div className="insights-list-head">
                <p className="eyebrow">Latest Articles</p>
                <h2>{filteredArticles.length} articles ready to explore</h2>
              </div>

              <div className="insights-card-grid">
                {(latest.length ? latest : filteredArticles).map((article) => (
                  <InsightCard key={article.slug} article={article} />
                ))}
              </div>
            </div>

            <aside className="insights-sidebar">
              <div className="insights-side-panel surface-card-strong">
                <p className="eyebrow">Categories</p>
                <div className="insights-chip-list">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/insights?category=${encodeURIComponent(category.slug)}`}
                      className={`insights-chip ${selectedCategory === category.slug ? "is-active" : ""}`}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="insights-side-panel surface-card-strong">
                <p className="eyebrow">Tags</p>
                <div className="insights-chip-list">
                  {allTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/insights?tag=${encodeURIComponent(tag)}`}
                      className={`insights-chip ${selectedTag === tag.toLowerCase() ? "is-active" : ""}`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .insights-page-hero {
          padding: 84px 0 28px;
        }

        .insights-page-head {
          display: grid;
          grid-template-columns: minmax(0, 0.58fr) minmax(300px, 0.42fr);
          gap: 28px;
          align-items: end;
        }

        .insights-page-head h1,
        .insights-featured-head h2,
        .insights-list-head h2 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .insights-page-head h1 {
          max-width: 900px;
          font-size: clamp(3rem, 5.3vw, 5rem);
        }

        .insights-featured-head h2,
        .insights-list-head h2 {
          font-size: clamp(2.05rem, 2.8vw, 3.1rem);
        }

        .insights-page-head p:not(.eyebrow),
        .insights-featured-head p {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.84;
        }

        .insights-controls-section {
          padding-bottom: 12px;
        }

        .insights-controls {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(220px, 0.55fr) auto auto;
          gap: 14px;
          align-items: end;
          padding: 20px;
          border-radius: 26px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.76);
          box-shadow: var(--shadow-soft);
        }

        .insights-controls label {
          display: grid;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .insights-controls input,
        .insights-controls select {
          min-height: 50px;
          padding: 0 16px;
          border-radius: 16px;
        }

        .insights-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.7fr) minmax(280px, 0.3fr);
          gap: 22px;
          align-items: start;
        }

        .insights-featured-shell {
          display: grid;
          gap: 20px;
          margin-bottom: 52px;
        }

        .insights-list-head {
          display: grid;
          gap: 0;
          margin-bottom: 28px;
        }

        .insights-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .insights-sidebar {
          position: sticky;
          top: 118px;
          display: grid;
          gap: 18px;
        }

        .insights-side-panel {
          padding: 22px;
          border-radius: 24px;
        }

        .insights-chip-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .insights-chip {
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          background: rgba(255, 255, 255, 0.76);
          color: var(--secondary);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
        }

        .insights-chip.is-active {
          border-color: rgba(30, 42, 56, 0.18);
          background: rgba(220, 234, 247, 0.5);
          color: var(--primary-strong);
        }

        @media (max-width: 1024px) {
          .insights-page-head,
          .insights-main-grid,
          .insights-card-grid {
            grid-template-columns: 1fr;
          }

          .insights-controls {
            grid-template-columns: 1fr;
          }

          .insights-sidebar {
            position: static;
          }
        }
      `}</style>
    </>
  );
}
