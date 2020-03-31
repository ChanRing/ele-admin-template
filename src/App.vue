<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped lang="scss">
#app {
  height: 100vh;
  display: flex;
  user-select: none;
  color: #333;
  background-color: $--bg-color-basic;
}
</style>
