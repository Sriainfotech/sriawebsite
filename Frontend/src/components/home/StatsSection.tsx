import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, Briefcase, Globe } from "lucide-react";

const stats = [
    { value: 10, suffix: "+", label: "Years of Excellence", icon: Trophy },
    { value: 50, suffix: "+", label: "Satisfied Clients", icon: Users },
    { value: 50, suffix: "+", label: "Projects Delivered", icon: Briefcase },
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
        <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300">
            {displayValue}{suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80" alt="Technology background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/90" />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px"
                    }}
                />
            </div>

            {/* Glow orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-amber-500/8 rounded-full blur-3xl" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-400 p-10 lg:p-12"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                className="mb-5 inline-flex p-3 rounded-2xl bg-white/8 border border-white/10 text-white group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-all duration-300"
                            >
                                <stat.icon className="w-6 h-6 text-slate-400 group-hover:text-orange-400 transition-colors duration-300" />
                            </motion.div>

                            <div className="mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-slate-400 font-medium text-sm tracking-wide">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;

