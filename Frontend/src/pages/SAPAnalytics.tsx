import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExecutiveDashboardDemo from "@/components/sap-analytics/ExecutiveDashboardDemo";
import {
  LayoutGrid,
  Clock,
  AlertTriangle,
  TrendingDown,
  Database,
  Cloud,
  Layers,
  Server,
  Award,
  Route,
  Compass,
  ShieldCheck,
  ClipboardList,
  PenTool,
  LayoutDashboard,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ZoomIn,
  Sparkles,
  Target,
  ChevronRight,
} from "lucide-react";

/* ── Reveal-on-scroll wrapper ─────────────────────────────────────────────── */

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────────── */

const PROBLEM_CARDS = [
  { tag: "Fragmented", title: "Fragmented reporting", text: "Finance, sales and operations each maintain separate extracts — no one sees the same numbers at the same time.", icon: LayoutGrid },
  { tag: "Delayed", title: "Delayed decisions", text: "Month-end close cycles and manual consolidation mean leadership reacts to problems weeks after they occur.", icon: Clock },
  { tag: "Manual", title: "Manual effort & errors", text: "Analysts spend hours reconciling exports instead of analysing trends, multiplying copy-paste risk.", icon: AlertTriangle },
  { tag: "Missed", title: "Missed opportunities", text: "Without live KPI monitoring, working-capital risk, stockouts and margin erosion surface too late to act on.", icon: TrendingDown },
];

type SolutionKey = "hana" | "gcp" | "fabric" | "sap";

const SOLUTION_TABS: { key: SolutionKey; num: string; name: string; blurb: string; icon: typeof Database; recommended?: boolean }[] = [
  { key: "hana", num: "SOLUTION 1", name: "SAP HANA + Power BI", blurb: "Calculation Views connect live to Power BI. Fastest to deploy, no replication layer.", icon: Database },
  { key: "gcp", num: "SOLUTION 2", name: "Google BigQuery", blurb: "SAP data replicated to BigQuery for enterprise-scale ML and predictive analytics.", icon: Cloud },
  { key: "fabric", num: "SOLUTION 3", name: "Microsoft Fabric + Power BI", blurb: "OneLake, Data Factory, Warehouse and Power BI in one governed platform.", icon: Layers, recommended: true },
  { key: "sap", num: "SOLUTION 4", name: "SAP Datasphere + SAC", blurb: "SAP's own native stack: governed modelling plus planning and forecasting.", icon: Server },
];

const SOLUTIONS: Record<SolutionKey, { t: string; d: string; f: string[]; feat: string[]; adv: string[]; best: string }> = {
  hana: {
    t: "SAP HANA Modeling + Power BI",
    d: "Calculation Views developed directly in SAP HANA Studio connect live to Microsoft Power BI — fast, high-performance reporting for organizations already running SAP ECC or S/4HANA, with no data replication required.",
    f: ["SAP ECC / S4HANA", "SAP HANA", "Calculation Views", "Power BI Gateway", "Power BI Dashboards"],
    feat: ["Real-time reporting", "KPI dashboards", "Drill-down analytics", "Role-based security", "Scheduled or live refresh"],
    adv: ["Fastest of the four to implement", "Excellent native SAP performance", "Lower infrastructure cost — no replication layer"],
    best: "Organizations already running SAP ECC or S/4HANA who need fast deployment with minimal new infrastructure.",
  },
  gcp: {
    t: "Google Cloud Platform (BigQuery)",
    d: "SAP data is replicated into Google BigQuery, unlocking enterprise-scale analytics, machine learning and predictive reporting across cloud and multi-source data.",
    f: ["SAP", "SAP CPI / SLT / APIs", "BigQuery", "Looker or Power BI"],
    feat: ["Cloud data warehouse", "AI & machine learning", "Historical analytics", "Multi-source integration", "Near real-time dashboards"],
    adv: ["Unlimited scalability", "Excellent for enterprise-wide analytics", "Predictive, AI-driven insights"],
    best: "Large enterprises and organizations with active or planned AI initiatives spanning multiple data sources.",
  },
  fabric: {
    t: "Microsoft Fabric + Power BI",
    d: "A unified Microsoft analytics platform — OneLake, Data Factory, Warehouse and Power BI in a single governed environment. This is Sria Infotech's recommended strategic platform for most customers.",
    f: ["SAP", "Microsoft Fabric", "OneLake", "Warehouse", "Power BI"],
    feat: ["Unified analytics platform", "Built-in AI Copilot", "Real-time analytics", "Enterprise governance"],
    adv: ["Native, seamless Power BI integration", "Modern, future-ready architecture", "Lower administration effort"],
    best: "Organizations already invested in Microsoft 365 and Azure who want one governed platform for data and BI.",
  },
  sap: {
    t: "SAP Datasphere + SAP Analytics Cloud",
    d: "SAP's own native analytics platform — governed data modeling in Datasphere with planning, forecasting and executive reporting in SAP Analytics Cloud. The official, fully SAP-integrated option.",
    f: ["SAP", "SAP Datasphere", "SAP Analytics Cloud"],
    feat: ["Live SAP connectivity", "Planning & forecasting", "Executive dashboards", "Enterprise governance"],
    adv: ["Deep, native SAP integration", "Strong built-in security", "Official SAP-endorsed solution"],
    best: "Organizations standardized on SAP Business Technology Platform who prioritize a single-vendor stack.",
  },
};

