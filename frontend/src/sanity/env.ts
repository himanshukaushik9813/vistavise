export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-10";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio";

export const isSanityConfigured = Boolean(projectId && dataset);
