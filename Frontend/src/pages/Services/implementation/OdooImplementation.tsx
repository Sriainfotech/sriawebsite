import { useState, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Users, Settings, Cloud, Server, ArrowRight,
  Zap, RefreshCw, CheckCircle, Layers
} from "lucide-react";

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `html { scroll-behavior: smooth; } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`
  }} />
);

const OdooImplementation = () => {
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

  const offerings = [
    {
      title: "Seamless ERP Implementation",
      description: "We provide complete Odoo setup from requirement gathering to go-live, ensuring smooth business transition with minimal disruption.",
      points: [
        "Requirement analysis & business mapping",
        "Module configuration & customization",
        "User training & onboarding",
        "Go-live support & change management",
      ],
    },
    {
      title: "Tailored to Your Business Needs",
      description: "Design and develop custom Odoo modules to fit unique workflows and industry-specific processes.",
      points: [
        "Custom ERP workflows",
        "Industry-specific enhancements",
        "Third-party API integrations",
        "Automation of manual tasks",
      ],
    },
    {
      title: "Secure & Accurate Data Transfer",
      description: "Migrate your business data from legacy systems to Odoo with 100% accuracy and no downtime.",
      points: [
        "Data mapping & cleansing",
        "Migration scripts & automation",
        "Testing for data integrity",
        "Post-migration validation",
      ],
    },
    {
      title: "Connected Business Operations",
      description: "Integrate Odoo with other software like CRM, e-commerce, payment gateways, and shipping providers.",
      points: [
        "Payment gateway integration",
        "E-commerce platform sync",
        "Third-party logistics integration",
        "Real-time API connectivity",
      ],
    },
    {
      title: "Continuous Improvement & Uptime",
      description: "Keep your Odoo ERP optimized, updated, and secure with our ongoing support services.",
      points: [
        "24/7 helpdesk support",
        "System health checks",
        "Version upgrades",
        "Bug fixes & performance tuning",
      ],
    },
    {
      title: "Scalable & Secure Hosting",
      description: "Run your Odoo instance in a high-performance, secure cloud environment.",
      points: [
        "AWS, Azure, and private cloud hosting",
        "Data backups & disaster recovery",
        "SSL & security hardening",
        "Scalable infrastructure",
      ],
    },
  ];

  const insights = [
    { value: "40%", label: "Increased Operational Efficiency", description: "improvement after Odoo deployment" },
    { value: "30%", label: "Cost Savings", description: "reduction in operational costs" },
    { value: "35%", label: "Faster Decision-Making", description: "due to improved reporting" },
  ];

  const services = [
    {
      title: "Odoo Cloud Deployment",
      description: "Seamlessly host your Odoo ERP on the cloud for improved performance, scalability, and reduced infrastructure costs.",
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    },
    {
      title: "Odoo Customization & Optimization",
      description: "Enhance and tailor Odoo modules to fit your unique workflows, ensuring maximum efficiency and performance.",
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    },
    {
      title: "Odoo Managed Services",
      description: "End-to-end configuration, monitoring, and maintenance of your Odoo ERP for reliable, uninterrupted operations.",
      icon: <Server className="w-8 h-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    },
  ];

  const benefits = [
    { title: "Lower Implementation & Maintenance Costs", description: "Our Odoo implementation services help reduce deployment expenses and long-term maintenance costs.", icon: <Zap className="w-5 h-5" /> },
    { title: "Dedicated Functional & Technical Support", description: "Get expert assistance for Odoo customization, module integration, and technical troubleshooting.", icon: <Users className="w-5 h-5" /> },
    { title: "Flexible Scaling of Modules", description: "Easily scale Odoo modules and features as your business grows, ensuring adaptability to changing needs.", icon: <Layers className="w-5 h-5" /> },
    { title: "Reliable Performance & High Availability", description: "Ensure smooth, uninterrupted Odoo operations with guaranteed uptime and optimal system performance.", icon: <Shield className="w-5 h-5" /> },
    { title: "Efficient Updates & Module Enhancements", description: "Seamlessly manage Odoo version updates, bug fixes, and feature enhancements to keep your system future-ready.", icon: <RefreshCw className="w-5 h-5" /> },
    { title: "Comprehensive Security & Data Audits", description: "Regular audits of Odoo databases and applications to detect and prevent vulnerabilities.", icon: <Shield className="w-5 h-5" /> },
  ];

  const relatedServices = [
    { title: "Data Analytics", description: "Transform raw data into actionable insights using modern analytics tools.", link: "/additionalServices/dataanalytics" },
  ];

  return (
    <div className="w-full relative bg-white">
      <GlobalStyles />
      <PageHeader
        title="Odoo Implementation Services"
        subtitle="Sria Infotech delivers tailored Odoo ERP solutions to integrate, automate, and streamline your business operations efficiently."
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: "Implementation", path: "/services/implementation" },
          { name: "Odoo Implementation", path: "/services/odoo-implementation" },
        ]}
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/odoo-app.png?tr=f-auto,q-auto,w-2000"
      />

      {/* ── Intro Split Section ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-60 pointer-events-none" />
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
                End-to-End Odoo ERP Delivery,<br />From Strategy to Support
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed mb-8">
                Odoo ERP Needs Assessment & Planning — identify business gaps and select the right Odoo modules.
                Module Configuration & Customization tailored to your workflows for maximum efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Requirement analysis & business mapping",
                  "Module configuration & customization",
                  "User training & onboarding",
                  "Go-live support & change management",
                  "24/7 post-go-live helpdesk",
                  "Scalable cloud infrastructure",
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Odoo ERP Implementation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Certified Odoo Partner</p>
                    <p className="text-white/60 text-xs mt-0.5">Powering 100+ successful ERP deployments</p>
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
                  Odoo ERP Needs Assessment & Planning — identify business gaps and select the right Odoo modules.
                  Module Configuration & Customization tailored to your workflows for maximum efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Number badge */}
                    <div className="flex items-center gap-3 px-6 pt-6 pb-0">
                      <span className="text-4xl font-black text-orange-100 leading-none select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-orange-100" />
                    </div>
                    <div className="p-6 pt-3">
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-5 leading-relaxed">{item.description}</p>
                      <ul className="space-y-2">
                        {item.points.map((pt, i) => (
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
              {/* Background image */}
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
                  <h2 className="text-xl font-bold text-white">Resourceful insights of Odoo Implementation Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {insights.map((stat, idx) => (
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
                      <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                      <div className="text-slate-400 text-sm">{stat.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Services ── */}
            <section id="services" className="scroll-mt-24 py-16 border-b border-slate-200">
              <div className="mb-10">
                <h2 className="text-base font-bold text-slate-900">Services to support your Odoo cloud operations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, idx) => (
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
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-lg border border-slate-100">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4">
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── Benefits ── */}
            <section id="benefits" className="scroll-mt-24 py-16 border-b border-slate-200">
              <div className="mb-10">
                <h2 className="text-base font-bold text-slate-900">Key benefits of Odoo Implementation Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((benefit, idx) => (
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
                        {benefit.icon}
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-orange-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
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
                {relatedServices.map((service, idx) => (
                  <Link key={idx} to={service.link}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group p-7 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-orange-400 hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
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
};

export default OdooImplementation;
