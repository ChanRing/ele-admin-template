# 路由和侧边栏

## 路由
这里的路由分为两种，`constantRoutes`和`asyncRoutes`.
constantRoutes: 代表那些不需要判断权限的路由，比如登录页、404等通用页面
asyncRoutes: 代表那些需要动态判断权限并且通过addRoutes动态添加的页面

## 路由懒加载
当打包构建应用时，JavaScript包会变得非常大，影响页面加载速度（首屏）。如果我们能把不同路由对应的组件分割成不同的代码块，当路由被访问时才加载对应组件。这样就更加高效了。
结合Vue的异步组件和webpack的代码分割功能，轻松实现路由组件的懒加载
```js
const Foo = () => import('pathto/Foo.vue')
```

### @vue/cli3方案
由于项目是使用@vue/cli3来构建的，在新版中你只需要在.env.development环境变量配置文件中设置`VUE_CLI_BABEL_TRANSPILE_MODULES = true`就可以了。
它的实现原理是基于`babel-plugin-dynamic-import-node`来实现的。

## 路由文件
路由文件按照功能/模块划分，在`router/index.js`中统一导入
```
|-- modules
|  |-- modulesA.js     # 模块A的路由
|  |-- modulesB.js     # 模块B的路由
|-- index.js           # 创建Router
```
### 路由权限控制
这里有两个办法实现，一是通过过滤权限来addRoutes来动态生成路由，二是使用router.beforeEach来拦截没有权限的页面，将其转到404或者403页面。

