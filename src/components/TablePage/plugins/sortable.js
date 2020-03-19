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
    rowDrop({ Sortable }) {
      console.log(Sortable)
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
  },
  mounted() {
    if (this.sortable) {
      this.rowDrop(require('sortablejs'))
    }
  }
}
