import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon, PodcastIcon, SpotifyIcon, YouTubeIcon } from "@/components/icons";
import RevealText from "@/components/motion/RevealText";
import TiltCard from "@/components/motion/TiltCard";
import { siteConfig } from "@/lib/site";
import { podcastPlaylists, type Playlist } from "@/lib/vistavise-data";

export const metadata: Metadata = {
  title: "Podcast | VistaVise",
  description:
    "Explore VistaVise podcast playlists covering business analysis, career development, and migrant support conversations.",
  alternates: { canonical: `${siteConfig.url}/podcast` },
};

type Props = {
  searchParams?: Promise<{ category?: string }>;
};

const categoryLabels: Array<{ label: string; value: string }> = [
  { label: "All playlists", value: "all" },
  { label: "Business Analysis", value: "Business Analysis" },
  { label: "Career Development", value: "Career Development" },
  { label: "Migration & Community", value: "Migration & Community" },
];

function platformIcon(platform: Playlist["platform"]) {
  switch (platform) {
    case "Spotify":
      return <SpotifyIcon size={16} />;
    case "Apple Podcasts":
      return <PodcastIcon size={16} />;
    default:
      return <YouTubeIcon size={16} />;
  }
}

export default async function PodcastPage({ searchParams }: Props) {
  const params = (await searchParams) || {};
  const selectedCategory = params.category || "all";
  const playlists =
    selectedCategory === "all"
      ? podcastPlaylists
      : podcastPlaylists.filter((playlist) => playlist.category === selectedCategory);
  const featured = playlists[0] || podcastPlaylists[0];
  const rest = playlists.filter((playlist) => playlist.title !== featured.title);

  return (
    <>
      <Navbar />
      <main>
        <section className="podcast-page-hero">
          <div className="container-custom podcast-page-head">
            <div>
              <p className="eyebrow">Thought Leadership</p>
              <RevealText
                as="h1"
                text="Conversations that match the same professional tone as the rest of VistaVise."
                variant="premiumHeading"
                float
              />
            </div>
            <p>
              Practical playlists across business analysis, career development, and migrant support. Clear guidance, useful stories, and professional reflections without the noise.
            </p>
          </div>
        </section>

        <section className="podcast-filter-section">
          <div className="container-custom podcast-filter-row">
            {categoryLabels.map((category) => {
              const href = category.value === "all" ? "/podcast" : `/podcast?category=${encodeURIComponent(category.value)}`;
              const isActive = selectedCategory === category.value;
              return (
                <Link key={category.value} href={href} className={`podcast-filter-chip ${isActive ? "is-active" : ""}`}>
                  {category.label}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom podcast-featured-shell">
            <TiltCard as="div" className="podcast-featured-card premium-tilt-card" maxTilt={2}>
              <span className="eyebrow">Featured Playlist</span>
              <RevealText as="h2" text={featured.title} variant="premiumHeading" />
              <p>{featured.description}</p>
              <div className="podcast-featured-meta">
                <span>{featured.category}</span>
                <span>{featured.platform}</span>
              </div>
              <a href={featured.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open playlist
                <ArrowRightIcon size={14} />
              </a>
            </TiltCard>

            <div className="podcast-grid">
              {rest.map((playlist) => (
                <TiltCard
                  key={playlist.title}
                  as="a"
                  href={playlist.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcast-card premium-tilt-card"
                  maxTilt={2}
                >
                  <div className="podcast-card-top">
                    <span className="podcast-platform-icon">{platformIcon(playlist.platform)}</span>
                    <span className="podcast-platform-label">{playlist.platform}</span>
                  </div>
                  <h3>{playlist.title}</h3>
                  <p>{playlist.description}</p>
                  <span className="podcast-category-pill">{playlist.category}</span>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .podcast-page-hero {
          padding: 84px 0 28px;
        }

        .podcast-page-head {
          display: grid;
          grid-template-columns: minmax(0, 0.58fr) minmax(300px, 0.42fr);
          gap: 28px;
          align-items: end;
        }

        .podcast-page-head h1 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(3.2rem, 5.7vw, 5.4rem);
          line-height: 0.95;
          letter-spacing: -0.08em;
          color: var(--secondary);
          text-wrap: balance;
        }

        .podcast-page-head p:not(.eyebrow) {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.84;
        }

        .podcast-filter-section {
          padding-bottom: 12px;
        }

        .podcast-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .podcast-filter-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(43, 45, 66, 0.1);
          background: rgba(255, 255, 255, 0.72);
          color: var(--secondary);
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
        }

        .podcast-filter-chip.is-active {
          border-color: rgba(30, 42, 56, 0.18);
          background: rgba(220, 234, 247, 0.5);
          color: var(--primary-strong);
        }

        .podcast-featured-shell {
          display: grid;
          grid-template-columns: minmax(320px, 0.4fr) minmax(0, 0.6fr);
          gap: 20px;
        }

        .podcast-featured-card {
          padding: 28px;
          border-radius: 28px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: var(--shadow-panel);
        }

        .podcast-featured-card h2 {
          margin: 22px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          line-height: 1.04;
          letter-spacing: -0.05em;
          color: var(--secondary);
        }

        .podcast-featured-card p {
          margin: 16px 0 0;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .podcast-featured-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .podcast-featured-meta span,
        .podcast-category-pill {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(220, 234, 247, 0.5);
          color: var(--secondary);
          font-size: 0.84rem;
          font-weight: 700;
        }

        .podcast-featured-card .btn-primary {
          margin-top: 24px;
        }

        .podcast-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .podcast-card {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          padding: 24px;
          border-radius: 24px;
          border: 1px solid rgba(43, 45, 66, 0.08);
          background: rgba(255, 255, 255, 0.74);
          box-shadow: var(--shadow-soft);
          text-decoration: none;
          transition: transform 280ms ease, box-shadow 280ms ease;
        }

        .podcast-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 52px rgba(43, 45, 66, 0.1);
        }

        .podcast-card-top {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .podcast-platform-icon {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(220, 234, 247, 0.56);
          color: var(--primary-strong);
        }

        .podcast-platform-label {
          color: var(--text-muted);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .podcast-card h3 {
          margin: 18px 0 0;
          color: var(--secondary);
          font-size: 1.28rem;
          letter-spacing: -0.045em;
        }

        .podcast-card p {
          margin: 12px 0 0;
          color: var(--text-secondary);
          line-height: 1.72;
        }

        .podcast-card .podcast-category-pill {
          margin-top: auto;
          width: fit-content;
          padding-top: 18px;
          background: transparent;
          padding-inline: 0;
          padding-bottom: 0;
          color: var(--primary-strong);
        }

        @media (max-width: 1024px) {
          .podcast-page-head,
          .podcast-featured-shell,
          .podcast-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
