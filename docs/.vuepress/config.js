const resolve = dir => require('path').join(__dirname, dir)
const nav = require('./nav')
const packages = require('../../package')

const sortFn = key => (a, b) => {
  // README排在第一位 其他按照首字母顺序排列
  if (a[key] === 'README') return -1
  return a[key][0] > b[key][0] ? 1 : -1
}

module.exports = {
  title: `手摸手开发文档`,
  description: `md-admin基础模板开发文档`,
  base: '/',
  dest: './vuepress',
  serviceWorker: true,
  // 主题配置
  themeConfig: {
    // 顶部导航栏配置
    nav
  },
  plugins: {
    'vuepress-plugin-auto-sidebar': {
      sort: sortFn
    }
  },
  chainWebpack(config) {
    // 设置与vue.config.js公共的别名
    config.resolve.alias.set('@', resolve('../../src')).end()
    config.module.rule('js').use('babel').loader('babel-loader')
  },
  scss: {
    // 参考vue.config.js实现
    // 传入共享的全局变量
    prependData: `
        @import "~@/styles/variables.scss";
        @import "~@/styles/mixins.scss";
    `
  }
}
