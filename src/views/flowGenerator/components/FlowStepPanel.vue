<!--
 * @Description: 
 * @Author: 志洪
 * @Date: 2020-03-30 18:21:21
 * @LastEditors: 志洪
 * @LastEditTime: 2020-03-30 20:44:31
 -->
<template>
  <div class="flow-step-panel">
    <ul class="panel-box">
      <!-- 节点类型 -->
      <li v-for="item in panelList" :key="item.id">
        <i :class="item.icon"></i>
        <span class="panel-text">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FlowStepPanel',
  data() {
    return {
      panelList: [
        {
          id: 'standardNode',
          icon: 'el-icon-s-order',
          name: '标准节点'
        },
        {
          id: 'subProcess',
          icon: 'el-icon-s-comment',
          name: '子流程'
        },
        {
          id: 'flexibleNode',
          icon: 'el-icon-share',
          name: '柔性节点'
        },
        {
          id: 'gateway',
          icon: 'el-icon-s-operation',
          name: '网关'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.flow-step-panel {
  position: absolute;
  left: 0;
  top: 100px;
  background: $--color-light;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 0px 8px 8px 0px;
  border: 1px solid $--color-border;
  .panel-box {
    padding: 0;
    li {
      height: 48px;
      padding: 20px 16px;
      list-style: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        cursor: move;
        color: $--color-primary;
        background-color: $--bg-color-container;
      }
      i {
        font-size: 20px;
      }
    }
  }
  .panel-text {
    font-size: 12px;
  }
}
</style>
