import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedWork from "./components/FeaturedWork";
import Showreel from "./components/Showreel";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import HotelPartnership from "./components/HotelPartnership";
import MilesMeals from "./components/MilesMeals";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import ProjectInquiryModal from "./components/ProjectInquiryModal";

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<"project" | "call" | "hotel">("project");

  const handleOpenInquiry = (type: "project" | "call" | "hotel") => {
    setInquiryType(type);
    setIsInquiryOpen(true);
  };

  const handlePlayShowreel = () => {
    const showreelSection = document.getElementById("showreel");
    if (showreelSection) {
      showreelSection.scrollIntoView({ behavior: "smooth" });
      // Simulate click on the showreel play button after a short delay
      setTimeout(() => {
        const playBtn = document.getElementById("showreel-play-center-btn") || document.getElementById("showreel-play-btn");
        if (playBtn) {
          playBtn.click();
        }
      }, 800);
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen selection:bg-luxury-gold selection:text-luxury-charcoal font-sans antialiased overflow-x-hidden scroll-smooth">
      {/* Floating Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Sections flow */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection
          onOpenInquiry={handleOpenInquiry}
          onPlayShowreel={handlePlayShowreel}
        />

        {/* Section 2: Trusted By Logo Marquee */}
        <TrustedBy />

        {/* Section 3: About RF Media */}
        <AboutSection />

        {/* Section 4: Services Card Grid */}
        <ServicesSection onOpenInquiry={handleOpenInquiry} />

        {/* Section 5: Featured Work Portfolios with Case Studies */}
        <FeaturedWork />

        {/* Section 6: Showreel with custom video controls */}
        <Showreel />

        {/* Section 7: Why Choose Us (Bento Cards) */}
        <WhyChooseUs />

        {/* Section 8: Our Process (Staggered Timeline) */}
        <ProcessSection />

        {/* Section 9: Hotel Partnership (Dedicated Hospitality banner) */}
        <HotelPartnership onOpenInquiry={handleOpenInquiry} />

        {/* Section 10: Miles & Meals (Travel and Food Channel posts) */}
        <MilesMeals />

        {/* Section 11: Testimonials Carousel */}
        <Testimonials />

        {/* Section 12: Call To Action Banner */}
        <CTASection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Section 13: Footer directory coordinates */}
      <FooterSection />

      {/* Shared Core Project Inquiry Form Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialType={inquiryType}
      />
    </div>
  );
}
