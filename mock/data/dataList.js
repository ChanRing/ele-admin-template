/**
 *
 * Created By ChangRon 2020/03/25
 */

import Mock from 'mockjs'

const tableData = Mock.mock({
  'data|10': [
    {
      id: '@id',
      name: '@name',
      sortIndex: '@integer',
      date: '@date(yyyy-MM-dd)',
      creator: '@name',
      address: '@county',
      createTime: '@datetime'
    }
  ]
})

export default [
  {
    url: '/dataList/get',
    type: 'get',
    response: () => {
      return {
        code: 200,
        ...tableData,
        currentPage: 1,
        total: 10,
        pageSize: 10
      }
    }
  }
]
