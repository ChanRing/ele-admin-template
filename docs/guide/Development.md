# 项目开发

## 新增view
新增完路由之后不要忘记在 `@/views` 文件下
创建对应的文件夹，一般性一个路由对应一个文件，该模块下的功能组件或者方法就建议在本文件夹下创建一个`utils`或`components`文件夹，
各个功能模块维护自己的utils或components组件。
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

:::tip 
请记住拆分组件最大的好处不是公用而是可维护性！
:::

#新增样式
页面的样式和组件是一个道理，全局的 `@/style` 放置一下全局公用的样式，每一个页面的样式就写在当前 `views`下面，请记住加上scoped 或者命名空间，避免造成全局的样式污染。
```vue
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
.xxx-container{
  /* name scoped */
}
</style>
```

## 新增api
`@/api` 文件夹下创建本模块对应的 api 服务

## 新增store
`@/store/modules` 文件夹下创建本模块对应的 store 模块