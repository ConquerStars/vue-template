import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_info: {},
    cdnDomain: '',
    menus: {},
    roles: {},
  },
  mutations: {
    setUserInfo(state, info){
      state.user_info = info
    },
    setMenus(state, info){
      state.menus = info
    },
    setRoles(state, info){
      state.roles = info
    },
    setCdnDomain(state, info){
      state.cdnDomain = info
    },
    logout(state){
      Object.assign(state, {
        menus: {},
        roles: {},
        user_info: {},
      })
    },
  }
})
