# VuePress

## 目录结构

Todo: 有待补充

## 在Markdown中使用vue

<test>123</test>

所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件，如:

```bash
.
|- .vuepress
    |- components
        |- demo.vue
        |- otherComponent.vue
```