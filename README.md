# 介绍

> 本项目的定位是中台应用的基础模板，基于vue和element-ui实现。使用的@vue/cli4.x & vue 2.x技术栈

## 启动
```bash
# Project setup
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Run your unit tests
npm run test:unit

# Lints and fixes files
npm run lint

# 查看更多配置
See [Configuration Reference](https://cli.vuejs.org/config/).
```

## 组件文档编写

之前，当你创建一个 Vue 组件时，你需要手动的为你的组件编写文档，这包括：

* `props`：你的组件接收哪些 props，以及他们的类型、默认值、是否必须等等
* `events`: 你的组件会提供哪些事件，以及事件回调函数的参数
* `slots`: 你的组件提供哪些 slots，他们的含义是什么
* `methods`: 有时候你的组件也会提供一些允许外部通过组件实例调用的方法

此项目组件文档生成工具为[vuese](https://vuese.org/zh/cli)
配置文件: [vuese.config.js](./vuese.config.js)

```bash
# 自动生成组件文档
vuese gen
```

## 项目文档编写

目录结构
```bash
docs                # 文档目录
|-- .vuepress       # 文档配置文件
|-- components      # 组件文档
|-- guide           # 项目开发指南
|-- README.md       # 文档首页
```

开始编写文档
```bash
# 开发项目文档
npm run docs:dev

# 打包项目文档
npm run docs:build
```

> 说明
组件文档会通过`vuese gen`指令自动生成到`docs/components`文件夹中
