# 项目开发

## 新增 view

新增完路由之后不要忘记在 `@/views` 文件下
创建对应的文件夹，一般性一个路由对应一个文件，该模块下的功能组件或者方法就建议在本文件夹下创建一个`utils`或`components`文件夹，
各个功能模块维护自己的 utils 或 components 组件。

```bash
|- views
  |- examples
    |- components
    |- utils
    |- index.vue
```

## 新增组件

在全局的 `@/components` 只会写一些全局的组件，如富文本，各种搜索组件，封装的日期组件等等能被公用的组件。
每个页面或者模块特定的业务组件则会写在当前 `views` 下面。如：`@/views/article/components/xxx.vue`。
这样拆分大大减轻了维护成本!

:::tip 生成组件文档
之前，当你创建一个 Vue 组件时，你需要手动的为你的组件编写文档，这包括：

- `props`：你的组件接收哪些 props，以及他们的类型、默认值、是否必须等等
- `events`: 你的组件会提供哪些事件，以及事件回调函数的参数
- `slots`: 你的组件提供哪些 slots，他们的含义是什么
- `methods`: 有时候你的组件也会提供一些允许外部通过组件实例调用的方法
  除了编写上面的文档费事费力之外，在代码迭代的过程中也需要对文档进行调整。

项目中集成了[Vuese](https://github.com/vuese/vuese)，你只需要为你的组件添加注释，即可生成文档！
:::
`vuese.config.js`提供设置生成 vuese 的配置，本项目默认只为`@/components`文件夹内的组件生成文档

## 新增样式

页面的样式和组件是一个道理，全局的 `@/style` 放置一下全局公用的样式，每一个页面的样式就写在当前 `views`下面，请记住加上 scoped 或者命名空间，避免造成全局的样式污染。

```vue
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
.xxx-container {
  /* name scoped */
}
</style>
```

## 新增 api

`@/api` 文件夹下创建本模块对应的 api 服务

## 新增 store

`@/store/modules` 文件夹下创建本模块对应的 store 模块
