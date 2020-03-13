import axios from 'axios'
import Qs from 'qs'

// axios 配置
const options = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000,
  transformRequest: [data => Qs.stringify(data)]
  // transformResponse: [data => data]
}

const service = axios.create(options)

// Todo: 添加上cancelToken取消重复请求 - 待测试
let requestList = []

// 请求拦截 处理要发送的参数
service.interceptors.request.use(
  config => {
    // 添加cancelToken
    config.cancelToken = new axios.CancelToken(cancel => {
      // 如果存在相同请求则过滤，这里为[取消后面的请求]
      const currentUrl = `${config.url}?${Qs.stringify(config.data)}`
      if (requestList.includes(currentUrl)) {
        cancel()
      } else {
        requestList.push(currentUrl)
      }
    })
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截 处理响应内容
service.interceptors.response.use(
  response => {
    // 将已完成的请求在队列中去除
    const { config } = response
    const currentUrl = `${config.url}?${Qs.stringify(config.data)}`
    requestList.splice(requestList.findIndex(item => item === currentUrl))
    return response
  },
  error => Promise.reject(error)
)

export default service
