import { motion } from "framer-motion";
import { ArrowRight, Server, Cloud, Code, Settings, Database, LineChart, Cog, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";
import heroServices from "@/assets/hero-services.jpg";
import serviceSap from "@/assets/service-sap.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceManaged from "@/assets/service-managed.jpg";

const services = [
  { icon: Server, image: serviceSap, title: "SAP S/4HANA Implementation", description: "End-to-end implementation services for SAP S/4HANA with real-time insights.", features: ["Business Process Optimization", "System Configuration", "Data Migration", "User Training"] },
  { icon: Cloud, image: serviceCloud, title: "SAP S/4HANA Migration", description: "Seamless migration with minimal disruption ensuring business continuity.", features: ["Assessment & Planning", "System Conversion", "Data Quality", "Post-Migration Support"] },
  { icon: Code, image: serviceDigital, title: "SAP Fiori Development", description: "Custom Fiori apps with modern, intuitive UX across all devices.", features: ["Custom Development", "UX/UI Design", "Cross-Platform", "Performance Tuning"] },
  { icon: Settings, image: serviceManaged, title: "Application Management (AMS)", description: "Comprehensive services to optimize performance and reduce costs.", features: ["24/7 Monitoring", "Incident Management", "Performance Tuning", "Health Checks"] },
];

const process = [
  { step: "01", title: "Discovery", description: "Analyze your systems and goals." },
  { step: "02", title: "Strategy", description: "Develop a tailored roadmap." },
  { step: "03", title: "Implementation", description: "Execute with precision." },
  { step: "04", title: "Support", description: "Ongoing optimization." },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Our Services" subtitle="Comprehensive SAP and digital transformation solutions" breadcrumbs={[{ name: "Services", path: "/services" }]} backgroundImage={heroServices} />

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">What We Offer</span>
            <h2 className="section-title">SAP Managed Services</h2>
            <p className="section-subtitle mx-auto">End-to-end SAP solutions that drive business transformation.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="bg-card rounded-xl border border-border hover:shadow-lg transition-all overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-base mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-foreground"><Zap className="w-4 h-4 text-primary" />{f}</li>))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Process</span>
            <h2 className="section-title">How We Deliver</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center relative">
                <span className="text-7xl font-heading font-bold text-primary/10">{item.step}</span>
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"><span className="text-primary-foreground text-base font-bold">{index + 1}</span></div></div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mt-6 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.description}</p>
                {index < 3 && <div className="hidden md:block absolute top-8 right-0 translate-x-1/2"><ArrowRight className="w-6 h-6 text-primary" /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
