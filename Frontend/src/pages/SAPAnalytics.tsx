import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const SRIA_LOGO = "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454981/sria/logo.png";

/* ── Fonts (Bitter / IBM Plex Sans / IBM Plex Mono) ───────────────────────── */

function useProposalFonts() {
  useEffect(() => {
    const links = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ];
    const created = links.map((attrs) => {
      const el = document.createElement("link");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k === "crossOrigin" ? "crossorigin" : k, v));
      document.head.appendChild(el);
      return el;
    });
    return () => created.forEach((el) => el.remove());
  }, []);
}

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
  { cat: "fin", thumb: "/sap-analytics/shot-2.jpg", full: "/sap-analytics/shot-3.jpg", alt: "CFO dashboard financial summary", category: "Finance", caption: "CFO Dashboard — Financial Summary" },
  { cat: "fin", thumb: "/sap-analytics/shot-4.jpg", full: "/sap-analytics/shot-5.jpg", alt: "Balance sheet variance analysis", category: "Finance", caption: "Balance Sheet — Variance Analysis" },
  { cat: "fin", thumb: "/sap-analytics/shot-6.jpg", full: "/sap-analytics/shot-7.jpg", alt: "Accounts receivable aging and cash inflow", category: "Finance", caption: "Accounts Receivable — Aging & Cash Inflow" },
  { cat: "fin", thumb: "/sap-analytics/shot-8.jpg", full: "/sap-analytics/shot-9.jpg", alt: "Accounts payable aging and cash outflow", category: "Finance", caption: "Accounts Payable — Aging & Cash Outflow" },
  { cat: "sales", thumb: "/sap-analytics/shot-10.jpg", full: "/sap-analytics/shot-11.jpg", alt: "Sales analysis dashboard", category: "Sales", caption: "Sales Analysis Dashboard" },
  { cat: "sales", thumb: "/sap-analytics/shot-12.jpg", full: "/sap-analytics/shot-13.jpg", alt: "Sales comparison analysis report", category: "Sales", caption: "Sales Comparison Report" },
  { cat: "sales", thumb: "/sap-analytics/shot-14.jpg", full: "/sap-analytics/shot-15.jpg", alt: "Customer sales analysis dashboard", category: "Sales", caption: "Customer Sales Analysis" },
  { cat: "cost", thumb: "/sap-analytics/shot-16.jpg", full: "/sap-analytics/shot-17.jpg", alt: "Cost analysis summary", category: "Cost", caption: "Cost Analysis — Budget vs Actual" },
  { cat: "cost", thumb: "/sap-analytics/shot-18.jpg", full: "/sap-analytics/shot-19.jpg", alt: "Plant wise cost comparison", category: "Cost", caption: "Cost Analysis — Plant-wise Comparison" },
  { cat: "cost", thumb: "/sap-analytics/shot-20.jpg", full: "/sap-analytics/shot-21.jpg", alt: "Plant cost ranking", category: "Cost", caption: "Cost Analysis — Plant Ranking & Trends" },
  { cat: "wc", thumb: "/sap-analytics/wc-dashboard-1-thumb.jpg", full: "/sap-analytics/wc-dashboard-1-full.jpg", alt: "Working capital dashboard with segment, plant and material-wise target vs actual", category: "Working capital", caption: "Working Capital Dashboard" },
  { cat: "wc", thumb: "/sap-analytics/wc-dashboard-2-thumb.jpg", full: "/sap-analytics/wc-dashboard-2-full.jpg", alt: "Working capital comparison across fiscal periods by plant and material type", category: "Working capital", caption: "Working Capital — Period Comparison" },
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

const QUICK_LINKS = [
  { label: "Why now", href: "#problem" },
  { label: "Architectures", href: "#solutions" },
  { label: "Dashboards", href: "#gallery" },
  { label: "Approach", href: "#approach" },
];

/* ── Reusable bits ─────────────────────────────────────────────────────────── */

function Eyebrow({ children, dark = false, center = false }: { children: React.ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <p className={`font-sapMono text-xs tracking-[.22em] uppercase flex items-center gap-3 ${center ? "justify-center" : ""} ${dark ? "text-[#E8A33D]" : "text-[#14707E]"}`}>
      <span className={`h-px w-6 ${dark ? "bg-[#E8A33D]/60" : "bg-[#14707E]/50"}`} />
      {children}
      {center && <span className={`h-px w-6 ${dark ? "bg-[#E8A33D]/60" : "bg-[#14707E]/50"}`} />}
    </p>
  );
}

