---
description: 'You can replace the contents of your code examples with the results of running TypeScript over the project.'
title: 'Emit'
---

# Emit

Running a Twoslash code example is a full TypeScript compiler run that will create files inside the virtual file system. You can replace the contents of your code examples with the results of running TypeScript over the project.

## `@showEmit`

`// @showEmit` is the main command to tell Shiki Twoslash that you want to replace the output of your code example with the equivalent `.js` file.

::: code-group

```ts twoslash [output]
// @showEmit
const level: string = 'Danger'
```

````md [markdown]
```ts twoslash
// @showEmit
const level: string = 'Danger'
```
````

:::

## `@showEmittedFile: [file]`

While the `.js` file is probably the most useful file out of the box, TypeScript does emit other files if you have the right flags enabled (`.d.ts` and `.map`) but also when you have a multi-file code sample — you might need to tell Twoslash which file to show. For all these cases you can also add `@showEmittedFile: [file]` to tell Twoslash which file you want to show.

Shows emitted `.d.ts` for a TypeScript code example:

::: code-group

````md [markdown]
```ts twoslash
// @declaration
// @showEmit
// @showEmittedFile: index.d.ts
export const hello = 'world'
```
````

```ts twoslash [output]
// @declaration
// @showEmit
// @showEmittedFile: index.d.ts
export const hello = 'world'
```

:::

Shows emitted `.map` files:

::: code-group

````md [markdown]
```ts twoslash
// @sourceMap
// @showEmit
// @showEmittedFile: index.js.map
export const hello = 'world'
```
````

```ts twoslash [output]
// @sourceMap
// @showEmit
// @showEmittedFile: index.js.map
export const hello = 'world'
```

:::

::: code-group

````md [markdown]
```ts twoslash
// @declaration
// @declarationMap
// @showEmit
// @showEmittedFile: index.d.ts.map
export const hello = 'world'
```
````

```ts twoslash [output]
// @declaration
// @declarationMap
// @showEmit
// @showEmittedFile: index.d.ts.map
export const hello = 'world'
```

:::
