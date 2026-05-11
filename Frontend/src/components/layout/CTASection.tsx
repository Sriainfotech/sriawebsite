import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-950">
      {/* Background world map animation */}
      <motion.div
        animate={{ x: [-50, 0, -50] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
          alt="World Map"
          className="w-[130%] h-full object-cover grayscale"
        />
      </motion.div>

      {/* Rich overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/80 to-slate-900/95" />

      {/* Animated glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-3xl"
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-sm text-white mb-10">
            <Globe className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium">Global Reach, Local Expertise</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Accelerate Your{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Digital Transformation?
            </span>
          </h2>

          <p className="text-lg text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed">
            Join industry leaders who trust SRIA Infotech for their most critical enterprise challenges. Let's build the future together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Link to="/contact">
                <button className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </motion.div>

            <Link to="/aboutus">
              <button className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white/[0.08] border border-white/20 text-white font-semibold text-base hover:bg-white/[0.15] hover:border-white/30 hover:scale-105 transition-all duration-300">
                Learn About Us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
