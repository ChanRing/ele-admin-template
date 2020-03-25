import NavMenu from './src/NavMenu'

NavMenu.install = Vue => {
  Vue.component(NavMenu.name, NavMenu)
}

export default NavMenu
