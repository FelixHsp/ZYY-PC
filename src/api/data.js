import axios from '@/libs/api.request'

export const getTableData = () => {
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

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}
