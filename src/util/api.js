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
          console.log('未授权')
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
  fetchUserInfo(){ // 查询用户基本信息
    return axios.get('account/profile')
  }
}

export{
  account
}
