# Sria Infotech Website — Technical Audit Report

**Date:** August 5, 2026
**Scope:** `Frontend/` (React + Vite) and `Backend/` (Express + MongoDB), current `main` branch (post chatbot-merge, commit `5b99595`)
**Method:** Static code review, dependency audit, production build verification. No live penetration testing or runtime traffic analysis was performed.

---

## Summary

| Category | Critical | High | Medium | Low |
|---|---|---|---|---|
| Security | 0 | 2 | 3 | 1 |
| Performance | 0 | 1 | 2 | 1 |
| Content / SEO | 0 | 1 | 1 | 0 |
| Code quality / reliability | 0 | 0 | 2 | 2 |

No critical, actively-exploited issues were found. The most impactful items are: **outdated runtime dependencies with known CVEs** (axios, react-router-dom), **no rate limiting on public/auth endpoints**, and **~150MB of unoptimized images shipped in the production build**.

---

## 1. Security

### 1.1 [HIGH] Outdated runtime dependencies with known vulnerabilities
`npm audit` on `Frontend/` reports 20 advisories; two land on direct **runtime** dependencies (not just build tooling):
- **`axios@1.13.2`** — in the vulnerable range for numerous advisories, most relevantly an **SSRF via NO_PROXY bypass** and several **prototype-pollution** issues affecting config/response handling.
- **`react-router-dom@6.30.1`** — in the vulnerable range for an **open-redirect** advisory (untrusted path redirects via `<Link>`/`useNavigate`).

The rest of the 20 advisories (`vite`, `vitest`, `rollup`, `esbuild`, `postcss`, etc.) are **devDependencies or transitive build-tool deps** — they affect the dev/build environment, not the shipped site, and are lower priority.

`Backend/` reports 3 advisories, all runtime: `nodemailer` (high), `imagekit` (moderate), `uuid` (moderate — transitive).

**Recommendation:** `npm audit fix` in both `Frontend/` and `Backend/`, then re-test the contact form (nodemailer), chatbot voice/API calls (axios), and site navigation (react-router-dom) before deploying.

### 1.2 [HIGH] No rate limiting on public or authentication endpoints
Neither `express-rate-limit` nor `helmet` is present in `Backend/package.json` or wired into `server.js`. Concretely unprotected:
- `POST /api/contact`, `/api/notify`, `/api/download-profile` — open to spam/abuse at unlimited request rates.
- `POST /api/chatbot/query` — unlimited free-form queries to your backend (and, transitively, the fuzzy-match/DB load it triggers).
- `POST /api/admin/login` (`routes/admin.js:44`) — **no lockout or throttling on failed login attempts**, so the admin password is exposed to unlimited brute-force guessing. Password checking is done correctly (bcrypt compare, generic "Invalid username or password" message either way), but nothing stops repeated attempts.

**Recommendation:** add `express-rate-limit` (e.g. 5 attempts/15 min on `/login`, a looser cap on the rest) and `helmet` for baseline security headers.

### 1.3 [MEDIUM] Wide-open CORS (`origin: '*'`)
`Backend/server.js:28` sets `cors({ origin: '*', ... })`. No credentials are sent, so this isn't a session-hijack risk today, but it means any website can call your API directly from a browser. Fine for a fully public API; worth tightening to the actual production domain(s) if that's not the intent.

### 1.4 [MEDIUM] `Backend/node_modules` (1,805 files) is committed to git
Pre-existing issue, not introduced by recent work — flagged previously in `TEAMCONTEXT.md` §7. `node_modules` is in `.gitignore` but was committed before that rule existed, so every dependency reinstall shows as noisy diffs, and the repo carries dependency source code it doesn't need to. Recommend a one-time `git rm -r --cached Backend/node_modules` cleanup on a quiet day (not bundled with a feature change).

### 1.5 [MEDIUM] `.env` handling — verified clean
Confirmed via `git ls-files` that no `.env` file (Backend or Frontend) is tracked in git, in either directory. `Frontend/.env` contains only `VITE_API_BASE_URL`, which is non-sensitive (it's a public API endpoint, baked into the client bundle regardless). No action needed — listed here as a **verified-clean** control, not a finding.

### 1.6 [LOW] Admin auth otherwise sound
Positive findings, for context: admin passwords are stored via `bcrypt` hash (`models/Admin.js`), JWT signing/verification refuses to operate at all if `JWT_SECRET` is unset (`middleware/auth.js:13`, `routes/admin.js:50`) rather than falling back to an insecure default, and file uploads (`routes/admin.js`, `server.js`) are capped by size and restricted by MIME type. No changes needed here.

---

## 2. Performance

### 2.1 [HIGH] ~150MB of unoptimized images ship in the production build
`Frontend/public/` is 166MB, and a production build (`npm run build`) copies it into `dist/` (192MB total). Largest offenders, all confirmed as actively referenced (not dead assets):

| File | Size | Used in |
|---|---|---|
| `student.jpg` | 23MB | 1 page |
| `task-skill-partner.jpg` | 18MB | 1 page |
| `soft-skill-comm.jpg` | 16MB | 1 page |
| `location.jpg` | 16MB | 1 page |
| `thub.jpg` | 14MB | 3 pages |
| `bsnl-main.jpg` | 8.2MB | 1 page |
| `task-main.jpg` | 6.3MB | 1 page |
| `tg.jpg` | 5.9MB | 1 page |
| `bsnl-hero.jpg` | 4.8MB | 1 page |
| `hyderabad.jpg` | 4.7MB | 3 pages |

These are served as-is with no responsive `srcset`/width transforms, unlike the rest of the site's imagery which correctly goes through ImageKit (`?tr=f-auto,q-auto,w-XXX`). Any visitor loading one of these pages on a mobile connection downloads a multi-megabyte, full-resolution JPEG straight from `/public`.

**Recommendation:** re-host these through ImageKit (or compress + resize locally to realistic display dimensions) the same way the rest of the codebase already does. This is very likely the single highest-impact fix available on the site right now.

One unreferenced/orphaned asset found: `royal-logo.png` (2.1MB) — not linked from any source file, safe to delete.

### 2.2 [MEDIUM] JS bundle itself is in good shape — not the bottleneck
For contrast: the actual JavaScript is well code-split. Main entry chunk is 316KB, `vendor-react` 152KB, `vendor-motion` 128KB, with per-route chunks (`About`, `Gallery`, `SAPAnalytics`, etc.) loaded on demand. CSS is a single 136KB file. This is healthy — the images, not the code, are the performance problem.

### 2.3 [MEDIUM] Two routes intermittently time out during prerendering
The production build log shows:
```
retrying /subscription later: Waiting failed: 20000ms exceeded
retrying /solutions/successfactors later: Waiting failed: 20000ms exceeded
```
Both eventually succeeded on retry, so the build isn't broken, but it indicates these two pages are unusually slow to become interactive/settle during the prerender step (Vite's prerender waits for the page to signal "ready"). Worth profiling `Subscription.tsx` and `SuccessFactors.tsx` specifically for slow-loading images or blocking client-side work.

