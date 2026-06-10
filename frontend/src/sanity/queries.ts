import { draftMode } from "next/headers";
import {
  categories,
  estimateReadingTime,
  fallbackArticles,
  fallbackPodcastEntries,
  type Article,
  type Category,
  type PodcastEntry,
} from "@/lib/content";
import { getSanityClient, urlForImage } from "./client";

const articleProjection = `{
  title,
  "slug": slug.current,
  subtitle,
  summary,
  "category": category->{title, "slug": slug.current, description},
  tags,
  "author": author->{name, role, bio, "image": image.asset->url},
  publishedAt,
  readingTime,
  "image": heroImage.asset->url,
  body,
  pullQuote,
  callout,
  seo
}`;

function plainTextFromPortableText(body: Array<Record<string, unknown>> = []) {
  return body
    .flatMap((block) => {
      const children = block.children;
      return Array.isArray(children)
        ? children.map((child) => (typeof child?.text === "string" ? child.text : ""))
        : [];
    })
    .join(" ");
}

function normalizeArticle(article: Article): Article {
  return {
    ...article,
    category: article.category || categories[0],
    tags: article.tags || [],
    author: article.author || fallbackArticles[0].author,
    readingTime: article.readingTime || estimateReadingTime(plainTextFromPortableText(article.body)),
  };
}

async function isPreviewEnabled() {
  const mode = await draftMode();
  return mode.isEnabled;
}

export async function getAllArticles(): Promise<Article[]> {
  const client = getSanityClient(await isPreviewEnabled());
  if (!client) return fallbackArticles;

  try {
    const articles = await client.fetch<Article[]>(
      `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) ${articleProjection}`,
      {},
      { next: { revalidate: 1800, tags: ["article"] } },
    );

    return articles.length ? articles.map(normalizeArticle) : fallbackArticles;
  } catch {
    return fallbackArticles;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fallback = fallbackArticles.find((article) => article.slug === slug) || null;
  const client = getSanityClient(await isPreviewEnabled());
  if (!client) return fallback;

  try {
    const article = await client.fetch<Article | null>(
      `*[_type == "article" && slug.current == $slug][0] ${articleProjection}`,
      { slug },
      { next: { revalidate: 1800, tags: ["article", `article:${slug}`] } },
    );

    return article ? normalizeArticle(article) : fallback;
  } catch {
    return fallback;
  }
}

export async function getLatestArticles(limit = 3): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.slice(0, limit);
}

export async function getCategories(): Promise<Category[]> {
  const client = getSanityClient(await isPreviewEnabled());
  if (!client) return categories;

  try {
    const sanityCategories = await client.fetch<Category[]>(
      `*[_type == "category"] | order(title asc) {title, "slug": slug.current, description}`,
      {},
      { next: { revalidate: 3600, tags: ["category"] } },
    );

    return sanityCategories.length ? sanityCategories : categories;
  } catch {
    return categories;
  }
}

export async function getPodcastEntries(): Promise<PodcastEntry[]> {
  const client = getSanityClient(await isPreviewEnabled());
  if (!client) return fallbackPodcastEntries;

  try {
    const episodes = await client.fetch<PodcastEntry[]>(
      `*[_type == "podcastEpisode"] | order(publishedAt desc) {
        title,
        description,
        "thumbnail": thumbnail.asset->url,
        episodeUrl,
        publishedAt
      }`,
      {},
      { next: { revalidate: 1800, tags: ["podcastEpisode"] } },
    );

    return episodes.length ? episodes : fallbackPodcastEntries;
  } catch {
    return fallbackPodcastEntries;
  }
}

export function getArticleImageUrl(article: Article, width = 1600, height = 1000) {
  if (!article.image) return undefined;
  if (typeof article.image === "string") return article.image;

  return urlForImage(article.image)?.width(width).height(height).fit("crop").auto("format").url();
}
