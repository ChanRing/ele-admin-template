<template>
  <!--  <el-table-column v-bind="_subProps">-->
  <div>
    <el-button
      v-for="(button, b) in column.buttons"
      type="text"
      @click="button.callback(scope.row, scope.$index)"
      :key="b"
      >{{ button.label }}</el-button
    >
  </div>

  <!--  </el-table-column>-->
</template>

<script>
export default {
  name: 'ButtonColumn',
  props: {
    column: Object,
    scope: Object
  },
  computed: {
    _subProps() {
      // eslint-disable-next-line no-unused-vars
      const { buttons, ...attrs } = this.column
      return {
        width: '200px',
        ...attrs
      }
    }
  }
}
</script>

<style scoped></style>
