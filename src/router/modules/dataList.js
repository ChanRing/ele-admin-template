/**
 * 列表模块路由
 * Created By ChangRon 2020/03/20
 */
import GlobalLayout from '@/layout/GlobalLayout'

export default [
  {
    path: '/dataList', // 模块名 or 功能名称
    name: 'dataList',
    component: GlobalLayout,
    meta: {
      title: '列表页',
      clickable: false
    },
    children: [
      {
        path: 'queryTable',
        name: 'queryTable',
        component: () => import('@/views/dataList/queryTable'),
        meta: {
          title: '查询表格'
        }
      },
      {
        path: 'standardTable',
        name: 'standardTable',
        component: () => import('@/views/dataList/standardTable'),
        meta: {
          title: '标准表格'
        }
      }
    ]
  }
]
