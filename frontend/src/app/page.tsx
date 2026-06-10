import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import CredibilitySection from "@/components/CredibilitySection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LatestInsightsSection from "@/components/insights/LatestInsightsSection";
import MethodsSection from "@/components/MethodsSection";
import Navbar from "@/components/Navbar";
import PodcastSection from "@/components/PodcastSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import StudentMigrantSection from "@/components/StudentMigrantSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SocialProofSection />
        <ServicesSection />
        <ApproachSection />
        <StudentMigrantSection />
        <LatestInsightsSection />
        <PodcastSection />
        <TestimonialsSection />
        <MethodsSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
