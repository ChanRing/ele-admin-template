<template>
  <el-menu
    :class="[`nav-menu-${mode}`]"
    :default-active="activeIndex"
    :mode="mode"
    :collapse="collapse"
    v-bind="themeAttrs"
  >
    <template v-for="(menu, m) in menus">
      <el-submenu v-if="menu.children" :key="m" :index="`${m}`">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{ menu.title }}</span>
        </template>
        <nav-menu :menus="menu.children"></nav-menu>
      </el-submenu>
      <el-menu-item v-else :key="m" :index="`${m}`">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    collapse: Boolean,
    theme: {
      type: String,
      default: 'dark'
    },
    menus: {
      type: Array,
      required: true
    }
  },
  computed: {
    activeIndex() {
      return this.$route.name
    },
    themeAttrs() {
      if (this.theme === 'dark') {
        return {
          backgroundColor: '#545c64',
          textColor: '#fff',
          activeTextColor: '#ffd04b'
        }
      }
      return {}
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
