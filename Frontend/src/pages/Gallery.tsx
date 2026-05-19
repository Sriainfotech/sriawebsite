import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Users, MapPin, Heart, X } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const categories = ["All", "Team Events", "Office Life", "Celebrations", "Milestones"];

const gallery = [
  { id: 1,  src: "/gallery/annual-team-gathering.jpg",  category: "Team Events",   caption: "Annual Team Gathering",                         featured: true  },
  { id: 2,  src: "/gallery/sap-inside-track.jpg",       category: "Milestones",    caption: "SAP Inside Track – Hyderabad",                  featured: true  },
  { id: 3,  src: "/gallery/sria-office-workspace.png",  category: "Office Life",   caption: "SRIA Infotech Office – Hyderabad",              featured: false },
  { id: 4,  src: "/gallery/sria-team-photo.png",        category: "Team Events",   caption: "SRIA Team Photo",                               featured: false },
  { id: 5,  src: "/gallery/thub-family-event.png",      category: "Team Events",   caption: "Family Day at T-Hub, Hyderabad",                featured: false },
  { id: 6,  src: "/gallery/job-fair-mulugu.png",        category: "Milestones",    caption: "Job Fair – Placements for Local Youth, Mulugu", featured: true  },
  { id: 7,  src: "/gallery/office-inauguration.png",    category: "Milestones",    caption: "Office Inauguration – Mulugu",                  featured: false },
  { id: 8,  src: "/gallery/amaravati-visit.jpeg",       category: "Milestones",    caption: "Visit to Telangana Secretariat, Hyderabad",     featured: false },
  { id: 9,  src: "/gallery/team-outing-restaurant.jpg", category: "Celebrations",  caption: "Team Outing",                                   featured: false },
  { id: 10, src: "/gallery/team-hangout.jpg",           category: "Celebrations",  caption: "Team Hangout",                                  featured: false },
  { id: 11, src: "/gallery/team-lunch.jpg",             category: "Office Life",   caption: "Team Lunch Together",                           featured: false },
];

const stats = [
  { value: "500+", label: "Team Members",   icon: <Users className="w-5 h-5" /> },
  { value: "4",    label: "Global Offices", icon: <MapPin className="w-5 h-5" /> },
  { value: "10+",  label: "Years Together", icon: <Heart className="w-5 h-5" /> },
  { value: "50+",  label: "Events Per Year",icon: <Camera className="w-5 h-5" /> },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const filtered = activeCategory === "All"
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Life at SRIA"
        subtitle="A glimpse into our culture, our people, and the moments that make us who we are."
        breadcrumbs={[
          { name: "About Us", path: "/aboutus" },
          { name: "Life at SRIA", path: "/gallery" },
        ]}
        backgroundImage="/gallery/annual-team-gathering.jpg"
      />

      {/* Stats Strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Statement */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-5">Our Culture</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              More Than a Workplace —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                A Community
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              At SRIA, we believe great work is built on great relationships. From hackathons to team lunches, festival celebrations to global summits — every moment brings us closer and drives our shared mission of digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Photo Gallery</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Moments We Treasure</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35 }}
                  className={item.featured ? "sm:col-span-2" : ""}
                  onClick={() => setLightbox({ src: item.src, caption: item.caption })}
                >
                  <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className={`relative overflow-hidden ${item.featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category tag */}
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                        <span className="px-2.5 py-1 bg-orange-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <p className="text-white font-semibold text-sm leading-snug">{item.caption}</p>
                      </div>

                      {/* Expand icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Camera className="w-4 h-4 text-white" />
                      </div>

                      {/* Top accent */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <Camera className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Join Our Team</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Be Part of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Story</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              We're always looking for passionate people who want to make an impact. Explore opportunities to grow with a team that cares.
            </p>
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-orange-500/20"
              >
                Explore Careers <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={lightbox.src} alt={lightbox.caption} className="w-full max-h-[80vh] object-contain bg-slate-900" />
              </div>
              <p className="text-center text-white/70 text-sm mt-4 font-medium">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
