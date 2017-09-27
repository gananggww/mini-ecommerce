<template lang="html">
  <div>
    <Header></Header>

    <div class="ui segment container">

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
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
    this.validasiToken()
  }
}
</script>

<style lang="css">
</style>
