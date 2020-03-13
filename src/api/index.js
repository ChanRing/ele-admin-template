import api from '@/utils/request'

// 测试api
export const helloApi = data => api.get('/hello/world', data)
