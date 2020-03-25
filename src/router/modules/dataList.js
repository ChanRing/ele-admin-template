/**
 *
 * Created By ChangRon 2020/03/20
 */
export default [
  {
    path: '/dataList', // 模块名 or 功能名称
    name: 'dataList',
    component: () => import('../../layouts/GlobalLayout'),
    children: [
      {
        path: 'queryTable',
        name: 'queryTable',
        component: () => import('../../views/DataList/QueryTable')
      },
      {
        path: 'standardTable',
        name: 'standardTable',
        component: () => import('../../views/DataList/StandardTable')
      }
    ]
  }
]
