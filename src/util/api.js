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
let accountService = {
  doLogin(params){
    return axios.post('/account/login', params)
  }
}

export{
  accountService
}
