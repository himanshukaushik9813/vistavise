import type { MetadataRoute } from "next";
import { getAllArticles } from "@/sanity/queries";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const baseRoutes = ["", "/about", "/services", "/podcast", "/contact", "/insights"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...baseRoutes, ...articleRoutes];
}
