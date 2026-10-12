import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalUpdated, termsSections } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | VistaVise",
  description: "The terms that apply when you use the VistaVise Consulting website and services.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The terms that apply when you use this website and our services."
      updated={legalUpdated}
      sections={termsSections}
    />
  );
}
