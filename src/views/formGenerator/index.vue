<template>
  <el-container class="generator" direction="vertical">
    <global-header>
      <!-- 菜单部分 -->
      <nav-menu :menus="menus" mode="horizontal"></nav-menu>
      <el-divider direction="vertical"></el-divider>
      <!-- 操作栏部分 -->
      <div style="margin-left: 20px">
        <el-button>预览</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </global-header>

    <el-container>
      <!-- 表单样式、控件 -->
      <left-panel></left-panel>

      <!-- 表单画板 -->
      <generator></generator>

      <!-- 属性设置、样式设置、控件列表 -->
      <right-panel></right-panel>
    </el-container>
  </el-container>
</template>

<script>
import GlobalHeader from '@/layout/GlobalHeader'
import LeftPanel from './components/LeftPanel'
import NavMenu from '@/components/NavMenu'
import RightPanel from './components/RightPanel'
import Generator from './components/Generator'

export default {
  name: 'FormGenerator',
  components: { GlobalHeader, NavMenu, LeftPanel, RightPanel, Generator },
  data() {
    return {
      menus: [
        {
          title: '表单信息'
        },
        {
          title: '操作日志'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
