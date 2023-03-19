---
description: "Twoslash code examples aren't limited to creating a single file. You can write any file to the virtual file system used by TypeScript to power your code examples."
title: 'Multi-file'
---

# Multi-file

Twoslash code examples aren't limited to creating a single file, by using `// @filename: [file]` you can write any file to the virtual file system used by TypeScript to power your code examples.

## `@filename: [file]`

Most of the time, you don't need to think about the underlaying virtual file system in a code example, but when you have imports between them it becomes important to know. Twoslash will default to creating an `index.[type]` based on the langauge passed to the code example:

::: code-group

```ts twoslash [output]
// I'm index.ts
```

````md [markdown]
```ts twoslash
// I'm index.ts
```
````

:::

::: code-group

```tsx twoslash [output]
// I'm index.tsx
```

````md [markdown]
```tsx twoslash
// I'm index.tsx
```
````

:::

::: code-group

```js twoslash [output]
// I'm index.tjs
```

````md [markdown]
```js twoslash
// I'm index.tjs
```
````

:::

Then until Twoslash hits another `// @filename: [file]`, the parser keeps adding new lines into the same file. After seeing `@filename` Twoslash creates a new virtual file-system file and adds the new lines to that. You can't edit a file after it was created, but you can overwrite it.

It can be any file. For example, if you want to quickly fake a node module:

::: code-group

```ts twoslash [output]
// @filename: node_modules/@types/mylib/index.d.ts
export function doit(): string

// @filename: index.ts
import { doit } from 'mylib'
console.log(doit)
```

This code example sets up the types for a non-existent npm module, and TypeScript picks it up as the definitions in the same way it would in a non-virtual TypeScript project.

````md [markdown]
```ts twoslash
// @filename: node_modules/@types/mylib/index.d.ts
export function doit(): string

// @filename: index.ts
import { doit } from 'mylib'
console.log(doit)
```
````

:::

You can also set up a JSON object which can be imported in a TypeScript file:

::: code-group

```ts twoslash [output]
// @resolveJsonModule
// @filename: app.json
{ "version": "23.2.3" }

// @filename: index.ts
import appSettings from "./app.json"
appSettings.version
//           ^?
```

````md [markdown]
```ts twoslash
// @resolveJsonModule
// @filename: app.json
{ "version": "23.2.3" }

// @filename: index.ts
import appSettings from "./app.json"
appSettings.version
//           ^?
```
````

:::

Finally, the following code allows importing non-TypeScript content. There is a `.d.ts` file which globally says 'md files are OK to import' and 'the module "react" exists, but don't worry about the details'.

Then for a user, they only see the imports and exports inside `index.tsx`.

::: code-group

```ts twoslash [output]
// @filename: ambient.d.ts
declare module '*.mdx' {
    export default any
}
declare module "react"

// @filename: MultiFileDocs.mdx
## Hello world

// @filename: index.tsx
// ---cut---
import React from "react"
import MultiFileDocs from "./MultiFileDocs.mdx"

export default () => <MultiFileDocs/>
```

````md [markdown]
```ts twoslash
// @filename: ambient.d.ts
declare module '*.mdx' {
    export default any
}
declare module "react"

// @filename: MultiFileDocs.mdx
## Hello world

// @filename: index.tsx
// ---cut---
import React from "react"
import MultiFileDocs from "./MultiFileDocs.mdx"

export default () => <MultiFileDocs/>
```
````

:::
