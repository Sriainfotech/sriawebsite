import { preview } from "vite";
import { mkdir, writeFile, copyFile, unlink } from "node:fs/promises";
import path from "node:path";
import Beasties from "beasties";

// Vercel's build image lacks the shared libraries (libnspr4.so, etc.) that
// full Puppeteer's bundled Chrome expects, so it fails to launch there even
// though the download succeeds. @sparticuz/chromium ships a Chromium build
// with those libraries statically bundled, built specifically for
// serverless/Vercel-style minimal Linux environments. Locally we keep using
// full Puppeteer (already downloads/launches fine on Windows/Mac/Linux dev
// machines) since @sparticuz/chromium's binary is Linux-only.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const { default: chromium } = await import("@sparticuz/chromium");
    const { default: puppeteerCore } = await import("puppeteer-core");
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({ headless: true });
}

const ROUTES = [
  "/",
  "/about",
  "/careers",
  "/contact",
  "/about/alliances",
  "/about/coming-soon",
  "/about/customer-stories",
  "/customer-stories/7hills-restaurant",
  "/customer-stories/lvk-pharma-odoo-crm",
  "/customer-stories/patil-sap-ams-automation",
  "/about/leadership",
  "/about/locations",
  "/about/sap-partner",
  "/gallery",
  "/about/events",
  "/about/culture",
  "/app-store",
  "/sap-analytics",
  "/products/auto-extract",
  "/products/gatecheck",
  "/products/jatayu",
  "/products/nxdesk",
  "/products/nxify",
  "/partners/ivc-solutions",
  "/partners/bsnl",
  "/partners/telangana-government",
  "/partners/task",
  "/partners/t-hub",
  "/services/sap-upgrade",
  "/services/sap-abap-rap-development",
  "/services/sap-migration",
  "/services/sap-integration",
  "/services/global-sap-rollouts",
  "/services/sap-application-development",
  "/services/sap-fiori-development",
  "/services/sap-s4hana-implementation",
  "/services/sap-support-maintenance",
  "/services/strategy-consulting/business",
  "/services/strategy-consulting/process",
  "/services/strategy-consulting/tech",
  "/services/odoo-custom-development",
  "/services/data-analytics",
  "/services/odoo-implementation",
  "/solutions/ariba",
  "/solutions/manufacturing-execution",
  "/solutions/papm",
  "/solutions/concur",
  "/solutions/btp",
  "/solutions/extended-warehouse-management",
  "/solutions/fieldglass",
  "/solutions/commerce-cloud",
  "/solutions/business",
  "/solutions/manufacturing-logistics",
  "/solutions/digital-manufacturing",
  "/solutions/private-cloud",
  "/solutions/public-cloud",
  "/solutions/rise-with-sap",
  "/solutions/asset-performance-management",
  "/solutions/field-service-management",
  "/solutions/product-lifecycle",
  "/solutions/successfactors",
  "/subscription",
  "/plans",
  "/privacy",
  "/terms-and-conditions",
  "/cookies",

  // Legacy/redirect-only paths — prerendered too so anyone landing on an old
  // link gets a snapshot of the destination content (with the correct
  // canonical) instead of a blank shell before the client-side redirect fires.
  "/terms",
  "/best-digital-transformation-company",
  "/aboutus",
  "/contactus",
  "/about/careers",
  "/hills",
  "/Lvk",
  "/patil",
  "/insights/customer-stories",
  "/upgrades",
  "/abap",
  "/migrations",
  "/integration",
  "/rollouts",
  "/application-development",
  "/fioridevelop",
  "/implement",
  "/support-maintainance",
  "/odooservices/customdevelopment",
  "/additionalServices/dataanalytics",
  "/odooservices/implementation",
];

const CONCURRENCY = 4;
const DIST_DIR = path.resolve(process.cwd(), "dist");

// vite preview's SPA fallback serves dist/index.html for any path that
// isn't yet a real file on disk. If the "/" route overwrote dist/index.html
// mid-run (as it used to, since it wrote directly there), every other route
// still in flight — or not yet requested — would fall back to serving the
// already-prerendered HOMEPAGE's markup instead of the pristine app shell,
// so React would boot on top of the wrong page and (worse) Puppeteer could
// capture that stale homepage title/canonical before hydration corrected
// it. This is almost certainly why the live site's audit found nearly every
// page sharing one canonical URL. To avoid it, "/" is written to a holding
// file during the concurrent pass and only promoted to dist/index.html once
// every other route has finished using the pristine shell.
const HOME_HOLDING_FILE = path.join(DIST_DIR, "__prerendered_home__.html");

// Inlines each page's above-the-fold CSS directly into <head> (so first
// paint doesn't block on the full stylesheet round-trip) and rewrites the
// full stylesheet <link> to load asynchronously via the standard
// preload+onload-swap pattern, with a <noscript> fallback. Pure loading-order
// change — no rule is added, removed, or altered, so rendered output/design
// is identical once the full sheet finishes loading.
const beasties = new Beasties({
  path: DIST_DIR,
  preload: "swap",
  pruneSource: false,
  logLevel: "warn",
});

async function inlineCriticalCss(html) {
  try {
    return await beasties.process(html);
  } catch (err) {
    console.warn(`  critical-CSS inlining failed, keeping original HTML: ${err.message}`);
    return html;
  }
}

