import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ChevronRight, ArrowRight, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const AnimatedCounter = ({ value }: { value: string }) => {
  const numMatch = value.match(/[\d.]+/);
  const suffixMatch = value.match(/[^\d.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(easeOut * number);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, number]);

  return (
    <span ref={ref}>
      {number > 0 ? (Number.isInteger(number) ? Math.floor(count) : count.toFixed(1)) : value}
      {suffix}
    </span>
  );
};

interface ProductLayoutProps {
  overview: {
    title: string;
    description: string;
    image?: string;
    highlights: { icon: React.ReactNode; title: string; description: string }[];
  };
  coreCapabilities: {
    title: string;
    capabilities: { icon: React.ReactNode; title: string; description: string }[];
  };
  keyFeatures: {
    title: string;
    features: { icon: React.ReactNode; title: string }[];
  };
  featureDeepDive: {
    sections: { title: string; description: string; image: string; reverse?: boolean }[];
  };
  insights: {
    title: string;
    stats: { value: string; label: string }[];
  };
  benefits: {
    title: string;
    checklist: string[];
    illustration: string;
  };
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    buttonText: string;
  };
  otherProducts: {
    title: string;
    products: { title: string; description: string; link: string; icon: React.ReactNode }[];
  };
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  overview,
  coreCapabilities,
  keyFeatures,
  featureDeepDive,
  insights,
  benefits,
  faqs,
  cta,
  otherProducts,
}) => {
  return (
    <div className="min-h-screen bg-white">

      {/* 1 — Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/4 translate-x-1/4 blur-3xl opacity-70 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Product Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">{overview.title}</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed mb-10">{overview.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {overview.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-orange-200 hover:shadow-lg transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-3 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {overview.image ? (
                <>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-100 rounded-2xl pointer-events-none" />
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                    <img src={overview.image} alt={overview.title} className="w-full h-[480px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  </div>
                </>
              ) : (
                <div className="w-full h-[480px] rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <div
                    className="w-full h-full rounded-2xl opacity-[0.04]"
                    style={{ backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2 — Core Capabilities */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Capabilities</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{coreCapabilities.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreCapabilities.capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Features</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{keyFeatures.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFeatures.features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-orange-200 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Feature Deep Dive */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Deep Dive</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Feature Highlights</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>
          <div className="space-y-20">
            {featureDeepDive.sections.map((section, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-12 ${section.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex-1"
                >
                  <span className="inline-block text-orange-500 font-bold text-xs tracking-widest uppercase mb-4">
                    Feature {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">{section.title}</h3>
                  <div className="h-0.5 w-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-5" />
                  <p className="text-slate-500 leading-relaxed">{section.description}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex-1 w-full relative"
                >
                  <div className={`hidden lg:block absolute -bottom-3 ${section.reverse ? "-left-3" : "-right-3"} w-full h-full border-2 border-orange-100 rounded-2xl pointer-events-none`} />
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative z-10">
                    <img src={section.image} alt={section.title} className="w-full h-72 md:h-80 object-cover" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Insights */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Impact</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{insights.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {insights.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-slate-950 p-12 text-center hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300 mb-3">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Benefits</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">{benefits.title}</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-8" />
              <ul className="space-y-3">
                {benefits.checklist.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all"
                  >
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-100 rounded-2xl pointer-events-none" />
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src={benefits.illustration} alt={`Benefits of ${overview.title}`} className="w-full h-[440px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7 — FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-white border border-slate-100 rounded-2xl px-6 py-1 hover:border-orange-200 transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-800 py-5 hover:no-underline hover:text-orange-600 text-sm [&>svg]:hidden group">
                    <div className="flex w-full justify-between items-center pr-2 gap-4">
                      <span>{faq.question}</span>
                      <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0 group-data-[state=open]:bg-orange-500 group-data-[state=open]:text-white transition-all">
                        <Plus className="w-4 h-4 group-data-[state=open]:hidden" />
                        <Minus className="w-4 h-4 hidden group-data-[state=open]:block" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 8 — CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-2xl p-14 md:p-20 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
            />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-5">Get Started</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">{cta.title}</h2>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-orange-500/20"
                >
                  {cta.buttonText} <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9 — Other Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Explore More</span>
            <h2 className="text-2xl font-bold text-slate-900">{otherProducts.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProducts.products.map((product, idx) => (
              <Link key={idx} to={product.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {product.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{product.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{product.description}</p>
                  <div className="flex items-center gap-1.5 text-orange-500 font-semibold text-xs mt-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;
