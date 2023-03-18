---
description: 'Static code examples for VitePress using Shiki Twoslash.'
title: 'VitePress Twoslash: VitePress Plugin for Shiki Twoslash'
titleTemplate: false
---

# VitePress Twoslash

## Overview

Static code examples for [VitePress](https://vitepress.dev) using [Shiki Twoslash](https://github.com/shikijs/twoslash) — powered by the syntax engine of Visual Studio Code and the TypeScript compiler. Try moving your cursor into the code block below:

```ts twoslash
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
```

Pretty neat, right? To some extent, anything your editor can show you about code, Twoslash can show. For example, here is the real auto-complete for a VitePress config:

```ts twoslash
// @noErrors
import { defineConfig } from 'vitepress'
export default defineConfig({
  ti,
  //^|
})
```

The name Twoslash refers to specially formatted comments (e.g. `// ^?`) which can be used to set up your environment, like compiler flags or separate input files. It couldn't be easier to set up and use!

## Install

Install `vitepress-plugin-shiki-twoslash` (requires `vitepress@>=1.0.0-alpha.61`).

::: code-group

```bash [pnpm]
pnpm add vitepress-plugin-shiki-twoslash
```

```bash [npm]
npm i vitepress-plugin-shiki-twoslash
```

```bash [yarn]
yarn add vitepress-plugin-shiki-twoslash
```

:::

## Configure

First, wrap your VitePress config file with the `withTwoslash` wrapper.

```ts twoslash
// .vitepress/config.[ext]
import { defineConfig } from 'vitepress'
import { withTwoslash } from 'vitepress-plugin-shiki-twoslash'

export default withTwoslash(
  defineConfig({
    // Your VitePress config
  }),
)
```

Then, import `vitepress-plugin-shiki-twoslash/styles.css` into your theme.

```ts twoslash
// .vitepress/theme/index.ts
import defaultTheme from 'vitepress/theme'
import 'vitepress-plugin-shiki-twoslash/styles.css'

export default defaultTheme
```

## Add Twoslash

Finally, add the `twoslash` attribute to markdown fenced code blocks.

````md [markdown]
```ts twoslash
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
//   ^?
```
````

And your code blocks will be twoslashified!

```ts twoslash [twoslash]
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
//   ^?
```
