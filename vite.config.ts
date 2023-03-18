import { defineConfig } from 'vite'
import { default as dts } from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { name } from './package.json'
import { resolve } from 'path'

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
    outDir: 'dist',
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
  plugins: [
    // https://github.com/qmhc/vite-plugin-dts
    dts(),
    // https://github.com/sapphi-red/vite-plugin-static-copy
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles.css',
          dest: './',
        },
      ],
    }),
  ],
})
