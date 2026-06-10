import { NextResponse } from "next/server";
import { isSanityConfigured } from "@/sanity/env";
import { getPodcastEntries } from "@/sanity/queries";

export const revalidate = 1800;

const MAX_EPISODES = 6;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "";

type PodcastItem = {
    id: string;
    title: string;
    desc: string;
    publishedAt: string;
    url: string;
    thumbnail?: string;
};

function decodeXml(text: string) {
    return text
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

function getTagValue(block: string, tag: string) {
    const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
    return match ? decodeXml(match[1]) : "";
}

function getLink(block: string) {
    const match = block.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/);
    return match ? decodeXml(match[1]) : "";
}

function toSnippet(text: string) {
    const clean = text.replace(/\s+/g, " ").trim();
    if (clean.length <= 170) return clean;
    return `${clean.slice(0, 167)}...`;
}

function parseFeed(xml: string) {
    const entryMatches = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

    const mapped = entryMatches
        .map((entry): PodcastItem | null => {
            const id = getTagValue(entry, "yt:videoId");
            const title = getTagValue(entry, "title");
            const url = getLink(entry);
            const publishedAt = getTagValue(entry, "published");
            const description = getTagValue(entry, "media:description");

            if (!id || !title || !url || !publishedAt) return null;
            if (url.includes("/shorts/")) return null;

            return {
                id,
                title,
                desc: toSnippet(description || "Watch this episode on YouTube."),
                publishedAt,
                url,
            };
        })
        .filter((item): item is PodcastItem => item !== null);

    return mapped
        .sort(
            (a, b) =>
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
        .slice(0, MAX_EPISODES);
}

export async function GET() {
    if (isSanityConfigured) {
        const cmsEpisodes = await getPodcastEntries();

        if (cmsEpisodes.length) {
            return NextResponse.json(
                {
                    episodes: cmsEpisodes.slice(0, MAX_EPISODES).map((episode, index) => ({
                        id: `cms-${index}-${episode.publishedAt}`,
                        title: episode.title,
                        desc: toSnippet(episode.description),
                        publishedAt: episode.publishedAt,
                        url: episode.episodeUrl,
                        thumbnail: episode.thumbnail,
                    })),
                },
                { status: 200 },
            );
        }
    }

    if (!YOUTUBE_CHANNEL_ID) {
        return NextResponse.json({ episodes: [] }, { status: 200 });
    }

    try {
        const feedResponse = await fetch(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
            {
                next: { revalidate },
                signal: AbortSignal.timeout(4000),
            }
        );

        if (!feedResponse.ok) {
            return NextResponse.json({ episodes: [] }, { status: 200 });
        }

        const xml = await feedResponse.text();
        const episodes = parseFeed(xml);

        return NextResponse.json({ episodes }, { status: 200 });
    } catch {
        return NextResponse.json({ episodes: [] }, { status: 200 });
    }
}
