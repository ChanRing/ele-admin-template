<template>
  <div>
    <el-button
      v-for="(button, b) in column.buttons"
      type="text"
      @click="button.callback(scope.row, scope.$index)"
      :key="b"
      >{{ button.label }}</el-button
    >
  </div>
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
