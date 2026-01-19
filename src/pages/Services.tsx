import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Cloud, Code, Settings, Database, LineChart, Cog, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    icon: Server,
    title: "SAP S/4HANA Implementation Services",
    description: "End-to-end implementation services for SAP S/4HANA, enabling intelligent enterprise operations with real-time insights and analytics. Our certified consultants ensure a smooth transition to the next-generation ERP system.",
    features: ["Business Process Optimization", "System Configuration", "Data Migration", "User Training & Support"],
  },
  {
    icon: Cloud,
    title: "SAP S/4HANA Migration Services",
    description: "Seamless migration to SAP S/4HANA from legacy systems with minimal disruption. We ensure data integrity, business continuity, and optimized performance throughout the migration journey.",
    features: ["Assessment & Planning", "System Conversion", "Data Quality Management", "Post-Migration Support"],
  },
  {
    icon: Code,
    title: "SAP Fiori Development Services",
    description: "Custom Fiori applications that deliver modern, intuitive user experiences across all devices. We design and develop responsive apps that enhance productivity and user adoption.",
    features: ["Custom App Development", "UX/UI Design", "Cross-Platform Compatibility", "Performance Optimization"],
  },
  {
    icon: Settings,
    title: "SAP S/4HANA Application Management (AMS)",
    description: "Comprehensive application management services to optimize performance, ensure system stability, and reduce operational costs. Our proactive approach prevents issues before they impact your business.",
    features: ["24/7 Monitoring", "Incident Management", "Performance Tuning", "Regular Health Checks"],
  },
  {
    icon: Cog,
    title: "SAP S/4HANA Consulting Services",
    description: "Expert consulting services to help you leverage the full potential of SAP S/4HANA. From strategy to execution, we guide you through your digital transformation journey.",
    features: ["Digital Strategy", "Process Reengineering", "Change Management", "ROI Analysis"],
  },
  {
    icon: Database,
    title: "SAP Business Technology Platform",
    description: "Leverage SAP BTP to integrate, extend, and innovate with cloud-native development and analytics. Build intelligent applications that connect your enterprise.",
    features: ["Integration Services", "Extension Development", "Analytics & AI", "API Management"],
  },
  {
    icon: Shield,
    title: "Microsoft Managed Services",
    description: "Comprehensive Microsoft solutions management including Azure, Office 365, and Dynamics 365. We ensure optimal performance and security of your Microsoft ecosystem.",
    features: ["Azure Infrastructure", "Microsoft 365 Management", "Security & Compliance", "Licensing Optimization"],
  },
  {
    icon: LineChart,
    title: "Data Analytics Solutions",
    description: "Transform raw data into actionable insights with advanced analytics solutions. We help you make informed decisions with real-time dashboards and predictive analytics.",
    features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your current systems, business processes, and goals to understand your unique requirements.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our experts develop a tailored roadmap aligned with your business objectives and timeline.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the solution with precision, ensuring minimal disruption to your operations.",
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing support and optimization to ensure your systems deliver maximum value.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Our Services"
          subtitle="Comprehensive SAP and digital transformation solutions for modern enterprises"
          breadcrumbs={[{ name: "Services", path: "/services" }]}
        />

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our SAP Managed Services Offerings
              </h2>
              <p className="text-muted-foreground text-lg">
                We deliver end-to-end SAP solutions that drive business transformation and operational excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 flex-shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                              <Zap className="w-3 h-3 text-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                How We Deliver Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                A proven methodology that ensures successful outcomes for every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <span className="text-7xl font-heading font-bold text-primary/10">
                        {item.step}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-accent-foreground font-bold">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/4 right-0 translate-x-1/2 w-8">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
