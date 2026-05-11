import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import serviceManaged from "@/assets/service-managed.jpg";
import heroContact from "@/assets/hero-contact.jpg";
import siteData from "@/data/siteData.json";

const imageMap: Record<string, string> = {
 "service-managed.jpg": serviceManaged,
 "hero-contact.jpg": heroContact
};

const stories = siteData.successStories.map(story => ({
 ...story,
 image: story.image.startsWith('/') ? story.image : (imageMap[story.image] || serviceManaged)
}));

const SuccessStories = () => {
 const [emblaRef] = useEmblaCarousel(
 { loop: true, align: "start" },
 [Autoplay({ delay: 4000, stopOnInteraction: true })]
 );

 return (
 <section className="section-padding bg-white relative overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
 >
 <div>
 <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Case Studies</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Success Stories</h2>
 </div>
 <p className="text-slate-400 text-base max-w-sm leading-relaxed">
 Real results from real clients — see how we've transformed businesses across industries.
 </p>
 </motion.div>

 {/* Carousel */}
 <div className="overflow-hidden" ref={emblaRef}>
 <div className="flex -ml-5">
 {stories.map((story, index) => (
 <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-5 min-w-0">
 <motion.div
 whileHover={{ y: -8 }}
 transition={{ duration: 0.3 }}
 className="group relative rounded-3xl overflow-hidden h-[480px] cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
 >
 <img
 src={story.image}
 alt={story.title}
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
 />

 {/* Base gradient */}
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

 {/* Hover color tint */}
 <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-colors duration-500" />

 {/* Content */}
 <div className="absolute bottom-0 left-0 right-0 p-8">
 {/* Category pill */}
 <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold mb-4 tracking-wide">
 {story.category}
 </span>

 <h3 className="text-base font-bold text-white leading-snug mb-5">{story.title}</h3>

 {/* Read more link */}
 <div className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-orange-400 transition-colors duration-300 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
 Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </div>
 </div>

 {/* Top accent line */}
 <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
 </motion.div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
};

export default SuccessStories;

