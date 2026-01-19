import { motion } from "framer-motion";
import { Cloud, Database, Layers, Shield, Cog, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "SAP S/4HANA",
    description: "End-to-end implementation and migration services for intelligent enterprise solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and management with SAP Business Technology Platform.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform data into actionable insights for informed decision-making.",
  },
  {
    icon: Shield,
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
              <div className="relative bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
