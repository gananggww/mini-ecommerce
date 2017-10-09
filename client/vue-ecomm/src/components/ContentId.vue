<template lang="html">
  <div class="">
    <div class="ui items">
      <div class="item">
        <div v-if="dataa[0].img !== null" class="ui medium image">
          <img :src="dataa[0].img">
        </div>
        <div class="content">
          <a class="header">{{dataa[0].nama}}</a>
          <div class="meta">
            <span class="header">
              <b>
              Rp.{{dataa[0].harga}}
              </b>
            </span>
          </div>
          <div class="description">
            <p>{{dataa[0].deskripsi}}</p>
          </div>
          <!-- <div class="extra">
            <div class="ui label">IMAX</div>
            <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
          </div> -->
          <div class="ui label">
            <img :src="dataa[0].seller.img">
            {{dataa[0].seller.name}}
          </div>
        </div>
      </div>
      <h4 class="ui dividing header"></h4>
      <button @click="addCart(dataa[0])" class="ui fluid button green" type="button" name="button">Add to cart</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getId'
    ]),
    ...mapState([
      'goodId'
    ]),
    ...mapMutations([
      'setCartTemp'
    ]),
    addCart (all) {
      // console.log(all)
      this.setCartTemp(all)
    }
  },
  mounted () {
    // console.log(this.id)
    this.getId(this.id)
  },
  computed: {
    dataa () {
      return this.goodId()
    }
  },
  watch: {
    id () {
      this.getId(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
