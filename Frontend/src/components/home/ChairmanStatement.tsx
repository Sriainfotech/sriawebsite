import { motion } from "framer-motion";

const ChairmanStatement = () => {
    return (
        <section className="section-padding bg-slate-950 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-[280px] flex-shrink-0"
                    >
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 blur-xl opacity-20 scale-110" />
                            {/* Gradient border frame */}
                            <div className="relative w-[220px] h-[220px] mx-auto rounded-full p-0.5 bg-gradient-to-br from-orange-500 to-amber-500 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454671/sria/chairman.jpg"
                                        alt="Chairman"
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quote content */}
                    <div className="flex-1">
                        {/* Large quote mark */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-orange-500/20 text-[120px] font-serif leading-none -mb-8 select-none"
                            aria-hidden
                        >
                            "
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-tight mb-6">
                                We are not just building software; we are architecting the future of enterprise intelligence.
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-400 text-lg leading-relaxed mb-8"
                        >
                            At SRIA Infotech, our mission goes beyond implementation. We strive to empower businesses with the agility and insight needed to thrive in a digital-first world. Our commitment to excellence and innovation is unwavering.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ originX: 0 }}
                            className="h-px bg-gradient-to-r from-orange-500/60 to-transparent mb-8"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <div>
                                <p className="font-bold text-lg text-white">Ashwini Ganji</p>
                                <p className="text-orange-400 text-sm font-medium">Chairman</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanStatement;

