/*
 * 公共模块的 router
 * */

export default [
  {
    path: '/',
    name: 'layout',
    component: () => import('../../layouts/GlobalLayout'),
    redirect: 'workbench',
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('../../views/Workbench'),
        meta: {
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/Login'),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../../views/Error/404'),
    meta: {
      title: '抱歉，你的页面找不到了'
    }
  }
]
