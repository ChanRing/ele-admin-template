# TablePage

1. 基础的使用方式与官方版的保持一致，在此基础上新增了加载数据的方法和分页组件。 2. 你调用组件的时候无需进行分页逻辑处理，仅需向 TablePage 组件传递:api="请求接口"即可

## Props

<!-- @vuese:TablePage:props:start -->

| Name            | Description                                                                                                                                     | Type                | Required | Default      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- | ------------ |
| api             | 表格数据请求的接口                                                                                                                              | `Function`          | `false`  | -            |
| params          | 表格数据请求的参数                                                                                                                              | `Object` / `String` | `false`  | -            |
| data            | 表格数据，如果定义了 api 属性，则 data 会被覆盖                                                                                                 | `Array`             | `false`  | -            |
| hasIndex        | 是否有索引列                                                                                                                                    | `Boolean`           | `false`  | -            |
| hasSelection    | 是否有选择列                                                                                                                                    | `Boolean`           | `false`  | -            |
| columns         | // 传递给 el-table 的属性集合，具体属性可参考 el-table subProps: Object, 表格列的定义，具体属性可参考[tableColumn](./TableColumn/src/README.md) | `Array`             | `true`   | -            |
| hasPagination   | 是否拥有分页组件                                                                                                                                | `Boolean`           | `false`  | -            |
| paginationAttrs | 分页组件属性集合，具体属性可参考 el-pagination                                                                                                  | `Object`            | `false`  | -            |
| resolveData     | 允许在此方法中修改接口返回的 data                                                                                                               | `Function`          | `false`  | data => data |

<!-- @vuese:TablePage:props:end -->

## Events

<!-- @vuese:TablePage:events:start -->

| Event Name  | Description                    | Parameters |
| ----------- | ------------------------------ | ---------- |
| select      | 当选择项发生变化时会触发该事件 | -          |
| update:data | 触发表格数据更新               | -          |
| update      | 触发表格数据更新               | -          |

<!-- @vuese:TablePage:events:end -->

## Methods

<!-- @vuese:TablePage:methods:start -->

| Method       | Description          | Parameters |
| ------------ | -------------------- | ---------- |
| getTableData | 通过请求获取表格数据 | -          |

<!-- @vuese:TablePage:methods:end -->

## MixIns

<!-- @vuese:TablePage:mixIns:start -->

| MixIn    |
| -------- |
| sortable |

<!-- @vuese:TablePage:mixIns:end -->
