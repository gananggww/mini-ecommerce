import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Hello',
      component: Hello
    }, {
      path: '/',
      component: Home
    }, {
      path: '/admin',
      component: Admin
    }
  ]
})
