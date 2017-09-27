// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FBSignInButton from 'vue-facebook-signin-button'
import GSignInButton from 'vue-google-signin-button'
import vuex from 'vuex'
import Store from './vuex/store'

Vue.use(vuex)
Vue.use(GSignInButton)
Vue.use(FBSignInButton)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Store,
  router,
  template: '<App/>',
  components: { App }
})
