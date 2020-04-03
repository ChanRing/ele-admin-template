# SearchForm

## Props

<!-- @vuese:SearchForm:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|labelWidth|表单项的标签宽度|`String`|`false`|80px|
|formItems|表单项数组|`Array`|`false`|[]|
|form|表单对象|`Object`|`true`|-|

<!-- @vuese:SearchForm:props:end -->


## Events

<!-- @vuese:SearchForm:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|search|搜索按钮点击时触发 如果是使用插槽的方式的话，form由外部获取|返回的form表单内容|
|reset|重置按钮点击时触发|返回重置后的form对象|

<!-- @vuese:SearchForm:events:end -->


## Slots

<!-- @vuese:SearchForm:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|form-item|插入表单项|-|

<!-- @vuese:SearchForm:slots:end -->


