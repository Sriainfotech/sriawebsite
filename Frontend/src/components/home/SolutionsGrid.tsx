import { motion } from "framer-motion";
import { CheckCircle2, Database, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const expertiseData = {
    sap: {
        title: "Enterprise Solutions (SAP)",
        icon: Cloud,
        items: [
            {
                title: "SAP Financial Management",
                tagline: "Real-time, Automated, Insightful financial operations.",
                link: "/solutions/financial",
            },
            {
                title: "SAP Private Cloud",
                tagline: "Intelligent, Real-time, Seamless cloud transformation.",
                link: "/solutions/private-cloud",
            },
            {
                title: "SAP SuccessFactors",
                tagline: "Talent, Workforce, Experience management solutions.",
                link: "/solutions/successfactors",
            },
            {
                title: "SAP CPI",
                tagline: "Integrated, Predictive, Intelligent connectivity.",
                link: "/solutions/cpi",
            },
            {
                title: "SAP Public Cloud",
                tagline: "Scalable, Modern, Efficient ERP in the cloud.",
                link: "/solutions/public-cloud",
            },
        ],
    },
    analytics: {
        title: "Data Analytics",
        icon: Database,
        items: [
            {
                title: "Business Intelligence",
                tagline: "Transform raw data into actionable business insights.",
                link: "/additionalServices/dataanalytics",
            },
            {
                title: "Predictive Analytics",
                tagline: "Anticipate market trends with AI-driven forecasting.",
                link: "/additionalServices/dataanalytics",
            },
            {
                title: "Data Visualization",
                tagline: "Interactive dashboards for real-time decision making.",
                link: "/additionalServices/dataanalytics",
            },
            {
                title: "Big Data Solutions",
                tagline: "Scalable architecture for processing massive datasets.",
                link: "/additionalServices/dataanalytics",
            },
        ],
    },
};

const SolutionsGrid = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Expertise
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* SAP Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                            <expertiseData.sap.icon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-slate-900">{expertiseData.sap.title}</h3>
                        </div>

                        <div className="space-y-8">
                            {expertiseData.sap.items.map((item, idx) => (
                                <Link key={idx} to={item.link} className="group block">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1.5">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-base text-slate-500 mt-1">
                                                {item.tagline}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Data Analytics Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                            <expertiseData.analytics.icon className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-slate-900">{expertiseData.analytics.title}</h3>
                        </div>

                        <div className="space-y-8">
                            {expertiseData.analytics.items.map((item, idx) => (
                                <Link key={idx} to={item.link} className="group block">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1.5">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600/60 group-hover:text-blue-600 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-base text-slate-500 mt-1">
                                                {item.tagline}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link to="/contactus">
                        <button className="bg-slate-900 text-white px-8 py-3 text-base rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
                            Get Started with Our Expertise
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsGrid;
