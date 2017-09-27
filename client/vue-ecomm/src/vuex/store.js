import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const state = {
  list: []
}
const mutations = {
  setQuestions (state, payload) {
    console.log('data mutation sbg payload goods: ', payload)
    state.questions = payload
  },
}

const actions = {
  getGoods (context, payload) {
    http.get('/goods')
    .then(response => {
      console.log('this is log response all goods : ',  response)
      context.commit('set')
    })
  }
}

const store = new vuex.Store({
  state,
  mutations,
  actions
})

export default store
