/* 组件的router */

export default [
  {
    path: '/filterTree',
    name: 'FilterTree',
    component: () => import('../components/FilterTree/Example')
  },
  {
    path: '/tablePage',
    name: 'TablePage',
    component: () => import('../components/TablePage/Example')
  }
]
