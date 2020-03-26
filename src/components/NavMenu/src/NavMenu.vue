<template>
  <el-menu
    :class="[`nav-menu-${mode}`]"
    :default-active="activeIndex"
    :mode="mode"
    :collapse="collapse"
    @select="routerToName"
    v-bind="menuStyle"
  >
    <template v-for="(menu, m) in menus">
      <el-submenu v-if="menu.children" :key="m" :index="menu.name">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{ menu.title }}</span>
        </template>
        <nav-menu :menus="menu.children"></nav-menu>
      </el-submenu>
      <el-menu-item v-else :key="m" :index="menu.name">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import variables from '../../../styles/variables.scss'
export default {
  name: 'NavMenu',
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
      const isDarkMenu = this.theme === 'dark' && this.mode === 'horizontal'
      const textColor = isDarkMenu ? variables.light : ''
      const activeTextColor = isDarkMenu ? '#ffd04b' : ''
      const backgroundColor = isDarkMenu ? variables.dark : ''
      return { textColor, activeTextColor, backgroundColor }
    }
  },
  methods: {
    routerToName(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style scoped lang="scss">
.nav-menu {
  &-vertical {
    height: 100%;
    &:not(.el-menu--collapse) {
      width: 232px;
    }
  }
}
</style>
