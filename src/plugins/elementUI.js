// 按需加载组件
import { Button, Table, TableColumn } from 'element-ui'

export default {
  install: Vue => {
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
  }
}
