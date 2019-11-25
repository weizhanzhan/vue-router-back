import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
VueRouter.isBack = true
VueRouter.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/pageA'
  },
  {
    path: '/pageA',
    name: 'pageA',
    component: () => import('../views/back/pageA')
  },
  {
    path: '/pageB',
    name: 'pageB',
    component: () => import('../views/back/pageB')
  },
  {
    path: '/pageC',
    name: 'pageC',
    component: () => import('../views/back/pageC')
  },
  {
    path: '/pageD',
    name: 'pageD',
    component: () => import('../views/back/pageD')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
