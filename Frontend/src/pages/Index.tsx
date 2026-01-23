import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import ChairmanStatement from "@/components/home/ChairmanStatement";
import FloatingButtons from "@/components/home/FloatingButtons";
import { FaWhatsapp } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <SolutionsGrid />
      <AboutSection />
      <StatsSection />
      <ChairmanStatement />
      <FloatingButtons />
      {/* <FloatingChat /> */}
      {/* WhatsApp quick chat button */}
      <a
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/919701314138?text=${encodeURIComponent("Hi, I visited your website and would like to know more about your IT services.")}`}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed right-6 bottom-28 z-[9999] bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
};

export default Index;
