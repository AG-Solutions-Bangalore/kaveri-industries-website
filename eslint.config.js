import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    rules: {
      // `routes` is intentionally a non-component named export from
      // src/routes/routes.tsx — Fast Refresh requires that file's exports
      // be components OR allowed-constants. `wrap` is an HOC. Whitelist.
      "react-refresh/only-export-components": [
        "error",
        {
          allowConstantExport: true,
          allowExportNames: ["routes"],
          extraHOCs: ["wrap"],
        },
      ],
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])
