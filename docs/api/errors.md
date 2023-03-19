---
description: 'Raise compiler errors in your code examples to show incorrect states.'
title: 'Errors'
---

# Errors

Most of the time, you want to avoid errors in your code examples. Strictly speaking, this usually means setting the right compiler flags and environment in each code example.

Sometimes however, you do want to raise a compiler error — to show incorrect states. In those cases, twoslash has a way to mark the compiler errors you expect.

## `@errors: [num]`

All TypeScript compiler errors have a number, this number is relatively arbitrary and can change between TypeScript versions. For our case these numbers are useul in declaring what we expect to see.

You can use `// @errors: [num]` to tell Twoslash that you expect this error to occur. This moves the compiler error message into the code example.

::: code-group

```ts twoslash [output]
// @errors: 2588
const a = '123'
a = 132
```

````md [markdown]
```ts twoslash
// @errors: 2588
const a = '123'
a = 132
```
````

:::

## `@noErrors`

Sometimes you have needs in which a broken TypeScript build is okay. A good example of this is using a [completion query](/api/queries#completions), which requires a broken TypeScript project to work. You can use `// @noErrors` to supress all errors in a code sample, and not have them show inline.

::: code-group

```ts twoslash [output]
// @noErrors
const a = '123'
a = 132
```

````md [markdown]
```ts twoslash
// @noErrors
const a = '123'
a = 132
```
````

:::
