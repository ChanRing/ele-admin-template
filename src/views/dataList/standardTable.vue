<template>
  <div class="standard-list">
    <table-page :data="data" :columns="columns"></table-page>
  </div>
</template>

<script>
import TablePage from '@/components/TablePage'
export default {
  name: 'StandardList',
  components: { TablePage },
  data() {
    return {
      data: [{ name: '昌荣', value: new Date(), rate: 2 }],
      columns: [
        {
          label: '头像',
          render: row => <el-avatar>{row.name}</el-avatar>
        },
        {
          label: '日期选择器',
          render: row => (
            <el-date-picker v-model={row.value} type="date" placeholder="选择日期"></el-date-picker>
          )
        },
        {
          label: 'jsx示例',
          render: row => <el-rate v-model={row.rate}></el-rate>
        },
        {
          label: 'button示例',
          buttons: [
            {
              label: '按钮1',
              callback() {}
            },
            {
              label: '按钮2',
              callback() {}
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss"></style>
