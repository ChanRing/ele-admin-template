import api from '@/utils/request'

// 测试api
export const helloApi = param => api.post('/api/hello', param)
