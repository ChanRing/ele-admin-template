<template>
  <column-render
    :row="scope.row"
    :index="scope.$index"
    :render="column.render"
  ></column-render>
</template>

<script>
import ColumnRender from './ColumnRender'
export default {
  name: 'RenderColumn',
  components: { ColumnRender },
  props: {
    column: Object,
    scope: Object
  }
}
</script>

<style scoped></style>
