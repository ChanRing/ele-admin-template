<!--
 @Desc 列表查询页面
 -->
<template>
  <el-container>
    <!-- 单位目录树 -->
    <filter-tree></filter-tree>

    <!-- 主体内容 -->
    <el-container direction="vertical">
      <search-bar v-bind="{ buttons, form, formItems }"></search-bar>
      <table-page ref="table" v-bind="{ columns, api, hasIndex: true }"></table-page>
    </el-container>

    <!-- 弹窗内容 -->
    <dialog-box v-bind="{ visible, size }">
      <p>hello world</p>
    </dialog-box>
  </el-container>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import TablePage from '@/components/TablePage'
import FilterTree from '@/components/FilterTree'
import DialogBox from '@/components/DialogBox'
import { getDataList1 } from '@/api'
export default {
  name: 'QueryTable',
  components: { SearchBar, TablePage, FilterTree, DialogBox },
  data() {
    return {
      api: getDataList1,
      visible: false,
      size: '',
      buttons: [
        {
          type: 'primary',
          name: '新增目录',
          callback: this.createContent
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
              callback() {
                // console.log(JSON.stringify(rowData))
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
  methods: {
    createContent() {
      this.size = ''
      this.visible = true
    }
  },
  mounted() {
    this.$refs.table.getTableData()
  }
}
</script>

<style scoped lang="scss">
.filter-tree {
  background-color: $--bg-color-container;
}
</style>
