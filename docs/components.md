# 组件封装说明
> 在业务场景中精炼一些常用的组件，将其封装成通用业务组件，可以减少开发时的代码量及后期的可维护性

## 目录结构
下面以组件A为例子，一个组件必须要拥有下面的目录结构
```
|-- ComponentA
|  |-- src
|  |  |-- ComponentA.vue   # 组件A
|  |  |-- README.md        # 组件说明文档 可以由vuese生成
|  |-- index.js            # 导出组件
```
## 组件文档生成工具
本项目由`@vuese/cli`生成组件文档

### 如何使用
```bash
npm install -g @vuese/cli # 全局安装

vuese serve --open # 实时更新文档
vuese gen #打包输出文档

```

### 配置文件说明
在项目根目录创建`vuese.config.js`
```js
module.exports = {
  genType: 'markdown', // 指定输出文档类型
  // include: ['/components/*.vue'], // 包含文件
  markdownFile: 'README',
  markdownDir: '*'
}

```