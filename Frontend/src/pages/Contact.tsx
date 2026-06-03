import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mail, Phone, Send, CheckCircle, Loader2,
  Clock, MessageSquare, ArrowRight, Building2, Users, Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/layout/PageHeader";
import axiosInstance from "@/lib/axios";

const offices = [
  {
    title: "India – Kondapur",
    flag: "🇮🇳",
    address: "Udaya Vensar Apartments, Rd Number 1, Hanuman Nagar, Kothaguda, Hyderabad, Telangana 500084",
    phone: "+91 97013 14138",
    email: "hr@sriainfotech.com",
  },
  {
    title: "India – Amaravati",
    flag: "🇮🇳",
    address: "Amaravati, Telangana 500081",
    phone: "+91 95539 55893",
    email: "hr@sriainfotech.com",
  },
  {
    title: "India – Mulugu",
    flag: "🇮🇳",
    address: "TASK Center, Mulugu, Telangana 506343",
    phone: "+91 90145 52492",
    email: "hr@sriainfotech.com",
  },
  {
    title: "USA – Pennsylvania",
    flag: "🇺🇸",
    address: "18 Hunters Dr, Gilbertsville, PA 19525-6601, USA",
    phone: "+91 99897 95335",
    email: "hr@sriainfotech.com",
  },
];

const stats = [
  { icon: Clock, value: "< 24 hrs", label: "Response Time" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Globe, value: "2", label: "Countries" },
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
      const response = await axiosInstance.post("/contact", formData);
      if (response.data.success) {
        setIsSubmitted(true);
        toast({ title: "Message Sent!", description: response.data.message || "We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast({ title: "Error", description: response.data.message || "Failed to send message.", variant: "destructive" });
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.response?.data?.message || "Something went wrong. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team — we respond within 24 hours."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454682/sria/contactus.jpg"
      />

      {/* ── Form + Info ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left: info panel — 2/5 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                  Let's Start a<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Conversation</span>
                </h2>
                <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-5" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether you have a project in mind, a question about our services, or just want to say hello — our team is ready to help.
                </p>
              </div>

              {/* Quick contacts */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 97013 14138", href: "tel:+919701314138" },
                  { icon: Mail, label: "Email Us", value: "hr@sriainfotech.com", href: "mailto:hr@sriainfotech.com" },
                  { icon: MapPin, label: "Head Office", value: "Kondapur, Hyderabad, India", href: null },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item.href ? (
                      <a href={item.href}
                        className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                          <item.icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-400 text-xs">{item.label}</p>
                          <p className="text-slate-800 text-sm font-semibold truncate">{item.value}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">{item.label}</p>
                          <p className="text-slate-800 text-sm font-semibold">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center"
                  >
                    <s.icon className="w-4 h-4 text-orange-500 mx-auto mb-2" />
                    <p className="text-slate-900 font-bold text-lg leading-none">{s.value}</p>
                    <p className="text-slate-400 text-xs mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: form — 3/5 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 relative"
            >
              <div className="bg-slate-950 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
                />
                <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Message Us</p>
                      <h2 className="text-white font-bold text-xl leading-tight">Send a Message</h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                          Full Name <span className="text-orange-400">*</span>
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full h-11 px-4 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.09] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                          Email <span className="text-orange-400">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full h-11 px-4 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.09] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                        Phone <span className="text-slate-600 normal-case font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.09] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                        Message <span className="text-orange-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or requirements..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500/60 focus:bg-white/[0.09] transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-70 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                      ) : isSubmitted ? (
                        <><CheckCircle className="w-4 h-4" /> Message Sent!</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </motion.button>

                    <p className="text-slate-600 text-xs text-center">
                      By submitting, you agree to our privacy policy. We'll never spam.
                    </p>
                  </form>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-orange-200/40 pointer-events-none -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest">Where We Are</p>
              <h2 className="text-slate-900 font-bold text-2xl leading-tight">Our Offices</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((office, i) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {/* Flag + title */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-2xl leading-none">{office.flag}</span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors leading-tight">
                    {office.title}
                  </h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-4 flex-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-500 text-xs leading-relaxed">{office.address}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 mb-4" />

                {/* Contact links */}
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-orange-500 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-orange-400 flex-shrink-0" />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-orange-500 transition-colors"
                  >
                    <Mail className="w-3 h-3 text-orange-400 flex-shrink-0" />
                    {office.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-2">Find Us</span>
            <h2 className="text-slate-900 font-bold text-2xl">Head Office – Kondapur, Hyderabad</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg relative"
          >
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-slate-700 text-xs font-semibold">SRIA Infotech, Kondapur</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.944798585087!2d78.36957459999999!3d17.462356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ceea49d8d9%3A0x23e7ee8e40d707ae!2sUdaya%20Vensar%20Apartments!5e0!3m2!1sen!2sin!4v1780461869992!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="SRIA Infotech Location"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
