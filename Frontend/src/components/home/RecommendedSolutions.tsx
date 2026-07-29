import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud, Database, Layers, Shield, ArrowRight } from "lucide-react";

const solutions = [
 {
 icon: Layers,
 image: "https://ik.imagekit.io/hps6th7vy/sria/services/service-sap.jpg?tr=f-auto,q-auto,w-640",
 alt: "SAP analytics dashboard interface",
 title: "SAP S/4HANA",
 description: "End-to-end implementation and migration services for intelligent enterprise solutions.",
 link: "/services/sap-s4hana-implementation",
 },
 {
 icon: Cloud,
 image: "https://ik.imagekit.io/hps6th7vy/sria/services/service-cloud.jpg?tr=f-auto,q-auto,w-640",
 alt: "Cloud computing data center servers",
 title: "Cloud Solutions",
 description: "Seamless cloud migration and management with SAP Business Technology Platform.",
 link: "/solutions/btp",
 },
 {
 icon: Database,
 image: "https://ik.imagekit.io/hps6th7vy/sria/services/service-digital.jpg?tr=f-auto,q-auto,w-640",
 alt: "Digital transformation analytics dashboard",
 title: "Data Analytics",
 description: "Transform data into actionable insights for informed decision-making.",
 link: "/services/data-analytics",
 },
 {
 icon: Shield,
 image: "https://ik.imagekit.io/hps6th7vy/sria/services/service-managed.jpg?tr=f-auto,q-auto,w-640",
 alt: "IT support team monitoring servers",
 title: "Managed Services",
 description: "Comprehensive application management and support services.",
 link: "/services/sap-support-maintenance",
 },
];

const RecommendedSolutions = () => {
 return (
 <section className="section-padding bg-background overflow-hidden">
 <div className="container-custom">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-16"
 >
 <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2">Recommended Solutions</h2>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {solutions.map((solution, index) => (
 <motion.div
 key={solution.title}
 initial={{ opacity: 0, y: 100 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
 >
 <Link
 to={solution.link}
 className="group relative block bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
 >
 {/* Image Area */}
 <div className="h-48 overflow-hidden relative">
 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
 <img
 src={solution.image}
 alt={solution.alt}
 width={320}
 height={192}
 loading="lazy"
 decoding="async"
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm">
 <solution.icon className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
 </div>
 </div>

 {/* Content */}
 <div className="p-6 relative z-20 bg-card">
 <h3 className="font-heading font-bold text-base text-foreground mb-3 group-hover:text-primary transition-colors">
 {solution.title}
 </h3>
 <p className="text-muted-foreground text-sm leading-relaxed mb-6">
 {solution.description}
 </p>

 <div className="flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
 Learn More
 <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
 </div>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default RecommendedSolutions;

