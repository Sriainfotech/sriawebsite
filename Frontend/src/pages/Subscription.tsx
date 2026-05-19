import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard, Calendar, BarChart3, Users, Clock,
  CheckCircle2, AlertTriangle, XCircle, RefreshCw,
  TrendingUp, Zap, ArrowRight, Sparkles
} from "lucide-react";
import axiosInstance from "@/lib/axios";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

/* ─── API response types ─── */

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

interface SubscriptionResponse {
  subscription: {
    id: number;
    plan: Plan;
    status: string;
    is_active: boolean;
    is_expired: boolean;
    current_period_start: string;
    current_period_end: string;
    cancelled_at: string | null;
    created_at: string;
  };
  days_left: number;
  usage: {
    posts_used: number;
    posts_limit: number;
    posts_remaining: number;
    daily_used: number;
    daily_limit: number;
    usage_percentage: number;
    is_unlimited: boolean;
    period_start: string;
  };
}

interface UsageResponse {
  plan_name: string;
  posts_used: number;
  posts_limit: number;
  posts_remaining: number;
  is_unlimited: boolean;
  period_start: string;
  max_accounts: number;
  days_left: number;
  daily_used: number;
  daily_limit: number;
}

/* ─── Helpers ─── */

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const StatusBadge = ({ is_active, is_expired, status }: { is_active: boolean; is_expired: boolean; status: string }) => {
  if (is_expired)
    return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold"><XCircle className="w-3.5 h-3.5" />Expired</span>;
  if (is_active && status === "active")
    return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold"><CheckCircle2 className="w-3.5 h-3.5" />Active</span>;
  return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold"><AlertTriangle className="w-3.5 h-3.5" />{status}</span>;
};

const ProgressBar = ({ value, max, color = "orange" }: { value: number; max: number; color?: "orange" | "sky" }) => {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  const danger = pct >= 90;
  return (
    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-full rounded-full ${
          danger        ? "bg-gradient-to-r from-red-500 to-rose-400"
          : color === "orange" ? "bg-gradient-to-r from-orange-500 to-amber-400"
          : "bg-gradient-to-r from-sky-500 to-blue-400"
        }`}
      />
    </div>
  );
};

const SectionCard = ({ title, subtitle, icon: Icon, accent, children }: {
  title: string; subtitle: string; icon: React.ElementType;
  accent: string; children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
  >
    <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent}`} />
    <div className="p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-orange-500" />
        </div>
        <div>
          <p className="text-slate-400 text-xs">{subtitle}</p>
          <h3 className="text-slate-900 font-bold text-lg leading-tight">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  </motion.div>
);

/* ─── Main page ─── */

