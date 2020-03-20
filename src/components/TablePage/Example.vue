<template>
  <table-page
    ref="table"
    :api="api"
    :columns="columns"
    :data="data"
    has-index
    has-selection
    @select="handleSelect"
  ></table-page>
</template>

<script>
import { getTablePage } from '../../api'
import TablePage from './src/TablePage'
export default {
  name: 'Example',
  components: { TablePage },
  data() {
    return {
      data: [],
      api: getTablePage,
      columns: [
        {
          label: '多级表头',
          children: [
            {
              label: '年份',
              formatter: row => row.date.substr(0, 4)
            },
            {
              label: '月份',
              formatter: row => row.date.substr(5, 2)
            }
          ]
        },
        {
          label: 'formatter: 姓名',
          prop: 'name',
          formatter(row) {
            return `你的姓名是: ${row.name}`
          }
        },
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '通过jsx渲染列',
          render: row => (
            <el-switch
              value={row.status}
              nativeOnClick={() => this.toggleRowStatus(row)}
            ></el-switch>
          )
        },
        {
          label: '操作',
          buttons: [
            {
              label: '按钮',
              callback: this.callback
            },
            {
              label: '按钮2',
              callback: this.callback
            }
          ]
        }
      ]
    }
  },
  methods: {
    callback(row, index) {
      this.$message.success(`你点击了第${index}行`)
    },
    toggleRowStatus(row) {
      row.status = !row.status
      this.$message.success(`当前状态：${row.status ? '开' : '关'}`)
    },
    handleSelect(selection) {
      this.$message.success(`当前勾选了：${selection.length}条数据`)
    }
  },
  mounted() {
    // 请求表格数据
    this.$refs.table.getTableData()
    // this.data = Mock.mock({
    //   'data|10': [
    //     {
    //       id: '@id',
    //       date: '@date(yyyy-MM-dd)',
    //       status: '@boolean',
    //       name: '@name',
    //       address: '@county',
    //       display_time: '@datetime',
    //       pageviews: '@integer(300, 5000)'
    //     }
    //   ]
    // }).data
  }
}
</script>

<style scoped></style>
