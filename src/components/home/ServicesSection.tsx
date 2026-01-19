import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceSap from "@/assets/service-sap.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceManaged from "@/assets/service-managed.jpg";

const services = [
  {
    image: serviceSap,
    title: "SAP S/4HANA Implementation",
    description: "End-to-end implementation services for SAP S/4HANA, enabling intelligent enterprise operations with real-time insights.",
  },
  {
    image: serviceCloud,
    title: "SAP S/4HANA Migration",
    description: "Seamless migration to SAP S/4HANA with minimal disruption, ensuring data integrity and business continuity.",
  },
  {
    image: serviceDigital,
    title: "Digital Transformation",
    description: "Custom digital solutions that deliver modern, intuitive user experiences across all devices and platforms.",
  },
  {
    image: serviceManaged,
    title: "Managed Services",
    description: "Comprehensive SAP S/4HANA application management services to optimize performance and reduce operational costs.",
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
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive SAP Managed Services
          </h2>
          <p className="section-subtitle mx-auto">
            We offer a full spectrum of SAP solutions designed to transform your business 
            operations and drive digital excellence.
          </p>
        </motion.div>

        {/* Services Grid with Images */}
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
              <div className="image-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
