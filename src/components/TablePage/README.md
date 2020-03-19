# TablePage

## Props

<!-- @vuese:TablePage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|api|表格数据请求的接口|`String` /  `Function`|`false`|-|
|params|表格数据请求的参数|`Object`|`false`|-|
|data|表格数据，如果定义了api属性，则data会被覆盖|`Array`|`false`|-|
|hasIndex|是否有索引列|`Boolean`|`false`|-|
|hasSelection|是否有选择列|`Boolean`|`false`|-|
|subProps|传递给 el-table 的属性集合，具体属性可参考 el-table|`Object`|`false`|-|
|columns|表格列的定义，具体属性可参考 el-table-column|`Array`|`true`|-|
|hasPagination|是否拥有分页组件|`Boolean`|`false`|-|
|paginationAttrs|分页组件属性集合，具体属性可参考 el-pagination|`Object`|`false`|-|
|resolveData|允许在此方法中整理data的内容|`Function`|`false`|data => data|

<!-- @vuese:TablePage:props:end -->


## Events

<!-- @vuese:TablePage:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|select|当选择项发生变化时会触发该事件|-|
|update:data|触发表格数据更新|-|
|update|-|-|

<!-- @vuese:TablePage:events:end -->


## Methods

<!-- @vuese:TablePage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|getTableData|通过请求获取表格数据|-|

<!-- @vuese:TablePage:methods:end -->


