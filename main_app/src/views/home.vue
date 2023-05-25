<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="主应用 - Vite + Vue@3.x" />
    <button @click="sendMsg('appname-sidebar')">给appname-sidebar发送数据</button>
    <br />
    <button @click="sendGlobalData">发送全局数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import microApp from "@micro-zoe/micro-app";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
    sendMsg(name:string) {
      microApp.setData(name, { msg: "基座发送的新数据" });
    },
    sendGlobalData() {
      microApp.setGlobalData({msg: '基座发送的全局数据'})
    }
  },
});
</script>

<style>
</style>
