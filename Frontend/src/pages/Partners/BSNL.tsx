import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, Users, Building2, MapPin, GraduationCap,
  Wifi, Smartphone, Award, Layers, Briefcase, TrendingUp, Quote,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const BSNL_LOGO = "https://ik.imagekit.io/hps6th7vy/sria/logos/bsnl.png?tr=f-auto,q-auto,w-2000";
// Placeholder hero background — swap with a dedicated BSNL/telecom image later.
const HERO_BACKGROUND = "/bsnl-hero.jpg";

// Dummy placeholder values — replace with real figures once available.
const LEARNERS_TRAINED = "12,500+";
const TRAINING_CENTERS = "38";
const STATES_COVERED = "9";
const PARTNERSHIP_YEAR = "2026";

const impactItems = [
  { value: LEARNERS_TRAINED, label: "Learners Trained",  description: "across technician training and digital literacy programs." },
  { value: TRAINING_CENTERS, label: "Training Centers",   description: "operating across Telangana, Andhra Pradesh, and beyond." },
  { value: STATES_COVERED,   label: "States Covered",     description: "extending BSNL's skilling network across India." },
];

const challenges = [
  "Shortage of certified telecom technicians in emerging urban and rural markets.",
  "Low digital literacy limiting access to essential services in underserved communities.",
  "Need for standardized, industry-aligned skilling curricula for the telecom sector.",
  "Limited training infrastructure across smaller districts and towns.",
  "Growing demand for job-ready talent as telecom networks expand across India.",
];

const jointPrograms = [
  {
    label: "Technician Training",
    description: "Hands-on training on telecom infrastructure, installation, and maintenance for field technicians.",
    icon: <Wifi className="w-5 h-5" />,
    image: "/gallery/bsnl-partnership-signing-01.jpeg",
    alt: "Man standing at BSNL plaque",
  },
  {
    label: "Digital Literacy",
    description: "Foundational digital skills training for learners in underserved communities across both states.",
    icon: <Smartphone className="w-5 h-5" />,
    image: "/gallery/bsnl-partnership-signing-02.jpeg",
    alt: "Two men holding signed agreement",
  },
  {
    label: "Certification Support",
    description: "Structured assessments and certification aligned with industry skilling standards.",
    icon: <GraduationCap className="w-5 h-5" />,
    image: "/gallery/bsnl-partnership-signing-03.jpeg",
    alt: "Four men holding signed certificate",
  },
  {
    label: "Community Outreach",
    description: "On-ground enrollment and outreach drives to reach learners in rural and semi-urban areas.",
    icon: <Users className="w-5 h-5" />,
    image: "/gallery/bsnl-partnership-signing-04.jpeg",
    alt: "Group of men in meeting room",
  },
];

const benefits = [
  { title: "Skill Solution Partner Status", description: "Official recognition as BSNL's first skill solution partner from Telangana and Andhra Pradesh.", icon: <Award className="w-5 h-5" />, image: "/gallery/bsnl-partnership-signing-01.jpeg", alt: "Man standing at BSNL plaque" },
  { title: "Comprehensive Telecom Curriculum", description: "Structured modules covering installation, maintenance, and customer-facing telecom support skills.", icon: <Layers className="w-5 h-5" />, image: "/gallery/bsnl-partnership-signing-02.jpeg", alt: "Two men holding signed agreement" },
  { title: "Regional & National Expansion", description: "Delivery footprint extending from Telangana and Andhra Pradesh to 9 states and counting.", icon: <MapPin className="w-5 h-5" />, image: "/gallery/bsnl-partnership-signing-03.jpeg", alt: "Four men holding signed certificate" },
  { title: "Digital Literacy Outreach", description: "Foundational digital skills programs reaching learners in underserved and rural communities.", icon: <Smartphone className="w-5 h-5" />, image: "/gallery/bsnl-partnership-signing-05.jpeg", alt: "Team photo at training centre sign" },
  { title: "Certification & Placement Support", description: "Assessment-backed certification pathways aligned with industry skilling standards.", icon: <GraduationCap className="w-5 h-5" />, image: "/gallery/bsnl-partnership-signing-01.jpeg", alt: "Man standing at BSNL plaque" },
  { title: "Community-Centered Delivery", description: "Training centers designed around local access, reaching both urban and rural learners.", icon: <Briefcase className="w-5 h-5" />, image: "/gallery/bsnl-partnership-signing-02.jpeg", alt: "Two men holding signed agreement" },
];

