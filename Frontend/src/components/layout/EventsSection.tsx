import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import siteData from "@/data/siteData.json";

const EventsSection = () => {
  const events = siteData.events;

  if (!events.length) return null;

  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-slate-500 font-semibold tracking-widest uppercase text-xs mb-3">Recent Events</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Where We've Been</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 md:mt-0"
          >
            <p className="text-slate-500 text-sm max-w-sm text-right leading-relaxed">
              A look back at conferences, launches, and community milestones our team has been part of.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {event.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur p-3 rounded-xl text-center min-w-[60px] shadow-sm">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase">{event.date.split(" ")[0]}</span>
                  <span className="block text-lg font-black text-slate-800">{event.date.split(" ")[1]?.replace(",", "")}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{event.venue}</span>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-5 line-clamp-2 leading-snug min-h-[2.8rem]">
                  {event.title}
                </h3>
                <div className="h-px bg-slate-100 mb-5" />
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs">
                    {/* <ExternalLink className="w-3.5 h-3.5" />
                    View Details */}
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
