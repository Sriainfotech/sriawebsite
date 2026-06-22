import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, CheckCircle, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const partners = [
  {
    name: "IVC Solutions",
    type: "Joint Venture Partner",
    badge: "SAP Gold Partner",
    shortDescription:
      "An authorized SAP Gold Partner with offices across Mainland China, Hong Kong, Macau, Taiwan, and Asia Pacific. Together, we deliver world-class SAP and enterprise solutions.",
    logo: "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454965/sria/ivclogo.png",
    detailsUrl: "/partners/ivc-solutions",
    regions: ["Mainland China", "Hong Kong", "Macau", "Taiwan", "Asia Pacific"],
    stats: [
      { value: "500+", label: "Successful SAP Projects Delivered" },
      { value: "20+", label: "Years of Expertise" },
      { value: "5+", label: "Regions Covered" },
    ],
  },
];

function Partners() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Our Strategic Partners"
        subtitle="Building powerful alliances to deliver world-class enterprise solutions across the globe."
        breadcrumbs={[
          { name: "About Us", path: "/aboutus" },
          { name: "Partners", path: "/about/partners" },
        ]}
        backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455097/sria/partners/sap-partner.png"
      />

      {/* ── Partnership Overview ── */}
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
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">
                Partnership Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                Collaborating for<br />Innovation & Growth
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed mb-5">
                At Sria Infotech, strategic collaboration empowers our mission of
                building smarter, more sustainable, future-ready solutions. Each
                partnership strengthens our capabilities, expands our global
                presence, and accelerates innovation across industries.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our joint venture ecosystem is built on trust, shared vision, and
                a commitment to delivering transformative digital solutions for
                businesses worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "SAP Gold Partner network",
                  "Global delivery model",
                  "Asia Pacific market coverage",
                  "End-to-end SAP implementations",
                  "Certified SAP professionals",
                  "Localised enterprise solutions",
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455092/sria/partners/partner-overview.png"
                  alt="Partnership Overview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Global Partnership Network</p>
                    <p className="text-white/60 text-xs mt-0.5">Trusted across Asia Pacific & beyond</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Partners ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Alliance Network</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Strategic Partners</h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="space-y-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left: logo + badge */}
                  <div className="lg:border-r border-slate-100 p-10 flex flex-col items-center justify-center bg-slate-50 group-hover:bg-orange-50/40 transition-colors duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 object-contain mb-5"
                    />
                    <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
                      {partner.badge}
                    </span>
                    <p className="text-slate-500 text-xs font-medium mt-2">{partner.type}</p>
                  </div>

                  {/* Middle: content */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-slate-500 leading-relaxed mb-5">{partner.shortDescription}</p>

                      {/* Regions */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="flex items-center gap-1 text-xs text-slate-500 font-medium mr-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-400" /> Coverage:
                        </span>
                        {partner.regions.map((region, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                          >
                            {region}
                          </span>
                        ))}
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-4 mb-7 border-t border-slate-100 pt-6">
                        {partner.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-2xl font-black text-orange-500">{stat.value}</p>
                            <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <Link to={partner.detailsUrl}>
                        <motion.button
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-orange-200"
                        >
                          View Partnership <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Partners;
