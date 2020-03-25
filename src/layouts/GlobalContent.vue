<template>
  <el-main>
    <!-- 标签页 -->
    <tab-navs v-if="hasNavs"></tab-navs>
    <!--    &lt;!&ndash; 面包屑 &ndash;&gt;-->
    <!--    <breadcrumbs></breadcrumbs>-->
    <router-view :class="pageClass"></router-view>
  </el-main>
</template>

<script>
import TabNavs from './TabNavs'
import { createNamespacedHelpers } from 'vuex'
// import Breadcrumbs from './Breadcrumbs'
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
  /*display: flex;*/
  /*flex-direction: column;*/
  background: $--bg-color-basic;
  .page-block {
    display: flex;
    flex-direction: column;
    /*flex: 1;*/
    /*overflow: hidden;*/
    height: calc(100vh - 100px);
    background: #fff;
    padding: 0 20px;
  }
}
</style>
