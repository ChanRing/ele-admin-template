/*
 * 公共模块的 router
 * */

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "common" */ '../views/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "common" */ '../views/About')
  },
  {
    path: '/table',
    name: 'Table',
    component: () =>
      import(/* webpackChunkName: "common" */ '../views/Table/Table')
  },
  {
    path: '/table1',
    name: 'Table1',
    component: () =>
      import(/* webpackChunkName: "common" */ '../views/Table/Table1')
  }
]
