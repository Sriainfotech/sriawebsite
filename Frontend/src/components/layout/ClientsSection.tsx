import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiSap, SiSalesforce } from "react-icons/si";
import { FaMicrosoft, FaAws } from "react-icons/fa";

const partners = [
  {
    name: "SAP",
    icon: SiSap,
    description: "Gold Partner",
  },
  {
    name: "Microsoft",
    icon: FaMicrosoft,
    description: "Technology Alliance",
  },
  {
    name: "AWS",
    icon: FaAws,
    description: "Cloud Partner",
  },
  {
    name: "Salesforce",
    icon: SiSalesforce,
    description: "Implementation Partner",
  },
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Strategic Alliances</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-5 leading-tight">
              Trusted by Industry Leaders
            </h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-5" />
            <p className="text-slate-500 leading-relaxed mb-8">
              We collaborate with global technology giants to deliver world-class solutions for your enterprise.
            </p>
            <Link to="/about/sap-partner">
              <button className="group inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all">
                View Our Partnerships <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                  <partner.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{partner.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
