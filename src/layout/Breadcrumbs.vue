<template>
  <div class="breadcrumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="app-breadcrumb">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span
            v-if="item.meta.clickable === false || index === levelList.length - 1"
            class="no-redirect"
            >{{ item.meta.title }}</span
          >
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    // 指定首页的路由名称
    home: {
      type: Object
    }
  },
  data() {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb() {
      // 匹配那些有meta.title信息的页面
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)

      if (this.home) {
        // 添加返回首页/工作台的快捷按钮
        const hasHomeCrumb = matched[0].path === this.home.path
        if (!hasHomeCrumb) {
          matched = [this.home].concat(matched)
        }
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
    },
    handleLink() {
      // const { redirect, path } = item
      // if (redirect) {
      //   this.$router.push(redirect)
      //   return
      // }
      // this.$router.push(path)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: 'getBreadcrumb'
    }
  }
}
</script>

<style scoped lang="scss">
.app-breadcrumb.el-breadcrumb {
  background: #fff;
  line-height: 48px;
  padding-left: 20px;
}
</style>