const MATRIX_ROWS = [
  { label: "Implementation speed", hana: "Fastest", gcp: "Moderate", fabric: "Fast", sap: "Moderate" },
  { label: "Native SAP integration", hana: "Excellent", gcp: "Via APIs / SLT", fabric: "Good", sap: "Deepest" },
  { label: "Scalability", hana: "Good", gcp: "Unlimited", fabric: "Very high", sap: "High" },
  { label: "AI / ML capability", hana: "Limited", gcp: "Excellent", fabric: "Strong (Copilot)", sap: "Planning-focused" },
  { label: "Infrastructure cost", hana: "Lowest", gcp: "Usage-based", fabric: "Moderate", sap: "Moderate–High" },
  { label: "Best fit", hana: "Existing HANA shops", gcp: "AI-first enterprises", fabric: "Microsoft 365 / Azure orgs", sap: "SAP BTP standardised orgs" },
];

type FilterKey = "all" | "fin" | "sales" | "cost" | "wc";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "fin", label: "Finance / CFO" },
  { key: "sales", label: "Sales" },
  { key: "cost", label: "Cost analysis" },
  { key: "wc", label: "Working capital" },
];

const GALLERY_ITEMS: { cat: FilterKey; thumb: string; full: string; alt: string; category: string; caption: string }[] = [
  { cat: "fin", thumb: "/sap-analytics/cfo-summary-thumb.jpg", full: "/sap-analytics/cfo-summary-full.jpg", alt: "CFO dashboard financial summary with revenue, EBITDA, net profit and expense trends", category: "Finance", caption: "CFO Dashboard — Financial Summary" },
  { cat: "fin", thumb: "/sap-analytics/cfo-balance-sheet-thumb.jpg", full: "/sap-analytics/cfo-balance-sheet-full.jpg", alt: "Balance sheet with assets, equity and liabilities variance", category: "Finance", caption: "Balance Sheet — Assets, Equity & Liabilities" },
  { cat: "fin", thumb: "/sap-analytics/cfo-pnl-yearly-thumb.jpg", full: "/sap-analytics/cfo-pnl-yearly-full.jpg", alt: "Yearly profit and loss statement with income, expenses and variance", category: "Finance", caption: "Profit & Loss — Yearly" },
  { cat: "fin", thumb: "/sap-analytics/cfo-ratios-thumb.jpg", full: "/sap-analytics/cfo-ratios-full.jpg", alt: "Financial ratio analysis covering liquidity, leverage, profitability and efficiency", category: "Finance", caption: "Detailed Analysis — Financial Ratios" },
  { cat: "sales", thumb: "/sap-analytics/sales-analysis-thumb.jpg", full: "/sap-analytics/sales-analysis-full.jpg", alt: "Sales analysis dashboard with yearly, quarterly and monthly sales trends", category: "Sales", caption: "Sales Analysis Dashboard" },
  { cat: "sales", thumb: "/sap-analytics/sales-quantity-thumb.jpg", full: "/sap-analytics/sales-quantity-full.jpg", alt: "Sales quantity analysis by material group and material code", category: "Sales", caption: "Sales Quantity Analysis" },
  { cat: "sales", thumb: "/sap-analytics/sales-avg-price-thumb.jpg", full: "/sap-analytics/sales-avg-price-full.jpg", alt: "Average sales price analysis by material group and plant", category: "Sales", caption: "Average Price Analysis" },
  { cat: "sales", thumb: "/sap-analytics/customer-sales-analysis-thumb.jpg", full: "/sap-analytics/customer-sales-analysis-full.jpg", alt: "Customer sales analysis dashboard with monthly sales by customer and top customer rankings", category: "Sales", caption: "Customer Sales Analysis" },
  { cat: "sales", thumb: "/sap-analytics/sales-comparison-thumb.jpg", full: "/sap-analytics/sales-comparison-full.jpg", alt: "Sales comparison analysis report by segment and company code with YTD variance", category: "Sales", caption: "Sales Comparison Analysis" },
  { cat: "cost", thumb: "/sap-analytics/cost-plant-comparison-thumb.jpg", full: "/sap-analytics/cost-plant-comparison-full.jpg", alt: "Plant wise cost comparison across production, raw material and variable cost heads", category: "Cost", caption: "Plant Wise Comparison — Cost Analysis" },
  { cat: "wc", thumb: "/sap-analytics/wc-dashboard-thumb.jpg", full: "/sap-analytics/wc-dashboard-full.jpg", alt: "Working capital dashboard with segment-wise target vs actual and group working capital", category: "Working capital", caption: "Working Capital Dashboard" },
  { cat: "wc", thumb: "/sap-analytics/wc-comparison-thumb.jpg", full: "/sap-analytics/wc-comparison-full.jpg", alt: "Working capital comparison across fiscal periods by segment", category: "Working capital", caption: "Working Capital — Period Comparison" },
];

