# Build-Time Image Policy

The Kaveri Industries site serves **WebP exclusively** at runtime. Any
non-WebP source (`.jpg`, `.jpeg`, `.png`) is converted to `.webp` before
every `dev` and `build` run.

## How it works

[`scripts/images-to-webp.mjs`](../scripts/images-to-webp.mjs) walks
`public/images/` recursively. For every source whose extension is
`.jpg`, `.jpeg`, or `.png`, it produces a `.webp` sibling using
[`sharp`](https://sharp.pixelplumbing.com/) at quality `82` and
effort `4`, then leaves the original in place. Re-runs are idempotent
— a `.webp` newer than its source is skipped.

The script is wired via the [`prebuild` and `predev` npm
hooks](../package.json):

```json
"predev":   "node scripts/images-to-webp.mjs",
"prebuild": "node scripts/images-to-webp.mjs"
```

## NPM scripts

| Command                | What it does                                       |
|------------------------|----------------------------------------------------|
| `npm run dev`          | Convert → start Vite dev server                    |
| `npm run build`        | Convert → `tsc -b` → `vite build`                  |
| `npm run images:convert` | Convert all non-WebP sources in place             |
| `npm run images:check`   | Exit non-zero if any source lacks a `.webp` sibling |

## Contribution rules

1. **Reference `.webp` paths in code**, not the source extension.
   The build pipeline guarantees the `.webp` will exist; the source
   file (if any) is just an intermediate.

   ```ts
   // ✅ correct
   imageUrl: "/images/about/team-engineering.webp"

   // ❌ avoid
   imageUrl: "/images/about/team-engineering.jpg"
   ```

2. **Any source format is acceptable.** Drop a `.jpg` straight from
   the camera into `public/images/<section>/<name>.jpg`. The
   prebuild will mint a `.webp` next to it. You can also pre-convert
   and commit only the `.webp` — both work.

3. **Don't hand-delete the `.webp` siblings** unless you also delete
   the source. The script skips re-conversion when the `.webp` is
   newer than the source, so an out-of-date companion will linger
   on disk until the next conversion run.

4. **Update `imageAlt`** whenever you swap the image — the alt text
   in `src/feature/**/api/*.ts` files should describe what's
   actually on screen.

## Quality settings

- **Format:** WebP (lossy)
- **Quality:** `82` (good size/quality balance for photography)
- **Effort:** `4` (encoder speed vs compression — 4 is a sensible default)
- **EXIF rotation:** honoured via `sharp().rotate()` before re-encode

To change these, edit the `QUALITY` constant and the
`.webp({ ... })` options in `scripts/images-to-webp.mjs`.

## Why a script and not a Vite plugin?

- **No extra build dependency surface.** `sharp` is a single
  dev-only package; no Vite plugin wrapper required.
- **Runs in both dev and build** via the npm `pre*` hooks.
- **Idempotent and predictable** — it always re-checks mtimes, so
  cache invalidation is automatic.

A Vite plugin would only matter if we needed to process images
imported through the JS module graph. The site uses plain string
`src="/images/..."` references for the `public/` folder, so a
standalone prebuild script is the right tool.
