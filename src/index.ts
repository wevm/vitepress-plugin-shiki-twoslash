import type { TwoslashConfigSettings } from './plugin'
declare module 'vitepress' {
  interface UserConfig {
    twoslash?: TwoslashConfigSettings
  }
}

export { withTwoslash } from './plugin'
export type { TwoslashConfigSettings } from './plugin'
