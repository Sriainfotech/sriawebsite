import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, XCircle, RefreshCw, ArrowRight, Sparkles, Zap, CheckCircle2, XCircle as XIcon } from "lucide-react";
import axiosInstance from "@/lib/axios";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

interface Plan {
  id: number;
  name: string;
  slug: string;
  interval: string;
  price: string;
  posts_limit: number;
  max_accounts: number;
  is_active: boolean;
}

const POPULAR_SLUG = "pro";

/* Renders every field the backend sends — purely data-driven */
const PlanDetails = ({ plan, isPopular }: { plan: Plan; isPopular: boolean }) => {
  const rows: { label: string; field: string; value: React.ReactNode }[] = [
    {
      label: "Price",
      field: "price",
      value: parseFloat(plan.price) === 0
        ? <span className="font-bold text-emerald-600">Free</span>
        : <span className="font-bold text-slate-900">₹{parseFloat(plan.price).toLocaleString("en-IN")}</span>,
    },
    {
      label: "Billing",
      field: "interval",
      value: plan.interval === "trial"
        ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-600 border border-amber-100">7-day trial</span>
        : <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-50 text-orange-600 border border-orange-100 capitalize">{plan.interval}</span>,
    },
    {
      label: "Posts per Package",
      field: "posts_limit",
      value: <span className="font-bold text-slate-900">{plan.posts_limit}</span>,
    },
    {
      label: "Max Accounts",
      field: "max_accounts",
      value: <span className="font-bold text-slate-900">{plan.max_accounts}</span>,
    },
    {
      label: "Status",
      field: "is_active",
      value: plan.is_active
        ? <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold"><CheckCircle2 className="w-3.5 h-3.5" />Active</span>
        : <span className="inline-flex items-center gap-1 text-red-500 text-xs font-semibold"><XIcon className="w-3.5 h-3.5" />Inactive</span>,
    },
    {
      label: "Plan ID",
      field: "id",
      value: <span className="font-mono text-slate-400 text-xs">{plan.id}</span>,
    },
  ];

  return (
    <div className="divide-y divide-slate-100">
      {rows.map((row) => (
        <div key={row.field} className="flex items-center justify-between py-2.5 px-1">
          <div>
            <span className="text-slate-500 text-xs">{row.label}</span>
            <span className="text-slate-300 text-[10px] font-mono ml-1.5">· {row.field}</span>
          </div>
          <div className="text-sm">{row.value}</div>
        </div>
      ))}
    </div>
  );
};

const PlansPage = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlans = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get("/plans");
      setPlans(res.data);
    } catch (e: any) {
      setError(e.response?.data?.message || "Failed to load plans.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPlans(); }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Plans & Pricing"
        subtitle="Choose the plan that fits your needs. Upgrade or downgrade any time."
        backgroundImage="/contactus.jpg"
      />

      <section className="py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="w-10 h-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin" />
              <p className="text-slate-400 text-sm">Fetching plans…</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="flex flex-col items-center py-24 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                <XCircle className="w-7 h-7 text-red-500" />
              </div>
              <p className="text-slate-700 font-semibold">{error}</p>
              <button onClick={fetchPlans}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
                <RefreshCw className="w-4 h-4" /> Retry
              </button>
            </div>
          )}

          {/* Plans */}
          {!loading && !error && plans.length > 0 && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-3">Pricing</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Simple, Transparent Pricing</h2>
                <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-4" />
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  All plans include core features. Pick the one that matches your scale.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {plans.map((plan, i) => {
                  const isPopular = plan.slug === POPULAR_SLUG;
                  const isFree    = plan.interval === "trial";
                  const price     = parseFloat(plan.price);

                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                        isPopular
                          ? "border-orange-300 shadow-xl shadow-orange-500/10"
                          : "border-slate-100 hover:border-orange-200 hover:shadow-lg"
                      }`}
                    >
                      {/* Top accent */}
                      <div className={`h-0.5 ${isPopular ? "bg-gradient-to-r from-orange-500 to-amber-400" : "bg-slate-100"}`} />

                      {/* Header */}
                      <div className={`p-5 ${isPopular ? "bg-gradient-to-br from-orange-500/5 to-amber-500/5" : "bg-white"}`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isFree ? "bg-slate-100 text-slate-500" : isPopular ? "bg-orange-500 text-white" : "bg-slate-900 text-white"
                            }`}>
                              {isFree ? <Zap className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 text-base leading-tight">{plan.name}</p>
                              <p className="text-slate-400 text-[10px] font-mono">{plan.slug}</p>
                            </div>
                          </div>
                          {isPopular && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold flex-shrink-0">
                              <Star className="w-2.5 h-2.5 fill-current" /> Popular
                            </span>
                          )}
                        </div>

                        {/* Price display */}
                        <div>
                          {isFree ? (
                            <div>
                              <p className="text-3xl font-black text-slate-900">Free</p>
                              <p className="text-slate-400 text-xs mt-0.5">{plan.posts_limit} posts per package · 7-day trial</p>
                            </div>
                          ) : (
                            <div className="flex items-end gap-0.5">
                              <span className="text-slate-400 text-sm font-semibold mb-0.5">₹</span>
                              <span className="text-3xl font-black text-slate-900">{price.toLocaleString("en-IN")}</span>
                              <span className="text-slate-400 text-xs mb-1 ml-1">/{plan.interval}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* All backend fields */}
                      <div className="px-5 pb-2 flex-1 bg-white">
                        <PlanDetails plan={plan} isPopular={isPopular} />
                      </div>

                      {/* CTA */}
                      <div className="p-5 pt-3 bg-white">
                        <button className={`w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                          isPopular
                            ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/20"
                            : isFree
                              ? "bg-slate-100 hover:bg-slate-200 text-slate-600"
                              : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}>
                          {isFree ? "Current Plan" : "Get Started"}
                          {!isFree && <ArrowRight className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center mt-10">
                <Link to="/subscription"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 text-sm font-medium transition-colors">
                  View your current subscription
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default PlansPage;
