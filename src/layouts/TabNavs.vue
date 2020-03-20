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
.tab-navs {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  .toggle-btn {
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border-right: 1px solid #ddd;
  }
  & > *:last-of-type {
    flex-grow: 1;
    width: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  ::v-deep .el-tabs__header {
    margin-bottom: 0;
  }
}
</style>
