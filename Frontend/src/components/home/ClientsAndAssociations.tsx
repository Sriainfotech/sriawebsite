import { useState, useEffect, useRef, ReactNode } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Client {
  name: string;
  country: string;
  flag: string;
  logo?: string;
}

interface Association {
  name: string;
  tag: string;
  logo: string;
}

interface StatCounterProps {
  end: number;
  label: string;
}

interface MarqueeProps {
  items: Client[];
}

interface ClientCardProps {
  client: Client;
}

interface AssocCardProps {
  assoc: Association;
}

interface SectionLabelProps {
  children: ReactNode;
}

// ── Data ────────────────────────────────────────────────────────────────────

const CLIENTS: Client[] = [
  { name: "MSPL Limited – Baldota Group", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/baldota.jpg?tr=f-auto,q-auto" },
  { name: "Patil Group", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/patil.png?tr=f-auto,q-auto" },
  { name: "Stannik Technologies", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/stannik.png?tr=f-auto,q-auto" },
  { name: "OnFocus", country: "United States", flag: "🇺🇸", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/onfocus.jpg?tr=f-auto,q-auto" },
  { name: "Magnify 360", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/magnify360.jpg?tr=f-auto,q-auto" },
  { name: "IVC", country: "Hong Kong", flag: "🇭🇰", logo: "https://ik.imagekit.io/hps6th7vy/sria/ivclogo.png?tr=f-auto,q-auto" },
  { name: "TechLabs", country: "Kenya", flag: "🇰🇪", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/techlab_kenya.jpg?tr=f-auto,q-auto" },
  { name: "TechLabs", country: "United States", flag: "🇺🇸", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/techlabs_usa.jpg?tr=f-auto,q-auto" },
  { name: "CM2 IT Solutions", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/cm2.png?tr=f-auto,q-auto" },
  { name: "Vinayaka Global Solutions", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/vinayaka.jpg?tr=f-auto,q-auto" },
  { name: "LiveRamp", country: "India · USA", flag: "🇮🇳🇺🇸", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/liveramp.jpg?tr=f-auto,q-auto" },
  { name: "LVK Pharma", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/lvkpharma.jpg?tr=f-auto,q-auto" },
  { name: "Sai Balaji Infra Pvt. Ltd.", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/saibalaji.png?tr=f-auto,q-auto" },
  { name: "Royal Staffing", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/royalstaffing.jpg?tr=f-auto,q-auto" },
  { name: "Digitin Mapping Limited", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/digitin.png?tr=f-auto,q-auto" },
  { name: "Pardhu Infotech", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/pardhu.png?tr=f-auto,q-auto" },
  { name: "Dotedge Technologies", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/dotedge.jpg?tr=f-auto,q-auto" },
  { name: "Sugar Times", country: "India", flag: "🇮🇳", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/sugartimes.jpg?tr=f-auto,q-auto" },
  { name: "Savadia Foundation", country: "United States", flag: "🇺🇸", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/savadia.png?tr=f-auto,q-auto" },
  { name: "7 Hills Restaurant", country: "Belgium", flag: "🇧🇪", logo: "https://ik.imagekit.io/hps6th7vy/sria/clients/7hills.png?tr=f-auto,q-auto" },
];

// Replace logo URLs with your actual image URLs
const ASSOCIATIONS: Association[] = [
  // {
  //   name: "Telangana Government",
  //   tag: "State Partner",
  //   logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/telangana.png?tr=f-auto,q-auto",
  // },
  {
    name: "TASK",
    tag: "Skill Alliance",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/task.jpg?tr=f-auto,q-auto",
  },
  {
    name: "BSNL Skill Development",
    tag: "Telecom Partner",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/bsnl.png?tr=f-auto,q-auto",
  },
  {
    name: "IVC SAP Gold Partner",
    tag: "SAP Gold",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/ivclogo.png?tr=f-auto,q-auto",
  },
  {
    name: "T-Hub",
    tag: "Innovation Hub",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/thub.png?tr=f-auto,q-auto",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const CARD_ACCENTS: string[] = [
  "from-orange-500 to-amber-600",
  "from-orange-600 to-orange-800",
  "from-amber-500 to-orange-600",
  "from-orange-400 to-amber-500",
  "from-amber-600 to-orange-700",
  "from-orange-500 to-red-600",
];

function accentFor(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return CARD_ACCENTS[h % CARD_ACCENTS.length];
}

// ── Marquee ──────────────────────────────────────────────────────────────────

function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-gray-950 to-transparent" />
      <div
        className="flex gap-5 animate-[marquee_40s_linear_infinite] w-max"
        style={{ willChange: "transform" }}
      >
        {doubled.map((c, i) => (
          <ClientCard key={i} client={c} />
        ))}
      </div>
    </div>
  );
}

function ClientCard({ client }: ClientCardProps) {
  const accent = accentFor(client.name);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex-shrink-0 w-52 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300 group overflow-hidden">
      <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />
      <div className="p-4">
        <div className={`w-16 h-16 rounded-lg overflow-hidden mb-3 shadow-lg flex-shrink-0 ${imgFailed ? `bg-gradient-to-br ${accent} flex items-center justify-center` : "bg-white p-1.5"}`}>
          {client.logo && !imgFailed ? (
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-full object-contain"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <span className="text-white text-base font-bold">{initials(client.name)}</span>
          )}
        </div>
        <p className="text-white text-sm font-semibold leading-tight line-clamp-2 group-hover:text-orange-300 transition-colors">
          {client.name}
        </p>
        <p className="mt-1.5 text-[11px] text-white/40 flex items-center gap-1">
          <span>{client.flag}</span>
          <span>{client.country}</span>
        </p>
      </div>
    </div>
  );
}

// ── Stat counter ─────────────────────────────────────────────────────────────

function StatCounter({ end, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white tabular-nums">
        {count}<span className="text-orange-400">+</span>
      </div>
      <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// ── Association card ─────────────────────────────────────────────────────────

function AssocCard({ assoc }: AssocCardProps) {
  return (
    <div className="w-full flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-400/20 transition-all duration-300 group">
      <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden p-2 flex-shrink-0">
        <img
          src={assoc.logo}
          alt={assoc.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            t.parentElement!.innerHTML = `<span class="text-orange-500 font-bold text-sm">${assoc.name.slice(0, 2).toUpperCase()}</span>`;
          }}
        />
      </div>
      <div className="w-full text-center flex-1 flex flex-col items-center justify-start">
        <p className="text-white font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem] flex items-center">{assoc.name}</p>
        <span className="inline-block mt-1 text-[10px] uppercase tracking-widest text-orange-400 border border-orange-400/30 rounded-full px-2 py-0.5 whitespace-nowrap">
          {assoc.tag}
        </span>
      </div>
    </div>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      <span className="h-px w-8 bg-orange-500/60" />
      <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">{children}</span>
      <span className="h-px w-8 bg-orange-500/60" />
    </div>
  );
}

// ── Country summary pills ─────────────────────────────────────────────────────

const COUNTRY_SUMMARY: { flag: string; label: string; count: number }[] = [
  { flag: "🇮🇳", label: "India", count: 12 },
  { flag: "🇺🇸", label: "United States", count: 3 },
  { flag: "🇭🇰", label: "Hong Kong", count: 1 },
  { flag: "🇰🇪", label: "Kenya", count: 1 },
  { flag: "🇧🇪", label: "Belgium", count: 1 },
];

// ── Main export ───────────────────────────────────────────────────────────────

export default function ClientsAndAssociations() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_40s_linear_infinite\\] { animation: none; }
        }
      `}</style>

      {/* ── CLIENTS SECTION ── */}
      <section className="bg-gray-950 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Our Clients</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Trusted Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                5 Countries
              </span>
            </h2>
            <p className="mt-3 text-white/50 text-sm max-w-xl mx-auto">
              From startups to enterprises, organisations worldwide rely on SRIA Infotech to power their digital growth.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto mb-12">
            <StatCounter end={20} label="Clients" />
            <StatCounter end={5} label="Countries" />
            <StatCounter end={8} label="Years" />
          </div>

          <Marquee items={CLIENTS} />

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {COUNTRY_SUMMARY.map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1"
              >
                <span>{c.flag}</span>
                <span>{c.label}</span>
                <span className="text-orange-400 font-semibold">({c.count})</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/5" />
        </div>
      </div>

      {/* ── ASSOCIATIONS SECTION ── */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Associations</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Backed by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Industry Leaders
              </span>
            </h2>
            <p className="mt-3 text-white/50 text-sm max-w-xl mx-auto">
              We are proud to be associated with government bodies, skill development programmes, and innovation ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-4">
            {ASSOCIATIONS.map((a) => (
              <div key={a.name} className="w-40 sm:w-44 flex">
                <AssocCard assoc={a} />
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-xs mt-10">
            Recognised partner of the Telangana Innovation Ecosystem · SAP Gold Certified
          </p>
        </div>
      </section>
    </>
  );
}
