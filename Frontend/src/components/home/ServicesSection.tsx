import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Layout, Briefcase, Cloud, Boxes, ShieldCheck, Zap, ExternalLink } from "lucide-react";

const sapSolutions = [
 {
 title: "SAP Managed Services",
 link: "/support-maintainance/",
 icon: Settings,
 description: "Comprehensive application management and optimization."
 },
 {
 title: "SAP S/4HANA Implementation",
 link: "/implement",
 icon: Layout,
 description: "End-to-end implementation for the intelligent enterprise."
 },
 {
 title: "SAP Consulting Services",
 link: "/rollouts",
 icon: Briefcase,
 description: "Strategic guidance for your digital roadmap."
 },
 {
 title: "SAP Business Technology",
 link: "/integration/",
 icon: Cloud,
 description: "Leveraging BTP for innovation and integration."
 },
 {
 title: "Odoo Implementation",
 link: "/odooservices/implementation/",
 icon: Boxes,
 description: "Agile and scalable ERP solutions for growing businesses."
 },
 {
 title: "Cloud Migration",
 link: "/solutions/public-cloud",
 icon: Zap,
 description: "Seamless transition to secure cloud environments."
 },
 {
 title: "Security & Compliance",
 link: "/solutions/private-cloud",
 icon: ShieldCheck,
 description: "Ensuring data integrity and regulatory adherence."
 },
 {
 title: "Digital Transformation",
 link: "#",
 icon: ArrowRight,
 description: "Modernizing legacy systems for the digital age."
 },
];

const ServicesSection = () => {
 return (
 <section className="section-padding bg-slate-950 overflow-hidden relative">
 {/* Background decoration */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
 <div
 className="absolute inset-0 opacity-[0.03]"
 style={{
 backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
 backgroundSize: "32px 32px",
 }}
 />
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="text-center mb-16">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">What We Offer</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
 Our Core Services
 </h2>
 <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full" />
 </motion.div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 {sapSolutions.map((service, index) => (
 <motion.div
 key={service.title}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: index * 0.07 }}
 >
 <Link
 to={service.link}
 className="group block h-full p-6 rounded-2xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] hover:border-orange-500/40 transition-all duration-400 relative overflow-hidden"
 >
 {/* Glow effect on hover */}
 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
 <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
 </div>

 {/* Icon */}
 <div className="mb-5 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
 <service.icon className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-300" />
 </div>

 <h4 className="text-sm font-semibold text-white/90 mb-2 leading-snug group-hover:text-white transition-colors">
 {service.title}
 </h4>

 <p className="text-xs text-slate-500 mb-5 leading-relaxed group-hover:text-slate-400 transition-colors">
 {service.description}
 </p>

 <div className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400/60 group-hover:text-orange-400 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
 Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
 </div>

 {/* Bottom border accent */}
 <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 </Link>
 </motion.div>
 ))}
 </div>


 </div>
 </section>
 );
};

export default ServicesSection;

