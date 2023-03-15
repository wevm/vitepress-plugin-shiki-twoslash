import { ScriptTarget } from 'typescript'
import { defineConfig } from 'vitepress'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { markdownItShikiTwoslashSetup } from './twoslash'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const theme = { dark: 'vitesse-dark', light: 'vitesse-light' }

export default async () => {
  const shikiTwoslash = await markdownItShikiTwoslashSetup({
    addTryButton: true,
    defaultCompilerOptions: { target: ScriptTarget.ESNext },
    themes: [theme.dark, theme.light],
    vfsRoot: path.resolve(__dirname, '../'),
  })

  return defineConfig({
    lang: 'en-US',
    markdown: {
      theme,
      config(md) {
        md.use(shikiTwoslash)
      },
    },
    title: 'twoslash',
  })
}
