<template>
  <div class="search-form">
    <el-form inline :label-width="labelWidth">
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
        <el-input v-else :type="item.type" v-model="form[item.prop]"></el-input>
      </el-form-item>

      <!-- 插入表单项 -->
      <slot name="form-item"></slot>

      <el-form-item v-if="_showButton">
        <el-button @click="handleSearch">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
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
    },
    /*
     * 是否显示按钮
     * 默认会根据formItems的长度来判断
     * 如果通过插槽的形式传入表单项则要设置为true
     * */
    showButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _showButton() {
      return this.formItems.length > 0 || this.showButton
    }
  },
  methods: {
    handleSearch() {
      // 搜索按钮点击时触发
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
  width: 100%;
  padding: 10px 0;
  border: $--border-primary;
  background: $--bg-color-panel;
  border-radius: 4px;
  margin-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    right: 40px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: $--bg-color-panel;
    border-right: $--border-primary;
    border-bottom: $--border-primary;
  }
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
