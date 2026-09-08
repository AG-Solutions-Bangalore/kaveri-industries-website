const fs = require("fs");
const r = JSON.parse(fs.readFileSync("./lighthouse-report.json", "utf8"));

console.log("=== CORE WEB VITALS / PERFORMANCE METRICS ===");
const metrics = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
  "interactive"
];
for (const m of metrics) {
  const a = r.audits[m];
  if (a) console.log(`${a.title}: ${a.displayValue} (score: ${a.score})`);
}

console.log("\n=== PERFORMANCE AUDITS (Score < 1 with weight > 0) ===");
const perfAudits = r.categories.performance.auditRefs;
for (const ref of perfAudits) {
  const a = r.audits[ref.id];
  if (a && typeof a.score === "number" && a.score < 1 && ref.weight > 0) {
    console.log(`[Weight: ${ref.weight}, Score: ${a.score}] ${a.title}: ${a.displayValue || ""}`);
  }
}

console.log("\n=== OPPORTUNITIES & DIAGNOSTICS ===");
for (const [id, a] of Object.entries(r.audits)) {
  if (a && typeof a.score === "number" && a.score < 1 && (a.details?.type === "opportunity" || a.details?.overallSavingsMs > 0 || a.details?.overallSavingsBytes > 0)) {
    console.log(`- ${a.title}: ${a.displayValue || ""} (Savings: ${a.details?.overallSavingsMs ? a.details.overallSavingsMs + "ms" : ""} ${a.details?.overallSavingsBytes ? Math.round(a.details.overallSavingsBytes/1024) + "KB" : ""})`);
  }
}

console.log("\n=== ACCESSIBILITY ISSUES ===");
const a11yAudits = r.categories.accessibility.auditRefs;
for (const ref of a11yAudits) {
  const a = r.audits[ref.id];
  if (a && typeof a.score === "number" && a.score < 1) {
    console.log(`- [Score: ${a.score}] ${a.title}`);
    if (a.details?.items) {
      for (const item of a.details.items) {
        if (item.node) {
          console.log(`   Element: ${item.node.snippet} (Selector: ${item.node.selector})`);
          if (item.node.explanation) console.log(`   Issue: ${item.node.explanation}`);
        }
      }
    }
  }
}

console.log("\n=== AGENTIC BROWSING ===");
if (r.categories["agentic-browsing"]) {
  for (const ref of r.categories["agentic-browsing"].auditRefs) {
    const a = r.audits[ref.id];
    if (a && typeof a.score === "number" && a.score < 1) {
      console.log(`- [Score: ${a.score}] ${a.title}: ${a.explanation || a.displayValue || ""}`);
    }
  }
}
