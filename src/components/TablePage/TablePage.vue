<template>
  <div class="table-page">
    <el-table ref="table" v-bind="_subProps" @selection-change="handleSelect">
      <el-table-column v-if="hasIndex" type="index" label="#" />
      <el-table-column v-if="hasSelection" type="selection" />
      <!-- 内容跟tableColumns组件一样，但是不可以直接复用，有个问题没解决 -->
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
    // 表格数据请求的接口
    api: [String, Function],
    // 表格数据请求的参数
    params: Object,
    // 表格数据，如果定义了api属性，则data会被覆盖
    data: Array,
    // 是否有索引列
    hasIndex: Boolean,
    // 是否有选择列
    hasSelection: Boolean,
    // 传递给 el-table 的属性集合，具体属性可参考 el-table
    subProps: Object,
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
    paginationAttrs: Object,
    // 允许在此方法中整理data的内容
    resetData: {
      type: Function,
      default: data => data
    }
  },
  computed: {
    // （私有）初始化表格，具体属性可以参考 el-table
    _subProps() {
      return {
        data: this.tableData,
        height: 'calc(100% - 48px)',
        border: true,
        ...this.subProps
      }
    },
    // （私有）分页组件的属性集合
    _paginationAttrs() {
      return {
        ...this.pagination,
        pageSizes: [10, 20, 50, 100],
        background: true,
        layout: 'prev, pager, next, jumper, sizes, total',
        ...this.paginationAttrs
      }
    }
  },
  data() {
    return {
      // 表格展示的数据
      tableData: [],
      // 分页对象
      pagination: {
        total: 0,
        currentPage: 1,
        pageSize: 10
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
    },
    /**
     * @vuese
     * 通过请求获取表格数据
     * @param pageIndex
     * @param pageSize
     * @returns {Promise<void>}
     */
    async getTableData(pageIndex = 1, pageSize) {
      if (this.api) {
        // todo 需要考虑是否支持url方式请求 待商议
        const pager = {
          ...(this.hasPagination ? { pageIndex, pageSize } : {})
        }
        const response = await this.api({ ...this.params, ...pager })

        // todo 基于后台接口返回调整
        // 假定返回 response: { data: [], pageSize: 0, total: 0, pageIndex: 0 }
        const { data, ...pagination } = response
        this.tableData = this.resetData(data)
        this.pagination = pagination

        // 触发表格数据更新
        this.$emit('update:data', this.tableData)
        this.$emit('update', this.tableData)
      }
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        if (!this.api) {
          this.tableData = val
        }
      }
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
