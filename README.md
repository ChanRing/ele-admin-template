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

## 功能
```
- 登录 / 注销

- 多环境发布

- 全局功能
    - 动态侧边栏（支持多级路由嵌套）
    - 本地 mock 数据
    - 自适应收缩侧边栏

- 表格
    - 动态表格
    - 拖拽表格
    - 内联编辑

- 组件
    - 树形选择器
    - 表格组件 

- andmore...
```

## 目录结构
```
|-- docs                       # 说明文档
|── mock                       # 数据mock
|   |── data                   # mock的datajson
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── babel.config.js            # babel-loader 配置
├── jest.config.js             # jest 单元测试配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json  
```