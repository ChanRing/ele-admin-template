<template>
  <el-menu
    :class="[`nav-menu-${mode}`]"
    :default-active="activeIndex"
    :mode="mode"
    :collapse="collapse"
    v-bind="menuStyle"
  >
    <template v-for="(item, i) in menus">
      <nav-menu-item :menu="item" :key="i"></nav-menu-item>
    </template>
  </el-menu>
</template>

<script>
import variables from '@/styles/variables.scss'
import NavMenuItem from './NavMenuItem'
export default {
  name: 'NavMenu',
  components: { NavMenuItem },
  props: {
    // 菜单栏的模式
    // 横向horizontal 纵向vertical
    mode: {
      type: String,
      default: 'vertical'
    },
    // 是否收起菜单栏
    collapse: Boolean,
    // 菜单栏的主题
    // 深色dark 浅色light
    theme: {
      type: String,
      default: 'dark'
    },
    // 菜单配置项
    menus: {
      type: Array,
      required: true
    }
  },
  computed: {
    activeIndex() {
      return this.$route.name
    },
    menuStyle() {
      const { light, dark } = variables
      const isDarkMenu = this.theme === 'dark' && this.mode === 'horizontal'
      const textColor = isDarkMenu ? light : ''
      const activeTextColor = isDarkMenu ? '#ffd04b' : ''
      const backgroundColor = isDarkMenu ? dark : ''
      return { textColor, activeTextColor, backgroundColor }
    }
  }
}
</script>

<style scoped lang="scss">
.nav-menu {
  &-vertical {
    height: calc(100% - 56px);
    &:not(.el-menu--collapse) {
      width: 300px;
    }
  }
}
</style>
