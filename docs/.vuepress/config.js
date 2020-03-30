module.exports = {
  title: '模板说明文档', // 设置网站标题
  description: '模板说明',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件文档', link: '/components/'},
      { text: '路由管理', link: '/router'},
      { text: '状态管理', link: '/vuex' }
    ],
    // 侧边栏
    sidebar: {
      // '/baseComponents/': [
      //   {
      //     title: '公共组件',
      //     children: [
      //       'test'
      //     ]
      //   }
      // ],
    }
  },
  markdown: {
    lineNumbers: true
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': require('path').join(__dirname, '../../src')
  //     }
  //   }
  // }
}