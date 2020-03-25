<template>
  <div class="breadcrumbs">
    <span class="breadcrumb">面包屑</span>
    <el-popover trigger="hover" :content="content">
      <i class="el-icon-info" slot="reference"></i>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data() {
    return {
      content: '这是一段内容,这是一段内容,这是一段内容,这是一段内容。' // 可以在routes.meta里面配置
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  height: 48px;
  line-height: 48px;
  background: $--color-light;
  font-size: 16px;
  .breadcrumb {
    margin: 0 20px;
  }
}
</style>
