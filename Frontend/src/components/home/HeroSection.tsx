import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Download, Loader2 } from "lucide-react";
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

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
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
        toast({
          title: "Success",
          description: "Your request has been received. Downloading profile...",
        });
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
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.6) contrast(1.1)",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground font-semibold text-sm mb-6">
              WE ARE A LEADING SAP DIGITAL PARTNER
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Trusted Globally <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                for SAP Consulting
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Helping businesses accelerate digital transformation with cloud-driven solutions where innovation meets technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                  Download Our Profile <Download className="ml-2 w-5 h-5" />
                </Button>
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
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="h-9 text-sm"
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="h-9 text-sm"
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="phone" className="text-sm">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="h-9 text-sm"
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full h-10 text-sm">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Download Profile"
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/10 text-primary hover:bg-primary-foreground/50 px-8 py-6 text-lg rounded-full"
              >
                <Play className="mr-2 w-5 h-5" />
                Discover More
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-8 mt-6"
          >
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-white">10+</p>
              <p className="text-sm text-primary-foreground/70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-white">100+</p>
              <p className="text-sm text-primary-foreground/70">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-white">500+</p>
              <p className="text-sm text-primary-foreground/70">Projects</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto translate-y-[1px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
