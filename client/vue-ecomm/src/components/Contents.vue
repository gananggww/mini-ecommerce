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
                <h3>Rp.{{all.harga}}</h3>
              </div>
            </div>
            <div class="extra content">
              <button @click="addCart(all)" class="ui right floated mini green button" type="button" name="button">add</button>
              <span>
                <i class="user icon"></i>
                 {{all.seller.name}}
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
