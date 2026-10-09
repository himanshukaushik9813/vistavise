import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InsightCard from "@/components/insights/InsightCard";
import { ArrowRightIcon } from "@/components/icons";
import RevealText from "@/components/motion/RevealText";
import { formatDate, playbooks } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { getAllArticles, getCategories, getPodcastEntries } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "BA Catalyst | VistaVise",
  description:
    "Elevate your business analysis mindset with expert articles, industry interviews, The BA Lounge Podcast, and practical playbooks designed for modern practice.",
  alternates: { canonical: `${siteConfig.url}/insights` },
};

type Props = {
  searchParams?: Promise<{
    q?: string;
    category?: string;
    tag?: string;
  }>;
};

const sectionLinks = [
  { label: "Editors’ Picks", href: "#spotlight" },
  { label: "The BA Lounge Podcast", href: "#podcast" },
  { label: "Insights & Analysis", href: "#insights" },
  { label: "Playbooks & Case Studies", href: "#playbooks" },
];

const podcastPlatforms = [
  { label: "YouTube", href: siteConfig.podcastLinks.youtube },
  { label: "Spotify", href: siteConfig.podcastLinks.spotify },
  { label: "Apple Podcasts", href: siteConfig.podcastLinks.applePodcasts },
].filter((platform) => Boolean(platform.href));

