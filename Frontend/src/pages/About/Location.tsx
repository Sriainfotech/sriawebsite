import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Headphones } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const offices = [
  {
    id: 1,
    country: "USA",
    flag: "🇺🇸",
    name: "New York Office",
    address: "18 Hunters Dr Gilbertsville, PA 19525-6601, USA",
    phone: "+91 99897 95335",
    email: "hr@sriainfotech.com",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80",
    mapDot: { top: "36%", left: "20%" },
    tooltip: "New York, USA",
  },
  {
    id: 2,
    country: "INDIA",
    flag: "🇮🇳",
    name: "Hyderabad Office",
    address: "303, 3ʳᵈFloor, Udaya Vensar Apartments, Rd Number 1, Hanuman Nagar, Kothaguda, Kondapur, Hyderabad, Telangana 500084, India",
    phone: "+91 97013 14138",
    email: "hr@sriainfotech.com",
    image: "https://images.unsplash.com/photo-1597735881925-d01e7ae70c88?w=600&q=80",
    mapDot: { top: "52%", left: "68%" },
    tooltip: "Hyderabad, India",
  },
  {
    id: 3,
    country: "INDIA",
    flag: "🇮🇳",
    name: "Amaravati Office",
    address: "Amaravati, Andhra Pradesh 522503, India",
    phone: "+91 95539 55893",
    email: "hr@sriainfotech.com",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    mapDot: { top: "55%", left: "69%" },
    tooltip: "Amaravati, India",
  },
  {
    id: 4,
    country: "INDIA",
    flag: "🇮🇳",
    name: "Mulugu Office",
    address: "TASK Center, Mulugu, Telangana 506343, India",
    phone: "+91 90145 52492",
    email: "hr@sriainfotech.com",
    image: "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?w=600&q=80",
    mapDot: { top: "50%", left: "70%" },
    tooltip: "Mulugu, India",
  },
];

const supportBlocks = [
  { icon: <Headphones className="w-6 h-6" />, title: "Support", description: "Get help with your account", contact: "hr@sriainfotech.com", phone: "+91 90145 52492" },
  { icon: <Phone className="w-6 h-6" />, title: "Sales", description: "Talk to our sales team", contact: "sales@sriainfotech.com", phone: "+91 90145 52492" },
  { icon: <Mail className="w-6 h-6" />, title: "General", description: "General inquiries", contact: "admin@sriainfotech.com", phone: "+91 90145 52492" },
];

function Location() {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("INDIA");

  const countries = Array.from(new Set(offices.map(o => o.country)));
  const filtered = offices.filter(o => o.country === selectedCountry);

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Global Presence"
        subtitle="Find the location nearest to you and connect with our local teams across India and the USA."
        breadcrumbs={[
          { name: "About Us", path: "/aboutus" },
          { name: "Locations", path: "/about/locations" },
        ]}
        backgroundImage="/location.jpg"
      />

      {/* ── Intro Stats Strip ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Global Offices", icon: <MapPin className="w-5 h-5" /> },
              { value: "2", label: "Countries", icon: <MapPin className="w-5 h-5" /> },
              { value: "3", label: "Indian Cities", icon: <MapPin className="w-5 h-5" /> },
              { value: "24/7", label: "Support Available", icon: <Headphones className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive World Map ── */}
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
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Find the location nearest to you and get in touch with our local teams.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl mb-14"
          >
            <div className="relative w-full h-[380px] md:h-[480px] bg-slate-900">
              <img
                src="https://www.accely.com/wp-content/themes/accely/assets/images/get-started/location-map.png"
                alt="World map"
                className="w-full h-full object-cover opacity-50"
              />
              {/* Dark tint */}
              <div className="absolute inset-0 bg-slate-950/30" />

              {/* Office dots */}
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                  style={{ top: office.mapDot.top, left: office.mapDot.left }}
                  onMouseEnter={() => setHoveredDot(office.id)}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  {/* Ping dot */}
                  <div className="relative w-4 h-4">
                    <div className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/60" />
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-60" />
                  </div>

                  {/* Tooltip */}
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
                        <p className="text-xs text-slate-500 leading-snug">{office.tooltip}</p>
                        {/* Arrow */}
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
            {/* Country tabs */}
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

            {/* Office cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {filtered.map((office, idx) => (
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

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {office.name}
                      </h3>
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
        </div>
      </section>

      {/* ── Support Blocks ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Contact</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white border border-slate-100 rounded-2xl p-8 text-center hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mx-auto mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {block.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{block.title}</h3>
                <p className="text-slate-400 text-xs mb-5">{block.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                    <Mail className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <a href={`mailto:${block.contact}`} className="hover:text-orange-500 transition-colors">{block.contact}</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                    <Phone className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>{block.phone}</span>
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

export default Location;
