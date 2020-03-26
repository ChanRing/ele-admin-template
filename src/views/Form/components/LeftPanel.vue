<template>
  <el-tabs stretch>
    <el-tab-pane label="表单样式">
      <filter-tree :data="styles"></filter-tree>
      <div class="more-style-sheet">
        <el-button icon="el-icon-circle-plus-outline">新增样式</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="控件"></el-tab-pane>
  </el-tabs>
</template>

<script>
import FilterTree from '@/components/FilterTree'
export default {
  name: 'LeftPanel',
  components: { FilterTree },
  data() {
    return {
      styles: [
        {
          icon: 'el-icon-document',
          label: '表单样式一'
        },
        {
          icon: 'el-icon-document',
          label: '表单样式二'
        },
        {
          icon: 'el-icon-document',
          label: '表单样式三'
        },
        {
          icon: 'el-icon-document',
          label: '表单样式四'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.el-tabs {
  height: 100%;
  width: 300px;
  background: #fff;
}
.more-style-sheet {
  margin-top: 10px;
  text-align: center;
}
</style>
