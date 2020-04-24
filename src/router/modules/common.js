/*
 * 公共模块的 router
 * */
import GlobalLayout from '@/layout/GlobalLayout'

export default [
  {
    path: '/',
    name: 'layout',
    component: GlobalLayout,
    redirect: 'workbench',
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import(/* webpackChunkName: "common" */ '@/views/workbench'),
        meta: {
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login'),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error/404'),
    meta: {
      title: '抱歉，你的页面找不到了'
    }
  }
]
