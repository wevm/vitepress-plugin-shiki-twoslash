---
description: ''
title: 'Annotations'
---

# Annotations

```ts twoslash
// @errors: 2304
// @strict: false

function compact(arr) {
  if (orr.length > 10) return arr.trim(0, 10)
  return arr
}
// @annotate: left { "arrowRot": "90deg 8px 27px", "textDegree": "3deg", "top": "0rem" } - Discovered a typo, the param is arr, not orr!
```
