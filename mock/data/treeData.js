const generateNode = (label, deep) => {
  if (!deep) return []
  return Array(Math.round(Math.random() * 5))
    .fill(null)
    .map((_, i) => ({
      label: label + i,
      id: i,
      children: generateNode('二级节点', false)
    }))
}

const trees = [
  {
    label: '全部',
    id: '',
    children: generateNode('一级节点', true)
  }
]
export default trees
