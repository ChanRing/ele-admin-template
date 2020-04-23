// 导航栏配置
module.exports = [
  {
    text: '开发指南',
    link: '/guide/'
  },
  {
    text: '表单设计器',
    link: '/formGen/'
  },
  {
    text: '组件文档',
    link: '/components/'
  },
  {
    text: '帮助',
    items: [
      { text: '手摸手教程', link: 'https://panjiachen.github.io/vue-element-admin-site'},
      { text: 'VuePress', link: 'https://www.vuepress.cn'},
      { text: 'ElementUI', link: 'https://element.eleme.cn/#/zh-CN'},
    ].map(item => ({...item, target: '_blank'}))
  },
  {
    text: 'github',
    link: 'https://github.com/ChanRing/md-element-admin-template'
  }
]
