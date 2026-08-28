import type Fuse from "fuse.js";
import { ROUTE_META } from "@/seo/routeMeta";

export interface SearchDoc {
  path: string;
  title: string;
  summary: string;
}

// Reuses the per-route title/description already maintained in
// routeMeta.ts for SEO (see RouteSeo.tsx) as the search index's content,
// rather than hand-authoring a second, separately-maintained list of page
// titles/summaries that would drift out of sync with the real <title>/meta
// description over time. `noindex` routes (hidden digital-business-cards,
// "coming soon" placeholders) are deliberately excluded — the same reason
// they're kept out of the sitemap: they aren't meant to be discoverable.
// `/blog` and `/blog/:slug` are excluded per this pass's scope (blog is out
// of scope entirely) — blog search, if wanted later, belongs in its own
// index driven by the blog API, not this static route list.
function buildSearchDocs(): SearchDoc[] {
  return Object.entries(ROUTE_META)
    .filter(([path, meta]) => !meta.noindex && !path.startsWith("/blog"))
    .map(([path, meta]) => ({
      path,
      // Titles are authored as "Page Name | Sria Infotech" for SEO; the
      // " | Sria Infotech" suffix is redundant noise in a same-site search
      // results list, so it's stripped here for display only.
      title: meta.title.replace(/\s*\|\s*Sria Infotech\s*$/, ""),
      summary: meta.description,
    }));
}

let cached: Promise<{ docs: SearchDoc[]; fuse: Fuse<SearchDoc> }> | null = null;

// fuse.js is dynamically imported here rather than statically at the top
// of this file — a static import pulled the whole library into the main
// eagerly-loaded bundle (shipped on every single page load via
// Navbar -> SiteSearch, whether or not the visitor ever opens search),
// which a live Lighthouse audit flagged as unused-JS weight on every page
// that isn't the one where someone actually searches. Deferred to the
// moment the search box is actually opened/focused (see SiteSearch.tsx)
// so it only loads for visitors who use the feature.
export async function getSiteSearch(): Promise<{ docs: SearchDoc[]; fuse: Fuse<SearchDoc> }> {
  if (cached) return cached;
  cached = import("fuse.js").then(({ default: Fuse }) => {
    const docs = buildSearchDocs();
    const fuse = new Fuse(docs, {
      keys: [
        { name: "title", weight: 0.6 },
        { name: "summary", weight: 0.3 },
        { name: "path", weight: 0.1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
    return { docs, fuse };
  });
  return cached;
}
