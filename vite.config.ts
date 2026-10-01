import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import zlib from 'node:zlib'
import { MessagePort } from 'node:worker_threads'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

const __dirname = import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url))

// CRITICAL EVENT-LOOP UNBLOCK FIX:
// React 18/19 scheduler keeps a Node MessagePort open, causing Vite SSG builds to hang indefinitely.
if (typeof MessagePort !== 'undefined' && MessagePort.prototype) {
  const origOn = Object.getOwnPropertyDescriptor(MessagePort.prototype, 'onmessage')
  if (origOn && origOn.set) {
    Object.defineProperty(MessagePort.prototype, 'onmessage', {
      set(fn) {
        origOn.set!.call(this, fn)
        const port = this as MessagePort & { unref?: () => void }
        if (fn && typeof port.unref === 'function') {
          port.unref()
        }
      },
      get() {
        return origOn.get?.call(this)
      },
      configurable: true,
      enumerable: true,
    })
  }
}

// vite-plugin-compression keeps a module-level mtime cache, so the second
// instance (brotli) sees every file as already compressed and emits nothing.
// This tiny post plugin guarantees .br files exist with the same threshold.
function brotliFallback(): Plugin {
  return {
    name: 'brotli-fallback',
    apply: 'build',
    enforce: 'post',
    async closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      if (!fs.existsSync(outDir)) return
      console.log('[build] Generating brotli pre-compressed files...')
      const walk = (dir: string): string[] => {
        const out: string[] = []
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name)
          if (entry.isDirectory()) out.push(...walk(full))
          else if (/\.(js|mjs|json|css|html)$/i.test(full)) out.push(full)
        }
        return out
      }
      for (const file of walk(outDir)) {
        const stat = fs.statSync(file)
        if (stat.size < 1024) continue
        const brPath = `${file}.br`
        if (fs.existsSync(brPath)) continue
        const input = fs.readFileSync(file)
        const compressed = zlib.brotliCompressSync(input, {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
            [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
          },
        })
        fs.writeFileSync(brPath, compressed)
      }
      console.log('[build] Brotli pre-compression complete.')
    },
  }
}

// Heavy vendors leave the critical path via manualChunks:
// motion|framer-motion → "motion", lenis → "lenis",
// lucide-react|@radix-ui|radix-ui → "ui-vendor",
// plus router/query/helmet splits.
function manualChunks(id: string) {
  const nid = id.replace(/\\/g, '/')
  let res: string | undefined = undefined

  if (nid.includes('/src/prerender.') || nid.includes('/src/seo/prerender.')) {
    res = undefined
  } else if (nid.toLowerCase().includes('server')) {
    res = undefined
  } else if (
    nid.includes('/react/') ||
    nid.includes('/react-dom/') ||
    nid.includes('/scheduler/') ||
    nid.includes('jsx-runtime') ||
    nid.includes('compiler-runtime')
  ) {
    res = 'react'
  } else if (
    nid.includes('framer-motion') ||
    nid.includes('motion-dom') ||
    nid.includes('motion-utils') ||
    nid.includes('/motion/')
  ) {
    res = 'motion'
  } else if (nid.includes('node_modules/lenis') || nid.includes('/lenis/')) {
    res = 'lenis'
  } else if (
    nid.includes('lucide-react') ||
    nid.includes('@radix-ui') ||
    nid.includes('radix-ui')
  ) {
    res = 'ui-vendor'
  } else if (nid.includes('axios')) {
    res = 'axios'
  } else if (nid.includes('react-router')) {
    res = 'router'
  } else if (nid.includes('@tanstack/')) {
    res = 'query'
  } else if (nid.includes('dynamicData')) {
    res = 'dynamic-data'
  } else if (nid.includes('react-helmet')) {
    res = 'helmet'
  } else if (nid.includes('next-themes')) {
    res = 'themes'
  }

  return res
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    vitePrerenderPlugin({
      prerenderScript: path.resolve(__dirname, 'src/seo/prerender.tsx'),
      renderTarget: '#root',
    }),
    // @ts-expect-error — vite-plugin-compression CJS/ESM interop under nodenext
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    // @ts-expect-error — vite-plugin-compression CJS/ESM interop under nodenext
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    brotliFallback(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: 'esbuild',
    cssMinify: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    modulePreload: {
      resolveDependencies(_url, deps) {
        return deps.filter(
          (dep) =>
            !dep.includes('motion') &&
            !dep.includes('lenis') &&
            !dep.includes('axios') &&
            !dep.includes('prerender')
        )
      },
    },
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
    // Vite 8 (Rolldown) reads rolldownOptions; keep both in sync.
    rolldownOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
