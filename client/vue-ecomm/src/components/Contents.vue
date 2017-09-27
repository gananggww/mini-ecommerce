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
      <div class="column">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="https://semantic-ui.com/images/wireframe/image.png">
            </div>
            <div class="content">
              <div class="header">Sepeda Putar</div>
              <div class="meta">
                <a>Bandung</a>
              </div>
              <div class="description">
                Matthew is an interior designer living in New York.
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
      <div class="column">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="https://semantic-ui.com/images/wireframe/image.png">
            </div>
            <div class="content">
              <div class="header">Sepeda Putar</div>
              <div class="meta">
                <a>Bandung</a>
              </div>
              <div class="description">
                Matthew is an interior designer living in New York.
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
      <div class="column">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="https://semantic-ui.com/images/wireframe/image.png">
            </div>
            <div class="content">
              <div class="header">Sepeda Putar</div>
              <div class="meta">
                <a>Bandung</a>
              </div>
              <div class="description">
                Matthew is an interior designer living in New York.
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
      <div class="column">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="https://semantic-ui.com/images/wireframe/image.png">
            </div>
            <div class="content">
              <div class="header">Sepeda Putar</div>
              <div class="meta">
                <a>Bandung</a>
              </div>
              <div class="description">
                Matthew is an interior designer living in New York.
              </div>
            </div>
            <div class="extra content">
              <span>
                <i class="user icon"></i>
                xxx
              </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'getGoods'
    ])
  },
  computed: {
    quest () {
      return this.$store.state.list
    }
  },
  mounted () {
    this.getGoods()
  }
}
</script>

<style>
#baru {
  text-align: center;
}
</style>
