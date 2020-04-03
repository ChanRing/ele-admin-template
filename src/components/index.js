import TablePage from '@/components/TablePage'
import NavMenu from '@/components/NavMenu'

const components = [TablePage, NavMenu]

const install = Vue => {
  // 判断是否已经安装了
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))

  // 是否直接引入文件
  if (window && window.vue) {
    install(window.vue)
  }
}

export default {
  install,
  ...components
}
