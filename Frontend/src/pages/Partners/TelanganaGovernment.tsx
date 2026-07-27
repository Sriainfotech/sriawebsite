import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, Users, Building2, MapPin, Landmark,
  ShieldCheck, Layers, Briefcase, TrendingUp, Globe2, FileText,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const TELANGANA_LOGO = "/Logos/Emblem_of_Telangana.webp";
const HERO_BACKGROUND = "/tg.jpg";

// Dummy placeholder values — replace with real figures once available.
const PROJECTS_DELIVERED = "10+";
const DEPARTMENTS_SERVED = "6+";
const CITIZENS_REACHED = "1M+";
const PARTNERSHIP_YEAR = "2021";

const impactItems = [
  { value: PROJECTS_DELIVERED,  label: "Government Projects",  description: "delivered across e-governance and digital public infrastructure initiatives." },
  { value: DEPARTMENTS_SERVED,  label: "Departments Served",    description: "supported with technology solutions and system modernization." },
  { value: CITIZENS_REACHED,    label: "Citizens Reached",      description: "through digital service platforms built for public access." },
];

const challenges = [
  "Modernizing legacy government systems without disrupting citizen services.",
  "Bridging the digital divide between urban and rural communities.",
  "Ensuring data security and compliance across sensitive public sector platforms.",
  "Delivering scalable e-governance solutions that serve millions of citizens.",
  "Aligning technology delivery with evolving public policy and administrative needs.",
];

const jointPrograms = [
  {
    label: "e-Governance Platforms",
    description: "Design and development of citizen-facing digital platforms for public service delivery and administrative efficiency.",
    icon: <Landmark className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Students laughing together at laptop",
  },
  {
    label: "Digital Public Infrastructure",
    description: "Building secure, scalable digital infrastructure that supports state-wide governance and public sector operations.",
    icon: <Layers className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", alt: "Earth at night from space",
  },
  {
    label: "Data Security & Compliance",
    description: "Implementing security frameworks and compliance practices aligned with government data protection standards.",
    icon: <ShieldCheck className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80", alt: "Illuminated microchip circuit pattern",
  },
  {
    label: "Citizen Service Delivery",
    description: "Streamlining access to public services through digital portals designed for ease of use across all communities.",
    icon: <Users className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80", alt: "Team meeting with laptops around table",
  },
];

