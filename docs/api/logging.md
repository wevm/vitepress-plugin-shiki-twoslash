---
description: 'Display formatted output for code examples.'
title: 'Logging'
---

# Logging

When you first see a Twoslash code example with an inline compiler error, you instinctively trust that the compiler error is correct because the design shows that it is not a part of the code sample. The logging tools lets you do that, but abuses the systemic trust because your code is not being evaluated to generate the logs.

This feature is effectively a facade, people will trust your output and it will look better.

## `@log:`, `@warn:`, `@error:`

The names are based on the functions on the `console` object:

::: code-group

```ts twoslash [output]
console.log('Hello log')
// @log: Hello log

console.warn('Hello warn')
// @warn: Hello warn

console.error('Hello error')
// @error: Hello error
```

````md [markdown]
```ts twoslash
console.log('Hello log')
// @log: Hello log

console.warn('Hello warn')
// @warn: Hello warn

console.error('Hello error')
// @error: Hello error
```
````

:::
