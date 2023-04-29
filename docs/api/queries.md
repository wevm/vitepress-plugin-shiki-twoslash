---
description: 'One of the key features of Twoslash is the ability to use the TypeScript compiler to pull out type information about your code.'
title: 'Queries'
---

# Queries

One of the key features of Twoslash is the ability to use the TypeScript compiler to pull out type information about your code. Twoslash comes with two different ways to query your code: `?^` and `?|`.

## Extract Type `^?`

Using `^?` you can pull out type information about a particular identifier in the line of code above it.

::: code-group

```ts twoslash [output]
const hi = 'Hello'
const msg = hi + ', world'
//    ^?
```

````md [markdown]
```ts twoslash
const hi = 'Hello'
const msg = hi + ', world'
//    ^?
```
````

:::

## Completions `^|`

Using `^|` you can pull out information about a what the auto-complete looks like at a particular location.

::: code-group

```ts twoslash [output]
// @noErrors
console.e
//       ^|
```

````md [markdown]
```ts twoslash
// @noErrors
console.e
//       ^|
```
````

:::

::: info
Note that the compiler flag for [`// @noErrors`](/api/errors#noerrors) is set, because `console.e` is a failing TypeScript code sample but we don't really care about that.
:::
