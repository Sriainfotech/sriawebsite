import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, Users, Building2, MapPin, Rocket,
  Lightbulb, Code2, Layers, Briefcase, TrendingUp, Cloud,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const THUB_LOGO = "https://ik.imagekit.io/hps6th7vy/sria/logos/thub.png?tr=f-auto,q-auto,w-320";
const THUB_LOGO_SRCSET = "https://ik.imagekit.io/hps6th7vy/sria/logos/thub.png?tr=f-auto,q-auto,w-160 160w, https://ik.imagekit.io/hps6th7vy/sria/logos/thub.png?tr=f-auto,q-auto,w-320 320w";
const HERO_BACKGROUND = "https://ik.imagekit.io/hps6th7vy/sria/partners/thub.jpg?tr=f-auto,q-auto,w-1600";

// Dummy placeholder values — replace with real figures once available.
const STARTUPS_SUPPORTED = "25+";
const WORKSHOPS_DELIVERED = "15+";
const MENTORSHIP_HOURS = "500+";
const PARTNERSHIP_YEAR = "2023";

const impactItems = [
  { value: STARTUPS_SUPPORTED, label: "Startups Supported", description: "through technology enablement and product engineering guidance." },
  { value: WORKSHOPS_DELIVERED, label: "Workshops Delivered", description: "on innovation, product development, and technology best practices." },
  { value: MENTORSHIP_HOURS,   label: "Mentorship Hours",    description: "contributed to founders and early-stage technical teams." },
];

const challenges = [
  "Early-stage startups needing reliable, enterprise-grade technology partners.",
  "Bridging the gap between innovative ideas and scalable, production-ready products.",
  "Limited access to experienced technical mentorship for founding teams.",
  "Translating R&D and prototypes into deployable, market-ready solutions.",
  "Connecting startups with enterprise-grade engineering practices and delivery discipline.",
];

const jointPrograms = [
  {
    label: "Startup Mentorship",
    description: "Technical mentorship for founding teams navigating product architecture, technology choices, and engineering practices.",
    icon: <Lightbulb className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&fm=webp", alt: "Overhead view of startup workspace",
  },
  {
    label: "Technology Enablement",
    description: "Hands-on support helping startups adopt scalable architectures, cloud infrastructure, and modern development practices.",
    icon: <Cloud className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&fm=webp", alt: "Earth at night from space",
  },
  {
    label: "Product Engineering Support",
    description: "Collaborative product engineering guidance to help startups move from prototype to production-ready solutions.",
    icon: <Code2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fm=webp", alt: "Close-up of computer circuit board",
  },
  {
    label: "Innovation Workshops",
    description: "Workshops and sessions on emerging technology, product strategy, and engineering best practices for founders and teams.",
    icon: <Rocket className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fm=webp", alt: "Woman presenting ideas with sticky notes",
  },
];

