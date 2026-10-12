import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | VistaVise",
  description: "Contact VistaVise for mentorship, student support, migrant guidance, or a consultation.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Start with a clear conversation about where you are and where you want to go."
          subtitle="Whether the focus is business analysis, career direction, student support, or migrant guidance, VistaVise is designed to meet you with practical help and honest structure."
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
