<!--
 * @Description: 表单设计器的业务组件
 * @Author: 志洪
 * @Date: 2020-03-30 11:12:04
 * @LastEditors: 志洪
 * @LastEditTime: 2020-03-30 11:55:46
 -->
<template>
  <el-container class="flow-generator" direction="vertical">
    <!-- 头部容器 -->
    <global-header>
      <!-- 菜单栏目 -->
      <nav-menu :menus="menus" mode="horizontal"></nav-menu>
    </global-header>
  </el-container>
</template>
<script>
// 头部
import GlobalHeader from '@/layout/GlobalHeader'
// 菜单
import NavMenu from '@/components/NavMenu'
export default {
  name: 'flowGenerator',
  data() {
    return {
      menus: [
        {
          title: '表单设置'
        },
        {
          title: '快速配置'
        },
        {
          title: '版本管理'
        },
        {
          title: '辅助功能'
        }
      ]
    }
  },
  components: {
    GlobalHeader,
    NavMenu
  }
}
</script>
<style scoped lang="sass"></style>
