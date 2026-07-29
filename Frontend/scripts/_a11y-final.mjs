import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';

const BASE = 'http://localhost:4198';
const ROUTES = ['/', '/gallery'];

async function main() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
  for (const path of ROUTES) {
    const runnerResult = await lighthouse(`${BASE}${path}`, {
      logLevel: 'error', output: 'json', onlyCategories: ['accessibility'], port: chrome.port,
      formFactor: 'mobile', screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2, disabled: false },
    });
    const lhr = runnerResult.lhr;
    const failed = Object.values(lhr.categories.accessibility.auditRefs)
      .map(ref => lhr.audits[ref.id])
      .filter(a => a && a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'notApplicable');
    console.log(`\n${path} — score ${Math.round(lhr.categories.accessibility.score * 100)}`);
    failed.filter(a => a.id !== 'color-contrast').forEach(a => {
      console.log(`  FAIL: ${a.id}`);
      (a.details?.items || []).forEach(it => {
        const node = it.node || it.subItems?.items?.[0]?.node;
        if (node) console.log(`     -> ${node.snippet?.slice(0, 160)}`);
      });
    });
  }
  try { await chrome.kill(); } catch {}
}
main().catch(e => { console.error(e); process.exit(1); });
