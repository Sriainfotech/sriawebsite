import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";

const ChairmanStatement = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 relative"
                    >
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                            <img src={aboutTeam} alt="Chairman" className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-0" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full -z-0" />
                    </motion.div>

                    <div className="lg:w-2/3 space-y-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground leading-tight">
                                "We are not just building software; we are architecting the future of enterprise intelligence."
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base text-muted-foreground leading-relaxed"
                        >
                            At SRIA Infotech, our mission goes beyond implementation. We strive to empower businesses with the agility and insight needed to thrive in a digital-first world. Our commitment to excellence and innovation is unwavering.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-px bg-gray-200"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <p className="font-bold text-lg text-foreground">John Doe</p>
                            <p className="text-primary text-sm font-medium">Chairman & CEO</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanStatement;
