import { motion } from "framer-motion";
import { Cloud, Database, Layers, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const features = [
 {
 icon: Layers,
 image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
 title: "SAP S/4HANA",
 description: "End-to-end implementation and migration services for intelligent enterprise solutions.",
 link: "/implement",
 accent: "from-orange-500 to-amber-600",
 },
 {
 icon: Cloud,
 image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
 title: "Cloud Solutions",
 description: "Seamless cloud migration and management with SAP Business Technology Platform.",
 link: "/solutions/public-cloud",
 accent: "from-sky-500 to-blue-600",
 },
 {
 icon: Database,
 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
 title: "Data Analytics",
 description: "Transform data into actionable insights for informed decision-making.",
 link: "/additionalServices/dataanalytics",
 accent: "from-violet-500 to-purple-600",
 },
 {
 icon: Shield,
 image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
 title: "Managed Services",
 description: "Comprehensive application management and support services.",
 link: "/support-maintainance",
 accent: "from-emerald-500 to-teal-600",
 },
];

const FeaturesSection = () => {
 return (
 <section className="section-padding bg-white">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-center mb-14"
 >
 <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">What We Do</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
 Core Capabilities
 </h2>
 <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-4" />
 <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
 From SAP implementations to cloud migrations, our expertise spans the full digital transformation journey.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
 {features.map((feature, index) => (
 <motion.div
 key={feature.title}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.1 }}
 >
 <Link to={feature.link}>
 <div className="group relative rounded-2xl overflow-hidden h-[340px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
 {/* Background Image */}
 <img
 src={feature.image}
 alt={feature.title}
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
 />

 {/* Gradient overlay - always visible */}
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

 {/* Hover color accent overlay */}
 <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

 {/* Content */}
 <div className="absolute inset-0 p-6 flex flex-col justify-end">
 {/* Icon badge */}
 <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
 <feature.icon className="w-5 h-5 text-white" />
 </div>

 <h3 className="text-lg font-bold text-white mb-2 font-heading">
 {feature.title}
 </h3>
 <p className="text-white/60 text-sm leading-relaxed mb-4">
 {feature.description}
 </p>

 {/* CTA */}
 <div className="flex items-center gap-1.5 text-orange-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
 Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </div>
 </div>

 {/* Top gradient border effect */}
 <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default FeaturesSection;

