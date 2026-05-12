import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}
export interface CapabilityItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export interface TechTrendItem {
  name: string;
  icon?: React.ReactNode;
}
export interface RelatedServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  link: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; path: string }[];
  backgroundImage: string;
  processTitle: string;
  processDescription?: string;
  processSteps: ProcessStep[];
  statsTitle: string;
  stats: StatItem[];
  capabilitiesTitle: string;
  capabilitiesDescription?: string;
  capabilities: CapabilityItem[];
  techTrendsTitle?: string;
  techTrendsDescription?: string;
  techTrends: TechTrendItem[];
  relatedServicesTitle?: string;
  relatedServicesDescription?: string;
  relatedServices: RelatedServiceItem[];
}

const ServicePageLayout = ({
  title, subtitle, breadcrumbs, backgroundImage,
  processTitle, processDescription, processSteps,
  statsTitle, stats,
  capabilitiesTitle, capabilitiesDescription, capabilities,
  techTrendsTitle = "Drive Innovation with the Latest Tech Trends",
  techTrendsDescription = "We leverage cutting-edge technologies to deliver intelligent, scalable, and resilient enterprise solutions.",
  techTrends,
  relatedServicesTitle = "Elevate, Innovate, and Thrive with SAP",
  relatedServicesDescription = "Comprehensive services supporting every stage of your SAP lifecycle.",
  relatedServices,
}: ServicePageLayoutProps) => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={backgroundImage}
      />

      {/* ── SECTION 1: Process Steps ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header with image accent */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Our Approach</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-4">{processTitle}</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-4" />
              {processDescription && (
                <p className="text-slate-500 leading-relaxed">{processDescription}</p>
              )}
            </motion.div>

            {/* Process image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:w-1/2 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl h-52 lg:h-60">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                  alt="SAP consulting team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
              </div>
              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Proven Framework</p>
                  <p className="text-xs text-slate-400">SAP Activate Certified</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="mb-5 w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <span className="text-orange-500 group-hover:text-white transition-colors [&_svg]:w-5 [&_svg]:h-5">{step.icon}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Stats / Impact ── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "36px 36px" }}
        />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Impact</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{statsTitle}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-950 hover:bg-white/[0.04] transition-colors duration-300 p-10 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Number index */}
                <span className="absolute top-4 right-5 text-white/10 text-xs font-bold tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="mb-5 w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-orange-400 group-hover:[&_svg]:text-white [&_svg]:transition-colors">
                  {stat.icon}
                </div>

                {/* Value */}
                <p className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300 mb-3 leading-none">
                  {stat.value}
                </p>

                {/* Accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-3 group-hover:w-14 transition-all duration-500" />

                {/* Label */}
                <p className="text-white/80 text-sm font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Capabilities ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split layout: image left, capabilities right */}
          <div className="flex flex-col lg:flex-row gap-14 items-start">
            {/* Left: image + heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-5/12 lg:sticky lg:top-24"
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Why Us</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-4">{capabilitiesTitle}</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-5" />
              {capabilitiesDescription && (
                <p className="text-slate-500 leading-relaxed mb-8">{capabilitiesDescription}</p>
              )}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Expert SAP team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-bold text-base">Expert Team</p>
                  <p className="text-white/70 text-xs">Certified SAP Consultants</p>
                </div>
              </div>
            </motion.div>

            {/* Right: capabilities grid */}
            <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                    <span className="group-hover:text-white transition-colors [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-slate-400 group-hover:[&_svg]:text-white">{item.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner (image) ── */}
      <section className="relative h-52 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
          alt="Global technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/50 text-xs tracking-widest uppercase mb-2">Powering Enterprise Transformation</p>
            <p className="text-white text-xl font-bold">Trusted by 100+ businesses across India & the USA</p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: Tech Trends ── */}
      <section className="pt-20 pb-10 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Technologies</span>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">{techTrendsTitle}</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-4" />
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">{techTrendsDescription}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {techTrends.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 cursor-default shadow-sm"
              >
                {tech.icon && <span className="[&_svg]:w-4 [&_svg]:h-4">{tech.icon}</span>}
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Related Services ── */}
      <section className="pt-10 pb-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Explore More</span>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{relatedServicesTitle}</h2>
              <p className="text-slate-500 text-sm">{relatedServicesDescription}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
              >
                <Link to={service.link}>
                  <div className="group h-full bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl transition-all duration-400 flex flex-col relative">
                    {/* Top color bar */}
                    <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="mb-5 w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-orange-500 [&_svg]:transition-colors group-hover:[&_svg]:text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{service.desc}</p>
                      <div className="flex items-center gap-1.5 text-orange-500 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        Explore Service <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
