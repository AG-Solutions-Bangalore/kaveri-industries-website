/**
 * Real Lighthouse score checks for mobile + desktop.
 *
 * Usage:
 *   npm run lighthouse                 # build is NOT run; audits http://localhost:4173 (vite preview)
 *   npm run perf                       # build + preview + audit (recommended for real scores)
 *   node scripts/lighthouse.mjs --url=https://kaveri.agsdemo.in/ --form-factor=mobile
 *   node scripts/lighthouse.mjs --threshold=90 --no-serve
 *
 * Flags:
 *   --url=<url>            Target URL (default http://localhost:4173/)
 *   --form-factor=<both|mobile|desktop>  (default both)
 *   --threshold=<n>        Minimum score (0-100) for perf/accessibility/best-practices/seo (default 85)
 *   --serve                Auto-start `vite preview` if URL is localhost and unreachable (default on)
 *   --no-serve             Audit an already-running server / remote URL only
 *   --out=<dir>            Report directory (default lighthouse-reports)
 *
 * Exits non-zero when any category drops below --threshold.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(=(.*))?$/);
    return m ? [m[1], m[3] ?? true] : [a, true];
  }),
);

const TARGET_URL = args.url || "http://localhost:4173/";
const FORM_FACTOR = String(args["form-factor"] || "both").toLowerCase();
const THRESHOLD = Number(args.threshold ?? 85);
const SHOULD_SERVE = args.serve !== false && args["no-serve"] === undefined;
const OUT_DIR = path.resolve(ROOT, String(args.out || "lighthouse-reports"));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function isReachable(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok || res.status < 500;
  } catch {
    return false;
  }
}

function startPreview(port = 4173) {
  console.log(`[lighthouse] starting \`vite preview --port ${port}\`…`);
  const child = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
  });
  child.stdout.on("data", (d) => process.stdout.write(`[preview] ${d}`));
  child.stderr.on("data", (d) => process.stderr.write(`[preview] ${d}`));
  return child;
}

async function runOnce(url, formFactor, port) {
  const { default: lighthouse } = await import("lighthouse");
  const flags = {
    port,
    output: ["html", "json"],
    logLevel: "error",
    formFactor,
    screenEmulation:
      formFactor === "desktop"
        ? { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }
        : { mobile: true, width: 360, height: 640, deviceScaleFactor: 2, disabled: false },
    throttlingMethod: "simulate",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  };
  return lighthouse(url, flags);
}

function bar(score) {
  const n = Math.round(score * 100);
  const filled = Math.round(n / 10);
  return `${"█".repeat(filled)}${"░".repeat(10 - filled)} ${n}`;
}

async function main() {
  const factors =
    FORM_FACTOR === "both" ? ["mobile", "desktop"] : [FORM_FACTOR];
  if (!factors.every((f) => ["mobile", "desktop"].includes(f))) {
    console.error(`Unknown --form-factor=${FORM_FACTOR}. Use mobile|desktop|both.`);
    process.exit(2);
  }

  const chromeModule = await import("chrome-launcher");
  const chromeLauncher = chromeModule.default ?? chromeModule;
  const url = new URL(TARGET_URL);
  const isLocalhost = ["localhost", "127.0.0.1"].includes(url.hostname);

  let previewChild = null;
  let chrome = null;

  try {
    if (isLocalhost && SHOULD_SERVE && !(await isReachable(TARGET_URL))) {
      previewChild = startPreview(Number(url.port || 4173));
      for (let i = 0; i < 30; i++) {
        await sleep(1000);
        if (await isReachable(TARGET_URL)) break;
      }
      if (!(await isReachable(TARGET_URL))) {
        throw new Error(`Preview server did not start at ${TARGET_URL}`);
      }
    }

    chrome = await chromeLauncher.launch({ chromeFlags: ["--headless", "--no-sandbox"] });
    fs.mkdirSync(OUT_DIR, { recursive: true });

    let failed = false;
    for (const factor of factors) {
      console.log(`\n[lighthouse] auditing ${TARGET_URL} (${factor})…`);
      const result = await runOnce(TARGET_URL, factor, chrome.port);
      if (!result?.lhr) throw new Error("Lighthouse returned no result");

      const { categories, audits, fetchTime, finalUrl } = result.lhr;
      const stamp = new Date(fetchTime || Date.now()).toISOString().replace(/[:.]/g, "-");
      const base = `lighthouse-${factor}-${stamp}`;
      // lighthouse returns reports as an array ordered like flags.output
      const outputs = Array.isArray(result.report)
        ? result.report
        : Object.values(result.report);
      const exts = ["html", "json"];
      outputs.forEach((content, i) => {
        fs.writeFileSync(path.join(OUT_DIR, `${base}.${exts[i] ?? i}`), content);
      });

      console.log(`\n  ${factor.toUpperCase()}  ${finalUrl}`);
      for (const key of ["performance", "accessibility", "best-practices", "seo"]) {
        const s = categories[key]?.score ?? 0;
        const mark = s * 100 >= THRESHOLD ? "✓" : "✗";
        console.log(`  ${mark} ${key.padEnd(15)} ${bar(s)}`);
        if (s * 100 < THRESHOLD) failed = true;
      }

      const metrics = ["first-contentful-paint", "largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift", "speed-index", "interactive"];
      console.log("  metrics:");
      for (const m of metrics) {
        const a = audits[m];
        if (a?.displayValue) console.log(`    - ${m}: ${a.displayValue}`);
      }
      console.log(`  report: ${path.join(OUT_DIR, base)}.html`);
    }

    if (failed) {
      console.error(`\n[lighthouse] FAIL — a category scored below --threshold=${THRESHOLD}`);
      process.exitCode = 1;
    } else {
      console.log(`\n[lighthouse] PASS — all categories ≥ ${THRESHOLD}`);
    }
  } finally {
    if (chrome) {
      try {
        await chrome.kill();
      } catch {
        // ignore shutdown errors
      }
    }
    if (previewChild) previewChild.kill();
  }
}

main().catch((err) => {
  console.error("[lighthouse] error:", err?.message || err);
  process.exit(1);
});
