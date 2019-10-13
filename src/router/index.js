
import Vue from 'vue'
import Router from 'vue-router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '*',
    redirect: '/login'
  }, {
    path: '/',
    name: 'main',
    component: () => import('@/pages/Main'),
    children: []
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login')
  }]
})

// router.beforeEach((to, from, next)=> {
//   to.name != 'main' && NProgress.start()
//   next()
// })

// router.afterEach(()=> {
//   NProgress.done()
// })

export default router
