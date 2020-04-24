<template>
  <div class="workbench">
    <div class="page-head"></div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card header="日历">
          <el-calendar></el-calendar>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card header="当前进度" :body-style="{ display: 'flex', alignItems: 'center' }">
          <el-progress
            type="dashboard"
            :width="200"
            :percentage="Math.round(Math.random() * 99)"
          ></el-progress>
          <div style="margin-left:50px; flex-grow: 1">
            <el-progress :percentage="Math.round(Math.random() * 99)"></el-progress>
            <el-progress :percentage="Math.round(Math.random() * 99)"></el-progress>
            <el-progress :percentage="Math.round(Math.random() * 99)"></el-progress>
          </div>
        </el-card>
        <el-card style="margin-top: 20px">
          <div slot="header" class="clearfix">
            <span>进行中项目</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <el-card v-for="i in 6" shadow="hover" :key="i">
            <span>任务{{ i }}</span>
            <el-checkbox style="float:right">已完成</el-checkbox>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Workbench'
}
</script>

<style scoped lang="scss">
.workbench {
  display: block !important;
  background-color: unset !important;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
