<template>
  <div class="search-bar">
    <!-- 搜索表单部分 -->
    <transition name="el-zoom-in-top">
      <search-form
        v-show="visible"
        :form="form"
        :form-items="formItems"
        @search="handleSearch"
        @reset="handleReset"
      ></search-form>
    </transition>

    <div class="search-main">
      <div class="button-group">
        <el-button
          v-for="(button, b) in _buttons"
          :key="b"
          plain
          v-bind="button"
          @click="button.callback"
          >{{ button.name }}</el-button
        >
        <!-- 是否显示更多操作 -->
        <el-dropdown v-if="moreButtons" style="margin-left: 10px">
          <el-button> 更多操作<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="({ name, callback }, m) in moreButtons"
              @click="callback"
              :key="m"
            >
              {{ name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="links">
        <!-- 右侧links插槽 -->
        <slot name="links"></slot>
        <el-link @click="visible = !visible" :underline="false">
          <span>筛选条件 <i class="el-icon-paperclip"></i></span>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm'

/**
 * todo:
 * props.form、props.formItems
 * 以及@search和@reset
 * 应该还有优化的空间
 */
export default {
  name: 'SearchBar',
  components: { SearchForm },
  props: {
    // 左侧按钮组
    buttons: {
      type: Array,
      default: () => []
    },
    // 最大按钮数目
    maxButton: {
      type: Number,
      default: 3
    },
    // 筛选条件表单对象
    // [参数描述](./SearchForm/src/SearchForm.md)
    form: {
      type: Object,
      required: true
    },
    formItems: Array
  },
  data() {
    return {
      visible: false // 是否显示筛选条件
    }
  },
  computed: {
    _buttons() {
      // 默认显示前3个按钮
      return this.buttons.slice(0, this.maxButton)
    },
    moreButtons() {
      // 超出则划分到更多功能组
      return this.buttons.slice(this.maxButton)
    }
  },
  methods: {
    handleSearch(form) {
      // 传递搜索事件
      // @arg form
      this.$emit('search', form)
    },
    handleReset(form) {
      // 传递重置事件
      // @arg form
      this.$emit('reset', form)
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  padding: 10px;
  .search-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.el-link {
  padding-left: 10px;
  padding-right: 10px;
  border-right: $--border-basic;
  &:last-child {
    border-right: none;
  }
}
</style>
