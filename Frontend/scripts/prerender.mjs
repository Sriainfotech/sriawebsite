import { preview } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

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
  "/best-digital-transformation-company",
  "/about",
  "/aboutus",
  "/careers",
  "/contact",
  "/contactus",
  "/about/alliances",
  "/about/careers",
  "/about/coming-soon",
  "/about/customer-stories",
  "/hills",
  "/Lvk",
  "/patil",
  "/about/leadership",
  "/about/locations",
  "/about/sap-partner",
  "/gallery",
  "/about/events",
  "/about/culture",
  "/insights/customer-stories",
  "/app-store",
  "/sap-analytics",
  "/products/auto-extract",
  "/products/gatecheck",
  "/products/jatayu",
  "/products/nxdesk",
  "/products/nxify",
  "/partners/ivc-solutions",
  "/upgrades",
  "/abap",
  "/migrations",
  "/integration",
  "/rollouts",
  "/application-development",
  "/fioridevelop",
  "/implement",
  "/support-maintainance",
  "/services/strategy-consulting/business",
  "/services/strategy-consulting/process",
  "/services/strategy-consulting/tech",
  "/odooservices/customdevelopment",
  "/additionalServices/dataanalytics",
  "/odooservices/implementation",
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
  "/terms",
];

const CONCURRENCY = 4;
const DIST_DIR = path.resolve(process.cwd(), "dist");

async function renderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseUrl}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    const html = await page.content();

    const outDir =
      route === "/" ? DIST_DIR : path.join(DIST_DIR, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf-8");
    console.log(`  prerendered ${route}`);
  } catch (err) {
    console.warn(`  skipped ${route}: ${err.message}`);
  } finally {
    await page.close();
  }
}

async function run() {
  console.log("Starting preview server for prerendering...");
  const server = await preview({ preview: { port: 4174, strictPort: true } });
  const baseUrl = `http://localhost:4174`;

  const browser = await launchBrowser();

  console.log(`Prerendering ${ROUTES.length} routes...`);
  let cursor = 0;
  async function worker() {
    while (cursor < ROUTES.length) {
      const route = ROUTES[cursor++];
      await renderRoute(browser, baseUrl, route);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
  console.log("Prerendering complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
