<template>
  <div v-if="!menu.hidden">
    <el-submenu v-if="menu.children" :index="menu.name">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{ menu.title }}</span>
      </template>
      <nav-menu-item v-for="(item, i) in menu.children" :key="i" :menu="item"></nav-menu-item>
    </el-submenu>
    <el-menu-item v-else :index="menu.name" @click="handleClick(menu)">
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: {
    menu: Object
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

<style scoped></style>
