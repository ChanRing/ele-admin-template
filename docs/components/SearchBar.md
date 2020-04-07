# SearchBar

todo: props.form、props.formItems 以及@search和@reset 应该还有优化的空间

## Props

<!-- @vuese:SearchBar:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|buttons|左侧按钮组|`Array`|`false`|[]|
|maxButton|最大按钮数目|`Number`|`false`|3|
|form|筛选条件表单对象 [参数描述](./SearchForm/src/SearchForm.md)|`Object`|`true`|-|
|formItems|-|`Array`|`false`|-|

<!-- @vuese:SearchBar:props:end -->


## Events

<!-- @vuese:SearchBar:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|search|传递搜索事件|form|
|reset|传递重置事件|form|

<!-- @vuese:SearchBar:events:end -->


## Slots

<!-- @vuese:SearchBar:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|links|右侧links插槽|-|

<!-- @vuese:SearchBar:slots:end -->


