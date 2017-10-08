<template>
  <div class="baru">
    <div class="ui stackable four column grid">
      <div class="one column row">
        <div class="column">
          <div class="ui fluid action input">
            <input type="text" placeholder="Search...">
            <div class="ui button"> <i class="search icon"></i>Search</div>
          </div>
        </div>
      </div>
      <div class="column" v-for="all in all">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img :src="all.img">
            </div>
            <div class="content">
              <div class="header">{{all.nama}}</div>
              <div class="meta">
                <a>Bandung</a>
              </div>
              <div class="description">
                {{all.deskripsi_short}}
              </div>
            </div>
            <div class="extra content">
              <span>
                <i class="user large icon"></i>
                xxx
                <button @click="addCart(all)" class="ui right floated mini blue button" type="button" name="button">add</button>
              </span>
            </div>
            <!-- <router-link :key="all._id" :to="'/'+ all._id"><a class="ui blue button" type="button" name="button">Detail</a></router-link> -->
            <button @click="goId(all._id)" class="ui blue button" type="button" name="button">Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // cartList: this.cart()
    }
  },
  methods: {
    ...mapState([
      'allGoods',
      'cartTemp'
    ]),
    goId (id) {
      this.$router.push(`/${id}`)
    },
    ...mapMutations([
      'setCartTemp'
    ]),
    addCart (all) {
      // console.log(all)
      // console.log(this.cart)
      this.setCartTemp(all)
    }
  },
  computed: {
    all () {
      return this.allGoods()
    },
    cart () {
      return this.cartTemp()
    }
  }
}
</script>

<style>
#baru {
  text-align: center;
}
</style>
