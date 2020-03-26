/**
 * 拖放排序列表插件
 * 支持可插拔的方式
 */
import Sortable from 'sortablejs'
export default {
  props: {
    // 是否可以拖放排序
    sortable: {
      type: Boolean,
      default: false
    },
    // 指定行的row-key
    rowKey: {
      type: String,
      default: 'id'
    }
  },
  methods: {
    // 行拖拽事件初始化
    rowDropInit(sortable) {
      if (!sortable) return
      this.$nextTick(() => {
        // 此时找到的元素是要拖拽元素的父容器
        const tbody = document.querySelector('.el-table__body-wrapper tbody')
        Sortable.create(tbody, {
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
  watch: {
    sortable: {
      immediate: true,
      handler: 'rowDropInit'
    }
  }
}
