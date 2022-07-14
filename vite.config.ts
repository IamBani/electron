import * as path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@":path.resolve(__dirname,'src')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver({
        resolveIcons:true
      })],
      include: [/\.vue$/, /\.vue\?vue/,/\.tsx$/],
    }),
  ],
  base: './',
  build: {
    sourcemap:true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:'@import "@/assets/scss/index.scss";'
      }
    }
  }
})
