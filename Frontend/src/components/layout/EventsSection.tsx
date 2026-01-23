import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";
import siteData from "@/data/siteData.json";

const EventsSection = () => {
    const events = siteData.events.map(event => ({
        ...event,
        image: event.image.startsWith('/') ? event.image : heroServices
    }));

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Upcoming Events</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-foreground">Join Us Globally</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-4 md:mt-0"
                    >
                        <p className="text-muted-foreground max-w-md text-right">
                            Connect with our experts at the world's leading technology conferences and summits.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
                                        {event.tag}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-2xl text-center min-w-[70px] shadow-sm">
                                    <span className="block text-[10px] font-bold text-muted-foreground uppercase">{event.date.split(" ")[0]}</span>
                                    <span className="block text-xl font-bold text-primary">{event.date.split(" ")[1].replace(",", "")}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                    <MapPin className="w-4 h-4 text-primary" /> {event.venue}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem]">
                                    {event.title}
                                </h3>
                                <div className="w-full h-px bg-slate-100 mb-6" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm font-bold text-primary cursor-pointer group/btn">
                                        Register Now
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
                                        <Calendar className="w-3 h-3" />
                                        {event.date.split(",")[1]}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
