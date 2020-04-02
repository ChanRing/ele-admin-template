<template>
  <el-form class="search-form" inline :label-width="labelWidth">
    <!-- 插入表单项 -->
    <slot name="form-item">
      <el-form-item v-for="(item, i) in formItems" :key="i" :label="item.label">
        <!-- 下拉框 -->
        <el-select v-if="item.type === 'select'" v-model="form[item.prop]">
          <el-option
            v-for="{ label, value } in item.options"
            :label="label"
            :key="value"
            :value="value"
          ></el-option>
        </el-select>

        <!-- 时间选择器 -->
        <el-date-picker
          v-if="isDatePicker(item.type)"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          v-bind="item"
          v-model="form[item.prop]"
        ></el-date-picker>

        <!-- 输入框 -->
        <el-input v-else v-bind="item" v-model="form[item.prop]"></el-input>
      </el-form-item>
    </slot>
    <el-form-item>
      <el-button @click="handleSearch">查询</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { deepClone } from '@/utils/common'

export default {
  name: 'SearchForm',
  props: {
    // 表单项的标签宽度
    labelWidth: {
      type: String,
      default: '80px'
    },
    // 表单项数组
    formItems: {
      type: Array,
      default: () => []
    },
    // 表单对象
    form: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSearch() {
      // 搜索按钮点击时触发
      // @arg 返回的form表单内容
      // 如果是使用插槽的方式的话，form由外部获取
      this.$emit('search', this.form)
    },
    handleReset() {
      const form = deepClone(this.form)
      this.formItems.forEach(item => {
        form[item.prop] = ''
      })
      // 重置按钮点击时触发
      // @arg 返回重置后的form对象
      this.$emit('reset', form)
    },
    isDatePicker(type) {
      const types = [
        'year',
        'month',
        'date',
        'dates',
        'week',
        'datetime',
        'datetimerange',
        'daterange',
        'monthrange'
      ]
      return types.includes(type)
    }
  }
}
</script>

<style scoped lang="scss">
.search-form {
  position: relative;
  padding-top: 10px;
  margin-bottom: 10px;
  background-color: $--bg-color-container;
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    right: 40px;
    bottom: -6px;
    transform: rotate(45deg);
    background-color: $--bg-color-container;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
}
</style>
