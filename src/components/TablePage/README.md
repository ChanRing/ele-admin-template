# TablePage

## Props

<!-- @vuese:TablePage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|data|表格数据|`Array`|`false`|-|
|subProps|传递给 el-table 的属性集合，具体属性可参考 el-table|`Object`|`false`|-|
|hasIndex|是否有索引列|`Boolean`|`false`|-|
|hasSelection|是否有选择列|`Boolean`|`false`|-|
|columns|表格列的定义，具体属性可参考 el-table-column|`Array`|`true`|-|
|hasPagination|是否拥有分页组件|`Boolean`|`false`|-|
|paginationAttrs|分页组件属性集合，具体属性可参考 el-pagination|`Object`|`false`|-|

<!-- @vuese:TablePage:props:end -->


## Events

<!-- @vuese:TablePage:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|select|当选择项发生变化时会触发该事件|-|

<!-- @vuese:TablePage:events:end -->


## MixIns

<!-- @vuese:TablePage:mixIns:start -->
|MixIn|
|---|
|ColumnRender|

<!-- @vuese:TablePage:mixIns:end -->


