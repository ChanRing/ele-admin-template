/**
 * 表单设计器路由
 * Created By ChangRon 2020/03/26
 */

export default [
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '表单模块',
      clickable: false
    },
    children: []
  },
  {
    path: '/formGenerator',
    name: 'formGenerator',
    component: () => import('@/views/formGenerator'),
    meta: {
      title: '表单设计器',
      showMenu: false
    }
  }
]
