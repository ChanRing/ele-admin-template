# 服务端交互

## axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
`@/utils/request.js`基于 axios 进行封装，便于统一处理 POST、GET 等请求，已支持以下功能：

- baseURL 设置
- `拦截请求和响应`
- `转换请求数据和响应数据`
- `统一超时处理`
- `取消重复请求（完成/定时策略）`

开发过程中，开发者需要根据实际情况在响应拦截出添加`统一错误处理`

## Mock 和联调

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

在本地会启动一个`mock-server`来模拟数据，线上环境还是继续使用`mockjs`来进行模拟(因为本模板是一个纯前端项目，你也可以自己搭建一个线上 `server` 来提供数据)。不管是本地还是线上所有的数据模拟都是基于 mockjs 生成的，所以只要写一套 mock 数据，就可以在多环境中使用。

该方案的好处是，在保留`mockjs`的优势的同时，解决之前的痛点。由于我们的 `mock` 是完全基于`webpack-dev-serve`来实现的，所以在你启动前端服务的同时，mock-server 就会自动启动，而且这里还通过 `chokidar` 来观察 `mock` 文件夹内容的变化。在发生变化时会清除之前注册的 mock-api 接口，重新动态挂载新的接口，从而支持热更新。有兴趣的可以自己看一下代码`mock-server.js`。由于是一个真正的 server，所以你可以通过控制台中的 network，清楚的知道接口返回的数据结构。并且同时解决了之前 mockjs 会重写 `XMLHttpRequest`对象，导致很多第三方库失效的问题。

本项目的所有请求都是通过封装的 request.js 进行发送的，通过阅读源码可以发现所有的请求都设置了一个 baseURL，而这个 baseURL 又是通过读取`process.env.VUE_APP_BASE_API`这个环境变量来动态设置的，这样方便我们做到不同环境使用不同的 api 地址。

### 移除

如果你不想使用`mock-server`的话只要在`vue.config.js`中移除`dev-server`的`before`Middleware 就可以了。

如果你不需要在生产环境中使用`Mockjs`进行模拟，需要在`main.js`中去除以下代码：

```js
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
```

### 新增

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的路由，对其进行拦截和模拟数据即可

比如说我现在`@/api/article`中添加一个查询文档的接口`fetchArticles`，首先先创建接口：

```js
export const fetchArticles = params => request.post(`/article/${params.id}/fetchArticles`, params)
```

声明完接口之后，我们需要到`mock/data/article.js`，在下面创建一个拦截路由的 mock 接口

```js
export default [
  {
    // url 必须能匹配你的接口路由
    // 也可以通过正则来进行匹配
    url: '/article/[A-Za-z0-9]/fetchArticles',
    type: 'get', // 必须和你接口定义的类型一样
    response: (req, res) => {
      return {
        code: 200,
        data: {
          status: 'success'
        }
      }
    }
  }
]
```

## 修改

如果你在本地模拟的接口后台已经开发完了，你可以删除掉对应的 mock 拦截，切换为真实后端数据。
