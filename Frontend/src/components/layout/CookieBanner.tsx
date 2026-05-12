import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "sria_cookie_consent";

type ConsentState = "accepted" | "rejected" | "custom" | null;

const cookieTypes = [
  {
    id: "necessary",
    label: "Necessary",
    description: "Required for the website to function. Cannot be disabled.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Help us understand how visitors interact with our site.",
    required: false,
  },
  {
    id: "functional",
    label: "Functional",
    description: "Remember your preferences and settings.",
    required: false,
  },
];

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, functional: false });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on initial render
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (state: ConsentState, customPrefs?: typeof prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, prefs: customPrefs ?? prefs, savedAt: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => {
    setPrefs({ necessary: true, analytics: true, functional: true });
    save("accepted", { necessary: true, analytics: true, functional: true });
  };

  const rejectAll = () => {
    const minimal = { necessary: true, analytics: false, functional: false };
    setPrefs(minimal);
    save("rejected", minimal);
  };

  const saveCustom = () => save("custom");

  const toggle = (id: string) => {
    if (id === "necessary") return;
    setPrefs(p => ({ ...p, [id]: !p[id as keyof typeof p] }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop blur when manage panel is open */}
          {showManage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9990]"
              onClick={() => setShowManage(false)}
            />
          )}

          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", damping: 24, stiffness: 200 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9995] w-[calc(100%-2rem)] max-w-3xl"
          >
            <div className="bg-slate-950 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">

              {/* Main banner row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
                {/* Icon */}
                <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-4 h-4 text-orange-400" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">We use cookies</p>
                  <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                    We use cookies to enhance your experience and analyse site traffic.{" "}
                    <Link to="/cookies" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">
                      Cookie Policy
                    </Link>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                  <button
                    onClick={() => setShowManage(p => !p)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-all"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Manage
                    {showManage ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-all"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold shadow-lg shadow-orange-500/20 transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={rejectAll}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-white/5 transition-all"
                    aria-label="Dismiss"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Manage preferences panel */}
              <AnimatePresence>
                {showManage && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/8 px-5 pt-4 pb-5">
                      <p className="text-slate-400 text-xs mb-4">
                        Customise which cookies you allow. Necessary cookies are always active.
                      </p>

                      <div className="space-y-3 mb-5">
                        {cookieTypes.map(ct => (
                          <div key={ct.id} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="text-white text-xs font-semibold">{ct.label}</p>
                                {ct.required && (
                                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
                                    Required
                                  </span>
                                )}
                              </div>
                              <p className="text-slate-500 text-[11px] mt-0.5">{ct.description}</p>
                            </div>

                            {/* Toggle */}
                            <button
                              onClick={() => toggle(ct.id)}
                              disabled={ct.required}
                              aria-label={`Toggle ${ct.label}`}
                              className={`relative w-9 h-5 rounded-full transition-all duration-300 flex-shrink-0 ${
                                prefs[ct.id as keyof typeof prefs]
                                  ? "bg-orange-500"
                                  : "bg-white/10"
                              } ${ct.required ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                              <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${
                                prefs[ct.id as keyof typeof prefs] ? "translate-x-4" : "translate-x-0"
                              }`} />
                            </button>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={saveCustom}
                        className="w-full py-2.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/12 text-white text-xs font-semibold transition-all"
                      >
                        Save My Preferences
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
