import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import siteData from "@/data/siteData.json";

const FALLBACK_AVATAR = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80";

const testimonials = siteData.testimonials.map(t => ({
  ...t,
  image: t.image.startsWith("/") ? t.image : FALLBACK_AVATAR,
}));

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Client Success</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-slate-100 rounded-2xl p-7 hover:border-orange-200 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote badge */}
              <div className="absolute -top-3.5 -right-3.5 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Quote className="w-5 h-5 text-white fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-5 group-hover:bg-orange-100 transition-colors" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-100 group-hover:ring-orange-300 transition-all"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                    {testimonial.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100">
                        <CheckCircle className="w-2.5 h-2.5" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-orange-500 font-medium mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
