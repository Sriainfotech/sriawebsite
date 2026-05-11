import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import siteData from "@/data/siteData.json";

const testimonials = siteData.testimonials.map(t => ({
 ...t,
 image: t.image.startsWith('/') ? t.image : aboutTeam
}));

const TestimonialsSection = () => {
 return (
 <section className="section-padding bg-slate-950 overflow-hidden relative">
 {/* Background decoration */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
 <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 {/* Header */}
 <div className="text-center mb-16">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Client Success</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
 What Our Clients Say
 </h2>
 </motion.div>
 </div>

 <div className="grid md:grid-cols-3 gap-6">
 {testimonials.map((testimonial, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.15 }}
 className="group relative"
 >
 <div className="relative h-full rounded-2xl bg-white/[0.04] border border-white/8 p-8 hover:bg-white/[0.08] hover:border-white/16 transition-all duration-400 overflow-hidden">
 {/* Glow on hover */}
 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
 <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
 </div>

 {/* Quote icon */}
 <div className="mb-6">
 <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
 <Quote className="w-5 h-5 text-orange-400 fill-orange-400" />
 </div>
 </div>

 {/* Stars */}
 <div className="flex gap-1 mb-5">
 {[...Array(testimonial.rating)].map((_, i) => (
 <motion.div
 key={i}
 animate={{ opacity: [0.6, 1, 0.6] }}
 transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
 >
 <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
 </motion.div>
 ))}
 </div>

 {/* Review text */}
 <p className="text-slate-300 text-base leading-relaxed mb-8 italic">
 "{testimonial.review}"
 </p>

 {/* Author */}
 <div className="flex items-center gap-3 pt-6 border-t border-white/8">
 <img
 src={testimonial.image}
 alt={testimonial.name}
 className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-500/30"
 />
 <div>
 <p className="text-white font-semibold text-sm">{testimonial.name}</p>
 <p className="text-orange-400 text-xs font-medium">{testimonial.role}</p>
 </div>
 </div>

 {/* Bottom border accent */}
 <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default TestimonialsSection;

