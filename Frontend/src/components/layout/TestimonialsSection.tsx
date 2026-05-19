import { motion } from "framer-motion";
import siteData from "@/data/siteData.json";

const testimonials = siteData.testimonials;

const getInitials = (name: string) => {
  const parts = name.replace(/[.\-]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
};

const avatarGradients = [
  "from-orange-500 to-amber-400",
  "from-violet-500 to-purple-400",
  "from-sky-500 to-blue-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-400",
  "from-amber-500 to-yellow-400",
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-slate-100 rounded-2xl p-7 hover:border-orange-200 hover:shadow-xl transition-all duration-300 relative flex flex-col"
            >
              {/* Large decorative quotation mark */}
              <div className="text-orange-100 font-serif text-[80px] leading-none -mb-4 select-none" aria-hidden>
                &ldquo;
              </div>

              {/* Review */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {testimonial.review}
              </p>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-5 group-hover:bg-orange-100 transition-colors" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <span className="text-white font-bold text-sm leading-none select-none">
                    {getInitials(testimonial.name)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
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
