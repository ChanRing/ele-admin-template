<template>
  <div class="table-page">
    <el-table ref="table" v-bind="_subProps" @selection-change="handleSelect">
      <el-table-column v-if="hasIndex" type="index" label="#" />
      <el-table-column v-if="hasSelection" type="selection" />
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
    </el-table>
    <el-pagination
      ref="pagination"
      class="pagination"
      v-if="hasPagination"
      v-bind="_paginationAttrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import ButtonColumn from './Columns/ButtonColumn'
import JSXColumn from './Columns/JSXColumn'
import TableColumns from './Columns/TableColumns'
export default {
  name: 'TablePage',
  components: { TableColumns, JSXColumn, ButtonColumn },
  props: {
    // 表格数据
    data: Array,
    // 传递给 el-table 的属性集合，具体属性可参考 el-table
    subProps: Object,
    // 是否有索引列
    hasIndex: Boolean,
    // 是否有选择列
    hasSelection: Boolean,
    // 表格列的定义，具体属性可参考 el-table-column
    columns: {
      type: Array,
      required: true
    },
    // 是否拥有分页组件
    hasPagination: {
      type: Boolean,
      default: true
    },
    // 分页组件属性集合，具体属性可参考 el-pagination
    paginationAttrs: Object
  },
  computed: {
    // （私有）初始化表格，具体属性可以参考 el-table
    _subProps() {
      return {
        data: this.data,
        height: 'calc(100% - 48px)',
        border: true,
        ...this.subProps
      }
    },
    // （私有）分页组件的属性集合
    _paginationAttrs() {
      return {
        total: 0, // todo 通过接口返回
        currentPage: 1, // todo 通过接口返回
        pageSizes: [10, 20, 50, 100],
        background: true,
        layout: 'prev, pager, next, jumper, sizes, total',
        ...this.paginationAttrs
      }
    }
  },
  methods: {
    handleSelect(selection) {
      // 当选择项发生变化时会触发该事件
      this.$emit('select', selection)
    },
    handleSizeChange(size) {
      console.log(`每页${size}条`)
      // todo 调用接口更新data、pagination
    },
    handleCurrentChange(current) {
      console.log(`当前页:${current}页`)
      // todo 调用接口更新data、pagination
    }
  }
}
</script>

<style scoped lang="scss">
.table-page {
  height: 100%;
  overflow: hidden;
}
.pagination {
  padding: 10px;
  text-align: center;
}
</style>
