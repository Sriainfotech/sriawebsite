import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Chart, registerables, type ChartConfiguration } from "chart.js";

Chart.register(...registerables);

/* ── Constants (ported 1:1 from the original static dashboard) ───────────── */

const NAVY = "#0B3D91";
const SKY = "#00AEEF";
const ORG = "#FF8C00";
const GRN = "#1D9E75";
const RED = "#C0392B";

const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const UNITS = ["SAP consulting", "Eskoolia", "NxSys Digital", "NxGen Academy"];
const CATS = ["Services", "SaaS", "Hardware"];
const YEARS = ["FY 2024-25", "FY 2025-26"];

type Row = { y: string; m: string; u: string; c: string; rev: number; cost: number };

function rng(seed: number) {
  let s = seed;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildRows(): Row[] {
  const r = rng(42);
  const rows: Row[] = [];
  YEARS.forEach((y, yi) => {
    MONTHS.forEach((m, mi) => {
      UNITS.forEach((u, ui) => {
        CATS.forEach((c, ci) => {
          const base = [42, 16, 22, 8][ui] * [1.4, 1, 0.9][ci] * (1 + yi * 0.14) * (1 + mi * 0.012);
          const rev = base * (0.85 + r() * 0.3);
          const cost = rev * (0.62 + r() * 0.12);
          rows.push({ y, m, u, c, rev, cost });
        });
      });
    });
  });
  return rows;
}

type Asset = { n: string; u: string; c: string; v: number; ut: number; s: "Active" | "Partial" | "Idle" };

const ASSETS: Asset[] = [
  { n: "Dell PowerEdge cluster", u: "SAP consulting", c: "Hardware", v: 48.2, ut: 92, s: "Active" },
  { n: "Network backbone HYD", u: "NxSys Digital", c: "Hardware", v: 22.6, ut: 88, s: "Active" },
  { n: "Eskoolia cloud infra", u: "Eskoolia", c: "SaaS", v: 18.4, ut: 76, s: "Active" },
  { n: "Training lab systems", u: "NxGen Academy", c: "Hardware", v: 14.8, ut: 54, s: "Partial" },
  { n: "SAP dev sandbox", u: "SAP consulting", c: "Services", v: 12.2, ut: 81, s: "Active" },
  { n: "NxSocial servers", u: "NxSys Digital", c: "SaaS", v: 9.6, ut: 68, s: "Partial" },
  { n: "Backup NAS array", u: "NxSys Digital", c: "Hardware", v: 7.4, ut: 41, s: "Idle" },
  { n: "Office workstations", u: "Eskoolia", c: "Hardware", v: 6.1, ut: 87, s: "Active" },
  { n: "Demo lab kit", u: "NxGen Academy", c: "Services", v: 3.8, ut: 33, s: "Idle" },
];

const fmt = (v: number) => "₹" + (v >= 100 ? (v / 100).toFixed(2) + " Cr" : v.toFixed(1) + " L");

// A factory, not a shared object — Chart.js resolves/caches options per instance,
// and reusing one literal across simultaneously-constructed charts breaks per-chart animation.
const makeGridOpt = (): ChartConfiguration["options"] => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 800, easing: "easeOutQuart" },
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { font: { size: 10 }, autoSkip: false, maxRotation: 0 } },
    y: { grid: { color: "#e8ecf3" }, ticks: { font: { size: 10 }, callback: (v) => Math.round(Number(v)) } },
  },
});

/* ── Animated KPI number: tweens from its previous value (or 0 on first mount)
   up to the new target whenever `value` changes, instead of snapping. ─────── */

