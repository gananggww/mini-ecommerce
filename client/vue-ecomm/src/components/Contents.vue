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
              <div class="header">{all.deskripsi.nama}</div>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapState([
      'allGoods'
    ])
  },
  computed: {
    all () {
      return this.allGoods()
    }
  }
}
</script>

<style>
#baru {
  text-align: center;
}
</style>
