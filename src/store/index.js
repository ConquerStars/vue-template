import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_info: {}
  },
  mutations: {
    setUserInfo(state, info){
      state.user_info = info
    }
  }
})
