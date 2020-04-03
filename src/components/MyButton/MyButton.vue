<template>
  <el-button :type="type">
    <slot>测试</slot>
  </el-button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: String
  }
}
</script>

<style scoped></style>
