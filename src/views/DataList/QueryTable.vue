<template>
  <div class="query-table">
    <search-bar
      :buttons="buttons"
      :form="form"
      :form-items="formItems"
    ></search-bar>
    <!--    <div :style="{ height: height + 'px' }"></div>-->
    <table-page
      ref="table"
      :columns="columns"
      :api="api"
      sortable
      has-index
    ></table-page>
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar'
import TablePage from '../../components/TablePage'
import { getDataList1 } from '../../api'
export default {
  name: 'QueryTable',
  components: { SearchBar, TablePage },
  data() {
    return {
      height: 200,
      api: getDataList1,
      buttons: [
        {
          type: 'primary',
          name: '新增目录',
          callback() {}
        },
        {
          name: '修改目录',
          callback() {}
        },
        {
          name: '移动目录',
          callback() {}
        },
        {
          name: '删除目录',
          callback() {}
        }
      ],
      form: {
        name: '',
        createTime: ''
      },
      formItems: [
        {
          label: '目录名称',
          prop: 'name'
        },
        {
          label: '创建时间',
          prop: 'createTime',
          type: 'daterange'
        }
      ],
      data: [],
      columns: [
        {
          label: '目录ID',
          prop: 'id'
        },
        {
          label: '目录名称',
          prop: 'name'
        },
        {
          label: '排序号',
          prop: 'sortIndex'
        },
        {
          label: '创建人',
          prop: 'creator'
        },
        {
          label: '创建时间',
          prop: 'createTime'
        },
        {
          label: '操作',
          buttons: [
            {
              label: '修改',
              callback(rowData) {
                console.log(JSON.stringify(rowData))
              }
            },
            {
              label: '删除',
              callback() {}
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.$refs.table.getTableData()
    setInterval(() => {
      this.height = Math.random() * 200
    }, 3000)
  }
}
</script>

<style scoped></style>
