import Element from 'element-ui'
import 'element-ui/packages/theme-chalk/src/index.scss'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Element)
}
