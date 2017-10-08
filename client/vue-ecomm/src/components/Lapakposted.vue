<template lang="html">
  <div class="">
    <div class="ui items">
      <div class="item">
        <div v-if="hasilPosting.img !== null" class="ui large image">
          <img :src="hasilPosting.img">
        </div>
        <div class="content">
          <a class="header">{{hasilPosting.nama}}</a>
          <div class="meta">
            <span class="cinema">{{hasilPosting.seller}}</span>
          </div>
          <div class="description">
            <p>{{hasilPosting.deskripsi}}</p>
          </div>
          <div class="extra">
            <div class="ui label">IMAX</div>
            <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    ...mapState([
      'postingGood'
    ])
  },
  computed: {
    hasilPosting () {
      return this.postingGood()
    }
  },
  mounted () {
    console.log(this.$router.app._route.fullPath)
    // console.log(this.$router.push)
  }
}
</script>

<style lang="css">
</style>