const PHASES = [
  { title: "Requirement gathering", text: "Workshops to map KPIs, data sources and user roles across every business area.", icon: ClipboardList },
  { title: "Solution design", text: "Architecture blueprint, platform selection, security & governance model.", icon: PenTool },
  { title: "Data modeling", text: "Calculation views, semantic models and data pipelines.", icon: Database },
  { title: "Dashboard development", text: "Interactive, role-based dashboards and automated reports.", icon: LayoutDashboard },
  { title: "User acceptance testing", text: "Validating accuracy, performance and usability with real users.", icon: CheckCircle2 },
  { title: "Go-live", text: "Production cutover with monitored rollout across the organisation.", icon: Rocket },
  { title: "Hypercare & support", text: "Post-launch stabilisation, tuning and ongoing managed support.", icon: LifeBuoy },
];

const WHY_CARDS = [
  { title: "SAP-focused expertise", text: "A dedicated SAP practice spanning implementation, support and data & analytics — not a generic BI vendor bolt-on.", icon: Award },
  { title: "End-to-end delivery", text: "One partner across architecture, dashboard build, testing, go-live and hypercare — no handoff gaps.", icon: Route },
  { title: "Platform-agnostic guidance", text: "We recommend the architecture that fits your landscape, not the one tied to a single vendor relationship.", icon: Compass },
  { title: "Governed & secure by design", text: "Role-based access, enterprise governance and security built into every dashboard from day one.", icon: ShieldCheck },
];

const STATS = [
  { value: "4", label: "Governed architectures" },
  { value: "7", label: "Phase delivery model" },
  { value: `${GALLERY_ITEMS.length}+`, label: "Dashboards delivered" },
  { value: "8–14", label: "Weeks to go-live" },
];

/* ── Reusable bits ─────────────────────────────────────────────────────────── */

function Eyebrow({ children, dark = false, center = false }: { children: React.ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <span className={`inline-block font-semibold tracking-widest uppercase text-xs mb-3 ${dark ? "text-orange-400" : "text-orange-500"} ${center ? "block text-center" : ""}`}>
      {children}
    </span>
  );
}

function SectionHeading({ children, dark = false, center = false, className = "" }: { children: React.ReactNode; dark?: boolean; center?: boolean; className?: string }) {
  return (
    <>
      <h2 className={`text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 ${dark ? "text-white" : "text-slate-900"} ${center ? "text-center" : ""} ${className}`}>
        {children}
      </h2>
      <div className={`h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-5 ${center ? "mx-auto" : ""}`} />
    </>
  );
}

