<template>
  <div>
    <img alt="Vue logo" :src="logoPath" />
    <HelloWorld msg="子应用 -- Vite+Vue@3.x" />
    <button @click="sendMsg">发送全局数据</button>
  </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
const logoPath = new URL('../assets/logo.png', import.meta.url).href

declare global {
  interface Window {
    eventCenterForAppNameVite: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_APPLICATION__: string
  }
}

const sendMsg = () => {
 if (window.eventCenterForAppNameVite) {
    // 发送全局数据
    window.eventCenterForAppNameVite.setGlobalData({ msg: 'child-vite-vue3 发送的数据' })
  }
 
}
</script>

<style>

</style>
