<template lang="html">
  <div class="ui stackable four column grid">
    <div class="one column row">
      <div class="column">
        <div class="ui fluid action input">
          <input type="text" placeholder="Search...">
          <div class="ui button"> <i class="search icon"></i>Search</div>
        </div>
      </div>
    </div>
    <div class="column" v-for="all in self">
      <div class="ui link cards" >
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
              <i class="user icon"></i>
              xxx
            </span>
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
      'goodsById'
    ])
  },
  computed: {
    self () {
      return this.goodsById()
    }
  }
}
</script>

<style lang="css">
</style>
