import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import heroContact from "@/assets/hero-contact.jpg";

const offices = [
  { title: "India - Miyapur", address: "First Floor, 1-121/63 Survey No. 63 Part, Miyapur, Telangana 500049", phone: "+91-9014552492", email: "info@sriainfotech.com" },
  { title: "India - Knowledge City", address: "Plot No 1/C, Sy No 83/1, Raidurgam, Hyderabad Knowledge City, Telangana 500081", phone: "+91-9014552492", email: "info@sriainfotech.com" },
  { title: "USA", address: "18 Hunters Dr, Gilbertsville, PA 19525-6601 USA", phone: "+1-6142167070", email: "info@sriainfotech.com" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader title="Contact Us" subtitle="Get in touch with our team" breadcrumbs={[{ name: "Contact", path: "/contact" }]} backgroundImage={heroContact} />

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</span>
                <h2 className="section-title">Send Us a Message</h2>
                <p className="text-muted-foreground text-lg mb-8">Fill out the form and we'll respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-medium text-foreground mb-2">Full Name *</label><Input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="h-12" /></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Email *</label><Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="h-12" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-foreground mb-2">Phone</label><Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" className="h-12" /></div>
                  <div><label className="block text-sm font-medium text-foreground mb-2">Message *</label><Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project..." rows={5} /></div>
                  <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                    {isSubmitting ? <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending...</span> : isSubmitted ? <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" />Sent!</span> : <span className="flex items-center gap-2"><Send className="w-5 h-5" />Send Message</span>}
                  </Button>
                </form>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Offices</span>
                <h2 className="section-title">Global Locations</h2>
                <div className="space-y-6 mt-8">
                  {offices.map((office, i) => (
                    <motion.div key={office.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2"><div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"><MapPin className="w-4 h-4 text-primary" /></div>{office.title}</h3>
                      <div className="space-y-3 pl-10">
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                        <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-sm text-foreground hover:text-primary"><Phone className="w-4 h-4" />{office.phone}</a>
                        <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-sm text-foreground hover:text-primary"><Mail className="w-4 h-4" />{office.email}</a>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl overflow-hidden border border-border">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0825025699913!2d78.35776897516617!3d17.49489998339951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9373a7fc9889%3A0xbba26a8d54eb8c76!2sMiyapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1705656323456!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
