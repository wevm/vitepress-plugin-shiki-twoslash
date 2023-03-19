---
description: 'Annotations provide a way to provide outside commentary on your code.'
title: 'Meta Annotations'
---

# Queries

Sometimes the thing you want to say is about the code, annotations provide a way to provide outside commentary on your code.

## `@annotate: [left|right] [overrides] - [text]`

Annotate has a lot more controls than most of the other Twoslash commands, because each use of it probably needs to feel a bit different. Here's an example based on the TypeScript home page, click it to get it running so we can talk about what it does:

::: code-group

```ts twoslash [output]
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```

````md [markdown]
```ts twoslash
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```
````

:::

First up, cool — it adds some text to the left hand side of the code. It features quite a few different options, so lets go through them one by one:

- `left` or `right`: It's currently `left`. It's worth noting the arrow flips also, and `90deg` isn't a great option. Let's look at that next.

- `{ "arrrowRot": "90deg 8px 27px" }` - This JSON object is used to manipulate the annotation, you have 3 controls for arrow positioning and rotation: `degrees x y`. I recommend keeping those in degrees and px, but it's your life. These are overrides from defaults which are okay, but not really something you ever want to ship.

- `{ "textDegree": "3deg" }` - Rotates the text, you probably want something between `-3deg` and `3deg`. Optional, defaults to `0`.

- `{ "top": "0rem" }` - Sets the y coordinates for the annotation relative to the code sample, if it's not included then it becomes `[lineNum]rem`.

What's not included in this sample is `flipped`, which can be used to flip the arrow's orientation. Here's some examples:

A horizontal right example:

::: code-group

```ts twoslash [output]
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: right { "arrowRot": "-50deg -10px -10px", "top": "3rem" } - Discovered a typo, the param is arr, not orr!
```

````md [markdown]
```ts twoslash
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```
````

:::

Upside down arrow pointing at the error, using flipped to re-flip the arrow:

::: code-group

```ts twoslash [output]
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: right { "arrowRot": "190deg 8px 46px", "flipped": false, "textDegree": "-3deg", "top": "-0.7rem" } - Discovered a typo, the param is arr, not orr!
```

````md [markdown]
```ts twoslash
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```
````

:::
