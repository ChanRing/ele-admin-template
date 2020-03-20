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

const menus = [
  {
    icon: 'el-icon-odometer',
    title: '处理中心',
    name: ''
  },
  {
    icon: 'el-icon-cpu',
    title: '我的工作台',
    name: '',
    children: [
      {
        icon: 'el-icon-news',
        title: '选项1',
        name: ''
      },
      {
        icon: 'el-icon-news',
        title: '选项2',
        name: ''
      },
      {
        icon: 'el-icon-news',
        title: '选项3',
        name: ''
      }
    ]
  },
  {
    icon: 'el-icon-message',
    title: '消息中心',
    name: ''
  },
  {
    icon: 'el-icon-notebook-2',
    title: '待办列表',
    name: ''
  }
]

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
    response: () => ({
      code: 200,
      data: menus
    })
  }
]
