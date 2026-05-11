import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SuccessStories from "./SuccessStories";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import ClientsSection from "./ClientsSection";
import EventsSection from "./EventsSection";
import NewsSection from "./NewsSection";
import { useEffect } from "react";

const Layout = () => {
 const location = useLocation();

 // Scroll to top on route change
 useEffect(() => {
 window.scrollTo(0, 0);
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
 <NewsSection />
 <TestimonialsSection />
 <CTASection />
 </>
 )}
 <Footer />
 </div>
 );
};

export default Layout;
