import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetching: true,
    collapsed: false,
    user_info: {},
    menus: {
      'SY': false
    }
  },
  mutations: {
    setMenus(state, info){
      state.menus = info
    },
    setUserInfo(state, info){
      state.user_info = info
      state.fetching = false
    },
    setMenuCollapsed(state, info){
      state.collapsed = info
    }
  }
})
