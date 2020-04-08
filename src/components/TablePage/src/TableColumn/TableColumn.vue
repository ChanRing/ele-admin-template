<template>
  <el-table-column v-bind="_column">
    <template v-if="_column.children">
      <table-column
        v-for="(children, ch) in _column.children"
        :column="children"
        :key="ch"
      ></table-column>
    </template>
    <template v-if="isSlotColumn(_column)" v-slot="scope">
      <template v-if="_column.buttons">
        <button-group :scope="scope" :column="_column"></button-group>
      </template>
      <template v-if="_column.render">
        <column-render
          :row="scope.row"
          :index="scope.$index"
          :render="_column.render"
        ></column-render>
      </template>
    </template>
  </el-table-column>
</template>

<script>
import ButtonGroup from './ButtonGroup'
import ColumnRender from './ColumnRender'

export default {
  name: 'TableColumn',
  components: { ButtonGroup, ColumnRender: ColumnRender },
  props: {
    /**
     * 1. 支持el-table-column的属性
     * 2. 如果出现多级表头的情况下，使用children:Array属性
     * 3. 如果出现操作列（button)，使用buttons:Array属性
     * 4、如果出现定制化的表格内容，使用render:Function属性
     */
    column: {
      type: Object,
      required: true
    }
  },
  computed: {
    _column() {
      return {
        align: 'center',
        ...this.column
      }
    }
  },
  methods: {
    isSlotColumn(column) {
      return column.buttons || column.render
    }
  }
}
</script>

<style scoped></style>
