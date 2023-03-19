---
title: 'Markdown Extensions'
---

# Markdown Extensions

## Code Groups

[Code Groups](https://vitepress.dev/guide/markdown#code-groups) and Twoslash [multi-file](/api/multi-file) support.

::: code-group

```ts twoslash [index.ts]
// @module: esnext
// @filename: name.ts
export const name = 'twoslash'
// @filename: index.ts
// ---cut---
import { name } from './name'
export function hello(name: string) {
  console.log(`Hello, ${name}!`)
}
hello(name)
//    ^?
```

```ts twoslash [name.ts]
export const name = 'twoslash'
```

:::

## Unsupported Extensions

Since VitePress Twoslash uses it's own [Shiki](https://github.com/shikijs/shiki) highlighter, the following syntax highlighting extensions are not currently compatible.

- [Line Highlighting in Code Blocks](https://vitepress.dev/guide/markdown#line-highlighting-in-code-blocks)
- [Focus in Code Blocks](https://vitepress.dev/guide/markdown#focus-in-code-blocks)
- [Colored Diffs in Code Blocks](https://vitepress.dev/guide/markdown#colored-diffs-in-code-blocks)
- [Errors and Warnings in Code Blocks](https://vitepress.dev/guide/markdown#errors-and-warnings-in-code-blocks)
- [Line Numbers](https://vitepress.dev/guide/markdown#line-numbers)
- [Import Code Snippets](https://vitepress.dev/guide/markdown#import-code-snippets)

If you are interested in adding support, please start a new [GitHub Discussion](https://github.com/wagmi-dev/vitepress-plugin-shiki-twoslash).
