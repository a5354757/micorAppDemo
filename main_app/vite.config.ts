import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/main-app', // 主应用路由
  build: {
    outDir: 'dist-mainApp',
  },
  server: {
    host: true,
    port: 9527,
    open: true,
  },
  resolve: {
    alias: {
      // "@micro-zoe/micro-app": path.join(__dirname, '../../../micro-app/lib/index.esm.js'),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^micro-app/.test(tag)
        }
      }
    }),
  ],
})