const SubscriptionPage = () => {
  const [sub,   setSub]   = useState<SubscriptionResponse | null>(null);
  const [usage, setUsage] = useState<UsageResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");

  const fetchAll = async () => {
    setLoading(true);
    setError("");
    try {
      const [subRes, usageRes] = await Promise.all([
        axiosInstance.get<SubscriptionResponse>("/subscription/"),
        axiosInstance.get<UsageResponse>("/usage/"),
      ]);
      setSub(subRes.data);
      setUsage(usageRes.data);
    } catch (e: any) {
      setError(e.response?.data?.message || "Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Subscription & Usage"
        subtitle="Monitor your plan, billing period and usage limits."
        backgroundImage="/contactus.jpg"
      />

      <section className="py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

          {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="w-10 h-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin" />
              <p className="text-slate-400 text-sm">Loading…</p>
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center py-24 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                <XCircle className="w-7 h-7 text-red-500" />
              </div>
              <p className="text-slate-700 font-semibold">{error}</p>
              <button onClick={fetchAll} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
                <RefreshCw className="w-4 h-4" /> Retry
              </button>
            </div>
          )}

          {!loading && !error && sub && usage && (
            <div className="space-y-6">

              {/* ── 1. Subscription: plan + status ── */}
              <div className="grid sm:grid-cols-2 gap-6">

                <SectionCard title={sub.subscription.plan.name} subtitle="api/subscription/ → subscription.plan" icon={CreditCard} accent="bg-gradient-to-r from-orange-500 to-amber-400">
                  <div className="flex items-center justify-between mb-4">
                    <StatusBadge
                      is_active={sub.subscription.is_active}
                      is_expired={sub.subscription.is_expired}
                      status={sub.subscription.status}
                    />
                    <span className="text-slate-400 text-xs font-mono">id: {sub.subscription.id}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { label: "interval",     value: sub.subscription.plan.interval },
                      { label: "price",        value: parseFloat(sub.subscription.plan.price) === 0 ? "Free" : `₹${sub.subscription.plan.price}` },
                      { label: "Posts per Package", value: String(sub.subscription.plan.posts_limit) },
                      { label: "max_accounts", value: String(sub.subscription.plan.max_accounts) },
                    ].map(item => (
                      <div key={item.label} className="bg-slate-50 rounded-xl px-3 py-2.5">
                        <p className="text-slate-400 text-[10px] font-mono">{item.label}</p>
                        <p className="text-slate-800 font-bold text-sm capitalize mt-0.5">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* ── 1b. Subscription: billing period ── */}
                <SectionCard title="Billing Period" subtitle="api/subscription/ → subscription" icon={Calendar} accent="bg-gradient-to-r from-sky-500 to-blue-400">
                  <div className="space-y-2.5">
                    {[
                      { label: "current_period_start", value: fmt(sub.subscription.current_period_start) },
                      { label: "current_period_end",   value: fmt(sub.subscription.current_period_end) },
                      { label: "created_at",           value: fmt(sub.subscription.created_at) },
                      { label: "cancelled_at",         value: sub.subscription.cancelled_at ? fmt(sub.subscription.cancelled_at) : "—" },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                        <span className="text-slate-400 text-xs font-mono">{item.label}</span>
                        <span className="text-slate-800 text-sm font-semibold">{item.value}</span>
                      </div>
                    ))}
                    <div className={`flex items-center justify-between mt-1 px-3 py-2.5 rounded-xl ${sub.days_left === 0 ? "bg-red-50" : "bg-orange-50"}`}>
                      <span className={`text-xs font-mono flex items-center gap-1.5 ${sub.days_left === 0 ? "text-red-400" : "text-orange-500"}`}>
                        <Clock className="w-3.5 h-3.5" />days_left
                      </span>
                      <span className={`font-bold text-sm ${sub.days_left === 0 ? "text-red-600" : "text-orange-600"}`}>
                        {sub.days_left === 0 ? "Expired" : `${sub.days_left} days`}
                      </span>
                    </div>
                  </div>
                </SectionCard>
              </div>

              {/* ── 2. Usage (from api/usage/) ── */}
              <SectionCard title="Usage Summary" subtitle="api/usage/" icon={BarChart3} accent="bg-gradient-to-r from-violet-500 to-purple-400">
                <div className="grid sm:grid-cols-2 gap-6 mb-5">

                  {/* Posts usage */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                        <span className="text-slate-700 text-sm font-semibold">Posts per Package</span>
                      </div>
                      <span className="text-slate-400 text-xs font-mono">{usage.posts_used} / {usage.is_unlimited ? "∞" : usage.posts_limit}</span>
                    </div>
                    <ProgressBar value={usage.posts_used} max={usage.posts_limit} color="orange" />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-slate-400 text-xs font-mono">posts_remaining: <span className="text-emerald-500 font-bold">{usage.posts_remaining}</span></span>
                      <span className="text-slate-400 text-xs font-mono">is_unlimited: <span className={usage.is_unlimited ? "text-emerald-500" : "text-slate-500"}>{String(usage.is_unlimited)}</span></span>
                    </div>
                  </div>

                  {/* Daily usage */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-sky-500" />
                        <span className="text-slate-700 text-sm font-semibold">Daily</span>
                      </div>
                      <span className="text-slate-400 text-xs font-mono">{usage.daily_used} / {usage.daily_limit}</span>
                    </div>
                    <ProgressBar value={usage.daily_used} max={usage.daily_limit} color="sky" />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-slate-400 text-xs font-mono">daily_used: <span className="text-sky-500 font-bold">{usage.daily_used}</span></span>
                      <span className="text-slate-400 text-xs font-mono">daily_limit: <span className="text-slate-600 font-bold">{usage.daily_limit}</span></span>
                    </div>
                  </div>
                </div>

                {/* Usage summary tiles — all api/usage/ fields */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 border-t border-slate-100">
                  {[
                    { label: "plan_name",    value: usage.plan_name,        color: "text-orange-500" },
                    { label: "max_accounts", value: usage.max_accounts,     color: "text-violet-500" },
                    { label: "days_left",    value: usage.days_left,        color: usage.days_left === 0 ? "text-red-500" : "text-amber-500" },
                    { label: "period_start", value: usage.period_start,     color: "text-sky-500"    },
                    { label: "Posts per Package", value: usage.posts_limit,      color: "text-emerald-500"},
                  ].map(tile => (
                    <div key={tile.label} className="bg-slate-50 rounded-xl p-2.5 text-center">
                      <p className={`font-black text-base leading-none ${tile.color}`}>{tile.value}</p>
                      <p className="text-slate-400 text-[9px] font-mono mt-1 break-all">{tile.label}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* ── Actions ── */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Link to="/plans"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-bold shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5">
                  <Sparkles className="w-4 h-4" /> View All Plans
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button onClick={fetchAll}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-500 text-sm font-medium transition-all">
                  <RefreshCw className="w-3.5 h-3.5" /> Refresh
                </button>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;
