<template>
  <div class="standard-list">
    <div class="main">
      <div class="item" v-for="item in 99" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StandardList'
}
</script>

<style scoped lang="scss">
.main {
  margin: 20px;
  border: 1px solid #ddd;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 55px);
  grid-gap: 10px;
  .item {
    width: 55px;
    height: 55px;
    background: orange;
    margin-top: 5px;
  }
}
</style>
