import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, Users, Building2, MapPin, GraduationCap,
  BookOpen, Briefcase, Award, Layers, TrendingUp, Handshake,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const TASK_LOGO = "https://ik.imagekit.io/hps6th7vy/sria/logos/task.jpg?tr=f-auto,q-auto,w-320";
const TASK_LOGO_SRCSET = "https://ik.imagekit.io/hps6th7vy/sria/logos/task.jpg?tr=f-auto,q-auto,w-160 160w, https://ik.imagekit.io/hps6th7vy/sria/logos/task.jpg?tr=f-auto,q-auto,w-320 320w";
const HERO_BACKGROUND = "https://ik.imagekit.io/hps6th7vy/sria/partners/task-main.jpg?tr=f-auto,q-auto,w-1600";

// Dummy placeholder values — replace with real figures once available.
const STUDENTS_TRAINED = "8,000+";
const COLLEGES_ENGAGED = "40+";
const DISTRICTS_COVERED = "10+";
const PARTNERSHIP_YEAR = "2022";

const impactItems = [
  { value: STUDENTS_TRAINED,  label: "Students Trained",   description: "through employability and skill development programs." },
  { value: COLLEGES_ENGAGED,  label: "Colleges Engaged",   description: "across engineering, degree, and polytechnic institutions." },
  { value: DISTRICTS_COVERED, label: "Districts Covered",  description: "extending skilling access across Telangana." },
];

const challenges = [
  "Widening gap between academic curricula and industry-ready skill requirements.",
  "Limited exposure to real-world tools and workplace practices for students in smaller towns.",
  "Need for structured, certification-backed employability training at scale.",
  "Inconsistent placement readiness across engineering and degree colleges.",
  "Rapidly evolving skill demands in IT, emerging technology, and digital roles.",
];

const jointPrograms = [
  {
    label: "Employability Training",
    description: "Structured training programs covering technical, communication, and workplace-readiness skills for graduating students.",
    icon: <GraduationCap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Students laughing together at laptop",
  },
  {
    label: "Industry-Aligned Curriculum",
    description: "Co-developed training content aligned with current industry practices and emerging technology requirements.",
    icon: <BookOpen className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80", alt: "Curved library shelves full of books",
  },
  {
    label: "Campus Engagement",
    description: "On-campus training drives and workshops delivered across engineering and degree colleges in Telangana.",
    icon: <Users className="w-5 h-5" />,
    image: "/campus.jpg",
  },
  {
    label: "Placement Support",
    description: "Assessment-backed certification and placement readiness support to help students transition into the workforce.",
    icon: <Briefcase className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", alt: "Colleagues high-fiving at desk",
  },
];

