<template lang="html">
  <div class="">
    <form class="ui form">
      <h4 class="ui dividing header">Shipping Information</h4>
      <div class="field">
        <label>Alamat</label>
        <div class="two wide fields">
          <div class="field">
            <input v-model="transaksiData.alamat" type="text" placeholder="Name">
          </div>
          <div class="field">
            <input v-model="transaksiData.telp" type="text" placeholder="Telp">
          </div>
        </div>
      </div>
       <h4 class="ui dividing header"></h4>
      <div @click= "submit()" class="ui button" tabindex="0">Submit Order</div>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      transaksiData: {
        // orderList: this.order,
        alamat: '',
        telp: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'postTrans'
    ]),
    ...mapState([
      'cartToTrans'
    ]),
    submit () {
      var payload = {
        dataa: this.order,
        ordering: this.transaksiData
      }
      console.log(payload)
      this.postTrans(payload)
    }
  },
  computed: {
    order () {
      return this.cartToTrans()
    }
  }
}
</script>

<style lang="css">
</style>
