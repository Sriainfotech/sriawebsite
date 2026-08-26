import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
 title: string;
 subtitle?: string;
 // path is optional: a crumb with no path renders as plain, non-clickable
 // text — for a category label that has no real landing page to link to,
 // rather than pointing at a route that doesn't exist.
 breadcrumbs?: { name: string; path?: string }[];
 backgroundImage?: string;
 // Optional focal-point/zoom for backgroundImage (e.g. a CMS-editable blog
 // post cover). Both no-ops unless backgroundImage is also set — every
 // existing PageHeader call site is unaffected since these are new,
 // optional props.
 backgroundImagePosition?: string;
 backgroundImageZoom?: number;
}

const IMAGE_WIDTHS = [480, 768, 1080, 1600, 2000];

const buildSrcSet = (url: string) => {
 const [base, query] = url.split("?");
 if (!query || !query.includes("w-")) return undefined;
 const trWithoutWidth = query.replace(/,?w-\d+/, "");
 return IMAGE_WIDTHS.map((w) => `${base}?${trWithoutWidth},w-${w} ${w}w`).join(", ");
};

const PageHeader = ({ title, subtitle, breadcrumbs, backgroundImage, backgroundImagePosition, backgroundImageZoom }: PageHeaderProps) => {
 const linkedCrumbs = breadcrumbs?.filter((c) => c.path) ?? [];
 const breadcrumbSchema = linkedCrumbs.length > 0 ? {
   "@context": "https://schema.org",
   "@type": "BreadcrumbList",
   itemListElement: [
     { "@type": "ListItem", position: 1, name: "Home", item: "https://sriainfotech.com/" },
     ...linkedCrumbs.map((crumb, index) => ({
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
 // Lighthouse's "explicit width/height" check flags any <img> missing
 // these regardless of how it's actually laid out — this one is
 // absolutely positioned and CSS-stretched to fill its section (so these
 // attributes don't drive real layout here the way they would for an
 // in-flow image), but the audit doesn't know that. 1600x600 matches the
 // ~2.67:1 ratio these hero banners are shot at sitewide.
 width={1600}
 height={600}
 className="w-full h-full object-cover"
 style={
 backgroundImagePosition || backgroundImageZoom
 ? {
 objectPosition: backgroundImagePosition || "50% 50%",
 transform: `scale(${(backgroundImageZoom || 100) / 100})`,
 transformOrigin: backgroundImagePosition || "50% 50%",
 }
 : undefined
 }
 // @ts-expect-error — React 18.3 doesn't type fetchpriority yet; lowercase avoids the "unrecognized prop" warning until React 19
 fetchpriority="high"
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
 <nav aria-label="Breadcrumb" className="mb-5 overflow-x-auto">
 {/* flex-nowrap (was flex-wrap) + whitespace-nowrap on every crumb:
 this row was measurably causing mobile layout shift — not the
 hero image below. font-display: swap means these crumbs render
 in a fallback font first, then the real webfont swaps in with
 slightly different character widths; on a mobile-width flex-wrap
 row that was sometimes just enough to push one crumb onto a
 second line, growing this section's height by a full line
 (~22px) after first paint and shoving the whole page down.
 Measured on production: 0.146–0.258 CLS on /solutions/manufacturing-execution
 and /services/strategy-consulting/process, both traced via the
 Layout Instability API directly to this element's height change
 (not the image, which is position:absolute with both CSS
 dimensions already set and can't shift layout at all). Making the
 row a fixed single line removes the wrap trigger entirely,
 regardless of font-swap timing; it scrolls horizontally in the
 rare case a very long breadcrumb chain doesn't fit. */}
 <ol className="flex flex-nowrap items-center gap-1.5 text-xs text-white/50 w-max">
 <li className="flex items-center gap-1.5 flex-shrink-0">
 <Link to="/" className="flex items-center gap-1 hover:text-orange-400 transition-colors whitespace-nowrap">
 <Home className="w-3.5 h-3.5" />
 <span>Home</span>
 </Link>
 <ChevronRight className="w-3 h-3 text-white/30 flex-shrink-0" />
 </li>
 {breadcrumbs.map((crumb, index) => (
 <li key={`${crumb.name}-${index}`} className="flex items-center gap-1.5 flex-shrink-0">
 {index === breadcrumbs.length - 1 ? (
 <span className="text-white/80 font-medium whitespace-nowrap">{crumb.name}</span>
 ) : crumb.path ? (
 <>
 <Link to={crumb.path} className="hover:text-orange-400 transition-colors whitespace-nowrap">
 {crumb.name}
 </Link>
 <ChevronRight className="w-3 h-3 text-white/30 flex-shrink-0" />
 </>
 ) : (
 <>
 <span className="text-white/50 whitespace-nowrap">{crumb.name}</span>
 <ChevronRight className="w-3 h-3 text-white/30 flex-shrink-0" />
 </>
 )}
 </li>
 ))}
 </ol>
 </nav>
 )}

 <div>
 {/* Accent line */}
 <div className="flex items-center gap-3 mb-5">
 <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-amber-400" />
 <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Sria Infotech</span>
 </div>

 <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
 {title}
 </h1>

 {subtitle && (
 <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
 {subtitle}
 </p>
 )}
 </div>
 </div>

 </section>
 );
};

export default PageHeader;

