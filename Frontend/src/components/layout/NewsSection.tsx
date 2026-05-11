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
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
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
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Latest Updates</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">News &amp; Insights</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
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
              className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-100 text-slate-900 font-semibold text-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
            >
              View All News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                    whileHover={{ y: -6 }}
                    className="group h-full bg-white rounded-2xl p-7 border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Tag Badge */}
                    <div className="mb-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-500 text-[10px] font-bold uppercase tracking-widest border border-orange-100">
                        {item.tag}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-orange-500 font-semibold text-xs group/link hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 z-20 disabled:opacity-0"
            disabled={!prevBtnEnabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 z-20 disabled:opacity-0"
            disabled={!nextBtnEnabled}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === selectedIndex ? "w-8 bg-orange-500" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Newsletter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-slate-950 rounded-2xl p-10 md:p-16 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
          />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Newsletter</span>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                Stay updated with the latest in SAP &amp; Digital Transformation
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Subscribe to receive curated insights, success stories, and industry updates directly in your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3.5 bg-white/[0.07] border border-white/15 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.10] transition-all text-sm w-full lg:w-64"
              />
              <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-full transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap">
                Get Notified
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link to="/about" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm">
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
