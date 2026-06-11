"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TiltCard from "./motion/TiltCard";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon, PlayIcon, PodcastIcon, SpotifyIcon, YouTubeIcon } from "./icons";

type Episode = {
  id: string;
  title: string;
  desc: string;
  publishedAt: string;
  url: string;
  color: string;
  thumbnail?: string;
};

const episodeColors = ["#d8dddf", "#cfd5d8", "#e2e3de", "#d6dce0", "#e6e5df", "#c9d0d4"];

const fallbackEpisodes: Episode[] = [
  {
    id: "fallback-1",
    title: "Breaking Into Business Analysis",
    desc: "Practical advice for building a BA career with clarity, confidence, and stronger positioning.",
    publishedAt: "2026-01-09T06:26:10Z",
    url: "https://www.youtube.com/@analystperspectives",
    color: "#d8dddf",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fallback-2",
    title: "The Startup Survival Playbook",
    desc: "A grounded conversation about validation, decision-making, and moving with more confidence.",
    publishedAt: "2026-01-09T06:26:32Z",
    url: "https://www.youtube.com/@analystperspectives",
    color: "#cfd5d8",
    thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fallback-3",
    title: "Migrant Success Stories",
    desc: "Supportive reflections on building career momentum in Australia while navigating change.",
    publishedAt: "2026-01-31T00:37:03Z",
    url: "https://www.youtube.com/@analystperspectives",
    color: "#e2e3de",
    thumbnail: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fallback-4",
    title: "Data-Driven Decision Making",
    desc: "How analysis and strategic thinking help leaders choose direction with less noise.",
    publishedAt: "2025-10-05T08:04:19Z",
    url: "https://www.youtube.com/@analystperspectives",
    color: "#d6dce0",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fallback-5",
    title: "Agile in the Real World",
    desc: "What good delivery really looks like when teams need practical structure and human communication.",
    publishedAt: "2025-12-09T08:08:45Z",
    url: "https://www.youtube.com/@analystperspectives",
    color: "#e6e5df",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function PodcastSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [episodes, setEpisodes] = useState<Episode[]>(fallbackEpisodes);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 4500);

    const loadEpisodes = async () => {
      try {
        const res = await fetch("/api/podcasts", { signal: controller.signal });
        if (!res.ok) return;

        const data = (await res.json()) as {
          episodes?: Array<{
            id: string;
            title: string;
            desc: string;
            publishedAt: string;
            url: string;
            thumbnail?: string;
          }>;
        };

        if (!data.episodes || data.episodes.length === 0 || cancelled) return;

        const mapped = data.episodes.slice(0, 6).map((episode, index) => ({
          ...episode,
          color: episodeColors[index % episodeColors.length],
        }));

        setEpisodes(mapped);
      } catch {
        // Keep fallback episodes on fetch or parsing failure.
      }
    };

    void loadEpisodes();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <section ref={ref} id="podcast" className="section-padding podcast-section">
      <div className="container-custom">
        <div className="podcast-header">
          <SectionHeading
            eyebrow="Thought Leadership"
            title="Insights, Conversations, and Practical Guidance"
            subtitle="A curated thought-leadership space for conversations around business analysis, strategy, career growth, and navigating change with more confidence."
            align="left"
          />

          <div className="podcast-links">
            <a
              href="https://www.youtube.com/@analystperspectives"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <YouTubeIcon size={16} />
              YouTube
            </a>
            {/* TODO: Replace with the final public Spotify podcast profile URL. */}
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <SpotifyIcon size={16} />
              Spotify
            </a>
            {/* TODO: Replace with the final Apple Podcasts profile URL. */}
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <PodcastIcon size={16} />
              Apple Podcasts
            </a>
          </div>
        </div>

        <div className="episodes-grid">
          {episodes.map((episode, index) => {
            const hasRemoteThumbnail = !episode.id.startsWith("fallback-");
            const thumbnailUrl = episode.thumbnail
              ? episode.thumbnail
              : hasRemoteThumbnail
                ? `https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`
                : null;

            return (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.46, delay: index * 0.06 }}
              >
                <TiltCard
                  as="a"
                  href={episode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="episode-card premium-tilt-card"
                  maxTilt={2.1}
                >
                  <div className="episode-media">
                    {thumbnailUrl ? (
                      <Image
                        src={thumbnailUrl}
                        alt={`${episode.title} episode thumbnail`}
                        fill
                        className="episode-image"
                        sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <div className="episode-poster" style={{ background: episode.color }}>
                        <span>VistaVise</span>
                        <strong>Episode {String(index + 1).padStart(2, "0")}</strong>
                      </div>
                    )}

                    <span className="episode-pill">Latest episode</span>
                    <span className="episode-play">
                      <PlayIcon size={16} />
                    </span>
                  </div>

                  <div className="episode-body">
                    <p className="episode-meta">
                      {formatDate(episode.publishedAt)} · VistaVise Consulting
                    </p>
                    <h3 className="episode-title">{episode.title}</h3>
                    <p className="episode-description">{episode.desc}</p>

                    <span className="episode-cta">
                      Watch episode
                      <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .podcast-section {
          padding-top: var(--space-40);
        }

        .podcast-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--space-40);
          margin-bottom: var(--space-40);
        }

        .podcast-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .episodes-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--space-24);
        }

        .episodes-grid > div {
          display: flex;
        }

        .episode-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(17, 18, 20, 0.08);
          background: rgba(255, 255, 255, 0.88);
          box-shadow: var(--shadow-soft);
          text-decoration: none;
          transition:
            transform 280ms ease,
            box-shadow 280ms ease,
            border-color 280ms ease;
        }

        .episode-card:hover {
          transform: translateY(-6px);
          border-color: rgba(17, 18, 20, 0.12);
          box-shadow: 0 24px 42px rgba(17, 18, 20, 0.08);
        }

        .episode-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: rgba(17, 18, 20, 0.06);
        }

        .episode-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .episode-poster {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          color: var(--text-primary);
          background-image:
            linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02)),
            radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.34), transparent 34%);
        }

        .episode-poster span {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .episode-poster strong {
          margin-top: 10px;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.6rem;
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .episode-pill,
        .episode-play {
          position: absolute;
          z-index: 1;
        }

        .episode-pill {
          top: 18px;
          left: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 252, 248, 0.92);
          color: var(--secondary);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .episode-play {
          right: 18px;
          bottom: 18px;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 252, 248, 0.92);
          color: var(--secondary);
          box-shadow: 0 14px 24px rgba(17, 18, 20, 0.08);
        }

        .episode-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 24px;
        }

        .episode-meta {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .episode-title {
          margin: 16px 0 0;
          font-family: var(--font-heading), sans-serif;
          font-size: 1.36rem;
          line-height: 1.18;
          letter-spacing: -0.04em;
          color: var(--secondary);
        }

        .episode-description {
          margin: 12px 0 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.78;
        }

        .episode-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: var(--space-24);
          color: var(--secondary);
          font-family: var(--font-heading), sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .episodes-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .podcast-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .podcast-links {
            justify-content: flex-start;
          }
        }

        @media (max-width: 680px) {
          .episodes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
