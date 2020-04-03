<template>
  <div>
    <el-button
      v-for="(button, b) in column.buttons"
      type="text"
      @click="button.callback && button.callback(scope.row, scope.$index)"
      :key="b"
      >{{ button.label }}</el-button
    >
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    column: Object,
    scope: Object
  }
}
</script>

<style scoped>
.el-button--text {
  padding: 0;
}
</style>
