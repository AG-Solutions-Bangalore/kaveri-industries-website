import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
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
