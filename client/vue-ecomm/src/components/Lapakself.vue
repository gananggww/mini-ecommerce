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
    <div class="column" v-for="(all, index) in self">
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
            <button @click="goDetail(all._id)" class="ui blue right floated tiny button" type="button" name="button">Detail</button>
          </div>
          <button @click="removeSelf(all._id, index)" class="ui basic center aligned button" type="button" name="button"><i class="trash large outline icon"/></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapState([
      'goodsById'
    ]),
    ...mapActions([
      'getDeleteSelf'
    ]),
    removeSelf (id, idx) {
      var payload = {
        id: id,
        idx: idx
      }
      this.getDeleteSelf(payload)
    }
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
