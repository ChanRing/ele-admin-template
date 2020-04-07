# VuePress

::: tip 注意 
在你使用VuePress前，请前往[VuePress中文网](https://www.vuepress.cn/guide/)了解相关知识。
:::

## 目录结构
```bash
.
├── docs
│   ├── .vuepress (可选的)                 # 用于存放全局的配置、组件、静态资源等
│   │   ├── components (可选的)            # 该目录中的 Vue 组件将会被自动注册为全局组件
│   │   ├── theme (可选的)                 # 用于存放本地主题
│   │   │   └── Layout.vue
│   │   ├── public (可选的)                # 静态资源
│   │   ├── styles (可选的)                # 用于存放样式相关的文件
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)    # 存储 HTML 模板文件
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)             # 配置文件的入口文件，也可以是 YML 或 toml
│   │   └── enhanceApp.js (可选的)         # 客户端应用的增强
│   │ 
│   ├── README.md
│   ├── guide                             # 指南类型文档
│   │   └── README.md
│   └── config.md                         # config 文档
│ 
└── package.json
               
```

## 编写文档

关于文档编写这块内容，已经集成了`vuepress-plugin-auto-sidebar` 插件来替我们生成侧边栏的菜单，只需按照目录规范来创建文档就可以自动生成侧边栏了，
而导航栏则需要在 `.vuepress/nav.js` 进行配置。

:::warning 提示
新建Markdown文件需要重启服务
:::

[组件文档编写](../components/README.md)

## 在Markdown中使用vue

所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件，如:

```bash
.
|- .vuepress
    |- components
        |- demo.vue
        |- otherComponent.vue
```