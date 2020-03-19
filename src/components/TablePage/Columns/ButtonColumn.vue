<template>
  <el-table-column v-bind="_subProps">
    <template slot-scope="scope">
      <el-button
        v-for="(button, b) in column.buttons"
        type="text"
        @click="button.callback(scope.row, scope.$index)"
        :key="b"
        >{{ button.label }}</el-button
      >
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'ButtonColumn',
  props: {
    column: {
      type: Object,
      required: true
    }
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
