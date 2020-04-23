const resolve = dir => require('path').join(__dirname, dir)
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  pages: {
    // 多页面入口
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `/api`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    before: require('./mock/mockServer.js')
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: true
        })
      )
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src')).end()

    // 优化请求数量
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // 去除元素之间的空格
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  },
  css: {
    loaderOptions: {
      scss: {
        // 传入共享的全局变量
        prependData: `
        @import "~@/styles/variables.scss";
        @import "~@/styles/mixins.scss";
        `
      }
    }
  }
}
