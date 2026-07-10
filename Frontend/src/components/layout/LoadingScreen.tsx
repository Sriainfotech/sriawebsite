import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    // Easing: fast at start, decelerates as it nears 90
    const interval = setInterval(() => {
      const step = Math.max(0.4, (90 - current) * 0.07);
      current = Math.min(90, current + step);
      setProgress(Math.round(current));
      if (current >= 90) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">

      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow behind logo */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* ── Logo fill container ── */}
      <div className="relative mb-10 select-none">
        {/* Faded base logo — always visible as ghost */}
        <img
          src="https://ik.imagekit.io/hps6th7vy/sria/logo-footer.png?tr=f-auto,q-auto"
          alt="SRIA Infotech"
          className="w-44 md:w-52 object-contain opacity-[0.12]"
          draggable={false}
        />

        {/* Filled logo — revealed bottom-to-top via clip-path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
        >
          <img
            src="https://ik.imagekit.io/hps6th7vy/sria/logo-footer.png?tr=f-auto,q-auto"
            alt=""
            className="w-44 md:w-52 object-contain"
            draggable={false}
          />
        </div>

        {/* Shimmer sweep over the filled portion */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
            clipPath: `inset(${100 - progress}% 0 0 0)`,
          }}
        />
      </div>

      {/* ── Percentage ── */}
      <motion.p
        key={progress}
        initial={{ opacity: 0.6, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white font-black text-4xl md:text-5xl tabular-nums leading-none mb-6"
      >
        {progress}
        <span className="text-orange-400 text-2xl md:text-3xl">%</span>
      </motion.p>

      {/* ── Progress bar ── */}
      <div className="w-44 md:w-52 h-0.5 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Loading label */}
      <p className="mt-5 text-slate-600 text-xs font-medium tracking-widest uppercase">
        Loading…
      </p>
    </div>
  );
};

export default LoadingScreen;
