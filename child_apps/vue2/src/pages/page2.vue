<template>
  <div>
    <h1>child-vue2-page2</h1>
    <div class="child-vite-vue3-test-btn">test</div>
    <img src="../assets/micro-app-logo.png" alt="micro-app-logo" />
  </div>
</template>

<script>

export default {
  name: 'page2',
  data() {
    return {
    }
  }
}
</script>

<style>
.child-vite-vue3-test-btn {
  height: 40px;
  width: 100px;
  background-color: blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  margin: 0 auto;
  user-select: none;
}
</style>
