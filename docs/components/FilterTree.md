# FilterTree

树形组件封装

## Props

<!-- @vuese:FilterTree:props:start -->

| Name          | Description                                                                                                           | Type      | Required | Default        |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | -------- | -------------- |
| placeholder   | 输入框提示语                                                                                                          | `String`  | `false`  | 输入关键字过滤 |
| data          | 树的数据                                                                                                              | `Array`   | `false`  | []             |
| subProps      | 额外的配置，参考 el-tree props                                                                                        | `Object`  | `false`  | -              |
| filterable    | 是否可以过滤节点                                                                                                      | `Boolean` | `false`  | -              |
| dropdownItems | 下拉框组菜单对象 [{ label: '菜单名', callback: '回调方法，参数为当前节点', event: '事件名，传了 callback 可以为空' }] | `Array`   | `false`  | []             |

<!-- @vuese:FilterTree:props:end -->

## Events

<!-- @vuese:FilterTree:events:start -->

| Event Name | Description        | Parameters |
| ---------- | ------------------ | ---------- |
| command    | 点击下拉菜单时触发 | -          |

<!-- @vuese:FilterTree:events:end -->
