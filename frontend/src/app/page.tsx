import ApproachSection from "@/components/ApproachSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetAjayPreviewSection from "@/components/MeetAjayPreviewSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MeetAjayPreviewSection />
        <ApproachSection />
        <SocialProofSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
