import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SuccessStories from "./SuccessStories";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import ClientsSection from "./ClientsSection";
import EventsSection from "./EventsSection";
import NewsSection from "./NewsSection";
import FloatingButtons from "@/components/home/FloatingButtons";
import CookieBanner from "@/components/layout/CookieBanner";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
 const location = useLocation();

 // Scroll to top on route change — instant to override any CSS scroll-behavior
 useEffect(() => {
 window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
 document.documentElement.scrollTop = 0;
 document.body.scrollTop = 0;
 }, [location.pathname]);

 const isHomePage = location.pathname === "/" || location.pathname === "/best-digital-transformation-company";

 return (
 <div className="min-h-screen bg-background font-sans text-foreground">
 <Navbar />
 <main>
 <Outlet />
 </main>
 {/* Common Sections - Only show on home page */}
 {isHomePage && (
 <>
 <ClientsSection />
 <SuccessStories />
 <EventsSection />
 {/* <NewsSection /> */}
 <TestimonialsSection />
 <CTASection />
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
