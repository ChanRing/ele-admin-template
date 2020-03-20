/*
 * 公共模块的 router
 * */

export default [
  {
    path: '/',
    name: 'Layout',
    component: () =>
      import(/* webpackChunkName: "common" */ '../layouts/GlobalLayout'),
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
