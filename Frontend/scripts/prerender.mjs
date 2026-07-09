import { preview } from "vite";
import puppeteer from "puppeteer";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

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

  const browser = await puppeteer.launch({ headless: true });

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
