/**
 * 表单设计器路由
 * Created By ChangRon 2020/03/26
 */

export default [
  {
    path: '/form',
    name: 'form',
    component: () => import('@/layout/GlobalLayout'),
    meta: { title: '表单模块', clickable: false },
    children: [
      {
        path: 'generator',
        name: 'generator',
        component: () => import('@/views/form/generator'),
        meta: {
          title: '表单设计器',
          showMenu: false
        }
      }
    ]
  }
]
