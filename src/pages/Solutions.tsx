import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, ShoppingCart, Truck, Plane, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/home/CTASection";

const industries = [
  {
    icon: Building2,
    title: "Manufacturing",
    description: "Optimize production, supply chain, and quality management with integrated SAP solutions.",
  },
  {
    icon: Factory,
    title: "Mining & Metals",
    description: "Streamline operations and compliance with industry-specific SAP implementations.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Distribution",
    description: "Enhance customer experience and inventory management with real-time insights.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Improve fleet management, tracking, and delivery with integrated logistics solutions.",
  },
  {
    icon: Plane,
    title: "Aviation",
    description: "Specialized solutions for airline document processing and SAP integration.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Manage projects, resources, and financials with tailored SAP solutions.",
  },
];

const technologies = [
  { name: "SAP S/4HANA", category: "ERP" },
  { name: "SAP SuccessFactors", category: "HCM" },
  { name: "SAP Ariba", category: "Procurement" },
  { name: "SAP BTP", category: "Platform" },
  { name: "SAP Fiori", category: "UX" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Power BI", category: "Analytics" },
  { name: "Python", category: "Data Science" },
];

const innovations = [
  {
    title: "Auto Extract Tool",
    description: "An intelligent automation tool designed to simplify the handling of system-generated airline documents. It automatically extracts key information from airline PDFs, presents it in a structured format, and seamlessly exports verified data into SAP fields.",
    benefits: [
      "Automatic extraction from airline PDFs",
      "Structured, easy-to-review format",
      "Seamless SAP field integration",
      "Improved accuracy and efficiency",
    ],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Our Solutions"
          subtitle="Industry-specific solutions powered by cutting-edge technology"
          breadcrumbs={[{ name: "Solutions", path: "/solutions" }]}
        />

        {/* Industry Solutions */}
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
                Industry Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Solutions Tailored to Your Industry
              </h2>
              <p className="text-muted-foreground text-lg">
                We understand the unique challenges of your industry and deliver customized solutions that drive results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                      <industry.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
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
                Technology Stack
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Powered by Industry-Leading Technologies
              </h2>
              <p className="text-muted-foreground text-lg">
                We leverage the best technologies to deliver robust, scalable solutions.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card px-6 py-4 rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg group"
                >
                  <div className="text-center">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Spotlight */}
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
                Innovation
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Innovative Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                Custom-built tools and solutions designed to solve specific business challenges.
              </p>
            </motion.div>

            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-accent font-medium text-sm">Featured Solution</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      {innovation.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {innovation.description}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group">
                        Schedule a Demo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {innovation.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
