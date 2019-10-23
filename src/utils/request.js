import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.course.itcast.cn'
})

export default request
