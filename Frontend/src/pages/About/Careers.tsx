import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, ArrowRight, ShieldAlert, GraduationCap, Globe, Briefcase, Mail,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

// Already uploaded and in use by the older, now-unrouted pages/Careers.tsx —
// this page (the live /careers route as of App.tsx) never carried it over.
const heroCareers = "https://ik.imagekit.io/hps6th7vy/sria/about/hero-careers.jpg?tr=f-auto,q-auto,w-1600";

const whyJoinUs = [
  {
    title: "Real Client Exposure",
    description: "Work directly on SAP, Odoo and digital transformation engagements for real clients, not simulated projects.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Certification & Growth",
    description: "Build toward SAP, Odoo and cloud certifications with support from experienced consultants on your team.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Cross-Industry Experience",
    description: "Sria Infotech's client base spans manufacturing, retail, pharma, hospitality and public sector work.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "A Team That Mentors",
    description: "Work alongside senior consultants who are invested in helping you grow into the role you want next.",
    icon: <Users className="w-5 h-5" />,
  },
];

const hiringProcess = [
  { step: "1", title: "Apply", description: "Reach out through our contact page with your resume and the type of role you're interested in." },
  { step: "2", title: "Initial Screening", description: "A short conversation to understand your background, experience and what you're looking for." },
  { step: "3", title: "Technical & Team Interview", description: "A deeper discussion with the team you'd be working with, focused on relevant skills and experience." },
  { step: "4", title: "Offer & Onboarding", description: "If it's a fit on both sides, we'll move to an offer and a structured onboarding into the team." },
];

function Careers() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Careers at Sria Infotech"
        subtitle="Build your career in SAP, Odoo and digital transformation consulting"
        breadcrumbs={[
          { name: "About Us", path: "/about" },
          { name: "Careers", path: "/careers" },
        ]}
        backgroundImage={heroCareers}
      />

      {/* ── Why Join Us ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Why Join Us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Grow Your Career With Us</h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyJoinUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Our Process</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">How Hiring Works</h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {hiringProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-100 p-6 relative"
              >
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Openings ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Current Openings</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              We're Not Actively Listing Open Roles Right Now
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              We don't have specific positions posted at the moment, but we're always open to hearing from
              people with SAP, Odoo or digital transformation experience. Get in touch through our contact
              page and let us know the kind of role you're looking for — we'll reach out if something fits.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Recruitment Fraud Warning ── */}
      <section className="py-14 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-6"
          >
            <ShieldAlert className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">Recruitment Fraud Warning</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Sria Infotech never asks candidates for money, deposits or payment of any kind at any stage
                of recruitment. All official communication comes only through our website's contact page or
                verified company channels. If you're contacted by someone claiming to represent Sria
                Infotech and asking for payment, treat it as fraudulent and do not respond with personal or
                financial information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
