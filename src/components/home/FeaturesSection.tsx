import { motion } from "framer-motion";
import { Cloud, Database, Layers, Shield } from "lucide-react";
import serviceSap from "@/assets/service-sap.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceManaged from "@/assets/service-managed.jpg";

const features = [
  {
    icon: Layers,
    image: serviceSap,
    title: "SAP S/4HANA",
    description: "End-to-end implementation and migration services for intelligent enterprise solutions.",
  },
  {
    icon: Cloud,
    image: serviceCloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and management with SAP Business Technology Platform.",
  },
  {
    icon: Database,
    image: serviceDigital,
    title: "Data Analytics",
    description: "Transform data into actionable insights for informed decision-making.",
  },
  {
    icon: Shield,
    image: serviceManaged,
    title: "Managed Services",
    description: "Comprehensive application management and support services.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
