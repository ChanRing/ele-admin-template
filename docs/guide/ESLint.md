# ESLint

不管是多人合作还是个人项目，代码规范都很重要的。不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

## 配置项

eslint 的配置文件都在[.eslintrc.js]()中。本项目基本规范是基于 vue 官方的 eslint 规则`@vue/prettier`配置项的。

```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
```

## vscode 配置 ESLint

通过简单的设置，每次保存的时候 vscode 就可以把不符合 eslint 规则的地方标识出来，同时还可以做一些简单的修正，具体安装步骤如下：

1. 安装 eslint 插件

![dc0c28f6058ab5ea746f93313a6ddb0b.png](en-resource://database/600:0)

2. 安装并且配置完 ESLint 之后，我们继续回到 VSCode 中进行拓展设置，依次点击`File` > `Preference` > `Setting` 打开 VSCode 配置文件，添加如下配置

```json
{
  "files.autoSave": "off",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true
}
```

## WebStorm 配置 ESLint

其实只要你更新到较新版本的 WebStorm，IDE 会自动读取项目的配置来应用相关的校验规则和代码风格。

## Git Hooks

具备基本工程素养的同学都会注重编码规范，而代码风格检查是保障代码规范一一致性的重要手段。

### yorkie

本项目是基于@vue/cli3 创建的项目，可以使用内置的 yorkie，它是基于 husky 的。
修改`package.json`，增加配置

```json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": ["vue-cli-service lint", "git add"]
  }
}
```
