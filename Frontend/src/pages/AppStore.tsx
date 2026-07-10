import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";

interface App {
  name: string;
  description: string;
  url: string;
  icon: string;
  bg: string;
  category: string;
  comingSoon?: boolean;
}

const apps: App[] = [
  {
    name: "eSkoolia",
    description: "Learning Management System",
    url: "https://app.eskoolia.com/",
    icon: "/Logos/eskoolia_logo.png",
    bg: "bg-teal-50",
    category: "Education",
  },
  {
    name: "NxDesk",
    description: "Helpdesk & Ticketing",
    url: "https://nxdesk.sriainfotech.com",
    icon: "🎫",
    bg: "bg-sky-50",
    category: "Operations",
    comingSoon: true,
  },
  {
    name: "HRMS",
    description: "Human Resource Management",
    url: "http://hr.nxsys.in/",
    icon: "👥",
    bg: "bg-violet-50",
    category: "Operations",
  },
  {
    name: "Jatayu",
    description: "Workforce Field Management",
    url: "https://play.google.com/store/apps/details?id=mybigapp.firebase.com&pcampaignid=web_share",
    icon: "/Logos/jatayu.webp",
    bg: "bg-orange-50",
    category: "Operations",
  },
  {
    name: "Nxify",
    description: "Digital Transformation Suite",
    url: "https://nxify.sriainfotech.com",
    icon: "⚡",
    bg: "bg-amber-50",
    category: "Productivity",
    comingSoon: true,
  },
  {
    name: "Auto Extract",
    description: "Intelligent Data Extraction",
    url: "https://autoextract.sriainfotech.com",
    icon: "🤖",
    bg: "bg-emerald-50",
    category: "Productivity",
    comingSoon: true,
  },
  {
    name: "Gate Check",
    description: "Access & Security Control",
    url: "https://gatecheck.sriainfotech.com",
    icon: "🔐",
    bg: "bg-rose-50",
    category: "Security",
    comingSoon: true,
  },
  {
    name: "NxGen Academy",
    description: "Tech Training & Upskilling",
    url: "https://nxgentechacademy.com",
    icon: "/Logos/nxgen_logo.png",
    bg: "bg-indigo-50",
    category: "Education",
  },
  {
    name: "NxSys Digital",
    description: "Digital Solutions Portal",
    url: "https://nxsysdigital.com",
    icon: "/Logos/nxd.png",
    bg: "bg-cyan-50",
    category: "Productivity",
  },
  {
    name: "Cashora",
    description: "Digital Solutions Portal",
    url: "https://play.google.com/store/apps/details?id=com.cashora.finance",
    icon: "/Logos/Cashora.jpeg",
    bg: "bg-cyan-50",
    category: "Productivity",
  },
];

const categories = ["All", "Operations", "Productivity", "Education", "Security"];

const AppStore: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = apps.filter((app) => {
    const q = search.toLowerCase();
    const matchesSearch = app.name.toLowerCase().includes(q) || app.description.toLowerCase().includes(q);
    const matchesCategory = activeCategory === "All" || app.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Page header — matches SRIA style */}
      <div className="bg-slate-950 pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-amber-400" />
            <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
              SRIA Infotech
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
            App Store
          </h1>
          <p className="text-white/50 text-sm font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
            All SRIA Infotech products in one place
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="border-b border-gray-100 bg-white sticky top-[84px] z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all font-[Questrial,Arial,Verdana,Tahoma,sans-serif] ${activeCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-gray-400 text-sm font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
            No apps match "{search}"
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((app) => {
              const CardWrapper = app.comingSoon ? "div" : "a";
              const wrapperProps = app.comingSoon
                ? {}
                : { href: app.url, target: "_blank", rel: "noopener noreferrer" };

              return (
                <CardWrapper
                  key={app.name}
                  {...(wrapperProps as any)}
                  className={`group flex flex-col items-center p-5 rounded-2xl border border-gray-100 bg-white transition-all duration-200 relative overflow-hidden ${app.comingSoon
                    ? "cursor-default hover:border-gray-200 hover:shadow-sm"
                    : "hover:border-orange-200 hover:shadow-md hover:shadow-orange-50"
                    }`}
                >
                  {/* Coming Soon overlay */}
                  {app.comingSoon && (
                    <div className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      <span className="text-white text-xs font-bold tracking-widest uppercase font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                        Coming Soon
                      </span>
                      <span className="text-white/50 text-[10px] mt-1 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                        Stay tuned
                      </span>
                    </div>
                  )}

                  {!app.comingSoon && (
                    <ExternalLink className="absolute top-3 right-3 w-3 h-3 text-gray-200 group-hover:text-orange-300 transition-colors" />
                  )}

                  {/* Icon box */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-105 transition-transform duration-200 overflow-hidden shadow-sm ${app.icon.startsWith('/') || app.icon.includes('.') ? 'bg-transparent' : app.bg
                      }`}
                  >
                    {app.icon.startsWith('/') || app.icon.includes('.') ? (
                      <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                    ) : (
                      app.icon
                    )}
                  </div>

                  <span className="text-gray-800 text-sm font-semibold text-center leading-tight mb-1 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                    {app.name}
                  </span>
                  <span className="text-gray-400 text-[11px] text-center leading-snug font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                    {app.description}
                  </span>
                </CardWrapper>
              );
            })}
          </div>
        )}

        {/* Footer note */}
        <p className="text-center text-gray-300 text-xs mt-12 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
          More apps coming soon · SRIA Infotech
        </p>
      </div>
    </div>
  );
};

export default AppStore;
