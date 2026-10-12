import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalUpdated, privacySections } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | VistaVise",
  description: "How VistaVise Consulting collects, uses and protects your personal information.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we collect, use and protect your personal information."
      updated={legalUpdated}
      sections={privacySections}
    />
  );
}
