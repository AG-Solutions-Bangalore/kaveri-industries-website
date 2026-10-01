import { spawn } from "node:child_process";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

async function verify() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless", "--no-sandbox"] });
  try {
    const flags = {
      port: chrome.port,
      output: "json",
      logLevel: "error",
      onlyCategories: ["accessibility"],
    };
    const res = await lighthouse("http://localhost:4173/", flags);
    const audits = res.lhr.audits;
    
    console.log("=== ACCESSIBILITY AUDIT REPORT ===");
    console.log("Score:", Math.round(res.lhr.categories.accessibility.score * 100));

    const treeAudits = [
      "aria-allowed-role",
      "aria-required-children",
      "aria-required-parent",
      "aria-roles",
      "aria-valid-attr",
      "aria-valid-attr-value"
    ];

    for (const id of treeAudits) {
      const a = audits[id];
      if (a) {
        console.log(`- ${id}: ${a.score === 1 ? 'PASSED ✓' : 'FAILED ✗'}`);
        if (a.score !== 1) {
          console.log("  Audit title:", a.title);
          console.log("  Audit description:", a.description);
          console.log("  Details:", JSON.stringify(a.details?.items, null, 2));
        }
      }
    }
  } finally {
    await chrome.kill();
  }
}

verify().catch(console.error);
