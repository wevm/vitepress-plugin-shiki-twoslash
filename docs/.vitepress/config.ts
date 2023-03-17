import { ScriptTarget } from 'typescript'
import { defineConfig } from 'vitepress'
import { withTwoslash } from 'vitepress-plugin-twoslash'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { version } from '../../package.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const theme = { dark: 'vitesse-dark', light: 'vitesse-light' }

export default withTwoslash(
  defineConfig({
    cleanUrls: true,
    description:
      'VitePress Plugin for twoslash',
    head: [
      ['meta', { name: 'theme-color', content: '#729b1a' }],
      [
        'meta',
        {
          name: 'keywords',
          content: 'vitepress, plugin, shiki, twoslash',
        },
      ],
    ],
    lang: 'en-US',
    lastUpdated: true,
    markdown: {
      theme,
    },
    twoslash: {
      addTryButton: true,
      defaultCompilerOptions: { target: ScriptTarget.ESNext },
      themes: [theme.dark, theme.light],
      vfsRoot: path.resolve(__dirname, '../'),
    },
    themeConfig: {
      // algolia: {
      //   appId: '4QMG0RYQG7',
      //   apiKey: 'd2114bafbf2a7fb3c9c2a856d4bc9e38',
      //   indexName: 'abitype',
      // },
      editLink: {
        pattern: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash/edit/main/site/:path',
        text: 'Suggest changes to this page',
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-PRESENT weth, LLC  ',
      },
      nav: [
        { text: 'Guide', link: '/' },
        { text: 'API', link: '/api/types' },
        {
          text: `v${version}`,
          items: [
            {
              text: 'Release Notes ',
              link: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash/releases',
            },
            {
              text: 'Contributing ',
              link: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash/blob/main/.github/CONTRIBUTING.md',
            },
          ],
        },
      ],
      outline: [2, 3],
      sidebar: {
        '/': [
          {
            text: 'Guide',
            items: [
              {
                text: 'Getting Started',
                link: '/',
              },
              {
                text: 'VitePress Support',
                link: '/guide/vitepress-support',
              }
            ],
          },
          {
            text: 'API',
            items: [
              {
                text: 'Queries',
                link: '/api/queries',
              },
              {
                text: 'Imports',
                link: '/api/imports',
              },
              {
                text: 'Cut',
                link: '/api/cut',
              },
              {
                text: 'Completions',
                link: '/api/completions',
              },
              {
                text: 'Errors',
                link: '/api/errors',
              },
              {
                text: 'Logging',
                link: '/api/logging',
              },
              {
                text: 'Annotations',
                link: '/api/annotations',
              },
            ],
          },
          {
            text: 'Config',
            items: [
              {
                text: 'Reference',
                link: '/config',
              },
            ],
          },
        ],
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash' },
      ],
    },
    title: 'VitePress Twoslash',
  })
)

// export default async () => {
//   const shikiTwoslash = await markdownItShikiTwoslashSetup({
//     addTryButton: true,
//     defaultCompilerOptions: { target: ScriptTarget.ESNext },
//     themes: [theme.dark, theme.light],
//     vfsRoot: path.resolve(__dirname, '../'),
//   })
//
//   return defineConfig({
//     cleanUrls: true,
//     description:
//       'VitePress Plugin for twoslash',
//     head: [
//       ['meta', { name: 'theme-color', content: '#729b1a' }],
//       [
//         'meta',
//         {
//           name: 'keywords',
//           content: 'vitepress, plugin, shiki, twoslash',
//         },
//       ],
//       // [
//       //   'script',
//       //   {
//       //     src: 'https://cdn.usefathom.com/script.js',
//       //     ['data-site']: 'WKTTIYCY',
//       //     defer: '',
//       //   },
//       // ],
//     ],
//     lang: 'en-US',
//     lastUpdated: true,
//     markdown: {
//       theme,
//       config(md) {
//         md.use(shikiTwoslash)
//       },
//     },
//     themeConfig: {
//       // algolia: {
//       //   appId: '4QMG0RYQG7',
//       //   apiKey: 'd2114bafbf2a7fb3c9c2a856d4bc9e38',
//       //   indexName: 'abitype',
//       // },
//       editLink: {
//         pattern: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash/edit/main/site/:path',
//         text: 'Suggest changes to this page',
//       },
//       footer: {
//         message: 'Released under the MIT License.',
//         copyright: 'Copyright © 2023-PRESENT weth, LLC  ',
//       },
//       nav: [
//         { text: 'Guide', link: '/' },
//         { text: 'API', link: '/api/types' },
//         {
//           text: `v${version}`,
//           items: [
//             {
//               text: 'Release Notes ',
//               link: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash/releases',
//             },
//             {
//               text: 'Contributing ',
//               link: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash/blob/main/.github/CONTRIBUTING.md',
//             },
//           ],
//         },
//       ],
//       outline: [2, 3],
//       sidebar: {
//         '/': [
//           {
//             text: 'Guide',
//             items: [
//               {
//                 text: 'Getting Started',
//                 link: '/',
//               },
//               {
//                 text: 'VitePress Support',
//                 link: '/guide/vitepress-support',
//               }
//             ],
//           },
//           {
//             text: 'API',
//             items: [
//               {
//                 text: 'Queries',
//                 link: '/api/queries',
//               },
//               {
//                 text: 'Imports',
//                 link: '/api/imports',
//               },
//               {
//                 text: 'Cut',
//                 link: '/api/cut',
//               },
//               {
//                 text: 'Completions',
//                 link: '/api/completions',
//               },
//               {
//                 text: 'Errors',
//                 link: '/api/errors',
//               },
//               {
//                 text: 'Logging',
//                 link: '/api/logging',
//               },
//               {
//                 text: 'Annotations',
//                 link: '/api/annotations',
//               },
//             ],
//           },
//           {
//             text: 'Config',
//             items: [
//               {
//                 text: 'Reference',
//                 link: '/config',
//               },
//             ],
//           },
//         ],
//       },
//       socialLinks: [
//         { icon: 'github', link: 'https://github.com/wagmi-dev/vitepress-plugin-twoslash' },
//       ],
//     },
//     title: 'VitePress Twoslash',
//   })
// }