export default async function InsightsPage({ searchParams }: Props) {
  const params = (await searchParams) || {};
  const query = (params.q || "").trim().toLowerCase();
  const selectedCategory = (params.category || "").trim();
  const selectedTag = (params.tag || "").trim().toLowerCase();
  const [articles, categories, podcastEntries] = await Promise.all([
    getAllArticles(),
    getCategories(),
    getPodcastEntries(),
  ]);

  const episodes = [...podcastEntries].sort(
    (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
  const latestEpisode = episodes[0];
  const trendingArticle = articles[0];
  const featuredGuide = playbooks[0];

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

  const isFiltering = Boolean(query || selectedCategory || selectedTag);

  return (
    <>
      <Navbar />
      <main>
        <section className="insights-page-hero">
          <div className="container-custom insights-page-head">
            <div>
              <p className="eyebrow">Knowledge Hub</p>
              <RevealText as="h1" text="BA Catalyst" variant="premiumHeading" float />
            </div>
            <p>
              Elevate your business analysis mindset with expert articles, industry interviews, and actionable tools
              designed for modern practice.
            </p>
          </div>
          <div className="container-custom">
            <nav className="catalyst-subnav" aria-label="BA Catalyst sections">
              {sectionLinks.map((link) => (
                <a key={link.href} href={link.href} className="insights-chip">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Section 1: Featured Spotlight */}
        <section id="spotlight" className="catalyst-section catalyst-spotlight">
          <div className="container-custom">
            <div className="catalyst-section-head">
              <p className="eyebrow">Featured Spotlight</p>
              <h2>Editors’ Picks &amp; Latest Releases</h2>
            </div>

            <div className="catalyst-spotlight-grid">
              {latestEpisode ? (
                <a
                  href={latestEpisode.episodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="catalyst-spotlight-card"
                >
                  <div className="catalyst-spotlight-media">
                    {latestEpisode.thumbnail ? (
                      <Image
                        src={latestEpisode.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="catalyst-cover-image"
                      />
                    ) : null}
                    <span className="catalyst-media-badge">Newest Episode</span>
                  </div>
                  <div className="catalyst-spotlight-body">
                    <span className="catalyst-kicker">Podcast · {formatDate(latestEpisode.publishedAt)}</span>
                    <h3>{latestEpisode.title}</h3>
                    <p>{latestEpisode.description}</p>
                    <span className="catalyst-link">
                      Listen now
                      <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </a>
              ) : null}

              {trendingArticle ? (
                <Link href={`/insights/${trendingArticle.slug}`} className="catalyst-spotlight-card">
                  <div className="catalyst-spotlight-media">
                    {typeof trendingArticle.image === "string" ? (
                      <Image
                        src={trendingArticle.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="catalyst-cover-image"
                      />
                    ) : null}
                    <span className="catalyst-media-badge">Trending Article</span>
                  </div>
                  <div className="catalyst-spotlight-body">
                    <span className="catalyst-kicker">
                      {trendingArticle.category.title} · {trendingArticle.readingTime} min read
                    </span>
                    <h3>{trendingArticle.title}</h3>
                    <p>{trendingArticle.summary}</p>
                    <span className="catalyst-link">
                      Read article
                      <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </Link>
              ) : null}

              {featuredGuide ? (
                <a href="#playbooks" className="catalyst-spotlight-card is-guide">
                  <div className="catalyst-spotlight-media is-guide-media">
                    <span className="catalyst-guide-format">{featuredGuide.format}</span>
                    <span className="catalyst-guide-title" aria-hidden="true">
                      {featuredGuide.title}
                    </span>
                    <span className="catalyst-media-badge">Featured Guide</span>
                  </div>
                  <div className="catalyst-spotlight-body">
                    <span className="catalyst-kicker">Practical Playbook</span>
                    <h3>{featuredGuide.title}</h3>
                    <p>{featuredGuide.description}</p>
                    <span className="catalyst-link">
                      View playbooks
                      <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
        </section>

        {/* Section 2: Podcasts & Audio Discussions */}
        <section id="podcast" className="catalyst-section catalyst-podcast">
          <div className="container-custom">
            <div className="catalyst-section-head catalyst-section-head-row">
              <div>
                <p className="eyebrow catalyst-eyebrow-light">Podcasts &amp; Audio Discussions</p>
                <h2>The BA Lounge Podcast</h2>
                <p>Real conversations, expert interviews, and practical career navigation stories.</p>
              </div>
              {podcastPlatforms.length ? (
                <div className="catalyst-platforms" aria-label="Listen on">
                  {podcastPlatforms.map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="catalyst-platform-link"
                    >
                      {platform.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="catalyst-episode-grid">
              {episodes.slice(0, 3).map((episode) => (
                <article key={`${episode.title}-${episode.publishedAt}`} className="catalyst-episode-card">
                  <div className="catalyst-episode-media">
                    {episode.thumbnail ? (
                      <Image
                        src={episode.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="catalyst-cover-image"
                      />
                    ) : null}
                    <a
                      href={episode.episodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="catalyst-play-button"
                      aria-label={`Play episode: ${episode.title}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                      </svg>
                    </a>
                  </div>
                  <div className="catalyst-episode-body">
                    <span className="catalyst-kicker">{formatDate(episode.publishedAt)}</span>
                    <h3>{episode.title}</h3>
                    <p className="catalyst-takeaway-label">Key takeaway</p>
                    <p>{episode.description}</p>
                    <a href={episode.episodeUrl} target="_blank" rel="noopener noreferrer" className="catalyst-link">
                      Listen to episode
                      <ArrowRightIcon size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="catalyst-podcast-footer">
              <Link href="/podcast" className="catalyst-platform-link">
                Browse all episodes &amp; playlists
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Deep Dives & Articles */}
        <section id="insights" className="section-padding insights-main-section">
          <div className="container-custom">
            <div className="catalyst-section-head">
              <p className="eyebrow">Deep Dives &amp; Articles</p>
              <h2>Insights &amp; Analysis</h2>
              <p>
                Thought leadership on Agile delivery, stakeholder management, requirement engineering, and AI
                integration.
              </p>
            </div>

            <form className="insights-controls" action="/insights#insights">
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
              {isFiltering ? (
                <Link href="/insights#insights" className="btn-secondary">
                  Reset
                </Link>
              ) : null}
            </form>

            <div className="insights-main-grid">
              <div>
                <div className="insights-list-head">
                  <h3>
                    {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
                    {isFiltering ? " match your filters" : " ready to explore"}
                  </h3>
                </div>

                {filteredArticles.length ? (
                  <div className="insights-card-grid">
                    {filteredArticles.map((article) => (
                      <InsightCard key={article.slug} article={article} />
                    ))}
                  </div>
                ) : (
                  <div className="catalyst-empty surface-card-strong">
                    <p>No articles match your search yet. Try a different keyword or category.</p>
                    <Link href="/insights#insights" className="btn-secondary">
                      Clear filters
                    </Link>
                  </div>
                )}
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
                        href={`/insights?category=${encodeURIComponent(category.slug)}#insights`}
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
                        href={`/insights?tag=${encodeURIComponent(tag)}#insights`}
                        className={`insights-chip ${selectedTag === tag.toLowerCase() ? "is-active" : ""}`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Section 4: Practical Knowledge Base & Downloads */}
        <section id="playbooks" className="catalyst-section catalyst-playbooks">
          <div className="container-custom">
            <div className="catalyst-section-head">
              <p className="eyebrow">Practical Knowledge Base &amp; Downloads</p>
              <h2>Practical Playbooks &amp; Case Studies</h2>
              <p>Step-by-step guides, enterprise case studies, and actionable frameworks you can apply immediately.</p>
            </div>

            <div className="catalyst-playbook-grid">
              {playbooks.map((playbook) => (
                <article key={playbook.title} className="catalyst-playbook-card">
                  <div className="catalyst-playbook-top">
                    <span className="catalyst-playbook-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
                        <path d="M14 3v5h5M9 13h6M9 17h4" />
                      </svg>
                    </span>
                    <span className="catalyst-playbook-format">{playbook.format}</span>
                  </div>
                  <h3>{playbook.title}</h3>
                  <p>{playbook.description}</p>
                  {playbook.href ? (
                    <a href={playbook.href} download className="catalyst-link">
                      Download
                      <ArrowRightIcon size={14} />
                    </a>
                  ) : (
                    <Link href="/contact" className="catalyst-link">
                      Request access
                      <ArrowRightIcon size={14} />
                    </Link>
                  )}
                </article>
              ))}
            </div>
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

        .insights-page-head h1 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .insights-page-head h1 {
          max-width: 900px;
          font-size: clamp(3.2rem, 6vw, 6rem);
        }

        .insights-page-head p:not(.eyebrow) {
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

        .insights-list-head {
          display: grid;
          gap: 0;
          margin-bottom: 20px;
        }

        .insights-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .insights-main-section .insight-card {
          display: flex;
          flex-direction: column;
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
        }

        #spotlight,
        #podcast,
        #insights,
        #playbooks {
          scroll-margin-top: 110px;
        }

        .catalyst-subnav {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }

        .catalyst-section {
          padding: clamp(64px, 7vw, 104px) 0;
        }

        .catalyst-section-head {
          max-width: 760px;
          margin-bottom: clamp(28px, 4vw, 44px);
        }

        .catalyst-section-head h2 {
          margin: 18px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2.2rem, 3.4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.052em;
          color: var(--secondary);
        }

        .catalyst-section-head p:not(.eyebrow) {
          margin: 14px 0 0;
          color: var(--text-secondary);
          font-size: 1.04rem;
          line-height: 1.75;
        }

        .catalyst-section-head-row {
          display: flex;
          max-width: none;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
        }

        .catalyst-spotlight-grid,
        .catalyst-episode-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .catalyst-spotlight-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(247, 250, 252, 0.76));
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.07);
          color: inherit;
          text-decoration: none;
          transition:
            transform 0.45s var(--ease-premium),
            box-shadow 0.45s var(--ease-premium);
        }

        .catalyst-spotlight-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 34px 90px rgba(15, 23, 42, 0.12);
        }

        .catalyst-spotlight-media,
        .catalyst-episode-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: linear-gradient(135deg, #dceaf7, #eef2f7);
        }

        .catalyst-cover-image {
          object-fit: cover;
          transition: transform 0.7s var(--ease-premium);
        }

        .catalyst-spotlight-card:hover .catalyst-cover-image,
        .catalyst-episode-card:hover .catalyst-cover-image {
          transform: scale(1.04);
        }

        .catalyst-media-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          color: #1e2a38;
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.12);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .is-guide-media {
          display: grid;
          align-content: end;
          gap: 10px;
          padding: 24px;
          background:
            radial-gradient(circle at 85% 15%, rgba(234, 217, 189, 0.4), transparent 40%),
            linear-gradient(135deg, #1e2a38, #111827);
        }

        .catalyst-guide-format {
          color: #ead9bd;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .catalyst-guide-title {
          max-width: 300px;
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.4rem, 1.8vw, 1.8rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.04em;
        }

        .catalyst-spotlight-body,
        .catalyst-episode-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px 22px 24px;
        }

        .catalyst-kicker {
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .catalyst-spotlight-body h3,
        .catalyst-episode-body h3,
        .catalyst-playbook-card h3 {
          margin: 12px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(1.3rem, 1.6vw, 1.6rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: var(--secondary);
        }

        .catalyst-spotlight-body p,
        .catalyst-episode-body p,
        .catalyst-playbook-card p {
          margin: 10px 0 0;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .catalyst-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          margin-top: auto;
          padding-top: 20px;
          color: #1e2a38;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.92rem;
          font-weight: 900;
          text-decoration: none;
        }

        .catalyst-podcast {
          background:
            radial-gradient(circle at 12% 0%, rgba(220, 234, 247, 0.16), transparent 40%),
            linear-gradient(135deg, #1e2a38 0%, #111827 100%);
        }

        .catalyst-podcast .catalyst-section-head h2 {
          color: #ffffff;
        }

        .catalyst-podcast .catalyst-section-head p:not(.eyebrow) {
          color: rgba(255, 255, 255, 0.74);
        }

        .catalyst-eyebrow-light {
          color: rgba(220, 234, 247, 0.86);
        }

        .catalyst-eyebrow-light::before {
          background: rgba(220, 234, 247, 0.4);
        }

        .catalyst-platforms {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .catalyst-platform-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-weight: 800;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .catalyst-platform-link:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .catalyst-episode-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
        }

        .catalyst-episode-body .catalyst-kicker {
          color: rgba(220, 234, 247, 0.7);
        }

        .catalyst-episode-body h3 {
          color: #ffffff;
        }

        .catalyst-episode-body p {
          color: rgba(255, 255, 255, 0.72);
        }

        .catalyst-episode-body .catalyst-takeaway-label {
          margin-top: 14px;
          color: #ead9bd;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .catalyst-episode-body .catalyst-takeaway-label + p {
          margin-top: 6px;
        }

        .catalyst-episode-body .catalyst-link {
          color: #dceaf7;
        }

        .catalyst-play-button {
          position: absolute;
          right: 16px;
          bottom: 16px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 999px;
          background: #dceaf7;
          color: #102235;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s var(--ease-premium);
        }

        .catalyst-play-button:hover {
          transform: scale(1.08);
        }

        .catalyst-podcast-footer {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .insights-main-section .insights-controls {
          margin-bottom: 32px;
        }

        .insights-list-head h3 {
          margin: 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--secondary);
        }

        .catalyst-empty {
          display: grid;
          justify-items: start;
          gap: 16px;
          padding: 28px;
          border-radius: 28px;
        }

        .catalyst-empty p {
          margin: 0;
          color: var(--text-secondary);
        }

        .catalyst-playbooks {
          background:
            radial-gradient(circle at 88% 0%, rgba(220, 234, 247, 0.5), transparent 36%),
            linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
        }

        .catalyst-playbook-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .catalyst-playbook-card {
          display: flex;
          flex-direction: column;
          padding: 26px;
          border-radius: 28px;
          border: 1px solid rgba(30, 42, 56, 0.06);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.06);
          transition:
            transform 0.45s var(--ease-premium),
            box-shadow 0.45s var(--ease-premium);
        }

        .catalyst-playbook-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.1);
        }

        .catalyst-playbook-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .catalyst-playbook-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: #dceaf7;
          color: #1e2a38;
        }

        .catalyst-playbook-format {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          background: #f7f3eb;
          color: #1e2a38;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .catalyst-playbook-card h3 {
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .catalyst-spotlight-grid,
          .catalyst-episode-grid,
          .catalyst-playbook-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .catalyst-section-head-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 680px) {
          .catalyst-spotlight-grid,
          .catalyst-episode-grid,
          .catalyst-playbook-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
