import { motion } from "framer-motion";
import { Cookie, Mail, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "1",
    title: "What Are Cookies",
    content: `Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs.`,
  },
  {
    number: "2",
    title: "How We Use Cookies",
    content: `We use first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.`,
  },
  {
    number: "3",
    title: "Types of Cookies We Use",
    content: "The cookies used on our website are grouped into the following categories:",
    bullets: [
      "Necessary — Essential for the basic functions of the website. The website will not function properly without these cookies.",
      "Analytics — Help us understand how visitors interact with the website by collecting and reporting information anonymously.",
      "Functional — Remember your preferences and settings to improve your experience on return visits.",
    ],
  },
  {
    number: "4",
    title: "Manage Cookie Preferences",
    content: `You can change your cookie preferences any time by clicking the cookie consent button on our website. Additionally, most browsers allow you to refuse cookies through their settings. Please note that disabling certain cookies may affect the functionality of our website.`,
  },
];

const cookieTypes = [
  { type: "Necessary", color: "bg-emerald-500", desc: "Always active — required for core site functions." },
  { type: "Analytics",  color: "bg-sky-500",     desc: "Helps us improve by tracking anonymous usage." },
  { type: "Functional", color: "bg-violet-500",  desc: "Remembers your preferences & settings." },
];

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Cookie Policy"
        subtitle="Last Updated: March 2026"
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/contactus.jpg?tr=f-auto,q-auto,w-2000"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-12"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">About Our Cookie Usage</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We use cookies to ensure our website functions properly and to understand how visitors interact with our content. You can manage your preferences at any time.
              </p>
            </div>
          </motion.div>

          {/* Cookie type cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {cookieTypes.map((c, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${c.color}`} />
                  <span className="font-bold text-slate-900 text-sm">{c.type}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative pl-6 border-l-2 border-slate-100 hover:border-orange-400 transition-colors duration-300"
              >
                <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-white border-2 border-slate-200 group-hover:border-orange-400 flex items-center justify-center transition-colors duration-300">
                  <span className="text-[10px] font-black text-slate-400 group-hover:text-orange-500">{sec.number}</span>
                </span>

                <h2 className="text-lg font-bold text-slate-900 mb-3">{sec.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{sec.content}</p>

                {sec.bullets && (
                  <ul className="mt-3 space-y-2.5">
                    {sec.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-slate-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-slate-950 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <div>
              <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-1">Questions?</p>
              <p className="text-white font-bold text-lg">Contact Us About Cookies</p>
              <p className="text-slate-400 text-sm mt-1">hr@sriainfotech.com</p>
            </div>
            <a href="mailto:hr@sriainfotech.com"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all flex-shrink-0"
            >
              <Mail className="w-4 h-4" /> Email Us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Legal nav */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <span className="text-slate-200">·</span>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
