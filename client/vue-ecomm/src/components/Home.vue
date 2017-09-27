<template lang="html">
  <div>
    <Header></Header>

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
              <Content></Content>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Cart from '@/components/Cart'
export default {
  components: {
    Header,
    Content,
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
    }
  },
  mounted () {
    // this.validasiToken()
  }
}
</script>

<style lang="css">
</style>
