/*
 * 公共模块的 router
 * */

export default [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layouts/GlobalLayout'),
    redirect: 'workbench',
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('../views/Workbench')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/Error/404')
  }
]
