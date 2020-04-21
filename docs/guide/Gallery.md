# 打包更新组件库

市面上目前已有各种各样的UI组件库，比如 Element 和 Antd，他们的强大毋庸置疑。但是我们面临的情况是需求越来越复杂，当它们不能再满足我们需求的时候，这个时候就有必要开发一套属于自己团队的组件库了。

## 一、技术栈
* vue-cli3+: 新版脚手架的库模式，可以让我们很轻松的创建打包一个库
* npm: 我们会将组件库打包发布到npm上面
* webpack: 修改配置需要一点点的webpack知识

## 二、大纲
想要搭建一个组件库，我们必须要先有一个大概的思路
1. 规划目录结构
2. 修改配置以支持目录结构
3. 编写组件
4. 编写示例
5. 单元测试
6. 配置使用库模式打包编译
7. 发布到npm

:::tip
下面是笔者建议的目录结构
:::

```bash
.
...
|-- examples     # 原src目录，改为examples 用作示例展示
|-- packages     # 新增 packages 用于存放组件
    |-- demo
        |-- index.js
        |-- src
            |-- demo.vue
    |-- ...demo
...
.
```

### 配置项目以支持新的目录结构
我们通过上一步的目录改造后，还会遇到两个问题
1. src目录改名为examples，导致项目无法启动
2. 新增packages目录，该目录未加入webpack编译

PS:`@vue/cli3`提供了一个可选的vue.config.js配置文件。如果这个文件存在则会被自动架子啊，所有的对此项目和webpack的配置，都在这个文件中。

*配置项目入口为examples/main.js*
 
```js
module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    } 
  }
}
```

*支持对packages目录的处理，修改配置中chainWebpack选项*
```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("js")
      .include
        .add("/packages/")
        .end()
      .use("babel")
        .loader("babel-loader")
        .tap(options => options) // 修改 babel-loader
  }
}
```

### 发布到npm，方便直接在项目中引用
1. package.json中新增一条编译lib指令

:::tip
在库模式中，Vue是外置的。这意味着即使在代码中引入了Vue，打包后的文件也是不包含Vue的。
:::

下面我们在scripts中新增一条命令 npm run lib

* --target: 构建目标，默认为应用模式，这里需要修改为lib库模式
* --dest: 输出目录，默认为dist，这里我们改为lib
* [entry]: 最后一个参数为入口文件，默认为src/App.vue。在这里我们制定为packages/index.js

```json
{
  "script": {
    "lib": "vue-cli-service build --target lib --dest lib packages/index.js"
  }
}
```

2. 配置package.json文件

最少包含以下内容

```json
{
 "name": "mdfd",
 "version": "0.1.5",
 "description": "这是一个组件库",
 "main": "lib/[entry].umd.min.js",
 "keyword": "keywords",
 "private": false
 }
```

3. 添加`.npmignore`文件，设置忽略发布文件
我们发布到npm中，只有编译后的lib目录、package.json、README.md是必须的。其他文件不需要发布。

```bash
# 结合项目实际情况修改

# 忽略目录
examples/
packages/
public/
 
# 忽略指定文件
vue.config.js
babel.config.js
*.map
```

4. 登录到npm
首先需要到npm上注册一个账号，过程省略。发布到【私有npm】同理

```bash
# 登录npm账号
npm login

# 发布到npm
npm publish
```