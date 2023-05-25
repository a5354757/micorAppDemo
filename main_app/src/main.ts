import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  lifeCycles: {
    created (e) {
      console.log('全局监听created', e)
    },
    beforemount (e) {
      console.log('beforemount')
    },
    mounted (e) {
      console.log('mounted')
    },
    unmount (e) {
      console.log('unmount')
    },
    error (e) {
      console.log('error')
    }
  },
  globalAssets: {
    js: ['../common/lodash.js'],
    css: ['../common/style.css'],
  },
  plugins: {
    modules: {
      'appname-vite': [
        {
          loader(code) {
            // console.log(code, 'code1111111111');
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
              })
            }
            return code
          }
        }
      ],
    }
  }
})

const app = createApp(App)

app.use(router).mount('#app')
