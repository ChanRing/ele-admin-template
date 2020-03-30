/**
 * @Description: 表单设计器路由
 * @Author: laicr
 * @Date: 2020-03-30 10:50:11
 * @LastEditors: laicr
 * @LastEditTime: 2020-03-30 10:53:33
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
    component: () => import('@/views/formGenerator/index'),
    meta: {
      title: '表单设计器'
    }
  }
]