const benefits = [
  { title: "Recognized State Partner",          description: "Trusted technology partner supporting Telangana's digital governance initiatives.", icon: <Landmark className="w-5 h-5" />,     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=70", alt: "Students laughing together at laptop" },
  { title: "Public Sector Delivery Experience",  description: "Proven track record delivering technology solutions for government departments and agencies.", icon: <Briefcase className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=70", alt: "Hand signing document with pen" },
  { title: "Security & Compliance Alignment",    description: "Solutions built to meet government data security, privacy, and compliance requirements.", icon: <ShieldCheck className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=70", alt: "Illuminated microchip circuit pattern" },
  { title: "Statewide Reach",                    description: "Platforms designed to scale across departments and serve citizens throughout Telangana.", icon: <MapPin className="w-5 h-5" />,   image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=70", alt: "City skyline aerial view" },
  { title: "Digital Inclusion Focus",             description: "Solutions designed for accessibility across urban, semi-urban, and rural communities.", icon: <Globe2 className="w-5 h-5" />,    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=70", alt: "Woman teaching coding on laptop" },
  { title: "Innovation Collaboration",            description: "Ongoing collaboration on emerging technology initiatives for public sector modernization.", icon: <TrendingUp className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70", alt: "Laptop screen showing data analytics" },
];

const programPortfolio = [
  { title: "e-Governance Solutions",       description: "End-to-end digital platforms for public service delivery and administrative workflows.", icon: <Landmark className="w-6 h-6" />,   image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Students laughing together at laptop" },
  { title: "Citizen Service Portals",      description: "Web and mobile portals enabling citizens to access government services digitally.", icon: <Users className="w-6 h-6" />,           image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80", alt: "Team meeting with laptops around table" },
  { title: "Data & Records Management",    description: "Secure digital record-keeping and data management systems for government departments.", icon: <FileText className="w-6 h-6" />,     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", alt: "Hand signing document with pen" },
  { title: "Public Sector Analytics",       description: "Data-driven insights supporting policy decisions and administrative planning.", icon: <TrendingUp className="w-6 h-6" />,          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", alt: "Laptop screen showing data analytics" },
  { title: "Digital Infrastructure",         description: "Scalable, secure infrastructure supporting state-wide digital governance initiatives.", icon: <Layers className="w-6 h-6" />,      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", alt: "Earth at night from space" },
  { title: "Compliance & Security",          description: "Frameworks ensuring data protection and regulatory compliance across public platforms.", icon: <ShieldCheck className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80", alt: "Illuminated microchip circuit pattern" },
];

function TelanganaGovernment() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Telangana Government — State Partner"
        subtitle="Supporting digital governance and public sector modernization"
        breadcrumbs={[
          { name: "About Us", path: "/about" },
          { name: "Partners", path: "/about/sap-partner" },
          { name: "Telangana Government", path: "/partners/telangana-government" },
        ]}
        backgroundImage={HERO_BACKGROUND}
      />

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
                  src={TELANGANA_LOGO}
                  alt="Government of Telangana"
                  className="h-28 object-contain mb-4"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.insertAdjacentHTML(
                      "afterbegin",
                      '<span class="h-28 flex items-center justify-center text-orange-500 font-bold text-2xl mb-4">Telangana</span>'
                    );
                  }}
                />
                <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                  State Partner
                </span>
                <p className="text-slate-500 text-xs">Government of Telangana</p>
                <p className="text-slate-400 text-xs">Partnership Established {PARTNERSHIP_YEAR}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["State Partner", "e-Governance", "Digital Telangana", "Public Sector IT"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                ))}
              </div>

              {/* Meta cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <Building2 className="w-4 h-4 text-orange-500" />, label: "Focus Area", value: "e-Governance & Digital Transformation" },
                  { icon: <MapPin    className="w-4 h-4 text-orange-500" />, label: "Region",     value: "Telangana" },
                  { icon: <Users     className="w-4 h-4 text-orange-500" />, label: "Reach",      value: `${CITIZENS_REACHED} Citizens Served` },
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
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"
                  alt="Students laughing together at laptop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Government of Telangana × Sria Infotech</p>
                    <p className="text-white/60 text-xs mt-0.5">State Partner · Digital Governance · Since {PARTNERSHIP_YEAR}</p>
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
                SRIA Infotech partners with the Government of Telangana to support digital
                governance and public sector modernization initiatives. Through this collaboration,
                we bring technology delivery expertise to help build secure, scalable, and
                citizen-friendly digital platforms across state government departments.
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80"
                  alt="Hand signing document with pen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Governance Challenges ── */}
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
                Governance Challenges<br />We Address Together
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80"
                  alt="Illuminated microchip circuit pattern"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Secure Digital Governance</p>
                    <p className="text-white/60 text-xs mt-0.5">Modernizing public services across Telangana</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Programs & Capabilities ── */}
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
            <h2 className="text-xl font-bold text-white mb-3">Programs &amp; Capabilities</h2>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
              Our partnership with the Government of Telangana supports the delivery of secure,
              citizen-centric digital platforms across public sector departments.
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
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.alt}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {prog.icon}
                    </div>
                  </div>
                </div>
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
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80"
            alt="Students laughing together at laptop"
            className="w-full h-full object-cover"
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
              Through our partnership with the Government of Telangana, we support a range of
              digital governance and public sector technology initiatives.
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
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
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

export default TelanganaGovernment;
