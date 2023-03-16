---
title: 'twoslash'
titleTemplate: false
---

- Works with `vitepress@>=1.0.0-alpha.61`
- Does not support other VitePress Shiki features yet
  - Line highlighting in code blocks
  - Focus in code blocks
  - Colored diffs in code blocks
  - Errors and warnings in code blocks
  - Line numbers
  - Import code snippets

## Plain

```ts
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

## twoslash

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

## Imports

```ts twoslash
// @module: esnext
// @filename: maths.ts
export function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}
// @filename: index.ts
import { absolute } from './maths'
const value = absolute(-1)
//    ^?
```

## Queries

```ts twoslash
// @module: esnext
// @filename: maths.ts
export function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}
// @filename: index.ts
import { absolute } from './maths'
const value = absolute(-1)
//    ^?
```

## Cut

```ts twoslash
// @module: esnext
// @filename: maths.ts
export function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}
// @filename: index.ts
// ---cut---
import { absolute } from './maths'
const value = absolute(-1)
//    ^?
```

## Completions

```ts twoslash
// @noErrors
console.di
//        ^|
```

## Errors

```ts twoslash
// @errors: 2339
const welcome = 'Tudo bem gente?'
const words = welcome.contains(' ')
```

## Logging

```ts twoslash
console.error('Hello world')
// @error: Hello world
console.warn('Hello world')
// @warn: Hello world
console.log('Hello world')
// @log: Hello world
```

## Annotations

```ts twoslash
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```

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
