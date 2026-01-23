import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/layout/PageHeader";
import heroContact from "@/assets/hero-contact.jpg";
import axiosInstance from "@/lib/axios";

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

    try {
      const response = await axiosInstance.post('/contact', formData);

      if (response.data.success) {
        setIsSubmitted(true);
        toast({ title: "Message Sent!", description: response.data.message || "We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast({ title: "Error", description: response.data.message || "Failed to send message.", variant: "destructive" });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({ title: "Error", description: error.response?.data?.message || "Something went wrong. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader title="Contact Us" subtitle="Get in touch with our team" breadcrumbs={[{ name: "Contact", path: "/contact" }]} backgroundImage={heroContact} />

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</span>
              <h2 className="section-title">Send Us a Message</h2>
              <p className="text-muted-foreground text-lg mb-8">Fill out the form and we'll respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium text-foreground mb-2">Full Name *</label><Input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="h-12 text-base" /></div>
                  <div><label className="block text-sm font-medium text-foreground mb-2">Email *</label><Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="h-12 text-base" /></div>
                </div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Phone</label><Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" className="h-12 text-base" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Message *</label><Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project..." rows={6} className="text-base" /></div>
                <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                  {isSubmitting ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending...</span> : isSubmitted ? <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sent!</span> : <span className="flex items-center gap-2"><Send className="w-4 h-4" />Send Message</span>}
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Offices</span>
              <h2 className="section-title">Global Locations</h2>
              <div className="space-y-6 mt-8">
                {offices.map((office, i) => (
                  <motion.div key={office.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-3"><div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>{office.title}</h3>
                    <div className="space-y-3 pl-13">
                      <p className="text-muted-foreground text-base leading-relaxed">{office.address}</p>
                      <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-base text-foreground hover:text-primary"><Phone className="w-4 h-4" />{office.phone}</a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-base text-foreground hover:text-primary"><Mail className="w-4 h-4" />{office.email}</a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 rounded-xl overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0825025699913!2d78.35776897516617!3d17.49489998339951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9373a7fc9889%3A0xbba26a8d54eb8c76!2sMiyapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1705656323456!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
