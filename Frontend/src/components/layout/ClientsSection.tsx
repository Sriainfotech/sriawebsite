import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SiSap, SiSalesforce } from "react-icons/si";
import { FaMicrosoft, FaAws } from "react-icons/fa";

const ClientsSection = () => {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 lg:pt-2"
          >
            <span className="inline-block text-slate-500 font-semibold tracking-widest uppercase text-xs mb-4">Strategic Alliances</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-5 leading-tight">
              Trusted by Industry Leaders
            </h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-5" />
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              We collaborate with global technology giants to deliver world-class solutions for your enterprise.
            </p>
            <Link to="/about/sap-partner">
              <button className="group inline-flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-orange-500 transition-colors">
                View Our Partnerships <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/3 w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {/* SAP — flagship 2x wide hero card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="col-span-2 group bg-slate-900 border border-slate-800 rounded-2xl p-7 flex items-center gap-6 hover:border-orange-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400" />
                <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <SiSap className="w-9 h-9 text-orange-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-white text-lg">SAP</p>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-[10px] font-bold">
                      <Star className="w-2.5 h-2.5 fill-current" /> Gold Partner
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">Our flagship alliance — powering enterprise transformation across S/4HANA, BTP, and the full SAP portfolio.</p>
                </div>
              </motion.div>

              {/* Microsoft */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-all duration-300">
                  <FaMicrosoft className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Microsoft</p>
                  <p className="text-xs text-slate-400 mt-0.5">Technology Alliance</p>
                </div>
              </motion.div>

              {/* AWS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-all duration-300">
                  <FaAws className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">AWS</p>
                  <p className="text-xs text-slate-400 mt-0.5">Cloud Partner</p>
                </div>
              </motion.div>

              {/* Salesforce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-all duration-300">
                  <SiSalesforce className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Salesforce</p>
                  <p className="text-xs text-slate-400 mt-0.5">Implementation Partner</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
