import fs from "fs";

function printReport(file) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  console.log(`\n=== REPORT: ${file} ===`);
  console.log(`Perf Score: ${Math.round(data.categories.performance.score * 100)}`);
  
  const metrics = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "speed-index",
    "interactive"
  ];
  for (const m of metrics) {
    const audit = data.audits[m];
    console.log(`  ${m.padEnd(26)} : ${audit.displayValue} (score: ${audit.score})`);
  }

  console.log("\nOpportunities / Significant Audits:");
  for (const [key, audit] of Object.entries(data.audits)) {
    if (audit.details?.overallSavingsMs > 100 || (audit.score !== null && audit.score < 0.9 && audit.details?.type === 'opportunity')) {
      console.log(`  [OPP] ${key} - savings: ${audit.details?.overallSavingsMs}ms, ${audit.details?.overallSavingsBytes ? Math.round(audit.details.overallSavingsBytes/1024) + 'KB' : ''}: ${audit.title}`);
    }
  }

  console.log("\nLCP Element:");
  console.log(JSON.stringify(data.audits["largest-contentful-paint-element"]?.details?.items, null, 2));

  console.log("\nRender-blocking resources:");
  console.log(JSON.stringify(data.audits["render-blocking-resources"]?.details?.items, null, 2));

  console.log("\nCritical Request Chains (Root count):", Object.keys(data.audits["critical-request-chains"]?.details?.chains || {}).length);
  console.log(JSON.stringify(data.audits["critical-request-chains"]?.details?.chains, null, 2)?.slice(0, 1500));
}

const target = process.argv[2] || "lighthouse-reports/lighthouse-desktop-2026-10-01T09-16-32-271Z.json";
printReport(target);

