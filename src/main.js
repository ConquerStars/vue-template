/**
 * 以下依赖已使用cdn引入
 * import Vue from 'vue'
 * import Antd from 'ant-design-vue'
 * import 'ant-design-vue/dist/antd.less'
 *
 */

/* global Vue, antd*/
import App from './App.vue'
import '@babel/polyfill'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(antd)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
