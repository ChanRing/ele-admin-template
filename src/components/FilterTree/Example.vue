<template>
  <tree-picker :sub-props="subProps"></tree-picker>
</template>

<script>
import TreePicker from './src/FilterTree'
export default {
  name: 'example',
  data() {
    return {
      subProps: {
        lazy: true,
        load: async (node, resolve) => {
          if (node.level === 0) {
            // 一级节点处理
            resolve(await this.generateTreeNodes(0, node.level))
          } else {
            resolve(await this.generateTreeNodes(node.id, node.level))
          }
        }
      }
    }
  },
  methods: {
    generateTreeNodes(id, level) {
      // 这里是假数据 避免无限循环
      if (level > 5) return Promise.resolve([])

      let treeNodes = []
      const isRoot = level === 0
      const length = isRoot ? 1 : Math.round(Math.random() * 5)
      for (let i = 0; i < length; i++) {
        treeNodes = [...treeNodes, this.generateNode(level)]
      }
      return Promise.resolve(treeNodes)
    },
    /**
     * 生成某节点数据
     * @param level
     * @returns {{label: string, id: string}}
     */
    generateNode(level) {
      const timeStamp = Date.now()
      return {
        label: level === 0 ? '全部' : `节点${level}_${timeStamp}`,
        id: level === 0 ? '' : `${timeStamp}`
      }
    }
  },
  components: { TreePicker }
}
</script>

<style scoped></style>
