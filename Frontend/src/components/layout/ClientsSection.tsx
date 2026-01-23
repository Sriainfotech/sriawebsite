import { motion } from "framer-motion";
import { Building2, Users, Globe2, Cloud } from "lucide-react";

const partners = [
    { name: "SAP", icon: Globe2 },
    { name: "Microsoft", icon: Building2 },
    { name: "AWS", icon: Cloud },
    { name: "Salesforce", icon: Users },
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3"
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Strategic Alliances</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Trusted by Industry Leaders</h2>
                        <p className="text-muted-foreground">
                            We collaborate with global technology giants to deliver world-class solutions for your enterprise.
                        </p>
                    </motion.div>

                    {/* Partners Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                whileHover={{ scale: 1.05 }}
                                animate={{
                                    boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 20px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
                                }}
                                transition={{
                                    boxShadow: { duration: 2, repeat: Infinity },
                                    scale: { duration: 0.2 }
                                }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 group cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <partner.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">{partner.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
