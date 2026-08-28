import { Suspense, lazy } from "react";
import HeroSection from "@/components/home/HeroSection";
import { DeferredMount } from "@/components/perf/DeferredMount";

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
      {/* <DeferredMount minHeight="420px">
        <Suspense fallback={<div className="min-h-[420px]" />}>
          <ClientsAndAssociations />
        </Suspense>
      </DeferredMount> */}
      {/* Hero is min-h-screen, so every section below it starts below the
          fold on initial paint on any device — DeferredMount defers each
          one's chunk fetch (not just its render) until it's actually
          approaching the viewport, rather than all seven firing at once
          on mount. A live PageSpeed audit showed these chunks existing
          separately (already React.lazy()-split) but still all being
          downloaded upfront, counted as unused JS on initial load. */}
      <DeferredMount minHeight="380px">
        <Suspense fallback={<div className="min-h-[380px]" />}>
          <FeaturesSection />
        </Suspense>
      </DeferredMount>
      <DeferredMount minHeight="480px">
        <Suspense fallback={<div className="min-h-[480px]" />}>
          <ServicesSection />
        </Suspense>
      </DeferredMount>
      <DeferredMount minHeight="380px">
        <Suspense fallback={<div className="min-h-[380px]" />}>
          <SolutionsGrid />
        </Suspense>
      </DeferredMount>
      <DeferredMount minHeight="380px">
        <Suspense fallback={<div className="min-h-[380px]" />}>
          <AboutSection />
        </Suspense>
      </DeferredMount>
      {/* <DeferredMount minHeight="160px">
        <Suspense fallback={<div className="min-h-[160px]" />}>
          <StatsSection />
        </Suspense>
      </DeferredMount> */}
      <DeferredMount minHeight="320px">
        <Suspense fallback={<div className="min-h-[320px]" />}>
          <ChairmanStatement />
        </Suspense>
      </DeferredMount>
      <DeferredMount minHeight="200px">
        <Suspense fallback={null}>
          <BlogPreviewSection />
        </Suspense>
      </DeferredMount>
      <DeferredMount minHeight="360px">
        <Suspense fallback={<div className="min-h-[360px]" />}>
          <FAQSection />
        </Suspense>
      </DeferredMount>
    </div>
  );
};

export default Index;
