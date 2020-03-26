<template>
  <el-container direction="vertical">
    <global-header></global-header>
    <el-container>
      <template v-if="showMenu">
        <global-aside v-if="direction === 'vertical'"></global-aside>
        <global-content></global-content>
      </template>
      <router-view v-else style="flex-grow: 1"></router-view>
    </el-container>
  </el-container>
</template>

<script>
import GlobalHeader from './GlobalHeader'
import GlobalAside from './GlobalAside'
import GlobalContent from './GlobalContent'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('common')
export default {
  name: 'GlobalLayout',
  components: { GlobalContent, GlobalHeader, GlobalAside },
  computed: {
    ...mapState({
      direction: 'direction'
    })
  },
  methods: {
    ...mapActions(['getMenus'])
  },
  data() {
    return {
      showMenu: this.$route.meta.showMenu !== false
    }
  },
  watch: {
    $route(val) {
      this.showMenu = val.meta.showMenu !== false
    }
  },
  mounted() {
    this.getMenus()
  }
}
</script>

<style scoped lang="scss">
.el-container {
  background: $--bg-color-basic;
}
</style>
