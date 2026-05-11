import { motion } from "framer-motion";
import { CheckCircle2, Database, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const expertiseData = {
 sap: {
 title: "Enterprise Solutions (SAP)",
 icon: Cloud,
 color: "orange",
 items: [
 { title: "SAP Financial Management", tagline: "Real-time, Automated, Insightful financial operations.", link: "/solutions/financial" },
 { title: "SAP Private Cloud", tagline: "Intelligent, Real-time, Seamless cloud transformation.", link: "/solutions/private-cloud" },
 { title: "SAP SuccessFactors", tagline: "Talent, Workforce, Experience management solutions.", link: "/solutions/successfactors" },
 { title: "SAP CPI", tagline: "Integrated, Predictive, Intelligent connectivity.", link: "/solutions/cpi" },
 { title: "SAP Public Cloud", tagline: "Scalable, Modern, Efficient ERP in the cloud.", link: "/solutions/public-cloud" },
 ],
 },
 analytics: {
 title: "Data Analytics",
 icon: Database,
 color: "blue",
 items: [
 { title: "Business Intelligence", tagline: "Transform raw data into actionable business insights.", link: "/additionalServices/dataanalytics" },
 { title: "Predictive Analytics", tagline: "Anticipate market trends with AI-driven forecasting.", link: "/additionalServices/dataanalytics" },
 { title: "Data Visualization", tagline: "Interactive dashboards for real-time decision making.", link: "/additionalServices/dataanalytics" },
 { title: "Big Data Solutions", tagline: "Scalable architecture for processing massive datasets.", link: "/additionalServices/dataanalytics" },
 ],
 },
};

const SolutionsGrid = () => {
 return (
 <section className="section-padding bg-white overflow-hidden relative">
 {/* Background accent */}
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
 {/* Section header */}
 <div className="text-center mb-20">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Our Depth</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
 Our Expertise
 </h2>
 <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full" />
 </motion.div>
 </div>

 <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
 {/* SAP Expertise */}
 <motion.div
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="relative"
 >
 <div className="rounded-3xl border border-slate-100 bg-white p-10 h-full overflow-hidden">
 {/* Image header strip */}
 <div className="relative h-44 -mx-10 -mt-10 mb-8 overflow-hidden rounded-t-3xl">
 <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" alt="SAP Solutions" className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
 <div className="absolute bottom-4 left-6 flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-orange-500/30 backdrop-blur-sm border border-orange-400/30 flex items-center justify-center">
 <expertiseData.sap.icon className="w-5 h-5 text-orange-300" />
 </div>
 <div>
 <h3 className="text-sm font-bold text-white">{expertiseData.sap.title}</h3>
 <p className="text-xs text-white/60 mt-0.5">{expertiseData.sap.items.length} solutions available</p>
 </div>
 </div>
 </div>

 <div className="space-y-0 divide-y divide-orange-100/60">
 {expertiseData.sap.items.map((item, idx) => (
 <Link key={idx} to={item.link}>
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: idx * 0.08 }}
 className="group flex items-start gap-4 py-5 hover:bg-orange-50/50 -mx-2 px-2 rounded-xl transition-colors duration-200"
 >
 <div className="mt-0.5 w-6 h-6 rounded-full border border-orange-200 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
 <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 group-hover:text-white transition-colors" />
 </div>
 <div className="flex-1 min-w-0">
 <h4 className="text-base font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
 {item.title}
 </h4>
 <p className="text-sm text-slate-500 mt-0.5">{item.tagline}</p>
 </div>
 <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 flex-shrink-0 mt-0.5 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
 </motion.div>
 </Link>
 ))}
 </div>
 </div>
 </motion.div>

 {/* Data Analytics Expertise */}
 <motion.div
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="relative"
 >
 <div className="rounded-3xl border border-slate-100 bg-white p-10 h-full overflow-hidden">
 {/* Image header strip */}
 <div className="relative h-44 -mx-10 -mt-10 mb-8 overflow-hidden rounded-t-3xl">
 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80" alt="Data Analytics" className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
 <div className="absolute bottom-4 left-6 flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center">
 <expertiseData.analytics.icon className="w-5 h-5 text-blue-300" />
 </div>
 <div>
 <h3 className="text-sm font-bold text-white">{expertiseData.analytics.title}</h3>
 <p className="text-xs text-white/60 mt-0.5">{expertiseData.analytics.items.length} solutions available</p>
 </div>
 </div>
 </div>

 <div className="space-y-0 divide-y divide-blue-100/60">
 {expertiseData.analytics.items.map((item, idx) => (
 <Link key={idx} to={item.link}>
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: idx * 0.08 }}
 className="group flex items-start gap-4 py-5 hover:bg-blue-50/50 -mx-2 px-2 rounded-xl transition-colors duration-200"
 >
 <div className="mt-0.5 w-6 h-6 rounded-full border border-blue-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
 <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 group-hover:text-white transition-colors" />
 </div>
 <div className="flex-1 min-w-0">
 <h4 className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
 {item.title}
 </h4>
 <p className="text-sm text-slate-500 mt-0.5">{item.tagline}</p>
 </div>
 <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 flex-shrink-0 mt-0.5 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
 </motion.div>
 </Link>
 ))}
 </div>
 </div>
 </motion.div>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.4 }}
 className="mt-16 text-center"
 >
 <Link to="/contactus">
 <button className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-9 py-4 text-sm rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
 Get Started with Our Expertise
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </button>
 </Link>
 </motion.div>
 </div>
 </section>
 );
};

export default SolutionsGrid;

