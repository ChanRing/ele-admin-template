<template>
  <el-dialog v-bind="$attrs">
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <el-button
        v-for="(button, b) in buttons"
        :key="b"
        @click="button.callback"
      >
        {{ button.name }}</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogBox',
  props: {
    /** 底部按钮组
     * [{ name: '按钮名称', callback: '回调函数' }]
     **/
    buttons: Array
  }
}
</script>

<style scoped></style>
