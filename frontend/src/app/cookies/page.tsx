import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { cookieSections, legalUpdated } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | VistaVise",
  description: "How the VistaVise Consulting website uses cookies.",
  alternates: { canonical: `${siteConfig.url}/cookies` },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="A short explanation of the cookies this website uses."
      updated={legalUpdated}
      sections={cookieSections}
    />
  );
}
