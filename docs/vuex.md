# 状态管理
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
```js
// moduleA.js
const moduleA = {
  state: {...},
  mutations: {...},
  actions: {...},
  ...
}
// moduleB.js
const moduleB = {
  namespaced: true,
  state: {...},
  mutations: {...},
  actions: {...},
  ...
}

// store.js
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

## 项目结构
Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
3. 异步逻辑都应该封装到 action 里面。
只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。
对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：
```
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

通过使用`createNamespacedHelpers`创建基于某个命名空间辅助函数。它返回一个对象，对象里面有新的绑定在指定命名空间值上的组件绑定辅助函数：

```vue
<script >
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions } = createNamespacedHelpers('moduleName')
  
  export default {
    computed: {
      ...mapState({...})
    },
    methods: {
      ...mapActions([])
    }
  }


</script>

```