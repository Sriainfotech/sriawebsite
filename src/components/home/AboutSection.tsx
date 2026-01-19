import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import aboutOffice from "@/assets/about-office.jpg";

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
            <div className="grid grid-cols-2 gap-4">
              <div className="image-card">
                <img 
                  src={aboutTeam} 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="image-card mt-8">
                <img 
                  src={aboutOffice} 
                  alt="Office environment" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary shadow-xl rounded-xl p-6 text-primary-foreground"
            >
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold">10+</p>
                  <p className="text-sm opacity-80">Years</p>
                </div>
                <div className="w-px h-12 bg-primary-foreground/30" />
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold">100+</p>
                  <p className="text-sm opacity-80">Clients</p>
                </div>
                <div className="w-px h-12 bg-primary-foreground/30" />
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold">3</p>
                  <p className="text-sm opacity-80">Offices</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="section-title">
              What Sets Us Apart: Partner-Centric Approach
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
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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
