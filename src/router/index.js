import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/auth/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@views/auth/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('APP_TOKEN')
  if (token) {
    next()
  } else {
    '/login' === to.fullPath ? next() : next('/login')
  }
})

export default router
