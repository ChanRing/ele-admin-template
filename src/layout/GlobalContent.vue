<template>
  <el-main>
    <!-- 标签页 -->
    <tab-navs v-if="hasNavs"></tab-navs>
    <!-- 面包屑 -->
    <breadcrumbs></breadcrumbs>
    <router-view :class="pageClass"></router-view>
  </el-main>
</template>

<script>
import TabNavs from './TabNavs'
import { createNamespacedHelpers } from 'vuex'
import Breadcrumbs from './Breadcrumbs'
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
  components: { TabNavs, Breadcrumbs }
}
</script>

<style scoped lang="scss">
.el-main {
  padding: 0;
  .page-block {
    height: calc(100% - 48px - 40px);
    display: flex;
    background: #fff;
    /*padding: 0 20px;*/
    margin: 20px;
  }
}
</style>
