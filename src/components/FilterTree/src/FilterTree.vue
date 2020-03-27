<template>
  <div class="filter-tree">
    <div class="filter-input">
      <el-input :placeholder="placeholder" v-model="filterText"></el-input>
    </div>
    <el-tree
      ref="tree"
      class="filter-tree"
      :data="treeData"
      v-bind="_subProps"
      :filter-node-method="filterNodeMethod"
      :render-content="renderContent"
    ></el-tree>
  </div>
</template>

<script>
// 树形组件封装
export default {
  name: 'TreePicker',
  props: {
    // // 树形数据请求接口
    // api: Function,
    // // 请求参数
    // params: Object,
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
    },
    // 下拉框组菜单对象
    // [{ label: '菜单名', callback: '回调方法，参数为当前节点', event: '事件名，传了callback可以为空' }]
    dropdownItems: {
      type: Array,
      default: () => []
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
    // async getTreeData() {
    //   if (this.api) {
    //     this.treeData = (await this.api(this.params)).data
    //   }
    // },
    renderContent(h, { node, data }) {
      return (
        <div class="render-item">
          <i class={'tree-icon ' + data.icon}></i>
          <span class="el-tree-node__label">{node.label}</span>
          <el-dropdown>
            <i class="el-icon-more"></i>
            <el-dropdown-menu slot="dropdown">
              {this.dropdownItems.map(item => {
                return (
                  <el-dropdown-item
                    nativeOnClick={() => {
                      // 点击下拉菜单时触发
                      this.$emit('command', item.event, data)
                      item.callback && item.callback(data)
                    }}
                  >
                    {item.label}
                  </el-dropdown-item>
                )
              })}
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      )
    }
  }
}
</script>

<style scoped lang="scss">
.filter-input {
  padding-left: 20px;
  padding-right: 20px;
}

::v-deep .el-tree-node__content {
  height: 40px;
}

.filter-tree {
  margin-top: 10px;
  ::v-deep .render-item {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    & .el-tree-node__label {
      width: calc(100% - 2 * 26px);
      @include ellipsis;
    }
    & .el-icon-more {
      transform: rotate(90deg);
      &:hover {
        color: $--color-primary;
      }
    }
  }
}
</style>
