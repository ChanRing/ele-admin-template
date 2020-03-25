<template>
  <div class="query-table">
    <search-bar
      :buttons="buttons"
      :form="form"
      :form-items="formItems"
    ></search-bar>
    <table-page
      ref="table"
      :columns="columns"
      :api="api"
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
              callback() {}
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
  }
}
</script>

<style scoped></style>
