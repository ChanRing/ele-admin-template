<template>
  <el-table-column v-bind="_column">
    <template v-if="_column.children">
      <table-column
        v-for="(children, ch) in _column.children"
        :column="children"
        :key="ch"
      ></table-column>
    </template>
    <template v-slot:default="slotProps" v-if="isSlotColumn(_column)">
      <template v-if="_column.buttons">
        <button-slot :scope="slotProps" :column="_column"></button-slot>
      </template>
      <template v-if="_column.render">
        <j-s-x-slot :scope="slotProps" :column="_column"></j-s-x-slot>
      </template>
    </template>
  </el-table-column>
</template>

<script>
import ButtonSlot from './ButtonSlot'
import JSXSlot from './JSXSlot'

export default {
  name: 'TableColumn',
  components: { ButtonSlot, JSXSlot },
  props: {
    /**
     * 1. 支持el-table-column的属性
     * 2. 如果出现多级表头的情况下，可以使用children属性
     * 3. 如果出现操作列（button)，可以使用buttons属性
     * 4、如果出现定制化的表格内容，可以使用render（JSX）属性
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
