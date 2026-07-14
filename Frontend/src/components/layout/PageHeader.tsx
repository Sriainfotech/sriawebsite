import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
 title: string;
 subtitle?: string;
 breadcrumbs?: { name: string; path: string }[];
 backgroundImage?: string;
}

const IMAGE_WIDTHS = [480, 768, 1080, 1600, 2000];

const buildSrcSet = (url: string) => {
 const [base, query] = url.split("?");
 if (!query || !query.includes("w-")) return undefined;
 const trWithoutWidth = query.replace(/,?w-\d+/, "");
 return IMAGE_WIDTHS.map((w) => `${base}?${trWithoutWidth},w-${w} ${w}w`).join(", ");
};

const PageHeader = ({ title, subtitle, breadcrumbs, backgroundImage }: PageHeaderProps) => {
 const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
   "@context": "https://schema.org",
   "@type": "BreadcrumbList",
   itemListElement: [
     { "@type": "ListItem", position: 1, name: "Home", item: "https://sriainfotech.com/" },
     ...breadcrumbs.map((crumb, index) => ({
       "@type": "ListItem",
       position: index + 2,
       name: crumb.name,
       item: `https://sriainfotech.com${crumb.path}`,
     })),
   ],
 } : null;

 return (
 <section className="relative overflow-hidden min-h-[420px] flex items-end pb-0">
 {/* Background */}
 {backgroundImage ? (
 <div className="absolute inset-0">
 <img
 src={backgroundImage}
 srcSet={buildSrcSet(backgroundImage)}
 sizes="100vw"
 alt={title}
 className="w-full h-full object-cover"
 fetchPriority="high"
 decoding="async"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80" />
 <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent" />
 </div>
 ) : (
 <div className="absolute inset-0">
 <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
 {/* Accent glow */}
 <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
 </div>
 )}

 {/* Grid pattern */}
 <div
 className="absolute inset-0 opacity-[0.04] pointer-events-none"
 style={{
 backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
 backgroundSize: "60px 60px"
 }}
 />

 <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-28 pb-10 sm:pb-12 w-full">

 {breadcrumbSchema && (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 )}

 {breadcrumbs && breadcrumbs.length > 0 && (
 <nav aria-label="Breadcrumb" className="mb-5">
 <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
 <li className="flex items-center gap-1.5">
 <Link to="/" className="flex items-center gap-1 hover:text-orange-400 transition-colors">
 <Home className="w-3.5 h-3.5" />
 <span>Home</span>
 </Link>
 <ChevronRight className="w-3 h-3 text-white/30" />
 </li>
 {breadcrumbs.map((crumb, index) => (
 <li key={crumb.path} className="flex items-center gap-1.5">
 {index === breadcrumbs.length - 1 ? (
 <span className="text-white/80 font-medium">{crumb.name}</span>
 ) : (
 <>
 <Link to={crumb.path} className="hover:text-orange-400 transition-colors">
 {crumb.name}
 </Link>
 <ChevronRight className="w-3 h-3 text-white/30" />
 </>
 )}
 </li>
 ))}
 </ol>
 </nav>
 )}

 <motion.div
 initial={{ opacity: 0, y: 25 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.1 }}
 >
 {/* Accent line */}
 <div className="flex items-center gap-3 mb-5">
 <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-amber-400" />
 <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Sria Infotech</span>
 </div>

 <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
 {title}
 </h1>

 {subtitle && (
 <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
 {subtitle}
 </p>
 )}
 </motion.div>
 </div>

 </section>
 );
};

export default PageHeader;

