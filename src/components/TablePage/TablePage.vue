<template>
  <div class="table-page">
    <el-table ref="table" v-bind="$subProps" @selection-change="handleSelect">
<!--      &lt;!&ndash; 索引 Index列 &ndash;&gt;-->
<!--      <template v-if="hasIndex">-->
<!--        <el-table-column-->
<!--          type="index"-->
<!--          label="序号"-->
<!--          width="55px"-->
<!--        ></el-table-column>-->
<!--      </template>-->
<!--      &lt;!&ndash; 多选 selection列 &ndash;&gt;-->
<!--      <template v-if="hasSelection">-->
<!--        <el-table-column type="selection" width="55px"></el-table-column>-->
<!--      </template>-->
      <!-- 递归表格列以兼容多级表头 -->
      <table-column :columns="columns"></table-column>
    </el-table>
    <el-pagination
      ref="pagination"
      class="pagination"
      v-if="hasPagination"
      v-bind="$paginationAttrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import ColumnRender from './ColumnRender'
import TableColumn from './TableColumn'
export default {
  name: 'TablePage',
  components: { TableColumn },
  mixins: [ColumnRender],
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
    // 返回操作列对象
    buttonColumn() {
      return this.columns.find(_ => _.buttons)
    },
    // （私有）初始化表格操作列，具体属性可以参考 el-table-column
    $buttonAttrs() {
      // eslint-disable-next-line no-unused-vars
      const { buttons, ...attrs } = this.buttonColumn
      return { width: '150px', ...attrs }
    },
    // （私有）初始化表格，具体属性可以参考 el-table
    $subProps() {
      return {
        data: this.data,
        height: 'calc(100% - 48px)',
        border: true,
        ...this.subProps
      }
    },
    // （私有）需要渲染的表格列集合
    $columns() {
      return this.columns.filter(_ => !(_.hide || _.buttons))
    },
    // （私有）分页组件的属性集合
    $paginationAttrs() {
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
