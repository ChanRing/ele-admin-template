# SearchBar

todo: props.form、props.formItems 以及@search 和@reset 应该还有优化的空间

## Props

<!-- @vuese:SearchBar:props:start -->

| Name      | Description | Type     | Required | Default |
| --------- | ----------- | -------- | -------- | ------- |
| buttons   | -           | `Array`  | `false`  | []      |
| maxButton | -           | `Number` | `false`  | 3       |
| form      | -           | `Object` | `true`   | -       |
| formItems | -           | `Array`  | `false`  | -       |

<!-- @vuese:SearchBar:props:end -->

## Events

<!-- @vuese:SearchBar:events:start -->

| Event Name | Description  | Parameters |
| ---------- | ------------ | ---------- |
| search     | 传递搜索事件 | form       |
| reset      | 传递重置事件 | form       |

<!-- @vuese:SearchBar:events:end -->

## Slots

<!-- @vuese:SearchBar:slots:start -->

| Name  | Description     | Default Slot Content |
| ----- | --------------- | -------------------- |
| links | 右侧 links 插槽 | -                    |

<!-- @vuese:SearchBar:slots:end -->