// These thumbnails crop a full-body/group photo into a very short, wide
// card, so plain "center" cuts through chests and "top" shows only the
// ceiling above people's heads. Each gallery photo needs its own vertical
// anchor (percentage down the source image where faces actually sit) so
// object-cover crops around them instead of through them.
const FACE_POSITION: Record<string, string> = {
  "/gallery/bsnl-partnership-signing-01.jpeg": "object-[center_37%]",
  "/gallery/bsnl-partnership-signing-02.jpeg": "object-[center_43%]",
  "/gallery/bsnl-partnership-signing-03.jpeg": "object-[center_33%]",
  "/gallery/bsnl-partnership-signing-04.jpeg": "object-[center_33%]",
  "/gallery/bsnl-partnership-signing-05.jpeg": "object-[center_47%]",
  "/gallery/bsnl-partnership-signing-06.jpeg": "object-[center_47%]",
};
const facePosition = (image: string) => FACE_POSITION[image] ?? "object-center";

const programPortfolio = [
  { title: "Technician Training",       description: "Installation, maintenance, and troubleshooting skills for telecom field technicians.", icon: <Wifi className="w-6 h-6" />,          image: "/gallery/bsnl-partnership-signing-03.jpeg", alt: "Four men holding signed certificate" },
  { title: "Digital Literacy",          description: "Foundational computer and internet skills for learners in underserved communities.", icon: <Smartphone className="w-6 h-6" />,     image: "/gallery/bsnl-partnership-signing-06.jpeg", alt: "Group photo at training centre sign" },
  { title: "Certification Programs",    description: "Structured assessments and certificates aligned with telecom industry standards.", icon: <GraduationCap className="w-6 h-6" />,   image: "/gallery/bsnl-partnership-signing-01.jpeg", alt: "Man standing at BSNL plaque" },
  { title: "Fiber & Network Skilling",   description: "Specialized training on fiber installation and network maintenance practices.", icon: <Layers className="w-6 h-6" />,             image: "/gallery/bsnl-partnership-signing-02.jpeg", alt: "Two men holding signed agreement" },
  { title: "Customer Support Training",  description: "Service and communication skills for telecom customer-facing roles.", icon: <Users className="w-6 h-6" />,                      image: "/gallery/bsnl-partnership-signing-03.jpeg", alt: "Four men holding signed certificate" },
  { title: "Digital Entrepreneurship",   description: "Skills to help learners use digital tools for small business and self-employment.", icon: <TrendingUp className="w-6 h-6" />,    image: "/gallery/bsnl-partnership-signing-04.jpeg", alt: "Group of men in meeting room" },
];

