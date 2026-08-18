# SEO & Performance Audit — sria-craft
**Date:** 2026-08-17
**Scope:** Search-engine visibility, crawlability, structured data, and page-load performance across the Sria Infotech website (Frontend/) and its hosting config. Chatbot/knowledge-base matching work is tracked separately and excluded here.
**Method:** Full `git log`/diff review of the repository history plus direct inspection of current working-tree state. Every item below is grounded in a specific file and, where attributable, a specific commit — no estimated metrics (e.g. Lighthouse scores) are claimed unless a prior audit document recorded them.

---

## Executive Summary

The site has gone through a real, traceable SEO/performance hardening pass — not just incidental fixes. Highlights:

- Per-route meta titles/descriptions replaced a single sitewide `<title>`.
- Canonical domain consolidated onto `www.sriainfotech.com`.
- A prerendering pipeline was built (and a serious bug in it fixed) so crawlers see fully-rendered HTML instead of an empty SPA shell.
- ~150MB of unoptimized local images were migrated to a CDN with automatic format/quality/width negotiation.
- Unused UI library code was stripped, cutting shipped JS weight.
- Critical CSS inlining, deferred third-party scripts (GTM, Tidio), and font preconnects were added specifically to improve first paint / LCP.

Two concrete defects remain **open** in the current codebase (found during this audit, not yet fixed) — see [Open Issues](#open-issues-found-this-audit) below.

---

## Meta / Crawlability

| Change | Files | When | Status |
|---|---|---|---|
| Per-route `<title>`/meta-description system, replacing one static sitewide title | `src/seo/routeMeta.ts`, `src/components/seo/{Seo,RouteSeo}.tsx` | commit `7fe5c0d` (Jul 27) | Live |
| `routeMeta.ts` gives nearly every route its own 160–300 character description | `src/seo/routeMeta.ts` | built incrementally through Aug 6 | Live |
| `noindex, follow` applied to placeholder pages (`/about/alliances`, `/about/coming-soon`, `/about/events`) | `routeMeta.ts`, `Seo.tsx` | same | Live |
| Canonical host consolidated: `sriainfotech.com` → `https://www.sriainfotech.com` in `robots.txt`, `sitemap.xml`, and canonical tag logic | `public/robots.txt`, `public/sitemap.xml`, `routeMeta.ts` | `7fe5c0d` | Live |
| Legacy short URLs (`/hills`, `/Lvk`, `/patil`, `/abap`, …) replaced with descriptive paths (`/customer-stories/7hills-restaurant`, `/services/sap-upgrade`, …); old paths kept prerendered so existing backlinks still resolve to a real, correctly-canonicalized page before redirecting | `public/sitemap.xml`, `scripts/prerender.mjs` | `7fe5c0d` | Live |
| `robots.txt`: explicit allow rules for Googlebot/Bingbot/Twitterbot/facebookexternalhit + wildcard, plus a `Sitemap:` directive | `public/robots.txt` | evolved through `7fe5c0d` | Live |
| `llms.txt` added — an AI-crawler/answer-engine-facing company summary | `public/llms.txt` | `fa7e87b` (Jul 7) | Live, **stale** — still references non-www URLs and pre-restructuring legacy paths (`/implement`, `/rollouts`, `/abap`); not updated when URLs were cleaned up |
| `/solutions/business` meta description previously described the wrong product ("SAP Business One" instead of "SAP Business Network") | `routeMeta.ts` | flagged in Aug 5 audit doc, corrected `baba6bd` (Aug 6) | Fixed |

---

## Structured Data (JSON-LD)

| Change | Files | Status |
|---|---|---|
| Organization/ProfessionalService schema in `index.html` — name, logo, address, geo, areaServed, contactPoint, social profiles | `Frontend/index.html` | Live |
| `BreadcrumbList` JSON-LD generated per page | `src/components/layout/PageHeader.tsx` | Live — **see open issue below** |
| `FAQPage` JSON-LD on the homepage FAQ section | `src/components/home/FAQSection.tsx` | Live |

---

## Images & Media

| Change | Files | Status |
|---|---|---|
| Media migrated off local `/public` storage, twice: first to Cloudinary, then to ImageKit as the current CDN, with `f-auto,q-auto` (auto format + auto quality) and explicit `w-NNN` width params on essentially every content image (~379 occurrences across `src/`) | `Backend/scripts/upload-to-imagekit.js`, site-wide `<img>` usage | Live |
| ~150MB of full-resolution unoptimized images (`student.jpg` 23MB, `location.jpg` 16MB, `thub.jpg` 14MB, etc.) flagged in the Aug 5 audit — confirmed **removed**; `Frontend/public/` is now 17MB total and those pages now reference the ImageKit-optimized equivalents | `Frontend/public/`, `About.tsx`, `About/Location.tsx` | Fixed |
| Orphaned 2.1MB `royal-logo.png` flagged in the same audit | — | Removed |
| Responsive `srcset` added to the page-header hero image across widths `[480, 768, 1080, 1600, 2000]`, with `sizes="100vw"`, `fetchPriority="high"`, `decoding="async"` | `src/components/layout/PageHeader.tsx` | `4a4f001` (Jul 13) — Live |
| `loading="lazy"` used broadly (38 files); `srcSet` used in 25 files; explicit width/height on most content images | site-wide | Live |
| A handful of office photos on the About page are hot-linked from Unsplash rather than the site's own CDN | `src/pages/About.tsx` | Live, unmanaged third-party dependency |
| A broken Gallery video reference (`IMG_0225.mp4` — 404 on ImageKit, 423 Locked on Cloudinary) flagged in the Aug 5 audit | `src/pages/Gallery.tsx` | **Still unresolved** |

---

## Code-Splitting, Bundling & Prerendering

| Change | Files | Status |
|---|---|---|
| Every routed page lazy-loaded via `React.lazy()` (60+ routes) under one `<Suspense>` boundary | `src/App.tsx` | Live |
| `RouteSeo` deliberately mounted outside the `Suspense` boundary so meta tags update immediately on navigation, not after the lazy chunk resolves | `src/App.tsx` | Live |
| Manual vendor chunk splitting (`framer-motion`, icon libraries, `react`/`react-dom`/`react-router-dom` each isolated) to keep the main bundle from flattening into one large chunk | `vite.config.ts` | Live |
| **"Speed" commit** (`d1e938d`, Jul 28): removed ~15 unused shadcn/radix UI components and their npm dependencies (`@radix-ui/react-*`, `date-fns`, `recharts`, `sonner`, `cmdk`, `vaul`, `zod`, `react-hook-form`, etc.), plus unused Tailwind keyframe animations | `package.json`, `src/components/ui/*`, `tailwind.config.ts` | Live |
| Prerendering pipeline renders ~85 indexable routes to static HTML via headless Chrome so crawlers get real content, not an empty `<div id="root">` | `scripts/prerender.mjs` | Live |
| Fixed a prerender race condition where writing `/` to `dist/index.html` mid-run could get served to every other in-flight route via the dev-server SPA fallback — explicitly identified in a code comment as the likely cause of a prior audit finding that nearly every page shared one canonical URL | `scripts/prerender.mjs` (`HOME_HOLDING_FILE`) | Fixed |
| Critical CSS inlining via `beasties` — inlines above-the-fold CSS per page, defers the rest via preload+swap | `scripts/prerender.mjs`, `package.json` | `d1e938d` — Live |
| `window.__PRERENDERING__` flag prevents third-party scripts (GTM, Tidio) from firing during the prerender pass | `Frontend/index.html`, `scripts/prerender.mjs` | Live |
| Production sourcemaps enabled in response to a Lighthouse flag | `vite.config.ts` | Live |

---

## Fonts

| Change | Files | Status |
|---|---|---|
| `preconnect` added for `fonts.googleapis.com`, `fonts.gstatic.com`, and `ik.imagekit.io` | `Frontend/index.html` | `d1e938d` — Live |
| Font stylesheet linked directly in raw HTML (not only via bundled CSS) so the browser's preload scanner finds it immediately; `font-display: swap` in use | `Frontend/index.html` | Live |
| Fonts (Inter, Poppins) remain third-party-hosted on Google Fonts — no self-hosting migration found in history | — | Not done |

---

## Caching, Hosting & Security Headers

| Change | Files | Status |
|---|---|---|
| Hashed build assets (`/assets/*`) served with `Cache-Control: public, max-age=31536000, immutable` | `vercel.json` | Live |
| Security headers layered in over multiple commits: HSTS (preload), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, CSP | `vercel.json` | Live |
| CSP allow-list updated each time a new integration was added (fonts, Tidio, ImageKit, Google Analytics, the backend API origin) rather than left over-permissive | `vercel.json` | Live |
| No response compression (gzip/brotli) or `Cache-Control` configuration found at the Express layer for the backend API | `Backend/server.js` | Gap — not confirmed compensated elsewhere |

---

## Analytics & Third-Party Scripts

| Change | Files | Status |
|---|---|---|
| GTM originally loaded as a blocking synchronous `<script>` in `<head>` | `Frontend/index.html` | Superseded |
| GTM rewritten to load on first genuine user interaction (scroll/keydown/click/touch, filtered to real user gestures) or a 5s fallback timer, and gated on analytics cookie-consent actually being accepted | `Frontend/index.html` | `d1e938d` — Live |
| Tidio live-chat widget deferred to `requestIdleCallback` (with a `setTimeout` fallback for Safari) instead of loading synchronously | `Frontend/index.html` | `d1e938d` — Live |

---

## Open Issues Found This Audit

Both confirmed live in the current working tree — neither has been fixed yet.

### 1. Broken image class on the BSNL partner page
**File:** `Frontend/src/pages/Partners/BSNL.tsx:326`
The class name is written with single quotes instead of a template literal:
```
className='{w-full h-full object-cover ${facePosition("...")}}'
```
`${...}` never interpolates inside single quotes, so the element receives the literal broken string as its class name instead of `w-full h-full object-cover object-[center_43%]`. That image loses `object-cover` entirely — risk of a stretched/distorted hero image on that one card.

### 2. Breadcrumb structured data points at the wrong domain
**File:** `Frontend/src/components/layout/PageHeader.tsx` (lines 35, 40)
The `BreadcrumbList` JSON-LD hardcodes `https://sriainfotech.com/...` (no `www`), while every canonical tag, Open Graph tag, and the sitemap elsewhere on the site use `https://www.sriainfotech.com`. This is a structured-data/canonical mismatch — search engines may see breadcrumb rich-result URLs that don't match the page's own declared canonical.

Both are small, targeted, one-file fixes — flagging rather than applying them, since neither was part of what was asked for this session.

---

## Also Shipped This Session (lead-capture / brand-trust, adjacent to SEO)

Reported in full earlier in this conversation; summarized here for one complete record:
- WhatsApp contact links repointed to the correct number (+91 7702 127 552) across the floating button and SAP Analytics page, and a mislabeled "Phone/WhatsApp" link split into two honest, working links.
- Fixed a duplicate-key bug in the BSNL partner page's photo-crop map (unrelated to the two open issues above).
- Two chatbot knowledge-base fixes drafted and score-verified, still awaiting a go-ahead to write to the database (new Contact Us entry; "who are you guys" pattern match).

---

## Recommendations

1. Fix the two open issues above — both are low-effort, single-file changes.
2. Refresh `public/llms.txt` to match the current canonical domain and clean URL structure.
3. Resolve the broken Gallery video reference or remove it.
4. Consider adding gzip/brotli compression at the Express layer for backend API responses.
5. Evaluate self-hosting Inter/Poppins to remove the remaining third-party font-loading dependency.
