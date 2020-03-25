<template>
  <div class="search-bar">
    <!-- 搜索表单部分 -->
    <transition name="el-fade-in-linear">
      <search-form
        v-show="showFilters"
        :form="form"
        :form-items="formItems"
        @search="form => $emit('search', form)"
        @reset="form => $emit('reset', form)"
      ></search-form>
    </transition>

    <div class="button-group">
      <el-button
        v-for="(button, b) in _buttons"
        :key="b"
        v-bind="button"
        @click="button.callback"
        >{{ button.name }}</el-button
      >
      <!-- 是否显示更多操作 -->
      <el-dropdown v-if="moreButtons" style="margin-left: 10px">
        <el-button>
          更多操作<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
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

    <el-button type="text" @click="showFilters = !showFilters"
      >筛选条件 <i class="el-icon-paperclip el-icon--right"></i
    ></el-button>
  </div>
</template>

<script>
import SearchForm from './SearchForm'

export default {
  name: 'SearchBar',
  components: { SearchForm },
  props: {
    buttons: {
      type: Array,
      default: () => []
    },
    maxButton: {
      type: Number,
      default: 3
    },
    form: {
      type: Object,
      required: true
    },
    formItems: Array
  },
  data() {
    return {
      showFilters: false // 是否显示筛选条件
    }
  },
  computed: {
    _buttons() {
      return this.buttons.slice(0, this.maxButton)
    },
    moreButtons() {
      return this.buttons.slice(this.maxButton)
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
}
</style>