function BSNL() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="BSNL – Skill Solution Partner"
        subtitle="Delivering telecom skilling programs across India"
        breadcrumbs={[
          { name: "About Us", path: "/about" },
          { name: "Partners", path: "/about/sap-partner" },
          { name: "BSNL", path: "/partners/bsnl" },
        ]}
        backgroundImage={HERO_BACKGROUND}
      />

      {/* ── Certification Seal Band ── */}
      {/* <section className="relative overflow-hidden bg-orange-600 border-y-4 border-slate-950 py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: "26px 26px" }}
        />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-slate-950/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <div className="relative inline-flex items-center justify-center mb-5">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/40 w-28 h-28 -m-2 animate-[spin_20s_linear_infinite]" />
            <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center ring-4 ring-white/30 p-3.5">
              <img
                src={BSNL_LOGO}
                alt="BSNL"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  t.parentElement!.insertAdjacentHTML(
                    "afterbegin",
                    '<span class="text-orange-600 font-black text-base">BSNL</span>'
                  );
                }}
              />
            </div>
          </div>

          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3">
            Official Certification
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Official BSNL Skill Solution Partner
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-white/15 border border-white/30 backdrop-blur-sm rounded-full px-3 py-1.5">
              BSNL &times; SRIA Infotech
            </span>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-slate-950/30 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
              First in Telangana &amp; Andhra Pradesh
            </span>
          </div>
        </motion.div>
      </section> */}

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
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 mb-8 flex flex-col items-center w-full">
                <img
                  src={BSNL_LOGO}
                  alt="BSNL"
                  className="h-28 object-contain mb-4"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.insertAdjacentHTML(
                      "afterbegin",
                      '<span class="h-28 flex items-center justify-center text-orange-500 font-bold text-2xl mb-4">BSNL</span>'
                    );
                  }}
                />
                <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                  Skill Solution Partner
                </span>
                <p className="text-slate-500 text-xs">First in Telangana &amp; Andhra Pradesh</p>
                <p className="text-slate-400 text-xs">Partnership Established {PARTNERSHIP_YEAR}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Skill Solution Partner", "Telecom Skilling", "Digital Literacy", "Government Alliance"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                ))}
              </div>

              {/* Meta cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <Building2 className="w-4 h-4 text-orange-500" />, label: "Focus Area", value: "Telecom Skilling & Digital Literacy" },
                  { icon: <MapPin    className="w-4 h-4 text-orange-500" />, label: "Region",     value: "Telangana & Andhra Pradesh" },
                  { icon: <Users     className="w-4 h-4 text-orange-500" />, label: "Reach",      value: `${LEARNERS_TRAINED} Learners Trained` },
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
                  src="/bsnl-main.jpg"
                  alt="People connecting colorful puzzle pieces"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">BSNL × Sria Infotech</p>
                    <p className="text-white/60 text-xs mt-0.5">Skill Solution Partner · Telangana &amp; Andhra Pradesh · Since {PARTNERSHIP_YEAR}</p>
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
                SRIA Infotech is the first skill solution partner of BSNL from Telangana and Andhra
                Pradesh, designing and delivering telecom skilling programs across India. Through this
                partnership, we combine BSNL's telecom expertise with Sria's training delivery
                capabilities to build a skilled workforce through technician training and digital
                literacy programs, reaching learners in both urban and underserved regions.
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
                  src="/gallery/bsnl-partnership-signing-01.jpeg"
                  alt="Man standing at BSNL plaque"
                  className={`w-full h-full object-cover ${facePosition("/gallery/bsnl-partnership-signing-01.jpeg")}`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skilling Challenges ── */}
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
                Skilling Challenges<br />We Address Together
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
                  src="/gallery/bsnl-partnership-signing-02.jpeg"
                  alt="Two men holding signed agreement"
                  className={`w-full h-full object-cover ${facePosition("/gallery/bsnl-partnership-signing-02.jpeg")}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Job-Ready Skilling</p>
                    <p className="text-white/60 text-xs mt-0.5">Addressing telecom skilling gaps across Telangana &amp; Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Training Programs & Capabilities ── */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
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
            <h2 className="text-xl font-bold text-white mb-3">Training Programs &amp; Capabilities</h2>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
              Our partnership with BSNL creates a structured skilling pipeline, combining BSNL's
              telecom expertise with Sria Infotech's training delivery and community outreach capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jointPrograms.map((prog, idx) => (
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
                    src={prog.image}
                    alt={prog.alt}
                    className={`w-full h-full object-cover ${facePosition(prog.image)} opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {prog.icon}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {prog.label}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{prog.description}</p>
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
                    alt={item.alt}
                    className={`w-full h-full object-cover ${facePosition(item.image)} group-hover:scale-105 transition-transform duration-500`}
                  />
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
            src="/gallery/bsnl-partnership-signing-03.jpeg"
            alt="Four men holding signed certificate"
            className={`w-full h-full object-cover ${facePosition("/gallery/bsnl-partnership-signing-03.jpeg")}`}
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

      {/* ── Program Portfolio ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Portfolio</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Program Portfolio</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Through our partnership with BSNL, we deliver a comprehensive range of telecom
              skilling and digital literacy programs.
            </p>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programPortfolio.map((program, idx) => (
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
                    src={program.image}
                    alt={program.alt}
                    className={`w-full h-full object-cover ${facePosition(program.image)} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-2.5 bg-white rounded-xl shadow-lg border border-slate-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {program.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{program.description}</p>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      {/* <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl border border-slate-100 p-8 sm:p-10 text-center"
          >
            <Quote className="w-8 h-8 text-orange-300 mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-6">
              "The technician training program gave me hands-on skills I couldn't get anywhere
              else. Within weeks of certification, I was placed with a telecom service partner
              in my home state."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                RK
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">Shashi Kumar</p>
                <p className="text-xs text-slate-500">Program graduate, Telangana training center</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Interested in partnering with us?
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Get in touch to explore how a skilling or solution partnership with SRIA Infotech can
              support your organization's goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BSNL;
