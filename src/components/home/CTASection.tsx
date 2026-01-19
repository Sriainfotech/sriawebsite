import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroContact from "@/assets/hero-contact.jpg";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroContact} 
              alt="City skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Let's discuss how SRIA Infotech can help you achieve your digital transformation 
              goals with our expert SAP and cloud solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg group w-full sm:w-auto"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Contact Quick Links */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-primary-foreground/80">
              <a
                href="mailto:info@sriainfotech.com"
                className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@sriainfotech.com
              </a>
              <a
                href="tel:+919014552492"
                className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91-9014552492
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
