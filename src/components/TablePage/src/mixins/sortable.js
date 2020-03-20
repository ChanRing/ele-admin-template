/**
 * 拖放排序列表插件
 * 支持可插拔的方式
 */
export default {
  props: {
    // 是否可以拖放排序
    sortable: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: String,
      default: 'id'
    }
  },
  methods: {
    // 行拖拽事件
    rowDrop() {
      this.$nextTick(() => {
        if (!this.Sortable) return
        // 此时找到的元素是要拖拽元素的父容器
        const tbody = document.querySelector('.el-table__body-wrapper tbody')
        this.Sortable.create(tbody, {
          draggable: '.el-table__row',
          onEnd: ({ newIndex, oldIndex }) => {
            const currRow = this.tableData.splice(oldIndex, 1)[0]
            this.tableData.splice(newIndex, 0, currRow)
          }
        })
      })
    }
    // 暂时不处理列排序的情况
  },
  computed: {
    /**
     * 可插拔的方式注册Sortable
     * @returns {Sortable|null}
     * @constructor
     */
    Sortable() {
      if (!this.sortable) return null
      return require('sortablejs').Sortable
    }
  }
}
