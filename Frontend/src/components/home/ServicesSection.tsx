import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Layout, Briefcase, Cloud, Boxes, ShieldCheck, Zap } from "lucide-react";

const sapSolutions = [
  {
    title: "SAP Managed Services",
    link: "/support-maintainance/",
    icon: Settings,
    description: "Comprehensive application management and optimization."
  },
  {
    title: "SAP S/4HANA Implementation",
    link: "/implement",
    icon: Layout,
    description: "End-to-end implementation for the intelligent enterprise."
  },
  {
    title: "SAP Consulting Services",
    link: "/rollouts",
    icon: Briefcase,
    description: "Strategic guidance for your digital roadmap."
  },
  {
    title: "SAP Business Technology",
    link: "/integration/",
    icon: Cloud,
    description: "Leveraging BTP for innovation and integration."
  },
  {
    title: "Odoo Implementation",
    link: "/odooservices/implementation/",
    icon: Boxes,
    description: "Agile and scalable ERP solutions for growing businesses."
  },
  {
    title: "Cloud Migration",
    link: "/solutions/public-cloud",
    icon: Zap,
    description: "Seamless transition to secure cloud environments."
  },
  {
    title: "Security & Compliance",
    link: "/solutions/private-cloud",
    icon: ShieldCheck,
    description: "Ensuring data integrity and regulatory adherence."
  },
  {
    title: "Digital Transformation",
    link: "/services",
    icon: ArrowRight,
    description: "Modernizing legacy systems for the digital age."
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Our Core Services
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sapSolutions.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block h-full p-5 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">
                  <service.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                </div>

                <h4 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>

                <p className="text-[13px] text-slate-500 mb-4 line-clamp-1">
                  {service.description}
                </p>

                <div className="inline-flex items-center text-[13px] font-medium text-primary relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center text-[13px] text-primary font-semibold hover:gap-2 transition-all"
          >
            Explore All Services <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
