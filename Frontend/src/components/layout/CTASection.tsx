import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroContact from "@/assets/hero-contact.jpg";

const CTASection = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background World Map Animation */}
            <motion.div
                animate={{ x: [-50, 0, -50] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
            >
                <img
                    src={heroContact}
                    alt="World Map"
                    className="w-[120%] h-full object-cover grayscale"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-gray-10 via-gray-10 to-gray-10" />

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-8 backdrop-blur-sm border border-white/20">
                        <Globe className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-medium">Global Reach, Local Expertise</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                        Ready to Accelerate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Digital Transformation?</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join industry leaders who trust SRIA Infotech for their most critical enterprise challenges. Let's build the future together.
                    </p>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-8 text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 font-bold"
                            >
                                Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
