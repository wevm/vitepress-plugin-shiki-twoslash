---
description: 'Remove unnecessary code from your examples.'
title: 'Cutting'
---

# Cutting

Every Twoslash code example needs to be a complete TypeScript program so it can compile. Quite often to make it compile, there is a bunch of code which isn't relevant to the user. This can be extracted out of the code examples via cut comments.

## `---cut---`

Cut works after TypeScript has generated the project and pulled out all the editor information (like identifiers, queries, highlights etc) and then amends all of their offsets and lines to re-fit the smaller output. What your user sees is everything below the `---cut---`.

::: code-group

```ts twoslash [output]
const level: string = 'Danger'
// ---cut---
console.log(level)
```

````md [markdown]
```ts twoslash
const level: string = 'Danger'
// ---cut---
console.log(level)
```
````

:::

Cutting even works across [multiple files](/api/multi-file). This is why `// @filename: [file]` is specifically the only Twoslash command which is not removed, because if it's not relevant it can be `---cut---` away.

::: code-group

```ts twoslash [output]
// @filename: a.ts
export const helloWorld: string = 'Hi'

// @filename: b.ts
// ---cut---
import { helloWorld } from './a'
console.log(helloWorld)
```

````md [markdown]
```ts twoslash
// @filename: a.ts
export const helloWorld: string = 'Hi'

// @filename: b.ts
// ---cut---
import { helloWorld } from './a'
console.log(helloWorld)
```
````

:::

## `---cut-after---`

The sibling to `---cut---`, which trims anything after the sigil:

::: code-group

```tsx twoslash [output]
//@noErrors
const Page = () => (
  // ---cut---
  <Container>
    <ImportantComponent />
  </Container>
  // ---cut-after---
)
```

````md [markdown]
```tsx twoslash
const Page = () => (
  // ---cut---
  <Container>
    <ImportantComponent />
  </Container>
  // ---cut-after---
)
```
````

:::
