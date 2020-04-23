# 优化手段

本基础模板基于element-ui来开发，内置一些性能优化手段。

## 路由懒加载
当打包构建应用时，JavaScript 包会变得非常大，影响页面加载速度（首屏）。如果我们能把不同路由对应的组件分割成不同的代码块，当路由被访问时才加载对应组件。这样就更加高效了。

结合 Vue 的异步组件和 webpack 的代码分割功能，轻松实现路由组件的懒加载。

```js
const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
```

### 把组件按组分块
有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

### @vue/cli3 方案

本模板是使用@vue/cli3 来构建的，在新版中你只需要在.env.development 环境变量配置文件中设置`VUE_CLI_BABEL_TRANSPILE_MODULES = true`就可以了。
它的实现原理是基于`babel-plugin-dynamic-import-node`来实现的。


## 按需引入组件

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的

首先，安装 babel-plugin-component：

```npm install babel-plugin-component -D```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 启动GZIP压缩

`npm install compression-webpack-plugin`

```js
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
//设置为false以加速生产环境构建
 productionSourceMap: false,
 configureWebpack: {
    plugins: [
    new CompressionPlugin({
        /* [file]被替换为原始资产文件名。
           [path]替换为原始资产的路径。
           [dir]替换为原始资产的目录。
           [name]被替换为原始资产的文件名。
           [ext]替换为原始资产的扩展名。
           [query]被查询替换。*/
        filename: '[path].gz[query]',
        //压缩算法
        algorithm: 'gzip',
        //匹配文件
        test: /\.js$|\.css$|\.html$/,
        //压缩超过此大小的文件,以字节为单位
        threshold: 10240,
        minRatio: 0.8,
        //删除原始文件只保留压缩后的文件
        deleteOriginalAssets: true
      })
    ]
  }
}
```

:::tip
还需要在服务端启动gzip哦！
:::