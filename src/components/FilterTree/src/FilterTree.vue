<template>
  <div class="filter-tree-container">
    <el-input :placeholder="placeholder" v-model="filterText"></el-input>
    <el-tree
      ref="tree"
      class="filter-tree"
      :data="treeData"
      v-bind="_subProps"
      :filter-node-method="filterNodeMethod"
    ></el-tree>
  </div>
</template>

<script>
// 树形组件封装
export default {
  name: 'TreePicker',
  props: {
    // 树形数据请求接口
    api: Function,
    // 请求参数
    params: [Object, String],
    // 输入框提示语
    placeholder: {
      type: String,
      default: '输入关键字过滤'
    },
    // 树的数据
    data: {
      type: Array,
      default: () => []
    },
    // 额外的配置，参考el-tree props
    subProps: Object,
    // 是否可以过滤节点
    filterable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      filterText: '',
      treeData: []
    }
  },
  computed: {
    // 传入el-tree的prop属性 由固定属性+自定义属性构成
    _subProps() {
      return {
        // ...固定属性配置,
        ...this.subProps
      }
    }
  },
  watch: {
    filterText(val) {
      // 触发el-tree的filter方法
      this.$refs.tree.filter(val)
    },
    data: {
      immediate: true,
      handler(val) {
        this.treeData = val
      }
    }
  },
  methods: {
    filterNodeMethod(value, data) {
      if (!value) return true
      const { props = {} } = this._subProps
      return data[props.label || 'label'].indexOf(value) !== -1
    },
    async getTreeData() {
      if (this.api) {
        this.treeData = (await this.api(this.params)).data
      }
    }
  }
}
</script>

<style scoped lang="scss">
.filter-tree-container {
  padding: 20px;
}
.filter-tree {
  margin-top: 20px;
}
</style>
