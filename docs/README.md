---
home: true
actionText: 开发指南 →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2020 present laichangrong@live.cn
---

:::tip 如何项目文档
请确保Node.js版本 >= 8.6
:::
```bash
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```