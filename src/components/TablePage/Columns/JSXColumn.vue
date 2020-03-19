<template>
  <el-table-column v-bind="column">
    <template slot-scope="scope">
      <column-render
        :row="scope.row"
        :index="scope.$index"
        :render="column.render"
      ></column-render>
    </template>
  </el-table-column>
</template>

<script>
import ColumnRender from './ColumnRender'
export default {
  name: 'RenderColumn',
  components: { ColumnRender },
  // mixins: [ColumnRender],
  props: {
    column: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
