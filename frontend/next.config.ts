import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const appRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {
    root: appRoot,
  },
  async redirects() {
    return [
      // Short link kept from the old Wix site (footer and contact page use it). Confirm the target with the client.
      { source: "/linkedin", destination: "https://au.linkedin.com/in/ajayka", permanent: false },
      // Common page addresses from the old Wix site, so saved links still land somewhere useful
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-me", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/book-online", destination: "/contact", permanent: true },
      { source: "/booking", destination: "/contact", permanent: true },
      { source: "/services-1", destination: "/services", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:path*", destination: "/insights", permanent: true },
      { source: "/post/:path*", destination: "/insights", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
