<template>
  <el-container direction="vertical">
    <global-header></global-header>
    <el-container>
      <global-aside v-if="direction === 'vertical'"></global-aside>
      <global-content></global-content>
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
  mounted() {
    this.getMenus()
  }
}
</script>

<style scoped></style>
