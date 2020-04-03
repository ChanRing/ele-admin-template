export default {
  name: 'ColumnRender',
  functional: true,
  props: {
    // 当前表格行
    row: Object,
    // 当前行索引
    index: Number,
    // jsx 渲染函数
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
