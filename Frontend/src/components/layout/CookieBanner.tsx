import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "sria_cookie_consent";

type ConsentState = "accepted" | "rejected" | "custom" | null;

const cookieTypes = [
  { id: "necessary",  label: "Necessary",  description: "Required for the website to function.",              required: true  },
  { id: "analytics",  label: "Analytics",  description: "Help us understand how visitors interact.",          required: false },
  { id: "functional", label: "Functional", description: "Remember your preferences and settings.",            required: false },
];

const CookieBanner = () => {
  const [visible,    setVisible]    = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, functional: false });

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (state: ConsentState, p = prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, prefs: p, savedAt: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => save("accepted", { necessary: true, analytics: true, functional: true });
  const rejectAll = () => save("rejected", { necessary: true, analytics: false, functional: false });
  const saveCustom = () => save("custom");
  const toggle = (id: string) => {
    if (id === "necessary") return;
    setPrefs(p => ({ ...p, [id]: !p[id as keyof typeof p] }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 220 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9995] w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-slate-950 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">

            {/* ── Slim main bar ── */}
            <div className="flex items-center gap-3 px-4 py-3">
              <Cookie className="w-4 h-4 text-orange-400 flex-shrink-0" />

              <p className="text-white/70 text-xs flex-1 min-w-0 truncate">
                We use cookies.{" "}
                <Link to="/cookies" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">
                  Cookie Policy
                </Link>
              </p>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setShowManage(p => !p)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white text-xs font-medium transition-all"
                >
                  Manage {showManage ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                <button
                  onClick={rejectAll}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white text-xs font-medium transition-all"
                >
                  Reject
                </button>
                <button
                  onClick={acceptAll}
                  className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors"
                >
                  Accept All
                </button>
                <button onClick={rejectAll} className="text-slate-600 hover:text-slate-300 transition-colors p-1" aria-label="Dismiss">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ── Expandable manage panel ── */}
            <AnimatePresence>
              {showManage && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/8 px-4 pt-3 pb-4 space-y-2">
                    {cookieTypes.map(ct => (
                      <div key={ct.id} className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-white text-xs font-semibold">{ct.label}</span>
                            {ct.required && <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">Required</span>}
                          </div>
                          <p className="text-slate-500 text-[10px] mt-0.5">{ct.description}</p>
                        </div>
                        <button
                          onClick={() => toggle(ct.id)}
                          disabled={ct.required}
                          className={`relative w-8 h-4 rounded-full transition-all duration-300 flex-shrink-0 ${prefs[ct.id as keyof typeof prefs] ? "bg-orange-500" : "bg-white/10"} ${ct.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          <span className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform duration-300 ${prefs[ct.id as keyof typeof prefs] ? "translate-x-4" : "translate-x-0"}`} />
                        </button>
                      </div>
                    ))}
                    <button onClick={saveCustom} className="w-full py-2 rounded-xl bg-white/8 border border-white/10 hover:bg-white/12 text-white text-xs font-semibold transition-all mt-1">
                      Save Preferences
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
