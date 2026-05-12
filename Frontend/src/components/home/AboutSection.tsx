import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
const aboutImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80";

const highlights = [
 "Partner-centric approach with trust and integrity",
 "Timely responses and transparent interactions",
 "Committed to being humble in our dealings",
 "Focus on effective communication",
];

const AboutSection = () => {
 return (
 <section className="section-padding bg-slate-50 overflow-hidden relative">
 {/* Subtle bg decoration */}
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60" />
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
 <div className="grid lg:grid-cols-2 gap-16 items-stretch">

 {/* Image Side */}
 <motion.div
 initial={{ opacity: 0, x: -60 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.9, ease: "easeOut" }}
 className="relative h-full"
 >
 {/* Decorative frame behind */}
 <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-orange-200/50" />

 <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[320px]">
 <img
 src={aboutImageUrl}
 alt="Innovation Team"
 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
 />
 {/* Gradient overlay */}
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

 {/* Bottom text overlay */}
 <div className="absolute bottom-0 left-0 right-0 p-8">
 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
 <p className="text-xl font-bold text-white mb-1">Innovation Hub</p>
 <p className="text-sm text-white/70">Driving Digital Excellence</p>
 </div>
 </div>
 </div>

 {/* Floating badge */}
 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="hidden xl:flex absolute top-8 -right-6 z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 items-center gap-3"
 >
 <div className="bg-orange-100 p-2 rounded-xl">
 <Zap className="w-5 h-5 text-orange-500" />
 </div>
 <div>
 <p className="text-sm font-bold text-slate-900">Future Ready</p>
 <p className="text-[11px] text-slate-400">AI & Cloud Native</p>
 </div>
 </motion.div>
 </motion.div>

 {/* Content Side */}
 <div className="flex flex-col justify-center space-y-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">About Us</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 leading-tight">
 What Sets Us Apart:{" "}
 <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
 Partner-Centric Approach
 </span>
 </h2>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="text-slate-500 text-lg leading-relaxed"
 >
 Our partner-centric approach sets us apart, as we believe in establishing
 strong relationships built on trust, integrity, and effective communication.
 We are committed to being humble in our dealings, providing timely responses,
 and fostering transparent interactions with our clients.
 </motion.p>

 <ul className="space-y-3">
 {highlights.map((item, index) => (
 <motion.li
 key={index}
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
 className="flex items-center gap-3 group"
 >
 <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
 <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 group-hover:text-white transition-colors duration-300" />
 </div>
 <span className="text-slate-700 text-base font-medium">{item}</span>
 </motion.li>
 ))}
 </ul>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.7 }}
 >
 <Link to="/about">
 <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
 Discover More
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </button>
 </Link>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 );
};

export default AboutSection;

