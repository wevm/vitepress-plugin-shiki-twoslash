---
description: ''
title: 'Completions'
---

# Completions

Display real auto-complete for code examples.

```ts twoslash
// @noErrors
import { defineConfig } from 'vitepress'
export default defineConfig({
  ti,
  //^|
})
```

::: warning

Until this [pull request](https://github.com/shikijs/twoslash/pull/179) is merged and deployed, you need to [patch the `shiki-twoslash` package](https://github.com/wagmi-dev/vitepress-plugin-shiki-twoslash/blob/main/patches/shiki-twoslash%403.1.1.patch) for completions to work.
:::

## Example

Add a `// ^|` comment pointing to where you want to query.

````md
```ts twoslash
// @noErrors
import { defineConfig } from 'vitepress'
export default defineConfig({
  ti,
  //^|
})
```
````

::: tip

You might need to add whitespace between `//` and `^|` to point to where you want.

:::
