import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "VistaVise Consulting | Strategic Guidance",
  description:
    "Premium consulting for business analysis, strategic planning, project delivery, mentorship, and student or migrant guidance in Australia.",
  keywords:
    "VistaVise Consulting, business analysis, strategic consulting, project management, mentorship, student support, migrant guidance Australia",
  openGraph: {
    title: "VistaVise Consulting | Strategic Guidance",
    description:
      "Strategic consulting with a human-centered approach for businesses, professionals, students, and migrants.",
    type: "website",
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VistaVise Consulting | Strategic Guidance",
    description:
      "Strategic consulting with a human-centered approach for businesses, professionals, students, and migrants.",
    images: [siteConfig.ogImage],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
        {isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
}
