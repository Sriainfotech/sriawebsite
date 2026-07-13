import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, CheckCircle2, Quote, Globe, Users, Award,
  MapPin, Mail, Phone, Headphones, Plus, X, ArrowRight,
  Eye, Target, Heart, TrendingUp, Shield, Zap,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

import aboutTeam from "@/assets/about-team.jpg";
import aboutOffice from "@/assets/about-office.jpg";

/* ─────────────── data ─────────────── */

const stats = [
  { value: "3+", label: "Global Offices" },
  { value: "₹1Cr+", label: "Group Turnover" },
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Group Employees" },
  { value: "20+", label: "Projects Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "14+", label: "Industry Solutions" },
];

const accordionData = [
  {
    title: "Leadership",
    text: "At Sria Infotech, our leadership team is a blend of visionary strategists, technology experts, and passionate innovators—each committed to driving digital transformation, operational excellence, and lasting business value.",
    image: "https://ik.imagekit.io/hps6th7vy/sria/leadership.jpg?tr=f-auto,q-auto,w-2000",
  },
  {
    title: "Core Values",
    text: "Smart — We leverage cutting-edge technology and data-driven insights to provide intelligent solutions.\nResilient — We design solutions built to endure challenges and perform under pressure.\nInclusive — We foster an inclusive work culture and ensure our services create opportunities for everyone.\nAgile — Our flexible approach allows us to respond swiftly to market changes.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
  },
  {
    title: "Our Services",
    text: "SAP Consulting & Implementation — Expert SAP solutions to streamline enterprise processes.\nEnterprise Application Development — Tailored applications that improve business efficiency.\nCloud Solutions — Scalable and secure cloud services to elevate your infrastructure.\nAI & Machine Learning — Advanced AI-driven solutions to boost automation and decision-making.\nIT Consulting & Managed Services — Comprehensive IT advisory and support.",
    image: "/aboutus/ourservices.jpg",
  },
  {
    title: "Why Choose Us?",
    text: "Proven Expertise — Our team brings years of industry expertise, focusing on high-quality customized solutions.\nClient-Centric Approach — We place your business needs at the center of everything we do.\nInnovation — We stay ahead of technology trends to deliver the most innovative solutions.\nCollaborative Culture — Our collaborative approach ensures seamless integration with your teams.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
  },
  {
    title: "Vision",
    text: "At Sria Infotech, our vision is to build a future where technology empowers every business and individual to thrive. We stand for being Smart in our solutions, Resilient in our execution, Inclusive in our impact, and Agile in adapting to tomorrow's challenges.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
  },
  {
    title: "Mission",
    text: "Our mission is to deliver world-class digital services—ranging from enterprise software to AI and IT consulting—by embracing the core values of being Smart, Resilient, Inclusive, and Agile. We are committed to transforming businesses, uplifting communities, and fostering innovation for a better digital future.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80",
  },
];

const missionPoints = [
  { number: "#1", title: "Accountability", description: "We hold ourselves accountable to deliver on our commitments to customers." },
  { number: "#2", title: "Customer Commitment", description: "We're fully committed to making a positive impact for our customers." },
  { number: "#3", title: "Teamwork", description: "We work across borders with mutual respect to achieve shared goals." },
  { number: "#4", title: "Integrity", description: "We maintain the highest integrity in everything we do." },
  { number: "#5", title: "Value", description: "We deliver outstanding services that provide real value to our customers." },
  { number: "#6", title: "Environment", description: "We're responsible citizens in the communities where we live and work." },
];

const timelineEvents = [
  { year: 2022, title: "Sria Infotech is Launched", description: "Launched Sria Infotech as a global SAP consulting company.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" },
  { year: 2022, title: "Started with SAP All Modules", description: "Expanded capabilities to cover the complete SAP module portfolio.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
  { year: 2023, title: "Started Data Analytics", description: "Launched dedicated data analytics and business intelligence services.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
  { year: 2024, title: "Started Application Development", description: "Began delivering custom application development solutions for clients.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80" },
  { year: 2025, title: "AMS from Patil Group", description: "Won Application Management Services contract from Patil Group.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80" },
  { year: 2025, title: "Odoo Implementation Partner", description: "Became official Odoo Implementation Partner.", image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80" },
  { year: 2025, title: "Branch in Mulugu (Launching Soon)", description: "Opening our new branch in Mulugu, expanding our Indian presence.", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80" },
];

const offices = [
  { id: 1, country: "USA", flag: "🇺🇸", name: "New York Office", address: "18 Hunters Dr Gilbertsville, PA 19525-6601, USA", phone: "+91 99897 95335", email: "hr@sriainfotech.com", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80", mapDot: { top: "36%", left: "20%" }, tooltip: "New York, USA" },
  { id: 2, country: "India", flag: "🇮🇳", name: "Hyderabad Office", address: "303, 3ʳᵈFloor, Udaya Vensar Apartments, Rd Number 1, Hanuman Nagar, Kothaguda, Kondapur, Hyderabad, Telangana 500084", phone: "+91 97013 14138", email: "hr@sriainfotech.com", image: "https://ik.imagekit.io/hps6th7vy/sria/hyderabad.png?tr=f-auto,q-auto,w-2000", mapDot: { top: "52%", left: "68%" }, tooltip: "Hyderabad, India" },
  { id: 3, country: "India", flag: "🇮🇳", name: "Amaravati Office", address: "Amaravati, Andhra Pradesh 522503, India", phone: "+91 95539 55893", email: "hr@sriainfotech.com", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80", mapDot: { top: "55%", left: "69%" }, tooltip: "Amaravati, India" },
  { id: 4, country: "India", flag: "🇮🇳", name: "Mulugu Office", address: "TASK Center, Mulugu, Telangana 506343, India", phone: "+91 90145 52492", email: "hr@sriainfotech.com", image: "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?w=600&q=80", mapDot: { top: "50%", left: "70%" }, tooltip: "Mulugu, India" },
];

const supportBlocks = [
  { icon: <Headphones className="w-6 h-6" />, title: "Support", description: "Get help with your account", contact: "hr@sriainfotech.com", phone: "+91 90145 52492" },
  { icon: <Phone className="w-6 h-6" />, title: "Sales", description: "Talk to our sales team", contact: "sales@sriainfotech.com", phone: "+91 90145 52492" },
  { icon: <Mail className="w-6 h-6" />, title: "General", description: "General inquiries", contact: "admin@sriainfotech.com", phone: "+91 90145 52492" },
];

/* ─────────────── component ─────────────── */

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const countries = Array.from(new Set(offices.map(o => o.country)));
  const filteredOffices = offices.filter(o => o.country === selectedCountry);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="About Sria Infotech"
        subtitle="A global SAP consulting company delivering world-class services through proven methodologies and innovation."
        breadcrumbs={[{ name: "About Us", path: "/about" }]}
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/aboutus.jpg?tr=f-auto,q-auto,w-2000"
      />

      {/* ── Who We Are ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Who We Are</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                Starting a Revolution in<br />Digital Transformation
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed mb-6">
                Sria Infotech is a global SAP consulting company delivering world-class services through proven methodologies and innovation. We combine the latest technology with deep industry experience—from SAP S/4HANA migration to custom application development and beyond. Our solutions are built to unlock new possibilities for your business.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["SAP Expertise", "Cloud Solutions", "Data Analytics", "Digital Transformation", "Application Development", "AI & Machine Learning"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contactus">
                <motion.button
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right: image grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                  <img src={aboutTeam} alt="Team collaboration" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 mt-8">
                  <img src={aboutOffice} alt="Office environment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
              </div>
              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-slate-100 px-8 py-4 flex items-center gap-8 whitespace-nowrap"
              >
                {[{ value: "5+", label: "Years" }, { value: "100+", label: "Clients" }, { value: "4+", label: "Offices" }].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="w-px h-8 bg-slate-200" />}
                    <div className="text-center">
                      <p className="text-xl font-black text-orange-500">{s.value}</p>
                      <p className="text-xs text-slate-400 font-medium">{s.label}</p>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-14 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-0 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="text-center lg:px-6"
              >
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300">{stat.value}</p>
                <p className="text-slate-400 text-xs font-medium mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO Quote ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Quote text */}
            <div className="lg:col-span-2">
              <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-6">Founder's Vision</span>
              <h2 className="text-xl font-bold text-white mb-6 leading-tight">Starting a revolution</h2>
              <Quote className="w-10 h-10 text-orange-500/30 mb-4" />
              <blockquote className="text-slate-300 text-base leading-relaxed mb-6 border-l-4 border-orange-500 pl-6">
                "Sria Infotech leverages Information Technology to make processes not only more efficient but also far more effective. We see automation as an opportunity to blend proven methodologies with innovation, creating a powerful synergy of cutting-edge technology and deep experience."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-500/40 flex-shrink-0">
                  <img src="https://ik.imagekit.io/hps6th7vy/sria/sai.png?tr=f-auto,q-auto,w-2000" alt="Sai Kumar" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Sai Kumar Bonakurthi</p>
                  <p className="text-orange-400 text-xs">Founder, Managing Director — SRIA Group of Companies</p>
                </div>
              </div>
              <Link to="/about/leadership" className="inline-flex items-center gap-2 text-white/60 hover:text-orange-400 text-sm font-medium mt-5 transition-colors">
                Meet the team <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* CEO image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-orange-500/20 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80">
                <img
                  src="https://ik.imagekit.io/hps6th7vy/sria/sai.png?tr=f-auto,q-auto,w-2000"
                  alt="Sai Kumar Bonakurthi"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Creating Positive Change (Accordion) ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12"
          >
            <div>
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Our Identity</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Creating positive change</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-4" />
            </div>
            <p className="text-slate-500 max-w-xl text-sm leading-relaxed lg:pt-8">
              We're committed to creating positive change around the world and ensuring we act as responsible business leaders for our people, clients, and the communities we call home.
            </p>
          </motion.div>

          <div className="rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100">
            {accordionData.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-7 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className={`text-base font-semibold transition-colors ${activeAccordion === idx ? "text-orange-600" : "text-slate-900"}`}>
                    {item.title}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeAccordion === idx ? "bg-orange-500 text-white rotate-45" : "bg-slate-100 text-slate-500"}`}>
                    {activeAccordion === idx ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeAccordion === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 py-7 bg-slate-50 flex flex-col lg:flex-row gap-8 border-t border-slate-100">
                        <div className="lg:w-1/2">
                          {item.text.split("\n").map((line, i) => {
                            const [label, ...rest] = line.split(" — ");
                            return rest.length ? (
                              <p key={i} className="text-slate-600 text-sm leading-relaxed mb-2">
                                <span className="font-semibold text-slate-800">{label} — </span>{rest.join(" — ")}
                              </p>
                            ) : (
                              <p key={i} className="text-slate-600 text-sm leading-relaxed mb-2">{line}</p>
                            );
                          })}
                        </div>
                        <div className="lg:w-1/2">
                          <div className="relative rounded-xl overflow-hidden shadow-lg h-48">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Our Values</span>
              <h2 className="text-2xl font-bold text-slate-900">Mission Statement</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
            </div>
            <Link to="/contactus" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all">
              Let's work together <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left 3 points */}
            <div className="space-y-8">
              {missionPoints.slice(0, 3).map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="text-xs font-bold text-orange-500 mb-1">{point.number}</p>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{point.title}</h3>
                  <p className="text-slate-500 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Centre image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-orange-200/50 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80">
                <img
                  src="https://ik.imagekit.io/hps6th7vy/sria/mission.jpg?tr=f-auto,q-auto,w-2000"
                  alt="Mission"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"; }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                    <p className="text-white font-bold text-xs">SRIA — Smart · Resilient · Inclusive · Agile</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right 3 points */}
            <div className="space-y-8">
              {missionPoints.slice(3).map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="text-xs font-bold text-orange-500 mb-1">{point.number}</p>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{point.title}</h3>
                  <p className="text-slate-500 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Timeline ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Our Journey</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Iconic moments in Sria Infotech history</h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-4" />
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />

            <div className="space-y-10">
              {timelineEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-md z-10 flex-shrink-0" />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="group bg-white border border-slate-100 hover:border-orange-200 hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                        <div className="absolute top-3 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                            {event.year}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{event.title}</h3>
                        <p className="text-slate-500 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Offices ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Our Footprint</span>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Global Offices</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Find the location nearest to you and get in touch with our local teams.</p>
          </motion.div>

          {/* Interactive map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl mb-14"
          >
            <div className="relative w-full h-[320px] md:h-[420px] bg-slate-900">
              <img
                src="https://www.accely.com/wp-content/themes/accely/assets/images/get-started/location-map.png"
                alt="World map"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-slate-950/30" />

              {/* Office ping dots */}
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ top: office.mapDot.top, left: office.mapDot.left }}
                  onMouseEnter={() => setHoveredDot(office.id)}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  <div className="relative w-4 h-4">
                    <div className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/60" />
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-60" />
                  </div>
                  <AnimatePresence>
                    {hoveredDot === office.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white text-slate-900 rounded-xl shadow-2xl px-4 py-3 min-w-[180px] z-20 pointer-events-none"
                      >
                        <p className="font-bold text-sm mb-0.5">{office.name}</p>
                        <p className="text-xs text-slate-500">{office.tooltip}</p>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-sm" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Country tabs + office cards */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex lg:flex-col gap-2 flex-wrap lg:w-32 flex-shrink-0">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1 w-full hidden lg:block">Filter by</p>
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex-shrink-0 ${selectedCountry === country
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                >
                  {country}
                </button>
              ))}
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {filteredOffices.map((office, idx) => (
                  <motion.div
                    key={office.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.07 }}
                    className="group bg-white/[0.04] border border-white/8 rounded-2xl overflow-hidden hover:bg-white/[0.07] hover:border-orange-500/30 transition-all duration-300"
                  >
                    {/* City image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={office.image}
                        alt={office.name}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <span className="text-lg">{office.flag}</span>
                        <span className="text-white/70 text-xs font-medium">{office.country}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{office.name}</h3>
                      <div className="flex items-start gap-2 text-slate-400 text-xs mb-3">
                        <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{office.address}</span>
                      </div>
                      <div className="space-y-1.5 border-t border-white/5 pt-3">
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <Phone className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <Mail className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Support blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 pt-12 border-t border-white/8">
            {supportBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white/[0.04] border border-white/8 rounded-2xl p-7 text-center hover:bg-white/[0.07] hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {block.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{block.title}</h3>
                <p className="text-slate-400 text-xs mb-4">{block.description}</p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs">
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                    <a href={`mailto:${block.contact}`} className="hover:text-orange-400 transition-colors">{block.contact}</a>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs">
                    <Phone className="w-3.5 h-3.5 text-orange-400" /> {block.phone}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
