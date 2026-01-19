import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Cloud, Code, Settings, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Server,
    title: "SAP S/4HANA Implementation",
    description: "End-to-end implementation services for SAP S/4HANA, enabling intelligent enterprise operations with real-time insights.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Cloud,
    title: "SAP S/4HANA Migration",
    description: "Seamless migration to SAP S/4HANA with minimal disruption, ensuring data integrity and business continuity.",
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-600",
  },
  {
    icon: Code,
    title: "SAP Fiori Development",
    description: "Custom Fiori applications that deliver modern, intuitive user experiences across all devices and platforms.",
    color: "from-violet-500/20 to-violet-600/20",
    iconColor: "text-violet-600",
  },
  {
    icon: Settings,
    title: "Application Management (AMS)",
    description: "Comprehensive SAP S/4HANA application management services to optimize performance and reduce operational costs.",
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: Database,
    title: "SAP Business Technology Platform",
    description: "Leverage SAP BTP to integrate, extend, and innovate with cloud-native development and analytics.",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-600",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics solutions for informed decision-making.",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Comprehensive SAP Managed Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full spectrum of SAP solutions designed to transform your business 
            operations and drive digital excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
