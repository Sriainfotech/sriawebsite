import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import axiosInstance from "@/lib/axios";

const HeroSection = ({ customTitle }: { customTitle?: string }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [isLoading, setIsLoading] = useState(false);
 const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
 const { toast } = useToast();
 const videoUrl = "Sria Website Video.mp4";

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target;
 setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsLoading(true);
 try {
 const response = await axiosInstance.post('/download-profile', formData);
 if (response.data.success) {
 toast({ title: "Success", description: "Your request has been received. Downloading profile..." });
 setIsOpen(false);
 setFormData({ name: "", email: "", phone: "" });
 const link = document.createElement('a');
 link.href = '/SRIA Company Profile.pdf';
 link.download = 'SRIA Company Profile.pdf';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
 }
 } catch (error) {
 console.error("Error submitting profile request:", error);
 toast({ title: "Error", description: "Failed to submit request. Please try again.", variant: "destructive" });
 } finally {
 setIsLoading(false);
 }
 };

 return (
 <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
 {/* Video Background */}
 <div className="absolute inset-0 z-0">
 <video
 autoPlay muted loop playsInline
 preload="metadata"
 poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=60"
 className="absolute inset-0 w-full h-full object-cover"
 style={{ filter: "brightness(0.45) contrast(1.15) saturate(0.9)" }}
 >
 <source src={videoUrl} type="video/mp4" />
 </video>
 {/* Cinematic gradient overlays */}
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
 </div>

 {/* Animated floating orbs */}
 <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
 <motion.div
 animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
 transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
 className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/8 blur-3xl"
 />
 <motion.div
 animate={{ x: [0, -40, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
 transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
 className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-amber-400/6 blur-3xl"
 />
 </div>

 {/* Subtle grid pattern */}
 <div className="absolute inset-0 z-[1] opacity-5 pointer-events-none"
 style={{
 backgroundImage: `linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`,
 backgroundSize: "80px 80px"
 }}
 />

 <div className="container-custom relative z-10 w-full">
 <div className="max-w-4xl mx-auto text-center">

 {/* Badge */}
 <motion.div
 initial={{ opacity: 0, y: 20, scale: 0.95 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 transition={{ duration: 0.7 }}
 className="mb-8"
 >
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-400/30 bg-orange-400/10 backdrop-blur-md text-orange-300 font-semibold text-xs tracking-widest uppercase">
 <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
 WE ARE A LEADING SAP DIGITAL PARTNER
 </span>
 </motion.div>

 {/* Headline */}
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.9, delay: 0.1 }}
 >
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
 {customTitle ? (
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
 {customTitle}
 </span>
 ) : (
 <>
 Trusted Globally{" "}
 <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
 for SAP Consulting
 </span>
 </>
 )}
 </h1>
 </motion.div>

 {/* Subtitle */}
 <motion.p
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3, duration: 0.8 }}
 className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
 >
 Helping businesses accelerate digital transformation with cloud-driven solutions where innovation meets technology.
 </motion.p>

 {/* CTA Buttons */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.5, duration: 0.8 }}
 className="flex flex-wrap justify-center gap-4 mb-16"
 >
 <Dialog open={isOpen} onOpenChange={setIsOpen}>
 <DialogTrigger asChild>
 <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-base shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
 <span className="relative z-10 flex items-center gap-2">
 Download Our Profile <Download className="w-5 h-5" />
 </span>
 <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 </button>
 </DialogTrigger>
 <DialogContent className="sm:max-w-[400px]">
 <DialogHeader>
 <DialogTitle className="text-lg">Download Company Profile</DialogTitle>
 <DialogDescription className="text-sm">
 Please provide your details to receive our company profile.
 </DialogDescription>
 </DialogHeader>
 <form onSubmit={handleSubmit} className="grid gap-3 py-3">
 <div className="grid gap-1.5">
 <Label htmlFor="name" className="text-sm">Name</Label>
 <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="h-9 text-sm" required />
 </div>
 <div className="grid gap-1.5">
 <Label htmlFor="email" className="text-sm">Email</Label>
 <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="h-9 text-sm" required />
 </div>
 <div className="grid gap-1.5">
 <Label htmlFor="phone" className="text-sm">Phone (Optional)</Label>
 <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" className="h-9 text-sm" />
 </div>
 <Button type="submit" disabled={isLoading} className="w-full h-10 text-sm">
 {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : "Download Profile"}
 </Button>
 </form>
 </DialogContent>
 </Dialog>

 <Link to="/aboutus">
 <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300">
 Discover More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </button>
 </Link>
 </motion.div>

 {/* Stats Row */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.7 }}
 className="flex flex-wrap justify-center items-center gap-0"
 >
 {[
 { value: "20+", label: "Projects Completed" },
 { value: "4+",  label: "Global Offices" },
 { value: "5+",  label: "Years of Experience" },
 { value: "50+", label: "Group Employees" },
 ].map((stat, i) => (
 <div key={i} className="flex items-center">
 <div className="px-4 sm:px-7 text-center">
 <p className="text-lg sm:text-xl font-heading font-semibold text-white/70">{stat.value}</p>
 <p className="text-[10px] sm:text-xs text-white/35 font-light mt-0.5">{stat.label}</p>
 </div>
 {i < 2 && <div className="w-px h-12 bg-white/20" />}
 </div>
 ))}
 </motion.div>
 </div>
 </div>

 {/* Scroll indicator */}
 <motion.div
 animate={{ y: [0, 8, 0] }}
 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
 className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40"
 >
 <ChevronDown className="w-6 h-6" />
 </motion.div>

 </section>
 );
};

export default HeroSection;


