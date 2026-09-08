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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Animation — the largest TBT driver; isolate so the critical
          // path (react/router) can parse before motion evaluates.
          if (id.includes('motion/') || id.includes('framer-motion'))
            return 'motion'
          // Smooth-scroll — deferred via lazy import, never critical.
          if (id.includes('lenis')) return 'lenis'
          // Icon + primitive UI kits — many small modules, one shared chunk.
          if (
            id.includes('lucide-react') ||
            id.includes('@radix-ui') ||
            id.includes('radix-ui')
          )
            return 'ui-vendor'
          if (id.includes('react-router-dom')) return 'router'
          if (id.includes('@tanstack/react-query') || id.includes('axios'))
            return 'query'
          if (id.includes('react-helmet-async')) return 'helmet'
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.match(/node_modules\/react\//) ||
            id.match(/node_modules\/react-dom\//) ||
            id.match(/node_modules\/scheduler\//)
          )
            return 'react'
          if (id.includes('next-themes')) return 'themes'
        },
      },
    },
  },
})
