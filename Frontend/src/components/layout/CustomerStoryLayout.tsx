import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Building2, MapPin, Users, Calendar, ChevronRight } from "lucide-react";

interface SolutionItem {
  label: string;
  description: string;
  image: string;
}

interface ImpactItem {
  title: string;
  description: string;
}

interface StatItem {
  percentage: string;
  description: string;
}

export interface CustomerStoryProps {
  hero: {
    image: string;
    category: string;
    title: string;
    tag: string;
    datePublished: string;
  };
  images: {
    overview: string;
    challenge: string;
    impact: string;
  };
  overview: {
    text: string;
    industry: string;
    region: string;
    companySize: string;
  };
  challenges: {
    title: string;
    items: string[];
  };
  solutions: {
    title: string;
    introText: string;
    items: SolutionItem[];
  };
  businessImpact: {
    title: string;
    items: ImpactItem[];
  };
  impactStats: {
    title: string;
    items: StatItem[];
  };
}

const CustomerStoryLayout: React.FC<CustomerStoryProps> = ({
  hero,
  images,
  overview,
  challenges,
  solutions,
  businessImpact,
  impactStats,
}) => {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* ── Immersive Hero ── */}
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
        </div>

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "36px 36px" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20 pt-36 w-full">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-white/50 text-xs mb-6"
          >
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/about/customer-stories" className="hover:text-orange-400 transition-colors">Success Stories</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400">{overview.industry}</span>
          </motion.div>

          {/* Category pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">{hero.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight mb-7"
          >
            {hero.title}
          </motion.h1>

          {/* Tags row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            {hero.tag.split("·").map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold backdrop-blur-sm">
                {t.trim()}
              </span>
            ))}
            <span className="text-white/40 text-xs hidden sm:block">·</span>
            <span className="text-white/50 text-xs">{hero.datePublished}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Meta Bar ── */}
      <section className="py-5 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            {[
              { Icon: Building2, text: overview.industry },
              { Icon: MapPin, text: overview.region },
              { Icon: Users, text: overview.companySize },
              { Icon: Calendar, text: `Published ${hero.datePublished}` },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview (split with image) ── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Project Overview</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">About This Engagement</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-7" />
              <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-8">{overview.text}</p>

              {/* Stat pills */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Industry", value: overview.industry },
                  { label: "Region", value: overview.region },
                  { label: "Team Size", value: overview.companySize },
                ].map((s, i) => (
                  <div key={i} className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
                    <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mb-1">{s.label}</p>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">{s.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Overview image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-100 rounded-2xl pointer-events-none" />
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src={images.overview} alt="Project Overview" className="w-full h-[460px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                {/* Glass card overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
                    <p className="text-white text-xs font-semibold">{overview.industry} · {overview.region}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Challenges (dark, split with image) ── */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Challenge image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src={images.challenge} alt="Business Challenges" className="w-full h-[500px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Challenges list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">The Problem</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">{challenges.title}</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-8" />
              <ul className="space-y-3">
                {challenges.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-orange-500/30 transition-all group"
                  >
                    <span className="text-orange-500 font-black text-sm flex-shrink-0 w-6 mt-0.5 group-hover:text-orange-300 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Solutions (image cards) ── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Our Approach</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{solutions.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-5" />
            <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">{solutions.introText}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutions.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Image strip */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                  {/* Label badge */}
                  <div className="absolute bottom-4 left-5">
                    <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      {item.label}
                    </span>
                  </div>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Text */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Impact (full bg image) ── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.impact} alt="Business Impact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/88" />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
          />
        </div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Results</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{businessImpact.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businessImpact.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Impact</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{impactStats.title}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.items.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-10 text-center hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-400 mb-4 relative z-10">
                  {stat.percentage}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-5">Get Started</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              Ready to Write Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Success Story?
              </span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              Join the growing list of businesses that have transformed their operations with Sria Infotech's enterprise solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contactus">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-orange-500/20"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/about/customer-stories">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/20 hover:bg-white/[0.15] text-white px-10 py-4 rounded-full font-semibold text-sm transition-all"
                >
                  More Stories <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerStoryLayout;
