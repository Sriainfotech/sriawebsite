import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import siteData from "@/data/siteData.json";

const NewsSection = () => {
    const news = siteData.news;
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
            breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 },
                '(min-width: 1024px)': { slidesToScroll: 1 }
            }
        },
        [Autoplay({ delay: 5000, stopOnInteraction: true })]
    );

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <section className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Latest Updates</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">News & Insights</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hidden md:block"
                    >
                        <Link
                            to="/about"
                            className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 text-slate-900 font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        >
                            View All News <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative px-4">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {news.map((item) => (
                                <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0">
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="group h-full bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 flex flex-col"
                                    >
                                        {/* Region Badge */}
                                        <div className="mb-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
                                                {item.tag}
                                            </span>
                                        </div>

                                        {/* Headline */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-500 text-sm md:text-base mb-8 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="mt-auto">
                                            <Link
                                                to={item.link}
                                                className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-20 disabled:opacity-0"
                        disabled={!prevBtnEnabled}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-20 disabled:opacity-0"
                        disabled={!nextBtnEnabled}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-24 p-8 md:p-16 bg-slate-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Stay updated with the latest in SAP & Digital Transformation
                            </h4>
                            <p className="text-slate-400 text-lg">
                                Subscribe to our newsletter to receive curated insights, success stories, and industry updates directly in your inbox.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-72 backdrop-blur-sm transition-all"
                            />
                            <button className="px-10 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 whitespace-nowrap">
                                Get Notified
                            </button>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </motion.div>

                {/* Mobile CTA */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 text-primary font-bold"
                    >
                        View All News <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
