---
description: ''
title: 'Imports'
---

# Imports

Use static references to input files.

```ts twoslash
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

::: tip
Compiler flag comments are removed from the output, but the filename is kept around to help people understand that you've made a multi-file code sample.
:::

## Example

Add `// @filename: [name].ts` comments above code to turn them into files.

````md
```ts twoslash
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
````