### 2.4 [LOW] Backend `console.log` usage
58 `console.log`/`console.debug` calls across `Backend/`, mostly in one-off scripts (`scripts/build-kb.js`, `scripts/seedAdmin.js`, etc. — expected for CLI tooling) plus several in `server.js` covering startup/connection status. Not a real issue; noted for completeness. Frontend has zero stray `console.log` calls.

---

## 3. Content / SEO

### 3.1 [HIGH] `/solutions/business` — live SEO description doesn't match the live page
This was already identified in `TEAMCONTEXT.md` §8.4 and **confirmed still unresolved** on `main` today:
- The live page (`Frontend/src/pages/Solutions/SAPCRM/Business.tsx`) is genuinely about **SAP Business Network** — freight tendering, carrier collaboration, invoicing, SAP S/4HANA/ECC integration. Its own breadcrumb says "Business Network."
- `Frontend/src/seo/routeMeta.ts:292-294` — the `<title>`/meta description for that exact route still says **"SAP Business One Solutions... for small and mid-sized enterprises"** — a different SAP product entirely.

This means Google's search snippet for that URL currently describes the wrong product. This is a content bug independent of the chatbot, and was flagged before but left as an open decision rather than fixed. Recommend fixing the `routeMeta.ts` entry to describe SAP Business Network.

### 3.2 [MEDIUM] Broken video on the live Gallery page, no working fallback
`Frontend/src/pages/Gallery.tsx:206-207` — the "Sria Team Video" gallery item points at `IMG_0225.mp4` on ImageKit, with a code comment recording that it's **"broken on BOTH ImageKit (No file found) and Cloudinary (423 Locked)"** and that "no working fallback exists right now." This is a live, currently-broken piece of content on the public Gallery page, not a hypothetical risk.

### 3.3 [INFO] robots.txt / sitemap.xml — verified present and sane
`Frontend/public/robots.txt` allows all major crawlers and correctly points to `Sitemap: https://www.sriainfotech.com/sitemap.xml`, and `sitemap.xml` exists in `public/`. No action needed.

---

## 4. Code quality / reliability

### 4.1 [MEDIUM] TypeScript compiles clean, build succeeds end-to-end
`npx tsc --noEmit` returns zero errors, and `npm run build` completes with `Prerendering complete.` (aside from the two retry-but-succeed routes in §2.3). No blocking issues here.

### 4.2 [MEDIUM] A few tracked TODOs describing known-temporary states
Beyond the Gallery video (§3.2), three components have `// TODO: re-point to ImageKit once X is uploaded — temporarily serving from Cloudinary` comments (`HeroSection.tsx`, `Abap.tsx`, `SAPFiori.tsx`). These are self-documented, intentional, temporary states rather than bugs — listed here just so they're tracked in one place rather than only living as inline comments.

### 4.3 [LOW] Accessibility — not exhaustively verified
A broad `alt=` attribute sweep across all `<img>` tags wasn't conclusive with static search alone (JSX commonly splits `<img ... alt="..." .../>` across multiple lines, which defeats a simple grep). Spot checks on components touched during recent chatbot/footer work show `alt` text present and reasonable (empty `alt=""` used correctly for decorative icons, descriptive `alt` on content images). A proper accessibility pass would need a real audit tool (axe, Lighthouse) run against rendered pages rather than source-only grep — flagging as unverified rather than claiming a false-negative "all clear."

### 4.4 [LOW] Dependency drift is otherwise unremarkable
No abandoned/deprecated packages beyond what's already noted in the audit output (`uuid@8.3.2` — deprecated but low-impact since it's just an ID generator, and `imagekit` — vendor's SDK recommends migrating to `@imagekit/nodejs` eventually, not urgent).

---

## Priority order if addressing this list

1. **§1.2** — add rate limiting to `/api/admin/login` specifically (brute-force is the most direct real-world risk here).
2. **§2.1** — re-optimize the 10 oversized images through ImageKit (biggest, cheapest performance win available).
3. **§1.1** — `npm audit fix` for axios/react-router-dom/nodemailer, then smoke-test contact form + chatbot + navigation.
4. **§3.1 / §3.2** — fix the Business One/Business Network SEO mismatch and re-upload the broken Gallery video.
5. Everything else is either already fine (verified-clean items) or low-urgency cleanup.
