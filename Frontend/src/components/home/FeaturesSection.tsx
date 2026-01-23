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
    <section className="py-12 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md">
                      <feature.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
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
