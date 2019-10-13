import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routers: [{
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'main',
      component: ()=>import('@/pages/Main'),
      // mate: {}
      // children: []
    }, {
      path: '/login',
      name: 'login',
      component: ()=>import('@/pages/Login'),
    },
  ]
})

export default router
