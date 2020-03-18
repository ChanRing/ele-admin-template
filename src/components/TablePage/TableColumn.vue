<template>
  <!-- 兼容多级表头和操作列的情况 -->
  <div class="table-column">
    <template v-for="(column, c) in $columns">
      <!-- 多级表头 -->
      <template v-if="column.children && column.children.length">
        <table-column :columns="column.children" :key="c"></table-column>
      </template>
      <template
        v-if="column.type && ['index', 'selection'].includes(column.type)"
      >
        <el-table-column v-bind="column" :key="c"></el-table-column>
      </template>
      <!-- jsx渲染数据列 更深度的定制化 -->
      <template v-else-if="column.render">
        <el-table-column v-bind="column" :key="c">
          <column-render
            slot-scope="scope"
            :row="scope.row"
            :index="scope.$index"
            :render="column.render"
          ></column-render>
        </el-table-column>
      </template>
      <!-- 操作 buttons列 -->
      <template v-else-if="column.buttons && column.buttons.length">
        <el-table-column v-bind="buttonAttrs" :key="c">
          <template slot-scope="scope">
            <el-button
              v-for="(button, b) in buttonColumn.buttons"
              type="text"
              @click="button.callback(scope.row, scope.$index)"
              :key="b"
            >
              {{ button.label }}
            </el-button>
          </template>
        </el-table-column>
      </template>
      <!-- 普通数据列 -->
      <el-table-column v-bind="column" :key="c" v-else></el-table-column>
    </template>
  </div>
</template>

<script>
import ColumnRender from './ColumnRender'

export default {
  name: 'TableColumn',
  mixins: [ColumnRender],
  props: {
    columns: Array
  },
  computed: {
    // 表格需要渲染的列对象
    $columns() {
      return this.columns.filter(_ => !_.hide)
    },
    // 返回操作列对象
    buttonColumn() {
      return this.columns.find(_ => _.buttons)
    },
    // 按钮列属性
    buttonAttrs() {
      // eslint-disable-next-line no-unused-vars
      const { buttons, ...attrs } = this.buttonColumn
      return { width: '150px', ...attrs }
    }
  }
}
</script>

<style scoped></style>
