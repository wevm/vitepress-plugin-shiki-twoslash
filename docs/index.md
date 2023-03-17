---
description: 'Incredible statically generated code samples for VitePress using Twoslash.'
title: 'VitePress Twoslash: VitePress Plugin for Twoslash'
titleTemplate: false
---

# VitePress Twoslash

Incredible statically generated code samples for [VitePress](https://vitepress.dev) using [Twoslash](https://github.com/shikijs/twoslash) — powered by the syntax engine of Visual Studio Code and the TypeScript compiler. Try moving your cursor into this code block:

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

To some extent, anything your editor can show you about code, Twoslash can show. For example, here is the real auto-complete for a VitePress config:

```ts twoslash
// @noErrors
import { defineConfig } from 'vitepress'
export default defineConfig({
  ti,
  //^|
})
```

The name Twoslash refers to specially formatted comments which can be used to set up your environment, like compiler flags or separate input files. It couldn't be easier to set up!

## Install

Install `vitepress-plugin-twoslash` (requires `vitepress@>=1.0.0-alpha.61`).

::: code-group

```bash [pnpm]
pnpm add vitepress-plugin-twoslash
```

```bash [npm]
npm i vitepress-plugin-twoslash
```

```bash [yarn]
yarn add vitepress-plugin-twoslash
```

:::

## Configure

import css, wrap config, check out config for more properties

```ts

```

single theme, dark/light theme

## Add Twoslash

Add the `twoslash` attribute to a markdown fence.

````md
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
````

Once it is rendered out. TypeScript playground link.

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
