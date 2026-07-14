import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Quote } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const leaders = [
  {
    name: "Ashwini Ganji",
    designation: "Chairman — Sria Group of Companies",
    description:
      "Chairman - Sria Group of Companies, leading organizational growth through visionary leadership and sustainable business practices.",
    image: "https://ik.imagekit.io/hps6th7vy/sria/chairman.jpg?tr=f-auto,q-auto,w-2000",
    linkedinUrl: "https://www.linkedin.com/company/sria-infotech-pvt-ltd/",
    email: "admin@sriainfotech.com",
  },
  {
    name: "Sai Kumar Bonakurthi",
    designation: "Founder, Director — Sria Group of Companies",
    description:
      "Founder, Managing Director - Sria Group of Companies, guiding strategic direction and fostering innovation to drive business excellence.",
    image: "https://ik.imagekit.io/hps6th7vy/sria/sai.png?tr=f-auto,q-auto,w-2000",
    linkedinUrl: "http://linkedin.com/in/saikumarb/",
    email: "saikumarb@sriainfotech.com",
  },
  {
    name: "Ravikumar Rangari",
    designation: "Co-Founder, Executive Chairman — Sria Group of Companies",
    description:
      "Co-Founder, Executive Chairman - Sria Group of Companies, overseeing operations and driving efficiency to ensure seamless project execution and growth.",
    image: "https://ik.imagekit.io/hps6th7vy/sria/ravi.png?tr=f-auto,q-auto,w-2000",
    linkedinUrl: "https://www.linkedin.com/in/ravikumar-r-53265a22a/",
    email: "ravirangari@sriainfotech.com",
  },
  {
    name: "Vinod Kumar Burra",
    designation: "COO — Sria Infotech",
    description:
      "COO of Sria Infotech, leading innovation and growth through technology-driven solutions.",
    image: "https://ik.imagekit.io/hps6th7vy/sria/vinod.jpg?tr=f-auto,q-auto,w-2000",
    linkedinUrl: "https://www.linkedin.com/in/vinod-kumar-burra-31bb13190/",
    email: "vinodkumar@sriainfotech.com",
  },
];

function LeaderShip() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Meet Leadership Team"
        breadcrumbs={[
          { name: "About Us", path: "/aboutus" },
          { name: "Leadership", path: "/about/leadership" },
        ]}
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/leadership.jpg?tr=f-auto,q-auto,w-2000"
      />

      {/* ── Leadership Cards ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Our Leaders</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              The Visionaries Behind Sria
            </h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 overflow-hidden flex flex-col"
              >
                {/* Photo */}
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Social icons revealed on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Orange accent line */}
                  <div className="h-0.5 w-8 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3 leading-snug">
                    {person.designation}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {person.description}
                  </p>

                  {/* Footer links */}
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-[#0077b5] text-xs font-medium transition-colors"
                    >
                      <LinkedInIcon /> LinkedIn
                    </a>
                    <span className="text-slate-200">·</span>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-orange-500 text-xs font-medium transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{person.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chairman's Statement ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Leadership Vision</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">Chairman's Statement</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              {/* Large quote mark */}
              <Quote className="w-12 h-12 text-orange-500/30 mb-6" />

              <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
                Innovating the Change
              </p>

              <p className="text-slate-300 leading-relaxed text-sm mb-6">
                At Sria Infotech, we believe technology is more than just a tool—it is a force for empowerment and transformation.
                From our humble beginnings to where we stand today, our journey has always been driven by a single purpose: to deliver innovation with impact. We take pride not only in building ERP and digital solutions, but also in creating opportunities that uplift communities, empower rural talent, and bridge the digital divide.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm mb-6">
                In today's fast-changing world, success depends on agility, inclusiveness, and resilience. These values are at the core of our philosophy—Smart, Resilient, Inclusive, Agile (Sria)—guiding us in every decision and every partnership.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm mb-8">
                As Chairman, I envision Sria Infotech as a company that not only enables businesses to thrive but also shapes the future of young talent by preparing them for the AI-driven era of innovation. With strong partnerships, dedicated teams, and a relentless commitment to excellence, we are confident of building a brighter, more sustainable future.
                Together, let us lead with purpose, innovate with passion, and grow with integrity.
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500/40 flex-shrink-0">
                  <img src="https://ik.imagekit.io/hps6th7vy/sria/chairman.jpg?tr=f-auto,q-auto,w-2000" alt="Ashwini Ganji" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Ashwini Ganji</p>
                  <p className="text-orange-400 text-xs">Chairman, Sria Group of Companies</p>
                </div>
              </div>
            </motion.div>

            {/* Right: video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                {/* Decorative frame */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-orange-500/20 pointer-events-none z-20" />
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SNeFDUwpNoY"
                  title="CEO Statement Video"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default LeaderShip;
