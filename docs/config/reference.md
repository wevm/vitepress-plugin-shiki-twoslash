---
description: 'You can configure Twoslash to change code example output.'
title: 'Config'
---

# Config

## Overview

You can configure VitePress Twoslash using the `twoslash` property added to `defineConfig`.

```ts twoslash
// .vitepress/config.[ext]
import { defineConfig } from 'vitepress'
import {
  withTwoslash,
  TwoslashConfigSettings,
} from 'vitepress-plugin-shiki-twoslash'

export default withTwoslash(
  defineConfig({
    twoslash: {
      // Your VitePress Twoslash options
    },
  }),
)
```

::: info
In addition to the below config options, VitePress Twoslash also supports all [`shiki`](https://github.com/shikijs/shiki) `HighlighterOptions` and [`@typescript/twoslash`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher) `TwoSlashOptions`.
:::

## Options

### `addTryButton`

A way to turn on the try buttons seen on the TS website.

- **Type**: `boolean`
- **Default**: `false`

```ts
export default withTwoslash(
  defineConfig({
    twoslash: {
      addTryButton: true, // [!code focus]
    },
  }),
)
```

### `alwayRaiseForTwoslashExceptions`

Instead of showing twoslash exceptions inline, throw the entire process like it will on CI.

- **Type**: `boolean`
- **Default**: `false`

```ts
export default withTwoslash(
  defineConfig({
    twoslash: {
      alwayRaiseForTwoslashExceptions: true, // [!code focus]
    },
  }),
)
```

### `disableImplicitReactImport`

A way to disable implicit React imports on tsx/jsx language codeblocks

- **Type**: `boolean`
- **Default**: `false`

```ts
export default withTwoslash(
  defineConfig({
    twoslash: {
      disableImplicitReactImport: true, // [!code focus]
    },
  }),
)
```

### `includeJSDocInHover`

Include JSDoc comments in the hovers.

- **Type**: `boolean`
- **Default**: `false`

```ts
export default withTwoslash(
  defineConfig({
    twoslash: {
      includeJSDocInHover: true, // [!code focus]
    },
  }),
)
```

### `ignoreCodeblocksWithCodefenceMeta`

Ignore transforming certain code blocks.

- **Type**: `boolean`
- **Default**: `false`

```ts
export default withTwoslash(
  defineConfig({
    twoslash: {
      ignoreCodeblocksWithCodefenceMeta: true, // [!code focus]
    },
  }),
)
```

### `wrapFragments`

A way to add a div wrapper for multi-theme outputs.

- **Type**: `boolean`
- **Default**: `false`

```ts
export default withTwoslash(
  defineConfig({
    twoslash: {
      wrapFragments: true, // [!code focus]
    },
  }),
)
```
