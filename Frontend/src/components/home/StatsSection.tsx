import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, Briefcase, Globe } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Years of Excellence", icon: Trophy },
  { value: 100, suffix: "+", label: "Satisfied Clients", icon: Users },
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Briefcase },
  { value: 3, suffix: "", label: "Global Offices", icon: Globe },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-primary-foreground">
      {displayValue}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroServices}
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800/80" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="mb-4 inline-flex p-3 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300"
              >
                <stat.icon className="w-6 h-6" />
              </motion.div>
              <div className="mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
