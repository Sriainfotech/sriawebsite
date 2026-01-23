import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

import siteData from "@/data/siteData.json";

const testimonials = siteData.testimonials.map(t => ({
    ...t,
    image: t.image.startsWith('/') ? t.image : aboutTeam
}));

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-blue-50/50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Client Success</span>
                    <h2 className="text-4xl font-heading font-bold mt-2 text-foreground">What Our Clients Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg relative border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg"
                            >
                                <Quote className="w-6 h-6 fill-current" />
                            </motion.div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    >
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-muted-foreground mb-8 italic leading-relaxed text-sm">"{testimonial.review}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                                        {testimonial.verified && (
                                            <span className="flex items-center gap-0.5 text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                                                <CheckCircle className="w-3 h-3" /> Verified
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-primary">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
