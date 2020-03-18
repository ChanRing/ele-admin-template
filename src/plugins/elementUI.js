// 按需加载组件
import {
  Button,
  Table,
  TableColumn,
  Tree,
  Input,
  Pagination,
  Switch,
  Message,
  Loading,
  MessageBox
} from 'element-ui'

const components = [Button, Table, TableColumn, Tree, Input, Pagination, Switch]

export default {
  install: Vue => {
    components.forEach(component => {
      Vue.component(component.name, component)
    })

    console.log(MessageBox.alert)
    Vue.prototype.$loading = Loading.service
    // Vue.prototype.$alert = MessageBox.alert
    // Vue.prototype.$confirm = MessageBox.confirm
    // Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message
  }
}
