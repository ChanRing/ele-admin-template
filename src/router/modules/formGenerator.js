/**
 * 表单设计器路由
 * Created By ChangRon 2020/03/26
 */

export default [
  {
    path: '/form',
    name: 'form',
    component: () => import('../../layouts/GlobalLayout'),
    children: [
      {
        path: 'generator',
        name: 'generator',
        component: () => import('../../views/Form/Generator'),
        meta: {
          title: '表单设计器',
          showMenu: false
        }
      }
    ]
  }
]
