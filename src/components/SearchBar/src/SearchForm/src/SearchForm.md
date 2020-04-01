# SearchForm

## Props

<!-- @vuese:SearchForm:props:start -->

| Name       | Description                                                                                | Type      | Required | Default |
| ---------- | ------------------------------------------------------------------------------------------ | --------- | -------- | ------- |
| labelWidth | 表单项的标签宽度                                                                           | `String`  | `false`  | 80px    |
| formItems  | 表单项数组                                                                                 | `Array`   | `false`  | []      |
| form       | 表单对象                                                                                   | `Object`  | `true`   | -       |
| showButton | 是否显示按钮 默认会根据 formItems 的长度来判断 如果通过插槽的形式传入表单项则要设置为 true | `Boolean` | `false`  | -       |

<!-- @vuese:SearchForm:props:end -->

## Events

<!-- @vuese:SearchForm:events:start -->

| Event Name | Description        | Parameters             |
| ---------- | ------------------ | ---------------------- |
| search     | 搜索按钮点击时触发 | -                      |
| reset      | 重置按钮点击时触发 | 返回重置后的 form 对象 |

<!-- @vuese:SearchForm:events:end -->

## Slots

<!-- @vuese:SearchForm:slots:start -->

| Name      | Description | Default Slot Content |
| --------- | ----------- | -------------------- |
| form-item | 插入表单项  | -                    |

<!-- @vuese:SearchForm:slots:end -->
