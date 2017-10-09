import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
// import router from '../router/index'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const state = {
  allGoods: null,
  postingGood: null,
  goodsById: null,
  goodId: null,
  cartTemp: [],
  transaction: []
}
const getters = {

}

const mutations = {
  setPostGood (state, payload) {
    state.postingGood = payload
  },
  setAll (state, payload) {
    state.allGoods = payload
  },
  setById (state, payload) {
    state.goodsById = payload
  },
  setId (state, payload) {
    state.goodId = payload
  },
  setCartTemp (state, payload) {
    // console.log(payload._id)
    var status = true
    state.cartTemp.forEach(d => {
      // console.log('ini forEach', d)
      if (d._id === payload._id) {
        status = false
        // console.log('ini kondisi if', d._id)
        alert('sudah ada gan')
      }
    })
    if (status === true) {
      state.cartTemp.push(payload)
    }
  },
  setTransTemp (state, payload) {
    // console.log(payload)
    state.transaction = payload
  },
  setRemoveCart (state, payload) {
    state.cartTemp.splice(payload, 1)
  }
}

const actions = {
  postGood (context, payload) {
    http.post('/goods', {
      nama: payload.title,
      deskripsi: payload.desc,
      deskripsi_short: payload.short_desc,
      img: payload.img,
      jumlah: payload.stock
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setPostGood', response.data)
    })
  },
  getAll (context, payload) {
    http.get('/goods/semua/all')
    .then(response => {
      context.commit('setAll', response.data)
    })
  },
  getById (context, payload) {
    http.get('/goods', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setById', response.data)
    })
  },
  getId (context, payload) {
    http.get(`/goods/${payload}`)
    .then(response => {
      context.commit('setId', response.data)
    })
  }
}

const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
