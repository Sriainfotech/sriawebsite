import { motion } from "framer-motion";
import { ArrowRight, Network, BarChart3, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "sap",
    label: "Enterprise Solutions",
    title: "SAP",
    icon: Network,
    image: "https://ik.imagekit.io/hps6th7vy/sria/home/erp-home.jpg?tr=f-auto,q-auto,w-2000",
    count: "5 solutions",
    items: [
      { num: "01", title: "SAP Concur",       tagline: "Automated travel, expense and invoice management.",   link: "/solutions/concur" },
      { num: "02", title: "SAP Private Cloud", tagline: "Intelligent, real-time, seamless cloud transformation.", link: "/solutions/private-cloud" },
      { num: "03", title: "SAP SuccessFactors",tagline: "Talent, workforce and experience management.",          link: "/solutions/successfactors" },
      { num: "04", title: "SAP CPI",           tagline: "Integrated, predictive, intelligent connectivity.",     link: "/integration" },
      { num: "05", title: "SAP Public Cloud",  tagline: "Scalable, modern, efficient ERP in the cloud.",         link: "/solutions/public-cloud" },
    ],
  },
  {
    id: "analytics",
    label: "Data & Insights",
    title: "Analytics",
    icon: BarChart3,
    image: "https://ik.imagekit.io/hps6th7vy/sria/home/da-home.jpg?tr=f-auto,q-auto,w-2000",
    count: "4 solutions",
    items: [
      { num: "01", title: "Business Intelligence",  tagline: "Transform raw data into actionable business insights.",    link: "/additionalServices/dataanalytics" },
      { num: "02", title: "Predictive Analytics",   tagline: "Anticipate market trends with AI-driven forecasting.",    link: "/additionalServices/dataanalytics" },
      { num: "03", title: "Data Visualization",     tagline: "Interactive dashboards for real-time decision making.",   link: "/additionalServices/dataanalytics" },
      { num: "04", title: "Big Data Solutions",     tagline: "Scalable architecture for processing massive datasets.",  link: "/additionalServices/dataanalytics" },
    ],
  },
];

const SolutionsGrid = () => {
  return (
    <section className="section-padding bg-slate-950 overflow-hidden relative">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-3">Our Depth</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Our Expertise</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Deep domain expertise across SAP and modern data platforms — built over a decade of enterprise engagements.
            </p>
          </div>
        </motion.div>

        {/* ── Two category columns ── */}
        <div className="grid lg:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] flex flex-col"
            >
              {/* ── Image banner ── */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />

                {/* Category info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest">{cat.label}</p>
                      <h3 className="text-white font-bold text-xl leading-tight">{cat.title}</h3>
                    </div>
                  </div>
                  <span className="text-white/40 text-xs font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    {cat.count}
                  </span>
                </div>
              </div>

              {/* ── Items list ── */}
              <div className="flex-1 divide-y divide-white/[0.05]">
                {cat.items.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: ci === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                  >
                    <Link to={item.link}>
                      <div className="group flex items-center gap-4 px-6 py-4 hover:bg-orange-500/5 transition-all duration-200 relative overflow-hidden">
                        {/* Left accent bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

                        {/* Number */}
                        <span className="text-white/15 font-black text-xs font-mono flex-shrink-0 group-hover:text-orange-500/50 transition-colors">
                          {item.num}
                        </span>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors truncate">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 text-xs mt-0.5 group-hover:text-slate-400 transition-colors truncate">
                            {item.tagline}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="w-7 h-7 rounded-lg bg-white/0 group-hover:bg-orange-500/15 border border-transparent group-hover:border-orange-500/25 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-orange-400 transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/contactus">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3.5 text-sm rounded-full font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300 hover:-translate-y-0.5">
              Get Started with Our Expertise
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionsGrid;
