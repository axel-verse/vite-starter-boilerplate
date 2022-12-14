import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VitePluginVueMarkdown from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    VitePluginVueMarkdown(),
  ],
})
