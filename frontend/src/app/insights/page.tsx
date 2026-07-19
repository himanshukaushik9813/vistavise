import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InsightCard from "@/components/insights/InsightCard";
import RevealText from "@/components/motion/RevealText";
import { siteConfig } from "@/lib/site";
import { getAllArticles, getCategories } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Experience | VistaVise",
  description:
    "Browse VistaVise experience articles on business analysis mentorship, career development, portfolio building, interview confidence, and Australian pathways.",
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
              <p className="eyebrow">Experience</p>
              <RevealText
                as="h1"
                text="Practical experience notes for stronger Business Analysis careers."
                variant="premiumHeading"
                float
              />
            </div>
            <p>
              Explore frameworks, reflections, and grounded guidance across business analysis practice, portfolio development, interview readiness, and Australian career pathways.
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
                Search experience
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
                <div className="insights-side-head">
                  <p className="eyebrow">Categories</p>
                  <span>{categories.length}</span>
                </div>
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
                <div className="insights-side-head">
                  <p className="eyebrow">Tags</p>
                  <span>{allTags.length}</span>
                </div>
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
          position: relative;
          overflow: clip;
          padding: 76px 0 24px;
          background:
            radial-gradient(circle at 18% 0%, rgba(220, 234, 247, 0.52), transparent 34%),
            radial-gradient(circle at 88% 18%, rgba(245, 247, 250, 0.84), transparent 32%);
        }

        .insights-page-hero::before {
          content: "";
          position: absolute;
          inset: 18px 4% auto auto;
          width: min(420px, 34vw);
          height: min(420px, 34vw);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.66);
          filter: blur(6px);
          pointer-events: none;
        }

        .insights-page-head {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.62fr) minmax(300px, 0.38fr);
          gap: 36px;
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
          font-size: clamp(3rem, 5vw, 5.15rem);
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

        .insights-page-head p:not(.eyebrow) {
          max-width: 520px;
          font-size: 1.05rem;
        }

        .insights-controls-section {
          padding: 4px 0 20px;
        }

        .insights-controls {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(220px, 0.55fr) auto auto;
          gap: 14px;
          align-items: end;
          padding: 16px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 18px 54px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(18px);
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
          grid-template-columns: minmax(0, 0.72fr) minmax(290px, 0.28fr);
          gap: 28px;
          align-items: start;
        }

        .insights-featured-shell {
          display: grid;
          gap: 18px;
          margin-bottom: 44px;
          padding: 22px;
          border-radius: 36px;
          border: 1px solid rgba(255, 255, 255, 0.76);
          background:
            radial-gradient(circle at 10% 0%, rgba(220, 234, 247, 0.32), transparent 34%),
            rgba(255, 255, 255, 0.54);
          box-shadow: 0 26px 80px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(20px);
        }

        .insights-featured-shell .insight-card.is-featured {
          display: grid;
          grid-template-columns: minmax(0, 0.56fr) minmax(300px, 0.44fr);
          min-height: 430px;
          padding: 12px;
        }

        .insights-featured-shell .insight-card.is-featured .insight-card-media {
          min-height: 100%;
          aspect-ratio: auto;
        }

        .insights-featured-shell .insight-card.is-featured .insight-card-body {
          justify-content: center;
          padding: clamp(26px, 3vw, 44px);
        }

        .insights-featured-shell .insight-card.is-featured h3 {
          font-size: clamp(2rem, 3vw, 3.2rem);
          line-height: 1.04;
          letter-spacing: -0.058em;
        }

        .insights-list-head {
          display: grid;
          gap: 0;
          margin-bottom: 28px;
        }

        .insights-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .insights-main-section .insight-card {
          display: flex;
          min-height: 100%;
          padding: 12px;
          border-radius: 34px;
          border-color: rgba(255, 255, 255, 0.8);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(247, 250, 252, 0.7));
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.07);
        }

        .insights-main-section .insight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.12);
        }

        .insight-card-media {
          position: relative;
          display: block;
          overflow: hidden;
          aspect-ratio: 1.42 / 1;
          border-radius: 25px;
          background: #eef2f5;
          text-decoration: none;
        }

        .insight-card-media::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(180deg, transparent 46%, rgba(15, 23, 42, 0.16)),
            linear-gradient(135deg, rgba(255, 255, 255, 0.22), transparent 38%);
          pointer-events: none;
        }

        .insight-card-image {
          object-fit: cover;
          transition: transform 0.7s var(--ease-premium);
        }

        .insight-card:hover .insight-card-image {
          transform: scale(1.045);
        }

        .insight-card-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px 14px 16px;
        }

        .insight-card-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .insight-category-badge {
          min-height: 30px;
          display: inline-flex;
          align-items: center;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.78);
          color: #1e2a38;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
        }

        .insight-card h3 {
          margin: 20px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.42rem, 2vw, 2rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          color: var(--secondary);
        }

        .insight-card h3 a {
          color: inherit;
          text-decoration: none;
        }

        .insight-card p {
          margin: 14px 0 0;
          color: var(--text-secondary);
          line-height: 1.72;
        }

        .insight-card-author {
          display: grid;
          gap: 2px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(30, 42, 56, 0.08);
          color: var(--text-muted);
          font-size: 0.84rem;
          line-height: 1.35;
        }

        .insight-card-author span:first-child {
          color: #1e2a38;
          font-weight: 800;
        }

        .insight-read-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          margin-top: auto;
          padding-top: 22px;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.92rem;
          font-weight: 900;
          text-decoration: none;
        }

        .insights-sidebar {
          position: sticky;
          top: 118px;
          display: grid;
          gap: 16px;
        }

        .insights-side-panel {
          padding: 24px;
          border-radius: 30px;
          border-color: rgba(255, 255, 255, 0.78);
          background:
            radial-gradient(circle at 12% 0%, rgba(220, 234, 247, 0.28), transparent 34%),
            rgba(255, 255, 255, 0.68);
          box-shadow: 0 22px 62px rgba(15, 23, 42, 0.06);
        }

        .insights-side-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .insights-side-head p {
          margin: 0;
        }

        .insights-side-head span {
          min-width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.78);
          color: #1e2a38;
          font-size: 0.78rem;
          font-weight: 900;
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
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.68);
          color: var(--secondary);
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.035);
          font-size: 0.88rem;
          font-weight: 800;
          text-decoration: none;
          transition:
            transform 0.32s var(--ease-premium),
            background 0.32s var(--ease-premium),
            box-shadow 0.32s var(--ease-premium);
        }

        .insights-chip:hover {
          transform: translateY(-2px);
          background: rgba(220, 234, 247, 0.56);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
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

          .insights-featured-shell .insight-card.is-featured {
            grid-template-columns: 1fr;
          }

          .insights-featured-shell .insight-card.is-featured .insight-card-media {
            min-height: auto;
            aspect-ratio: 1.42 / 1;
          }
        }
      `}</style>
    </>
  );
}
