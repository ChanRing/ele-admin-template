<template>
  <el-main>
    <!-- 标签页 -->
    <tab-navs v-if="hasNavs"></tab-navs>
    <router-view :class="pageClass"></router-view>
  </el-main>
</template>

<script>
import TabNavs from './TabNavs'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('common')
export default {
  name: 'GlobalContent',
  computed: {
    pageClass() {
      return 'page-block'
    },
    ...mapState({
      hasNavs: 'hasNavs'
    })
  },
  components: { TabNavs }
}
</script>

<style scoped lang="scss">
.el-main {
  background: #f4f7fa;
  padding: 0;
  .page-block {
    padding: 20px;
  }
}
</style>
