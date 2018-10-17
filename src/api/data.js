import axios from '@/libs/api.request'

export const getData = () => {
  return axios.request({
    url: 'http://localhost/zyy/User',
    method: 'get'
  })
}

export const getIllData = () => {
  return axios.request({
    url: 'http://localhost/zyy/User/allills',
    method: 'get'
  })
}
