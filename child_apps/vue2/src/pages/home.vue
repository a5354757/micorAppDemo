<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>子应用 -- Vue2.x</h1>
    <button @click="sendMsg">向基座应用发送数据</button>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Vue from "vue";

export default {
  name: "page1",
  data() {
    return {
      version: Vue.version,
    };
  },
  components: {
    HelloWorld,
  },
  mounted() {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 获取基座下发的数据
      const microAppData = window.microApp.getData();
      console.log(microAppData, "microAppData");

      // 因为子应用之间无法直接通信，这里采用全局数据通信
      window.microApp.addGlobalDataListener((data) => {
        console.log("监听全局数据:", data);
      });
    }
  },
  methods: {
    sendMsg() {
      window.microApp.dispatch({ msg: "child-vue2发送的数据" });
    },
  },
};
</script>

<style></style>
