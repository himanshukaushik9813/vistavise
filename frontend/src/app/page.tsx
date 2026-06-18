import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FocusProgramSection from "@/components/FocusProgramSection";
import Footer from "@/components/Footer";
import HelpAreasSection from "@/components/HelpAreasSection";
import HeroSection from "@/components/HeroSection";
import MeetAjaySection from "@/components/MeetAjaySection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import { focusSections } from "@/lib/vistavise-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HelpAreasSection />
        <AboutSection />
        {focusSections.map((section) => (
          <FocusProgramSection key={section.eyebrow} {...section} />
        ))}
        <ApproachSection />
        <TestimonialsSection />
        <MeetAjaySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