/* ── Component ─────────────────────────────────────────────────────────────── */

const SAPAnalytics = () => {
  useProposalFonts();

  const [activeSol, setActiveSol] = useState<SolutionKey>("fabric");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const sol = SOLUTIONS[activeSol];
  const visibleShots = activeFilter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((s) => s.cat === activeFilter);

  return (
    <div className="font-sapBody text-[#0C2233] bg-[#FBFAF7] text-base leading-relaxed" style={{ scrollBehavior: "smooth" }}>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-[#0C2233]/[.94] backdrop-blur-md border-b border-white/[.08] shadow-[0_1px_0_rgba(0,0,0,0.2)]">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-16">
          <a className="flex items-center no-underline" href="#top">
            <img src={SRIA_LOGO} alt="Sria Infotech" className="h-24 w-auto block" />
          </a>
          <ul className="flex items-center gap-7 list-none">
            {QUICK_LINKS.map((l) => (
              <li key={l.href} className="hidden lg:block">
                <a className="text-[#CBD9E2] no-underline text-sm font-medium hover:text-white transition-colors" href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 bg-[#E8A33D] text-[#0C2233] no-underline text-sm font-semibold px-[18px] py-[9px] rounded-md hover:bg-[#F0B357] transition-colors"
              >
                Book a walkthrough
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header id="top" className="relative overflow-hidden text-white pt-[100px] pb-20 bg-gradient-to-br from-[#0C2233] via-[#0F2E45] to-[#123B52]">
        <div className="absolute -right-[140px] -top-[140px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(20,112,126,.35),transparent_65%)] pointer-events-none" />
        <div className="absolute left-[-120px] bottom-[-160px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(232,163,61,.16),transparent_65%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
        />

        <div className="max-w-[1180px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_460px] gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#E8A33D]" />
                <span className="font-sapMono text-[11px] tracking-[.18em] uppercase text-[#E8A33D]">Strategic Technology Proposal</span>
              </span>
              <h1 className="font-sapDisplay leading-[1.12] font-extrabold text-4xl sm:text-5xl lg:text-[56px] max-w-[640px]">
                Your SAP already has the answers. <span className="text-[#E8A33D]">Your leadership can't see them.</span>
              </h1>
              <p className="mt-6 mb-8 text-lg text-[#C6D6DF] max-w-[560px]">
                Sria Infotech turns raw SAP data into interactive dashboards, automated reporting and live KPI monitoring — one governed, trusted source of truth from shop floor to boardroom.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <a href="#contact" className="group inline-flex items-center gap-2 px-[26px] py-3.5 rounded-lg font-semibold text-[15px] no-underline bg-[#E8A33D] text-[#0C2233] hover:bg-[#F0B357] transition-colors shadow-[0_10px_30px_rgba(232,163,61,0.25)]">
                  Book a walkthrough
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#gallery" className="inline-block px-[26px] py-3.5 rounded-lg font-semibold text-[15px] no-underline border border-white/[.35] text-white hover:border-white hover:bg-white/5 transition-colors">
                  See live dashboard samples
                </a>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-10">
                {["Executive", "Finance", "Sales", "Procurement", "Inventory", "Manufacturing", "HR", "Supply Chain"].map((s) => (
                  <span key={s} className="font-sapMono text-xs tracking-wide border border-white/25 text-[#D8E4EA] px-3.5 py-[7px] rounded-full">{s}</span>
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
              <div className="absolute -inset-4 bg-[#14707E]/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#0F2E45]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0C2233] border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8695A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5FBF8A]" />
                  <span className="ml-3 font-sapMono text-[10px] text-[#7E93A2] tracking-wide">live-dashboard.sriainfotech.com</span>
                </div>
                <img src="/sap-analytics/shot-2.jpg" alt="Live CFO dashboard preview" className="w-full h-auto block" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E7F1F0] flex items-center justify-center">
                  <LayoutDashboard className="w-4.5 h-4.5 text-[#14707E]" />
                </div>
                <div>
                  <p className="text-[#0C2233] font-bold text-sm leading-tight">Live refresh</p>
                  <p className="text-[#5B7080] text-xs">Updated every 15 min</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-16">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#0F2E45]/60 px-5 py-5 text-center">
                <p className="font-sapDisplay text-2xl sm:text-3xl font-bold text-[#E8A33D]">{s.value}</p>
                <p className="text-[#9FB4C0] text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── PROBLEM ── */}
      <Reveal>
        <section id="problem" className="py-[88px]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="grid lg:grid-cols-[380px_1fr] gap-12">
              <div>
                <Eyebrow>The cost of yesterday's data</Eyebrow>
                <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5">Why real-time visibility matters</h2>
                <p className="text-[#5B7080]">Most enterprises run their most critical processes inside SAP, yet decision-makers still wait on spreadsheets that arrive too late to change the outcome.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PROBLEM_CARDS.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.06}>
                    <div className="group h-full flex gap-4 bg-white border border-[#D8E2E1] rounded-xl p-6 hover:border-[#E8A33D]/50 hover:shadow-[0_16px_32px_rgba(12,34,51,0.08)] transition-all duration-300">
                      <div className="w-11 h-11 rounded-lg bg-[#FBF3E4] border border-[#E8A33D]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8A33D] transition-colors duration-300">
                        <c.icon className="w-5 h-5 text-[#E8A33D] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="font-sapMono text-[10.5px] text-[#E8A33D] tracking-[.15em] uppercase block mb-1.5">{c.tag}</span>
                        <h3 className="font-sapDisplay text-[17px] mb-1.5">{c.title}</h3>
                        <p className="text-[13.5px] text-[#5B7080]">{c.text}</p>
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
        <section id="solutions" className="bg-[#0C2233] text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-[#14707E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1180px] mx-auto px-6 py-[88px] relative z-10">
            <Eyebrow dark>Choose your architecture</Eyebrow>
            <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5">Four proven paths from SAP to insight</h2>
            <p className="text-[#9FB4C0] max-w-[640px]">Select a path to see how the data flows. We recommend the architecture that fits your landscape — not the one tied to a vendor relationship.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-11" role="tablist" aria-label="Architecture options">
              {SOLUTION_TABS.map((tab) => {
                const selected = activeSol === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveSol(tab.key)}
                    className={`text-left font-sapBody rounded-xl px-5 py-[22px] border transition-all duration-200 ${
                      selected
                        ? "border-[#E8A33D] bg-[#16405A] -translate-y-[3px] shadow-[0_14px_28px_rgba(0,0,0,0.25)]"
                        : "border-white/[.12] bg-[#123146] hover:border-[#E8A33D]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sapMono text-[11px] text-[#E8A33D] tracking-[.2em]">{tab.num}</span>
                      <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${selected ? "bg-[#E8A33D]/15" : "bg-white/5"}`}>
                        <tab.icon className={`w-3.5 h-3.5 transition-colors ${selected ? "text-[#E8A33D]" : "text-white/40"}`} />
                      </div>
                    </div>
                    <strong className="font-sapDisplay block text-[17px] mb-1.5">{tab.name}</strong>
                    <small className="text-[#9FB4C0] text-[12.5px] leading-[1.45] block">{tab.blurb}</small>
                    {tab.recommended && (
                      <span className="inline-block mt-2.5 font-sapMono text-[10px] bg-[#E8A33D] text-[#0C2233] px-[9px] py-[3px] rounded-full tracking-[.1em]">★ RECOMMENDED</span>
                    )}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeSol}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-9 bg-[#123146] border border-white/[.12] rounded-2xl p-9"
              role="tabpanel"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-lg bg-[#E8A33D]/15 flex items-center justify-center flex-shrink-0">
                  {(() => { const Icon = SOLUTION_TABS.find((t) => t.key === activeSol)!.icon; return <Icon className="w-4.5 h-4.5 text-[#E8A33D]" />; })()}
                </div>
                <h3 className="text-2xl font-sapDisplay font-bold">{sol.t}</h3>
              </div>
              <p className="text-[#9FB4C0] mt-2 max-w-[720px] text-[15px]">{sol.d}</p>

              <div className="flex items-stretch flex-wrap my-[26px] mb-[34px]">
                {sol.f.map((node, i) => (
                  <div key={node} className="flex items-center">
                    <div className="bg-[#0C2233] border border-white/[.18] rounded-[10px] px-[18px] py-4 min-w-[130px] text-center font-sapMono text-[12.5px] text-[#DCE7ED] leading-[1.4]">
                      {node}
                    </div>
                    {i < sol.f.length - 1 && (
                      <div className="w-[46px] flex items-center justify-center text-[#E8A33D] text-xl" aria-hidden="true">→</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                <div>
                  <h4 className="font-sapMono text-[11px] tracking-[.2em] text-[#E8A33D] uppercase mb-3">Features</h4>
                  <ul className="list-none">
                    {sol.feat.map((x) => (
                      <li key={x} className="text-sm text-[#C6D6DF] py-[5px] pl-[18px] relative before:content-['·'] before:text-[#E8A33D] before:font-bold before:absolute before:left-0.5">{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-sapMono text-[11px] tracking-[.2em] text-[#E8A33D] uppercase mb-3">Advantages</h4>
                  <ul className="list-none">
                    {sol.adv.map((x) => (
                      <li key={x} className="text-sm text-[#C6D6DF] py-[5px] pl-[18px] relative before:content-['·'] before:text-[#E8A33D] before:font-bold before:absolute before:left-0.5">{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-sapMono text-[11px] tracking-[.2em] text-[#E8A33D] uppercase mb-3">Best for</h4>
                  <p className="text-sm text-[#C6D6DF]">{sol.best}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── MATRIX ── */}
      <Reveal>
        <section id="matrix" className="py-[88px]">
          <div className="max-w-[1180px] mx-auto px-6">
            <Eyebrow>Side by side</Eyebrow>
            <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5">Solution comparison matrix</h2>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mt-[38px] border border-[#D8E2E1] rounded-xl bg-white shadow-[0_4px_20px_rgba(12,34,51,0.04)]">
              <table className="border-collapse w-full min-w-[760px] text-sm">
                <thead>
                  <tr>
                    <th className="p-3.5 px-4 text-left border-b border-[#D8E2E1] bg-[#0C2233] text-white font-sapMono text-xs tracking-wide font-medium">Dimension</th>
                    <th className="p-3.5 px-4 text-left border-b border-[#D8E2E1] bg-[#0C2233] text-white font-sapMono text-xs tracking-wide font-medium">SAP HANA + Power BI</th>
                    <th className="p-3.5 px-4 text-left border-b border-[#D8E2E1] bg-[#0C2233] text-white font-sapMono text-xs tracking-wide font-medium">GCP BigQuery</th>
                    <th className="p-3.5 px-4 text-left border-b border-[#D8E2E1] bg-[#E8A33D] text-[#0C2233] font-sapMono text-xs tracking-wide font-medium">MS Fabric + Power BI</th>
                    <th className="p-3.5 px-4 text-left border-b border-[#D8E2E1] bg-[#0C2233] text-white font-sapMono text-xs tracking-wide font-medium">SAP Datasphere + SAC</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, i) => (
                    <tr key={row.label} className="hover:bg-[#FBFAF7] transition-colors">
                      <th className={`p-3.5 px-4 text-left font-semibold bg-[#E7F1F0] text-[13.5px] ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-[#D8E2E1]"}`}>{row.label}</th>
                      <td className={`p-3.5 px-4 text-left ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-[#D8E2E1]"}`}>{row.hana}</td>
                      <td className={`p-3.5 px-4 text-left ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-[#D8E2E1]"}`}>{row.gcp}</td>
                      <td className={`p-3.5 px-4 text-left bg-[#FBF3E4] font-semibold ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-[#D8E2E1]"}`}>{row.fabric}</td>
                      <td className={`p-3.5 px-4 text-left ${i === MATRIX_ROWS.length - 1 ? "" : "border-b border-[#D8E2E1]"}`}>{row.sap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards (same data, readable without horizontal scroll) */}
            <div className="md:hidden space-y-4 mt-8">
              {MATRIX_ROWS.map((row) => (
                <div key={row.label} className="bg-white border border-[#D8E2E1] rounded-xl p-5">
                  <p className="font-sapMono text-[11px] tracking-[.15em] uppercase text-[#5B7080] mb-3">{row.label}</p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4"><dt className="text-[#5B7080]">SAP HANA + Power BI</dt><dd className="font-medium text-right">{row.hana}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#5B7080]">GCP BigQuery</dt><dd className="font-medium text-right">{row.gcp}</dd></div>
                    <div className="flex justify-between gap-4 bg-[#FBF3E4] -mx-2 px-2 py-1 rounded"><dt className="text-[#0C2233] font-semibold">MS Fabric + Power BI</dt><dd className="font-semibold text-right">{row.fabric}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#5B7080]">SAP Datasphere + SAC</dt><dd className="font-medium text-right">{row.sap}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── GALLERY ── */}
      <Reveal>
        <section id="gallery" className="bg-white border-t border-b border-[#D8E2E1]">
          <div className="max-w-[1180px] mx-auto px-6 py-[88px]">
            <Eyebrow>Delivered work</Eyebrow>
            <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5">Dashboards we've built on real SAP data</h2>
            <p className="text-[#5B7080] max-w-[640px]">Live Power BI dashboards delivered for a multi-plant manufacturing group — finance, sales, cost and working capital, all from a single governed data layer.</p>

            <div className="flex gap-2.5 flex-wrap mt-[34px] mb-1.5">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  aria-pressed={activeFilter === f.key}
                  className={`font-sapMono text-[12.5px] tracking-wide px-[18px] py-[9px] rounded-full border transition-colors ${
                    activeFilter === f.key ? "bg-[#0C2233] text-white border-[#0C2233]" : "bg-transparent text-[#5B7080] border-[#D8E2E1] hover:border-[#0C2233]/30"
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
                  className="group border border-[#D8E2E1] rounded-xl overflow-hidden bg-white cursor-zoom-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(12,34,51,0.14)] hover:border-[#14707E]/30 p-0 text-left"
                >
                  {/* Browser-chrome header — every card framed the same way */}
                  <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#0C2233] border-b border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#E8695A]" />
                    <span className="w-2 h-2 rounded-full bg-[#E8A33D]" />
                    <span className="w-2 h-2 rounded-full bg-[#5FBF8A]" />
                    <span className="ml-2.5 font-sapMono text-[9.5px] text-[#7E93A2] tracking-wide truncate">{shot.category.toLowerCase().replace(/\s+/g, "-")}.sriainfotech.com</span>
                  </div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img loading="lazy" src={shot.thumb} alt={shot.alt} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#0C2233]/0 group-hover:bg-[#0C2233]/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                        <ZoomIn className="w-4.5 h-4.5 text-[#0C2233]" />
                      </div>
                    </div>
                  </div>
                  <figcaption className="p-4 text-[13.5px] font-medium border-t border-[#D8E2E1]">
                    <span className="inline-block font-sapMono text-[10px] text-[#14707E] tracking-[.15em] uppercase mb-1.5 bg-[#E7F1F0] px-2 py-0.5 rounded">{shot.category}</span>
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
        <section id="approach" className="py-[88px] bg-[#0C2233] text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#14707E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1180px] mx-auto px-6 relative z-10">
            <Eyebrow dark>Delivery methodology</Eyebrow>
            <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5">From discovery to steady-state in seven phases</h2>

            <div className="relative mt-16">
              <div className="hidden lg:block absolute top-[19px] left-[3%] right-[3%] h-px bg-white/15" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-5 lg:gap-3">
                {PHASES.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <div className="group relative h-full text-center lg:text-left">
                      <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#123146] border-2 border-[#E8A33D] items-center justify-center mb-4 relative z-10 mx-auto lg:mx-0 group-hover:bg-[#E8A33D] transition-colors duration-300">
                        <p.icon className="w-4.5 h-4.5 text-[#E8A33D] group-hover:text-[#0C2233] transition-colors duration-300" />
                      </div>
                      <div className="lg:hidden w-11 h-11 rounded-lg bg-[#123146] border border-[#E8A33D]/40 flex items-center justify-center mb-3 mx-auto group-hover:bg-[#E8A33D] transition-colors duration-300">
                        <p.icon className="w-5 h-5 text-[#E8A33D] group-hover:text-[#0C2233] transition-colors duration-300" />
                      </div>
                      <span className="font-sapMono text-[11px] text-[#E8A33D] tracking-[.15em] block mb-1.5">{String(i + 1).padStart(2, "0")}</span>
                      <strong className="font-sapDisplay text-[15px] block mb-1.5">{p.title}</strong>
                      <p className="text-[12.5px] text-[#9FB4C0] leading-[1.5]">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <p className="mt-14 text-sm text-[#9FB4C0] italic max-w-[720px] border-t border-white/10 pt-6">Most engagements move from kickoff to go-live within 8–14 weeks, depending on data complexity and the number of business areas in scope — followed by an ongoing hypercare period.</p>
          </div>
        </section>
      </Reveal>

      {/* ── WHY ── */}
      <Reveal>
        <section className="py-[88px] bg-[#FBFAF7]">
          <div className="max-w-[1180px] mx-auto px-6">
            <Eyebrow center>The delivery team</Eyebrow>
            <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5 text-center">Why partner with Sria Infotech</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {WHY_CARDS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="group h-full text-center sm:text-left bg-[#E7F1F0] border border-transparent rounded-xl p-7 hover:bg-white hover:border-[#14707E]/25 hover:shadow-[0_16px_32px_rgba(12,34,51,0.08)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-white border border-[#14707E]/15 flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-[#14707E] transition-colors duration-300">
                      <c.icon className="w-5 h-5 text-[#14707E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-sapDisplay text-[19px] mb-2.5">{c.title}</h3>
                    <p className="text-[14.5px] text-[#5B7080]">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="relative text-white bg-gradient-to-br from-[#0C2233] to-[#123B52] overflow-hidden">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#E8A33D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-6 py-[88px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Eyebrow dark>Next step</Eyebrow>
              <h2 className="font-sapDisplay leading-[1.15] font-bold text-[clamp(28px,3.6vw,40px)] my-2.5 mb-3.5 text-white max-w-[500px]">Let's build your analytics roadmap together</h2>
              <p className="text-[#C6D6DF] max-w-[500px]">We welcome the chance to walk through any of these architectures in depth and tailor a plan to your SAP landscape. A 45-minute walkthrough is enough to map your first three dashboards.</p>
              <a href="tel:+919701314138" className="group inline-flex items-center gap-2 mt-8 px-[26px] py-3.5 rounded-lg font-semibold text-[15px] no-underline bg-[#E8A33D] text-[#0C2233] hover:bg-[#F0B357] transition-colors shadow-[0_10px_30px_rgba(232,163,61,0.25)]">
                Talk to us today
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#E8A33D]/15 border border-[#E8A33D]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#E8A33D]" />
                </div>
                <div>
                  <span className="block font-sapMono text-[11px] tracking-[.18em] text-[#E8A33D] uppercase mb-1.5">Phone / WhatsApp</span>
                  <a href="tel:+919701314138" className="text-white no-underline border-b border-white/30 text-sm">+91 97013 14138</a>
                </div>
              </div>
              <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#E8A33D]/15 border border-[#E8A33D]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#E8A33D]" />
                </div>
                <div>
                  <span className="block font-sapMono text-[11px] tracking-[.18em] text-[#E8A33D] uppercase mb-1.5">Email</span>
                  <a href="mailto:sales@sriainfotech.com" className="text-white no-underline border-b border-white/30 text-sm">sales@sriainfotech.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#E8A33D]/15 border border-[#E8A33D]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#E8A33D]" />
                </div>
                <div>
                  <span className="block font-sapMono text-[11px] tracking-[.18em] text-[#E8A33D] uppercase mb-1.5">Office</span>
                  <p className="text-sm text-[#C6D6DF]">Udaya Vensar, 303, Rd No. 1, Hanuman Nagar, Kothaguda, Hyderabad, Telangana 500084</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#081826] text-[#7E93A2] text-[13px]">
        <div className="max-w-[1180px] mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src={SRIA_LOGO} alt="Sria Infotech" className="h-24 w-auto block" />
            <p className="max-w-[280px] text-xs leading-relaxed">Turning SAP data into governed, real-time decision-making — from shop floor to boardroom.</p>
          </div>
          <div className="flex gap-10 flex-wrap">
            <div>
              <p className="font-sapMono text-[10px] tracking-[.18em] uppercase text-[#E8A33D] mb-3">This proposal</p>
              <ul className="space-y-2 list-none">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-[#9FB4C0] no-underline hover:text-white transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sapMono text-[10px] tracking-[.18em] uppercase text-[#E8A33D] mb-3">Sria Infotech</p>
              <ul className="space-y-2 list-none">
                <li><a href="https://www.sriainfotech.com" className="text-[#9FB4C0] no-underline hover:text-white transition-colors">www.sriainfotech.com</a></li>
                <li><a href="mailto:sales@sriainfotech.com" className="text-[#9FB4C0] no-underline hover:text-white transition-colors">sales@sriainfotech.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1180px] mx-auto px-6 py-5 text-xs">
          © Sria Infotech Pvt. Ltd. · CIN U72900TG2022PTC161846
        </div>
      </footer>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-[rgba(8,20,30,0.92)] flex items-center justify-center z-[100] p-[30px]"
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
            className="absolute top-[22px] right-[26px] bg-transparent border-none text-white text-[34px] cursor-pointer leading-none hover:text-[#E8A33D] transition-colors"
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
    </div>
  );
};

export default SAPAnalytics;