/* ── Component ─────────────────────────────────────────────────────────────── */

const SAPAnalytics = () => {
  const [activeSol, setActiveSol] = useState<SolutionKey>("fabric");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (!showDemo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDemo(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showDemo]);

  const sol = SOLUTIONS[activeSol];
  const visibleShots = activeFilter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((s) => s.cat === activeFilter);

  return (
    <div className="bg-white text-slate-900" style={{ scrollBehavior: "smooth" }}>
      <Navbar />

      {/* ── HERO ── */}
      <header id="top" className="relative overflow-hidden text-white pt-20 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid lg:grid-cols-[1fr_460px] gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[11px] font-semibold tracking-[.18em] uppercase text-orange-400">Strategic Technology Proposal</span>
              </span>
              <h1 className="font-heading leading-[1.12] font-bold text-4xl sm:text-5xl lg:text-[56px] max-w-[640px]">
                Your SAP already has the answers. <span className="text-orange-400">Your leadership can't see them.</span>
              </h1>
              <p className="mt-6 mb-8 text-lg text-slate-300 max-w-[560px]">
                Sria Infotech turns raw SAP data into interactive dashboards, automated reporting and live KPI monitoring — one governed, trusted source of truth from shop floor to boardroom.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-[26px] py-3.5 rounded-xl font-bold text-[15px] bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                >
                  Book a walkthrough
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <button
                  onClick={() => setShowDemo(true)}
                  className="inline-block px-[26px] py-3.5 rounded-xl font-bold text-[15px] border border-white/30 text-white hover:border-white hover:bg-white/5 transition-colors"
                >
                  Explore sample dashboard
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-10">
                {["Executive", "Finance", "Sales", "Procurement", "Inventory", "Manufacturing", "HR", "Supply Chain"].map((s) => (
                  <span key={s} className="text-xs font-medium tracking-wide border border-white/25 text-slate-200 px-3.5 py-[7px] rounded-full">{s}</span>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-4 bg-amber-400/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-slate-800">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-950 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-[10px] text-slate-400 tracking-wide">CFO Dashboard — Sample Report</span>
                </div>
                <img src="/sap-analytics/cfo-summary-full.jpg" alt="Sample CFO dashboard delivered for a client" className="w-full h-auto block" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-500" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm leading-tight">Real client deliverable</p>
                  <p className="text-slate-500 text-xs">Built on live SAP data</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-16">
            {STATS.map((s) => (
              <div key={s.label} className="bg-slate-800/60 px-5 py-5 text-center">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-orange-400">{s.value}</p>
                <p className="text-slate-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── PROBLEM ── */}
      <Reveal>
        <section id="problem" className="py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[380px_1fr] gap-12">
              <div>
                <Eyebrow>The cost of yesterday's data</Eyebrow>
                <SectionHeading>Why real-time visibility matters</SectionHeading>
                <p className="text-slate-500">Most enterprises run their most critical processes inside SAP, yet decision-makers still wait on spreadsheets that arrive too late to change the outcome.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PROBLEM_CARDS.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.06}>
                    <div className="group h-full flex gap-4 bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                      <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                        <c.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-semibold text-orange-500 tracking-[.15em] uppercase block mb-1.5">{c.tag}</span>
                        <h3 className="font-heading font-semibold text-[17px] mb-1.5 text-slate-900">{c.title}</h3>
                        <p className="text-[13.5px] text-slate-500">{c.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── SOLUTIONS ── */}
      <Reveal>
        <section id="solutions" className="bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <Eyebrow dark>Choose your architecture</Eyebrow>
            <SectionHeading dark>Four proven paths from SAP to insight</SectionHeading>
            <p className="text-slate-400 max-w-[640px]">Select a path to see how the data flows. We recommend the architecture that fits your landscape — not the one tied to a vendor relationship.</p>

            <div className="grid lg:grid-cols-[340px_1fr] gap-6 mt-11">
              {/* Sidebar selector */}
              <div className="flex flex-col gap-2" role="tablist" aria-label="Architecture options">
                {SOLUTION_TABS.map((tab) => {
                  const selected = activeSol === tab.key;
                  return (
                    <button
                      key={tab.key}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveSol(tab.key)}
                      className={`group text-left rounded-xl p-4 border-l-2 transition-all duration-200 flex items-start gap-3.5 ${
                        selected
                          ? "border-l-orange-500 bg-slate-700"
                          : "border-l-transparent bg-slate-800/60 hover:bg-slate-800 hover:border-l-orange-500/40"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${selected ? "bg-orange-500 text-slate-950" : "bg-white/5 text-white/40 group-hover:text-white/70"}`}>
                        <tab.icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold text-orange-400 tracking-[.2em]">{tab.num}</span>
                          {tab.recommended && (
                            <span className="text-[9px] font-bold bg-orange-500 text-slate-950 px-[7px] py-[1px] rounded-full tracking-[.1em]">★ RECOMMENDED</span>
                          )}
                        </div>
                        <strong className={`font-heading block text-[15.5px] mt-0.5 ${selected ? "text-white" : "text-white/85"}`}>{tab.name}</strong>
                        <small className="text-slate-400 text-[12px] leading-[1.4] block mt-1">{tab.blurb}</small>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-1 transition-all ${selected ? "text-orange-400 translate-x-0.5" : "text-white/20"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Detail panel */}
              <motion.div
                key={activeSol}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-slate-800 border border-white/[.12] rounded-2xl p-7 sm:p-9"
                role="tabpanel"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                    {(() => { const Icon = SOLUTION_TABS.find((t) => t.key === activeSol)!.icon; return <Icon className="w-4.5 h-4.5 text-orange-400" />; })()}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold">{sol.t}</h3>
                </div>
                <p className="text-slate-400 mt-2 max-w-[720px] text-[15px]">{sol.d}</p>

                <div className="flex items-stretch flex-wrap my-[26px] mb-[30px]">
                  {sol.f.map((node, i) => (
                    <div key={node} className="flex items-center">
                      <div className="bg-slate-950 border border-white/[.18] rounded-[10px] px-[18px] py-4 min-w-[130px] text-center text-[12.5px] text-slate-200 leading-[1.4]">
                        {node}
                      </div>
                      {i < sol.f.length - 1 && (
                        <div className="w-[46px] flex items-center justify-center text-orange-400 text-xl" aria-hidden="true">→</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[.2em] text-orange-400 uppercase mb-3">Features</h4>
                    <ul className="space-y-2">
                      {sol.feat.map((x) => (
                        <li key={x} className="text-sm text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[.2em] text-orange-400 uppercase mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {sol.adv.map((x) => (
                        <li key={x} className="text-sm text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 bg-slate-950 border border-white/10 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[.2em] text-orange-400 uppercase mb-1">Best for</p>
                    <p className="text-sm text-slate-300">{sol.best}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── MATRIX ── */}
      <Reveal>
        <section id="matrix" className="py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Eyebrow>Side by side</Eyebrow>
            <SectionHeading>Solution comparison matrix</SectionHeading>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mt-[38px] border border-slate-100 rounded-2xl bg-white shadow-sm">
              <table className="border-collapse w-full min-w-[760px] text-sm">
                <thead>
                  <tr>
                    <th className="p-3.5 px-4 text-left border-b border-slate-100 bg-slate-950 text-white text-xs tracking-wide font-semibold">Dimension</th>
                    <th className="p-3.5 px-4 text-left border-b border-slate-100 bg-slate-950 text-white text-xs tracking-wide font-semibold">SAP HANA + Power BI</th>
                    <th className="p-3.5 px-4 text-left border-b border-slate-100 bg-slate-950 text-white text-xs tracking-wide font-semibold">GCP BigQuery</th>
                    <th className="p-3.5 px-4 text-left border-b border-slate-100 bg-orange-500 text-slate-950 text-xs tracking-wide font-semibold">MS Fabric + Power BI</th>
                    <th className="p-3.5 px-4 text-left border-b border-slate-100 bg-slate-950 text-white text-xs tracking-wide font-semibold">SAP Datasphere + SAC</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, i) => (
                    <tr key={row.label} className="hover:bg-slate-50 transition-colors">
                      <th className={`p-3.5 px-4 text-left font-semibold bg-orange-50 text-[13.5px] ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-slate-100"}`}>{row.label}</th>
                      <td className={`p-3.5 px-4 text-left ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-slate-100"}`}>{row.hana}</td>
                      <td className={`p-3.5 px-4 text-left ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-slate-100"}`}>{row.gcp}</td>
                      <td className={`p-3.5 px-4 text-left bg-orange-50 font-semibold ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-slate-100"}`}>{row.fabric}</td>
                      <td className={`p-3.5 px-4 text-left ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-slate-100"}`}>{row.sap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards (same data, readable without horizontal scroll) */}
            <div className="md:hidden space-y-4 mt-8">
              {MATRIX_ROWS.map((row) => (
                <div key={row.label} className="bg-white border border-slate-100 rounded-2xl p-5">
                  <p className="text-[11px] font-semibold tracking-[.15em] uppercase text-slate-500 mb-3">{row.label}</p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4"><dt className="text-slate-500">SAP HANA + Power BI</dt><dd className="font-medium text-right">{row.hana}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-slate-500">GCP BigQuery</dt><dd className="font-medium text-right">{row.gcp}</dd></div>
                    <div className="flex justify-between gap-4 bg-orange-50 -mx-2 px-2 py-1 rounded"><dt className="text-slate-900 font-semibold">MS Fabric + Power BI</dt><dd className="font-semibold text-right">{row.fabric}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-slate-500">SAP Datasphere + SAC</dt><dd className="font-medium text-right">{row.sap}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── GALLERY ── */}
      <Reveal>
        <section id="gallery" className="bg-white border-t border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Eyebrow>Delivered work</Eyebrow>
            <SectionHeading>Dashboards we've built on real SAP data</SectionHeading>
            <p className="text-slate-500 max-w-[640px]">Live Power BI dashboards delivered for a multi-plant manufacturing group — finance, sales, cost and working capital, all from a single governed data layer.</p>

            <div className="flex gap-2.5 flex-wrap mt-[34px] mb-1.5">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  aria-pressed={activeFilter === f.key}
                  className={`text-[12.5px] font-medium tracking-wide px-[18px] py-[9px] rounded-full border transition-colors ${
                    activeFilter === f.key ? "bg-slate-950 text-white border-slate-950" : "bg-transparent text-slate-500 border-slate-200 hover:border-slate-950/30"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Uniform grid — every dashboard framed identically for a consistent, professional presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[26px]">
              {visibleShots.map((shot) => (
                <figure
                  key={shot.full}
                  tabIndex={0}
                  onClick={() => setLightbox({ src: shot.full, alt: shot.alt })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightbox({ src: shot.full, alt: shot.alt });
                    }
                  }}
                  className="group border border-slate-100 rounded-2xl overflow-hidden bg-white cursor-zoom-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange-200 p-0 text-left"
                >
                  {/* Browser-chrome header — every card framed the same way */}
                  <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-950 border-b border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="ml-2.5 text-[9.5px] text-slate-400 tracking-wide truncate">{shot.category.toLowerCase().replace(/\s+/g, "-")}.sriainfotech.com</span>
                  </div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img loading="lazy" src={shot.thumb} alt={shot.alt} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                        <ZoomIn className="w-4.5 h-4.5 text-slate-900" />
                      </div>
                    </div>
                  </div>
                  <figcaption className="p-4 text-[13.5px] font-medium border-t border-slate-100">
                    <span className="inline-block text-[10px] font-semibold text-amber-600 tracking-[.15em] uppercase mb-1.5 bg-orange-50 px-2 py-0.5 rounded">{shot.category}</span>
                    <p>{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── APPROACH / PHASES ── */}
      <Reveal>
        <section id="approach" className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Eyebrow dark>Delivery methodology</Eyebrow>
            <SectionHeading dark>From discovery to steady-state in seven phases</SectionHeading>

            <div className="relative mt-16">
              <div className="hidden lg:block absolute top-[19px] left-[3%] right-[3%] h-px bg-white/15" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-3">
                {PHASES.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <div className="group relative h-full text-center lg:text-left">
                      <div className="hidden lg:flex w-10 h-10 rounded-full bg-slate-800 border-2 border-orange-500 items-center justify-center mb-4 relative z-10 mx-auto lg:mx-0 group-hover:bg-orange-500 transition-colors duration-300">
                        <p.icon className="w-4.5 h-4.5 text-orange-400 group-hover:text-slate-950 transition-colors duration-300" />
                      </div>
                      <div className="lg:hidden w-11 h-11 rounded-lg bg-slate-800 border border-orange-500/40 flex items-center justify-center mb-3 mx-auto group-hover:bg-orange-500 transition-colors duration-300">
                        <p.icon className="w-5 h-5 text-orange-400 group-hover:text-slate-950 transition-colors duration-300" />
                      </div>
                      <span className="text-[11px] font-semibold text-orange-400 tracking-[.15em] block mb-1.5">{String(i + 1).padStart(2, "0")}</span>
                      <strong className="font-heading text-[15px] block mb-1.5">{p.title}</strong>
                      <p className="text-[12.5px] text-slate-400 leading-[1.5]">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <p className="mt-14 text-sm text-slate-400 italic max-w-[720px] border-t border-white/10 pt-6">Most engagements move from kickoff to go-live within 8–14 weeks, depending on data complexity and the number of business areas in scope — followed by an ongoing hypercare period.</p>
          </div>
        </section>
      </Reveal>

      {/* ── WHY ── */}
      <Reveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Eyebrow center>The delivery team</Eyebrow>
            <SectionHeading center>Why partner with Sria Infotech</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {WHY_CARDS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group h-full text-center sm:text-left bg-orange-50 border border-transparent rounded-2xl p-7 hover:bg-white hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-white border border-amber-400/25 flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-amber-400 transition-colors duration-300">
                      <c.icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-semibold text-[19px] mb-2.5 text-slate-900">{c.title}</h3>
                    <p className="text-[14.5px] text-slate-500">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="relative text-white bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Eyebrow dark>Next step</Eyebrow>
              <SectionHeading dark className="max-w-[500px]">Let's build your analytics roadmap together</SectionHeading>
              <p className="text-slate-300 max-w-[500px]">We welcome the chance to walk through any of these architectures in depth and tailor a plan to your SAP landscape. A 45-minute walkthrough is enough to map your first three dashboards.</p>
              <a href="tel:+919701314138" className="group inline-flex items-center gap-2 mt-8 px-[26px] py-3.5 rounded-xl font-bold text-[15px] bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                Talk to us today
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold tracking-[.18em] text-orange-400 uppercase mb-1.5">Phone / WhatsApp</span>
                  <a href="tel:+919701314138" className="text-white no-underline border-b border-white/30 text-sm">+91 97013 14138</a>
                </div>
              </div>
              <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold tracking-[.18em] text-orange-400 uppercase mb-1.5">Email</span>
                  <a href="mailto:sales@sriainfotech.com" className="text-white no-underline border-b border-white/30 text-sm">sales@sriainfotech.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold tracking-[.18em] text-orange-400 uppercase mb-1.5">Office</span>
                  <p className="text-sm text-slate-300">Udaya Vensar, 303, Rd No. 1, Hanuman Nagar, Kothaguda, Hyderabad, Telangana 500084</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-[rgba(2,6,23,0.92)] flex items-center justify-center z-[100] p-[30px]"
          role="dialog"
          aria-modal="true"
          aria-label="Dashboard preview"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <button
            aria-label="Close preview"
            onClick={() => setLightbox(null)}
            className="absolute top-[22px] right-[26px] bg-transparent border-none text-white text-[34px] cursor-pointer leading-none hover:text-orange-400 transition-colors"
          >
            ×
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[88vh] max-w-[94vw] rounded-lg"
          />
        </div>
      )}

      {/* ── LIVE DASHBOARD DEMO MODAL ── */}
      {showDemo && (
        <div
          className="fixed inset-0 bg-[rgba(2,6,23,0.92)] flex items-center justify-center z-[100] p-4 sm:p-[30px]"
          role="dialog"
          aria-modal="true"
          aria-label="Live dashboard sample"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowDemo(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-[900px] max-h-[92vh] overflow-y-auto rounded-xl"
          >
            <button
              aria-label="Close dashboard sample"
              onClick={() => setShowDemo(false)}
              className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white text-slate-900 text-xl leading-none flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              ×
            </button>
            <ExecutiveDashboardDemo />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SAPAnalytics;
