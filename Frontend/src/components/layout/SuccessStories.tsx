import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import siteData from "@/data/siteData.json";

const FALLBACK_IMAGES: Record<number, string> = {
  1: "https://ik.imagekit.io/hps6th7vy/sria/partners/ivc-logo.png?tr=f-auto,q-auto,w-2000",
  2: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/patil.jpg?tr=f-auto,q-auto,w-2000",
  3: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/7hills.jpg?tr=f-auto,q-auto,w-2000",
  4: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/pharma.jpg?tr=f-auto,q-auto,w-2000",
};

const stories = siteData.successStories.map(story => ({
  ...story,
  image: story.image || FALLBACK_IMAGES[story.id],
}));

const SuccessStories = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Case Studies</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Success Stories</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
          </motion.div>
          <Link to="/about/customer-stories">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all group"
            >
              View All Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {stories.map((story, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-5 min-w-0">
                <Link to={story.readMoreLink}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative rounded-2xl overflow-hidden h-[420px] cursor-pointer border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {story.imageFit === "contain" && (
                      <div className="absolute inset-0 bg-white" />
                    )}
                    <img
                      src={story.image}
                      alt={story.title}
                      className={`relative w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                        story.imageFit === "contain" ? "object-contain p-10" : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                      <span className="inline-block px-3 py-1 bg-orange-500 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                        {story.category}
                      </span>
                      <h3 className="text-base font-bold mb-4 leading-snug">{story.title}</h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
