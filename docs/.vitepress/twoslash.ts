import type { UserConfigSettings } from "shiki-twoslash"
import type MarkdownIt from 'markdown-it'
import { setupForFile, transformAttributesToHTML } from 'remark-shiki-twoslash'

export const markdownItShikiTwoslashSetup = async (
  settings: UserConfigSettings,
): Promise<MarkdownIt.PluginWithOptions<UserConfigSettings>> => {
  const { highlighters } = await setupForFile(settings)

  return (md, options) => {
    const h = md.options.highlight
    md.options.highlight = (code, lang, attrs) => {
      if (attrs === 'twoslash')
        return transformAttributesToHTML(
          code.replace(/\r?\n$/, ''), // strip trailing newline fed during code block parsing
          [lang, attrs].join(' '),
          highlighters,
          { ...settings, ...options },
        )

      return h!(code, lang, attrs)
    }
  }
}
