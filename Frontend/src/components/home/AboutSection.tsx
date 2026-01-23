import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  "Partner-centric approach with trust and integrity",
  "Timely responses and transparent interactions",
  "Committed to being humble in our dealings",
  "Focus on effective communication",
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image Side - Slide In */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border-2 border-white">
              <img
                src={aboutTeam}
                alt="Innovation Team"
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold mb-1">Innovation Hub</p>
                <p className="text-sm opacity-90">Driving Digital Excellence</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-3xl -z-10" />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-4 bg-white p-3 rounded-lg shadow-lg z-20 flex items-center gap-2 border border-gray-100"
            >
              <div className="bg-primary/10 p-1.5 rounded-md">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Future Ready</p>
                <p className="text-[10px] text-muted-foreground">AI & Cloud Native</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side - Line by Line Fade */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">About Us</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mt-1 text-foreground">
                What Sets Us Apart: <br />
                <span className="text-primary">Partner-Centric Approach</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base leading-relaxed"
            >
              Our partner-centric approach sets us apart, as we believe in establishing
              strong relationships built on trust, integrity, and effective communication.
              We are committed to being humble in our dealings, providing timely responses,
              and fostering transparent interactions with our clients.
            </motion.p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-4 text-sm rounded-full shadow-md shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  Discover More
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
