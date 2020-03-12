// 按需加载组件
import { Button } from 'element-ui'

export default {
  install: Vue => {
    Vue.use(Button)
  }
}
