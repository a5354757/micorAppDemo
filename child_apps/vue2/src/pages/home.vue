<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>子应用 -- Vue@{{version}}</h1>
    <button @click="sendMsg">向基座应用发送数据</button>
    <div class="mt-16"><button @click="getData">获取全局数据</button></div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'page1',
  data () {
    return {
      version: Vue.version,
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    sendMsg() {
      window.microApp.dispatch({ msg: "child-vue2发送的数据" });
    },
    getData() {
      const data = window.microApp.getData()
      console.log('获取基座传入数据', data);
    }
  },
}
</script>

<style>
 .mt-16 {
  margin-top: 16px;
 }
</style>
