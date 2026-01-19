import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Partner-centric approach with trust and integrity",
  "Timely responses and transparent interactions",
  "Committed to being humble in our dealings",
  "Focus on effective communication",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-heading font-bold mb-2">10+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-heading font-bold mb-2">100+</div>
                    <div className="text-sm opacity-80">Happy Clients</div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-heading font-bold mb-2">500+</div>
                    <div className="text-sm opacity-80">Projects Done</div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-heading font-bold mb-2">3</div>
                    <div className="text-sm opacity-80">Global Offices</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-card shadow-xl rounded-xl p-6 border border-border max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Global Presence</p>
                    <p className="text-sm text-muted-foreground">India & USA</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-accent/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What Sets Us Apart:{" "}
              <span className="text-primary">Partner-Centric Approach</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our partner-centric approach sets us apart, as we believe in establishing 
              strong relationships built on trust, integrity, and effective communication. 
              We are committed to being humble in our dealings, providing timely responses, 
              and fostering transparent interactions with our clients.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 group">
                Discover More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
