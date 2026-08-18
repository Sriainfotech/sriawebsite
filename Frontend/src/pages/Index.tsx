import { Suspense, lazy } from "react";
import HeroSection from "@/components/home/HeroSection";

// Everything below is below-the-fold on first paint, so it's code-split out
// of the eagerly-loaded homepage bundle. Each Suspense fallback reserves an
// approximate min-height (matched to that section's real rendered height)
// so the chunk resolving in doesn't shift the layout of whatever's below it.
const ClientsAndAssociations = lazy(() => import("@/components/home/ClientsAndAssociations"));
const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const SolutionsGrid = lazy(() => import("@/components/home/SolutionsGrid"));
const AboutSection = lazy(() => import("@/components/home/AboutSection"));
// StatsSection is PENDING REAL DATA — every figure it shows (Years of
// Excellence, Satisfied Clients, Projects Delivered, Global Offices)
// disagreed with other pages sitewide during a consistency audit. Not
// rendered until confirmed figures are available; the component itself is
// left in place, just unused.
// const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const ChairmanStatement = lazy(() => import("@/components/home/ChairmanStatement"));
const BlogPreviewSection = lazy(() => import("@/components/home/BlogPreviewSection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <HeroSection />
      {/* <Suspense fallback={<div className="min-h-[420px]" />}>
        <ClientsAndAssociations />
      </Suspense> */}
      <Suspense fallback={<div className="min-h-[380px]" />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[480px]" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[380px]" />}>
        <SolutionsGrid />
      </Suspense>
      <Suspense fallback={<div className="min-h-[380px]" />}>
        <AboutSection />
      </Suspense>
      {/* <Suspense fallback={<div className="min-h-[160px]" />}>
        <StatsSection />
      </Suspense> */}
      <Suspense fallback={<div className="min-h-[320px]" />}>
        <ChairmanStatement />
      </Suspense>
      <Suspense fallback={null}>
        <BlogPreviewSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[360px]" />}>
        <FAQSection />
      </Suspense>
    </div>
  );
};

export default Index;
