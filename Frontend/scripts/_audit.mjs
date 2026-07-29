import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import { writeFile } from 'node:fs/promises';

const BASE = 'http://localhost:4190';

// One representative route per distinct page template/category, covering
// every category the user named plus every unique shared layout in the app.
const ROUTES = [
  { category: 'Home', path: '/' },
  { category: 'About', path: '/about' },
  { category: 'About / Leadership', path: '/about/leadership' },
  { category: 'About / Culture', path: '/about/culture' },
  { category: 'About / Locations', path: '/about/locations' },
  { category: 'Services (ServicePageLayout)', path: '/services/sap-s4hana-implementation' },
  { category: 'Services / Strategy Consulting', path: '/services/strategy-consulting/business' },
  { category: 'Solutions (SolutionPageLayout)', path: '/solutions/rise-with-sap' },
  { category: 'Partners (partner template)', path: '/partners/bsnl' },
  { category: 'Products (ProductLayout)', path: '/products/nxify' },
  { category: 'Customer Stories (index)', path: '/about/customer-stories' },
  { category: 'Customer Stories (story)', path: '/customer-stories/7hills-restaurant' },
  { category: 'Gallery', path: '/gallery' },
  { category: 'Events (redirects to Coming Soon)', path: '/about/events' },
  { category: 'Careers', path: '/careers' },
  { category: 'Contact', path: '/contact' },
  { category: 'Privacy Policy', path: '/privacy' },
  { category: 'Terms', path: '/terms-and-conditions' },
  { category: 'Cookies', path: '/cookies' },
  { category: 'SAP Analytics (standalone template)', path: '/sap-analytics' },
  { category: 'Subscription', path: '/subscription' },
  { category: 'Plans', path: '/plans' },
  { category: 'App Store', path: '/app-store' },
  { category: '404 Not Found', path: '/this-page-does-not-exist' },
];

async function auditRoute(chrome, { category, path }) {
  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    formFactor: 'mobile',
    screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2, disabled: false },
    throttling: {
      rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4,
      requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0,
    },
  };
  const runnerResult = await lighthouse(`${BASE}${path}`, options);
  const lhr = runnerResult.lhr;

  const audits = lhr.audits;
  const byteToKb = (b) => Math.round(b / 1024);

  const images = (audits['largest-contentful-paint-element']?.details?.items || []);
  const networkItems = audits['network-requests']?.details?.items || [];
  const imageItems = networkItems.filter(i => i.resourceType === 'Image').sort((a, b) => b.transferSize - a.transferSize).slice(0, 5);
  const jsBytes = networkItems.filter(i => i.resourceType === 'Script').reduce((s, i) => s + (i.transferSize || 0), 0);
  const cssBytes = networkItems.filter(i => i.resourceType === 'Stylesheet').reduce((s, i) => s + (i.transferSize || 0), 0);
  const totalBytes = networkItems.reduce((s, i) => s + (i.transferSize || 0), 0);
  const thirdParty = audits['third-party-summary']?.details?.items || [];
  const domSize = audits['dom-size']?.numericValue;
  const a11yFailed = Object.values(lhr.categories.accessibility.auditRefs || [])
    .map(ref => audits[ref.id])
    .filter(a => a && a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'notApplicable');

  const result = {
    category,
    path,
    scores: {
      performance: Math.round(lhr.categories.performance.score * 100),
      accessibility: Math.round(lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
      seo: Math.round(lhr.categories.seo.score * 100),
    },
    metrics: {
      LCP: audits['largest-contentful-paint']?.displayValue,
      FCP: audits['first-contentful-paint']?.displayValue,
      CLS: audits['cumulative-layout-shift']?.displayValue,
      TBT: audits['total-blocking-time']?.displayValue,
      SpeedIndex: audits['speed-index']?.displayValue,
    },
    domSize,
    payload: {
      totalKb: byteToKb(totalBytes),
      jsKb: byteToKb(jsBytes),
      cssKb: byteToKb(cssBytes),
      requestCount: networkItems.length,
    },
    largestImages: imageItems.map(i => ({ url: i.url, kb: byteToKb(i.transferSize || 0) })),
    thirdParty: thirdParty.slice(0, 8).map(t => ({ entity: t.entity?.text || t.entity, blockingTimeMs: Math.round(t.blockingTime || 0), transferKb: byteToKb(t.transferSize || 0) })),
    a11yIssues: a11yFailed.map(a => ({ id: a.id, title: a.title, score: a.score })),
    unusedCssKb: byteToKb(audits['unused-css-rules']?.details?.overallSavingsBytes || 0),
    unusedJsKb: byteToKb(audits['unused-javascript']?.details?.overallSavingsBytes || 0),
    renderBlockingMs: audits['render-blocking-resources']?.details?.overallSavingsMs || 0,
    opportunities: Object.values(lhr.categories.performance.auditRefs)
      .map(ref => audits[ref.id])
      .filter(a => a && a.details?.type === 'opportunity' && a.numericValue > 200)
      .map(a => ({ id: a.id, title: a.title, savingsMs: Math.round(a.numericValue) }))
      .sort((a, b) => b.savingsMs - a.savingsMs),
  };
  return result;
}

async function main() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
  const results = [];
  for (const route of ROUTES) {
    try {
      console.log(`Auditing ${route.category} (${route.path})...`);
      const r = await auditRoute(chrome, route);
      results.push(r);
      console.log(`  -> Perf ${r.scores.performance} / A11y ${r.scores.accessibility} / BP ${r.scores.bestPractices} / SEO ${r.scores.seo} | LCP ${r.metrics.LCP}`);
    } catch (err) {
      console.error(`  FAILED ${route.path}: ${err.message}`);
      results.push({ category: route.category, path: route.path, error: err.message });
    }
  }
  await chrome.kill();
  await writeFile(
    'C:\\Users\\safur\\AppData\\Local\\Temp\\claude\\c--Users-safur-OneDrive-Desktop-sria-craft\\73838ec8-a125-45d1-8449-6283ef5a7150\\scratchpad\\audit-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\nDone. Results written to audit-results.json');
}

main().catch((e) => { console.error(e); process.exit(1); });
