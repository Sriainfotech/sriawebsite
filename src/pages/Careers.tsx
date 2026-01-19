import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Lightbulb, Users, Rocket, Coffee, GraduationCap, MapPin, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";

const benefits = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options to help you maintain a healthy balance.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous learning opportunities with certifications, training programs, and mentorship.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive, team-oriented environment.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Clear career paths and opportunities to grow within the organization.",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description: "Competitive compensation, health benefits, and employee wellness programs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Work on cutting-edge technologies and contribute to innovative solutions.",
  },
];

const openings = [
  {
    title: "Senior SAP S/4HANA Consultant",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5-8 years",
    department: "SAP Services",
  },
  {
    title: "SAP Fiori Developer",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    department: "Development",
  },
  {
    title: "SAP BTP Developer",
    location: "Remote / Hyderabad",
    type: "Full-time",
    experience: "3-6 years",
    department: "Cloud Solutions",
  },
  {
    title: "Data Analytics Consultant",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "4-7 years",
    department: "Analytics",
  },
  {
    title: "SAP ABAP Developer",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2-5 years",
    department: "Development",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Careers"
          subtitle="Join our team and be part of transformative digital solutions"
          breadcrumbs={[{ name: "Careers", path: "/careers" }]}
        />

        {/* Culture Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Life at SRIA
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Where Talent Meets{" "}
                  <span className="text-primary">Opportunity</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At SRIA Infotech, we believe our people are our greatest asset. We foster a culture 
                  of innovation, collaboration, and continuous growth. Our partner-centric approach 
                  extends to our team members – we invest in your success.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Join a team of passionate professionals working on cutting-edge SAP solutions 
                  and digital transformation projects for leading enterprises across the globe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Diverse Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <Rocket className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Fast Growth</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Great Culture</span>
                  </div>
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
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
                      <div className="text-3xl font-heading font-bold mb-1">100+</div>
                      <div className="text-sm opacity-80">Team Members</div>
                    </div>
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="text-3xl font-heading font-bold text-foreground mb-1">3</div>
                      <div className="text-sm text-muted-foreground">Global Offices</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="text-3xl font-heading font-bold text-foreground mb-1">10+</div>
                      <div className="text-sm text-muted-foreground">Years Growing</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-accent-foreground">
                      <div className="text-3xl font-heading font-bold mb-1">95%</div>
                      <div className="text-sm opacity-80">Employee Satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Why Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Benefits of Working at SRIA
              </h2>
              <p className="text-muted-foreground text-lg">
                We offer a comprehensive package of benefits to support your professional and personal growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                      <benefit.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Current Openings
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore exciting opportunities to join our growing team.
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {openings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <Link to="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for talented individuals.
              </p>
              <a href="mailto:hr@sriainfotech.com">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                  Send Your Resume
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
