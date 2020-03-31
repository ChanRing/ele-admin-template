const path = require('path')

const resolveMD = name => `${name}/src/${name}`
module.exports = {
  title: '基于Sass化的协同办公平台', // 设置网站标题
  description: '项目说明',
  dest: '../docs',
  patterns: ['**/*.md'],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件文档', link: '/src/components/' },
      { text: '路由管理', link: '/src/router/' },
      { text: '状态管理', link: '/src/store/' }
    ],
    sidebar: {
      '/src/components/': [
        resolveMD('FilterTree'),
        resolveMD('NavMenu'),
        resolveMD('SearchBar'),
        resolveMD('TablePage')
      ]
    }
  },
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../src')
      }
    }
  },
  scss: {
    // 传入共享的全局变量
    prependData: `
       @import "~@/styles/variables.scss";
       @import "~@/styles/mixins.scss";
    `
  }
}
