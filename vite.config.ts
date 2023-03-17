import { defineConfig } from 'vite'

import { name } from './package.json'
import { resolve } from 'path'

// d.ts
// css
// vitest
// dev mode
// docs

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName(format: string) {
        switch (format) {
          case 'es':
            return `${name}.${format}.mjs`
          default:
            return `${name}.${format}.js`
        }
      },
      formats: ['es', 'umd'],
      name,
    },
    rollupOptions: {
      external: ['shiki', 'vitepress'],
      output: {
        globals: {
          shiki: 'shiki',
          vue: 'Vue',
        },
      },
    },
  },
})
