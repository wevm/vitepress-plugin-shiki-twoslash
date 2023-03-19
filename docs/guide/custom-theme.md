---
description: 'Customize the Twoslash interface to match your theme.'
title: 'Using a Custom Theme'
---

# Using a Custom Theme

Twoslash uses your `markdown.theme` for syntax highlighting, but there are a few other things you can do to customize the look and feel of your code examples — particulary the generated Twoslash interface.

## CSS Variables

The following CSS variables (and their defaults) are available to style Twoslash interface:

```css
:root {
  --vp-twoslash-c-annotation-fg: var(--vp-c-text-1);

  --vp-twoslash-c-brand: var(--vp-c-brand);

  --vp-twoslash-c-error-bg: var(--vp-c-red-dimm-2);
  --vp-twoslash-c-error-fg: var(--vp-c-text-1);

  --vp-twoslash-c-logger-error-bg: var(--vp-c-red-dimm-2);
  --vp-twoslash-c-logger-error-fg: var(--vp-c-red-dark);
  --vp-twoslash-c-logger-fg: var(--vp-c-text-1);
  --vp-twoslash-c-logger-log-bg: var(--vp-c-mute-dark);
  --vp-twoslash-c-logger-log-fg: var(--vp-c-gray);
  --vp-twoslash-c-logger-warn-bg: var(--vp-c-yellow-dimm-2);
  --vp-twoslash-c-logger-warn-fg: var(--vp-c-yellow-dark);

  --vp-twoslash-c-lsp-bg: var(--vp-c-bg-elv);
  --vp-twoslash-c-lsp-border: var(--vp-c-divider);
  --vp-twoslash-c-lsp-fg: var(--vp-c-text-1);
  --vp-twoslash-c-lsp-underline: var(--vp-c-text-2);
  --vp-twoslash-lsp-shadow: var(--vp-shadow-2);

  --vp-twoslash-c-query-bg: var(--vp-c-mute-darker);
  --vp-twoslash-c-query-fg-2: var(--vp-c-text-2);
  --vp-twoslash-c-query-fg: var(--vp-c-text-1);
}
```

## Dark/Light Theme

If you pass a responsive theme to `markdown.theme`, you probably also want to hide/show the correct theme based on the user's settings.

```ts twoslash
import { defineConfig } from 'vitepress'
// ---cut---
export default defineConfig({
  markdown: {
    theme: { dark: 'vitesse-dark', light: 'vitesse-light' },
  },
})
```

You can do this with the following CSS:

```css
/*
 * Hide block based on theme
 * `[class*='-dark']` matches `'vitesse-dark'`
 * `[class*='-light']` matches `'vitesse-light'`
 */
html:not(.dark) pre.shiki[class*='-dark'] {
  display: none;
}
html:not(.dark) pre.shiki[class*='-light'] {
  display: block;
}
html.dark pre.shiki[class*='-dark'] {
  display: block;
}
html.dark pre.shiki[class*='-light'] {
  display: none;
}
```
