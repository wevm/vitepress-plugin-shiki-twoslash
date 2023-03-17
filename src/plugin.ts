import { setupForFile, transformAttributesToHTML } from 'remark-shiki-twoslash'
import type { UserConfigSettings as TwoslashConfigSettings } from 'shiki-twoslash'
import type { UserConfig } from 'vitepress'

declare module 'vitepress' {
  interface UserConfig {
    twoslash?: TwoslashConfigSettings
  }
}

export async function withTwoslash(config: UserConfig) {
  // Inject twoslash highlighter
  if (!config.markdown) config.markdown = {}
  const markdownConfig = config.markdown.config || (() => null)

  const { highlighters } = await setupForFile(config.twoslash)
  config.markdown.config = (md) => {
    const h = md.options.highlight
    md.options.highlight = (code, lang, attrs) => {
      if (/twoslash/.test(attrs))
        return transformAttributesToHTML(
          code.replace(/\r?\n$/, ''), // strip trailing newline fed during code block parsing
          [lang, attrs].join(' '),
          highlighters,
          config.twoslash ?? {},
        )

      return h!(code, lang, attrs)
    }

    markdownConfig(md)
  }

  // Inject `data-lsp` to `isCustomElement`
  if (!config.vue) config.vue = {}
  if (!config.vue.template) config.vue.template = {}
  if (!config.vue.template.compilerOptions)
    config.vue.template.compilerOptions = {}
  const isCustomElement =
    config.vue.template.compilerOptions.isCustomElement ?? (() => false)

  config.vue.template.compilerOptions = {
    ...config.vue.template.compilerOptions,
    isCustomElement(tag) {
      return isCustomElement(tag) || tag.includes('data-lsp')
    },
  }

  return config
}
