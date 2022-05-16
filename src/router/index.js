import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

import Login from '../views/Login'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'
import Universities from '../views/Universities'
import University from '../views/University'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresLogin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration',
    component: Register
  },
  {
    path: '/universities',
    name: 'Universities',
    component: Universities,
  },
  {
    path: '/university/:name/',
    name: 'University',
    props: true,
    component: University,
  },
  {
    path: '*',
    name: 'Error',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

store.dispatch('isUserAuth');

router.beforeEach((to, from, next) => {
  switch(true) {
    case (to.matched.some(record => record.meta.requiresLogin && !store.getters.userAuth)):
      next('/login')
      break;
    case (to.path == '/login' && store.getters.userAuth):
      next('/')
      break;
    case (to.path == '/register' && store.getters.userAuth):
      next('/')
      break;
    default:
      next()
  }
});

export default router