<template>
  <div class="table-columns">
    <template v-for="(column, c) in columns">
      <!-- 递归表格列以兼容多级表头 -->
      <el-table-column v-bind="column" v-if="column.children" :key="c">
        <table-columns :columns="column.children"></table-columns>
      </el-table-column>
      <!-- 操作列渲染 -->
      <template v-else-if="column.buttons">
        <button-column :column="column" :key="c"></button-column>
      </template>
      <!-- jsx 数据列 -->
      <template v-else-if="column.render">
        <j-s-x-column :column="column" :key="c"></j-s-x-column>
      </template>
      <!-- 数据列 -->
      <template v-else>
        <el-table-column v-bind="column" :key="c"></el-table-column>
      </template>
    </template>
  </div>
</template>

<script>
import ButtonColumn from './ButtonColumn'
import JSXColumn from './JSXColumn'

export default {
  name: 'TableColumns',
  components: { ButtonColumn, JSXColumn },
  props: {
    columns: Array
  }
}
</script>

<style scoped></style>
