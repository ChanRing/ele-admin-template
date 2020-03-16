<template>
  <el-table :data="items">
    <el-table-column
      v-for="(column, c) in columns"
      :key="c"
      :label="column.label"
      :prop="column.prop"
    >
    </el-table-column>
  </el-table>
</template>

<script>
import mixins from './mixins'
import { getTableData } from '../../api'

export default {
  name: 'Table1',
  mixins: [mixins],
  data() {
    return {
      items: [],
      total: 0
    }
  },
  methods: {
    async getTableData() {
      const { total, items } = (await getTableData()).data
      this.total = total
      this.items = items
    }
  },
  mounted() {
    this.getTableData()
  }
}
</script>

<style scoped></style>
