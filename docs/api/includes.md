---
description: 'Include hidden TypeScript parts in your code examples.'
title: 'Includes'
---

# Includes

As your documentation grows, you may need a way of re-using code blocks to prevent code duplication. Shiki Twoslash provides a simple includes system.

## Defining a re-usable block

Re-usable code blocks are defined by the `twoslash` language, followed by the `include` keyword and the reference name of your choice.

````md
```twoslash include myBlock
type SomeString = string
```
````

### Incremental steps

Shiki Twoslash also provide the ability to define incremental steps through the definition of re-usable blocks. This means whenever a new step is delimited down the code, it will also include previous steps. These are **not groups**.

- Incremental steps are delimited by `// - [name of the step]`
- They are are named **at the end** of the actual code

````md
```twoslash include myBlockWithSteps
type SomeString = string
// - base
type SomeUser = { name: string; mail?: SomeUserMail }
type SomeUserMail = { content: string; verified: boolean }
// - afterUserDefinitions
type SomeGroup = { name: string; members: SomeUser[] }
// - afterGroupDefinitions
```
````

## Including a whole block

To include a re-usable block, add `// @include: [block name]` in your code block.

```twoslash include myBlock
type SomeString = string
```

::: code-group

```ts twoslash [output]
// @include: myBlock
const a: SomeString = 'string'
```

````md [markdown]
```twoslash include myBlock
type SomeString = string
```

```ts twoslash
// @include: myBlock
const a: SomeString = 'string'
```
````

:::

## Including a block step

To include a re-usable block at a specific step, add `// @include: [block name]-[step name]` in your code block.

```twoslash include myBlockWithSteps
type SomeString = string
// - base
type SomeUser = { name: string; mail?: SomeUserMail }
type SomeUserMail = { content: string; verified: boolean }
// - afterUserDefinitions
type SomeGroup = { name: string; members: SomeUser[] }
// - afterGroupDefinitions
```

::: code-group

```ts twoslash [output]
// @include: myBlockWithSteps-afterUserDefinitions
const mail: SomeUserMail = { content: 'some-email', verified: true }
```

````md [markdown]
```twoslash include myBlockWithSteps
type SomeString = string
// - base
type SomeUser = { name: string; mail?: SomeUserMail }
type SomeUserMail = { content: string; verified: boolean }
// - afterUserDefinitions
type SomeGroup = { name: string; members: SomeUser[] }
// - afterGroupDefinitions
```

```ts twoslash
// @include: myBlockWithSteps-afterUserDefinitions
const mail: SomeUserMail = { content: 'some-email', verified: true }
```
````

:::

## Hiding re-used code

Re-using a lot of TypeScript code can easily bloat your documentation and obstruct the main point of your code block. You can hide re-used code to keep your code blocks clean and concise by [cutting](/api/cutting) right after the `@include` statement.

::: code-group

```ts twoslash [output]
// @include: myBlockWithSteps-afterUserDefinitions
// ---cut---
const mail: SomeUserMail = { content: 'some-email', verified: true }
```

````md [markdown]
```twoslash include myBlockWithSteps
type SomeString = string
// - base
type SomeUser = { name: string; mail?: SomeUserMail }
type SomeUserMail = { content: string; verified: boolean }
// - afterUserDefinitions
type SomeGroup = { name: string; members: SomeUser[] }
// - afterGroupDefinitions
```

```ts twoslash
// @include: myBlockWithSteps-afterUserDefinitions
// ---cut---
const mail: SomeUserMail = { content: 'some-email', verified: true }
```
````

:::
