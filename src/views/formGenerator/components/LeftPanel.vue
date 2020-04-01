<template>
  <el-tabs stretch>
    <el-tab-pane label="表单样式">
      <filter-tree :data="styles" :dropdown-items="dropdown" @command="handleCommand"></filter-tree>
      <div class="more-style-sheet">
        <el-button type="primary" plain>新增样式</el-button>
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
      ],
      dropdown: [
        { label: '复制', event: 'copy' },
        { label: '修改', event: 'change' },
        { label: '删除', event: 'delete' }
      ]
    }
  },
  methods: {
    handleCommand(command, data) {
      console.log(command, data)
      this.$message.success(command)
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
.el-tabs__header {
  margin-bottom: 0;
}
.more-style-sheet {
  margin-top: 10px;
  text-align: center;
}
</style>
