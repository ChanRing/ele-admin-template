import api from '@/utils/request'
// 获取表格数据
export const getTableData = data => api.get('/table/get', data)
export const getTablePage = data => api.get('/table/get/v1', data)

export const getMenus = data => api.get('/menus/get', data)
