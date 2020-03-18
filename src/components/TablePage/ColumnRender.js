/**
 * el-table-column 定义jsx列
 */
export default {
  components: {
    ColumnRender: {
      functional: true,
      props: {
        row: Object,
        index: Number,
        render: Function
      },
      /**
       * @param {Function} h - 原生创建dom元素的方法
       * @param {Object} ctx - 渲染的节点的this对象
       * @argument 传递参数 row index
       */
      render(h, ctx) {
        const { row, render, index } = ctx.props
        return render(row, index)
      }
    }
  }
}
