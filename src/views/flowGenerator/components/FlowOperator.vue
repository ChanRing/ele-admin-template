<!--
 * @Description: 流程设计器的细节操作，缩放，删除，完整新检查
 * @Author: 志洪
 * @Date: 2020-03-30 18:13:25
 * @LastEditors: 志洪
 * @LastEditTime: 2020-03-30 19:51:43
 -->
<template>
  <div class="flow-operator">
    <span class="operator-text">缩放</span>
    <el-button class="minus" size="mini" icon="el-icon-minus"></el-button>
    <span class="operator-text">{{ sizeScale }}</span>
    <el-button class="plus" size="mini" icon="el-icon-plus"></el-button>
    <el-divider direction="vertical"></el-divider>
    <el-button type="text" icon="el-icon-delete">删除</el-button>
    <el-divider direction="vertical"></el-divider>
    <el-button type="text" icon="el-icon-document-checked"
      >完整新检查</el-button
    >
  </div>
</template>
<script>
export default {
  name: 'FlowOperator',
  data() {
    return {
      sizeScale: '100%'
    }
  }
}
</script>
<style lang="scss" scoped>
.flow-operator {
  position: absolute;
  right: 0;
  top: 60px;
  padding-right: 24px;
  padding-top: 12px;
  .operator-text {
    font-size: 14px;
    padding: 0 10px;
  }
  .minus,
  .plus {
    width: 20px;
    height: 20px;
    padding: 0;
  }
}
</style>
