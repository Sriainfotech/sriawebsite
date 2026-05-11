import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import ChairmanStatement from "@/components/home/ChairmanStatement";

const Index = ({ customTitle }: { customTitle?: string }) => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <HeroSection customTitle={customTitle} />
      <FeaturesSection />
      <ServicesSection />
      <SolutionsGrid />
      <AboutSection />
      <StatsSection />
      <ChairmanStatement />
    </div>
  );
};

export default Index;