function AnimatedNumber({ value, format }: { value: number; format: (v: number) => string }) {
  const [display, setDisplay] = useState(0);
  const fromRef = useRef(0);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    const duration = 700;
    let start: number | null = null;
    let raf = 0;

    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        fromRef.current = to;
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{format(display)}</>;
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function ExecutiveDashboardDemo() {
  const rows = useMemo(buildRows, []);

  const [year, setYear] = useState("FY 2025-26");
  const [month, setMonth] = useState("all");
  const [unit, setUnit] = useState("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const c1Ref = useRef<HTMLCanvasElement>(null);
  const c2Ref = useRef<HTMLCanvasElement>(null);
  const c3Ref = useRef<HTMLCanvasElement>(null);
  const c4Ref = useRef<HTMLCanvasElement>(null);
  const c6Ref = useRef<HTMLCanvasElement>(null);
  const chartsRef = useRef<Record<string, Chart>>({});

  const reset = () => {
    setYear("FY 2025-26");
    setMonth("all");
    setUnit("all");
    setCategory("all");
    setStatus("all");
  };

  const d = useMemo(
    () =>
      rows.filter(
        (x) =>
          (year === "all" || x.y === year) &&
          (month === "all" || x.m === month) &&
          (unit === "all" || x.u === unit) &&
          (category === "all" || x.c === category)
      ),
    [rows, year, month, unit, category]
  );

  const ast = useMemo(
    () => ASSETS.filter((a) => (unit === "all" || a.u === unit) && (category === "all" || a.c === category) && (status === "all" || a.s === status)),
    [unit, category, status]
  );

  const rev = d.reduce((a, x) => a + x.rev, 0);
  const cost = d.reduce((a, x) => a + x.cost, 0);
  const prof = rev - cost;

  const assetTotal = ast.reduce((a, x) => a + x.v, 0);
  const projectCount = unit === "all" ? 27 : Math.round(27 / 4);

  const kp: { label: string; value: number; color: string; format: (v: number) => string }[] = [
    { label: "Revenue", value: rev, color: NAVY, format: fmt },
    { label: "Cost", value: cost, color: SKY, format: fmt },
    { label: "Profit", value: prof, color: ORG, format: fmt },
    { label: "Margin", value: rev ? (prof / rev) * 100 : 0, color: NAVY, format: (v) => v.toFixed(1) + "%" },
    { label: "Assets", value: assetTotal, color: SKY, format: (v) => ast.length + " · " + fmt(v) },
    { label: "Projects", value: projectCount, color: ORG, format: (v) => Math.round(v) + " total" },
  ];

  const byM = MONTHS.map((m) => {
    const s = d.filter((x) => x.m === m);
    return { rev: s.reduce((a, x) => a + x.rev, 0), cost: s.reduce((a, x) => a + x.cost, 0) };
  });

  const byU = UNITS.map((u) => ({ u, v: Math.round(d.filter((x) => x.u === u).reduce((a, x) => a + x.rev, 0)) })).sort((a, b) => b.v - a.v);

  const byC = CATS.map((c) => Math.round(d.filter((x) => x.c === c).reduce((a, x) => a + x.rev, 0)));
  const totC = byC.reduce((a, b) => a + b, 0) || 1;

  const av = ast.reduce((a, x) => a + x.v, 0) || 1;
  const grp: Record<string, number> = {};
  ast.forEach((a) => (grp[a.c] = (grp[a.c] || 0) + a.v));
  const tclr: Record<string, string> = { Hardware: NAVY, SaaS: SKY, Services: ORG };
  const ttxt: Record<string, string> = { Hardware: "#dce9f7", SaaS: "#04345c", Services: "#4a2800" };

  const sc: Record<string, string> = { Active: GRN, Partial: ORG, Idle: RED };
  const topAssets = [...ast].sort((a, b) => b.v - a.v).slice(0, 6);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mk = (id: string, canvas: HTMLCanvasElement | null, cfg: any) => {
      if (!canvas) return;
      chartsRef.current[id]?.destroy();
      chartsRef.current[id] = new Chart(canvas, cfg);
    };

    mk("c1", c1Ref.current, {
      type: "line",
      data: { labels: MONTHS, datasets: [{ data: byM.map((x) => Math.round(x.rev)), borderColor: NAVY, borderWidth: 2, pointRadius: 0, tension: 0.3 }] },
      options: makeGridOpt(),
    });

    mk("c2", c2Ref.current, {
      type: "bar",
      data: {
        labels: MONTHS,
        datasets: [
          { label: "Revenue", data: byM.map((x) => Math.round(x.rev)), backgroundColor: NAVY, borderRadius: 3 },
          { label: "Cost", data: byM.map((x) => Math.round(x.cost)), backgroundColor: SKY, borderRadius: 3 },
        ],
      },
      options: makeGridOpt(),
    });

    mk("c3", c3Ref.current, {
      type: "bar",
      data: { labels: byU.map((x) => x.u), datasets: [{ data: byU.map((x) => x.v), backgroundColor: [NAVY, "#2a5cb0", SKY, "#7fb3e8"], borderRadius: 3 }] },
      options: {
        ...makeGridOpt(),
        indexAxis: "y",
        scales: {
          x: { grid: { color: "#e8ecf3" }, ticks: { font: { size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { size: 10 } } },
        },
      },
    });

    mk("c4", c4Ref.current, {
      type: "doughnut",
      data: { labels: CATS, datasets: [{ data: byC, backgroundColor: [NAVY, SKY, ORG], borderWidth: 2, borderColor: "#fff" }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: "65%", animation: { duration: 800, easing: "easeOutQuart" }, plugins: { legend: { display: false } } },
    });

    mk("c6", c6Ref.current, {
      type: "line",
      data: {
        labels: MONTHS,
        datasets: [{ data: byM.map((x) => Math.round(x.rev - x.cost)), borderColor: SKY, borderWidth: 2, pointRadius: 0, tension: 0.3, fill: true, backgroundColor: "rgba(0,174,239,0.12)" }],
      },
      options: makeGridOpt(),
    });

    return () => {
      Object.values(chartsRef.current).forEach((c) => c.destroy());
      chartsRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, unit, category, status]);

  return (
    <div style={{ background: "#FFFFFF", border: "0.5px solid #E2E8F0", borderRadius: 12, padding: 14, fontFamily: "'Segoe UI',sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0B3D91", borderRadius: 10, padding: "10px 14px", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: "#fff", borderRadius: 8, padding: "5px 8px", display: "flex", alignItems: "center" }}>
            <img src="/sap-analytics/exec-dashboard-logo.png" alt="Sria Infotech logo" style={{ height: 34, width: "auto", display: "block" }} />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>
              Sria INFOTECH PVT. LTD. <span style={{ color: "#9fc3f5" }}>| Executive Business Dashboard</span>
            </div>
            <div style={{ color: "#9fc3f5", fontSize: 10 }}>Last refresh: 08 Jul 2026 06:00</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10, alignItems: "center" }}>
        <select value={year} onChange={(e) => setYear(e.target.value)} style={{ fontSize: 11, height: 30 }}>
          <option value="all">Year: all</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select value={month} onChange={(e) => setMonth(e.target.value)} style={{ fontSize: 11, height: 30 }}>
          <option value="all">Month: all</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select value={unit} onChange={(e) => setUnit(e.target.value)} style={{ fontSize: 11, height: 30 }}>
          <option value="all">Unit: all</option>
          {UNITS.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ fontSize: 11, height: 30 }}>
          <option value="all">Category: all</option>
          {CATS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ fontSize: 11, height: 30 }}>
          <option value="all">Status: all</option>
          <option>Active</option>
          <option>Partial</option>
          <option>Idle</option>
        </select>
        <button onClick={reset} style={{ fontSize: 11, height: 30 }}>⟲ Reset</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))", gap: 8, marginBottom: 12 }}>
        {kp.map((k) => (
          <div key={k.label} style={{ background: "#F5F8FD", borderRadius: 8, padding: "8px 10px", borderLeft: `3px solid ${k.color}` }}>
            <div style={{ fontSize: 10, color: "#5F6B7A" }}>{k.label}</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#0B3D91" }}>
              <AnimatedNumber value={k.value} format={k.format} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91" }}>Revenue trend</div>
          <div style={{ position: "relative", height: 130 }}>
            <canvas ref={c1Ref} role="img" aria-label="Monthly revenue line chart" />
          </div>
        </div>
        <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91" }}>Revenue vs cost</div>
          <div style={{ position: "relative", height: 130 }}>
            <canvas ref={c2Ref} role="img" aria-label="Monthly revenue and cost clustered columns" />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91" }}>Unit performance (revenue)</div>
          <div style={{ position: "relative", height: 150 }}>
            <canvas ref={c3Ref} role="img" aria-label="Horizontal bar chart of revenue by business unit" />
          </div>
        </div>
        <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91" }}>Product category mix</div>
          <div style={{ display: "flex", gap: 10, fontSize: 11, color: "#5F6B7A", margin: "4px 0" }}>
            {CATS.map((c, i) => (
              <span key={c} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 9, height: 9, borderRadius: 2, background: [NAVY, SKY, ORG][i] }} />
                {c} <AnimatedNumber value={(byC[i] / totC) * 100} format={(v) => Math.round(v) + "%"} />
              </span>
            ))}
          </div>
          <div style={{ position: "relative", height: 120 }}>
            <canvas ref={c4Ref} role="img" aria-label="Donut chart of revenue by category" />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91", marginBottom: 6 }}>Asset distribution (value)</div>
          <div style={{ display: "flex", gap: 2, height: 130, borderRadius: 6, overflow: "hidden" }}>
            {Object.entries(grp).length ? (
              Object.entries(grp)
                .sort((a, b) => b[1] - a[1])
                .map(([c, v]) => (
                  <div key={c} style={{ flex: (v / av).toFixed(3), background: tclr[c], display: "flex", alignItems: "flex-start", padding: 6, minWidth: 0, transition: "flex 0.6s ease" }}>
                    <span style={{ fontSize: 10, color: ttxt[c], overflow: "hidden", whiteSpace: "nowrap" }}>
                      {c} {Math.round((v / av) * 100)}%
                    </span>
                  </div>
                ))
            ) : (
              <div style={{ fontSize: 11, color: "#94A3B8", padding: 8 }}>No assets match filters</div>
            )}
          </div>
        </div>
        <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91" }}>Monthly profit growth</div>
          <div style={{ position: "relative", height: 140 }}>
            <canvas ref={c6Ref} role="img" aria-label="Area chart of monthly profit" />
          </div>
        </div>
      </div>

      <div style={{ border: "0.5px solid #E2E8F0", borderRadius: 10, padding: "8px 10px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#0B3D91", marginBottom: 6 }}>Top assets</div>
        <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse", tableLayout: "fixed" }}>
          <thead>
            <tr style={{ background: "#0B3D91", color: "#fff" }}>
              <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 500, width: "30%" }}>Asset</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 500 }}>Unit</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 500 }}>Category</th>
              <th style={{ padding: "5px 8px", textAlign: "right", fontWeight: 500 }}>Value</th>
              <th style={{ padding: "5px 8px", textAlign: "right", fontWeight: 500 }}>Util.</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 500 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {topAssets.length ? (
                topAssets.map((a, i) => (
                  <motion.tr
                    key={a.n}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ background: i % 2 ? "#F9FBFE" : "#fff", borderBottom: "0.5px solid #e8ecf3" }}
                  >
                    <td style={{ padding: "5px 8px", color: "#1F2A37", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.n}</td>
                    <td style={{ padding: "5px 8px", color: "#5F6B7A" }}>{a.u.split(" ")[0]}</td>
                    <td style={{ padding: "5px 8px", color: "#5F6B7A" }}>{a.c}</td>
                    <td style={{ padding: "5px 8px", textAlign: "right", color: "#1F2A37" }}>
                      ₹<AnimatedNumber value={a.v} format={(v) => v.toFixed(1)} /> L
                    </td>
                    <td style={{ padding: "5px 8px", textAlign: "right", color: a.ut < 60 ? RED : GRN }}>
                      <AnimatedNumber value={a.ut} format={(v) => Math.round(v) + "%"} />
                    </td>
                    <td style={{ padding: "5px 8px", color: sc[a.s] }}>{a.s}</td>
                  </motion.tr>
                ))
              ) : (
                <motion.tr key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <td colSpan={6} style={{ padding: 8, color: "#94A3B8" }}>No assets match filters</td>
                </motion.tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}
