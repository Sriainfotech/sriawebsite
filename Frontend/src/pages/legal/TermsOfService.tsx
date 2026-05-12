import { motion } from "framer-motion";
import { ScrollText, Mail, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: `By accessing and using this website (sriainfotech.com), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.`,
  },
  {
    number: "2",
    title: "Use License",
    content: `Permission is granted to temporarily download one copy of the materials on SRIA Infotech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`,
    bullets: [
      "Modify or copy the materials.",
      "Use the materials for any commercial purpose or public display.",
      "Attempt to decompile or reverse engineer any software on the website.",
      "Remove any copyright or other proprietary notations from the materials.",
    ],
  },
  {
    number: "3",
    title: "Disclaimer",
    content: `The materials on SRIA Infotech's website are provided on an 'as is' basis. SRIA Infotech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
  },
  {
    number: "4",
    title: "Governing Law",
    content: `These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.`,
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Terms of Service"
        subtitle="Last Updated: March 2026"
        backgroundImage="/contactus.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-12"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
              <ScrollText className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">Please Read Carefully</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                These Terms of Service govern your use of the SRIA Infotech website. By continuing to use our services, you confirm that you have read, understood, and agree to be bound by these terms.
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
              <p className="text-white font-bold text-lg">Get in Touch with Our Team</p>
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
            <Link to="/cookies" className="hover:text-orange-500 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
