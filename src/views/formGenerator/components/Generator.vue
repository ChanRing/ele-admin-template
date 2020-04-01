<template>
  <div class="form-generator">
    <!-- 工具栏 -->
    <div class="dev-tools">
      <template v-for="(item, i) in tools">
        <el-tooltip :content="item.label" :key="i">
          <i v-if="item.icon" :class="['tool-item', item.icon]"></i>
          <small v-else class="tool-item">{{ item.label }}</small>
        </el-tooltip>
        <el-divider v-if="item.split" direction="vertical" :key="-i"></el-divider>
      </template>
    </div>

    <!-- 绘制面板 -->
    <div style="flex-grow: 1;background-color: #fff;margin: 0 20px"></div>
  </div>
</template>

<script>
export default {
  name: 'Generator',
  props: {
    /**
     * 工具栏数组
     * [{
     *   label: '工具名称',
     *   icon: '工具图标，若无则显示工具名称',
     *   callback: 点击回调
     * }]
     */
    // tools: Array
  },
  data() {
    return {
      tools: [
        { label: '撤销', icon: 'el-icon-back' },
        { label: '恢复', icon: 'el-icon-right', split: true },
        { label: '绘制表格' },
        { label: '插入单元格', icon: 'el-icon-folder-add' },
        { label: '合并/取消单元格', icon: 'el-icon-s-operation' },
        { label: '边框颜色', icon: 'el-icon-brush' },
        { label: '边框线条', icon: 'el-icon-s-operation' },
        { label: '边框线', icon: 'el-icon-s-operation' },
        { label: '水平对齐', icon: 'el-icon-s-operation' },
        { label: '垂直对齐', icon: 'el-icon-s-operation' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.form-generator {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  .dev-tools {
    text-align: center;
    line-height: 60px;
    .tool-item {
      height: 42px;
      display: inline-block;
      line-height: 42px;
      padding: 0 12px;
      margin: 0 10px;
      &:hover {
        background-color: $--bg-color-container;
      }
    }
  }
}
</style>
