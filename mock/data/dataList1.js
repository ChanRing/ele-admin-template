import Mock from 'mockjs'

const tableData = Mock.mock({
  'data|10': [
    {
      id: '@id',
      date: '@date(yyyy-MM-dd)',
      status: '@boolean',
      name: '@name',
      address: '@county',
      display_time: '@datetime',
      pageviews: '@integer(300, 5000)'
    }
  ]
})

export default [
  {
    url: '/table/get/v1',
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
  },
  {
    url: '/menus/get',
    type: 'get',
    response: () => require('./permision')
  }
]
