---
title: 'VitePress Support'
---

# VitePress Support

- TypeScript playground
- https://github.com/shikijs/twoslash
- https://shikijs.github.io/twoslash
- Does not support other VitePress Shiki features yet
  - Line highlighting in code blocks
  - Focus in code blocks
  - Colored diffs in code blocks
  - Errors and warnings in code blocks
  - Line numbers
  - Import code snippets

### Code Groups

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
