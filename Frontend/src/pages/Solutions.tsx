import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import heroSolutions from "@/assets/hero-solutions.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, ShoppingCart, Truck, Plane, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Building2, title: "Manufacturing", description: "Optimize production and supply chain with SAP solutions." },
  { icon: Factory, title: "Mining & Metals", description: "Streamline operations with industry-specific SAP." },
  { icon: ShoppingCart, title: "Retail & Distribution", description: "Enhance customer experience with real-time insights." },
  { icon: Truck, title: "Logistics", description: "Improve fleet management and delivery tracking." },
  { icon: Plane, title: "Aviation", description: "Specialized solutions for airline document processing." },
  { icon: Briefcase, title: "Professional Services", description: "Manage projects and resources with SAP." },
];

const technologies = [
  { name: "SAP S/4HANA", category: "ERP" }, { name: "SAP SuccessFactors", category: "HCM" },
  { name: "SAP Ariba", category: "Procurement" }, { name: "SAP BTP", category: "Platform" },
  { name: "SAP Fiori", category: "UX" }, { name: "Microsoft Azure", category: "Cloud" },
];

const Solutions = () => (
  <div className="min-h-screen">
    <PageHeader title="Our Solutions" subtitle="Industry-specific solutions powered by cutting-edge technology" breadcrumbs={[{ name: "Solutions", path: "/solutions" }]} backgroundImage={heroSolutions} />

    <section className="section-padding">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Industry Solutions</span>
          <h2 className="section-title">Tailored to Your Industry</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <ind.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{ind.title}</h3>
                <p className="text-muted-foreground">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Technology Stack</span>
          <h2 className="section-title">Industry-Leading Technologies</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card px-6 py-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
              <p className="font-semibold text-foreground">{tech.name}</p>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Solutions;
