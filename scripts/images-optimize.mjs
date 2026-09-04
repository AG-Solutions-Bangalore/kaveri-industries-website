/**
 * Image optimisation pass — LCP + responsive variants.
 *
 * Generates:
 *   - <name>-1200.webp  (1200 px wide,  q=78)  ← default for `srcset` 1x
 *   - <name>-800.webp   (800  px wide,  q=76)  ← `srcset` 0.75x
 *   - <name>-600.webp   (600  px wide,  q=74)  ← LCP fallback for mobile
 *
 * Idempotent — skips when the target is newer than the source.
 * Currently runs only on hero-fasteners.webp (the LCP image). Extend
 * the SOURCE list to optimise other large images.
 *
 * Usage: node scripts/images-optimize.mjs
 */

import { readdir, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

// Source image → list of widths to emit (in addition to the original).
const TARGETS = [
  {
    file: "home/hero-fasteners.webp",
    widths: [
      { w: 1200, q: 78, suffix: "-1200" },
      { w: 800, q: 76, suffix: "-800" },
      { w: 600, q: 74, suffix: "-600" },
    ],
  },
];

async function optimiseOne(target) {
  const src = path.join(IMAGES_DIR, target.file);
  if (!existsSync(src)) {
    console.warn(`[images-optimize] missing source: ${target.file}`);
    return [];
  }

  const srcStat = await stat(src);
  const dir = path.dirname(src);
  const ext = path.extname(src);
  const stem = path.basename(src, ext);

  const emitted = [];
  for (const variant of target.widths) {
    const outPath = path.join(dir, `${stem}${variant.suffix}${ext}`);
    if (
      existsSync(outPath) &&
      (await stat(outPath)).mtimeMs >= srcStat.mtimeMs
    ) {
      continue; // up-to-date
    }
    const buf = await sharp(src, { failOn: "none" })
      .rotate()
      .resize({ width: variant.w, withoutEnlargement: true })
      .webp({ quality: variant.q, effort: 4 })
      .toBuffer();
    await writeFile(outPath, buf);
    const outSize = (await stat(outPath)).size;
    emitted.push({
      file: path.relative(ROOT, outPath),
      width: variant.w,
      bytes: outSize,
    });
  }
  return emitted;
}

async function main() {
  const all = [];
  for (const t of TARGETS) {
    const r = await optimiseOne(t);
    all.push(...r);
  }
  if (all.length === 0) {
    console.log("[images-optimize] All variants up to date ✓");
    return;
  }
  for (const e of all) {
    console.log(
      `[images-optimize] ${e.file}  ${(e.bytes / 1024).toFixed(1)} KiB`
    );
  }
}

main().catch((err) => {
  console.error("[images-optimize] failed:", err);
  process.exit(1);
});
