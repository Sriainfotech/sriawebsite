import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Case Studies</span>
                        <h2 className="text-4xl font-heading font-bold mt-2 text-foreground">Success Stories</h2>
                    </div>
                    <div className="hidden md:flex gap-2">
                        {/* Navigation buttons could go here */}
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {stories.map((story, index) => (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0">
                                <Link to={story.readMoreLink}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        className="group relative rounded-xl overflow-hidden h-[450px] cursor-pointer shadow-md"
                                    >
                                        <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur rounded-full text-xs font-bold mb-3">{story.category}</span>
                                            <h3 className="text-xl font-bold mb-4 leading-tight">{story.title}</h3>
                                            <div className="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-3 group-hover:translate-y-0">
                                                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
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
