import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Lightbulb, Users, Rocket, Coffee, GraduationCap, MapPin, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";
import heroCareers from "@/assets/hero-careers.jpg";

const benefits = [
 { icon: Heart, title: "Work-Life Balance", description: "Flexible hours and remote options." },
 { icon: GraduationCap, title: "Learning & Growth", description: "Certifications and training programs." },
 { icon: Users, title: "Collaborative Culture", description: "Supportive, team-oriented environment." },
 { icon: Rocket, title: "Career Growth", description: "Clear paths and opportunities." },
 { icon: Coffee, title: "Great Perks", description: "Competitive pay and wellness programs." },
 { icon: Lightbulb, title: "Innovation Focus", description: "Work on cutting-edge tech." },
];

const openings = [
 { title: "Senior SAP S/4HANA Consultant", location: "Hyderabad", type: "Full-time", experience: "5-8 years" },
 { title: "SAP Fiori Developer", location: "Hyderabad", type: "Full-time", experience: "3-5 years" },
 { title: "SAP BTP Developer", location: "Remote", type: "Full-time", experience: "3-6 years" },
 { title: "Data Analytics Consultant", location: "Hyderabad", type: "Full-time", experience: "4-7 years" },
];

const Careers = () => (
 <div className="min-h-screen">
 <PageHeader title="Careers" subtitle="Join our team and be part of transformative digital solutions" breadcrumbs={[{ name: "Careers", path: "/careers" }]} backgroundImage={heroCareers} />

 <section className="section-padding">
 <div className="container-custom">
 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
 <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Join Us</span>
 <h2 className="section-title">Benefits at SRIA</h2>
 </motion.div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {benefits.map((b, i) => (
 <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
 <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all h-full text-center">
 <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
 <b.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
 </div>
 <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{b.title}</h3>
 <p className="text-muted-foreground">{b.description}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section className="section-padding bg-secondary/30">
 <div className="container-custom">
 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
 <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Open Positions</span>
 <h2 className="section-title">Current Openings</h2>
 </motion.div>
 <div className="space-y-4 max-w-4xl mx-auto">
 {openings.map((job, i) => (
 <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
 <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
 <div>
 <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{job.title}</h3>
 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
 <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
 <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
 <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.experience}</span>
 </div>
 </div>
 <Link to="/contact"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Apply Now<ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 </div>
);

export default Careers;

