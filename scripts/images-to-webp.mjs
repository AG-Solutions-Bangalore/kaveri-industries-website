/**
 * Build-time WebP converter.
 *
 * Scans `public/images/` recursively and converts any non-WebP image
 * (.jpg, .jpeg, .png) into a sibling `.webp` file. The original is left
 * in place so the converter is idempotent and re-runs are safe.
 *
 * Runs automatically before `vite build` and `vite` (dev) via the
 * `prebuild` and `predev` npm scripts.
 *
 * Why: the site policy is "always serve WebP". This script guarantees
 * that any source asset dropped into `public/images/` is available as
 * a `.webp` even if the contributor forgot to convert it.
 *
 * Requirements: `sharp` (devDependency).
 *
 * Usage:
 *   node scripts/images-to-webp.mjs          # convert in place
 *   node scripts/images-to-webp.mjs --check  # exit 1 if any source lacks a .webp
 */

import { readdir, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const QUALITY = 82; // webp quality — good size/quality balance for photography

const args = new Set(process.argv.slice(2));
const CHECK_ONLY = args.has("--check");

/** Recursively yield all regular file paths under `dir`. */
async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

/** Convert one file to .webp alongside the original. */
async function convertOne(file) {
  const ext = path.extname(file).toLowerCase();
  if (!SOURCE_EXTENSIONS.has(ext)) return null;

  const target = file.replace(ext, ".webp");
  const label = path.relative(ROOT, file);

  // Skip if the .webp is already newer than the source (idempotent re-run).
  if (existsSync(target)) {
    const [srcStat, dstStat] = await Promise.all([stat(file), stat(target)]);
    if (dstStat.mtimeMs >= srcStat.mtimeMs) {
      return { file: label, action: "skipped" };
    }
  }

  if (CHECK_ONLY) {
    return { file: label, action: "missing-webp" };
  }

  const buf = await sharp(file, { failOn: "none" })
    .rotate() // honour EXIF orientation before re-encoding
    .webp({ quality: QUALITY, effort: 4 })
    .toBuffer();

  await writeFile(target, buf);
  return {
    file: label,
    action: "converted",
    inBytes: (await stat(file)).size,
    outBytes: buf.length,
  };
}

async function main() {
  if (!existsSync(IMAGES_DIR)) {
    console.log(`[images-to-webp] No ${path.relative(ROOT, IMAGES_DIR)} directory — nothing to do.`);
    return;
  }

  const files = [];
  for await (const f of walk(IMAGES_DIR)) files.push(f);

  const sources = files.filter((f) =>
    SOURCE_EXTENSIONS.has(path.extname(f).toLowerCase())
  );

  if (sources.length === 0) {
    console.log("[images-to-webp] No .jpg/.jpeg/.png sources found. All assets already WebP ✓");
    return;
  }

  const results = await Promise.all(sources.map(convertOne));
  const converted = results.filter((r) => r && r.action === "converted");
  const skipped = results.filter((r) => r && r.action === "skipped");
  const missing = results.filter((r) => r && r.action === "missing-webp");

  if (CHECK_ONLY) {
    if (missing.length) {
      console.error(
        `[images-to-webp] ${missing.length} source(s) lack a .webp companion:\n` +
          missing.map((m) => `  - ${m.file}`).join("\n")
      );
      process.exit(1);
    }
    console.log(`[images-to-webp] All ${sources.length} source(s) have a .webp companion ✓`);
    return;
  }

  // Brief summary
  const inTotal = converted.reduce((s, r) => s + (r.inBytes ?? 0), 0);
  const outTotal = converted.reduce((s, r) => s + (r.outBytes ?? 0), 0);
  const savedPct =
    inTotal > 0 ? Math.round(((inTotal - outTotal) / inTotal) * 100) : 0;

  console.log(
    `[images-to-webp] converted ${converted.length}, skipped ${skipped.length} (already up to date)`
  );
  if (converted.length > 0) {
    console.log(
      `[images-to-webp] ${formatBytes(inTotal)} → ${formatBytes(outTotal)} (saved ${savedPct}%)`
    );
  }
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

main().catch((err) => {
  console.error("[images-to-webp] failed:", err);
  process.exit(1);
});
