---
title: 'twoslash'
titleTemplate: false
---

## Plain

```ts
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
```

## twoslash

```ts twoslash {2-4}
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>
```

## imports

```ts twoslash
// @module: esnext
// @filename: maths.ts
export function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}
// @filename: index.ts
import { absolute } from './maths'
const value = absolute(-1)
```

## ^?

```ts twoslash
// @module: esnext
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

## cut

```ts twoslash
// @module: esnext
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

## autocomplete

```ts twoslash
// @noErrors
console.e
//       ^|
```

## error

```ts twoslash
// @errors: 2339
const welcome = 'Tudo bem gente?'
const words = welcome.contains(' ')
```

```ts twoslash
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

// @errors: 2540
todo.title = 'Hello'
```

## unsupported lang

```bash
pnpm add twoslash
```

## code group

## overflow

```ts twoslash
interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})

interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

cats.boris
```

## Logging

```ts twoslash
console.log('Hello world')
// @log: Hello world
```

## Annotations

```ts twoslash
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```
