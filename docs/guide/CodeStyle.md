# 风格指南

本项目的风格指南是按照`vue`官方的[风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助你写出更规范和统一的代码。

## Components

所有的`Component`文件都是大驼峰方式命名，但是除了`index.vue`

例子：
```
@/components/Table/index.vue
@/components/Table/TableColumn.vue
@/views/example/components/Button.vue
```

## JS文件
所有的`.js`文件都遵循小驼峰方式命名

例子：
```
@/utils/validate.js
@/components/Markdown/index.js
```

## Views

在`views`文件下，代表路由的`文件夹`和`.vue`文件都是用小驼峰的方式命名，代表组件的`.vue`采用大驼峰的方式。

例子：
```
@/views/login/index.vue
@/views/example/components/Markdown.vue
``` 