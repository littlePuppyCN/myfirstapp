import request from '@/utils/request'

export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/app/authorizations',
    data: {
      mobile,
      code
    }
  })
}
