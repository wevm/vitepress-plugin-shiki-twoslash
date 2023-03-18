---
description: ''
title: 'Cut'
---

# Cut

Snip code to just the bit that matters. The compiler still verifies everything ahead of time.

```ts twoslash
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

## Example

Add a `// ---cut---` comment. Everything before it is snipped.

````md
```ts twoslash
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
````
