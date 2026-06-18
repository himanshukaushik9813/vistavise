import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { VisualEditing } from "next-sanity/visual-editing";
import MotionProvider from "@/components/motion/MotionProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "VistaVise | Business Analysis Mentorship & Professional Guidance",
  description:
    "Practical business analysis training, 1:1 mentorship, student support, and migrant guidance designed to help people grow with confidence.",
  keywords:
    "VistaVise, business analysis mentorship, career development, student support, migrant support Melbourne, professional coaching",
  openGraph: {
    title: "VistaVise | Business Analysis Mentorship & Professional Guidance",
    description:
      "A premium professional development platform for business analysis mentorship, career support, and community-driven guidance in Melbourne.",
    type: "website",
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VistaVise | Business Analysis Mentorship & Professional Guidance",
    description:
      "Practical training, mentorship, and support for business analysis, student growth, and migrant confidence.",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
        {isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
}
