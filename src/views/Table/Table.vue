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
import { createNamespacedHelpers } from 'vuex'
import mixins from './mixins'

const { mapState, mapActions } = createNamespacedHelpers('table')
export default {
  name: 'Table',
  mixins: [mixins],
  computed: {
    ...mapState({
      total: 'total',
      items: 'items'
    })
  },
  methods: {
    ...mapActions(['getTableData'])
  },
  mounted() {
    this.getTableData()
  }
}
</script>

<style scoped></style>
