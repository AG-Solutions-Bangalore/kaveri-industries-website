import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    // Emit pre-compressed .gz + .br assets so static hosts serve the
    // smallest bytes without runtime compression (better TTFB / LCP).
    // @ts-expect-error — see import note above.
    compression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
    // @ts-expect-error — see import note above.
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    // Inline tiny assets (SVG icons) to avoid extra requests; keep the
    // limit low so photos stay as separate cacheable files.
    assetsInlineLimit: 4096,
    modulePreload: {
      resolveDependencies(_filename, deps) {
        return deps.filter((dep) => !dep.includes('lenis'))
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Heavy animation runtime — deferred so critical path paints first
          if (id.includes('motion/') || id.includes('framer-motion'))
            return 'motion'
          // Smooth-scroll — deferred via idle callback
          if (id.includes('lenis')) return 'lenis'
          // Icon + primitive UI kits
          if (
            id.includes('lucide-react') ||
            id.includes('@radix-ui') ||
            id.includes('radix-ui')
          )
            return 'ui-vendor'
          // Core framework runtime
          if (
            id.includes('react-router') ||
            id.includes('react-helmet-async') ||
            id.includes('next-themes') ||
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.match(/node_modules\/react\//) ||
            id.match(/node_modules\/react-dom\//) ||
            id.match(/node_modules\/scheduler\//)
          )
            return 'vendor'
        },
      },
    },
  },
})
