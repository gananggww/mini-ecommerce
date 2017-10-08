<template lang="html">
  <div>
    <Headers></Headers>
    <div class="ui grid container">
      <div class="ui stackable two column grid">
        <div class="two column row">
          <div class="four wide column">
            <div class="ui segment">
              <Cart></Cart>
            </div>
          </div>
          <div class="twelve wide column">
            <div class="ui segment">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Contents from '@/components/Contents'
import Cart from '@/components/Cart'
import {mapActions} from 'vuex'
export default {
  components: {
    Headers,
    Contents,
    Cart
  },
  data () {
    return {
      validasi: localStorage.getItem('token')
    }
  },
  methods: {
    validasiToken () {
      if (!this.validasi) {
        this.$router.push('/login')
      }
    },
    ...mapActions([
      'getAll'
    ])
  },
  mounted () {
    this.getAll()
  }
}
</script>

<style lang="css">
</style>
