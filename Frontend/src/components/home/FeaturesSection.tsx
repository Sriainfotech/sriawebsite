import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, CloudCog, BarChart3, HeartPulse, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: GitBranch,
    number: "01",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    title: "SAP S/4HANA",
    subtitle: "Intelligent Enterprise Platform",
    description:
      "End-to-end implementation and migration services that modernise your core ERP. We guide you through every phase — from blueprinting to go-live — ensuring minimal disruption.",
    highlights: ["Greenfield & Brownfield", "RISE with SAP", "Data Migration", "Post Go-Live Support"],
    link: "/implement",
    color: "orange",
  },
  {
    icon: CloudCog,
    number: "02",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    title: "Cloud Solutions",
    subtitle: "SAP Business Technology Platform",
    description:
      "Seamless cloud migration and platform management. We leverage SAP BTP and hyperscaler partnerships to build scalable, secure, and future-ready cloud architectures.",
    highlights: ["SAP BTP Integration", "Multi-Cloud Strategy", "Lift & Shift", "Cloud-Native Dev"],
    link: "/solutions/public-cloud",
    color: "sky",
  },
  {
    icon: BarChart3,
    number: "03",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    title: "Data Analytics",
    subtitle: "Insight-Driven Decision Making",
    description:
      "Transform raw data into strategic advantage. Our analytics practice covers SAP Analytics Cloud, embedded AI, and real-time dashboards that empower every layer of your organisation.",
    highlights: ["SAP Analytics Cloud", "Predictive AI", "Real-Time Dashboards", "Data Warehousing"],
    link: "/additionalServices/dataanalytics",
    color: "violet",
  },
  {
    icon: HeartPulse,
    number: "04",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    title: "Managed Services",
    subtitle: "Continuous Application Excellence",
    description:
      "Keep your SAP landscape healthy with proactive monitoring, SLA-backed support, and continuous optimisation. Our AMS team acts as an extension of your IT function.",
    highlights: ["24 / 7 Monitoring", "SLA-Based Support", "AMS & Optimisation", "Incident Management"],
    link: "/support-maintainance",
    color: "emerald",
  },
];

const accentClasses: Record<string, { tab: string; badge: string; dot: string; glow: string }> = {
  orange:  { tab: "border-orange-500 bg-orange-500/5",  badge: "bg-orange-500/15 border-orange-500/25 text-orange-400",  dot: "bg-orange-500",  glow: "bg-orange-500/10" },
  sky:     { tab: "border-sky-500 bg-sky-500/5",        badge: "bg-sky-500/15 border-sky-500/25 text-sky-400",            dot: "bg-sky-400",     glow: "bg-sky-500/10" },
  violet:  { tab: "border-violet-500 bg-violet-500/5",  badge: "bg-violet-500/15 border-violet-500/25 text-violet-400",  dot: "bg-violet-400",  glow: "bg-violet-500/10" },
  emerald: { tab: "border-emerald-500 bg-emerald-500/5",badge: "bg-emerald-500/15 border-emerald-500/25 text-emerald-400",dot: "bg-emerald-400", glow: "bg-emerald-500/10" },
};

const FeaturesSection = () => {
  const [active, setActive] = useState(0);
  const current = features[active];
  const accent = accentClasses[current.color];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">What We Do</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">
                Core Capabilities
              </h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              From SAP implementations to cloud migrations — our expertise spans the full digital transformation journey.
            </p>
          </div>
        </motion.div>

        {/* ── Interactive layout ── */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">

          {/* Left: feature tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-2"
          >
            {features.map((f, i) => {
              const isActive = i === active;
              const a = accentClasses[f.color];
              return (
                <button
                  key={f.number}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? `${a.tab} shadow-sm`
                      : "border-transparent hover:bg-slate-50 hover:border-slate-100"
                  }`}
                >
                  {/* Number */}
                  <span className={`text-xs font-black font-mono flex-shrink-0 transition-colors ${isActive ? "text-slate-400" : "text-slate-200 group-hover:text-slate-300"}`}>
                    {f.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive ? `${a.badge}` : "bg-slate-50 border-slate-100 group-hover:bg-orange-50 group-hover:border-orange-100"
                  }`}>
                    <f.icon className={`w-4 h-4 transition-colors ${isActive ? "" : "text-slate-400 group-hover:text-orange-500"}`} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm transition-colors ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"}`}>
                      {f.title}
                    </p>
                    <p className={`text-xs mt-0.5 truncate transition-colors ${isActive ? "text-slate-500" : "text-slate-400"}`}>
                      {f.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                    isActive ? "text-slate-400 translate-x-0" : "text-slate-200 -translate-x-1 group-hover:translate-x-0 group-hover:text-slate-300"
                  }`} />
                </button>
              );
            })}

            {/* Progress indicator dots */}
            <div className="flex items-center gap-2 px-5 pt-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-orange-500" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: showcase panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full"
              >
                <div className="relative rounded-3xl overflow-hidden bg-slate-950 h-full min-h-[420px] flex flex-col">

                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/55 to-slate-950/30" />
                    {/* Color glow blob */}
                    <div className={`absolute top-0 right-0 w-72 h-72 ${accent.glow} rounded-full blur-3xl`} />
                  </div>

                  {/* Dot grid */}
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between gap-8">

                    {/* Top: number + badge + title */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold ${accent.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                          {current.subtitle}
                        </span>
                        <span className="text-white/10 font-black text-5xl font-mono leading-none select-none">
                          {current.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${accent.badge}`}>
                          <current.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{current.title}</h3>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                        {current.description}
                      </p>
                    </div>

                    {/* Bottom: highlights + CTA */}
                    <div>
                      <div className="grid grid-cols-2 gap-2 mb-7">
                        {current.highlights.map((h, i) => (
                          <motion.div
                            key={h}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                            <span className="text-slate-300 text-xs font-medium">{h}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Link to={current.link}>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-full transition-all duration-300"
                        >
                          Explore {current.title}
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
