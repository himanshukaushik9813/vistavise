import type { MetadataRoute } from "next";
import { getAllArticles } from "@/sanity/queries";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/vistavise-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const baseRoutes = [
    "",
    "/about",
    "/services",
    "/services/job-ready-ba-accelerator",
    ...services.map((service) => `/services/${service.slug}`),
    "/podcast",
    "/contact",
    "/insights",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
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
