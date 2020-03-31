<!--
 * @Description: 表单设计器的业务组件
 * @Author: 志洪
 * @Date: 2020-03-30 11:12:04
 * @LastEditors: 志洪
 * @LastEditTime: 2020-03-30 19:47:51
 -->
<template>
  <el-container class="flow-generator" direction="vertical">
    <!-- 头部容器 -->
    <global-header>
      <!-- 菜单栏目 -->
      <nav-menu :menus="menus" mode="horizontal"></nav-menu>
      <el-divider direction="vertical"></el-divider>
      <!-- 操作部分 -->
      <div style="margin-left: 20px">
        <el-button>另存为新版</el-button>
        <el-button>保存</el-button>
        <el-button type="primary">启用</el-button>
      </div>
    </global-header>
    <!-- 细节操作栏 -->
    <flow-operator></flow-operator>
    <!-- 节点面板 -->
    <flow-step-panel></flow-step-panel>
  </el-container>
</template>
<script>
// 头部
import GlobalHeader from '@/layout/GlobalHeader'
// 菜单
import NavMenu from '@/components/NavMenu'
// 流程设计器的左边面板
import FlowOperator from '@/views/flowGenerator/components/FlowOperator.vue'
// 流程设计器的细节控制
import FlowStepPanel from '@/views/flowGenerator/components/FlowStepPanel.vue'

export default {
  name: 'FlowGenerator',
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
    NavMenu,
    FlowOperator,
    FlowStepPanel
  }
}
</script>
<style scoped lang="scss">
.flow-generator {
  position: relative;
}
</style>
