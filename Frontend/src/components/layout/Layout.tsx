import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "@/components/home/FloatingButtons";
import CookieBanner from "@/components/layout/CookieBanner";
import { Suspense, lazy, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Home-only sections: rendered on "/" alone, but this Layout wraps every
// route, so a static import here would ship them in the bundle every page
// pays for. Lazy-loading keeps them out of the shared chunk entirely.
const ClientsSection = lazy(() => import("./ClientsSection"));
const SuccessStories = lazy(() => import("./SuccessStories"));
const EventsSection = lazy(() => import("./EventsSection"));
const TestimonialsSection = lazy(() => import("./TestimonialsSection"));
const CTASection = lazy(() => import("./CTASection"));

const Layout = () => {
 const location = useLocation();

 // Scroll to top on route change — instant to override any CSS scroll-behavior.
 // A hash target (e.g. /#associations) is scrolled into view instead of being overridden.
 useEffect(() => {
 if (location.hash) {
 const el = document.getElementById(location.hash.slice(1));
 if (el) {
 el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
 return;
 }
 }
 window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
 document.documentElement.scrollTop = 0;
 document.body.scrollTop = 0;
 }, [location.pathname, location.hash]);

 const isHomePage = location.pathname === "/" || location.pathname === "/";

 return (
 <div className="min-h-screen bg-background font-sans text-foreground">
 <Navbar />
 <main>
 <Outlet />
 </main>
 {/* Common Sections - Only show on home page */}
 {isHomePage && (
 <>
 <Suspense fallback={<div className="min-h-[260px]" />}>
 <ClientsSection />
 </Suspense>
 <Suspense fallback={<div className="min-h-[360px]" />}>
 <SuccessStories />
 </Suspense>
 <Suspense fallback={<div className="min-h-[300px]" />}>
 <EventsSection />
 </Suspense>
 <Suspense fallback={<div className="min-h-[220px]" />}>
 <TestimonialsSection />
 </Suspense>
 <Suspense fallback={<div className="min-h-[260px]" />}>
 <CTASection />
 </Suspense>
 </>
 )}
 <Footer />
 <CookieBanner />
 <FloatingButtons />
 <a
 aria-label="Chat on WhatsApp"
 href={`https://wa.me/919701314138?text=${encodeURIComponent("Hi, I visited your website and would like to know more about your IT services.")}`}
 target="_blank"
 rel="noreferrer noopener"
 className="fixed right-4 sm:right-6 bottom-6 sm:bottom-28 z-[9999] bg-green-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all"
 >
 <FaWhatsapp className="w-8 h-8" />
 </a>
 </div>
 );
};

export default Layout;
