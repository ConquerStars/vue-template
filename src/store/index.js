import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetching: false,
    user_info: {},
    menu: '菜单1'
  },
  mutations: {
    setUserInfo(state, info){
      state.user_info = info
      state.fetching = true
    },
    setMenu(state, info){
      state.menu = info
    }
  }
})
