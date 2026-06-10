import imageUrlBuilder from "@sanity/image-url";
import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

let publishedClient: SanityClient | null = null;
let previewClient: SanityClient | null = null;

export function getSanityClient(preview = false) {
  if (!isSanityConfigured) return null;

  if (preview) {
    if (!previewClient) {
      previewClient = createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn: false,
        perspective: "previewDrafts",
        token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_TOKEN,
      });
    }

    return previewClient;
  }

  if (!publishedClient) {
    publishedClient = createClient({
      apiVersion,
      dataset,
      projectId,
      useCdn: true,
      perspective: "published",
    });
  }

  return publishedClient;
}

let builder: ReturnType<typeof imageUrlBuilder> | null = null;

export function urlForImage(source: unknown) {
  const client = getSanityClient(false);
  if (!client || !source) return null;

  if (!builder) builder = imageUrlBuilder(client);

  return builder.image(source);
}