const benefits = [
  { title: "Recognized Skill Alliance Partner", description: "Trusted training partner supporting Telangana's academia-industry skilling mission.", icon: <Handshake className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=70", alt: "Students laughing together at laptop" },
  { title: "Structured Curriculum Design",       description: "Employability programs designed around real industry requirements and evolving skill demands.", icon: <BookOpen className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=70", alt: "Curved library shelves full of books" },
  { title: "Statewide Campus Reach",              description: "Training delivery across engineering, degree, and polytechnic colleges throughout Telangana.", icon: <MapPin className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=70", alt: "City skyline aerial view" },
  { title: "Certification Support",               description: "Assessment-backed certification pathways aligned with industry skilling standards.", icon: <Award className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=70", alt: "Colleagues high-fiving at desk" },
  { title: "Student Talent Pipeline",              description: "Access to a growing pipeline of trained, job-ready students across the state.", icon: <Users className="w-5 h-5" />, image: "https://ik.imagekit.io/hps6th7vy/sria/partners/student.jpg?tr=f-auto,q-auto,w-640" },
  { title: "Community & Academic Impact",          description: "Programs designed to strengthen employability outcomes across both urban and semi-urban colleges.", icon: <TrendingUp className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70", alt: "Laptop screen showing data analytics" },
];

const programPortfolio = [
  { title: "IT & Software Skilling",          description: "Foundational and advanced technical training for engineering and computer science students.", icon: <Layers className="w-6 h-6" />,        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80", alt: "Curved library shelves full of books" },
  { title: "Soft Skills & Communication",       description: "Workplace communication, teamwork, and interview-readiness training for students.", icon: <Users className="w-6 h-6" />,               image: "https://ik.imagekit.io/hps6th7vy/sria/partners/soft-skill-comm.jpg?tr=f-auto,q-auto,w-640" },
  { title: "Campus-to-Corporate Bridge",        description: "Structured programs helping students transition smoothly from academic to professional environments.", icon: <Handshake className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Students laughing together at laptop" },
  { title: "Emerging Tech Bootcamps",           description: "Focused bootcamps on emerging technology areas aligned with current industry hiring trends.", icon: <TrendingUp className="w-6 h-6" />,   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", alt: "Laptop screen showing data analytics" },
  { title: "Certification Programs",            description: "Structured assessments and certificates aligned with employability and industry standards.", icon: <Award className="w-6 h-6" />,        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", alt: "Colleagues high-fiving at desk" },
  { title: "Placement Assistance",              description: "Support connecting trained students with employment and internship opportunities.", icon: <Briefcase className="w-6 h-6" />,           image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", alt: "Woman presenting ideas with sticky notes" },
];

function TASK() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="TASK — Skill Alliance Partner"
        subtitle="Bridging academia and industry through employability training"
        breadcrumbs={[
          { name: "About Us", path: "/about" },
          { name: "Partners", path: "/about/sap-partner" },
          { name: "TASK", path: "/partners/task" },
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
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 mb-8 flex flex-col items-center w-full">
                <img
                  src={TASK_LOGO}
                  srcSet={TASK_LOGO_SRCSET}
                  sizes="160px"
                  alt="TASK"
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
                      '<span class="h-28 flex items-center justify-center text-orange-500 font-bold text-2xl mb-4">TASK</span>'
                    );
                  }}
                />
                <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                  Skill Alliance Partner
                </span>
                <p className="text-slate-500 text-xs">Telangana Academy for Skill and Knowledge</p>
                <p className="text-slate-400 text-xs">Partnership Established {PARTNERSHIP_YEAR}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Skill Alliance", "Employability Training", "Academia-Industry Bridge", "Youth Skilling"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <Building2 className="w-4 h-4 text-orange-500" />, label: "Focus Area", value: "Skill Development & Employability" },
                  { icon: <MapPin    className="w-4 h-4 text-orange-500" />, label: "Region",     value: "Telangana" },
                  { icon: <Users     className="w-4 h-4 text-orange-500" />, label: "Reach",      value: `${STUDENTS_TRAINED} Students Trained` },
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
                  src="https://ik.imagekit.io/hps6th7vy/sria/partners/task-skill-partner.jpg?tr=f-auto,q-auto,w-960"
                  alt="Businessmen exchanging cards during meeting"
                  className="w-full h-full object-cover"
                  width={660}
                  height={420}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">TASK × Sria Infotech</p>
                    <p className="text-white/60 text-xs mt-0.5">Skill Alliance Partner · Telangana · Since {PARTNERSHIP_YEAR}</p>
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
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Overview</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">Partnership Overview</h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed text-sm">
                SRIA Infotech collaborates with TASK (Telangana Academy for Skill and Knowledge)
                to bridge the gap between academic learning and industry expectations. Through
                this alliance, we deliver structured employability training programs to students
                across engineering, degree, and polytechnic colleges, preparing them for
                job-ready careers.
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
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80"
                  alt="Curved library shelves full of books"
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

      {/* ── Skilling Challenges ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Challenges</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">
                Employability Challenges<br />We Address Together
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                  alt="Woman presenting ideas with sticky notes"
                  className="w-full h-full object-cover"
                  width={660}
                  height={420}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Job-Ready Skilling</p>
                    <p className="text-white/60 text-xs mt-0.5">Closing the academia-industry gap across Telangana</p>
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
              Our alliance with TASK creates a structured skilling pipeline, combining
              industry-aligned training with campus-wide delivery across Telangana.
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&q=80"
            alt="Curved library shelves full of books"
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
              Through our alliance with TASK, we deliver a comprehensive range of employability
              and skill development programs.
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

export default TASK;
