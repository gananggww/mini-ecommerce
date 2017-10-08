<template lang="html">
  <div>
    <Headers/>
    <div class="ui container">
      <div class="ui segment">
        <Formlapak/>
      </div>
      <div class="ui segment">
        <Lapakposted/>
      </div>
      <div class="ui segment">
        <Lapakself/>
      </div>
    </div>
  </div>
</template>

<script>
import Lapakposted from '@/components/Lapakposted'
import Formlapak from '@/components/Formlapak'
import Lapakself from '@/components/Lapakself'
import Headers from '@/components/Headers'
import {mapActions} from 'vuex'
export default {
  components: {
    Lapakposted,
    Formlapak,
    Lapakself,
    Headers
  },
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    ...mapActions([
      'getById'
    ]),
    validasi () {
      if (this.token === null) {
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.getById()
    this.validasi()
  }
}
</script>

<style lang="css">
</style>
