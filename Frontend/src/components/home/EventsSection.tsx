import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

import siteData from "@/data/siteData.json";

const EventsSection = () => {
 const events = siteData.events.map(event => ({
 ...event,
 image: event.image.startsWith('/') ? event.image : heroServices,
 location: event.venue // Map venue to location for compatibility with existing JSX
 }));
 return (
 <section className="section-padding bg-slate-50">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="text-primary font-semibold tracking-wider uppercase text-sm">Upcoming Events</span>
 <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 text-foreground">Join Us Globally</h2>
 </div>

 <div className="grid md:grid-cols-3 gap-8">
 {events.map((event, index) => (
 <motion.div
 key={event.title}
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.2 }}
 className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
 >
 <div className="relative h-64 overflow-hidden">
 <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />

 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg text-center min-w-[70px] shadow-sm">
 <span className="block text-xs font-bold text-muted-foreground uppercase">{event.date.split(" ")[0]}</span>
 <span className="block text-2xl font-bold text-primary">{event.date.split(" ")[1]}</span>
 </div>
 </div>

 <div className="p-6">
 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
 <MapPin className="w-4 h-4" /> {event.location}
 </div>
 <h3 className="text-base font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
 <div className="w-full h-px bg-gray-100 mb-4" />
 <div className="flex items-center justify-between text-sm font-semibold text-primary cursor-pointer">
 Register Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