const benefits = [
  { title: "Recognized Innovation Hub Partner", description: "Trusted technology collaborator within Telangana's startup and innovation ecosystem.", icon: <Rocket className="w-5 h-5" />,      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=70&fm=webp", alt: "Overhead view of startup workspace" },
  { title: "Startup Ecosystem Access",           description: "Ongoing engagement with early-stage founders, incubated startups, and innovation programs.", icon: <Building2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=70&fm=webp", alt: "Laptop on high-rise office ledge" },
  { title: "Technology Enablement",              description: "Practical support helping startups adopt scalable, production-grade technology practices.", icon: <Cloud className="w-5 h-5" />,       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=70&fm=webp", alt: "Earth at night from space" },
  { title: "Mentorship Network",                  description: "Access to experienced technical mentors supporting founding teams and early product decisions.", icon: <Lightbulb className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=70&fm=webp", alt: "Developers coding on laptops together" },
  { title: "Co-Innovation Opportunities",         description: "Collaborative engagements exploring emerging technology use cases with innovative startups.", icon: <TrendingUp className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70&fm=webp", alt: "Laptop screen showing data analytics" },
  { title: "Community Visibility",                description: "Active participation in Telangana's innovation and startup community events and programs.", icon: <Users className="w-5 h-5" />,      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=70&fm=webp", alt: "Students laughing together at laptop" },
];

const programPortfolio = [
  { title: "MVP Development",             description: "Rapid, scalable minimum viable product builds for early-stage startups.", icon: <Rocket className="w-6 h-6" />,      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&fm=webp", alt: "Overhead view of startup workspace" },
  { title: "Product Engineering",         description: "End-to-end product engineering support from architecture through deployment.", icon: <Code2 className="w-6 h-6" />,    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fm=webp", alt: "Close-up of computer circuit board" },
  { title: "Cloud & DevOps Enablement",   description: "Cloud infrastructure setup, CI/CD pipelines, and DevOps practices for scaling startups.", icon: <Cloud className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&fm=webp", alt: "Earth at night from space" },
  { title: "UI/UX Design Support",        description: "Design guidance helping startups build intuitive, user-centered digital products.", icon: <Layers className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fm=webp", alt: "Developers coding on laptops together" },
  { title: "Technical Mentorship",         description: "One-on-one mentorship sessions for founders and technical leads on product and engineering strategy.", icon: <Lightbulb className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fm=webp", alt: "Woman presenting ideas with sticky notes" },
  { title: "Innovation Workshops",         description: "Sessions on emerging technology trends, product strategy, and engineering best practices.", icon: <Briefcase className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80&fm=webp", alt: "Laptop on high-rise office ledge" },
];

function THub() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="T-Hub — Innovation Hub Partner"
        subtitle="Enabling startups through technology mentorship and product engineering"
        breadcrumbs={[
          { name: "About Us", path: "/about" },
          { name: "Partners", path: "/about/sap-partner" },
          { name: "T-Hub", path: "/partners/t-hub" },
        ]}
        backgroundImage={HERO_BACKGROUND}
      />

      {/* ── Brand Intro ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 mb-8 flex flex-col items-center w-full">
                <img
                  src={THUB_LOGO}
                  srcSet={THUB_LOGO_SRCSET}
                  sizes="160px"
                  alt="T-Hub"
                  className="h-28 object-contain mb-4"
                  width={160}
                  height={112}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.insertAdjacentHTML(
                      "afterbegin",
                      '<span class="h-28 flex items-center justify-center text-orange-500 font-bold text-2xl mb-4">T-Hub</span>'
                    );
                  }}
                />
                <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                  Innovation Hub Partner
                </span>
                <p className="text-slate-500 text-xs">Startup Ecosystem Collaborator</p>
                <p className="text-slate-500 text-xs">Partnership Established {PARTNERSHIP_YEAR}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Innovation Hub", "Startup Ecosystem", "Incubation", "Technology Innovation"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <Building2 className="w-4 h-4 text-orange-500" />, label: "Focus Area", value: "Startup Incubation & Innovation" },
                  { icon: <MapPin    className="w-4 h-4 text-orange-500" />, label: "Region",     value: "Telangana (Hyderabad)" },
                  { icon: <Users     className="w-4 h-4 text-orange-500" />, label: "Reach",      value: `${STARTUPS_SUPPORTED} Startups Supported` },
                ].map((meta, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="mt-0.5 flex-shrink-0">{meta.icon}</div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{meta.label}</p>
                      <p className="text-sm text-slate-800 font-semibold leading-snug">{meta.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

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
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=80&fm=webp"
                  alt="Laptop on high-rise office ledge"
                  className="w-full h-full object-cover"
                  width={660}
                  height={420}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">T-Hub × Sria Infotech</p>
                    <p className="text-white/60 text-xs mt-0.5">Innovation Hub Partner · Hyderabad · Since {PARTNERSHIP_YEAR}</p>
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Overview</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">Partnership Overview</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed text-sm">
                Sria Infotech collaborates with T-Hub, one of Telangana's leading startup
                incubation and innovation hubs, to support early-stage founders and technical
                teams. Through this partnership, we bring product engineering expertise,
                mentorship, and technology enablement to help startups build scalable,
                market-ready solutions.
              </p>
            </motion.div>

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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&fm=webp"
                  alt="Developers coding on laptops together"
                  className="w-full h-full object-cover"
                  width={660}
                  height={288}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Innovation Challenges ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Challenges</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">
                Innovation Challenges<br />We Address Together
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:sticky lg:top-24"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=80&fm=webp"
                  alt="Laptop on high-rise office ledge"
                  className="w-full h-full object-cover"
                  width={660}
                  height={420}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Startup-Ready Engineering</p>
                    <p className="text-white/60 text-xs mt-0.5">Turning ideas into scalable products across Hyderabad's startup ecosystem</p>
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
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Capabilities</span>
            <h2 className="text-xl font-bold text-white mb-3">Programs &amp; Capabilities</h2>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
              Our partnership with T-Hub combines Sria Infotech's engineering expertise with
              T-Hub's startup ecosystem to support founders at every stage of product development.
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
                    width={660}
                    height={144}
                    loading="lazy"
                    decoding="async"
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
            <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Benefits</span>
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
                    width={450}
                    height={112}
                    loading="lazy"
                    decoding="async"
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
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&fm=webp"
            alt="Overhead view of startup workspace"
            className="w-full h-full object-cover"
            width={1600}
            height={500}
            loading="lazy"
            decoding="async"
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
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Impact</span>
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
      </section> */}

      {/* ── Program Portfolio ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-4">Portfolio</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Program Portfolio</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Through our partnership with T-Hub, we support a comprehensive range of product
              engineering and innovation programs for startups.
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
                    width={450}
                    height={144}
                    loading="lazy"
                    decoding="async"
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
              Get in touch to explore how a skilling or solution partnership with Sria Infotech can
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

export default THub;
