import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { getSiteSearch, type SearchDoc } from "@/lib/searchIndex";

const MAX_RESULTS = 6;

// getSiteSearch() dynamically imports fuse.js on first call (see
// searchIndex.ts) so it isn't part of the main bundle every page pays
// for — this hook just awaits that instead of computing synchronously.
function useResults(query: string): SearchDoc[] {
  const [results, setResults] = useState<SearchDoc[]>([]);

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      return;
    }
    let cancelled = false;
    getSiteSearch().then(({ fuse }) => {
      if (cancelled) return;
      setResults(fuse.search(q, { limit: MAX_RESULTS }).map((r) => r.item));
    });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return results;
}

/**
 * Site-wide search box, backed by a client-side Fuse.js index over
 * routeMeta.ts's per-route titles/descriptions (see src/lib/searchIndex.ts)
 * — no backend needed for a site this size (~70 indexable routes).
 *
 * Two distinct layouts, not one shrunk to fit both:
 * - Desktop (xl+, matching the navbar's own desktop breakpoint): a
 *   persistent inline input, results in a dropdown panel underneath.
 * - Mobile/tablet (< xl): just an icon button; tapping it opens a
 *   full-width fixed overlay with its own large input + results list,
 *   since a mobile header has no room for a persistent visible box.
 */
const SiteSearch: React.FC = () => {
  const navigate = useNavigate();
  const [desktopQuery, setDesktopQuery] = useState("");
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOverlayOpen, setMobileOverlayOpen] = useState(false);
  const [mobileQuery, setMobileQuery] = useState("");
  const desktopResults = useResults(desktopQuery);
  const mobileResults = useResults(mobileQuery);
  const desktopBoxRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopBoxRef.current && !desktopBoxRef.current.contains(event.target as Node)) {
        setDesktopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOverlayOpen) {
      // Focus after mount so the on-screen keyboard opens immediately on
      // touch devices instead of requiring a second tap.
      requestAnimationFrame(() => mobileInputRef.current?.focus());
    } else {
      setMobileQuery("");
    }
  }, [mobileOverlayOpen]);

  const goTo = (path: string) => {
    navigate(path);
    setDesktopOpen(false);
    setDesktopQuery("");
    setMobileOverlayOpen(false);
  };

  const ResultsList: React.FC<{ results: SearchDoc[]; query: string; onPick: (path: string) => void }> = ({
    results,
    query,
    onPick,
  }) => {
    if (query.trim().length < 2) return null;
    if (results.length === 0) {
      return (
        <div className="px-4 py-6 text-center text-sm text-slate-500">
          No pages match "{query}"
        </div>
      );
    }
    return (
      <ul className="max-h-80 overflow-y-auto py-2">
        {results.map((r) => (
          <li key={r.path}>
            <button
              type="button"
              onClick={() => onPick(r.path)}
              className="block w-full px-4 py-2.5 text-left hover:bg-orange-50 transition-colors"
            >
              <p className="text-sm font-semibold text-slate-900 truncate">{r.title}</p>
              <p className="text-xs text-slate-500 line-clamp-1">{r.summary}</p>
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {/* Desktop — persistent inline search box */}
      <div ref={desktopBoxRef} className="relative hidden xl:block">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" aria-hidden="true" />
          <input
            type="text"
            value={desktopQuery}
            onChange={(e) => setDesktopQuery(e.target.value)}
            onFocus={() => setDesktopOpen(true)}
            placeholder="Search the site..."
            aria-label="Search the site"
            className="h-9 w-44 rounded-full border border-white/20 bg-white/10 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none transition-all focus:w-60 focus:border-orange-400/60 focus:bg-white/15 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
          />
        </div>
        {desktopOpen && desktopQuery.trim().length >= 2 && (
          <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-slate-100 bg-white shadow-xl z-50">
            <ResultsList results={desktopResults} query={desktopQuery} onPick={goTo} />
          </div>
        )}
      </div>

      {/* Mobile/tablet trigger — icon only, opens full-width overlay */}
      <button
        onClick={() => setMobileOverlayOpen(true)}
        className="xl:hidden flex min-h-11 min-w-11 items-center justify-center text-white hover:text-orange-300 transition-colors"
        aria-label="Search the site"
      >
        <Search className="w-5 h-5" />
      </button>

      {mobileOverlayOpen &&
        createPortal(
          // Rendered via a portal directly onto document.body — nesting this
          // inside <nav> (position:fixed, its own z-50 stacking context)
          // would trap it there, so no z-index set on this overlay could
          // ever paint above OTHER fixed-position siblings of <nav> itself
          // (e.g. FloatingButtons, also z-50) — only above things *inside*
          // nav. Escaping to body via portal makes z-[110] compare against
          // the real top-level stacking order, so it correctly covers
          // everything, including the floating contact buttons.
          <div className="fixed inset-0 z-[110] xl:hidden bg-slate-950">
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" aria-hidden="true" />
                <input
                  ref={mobileInputRef}
                  type="text"
                  value={mobileQuery}
                  onChange={(e) => setMobileQuery(e.target.value)}
                  placeholder="Search the site..."
                  aria-label="Search the site (mobile)"
                  className="h-11 w-full rounded-full border border-white/20 bg-white/10 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-orange-400/60 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                />
              </div>
              <button
                onClick={() => setMobileOverlayOpen(false)}
                className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-orange-300 transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-white mx-4 mt-3 rounded-xl overflow-hidden">
              <ResultsList results={mobileResults} query={mobileQuery} onPick={goTo} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SiteSearch;
