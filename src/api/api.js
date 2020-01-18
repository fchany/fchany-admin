import request from '@/utils/request'

// 获取***列表
export function getList() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

