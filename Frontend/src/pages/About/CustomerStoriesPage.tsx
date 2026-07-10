import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award, Globe } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const stories = [
  {
    id: 1,
    image: "https://ik.imagekit.io/hps6th7vy/sria/partners/ivc-logo.png?tr=f-auto,q-auto",
    category: "Strategic Partnership",
    title: "IVC Consulting Strengthens Global SAP Delivery with Strategic Partnership",
    description: "Strategic partnership delivering world-class SAP implementations across Asia Pacific, enabling seamless digital transformation for global enterprises.",
    readMoreLink: "/partners/ivc-solutions",
    featured: true,
    tag: "Joint Venture",
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/patil.jpg?tr=f-auto,q-auto",
    category: "SAP Implementation",
    title: "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
    description: "End-to-end SAP deployment combined with Application Management Services and OCR automation, driving measurable operational improvements across the enterprise.",
    readMoreLink: "/patil",
    featured: false,
    tag: "SAP S/4HANA",
  },
  {
    id: 3,
    image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/7hills.jpg?tr=f-auto,q-auto",
    category: "Digital Transformation",
    title: "7Hills Restaurant Transforms Guest Experience with Custom Digital Platform",
    description: "Custom digital platform built for a premium restaurant chain, transforming the guest experience with modern technology and seamless operations.",
    readMoreLink: "/hills",
    featured: false,
    tag: "Custom Development",
  },
  {
    id: 4,
    image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/pharma.jpg?tr=f-auto,q-auto",
    category: "Odoo CRM",
    title: "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
    description: "Odoo CRM implementation eliminating manual processes and enabling real-time visibility and operational efficiency for the sales team.",
    readMoreLink: "/Lvk",
    featured: false,
    tag: "Odoo",
  },
];

const impactStats = [
  { value: "100+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
  { value: "500+", label: "Projects Delivered", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "98%", label: "Customer Satisfaction", icon: <Award className="w-5 h-5" /> },
  { value: "10+", label: "Years of Excellence", icon: <Globe className="w-5 h-5" /> },
];

const CustomerStoriesPage = () => {
  const featured = stories.find(s => s.featured);
  const grid = stories.filter(s => !s.featured);

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Success Stories"
        subtitle="Discover how our innovative solutions have empowered businesses to achieve operational excellence and growth."
        breadcrumbs={[
          { name: "About Us", path: "/aboutus" },
          { name: "Success Stories", path: "/about/customer-stories" },
        ]}
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/customerstory.jpg?tr=f-auto,q-auto"
      />

      {/* ── Intro + Stats ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Case Studies</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
              Real Results for Real Businesses
            </h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-5" />
            <p className="text-slate-500 leading-relaxed">
              From enterprise SAP implementations to custom digital platforms, see how SRIA Infotech has helped organisations across industries transform their operations and achieve lasting growth.
            </p>
          </motion.div>

          {/* Impact stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 text-center group hover:bg-orange-50 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mx-auto mb-3 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <p className="text-3xl font-black text-orange-500 mb-1">{stat.value}</p>
                <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Story ── */}
      {featured && (
        <section className="pb-8 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-1">Featured</span>
            </motion.div>

            <Link to={featured.readMoreLink}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-400"
              >
                <div className="grid lg:grid-cols-2 gap-0 min-h-[360px]">
                  {/* Left: image */}
                  <div className="relative overflow-hidden bg-slate-800 flex items-center justify-center p-12 lg:p-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-slate-900/40" />
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="relative z-10 h-24 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 opacity-[0.03]"
                      style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
                    />
                  </div>

                  {/* Right: text */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                        {featured.tag}
                      </span>
                      <span className="text-slate-500 text-xs">{featured.category}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-orange-300 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-7">{featured.description}</p>
                    <div className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Stories Grid ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">More Stories</span>
            <h2 className="text-xl font-bold text-slate-900">More Success Stories</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((story, idx) => (
              <Link key={story.id} to={story.readMoreLink}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 overflow-hidden h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    {/* Top badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                        {story.tag}
                      </span>
                    </div>
                    {/* Category bottom */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white/70 text-xs font-medium uppercase tracking-wider">{story.category}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Accent line */}
                    <div className="h-0.5 w-8 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                    <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-600 transition-colors flex-1">
                      {story.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{story.description}</p>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                      Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-5">Get Started</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
              Ready to Write Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Success Story?</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
              Join hundreds of businesses that have transformed their operations with SRIA Infotech's enterprise solutions.
            </p>
            <Link to="/contactus">
              <motion.button
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-orange-500/20 text-sm"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerStoriesPage;
