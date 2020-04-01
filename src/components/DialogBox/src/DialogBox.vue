<template>
  <el-dialog :custom-class="size" v-bind="attrs">
    <slot></slot>
    <slot name="footer">
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="(button, b) in buttons"
          :key="b"
          :type="button.type"
          @click="button.callback"
        >
          {{ button.name }}</el-button
        >
      </div>
    </slot>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogBox',
  props: {
    /**
     * 底部按钮组配置
     * 示例 [{ name: '按钮名称', type: '按钮类型', callback: '按钮事件' }]
     */
    buttons: {
      type: Array
    },
    // visible: {
    //   type: Boolean,
    //   required: true
    // },
    // 弹窗组件尺寸
    // ['sm', 'md', 'lg']
    size: {
      type: String,
      validator(value) {
        return !value || ['sm', 'md', 'lg'].includes(value)
      }
    }
  },
  computed: {
    attrs() {
      return {
        title: '标题',
        ...this.$attrs
      }
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-dialog {
  &.sm {
    width: 420px;
  }
  &.md {
    width: 700px;
  }
  &.lg {
    width: 780px;
  }
}
</style>
