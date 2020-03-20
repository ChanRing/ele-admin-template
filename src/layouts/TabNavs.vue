<template>
  <el-tabs>
    <el-tab-pane
      :key="index"
      v-for="(item, index) in activeTabs"
      :label="item.label"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'TabNavs',
  computed: {
    activeTabs() {
      // 返回当前已打开的页面
      return [
        {
          label: '首页',
          name: 'home'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
