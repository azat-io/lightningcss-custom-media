import type { ConfigEnv, UserConfigExport } from 'vite'

import lightningcss from 'vite-plugin-lightningcss'
import { defineConfig } from 'vite'

export default ({ mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    build: {
      target: 'esnext',
      sourcemap: false,
      assetsDir: '',
    },
    css: {
      modules: {
        generateScopedName:
          mode === 'development'
            ? '[local]--[hash:base64:4]'
            : '[hash:base64:4]',
      },
    },
    plugins: [
      lightningcss({
        drafts: {
          customMedia: true,
        },
      }),
    ],
    server: {
      port: 3000,
    },
  })
}
