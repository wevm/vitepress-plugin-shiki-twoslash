---
description: 'Using external libraries with Twoslash code examples.'
title: '@types'
---

# @types

For most examples, you probably need to import external libraries into your code examples.

Twoslash works by faking a virtual file system over your existing file system. This means any `@types` or libraries with TypeScript definitions should work out of the box with no config.

## Local Sources

Simply import locally installed libraries and Twoslash can pick up types:

::: code-group

```ts twoslash [output]
import { defineConfig } from 'vitepress'
const config = defineConfig({})
//    ^?
export default config
```

````md [markdown]
```ts twoslash
import { defineConfig } from 'vitepress'
const config = defineConfig({})
//    ^?
export default config
```
````

:::

## Globals

Setting up globals is a little bit more complex, but not drastically. You need to use the [triple slash reference](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) which adds a particular library to the global scope.

For example, setting up Node imports and globals etc.

::: code-group

```ts twoslash [output]
/// <reference types="node" />
// ---cut---
import { writeFileSync } from 'fs'
writeFileSync('myfile.txt', '// TODO')
```

````md [markdown]
```ts twoslash
/// <reference types="node" />
// ---cut---
import { writeFileSync } from 'fs'
writeFileSync('myfile.txt', '// TODO')
```
````

:::

APIs like [Vitest](https://vitest.dev) are similar cases where you would use a triple slash reference.

::: code-group

```ts twoslash [output]
/// <reference types="vitest/globals" />
// ---cut---

test('my tests', () => {
  expect('hello').toEqual('hello')
  // ^?
})
```

````md [markdown]
```ts twoslash
/// <reference types="vitest/globals" />
// ---cut---

test('my tests', () => {
  expect('hello').toEqual('hello')
  // ^?
})
```
````

:::
