import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

interface TrustedFeature {
  icon: React.ReactNode;
  label: string;
}

interface SolutionPageLayoutProps {
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; path: string }[];
  backgroundImage: string;
  impactHeading: React.ReactNode;
  impactDescription: string;
  children: React.ReactNode;
  trustedFeatures: TrustedFeature[];
  endToEndServices: string[];
  techTrends: string[];
}

const SolutionPageLayout = ({
  title, subtitle, breadcrumbs, backgroundImage,
  impactHeading, impactDescription,
  children,
  trustedFeatures, endToEndServices, techTrends,
}: SolutionPageLayoutProps) => {
  return (
    <div className="bg-white font-sans text-slate-800">
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={backgroundImage}
      />

      {/* ── Impact Header with image ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none opacity-60" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-stretch">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-5">Our Impact</span>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                {impactHeading}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed text-base mb-8">{impactDescription}</p>

              {/* Quick stats row */}
              <div className="flex gap-8">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "100+", label: "Happy Clients" },
                  { value: "10+", label: "Years of Expertise" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-xl font-bold text-orange-500">{s.value}</p>
                    <p className="text-xs text-slate-400 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-orange-200/60 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[320px]">
                <img
                  src={backgroundImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">{title}</p>
                    <p className="text-white/60 text-xs mt-0.5">Powered by SRIA Infotech</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Unique page sections ── */}
      {children}

      {/* ── Trusted Partner ── */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/88" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-3">Partnership</span>
            <h2 className="text-xl lg:text-2xl font-bold text-white">Your Trusted Partner in SAP Transformation</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {trustedFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 [&_svg]:w-6 [&_svg]:h-6">
                  {item.icon}
                </div>
                <span className="font-semibold text-slate-800 text-sm group-hover:text-orange-600 transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── End-to-End Services ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-5/12 relative"
            >
              <div className="rounded-2xl overflow-hidden h-64 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Global SAP services"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-slate-900/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-orange-400 font-bold text-lg mb-1">End-to-End Coverage</p>
                    <p className="text-white/60 text-sm">From Strategy to Support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: services list */}
            <div className="lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-3">Full Coverage</span>
                <h2 className="text-xl lg:text-2xl font-bold text-white">End-to-End SAP Services</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {endToEndServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3.5 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Trends ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Technologies</span>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">Drive Innovation with Latest Tech Trends</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-4" />
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Our innovative technologies empower businesses to streamline operations, enhance customer experiences, and drive growth.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {techTrends.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 cursor-default shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPageLayout;
