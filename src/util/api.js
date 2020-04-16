import Vue from 'vue'
import router from '@/router'

let vue = new Vue({router})

import axios from 'axios'
axios.defaults.baseURL = '/api/v1'

axios.defaults.crossDomain = true
axios.defaults.withCredentials = true

axios.interceptors.response.use(
  response => { return response },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('未登录或无效凭证')
          vue.$router.replace('login')
          break
        case 403:
          console.log('未授权访问')
          vue.$router.replace('login')
          break
      }
    }
    return Promise.reject(error.response.data)
  }
)

// 登录相关
let account = {
  doLogin(params){ // 登录
    return axios.post('/account/login', params)
  },
  fetchUserInfo(){ // 获取用户信息
    return axios.get('/account/profile')
  },
}

export{
  account
}
