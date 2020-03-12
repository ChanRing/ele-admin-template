import axios from 'axios'

// axios 配置
const options = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000
}

const service = axios.create(options)

// 请求拦截 处理要发送的参数
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// 响应拦截 处理响应内容
service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default service
