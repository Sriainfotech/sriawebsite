import { useState } from "react";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { adminLogin } from "@/lib/adminApi";
import { setAdminSession, isAdminAuthenticated } from "@/lib/adminAuth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (isAdminAuthenticated()) {
    const from = (location.state as { from?: Location })?.from?.pathname || "/admin/blogs";
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await adminLogin(username, password);
      if (res.data.success) {
        setAdminSession(res.data.token, res.data.username);
        navigate("/admin/blogs", { replace: true });
      } else {
        toast({ title: "Login failed", description: res.data.message || "Invalid credentials.", variant: "destructive" });
      }
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.response?.data?.message || "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Video background — same asset as the homepage hero */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=60"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75) contrast(1.15) saturate(0.9)" }}
        >
          <source src="https://res.cloudinary.com/dmxfdt7ub/video/upload/f_auto,q_auto/v1779455315/sria/Sria%20Website%20Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Ambient glow, matching brand accent used sitewide */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-amber-400/8 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm"
      >
        <div className="bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-orange-400" />
            </div>
            <h1 className="font-heading font-bold text-xl text-white">Sria Infotech</h1>
            <p className="text-white/50 text-sm mt-1">Admin Sign In</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="text-white/70">Username</Label>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-orange-500/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-white/70">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-orange-500/50 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-0 top-0 h-full w-10 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="mt-2 bg-orange-700 hover:bg-orange-800">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
            </Button>
          </form>
        </div>

        <Link
          to="/"
          className="flex items-center justify-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors mt-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
