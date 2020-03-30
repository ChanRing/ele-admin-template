/**
 * @Description:流程设计器路由
 * @Author: 志洪
 * @Date: 2020-03-30 10:50:11
 * @LastEditors: 志洪
 * @LastEditTime: 2020-03-30 11:57:23
 */
export default [
  {
    path: '/flow',
    name: 'flow',
    meta: {
      title: '流程设计器模块',
      clickable: false
    }
  },
  {
    path: '/flowGenerator',
    name: 'flowGenerator',
    component: () => import('@/views/flowGenerator/index'),
    meta: {
      title: '流程设计器'
    }
  }
]
