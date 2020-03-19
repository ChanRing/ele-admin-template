/**
 * JSX渲染列
 */
const ColumnRender = {
  name: 'ColumnRender',
  functional: true,
  props: {
    row: Object,
    index: Number,
    render: Function
  },
  /**
   * @param {Function} h - 原生创建dom元素的方法
   * @param {Object} ctx - 渲染的节点的this对象
   * @returns {*} 传递参数 row index
   */
  render(h, ctx) {
    const { row, render, index } = ctx.props
    return render(row, index)
  }
}

export default ColumnRender
