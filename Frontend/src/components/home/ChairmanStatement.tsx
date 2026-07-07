import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const leaders = [
    {
        role: "Chairman",
        name: "Ashwini Ganji",
        image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454671/sria/chairman.jpg",
        quote: "We are not just building software; we are architecting the future of enterprise intelligence.",
        body: "At SRIA Infotech, our mission goes beyond implementation. We strive to empower businesses with the agility and insight needed to thrive in a digital-first world. Our commitment to excellence and innovation is unwavering.",
    },
    {
        role: "Founder",
        name: "Sai Kumar Bonakurthi",
        image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454671/sria/sai.png",
        quote: "Innovation is not about being first — it is about being relentlessly relevant in a world that never stops evolving.",
        body: "SRIA Infotech was born from a conviction that technology, when thoughtfully applied, can unlock the full potential of any enterprise. From our earliest days, we set out not merely to deliver solutions, but to become the strategic backbone on which our clients build their most ambitious futures.",
    },
    {
        role: "Co-Founder",
        name: "Ravikumar Rangari",
        image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454671/sria/ravi.png",
        quote: "Exceptional teams build exceptional products. Culture is the architecture that makes everything else possible.",
        body: "At SRIA Infotech, our people are our greatest differentiator. I have dedicated my tenure to fostering an environment where curiosity thrives, accountability is shared, and every team member feels the weight and the privilege of co-creating our clients' success stories.",
    },
    // {
    //     role: "Co-Founder & CTO",
    //     name: "Arjun Venkatesh",
    //     image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454671/sria/cofounder2.jpg",
    //     quote: "Sustainable digital transformation is built on trust, precision, and the courage to architect for tomorrow — not just today.",
    //     body: "Technology evolves rapidly, but the principles of sound engineering endure. My role is to ensure that the platforms we build today are resilient, scalable, and ready for challenges that do not yet exist — so our clients are never constrained by their infrastructure when opportunity arrives.",
    // },
];

const ChairmanStatement = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    return (
        <section className="section-padding bg-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
                        Leadership Vision
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                        Voices That Shape SRIA Infotech
                    </h2>
                </motion.div>

                {/* Carousel viewport */}
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                        {leaders.map((leader, i) => (
                            <div key={i} className="min-w-0 flex-[0_0_100%]">
                                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-1">

                                    {/* Portrait */}
                                    <div className="lg:w-[280px] flex-shrink-0">
                                        <div className="relative">
                                            {/* Glow ring */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-orange-500 to-amber-500 blur-xl opacity-20 scale-110" />
                                            {/* Gradient border */}
                                            <div className="relative w-[220px] h-[220px] mx-auto rounded-full p-0.5 bg-gradient-to-br from-orange-500 to-amber-500 shadow-2xl">
                                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                                                    <img
                                                        src={leader.image}
                                                        alt={leader.name}
                                                        className="w-full h-full object-cover transition-all duration-700"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src =
                                                                `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=0f172a&color=f97316&size=220&bold=true`;
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Role badge */}
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                                                {leader.role}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote content */}
                                    <div className="flex-1 pt-4 lg:pt-0">
                                        {/* Decorative quote mark */}
                                        <div
                                            className="text-orange-500/20 text-[64px] font-serif leading-none -mb-6 select-none"
                                            aria-hidden
                                        >
                                            "
                                        </div>

                                        <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-slate-900 leading-tight mb-4">
                                            {leader.quote}
                                        </h3>

                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                                            {leader.body}
                                        </p>

                                        {/* Gradient divider */}
                                        <div className="h-px bg-gradient-to-r from-orange-500/60 to-transparent mb-6" />

                                        {/* Attribution */}
                                        <div>
                                            <p className="font-bold text-base text-slate-900">{leader.name}</p>
                                            <p className="text-orange-500 text-sm font-medium">{leader.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center items-center gap-1.5 mt-12">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`transition-all duration-300 rounded-full ${index === selectedIndex
                                ? "w-4 h-1.5 bg-orange-500"
                                : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChairmanStatement;
