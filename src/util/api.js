// import axios from 'axios'
/* global axios*/
import router from '@/router'

axios.defaults.baseURL = '/api/v1'

axios.defaults.crossDomain = true
axios.defaults.withCredentials = true

axios.interceptors.response.use(
  response => { return response },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace(`/login${router.fullPath && router.fullPath !== '/' ? `?redirect=${router.fullPath}` : ''}`)
          break
      }
    }
    return Promise.reject(error.response.data)
  }
)

let fetchCdnDomain = ()=> { // 获取资源服务器地址
  return axios.get(`/resources/cdn`)
}

// 登录相关
let account = {
  doLogin(params){ // 登录
    return axios.post('/account/login', params)
  },
  getInfo(){ // 获取当前用户相关信息
    return axios.get(`/users`)
  },
  logout(){ // 退出登录
    return axios.post('/account/logout')
  },
}

export{
  fetchCdnDomain,
  account,
}
