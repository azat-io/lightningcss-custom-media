import type { ConfigEnv, UserConfigExport } from 'vite'

import lightningcss from 'vite-plugin-lightningcss'
import { defineConfig } from 'vite'

export default ({ mode }: ConfigEnv): UserConfigExport =>
  defineConfig({
    plugins: [
      lightningcss({
        browserslist: 'last 2 versions',
        drafts: {
          customMedia: true,
        },
      }),
    ],
    server: {
      port: 3000,
    },
  })
