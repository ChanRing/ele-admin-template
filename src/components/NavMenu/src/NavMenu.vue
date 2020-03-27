<template>
  <el-menu
    :class="[`nav-menu-${mode}`]"
    :default-active="activeIndex"
    :mode="mode"
    :collapse="collapse"
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
      <el-menu-item
        v-else
        :key="m"
        :index="menu.name"
        @click="handleClick(menu)"
      >
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import variables from '@/styles/variables.scss'
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
    handleClick(route) {
      const { name, target, query } = route
      if (target === '_blank') {
        // 以新窗口的方式打开
        const { href } = this.$router.resolve({ name, query })
        window.open(href, target)
      } else {
        // 处理重复路由报错信息
        // https://github.com/ElemeFE/element/pull/17269
        this.$router.push({ name, query }).catch(() => {})
      }
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
