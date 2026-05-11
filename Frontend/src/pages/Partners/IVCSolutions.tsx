import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle, ArrowRight, Globe, Building2, Users,
  Award, MapPin, Layers, Cloud, BarChart2, Package,
  Briefcase, TrendingUp,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const impactItems = [
  { value: "500+", label: "Successful SAP Implementations", description: "across Asia Pacific region, serving diverse industries." },
  { value: "20+",  label: "Years of SAP Expertise",         description: "and partnership, delivering enterprise solutions with proven results." },
  { value: "100%", label: "Commitment to Client Success",   description: "through professional implementation, training, and ongoing support." },
];

const jointSolutions = [
  {
    label: "SAP Gold Partner Expertise",
    description: "Access to certified SAP consultants, proven implementation methodologies, and comprehensive training programs for SAP S/4HANA, Business One, and ByDesign platforms.",
    icon: <Award className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    label: "Regional Market Coverage",
    description: "Combined delivery capabilities across India and Asia Pacific markets, providing localized support and understanding of regional business practices and compliance requirements.",
    icon: <Globe className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
  {
    label: "Industry-Specific Solutions",
    description: "Tailored SAP implementations for wholesale & distribution, retail, manufacturing, food & beverage, logistics, and professional services industries.",
    icon: <Building2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    label: "End-to-End Implementation",
    description: "Complete project lifecycle support from initial consultation and system design through implementation, data migration, user training, and post-go-live support.",
    icon: <Layers className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
];

const benefits = [
  { title: "SAP Gold Partner Status",      description: "Direct access to SAP's latest technologies, training resources, and partner programs, ensuring clients receive cutting-edge solutions and best practices.", icon: <Award className="w-5 h-5" />,      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=70" },
  { title: "Comprehensive ERP Solutions",  description: "Full suite of SAP products including S/4HANA, Business One, ByDesign, with modules for finance, supply chain, HR, and business intelligence.", icon: <Package className="w-5 h-5" />,    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70" },
  { title: "Geographic Expansion",         description: "Extended market reach across Asia Pacific and India, enabling seamless multi-country implementations and regional support coverage.", icon: <Globe className="w-5 h-5" />,      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=70" },
  { title: "Enhanced R&D Collaboration",   description: "Joint innovation initiatives combining IVC's SAP expertise with Sria's custom development capabilities for unique client requirements.", icon: <TrendingUp className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70" },
  { title: "Professional Services",        description: "Certified consultants providing implementation, customization, integration, training, and managed services with proven track records.", icon: <Briefcase className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=70" },
  { title: "Industry Best Practices",      description: "Deep industry knowledge and pre-configured solutions for faster deployments with lower risk and higher ROI for clients.", icon: <CheckCircle className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=70" },
];

const solutions = [
  { title: "SAP S/4HANA",             description: "Next-generation ERP platform with real-time analytics, AI capabilities, and cloud deployment options.", icon: <Layers className="w-6 h-6" />,   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { title: "Accounting & Finance",     description: "Comprehensive financial management, reporting, and compliance solutions for enterprise organizations.", icon: <BarChart2 className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80" },
  { title: "Supply Chain Management",  description: "End-to-end SCM solutions for procurement, inventory, warehouse, and logistics management.", icon: <Package className="w-6 h-6" />,   image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { title: "Human Resources (HRIS)",   description: "Complete HR management including payroll, talent management, and employee self-service portals.", icon: <Users className="w-6 h-6" />,    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
  { title: "Business Intelligence",    description: "Advanced analytics, reporting, and data visualization tools for data-driven decision making.", icon: <BarChart2 className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { title: "Cloud Solutions",          description: "Cloud-based ERP deployments, migrations, and managed services for scalability and flexibility.", icon: <Cloud className="w-6 h-6" />,    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
];

const challenges = [
  "Complex SAP implementations requiring deep technical expertise and industry knowledge.",
  "Need for localized SAP solutions tailored to Asia Pacific business requirements.",
  "Growing demand for cloud-based ERP and digital transformation services.",
  "Shortage of certified SAP professionals and implementation partners in the region.",
  "Integration challenges between legacy systems and modern SAP S/4HANA platforms.",
];

function IVCSolutions() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="IVC Solutions: Strategic SAP Partnership"
        subtitle="Driving Digital Transformation Across Asia Pacific"
        breadcrumbs={[
          { name: "About Us", path: "/aboutus" },
          { name: "Partners", path: "/about/sap-partner" },
          { name: "IVC Solutions", path: "/partners/ivc-solutions" },
        ]}
        backgroundImage="/partners/sap-partner.png"
      />

      {/* ── Brand Intro ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: logo card + meta */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Logo card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 mb-8 inline-flex flex-col items-center w-full max-w-xs">
                <img src="/partners/ivc-logo.png" alt="IVC Solutions" className="h-20 object-contain mb-4" />
                <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                  SAP Gold Partner
                </span>
                <p className="text-slate-500 text-xs">Joint Venture Partner</p>
                <p className="text-slate-400 text-xs">Partnership Established 2020</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["SAP Gold Partner", "Joint Venture", "Enterprise Solutions", "Asia Pacific"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                ))}
              </div>

              {/* Meta cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <Building2 className="w-4 h-4 text-orange-500" />, label: "Industry",   value: "Enterprise Software & SAP" },
                  { icon: <MapPin    className="w-4 h-4 text-orange-500" />, label: "Region",     value: "Asia Pacific (China, HK, Taiwan)" },
                  { icon: <Users     className="w-4 h-4 text-orange-500" />, label: "Team Size",  value: "200+ SAP Consultants" },
                ].map((meta, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="mt-0.5 flex-shrink-0">{meta.icon}</div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{meta.label}</p>
                      <p className="text-sm text-slate-800 font-semibold leading-snug">{meta.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: hero image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-orange-200/50 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
                  alt="IVC Solutions Partnership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">IVC Solutions × SRIA Infotech</p>
                    <p className="text-white/60 text-xs mt-0.5">SAP Gold Partner · Asia Pacific · Since 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Partnership Overview (split) ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Overview</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">Partnership Overview</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed text-sm">
                IVC Solutions is an authorized SAP Gold Partner and well-established business solutions provider with comprehensive service coverage spanning Mainland China, Hong Kong, Macau, Taiwan, and other Asia Pacific countries. Through our strategic joint venture, Sria Infotech and IVC Solutions combine expertise to deliver world-class SAP implementations, enterprise resource planning, and digital transformation solutions to clients across the region.
              </p>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-orange-200/50 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80"
                  alt="SAP Partnership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Market Challenges ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Challenges</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">
                Market Challenges<br />We Address Together
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-8" />
              <div className="space-y-4">
                {challenges.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:sticky lg:top-24"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                  alt="Market challenges"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Enterprise-Grade Solutions</p>
                    <p className="text-white/60 text-xs mt-0.5">Addressing complex SAP challenges across Asia Pacific</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Joint Solutions ── */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Bg decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-3">Capabilities</span>
            <h2 className="text-xl font-bold text-white mb-3">Joint Solutions & Capabilities</h2>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
              Our partnership with IVC Solutions creates a powerful synergy, combining Sria Infotech's innovation-driven approach with IVC's deep SAP expertise to deliver comprehensive enterprise solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jointSolutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/[0.04] border border-white/8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Image strip */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.label}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {sol.icon}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {sol.label}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{sol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership Benefits ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Benefits</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Partnership Benefits</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group bg-white border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image strip */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
            alt="Global impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/90" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Impact</span>
            <h2 className="text-xl font-bold text-white">Partnership Impact</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/8">
            {impactItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300 p-12 text-center"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300 mb-3">
                  {item.value}
                </div>
                <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Portfolio ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Portfolio</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Solution Portfolio</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Through our partnership with IVC Solutions, we offer a comprehensive range of SAP and enterprise solutions.
            </p>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image top */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-2.5 bg-white rounded-xl shadow-lg border border-slate-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {solution.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{solution.description}</p>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default IVCSolutions;
