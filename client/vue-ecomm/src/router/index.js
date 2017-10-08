import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Contents from '@/components/Contents'
import ContentId from '@/components/ContentId'

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
      component: Home,
      children: [{
        path: '',
        component: Contents
      }, {
        path: ':id',
        component: ContentId,
        props: true
      }]
    }, {
      path: '/admin',
      component: Admin
    }
  ]
})