// GTM and Tidio are deliberately deferred client-side (first interaction /
// idle time — see index.html) so they never compete with the LCP-critical
// hero. A prerender navigation sits on the page long enough (up to 60s,
// waiting for networkidle0) for those deferred timers to fire anyway — and
// since GTM containers can inject arbitrary further third-party tags once
// they run (GA4's own gtag.js, remarketing pixels, whatever else is
// configured), trying to strip the after-effects with a tag-shape regex is
// a losing game. Instead, every prerender page is flagged via
// window.__PRERENDERING__ before any app code runs, and the deferred-load
// trigger in index.html checks that flag and skips entirely — so nothing
// ever fires in the first place, for real or synthesized events alike.
async function markAsPrerendering(page) {
  await page.evaluateOnNewDocument(() => {
    window.__PRERENDERING__ = true;
  });
}

async function renderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  try {
    await markAsPrerendering(page);
    await page.goto(`${baseUrl}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    // Wait for react-helmet-async to have committed its managed tags
    // (marked data-rh="true") before capturing. RouteSeo lives outside the
    // <Suspense> boundary specifically so this resolves quickly and
    // reliably even on <Navigate> redirects (see App.tsx comment) — this
    // is just a safety margin, not the primary fix.
    await page.waitForFunction(
      () => document.querySelector('link[rel="canonical"][data-rh="true"]') !== null,
      { timeout: 20000 }
    );

    const html = await inlineCriticalCss(await page.content());

    if (route === "/") {
      await writeFile(HOME_HOLDING_FILE, html, "utf-8");
    } else {
      const outDir = path.join(DIST_DIR, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html, "utf-8");
    }
    console.log(`  prerendered ${route}`);
    return true;
  } catch (err) {
    // Covers both a hard navigation failure and the Helmet-tag wait timing
    // out — either way the captured (or not-yet-captured) HTML can't be
    // trusted, so this route is left for the serial retry pass below
    // instead of writing a file with stale or missing meta tags.
    console.warn(`  retrying ${route} later: ${err.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function renderRouteToNowhere(browser, baseUrl) {
  const page = await browser.newPage();
  try {
    await markAsPrerendering(page);
    await page.goto(baseUrl, { waitUntil: "networkidle0", timeout: 60000 });
    await page
      .waitForFunction(
        () => document.querySelector('link[rel="canonical"][data-rh="true"]') !== null,
        { timeout: 20000 }
      )
      .catch(() => {});
  } catch {
    // Best-effort warm-up only — a failure here just means the first real
    // route absorbs the cold-start cost instead, which the retry pass covers.
  } finally {
    await page.close();
  }
}

async function run() {
  // Snapshot the plain Vite-built shell as dist/404.html BEFORE prerendering
  // overwrites dist/index.html with the homepage's rendered content. Vercel
  // serves 404.html automatically (with a real HTTP 404 status) for any path
  // that doesn't match a static file, so an unknown URL boots the generic
  // app shell, React Router's catch-all renders <NotFound />, and RouteSeo
  // swaps in noindex "Page Not Found" metadata — instead of silently
  // returning the homepage with a 200, as it did before this file existed.
  await copyFile(path.join(DIST_DIR, "index.html"), path.join(DIST_DIR, "404.html"));
  console.log("Wrote dist/404.html from the pre-render app shell.");

  console.log("Starting preview server for prerendering...");
  const server = await preview({ preview: { port: 4174, strictPort: true } });
  const baseUrl = `http://localhost:4174`;

  const browser = await launchBrowser();

  // Cold-start warm-up: the very first couple of concurrent navigations
  // compete with Chrome's own startup/JIT warm-up, which can push them past
  // a Helmet-wait timeout that every later route clears easily. One throwaway
  // navigation absorbs that cost up front instead of it landing on whichever
  // real routes happen to be first in the queue.
  await renderRouteToNowhere(browser, baseUrl);

  console.log(`Prerendering ${ROUTES.length} routes...`);
  let cursor = 0;
  const failedRoutes = [];
  async function worker() {
    while (cursor < ROUTES.length) {
      const route = ROUTES[cursor++];
      const ok = await renderRoute(browser, baseUrl, route);
      if (!ok) failedRoutes.push(route);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  // Retry any route that failed outright, or whose Helmet tags weren't
  // ready in time, once each — serially, now that concurrent load has
  // dropped, which is exactly what was causing the timeouts.
  const stillFailed = [];
  for (const route of failedRoutes) {
    console.log(`Retrying ${route}...`);
    const ok = await renderRoute(browser, baseUrl, route);
    if (!ok) stillFailed.push(route);
  }
  if (stillFailed.length > 0) {
    console.error(
      `WARNING: ${stillFailed.length} route(s) never prerendered successfully: ${stillFailed.join(", ")}. ` +
      "These will fall back to the plain app shell until manually re-run — investigate before deploying."
    );
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  // Now that no route still needs the pristine shell for SPA fallback,
  // promote the homepage's prerendered output to the real dist/index.html.
  // dist/index.html already holds a valid (pre-prerender) shell from the
  // Vite build, so if "/" never rendered successfully even after retrying,
  // leave that shell in place rather than crashing the whole build.
  try {
    await copyFile(HOME_HOLDING_FILE, path.join(DIST_DIR, "index.html"));
    await unlink(HOME_HOLDING_FILE);
    console.log("Promoted prerendered homepage to dist/index.html.");
  } catch (err) {
    console.error(
      `WARNING: could not promote prerendered homepage (${err.message}). ` +
      "dist/index.html still contains the plain (non-prerendered) app shell — investigate before deploying."
    );
  }

  console.log("Prerendering complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
