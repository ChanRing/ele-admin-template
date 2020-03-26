<template>
  <div class="table-page">
    <el-table ref="table" v-bind="_subProps" @selection-change="handleSelect">
      <el-table-column v-if="hasSelection" type="selection" />
      <el-table-column v-if="hasIndex" type="index" label="序号" />
      <table-column
        v-for="(column, c) in columns"
        :column="column"
        :key="c"
      ></table-column>
    </el-table>
    <el-pagination
      ref="pagination"
      v-if="hasPagination"
      v-bind="_paginationAttrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import TableColumn from './TableColumn'
import sortable from './mixins/sortable'

/**
 * 1. 基础的使用方式与官方版的保持一致，在此基础上新增了加载数据的方法和分页组件。
 * 2. 你调用组件的时候无需进行分页逻辑处理，仅需向TablePage组件传递:api="请求接口"即可
 */
export default {
  name: 'TablePage',
  components: { TableColumn },
  mixins: [sortable],
  props: {
    // 表格数据请求的接口
    api: Function,
    // 表格数据请求的参数
    params: [Object, String],
    // 表格数据，如果定义了api属性，则data会被覆盖
    data: Array,
    // 是否有索引列
    hasIndex: Boolean,
    // 是否有选择列
    hasSelection: Boolean,
    // 传递给 el-table 的属性集合，具体属性可参考 el-table
    subProps: Object,
    // 表格列的定义，具体属性可参考[tableColumn](./TableColumn/src/README.md)
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
    // 允许在此方法中修改表格的data
    resolveData: {
      type: Function,
      default: data => data
    }
  },
  computed: {
    // （私有）初始化表格，具体属性可以参考 el-table
    _subProps() {
      return {
        data: this.tableData,
        stripe: true,
        border: true,
        height: 'calc(100% - 48px)',
        ...this.subProps
      }
    },
    // （私有）分页组件的属性集合
    _paginationAttrs() {
      return {
        pageSizes: [10, 20, 50, 100],
        background: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        ...this.pagination,
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
      this.pagination.pageSize = size
      this.pagination.currentPage = 1
      this.getTableData()
    },
    handleCurrentChange(current = 1) {
      this.pagination.currentPage = current
      this.getTableData(current)
    },
    /**
     * @vuese
     * 通过请求获取表格数据
     * @param currentPage
     * @param pageSize
     * @returns {Promise<void>}
     */
    async getTableData(currentPage = 1, pageSize = this.pagination.pageSize) {
      if (this.api) {
        const pager = {
          ...(this.hasPagination ? { currentPage, pageSize } : {})
        }
        const response = await this.api({ ...this.params, ...pager })

        // todo 基于后台接口返回调整
        // 假定返回 response: { data: [], pageSize: 0, total: 0, currentPage: 0 }
        const { data, ...pagination } = response
        this.tableData = this.resolveData(data)
        this.pagination = pagination

        // 触发表格数据更新
        this.$emit('update:data', this.tableData)
        // 触发表格数据更新
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
// @vuese
// https://blog.csdn.net/ohradiance/article/details/78980242
// 解决el-table在flex布局下的高度继承问题
.table-page {
  position: relative;
  flex-grow: 1;
  .el-table,
  .el-pagination {
    position: absolute;
    width: 100%;
  }
}
.el-pagination {
  padding: 10px;
  text-align: center;
  bottom: 0;
}
</style>
