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
<style scoped>
#app {
  height: 100vh;
  display: flex;
  user-select: none;
}
</style>
