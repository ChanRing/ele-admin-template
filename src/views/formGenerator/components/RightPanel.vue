<template>
  <el-tabs stretch>
    <el-tab-pane label="属性设置">
      <attributes></attributes>
    </el-tab-pane>
    <el-tab-pane label="样式设置">
      <style-setting></style-setting>
    </el-tab-pane>
    <el-tab-pane label="控件列表">
      <control-list></control-list>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Attributes from './Attributes'
import StyleSetting from './StyleSetting'
import ControlList from './ControlList'
export default {
  name: 'RightPanel',
  components: { ControlList, StyleSetting, Attributes },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.el-tabs {
  height: 100%;
  width: 400px;
  background: #fff;
}
</style>
