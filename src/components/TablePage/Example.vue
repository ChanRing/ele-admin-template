<template>
  <table-page :columns="columns" :data="data" has-index has-selection></table-page>
</template>

<script>
import TablePage from './TablePage'
export default {
  name: 'Example',
  components: { TablePage },
  data() {
    return {
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: Math.random() > 0.5
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: Math.random() > 0.5
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          status: Math.random() > 0.5
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status: Math.random() > 0.5
        }
      ],
      columns: [
        {
          label: '日期',
          prop: 'date',
          children: [
            {
              label: '年份',
              formatter: row => row.date.substring(0, 5)
            },
            {
              label: '月份',
              formatter: row => row.date.substring(6, 2)
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
              nativeOnClick={() => this.toggleRowStatus(row.status)}
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
      console.log(row)
    },
    toggleRowStatus(status) {
      status = !status
      this.$message.success(`当前状态：${status ? '开' : '关'}`)
    }
  }
}
</script>

<style scoped></style>
