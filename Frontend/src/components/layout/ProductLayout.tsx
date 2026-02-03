import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface ProductLayoutProps {
    overview: {
        title: string;
        description: string;
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
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* 2. What is Product? */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                {overview.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {overview.description}
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {overview.highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    {...fadeInUp}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Capabilities */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {coreCapabilities.title}
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreCapabilities.capabilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Key Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {keyFeatures.title}
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {keyFeatures.features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                                <div className="text-blue-600">{item.icon}</div>
                                <span className="font-semibold text-slate-700">{item.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Feature Deep Dive */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {featureDeepDive.sections.map((section, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: section.reverse ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1"
                                >
                                    <h3 className="text-3xl font-bold mb-6 text-slate-900">{section.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {section.description}
                                    </p>
                                    <Button variant="link" className="text-blue-600 p-0 h-auto font-bold text-lg group">
                                        Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1"
                                >
                                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                                        <img src={section.image} alt={section.title} className="w-full h-auto" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Insights That Define Value */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.1),transparent)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{insights.title}</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {insights.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">{stat.value}</div>
                                <p className="text-slate-400 text-lg">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Unlock Powerful Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">{benefits.title}</h2>
                            <ul className="space-y-4">
                                {benefits.checklist.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                        <span className="text-lg text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={benefits.illustration} alt="Benefits Illustration" className="w-full h-auto" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    </motion.div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-slate-200 rounded-2xl px-6 overflow-hidden">
                                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* 9. Call to Action */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...fadeInUp}
                        className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -ml-48 -mb-48" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">{cta.title}</h2>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-7 text-xl rounded-full font-bold relative z-10 transition-transform hover:scale-105">
                            {cta.buttonText}
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 10. Explore Other Products */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{otherProducts.title}</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {otherProducts.products.map((product, idx) => (
                            <Link key={idx} to={product.link}>
                                <motion.div
                                    {...fadeInUp}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl transition-all h-full flex flex-col"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {product.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{product.description}</p>
                                    <div className="mt-6 flex items-center text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Product <ChevronRight className="ml-1 w-4 h-4" />
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
