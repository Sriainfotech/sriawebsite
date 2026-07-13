import { motion } from "framer-motion";
import { Shield, Mail, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "1",
    title: "Introduction",
    content: `SRIA Infotech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by SRIA Infotech when you access or use our website and services.`,
  },
  {
    number: "2",
    title: "Information We Collect",
    content: "We collect information that you provide to us when you:",
    bullets: [
      "Fill out a contact form on our website.",
      "Subscribe to our newsletter.",
      "Contact us via email or phone.",
    ],
  },
  {
    number: "3",
    title: "How We Use Your Information",
    content: "We use the information we collect to:",
    bullets: [
      "Respond to your inquiries and provide customer support.",
      "Send you newsletters and marketing communications (if you have opted in).",
      "Improve our website and services.",
    ],
  },
  {
    number: "4",
    title: "Compliance with Laws",
    content: `We comply with the India DPDP Act 2023, GDPR, and CCPA. You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at hr@sriainfotech.com.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Privacy Policy"
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
            className="flex items-start gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-12"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">Your Privacy Matters</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                SRIA Infotech is committed to protecting your personal data in compliance with the India DPDP Act 2023, GDPR, and CCPA. Read this policy carefully to understand your rights.
              </p>
            </div>
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
                  <ul className="mt-3 space-y-2">
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
              <p className="text-white font-bold text-lg">Contact our Privacy Team</p>
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
            <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
            <span className="text-slate-200">·</span>
            <Link to="/cookies" className="hover:text-orange-500 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
