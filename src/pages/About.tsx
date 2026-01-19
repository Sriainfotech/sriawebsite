import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/home/CTASection";
import heroAbout from "@/assets/hero-about.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutOffice from "@/assets/about-office.jpg";

const values = [
  {
    icon: Heart,
    title: "Trust & Integrity",
    description: "We build relationships founded on trust, transparency, and ethical business practices.",
  },
  {
    icon: Users,
    title: "Partner-Centric",
    description: "Our clients are partners. We prioritize their success as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver exceptional quality in every solution and service we provide.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With offices in India and USA, we serve clients worldwide with local expertise.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="About Us"
          subtitle="A global IT services and consulting firm driving digital transformation"
          breadcrumbs={[{ name: "About", path: "/about" }]}
          backgroundImage={heroAbout}
        />

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Who We Are
                </span>
                <h2 className="section-title">
                  Empowering Businesses Through Digital Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  SRIA Infotech is a global IT services and consulting firm focusing on 
                  digital transformation through technical expertise and a partner-centric approach. 
                  We specialize in SAP solutions, cloud services, and data analytics to help 
                  organizations achieve operational excellence.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our partner-centric approach sets us apart, as we believe in establishing 
                  strong relationships built on trust, integrity, and effective communication. 
                  We are committed to being humble in our dealings, providing timely responses, 
                  and fostering transparent interactions with our clients.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {["SAP Expertise", "Cloud Solutions", "Data Analytics", "Digital Transformation"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="image-card">
                    <img 
                      src={aboutTeam} 
                      alt="Team collaboration" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  <div className="image-card mt-8">
                    <img 
                      src={aboutOffice} 
                      alt="Office environment" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary shadow-xl rounded-xl p-6 text-primary-foreground"
                >
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-3xl font-heading font-bold">10+</p>
                      <p className="text-sm opacity-80">Years</p>
                    </div>
                    <div className="w-px h-12 bg-primary-foreground/30" />
                    <div className="text-center">
                      <p className="text-3xl font-heading font-bold">100+</p>
                      <p className="text-sm opacity-80">Clients</p>
                    </div>
                    <div className="w-px h-12 bg-primary-foreground/30" />
                    <div className="text-center">
                      <p className="text-3xl font-heading font-bold">3</p>
                      <p className="text-sm opacity-80">Offices</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the most trusted global technology partner, enabling businesses to 
                  achieve sustainable growth through innovative digital solutions and 
                  transformative SAP implementations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower organizations with cutting-edge SAP solutions and digital 
                  technologies, delivered through a partner-centric approach that prioritizes 
                  trust, quality, and long-term success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="section-title">
                What We Stand For
              </h2>
              <p className="section-subtitle mx-auto">
                Our core values guide every decision we make and every solution we deliver.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <value.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
