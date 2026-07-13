import React, { useState, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cloud, Monitor, Server, Shield, Settings, Activity,
  CheckCircle, ArrowRight,
} from "lucide-react";

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `html { scroll-behavior: smooth; } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`
  }} />
);

function DataAnalytics() {
  const [activeSection, setActiveSection] = useState("offerings");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    ["offerings", "insights", "services", "benefits", "related-services"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const menuItems = ["Offerings", "Insights", "Services", "Benefits", "Related Services"];

  const sampleSolutions = [
    {
      title: "End-to-End Analytics Implementation",
      heading: "From Data to Decisions",
      description: "We design and deploy complete analytics solutions, from data ingestion to visualization, enabling better business decision-making.",
      points: [
        "Requirement gathering & KPI definition",
        "Data pipeline setup & ETL development",
        "Dashboard and report creation",
        "Go-live support & user training",
      ],
    },
    {
      title: "Custom Data Models",
      heading: "Tailored Analytical Insights",
      description: "Build custom machine learning models and analytics workflows suited to your industry and business challenges.",
      points: [
        "Predictive modeling",
        "Anomaly detection",
        "Recommendation systems",
        "Custom metrics & calculations",
      ],
    },
    {
      title: "Data Migration Services",
      heading: "Secure & Seamless Transfer",
      description: "Migrate datasets from legacy systems to modern analytics platforms with zero data loss.",
      points: [
        "Data mapping & cleansing",
        "Automated migration scripts",
        "Integrity validation",
        "Post-migration support",
      ],
    },
    {
      title: "Data Integration Services",
      heading: "Unified Data Sources",
      description: "Integrate data from CRMs, ERPs, APIs, and other sources into a single analytics ecosystem.",
      points: [
        "API-based data integration",
        "Database synchronization",
        "Third-party data connectors",
        "Real-time streaming data",
      ],
    },
    {
      title: "Analytics Support & Maintenance",
      heading: "Always-On Insights",
      description: "Keep your analytics platform optimized, secure, and up-to-date with our ongoing support services.",
      points: [
        "24/7 monitoring",
        "Performance tuning",
        "Version upgrades",
        "Bug fixes & enhancements",
      ],
    },
    {
      title: "Cloud Analytics Hosting",
      heading: "Fast & Secure Infrastructure",
      description: "Host your analytics workloads on high-performance cloud environments.",
      points: [
        "AWS, Azure, and Google Cloud hosting",
        "Data backups & disaster recovery",
        "Security compliance",
        "Scalable compute resources",
      ],
    },
  ];

  const tabsData = [
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      heading: "Cloud-Based Analytics",
      description: "Leverage cloud platforms for fast, cost-efficient, and scalable analytics solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    },
    {
      icon: <Monitor className="w-8 h-8 text-orange-500" />,
      heading: "Performance Optimization",
      description: "Optimize data pipelines and queries for faster, more reliable analytics processing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      heading: "Managed Analytics Services",
      description: "We handle setup, maintenance, and optimization of your analytics stack for end-to-end support.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    },
  ];

  const tabsData2 = [
    { icon: <Cloud className="w-5 h-5" />, heading: "Reduced Data Management Costs", description: "Data analytics platforms can reduce storage, processing, and maintenance costs while maximizing efficiency." },
    { icon: <Monitor className="w-5 h-5" />, heading: "Dedicated Analytical Expertise", description: "Gain access to skilled analysts and engineers to drive accurate insights and smarter decision-making." },
    { icon: <Server className="w-5 h-5" />, heading: "Scalable Data Infrastructure", description: "Easily scale your analytics capabilities as your data grows, with flexible architectures and processing power." },
    { icon: <Shield className="w-5 h-5" />, heading: "Data Security & Compliance", description: "Ensure secure storage, processing, and access control while meeting all regulatory compliance requirements." },
    { icon: <Settings className="w-5 h-5" />, heading: "Automated Data Pipelines", description: "Streamline data ingestion, transformation, and reporting through automated workflows." },
    { icon: <Activity className="w-5 h-5" />, heading: "Continuous Data Quality Monitoring", description: "Regular audits and validation checks to ensure accuracy, reliability, and consistency of insights." },
  ];

  const productData = [
    {
      title: "Odoo Implementation Services",
      description: "Comprehensive Odoo ERP solutions including module configuration, customization, integration, and cloud-based hosting to streamline operations and empower smarter business decisions.",
      link: "/odooservices/implementation",
    },
  ];

  return (
    <div className="w-full relative bg-white">
      <GlobalStyles />
      <PageHeader
        title="Data Management & Analytics"
        subtitle="Sria Infotech delivers end-to-end data services that transform raw data into actionable insights."
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: "Implementation", path: "/services/implementation" },
          { name: "Data Analytics", path: "/services/data-analytics" },
        ]}
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/DATA%20ANALYTICS.png?tr=f-auto,q-auto,w-2000"
      />

      {/* ── Intro Split Section ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                End-to-End Data & Analytics,<br />From Raw Data to Real Insight
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed mb-8">
                SAP Managed Services provide the full range of functional, technical, and cloud possibilities.
                We design and deploy complete analytics solutions — from data ingestion to visualization — enabling better business decision-making.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Requirement gathering & KPI definition",
                  "Data pipeline setup & ETL development",
                  "Dashboard and report creation",
                  "Predictive modeling & anomaly detection",
                  "Automated data pipelines",
                  "Cloud analytics hosting",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{pt}</span>
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
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-orange-200/50 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Certified Analytics Partner</p>
                    <p className="text-white/60 text-xs mt-0.5">Powering data-driven decisions across industries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sidebar + Content Layout ── */}
      <div className="relative bg-slate-50/70">
        <div className="flex flex-col lg:flex-row items-start w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:pl-0 lg:pr-8">

          {/* Sticky Side Navigation */}
          <aside className="hidden lg:block lg:w-[220px] xl:w-[260px] shrink-0 self-start sticky top-24 py-12">
            <nav className="flex flex-col space-y-1 pr-6 border-r border-slate-200">
              {menuItems.map((item, idx) => {
                const id = item.toLowerCase().replace(/ /g, "-");
                const isActive = activeSection === id;
                return (
                  <a
                    key={idx}
                    href={`#${id}`}
                    className={`group flex items-center justify-end text-[11px] font-bold transition-all duration-300 uppercase tracking-[0.2em] py-3 ${
                      isActive ? "text-orange-600" : "text-slate-400 hover:text-slate-800"
                    }`}
                  >
                    <span className="mr-4">{item}</span>
                    <div className={`h-8 w-1 rounded-l-full transition-all duration-300 ${
                      isActive ? "bg-orange-500 scale-y-100" : "bg-transparent scale-y-0 group-hover:bg-slate-300 group-hover:scale-y-50"
                    }`} />
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:flex-1 min-w-0">

            {/* ── Offerings ── */}
            <section id="offerings" className="scroll-mt-24 py-16 border-b border-slate-200">
              <div className="mb-10">
                <h2 className="text-base font-bold text-slate-900 mb-3">Explore our wide range of offerings</h2>
                <p className="text-slate-500 leading-relaxed max-w-2xl">
                  SAP Managed Services provide the full range of functional, technical, and cloud possibilities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sampleSolutions.map((sol, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Number + label row */}
                    <div className="flex items-center gap-3 px-6 pt-6 pb-0">
                      <span className="text-4xl font-black text-orange-100 leading-none select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-orange-100" />
                    </div>
                    <div className="p-6 pt-3">
                      <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1">{sol.title}</p>
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {sol.heading}
                      </h3>
                      <p className="text-slate-500 text-sm mb-5 leading-relaxed">{sol.description}</p>
                      <ul className="space-y-2">
                        {sol.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-500 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── Insights ── */}
            <section id="insights" className="scroll-mt-24 py-16 border-b border-slate-200 relative overflow-hidden rounded-2xl my-4">
              {/* Background */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80"
                  alt=""
                  role="presentation"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/90" />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
                />
              </div>

              <div className="relative z-10 px-8">
                <div className="mb-10 text-center">
                  <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-3">Impact</span>
                  <h2 className="text-xl font-bold text-white">Resourceful insights of Data Analytics Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { value: "50%", label: "Reduction in decision-making time through real-time analytics dashboards." },
                    { value: "65%", label: "Increase in operational efficiency by leveraging predictive analytics models." },
                    { value: "80%", label: "Automation of data processing pipelines, reducing manual reporting efforts." },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.08] transition-colors"
                    >
                      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300 mb-3">
                        {stat.value}
                      </div>
                      <div className="text-slate-300 text-sm leading-relaxed">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Services ── */}
            <section id="services" className="scroll-mt-24 py-16 border-b border-slate-200">
              <div className="mb-10">
                <h2 className="text-base font-bold text-slate-900">SAP services to support your cloud operations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tabsData.map((tab, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Image top */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={tab.image}
                        alt={tab.heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-lg border border-slate-100">
                          {tab.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4">
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {tab.heading}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{tab.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── Benefits ── */}
            <section id="benefits" className="scroll-mt-24 py-16 border-b border-slate-200">
              <div className="mb-10">
                <h2 className="text-base font-bold text-slate-900">Key benefits of Data Analytics Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tabsData2.map((tab, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="group relative p-7 bg-slate-900 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="mb-5 w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                        {tab.icon}
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-orange-300 transition-colors">
                        {tab.heading}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{tab.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── Related Services ── */}
            <section id="related-services" className="scroll-mt-24 py-16">
              <div className="mb-10">
                <h2 className="text-base font-bold text-slate-900">Explore other range of products</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {productData.map((product, idx) => (
                  <Link key={idx} to={product.link}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group p-7 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-orange-400 hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5">{product.description}</p>
                      <div className="flex items-center text-orange-500 font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                        Explore now <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}

export default DataAnalytics;
